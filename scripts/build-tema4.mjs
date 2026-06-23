/**
 * Sadece src/data/math/tema4.json üretir — tam generate-content çalıştırmadan.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { carpma } from './gorev-mat-tema4-questions.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function karistir(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const tema4 = {
  id: 'tema-4',
  baslik: 'Matematik — Tema 4 — Çarpma (1×1–10×10)',
  konular: [carpma(karistir)],
};

const outDir = join(__dirname, '../src/data/math');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'tema4.json'), JSON.stringify(tema4, null, 2));
console.log(
  'tema4.json yazıldı:',
  tema4.konular.map((k) => `${k.id} (${k.alistirma.length}+${k.test.length})`).join(', '),
);
