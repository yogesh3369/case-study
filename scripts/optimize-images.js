const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/little-big-dots');
const outputDir = path.join(__dirname, '../../public/optimized-images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  'final-wireframes.png',
  'wireframes-iteration-1.png',
  'wireframes-iteration-2.png',
  'n8n-automation-screenshot.png'
];

async function optimizeImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const outputFilename = filename.replace(/\.(png|jpg|jpeg)$/, '.webp');
  const outputPath = path.join(outputDir, outputFilename);
  
  try {
    await sharp(inputPath)
      .resize(2000, 2000, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size / 1024;
    const optimizedSize = fs.statSync(outputPath).size / 1024;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ ${filename}: ${originalSize.toFixed(2)}KB → ${optimizedSize.toFixed(2)}KB (${savings}% savings)`);
    
    return {
      original: filename,
      optimized: outputFilename,
      originalSize,
      optimizedSize,
      savings
    };
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error);
    return null;
  }
}

async function main() {
  console.log('🔄 Optimizing images...\n');
  
  const results = [];
  for (const image of images) {
    const result = await optimizeImage(image);
    if (result) results.push(result);
  }
  
  console.log('\n✨ Optimization complete!');
  
  // Create a mapping file for easy reference
  const mapping = {};
  results.forEach(result => {
    mapping[result.original] = `/optimized-images/${result.optimized}`;
  });
  
  fs.writeFileSync(
    path.join(outputDir, 'image-mapping.json'),
    JSON.stringify(mapping, null, 2)
  );
  
  console.log('📝 Created image mapping at optimized-images/image-mapping.json');
}

main().catch(console.error);
