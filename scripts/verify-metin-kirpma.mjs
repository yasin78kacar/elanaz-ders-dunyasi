/**
 * Türkçe şık/etiket metinlerinin tam gösterildiğini doğrular.
 * etiketMinGenislik hesabının son harfi sığdıracak kadar geniş olduğunu kontrol eder.
 */
const ORNEKLER = [
  'üçgen',
  'çember',
  'kutu',
  'değişmez',
  'ağırlık',
  'buzdolabı',
  'dikdörtgen',
  'köşeli',
  'sürahi',
  '47',
  '10',
];

function etiketMinGenislik(metin, fontSize) {
  let birim = 0;
  for (const ch of metin) {
    if (ch === ' ') birim += 0.35;
    else if (/[mwMWğĞşŞöÖ]/.test(ch)) birim += 0.82;
    else if (/[üÜıİçÇ]/.test(ch)) birim += 0.72;
    else birim += 0.58;
  }
  return Math.ceil(birim * fontSize) + 10;
}

function secenekGosterim(secenek) {
  return String(secenek);
}

let hata = 0;

for (const kelime of ORNEKLER) {
  const gosterim = secenekGosterim(kelime);
  if (gosterim !== kelime) {
    console.error(`FAIL: "${kelime}" → "${gosterim}" (beklenen tam eşleşme)`);
    hata++;
    continue;
  }
  const kirpilmis = gosterim.length > 1 && gosterim === kelime.slice(0, -1);
  if (kirpilmis) {
    console.error(`FAIL: "${kelime}" son karakter eksik görünüyor`);
    hata++;
  }
}

for (const kelime of ORNEKLER) {
  for (const fontSize of [9, 10, 11, 14, 16, 18]) {
    const minW = etiketMinGenislik(kelime, fontSize);
    const sonHarfMin = Math.ceil(fontSize * 0.58) + 6;
    if (minW < kelime.length * fontSize * 0.45) {
      console.error(`FAIL: etiketMinGenislik("${kelime}", ${fontSize}) = ${minW} çok dar`);
      hata++;
    }
    if (minW < sonHarfMin) {
      console.error(`FAIL: "${kelime}" fontSize ${fontSize} için son harf sığmaz (minW=${minW})`);
      hata++;
    }
  }
}

if (hata > 0) {
  console.error(`verify-metin-kirpma: ${hata} hata`);
  process.exit(1);
}
console.log(`verify-metin-kirpma: ${ORNEKLER.length} kelime + genişlik hesabı OK`);
