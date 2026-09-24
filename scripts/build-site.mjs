import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const output = resolve(root, 'dist');

const pages = [
  'index.html',
  'descubrir.html',
  'comprender.html',
  'explorar.html',
  'quienes-somos.html'
];

const navByPage = {
  'descubrir.html': 'descubrir',
  'comprender.html': 'comprender',
  'explorar.html': 'explorar',
  'quienes-somos.html': 'quienes'
};

const headerTemplate = await readFile(resolve(root, 'src/includes/header.html'), 'utf8');
const footerTemplate = await readFile(resolve(root, 'src/includes/footer.html'), 'utf8');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const page of pages) {
  const source = await readFile(resolve(root, page), 'utf8');

  if (!source.includes('<!-- NUVIA_HEADER -->') || !source.includes('<!-- NUVIA_FOOTER -->')) {
    throw new Error(`${page}: faltan los marcadores de cabecera o footer compartidos`);
  }

  let header = headerTemplate;
  const navKey = navByPage[page];
  if (navKey) {
    header = header.replace(
      `data-nav-key="${navKey}"`,
      `data-nav-key="${navKey}" aria-current="page"`
    );
  }

  const built = source
    .replace('<!-- NUVIA_HEADER -->', header.trim())
    .replace('<!-- NUVIA_FOOTER -->', footerTemplate.trim());

  await writeFile(resolve(output, page), built, 'utf8');
}

await cp(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });
await writeFile(resolve(output, '.nojekyll'), '', 'utf8');

console.log(`Publicación preparada en dist/ con ${pages.length} páginas y assets compartidos.`);
