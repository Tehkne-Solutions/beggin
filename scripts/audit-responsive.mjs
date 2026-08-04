import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const warnings = [];

const criticalViewports = [390, 430, 768, 1024, 1360, 1920];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const header = read('src/components/layout/Header.tsx');
const floatingActions = read('src/components/common/FloatingActions.tsx');
const heroSection = read('src/components/home/hero/HeroSection.tsx');
const heroText = read('src/components/home/hero/HeroTextBlock.tsx');
const heroBottle = read('src/components/home/hero/HeroBottleStage.tsx');
const experienceCarousel = read('src/components/experience/ExperienceCarousel.tsx');
const footer = read('src/components/layout/Footer.tsx');

// Header: desktop navigation must not compete for width in tablet/intermediate layouts.
assert(
  header.includes('xl:flex') && header.includes('xl:hidden'),
  'Header deve manter navegação desktop somente em xl e menu compacto abaixo de xl.',
);
assert(
  header.includes('whitespace-nowrap'),
  'Itens do menu desktop devem impedir quebra de linha para evitar sobreposição.',
);
assert(
  header.includes('max-h-[calc(100svh-76px)]') && header.includes('overflow-y-auto'),
  'Menu móvel deve respeitar a altura do viewport e permitir rolagem quando necessário.',
);

// Floating actions: no CTA may overlap the consent banner.
assert(
  floatingActions.includes('!isAccepted ?') && floatingActions.includes('isAccepted ? ('),
  'Ações flutuantes devem aparecer somente após o consentimento para não sobrepor o banner.',
);

// Hero: mobile needs an explicit layout rather than inheriting desktop geometry.
assert(
  heroSection.includes('max-md:min-h-[820px]') && heroSection.includes('max-md:h-[820px]'),
  'Hero precisa preservar altura móvel explícita para separar texto e produto.',
);
assert(
  heroText.includes('max-md:left-5') && heroText.includes('max-md:right-5') && heroText.includes('max-md:w-auto'),
  'Texto do Hero precisa ocupar largura fluida no mobile.',
);
assert(
  heroBottle.includes('max-md:left-1/2') && heroBottle.includes('max-md:w-[360px]') && heroBottle.includes('max-md:h-[408px]'),
  'Produto principal do Hero precisa usar geometria móvel dedicada.',
);

// Images: Experience carousel is the primary client-reported crop/distortion case.
assert(
  experienceCarousel.includes('aspect-[4/3]') && experienceCarousel.includes('object-cover object-center'),
  'Carrossel da BEG Experience deve preservar aspect ratio 4:3 e crop central.',
);
assert(
  !experienceCarousel.includes('object-fill'),
  'Carrossel da BEG Experience não pode esticar imagens com object-fill.',
);

// Footer: mobile-safe wrapping for legal/social content.
assert(
  footer.includes('flex-wrap gap-3') && footer.includes('sm:flex-row'),
  'Footer deve permitir quebra responsiva dos ícones e reorganização do rodapé no mobile.',
);

// Guard common anti-patterns on the critical files.
for (const [file, source] of [
  ['Header.tsx', header],
  ['FloatingActions.tsx', floatingActions],
  ['HeroSection.tsx', heroSection],
  ['HeroTextBlock.tsx', heroText],
  ['HeroBottleStage.tsx', heroBottle],
  ['ExperienceCarousel.tsx', experienceCarousel],
  ['Footer.tsx', footer],
]) {
  if (/\bobject-fill\b/.test(source)) {
    failures.push(`${file}: object-fill é proibido por risco de distorção.`);
  }
  if (/min-w-\[(?:[4-9]\d\d|\d{4,})px\]/.test(source)) {
    warnings.push(`${file}: min-width fixa elevada encontrada; revisar visualmente em 390/430px.`);
  }
}

console.log('\nBEG responsive audit');
console.log('====================');
console.log(`Viewports críticos documentados: ${criticalViewports.join(', ')}px`);
console.log(`Falhas: ${failures.length}`);
console.log(`Avisos: ${warnings.length}`);

if (warnings.length) {
  console.log('\nAvisos não bloqueantes:');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (failures.length) {
  console.error('\nFalhas bloqueantes:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('\nContrato responsivo aprovado.');
