/** GOREV-3C — Geometrik Cisimler havuz takviyesi (50 soru). Metinler patron onaylıdır. */

const KAZANIM = 'MAT.2.1.1';

function cevapTipi(cevap) {
  const s = String(cevap);
  if (Number.isNaN(Number(s)) || s.includes(' ') || /[a-zA-ZğüşıöçĞÜŞİÖÇ]/.test(s)) return 'metin';
  return 'sayi';
}

export function gorev3cAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipi(cevap),
      ...extra,
    });

  ekle('3c-g1-a1', 'Köşesi ve kenarı olan cisimlere ne denir?', 'köşeli', 'Köşesi ve kenarı olanlar…', {
    alternatifCevaplar: ['köşeli cisim'],
  });
  ekle('3c-g1-a2', 'Basketbol topu yuvarlak mıdır, köşeli midir?', 'yuvarlak', 'Top yuvarlanır.');
  ekle(
    '3c-g1-a3',
    "Elanaz'ın boya kutusu köşelidir. Kutunun köşesi var mıdır? (evet/hayır)",
    'evet',
    'Köşeli cismin köşesi vardır.',
  );
  ekle('3c-g1-a4', 'Karpuz hangi gruba girer? (yuvarlak/köşeli)', 'yuvarlak', 'Karpuz yuvarlaktır.');
  ekle('3c-g1-a5', 'Televizyon yuvarlak mıdır, köşeli midir?', 'köşeli', 'Televizyonun köşeleri vardır.');
  ekle('3c-g1-a6', 'Misket yuvarlak mıdır, köşeli midir?', 'yuvarlak', 'Misket yuvarlaktır.');
  ekle(
    '3c-g1-a7',
    "Elanaz'ın matematik kitabı köşeli midir? (evet/hayır)",
    'evet',
    'Kitabın köşeleri vardır.',
  );
  ekle('3c-g1-a8', 'Yuvarlak cisimler yere konunca yuvarlanabilir mi? (evet/hayır)', 'evet', 'Yuvarlak cisimler yuvarlanır.');
  ekle(
    '3c-g1-a9',
    'Köşeli cisimler yuvarlanır mı? (evet/hayır)',
    'hayır',
    'Dikkat! Köşeli cisimler köşelerine takılır, durduğu yerde durur.',
    { sasirtma: true },
  );
  ekle('3c-g1-a10', 'Portakal ve mandalina aynı grupta mıdır? (evet/hayır)', 'evet', 'İkisi de yuvarlaktır.');
  ekle('3c-g1-a11', 'Buzdolabının köşesi var mıdır? (evet/hayır)', 'evet', 'Buzdolabı köşelidir.');
  ekle('3c-g1-a12', 'Tenis topunun kenarı var mıdır? (evet/hayır)', 'hayır', 'Yuvarlak cisimlerin kenarı olmaz.');
  ekle(
    '3c-g1-a13',
    'Elanaz markette bir konserve kutusu ve bir kavun gördü. Hangisi yuvarlaktır?',
    'kavun',
    'Kavun yuvarlaktır.',
  );
  ekle('3c-g1-a14', 'Hediye kutusu hangi gruba girer? (yuvarlak/köşeli)', 'köşeli', 'Kutunun köşeleri vardır.');
  ekle(
    '3c-g1-a15',
    'Yumurta köşeli midir? (evet/hayır)',
    'hayır',
    'Yumurtanın köşesi ve kenarı yoktur — biçimi yuvarlağa benzer, şaşırtmaya gelme!',
    { sasirtma: true },
  );
  ekle('3c-g1-a16', 'Çamaşır makinesi yuvarlak mıdır, köşeli midir?', 'köşeli', 'Makinenin köşeleri vardır.');
  ekle(
    '3c-g1-a17',
    "Elanaz'ın kalem kutusunda kaç köşe olduğunu saymak istiyor. Kalem kutusu köşeli bir cisim midir? (evet/hayır)",
    'evet',
    'Kalem kutusu köşelidir.',
  );
  ekle(
    '3c-g1-a18',
    "Dünya'mızın biçimi neye benzer: yuvarlak bir cisme mi, köşeli bir cisme mi?",
    'yuvarlak',
    'Dünya yuvarlağa benzer.',
  );
  ekle('3c-g1-a19', 'Defterin kenarı var mıdır? (evet/hayır)', 'evet', 'Defter köşelidir.');
  ekle(
    '3c-g1-a20',
    'Bir cismin hem köşesi hem kenarı yoksa o cisim hangi gruba girer?',
    'yuvarlak',
    'Köşe YOK + kenar YOK = yuvarlak. "Yok" kelimelerine dikkat!',
    { sasirtma: true },
  );
  ekle(
    '3c-g1-a21',
    "Elanaz'ın süt bardağı yuvarlak, peçete kutusu köşelidir. Hangisi yuvarlanabilir?",
    'süt bardağı',
    'Bardak yuvarlaktır.',
    { alternatifCevaplar: ['bardak'] },
  );
  ekle('3c-g1-a22', 'Saksıdaki domates yuvarlak mıdır, köşeli midir?', 'yuvarlak', 'Domates yuvarlaktır.');
  ekle('3c-g1-a23', 'Ayakkabı kutusunun kenarı var mıdır? (evet/hayır)', 'evet', 'Kutu köşelidir.');
  ekle('3c-g1-a24', 'Elanaz iki cisim seçti: zar ve bilye. Hangisi köşelidir?', 'zar', 'Zarın köşeleri vardır.');
  ekle('3c-g1-a25', 'Çevrendeki nesnelerden biri: masa. Masa köşeli midir? (evet/hayır)', 'evet', 'Masanın köşeleri vardır.');

  return sorular;
}

export function gorev3cTest(karistir) {
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

  ekle('3c-g1-t1', 'Hangisi yuvarlak bir cisimdir?', 'Karpuz', ['Defter', 'Karpuz', 'Kutu', 'Televizyon'], 'Karpuz yuvarlaktır.');
  ekle('3c-g1-t2', 'Hangisi köşeli bir cisimdir?', 'Zar', ['Misket', 'Portakal', 'Zar', 'Balon'], 'Zarın köşeleri vardır.');
  ekle(
    '3c-g1-t3',
    'Yuvarlak cisimlerde ne YOKTUR?',
    'Köşe ve kenar',
    ['Renk', 'Köşe ve kenar', 'Büyüklük', 'Ağırlık'],
    'Yuvarlak cisimlerin köşesi ve kenarı olmaz.',
  );
  ekle(
    '3c-g1-t4',
    'Elanaz pikniğe karpuz ve kutu meyve suyu getirdi. Hangisi yuvarlaktır?',
    'Karpuz',
    ['Kutu meyve suyu', 'Karpuz', 'İkisi de köşeli', 'Hiçbiri'],
    'Karpuz yuvarlaktır.',
  );
  ekle('3c-g1-t5', 'Hangisi yuvarlanabilir?', 'Top', ['Kitap', 'Buzdolabı', 'Top', 'Dolap'], 'Top yuvarlaktır.');
  ekle(
    '3c-g1-t6',
    'Hangisi yuvarlak DEĞİLDİR?',
    'Zekâ küpü',
    ['Misket', 'Portakal', 'Zekâ küpü', 'Tenis topu'],
    '"DEĞİLDİR" — yuvarlak OLMAYANI arıyoruz!',
    { sasirtma: true },
  );
  ekle(
    '3c-g1-t7',
    'Köşeli cisimler için hangisi doğrudur?',
    'Köşesi ve kenarı vardır',
    ['Köşesi ve kenarı vardır', 'Yuvarlanır', 'Köşesi yoktur', 'Hepsi yumuşaktır'],
    'Köşeli cisimlerin köşe ve kenarı vardır.',
  );
  ekle(
    '3c-g1-t8',
    'Hangisinin kenarı vardır?',
    'Ayakkabı kutusu',
    ['Bilye', 'Balon', 'Ayakkabı kutusu', 'Yumurta'],
    'Kutunun kenarları vardır.',
  );
  ekle(
    '3c-g1-t9',
    "Elanaz'ın sınıfındaki yazı tahtası hangi gruba girer?",
    'Köşeli',
    ['Yuvarlak', 'Köşeli', 'Hem yuvarlak hem köşeli', 'Hiçbiri'],
    'Yazı tahtasının köşeleri vardır.',
  );
  ekle(
    '3c-g1-t10',
    'Aşağıdaki çiftlerden hangisi AYNI gruptadır?',
    'Portakal - Misket',
    ['Top - Kitap', 'Portakal - Misket', 'Zar - Balon', 'Kutu - Karpuz'],
    'İkisi de yuvarlaktır.',
  );
  ekle(
    '3c-g1-t11',
    'Saat kulesindeki saat yusyuvarlaktır. Saatin köşesi var mıdır?',
    'Yoktur',
    ['Vardır', 'Yoktur', 'Bazen vardır', 'Saatlerde köşe olmaz ama kenar olur'],
    'Yuvarlaksa ne köşesi ne kenarı olur — D şıkkı tuzak!',
    { sasirtma: true },
  );
  ekle('3c-g1-t12', 'Hangisi köşeli bir cisimdir?', 'Süt kutusu', ['Kavun', 'Süt kutusu', 'Bilye', 'Mandalina'], 'Kutunun köşeleri vardır.');
  ekle(
    '3c-g1-t13',
    "Kerem'in topu masadan düşünce yuvarlandı. Topun yuvarlanmasının sebebi nedir?",
    'Yuvarlak olması',
    ['Köşeli olması', 'Yuvarlak olması', 'Ağır olması', 'Renkli olması'],
    'Yuvarlak cisimler yuvarlanır.',
  );
  ekle(
    '3c-g1-t14',
    'Hangisinin köşesi YOKTUR?',
    'Karpuz',
    ['Defter', 'Masa', 'Karpuz', 'Kutu'],
    'Karpuz yuvarlaktır.',
  );
  ekle(
    '3c-g1-t15',
    'Elanaz market poşetine yuvarlak cisimler koyuyor. Hangisini koymalı?',
    'Portakal',
    ['Makarna kutusu', 'Portakal', 'Peçete kutusu', 'Kibrit kutusu'],
    'Portakal yuvarlaktır.',
  );
  ekle(
    '3c-g1-t16',
    'Hangisi köşeli cisim ÇİFTİDİR?',
    'Kitap - Kutu',
    ['Top - Zar', 'Kitap - Kutu', 'Misket - Defter', 'Karpuz - Kavun'],
    'İKİSİ DE köşeli olmalı — tek tek kontrol et!',
    { sasirtma: true },
  );
  ekle(
    '3c-g1-t17',
    'Hangisi doğrudur?',
    'Köşeli cisimlerin kenarı vardır',
    [
      'Yuvarlak cisimlerin köşesi vardır',
      'Köşeli cisimler yuvarlanır',
      'Köşeli cisimlerin kenarı vardır',
      'Topun kenarı vardır',
    ],
    'Köşeli cisimlerin kenarı vardır.',
  );
  ekle(
    '3c-g1-t18',
    "Elanaz'ın kumbarasında biriken paralar yuvarlaktır. Madeni paranın köşesi var mıdır?",
    'Yoktur',
    ['Vardır', 'Yoktur', 'Sadece 1 liranın vardır', 'Paralar köşelidir'],
    'Yuvarlak cisimlerin köşesi olmaz.',
  );
  ekle(
    '3c-g1-t19',
    'Hangisi yuvarlak bir cisimdir?',
    'Futbol topu',
    ['Çamaşır makinesi', 'Futbol topu', 'Televizyon', 'Kalem kutusu'],
    'Top yuvarlaktır.',
  );
  ekle(
    '3c-g1-t20',
    'Sınıftaki hangi eşya köşelidir?',
    'Sıra',
    ['Sıra', 'Bilye', 'Balon', 'Top'],
    'Sıranın köşeleri vardır.',
  );
  ekle(
    '3c-g1-t21',
    'Elanaz "Kenarı olmayan bir cisim buldum." dedi. Elanaz hangi cismi bulmuş olabilir?',
    'Portakal',
    ['Kitap', 'Kutu', 'Portakal', 'Defter'],
    'Kenarı OLMAYAN = yuvarlak grup!',
    { sasirtma: true },
  );
  ekle(
    '3c-g1-t22',
    'Hangisi yuvarlanmaz?',
    'Hediye kutusu',
    ['Misket', 'Top', 'Hediye kutusu', 'Bilye'],
    'Kutu köşelidir.',
  );
  ekle(
    '3c-g1-t23',
    'Manavdaki hangi meyve köşeli kutuda satılır ama kendisi yuvarlaktır?',
    'Kutudaki portakallar yuvarlaktır',
    [
      'Çilek kutudaki çilekler köşelidir',
      'Kutudaki portakallar yuvarlaktır',
      'Muz yuvarlaktır',
      'Kutular yuvarlaktır',
    ],
    'Portakal yuvarlaktır, kutu köşelidir.',
  );
  ekle(
    '3c-g1-t24',
    'Hangisi köşeli cisimlerin özelliğidir?',
    'Köşesi ve kenarı olmak',
    ['Yuvarlanmak', 'Köşesi ve kenarı olmak', 'Köşesiz olmak', 'Hep küçük olmak'],
    'Köşeli cisimlerin köşe ve kenarı vardır.',
  );
  ekle(
    '3c-g1-t25',
    'Bir kutunun İÇİNE bilye koyduk. Kutu ve bilye için hangisi doğrudur?',
    'Kutu köşeli, bilye yuvarlaktır',
    [
      'İkisi de köşelidir',
      'İkisi de yuvarlaktır',
      'Kutu köşeli, bilye yuvarlaktır',
      'Kutu yuvarlak, bilye köşelidir',
    ],
    'Her cismi AYRI AYRI düşün — iç içe olmaları grubunu değiştirmez!',
    { sasirtma: true },
  );

  return sorular;
}
