import { access, readFile, readdir, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';

const root = resolve(process.argv[2] || '.');
const requiredPages = [
  'index.html',
  'descubrir.html',
  'comprender.html',
  'explorar.html',
  'quienes-somos.html'
];

await Promise.all(requiredPages.map((page) => access(resolve(root, page))));

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(path));
    else files.push(path);
  }
  return files;
}

function localTarget(value) {
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('data:')) return null;
  if (/^(?:https?:|mailto:|tel:|javascript:|\/\/)/i.test(trimmed)) return null;
  return decodeURIComponent(trimmed.split('#')[0].split('?')[0]);
}

const htmlFiles = (await listFiles(root)).filter((file) => extname(file).toLowerCase() === '.html');
const problems = [];
const referencePattern = /\b(?:href|src)=["']([^"']+)["']/gi;

for (const htmlPath of htmlFiles) {
  const html = await readFile(htmlPath, 'utf8');

  if (!/<title>[^<]+<\/title>/i.test(html)) {
    problems.push(`${htmlPath}: falta un título de página`);
  }
  if (/<!-- NUVIA_(?:HEADER|FOOTER) -->|\{\{|\{%/.test(html)) {
    problems.push(`${htmlPath}: contiene marcadores o sintaxis de plantilla sin resolver`);
  }

  for (const match of html.matchAll(referencePattern)) {
    const target = localTarget(match[1]);
    if (!target) continue;

    const targetPath = target.startsWith('/')
      ? resolve(root, target.slice(1))
      : resolve(dirname(htmlPath), target);

    if (targetPath !== root && !targetPath.startsWith(`${root}${sep}`)) {
      problems.push(`${htmlPath}: referencia fuera del sitio (${match[1]})`);
      continue;
    }

    try {
      const targetStat = await stat(targetPath);
      if (targetStat.isDirectory()) await access(resolve(targetPath, 'index.html'));
    } catch {
      problems.push(`${htmlPath}: falta ${match[1]}`);
    }
  }
}

if (problems.length) {
  throw new Error(`Referencias locales no válidas:\n${problems.join('\n')}`);
}

console.log(`Sitio estático verificado: ${htmlFiles.length} páginas y todas sus referencias locales.`);
