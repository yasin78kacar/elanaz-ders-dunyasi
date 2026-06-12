/**
 * assets/images/ Flow görsellerini tarar:
 * - src/assets/flowImages.generated.ts (Metro require haritası)
 * - src/assets/flowImages.ts (dosya listesi + semantik eşlemeler)
 */
import { readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '../assets/images');
const generatedFile = join(__dirname, '../src/assets/flowImages.generated.ts');
const manifestFile = join(__dirname, '../src/assets/flowImages.ts');

const GEOMETRI_KONULARI = [
  'geometrik-cisimler',
  'geometrik-cisim-modelleri',
  'geometrik-sekil-modelleri',
  'bicimsel-ozellikler',
];

const KONU_ONEK = {
  'sivi-olcme': 'g5m-',
  'bicimsel-ozellikler': 'g4m-',
  'geometrik-sekil-modelleri': 'g3m-',
  'geometrik-cisim-modelleri': 'g2m-',
};

/** Ana görseller — Flow uzun dosya adlarından semantik anahtarlar */
const SEMANTIC_FILES = {
  elanaz: 'A_cute_Turkish_girl_named_202606120924.jpeg',
  kaplar: 'Five_simple_containers_in_a_202606120924.jpeg',
  'geometri-nesneler': 'Eight_simple_objects_in_a_202606120924.jpeg',
};

/** İçerik gorsel kimliği → dosya adı deseni (ilk eşleşen) */
const CONTENT_ALIASES = [
  ['sayi-kartlari', /ten_number_cards/i],
  ['sayi-kart-47', /ten_number_cards/i],
  ['onluk-blok', /place_value_blocks/i],
  ['elma-gruplari', /ten_fruits_and_vegetables/i],
  ['cizim-kalemleri', /cozy_reading_corner/i],
  ['renk-karistirma', /eight_color_swatches/i],
  ['panoya-asilan-resim', /cozy_reading_corner/i],
  ['top', /orange_soccer_ball|soccer_ball/i],
  ['zar', /red_dice/i],
  ['konserve', /yellow_tin_can|tin_can/i],
  ['cadir', /green_camping_tent|camping_tent/i],
  ['davul', /blue_colorful_drum|colorful_drum/i],
  ['zil', /golden_cymbal|cymbal/i],
  ['hediye-kutusu', /purple_gift_box|gift_box/i],
  ['kitap', /school_objects/i],
  ['sut-kutusu', /shoe_box|brown_shoe/i],
  ['kure', /soccer_ball/i],
  ['silindir', /tin_can|drum/i],
  ['kup', /dice|gift_box|shoe_box/i],
];

/** Konu yedek görseli — geometri/sıvı dışı konular */
const TOPIC_FILE_PATTERNS = [
  ['ritmik-sayma', /colorful_number_line|repeating_patterns|winding_path/i],
  ['sayilari-okuma-yazma', /number_flashcards|ten_number_cards|100_number_grid/i],
  ['onluk-birlik', /place_value_blocks/i],
  ['okuma-kosesi', /cozy_reading_corner|classic_turkish_tale/i],
  ['geometrik-sekil-modelleri', /five_flat_geometric_shapes/i],
  ['geometrik-cisim-modelleri', /six_3d_geometric_shapes/i],
  ['bicimsel-ozellikler', /three_symmetry|comparison_symbols/i],
];

function listImages() {
  try {
    return readdirSync(imagesDir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort();
  } catch {
    return [];
  }
}

function findFile(files, pattern) {
  if (typeof pattern === 'string') return files.find((f) => f === pattern);
  return files.find((f) => pattern.test(f) && !f.includes(' (1)'));
}

function safeVar(i) {
  return `flowImg${i}`;
}

function generate() {
  const files = listImages();
  const fileToVar = new Map();
  const imports = [];
  const sourceByKey = new Map();

  files.forEach((file, i) => {
    const varName = safeVar(i);
    fileToVar.set(file, varName);
    imports.push(`import ${varName} from '../../assets/images/${file}';`);
    const stem = file.replace(/\.(jpe?g|png|webp)$/i, '').toLowerCase();
    sourceByKey.set(stem, varName);
    sourceByKey.set(file.toLowerCase(), varName);
  });

  const addAlias = (key, file) => {
    const v = fileToVar.get(file);
    if (v) sourceByKey.set(key.toLowerCase(), v);
  };

  for (const [key, filename] of Object.entries(SEMANTIC_FILES)) {
    const file = findFile(files, filename);
    if (file) addAlias(key, file);
  }

  const topicFallbacks = new Map();
  if (sourceByKey.has('kaplar')) topicFallbacks.set('sivi-olcme', sourceByKey.get('kaplar'));
  if (sourceByKey.has('geometri-nesneler')) {
    topicFallbacks.set('__geometri__', sourceByKey.get('geometri-nesneler'));
  }

  for (const [konuId, pattern] of TOPIC_FILE_PATTERNS) {
    const file = findFile(files, pattern);
    if (file) topicFallbacks.set(konuId, fileToVar.get(file));
  }

  for (const [contentKey, pattern] of CONTENT_ALIASES) {
    const file = findFile(files, pattern);
    if (file) addAlias(contentKey, file);
  }

  const characterVar = sourceByKey.get('elanaz');

  const uniqueVars = [...new Set(sourceByKey.values())];
  const keyEntries = [...sourceByKey.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, varName]) => `  '${key.replace(/'/g, "\\'")}': ${varName},`);

  const topicEntries = [...topicFallbacks.entries()].map(
    ([topic, varName]) => `  '${topic}': ${varName},`,
  );

  const generated = `/* eslint-disable */
// Otomatik üretilir — npm run catalog-images

${imports.join('\n')}

export const FLOW_IMAGE_COUNT = ${files.length};

export const FLOW_CHARACTER_SOURCE${characterVar ? '' : ': number | undefined'} = ${characterVar ?? 'undefined'};

export const FLOW_IMAGE_SOURCES: Record<string, number> = {
${keyEntries.join('\n')}
};

export const FLOW_TOPIC_FALLBACKS: Record<string, number> = {
${topicEntries.join('\n')}
};

export const FLOW_GEOMETRI_KONULARI = ${JSON.stringify(GEOMETRI_KONULARI)} as const;

export const FLOW_KONU_ONEK: Record<string, string> = ${JSON.stringify(KONU_ONEK)};
`;

  const manifest = `/* eslint-disable */
// Otomatik üretilir — npm run catalog-images
// Tüm Flow görsel dosyaları ve semantik eşlemeler.

export { FLOW_IMAGE_COUNT, FLOW_CHARACTER_SOURCE, FLOW_IMAGE_SOURCES, FLOW_TOPIC_FALLBACKS } from './flowImages.generated';

/** assets/images/ içindeki tüm görsel dosyaları (${files.length} adet) */
export const FLOW_IMAGE_FILES = ${JSON.stringify(files, null, 2)} as const;

/** Ana karakter ve konu yedek görselleri → dosya adı */
export const FLOW_SEMANTIC_FILES = ${JSON.stringify(SEMANTIC_FILES, null, 2)} as const;
`;

  writeFileSync(generatedFile, generated, 'utf8');
  writeFileSync(manifestFile, manifest, 'utf8');
  console.log(`catalog-flow-images: ${files.length} görsel`);
  console.log(`  → ${generatedFile}`);
  console.log(`  → ${manifestFile}`);
  return files.length;
}

generate();
