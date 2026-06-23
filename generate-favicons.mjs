import sharp from "sharp";

async function generate() {
  await sharp("./public/brand/tavaro-logo.png")
    .resize(16, 16)
    .png()
    .toFile("./public/brand/favicon-16x16.png");

  await sharp("./public/brand/tavaro-logo.png")
    .resize(32, 32)
    .png()
    .toFile("./public/brand/favicon-32x32.png");

  await sharp("./public/brand/tavaro-logo.png")
    .resize(180, 180)
    .png()
    .toFile("./public/brand/apple-touch-icon.png");

  console.log("Favicons generated successfully.");
}

generate().catch(console.error);