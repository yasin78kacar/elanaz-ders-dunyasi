/** GOREV-3G — Geometrik Şekil Modelleri (50 görselli soru). Metinler patron onaylıdır. */

const KAZANIM = 'MAT.2.1.3';
const nesne = (sahne) => ({ tur: 'nesne', sahne: `g3m-${sahne}` });

const S = {
  Kare: { tip: 'sekil', anahtar: 'kare' },
  Üçgen: { tip: 'sekil', anahtar: 'ucgen' },
  Daire: { tip: 'sekil', anahtar: 'daire' },
  Dikdörtgen: { tip: 'sekil', anahtar: 'dikdortgen' },
  Çember: { tip: 'sekil', anahtar: 'cember' },
};

const SN = {
  Kapı: { tip: 'sekil-nesne', anahtar: 'kapi' },
  'Dondurma külahı': { tip: 'sekil-nesne', anahtar: 'dondurma-kulahi' },
  Tekerlek: { tip: 'sekil-nesne', anahtar: 'tekerlek' },
  Pencere: { tip: 'sekil-nesne', anahtar: 'pencere-kare' },
};

function ikonlar(map) {
  return map;
}

export function gorev3gAlistirma() {
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

  ekle('g3m-a1', 'Dört kenarı da eşit olan şeklin adı nedir?', 'kare', 'Dört kenarı eşit olan şekil…', {
    gorsel: nesne('kare'),
    alternatifCevaplar: ['Kare'],
  });
  ekle('g3m-a2', 'Üç köşesi olan şeklin adı nedir?', 'üçgen', 'Üç köşeli şekil…', {
    gorsel: nesne('ucgen'),
    alternatifCevaplar: ['Üçgen'],
  });
  ekle('g3m-a3', 'İçi boş, yuvarlak çizgiye ne denir?', 'çember', 'İçi boş yuvarlak çizgi çemberdir.', {
    gorsel: nesne('cember-mavi'),
    alternatifCevaplar: ['Çember'],
  });
  ekle('g3m-a4', 'Çemberin içini boyarsak hangi şekil oluşur?', 'daire', 'İçi boyalı yuvarlak şekil dairedir.', {
    gorsel: nesne('cember-daire-donusum'),
    alternatifCevaplar: ['Daire'],
  });
  ekle('g3m-a5', 'Resimdeki şeklin adı nedir?', 'dikdörtgen', 'Uzun dikdörtgen şekil…', {
    gorsel: nesne('dikdortgen-mavi'),
    alternatifCevaplar: ['Dikdörtgen'],
  });
  ekle('g3m-a6', "Elanaz'ın çizdiği evin çatısı hangi şekildir?", 'üçgen', 'Çatılar üçgen şeklindedir.', {
    gorsel: nesne('ev-cati'),
    alternatifCevaplar: ['Üçgen'],
  });
  ekle('g3m-a7', 'Resimdeki evin gövdesi hangi şekildir?', 'kare', 'Ev gövdesi kare şeklindedir.', {
    gorsel: nesne('ev-govde'),
    alternatifCevaplar: ['Kare'],
  });
  ekle(
    'g3m-a8',
    '🎭 Resimdeki simit çembere mi, daireye mi benzer?',
    'çember',
    'Simitin ortası DELİK — içi boyalı değil!',
    {
      gorsel: nesne('simit'),
      sasirtma: true,
      alternatifCevaplar: ['Çember'],
    },
  );
  ekle('g3m-a9', 'Resimdeki trafik levhası hangi şekildir?', 'üçgen', 'Uyarı levhaları üçgendir.', {
    gorsel: nesne('uyari-levha'),
    alternatifCevaplar: ['Üçgen'],
  });
  ekle('g3m-a10', 'Resimdeki kapı hangi şekle benzer?', 'dikdörtgen', 'Kapı dikdörtgen şeklindedir.', {
    gorsel: nesne('kapi'),
    alternatifCevaplar: ['Dikdörtgen'],
  });
  ekle('g3m-a11', 'Resimdeki tekerleğin dış çizgisi hangi şekildir?', 'çember', 'Tekerleğin dış çizgisi içi boş çemberdir.', {
    gorsel: nesne('tekerlek'),
    alternatifCevaplar: ['Çember'],
  });
  ekle('g3m-a12', 'Resimdeki balonun şekli nedir?', 'daire', 'Balon içi dolu yuvarlaktır — daire.', {
    gorsel: nesne('balon'),
    alternatifCevaplar: ['Daire'],
  });
  ekle('g3m-a13', "Elanaz'ın resmindeki güneş hangi şekildir?", 'daire', 'Güneş içi dolu yuvarlaktır.', {
    gorsel: nesne('gunes'),
    alternatifCevaplar: ['Daire'],
  });
  ekle('g3m-a14', 'Resimdeki robotun kaç tane kare parçası vardır?', '2', 'Kafa ve gövde karedir.', {
    gorsel: nesne('robot'),
    cevapTipi: 'sayi',
  });
  ekle(
    'g3m-a15',
    '🎭 Resimdeki pencere karedir. Elanaz pencereyi yana doğru UZATARAK çizdi. Yeni şekil ne oldu?',
    'dikdörtgen',
    'Karenin uzamış hâline ne diyorduk?',
    {
      gorsel: nesne('pencere-donusum'),
      sasirtma: true,
      alternatifCevaplar: ['Dikdörtgen'],
    },
  );
  ekle('g3m-a16', 'Resimdeki trendeki vagonlar hangi şekildir?', 'dikdörtgen', 'Vagonlar dikdörtgendir.', {
    gorsel: nesne('tren'),
    alternatifCevaplar: ['Dikdörtgen'],
  });
  ekle('g3m-a17', 'Resimdeki trenin tekerlekleri hangi şekildir?', 'çember', 'Tekerlekler içi boş çemberdir.', {
    gorsel: nesne('tren-tekerlek'),
    alternatifCevaplar: ['Çember'],
  });
  ekle('g3m-a18', 'Resimdeki dondurma külahı hangi şekle benzer?', 'üçgen', 'Külah ters üçgen şeklindedir.', {
    gorsel: nesne('kulah-dondurma'),
    alternatifCevaplar: ['Üçgen'],
  });
  ekle('g3m-a19', 'Resimdeki kuş yuvası modelinde çatı hangi şekildir?', 'üçgen', 'Çatı üçgendir.', {
    gorsel: nesne('kus-yuvasi'),
    alternatifCevaplar: ['Üçgen'],
  });
  ekle('g3m-a20', 'Kuş yuvasının giriş deliği hangi şekildir?', 'daire', 'Giriş deliği içi dolu yuvarlaktır.', {
    gorsel: nesne('kus-yuvasi-delik'),
    alternatifCevaplar: ['Daire'],
  });
  ekle(
    'g3m-a21',
    '🎭 Resimdeki saat çember midir, daire midir?',
    'daire',
    'Saatin içi dolu mu boş mu? Rakamların olduğu yüzeyi var!',
    {
      gorsel: nesne('saat'),
      sasirtma: true,
      alternatifCevaplar: ['Daire'],
    },
  );
  ekle('g3m-a22', 'Resimdeki evde kaç tane üçgen vardır?', '1', 'Bir üçgen çatı vardır.', {
    gorsel: nesne('ev-sayim'),
    cevapTipi: 'sayi',
  });
  ekle('g3m-a23', 'Aynı evde kaç tane dikdörtgen vardır?', '2', 'İki pencere dikdörtgendir.', {
    gorsel: nesne('ev-pencere'),
    cevapTipi: 'sayi',
  });
  ekle('g3m-a24', 'Resimdeki kelebeğin kanatları hangi şekildir?', 'üçgen', 'Kanatlar üçgen şeklindedir.', {
    gorsel: nesne('kelebek'),
    alternatifCevaplar: ['Üçgen'],
  });
  ekle(
    'g3m-a25',
    'Elanaz şekillerle bir çiçek yaptı: ortası daire, yaprakları üçgen. Çiçeğin ortası hangi şekildir?',
    'daire',
    'Çiçeğin ortası içi dolu yuvarlaktır.',
    { gorsel: nesne('cicek'), alternatifCevaplar: ['Daire'] },
  );

  return sorular;
}

export function gorev3gTest(karistir) {
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
    'g3m-t1',
    'Resimdeki şekil hangisidir?',
    'Üçgen',
    ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
    'Üç köşeli şekil…',
    { gorsel: nesne('ucgen-buyuk'), secenekIkonlari: ikonlar({ Kare: S.Kare, Üçgen: S.Üçgen, Daire: S.Daire, Dikdörtgen: S.Dikdörtgen }) },
  );
  ekle(
    'g3m-t2',
    'Dört kenarı eşit olan şekil hangisidir?',
    'Kare',
    ['Dikdörtgen', 'Üçgen', 'Kare', 'Çember'],
    'Dört kenarı da eşit…',
    { gorsel: nesne('kare'), secenekIkonlari: ikonlar({ Dikdörtgen: S.Dikdörtgen, Üçgen: S.Üçgen, Kare: S.Kare, Çember: S.Çember }) },
  );
  ekle(
    'g3m-t3',
    'Resimdeki şekil hangisidir?',
    'Çember',
    ['Çember', 'Daire', 'Kare', 'Üçgen'],
    'İçi boş yuvarlak çizgi…',
    { gorsel: nesne('cember-mor'), secenekIkonlari: ikonlar({ Çember: S.Çember, Daire: S.Daire, Kare: S.Kare, Üçgen: S.Üçgen }) },
  );
  ekle(
    'g3m-t4',
    '🎭 Resimdeki şekil hangisidir?',
    'Daire',
    ['Çember', 'Daire', 'Kare', 'Üçgen'],
    'İçi DOLU mu BOŞ mu? Boyalıysa adı değişir!',
    {
      gorsel: nesne('daire-mor'),
      sasirtma: true,
      secenekIkonlari: ikonlar({ Çember: S.Çember, Daire: S.Daire, Kare: S.Kare, Üçgen: S.Üçgen }),
    },
  );
  ekle(
    'g3m-t5',
    'Hangisi üçgene benzer?',
    'Dondurma külahı',
    ['Kapı', 'Dondurma külahı', 'Tekerlek', 'Pencere'],
    'Külah ters üçgen şeklindedir.',
    {
      gorsel: nesne('kulah-dondurma'),
      secenekIkonlari: ikonlar({
        Kapı: SN.Kapı,
        'Dondurma külahı': SN['Dondurma külahı'],
        Tekerlek: SN.Tekerlek,
        Pencere: SN.Pencere,
      }),
    },
  );
  ekle(
    'g3m-t6',
    'Kapı hangi şekle benzer?',
    'Dikdörtgen',
    ['Daire', 'Üçgen', 'Dikdörtgen', 'Çember'],
    'Kapı köşeli ve uzundur.',
    {
      gorsel: nesne('kapi'),
      secenekIkonlari: ikonlar({ Daire: S.Daire, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen, Çember: S.Çember }),
    },
  );
  ekle(
    'g3m-t7',
    'Resimdeki evin çatısı hangi şekildir?',
    'Üçgen',
    ['Üçgen', 'Kare', 'Daire', 'Dikdörtgen'],
    'Çatı üçgen şeklindedir.',
    {
      gorsel: nesne('ev-cati'),
      secenekIkonlari: ikonlar({ Üçgen: S.Üçgen, Kare: S.Kare, Daire: S.Daire, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g3m-t8',
    'Resimdeki trende kaç tane çember vardır?',
    '4',
    ['2', '4', '1', '3'],
    'Her vagonda 2 tekerlek, 2 vagon = 4 çember.',
    { gorsel: nesne('tren-2vagon') },
  );
  ekle(
    'g3m-t9',
    'Güneş hangi şekle benzer?',
    'Daire',
    ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
    'Güneş içi dolu yuvarlaktır.',
    {
      gorsel: nesne('gunes'),
      secenekIkonlari: ikonlar({ Kare: S.Kare, Üçgen: S.Üçgen, Daire: S.Daire, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g3m-t10',
    '🎭 Hangisi KÖŞELİ bir şekil DEĞİLDİR?',
    'Daire',
    ['Kare', 'Üçgen', 'Dikdörtgen', 'Daire'],
    '"DEĞİLDİR" — köşesi OLMAYAN şekli arıyoruz!',
    {
      gorsel: nesne('kare'),
      sasirtma: true,
      secenekIkonlari: ikonlar({ Kare: S.Kare, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen, Daire: S.Daire }),
    },
  );
  ekle(
    'g3m-t11',
    'Resimdeki robotun gözleri hangi şekildir?',
    'Daire',
    ['Daire', 'Kare', 'Üçgen', 'Dikdörtgen'],
    'Gözler içi dolu yuvarlaktır.',
    {
      gorsel: nesne('robot-goz'),
      secenekIkonlari: ikonlar({ Daire: S.Daire, Kare: S.Kare, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g3m-t12',
    'Resimdeki modelde kaç tane kare vardır?',
    '2',
    ['1', '3', '2', '4'],
    'Kafa ve gövde karedir.',
    { gorsel: nesne('robot') },
  );
  ekle(
    'g3m-t13',
    'Simit hangi şekle benzer?',
    'Çember',
    ['Çember', 'Kare', 'Üçgen', 'Dikdörtgen'],
    'Simitin ortası delik — içi boş çember.',
    {
      gorsel: nesne('simit'),
      secenekIkonlari: ikonlar({ Çember: S.Çember, Kare: S.Kare, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g3m-t14',
    "Elanaz'ın çizdiği balık modelinde kuyruk hangi şekildir?",
    'Üçgen',
    ['Üçgen', 'Daire', 'Kare', 'Çember'],
    'Kuyruk üçgen şeklindedir.',
    {
      gorsel: nesne('balik'),
      secenekIkonlari: ikonlar({ Üçgen: S.Üçgen, Daire: S.Daire, Kare: S.Kare, Çember: S.Çember }),
    },
  );
  ekle(
    'g3m-t15',
    'Aynı balığın gövdesi hangi şekildir?',
    'Daire',
    ['Kare', 'Daire', 'Üçgen', 'Dikdörtgen'],
    'Gövde içi dolu yuvarlaktır.',
    {
      gorsel: nesne('balik-govde'),
      secenekIkonlari: ikonlar({ Kare: S.Kare, Daire: S.Daire, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g3m-t16',
    'Karenin bir kenarını tutup yana doğru uzatırsak hangi şekil oluşur?',
    'Dikdörtgen',
    ['Üçgen', 'Dikdörtgen', 'Daire', 'Çember'],
    'Karenin uzamış hâli dikdörtgendir.',
    { gorsel: nesne('kare-dikdortgen-donusum'), secenekIkonlari: ikonlar({ Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen, Daire: S.Daire, Çember: S.Çember }) },
  );
  ekle(
    'g3m-t17',
    'Trafikteki DUR levhası gibi üç köşeli levhalar hangi şekildir?',
    'Üçgen',
    ['Üçgen', 'Kare', 'Daire', 'Dikdörtgen'],
    'Uyarı levhaları üçgendir.',
    {
      gorsel: nesne('uyari-levha'),
      secenekIkonlari: ikonlar({ Üçgen: S.Üçgen, Kare: S.Kare, Daire: S.Daire, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g3m-t18',
    'Resimdeki çiçek modelinde yapraklar hangi şekildir?',
    'Üçgen',
    ['Kare', 'Üçgen', 'Dikdörtgen', 'Çember'],
    'Yapraklar üçgen şeklindedir.',
    {
      gorsel: nesne('cicek'),
      secenekIkonlari: ikonlar({ Kare: S.Kare, Üçgen: S.Üçgen, Dikdörtgen: S.Dikdörtgen, Çember: S.Çember }),
    },
  );
  ekle(
    'g3m-t19',
    'Resimdeki evde toplam kaç pencere vardır ve hangi şekildir?',
    '2 kare',
    ['2 kare', '2 daire', '3 üçgen', '1 dikdörtgen'],
    'İki kare pencere vardır.',
    { gorsel: nesne('ev-2pencere') },
  );
  ekle(
    'g3m-t20',
    'Pizza dilimi hangi şekle benzer?',
    'Üçgen',
    ['Üçgen', 'Kare', 'Çember', 'Dikdörtgen'],
    'Pizza dilimi üçgen şeklindedir.',
    {
      gorsel: nesne('pizza-dilimi'),
      secenekIkonlari: ikonlar({ Üçgen: S.Üçgen, Kare: S.Kare, Çember: S.Çember, Dikdörtgen: S.Dikdörtgen }),
    },
  );
  ekle(
    'g3m-t21',
    '🎭 Elanaz çemberin içini sarıya boyadı. Şeklin YENİ adı nedir?',
    'Daire',
    ['Çember', 'Daire', 'Kare', 'Boyalı çember'],
    'Kitabımız ne diyordu — çemberin içini boyayınca ne oluşur?',
    {
      gorsel: nesne('boyama-ani'),
      sasirtma: true,
      secenekIkonlari: ikonlar({ Çember: S.Çember, Daire: S.Daire, Kare: S.Kare, 'Boyalı çember': S.Daire }),
    },
  );
  ekle(
    'g3m-t22',
    'Kitabın ön yüzü hangi şekle benzer?',
    'Dikdörtgen',
    ['Dikdörtgen', 'Daire', 'Üçgen', 'Çember'],
    'Kitap kapağı dikdörtgendir.',
    {
      gorsel: nesne('kitap-on'),
      secenekIkonlari: ikonlar({ Dikdörtgen: S.Dikdörtgen, Daire: S.Daire, Üçgen: S.Üçgen, Çember: S.Çember }),
    },
  );
  ekle(
    'g3m-t23',
    'Resimdeki kelebek modelinde kaç üçgen vardır?',
    '4',
    ['4', '2', '1', '3'],
    'Dört üçgen kanat vardır.',
    { gorsel: nesne('kelebek-4') },
  );
  ekle(
    'g3m-t24',
    '🎭 Madeni para hangi şekle benzer?',
    'Daire',
    ['Çember', 'Daire', 'Kare', 'Küre'],
    'Paranın içi dolu! Ve dikkat — küre bir CİSİMDİ, şekil değil!',
    {
      gorsel: nesne('para'),
      sasirtma: true,
      secenekIkonlari: ikonlar({ Çember: S.Çember, Daire: S.Daire, Kare: S.Kare, Küre: { tip: 'model', anahtar: 'kure' } }),
    },
  );
  ekle(
    'g3m-t25',
    'Hangisi doğru eşleşmedir?',
    'Çatı → Üçgen',
    ['Güneş → Kare', 'Çatı → Üçgen', 'Kapı → Daire', 'Tekerlek → Dikdörtgen'],
    'Her nesneyi doğru şekle eşleştir.',
    {
      gorsel: nesne('ev'),
      secenekIkonlari: ikonlar({
        'Güneş → Kare': { tip: 'eslestirme-sekil', nesne: 'gunes', sekil: 'kare' },
        'Çatı → Üçgen': { tip: 'eslestirme-sekil', nesne: 'cati', sekil: 'ucgen' },
        'Kapı → Daire': { tip: 'eslestirme-sekil', nesne: 'kapi', sekil: 'daire' },
        'Tekerlek → Dikdörtgen': { tip: 'eslestirme-sekil', nesne: 'tekerlek', sekil: 'dikdortgen' },
      }),
    },
  );

  return sorular;
}

export function geometrikSekilModelleri(karistir) {
  const g = (s) => ({ tur: 'nesne', sahne: `g3m-${s}` });
  return {
    id: 'geometrik-sekil-modelleri',
    baslik: 'Geometrik Şekil Modelleri',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            "Cisimlerin adlarını öğrendik. Şimdi sıra ŞEKİLLERDE! Şekiller, kâğıda çizebildiğimiz düz biçimlerdir.",
          gorsel: g('anlatim-1'),
        },
        {
          metin:
            "KARE'nin dört kenarı da eşittir. DİKDÖRTGEN karenin uzamış hâlidir. ÜÇGEN'in üç köşesi vardır.",
          gorsel: g('anlatim-2'),
        },
        {
          metin:
            'ÇEMBER yuvarlak bir çizgidir, içi BOŞTUR. Çemberin içini boyarsak DAİRE oluşur! Çember bir simit gibi, daire bir bisküvi gibidir.',
          gorsel: g('anlatim-3'),
        },
        {
          metin:
            'Şekiller birleşince modeller oluşur! Bir ev çizelim: gövdesi KARE, çatısı ÜÇGEN, penceresi DİKDÖRTGEN, güneşi DAİRE olsun. Sen de şekillerle neler çizebilirsin?',
          gorsel: g('anlatim-4'),
        },
      ],
    },
    alistirma: gorev3gAlistirma(),
    test: gorev3gTest(karistir),
  };
}
