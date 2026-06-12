/**
 * assets/images/ içindeki Flow görsellerini tarar ve
 * src/assets/flowImages.generated.ts dosyasını üretir.
 *
 * Ana görseller:
 * - elanaz.jpeg — ana karakter
 * - kaplar.jpeg — Sıvı Ölçme konusu yedek görseli
 * - geometri-nesneler.jpeg — geometri konuları yedek görseli
 *
 * Diğer dosyalar dosya adına göre sahne/konu anahtarına eşlenir.
 */
import { readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '../assets/images');
const outFile = join(__dirname, '../src/assets/flowImages.generated.ts');

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

const MASTER = {
  elanaz: { kind: 'character' },
  kaplar: { kind: 'topic', topic: 'sivi-olcme' },
  'geometri-nesneler': { kind: 'topic', topic: '__geometri__' },
};

function stemFrom(filename) {
  return filename.replace(/\.(jpe?g|png|webp)$/i, '').toLowerCase();
}

function classify(stem) {
  if (MASTER[stem]) return MASTER[stem];
  if (stem.startsWith('g5m-') || stem.startsWith('kap-')) {
    return { kind: 'sahne', key: stem.startsWith('kap-') ? stem : stem };
  }
  if (stem.startsWith('g4m-')) return { kind: 'sahne', key: stem };
  if (stem.startsWith('g3m-')) return { kind: 'sahne', key: stem };
  if (stem.startsWith('g2m-')) return { kind: 'sahne', key: stem };
  if (stem.startsWith('geo-')) return { kind: 'sahne', key: stem.slice(4) };
  if (stem.includes('ritmik')) return { kind: 'topic', topic: 'ritmik-sayma', key: stem };
  if (stem.includes('onluk') || stem.includes('birlik')) {
    return { kind: 'topic', topic: 'onluk-birlik', key: stem };
  }
  if (stem.includes('sayi') || stem.includes('okuma-yazma') || stem.includes('sayilar')) {
    return { kind: 'topic', topic: 'sayilari-okuma-yazma', key: stem };
  }
  if (
    stem.includes('hikaye') ||
    stem.includes('boya') ||
    stem.includes('okuma-kosesi') ||
    stem.includes('kalem')
  ) {
    return { kind: 'topic', topic: 'okuma-kosesi', key: stem };
  }
  if (stem.includes('geometrik-cisim-modelleri')) {
    return { kind: 'topic', topic: 'geometrik-cisim-modelleri', key: stem };
  }
  if (stem.includes('geometrik-sekil')) {
    return { kind: 'topic', topic: 'geometrik-sekil-modelleri', key: stem };
  }
  if (stem.includes('bicimsel')) {
    return { kind: 'topic', topic: 'bicimsel-ozellikler', key: stem };
  }
  if (stem.includes('sivi') || stem.includes('olcme') || stem.includes('bardak') || stem.includes('surahi')) {
    return { kind: 'topic', topic: 'sivi-olcme', key: stem };
  }
  return { kind: 'sahne', key: stem };
}

function scanImages() {
  let files;
  try {
    files = readdirSync(imagesDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  } catch {
    files = [];
  }

  const sources = {};
  const topicFallbacks = {};
  let characterSource = null;

  for (const file of files.sort()) {
    const stem = stemFrom(file);
    const info = classify(stem);
    const varName = `img_${stem.replace(/[^a-z0-9]+/g, '_')}`;
    const relPath = `../../assets/images/${file}`;

    sources[stem] = { varName, relPath };

    if (info.kind === 'character') {
      characterSource = { varName, stem };
      continue;
    }
    if (info.kind === 'topic' && (stem === 'kaplar' || stem === 'geometri-nesneler')) {
      topicFallbacks[info.topic] = stem;
      continue;
    }
    if (info.kind === 'topic' && info.key && info.key !== stem) {
      sources[info.key] = { varName, relPath, alias: true };
    }
  }

  return { files, sources, topicFallbacks, characterSource };
}

function generate() {
  const { files, sources, topicFallbacks, characterSource } = scanImages();

  const imports = [];
  const sourceEntries = [];
  const seenVars = new Set();

  for (const [key, meta] of Object.entries(sources)) {
    if (seenVars.has(meta.varName)) continue;
    seenVars.add(meta.varName);
    imports.push(`import ${meta.varName} from '${meta.relPath}';`);
  }

  for (const [key, meta] of Object.entries(sources)) {
    sourceEntries.push(`  '${key}': ${meta.varName},`);
  }

  const topicEntries = Object.entries(topicFallbacks).map(
    ([topic, stem]) => `  '${topic}': ${sources[stem].varName},`,
  );

  const charLine = characterSource
    ? `export const FLOW_CHARACTER_SOURCE = ${characterSource.varName};`
    : 'export const FLOW_CHARACTER_SOURCE: number | undefined = undefined;';

  const body = `/* eslint-disable */
// Bu dosya otomatik üretilir — scripts/catalog-flow-images.mjs
// Görselleri assets/images/ altına ekledikten sonra: npm run catalog-images

${imports.join('\n')}

export const FLOW_IMAGE_COUNT = ${files.length};

${charLine}

export const FLOW_IMAGE_SOURCES: Record<string, number> = {
${sourceEntries.join('\n')}
};

export const FLOW_TOPIC_FALLBACKS: Record<string, number> = {
${topicEntries.join('\n')}
};

export const FLOW_GEOMETRI_KONULARI = ${JSON.stringify(GEOMETRI_KONULARI)} as const;

export const FLOW_KONU_ONEK: Record<string, string> = ${JSON.stringify(KONU_ONEK)};
`;

  writeFileSync(outFile, body, 'utf8');
  console.log(`catalog-flow-images: ${files.length} görsel → ${outFile}`);
  return files.length;
}

generate();
