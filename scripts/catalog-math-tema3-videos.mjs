/**
 * assets/videos/math-tema3/index.json + MP4 dosyalarından Metro require haritası üretir.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const videoDir = join(__dirname, '../assets/videos/math-tema3');
const indexPath = join(videoDir, 'index.json');
const generatedFile = join(__dirname, '../src/assets/mathTema3Videos.generated.ts');

function escapeForTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function generate() {
  const index = JSON.parse(readFileSync(indexPath, 'utf8'));
  const filesOnDisk = new Set(
    existsSync(videoDir)
      ? readdirSync(videoDir).filter((f) => f.endsWith('.mp4'))
      : [],
  );

  const entries = [];
  const missing = [];

  for (const video of index.videos) {
    const file = video.videoFile;
    if (!filesOnDisk.has(file)) {
      missing.push(file);
      continue;
    }
    entries.push(
      `  '${escapeForTs(video.slug)}': require('../../assets/videos/math-tema3/${escapeForTs(file)}'),`,
    );
  }

  const generated = `/* eslint-disable */
// Otomatik üretilir — npm run catalog-math-tema3-videos

export const MATH_TEMA3_VIDEO_SOURCES: Record<string, number> = {
${entries.join('\n')}
};

export const MATH_TEMA3_VIDEO_COUNT = ${entries.length};
`;

  writeFileSync(generatedFile, generated, 'utf8');
  console.log(`catalog-math-tema3-videos: ${entries.length}/${index.videos.length} video bağlandı`);
  if (missing.length) {
    console.log(`  eksik MP4 (${missing.length}): ${missing.join(', ')}`);
  }
  console.log(`  → ${generatedFile}`);
  return { linked: entries.length, total: index.videos.length, missing };
}

generate();
