import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images');
const outputDir = path.resolve('public/images-optimized');

const supportedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp']);

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();

    if (supportedExtensions.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getRelativeOutputPath(file, newExtension) {
  const relative = path.relative(inputDir, file);
  const parsed = path.parse(relative);

  return path.join(outputDir, parsed.dir, `${parsed.name}${newExtension}`);
}

async function optimizeImage(file) {
  const metadata = await sharp(file).metadata();

  const avifOutput = getRelativeOutputPath(file, '.avif');
  const webpOutput = getRelativeOutputPath(file, '.webp');

  await ensureDir(path.dirname(avifOutput));
  await ensureDir(path.dirname(webpOutput));

  const base = sharp(file, {
    animated: true,
  }).rotate();

  const resizeOptions = {
    withoutEnlargement: true,
  };

  const maxWidth = metadata.width && metadata.width > 2200 ? 2200 : undefined;

  await base
    .clone()
    .resize(maxWidth ? { width: maxWidth, ...resizeOptions } : undefined)
    .avif({
      quality: 62,
      effort: 6,
    })
    .toFile(avifOutput);

  await base
    .clone()
    .resize(maxWidth ? { width: maxWidth, ...resizeOptions } : undefined)
    .webp({
      quality: 78,
      effort: 6,
    })
    .toFile(webpOutput);

  console.log(`Optimized: ${path.relative(process.cwd(), file)}`);
}

async function main() {
  await ensureDir(outputDir);

  const files = await walk(inputDir);

  for (const file of files) {
    try {
      await optimizeImage(file);
    } catch (error) {
      console.error(`Failed: ${file}`);
      console.error(error);
    }
  }

  console.log(`Done. Optimized images saved to ${path.relative(process.cwd(), outputDir)}`);
}

main();