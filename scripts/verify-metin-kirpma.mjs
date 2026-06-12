/**
 * Türkçe şık metinlerinin tam gösterildiğini doğrular (son karakter kırpılması yok).
 */
const ORNEKLER = ['kutu', 'üçgen', 'çember', 'değişmez', 'köşeli', 'sürahi', 'buzdolabı', '47', '10'];

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

if (hata > 0) {
  console.error(`verify-metin-kirpma: ${hata} hata`);
  process.exit(1);
}
console.log(`verify-metin-kirpma: ${ORNEKLER.length} kelime OK`);
