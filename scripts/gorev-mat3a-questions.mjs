/** PARTI-MAT3A — Toplama ve Çıkarma ek alıştırma/test soruları */

const KAZANIM_TOPLAMA = 'MAT.2.3.1';
const KAZANIM_CIKARMA = 'MAT.2.3.2';

function top(a, b, nesne = 'elma', renk1 = 'kirmizi', renk2 = 'yesil') {
  return { tur: 'islem', mod: 'toplama-grup', a, b, sonuc: a + b, nesne, renk1, renk2 };
}
function cik(a, b, nesne = 'top', renk1 = 'kirmizi') {
  return { tur: 'islem', mod: 'cikarma-grup', a, b, sonuc: a - b, nesne, renk1 };
}
function onluk(a, b) {
  return { tur: 'islem', mod: 'onluk-toplama', a, b, sonuc: a + b };
}
function onlukCik(onluk, cikan) {
  return { tur: 'islem', mod: 'onluk-toplama', a: onluk * 10, b: -(cikan * 10), sonuc: (onluk - cikan) * 10 };
}
function prob(sahne) {
  return { tur: 'islem', mod: 'problem', sahne };
}

function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: extra.kazanimKodu ?? KAZANIM_TOPLAMA,
    tip: 'yazili',
    soru,
    dogruCevap: cevap,
    ipucu,
    cevapTipi: 'metin',
    alternatifCevaplar:
      cevap === 'Doğru'
        ? ['Evet', 'evet', 'doğru']
        : ['Hayır', 'hayır', 'yanlış'],
    ...extra,
  });
}

function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: extra.kazanimKodu ?? KAZANIM_TOPLAMA,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

export function mat3aToplamaAlistirma() {
  const s = [];
  dyEkle(
    s,
    '3a-go-a1',
    'Ali 20 elmaya 15 elma eklerse toplam 35 elması olur.',
    'Doğru',
    '',
    { gorsel: top(20, 15, 'elma') },
  );
  dyEkle(
    s,
    '3a-go-a2',
    '3 onluk ve 4 birlik toplam 34 sayısını oluşturur.',
    'Doğru',
    '',
    { gorsel: onluk(30, 4) },
  );
  dyEkle(
    s,
    '3a-go-a4',
    "Can'ın 40 mavi ve 20 sarı bilyesi var. Toplam bilye sayısı 60'tır.",
    'Doğru',
    '',
    { gorsel: top(40, 20, 'top', 'mavi', 'sari') },
  );
  dyEkle(
    s,
    '3a-go-a5',
    'Fatma 25 fındık ve 12 ceviz yedi. Toplam 37 yemiş yedi.',
    'Doğru',
    '',
    { gorsel: top(25, 12, 'meyve') },
  );
  dyEkle(
    s,
    '3a-go-a8',
    'Bahçede 18 kırmızı, 11 beyaz gül var. Toplam gül sayısı 29 tanedir.',
    'Doğru',
    '',
    { gorsel: top(18, 11, 'cicek', 'kirmizi', 'beyaz') },
  );
  dyEkle(
    s,
    '3a-go-a9',
    '75 sayısı, 7 onluk ve 5 birlikten oluşur.',
    'Doğru',
    '',
    { gorsel: onluk(70, 5) },
  );
  return s;
}

export function mat3aCikarmaAlistirma() {
  const s = [];
  dyEkle(
    s,
    '3a-go-a3',
    'Zeynep 50 sayfalık kitabın 10 sayfasını okudu. Geriye 40 sayfa kaldı.',
    'Doğru',
    '',
    { kazanimKodu: KAZANIM_CIKARMA, gorsel: cik(50, 10, 'kitap') },
  );
  dyEkle(
    s,
    '3a-go-a6',
    '6 onluktan 2 onluk çıkarırsak 4 onluk kalır.',
    'Doğru',
    '',
    { kazanimKodu: KAZANIM_CIKARMA, gorsel: onlukCik(6, 2) },
  );
  dyEkle(
    s,
    '3a-go-a7',
    "Ayşe'nin 50 lirası vardı, 30 liraya oyuncak aldı. Geriye 20 lirası kaldı.",
    'Yanlış',
    '',
    { kazanimKodu: KAZANIM_CIKARMA, gorsel: prob('oyuncak-alisveris') },
  );
  dyEkle(
    s,
    '3a-go-a10',
    "Ağaçtaki 45 kuştan 15'i uçtu. Ağaçta 30 kuş kaldı.",
    'Doğru',
    '',
    { kazanimKodu: KAZANIM_CIKARMA, gorsel: cik(45, 15, 'kus') },
  );
  return s;
}

export function mat3aToplamaTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);

  e(
    '3a-go-t1',
    "Zeynep'in 30 kalemi vardı. Ali ona 20 kalem daha verdi. Zeynep'in toplam kaç kalemi oldu?",
    '50',
    ['40', '50', '10', '60'],
    '',
    { gorsel: top(30, 20, 'kalem') },
  );
  e(
    '3a-go-t2',
    '4 onluk ve 5 birlikten oluşan sayıya 4 birlik eklersek hangi sayıyı buluruz?',
    '49',
    ['49', '41', '90', '54'],
    '',
    { gorsel: onluk(45, 4) },
  );
  e(
    '3a-go-t4',
    'Sepette 25 elma ve 14 armut var. Sepetteki toplam meyve sayısı kaçtır?',
    '39',
    ['39', '40', '11', '29'],
    '',
    { gorsel: top(25, 14, 'meyve') },
  );
  return s;
}

export function mat3aCikarmaTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { kazanimKodu: KAZANIM_CIKARMA, ...extra });

  e(
    '3a-go-t3',
    "Can 60 lirasının 20 lirası ile top aldı. Can'ın geriye ne kadar parası kaldı?",
    '40',
    ['80', '30', '40', '50'],
    '',
    { gorsel: prob('top-alisveris') },
  );
  e(
    '3a-go-t5',
    '7 onluktan 3 onluk çıkarırsak geriye kaç onluk kalır?',
    '4',
    ['5', '3', '4', '10'],
    '',
    { gorsel: onlukCik(7, 3) },
  );
  return s;
}

export function mat3aAlistirma() {
  return [...mat3aToplamaAlistirma(), ...mat3aCikarmaAlistirma()];
}

export function mat3aTest(karistir) {
  return [...mat3aToplamaTest(karistir), ...mat3aCikarmaTest(karistir)];
}
