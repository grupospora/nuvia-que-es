import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.argv[2] || '.');
const pages = [
  'index.html',
  'descubrir.html',
  'comprender.html',
  'explorar.html',
  'quienes-somos.html'
];

await Promise.all([
  ...pages.map((page) => access(resolve(root, page))),
  access(resolve(root, 'src/includes/header.html')),
  access(resolve(root, 'src/includes/footer.html')),
  access(resolve(root, 'assets/css/styles.css')),
  access(resolve(root, 'assets/css/footer.css'))
]);

const problems = [];

for (const page of pages) {
  const html = await readFile(resolve(root, page), 'utf8');

  if (!/<title>[^<]+<\/title>/i.test(html)) {
    problems.push(`${page}: falta un título de página`);
  }
  if (!/<meta\s+name=["']description["']\s+content=["'][^"']+["']/i.test(html)) {
    problems.push(`${page}: falta meta description`);
  }
  if ((html.match(/<!-- NUVIA_HEADER -->/g) || []).length !== 1) {
    problems.push(`${page}: debe contener exactamente un marcador NUVIA_HEADER`);
  }
  if ((html.match(/<!-- NUVIA_FOOTER -->/g) || []).length !== 1) {
    problems.push(`${page}: debe contener exactamente un marcador NUVIA_FOOTER`);
  }
  if (/\{\{|\{%|^---$/m.test(html)) {
    problems.push(`${page}: contiene sintaxis residual de Jekyll/Liquid`);
  }
}

const header = await readFile(resolve(root, 'src/includes/header.html'), 'utf8');
const footer = await readFile(resolve(root, 'src/includes/footer.html'), 'utf8');

for (const key of ['descubrir', 'comprender', 'explorar', 'quienes']) {
  if (!header.includes(`data-nav-key="${key}"`)) {
    problems.push(`header compartido: falta data-nav-key="${key}"`);
  }
}

if (/\{\{|\{%/.test(header + footer)) {
  problems.push('Los componentes compartidos contienen sintaxis residual de Jekyll/Liquid');
}

if (problems.length) {
  throw new Error(`Validación de fuente fallida:\n${problems.join('\n')}`);
}

console.log(`Fuente verificada: ${pages.length} páginas, cabecera y footer compartidos.`);
