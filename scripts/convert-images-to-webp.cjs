#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ASSETS_DIR = path.join(__dirname, '../public/assets');

// Fonction pour convertir une image en WebP
function convertToWebP(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  
  // Ignorer les fichiers déjà en WebP
  if (ext === '.webp') {
    return;
  }
  
  // Ne convertir que les JPG et PNG
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }
  
  const outputPath = inputPath.replace(ext, '.webp');
  
  // Vérifier si le fichier WebP existe déjà
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${path.basename(inputPath)} (WebP already exists)`);
    return;
  }
  
  try {
    // Utiliser ImageMagick ou cwebp si disponible
    try {
      // Essayer avec cwebp d'abord (meilleure qualité)
      execSync(`cwebp -q 90 "${inputPath}" -o "${outputPath}"`, { stdio: 'ignore' });
      console.log(`✅ Converted ${path.basename(inputPath)} to WebP`);
    } catch (e) {
      // Fallback sur ImageMagick
      execSync(`convert "${inputPath}" -quality 90 "${outputPath}"`, { stdio: 'ignore' });
      console.log(`✅ Converted ${path.basename(inputPath)} to WebP (ImageMagick)`);
    }
  } catch (error) {
    console.error(`❌ Failed to convert ${path.basename(inputPath)}: ${error.message}`);
  }
}

// Fonction pour parcourir récursivement un dossier
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else {
      convertToWebP(filePath);
    }
  });
}

console.log('🚀 Starting WebP conversion...\n');
console.log(`📁 Processing directory: ${ASSETS_DIR}\n`);

if (!fs.existsSync(ASSETS_DIR)) {
  console.error(`❌ Assets directory not found: ${ASSETS_DIR}`);
  process.exit(1);
}

processDirectory(ASSETS_DIR);

console.log('\n✨ WebP conversion completed!');
console.log('💡 Tip: Update your HTML/JSX to use <picture> tags with WebP sources');

