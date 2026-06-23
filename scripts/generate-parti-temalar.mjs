/** PARTI kaynak dosyalarını üretir: Mat-T4..T7, Fen-T2, Fen-T3, Hayat-T1, İng-T1..T4, Türç-T3..T5 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { carpma } from './gorev-mat-tema4-questions.mjs';
import { cikarma220 } from './gorev-mat-tema3-questions.mjs';
import { tartma, uzunlukOlcme } from './gorev-tema4-questions.mjs';
import { basitKesirler, esitParcalaraBolme, yarimVeCeyrek } from './gorev-tema6-questions.mjs';
import { canlilar } from './gorev-fen-tema1-questions.mjs';
import { bitkilerTema2 } from './gorev-fen-tema2-questions.mjs';
import { dunyaVeEvren, havaDurumuVeMevsimler, saglikliYasamVeCevre } from './gorev-fen3-questions.mjs';
import { aileDuygular } from './gorev-hayat-tema1-questions.mjs';
import { alfabeVeRenkler } from './gorev-ing1-questions.mjs';
import { sayilarVeSinifEsyalari } from './gorev-ing2-questions.mjs';
import { eylemler, gunlerVeAylar, havaDurumu } from './gorev-ing3-questions.mjs';
import { giyimEsyalari, mevsimlerIng } from './gorev-ing-tema4-clothes-questions.mjs';
import { dinlemeVeKonusma, sozcukVeDilBilgisi, yazmaBecerileri } from './gorev-turkce3-questions.mjs';
import { kelimeVeAnlamBilgisiIleri, metinAnlamaVeYorumlama, yazmaVeAnlatimIleri } from './gorev-turkce4-questions.mjs';
import { yazTuruHikaye, yazTuruSiir } from './gorev-turkce5-questions.mjs';
import { olaySirasiMetin, olaySirasiZaman } from './gorev-turkce8-questions.mjs';

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

const matCikarma = cikarma220(karistir);
const matCarpma = carpma(karistir);
const matUzunluk = uzunlukOlcme(karistir);
const matTartma = tartma(karistir);
const matEsit = esitParcalaraBolme(karistir);
const matYarim = yarimVeCeyrek(karistir);
const matKesir = basitKesirler(karistir);
const fen = canlilar(karistir);
const fen2 = bitkilerTema2(karistir);
const fen3a = dunyaVeEvren(karistir);
const fen3b = havaDurumuVeMevsimler(karistir);
const fen3c = saglikliYasamVeCevre(karistir);
const hayat = aileDuygular(karistir);
const ing = alfabeVeRenkler(karistir);
const ing2 = sayilarVeSinifEsyalari(karistir);
const ing3a = gunlerVeAylar(karistir);
const ing3b = havaDurumu(karistir);
const ing3c = eylemler(karistir);
const ing4a = giyimEsyalari(karistir);
const ing4b = mevsimlerIng(karistir);
const turYazma = yazmaBecerileri(karistir);
const turDinleme = dinlemeVeKonusma(karistir);
const turSozcuk = sozcukVeDilBilgisi(karistir);
const turMetin = metinAnlamaVeYorumlama(karistir);
const turKelime = kelimeVeAnlamBilgisiIleri(karistir);
const turYazmaIleri = yazmaVeAnlatimIleri(karistir);
const turYazTuruHikaye = yazTuruHikaye(karistir);
const turYazTuruSiir = yazTuruSiir(karistir);
const turOlaySirasiMetin = olaySirasiMetin(karistir);
const turOlaySirasiZaman = olaySirasiZaman(karistir);

const matMd = [
  '# Dosya Adı: PARTI-MATEMATIK-TEMA3.md',
  '## Matematik — Tema 3: Çıkarma (2-20)',
  '',
  ...matCikarma.anlatim.ekranlar.map((e, i) => `### Çıkarma Anlatım ${i + 1}\n${e.metin}\n`),
  '## ÇIKARMA — ALIŞTIRMALAR (50)',
  ...matCikarma.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## ÇIKARMA — TEST (50)',
  ...matCikarma.test.map((s, i) => satir(s, i, 'test')),
].join('\n');

const matTema4Md = [
  '# Dosya Adı: PARTI-MATEMATIK-TEMA4.md',
  '## Matematik — Tema 4: Çarpma (1×1–10×10)',
  '',
  ...matCarpma.anlatim.ekranlar.map((e, i) => `### Çarpma Anlatım ${i + 1}\n${e.metin}\n`),
  '## ÇARPMA — ALIŞTIRMALAR (50)',
  ...matCarpma.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## ÇARPMA — TEST (50)',
  ...matCarpma.test.map((s, i) => satir(s, i, 'test')),
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

writeFileSync(join(root, 'PARTI-MATEMATIK-TEMA3.md'), matMd);
writeFileSync(join(root, 'PARTI-MATEMATIK-TEMA4.md'), matTema4Md);
writeFileSync(join(root, 'PARTI-MATEMATIK-TEMA5.md'), matTema5Md);

const matTema6Md = [
  '# Dosya Adı: PARTI-MATEMATIK-TEMA6.md',
  '## Matematik — Tema 6: Kesirler',
  '',
  ...matEsit.anlatim.ekranlar.map((e, i) => `### Eşit Parçalara Bölme Anlatım ${i + 1}\n${e.metin}\n`),
  '## EŞİT PARÇALARA BÖLME — ALIŞTIRMALAR (25)',
  ...matEsit.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## EŞİT PARÇALARA BÖLME — TEST (25)',
  ...matEsit.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...matYarim.anlatim.ekranlar.map((e, i) => `### Yarım ve Çeyrek Anlatım ${i + 1}\n${e.metin}\n`),
  '## YARIM VE ÇEYREK — ALIŞTIRMALAR (25)',
  ...matYarim.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## YARIM VE ÇEYREK — TEST (25)',
  ...matYarim.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...matKesir.anlatim.ekranlar.map((e, i) => `### Basit Kesirler Anlatım ${i + 1}\n${e.metin}\n`),
  '## BASİT KESİRLER — ALIŞTIRMALAR (25)',
  ...matKesir.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## BASİT KESİRLER — TEST (25)',
  ...matKesir.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-MATEMATIK-TEMA6.md'), matTema6Md);

writeFileSync(join(root, 'PARTI-HAYAT-TEMA1.md'), partiMd('Hayat Bilgisi — Tema 1: Aile ve Duygular', 'PARTI-HAYAT-TEMA1.md', [hayat]));
writeFileSync(join(root, 'PARTI-INGILIZCE-TEMA1.md'), partiMd('İngilizce — Tema 1: Alphabet and Colors', 'PARTI-INGILIZCE-TEMA1.md', [ing]));
writeFileSync(join(root, 'PARTI-INGILIZCE-TEMA2.md'), partiMd('İngilizce — Tema 2: Numbers and Classroom', 'PARTI-INGILIZCE-TEMA2.md', [ing2]));

const ingTema3Md = [
  '# Dosya Adı: PARTI-INGILIZCE-TEMA3.md',
  '## İngilizce — Tema 3: Days, Weather and Actions',
  '',
  ...ing3a.anlatim.ekranlar.map((e, i) => `### Günler ve Aylar Anlatım ${i + 1}\n${e.metin}\n`),
  '## GÜNLER VE AYLAR — ALIŞTIRMALAR (25)',
  ...ing3a.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## GÜNLER VE AYLAR — TEST (25)',
  ...ing3a.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...ing3b.anlatim.ekranlar.map((e, i) => `### Hava Durumu Anlatım ${i + 1}\n${e.metin}\n`),
  '## HAVA DURUMU — ALIŞTIRMALAR (25)',
  ...ing3b.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## HAVA DURUMU — TEST (25)',
  ...ing3b.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...ing3c.anlatim.ekranlar.map((e, i) => `### Eylemler Anlatım ${i + 1}\n${e.metin}\n`),
  '## EYLEMLER — ALIŞTIRMALAR (25)',
  ...ing3c.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## EYLEMLER — TEST (25)',
  ...ing3c.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-INGILIZCE-TEMA3.md'), ingTema3Md);

const ingTema4Md = [
  '# Dosya Adı: PARTI-INGILIZCE-TEMA4.md',
  '## İngilizce — Tema 4: Clothes & Seasons',
  '',
  ...ing4a.anlatim.ekranlar.map((e, i) => `### Giyim Eşyaları Anlatım ${i + 1}\n${e.metin}\n`),
  '## GİYİM EŞYALARI — ALIŞTIRMALAR (25)',
  ...ing4a.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## GİYİM EŞYALARI — TEST (25)',
  ...ing4a.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...ing4b.anlatim.ekranlar.map((e, i) => `### Mevsimler Anlatım ${i + 1}\n${e.metin}\n`),
  '## MEVSİMLER — ALIŞTIRMALAR (25)',
  ...ing4b.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## MEVSİMLER — TEST (25)',
  ...ing4b.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-INGILIZCE-TEMA4.md'), ingTema4Md);

writeFileSync(join(root, 'PARTI-MATEMATIK-TEMA7.md'), matTema6Md.replace(
  'PARTI-MATEMATIK-TEMA6.md',
  'PARTI-MATEMATIK-TEMA7.md',
).replace(
  'Matematik — Tema 6: Kesirler',
  'Matematik — Tema 7: Parça-Bütün',
));

writeFileSync(join(root, 'PARTI-FEN-TEMA2.md'), partiMd('Fen Bilimleri — Tema 2: Bitkiler', 'PARTI-FEN-TEMA2.md', [fen2]));

const fenTema3Md = [
  '# Dosya Adı: PARTI-FEN-TEMA3.md',
  '## Fen Bilimleri — Tema 3: Dünya, Hava ve Sağlıklı Yaşam',
  '',
  ...fen3a.anlatim.ekranlar.map((e, i) => `### Dünya ve Evren Anlatım ${i + 1}\n${e.metin}\n`),
  '## DÜNYA VE EVREN — ALIŞTIRMALAR (25)',
  ...fen3a.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## DÜNYA VE EVREN — TEST (25)',
  ...fen3a.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...fen3b.anlatim.ekranlar.map((e, i) => `### Hava Durumu ve Mevsimler Anlatım ${i + 1}\n${e.metin}\n`),
  '## HAVA DURUMU VE MEVSİMLER — ALIŞTIRMALAR (25)',
  ...fen3b.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## HAVA DURUMU VE MEVSİMLER — TEST (25)',
  ...fen3b.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...fen3c.anlatim.ekranlar.map((e, i) => `### Sağlıklı Yaşam ve Çevre Anlatım ${i + 1}\n${e.metin}\n`),
  '## SAĞLIKLI YAŞAM VE ÇEVRE — ALIŞTIRMALAR (25)',
  ...fen3c.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## SAĞLIKLI YAŞAM VE ÇEVRE — TEST (25)',
  ...fen3c.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-FEN-TEMA3.md'), fenTema3Md);

const turTema3Md = [
  '# Dosya Adı: PARTI-TURKCE-TEMA3.md',
  '## Türkçe — Tema 3: Yazma, Dinleme ve Sözcük Bilgisi',
  '',
  ...turYazma.anlatim.ekranlar.map((e, i) => `### Yazma Becerileri Anlatım ${i + 1}\n${e.metin}\n`),
  '## YAZMA BECERİLERİ — ALIŞTIRMALAR (25)',
  ...turYazma.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## YAZMA BECERİLERİ — TEST (25)',
  ...turYazma.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...turDinleme.anlatim.ekranlar.map((e, i) => `### Dinleme ve Konuşma Anlatım ${i + 1}\n${e.metin}\n`),
  '## DİNLEME VE KONUŞMA — ALIŞTIRMALAR (25)',
  ...turDinleme.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## DİNLEME VE KONUŞMA — TEST (25)',
  ...turDinleme.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...turSozcuk.anlatim.ekranlar.map((e, i) => `### Sözcük ve Dil Bilgisi Anlatım ${i + 1}\n${e.metin}\n`),
  '## SÖZCÜK VE DİL BİLGİSİ — ALIŞTIRMALAR (25)',
  ...turSozcuk.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## SÖZCÜK VE DİL BİLGİSİ — TEST (25)',
  ...turSozcuk.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-TURKCE-TEMA3.md'), turTema3Md);

const turTema4Md = [
  '# Dosya Adı: PARTI-TURKCE-TEMA4.md',
  '## Türkçe — Tema 4: Metin Anlama, Kelime Bilgisi ve Yazma',
  '',
  ...turMetin.anlatim.ekranlar.map((e, i) => `### Metin Anlama ve Yorumlama Anlatım ${i + 1}\n${e.metin}\n`),
  '## METİN ANLAMA VE YORUMLAMA — ALIŞTIRMALAR (25)',
  ...turMetin.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## METİN ANLAMA VE YORUMLAMA — TEST (25)',
  ...turMetin.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...turKelime.anlatim.ekranlar.map((e, i) => `### Kelime ve Anlam Bilgisi İleri Anlatım ${i + 1}\n${e.metin}\n`),
  '## KELİME VE ANLAM BİLGİSİ İLERİ — ALIŞTIRMALAR (25)',
  ...turKelime.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## KELİME VE ANLAM BİLGİSİ İLERİ — TEST (25)',
  ...turKelime.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...turYazmaIleri.anlatim.ekranlar.map((e, i) => `### Yazma ve Anlatım İleri Anlatım ${i + 1}\n${e.metin}\n`),
  '## YAZMA VE ANLATIM İLERİ — ALIŞTIRMALAR (25)',
  ...turYazmaIleri.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## YAZMA VE ANLATIM İLERİ — TEST (25)',
  ...turYazmaIleri.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-TURKCE-TEMA4.md'), turTema4Md);

const turTema5Md = [
  '# Dosya Adı: PARTI-TURKCE-TEMA5.md',
  '## Türkçe — Tema 5: Yazı Türleri',
  '',
  ...turYazTuruHikaye.anlatim.ekranlar.map((e, i) => `### Yazı Türü — Hikâye Anlatım ${i + 1}\n${e.metin}\n`),
  '## YAZI TÜRÜ — HİKÂYE — ALIŞTIRMALAR (25)',
  ...turYazTuruHikaye.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## YAZI TÜRÜ — HİKÂYE — TEST (25)',
  ...turYazTuruHikaye.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...turYazTuruSiir.anlatim.ekranlar.map((e, i) => `### Yazı Türü — Şiir Anlatım ${i + 1}\n${e.metin}\n`),
  '## YAZI TÜRÜ — ŞİİR — ALIŞTIRMALAR (25)',
  ...turYazTuruSiir.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## YAZI TÜRÜ — ŞİİR — TEST (25)',
  ...turYazTuruSiir.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-TURKCE-TEMA5.md'), turTema5Md);

const turTema8Md = [
  '# Dosya Adı: PARTI-TURKCE-TEMA8.md',
  '## Türkçe — Tema 8: Olayların Oluş Sırası',
  '',
  ...turOlaySirasiMetin.anlatim.ekranlar.map((e, i) => `### Olay Sırası — Metin Okuma Anlatım ${i + 1}\n${e.metin}\n`),
  '## OLAY SIRASI — METİN OKUMA — ALIŞTIRMALAR (25)',
  ...turOlaySirasiMetin.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## OLAY SIRASI — METİN OKUMA — TEST (25)',
  ...turOlaySirasiMetin.test.map((s, i) => satir(s, i, 'test')),
  '',
  ...turOlaySirasiZaman.anlatim.ekranlar.map((e, i) => `### Olay Sırası — Zaman ve Sıralama Anlatım ${i + 1}\n${e.metin}\n`),
  '## OLAY SIRASI — ZAMAN VE SIRALAMA — ALIŞTIRMALAR (25)',
  ...turOlaySirasiZaman.alistirma.map((s, i) => satir(s, i, 'alistirma')),
  '',
  '## OLAY SIRASI — ZAMAN VE SIRALAMA — TEST (25)',
  ...turOlaySirasiZaman.test.map((s, i) => satir(s, i, 'test')),
].join('\n');
writeFileSync(join(root, 'PARTI-TURKCE-TEMA8.md'), turTema8Md);

console.log(
  'PARTI-MATEMATIK-TEMA3.md:',
  matCikarma.alistirma.length + matCikarma.test.length,
  'soru',
);
console.log('PARTI-MATEMATIK-TEMA4.md:', matCarpma.alistirma.length + matCarpma.test.length + matBolme.alistirma.length + matBolme.test.length, 'soru');
console.log('PARTI-MATEMATIK-TEMA5.md:', matUzunluk.alistirma.length + matUzunluk.test.length + matTartma.alistirma.length + matTartma.test.length, 'soru');
console.log(
  'PARTI-MATEMATIK-TEMA6.md:',
  matEsit.alistirma.length + matEsit.test.length
    + matYarim.alistirma.length + matYarim.test.length
    + matKesir.alistirma.length + matKesir.test.length,
  'soru',
);
console.log('PARTI-HAYAT-TEMA1.md:', hayat.alistirma.length + hayat.test.length, 'soru');
console.log('PARTI-INGILIZCE-TEMA1.md:', ing.alistirma.length + ing.test.length, 'soru');
console.log('PARTI-INGILIZCE-TEMA2.md:', ing2.alistirma.length + ing2.test.length, 'soru');
console.log(
  'PARTI-INGILIZCE-TEMA3.md:',
  ing3a.alistirma.length + ing3a.test.length
    + ing3b.alistirma.length + ing3b.test.length
    + ing3c.alistirma.length + ing3c.test.length,
  'soru',
);
console.log('PARTI-FEN-TEMA1.md zaten mevcut (generate-parti-fen-tema1.mjs ile)');
console.log('PARTI-FEN-TEMA2.md:', fen2.alistirma.length + fen2.test.length, 'soru');
console.log(
  'PARTI-FEN-TEMA3.md:',
  fen3a.alistirma.length + fen3a.test.length
    + fen3b.alistirma.length + fen3b.test.length
    + fen3c.alistirma.length + fen3c.test.length,
  'soru',
);
console.log(
  'PARTI-TURKCE-TEMA3.md:',
  turYazma.alistirma.length + turYazma.test.length
    + turDinleme.alistirma.length + turDinleme.test.length
    + turSozcuk.alistirma.length + turSozcuk.test.length,
  'soru',
);
console.log(
  'PARTI-TURKCE-TEMA4.md:',
  turMetin.alistirma.length + turMetin.test.length
    + turKelime.alistirma.length + turKelime.test.length
    + turYazmaIleri.alistirma.length + turYazmaIleri.test.length,
  'soru',
);
console.log(
  'PARTI-TURKCE-TEMA5.md:',
  turYazTuruHikaye.alistirma.length + turYazTuruHikaye.test.length
    + turYazTuruSiir.alistirma.length + turYazTuruSiir.test.length,
  'soru',
);
console.log(
  'PARTI-TURKCE-TEMA8.md:',
  turOlaySirasiMetin.alistirma.length + turOlaySirasiMetin.test.length
    + turOlaySirasiZaman.alistirma.length + turOlaySirasiZaman.test.length,
  'soru',
);
console.log(
  'PARTI-INGILIZCE-TEMA4.md:',
  ing4a.alistirma.length + ing4a.test.length + ing4b.alistirma.length + ing4b.test.length,
  'soru',
);
console.log(
  'PARTI-MATEMATIK-TEMA7.md:',
  matEsit.alistirma.length + matEsit.test.length
    + matYarim.alistirma.length + matYarim.test.length
    + matKesir.alistirma.length + matKesir.test.length,
  'soru',
);
