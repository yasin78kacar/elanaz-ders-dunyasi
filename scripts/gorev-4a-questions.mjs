/** GOREV-4A — Sayı Doğrusu + Örüntü + Tahmin Etme (150 görselli soru). */

const KAZANIM = {
  SAYI_DOGRUSU: 'MAT.2.2.3',
  ORUNTU: 'MAT.2.2.5',
  TAHMIN_ETME: 'MAT.2.2.6',
};

function sd(baslangic, son, vurgulananlar = []) {
  return { tur: 'sayi-seridi', baslangic, adim: 1, adimSayisi: son - baslangic, vurgulananlar };
}
function orSayi(sayilar, adimEtiketi) {
  return { tur: 'oruntu', elemanlar: [...sayilar.map((n) => ({ tip: 'sayi', deger: n })), { tip: 'soru' }], adimEtiketi };
}
function orRenk(renkler, adimEtiketi) {
  return { tur: 'oruntu', elemanlar: [...renkler.map((r) => ({ tip: 'renk', deger: r })), { tip: 'soru' }], adimEtiketi };
}
function orSekil(sekiller, adimEtiketi, vurguIndeks) {
  return { tur: 'oruntu', elemanlar: [...sekiller.map((s) => ({ tip: 'sekil', deger: s })), { tip: 'soru' }], adimEtiketi, vurguIndeks };
}
function te(sahne, tahmin, gercek) {
  if (tahmin !== undefined && gercek !== undefined) return { tur: 'tahmin-etme', sahne, tahmin, gercek };
  return { tur: 'tahmin-etme', sahne };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function sayiDogrusuAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SAYI_DOGRUSU,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('sd-a1', "Sayı doğrusunda 5'in sağındaki sayı kaçtır?", '6', '', { gorsel: sd(3, 7, [5]) });
  ekle('sd-a2', "Sayı doğrusunda 12'nin solundaki sayı kaçtır?", '11', '', { gorsel: sd(10, 14, [12]) });
  ekle('sd-a3', "8 ile 10'un arasındaki sayı kaçtır?", '9', '', { gorsel: sd(7, 11, [8, 10]) });
  ekle('sd-a4', "Sayı doğrusunda hangi sayı 15'ten büyük, 17'den küçüktür?", '16', '', { gorsel: sd(14, 18, [15, 17]) });
  ekle(
    'sd-a5',
    "🎭 Sayı doğrusunda 0'ın solunda hangi sayı vardır?",
    'yok',
    "Sayı doğrusu 0'dan başlar — solunda hiçbir şey yok!",
    { gorsel: sd(0, 3, [0]), sasirtma: true, alternatifCevaplar: ['hiç sayı yok'] },
  );
  ekle('sd-a6', "Sayı doğrusunda 39'dan sonra hangi sayı gelir?", '40', '', { gorsel: sd(37, 41, [39]) });
  ekle("sd-a7", "50 ile 52'nin arasındaki sayı kaçtır?", '51', '', { gorsel: sd(49, 53, [50, 52]) });
  ekle('sd-a8', "Elanaz sayı doğrusunda 23'ün sağına baktı. Hangi sayıyı gördü?", '24', '', { gorsel: sd(21, 25, [23]) });
  ekle("sd-a9", "Sayı doğrusunda 67'den önce hangi sayı gelir?", '66', '', { gorsel: sd(64, 68, [67]) });
  ekle(
    'sd-a10',
    "🎭 Sayı doğrusunda 100'ün sağında hangi sayı vardır?",
    '101',
    "2. sınıfta 100'e kadar öğrendik — 100'ün sağı bizim sayı doğrumuzun dışında!",
    { gorsel: sd(98, 100, [100]), sasirtma: true, alternatifCevaplar: ['yok'] },
  );
  ekle("sd-a11", "Sayı doğrusunda 45 ile 47 arasındaki sayı kaçtır?", '46', '', { gorsel: sd(44, 48, [45, 47]) });
  ekle("sd-a12", "72'den büyük, 74'ten küçük sayı kaçtır?", '73', '', { gorsel: sd(71, 75, [72, 74]) });
  ekle("sd-a13", "Elanaz sayı doğrusunda 88'in soluna baktı. Ne gördü?", '87', '', { gorsel: sd(86, 90, [88]) });
  ekle("sd-a14", "Sayı doğrusunda 19'dan sonra hangi sayı gelir?", '20', '', { gorsel: sd(17, 21, [19]) });
  ekle(
    'sd-a15',
    "🎭 Sayı doğrusunda 55 solda mı, 57 solda mı?",
    '55 solda',
    'Sayı doğrusunda küçük sayı hep soldadır!',
    { gorsel: sd(54, 58, [55, 57]), sasirtma: true },
  );
  ekle("sd-a16", "33 ile 35'in arasındaki sayı kaçtır?", '34', '', { gorsel: sd(32, 36, [33, 35]) });
  ekle("sd-a17", "Sayı doğrusunda 60'tan önce hangi sayı gelir?", '59', '', { gorsel: sd(58, 62, [60]) });
  ekle("sd-a18", "81'den büyük, 83'ten küçük sayı kaçtır?", '82', '', { gorsel: sd(80, 84, [81, 83]) });
  ekle(
    'sd-a19',
    "Sayı doğrusunda 7'nin komşuları hangi sayılardır?",
    '6 ve 8',
    '',
    { gorsel: sd(5, 9, [6, 7, 8]), cevapTipi: 'metin', alternatifCevaplar: ['6,8', '6 ile 8'] },
  );
  ekle(
    'sd-a20',
    "🎭 Sayı doğrusunda 49'un sağındaki sayı kaçtır?",
    '50',
    "49'dan sonra hangi sayı gelir — dikkat, onluklar değişiyor!",
    { gorsel: sd(47, 51, [49]), sasirtma: true },
  );
  ekle(
    'sd-a21',
    "Elanaz sayı doğrusunda 26 ile 28'in arasını işaretledi. Hangi sayıyı işaretledi?",
    '27',
    '',
    { gorsel: sd(25, 29, [26, 28]) },
  );
  ekle("sd-a22", "Sayı doğrusunda 94'ten sonra hangi sayı gelir?", '95', '', { gorsel: sd(92, 96, [94]) });
  ekle("sd-a23", "16 ve 18'in arasındaki sayı kaçtır?", '17', '', { gorsel: sd(15, 19, [16, 18]) });
  ekle("sd-a24", "Sayı doğrusunda 41'in solundaki sayı kaçtır?", '40', '', { gorsel: sd(39, 43, [41]) });
  ekle(
    'sd-a25',
    "🎭 Sayı doğrusunda hem 30'dan büyük hem 32'den küçük olan sayı kaçtır?",
    '31',
    'İki şart birden — ikisini de sağlayan tek sayı hangisi?',
    { gorsel: sd(29, 33, [30, 32]), sasirtma: true },
  );

  return sorular;
}

function sayiDogrusuTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SAYI_DOGRUSU,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('sd-t1', "Sayı doğrusunda 8'in sağındaki sayı hangisidir?", '9', ['7', '9', '10', '6'], '', { gorsel: sd(6, 10, [8]) });
  ekle('sd-t2', 'Sayı doğrusunda hangi sayı 20 ile 22 arasındadır?', '21', ['19', '23', '21', '20'], '', { gorsel: sd(19, 23, [20, 22]) });
  ekle("sd-t3", "45'ten önce gelen sayı hangisidir?", '44', ['46', '44', '43', '47'], '', { gorsel: sd(43, 47, [45]) });
  ekle(
    'sd-t4',
    "🎭 Sayı doğrusunda 99'un sağındaki sayı hangisidir?",
    '100',
    ['98', '100', '90', '999'],
    "99'dan sonra hangi sayı gelir?",
    { gorsel: sd(97, 100, [99]), sasirtma: true },
  );
  ekle(
    'sd-t5',
    "Elanaz sayı doğrusunda 63 ile 65 arasını işaretledi. Hangi sayıyı işaretledi?",
    '64',
    ['62', '66', '64', '63'],
    '',
    { gorsel: sd(62, 66, [63, 65]) },
  );
  ekle('sd-t6', "Hangi sayı 50'den büyük, 52'den küçüktür?", '51', ['50', '52', '53', '51'], '', { gorsel: sd(49, 53, [50, 52]) });
  ekle(
    'sd-t7',
    'Sayı doğrusunda 7 solda mı, 3 solda mı?',
    '3 solda',
    ['7 solda', '3 solda', 'İkisi aynı yerde', 'Sayı doğrusunda solda yoktur'],
    '',
    { gorsel: sd(1, 8, [3, 7]) },
  );
  ekle(
    'sd-t8',
    "🎭 Sayı doğrusunda 29'un komşuları hangileridir?",
    '28 ve 30',
    ['27 ve 31', '28 ve 30', '20 ve 30', '29 ve 30'],
    'Komşu = bir önceki ve bir sonraki!',
    { gorsel: sd(27, 31, [28, 29, 30]), sasirtma: true },
  );
  ekle("sd-t9", "Sayı doğrusunda 76'dan sonra hangi sayı gelir?", '77', ['75', '77', '78', '74'], '', { gorsel: sd(74, 78, [76]) });
  ekle(
    'sd-t10',
    'Hangisi sayı doğrusunda en solda durur?',
    '44',
    ['45', '54', '44', '46'],
    '',
    { gorsel: sd(43, 54, [44]) },
  );
  ekle(
    'sd-t11',
    "🎭 Sayı doğrusunda 40 ile 42 arasında kaç sayı vardır?",
    '1',
    ['2', '0', '1', '3'],
    '40...41...42 — arada sadece 41 var!',
    { gorsel: sd(39, 43, [40, 42]), sasirtma: true },
  );
  ekle(
    'sd-t12',
    "Elanaz'ın sayı doğrusunda 85'in solunda gördüğü sayı hangisidir?",
    '84',
    ['86', '84', '87', '83'],
    '',
    { gorsel: sd(83, 87, [85]) },
  );
  ekle(
    'sd-t13',
    "Sayı doğrusunda 17'den küçük, 15'ten büyük sayı hangisidir?",
    '16',
    ['14', '18', '16', '15'],
    '',
    { gorsel: sd(14, 18, [15, 17]) },
  );
  ekle(
    'sd-t14',
    "🎭 Sayı doğrusunda 39 ile 41 arasındaki sayı hangisidir?",
    '40',
    ['38', '42', '40', '39'],
    'Onluk sınırı geçiyor — dikkatli ol!',
    { gorsel: sd(38, 42, [39, 41]), sasirtma: true },
  );
  ekle(
    'sd-t15',
    "Hangi sayı sayı doğrusunda 58'in hemen sağındadır?",
    '59',
    ['57', '59', '60', '56'],
    '',
    { gorsel: sd(56, 60, [58]) },
  );
  ekle('sd-t16', 'Sayı doğrusunda 91 ile 93 arasındaki sayı hangisidir?', '92', ['90', '94', '92', '91'], '', { gorsel: sd(90, 94, [91, 93]) });
  ekle(
    'sd-t17',
    "🎭 Elanaz \"Sayı doğrusunda 50'nin solunda 49, sağında 51 vardır\" dedi. Bu doğru mu?",
    'Evet',
    ['Hayır, solda 51 var', 'Evet', 'Hayır, sağda 49 var', 'İkisi de yanlış'],
    'Küçük sol, büyük sağ — 49<50<51 doğru mu?',
    { gorsel: sd(48, 52, [49, 50, 51]), sasirtma: true },
  );
  ekle("sd-t18", "Sayı doğrusunda 72'den önce hangi sayı gelir?", '71', ['73', '71', '70', '74'], '', { gorsel: sd(70, 74, [72]) });
  ekle('sd-t19', 'Hangi sayı 66 ile 68 arasındadır?', '67', ['65', '69', '67', '66'], '', { gorsel: sd(65, 69, [66, 68]) });
  ekle(
    'sd-t20',
    'Sayı doğrusunda en büyük sayı sağda mı, solda mı durur?',
    'Sağda',
    ['Solda', 'Sağda', 'Ortada', 'Her yerde'],
    '',
    { gorsel: sd(1, 10, [1, 10]) },
  );
  ekle(
    'sd-t21',
    "🎭 Sayı doğrusunda 10 ile 12 arasında kaç TAM sayı vardır?",
    '1',
    ['2', '3', '1', '0'],
    '10...11...12 — arada sadece 11 var, 10 ve 12 arasında DEĞİL!',
    { gorsel: sd(9, 13, [10, 12]), sasirtma: true },
  );
  ekle(
    'sd-t22',
    "Elanaz sayı doğrusunda 35'in sağına 2 adım attı. Hangi sayıya geldi?",
    '37',
    ['33', '36', '37', '34'],
    '',
    { gorsel: sd(33, 38, [35, 36, 37]) },
  );
  ekle('sd-t23', 'Sayı doğrusunda 48 ile 50 arasındaki sayı hangisidir?', '49', ['47', '51', '49', '48'], '', { gorsel: sd(47, 51, [48, 50]) });
  ekle(
    'sd-t24',
    "Sayı doğrusunda 83'ten büyük, 85'ten küçük sayı hangisidir?",
    '84',
    ['82', '86', '84', '83'],
    '',
    { gorsel: sd(82, 86, [83, 85]) },
  );
  ekle(
    'sd-t25',
    "🎭 Sayı doğrusunda hem 74'ten büyük hem 76'dan küçük olan KAÇ sayı vardır?",
    '1',
    ['2', '0', '3', '1'],
    "Sadece 75 hem 74'ten büyük hem 76'dan küçük!",
    { gorsel: sd(73, 77, [74, 76]), sasirtma: true },
  );

  return sorular;
}

function oruntuAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ORUNTU,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('or-a1', '2, 4, 6, 8, ... → Sonraki sayı kaçtır?', '10', '', { gorsel: orSayi([2, 4, 6, 8], '+2') });
  ekle('or-a2', '5, 10, 15, 20, ... → Sonraki sayı kaçtır?', '25', '', { gorsel: orSayi([5, 10, 15, 20], '+5') });
  ekle('or-a3', '30, 27, 24, 21, ... → Sonraki sayı kaçtır?', '18', '', { gorsel: orSayi([30, 27, 24, 21], '-3') });
  ekle(
    'or-a4',
    'Kırmızı top, mavi top, kırmızı top, mavi top, ... → Sıradaki hangi renk top gelir?',
    'kırmızı',
    '',
    { gorsel: orRenk(['kırmızı', 'mavi', 'kırmızı', 'mavi'], 'tekrar'), alternatifCevaplar: ['Kırmızı'] },
  );
  ekle(
    'or-a5',
    '🎭 1, 5, 9, 13, ... → Bu örüntünün kuralı nedir?',
    'dörder artıyor',
    'Farkları hesapla: 5-1=?, 9-5=?, kural her seferinde aynı artış!',
    { gorsel: orSayi([1, 5, 9, 13], '+4'), sasirtma: true },
  );
  ekle('or-a6', '10, 20, 30, 40, ... → Sonraki sayı kaçtır?', '50', '', { gorsel: orSayi([10, 20, 30, 40], '+10') });
  ekle(
    'or-a7',
    'Üçgen, daire, kare, üçgen, daire, kare, ... → Sıradaki şekil hangisidir?',
    'üçgen',
    '',
    { gorsel: orSekil(['üçgen', 'daire', 'kare', 'üçgen', 'daire', 'kare'], '3lü tekrar', 0), alternatifCevaplar: ['Üçgen'] },
  );
  ekle(
    'or-a8',
    'Elanaz her gün kumbarasına 3 TL koyuyor. Pazartesi 3 TL, Salı 6 TL, Çarşamba 9 TL... Perşembe kaç TL olur?',
    '12 TL',
    '',
    { gorsel: orSayi([3, 6, 9], '+3'), cevapTipi: 'metin', alternatifCevaplar: ['12'] },
  );
  ekle('or-a9', '50, 45, 40, 35, ... → Sonraki sayı kaçtır?', '30', '', { gorsel: orSayi([50, 45, 40, 35], '-5') });
  ekle(
    'or-a10',
    '🎭 2, 4, 8, 16, ... → Bu örüntünün kuralı nedir?',
    'iki katına çıkıyor',
    'Bu sefer toplama değil — her sayı bir öncekinin KAÇ KATI?',
    { gorsel: orSayi([2, 4, 8, 16], '×2'), sasirtma: true },
  );
  ekle(
    'or-a11',
    'Sarı yıldız, sarı yıldız, mavi ay, sarı yıldız, sarı yıldız, mavi ay, ... → Sıradaki hangisidir?',
    'sarı yıldız',
    '',
    { gorsel: orSekil(['sarı yıldız', 'sarı yıldız', 'mavi ay', 'sarı yıldız', 'sarı yıldız', 'mavi ay'], '2+1 tekrar', 0), alternatifCevaplar: ['Sarı yıldız'] },
  );
  ekle('or-a12', '15, 18, 21, 24, ... → Sonraki sayı kaçtır?', '27', '', { gorsel: orSayi([15, 18, 21, 24], '+3') });
  ekle('or-a13', '99, 88, 77, 66, ... → Sonraki sayı kaçtır?', '55', '', { gorsel: orSayi([99, 88, 77, 66], '-11') });
  ekle(
    'or-a14',
    'Elanaz boncukları dizer: 1 kırmızı, 2 mavi, 1 kırmızı, 2 mavi... Sıradaki boncuk hangi renktir?',
    'kırmızı',
    '',
    { gorsel: orRenk(['kırmızı', 'mavi', 'mavi', 'kırmızı', 'mavi', 'mavi'], '1K-2M'), alternatifCevaplar: ['Kırmızı'] },
  );
  ekle(
    'or-a15',
    '🎭 20, 17, 14, 11, ... → Bu örüntü artıyor mu, azalıyor mu?',
    'azalıyor',
    'Her terim bir öncekinden büyük mü küçük mü?',
    { gorsel: orSayi([20, 17, 14, 11], '-3'), sasirtma: true, alternatifCevaplar: ['üçer azalıyor'] },
  );
  ekle('or-a16', '4, 8, 12, 16, ... → Sonraki sayı kaçtır?', '20', '', { gorsel: orSayi([4, 8, 12, 16], '+4') });
  ekle(
    'or-a17',
    'Büyük kare, küçük kare, büyük kare, küçük kare, ... → Sıradaki hangisidir?',
    'büyük kare',
    '',
    { gorsel: orSekil(['büyük kare', 'küçük kare', 'büyük kare', 'küçük kare'], 'AB', 0), alternatifCevaplar: ['Büyük kare'] },
  );
  ekle('or-a18', '25, 30, 35, 40, ... → Sonraki sayı kaçtır?', '45', '', { gorsel: orSayi([25, 30, 35, 40], '+5') });
  ekle('or-a19', '80, 70, 60, 50, ... → Sonraki sayı kaçtır?', '40', '', { gorsel: orSayi([80, 70, 60, 50], '-10') });
  ekle(
    'or-a20',
    '🎭 3, 6, 9, 12, 15, ... → 10. terim kaçtır?',
    '30',
    'Kural üçer artıyor — 1. terim 3, 2. terim 6... 10. terim ne olur?',
    { gorsel: orSayi([3, 6, 9, 12, 15], '+3'), sasirtma: true },
  );
  ekle(
    'or-a21',
    'Kırmızı-sarı-mavi-kırmızı-sarı-mavi-kırmızı-... → Sıradaki renk hangisidir?',
    'sarı',
    '',
    { gorsel: orRenk(['kırmızı', 'sarı', 'mavi', 'kırmızı', 'sarı', 'mavi', 'kırmızı'], '3lü tekrar'), alternatifCevaplar: ['Sarı'] },
  );
  ekle('or-a22', '7, 14, 21, 28, ... → Sonraki sayı kaçtır?', '35', '', { gorsel: orSayi([7, 14, 21, 28], '+7') });
  ekle('or-a23', '100, 90, 80, 70, ... → Sonraki sayı kaçtır?', '60', '', { gorsel: orSayi([100, 90, 80, 70], '-10') });
  ekle(
    'or-a24',
    'Elanaz şu diziyi buldu: 5, 8, 11, 14, ... Kuralı nedir?',
    'üçer artıyor',
    '',
    { gorsel: orSayi([5, 8, 11, 14], '+3') },
  );
  ekle(
    'or-a25',
    '🎭 Hangi dizi bir ÖRÜNTÜ DEĞİLDİR? (A) 2,4,6,8 (B) 5,10,15,20 (C) 3,7,2,9 (D) 10,8,6,4',
    'C',
    'Örüntünün kuralı TUTARLI olmalı — hangi dizide kural yok?',
    { gorsel: orSayi([2, 4, 6, 8], 'karşılaştır'), sasirtma: true, alternatifCevaplar: ['3,7,2,9 kuralsız'] },
  );

  return sorular;
}

function oruntuTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ORUNTU,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('or-t1', '3, 6, 9, 12, ... → Sonraki sayı hangisidir?', '15', ['13', '14', '15', '16'], '', { gorsel: orSayi([3, 6, 9, 12], '+3') });
  ekle(
    'or-t2',
    'Kırmızı, mavi, kırmızı, mavi, ... → Sıradaki hangisidir?',
    'Kırmızı',
    ['Kırmızı', 'Mavi', 'Yeşil', 'Sarı'],
    '',
    { gorsel: orRenk(['kırmızı', 'mavi', 'kırmızı', 'mavi'], 'AB') },
  );
  ekle('or-t3', '20, 18, 16, 14, ... → Sonraki sayı hangisidir?', '12', ['13', '12', '11', '10'], '', { gorsel: orSayi([20, 18, 16, 14], '-2') });
  ekle(
    'or-t4',
    '🎭 5, 10, 15, 20, ... → Bu örüntünün kuralı hangisidir?',
    'Beşer artıyor',
    ['İkişer artıyor', 'Üçer artıyor', 'Beşer artıyor', 'Onar artıyor'],
    '10-5=?, 15-10=? farkı hesapla!',
    { gorsel: orSayi([5, 10, 15, 20], '+5'), sasirtma: true },
  );
  ekle(
    'or-t5',
    'Üçgen, daire, üçgen, daire, ... → Sıradaki hangisidir?',
    'Üçgen',
    ['Daire', 'Kare', 'Üçgen', 'Yıldız'],
    '',
    { gorsel: orSekil(['üçgen', 'daire', 'üçgen', 'daire'], 'AB', 0) },
  );
  ekle('or-t6', '10, 20, 30, 40, ... → Sonraki sayı hangisidir?', '50', ['41', '45', '50', '60'], '', { gorsel: orSayi([10, 20, 30, 40], '+10') });
  ekle(
    'or-t7',
    '🎭 16, 13, 10, 7, ... → Bu örüntü ne kadar azalıyor?',
    'Üçer',
    ['İkişer', 'Dörder', 'Üçer', 'Beşer'],
    '16-13=?, 13-10=? hesapla!',
    { gorsel: orSayi([16, 13, 10, 7], '-3'), sasirtma: true },
  );
  ekle(
    'or-t8',
    'Elanaz her gün 5 TL biriktiriyor. Pazartesi 5 TL, Salı 10 TL oldu. Çarşamba kaç TL olur?',
    '15',
    ['12', '13', '14', '15'],
    '',
    { gorsel: orSayi([5, 10], '+5') },
  );
  ekle('or-t9', '45, 40, 35, 30, ... → Sonraki sayı hangisidir?', '25', ['29', '28', '27', '25'], '', { gorsel: orSayi([45, 40, 35, 30], '-5') });
  ekle(
    'or-t10',
    '🎭 2, 4, 6, 8, 10, ... → 7. terim kaçtır?',
    '14',
    ['12', '13', '14', '16'],
    '1.terim=2, 2.terim=4... 7. terim=2×7=?',
    { gorsel: orSayi([2, 4, 6, 8, 10], '+2'), sasirtma: true },
  );
  ekle(
    'or-t11',
    'Sarı-mavi-sarı-mavi-sarı-... → 6. terim hangi renktir?',
    'Mavi',
    ['Sarı', 'Mavi', 'Yeşil', 'Kırmızı'],
    '',
    { gorsel: orRenk(['sarı', 'mavi', 'sarı', 'mavi', 'sarı'], 'AB') },
  );
  ekle('or-t12', '6, 12, 18, 24, ... → Sonraki sayı hangisidir?', '30', ['28', '29', '30', '32'], '', { gorsel: orSayi([6, 12, 18, 24], '+6') });
  ekle(
    'or-t13',
    '🎭 Aşağıdaki dizilerden hangisi örüntüdür?',
    '4,4,4,4',
    ['1,3,2,5', '4,4,4,4', '7,3,9,1', '2,5,1,8'],
    'Örüntü tutarlı kural ister — hangisi tutarlı?',
    { gorsel: orSayi([4, 4, 4, 4], 'sabit'), sasirtma: true },
  );
  ekle('or-t14', '90, 80, 70, 60, ... → Sonraki sayı hangisidir?', '50', ['55', '58', '50', '45'], '', { gorsel: orSayi([90, 80, 70, 60], '-10') });
  ekle(
    'or-t15',
    'Büyük-küçük-büyük-küçük yıldız dizisinde 5. yıldız hangisidir?',
    'Büyük',
    ['Küçük', 'Büyük', 'Orta', 'Yok'],
    '',
    { gorsel: orSekil(['büyük yıldız', 'küçük yıldız', 'büyük yıldız', 'küçük yıldız'], 'AB', 0) },
  );
  ekle(
    'or-t16',
    '🎭 3, 6, 12, 24, ... → Sonraki sayı hangisidir?',
    '48',
    ['36', '40', '48', '30'],
    'Bu sefer toplama değil, çarpma — her sayı iki katı!',
    { gorsel: orSayi([3, 6, 12, 24], '×2'), sasirtma: true },
  );
  ekle('or-t17', '11, 22, 33, 44, ... → Sonraki sayı hangisidir?', '55', ['50', '54', '55', '56'], '', { gorsel: orSayi([11, 22, 33, 44], '+11') });
  ekle(
    'or-t18',
    "Elanaz'ın örüntüsü: 8, 6, 4, 2, ... Sonraki sayı hangisidir?",
    '0',
    ['1', '0', '-1', '3'],
    '',
    { gorsel: orSayi([8, 6, 4, 2], '-2') },
  );
  ekle(
    'or-t19',
    '🎭 1, 2, 3, 1, 2, 3, 1, ... → 10. terim hangisidir?',
    '1',
    ['1', '2', '3', '4'],
    "Dizi 3'lü tekrar ediyor — 10÷3=3 kalan 1, yani 10. terim dizinin 1. elemanı!",
    { gorsel: orSayi([1, 2, 3, 1, 2, 3, 1], '3lü tekrar'), sasirtma: true },
  );
  ekle('or-t20', '5, 15, 25, 35, ... → Sonraki sayı hangisidir?', '45', ['40', '43', '45', '50'], '', { gorsel: orSayi([5, 15, 25, 35], '+10') });
  ekle(
    'or-t21',
    'Kırmızı yıldız-sarı ay-mavi güneş-kırmızı yıldız-... → Sıradaki hangisidir?',
    'Sarı ay',
    ['Kırmızı yıldız', 'Sarı ay', 'Mavi güneş', 'Yeşil kalp'],
    '',
    { gorsel: orSekil(['kırmızı yıldız', 'sarı ay', 'mavi güneş', 'kırmızı yıldız'], 'ABC', 1) },
  );
  ekle(
    'or-t22',
    '🎭 Örüntü: 100, 95, 90, 85, ... Kaçıncı terimde 70\'e ulaşılır?',
    '7.',
    ['5.', '6.', '7.', '8.'],
    '100,95,90,85,80,75,70 — say bakalım!',
    { gorsel: orSayi([100, 95, 90, 85], '-5'), sasirtma: true },
  );
  ekle('or-t23', '8, 16, 24, 32, ... → Sonraki sayı hangisidir?', '40', ['36', '38', '40', '42'], '', { gorsel: orSayi([8, 16, 24, 32], '+8') });
  ekle(
    'or-t24',
    'Dizinin kuralı "dörder artıyor" ve ilk terim 4\'tür. 5. terim kaçtır?',
    '20',
    ['16', '18', '20', '24'],
    '',
    { gorsel: orSayi([4, 8, 12, 16, 20], '+4') },
  );
  ekle(
    'or-t25',
    '🎭 60, 55, 50, 45, ... → Bu dizi kaçıncı terimde 30\'a ulaşır?',
    '7.',
    ['5.', '6.', '7.', '8.'],
    '60,55,50,45,40,35,30 — 7. terim!',
    { gorsel: orSayi([60, 55, 50, 45], '-5'), sasirtma: true },
  );

  return sorular;
}

function tahminEtmeAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TAHMIN_ETME,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('te-a1', 'Kavanozda yaklaşık kaç misket var: 5 mi, 50 mi, 500 mü?', '5', '', { gorsel: te('misket-az') });
  ekle('te-a2', 'Elanaz 20 tahmin etti, gerçek 25 çıktı. Az mı, fazla mı tahmin etmiş?', 'az', '', { gorsel: te('dort-tahmin', 20, 25), alternatifCevaplar: ['Az'] });
  ekle('te-a3', 'Sınıfta yaklaşık kaç öğrenci oturur: 3 mü, 30 mu, 300 mü?', '30', '', { gorsel: te('sinif') });
  ekle(
    'te-a4',
    '10 misket ne kadar yer kaplar görüyoruz. Büyük kapta yaklaşık kaç misket olabilir?',
    'yaklaşık 30-40',
    '',
    { gorsel: te('referans-10'), alternatifCevaplar: ['30', '35', '40', '30-40'] },
  );
  ekle(
    'te-a5',
    '🎭 Elanaz "Sınıfımızda 200 öğrenci var" dedi. Bu makul bir tahmin mi?',
    'hayır, makul değil',
    'Bir sınıfta kaç sıra, kaç çocuk olabilir — 200 gerçekçi mi?',
    { gorsel: te('sinif'), sasirtma: true, alternatifCevaplar: ['hayır'] },
  );
  ekle('te-a6', 'Elanaz 15 tahmin etti, gerçek 12 çıktı. Az mı, fazla mı tahmin etmiş?', 'fazla', '', { gorsel: te('dort-tahmin', 15, 12), alternatifCevaplar: ['Fazla'] });
  ekle('te-a7', 'Bir kitapta yaklaşık kaç sayfa olur: 10 mu, 100 mü, 1000 mi?', '100', '', { gorsel: te('kitap') });
  ekle('te-a8', 'Bardakta yaklaşık kaç çay kaşığı su var: 3 mü, 30 mu, 300 mü?', '3', '', { gorsel: te('bardak') });
  ekle(
    'te-a9',
    '🎭 Ali "Bahçedeki ağaçta yaklaşık 1.000.000 elma var" dedi. Bu iyi bir tahmin mi?',
    'hayır',
    'Bir ağaçta yüzlerce elma olur, milyonlarca değil!',
    { gorsel: te('agac'), sasirtma: true, alternatifCevaplar: ['Hayır'] },
  );
  ekle(
    'te-a10',
    'Elanaz 40 tahmin etti, gerçek 38 çıktı. Az mı, fazla mı, doğru mu tahmin etmiş?',
    'yaklaşık doğru',
    '',
    { gorsel: te('dort-tahmin', 40, 38), alternatifCevaplar: ['fazla ama çok yakın'] },
  );
  ekle('te-a11', 'Bir günde yaklaşık kaç kez nefes alırız: 10 mu, 1.000 mi, 100 mü?', '1.000', '', { gorsel: te('okul') });
  ekle('te-a12', 'Sepette yaklaşık kaç elma var: 5 mi, 50 mi?', '5', '', { gorsel: te('sepet-elma') });
  ekle(
    'te-a13',
    '🎭 Elanaz kalem kutusundaki kalemleri saymadan önce tahmin etti: "20 kalem var." Açınca 8 çıktı. Elanaz fazla mı, az mı tahmin etmiş?',
    'fazla tahmin etmiş',
    '20 mi çok, 8 mi çok?',
    { gorsel: te('kalem-kutusu', 20, 8), sasirtma: true, alternatifCevaplar: ['fazla'] },
  );
  ekle('te-a14', 'Sınıf kitaplığında yaklaşık kaç kitap var: 5 mi, 50 mi, 500 mü?', '50', '', { gorsel: te('kitaplik') });
  ekle('te-a15', 'Elanaz bir çuval pirince baktı: "yaklaşık 1.000 tane pirinç tanesi vardır" dedi. Bu makul mu?', 'evet makul', '', {
    gorsel: te('pirinç'),
    alternatifCevaplar: ['evet'],
  });
  ekle(
    'te-a16',
    '🎭 Masada 10 boncuk var. Elanaz ikinci masada "yaklaşık 10" dedi ama 35 çıktı. Bu iyi bir tahmin mi?',
    'hayır, iyi tahmin değil',
    '10 tahmin, 35 gerçek — fark çok büyük, iyi tahmin sayılır mı?',
    { gorsel: te('referans-10', 10, 35), sasirtma: true, alternatifCevaplar: ['hayır'] },
  );
  ekle('te-a17', 'Tahmin: 25, Gerçek: 24. Bu iyi bir tahmin mi? (evet/hayır)', 'evet', '', {
    gorsel: te('dort-tahmin', 25, 24),
    alternatifCevaplar: ['Evet'],
  });
  ekle('te-a18', 'Tahmin: 10, Gerçek: 80. Bu iyi bir tahmin mi? (evet/hayır)', 'hayır', '', {
    gorsel: te('dort-tahmin', 10, 80),
    alternatifCevaplar: ['Hayır'],
  });
  ekle(
    'te-a19',
    'Elanaz sınıftaki sandalyeleri saymadan önce tahmin etti. Hangi tahmin daha iyi: 25 mi, 200 mü?',
    '25',
    '',
    { gorsel: te('sinif') },
  );
  ekle(
    'te-a20',
    '🎭 "Tahmin her zaman tam doğru olmalıdır." Bu doğru mu?',
    'hayır, yanlış',
    'Tahmin = kesin sayma değil, yaklaşık değer!',
    { gorsel: te('dort-tahmin'), sasirtma: true, alternatifCevaplar: ['hayır'] },
  );
  ekle('te-a21', 'Elanaz 30 tahmin etti, gerçek 29 çıktı. Değerlendirme nasıl?', 'çok iyi tahmin', '', { gorsel: te('dort-tahmin', 30, 29) });
  ekle(
    'te-a22',
    'Büyük çantada yaklaşık kaç kitap var: 3 mü, 30 mu, 300 mü?',
    '3-5 arası',
    '',
    { gorsel: te('kitap'), alternatifCevaplar: ['3', '4', '5'] },
  );
  ekle('te-a23', 'Tahmin: 50, Gerçek: 20. Fazla mı, az mı tahmin edilmiş?', 'fazla', '', { gorsel: te('dort-tahmin', 50, 20), alternatifCevaplar: ['Fazla'] });
  ekle(
    'te-a24',
    'Elanaz kavanozdaki şekerleri tahmin ederken ne yapmalı?',
    'referans sayıyı kullanmalı',
    '',
    { gorsel: te('referans-10'), alternatifCevaplar: ['önce 10 tanesinin nasıl göründüğünü görmeli'] },
  );
  ekle(
    'te-a25',
    '🎭 Aynı büyüklükte iki kavanoz var: birinde büyük misketler, birinde küçük misketler. Hangisinde DAHA ÇOK misket olur?',
    'küçük misketli kavanos',
    'Küçük nesneler daha sık yerleşir!',
    { gorsel: te('iki-kavanoz-kucuk'), sasirtma: true, alternatifCevaplar: ['küçük misketli kavanoz'] },
  );

  return sorular;
}

function tahminEtmeTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TAHMIN_ETME,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('te-t1', 'Elanaz 20 tahmin etti, gerçek 25 çıktı. Nasıl tahmin etmiş?', 'Az', ['Fazla', 'Az', 'Doğru', 'Hiç'], '', { gorsel: te('dort-tahmin', 20, 25) });
  ekle('te-t2', 'Bir sınıfta kaç öğrenci olur (makul tahmin)?', '30', ['3', '30', '300', '3000'], '', { gorsel: te('sinif') });
  ekle('te-t3', 'Tahmin: 15, Gerçek: 15. Bu nasıl bir tahmin?', 'Tam', ['Az', 'Fazla', 'Tam', 'Kötü'], '', { gorsel: te('dort-tahmin', 15, 15) });
  ekle(
    'te-t4',
    '🎭 Hangi tahmin en İYİDİR? (Gerçek sayı: 40)',
    '38',
    ['5', '100', '38', '200'],
    'Gerçeğe en yakın olan en iyi tahmindir!',
    { gorsel: te('dort-tahmin', 38, 40), sasirtma: true },
  );
  ekle(
    'te-t5',
    'Elanaz kalem kutusunda 8 kalem olduğunu tahmin etti, 20 çıktı. Nasıl tahmin etmiş?',
    'Az',
    ['Fazla', 'Az', 'Doğru', 'Makul'],
    '',
    { gorsel: te('kalem-kutusu', 8, 20) },
  );
  ekle(
    'te-t6',
    'Büyük çuvaldaki pirinç tanelerini tahmin etmek için ne yapmalıyız?',
    'Referans grup kullan',
    ['Hepsini say', 'Referans grup kullan', 'Hiç bakma', 'Çuvalı tart'],
    '',
    { gorsel: te('pirinç') },
  );
  ekle(
    'te-t7',
    '🎭 "Tahmin ne kadar gerçeğe yakınsa o kadar iyidir." Bu doğru mu?',
    'Evet',
    ['Hayır', 'Evet', 'Bazen', 'Hiçbir zaman'],
    'Tahminimizin amacı gerçeğe yakın olmak!',
    { gorsel: te('dort-tahmin'), sasirtma: true },
  );
  ekle('te-t8', 'Tahmin: 30, Gerçek: 45. Nasıl tahmin edilmiş?', 'Az', ['Tam', 'Fazla', 'Az', 'Makul değil'], '', { gorsel: te('dort-tahmin', 30, 45) });
  ekle(
    'te-t9',
    'Hangisi makul bir tahmin DEĞİLDİR?',
    'Okulda 1.000.000 öğrenci',
    ['Sınıfta 28 öğrenci', 'Kitapta 150 sayfa', 'Kalem kutusunda 10 kalem', 'Okulda 1.000.000 öğrenci'],
    '',
    { gorsel: te('okul') },
  );
  ekle(
    'te-t10',
    '🎭 Elanaz büyük kavanozdaki şekerleri tahmin etti: "yaklaşık 100." Gerçek 97 çıktı. Bu iyi tahmin mi?',
    'Evet, çok iyi',
    ['Hayır, çok yanlış', 'Evet, çok iyi', 'Orta', 'Kötü'],
    '100 tahmin, 97 gerçek — fark sadece 3!',
    { gorsel: te('iki-kavanoz', 100, 97), sasirtma: true },
  );
  ekle('te-t11', 'Bir ağaçta yaklaşık kaç yaprak olur?', '1.000', ['10', '1.000', '1.000.000', '5'], '', { gorsel: te('agac') });
  ekle('te-t12', 'Tahmin: 60, Gerçek: 20. Nasıl tahmin edilmiş?', 'Fazla', ['Az', 'Fazla', 'Doğru', 'Makul'], '', { gorsel: te('dort-tahmin', 60, 20) });
  ekle(
    'te-t13',
    '🎭 Küçük kapta 10 boncuk sığıyor. Aynı büyüklükteki 3 kap yan yana konsa toplam kaç boncuk sığar (tahmin)?',
    '30',
    ['10', '20', '30', '100'],
    '3 kap × 10 boncuk = ?',
    { gorsel: te('uc-kap'), sasirtma: true },
  );
  ekle(
    'te-t14',
    'Elanaz saymadan önce "yaklaşık 15" dedi, gerçek 14 çıktı. Bu nasıl bir tahmin?',
    'Fazla ama iyi',
    ['Kötü', 'Fazla ama iyi', 'Az ve kötü', 'Hiç'],
    '',
    { gorsel: te('dort-tahmin', 15, 14) },
  );
  ekle(
    'te-t15',
    'Hangisi tahmin için doğru bir yaklaşımdır?',
    'Referans grup kullan',
    ['Rastgele söyle', 'Referans grup kullan', 'Saymadan cevapla', 'Büyük sayı söyle'],
    '',
    { gorsel: te('referans-10') },
  );
  ekle(
    'te-t16',
    '🎭 "Tahmin yaparken hata yapmak normaldir." Doğru mu?',
    'Evet',
    ['Hayır', 'Evet', 'Sadece küçük hatalar', 'Hiçbir zaman hata olmaz'],
    'Tahmin = kesin değil — hata olabilir, önemli olan makul olmak!',
    { gorsel: te('dort-tahmin'), sasirtma: true },
  );
  ekle(
    'te-t17',
    'Tahmin: 50, Gerçek: 48. Bu nasıl bir tahmin?',
    'Fazla ama çok iyi',
    ['Kötü', 'Az', 'Fazla ama çok iyi', 'Yanlış'],
    '',
    { gorsel: te('dort-tahmin', 50, 48) },
  );
  ekle('te-t18', 'Bir fincan çayda yaklaşık kaç yudum su var?', '10', ['1', '10', '100', '1000'], '', { gorsel: te('cay-fincani') });
  ekle(
    'te-t19',
    '🎭 Aynı büyüklükte iki kutuda biri büyük toplarla, biri küçük toplarla dolu. Hangisinde daha az top vardır?',
    'Büyük toplarda',
    ['Küçük toplarda', 'Büyük toplarda', 'İkisinde eşit', 'Hiçbirinde'],
    'Büyük nesneler daha az sığar!',
    { gorsel: te('iki-kavanoz'), sasirtma: true },
  );
  ekle('te-t20', 'Tahmin: 25, Gerçek: 50. Nasıl tahmin edilmiş?', 'Az', ['Fazla', 'Az', 'Doğru', 'Makul'], '', { gorsel: te('dort-tahmin', 25, 50) });
  ekle(
    'te-t21',
    'Okuldaki tüm öğrencileri tahmin etmek için ne yapabiliriz?',
    'Bir sınıfı say, sınıf sayısıyla çarp',
    ['Rastgele say', 'Bir sınıfı say, sınıf sayısıyla çarp', 'Sadece bak', 'Sormak yok'],
    '',
    { gorsel: te('okul') },
  );
  ekle(
    'te-t22',
    '🎭 Elanaz "Tahmin 10, Gerçek 11 — bu kötü bir tahmin" dedi. Haklı mı?',
    'Hayır, 1 fark çok iyi tahmin',
    ['Evet, haklı', 'Hayır, 1 fark çok iyi tahmin', 'Belki', 'Tahmin söylenmez'],
    'Sadece 1 fark — bu mükemmel tahmin sayılır!',
    { gorsel: te('dort-tahmin', 10, 11), sasirtma: true },
  );
  ekle(
    'te-t23',
    'Bir kitaplıktaki kitapları tahmin etmek için ne yapmalıyız?',
    'Bir rafa bak, raf sayısıyla çarp',
    ['Hepsini say', 'Bir rafa bak, raf sayısıyla çarp', 'Rastgele söyle', 'Tartarak bul'],
    '',
    { gorsel: te('kitaplik') },
  );
  ekle('te-t24', 'Tahmin: 100, Gerçek: 30. Bu nasıl bir tahmin?', 'Fazla', ['İyi', 'Fazla', 'Az', 'Makul'], '', { gorsel: te('dort-tahmin', 100, 30) });
  ekle(
    'te-t25',
    '🎭 İyi tahmin yapabilmek için en önemli şey nedir?',
    'Referans kullanmak ve deneyim',
    ['Şans', 'Referans kullanmak ve deneyim', 'Hep büyük sayı söylemek', 'Hiç tahmin etmemek'],
    'Referans + deneyim = iyi tahmin!',
    { gorsel: te('referans-10'), sasirtma: true },
  );

  return sorular;
}

export function sayiDogrusu(karistir) {
  return {
    id: 'sayi-dogrusu',
    baslik: 'Sayı Doğrusu',
    kazanimKodu: KAZANIM.SAYI_DOGRUSU,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Sayıları sırayla bir doğru üzerinde gösterebiliriz. Bu doğruya SAYI DOĞRUSU denir. Solda küçük sayılar, sağda büyük sayılar olur!',
          gorsel: sd(0, 20, [0, 20]),
        },
        {
          metin:
            "Sayı doğrusunda bir sayının solundaki sayı ondan KÜÇÜK, sağındaki sayı ondan BÜYÜKTÜR. 7'nin solunda 6 var — 6, 7'den küçük. 7'nin sağında 8 var — 8, 7'den büyük.",
          gorsel: sd(5, 9, [6, 7, 8]),
        },
        {
          metin: "Sayı doğrusunda iki sayı arasındaki sayıyı da bulabiliriz! 14 ile 16'nın arasında 15 vardır.",
          gorsel: sd(12, 18, [14, 15, 16]),
        },
      ],
    },
    alistirma: sayiDogrusuAlistirma(),
    test: sayiDogrusuTest(karistir),
  };
}

export function oruntu(karistir) {
  return {
    id: 'oruntu',
    baslik: 'Örüntü',
    kazanimKodu: KAZANIM.ORUNTU,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Tekrarlanan veya belirli bir kurala göre devam eden dizilere ÖRÜNTÜ denir. Örüntünün bir KURALI vardır — bu kuralı bulursan bir sonraki terimi tahmin edebilirsin!',
          gorsel: orSekil(['kırmızı daire', 'mavi kare', 'kırmızı daire', 'mavi kare', 'kırmızı daire'], 'tekrar', 0),
        },
        {
          metin:
            'Sayı örüntülerinde de kural vardır! 3, 5, 7, 9... Bu örüntünün kuralı: ikişer artıyor! Bir sonraki sayı: 11.',
          gorsel: orSayi([3, 5, 7, 9], '+2'),
        },
        {
          metin:
            'Örüntü kuralını bulmak için: ilk iki terime bak, farkı hesapla, devam ettir. 10, 8, 6, 4... Kural: ikişer azalıyor → sonraki: 2!',
          gorsel: orSayi([10, 8, 6, 4], '-2'),
        },
      ],
    },
    alistirma: oruntuAlistirma(),
    test: oruntuTest(karistir),
  };
}

export function tahminEtme(karistir) {
  return {
    id: 'tahmin-etme',
    baslik: 'Tahmin Etme',
    kazanimKodu: KAZANIM.TAHMIN_ETME,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Tahmin, kesin saymadan önce yaklaşık bir cevap vermektir. "Bu kavanozda kaç misket var?" diye sormadan önce gözlerimizle TAHMİN EDERİZ, sonra sayarız!',
          gorsel: te('anlatim-1'),
        },
        {
          metin:
            'İyi tahmin nasıl yapılır? Referans sayı kullan! "10 misket nasıl görünür?" önce onu gör, sonra kavanozu onunla karşılaştır.',
          gorsel: te('anlatim-2'),
        },
        {
          metin:
            'Tahminimiz her zaman tam tutmaz — bu normal! Önemli olan MAKUL bir tahmin yapmak: ne çok fazla ne çok az. Tahmin ettikten sonra sayıp kontrol ederiz.',
          gorsel: te('anlatim-3'),
        },
      ],
    },
    alistirma: tahminEtmeAlistirma(),
    test: tahminEtmeTest(karistir),
  };
}
