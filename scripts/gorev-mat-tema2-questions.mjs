/** Matematik Tema 2 — Toplama (1-20) — 100 görselli soru. */

const KAZANIM = 'MAT.2.3.1';

const NESNE_ROTASYON = [
  ['top', 'kirmizi', 'mavi'],
  ['elma', 'kirmizi', 'yesil'],
  ['cilek', 'kirmizi', 'pembe'],
  ['yildiz', 'sari', 'turuncu'],
  ['balon', 'mavi', 'sari'],
  ['kelebek', 'mor', 'pembe'],
  ['cicek', 'sari', 'pembe'],
  ['kalem', 'sari', 'kirmizi'],
  ['kup', 'mavi', 'kirmizi'],
  ['kare', 'turuncu', 'mor'],
  ['armut', 'yesil', 'sari'],
];

function top(a, b, nesne = 'top', renk1 = 'kirmizi', renk2 = 'mavi') {
  return { tur: 'islem', mod: 'toplama-grup', a, b, sonuc: a + b, nesne, renk1, renk2 };
}
function bil(tip, a, b, sonuc, nesne = 'top') {
  return { tur: 'islem', mod: 'bilinmeyen', bilinmeyen: tip, a, b, sonuc, nesne };
}
function kars(...islemler) {
  return { tur: 'islem', mod: 'karsilastirma', islemler };
}
function esit(...islemler) {
  return { tur: 'islem', mod: 'esitlik', islemler };
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

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function nesneFor(i) {
  return NESNE_ROTASYON[i % NESNE_ROTASYON.length];
}

function yanlisSecenekler(dogru, adet = 3) {
  const n = Number(dogru);
  const aday = new Set([n]);
  for (const d of [-2, -1, 1, 2, 3, -3, 4, -4]) {
    const v = n + d;
    if (v >= 0 && v <= 20 && v !== n) aday.add(v);
  }
  return [...aday].slice(0, adet + 1).filter((x) => x !== n).slice(0, adet);
}

function alistirmaIslemler() {
  return [
    [1, 1], [1, 2], [2, 2], [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [4, 4],
    [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
    [6, 6], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [1, 8], [2, 8],
    [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [1, 9], [2, 9], [3, 9], [4, 9],
    [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 1], [10, 2], [10, 5], [10, 9], [10, 10],
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
    const [nesne, renk1, renk2] = nesneFor(i);
    ekle(`t2-a${i + 1}`, `${a} + ${b} = ?`, String(a + b), '', {
      gorsel: top(a, b, nesne, renk1, renk2),
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
    const sonuc = a + b;
    const [nesne, renk1, renk2] = nesneFor(i);
    ekle(
      id,
      `${a} + ${b} = ?`,
      String(sonuc),
      [String(sonuc), ...yanlisSecenekler(sonuc).map(String)],
      '',
      { gorsel: top(a, b, nesne, renk1, renk2) },
    );
  };

  const islemler = [
    [3, 4], [5, 3], [6, 6], [7, 2], [8, 3], [4, 7], [9, 1], [5, 5], [6, 7], [8, 5],
    [9, 4], [7, 6], [8, 7], [9, 6], [9, 8], [10, 3], [10, 7], [10, 10], [2, 9], [4, 8],
    [3, 6], [5, 8], [7, 4], [6, 5], [9, 9], [1, 8], [2, 7], [3, 5], [4, 6], [5, 7],
    [6, 4], [7, 3], [8, 2], [9, 0], [0, 9], [10, 2], [10, 4], [10, 6], [10, 8], [10, 9],
  ];
  islemler.forEach(([a, b], i) => mc(`t2-t${i + 1}`, a, b, i + 10));

  ekle(
    't2-t41',
    'Elanaz\'ın 4 elması var, annesi 3 elma daha verdi. Kaç elması oldu?',
    '7',
    ['6', '7', '8', '5'],
    '',
    { gorsel: top(4, 3, 'elma', 'kirmizi', 'yesil') },
  );
  ekle(
    't2-t42',
    'Masada 6 kalem var, 5 kalem daha konuldu. Kaç kalem oldu?',
    '11',
    ['10', '12', '11', '9'],
    '',
    { gorsel: top(6, 5, 'kalem', 'sari', 'kirmizi') },
  );
  ekle(
    't2-t43',
    '□ + 5 = 12. Kutudaki sayı kaçtır?',
    '7',
    ['6', '8', '7', '5'],
    '',
    { gorsel: bil('a', 5, 12, 12, 'yildiz') },
  );
  ekle(
    't2-t44',
    '5 + □ = 9. Kutudaki sayı nedir?',
    '4',
    ['3', '5', '4', '6'],
    '',
    { gorsel: bil('b', 5, 9, 9, 'balon') },
  );
  ekle(
    't2-t45',
    'Hangisi 10 eder?',
    '6 + 4',
    ['5 + 4', '3 + 6', '6 + 4', '7 + 2'],
    '',
    { gorsel: kars(top(5, 4), top(3, 6), top(6, 4), top(7, 2)) },
  );
  ekle(
    't2-t46',
    'Sınıfta 8 kız, 7 erkek öğrenci var. Toplam kaç öğrenci var?',
    '15',
    ['14', '16', '15', '13'],
    '',
    { gorsel: prob('sinif-ogrenci') },
  );
  ekle(
    't2-t47',
    '🎭 Bir sayıya 0 eklersek ne olur?',
    'Sayı değişmez',
    ['Sayı 1 artar', 'Sayı değişmez', 'Sayı 0 olur', 'Sayı 2 artar'],
    '0 hiç demek!',
    { gorsel: top(8, 0, 'yildiz'), sasirtma: true },
  );
  ekle(
    't2-t48',
    '🎭 4 + 6 ile 6 + 4 eşit midir?',
    "Evet, ikisi de 10'dur",
    ['Hayır, farklıdır', "Evet, ikisi de 10'dur", 'Bazen eşit olur', 'Hiçbir zaman eşit olmaz'],
    'Toplama işleminde sıra değişmez!',
    { gorsel: esit(top(4, 6), top(6, 4)), sasirtma: true },
  );
  ekle(
    't2-t49',
    'Bahçede 9 gül, 6 papatya var. Toplam kaç çiçek?',
    '15',
    ['14', '16', '15', '13'],
    '',
    { gorsel: prob('bahce-cicek') },
  );
  ekle(
    't2-t50',
    '🎭 Hangisi en büyük sonucu verir?',
    '9 + 8',
    ['7 + 6', '8 + 7', '9 + 8', '6 + 9'],
    'Her birini hesapla!',
    {
      gorsel: kars(top(7, 6), top(8, 7), top(9, 8), top(6, 9)),
      sasirtma: true,
    },
  );

  return sorular;
}

export function toplama120(karistir) {
  return {
    id: 'toplama-1-20',
    baslik: 'Toplama (1-20)',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elimde 3 elma var, arkadaşım bana 2 elma daha verdi. Şimdi kaç elmam var? 3 + 2 = 5! Buna TOPLAMA deriz.',
          gorsel: anl('ti-anlatim-1'),
        },
        {
          metin:
            'Toplama işaretimiz artı (+) işaretidir. 4 + 3 = 7. Büyük sayıdan başlayıp küçük sayıyı sayarız: 4… 5, 6, 7!',
          gorsel: anl('ti-anlatim-2'),
        },
        {
          metin:
            'Toplama işleminde sayıların yeri değişse de sonuç değişmez! 2 + 5 = 7, 5 + 2 = 7. 1 ile 20 arasındaki sayıları toplayarak pratik yapacağız.',
          gorsel: anl('ti-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
