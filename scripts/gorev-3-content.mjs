/** GOREV-3 — Geometrik Cisimler konusu, ritmik tablo boyama, sayı şeridi görselleri. */

export const SAYI_SERIDI_IDS = {
  '2b-a4': { tur: 'sayi-seridi', baslangic: 3, adim: 3, adimSayisi: 4, vurgulananlar: [9] },
  '2b-ga3': { tur: 'sayi-seridi', baslangic: 3, adim: 3, adimSayisi: 3, vurgulananlar: [9] },
  '2b-ga24': { tur: 'sayi-seridi', baslangic: 9, adim: 3, adimSayisi: 4, vurgulananlar: [18] },
  '2b-t4': { tur: 'sayi-seridi', baslangic: 3, adim: 3, adimSayisi: 4, vurgulananlar: [12] },
};

export function sayiSeridiGorselEkle(sorular) {
  return sorular.map((s) => (SAYI_SERIDI_IDS[s.id] ? { ...s, gorsel: SAYI_SERIDI_IDS[s.id] } : s));
}

export function gorev3RitmikTablo() {
  return [
    {
      id: 'rit-tb1',
      kazanimKodu: 'MAT.2.1.3',
      tip: 'tablo-boyama',
      yonerge:
        "2'den başlayarak ileriye doğru ikişer sayalım. Söylediğimiz sayıları tabloda boyayalım.",
      tabloBaslangic: 1,
      tabloBitis: 20,
      dogruHucreler: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      sasirtma: false,
      ipucu: 'İkişer sayarken her sayı bir öncekinden 2 fazladır.',
      dogruCevap: '2, 4, 6, 8, 10, 12, 14, 16, 18, 20',
    },
    {
      id: 'rit-tb2',
      kazanimKodu: 'MAT.2.1.3',
      tip: 'tablo-boyama',
      yonerge:
        "5'ten başlayarak ileriye doğru beşer sayalım. Söylediğimiz sayıları tabloda boyayalım.",
      tabloBaslangic: 1,
      tabloBitis: 40,
      dogruHucreler: [5, 10, 15, 20, 25, 30, 35, 40],
      sasirtma: false,
      ipucu: "5'er sayarken her adımda 5 eklenir.",
      dogruCevap: '5, 10, 15, 20, 25, 30, 35, 40',
    },
  ];
}

export function geometrikCisimler(karistir) {
  const alistirma = [
    {
      id: 'geo-a1',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: 'Köşesi ve kenarı olmayan cisimlere ne denir?',
      dogruCevap: 'yuvarlak',
      alternatifCevaplar: ['yuvarlak cisim'],
      cevapTipi: 'metin',
      ipucu: 'Top gibi cisimler…',
    },
    {
      id: 'geo-a2',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: 'Futbol topu yuvarlak mıdır, köşeli midir?',
      dogruCevap: 'yuvarlak',
      cevapTipi: 'metin',
      ipucu: 'Top yuvarlanır.',
    },
    {
      id: 'geo-a3',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: 'Buzdolabı yuvarlak mıdır, köşeli midir?',
      dogruCevap: 'köşeli',
      cevapTipi: 'metin',
      ipucu: 'Köşeleri ve kenarları var.',
    },
    {
      id: 'geo-a4',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: "Elanaz'ın zekâ küpü köşeli midir? (evet/hayır)",
      dogruCevap: 'evet',
      cevapTipi: 'metin',
      ipucu: 'Küpün köşeleri vardır.',
    },
    {
      id: 'geo-a5',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: 'Portakal hangi gruba girer? (yuvarlak/köşeli)',
      dogruCevap: 'yuvarlak',
      cevapTipi: 'metin',
      ipucu: 'Portakal yuvarlaktır.',
    },
    {
      id: 'geo-a6',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: 'Kitap yuvarlak mıdır, köşeli midir?',
      dogruCevap: 'köşeli',
      cevapTipi: 'metin',
      ipucu: 'Kitabın köşeleri vardır.',
    },
    {
      id: 'geo-a7',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: 'Tekerlek yuvarlaktır. Peki tekerleğin köşesi var mıdır? (evet/hayır)',
      dogruCevap: 'hayır',
      cevapTipi: 'metin',
      ipucu: 'Yuvarlak cisimlerin köşesi ve kenarı olmaz — soru seni şaşırtmaya çalıştı!',
      sasirtma: true,
    },
    {
      id: 'geo-a8',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'yazili',
      soru: 'Süt kutusu köşeli midir? (evet/hayır)',
      dogruCevap: 'evet',
      cevapTipi: 'metin',
      ipucu: 'Kutunun köşeleri vardır.',
    },
  ];

  const testEkle = (id, soru, cevap, secenekler, ipucu, extra = {}) => ({
    id,
    kazanimKodu: 'MAT.2.1.1',
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler: karistir(secenekler),
    ipucu,
    ...extra,
  });

  const test = [
    testEkle('geo-t1', 'Hangisi yuvarlak bir cisimdir?', 'Top', ['Kitap', 'Top', 'Hediye kutusu', 'Dolap'], 'Top yuvarlanır.'),
    testEkle(
      'geo-t2',
      'Hangisi köşeli bir cisimdir?',
      'Süt kutusu',
      ['Portakal', 'Misket', 'Süt kutusu', 'Tenis topu'],
      'Kutunun köşeleri vardır.',
    ),
    testEkle(
      'geo-t3',
      'Hangisi yuvarlak cisimdir?',
      'Karpuz',
      ['Dolap', 'Masa', 'Karpuz', 'Defter'],
      'Karpuz yuvarlaktır.',
    ),
    testEkle(
      'geo-t4',
      'Elanaz kampta bir termos gördü. Termosun gövdesi yuvarlaktır. Termos hangi gruba girer?',
      'Yuvarlak',
      ['Köşeli', 'Yuvarlak', 'Kare', 'Üçgen'],
      'Yuvarlak gövde.',
    ),
    testEkle(
      'geo-t5',
      'Hangisi köşeli DEĞİLDİR?',
      'Misket',
      ['Hediye kutusu', 'Kitap', 'Misket', 'Çamaşır makinesi'],
      '"DEĞİLDİR" diyor — köşeli OLMAYANI arıyoruz!',
      { sasirtma: true },
    ),
    testEkle(
      'geo-t6',
      'Top ve portakal için hangisi doğrudur?',
      'İkisi de yuvarlaktır',
      ['İkisi de köşelidir', 'İkisi de yuvarlaktır', 'Top köşeli, portakal yuvarlaktır', 'İkisi de karedir'],
      'İkisi de yuvarlanabilir.',
    ),
    testEkle(
      'geo-t7',
      "Kerem'in oyuncak kutusu köşelidir. Kutuda ne vardır?",
      'Köşe ve kenar',
      ['Köşe ve kenar', 'Sadece yuvarlaklık', 'Tekerlek', 'Sap'],
      'Köşeli cisimlerin köşe ve kenarı vardır.',
    ),
    testEkle(
      'geo-t8',
      'Kalem kutusu köşelidir ama içindeki misket nasıldır?',
      'Yuvarlaktır',
      ['Köşelidir', 'Yuvarlaktır', 'Karedir', 'Üçgendir'],
      'Dikkat, soru kutuyu değil İÇİNDEKİ misketi soruyor!',
      { sasirtma: true },
    ),
    {
      id: 'geo-e1',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'eslestirme',
      yonerge: 'Nesneleri grubuyla eşleştir.',
      ciftler: [
        { sol: 'Top', sag: 'Yuvarlak' },
        { sol: 'Kitap', sag: 'Köşeli' },
        { sol: 'Portakal', sag: 'Yuvarlak' },
        { sol: 'Hediye kutusu', sag: 'Köşeli' },
      ],
      sasirtma: false,
      ipucu: 'Köşesi ve kenarı olmayanlar yuvarlaktır.',
      dogruCevap: 'Top→Yuvarlak, Kitap→Köşeli, Portakal→Yuvarlak, Hediye kutusu→Köşeli',
    },
    {
      id: 'geo-e2',
      kazanimKodu: 'MAT.2.1.1',
      tip: 'eslestirme',
      yonerge: 'Nesneleri grubuyla eşleştir.',
      ciftler: [
        { sol: 'Misket', sag: 'Yuvarlak' },
        { sol: 'Dolap', sag: 'Köşeli' },
        { sol: 'Karpuz', sag: 'Yuvarlak' },
        { sol: 'Defter', sag: 'Köşeli' },
      ],
      sasirtma: false,
      ipucu: 'Köşesi ve kenarı olmayanlar yuvarlaktır.',
      dogruCevap: 'Misket→Yuvarlak, Dolap→Köşeli, Karpuz→Yuvarlak, Defter→Köşeli',
    },
  ];

  return {
    id: 'geometrik-cisimler',
    baslik: 'Geometrik Cisimler',
    kazanimKodu: 'MAT.2.1.1',
    anlatim: {
      ekranlar: [
        {
          metin:
            'Çevremizdeki her nesnenin bir biçimi vardır. Kimi nesneler yuvarlaktır, kimi nesneler köşelidir. Futbol topunu düşünelim: yüzeyi dümdüz değil, yusyuvarlaktır. Bir de kitabı düşünelim: kenarları ve köşeleri vardır.',
        },
        {
          metin:
            'Köşesi ve kenarı OLMAYAN cisimlere YUVARLAK cisimler denir. Top, portakal, misket ve karpuz yuvarlak cisimlerdir. Yuvarlak cisimler yere koyunca yuvarlanabilir.',
        },
        {
          metin:
            'Köşesi ve kenarı OLAN cisimlere KÖŞELİ cisimler denir. Kitap, hediye kutusu, buzdolabı ve zekâ küpü köşeli cisimlerdir. Köşeli cisimler yuvarlanmaz, durduğu yerde durur. Haydi, çevrene bak: gördüğün bir yuvarlak ve bir köşeli cisim söyle!',
        },
      ],
    },
    alistirma,
    test,
  };
}
