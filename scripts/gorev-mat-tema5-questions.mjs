/** Matematik Tema 5 — Bölme (2÷1 … 100÷10, 100 görselli soru). */

const KAZANIM = 'MAT.2.5.1';

const NESNE_ROTASYON = [
  ['elma', 'kirmizi'],
  ['top', 'mavi'],
  ['yildiz', 'sari'],
  ['balon', 'yesil'],
  ['cicek', 'pembe'],
  ['kelebek', 'mor'],
  ['kalem', 'turuncu'],
  ['cilek', 'kirmizi'],
  ['kare', 'turuncu'],
  ['kup', 'mavi'],
];

function bol(a, b, nesne = 'elma', renk = 'kirmizi') {
  return { tur: 'islem', mod: 'bolme-grup', a, b, sonuc: a / b, nesne, renk1: renk };
}
function anl(sahne) {
  return { tur: 'islem', mod: 'anlatim', sahne };
}
function kars(...islemler) {
  return { tur: 'islem', mod: 'karsilastirma', islemler };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function nesneFor(i) {
  const [nesne, renk] = NESNE_ROTASYON[i % NESNE_ROTASYON.length];
  return [nesne, renk];
}

function yanlisSecenekler(dogru, adet = 3) {
  const n = Number(dogru);
  const aday = new Set([n]);
  for (const d of [-3, -2, -1, 1, 2, 3, 4, -4, 5, -5]) {
    const v = n + d;
    if (v >= 1 && v <= 20 && v !== n) aday.add(v);
  }
  return [...aday].filter((x) => x !== n).slice(0, adet);
}

function alistirmaIslemler() {
  return [
    [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
    [4, 2], [6, 2], [8, 2], [10, 2], [12, 2], [14, 2], [16, 2], [18, 2], [20, 2], [24, 2],
    [6, 3], [9, 3], [12, 3], [15, 3], [18, 3], [21, 3], [24, 3], [27, 3],
    [8, 4], [12, 4], [16, 4], [20, 4], [24, 4], [28, 4], [32, 4],
    [10, 5], [15, 5], [20, 5], [25, 5], [30, 5], [35, 5], [40, 5],
    [12, 6], [18, 6], [24, 6], [30, 6], [36, 6],
    [14, 7], [21, 7], [28, 7],
    [16, 8], [24, 8],
    [18, 9], [27, 9],
    [100, 10],
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
    const [nesne, renk] = nesneFor(i);
    ekle(`b5-a${i + 1}`, `${a} ÷ ${b} = ?`, String(a / b), '', {
      gorsel: bol(a, b, nesne, renk),
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
    const sonuc = a / b;
    const [nesne, renk] = nesneFor(i);
    ekle(
      id,
      `${a} ÷ ${b} = ?`,
      String(sonuc),
      [String(sonuc), ...yanlisSecenekler(sonuc).map(String)],
      '',
      { gorsel: bol(a, b, nesne, renk) },
    );
  };

  const islemler = [
    [8, 2], [12, 3], [10, 2], [15, 5], [18, 3], [20, 4], [24, 6], [16, 4], [30, 5], [9, 3],
    [20, 4], [14, 2], [21, 3], [24, 4], [10, 5], [15, 3], [25, 5], [12, 6], [20, 2], [6, 2],
    [48, 6], [56, 7], [64, 8], [45, 9], [50, 10], [72, 8], [63, 7], [54, 9], [80, 10], [90, 9],
  ];
  islemler.forEach(([a, b], i) => mc(`b5-t${i + 1}`, a, b, i));

  const problemler = [
    [10, 2, 'elma', '10 elmayı 2 kişiye eşit paylaştırırsak her birine kaç elma düşer?', '10 ÷ 2'],
    [20, 4, 'kare', '20 kurabiyeyi 4 tabağa eşit koyarsak her tabakta kaç kurabiye olur?', '20 ÷ 4'],
    [18, 6, 'top', '18 topu 6 çocuğa eşit verirsek her çocuk kaç top alır?', '18 ÷ 6'],
    [12, 3, 'kalem', '12 kalemi 3 gruba eşit ayırırsak her grupta kaç kalem olur?', '12 ÷ 3'],
    [16, 4, 'balon', '16 balonu 4 gruba eşit ayırırsak her grupta kaç balon olur?', '16 ÷ 4'],
    [30, 5, 'cicek', '30 çiçeği 5 vazoya eşit koyarsak her vazoda kaç çiçek olur?', '30 ÷ 5'],
    [28, 7, 'yildiz', '28 yıldızı 7 gruba eşit paylaştırırsak her grupta kaç yıldız olur?', '28 ÷ 7'],
    [40, 8, 'kelebek', '40 kelebeği 8 kutuya eşit koyarsak her kutuda kaç kelebek olur?', '40 ÷ 8'],
    [36, 9, 'cilek', '36 çileği 9 tabağa eşit paylaştırırsak her tabakta kaç çilek olur?', '36 ÷ 9'],
    [60, 10, 'top', '60 topu 10 gruba eşit ayırırsak her grupta kaç top olur?', '60 ÷ 10'],
  ];
  problemler.forEach(([a, b, nesne, soru, ipucu], i) => {
    const sonuc = a / b;
    ekle(
      `b5-t${31 + i}`,
      soru,
      String(sonuc),
      [String(sonuc), ...yanlisSecenekler(sonuc).map(String)],
      ipucu,
      { gorsel: bol(a, b, nesne) },
    );
  });

  ekle(
    'b5-t41',
    '🎭 12 ÷ 3 ile 12 ÷ 4 sonuçları sırasıyla nedir?',
    '4 ve 3',
    ['3 ve 4', '4 ve 3', '3 ve 3', '4 ve 4'],
    'Bölen değişince sonuç değişir.',
    { gorsel: kars('12÷3=4', '12÷4=3'), sasirtma: true },
  );
  ekle(
    'b5-t42',
    'Bölme işlemi ne anlama gelir?',
    'Eşit paylaştırma',
    ['Toplama', 'Eşit paylaştırma', 'Çarpma', 'Sıralama'],
    'Eşit gruplara ayırma.',
    { gorsel: anl('bl5-anlatim-1') },
  );
  ekle(
    'b5-t43',
    '100 ÷ 10 = ?',
    '10',
    ['8', '9', '10', '12'],
    '',
    { gorsel: bol(100, 10, 'yildiz', 'sari') },
  );
  ekle(
    'b5-t44',
    'Hangi işlemin sonucu 5\'tir?',
    '25 ÷ 5',
    ['20 ÷ 4', '25 ÷ 5', '30 ÷ 6', '15 ÷ 3'],
    '',
    { gorsel: kars(bol(20, 4), bol(25, 5), bol(30, 6), bol(15, 3)) },
  );
  ekle(
    'b5-t45',
    '70 ÷ 7 = ?',
    '10',
    ['8', '9', '10', '11'],
    '',
    { gorsel: bol(70, 7, 'elma') },
  );
  ekle(
    'b5-t46',
    '84 ÷ 7 = ?',
    '12',
    ['10', '11', '12', '14'],
    '',
    { gorsel: bol(84, 7, 'top', 'mavi') },
  );
  ekle(
    'b5-t47',
    '🎭 50 ÷ 5 ile 50 ÷ 10 sonuçları nasıldır?',
    '10 ve 5',
    ['5 ve 10', '10 ve 5', '10 ve 10', '5 ve 5'],
    'Bölen büyüdükçe sonuç küçülür.',
    { gorsel: kars(bol(50, 5), bol(50, 10)), sasirtma: true },
  );
  ekle(
    'b5-t48',
    '96 ÷ 8 = ?',
    '12',
    ['10', '11', '12', '14'],
    '',
    { gorsel: bol(96, 8, 'balon', 'yesil') },
  );
  ekle(
    'b5-t49',
    '99 ÷ 9 = ?',
    '11',
    ['9', '10', '11', '12'],
    '',
    { gorsel: bol(99, 9, 'cicek', 'pembe') },
  );
  ekle(
    'b5-t50',
    '🎭 100 nesneyi 10 gruba eşit ayırırsak her grupta kaç nesne olur?',
    '10',
    ['8', '9', '10', '12'],
    '100 ÷ 10',
    { gorsel: bol(100, 10, 'top', 'kirmizi'), sasirtma: true },
  );

  return sorular;
}

export function bolme2100(karistir) {
  return {
    id: 'bolme-2-100',
    baslik: 'Bölme (2-100)',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Bölme, bir topluluğu eşit parçalara ayırmaktır. 12 elmayı 3 kişiye eşit paylaştırırsak her birine 4 elma düşer: 12 ÷ 3 = 4.',
          gorsel: anl('bl5-anlatim-1'),
        },
        {
          metin:
            'Bölmede kalan olmamalıdır. Eşit paylaştırma yaparken her grupta aynı sayıda nesne olur.',
          gorsel: anl('bl5-anlatim-2'),
        },
        {
          metin:
            'Bölme, çarpmanın tersidir. 3 × 4 = 12 ise 12 ÷ 3 = 4 ve 12 ÷ 4 = 3 olur. Büyük sayılarda da aynı kural geçerlidir: 100 ÷ 10 = 10.',
          gorsel: anl('bl5-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
