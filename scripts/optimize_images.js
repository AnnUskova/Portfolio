import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const assetsDir = path.join(projectRoot, 'client/src/assets');

console.log(`Scanning directory: ${assetsDir}`);

async function optimizeImages() {
  try {
    if (!fs.existsSync(assetsDir)) {
      console.error(`Directory not found: ${assetsDir}`);
      return;
    }
    
    const files = fs.readdirSync(assetsDir);
    let optimizedCount = 0;
    
    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const filePath = path.join(assetsDir, file);
        const stats = fs.statSync(filePath);
        
        // Only optimize if larger than 100KB
        if (stats.size > 100 * 1024) {
          const name = path.parse(file).name;
          const outputFilePath = path.join(assetsDir, `${name}.webp`);
          
          // Check if webp already exists to avoid re-processing or if we want to force
          // For now, let's just overwrite
          
          console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
          
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputFilePath);
            
          const newStats = fs.statSync(outputFilePath);
          console.log(`-> Created ${name}.webp (${(newStats.size / 1024 / 1024).toFixed(2)} MB)`);
          console.log(`-> Saved ${((stats.size - newStats.size) / 1024 / 1024).toFixed(2)} MB`);
          optimizedCount++;
        }
      }
    }
    console.log(`Optimization complete! Optimized ${optimizedCount} images.`);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
