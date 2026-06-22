/** PARTI kaynak dosyalarını üretir: Mat-T4, Mat-T5, Fen-T1, Hayat-T1, İng-T1, İng-T2 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { carpma, bolme } from './gorev-mat-tema4-questions.mjs';
import { tartma, uzunlukOlcme } from './gorev-mat-tema5-questions.mjs';
import { canlilar } from './gorev-fen-tema1-questions.mjs';
import { bitkilerTema2 } from './gorev-fen-tema2-questions.mjs';
import { aileDuygular } from './gorev-hayat-tema1-questions.mjs';
import { alfabeVeRenkler } from './gorev-ing1-questions.mjs';
import { sayilarVeSinifEsyalari } from './gorev-ing2-questions.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function karistir(arr) {
  return [...arr];
}

function satir(s, i, tip) {
  const g = s.gorsel ? `[GÖRSEL: ${JSON.stringify(s.gorsel).slice(0, 60)}...]` : '';
  if (tip === 'alistirma') {
    return `${i + 1}. ${g} ${s.soru} (Cevap: ${s.dogruCevap})`;
  }
  const sec = (s.secenekler ?? []).map((x) => `${x}${x === s.dogruCevap ? ' ✅' : ''}`).join('  ');
  return `${i + 1}. ${g} ${s.soru}\n${sec}`;
}

function partiMd(baslik, dosyaAdi, konular) {
  const satirlar = [`# Dosya Adı: ${dosyaAdi}`, `## ${baslik}`, ''];
  for (const konu of konular) {
    konu.anlatim.ekranlar.forEach((e, i) => {
      satirlar.push(`### Anlatım ${i + 1}`, e.metin, '');
    });
    satirlar.push('## ALIŞTIRMALAR', '');
    satirlar.push(...konu.alistirma.map((s, i) => satir(s, i, 'alistirma')));
    satirlar.push('', '## TEST SORULARI', '');
    satirlar.push(...konu.test.map((s, i) => satir(s, i, 'test')));
    satirlar.push('');
  }
  return satirlar.join('\n');
}

const matCarpma = carpma(karistir);
const matBolme = bolme(karistir);
const matUzunluk = uzunlukOlcme(karistir);
const matTartma = tartma(karistir);
const fen = canlilar(karistir);
const fen2 = bitkilerTema2(karistir);
const hayat = aileDuygular(karistir);
const ing = alfabeVeRenkler(karistir);
const ing2 = sayilarVeSinifEsyalari(karistir);

const matMd = [
  '# Dosya Adı: PARTI-MATEMATIK-TEMA4.md',
  '## Matematik — Tema 4: Çarpma ve Bölme',
  '',
  ...matCarpma.anlatim.ekranlar.map((e, i) => `### Çarpma Anlatım ${i + 1}\n${e.metin}\n`),
  '## ÇARPMA — ALIŞTIRMALAR (25)',
  ...matCarpma.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## ÇARPMA — TEST (25)',
  ...matCarpma.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...matBolme.anlatim.ekranlar.map((e, i) => `### Bölme Anlatım ${i + 1}\n${e.metin}\n`),
  '## BÖLME — ALIŞTIRMALAR (25)',
  ...matBolme.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## BÖLME — TEST (25)',
  ...matBolme.test.map((s, i) => satir(s, i, 'test')),
].join('\n');

const matTema5Md = [
  '# Dosya Adı: PARTI-MATEMATIK-TEMA5.md',
  '## Matematik — Tema 5: Ölçü ve Tartı',
  '',
  ...matUzunluk.anlatim.ekranlar.map((e, i) => `### Uzunluk Anlatım ${i + 1}\n${e.metin}\n`),
  '## UZUNLUK ÖLÇME — ALIŞTIRMALAR (25)',
  ...matUzunluk.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## UZUNLUK ÖLÇME — TEST (25)',
  ...matUzunluk.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...matTartma.anlatim.ekranlar.map((e, i) => `### Tartma Anlatım ${i + 1}\n${e.metin}\n`),
  '## TARTMA — ALIŞTIRMALAR (25)',
  ...matTartma.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## TARTMA — TEST (25)',
  ...matTartma.test.map((s, i) => satir(s, i, 'test')),
].join('\n');

writeFileSync(join(root, 'PARTI-MATEMATIK-TEMA4.md'), matMd);
writeFileSync(join(root, 'PARTI-MATEMATIK-TEMA5.md'), matTema5Md);
writeFileSync(join(root, 'PARTI-HAYAT-TEMA1.md'), partiMd('Hayat Bilgisi — Tema 1: Aile ve Duygular', 'PARTI-HAYAT-TEMA1.md', [hayat]));
writeFileSync(join(root, 'PARTI-INGILIZCE-TEMA1.md'), partiMd('İngilizce — Tema 1: Alphabet and Colors', 'PARTI-INGILIZCE-TEMA1.md', [ing]));
writeFileSync(join(root, 'PARTI-INGILIZCE-TEMA2.md'), partiMd('İngilizce — Tema 2: Numbers and Classroom', 'PARTI-INGILIZCE-TEMA2.md', [ing2]));
writeFileSync(join(root, 'PARTI-FEN-TEMA2.md'), partiMd('Fen Bilimleri — Tema 2: Bitkiler', 'PARTI-FEN-TEMA2.md', [fen2]));

console.log('PARTI-MATEMATIK-TEMA4.md:', matCarpma.alistirma.length + matCarpma.test.length + matBolme.alistirma.length + matBolme.test.length, 'soru');
console.log('PARTI-MATEMATIK-TEMA5.md:', matUzunluk.alistirma.length + matUzunluk.test.length + matTartma.alistirma.length + matTartma.test.length, 'soru');
console.log('PARTI-HAYAT-TEMA1.md:', hayat.alistirma.length + hayat.test.length, 'soru');
console.log('PARTI-INGILIZCE-TEMA1.md:', ing.alistirma.length + ing.test.length, 'soru');
console.log('PARTI-INGILIZCE-TEMA2.md:', ing2.alistirma.length + ing2.test.length, 'soru');
console.log('PARTI-FEN-TEMA1.md zaten mevcut (generate-parti-fen-tema1.mjs ile)');
console.log('PARTI-FEN-TEMA2.md:', fen2.alistirma.length + fen2.test.length, 'soru');
