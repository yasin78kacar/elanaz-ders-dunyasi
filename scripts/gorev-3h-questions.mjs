/** GOREV-3H — Geometrik Cisim ve Şekillerin Biçimsel Özellikleri (50 görselli soru). Metinler patron onaylıdır. */

const KAZANIM = 'MAT.2.1.4';
const nesne = (sahne) => ({ tur: 'nesne', sahne: `g4m-${sahne}` });

const M = {
  Küp: { tip: 'model', anahtar: 'kup' },
  Küre: { tip: 'model', anahtar: 'kure' },
  Silindir: { tip: 'model', anahtar: 'silindir' },
  'Üçgen prizma': { tip: 'model', anahtar: 'ucgen-prizma' },
  'Kare prizma': { tip: 'model', anahtar: 'kare-prizma' },
  'Dikdörtgen prizma': { tip: 'model', anahtar: 'dikdortgen-prizma' },
};

const N = {
  Top: { tip: 'nesne', anahtar: 'top' },
  Misket: { tip: 'nesne', anahtar: 'misket' },
  Zar: { tip: 'nesne', anahtar: 'zar' },
  Portakal: { tip: 'nesne', anahtar: 'portakal' },
  Pil: { tip: 'nesne', anahtar: 'pil' },
  'Konserve kutusu': { tip: 'nesne', anahtar: 'konserve' },
  'Süt kutusu': { tip: 'nesne', anahtar: 'sut-kutusu' },
  Çadır: { tip: 'nesne', anahtar: 'cadir' },
  Kitap: { tip: 'nesne', anahtar: 'kitap' },
  'Zekâ küpü': { tip: 'nesne', anahtar: 'zeka-kupu' },
  'Futbol topu': { tip: 'nesne', anahtar: 'futbol-topu' },
  Karpuz: { tip: 'nesne', anahtar: 'karpuz' },
  'Hediye kutusu': { tip: 'nesne', anahtar: 'hediye-kup-kutu' },
};

const S = {
  Kare: { tip: 'sekil', anahtar: 'kare' },
  Üçgen: { tip: 'sekil', anahtar: 'ucgen' },
  Daire: { tip: 'sekil', anahtar: 'daire' },
  Dikdörtgen: { tip: 'sekil', anahtar: 'dikdortgen' },
  Çember: { tip: 'sekil', anahtar: 'cember' },
};

function ikonlar(map) {
  return map;
}

export function gorev3hAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? (/^\d+$/.test(String(cevap)) ? 'sayi' : 'metin'),
      ...extra,
    });

  ekle('g4m-a1', 'Davul hangi geometrik cisme benzer?', 'silindir', 'Davulun yuvarlak gövdesi silindire benzer.', {
    gorsel: nesne('davul'),
    alternatifCevaplar: ['Silindir'],
  });
  ekle('g4m-a2', 'Zil hangi geometrik şekle benzer?', 'daire', 'Zil içi dolu yuvarlak bir şekildir.', {
    gorsel: nesne('zil'),
    alternatifCevaplar: ['Daire'],
  });
  ekle('g4m-a3', 'Topun biçimsel özelliği nedir: yuvarlak mı, köşeli mi?', 'yuvarlak', 'Top her yönden yuvarlaktır.', {
    gorsel: nesne('top'),
    alternatifCevaplar: ['Yuvarlak'],
  });
  ekle('g4m-a4', 'Hediye kutusunun biçimsel özelliği nedir? (yuvarlak/köşeli)', 'köşeli', 'Kutunun köşeleri vardır.', {
    gorsel: nesne('hediye-kutu'),
    alternatifCevaplar: ['Köşeli'],
  });
  ekle(
    'g4m-a5',
    'Küçük bir top ile büyük bir topun ikisi de hangi özelliğe sahiptir?',
    'yuvarlak',
    'Büyüklük değişse de ikisi de yuvarlaktır.',
    {
      gorsel: nesne('top-kucuk-buyuk'),
      alternatifCevaplar: ['Yuvarlak'],
    },
  );
  ekle(
    'g4m-a6',
    '🎭 Elanaz zarı ters çevirdi. Zarın köşeleri kayboldu mu? (evet/hayır)',
    'hayır',
    'Yön değişince biçim özellikleri DEĞİŞMEZ!',
    {
      gorsel: nesne('zar-duz-ters'),
      sasirtma: true,
      alternatifCevaplar: ['Hayır'],
    },
  );
  ekle('g4m-a7', 'Silindirin gövdesi yuvarlak mıdır, köşeli midir?', 'yuvarlak', 'Silindirin gövdesi yuvarlaktır.', {
    gorsel: nesne('silindir'),
    alternatifCevaplar: ['Yuvarlak'],
  });
  ekle('g4m-a8', 'Kürenin köşesi var mıdır? (evet/hayır)', 'hayır', 'Küre her yönden yuvarlaktır, köşesi yoktur.', {
    gorsel: nesne('kure'),
    alternatifCevaplar: ['Hayır'],
  });
  ekle('g4m-a9', 'Küpün köşesi var mıdır? (evet/hayır)', 'evet', 'Küpün köşeleri vardır.', {
    gorsel: nesne('kup-koseler'),
    alternatifCevaplar: ['Evet'],
  });
  ekle(
    'g4m-a10',
    '🎭 Kocaman bir karpuz ile küçücük bir misket: ikisi de küreye benzer mi? (evet/hayır)',
    'evet',
    'BÜYÜKLÜK değişse de biçim değişmez!',
    {
      gorsel: nesne('karpuz-misket'),
      sasirtma: true,
      alternatifCevaplar: ['Evet'],
    },
  );
  ekle('g4m-a11', 'Üçgenin kaç köşesi vardır?', '3', 'Üçgenin üç köşesi vardır.', {
    gorsel: nesne('ucgen-koseler'),
    cevapTipi: 'sayi',
  });
  ekle('g4m-a12', 'Karenin kaç kenarı vardır?', '4', 'Karenin dört kenarı vardır.', {
    gorsel: nesne('kare-kenarlar'),
    cevapTipi: 'sayi',
  });
  ekle('g4m-a13', 'Dairenin köşesi var mıdır? (evet/hayır)', 'hayır', 'Daire yuvarlaktır, köşesi yoktur.', {
    gorsel: nesne('daire'),
    alternatifCevaplar: ['Hayır'],
  });
  ekle('g4m-a14', 'Elanaz bateri çaldı. Davulun üst yüzü hangi şekle benzer?', 'daire', 'Davulun üst yüzü yuvarlaktır.', {
    gorsel: nesne('davul-ustten'),
    alternatifCevaplar: ['Daire'],
  });
  ekle('g4m-a15', 'Dikdörtgenin kaç köşesi vardır?', '4', 'Dikdörtgenin dört köşesi vardır.', {
    gorsel: nesne('dikdortgen-koseler'),
    cevapTipi: 'sayi',
  });
  ekle(
    'g4m-a16',
    '🎭 Elanaz kitabını çantasına koydu. Kitap çantadayken köşeli olma özelliğini kaybeder mi? (evet/hayır)',
    'hayır',
    'YER değişince biçim değişmez!',
    {
      gorsel: nesne('kitap-canta'),
      sasirtma: true,
      alternatifCevaplar: ['Hayır'],
    },
  );
  ekle('g4m-a17', 'Konserve kutusunun alt ve üst yüzleri hangi şekle benzer?', 'daire', 'Konserve kutusunun alt ve üst yüzleri yuvarlaktır.', {
    gorsel: nesne('konserve'),
    alternatifCevaplar: ['Daire'],
  });
  ekle('g4m-a18', 'Üçgenin kaç kenarı vardır?', '3', 'Üçgenin üç kenarı vardır.', {
    gorsel: nesne('ucgen-kenarlar'),
    cevapTipi: 'sayi',
  });
  ekle('g4m-a19', 'Hangisinin kenarı yoktur: kare mi, çember mi?', 'çember', 'Çemberin düz kenarı yoktur.', {
    gorsel: nesne('kare-cember'),
    alternatifCevaplar: ['Çember'],
  });
  ekle('g4m-a20', 'Süt kutusunun yüzleri hangi şekle benzer?', 'dikdörtgen', 'Süt kutusunun yüzleri dikdörtgendir.', {
    gorsel: nesne('sut-kutusu'),
    alternatifCevaplar: ['Dikdörtgen'],
  });
  ekle(
    'g4m-a21',
    '🎭 Top yokuştan aşağı yuvarlandı. Yuvarlanınca topun biçimi değişti mi? (evet/hayır)',
    'hayır',
    'Hareket etmek biçimi DEĞİŞTİRMEZ!',
    {
      gorsel: nesne('top-yokus'),
      sasirtma: true,
      alternatifCevaplar: ['Hayır'],
    },
  );
  ekle('g4m-a22', 'Zekâ küpünün her yüzü hangi şekle benzer?', 'kare', 'Zekâ küpünün her yüzü karedir.', {
    gorsel: nesne('zeka-kupu'),
    alternatifCevaplar: ['Kare'],
  });
  ekle('g4m-a23', 'Karenin kenarları birbirine göre nasıldır: eşit mi, farklı mı?', 'eşit', 'Karenin dört kenarı da eşittir.', {
    gorsel: nesne('kare-esit'),
    alternatifCevaplar: ['Eşit'],
  });
  ekle('g4m-a24', 'Çadırın ön yüzü hangi şekle benzer?', 'üçgen', 'Çadırın ön yüzü üçgendir.', {
    gorsel: nesne('cadir'),
    alternatifCevaplar: ['Üçgen'],
  });
  ekle(
    'g4m-a25',
    'Elanaz büyük bir kare, kardeşi Elif küçük bir kare çizdi. İkisi de kare midir? (evet/hayır)',
    'evet',
    'Büyüklük değişse de ikisi de karedir.',
    {
      gorsel: nesne('kare-buyuk-kucuk'),
      alternatifCevaplar: ['Evet'],
    },
  );

  return sorular;
}

export function gorev3hTest(karistir) {
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
    'g4m-t1',
    'Davul hangi cisme benzer?',
    'Silindir',
    ['Küp', 'Silindir', 'Küre', 'Üçgen prizma'],
    'Davulun yuvarlak gövdesi silindire benzer.',
    {
      gorsel: nesne('davul'),
      secenekIkonlari: ikonlar({ Küp: M.Küp, Silindir: M.Silindir, Küre: M.Küre, 'Üçgen prizma': M['Üçgen prizma'] }),
    },
  );
  ekle(
    'g4m-t2',
    'Hangisinin köşesi VARDIR?',
    'Zar',
    ['Top', 'Misket', 'Zar', 'Portakal'],
    'Köşeli cisimleri düşün.',
    {
      gorsel: nesne('zar-duz-ters'),
      secenekIkonlari: ikonlar({ Top: N.Top, Misket: N.Misket, Zar: N.Zar, Portakal: N.Portakal }),
    },
  );
  ekle(
    'g4m-t3',
    'Zil hangi şekle benzer?',
    'Daire',
    ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
    'Zil içi dolu yuvarlak bir şekildir.',
    {
      gorsel: nesne('zil'),
      secenekIkonlari: ikonlar({ Kare: S.Kare, Üçgen: S.Üçgen, Daire: S.Daire, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g4m-t4',
    '🎭 Elanaz topunu kocaman bir topla değiştirdi. Yeni topun biçimsel özelliği nedir?',
    'Yine yuvarlaktır',
    ['Artık köşelidir', 'Yine yuvarlaktır', 'Kare olmuştur', 'Büyüyünce biçimi bozulur'],
    'BÜYÜKLÜK değişir, BİÇİM değişmez!',
    {
      gorsel: nesne('top-kucuk-buyuk'),
      sasirtma: true,
    },
  );
  ekle(
    'g4m-t5',
    'Üçgenin kaç köşesi vardır?',
    '3',
    ['4', '2', '3', '5'],
    'Üçgenin üç köşesi vardır.',
    { gorsel: nesne('ucgen-koseler') },
  );
  ekle(
    'g4m-t6',
    'Karenin kenarları nasıldır?',
    'Hepsi eşittir',
    ['Hepsi eşittir', 'Hepsi farklıdır', 'Üç tanedir', 'Yuvarlaktır'],
    'Karenin dört kenarı da eşittir.',
    { gorsel: nesne('kare-esit') },
  );
  ekle(
    'g4m-t7',
    'Hangisinin kenarı ve köşesi YOKTUR?',
    'Daire',
    ['Kare', 'Üçgen', 'Dikdörtgen', 'Daire'],
    'Yuvarlak şekillerin köşesi yoktur.',
    {
      gorsel: nesne('daire'),
      secenekIkonlari: ikonlar({ Kare: S.Kare, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen, Daire: S.Daire }),
    },
  );
  ekle(
    'g4m-t8',
    '🎭 Kutu ters çevrilince ne olur?',
    'Köşeleri aynen durur',
    ['Köşeleri kaybolur', 'Yuvarlak olur', 'Köşeleri aynen durur', 'Daireye dönüşür'],
    'YÖN değişince biçim DEĞİŞMEZ!',
    {
      gorsel: nesne('kutu-ters'),
      sasirtma: true,
    },
  );
  ekle(
    'g4m-t9',
    'Konserve kutusunun üst yüzü hangi şekle benzer?',
    'Daire',
    ['Kare', 'Daire', 'Üçgen', 'Dikdörtgen'],
    'Konserve kutusunun üst yüzü yuvarlaktır.',
    {
      gorsel: nesne('konserve-ust'),
      secenekIkonlari: ikonlar({ Kare: S.Kare, Daire: S.Daire, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g4m-t10',
    'Hangisi yuvarlak bir CİSİMDİR?',
    'Küre',
    ['Daire', 'Çember', 'Küre', 'Üçgen'],
    'Cisimler üç boyutludur — daire ve çember şekildir.',
    {
      gorsel: nesne('kure'),
      secenekIkonlari: ikonlar({ Daire: S.Daire, Çember: S.Çember, Küre: M.Küre, Üçgen: S.Üçgen }),
    },
  );
  ekle(
    'g4m-t11',
    'Zekâ küpünün bir yüzü hangi şekle benzer?',
    'Kare',
    ['Kare', 'Daire', 'Üçgen', 'Çember'],
    'Zekâ küpünün her yüzü karedir.',
    {
      gorsel: nesne('zeka-kupu'),
      secenekIkonlari: ikonlar({ Kare: S.Kare, Daire: S.Daire, Üçgen: S.Üçgen, Çember: S.Çember }),
    },
  );
  ekle(
    'g4m-t12',
    '🎭 Hangisi DOĞRUDUR?',
    'Top nereye giderse gitsin yuvarlaktır',
    ['Büyük top köşelidir', 'Küçük zar yuvarlaktır', 'Top nereye giderse gitsin yuvarlaktır', 'Kutu ters dönünce yuvarlak olur'],
    'Biçim özellikleri yer-yön-büyüklükle DEĞİŞMEZ!',
    {
      gorsel: nesne('top-konumlar'),
      sasirtma: true,
    },
  );
  ekle(
    'g4m-t13',
    'Dikdörtgenin kaç kenarı vardır?',
    '4',
    ['3', '4', '5', '2'],
    'Dikdörtgenin dört kenarı vardır.',
    { gorsel: nesne('dikdortgen-koseler') },
  );
  ekle(
    'g4m-t14',
    'Çadırın ön yüzü hangi şekle benzer?',
    'Üçgen',
    ['Üçgen', 'Kare', 'Daire', 'Çember'],
    'Çadırın ön yüzü üçgendir.',
    {
      gorsel: nesne('cadir'),
      secenekIkonlari: ikonlar({ Üçgen: S.Üçgen, Kare: S.Kare, Daire: S.Daire, Çember: S.Çember }),
    },
  );
  ekle(
    'g4m-t15',
    'Hangisinin BÜTÜN kenarları eşittir?',
    'Kare',
    ['Dikdörtgen', 'Kare', 'Üçgen', 'Daire'],
    'Karenin dört kenarı da eşittir.',
    {
      gorsel: nesne('kare-kenarlar'),
      secenekIkonlari: ikonlar({ Dikdörtgen: S.Dikdörtgen, Kare: S.Kare, Üçgen: S.Üçgen, Daire: S.Daire }),
    },
  );
  ekle(
    'g4m-t16',
    'Süt kutusunun ön yüzü hangi şekle benzer?',
    'Dikdörtgen',
    ['Dikdörtgen', 'Daire', 'Üçgen', 'Çember'],
    'Süt kutusunun yüzleri dikdörtgendir.',
    {
      gorsel: nesne('sut-kutusu'),
      secenekIkonlari: ikonlar({ Dikdörtgen: S.Dikdörtgen, Daire: S.Daire, Üçgen: S.Üçgen, Çember: S.Çember }),
    },
  );
  ekle(
    'g4m-t17',
    '🎭 Elanaz misketini cebine koydu. Misket cepteyken hangi özelliğini KORUR?',
    'Yuvarlaklığını',
    ['Görünmezliğini', 'Yuvarlaklığını', 'Köşelerini', 'Cepte özellik kalmaz'],
    'YER değişti ama misket hâlâ misket!',
    {
      gorsel: nesne('misket-cep'),
      sasirtma: true,
    },
  );
  ekle(
    'g4m-t18',
    'Pilin gövdesi nasıldır?',
    'Yuvarlak',
    ['Köşeli', 'Yuvarlak', 'Kare', 'Üçgen'],
    'Pilin gövdesi yuvarlaktır.',
    { gorsel: nesne('davul-pil') },
  );
  ekle(
    'g4m-t19',
    'Hangisi köşeli bir ŞEKİLDİR?',
    'Üçgen',
    ['Küre', 'Silindir', 'Üçgen', 'Küp'],
    'Şekiller düz çizimlerdir — küre, silindir ve küp cisimdir.',
    {
      gorsel: nesne('ucgen-koseler'),
      secenekIkonlari: ikonlar({ Küre: M.Küre, Silindir: M.Silindir, Üçgen: S.Üçgen, Küp: M.Küp }),
    },
  );
  ekle(
    'g4m-t20',
    'Topun üzerinde köşe arayan Elanaz ne bulur?',
    'Hiç köşe bulamaz',
    ['4 köşe', '3 köşe', 'Hiç köşe bulamaz', '1 köşe'],
    'Top yuvarlaktır, köşesi yoktur.',
    { gorsel: nesne('top-buyutec') },
  );
  ekle(
    'g4m-t21',
    'Kare ile dikdörtgenin ORTAK özelliği nedir?',
    'İkisinin de 4 köşesi vardır',
    ['İkisinin de 4 köşesi vardır', 'İkisi de yuvarlaktır', 'Kenarları hep eşittir', 'İkisinin de 3 kenarı vardır'],
    'Kare ve dikdörtgenin dört köşesi vardır.',
    { gorsel: nesne('kare-dikdortgen') },
  );
  ekle(
    'g4m-t22',
    '🎭 Dev bir küp ile minik bir zar için hangisi DOĞRUDUR?',
    'İkisi de küpe benzer',
    ['Sadece büyük olan küptür', 'İkisi de küpe benzer', 'Küçük olan küre sayılır', 'Büyüklük biçimi değiştirir'],
    'BÜYÜKLÜK farklı, BİÇİM aynı!',
    {
      gorsel: nesne('dev-kup-zar'),
      sasirtma: true,
    },
  );
  ekle(
    'g4m-t23',
    'Davulun gövdesi ile pilin gövdesi hangi ortak cisme benzer?',
    'Silindir',
    ['Küp', 'Silindir', 'Küre', 'Üçgen prizma'],
    'İkisinin gövdesi de yuvarlaktır — silindire benzer.',
    {
      gorsel: nesne('davul-pil'),
      secenekIkonlari: ikonlar({ Küp: M.Küp, Silindir: M.Silindir, Küre: M.Küre, 'Üçgen prizma': M['Üçgen prizma'] }),
    },
  );
  ekle(
    'g4m-t24',
    'Hangisi yuvarlak bir ŞEKİLDİR?',
    'Daire',
    ['Küre', 'Daire', 'Silindir', 'Küp'],
    'Şekiller düz çizimlerdir — küre, silindir ve küp cisimdir.',
    {
      gorsel: nesne('daire'),
      secenekIkonlari: ikonlar({ Küre: M.Küre, Daire: S.Daire, Silindir: M.Silindir, Küp: M.Küp }),
    },
  );
  ekle(
    'g4m-t25',
    '🎭 Elanaz kare çizdi, sonra kâğıdı ters çevirdi. Kâğıttaki şekil ne oldu?',
    'Hâlâ kare',
    ['Dikdörtgen oldu', 'Hâlâ kare', 'Üçgen oldu', 'Silindi'],
    'Kâğıt dönünce şekil DEĞİŞMEZ!',
    {
      gorsel: nesne('kare-kagit'),
      sasirtma: true,
    },
  );

  return sorular;
}

export function bicimselOzellikler(karistir) {
  const g = (s) => ({ tur: 'nesne', sahne: `g4m-${s}` });
  return {
    id: 'bicimsel-ozellikler',
    baslik: 'Geometrik Cisim ve Şekillerin Biçimsel Özellikleri',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Cisimlerin ve şekillerin yuvarlak ya da köşeli olması, onların biçimsel özelliğidir.',
          gorsel: g('anlatim-1'),
        },
        {
          metin:
            'Davul SİLİNDİRE benzer — yuvarlak bir cisimdir. Zil DAİREYE benzer — yuvarlak bir şekildir. Kutu PRİZMAYA benzer — köşeli bir cisimdir.',
          gorsel: g('anlatim-2'),
        },
        {
          metin:
            'En önemli sır: Bir cismin YERİ, YÖNÜ veya BÜYÜKLÜĞÜ değişse de biçimsel özellikleri DEĞİŞMEZ! Küçük top da yuvarlak, kocaman top da yuvarlak.',
          gorsel: g('anlatim-3'),
        },
        {
          metin:
            'Kutuyu ters çevirsen de köşeleri kaybolmaz. Zarı masanın öbür ucuna koysan da küp olmaktan çıkmaz. Biçim, her yerde biçimdir!',
          gorsel: g('anlatim-4'),
        },
      ],
    },
    alistirma: gorev3hAlistirma(),
    test: gorev3hTest(karistir),
  };
}
