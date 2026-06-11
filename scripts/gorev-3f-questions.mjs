/** GOREV-3F — Geometrik Cisim Modelleri (50 görselli soru). Metinler patron onaylıdır. */

const KAZANIM = 'MAT.2.1.2';
const nesne = (sahne) => ({ tur: 'nesne', sahne: `g2m-${sahne}` });

const M = {
  Küre: { tip: 'model', anahtar: 'kure' },
  Küp: { tip: 'model', anahtar: 'kup' },
  Silindir: { tip: 'model', anahtar: 'silindir' },
  'Üçgen prizma': { tip: 'model', anahtar: 'ucgen-prizma' },
  'Kare prizma': { tip: 'model', anahtar: 'kare-prizma' },
  'Dikdörtgen prizma': { tip: 'model', anahtar: 'dikdortgen-prizma' },
};

const N = {
  'Konserve kutusu': { tip: 'nesne', anahtar: 'konserve' },
  Zar: { tip: 'nesne', anahtar: 'zar' },
  'Futbol topu': { tip: 'nesne', anahtar: 'futbol-topu' },
  Kitap: { tip: 'nesne', anahtar: 'kitap' },
  'Süt kutusu': { tip: 'nesne', anahtar: 'sut-kutusu' },
  Misket: { tip: 'nesne', anahtar: 'misket' },
  Çadır: { tip: 'nesne', anahtar: 'cadir' },
  'Kibrit kutusu': { tip: 'nesne', anahtar: 'kibrit-kutusu' },
  'Küp şeker': { tip: 'nesne', anahtar: 'kup-seker' },
  'Zekâ küpü': { tip: 'nesne', anahtar: 'zeka-kupu' },
  Top: { tip: 'nesne', anahtar: 'top' },
  Portakal: { tip: 'nesne', anahtar: 'portakal' },
  Pil: { tip: 'nesne', anahtar: 'pil' },
  'Ayakkabı kutusu': { tip: 'nesne', anahtar: 'ayakkabi-kutusu' },
  'Tuvalet kâğıdı rulosu': { tip: 'nesne', anahtar: 'kagit-rulosu' },
};

function ikonlar(map) {
  return map;
}

export function gorev3fAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: 'metin',
      ...extra,
    });

  ekle('g2m-a1', 'Zar hangi geometrik cisme benzer?', 'küp', 'Zarın her yüzü karedir.', {
    gorsel: nesne('zar'),
    alternatifCevaplar: ['Küp'],
  });
  ekle('g2m-a2', 'Konserve kutusu hangi geometrik cisme benzer?', 'silindir', 'Yuvarlak gövdeli kutular silindire benzer.', {
    gorsel: nesne('konserve'),
  });
  ekle('g2m-a3', 'Futbol topu hangi geometrik cisme benzer?', 'küre', 'Top her yönden yuvarlaktır.', {
    gorsel: nesne('futbol-topu'),
    alternatifCevaplar: ['Küre'],
  });
  ekle('g2m-a4', 'Ayakkabı kutusu hangi geometrik cisme benzer?', 'dikdörtgen prizma', 'Uzun dikdörtgen yüzlü kutular…', {
    gorsel: nesne('ayakkabi-kutusu'),
    alternatifCevaplar: ['Dikdörtgen prizma'],
  });
  ekle('g2m-a5', "Elanaz'ın kamp çadırı hangi geometrik cisme benzer?", 'üçgen prizma', 'Çadırın çatısı üçgen şeklindedir.', {
    gorsel: nesne('cadir'),
    alternatifCevaplar: ['Üçgen prizma'],
  });
  ekle('g2m-a6', 'Küp şeker hangi geometrik cisme benzer?', 'küp', 'Küçük kare yüzlü şekerler küpe benzer.', {
    gorsel: nesne('kup-seker'),
    alternatifCevaplar: ['Küp'],
  });
  ekle('g2m-a7', 'Teneke meyve suyu kutusu hangi geometrik cisme benzer?', 'silindir', 'Teneke kutuların gövdesi yuvarlaktır.', {
    gorsel: nesne('meyve-suyu-teneke'),
  });
  ekle('g2m-a8', "Dünya'mız hangi geometrik cisme benzer?", 'küre', 'Dünya her yönden yuvarlaktır.', {
    gorsel: nesne('dunya'),
    alternatifCevaplar: ['Küre'],
  });
  ekle(
    'g2m-a9',
    '🎭 Basketbol topu silindire mi, küreye mi benzer?',
    'küre',
    'Top her yönden yusyuvarlaktır — silindirin ise düz iki yüzü vardır!',
    {
      gorsel: nesne('basketbol-topu'),
      sasirtma: true,
      alternatifCevaplar: ['Küre'],
    },
  );
  ekle('g2m-a10', 'Kibrit kutusu hangi geometrik cisme benzer?', 'dikdörtgen prizma', 'Kibrit kutusu köşeli ve uzun bir kutudur.', {
    gorsel: nesne('kibrit-kutusu'),
    alternatifCevaplar: ['Dikdörtgen prizma'],
  });
  ekle(
    'g2m-a11',
    "Elanaz'ın boya kalemi kutusu uzun ve kare yüzlüdür. Hangi cisme benzer?",
    'kare prizma',
    'Kare tabanlı uzun kutular kare prizmaya benzer.',
    { gorsel: nesne('boya-kutusu'), alternatifCevaplar: ['Kare prizma'] },
  );
  ekle('g2m-a12', 'Bir kale kulesi hangi geometrik cisme benzer?', 'silindir', 'Kuleler genelde yuvarlak gövdelidir.', {
    gorsel: nesne('kale-kulesi'),
  });
  ekle('g2m-a13', 'Süt kutusu hangi geometrik cisme benzer?', 'dikdörtgen prizma', 'Süt kutusu köşeli bir kutudur.', {
    gorsel: nesne('sut-kutusu'),
    alternatifCevaplar: ['Dikdörtgen prizma'],
  });
  ekle(
    'g2m-a14',
    '🎭 Yumurta küreye benzer mi? (evet/hayır)',
    'hayır',
    'Küre her yönden aynı yuvarlaklıktadır; yumurtanın bir ucu sivri, dikkat!',
    { gorsel: nesne('yumurta'), sasirtma: true },
  );
  ekle('g2m-a15', 'Bazı evlerin çatısı hangi geometrik cisme benzer?', 'üçgen prizma', 'Üçgen çatılar üçgen prizmaya benzer.', {
    gorsel: nesne('ucgen-catili-ev'),
    alternatifCevaplar: ['Üçgen prizma'],
  });
  ekle('g2m-a16', 'Misket hangi geometrik cisme benzer?', 'küre', 'Misket küçük bir küredir.', {
    gorsel: nesne('misket'),
    alternatifCevaplar: ['Küre'],
  });
  ekle(
    'g2m-a17',
    'Elanaz markette silindire benzeyen bir ürün arıyor. Konserve mi almalı, küp şeker mi?',
    'konserve',
    'Konserve kutusu silindire benzer; küp şeker küpe benzer.',
    { gorsel: nesne('konserve-kup-seker') },
  );
  ekle('g2m-a18', 'Buzdolabı hangi geometrik cisme benzer?', 'dikdörtgen prizma', 'Buzdolabı köşeli ve uzun bir kutudur.', {
    gorsel: nesne('buzdolabi'),
    alternatifCevaplar: ['Dikdörtgen prizma'],
  });
  ekle('g2m-a19', 'Zekâ küpü hangi cisme benzer?', 'küp', 'Zekâ küpü küp şeklindedir.', {
    gorsel: nesne('zeka-kupu'),
    alternatifCevaplar: ['Küp'],
  });
  ekle('g2m-a20', 'Tuvalet kâğıdı rulosu hangi geometrik cisme benzer?', 'silindir', 'Rulo yuvarlak gövdelidir.', {
    gorsel: nesne('kagit-rulosu'),
  });
  ekle('g2m-a21', 'Portakal hangi geometrik cisme benzer?', 'küre', 'Portakal yuvarlaktır.', {
    gorsel: nesne('portakal'),
    alternatifCevaplar: ['Küre'],
  });
  ekle(
    'g2m-a22',
    "Elanaz'ın hediye kutusu her yüzü kare olan bir kutudur. Hangi cisme benzer?",
    'küp',
    'Her yüzü kare olan kutu küptür.',
    { gorsel: nesne('hediye-kup-kutu'), alternatifCevaplar: ['Küp'] },
  );
  ekle('g2m-a23', 'Pil hangi geometrik cisme benzer?', 'silindir', 'Pil yuvarlak gövdelidir.', {
    gorsel: nesne('pil'),
  });
  ekle('g2m-a24', 'Kitap hangi geometrik cisme benzer?', 'dikdörtgen prizma', 'Kitap köşeli ve ince bir kutudur.', {
    gorsel: nesne('kitap'),
    alternatifCevaplar: ['Dikdörtgen prizma'],
  });
  ekle(
    'g2m-a25',
    'Elanaz parkta üçgen prizmaya benzeyen bir şey gördü. Çadır mı, top mu görmüştür?',
    'çadır',
    'Çadırın çatısı üçgen prizmaya benzer; top küreye benzer.',
    { gorsel: nesne('cadir-top'), alternatifCevaplar: ['Çadır'] },
  );

  return sorular;
}

export function gorev3fTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle(
    'g2m-t1',
    'Zar hangi geometrik cisme benzer?',
    'Küp',
    ['Küre', 'Küp', 'Silindir', 'Üçgen prizma'],
    'Zarın her yüzü karedir.',
    { gorsel: nesne('zar-mavi'), secenekIkonlari: ikonlar({ Küre: M.Küre, Küp: M.Küp, Silindir: M.Silindir, 'Üçgen prizma': M['Üçgen prizma'] }) },
  );
  ekle(
    'g2m-t2',
    'Hangisi silindire benzer?',
    'Konserve kutusu',
    ['Konserve kutusu', 'Zar', 'Futbol topu', 'Kitap'],
    'Silindirin yuvarlak gövdesi vardır.',
    {
      gorsel: nesne('konserve'),
      secenekIkonlari: ikonlar({
        'Konserve kutusu': N['Konserve kutusu'],
        Zar: N.Zar,
        'Futbol topu': N['Futbol topu'],
        Kitap: N.Kitap,
      }),
    },
  );
  ekle(
    'g2m-t3',
    'Futbol topu hangi geometrik cisme benzer?',
    'Küre',
    ['Silindir', 'Küp', 'Küre', 'Kare prizma'],
    'Top her yönden yuvarlaktır.',
    {
      gorsel: nesne('futbol-topu'),
      secenekIkonlari: ikonlar({ Silindir: M.Silindir, Küp: M.Küp, Küre: M.Küre, 'Kare prizma': M['Kare prizma'] }),
    },
  );
  ekle(
    'g2m-t4',
    'Hangisi küreye benzer?',
    'Misket',
    ['Süt kutusu', 'Misket', 'Çadır', 'Kibrit kutusu'],
    'Küre her yönden yuvarlaktır.',
    {
      gorsel: nesne('misket'),
      secenekIkonlari: ikonlar({
        'Süt kutusu': N['Süt kutusu'],
        Misket: N.Misket,
        Çadır: N.Çadır,
        'Kibrit kutusu': N['Kibrit kutusu'],
      }),
    },
  );
  ekle(
    'g2m-t5',
    "Elanaz'ın kamp çadırı hangi cisme benzer?",
    'Üçgen prizma',
    ['Üçgen prizma', 'Küre', 'Silindir', 'Küp'],
    'Çadırın çatısı üçgen şeklindedir.',
    {
      gorsel: nesne('cadir-turuncu'),
      secenekIkonlari: ikonlar({
        'Üçgen prizma': M['Üçgen prizma'],
        Küre: M.Küre,
        Silindir: M.Silindir,
        Küp: M.Küp,
      }),
    },
  );
  ekle(
    'g2m-t6',
    '🎭 Hangisi KÜP\'e benzeMEZ?',
    'Konserve kutusu',
    ['Zar', 'Küp şeker', 'Zekâ küpü', 'Konserve kutusu'],
    '"BenzeMEZ" diyor — küp OLMAYANI arıyoruz!',
    {
      gorsel: nesne('zar'),
      sasirtma: true,
      secenekIkonlari: ikonlar({
        Zar: N.Zar,
        'Küp şeker': N['Küp şeker'],
        'Zekâ küpü': N['Zekâ küpü'],
        'Konserve kutusu': N['Konserve kutusu'],
      }),
    },
  );
  ekle(
    'g2m-t7',
    'Ayakkabı kutusu hangi geometrik cisme benzer?',
    'Dikdörtgen prizma',
    ['Küre', 'Dikdörtgen prizma', 'Silindir', 'Üçgen prizma'],
    'Ayakkabı kutusu köşeli ve uzundur.',
    {
      gorsel: nesne('ayakkabi-kutusu'),
      secenekIkonlari: ikonlar({
        Küre: M.Küre,
        'Dikdörtgen prizma': M['Dikdörtgen prizma'],
        Silindir: M.Silindir,
        'Üçgen prizma': M['Üçgen prizma'],
      }),
    },
  );
  ekle(
    'g2m-t8',
    'Hangisi dikdörtgen prizmaya benzer?',
    'Kitap',
    ['Top', 'Portakal', 'Kitap', 'Pil'],
    'Kitap köşeli ve ince bir kutudur.',
    {
      gorsel: nesne('kitap'),
      secenekIkonlari: ikonlar({ Top: N.Top, Portakal: N.Portakal, Kitap: N.Kitap, Pil: N.Pil }),
    },
  );
  ekle(
    'g2m-t9',
    'Teneke kutu ve pil hangi cisme benzer?',
    'İkisi de silindire',
    ['İkisi de silindire', 'İkisi de küpe', 'Biri küre, biri küp', 'İkisi de üçgen prizmaya'],
    'Teneke ve pil yuvarlak gövdelidir.',
    { gorsel: nesne('teneke-pil') },
  );
  ekle(
    'g2m-t10',
    "Dünya'mız hangi geometrik cisme benzer?",
    'Küre',
    ['Silindir', 'Küre', 'Küp', 'Dikdörtgen prizma'],
    'Dünya her yönden yuvarlaktır.',
    {
      gorsel: nesne('dunya'),
      secenekIkonlari: ikonlar({
        Silindir: M.Silindir,
        Küre: M.Küre,
        Küp: M.Küp,
        'Dikdörtgen prizma': M['Dikdörtgen prizma'],
      }),
    },
  );
  ekle(
    'g2m-t11',
    '🎭 Elanaz "Her yüzü kare olan bir kutum var." dedi. Elanaz\'ın kutusu hangi cisme benzer?',
    'Küp',
    ['Dikdörtgen prizma', 'Küp', 'Silindir', 'Küre'],
    'HER yüzü kare olan özel kutunun adı nedir?',
    {
      gorsel: nesne('her-yuzu-kare-kutu'),
      sasirtma: true,
      secenekIkonlari: ikonlar({
        'Dikdörtgen prizma': M['Dikdörtgen prizma'],
        Küp: M.Küp,
        Silindir: M.Silindir,
        Küre: M.Küre,
      }),
    },
  );
  ekle(
    'g2m-t12',
    'Evlerin üçgen çatısı hangi cisme benzer?',
    'Üçgen prizma',
    ['Küre', 'Silindir', 'Üçgen prizma', 'Küp'],
    'Üçgen çatılar üçgen prizmaya benzer.',
    {
      gorsel: nesne('ucgen-catili-ev'),
      secenekIkonlari: ikonlar({
        Küre: M.Küre,
        Silindir: M.Silindir,
        'Üçgen prizma': M['Üçgen prizma'],
        Küp: M.Küp,
      }),
    },
  );
  ekle(
    'g2m-t13',
    'Hangisi küreye benzeyen nesnelerdir?',
    'Top - Misket',
    ['Top - Misket', 'Zar - Kutu', 'Pil - Konserve', 'Çadır - Çatı'],
    'Top ve misket yuvarlaktır.',
    {
      gorsel: nesne('top'),
      secenekIkonlari: ikonlar({
        'Top - Misket': { tip: 'cift', sol: 'top', sag: 'misket' },
        'Zar - Kutu': { tip: 'cift', sol: 'zar', sag: 'ayakkabi-kutusu' },
        'Pil - Konserve': { tip: 'cift', sol: 'pil', sag: 'konserve' },
        'Çadır - Çatı': { tip: 'cift', sol: 'cadir', sag: 'ucgen-catili-ev' },
      }),
    },
  );
  ekle(
    'g2m-t14',
    'Kale kulesi hangi geometrik cisme benzer?',
    'Silindir',
    ['Küp', 'Silindir', 'Küre', 'Kare prizma'],
    'Kuleler genelde yuvarlak gövdelidir.',
    {
      gorsel: nesne('kale-kulesi'),
      secenekIkonlari: ikonlar({
        Küp: M.Küp,
        Silindir: M.Silindir,
        Küre: M.Küre,
        'Kare prizma': M['Kare prizma'],
      }),
    },
  );
  ekle(
    'g2m-t15',
    'Elanaz markette süt kutusu aldı. Süt kutusu hangi cisme benzer?',
    'Dikdörtgen prizma',
    ['Dikdörtgen prizma', 'Küre', 'Silindir', 'Üçgen prizma'],
    'Süt kutusu köşeli bir kutudur.',
    {
      gorsel: nesne('sut-kutusu'),
      secenekIkonlari: ikonlar({
        'Dikdörtgen prizma': M['Dikdörtgen prizma'],
        Küre: M.Küre,
        Silindir: M.Silindir,
        'Üçgen prizma': M['Üçgen prizma'],
      }),
    },
  );
  ekle(
    'g2m-t16',
    '🎭 Hangisi SİLİNDİRE benzeMEZ?',
    'Zar',
    ['Pil', 'Konserve kutusu', 'Tuvalet kâğıdı rulosu', 'Zar'],
    'Silindirin yuvarlak gövdesi vardır — köşeli olan hangisi?',
    {
      gorsel: nesne('pil'),
      sasirtma: true,
      secenekIkonlari: ikonlar({
        Pil: N.Pil,
        'Konserve kutusu': N['Konserve kutusu'],
        'Tuvalet kâğıdı rulosu': N['Tuvalet kâğıdı rulosu'],
        Zar: N.Zar,
      }),
    },
  );
  ekle(
    'g2m-t17',
    'Kibrit kutusu hangi geometrik cisme benzer?',
    'Dikdörtgen prizma',
    ['Küre', 'Küp', 'Dikdörtgen prizma', 'Silindir'],
    'Kibrit kutusu köşeli bir kutudur.',
    {
      gorsel: nesne('kibrit-kutusu'),
      secenekIkonlari: ikonlar({
        Küre: M.Küre,
        Küp: M.Küp,
        'Dikdörtgen prizma': M['Dikdörtgen prizma'],
        Silindir: M.Silindir,
      }),
    },
  );
  ekle(
    'g2m-t18',
    'Hangisi üçgen prizmaya benzer?',
    'Çadır',
    ['Çadır', 'Top', 'Konserve', 'Misket'],
    'Çadırın çatısı üçgen şeklindedir.',
    {
      gorsel: nesne('cadir'),
      secenekIkonlari: ikonlar({
        Çadır: N.Çadır,
        Top: N.Top,
        Konserve: { tip: 'nesne', anahtar: 'konserve' },
        Misket: N.Misket,
      }),
    },
  );
  ekle(
    'g2m-t19',
    "Elanaz'ın kalem kutusu uzun ve kare tabanlı bir kutudur. Hangi cisme benzer?",
    'Kare prizma',
    ['Kare prizma', 'Küre', 'Silindir', 'Üçgen prizma'],
    'Kare tabanlı uzun kutular kare prizmaya benzer.',
    {
      gorsel: nesne('kalem-kutusu'),
      secenekIkonlari: ikonlar({
        'Kare prizma': M['Kare prizma'],
        Küre: M.Küre,
        Silindir: M.Silindir,
        'Üçgen prizma': M['Üçgen prizma'],
      }),
    },
  );
  ekle(
    'g2m-t20',
    'Portakal ve karpuz hangi cisme benzer?',
    'Küreye',
    ['Küpe', 'Küreye', 'Silindire', 'Üçgen prizmaya'],
    'Portakal ve karpuz yuvarlaktır.',
    { gorsel: nesne('portakal-karpuz') },
  );
  ekle(
    'g2m-t21',
    '🎭 Kutudaki süt bitince Elanaz kutuyu geri dönüşüme attı. Boş kutu hangi cisme benzer?',
    'Dikdörtgen prizma',
    ['Dikdörtgen prizma', 'Küre', 'Hiçbirine — boş kutu cisim değildir', 'Silindir'],
    'Kutu boş da olsa dolu da olsa biçimi DEĞİŞMEZ!',
    {
      gorsel: nesne('geri-donusum-sut'),
      sasirtma: true,
      secenekIkonlari: ikonlar({
        'Dikdörtgen prizma': M['Dikdörtgen prizma'],
        Küre: M.Küre,
        'Hiçbirine — boş kutu cisim değildir': { tip: 'nesne', anahtar: 'sut-kutusu' },
        Silindir: M.Silindir,
      }),
    },
  );
  ekle(
    'g2m-t22',
    'Hangisi küpe benzer?',
    'Zar',
    ['Zar', 'Top', 'Konserve', 'Çadır'],
    'Zar küp şeklindedir.',
    {
      gorsel: nesne('zar'),
      secenekIkonlari: ikonlar({
        Zar: N.Zar,
        Top: N.Top,
        Konserve: { tip: 'nesne', anahtar: 'konserve' },
        Çadır: N.Çadır,
      }),
    },
  );
  ekle(
    'g2m-t23',
    'Bina hangi geometrik cisme benzer?',
    'Dikdörtgen prizma',
    ['Küre', 'Dikdörtgen prizma', 'Üçgen prizma', 'Silindir'],
    'Binalar köşeli ve uzun kutulardır.',
    {
      gorsel: nesne('bina'),
      secenekIkonlari: ikonlar({
        Küre: M.Küre,
        'Dikdörtgen prizma': M['Dikdörtgen prizma'],
        'Üçgen prizma': M['Üçgen prizma'],
        Silindir: M.Silindir,
      }),
    },
  );
  ekle(
    'g2m-t24',
    '🎭 Elanaz dondurma külahını bitirdi, elinde sadece YUVARLAK dondurma topu kaldı. Dondurma topu hangi cisme benzer?',
    'Küre',
    ['Küre', 'Silindir', 'Küp', 'Kare prizma'],
    'Külah gitti — elimizde kalan TOP neye benzer?',
    {
      gorsel: nesne('dondurma-topu'),
      sasirtma: true,
      secenekIkonlari: ikonlar({
        Küre: M.Küre,
        Silindir: M.Silindir,
        Küp: M.Küp,
        'Kare prizma': M['Kare prizma'],
      }),
    },
  );
  ekle(
    'g2m-t25',
    'Hangisi doğru eşleşmedir?',
    'Konserve → Silindir',
    ['Zar → Küre', 'Top → Silindir', 'Konserve → Silindir', 'Çadır → Küp'],
    'Her nesneyi doğru geometrik cisme eşleştir.',
    {
      gorsel: nesne('konserve'),
      secenekIkonlari: ikonlar({
        'Zar → Küre': { tip: 'eslestirme', nesne: 'zar', model: 'kure' },
        'Top → Silindir': { tip: 'eslestirme', nesne: 'top', model: 'silindir' },
        'Konserve → Silindir': { tip: 'eslestirme', nesne: 'konserve', model: 'silindir' },
        'Çadır → Küp': { tip: 'eslestirme', nesne: 'cadir', model: 'kup' },
      }),
    },
  );

  return sorular;
}

export function geometrikCisimModelleri(karistir) {
  const nesneGorsel = (s) => ({ tur: 'nesne', sahne: `g2m-${s}` });
  return {
    id: 'geometrik-cisim-modelleri',
    baslik: 'Geometrik Cisim Modelleri',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Geçen konuda cisimleri yuvarlak ve köşeli diye ayırmıştık. Şimdi bu cisimlerin adlarını öğreniyoruz! Çevremizdeki her nesne bir geometrik cisme benzer.',
          gorsel: nesneGorsel('anlatim-1'),
        },
        {
          metin:
            "Zar ve küp şeker KÜP'e benzer. Kibrit kutusu ve ayakkabı kutusu DİKDÖRTGEN PRİZMA'ya benzer. Kolonya kutusu gibi kare yüzlü uzun kutular KARE PRİZMA'ya benzer.",
          gorsel: nesneGorsel('anlatim-2'),
        },
        {
          metin:
            "Çadır ve bazı çatılar ÜÇGEN PRİZMA'ya benzer. Konserve kutusu ve teneke kutu SİLİNDİR'e benzer. Futbol topu ve dünya KÜRE'ye benzer.",
          gorsel: nesneGorsel('anlatim-3'),
        },
        {
          metin:
            'Çevremizdeki yapılarda da geometrik cisimler gizlidir! Kale kuleleri silindire, binalar dikdörtgen prizmaya, çatılar üçgen prizmaya benzer. Haydi, odana bak: hangi nesne hangi cisme benziyor?',
          gorsel: nesneGorsel('anlatim-4'),
        },
      ],
    },
    alistirma: gorev3fAlistirma(),
    test: gorev3fTest(karistir),
  };
}
