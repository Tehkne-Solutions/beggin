import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const warnings = [];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function walk(relativeDirectory) {
  const absoluteDirectory = path.join(root, relativeDirectory);
  if (!fs.existsSync(absoluteDirectory)) return [];

  return fs.readdirSync(absoluteDirectory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) return walk(relativePath);
    return /\.(ts|tsx|js|jsx|mjs)$/.test(entry.name) ? [relativePath] : [];
  });
}

const requiredRoutes = [
  'src/app/page.tsx',
  'src/app/produtos/page.tsx',
  'src/app/produtos/[slug]/page.tsx',
  'src/app/nossa-historia/page.tsx',
  'src/app/beg-experience/page.tsx',
  'src/app/agendamento/page.tsx',
  'src/app/premios/page.tsx',
  'src/app/sustentabilidade/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/politica-de-privacidade/page.tsx',
  'src/app/termos-de-uso/page.tsx',
];

for (const route of requiredRoutes) {
  if (!exists(route)) failures.push(`Rota obrigatória ausente: ${route}`);
}

const forbiddenPublicPhrases = [
  'conteúdo a validar',
  'estrutura preparada',
  'sob consulta',
  'a confirmar',
  'em preparação',
  'compra futura',
];

for (const sourceFile of [
  ...walk('src/app'),
  ...walk('src/components'),
  ...walk('src/data'),
]) {
  const source = read(sourceFile).toLocaleLowerCase('pt-BR');
  for (const phrase of forbiddenPublicPhrases) {
    if (source.includes(phrase)) {
      failures.push(`Conteúdo provisório encontrado em ${sourceFile}: “${phrase}”`);
    }
  }
}

const productsSource = read('src/data/products.ts');
const registrySource = read('src/data/verified-product-galleries.ts');
const galleryRendererSource = read('src/components/products/ProductGallery.tsx');

const productSlugs = new Set(
  [...productsSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]),
);
const registeredSlugs = new Set(
  [...registrySource.matchAll(/^\s{2}'([^']+)':\s*\[/gm)].map((match) => match[1]),
);

for (const slug of productSlugs) {
  if (!registeredSlugs.has(slug)) {
    failures.push(`Produto sem registro de galeria verificada: ${slug}`);
  }
}

for (const slug of registeredSlugs) {
  if (!productSlugs.has(slug)) {
    failures.push(`Galeria verificada aponta para produto inexistente: ${slug}`);
  }
}

if (galleryRendererSource.includes('product.gallery')) {
  failures.push('ProductGallery voltou a consumir product.gallery, que ainda contém dados históricos não verificados.');
}

if (!galleryRendererSource.includes('getVerifiedProductGallery')) {
  failures.push('ProductGallery não utiliza o registro de galerias verificadas.');
}

const brandLogoSource = read('src/components/brand/BrandLogo.tsx');
if (/Arial|Helvetica/.test(brandLogoSource)) {
  warnings.push('BrandLogo ainda é uma reconstrução tipográfica; substituir pelo SVG/PNG oficial quando o arquivo chegar.');
}

const sustainabilitySource = read('src/app/sustentabilidade/page.tsx');
const highlightedImages = [
  ...sustainabilitySource.matchAll(/image:\s*sustainabilityImages\.([A-Za-z0-9_]+)/g),
].map((match) => match[1]);
const duplicateHighlights = highlightedImages.filter(
  (image, index) => highlightedImages.indexOf(image) !== index,
);
if (duplicateHighlights.length > 0) {
  warnings.push(`Sustentabilidade ainda possui imagem repetida: ${[...new Set(duplicateHighlights)].join(', ')}.`);
}

for (const slug of ['beg-aged-negroni-refil-250ml', 'kit-tal-cha-beg-collab']) {
  const start = productsSource.indexOf(`slug: '${slug}'`);
  const next = productsSource.indexOf('\n  {', start + 1);
  const block = productsSource.slice(start, next === -1 ? undefined : next);
  if (start >= 0 && !/\n\s+price:\s*'/.test(block)) {
    warnings.push(`Preço comercial ainda não confirmado: ${slug}.`);
  }
}

console.log('\nBEG release audit');
console.log('=================');
console.log(`Rotas verificadas: ${requiredRoutes.length}`);
console.log(`Produtos registrados: ${productSlugs.size}`);
console.log(`Falhas: ${failures.length}`);
console.log(`Avisos: ${warnings.length}`);

if (warnings.length > 0) {
  console.log('\nAvisos não bloqueantes:');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (failures.length > 0) {
  console.error('\nFalhas bloqueantes:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('\nAuditoria bloqueante aprovada.');
