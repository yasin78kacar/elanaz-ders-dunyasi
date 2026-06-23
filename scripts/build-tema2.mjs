/**
 * Sadece src/data/math/tema2.json üretir — tam generate-content çalıştırmadan.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { toplama120 } from './gorev-mat-tema2-questions.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function karistir(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const tema2 = {
  id: 'tema-2',
  baslik: 'Matematik — Tema 2 — Toplama (1-20)',
  konular: [toplama120(karistir)],
};

const outDir = join(__dirname, '../src/data/math');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'tema2.json'), JSON.stringify(tema2, null, 2));
console.log(
  'tema2.json yazıldı:',
  tema2.konular.map((k) => `${k.id} (${k.alistirma.length}+${k.test.length})`).join(', '),
);
