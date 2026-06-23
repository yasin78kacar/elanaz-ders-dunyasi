/**
 * Sadece src/data/math/tema3.json üretir — tam generate-content çalıştırmadan.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { cikarma220 } from './gorev-mat-tema3-questions.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function karistir(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const tema3 = {
  id: 'tema-3',
  baslik: 'Matematik — Tema 3 — Çıkarma (2-20)',
  konular: [cikarma220(karistir)],
};

const outDir = join(__dirname, '../src/data/math');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'tema3.json'), JSON.stringify(tema3, null, 2));
console.log(
  'tema3.json yazıldı:',
  tema3.konular.map((k) => `${k.id} (${k.alistirma.length}+${k.test.length})`).join(', '),
);
