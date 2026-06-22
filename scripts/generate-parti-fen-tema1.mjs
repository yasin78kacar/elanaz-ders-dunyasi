/** PARTI-FEN-TEMA1.md kaynak dosyasını canlilar konusundan üretir. */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { canlilar } from './gorev-fen-tema1-questions.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const karistir = (arr) => [...arr];

const NESNE_ETIKET = {
  kedi: 'Kedi',
  kus: 'Kuş',
  balik: 'Balık',
  agac: 'Ağaç',
  cicek: 'Çiçek',
  kelebek: 'Kelebek',
  insan: 'İnsan',
  kopek: 'Köpek',
  inek: 'İnek',
  ordek: 'Ördek',
  ari: 'Arı',
  kurbağa: 'Kurbağa',
  kaya: 'Kaya',
  kitap: 'Kitap',
  kalem: 'Kalem',
  masa: 'Masa',
  tas: 'Taş',
  araba: 'Araba',
  top: 'Top',
  gunes: 'Güneş',
  su: 'Su',
  toprak: 'Toprak',
  sebze: 'Sebze',
  meyve: 'Meyve',
  yilan: 'Yılan',
  kaplumbaga: 'Kaplumbağa',
};

const ANLATIM_ETIKET = {
  'cc-anlatim-1': 'Canlılar ve cansızlar',
  'cc-anlatim-2': 'Canlıların yaşam özellikleri',
  'cc-anlatim-3': 'Canlı mı cansız mı nasıl anlarız',
  'bt-anlatim-1': 'Bitki parçaları',
  'bt-anlatim-2': 'Bitkilerin ihtiyaçları',
  'bt-anlatim-3': 'Bitkiler de canlıdır',
  'hv-anlatim-1': 'Hayvan grupları',
  'hv-anlatim-2': 'Hayvanların yaşam ortamları',
  'hv-anlatim-3': 'Hayvanların vücut örtüleri',
};

function gorselEtiket(gorsel) {
  if (!gorsel) return 'Canlılar';
  if (gorsel.mod === 'nesne') {
    const n = Array.isArray(gorsel.nesne) ? gorsel.nesne[0] : gorsel.nesne;
    return NESNE_ETIKET[n] ?? String(n);
  }
  if (gorsel.mod === 'anlatim') return ANLATIM_ETIKET[gorsel.sahne] ?? 'Fen anlatım';
  if (gorsel.mod === 'bitki') return gorsel.vurgu ? `Bitki — ${gorsel.vurgu}` : 'Bitki';
  if (gorsel.mod === 'hayvan') {
    const n = NESNE_ETIKET[gorsel.nesne] ?? gorsel.nesne;
    return gorsel.ozellik ? `${n} — ${gorsel.ozellik}` : n;
  }
  if (gorsel.mod === 'grup') {
    const liste = (gorsel.nesneler ?? []).map((n) => NESNE_ETIKET[n] ?? n).join(', ');
    return liste || 'Nesne grubu';
  }
  return 'Canlılar';
}

function alistirmaSatiri(s, i) {
  const g = `[GÖRSEL: ${gorselEtiket(s.gorsel)}]`;
  return `${i + 1}. ${g} ${s.soru} (Cevap: ${s.dogruCevap})`;
}

function testSatiri(s, i) {
  const g = `[GÖRSEL: ${gorselEtiket(s.gorsel)}]`;
  const sasirtma = s.sasirtma ? ' 🎭' : '';
  const secenekler = (s.secenekler ?? [])
    .map((sec) => {
      const dogru = sec === s.dogruCevap ? ' ✅' : '';
      return `${sec}${dogru}${sasirtma && sec !== s.dogruCevap ? ' 🎭' : ''}`;
    })
    .join('  ');
  return `${i + 1}. ${g} ${s.soru}\n${secenekler}`;
}

const konu = canlilar(karistir);
const satirlar = [
  '# Dosya Adı: PARTI-FEN-TEMA1.md',
  '## Fen Bilimleri — Tema 1: Canlılar',
  '',
  '### Sayfa 1: Canlılar ve Cansızlar',
  konu.anlatim.ekranlar[0].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[0].gorsel)}]`,
  '',
  '### Sayfa 2: Canlıların Yaşam Özellikleri',
  konu.anlatim.ekranlar[1].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[1].gorsel)}]`,
  '',
  '### Sayfa 3: Canlı mı Cansız mı?',
  konu.anlatim.ekranlar[2].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[2].gorsel)}]`,
  '',
  '### Sayfa 4: Bitkiler',
  konu.anlatim.ekranlar[3].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[3].gorsel)}]`,
  '',
  '### Sayfa 5: Bitkilerin İhtiyaçları',
  konu.anlatim.ekranlar[4].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[4].gorsel)}]`,
  '',
  '### Sayfa 6: Bitkiler de Canlıdır',
  konu.anlatim.ekranlar[5].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[5].gorsel)}]`,
  '',
  '### Sayfa 7: Hayvan Grupları',
  konu.anlatim.ekranlar[6].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[6].gorsel)}]`,
  '',
  '### Sayfa 8: Hayvanların Yaşam Ortamları',
  konu.anlatim.ekranlar[7].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[7].gorsel)}]`,
  '',
  '### Sayfa 9: Hayvanların Vücut Örtüleri',
  konu.anlatim.ekranlar[8].metin,
  `[GÖRSEL: ${gorselEtiket(konu.anlatim.ekranlar[8].gorsel)}]`,
  '',
  '## ALIŞTIRMALAR (50 Soru)',
  '',
  ...konu.alistirma.map(alistirmaSatiri),
  '',
  '## TEST SORULARI (50 Soru)',
  '',
  ...konu.test.map(testSatiri),
  '',
];

const hedef = join(__dirname, '../PARTI-FEN-TEMA1.md');
writeFileSync(hedef, satirlar.join('\n'));
console.log('PARTI-FEN-TEMA1.md yazıldı:', hedef);
console.log('Alıştırma:', konu.alistirma.length, '+ Test:', konu.test.length, '=', konu.alistirma.length + konu.test.length);
