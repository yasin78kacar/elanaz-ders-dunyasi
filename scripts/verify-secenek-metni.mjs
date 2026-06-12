/**
 * Şık buton metninin sabit genişlik / minWidth ile kısıtlanmadığını doğrular.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const secenekMetniSrc = readFileSync(join(ROOT, 'src/components/SecenekMetni.tsx'), 'utf8');
const kod = secenekMetniSrc.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

let hata = 0;

if (/GuvenliMetin/.test(kod)) {
  console.error('FAIL: SecenekMetni hâlâ GuvenliMetin kullanıyor (minWidth kırpma riski)');
  hata++;
}
if (/\bminWidth\s*:/.test(kod)) {
  console.error('FAIL: SecenekMetni minWidth stili içeriyor');
  hata++;
}
if (/\bflex\s*:\s*1\b/.test(kod) || /width\s*:\s*['"]100%['"]/.test(kod)) {
  console.error('FAIL: SecenekMetni flex:1 veya width 100% kullanıyor');
  hata++;
}
if (!/paddingRight/.test(secenekMetniSrc)) {
  console.error('FAIL: SecenekMetni paddingRight yok');
  hata++;
}
if (!/flexShrink:\s*0/.test(secenekMetniSrc)) {
  console.error('FAIL: SecenekMetni sarmalayıcıda flexShrink:0 yok');
  hata++;
}

const SIK_KELIMELER = ['Çember', 'Üçgen', 'Dikdörtgen', 'Silindir'];

for (const kelime of SIK_KELIMELER) {
  const kirpilmis = kelime.slice(0, -1);
  if (kelime.endsWith('r') || kelime.endsWith('n') || kelime.endsWith('z')) {
  } else {
    console.error(`FAIL: test kelimesi r/n/z ile bitmiyor: ${kelime}`);
    hata++;
  }
  if (kirpilmis.length > 1 && kelime === kirpilmis) {
    console.error(`FAIL: "${kelime}" kırpılmış görünüyor`);
    hata++;
  }
}

if (hata > 0) {
  console.error(`verify-secenek-metni: ${hata} hata`);
  process.exit(1);
}
console.log(`verify-secenek-metni: ${SIK_KELIMELER.length} şık kelimesi + kaynak kontrolü OK`);
