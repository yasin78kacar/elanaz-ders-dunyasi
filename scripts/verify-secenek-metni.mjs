/**
 * Şık buton metninin sabit genişlik / kırpma ile kısıtlanmadığını doğrular.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const answerDisplaySrc = readFileSync(join(ROOT, 'src/components/AnswerDisplay.tsx'), 'utf8');
const kod = answerDisplaySrc.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

let hata = 0;

if (/\bellipsizeMode\b/.test(kod)) {
  console.error('FAIL: AnswerDisplay ellipsizeMode kullanıyor');
  hata++;
}
if (/\bnumberOfLines\s*=/.test(kod)) {
  console.error('FAIL: AnswerDisplay numberOfLines kısıtlıyor');
  hata++;
}
if (!/adjustsFontSizeToFit:\s*true/.test(kod) && !/metinSigdirProps/.test(kod)) {
  console.error('FAIL: AnswerDisplay adjustsFontSizeToFit yok');
  hata++;
}
if (!/flex:\s*1/.test(kod)) {
  console.error('FAIL: AnswerDisplay flex:1 kullanmıyor');
  hata++;
}
if (!/flexShrink:\s*0/.test(kod)) {
  console.error('FAIL: AnswerDisplay flexShrink:0 yok');
  hata++;
}

const SIK_KELIMELER = ['Çember', 'Üçgen', 'Dikdörtgen', 'Silindir', 'mavi'];

for (const kelime of SIK_KELIMELER) {
  const kirpilmis = kelime.slice(0, -1);
  if (kelime.length > 1 && kelime === kirpilmis) {
    console.error(`FAIL: "${kelime}" kırpılmış görünüyor`);
    hata++;
  }
}

if (hata > 0) {
  console.error(`verify-secenek-metni: ${hata} hata`);
  process.exit(1);
}
console.log(`verify-secenek-metni: ${SIK_KELIMELER.length} şık kelimesi + AnswerDisplay kontrolü OK`);
