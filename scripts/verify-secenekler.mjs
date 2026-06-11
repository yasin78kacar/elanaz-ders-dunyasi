#!/usr/bin/env node
/**
 * Çoktan seçmeli sorularda şık bütünlüğü bekçisi:
 * - 4 şık
 * - benzersiz şıklar
 * - dogruCevap şıklar arasında
 */
import { readFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const matematikDir = join(__dirname, '../content/sinif2/matematik');

function soruDogrula(soru, dosya) {
  const hatalar = [];
  if (soru.tip !== 'coktanSecmeli') return hatalar;

  const sec = (soru.secenekler ?? []).map(String);
  if (sec.length !== 4) {
    hatalar.push(`${dosya} ${soru.id}: ${sec.length} şık (4 bekleniyor)`);
  }
  if (new Set(sec).size !== sec.length) {
    hatalar.push(`${dosya} ${soru.id}: şıklar benzersiz değil [${sec.join(' | ')}]`);
  }
  if (!sec.includes(String(soru.dogruCevap))) {
    hatalar.push(`${dosya} ${soru.id}: dogruCevap şıklarda yok ("${soru.dogruCevap}")`);
  }
  return hatalar;
}

function konuDogrula(dosya) {
  const yol = join(matematikDir, dosya);
  const konu = JSON.parse(readFileSync(yol, 'utf8'));
  const hatalar = [];
  for (const soru of [...(konu.alistirma ?? []), ...(konu.test ?? [])]) {
    hatalar.push(...soruDogrula(soru, dosya));
  }
  return hatalar;
}

const dosyalar = readdirSync(matematikDir).filter((f) => f.endsWith('.json'));
const tumHatalar = dosyalar.flatMap(konuDogrula);

let mcSayisi = 0;
for (const dosya of dosyalar) {
  const konu = JSON.parse(readFileSync(join(matematikDir, dosya), 'utf8'));
  mcSayisi += [...(konu.alistirma ?? []), ...(konu.test ?? [])].filter((s) => s.tip === 'coktanSecmeli').length;
}

console.log(`=== Şık bekçisi: ${dosyalar.length} konu, ${mcSayisi} çoktan seçmeli ===`);

if (tumHatalar.length) {
  console.error('\nHATALAR:');
  tumHatalar.forEach((h) => console.error(`  ${h}`));
  process.exit(1);
}

console.log('Tüm çoktan seçmeli sorular: 4 benzersiz şık, doğru cevap listede.');
process.exit(0);
