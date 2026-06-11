#!/usr/bin/env node
/**
 * Ritmik Sayma test oturumu doğrulaması:
 * - sessionPicker ile 3 ardışık oturum simüle eder
 * - JSON ham şıklar + TestQuestion gösterim katmanını kontrol eder
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OTURUM_BOYUTU = 5;
const MAX_SASIRTMA = 2;

function karistir(dizi, rng = Math.random) {
  const kopya = [...dizi];
  for (let i = kopya.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [kopya[i], kopya[j]] = [kopya[j], kopya[i]];
  }
  return kopya;
}

function oturumSorulariSec(havuz, boyut = OTURUM_BOYUTU, rng = Math.random) {
  if (havuz.length <= boyut) return karistir(havuz, rng);
  const sasirtmalar = havuz.filter((s) => s.sasirtma);
  const normal = havuz.filter((s) => !s.sasirtma);
  const sasirtmaAdet = Math.min(MAX_SASIRTMA, sasirtmalar.length, 2);
  const normalAdet = boyut - sasirtmaAdet;
  const secilenSasirtma = karistir(sasirtmalar, rng).slice(0, sasirtmaAdet);
  const secilenNormal = karistir(normal, rng).slice(0, normalAdet);
  return karistir([...secilenNormal, ...secilenSasirtma], rng);
}

function secenekGosterim(secenek) {
  return String(secenek);
}

function kirpilmisGorunurMu(ham, gorunen) {
  const s = String(ham);
  return s.length > 1 && gorunen === s.slice(0, -1);
}

function sayiSeridiEtiketleri(gorsel) {
  if (!gorsel || gorsel.tip !== 'sayi-seridi') return [];
  const { baslangic, adim, adimSayisi } = gorsel;
  return Array.from({ length: adimSayisi + 1 }, (_, i) => String(baslangic + adim * i));
}

function soruDogrula(soru, oturumNo, soruNo) {
  const hatalar = [];
  const uyarilar = [];

  if (soru.tip !== 'coktanSecmeli' || !soru.secenekler?.length) {
    return { hatalar, uyarilar, atlandi: true };
  }

  const ham = soru.secenekler.map(String);
  const gorunen = ham.map(secenekGosterim);

  if (new Set(ham).size !== ham.length) {
    hatalar.push(`Benzersiz değil (ham): [${ham.join(', ')}]`);
  }
  if (new Set(gorunen).size !== gorunen.length) {
    hatalar.push(`Benzersiz değil (görünen): [${gorunen.join(', ')}]`);
  }

  for (let i = 0; i < ham.length; i++) {
    if (gorunen[i] !== ham[i]) {
      hatalar.push(`Gösterim ≠ ham: "${ham[i]}" → "${gorunen[i]}"`);
    }
    if (kirpilmisGorunurMu(ham[i], gorunen[i])) {
      hatalar.push(`Kırpılmış görünüm: "${ham[i]}" → "${gorunen[i]}"`);
    }
  }

  if (!ham.includes(String(soru.dogruCevap))) {
    hatalar.push(`dogruCevap şıklarda yok: "${soru.dogruCevap}"`);
  }

  const seridi = sayiSeridiEtiketleri(soru.gorsel);
  for (const etiket of seridi) {
    if (etiket.length > 1 && kirpilmisGorunurMu(etiket, etiket.slice(0, -1))) {
      uyarilar.push(`SayiSeridi kırpma riski: ${etiket}`);
    }
  }

  return {
    hatalar,
    uyarilar,
    atlandi: false,
    ozet: {
      oturumNo,
      soruNo,
      id: soru.id,
      soru: soru.soru?.slice(0, 55) + (soru.soru?.length > 55 ? '…' : ''),
      ham,
      gorunen,
      dogru: String(soru.dogruCevap),
      seridi: seridi.length ? seridi : undefined,
    },
  };
}

function seededRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const jsonPath = join(__dirname, '../content/sinif2/matematik/ritmik-sayma.json');
const konu = JSON.parse(readFileSync(jsonPath, 'utf8'));
const havuz = konu.test ?? [];

const oturumlar = [
  { no: 1, seed: 42 },
  { no: 2, seed: 137 },
  { no: 3, seed: 2025 },
];

let toplamSoru = 0;
let toplamMc = 0;
const tumHatalar = [];
const oturumRaporlari = [];

for (const { no, seed } of oturumlar) {
  const sorular = oturumSorulariSec(havuz, OTURUM_BOYUTU, seededRng(seed));
  const soruRaporlari = [];

  sorular.forEach((soru, i) => {
    toplamSoru++;
    const sonuc = soruDogrula(soru, no, i + 1);
    if (!sonuc.atlandi) {
      toplamMc++;
      soruRaporlari.push(sonuc.ozet);
      if (sonuc.hatalar.length) {
        tumHatalar.push({ oturum: no, id: soru.id, hatalar: sonuc.hatalar });
      }
    }
  });

  oturumRaporlari.push({ oturum: no, seed, sorular: soruRaporlari });
}

console.log('=== Ritmik Sayma — 3 Test Oturumu Doğrulaması ===\n');
console.log(`Havuz: ${havuz.length} test sorusu | Oturum başına: ${OTURUM_BOYUTU} soru\n`);

for (const rapor of oturumRaporlari) {
  console.log(`--- Oturum ${rapor.oturum} (seed=${rapor.seed}) ---`);
  for (const s of rapor.sorular) {
    const benzersiz = new Set(s.ham).size === s.ham.length ? '✓' : '✗';
    const tam = s.ham.every((h, i) => h === s.gorunen[i]) ? '✓' : '✗';
    console.log(
      `  ${s.soruNo}/5 [${s.id}] ham=[${s.ham.join(', ')}] görünen=[${s.gorunen.join(', ')}] doğru=${s.dogru} benzersiz=${benzersiz} tam=${tam}`,
    );
    if (s.seridi) console.log(`       SayiSeridi: [${s.seridi.join(', ')}]`);
  }
  console.log('');
}

console.log('--- Özet ---');
console.log(`Toplam kontrol: ${toplamSoru} soru (${toplamMc} çoktan seçmeli)`);
console.log(`JSON + gösterim katmanı hatası: ${tumHatalar.length}`);

if (tumHatalar.length) {
  console.log('\nHATALAR:');
  tumHatalar.forEach((h) => console.log(`  Oturum ${h.oturum} ${h.id}: ${h.hatalar.join('; ')}`));
  process.exit(1);
}

console.log('\nTüm oturumlarda şıklar tam değerli ve benzersiz (veri + gösterim fonksiyonu).');
process.exit(0);
