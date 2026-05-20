const sharp = require('sharp');

async function createMobileHero() {
  try {
    // Get metadata first
    const metadata = await sharp('public/images/home/beggin-home-hero-elemento-garrafa-principal.webp').metadata();
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

    // Create mobile version (900px width for mobile)
    await sharp('public/images/home/beggin-home-hero-elemento-garrafa-principal.webp')
      .resize({ width: 900 })
      .webp({ quality: 80 })
      .toFile('public/images/home/beggin-home-hero-elemento-garrafa-principal-mobile.webp');

    console.log('Mobile version created successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

createMobileHero();