/** Matematik Tema 9 — Para (100 görselli soru). */

const KAZANIM = {
  BIRIM: 'MAT.2.7.1',
  ALISVERIS: 'MAT.2.7.2',
};

function para(tutar, tur = 'karisik') {
  return { tur: 'olcme', mod: 'para', tutar, paraTur: tur };
}
function anl(sahne) {
  return { tur: 'olcme', mod: 'anlatim', sahne };
}
function islem(a, b, mod = 'toplama-grup') {
  return { tur: 'islem', mod, a, b, sonuc: mod === 'cikarma-grup' ? a - b : a + b, nesne: 'para', renk1: 'sari', renk2: 'turuncu' };
}
function prob(sahne) {
  return { tur: 'islem', mod: 'problem', sahne };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function yanlisSecenekler(dogru, adet = 3) {
  const n = Number(dogru);
  const aday = new Set();
  for (const d of [-5, -3, -2, -1, 1, 2, 3, 5, 10]) {
    const v = n + d;
    if (v >= 0 && v <= 100 && v !== n) aday.add(v);
  }
  return [...aday].slice(0, adet).map(String);
}

const BIRIM_SORULAR = [
  ['pb-a1', '1 TL kaç kuruştur?', '100', ''],
  ['pb-a2', '50 kuruş kaç TL eder?', '0,50 TL', ''],
  ['pb-a3', '2 TL ve 50 kuruş toplam kaç TL?', '2,50 TL', ''],
  ['pb-a4', '5 TL banknotu ile 1 TL madeni para toplam kaç TL?', '6 TL', ''],
  ['pb-a5', '10 kuruş + 10 kuruş + 10 kuruş kaç kuruş?', '30', ''],
  ['pb-a6', '1 TL = 100 kuruş. 25 kuruş kaçta bir TL?', '4\'te 1', ''],
  ['pb-a7', '3 adet 1 TL madeni para kaç TL?', '3 TL', ''],
  ['pb-a8', '50 kuruş + 25 kuruş kaç kuruş?', '75', ''],
  ['pb-a9', '4 adet 25 kuruş kaç TL?', '1 TL', ''],
  ['pb-a10', '10 TL banknotu kaç adet 1 TL eder?', '10', ''],
  ['pb-a11', '2 TL + 3 TL kaç TL?', '5 TL', ''],
  ['pb-a12', '100 kuruş kaç TL?', '1 TL', ''],
  ['pb-a13', '5 adet 10 kuruş kaç kuruş?', '50', ''],
  ['pb-a14', '20 TL ile 5 TL arasındaki fark kaç TL?', '15 TL', ''],
  ['pb-a15', '1 TL + 1 TL + 50 kuruş kaç TL?', '2,50 TL', ''],
  ['pb-a16', '8 adet 25 kuruş kaç TL?', '2 TL', ''],
  ['pb-a17', '50 kuruşun TL karşılığı nedir?', '0,50 TL', ''],
  ['pb-a18', '3 TL + 2 TL + 1 TL kaç TL?', '6 TL', ''],
  ['pb-a19', '10 adet 10 kuruş kaç TL?', '1 TL', ''],
  ['pb-a20', '5 TL - 2 TL kaç TL?', '3 TL', ''],
  ['pb-a21', '2 adet 50 kuruş kaç TL?', '1 TL', ''],
  ['pb-a22', '7 TL + 3 TL kaç TL?', '10 TL', ''],
  ['pb-a23', '25 kuruş + 25 kuruş + 25 kuruş + 25 kuruş kaç TL?', '1 TL', ''],
  ['pb-a24', '20 TL - 8 TL kaç TL?', '12 TL', ''],
  ['pb-a25', '6 adet 1 TL madeni para kaç TL?', '6 TL', ''],
];

const BIRIM_TEST = [
  ['pb-t1', '1 TL kaç kuruştur?', '100', ['10', '50', '100', '1000']],
  ['pb-t2', '50 kuruş kaç TL eder?', '0,50 TL', ['0,25 TL', '0,50 TL', '1 TL', '5 TL']],
  ['pb-t3', '3 adet 1 TL madeni para kaç TL?', '3 TL', ['2 TL', '4 TL', '3 TL', '1 TL']],
  ['pb-t4', '4 adet 25 kuruş kaç TL?', '1 TL', ['0,50 TL', '1 TL', '2 TL', '25 TL']],
  ['pb-t5', '10 kuruş + 20 kuruş kaç kuruş?', '30', ['20', '30', '40', '10']],
  ['pb-t6', '5 TL + 3 TL kaç TL?', '8 TL', ['7 TL', '9 TL', '8 TL', '15 TL']],
  ['pb-t7', '10 TL - 4 TL kaç TL?', '6 TL', ['5 TL', '7 TL', '6 TL', '14 TL']],
  ['pb-t8', '2 adet 50 kuruş kaç TL?', '1 TL', ['0,50 TL', '1 TL', '2 TL', '50 TL']],
  ['pb-t9', '8 adet 25 kuruş kaç TL?', '2 TL', ['1 TL', '2 TL', '3 TL', '8 TL']],
  ['pb-t10', '100 kuruş kaç TL?', '1 TL', ['0,10 TL', '0,50 TL', '1 TL', '10 TL']],
  ['pb-t11', '6 TL + 4 TL kaç TL?', '10 TL', ['9 TL', '11 TL', '10 TL', '24 TL']],
  ['pb-t12', '20 TL - 12 TL kaç TL?', '8 TL', ['7 TL', '9 TL', '8 TL', '32 TL']],
  ['pb-t13', '5 adet 10 kuruş kaç kuruş?', '50', ['40', '60', '50', '15']],
  ['pb-t14', '1 TL + 50 kuruş kaç TL?', '1,50 TL', ['1 TL', '2 TL', '1,50 TL', '0,50 TL']],
  ['pb-t15', '10 adet 1 TL kaç TL?', '10 TL', ['5 TL', '10 TL', '20 TL', '1 TL']],
  ['pb-t16', '3 TL + 7 TL kaç TL?', '10 TL', ['9 TL', '11 TL', '10 TL', '21 TL']],
  ['pb-t17', '15 TL - 6 TL kaç TL?', '9 TL', ['8 TL', '10 TL', '9 TL', '21 TL']],
  ['pb-t18', '2 TL + 2 TL + 1 TL kaç TL?', '5 TL', ['4 TL', '6 TL', '5 TL', '3 TL']],
  ['pb-t19', '25 kuruş + 75 kuruş kaç TL?', '1 TL', ['0,50 TL', '1 TL', '1,50 TL', '2 TL']],
  ['pb-t20', '12 TL - 5 TL kaç TL?', '7 TL', ['6 TL', '8 TL', '7 TL', '17 TL']],
  ['pb-t21', '4 adet 50 kuruş kaç TL?', '2 TL', ['1 TL', '2 TL', '3 TL', '4 TL']],
  ['pb-t22', '9 TL + 1 TL kaç TL?', '10 TL', ['8 TL', '11 TL', '10 TL', '91 TL']],
  ['pb-t23', '20 TL - 15 TL kaç TL?', '5 TL', ['4 TL', '6 TL', '5 TL', '35 TL']],
  ['pb-t24', '6 adet 25 kuruş kaç TL?', '1,50 TL', ['1 TL', '1,50 TL', '2 TL', '6 TL']],
  ['pb-t25', '7 TL + 8 TL kaç TL?', '15 TL', ['14 TL', '16 TL', '15 TL', '56 TL']],
];

const ALISVERIS_ALISTIRMA = [
  ['pa-a1', 'Elanaz 5 TL ile 2 TL\'lik simit aldı. Kaç TL\'si kaldı?', '3'],
  ['pa-a2', 'Marketten 7 TL\'lik meyve aldım. 10 TL verdim. Kaç TL para üstü alırım?', '3'],
  ['pa-a3', 'Bir kalem 4 TL, bir silgi 3 TL. İkisi toplam kaç TL?', '7'],
  ['pa-a4', 'Annem 20 TL verdi. 12 TL harcadım. Kaç TL kaldı?', '8'],
  ['pa-a5', '3 TL\'lik su ve 5 TL\'lik sandviç aldım. Toplam kaç TL öderim?', '8'],
  ['pa-a6', 'Elif\'in 15 TL\'si var. 9 TL\'lik kitap aldı. Kaç TL\'si kaldı?', '6'],
  ['pa-a7', '2 TL\'lik bisküvi ve 2 TL\'lik süt aldım. Toplam kaç TL?', '4'],
  ['pa-a8', '18 TL\'lik alışveriş için 20 TL verdim. Kaç TL üstü alırım?', '2'],
  ['pa-a9', 'Berk 10 TL ile 6 TL\'lik oyuncak aldı. Kaç TL\'si kaldı?', '4'],
  ['pa-a10', '4 TL + 6 TL + 5 TL toplam kaç TL?', '15'],
  ['pa-a11', '25 TL\'den 10 TL harcadım. Kaç TL kaldı?', '15'],
  ['pa-a12', '3 TL\'lik dondurma ve 4 TL\'lik meyve suyu. Toplam kaç TL?', '7'],
  ['pa-a13', 'Ali 12 TL verdi, 8 TL\'lik ekmek aldı. Kaç TL üstü alır?', '4'],
  ['pa-a14', '5 TL\'lik kalem kutusu ve 3 TL\'lik defter. Toplam kaç TL?', '8'],
  ['pa-a15', 'Selin 20 TL ile 14 TL\'lik çanta aldı. Kaç TL\'si kaldı?', '6'],
  ['pa-a16', '9 TL\'lik alışveriş için 10 TL verdim. Kaç TL üstü?', '1'],
  ['pa-a17', '2 TL + 2 TL + 2 TL + 2 TL kaç TL?', '8'],
  ['pa-a18', '30 TL\'den 18 TL harcadım. Kaç TL kaldı?', '12'],
  ['pa-a19', '6 TL\'lik top ve 4 TL\'lik çorap. Toplam kaç TL?', '10'],
  ['pa-a20', 'Can 8 TL ile 3 TL\'lik sticker aldı. Kaç TL\'si kaldı?', '5'],
  ['pa-a21', '11 TL\'lik alışveriş için 15 TL verdim. Kaç TL üstü?', '4'],
  ['pa-a22', '7 TL + 5 TL kaç TL?', '12'],
  ['pa-a23', 'Elanaz 25 TL ile 17 TL\'lik oyuncak aldı. Kaç TL\'si kaldı?', '8'],
  ['pa-a24', '3 TL\'lik simit ve 2 TL\'lik ayran. Toplam kaç TL?', '5'],
  ['pa-a25', '50 TL\'den 35 TL harcadım. Kaç TL kaldı?', '15'],
];

const ALISVERIS_TEST = [
  ['pa-t1', 'Elanaz 10 TL ile 6 TL\'lik dondurma aldı. Kaç TL\'si kaldı?', '4', ['3', '5', '4', '6']],
  ['pa-t2', '7 TL\'lik alışveriş için 10 TL verdim. Kaç TL üstü alırım?', '3', ['2', '4', '3', '7']],
  ['pa-t3', '4 TL\'lik kalem ve 5 TL\'lik silgi. Toplam kaç TL?', '9', ['8', '10', '9', '1']],
  ['pa-t4', 'Annem 20 TL verdi, 13 TL harcadım. Kaç TL kaldı?', '7', ['6', '8', '7', '33']],
  ['pa-t5', '3 TL + 6 TL + 4 TL toplam kaç TL?', '13', ['12', '14', '13', '7']],
  ['pa-t6', '15 TL\'lik kitap için 20 TL verdim. Kaç TL üstü?', '5', ['4', '6', '5', '35']],
  ['pa-t7', 'Berk 8 TL ile 5 TL\'lik top aldı. Kaç TL\'si kaldı?', '3', ['2', '4', '3', '13']],
  ['pa-t8', '2 TL\'lik bisküvi ve 3 TL\'lik süt. Toplam kaç TL?', '5', ['4', '6', '5', '1']],
  ['pa-t9', '25 TL\'den 16 TL harcadım. Kaç TL kaldı?', '9', ['8', '10', '9', '41']],
  ['pa-t10', '9 TL\'lik alışveriş için 10 TL verdim. Kaç TL üstü?', '1', ['0', '2', '1', '19']],
  ['pa-t11', 'Elif 12 TL ile 7 TL\'lik defter aldı. Kaç TL\'si kaldı?', '5', ['4', '6', '5', '19']],
  ['pa-t12', '5 TL + 8 TL kaç TL?', '13', ['12', '14', '13', '3']],
  ['pa-t13', '18 TL\'lik oyuncak için 20 TL verdim. Kaç TL üstü?', '2', ['1', '3', '2', '38']],
  ['pa-t14', '6 TL\'lik meyve ve 4 TL\'lik ekmek. Toplam kaç TL?', '10', ['9', '11', '10', '2']],
  ['pa-t15', '30 TL\'den 22 TL harcadım. Kaç TL kaldı?', '8', ['7', '9', '8', '52']],
  ['pa-t16', '3 TL\'lik simit ve 3 TL\'lik ayran. Toplam kaç TL?', '6', ['5', '7', '6', '0']],
  ['pa-t17', 'Ali 15 TL verdi, 9 TL\'lik kalem aldı. Kaç TL üstü?', '6', ['5', '7', '6', '24']],
  ['pa-t18', '4 TL + 7 TL + 6 TL toplam kaç TL?', '17', ['16', '18', '17', '3']],
  ['pa-t19', 'Elanaz 20 TL ile 8 TL dondurma, 5 TL su aldı. Kaç TL kaldı?', '7', ['6', '8', '7', '13']],
  ['pa-t20', '11 TL\'lik alışveriş için 15 TL verdim. Kaç TL üstü?', '4', ['3', '5', '4', '26']],
  ['pa-t21', '2 TL\'lik çikolata ve 6 TL\'lik kitap. Toplam kaç TL?', '8', ['7', '9', '8', '4']],
  ['pa-t22', '40 TL\'den 28 TL harcadım. Kaç TL kaldı?', '12', ['11', '13', '12', '68']],
  ['pa-t23', '5 TL\'lik top ve 5 TL\'lik çorap. Toplam kaç TL?', '10', ['9', '11', '10', '0']],
  ['pa-t24', 'Selin 14 TL ile 6 TL\'lik sticker aldı. Kaç TL\'si kaldı?', '8', ['7', '9', '8', '20']],
  ['pa-t25', '19 TL\'lik alışveriş için 20 TL verdim. Kaç TL üstü?', '1', ['0', '2', '1', '39']],
];

function paraBirimleri(karistir) {
  const alistirma = BIRIM_SORULAR.map(([id, soru, cevap, ipucu], i) => ({
    id,
    kazanimKodu: KAZANIM.BIRIM,
    tip: 'yazili',
    soru,
    dogruCevap: String(cevap),
    ipucu,
    cevapTipi: cevapTipiBelirle(cevap),
    gorsel: para(i + 1, 'madeni'),
  }));

  const test = BIRIM_TEST.map(([id, soru, cevap, secenekler], i) => ({
    id,
    kazanimKodu: KAZANIM.BIRIM,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: String(cevap),
    secenekler: karistir(secenekler),
    ipucu: '',
    gorsel: para((i % 10) + 1, i % 2 ? 'banknot' : 'madeni'),
  }));

  return {
    id: 'para-birimleri',
    baslik: 'Para Birimleri',
    kazanimKodu: KAZANIM.BIRIM,
    anlatim: {
      ekranlar: [
        {
          metin: 'Parayla alışveriş yaparız! Türkiye\'de madeni paralar ve banknotlar kullanılır. 1 TL = 100 kuruş.',
          gorsel: anl('pr-anlatim-1'),
        },
        {
          metin: 'Madeni paralar: 1 TL, 50 kuruş, 25 kuruş, 10 kuruş, 5 kuruş, 1 kuruş. Banknotlar: 5 TL, 10 TL, 20 TL, 50 TL, 100 TL, 200 TL.',
          gorsel: anl('pr-anlatim-2'),
        },
        {
          metin: 'Alışverişte toplam tutarı hesaplarız. Para üstü = verilen para − harcanan para.',
          gorsel: anl('pr-anlatim-3'),
        },
      ],
    },
    alistirma,
    test,
  };
}

function paraAlisveris(karistir) {
  const alistirma = ALISVERIS_ALISTIRMA.map(([id, soru, cevap], i) => {
    const n = Number(cevap);
    const parts = soru.match(/(\d+)\s*TL/g);
    const a = parts?.[0] ? parseInt(parts[0], 10) : 10;
    const b = parts?.[1] ? parseInt(parts[1], 10) : 5;
    const cikarma = soru.includes('kaldı') || soru.includes('üstü') || soru.includes('harcadım');
    return {
      id,
      kazanimKodu: KAZANIM.ALISVERIS,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu: '',
      cevapTipi: 'sayi',
      gorsel: cikarma ? islem(a, b, 'cikarma-grup') : islem(a, b),
      sasirtma: soru.includes('🎭'),
    };
  });

  const test = ALISVERIS_TEST.map(([id, soru, cevap, secenekler], i) => ({
    id,
    kazanimKodu: KAZANIM.ALISVERIS,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: String(cevap),
    secenekler: karistir(secenekler),
    ipucu: '',
    gorsel: prob(`market-alisveris-${(i % 5) + 1}`),
    sasirtma: soru.includes('🎭'),
  }));

  return {
    id: 'para-alisveris',
    baslik: 'Para ile Alışveriş',
    kazanimKodu: KAZANIM.ALISVERIS,
    anlatim: {
      ekranlar: [
        {
          metin: 'Markette ürün fiyatlarını toplarız. 3 TL + 5 TL = 8 TL öderiz.',
          gorsel: prob('market-tezgah'),
        },
        {
          metin: 'Verdiğimiz paradan harcadığımızı çıkarırız: 10 TL − 7 TL = 3 TL para üstü.',
          gorsel: prob('cocuk-market'),
        },
        {
          metin: 'Alışveriş yaparken parayı doğru saymayı öğreniriz!',
          gorsel: prob('elanaz-market-dondurma'),
        },
      ],
    },
    alistirma,
    test,
  };
}

export function paraBirimleriKonu(karistir) {
  return paraBirimleri(karistir);
}

export function paraAlisverisKonu(karistir) {
  return paraAlisveris(karistir);
}
