/** Matematik Tema 3 — Çıkarma (2-20) — 100 görselli soru. */

const KAZANIM = 'MAT.2.3.2';

const NESNE_ROTASYON = [
  ['top', 'kirmizi'],
  ['elma', 'kirmizi'],
  ['cilek', 'kirmizi'],
  ['yildiz', 'sari'],
  ['balon', 'mavi'],
  ['kelebek', 'mor'],
  ['cicek', 'sari'],
  ['kup', 'mavi'],
  ['kalem', 'sari'],
  ['armut', 'yesil'],
];

function cik(a, b, nesne = 'top', renk1 = 'kirmizi') {
  return { tur: 'islem', mod: 'cikarma-grup', a, b, sonuc: a - b, nesne, renk1 };
}
function bil(tip, a, b, sonuc, nesne = 'top') {
  return { tur: 'islem', mod: 'bilinmeyen', bilinmeyen: tip, a, b, sonuc, nesne };
}
function kars(...islemler) {
  return { tur: 'islem', mod: 'karsilastirma', islemler };
}
function prob(sahne) {
  return { tur: 'islem', mod: 'problem', sahne };
}
function anl(sahne) {
  return { tur: 'islem', mod: 'anlatim', sahne };
}
function sd(baslangic, adimSayisi, vurgulananlar = []) {
  return { tur: 'sayi-seridi', baslangic, adim: 1, adimSayisi, vurgulananlar };
}
function adim(...list) {
  return { tur: 'islem', mod: 'adimlar', adimlar: list.map((x) => (typeof x === 'number' ? { deger: x } : x)) };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function nesneFor(i) {
  const [nesne, renk1] = NESNE_ROTASYON[i % NESNE_ROTASYON.length];
  return [nesne, renk1];
}

function yanlisSecenekler(dogru, adet = 3) {
  const n = Number(dogru);
  const aday = new Set([n]);
  for (const d of [-2, -1, 1, 2, 3, -3, 4, -4]) {
    const v = n + d;
    if (v >= 0 && v <= 20 && v !== n) aday.add(v);
  }
  return [...aday].filter((x) => x !== n).slice(0, adet);
}

function alistirmaIslemler() {
  return [
    [5, 2], [4, 1], [6, 3], [7, 2], [8, 4], [9, 3], [10, 5], [6, 6], [8, 0], [10, 3],
    [11, 4], [12, 5], [13, 6], [14, 7], [15, 8], [16, 9], [18, 9], [20, 10], [15, 5], [20, 5],
    [17, 8], [19, 10], [16, 7], [20, 8], [20, 3],
    [3, 1], [5, 3], [7, 4], [9, 5], [10, 2], [11, 2], [12, 3], [13, 5], [14, 6], [15, 6],
    [16, 8], [17, 9], [18, 10], [19, 9], [20, 4], [19, 8], [18, 8], [17, 7], [16, 6], [15, 7],
    [14, 5], [13, 4], [12, 4], [11, 5], [10, 4],
  ];
}

function alistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  alistirmaIslemler().forEach(([a, b], i) => {
    const [nesne, renk1] = nesneFor(i);
    ekle(`t3-a${i + 1}`, `${a} - ${b} = ?`, String(a - b), '', {
      gorsel: cik(a, b, nesne, renk1),
    });
  });

  return sorular;
}

function test(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: String(cevap),
      secenekler: karistir(secenekler.map(String)),
      ipucu,
      ...extra,
    });

  const mc = (id, a, b, i) => {
    const sonuc = a - b;
    const [nesne, renk1] = nesneFor(i);
    ekle(
      id,
      `${a} - ${b} = ?`,
      String(sonuc),
      [String(sonuc), ...yanlisSecenekler(sonuc).map(String)],
      '',
      { gorsel: cik(a, b, nesne, renk1) },
    );
  };

  const islemler = [
    [6, 2], [9, 4], [10, 6], [7, 7], [11, 3], [14, 6], [15, 7], [18, 9], [20, 7], [20, 11],
    [8, 3], [12, 5], [13, 8], [16, 9], [19, 10], [17, 6], [15, 9], [14, 8], [13, 7], [12, 6],
    [11, 8], [10, 7], [9, 6], [8, 5], [7, 4],
  ];
  islemler.forEach(([a, b], i) => mc(`t3-t${i + 1}`, a, b, i + 10));

  ekle(
    't3-t26',
    'Masada 8 elma vardı, 3 tanesi yendi. Kaç elma kaldı?',
    '5',
    ['4', '6', '5', '7'],
    '',
    { gorsel: prob('masa-elma') },
  );
  ekle(
    't3-t27',
    'Bahçede 12 kuş vardı, 5 tanesi uçtu. Kaç kuş kaldı?',
    '7',
    ['6', '8', '7', '9'],
    '',
    { gorsel: prob('bahce-kus') },
  );
  ekle(
    't3-t28',
    '□ - 4 = 6. Kutudaki sayı kaçtır?',
    '10',
    ['9', '11', '10', '8'],
    '',
    { gorsel: bil('a', 4, 6, 10) },
  );
  ekle(
    't3-t29',
    '12 - □ = 7. Kutudaki sayı nedir?',
    '5',
    ['4', '6', '5', '3'],
    '',
    { gorsel: bil('b', 12, 7, 12) },
  );
  ekle(
    't3-t30',
    "Hangi işlemin sonucu 5'tir?",
    '10 - 5',
    ['9 - 3', '8 - 2', '10 - 5', '7 - 3'],
    '',
    { gorsel: kars(cik(9, 3), cik(8, 2), cik(10, 5), cik(7, 3)) },
  );
  ekle(
    't3-t31',
    'Kutuda 16 top vardı, 9 tanesi alındı. Kaç top kaldı?',
    '7',
    ['6', '8', '7', '5'],
    '',
    { gorsel: prob('kutu-top-aliniyor') },
  );
  ekle(
    't3-t32',
    'Hangisi yanlıştır?',
    '9 - 4 = 4',
    ['10 - 5 = 5', '8 - 4 = 4', '6 - 3 = 3', '9 - 4 = 4'],
    '',
    { gorsel: kars(cik(10, 5), cik(8, 4), cik(6, 3), cik(9, 4)) },
  );
  ekle(
    't3-t33',
    "Elanaz'ın 15 boyası vardı, 6 tanesini Elif'e verdi. Kaç boyası kaldı?",
    '9',
    ['8', '10', '9', '7'],
    '',
    { gorsel: prob('elanaz-boya-veriyor') },
  );
  ekle(
    't3-t34',
    'Sınıfta 20 kalem vardı, 14 tanesi dağıtıldı. Kaç kalem kaldı?',
    '6',
    ['5', '7', '6', '4'],
    '',
    { gorsel: prob('kalem-kutusu-dagitim') },
  );
  ekle(
    't3-t35',
    '□ - 6 = 8. Kutudaki sayı nedir?',
    '14',
    ['13', '15', '14', '12'],
    '',
    { gorsel: bil('a', 6, 8, 14) },
  );
  ekle(
    't3-t36',
    '🎭 Bir sayıdan 0 çıkarırsak ne olur?',
    'Sayı değişmez',
    ['Sayı 0 olur', 'Sayı 1 azalır', 'Sayı değişmez', 'Sayı 2 azalır'],
    '0 hiç demek!',
    { gorsel: cik(7, 0), sasirtma: true },
  );
  ekle(
    't3-t37',
    '🎭 13 - 8 = ?',
    '5',
    ['4', '6', '5', '3'],
    "8'den 13'e kaç adım?",
    { gorsel: sd(8, 6, [8, 13]), sasirtma: true },
  );
  ekle(
    't3-t38',
    '🎭 17 - 9 = ?',
    '8',
    ['7', '9', '8', '6'],
    "17 = 10 + 7, önce 10'dan 9 çıkar!",
    { gorsel: adim(17, 10, 8), sasirtma: true },
  );
  ekle(
    't3-t39',
    '🎭 Hangisi en küçük sonucu verir?',
    '11 - 9',
    ['15 - 9', '12 - 8', '10 - 7', '11 - 9'],
    'Her birini hesapla, en küçüğü bul!',
    { gorsel: kars(cik(15, 9), cik(12, 8), cik(10, 7), cik(11, 9)), sasirtma: true },
  );
  ekle(
    't3-t40',
    "🎭 Elanaz'ın 20 çikolatası var. Elanaz, Elif'e 7, Alya'ya 5 çikolata verdi. Elanaz'da kaç çikolata kaldı?",
    '8',
    ['7', '9', '8', '6'],
    'Önce verdiği toplam: 7 + 5 = 12, sonra 20 - 12 = ?',
    { gorsel: prob('elanaz-cikolata-paylasim'), sasirtma: true },
  );

  const ekIslemler = [
    [5, 1], [7, 3], [9, 2], [10, 4], [11, 6], [12, 7], [13, 9], [14, 5], [16, 4], [18, 7],
  ];
  ekIslemler.forEach(([a, b], i) => mc(`t3-t${41 + i}`, a, b, i + 50));

  return sorular;
}

export function cikarma220(karistir) {
  return {
    id: 'cikarma-2-20',
    baslik: 'Çıkarma (2-20)',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elimde 5 elma vardı, 2 tanesini yedim. Kaç elma kaldı? 5 - 2 = 3! Buna ÇIKARMA deriz.',
          gorsel: anl('ci-anlatim-1'),
        },
        {
          metin:
            'Çıkarma işaretimiz eksi (-) işaretidir. Büyük sayıdan küçük sayıyı çıkarırız. 7 - 3 = 4.',
          gorsel: anl('ci-anlatim-2'),
        },
        {
          metin:
            'Bir sayıdan kendisini çıkarırsak 0 kalır! 5 - 5 = 0. Bir sayıdan 0 çıkarırsak sayı değişmez! 5 - 0 = 5. 2 ile 20 arasındaki sayılarla çıkarma yaparak pratik yapacağız.',
          gorsel: anl('ci-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
