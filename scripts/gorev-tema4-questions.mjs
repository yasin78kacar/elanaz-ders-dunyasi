/** GOREV-TEMA4 — Uzunluk Ölçme, Tartma, Sıvı Ölçme, Zaman (200 görselli soru). */

const KAZANIM = {
  UZUNLUK: 'MAT.2.5.1',
  TARTMA: 'MAT.2.5.2',
  SIVI: 'MAT.2.5.3',
  ZAMAN: 'MAT.2.5.4',
};

function olc(sahne) {
  return { tur: 'olcme', mod: 'anlatim', sahne };
}
function cet(bas, bit, nesne = 'kalem') {
  return { tur: 'olcme', mod: 'uzunluk', sahne: 'cetvel-nesne', baslangic: bas, bitis: bit, nesne };
}
function uzk(...uzunluklar) {
  return { tur: 'olcme', mod: 'uzunluk', sahne: 'uzunluk-karsilastir', uzunluklar };
}
function uzkEt(...pairs) {
  return {
    tur: 'olcme',
    mod: 'uzunluk',
    sahne: 'uzunluk-etiket',
    uzunluklar: pairs.map((p) => p[0]),
    etiketler: pairs.map((p) => p[1]),
  };
}
function ter(sol, sag, durum = 'dengede', solBirim = 'g', sagBirim = 'g') {
  return { tur: 'olcme', mod: 'tartma', sahne: 'terazi', sol, sag, durum, solBirim, sagBirim };
}
function siv(miktar, birim = 'L', kapTip = 'sise', doluluk = 0.7) {
  return { tur: 'olcme', mod: 'sivi', sahne: 'kap', miktar, birim, kapTip, doluluk };
}
function sivKars(...miktarlar) {
  return { tur: 'olcme', mod: 'sivi', sahne: 'karsilastir', miktarlar };
}
function saa(saat, dakika = 0, dijital = false) {
  return { tur: 'olcme', mod: 'zaman', sahne: dijital ? 'dijital' : 'analog', saat, dakika };
}
function saaCift(s1, d1, s2, d2) {
  return { tur: 'olcme', mod: 'zaman', sahne: 'iki-saat', saat: s1, dakika: d1, saat2: s2, dakika2: d2 };
}
function araclar(tip) {
  return { tur: 'olcme', mod: 'araclar', sahne: tip };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function uzunlukOlcmeAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.UZUNLUK,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('uo-a1', 'Bir kalem 6 cm, diğer kalem 9 cm. Hangi kalem daha uzun?', "9 cm'lik", '', { gorsel: uzk(6, 9) });
  ekle('uo-a2', "Cetvel 0'dan 5'e kadar gösteriyorsa nesne kaç cm?", '5 cm', '', { gorsel: cet(0, 5) });
  ekle('uo-a3', 'Masa 120 cm, sandalye 80 cm. Hangisi daha kısa?', 'Sandalye', '', { gorsel: olc('uo-masa-sandalye') });
  ekle('uo-a4', 'Bir ip 12 cm. Bu ip kaç cm?', '12 cm', '', { gorsel: cet(0, 12, 'ip') });
  ekle('uo-a5', 'Ali 140 cm, Ayşe 130 cm. Kim daha uzun boylu?', 'Ali', '', { gorsel: olc('uo-cocuk-boy-karsilastir') });
  ekle('uo-a6', "Cetvel 0'dan 7'ye kadar gösteriyorsa nesne kaç cm?", '7 cm', '', { gorsel: cet(0, 7) });
  ekle('uo-a7', 'Kalem 15 cm, silgi 5 cm. Kalem silgiden kaç cm uzun?', '10 cm', '', { gorsel: uzk(15, 5) });
  ekle('uo-a8', 'En uzun nesneyi bul: 8 cm, 12 cm, 6 cm', '12 cm', '', { gorsel: uzk(8, 12, 6) });
  ekle('uo-a9', 'Bir çubuk 10 cm. Yarısı kaç cm?', '5 cm', '', { gorsel: olc('uo-cubuk-yarim') });
  ekle('uo-a10', 'Masa 90 cm, kapı 200 cm. Hangisi daha uzun?', 'Kapı', '', { gorsel: olc('uo-masa-kapi') });
  ekle('uo-a11', "Cetvel 0'dan 14'e kadar gösteriyorsa nesne kaç cm?", '14 cm', '', { gorsel: cet(0, 14) });
  ekle('uo-a12', 'En kısa nesneyi bul: 11 cm, 7 cm, 15 cm', '7 cm', '', { gorsel: uzk(11, 7, 15) });
  ekle('uo-a13', 'Berk 135 cm, Can 128 cm, Selin 142 cm. En uzun boylu kim?', 'Selin', '', { gorsel: olc('uo-uc-cocuk-boy') });
  ekle('uo-a14', 'Bir kitap 20 cm. Bir defter 18 cm. Kitap defterden kaç cm uzun?', '2 cm', '', { gorsel: uzk(20, 18) });
  ekle('uo-a15', "Cetvel 3'ten 9'a kadar gösteriyorsa nesne kaç cm?", '6 cm', '', { gorsel: cet(3, 9) });
  ekle('uo-a16', 'İki kalem var: 13 cm ve 8 cm. Toplam kaç cm?', '21 cm', '', { gorsel: olc('uo-iki-kalem-arka-arka') });
  ekle('uo-a17', 'Bir ip 18 cm, diğer ip 9 cm. Fark kaç cm?', '9 cm', '', { gorsel: uzk(18, 9) });
  ekle('uo-a18', 'Sıralama: 5 cm, 15 cm, 10 cm — küçükten büyüğe', '5, 10, 15', '', { gorsel: uzk(5, 15, 10) });
  ekle('uo-a19', "Cetvel 0'dan 16'ya kadar gösteriyorsa nesne kaç cm?", '16 cm', '', { gorsel: cet(0, 16) });
  ekle('uo-a20', "Zeynep'in boyu 138 cm, Hande'nin boyu 138 cm. Kiminki daha uzun?", 'Eşit', '', { gorsel: olc('uo-esit-boy-cocuk') });
  ekle('uo-a21', 'Bir çubuk 20 cm. Dörtte biri kaç cm?', '5 cm', '', { gorsel: olc('uo-cubuk-dort-parca') });
  ekle('uo-a22', 'Masanın uzunluğu 5 kitap. Her kitap 20 cm. Masa kaç cm?', '100 cm', '', { gorsel: olc('uo-masa-kitap') });
  ekle('uo-a23', "Cetvel 2'den 10'a kadar gösteriyorsa nesne kaç cm?", '8 cm', '', { gorsel: cet(2, 10) });
  ekle('uo-a24', 'En kısa: 20 cm, 18 cm, 19 cm', '18 cm', '', { gorsel: uzk(20, 18, 19) });
  ekle('uo-a25', 'Yusuf 145 cm. Kapı 200 cm. Kapı Yusuf\'tan kaç cm uzun?', '55 cm', '', { gorsel: olc('uo-yusuf-kapi') });

  return sorular;
}

function uzunlukOlcmeTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.UZUNLUK,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('uo-t1', "Bir kalem cetvelde 0'dan 8'e kadar uzanıyor. Kalem kaç cm?", '8', ['7', '9', '8', '6'], '', { gorsel: cet(0, 8) });
  ekle('uo-t2', 'Hangi nesne daha kısa? Kalem: 12 cm, Silgi: 5 cm', 'Silgi', ['Kalem', 'Silgi', 'İkisi eşit', 'Belli değil'], '', { gorsel: uzk(12, 5) });
  ekle('uo-t3', 'Mehmet 132 cm, Ali 140 cm. Ali Mehmet\'ten kaç cm uzun?', '8', ['6', '10', '8', '12'], '', { gorsel: olc('uo-cocuk-boy-karsilastir') });
  ekle('uo-t4', "Cetvel 4'ten 11'e kadar uzanan nesne kaç cm?", '7', ['8', '6', '7', '9'], '', { gorsel: cet(4, 11) });
  ekle('uo-t5', 'En uzun hangisi? 9 cm, 15 cm, 12 cm', '15 cm', ['9 cm', '12 cm', '15 cm', 'Hepsi eşit'], '', { gorsel: uzk(9, 15, 12) });
  ekle('uo-t6', "Fatma'nın kalemi 14 cm, Ayşe'nin kalemi 9 cm. Toplam kaç cm?", '23', ['22', '24', '23', '21'], '', { gorsel: olc('uo-iki-kalem-arka-arka') });
  ekle('uo-t7', "Bir ip 20 cm'dir. Ortadan kesilirse her parça kaç cm olur?", '10', ['8', '12', '10', '9'], '', { gorsel: olc('uo-ip-ortadan-kes') });
  ekle(
    'uo-t8',
    "🎭 Cetvel 0'dan değil 3'ten başlıyor ve nesne 9'da bitiyor. Nesne kaç cm?",
    '6',
    ['9', '3', '6', '12'],
    '9 - 3 = ?',
    { gorsel: cet(3, 9), sasirtma: true },
  );
  ekle('uo-t9', 'Selin 138 cm, Berk 145 cm, Can 132 cm. En kısa boylu kim?', 'Can', ['Selin', 'Berk', 'Can', 'Hepsi eşit'], '', { gorsel: olc('uo-uc-cocuk-boy') });
  ekle('uo-t10', "Hangi ölçüm doğrudur? Kalem cetvelde 2'den 10'a uzanıyor.", '8 cm', ['10 cm', '2 cm', '8 cm', '12 cm'], '', { gorsel: cet(2, 10) });
  ekle('uo-t11', 'Masa 150 cm, sandalye 90 cm. Fark kaç cm?', '60', ['50', '70', '60', '80'], '', { gorsel: olc('uo-masa-sandalye') });
  ekle(
    'uo-t12',
    '🎭 Ali bir çubuğu 4 eşit parçaya böldü. Her parça 5 cm. Çubuk kaç cm?',
    '20',
    ['15', '25', '20', '10'],
    '4 × 5 = ?',
    { gorsel: olc('uo-cubuk-dort-parca'), sasirtma: true },
  );
  ekle('uo-t13', 'Küçükten büyüğe sırala: 14 cm, 8 cm, 11 cm', '8, 11, 14', ['8, 11, 14', '14, 11, 8', '11, 8, 14', '8, 14, 11'], '', { gorsel: uzk(14, 8, 11) });
  ekle('uo-t14', "Zeynep'in boyu 136 cm. Kapı 200 cm. Fark kaç cm?", '64', ['54', '74', '64', '84'], '', { gorsel: olc('uo-zeynep-kapi') });
  ekle(
    'uo-t15',
    '🎭 İki kalem var. Birincisi 7 cm, ikincisi birincisinin 2 katı. İkinci kalem kaç cm?',
    '14',
    ['9', '16', '14', '12'],
    '7 × 2 = ?',
    { gorsel: olc('uo-kalem-iki-kat'), sasirtma: true },
  );
  ekle('uo-t16', 'Hangi ölçüm aracı uzunluk ölçmek için kullanılır?', 'Cetvel', ['Terazi', 'Cetvel', 'Saat', 'Termometre'], '', { gorsel: araclar('olcum-aletleri') });
  ekle('uo-t17', 'Hande 3 kalemi arka arkaya koydu. Her kalem 6 cm. Toplam kaç cm?', '18', ['15', '21', '18', '12'], '', { gorsel: olc('uo-uc-kalem-arka-arka') });
  ekle(
    'uo-t18',
    '🎭 Masanın uzunluğu 6 deftere eşit. Her defter 15 cm. Masa kaç cm?',
    '90',
    ['80', '100', '90', '70'],
    '6 × 15 = ?',
    { gorsel: olc('uo-masa-defter'), sasirtma: true },
  );
  ekle('uo-t19', 'En uzun hangisi? 17 cm, 17 cm, 16 cm', 'Birinci ve ikinci eşit', ['Birinci', 'İkinci', 'Birinci ve ikinci eşit', 'Üçüncü'], '', { gorsel: uzk(17, 17, 16) });
  ekle('uo-t20', "Yusuf'un kalemi 11 cm, Can'ın kalemi Yusuf'unkinden 4 cm kısa. Can'ın kalemi kaç cm?", '7', ['15', '9', '7', '8'], '', { gorsel: uzk(11, 7) });
  ekle(
    'uo-t21',
    '🎭 Bir ip 18 cm. 6 eşit parçaya bölünürse her parça kaç cm?',
    '3',
    ['4', '2', '3', '6'],
    '18 ÷ 6 = ?',
    { gorsel: olc('uo-ip-alti-parca'), sasirtma: true },
  );
  ekle('uo-t22', 'Büyükten küçüğe sırala: 13 cm, 19 cm, 7 cm', '19, 13, 7', ['7, 13, 19', '19, 13, 7', '13, 19, 7', '19, 7, 13'], '', { gorsel: uzk(13, 19, 7) });
  ekle('uo-t23', "Kalem 0'dan 15'e uzanıyor. Silgi 0'dan 6'ya uzanıyor. Kalem silgiden kaç cm uzun?", '9', ['8', '10', '9', '7'], '', { gorsel: uzk(15, 6) });
  ekle(
    'uo-t24',
    "🎭 Ali'nin boyu Ayşe'den 8 cm uzun. Ayşe 127 cm ise Ali kaç cm?",
    '135',
    ['133', '137', '135', '131'],
    '127 + 8 = ?',
    { gorsel: olc('uo-cocuk-boy-karsilastir'), sasirtma: true },
  );
  ekle(
    'uo-t25',
    '🎭 Selin 3 ip kesti: 5 cm, 8 cm, 12 cm. Toplam kaç cm ip kullandı?',
    '25',
    ['23', '27', '25', '21'],
    '5 + 8 + 12 = ?',
    { gorsel: uzk(5, 8, 12), sasirtma: true },
  );

  return sorular;
}

function tartmaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TARTMA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('ta-a1', 'Elma 200 g, armut 150 g. Hangisi daha ağır?', 'Elma', '', { gorsel: ter(200, 150) });
  ekle('ta-a2', 'Terazi dengede. Sol kefede 3 kg var. Sağ kefede kaç kg var?', '3 kg', '', { gorsel: ter(3, 3, 'dengede', 'kg', 'kg') });
  ekle('ta-a3', 'Karpuz 4 kg, kavun 2 kg. Toplam kaç kg?', '6 kg', '', { gorsel: ter(4, 2, 'dengede', 'kg', 'kg') });
  ekle('ta-a4', 'Çanta 5 kg, kitap 1 kg. Çanta kitaptan kaç kg ağır?', '4 kg', '', { gorsel: ter(5, 1, 'sola', 'kg', 'kg') });
  ekle('ta-a5', '1 kg kaç gramdır?', '1000 g', '', { gorsel: olc('ta-kg-gram-gosterim') });
  ekle('ta-a6', 'Mehmet 35 kg, Ali 42 kg. Hangisi daha ağır?', 'Ali', '', { gorsel: olc('ta-cocuk-terazi') });
  ekle('ta-a7', 'Bir paket 500 g. İki paket kaç g?', '1000 g = 1 kg', '', { gorsel: ter(500, 500) });
  ekle('ta-a8', 'Sol kefe 6 kg, sağ kefe 4 kg. Terazi hangi tarafa eğik?', 'Sola', '', { gorsel: ter(6, 4, 'sola', 'kg', 'kg') });
  ekle('ta-a9', 'Portakal 300 g, mandalina 200 g. Toplam kaç g?', '500 g', '', { gorsel: ter(300, 200) });
  ekle('ta-a10', 'En ağır hangisi? 2 kg, 5 kg, 3 kg', '5 kg', '', { gorsel: olc('ta-agirlik-karsilastir') });
  ekle('ta-a11', 'Ayşe 28 kg, annesi 65 kg. Fark kaç kg?', '37 kg', '', { gorsel: olc('ta-anne-cocuk') });
  ekle('ta-a12', 'Bir sandık 20 kg. İki sandık kaç kg?', '40 kg', '', { gorsel: olc('ta-iki-sandik') });
  ekle('ta-a13', 'En hafif hangisi? 800 g, 1 kg, 600 g', '600 g', '', { gorsel: olc('ta-hafif-karsilastir') });
  ekle('ta-a14', 'Terazi dengede. Sol kefede 2 kg + 500 g var. Sağ kefede kaç g var?', '2500 g', '', { gorsel: ter(2500, 2500, 'dengede', 'g', 'g') });
  ekle('ta-a15', 'Karpuz 3 kg, elma 1 kg, üzüm 500 g. Toplam kaç g?', '4500 g', '', { gorsel: olc('ta-uc-meyve') });
  ekle('ta-a16', 'Fatma 32 kg. Çantası 4 kg. İkisi birlikte kaç kg?', '36 kg', '', { gorsel: olc('ta-fatma-canta') });
  ekle('ta-a17', "2000 g kaç kg'dır?", '2 kg', '', { gorsel: olc('ta-2000g-2kg') });
  ekle('ta-a18', 'Sol kefe sağ kefeden 3 kg ağır. Sol kefe 8 kg ise sağ kefe kaç kg?', '5 kg', '', { gorsel: ter(8, 5, 'sola', 'kg', 'kg') });
  ekle('ta-a19', 'Bir kutu 750 g. İki kutu kaç g?', '1500 g', '', { gorsel: ter(750, 750) });
  ekle('ta-a20', 'Berk 38 kg, Can 38 kg. Terazi dengede mi?', 'Evet', '', { gorsel: ter(38, 38, 'dengede', 'kg', 'kg') });
  ekle('ta-a21', '3 kg kaç gramdır?', '3000 g', '', { gorsel: olc('ta-3kg-agirlik-tasi') });
  ekle('ta-a22', "Selin'in çantası 3 kg. Kitapları 2 kg. Toplam kaç kg?", '5 kg', '', { gorsel: olc('ta-canta-kitap') });
  ekle('ta-a23', 'En hafif: 1 kg 200 g, 900 g, 1 kg 100 g', '900 g', '', { gorsel: olc('ta-hafif-karsilastir') });
  ekle('ta-a24', 'Yusuf 40 kg. Kardeşi 15 kg. Yusuf kardeşinden kaç kg ağır?', '25 kg', '', { gorsel: olc('ta-cocuk-terazi') });
  ekle('ta-a25', 'Bir sepet meyve 4 kg 500 g. Kaç gramdır?', '4500 g', '', { gorsel: olc('ta-meyve-sepeti') });

  return sorular;
}

function tartmaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TARTMA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('ta-t1', 'Elma 300 g, armut 500 g. Hangisi daha ağır?', 'Armut', ['Elma', 'Armut', 'Eşit', 'Belli değil'], '', { gorsel: ter(300, 500) });
  ekle('ta-t2', 'Terazi dengede. Sol kefede 4 kg var. Sağ kefede kaç kg var?', '4', ['3', '5', '4', '6'], '', { gorsel: ter(4, 4, 'dengede', 'kg', 'kg') });
  ekle('ta-t3', 'Hangi ölçüm aracı ağırlık ölçmek için kullanılır?', 'Terazi', ['Cetvel', 'Terazi', 'Saat', 'Bardak'], '', { gorsel: araclar('olcum-aletleri') });
  ekle('ta-t4', '1 kg kaç gramdır?', '1000', ['100', '10', '1000', '500'], '', { gorsel: olc('ta-kg-gram-gosterim') });
  ekle('ta-t5', 'Karpuz 6 kg, kavun 3 kg. Fark kaç kg?', '3', ['2', '4', '3', '5'], '', { gorsel: ter(6, 3, 'sola', 'kg', 'kg') });
  ekle('ta-t6', 'Sol kefe 7 kg, sağ kefe 4 kg. Terazi hangi tarafa eğik?', 'Sola', ['Sağa', 'Sola', 'Dengede', 'Belli değil'], '', { gorsel: ter(7, 4, 'sola', 'kg', 'kg') });
  ekle('ta-t7', 'Mehmet 36 kg, Ali 29 kg. Toplam kaç kg?', '65', ['64', '66', '65', '63'], '', { gorsel: olc('ta-cocuk-terazi') });
  ekle(
    'ta-t8',
    '🎭 2500 g kaç kg ve kaç gramdır?',
    '2 kg 500 g',
    ['1 kg 500 g', '3 kg', '2 kg 500 g', '2 kg'],
    '2500 = 2000 + 500',
    { gorsel: olc('ta-2500g-bolunmus'), sasirtma: true },
  );
  ekle('ta-t9', 'En ağır hangisi? 3 kg, 2500 g, 3500 g', '3500 g', ['3 kg', '2500 g', '3500 g', 'Hepsi eşit'], '', { gorsel: olc('ta-agirlik-karsilastir') });
  ekle('ta-t10', 'Bir paket 250 g. 4 paket kaç g?', '1000', ['800', '1200', '1000', '750'], '', { gorsel: olc('ta-dort-paket') });
  ekle('ta-t11', 'Ayşe 31 kg, annesi 58 kg. Fark kaç kg?', '27', ['25', '29', '27', '23'], '', { gorsel: olc('ta-anne-cocuk') });
  ekle(
    'ta-t12',
    '🎭 Terazide sol kefe sağ kefeden 2 kg ağır. Dengelemek için sağ kefeye kaç kg eklenmeli?',
    '2',
    ['1', '3', '2', '4'],
    'Eksik ağırlığı ekle!',
    { gorsel: ter(7, 5, 'sola', 'kg', 'kg'), sasirtma: true },
  );
  ekle('ta-t13', 'En hafif hangisi? 1 kg, 999 g, 1001 g', '999 g', ['1 kg', '999 g', '1001 g', 'Hepsi eşit'], '', { gorsel: olc('ta-hafif-karsilastir') });
  ekle('ta-t14', "Fatma'nın çantası 2 kg 500 g. Kaç gramdır?", '2500', ['200', '2050', '2500', '250'], '', { gorsel: olc('ta-canta-terazi') });
  ekle(
    'ta-t15',
    '🎭 Hangi nesne gram ile ölçülür?',
    'Çikolata',
    ['Araba', 'Fil', 'Çikolata', 'Kamyon'],
    'Hafif nesneler gram ile ölçülür!',
    { gorsel: olc('ta-hafif-agir-nesne'), sasirtma: true },
  );
  ekle('ta-t16', 'Bir sandık 15 kg. 3 sandık kaç kg?', '45', ['40', '50', '45', '35'], '', { gorsel: olc('ta-uc-sandik') });
  ekle('ta-t17', "Berk 40 kg, Can Berk'ten 5 kg hafif. Can kaç kg?", '35', ['45', '30', '35', '40'], '', { gorsel: olc('ta-cocuk-terazi') });
  ekle(
    'ta-t18',
    '🎭 Terazinin sol kefesinde 3 kg elma var. Sağ kefede 2 kg armut var. Dengelemek için sağ kefeye kaç kg daha eklenmeli?',
    '1',
    ['2', '3', '1', '4'],
    '3 - 2 = ?',
    { gorsel: ter(3, 2, 'sola', 'kg', 'kg'), sasirtma: true },
  );
  ekle('ta-t19', '4000 g kaç kg?', '4', ['3', '5', '4', '400'], '', { gorsel: olc('ta-4000g-4kg') });
  ekle('ta-t20', "Selin'in çantası 1 kg 800 g. Zeynep'in çantası 2 kg. Hangisi daha ağır?", 'Zeynep', ['Selin', 'Zeynep', 'Eşit', 'Belli değil'], '', { gorsel: ter(1800, 2000, 'saga', 'g', 'g') });
  ekle(
    'ta-t21',
    '🎭 Bir karpuz 8 kg. Yarısı kaç kg?',
    '4',
    ['3', '5', '4', '6'],
    '8 ÷ 2 = ?',
    { gorsel: olc('ta-karpuz-yarim'), sasirtma: true },
  );
  ekle('ta-t22', 'Yusuf 42 kg, Hande 38 kg. Toplam kaç kg?', '80', ['79', '81', '80', '78'], '', { gorsel: olc('ta-cocuk-terazi') });
  ekle('ta-t23', 'Hangi nesne kilogram ile ölçülür?', 'Karpuz', ['Tüy', 'Karpuz', 'İğne', 'Kâğıt'], '', { gorsel: olc('ta-hafif-agir-nesne') });
  ekle(
    'ta-t24',
    '🎭 Terazi dengede. Sol kefede 2 kg + 300 g var. Sağ kefede kaç g var?',
    '2300',
    ['2003', '230', '2300', '2030'],
    '2 kg = 2000 g, 2000 + 300 = ?',
    { gorsel: ter(2300, 2300, 'dengede', 'g', 'g'), sasirtma: true },
  );
  ekle(
    'ta-t25',
    '🎭 Ali 3 paket aldı. Her paket 800 g. Toplam kaç g aldı?',
    '2400',
    ['2200', '2600', '2400', '2000'],
    '3 × 800 = ?',
    { gorsel: olc('ta-uc-paket'), sasirtma: true },
  );

  return sorular;
}

function siviMiktariAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SIVI,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('sm-a1', 'Bir şişe 1 L su var, diğer şişe 2 L su var. Hangisinde daha çok su var?', '2 L', '', { gorsel: sivKars('1 L', '2 L') });
  ekle('sm-a2', "1 L kaç mL'dir?", '1000 mL', '', { gorsel: olc('sm-1l-1000ml') });
  ekle('sm-a3', 'Kova 10 L, bardak 200 mL. Hangisi daha az sıvı alır?', 'Bardak', '', { gorsel: sivKars('10 L', '200 mL') });
  ekle('sm-a4', '3 L su var, 1 L içildi. Kaç L kaldı?', '2 L', '', { gorsel: olc('sm-sise-icme') });
  ekle('sm-a5', '500 mL + 500 mL = ?', '1000 mL = 1 L', '', { gorsel: sivKars('500 mL', '500 mL') });
  ekle('sm-a6', 'En çok sıvı hangisinde? 2 L, 5 L, 3 L', '5 L', '', { gorsel: sivKars('2 L', '5 L', '3 L') });
  ekle('sm-a7', '2 L süt var. Yarısı içildi. Kaç L kaldı?', '1 L', '', { gorsel: siv(1, 'L', 'sise', 0.5) });
  ekle('sm-a8', 'Bir kap 4 L alıyor. 3 kap kaç L alır?', '12 L', '', { gorsel: olc('sm-uc-kap') });
  ekle('sm-a9', '200 mL + 300 mL = ?', '500 mL', '', { gorsel: sivKars('200 mL', '300 mL') });
  ekle('sm-a10', 'En az sıvı hangisinde? 1 L, 750 mL, 1500 mL', '750 mL', '', { gorsel: sivKars('1 L', '750 mL', '1500 mL') });
  ekle('sm-a11', 'Sürahide 3 L su var. 2 bardağa 500 mL dolduruldu. Kaç mL kaldı?', '2000 mL = 2 L', '', { gorsel: olc('sm-surahi-bardak') });
  ekle('sm-a12', "2000 mL kaç L'dir?", '2 L', '', { gorsel: olc('sm-2000ml-2l') });
  ekle('sm-a13', 'Ayşe 250 mL, Fatma 750 mL su içti. Toplam kaç mL?', '1000 mL = 1 L', '', { gorsel: sivKars('250 mL', '750 mL') });
  ekle('sm-a14', 'Bir şişe 1,5 L alıyor. İki şişe kaç L alır?', '3 L', '', { gorsel: sivKars('1.5 L', '1.5 L') });
  ekle('sm-a15', 'Kova 8 L. 3 L boşaltıldı. Kaç L kaldı?', '5 L', '', { gorsel: olc('sm-kova-bosalt') });
  ekle('sm-a16', "3 L kaç mL'dir?", '3000 mL', '', { gorsel: siv(3, 'L') });
  ekle('sm-a17', 'Bardak 200 mL alıyor. 5 bardak kaç mL?', '1000 mL = 1 L', '', { gorsel: olc('sm-bes-bardak') });
  ekle('sm-a18', 'Büyükten küçüğe sırala: 2 L, 500 mL, 1500 mL', '2 L, 1500 mL, 500 mL', '', { gorsel: sivKars('2 L', '500 mL', '1500 mL') });
  ekle('sm-a19', 'Şişede 4 L su var. Her gün 1 L içilirse kaç günde biter?', '4 gün', '', { gorsel: olc('sm-sise-gunluk') });
  ekle('sm-a20', '1500 mL kaç L ve kaç mL?', '1 L 500 mL', '', { gorsel: olc('sm-1500ml-bolunmus') });
  ekle('sm-a21', 'Kova 6 L alıyor. Yarısı doluysa kaç L var?', '3 L', '', { gorsel: siv(3, 'L', 'kova', 0.5) });
  ekle('sm-a22', 'Berk 300 mL, Can 400 mL, Selin 300 mL su içti. Toplam kaç mL?', '1000 mL', '', { gorsel: sivKars('300 mL', '400 mL', '300 mL') });
  ekle('sm-a23', '4 L - 2500 mL = ?', '1500 mL', '', { gorsel: olc('sm-olcu-cikarma') });
  ekle('sm-a24', 'Bir tarif 750 mL süt gerektiriyor. İki tarif için kaç mL süt gerekir?', '1500 mL', '', { gorsel: olc('sm-tarif-sut') });
  ekle('sm-a25', 'Şişede 2 L 500 mL var. Kaç mL\'dir?', '2500 mL', '', { gorsel: siv(2.5, 'L') });

  return sorular;
}

function siviMiktariTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SIVI,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('sm-t1', 'Hangi kapta daha çok su var? Şişe: 2 L, Bardak: 200 mL', 'Şişe', ['Bardak', 'Şişe', 'Eşit', 'Belli değil'], '', { gorsel: sivKars('2 L', '200 mL') });
  ekle('sm-t2', "1 L kaç mL'dir?", '1000', ['100', '10', '1000', '500'], '', { gorsel: olc('sm-1l-1000ml') });
  ekle('sm-t3', 'Hangi ölçüm birimi sıvı için kullanılır?', 'Litre', ['cm', 'kg', 'Litre', 'metre'], '', { gorsel: araclar('olcum-birimleri') });
  ekle('sm-t4', '3 L su var, 1500 mL içildi. Kaç mL kaldı?', '1500', ['1000', '2000', '1500', '2500'], '', { gorsel: olc('sm-sise-icme') });
  ekle('sm-t5', 'En az sıvı hangisinde? 3 L, 2500 mL, 3500 mL', '2500 mL', ['3 L', '2500 mL', '3500 mL', 'Hepsi eşit'], '', { gorsel: sivKars('3 L', '2500 mL', '3500 mL') });
  ekle('sm-t6', 'Bardak 250 mL alıyor. 4 bardak kaç mL?', '1000', ['900', '1100', '1000', '800'], '', { gorsel: olc('sm-dort-bardak') });
  ekle('sm-t7', 'Sürahi 2 L su var. Yarısı içildi. Kaç mL kaldı?', '1000', ['500', '2000', '1000', '1500'], '', { gorsel: siv(1, 'L', 'surahi', 0.5) });
  ekle(
    'sm-t8',
    "🎭 2500 mL kaç L ve mL'dir?",
    '2 L 500 mL',
    ['1 L 500 mL', '3 L', '2 L 500 mL', '2 L'],
    '2500 = 2000 + 500',
    { gorsel: olc('sm-2500ml-bolunmus'), sasirtma: true },
  );
  ekle('sm-t9', 'Mehmet 500 mL, Ali 750 mL su içti. Toplam kaç mL?', '1250', ['1100', '1500', '1250', '1000'], '', { gorsel: sivKars('500 mL', '750 mL') });
  ekle('sm-t10', 'Hangi kap en çok sıvı alır?', 'Kova', ['Bardak', 'Kaşık', 'Kova', 'Şişe'], '', { gorsel: olc('sm-kap-buyukluk') });
  ekle('sm-t11', '4 L - 1500 mL = ?', '2500 mL', ['3000 mL', '2000 mL', '2500 mL', '3500 mL'], '', { gorsel: olc('sm-olcu-cikarma') });
  ekle(
    'sm-t12',
    '🎭 Bir şişe 1 L 200 mL alıyor. 3 şişe kaç mL alır?',
    '3600',
    ['3000', '4000', '3600', '3200'],
    '1200 × 3 = ?',
    { gorsel: olc('sm-uc-sise'), sasirtma: true },
  );
  ekle('sm-t13', 'Ayşe sabah 200 mL, öğlen 300 mL, akşam 500 mL su içti. Toplam kaç mL?', '1000', ['900', '1100', '1000', '800'], '', { gorsel: olc('sm-gunluk-bardak') });
  ekle('sm-t14', '5000 mL kaç L?', '5', ['4', '6', '5', '50'], '', { gorsel: olc('sm-5000ml-5l') });
  ekle(
    'sm-t15',
    '🎭 Hangi nesne için litre kullanılır?',
    'Havuz suyu',
    ['Parfüm', 'Gözyaşı', 'Havuz suyu', 'İlaç'],
    'Büyük miktarlar için litre!',
    { gorsel: olc('sm-nesne-karsilastir'), sasirtma: true },
  );
  ekle('sm-t16', 'Kova 10 L alıyor. 4 L dolduruldu. Kaç L daha gerekir?', '6', ['5', '7', '6', '8'], '', { gorsel: olc('sm-kova-dolum') });
  ekle('sm-t17', 'Fatma 1 L 500 mL, Zeynep 500 mL su içti. Fatma Zeynep\'ten kaç mL fazla içti?', '1000', ['500', '1500', '1000', '2000'], '', { gorsel: sivKars('1500 mL', '500 mL') });
  ekle(
    'sm-t18',
    '🎭 Bir tarif 1 L 250 mL süt gerektiriyor. İki tarif için kaç mL süt gerekir?',
    '2500',
    ['2000', '3000', '2500', '1500'],
    '1250 × 2 = ?',
    { gorsel: olc('sm-tarif-sut'), sasirtma: true },
  );
  ekle('sm-t19', 'Küçükten büyüğe sırala: 1500 mL, 1 L, 2 L', '1 L, 1500 mL, 2 L', ['1 L, 1500 mL, 2 L', '2 L, 1500 mL, 1 L', '1500 mL, 1 L, 2 L', '1 L, 2 L, 1500 mL'], '', { gorsel: sivKars('1500 mL', '1 L', '2 L') });
  ekle(
    'sm-t20',
    '🎭 Şişede 3 L var. Her bardak 500 mL alıyor. Kaç bardak doldurulabilir?',
    '6',
    ['4', '8', '6', '5'],
    '3000 ÷ 500 = ?',
    { gorsel: olc('sm-sise-bardak-doldur'), sasirtma: true },
  );
  ekle('sm-t21', 'Berk 400 mL, Can 600 mL, Selin 1 L su içti. En çok kim içti?', 'Selin', ['Berk', 'Can', 'Selin', 'Hepsi eşit'], '', { gorsel: sivKars('400 mL', '600 mL', '1 L') });
  ekle('sm-t22', '1 L 800 mL kaç mL?', '1800', ['108', '180', '1800', '18'], '', { gorsel: olc('sm-1l800ml') });
  ekle(
    'sm-t23',
    '🎭 Havuzu doldurmak için 50 L su gerekiyor. 20 L dolduruldu. Kaç L daha gerekir?',
    '30',
    ['25', '35', '30', '40'],
    '50 - 20 = ?',
    { gorsel: olc('sm-havuz-dolum'), sasirtma: true },
  );
  ekle('sm-t24', 'Yusuf her gün 2 L su içiyor. 3 günde kaç L içer?', '6', ['5', '7', '6', '8'], '', { gorsel: olc('sm-uc-gun-sise') });
  ekle(
    'sm-t25',
    '🎭 Bir şişede 2 L var. 750 mL içildi. Kaç mL kaldı?',
    '1250',
    ['1100', '1500', '1250', '1000'],
    '2000 - 750 = ?',
    { gorsel: olc('sm-sise-kalan'), sasirtma: true },
  );

  return sorular;
}

function zamanAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ZAMAN,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('zm-a1', "Uzun kol 12'de, kısa kol 2'de. Saat kaç?", 'Saat 2', '', { gorsel: saa(2, 0) });
  ekle('zm-a2', "Uzun kol 12'de, kısa kol 7'de. Saat kaç?", 'Saat 7', '', { gorsel: saa(7, 0) });
  ekle('zm-a3', "Uzun kol 6'da, kısa kol 3 ile 4 arasında. Saat kaç?", 'Saat 3 buçuk', '', { gorsel: saa(3, 30) });
  ekle('zm-a4', 'Dijital saat 05:00. Kaç tam saat?', 'Saat 5', '', { gorsel: saa(5, 0, true) });
  ekle('zm-a5', "Uzun kol 12'de, kısa kol 9'da. Saat kaç?", 'Saat 9', '', { gorsel: saa(9, 0) });
  ekle('zm-a6', "Uzun kol 6'da, kısa kol 6 ile 7 arasında. Saat kaç?", 'Saat 6 buçuk', '', { gorsel: saa(6, 30) });
  ekle('zm-a7', 'Dijital saat 10:30.', 'Saat 10 buçuk', '', { gorsel: saa(10, 30, true) });
  ekle('zm-a8', "Uzun kol 12'de, kısa kol 12'de. Saat kaç?", 'Saat 12', '', { gorsel: saa(12, 0) });
  ekle('zm-a9', "Okul 08:00'de başlıyor. Hangi saatte?", 'Saat 8', '', { gorsel: olc('zm-okul-saat') });
  ekle('zm-a10', "Uzun kol 6'da, kısa kol 9 ile 10 arasında. Saat kaç?", 'Saat 9 buçuk', '', { gorsel: saa(9, 30) });
  ekle('zm-a11', '1 saat kaç dakikadır?', '60 dakika', '', { gorsel: olc('zm-60-dakika') });
  ekle('zm-a12', 'Dijital saat 01:00. Kaç tam saat?', 'Saat 1', '', { gorsel: saa(1, 0, true) });
  ekle('zm-a13', "Sabah 7'de uyandı, 8'de okula gitti. Kaç saat geçti?", '1 saat', '', { gorsel: saaCift(7, 0, 8, 0) });
  ekle('zm-a14', "Uzun kol 6'da, kısa kol 12 ile 1 arasında. Saat kaç?", 'Saat 12 buçuk', '', { gorsel: saa(12, 30) });
  ekle('zm-a15', "Film saat 3'te başladı, 5'te bitti. Kaç saat sürdü?", '2 saat', '', { gorsel: saaCift(3, 0, 5, 0) });
  ekle('zm-a16', 'Dijital saat 08:30. Analog saatte uzun kol nerede?', "6'da", '', { gorsel: saa(8, 30, true) });
  ekle('zm-a17', "Saat 4'te uyku, saat 8'de uyanış. Kaç saat uyudu?", '4 saat', '', { gorsel: olc('zm-uyku-cocuk') });
  ekle('zm-a18', "Uzun kol 12'de, kısa kol 11'de. Saat kaç?", 'Saat 11', '', { gorsel: saa(11, 0) });
  ekle('zm-a19', '1 günde kaç saat var?', '24 saat', '', { gorsel: olc('zm-gun-dongusu') });
  ekle('zm-a20', "Uzun kol 6'da, kısa kol 2 ile 3 arasında. Saat kaç?", 'Saat 2 buçuk', '', { gorsel: saa(2, 30) });
  ekle('zm-a21', "Ders saat 9'da başladı, 10'da bitti. Ders kaç dakika sürdü?", '60 dakika', '', { gorsel: saaCift(9, 0, 10, 0) });
  ekle('zm-a22', 'Dijital saat 07:00. Saat kaç?', 'Saat 7', '', { gorsel: saa(7, 0, true) });
  ekle('zm-a23', "Saat 6 buçukta kahvaltı, saat 8'de okul. Aralarında kaç saat?", '1,5 saat', '', { gorsel: saaCift(6, 30, 8, 0) });
  ekle('zm-a24', "Uzun kol 12'de, kısa kol 4'te. Saat kaç?", 'Saat 4', '', { gorsel: saa(4, 0) });
  ekle('zm-a25', "Berk saat 3'te parka gitti, saat 5 buçukta döndü. Kaç saat parkta kaldı?", '2,5 saat', '', { gorsel: saaCift(3, 0, 5, 30) });

  return sorular;
}

function zamanTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ZAMAN,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('zm-t1', "Uzun kol 12'de, kısa kol 6'da. Saat kaç?", 'Saat 6', ['Saat 12', 'Saat 6', 'Saat 3', 'Saat 9'], '', { gorsel: saa(6, 0) });
  ekle('zm-t2', 'Saatin kısa kolu neyi gösterir?', 'Saati', ['Dakika', 'Saniye', 'Saati', 'Günü'], '', { gorsel: olc('zm-kisa-kol-vurgu') });
  ekle('zm-t3', 'Dijital saat 09:30. Hangi analog saatle eşleşir?', "Uzun kol 6, kısa kol 9-10 arası", ['Uzun kol 12, kısa kol 9', 'Uzun kol 6, kısa kol 9-10 arası', 'Uzun kol 3, kısa kol 9', 'Uzun kol 9, kısa kol 6'], '', { gorsel: saa(9, 30) });
  ekle('zm-t4', '1 saat kaç dakikadır?', '60', ['30', '100', '60', '24'], '', { gorsel: olc('zm-60-dakika') });
  ekle('zm-t5', "Uzun kol 6'da, kısa kol 5 ile 6 arasında. Saat kaç?", 'Saat 5 buçuk', ['Saat 5', 'Saat 5 buçuk', 'Saat 6', 'Saat 6 buçuk'], '', { gorsel: saa(5, 30) });
  ekle('zm-t6', "Okul saat 8'de başladı, saat 12'de bitti. Kaç saat sürdü?", '4', ['3', '5', '4', '6'], '', { gorsel: saaCift(8, 0, 12, 0) });
  ekle('zm-t7', 'Hangi dijital saat "saat 7 buçuk"u gösterir?', '07:30', ['07:00', '17:30', '07:30', '07:15'], '', { gorsel: olc('zm-dijital-secenekler') });
  ekle(
    'zm-t8',
    "🎭 Ayşe saat 3'te uyudu, 3 saat uyudu. Hangi saatte uyandı?",
    'Saat 6',
    ['Saat 5', 'Saat 7', 'Saat 6', 'Saat 4'],
    '3 + 3 = ?',
    { gorsel: saaCift(3, 0, 6, 0), sasirtma: true },
  );
  ekle('zm-t9', "Uzun kol 12'de, kısa kol 10'da. Saat kaç?", 'Saat 10', ['Saat 12', 'Saat 2', 'Saat 10', 'Saat 1'], '', { gorsel: saa(10, 0) });
  ekle('zm-t10', '1 günde kaç saat vardır?', '24', ['12', '60', '24', '30'], '', { gorsel: olc('zm-gun-dongusu') });
  ekle('zm-t11', 'Film saat 4 buçukta başladı, 2 saat sürdü. Hangi saatte bitti?', 'Saat 6 buçuk', ['Saat 6', 'Saat 7', 'Saat 6 buçuk', 'Saat 5 buçuk'], '', { gorsel: saaCift(4, 30, 6, 30) });
  ekle(
    'zm-t12',
    '🎭 Saat kaçta olduğunu söyle: Uzun kol tam 6\'da, kısa kol tam 8 ile 9\'un ortasında.',
    'Saat 8 buçuk',
    ['Saat 8', 'Saat 9', 'Saat 8 buçuk', 'Saat 9 buçuk'],
    'Buçukta uzun kol 6\'dadır!',
    { gorsel: saa(8, 30), sasirtma: true },
  );
  ekle('zm-t13', "Mehmet saat 7'de uyandı. 1,5 saat sonra okula gitti. Hangi saatte okula gitti?", 'Saat 8 buçuk', ['Saat 8', 'Saat 9', 'Saat 8 buçuk', 'Saat 7 buçuk'], '', { gorsel: saaCift(7, 0, 8, 30) });
  ekle('zm-t14', 'Hangi saat "tam saat" gösterir?', "Uzun kol 12'de", ["Uzun kol 6'da", "Uzun kol 3'te", "Uzun kol 12'de", "Uzun kol 9'da"], '', { gorsel: olc('zm-tam-saat-secenekler') });
  ekle(
    'zm-t15',
    "🎭 Selin saat 9'da derse girdi, 60 dakika ders işledi. Ders hangi saatte bitti?",
    'Saat 10',
    ['Saat 9 buçuk', 'Saat 11', 'Saat 10', 'Saat 9'],
    '60 dakika = 1 saat',
    { gorsel: saaCift(9, 0, 10, 0), sasirtma: true },
  );
  ekle('zm-t16', 'Dijital saat 11:00. Analog saatte kısa kol nerede?', "11'de", ["12'de", "1'de", "11'de", "10'da"], '', { gorsel: saa(11, 0, true) });
  ekle('zm-t17', 'Sabah kahvaltısı saat 7 buçukta, akşam yemeği saat 7\'de. Aralarında kaç saat var?', '11 buçuk', ['10', '12', '11 buçuk', '12 buçuk'], '', { gorsel: saaCift(7, 30, 19, 0) });
  ekle(
    'zm-t18',
    "🎭 Can saat 2'de parka gitti. 2,5 saat oynadı. Hangi saatte eve döndü?",
    'Saat 4 buçuk',
    ['Saat 4', 'Saat 5', 'Saat 4 buçuk', 'Saat 3 buçuk'],
    '2 + 2,5 = 4,5 = saat 4 buçuk',
    { gorsel: saaCift(2, 0, 4, 30), sasirtma: true },
  );
  ekle('zm-t19', "Uzun kol 6'da, kısa kol 1 ile 2 arasında. Saat kaç?", 'Saat 1 buçuk', ['Saat 1', 'Saat 2', 'Saat 1 buçuk', 'Saat 2 buçuk'], '', { gorsel: saa(1, 30) });
  ekle('zm-t20', 'Hangi dijital saat "saat 11 buçuk"u gösterir?', '11:30', ['11:00', '01:30', '11:30', '11:15'], '', { gorsel: olc('zm-dijital-secenekler') });
  ekle(
    'zm-t21',
    "🎭 Hande sabah 7'de uyandı. 8 saat sonra ne zaman olur?",
    'Saat 15',
    ['Saat 14', 'Saat 16', 'Saat 15', 'Saat 13'],
    '7 + 8 = ?',
    { gorsel: saaCift(7, 0, 15, 0), sasirtma: true },
  );
  ekle('zm-t22', "Ders saat 10'da başladı. 1 saat 30 dakika sonra bitti. Hangi saatte?", 'Saat 11 buçuk', ['Saat 11', 'Saat 12', 'Saat 11 buçuk', 'Saat 10 buçuk'], '', { gorsel: saaCift(10, 0, 11, 30) });
  ekle('zm-t23', "Uzun kol 12'de, kısa kol 8'de. Saat kaç?", 'Saat 8', ['Saat 12', 'Saat 4', 'Saat 8', 'Saat 6'], '', { gorsel: saa(8, 0) });
  ekle(
    'zm-t24',
    '🎭 Yusuf her gün 8 saat uyuyor. Haftada kaç saat uyur?',
    '56',
    ['48', '64', '56', '40'],
    '8 × 7 = ?',
    { gorsel: olc('zm-haftalik-uyku'), sasirtma: true },
  );
  ekle(
    'zm-t25',
    '🎭 Saat 3 buçukta başlayan film 2 saat sürdü. Hangi saatte bitti?',
    'Saat 5 buçuk',
    ['Saat 5', 'Saat 6', 'Saat 5 buçuk', 'Saat 4 buçuk'],
    '3,5 + 2 = 5,5 = saat 5 buçuk',
    { gorsel: saaCift(3, 30, 5, 30), sasirtma: true },
  );

  return sorular;
}

export function uzunlukOlcme(karistir) {
  return {
    id: 'uzunluk-olcme',
    baslik: 'Uzunluk Ölçme',
    kazanimKodu: KAZANIM.UZUNLUK,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Nesnelerin uzunluğunu ölçebiliriz! Cetvel kullanırız. Uzunluk birimi santimetredir (cm).',
          gorsel: olc('uo-anlatim-1'),
        },
        {
          metin:
            "Cetvel kullanırken başı 0'a hizalarız! Kalem 0'dan başlayıp 8'de bitiyorsa — kalem 8 cm'dir.",
          gorsel: olc('uo-anlatim-2'),
        },
        {
          metin:
            'Nesneleri uzunluklarına göre karşılaştırabiliriz: uzun-kısa, daha uzun-daha kısa, en uzun-en kısa.',
          gorsel: olc('uo-anlatim-3'),
        },
      ],
    },
    alistirma: uzunlukOlcmeAlistirma(),
    test: uzunlukOlcmeTest(karistir),
  };
}

export function tartma(karistir) {
  return {
    id: 'tartma',
    baslik: 'Tartma',
    kazanimKodu: KAZANIM.TARTMA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Nesnelerin ağırlığını ölçebiliriz! Terazi kullanırız. Ağırlık birimi kilogram (kg) ve gramdır (g).',
          gorsel: olc('ta-anlatim-1'),
        },
        {
          metin:
            'Terazi dengede ise iki taraf eşit ağırlıktadır. Sol taraf aşağı inerse sol taraf daha ağırdır!',
          gorsel: olc('ta-anlatim-2'),
        },
        {
          metin:
            '1 kg = 1000 g. Hafif nesneler gram ile, ağır nesneler kilogram ile ölçülür.',
          gorsel: olc('ta-anlatim-3'),
        },
      ],
    },
    alistirma: tartmaAlistirma(),
    test: tartmaTest(karistir),
  };
}

export function siviMiktari(karistir) {
  return {
    id: 'sivi-miktari',
    baslik: 'Sıvı Ölçme',
    kazanimKodu: KAZANIM.SIVI,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Sıvıların miktarını ölçebiliriz! Litre (L) ve mililitre (mL) kullanırız. Su, süt, meyve suyu gibi sıvıları ölçeriz.',
          gorsel: olc('sm-anlatim-1'),
        },
        {
          metin:
            '1 litre = 1000 mililitre. Büyük kaplar için litre, küçük kaplar için mililitre kullanırız.',
          gorsel: olc('sm-anlatim-2'),
        },
        {
          metin:
            'Kapları karşılaştırabiliriz: dolu-boş, daha çok-daha az, tam dolu-yarım dolu.',
          gorsel: olc('sm-anlatim-3'),
        },
      ],
    },
    alistirma: siviMiktariAlistirma(),
    test: siviMiktariTest(karistir),
  };
}

export function zaman(karistir) {
  return {
    id: 'zaman',
    baslik: 'Zaman',
    kazanimKodu: KAZANIM.ZAMAN,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Zamanı saatle ölçeriz! Saatin kısa kolu saati, uzun kolu dakikayı gösterir. 1 saat = 60 dakika.',
          gorsel: olc('zm-anlatim-1'),
        },
        {
          metin:
            'Tam saat: uzun kol 12\'de, kısa kol saati gösterir. "Saat 3" → kısa kol 3\'te, uzun kol 12\'de.',
          gorsel: olc('zm-anlatim-2'),
        },
        {
          metin:
            'Buçuk: uzun kol 6\'da. "Saat 4 buçuk" → kısa kol 4 ile 5 arasında, uzun kol 6\'da.',
          gorsel: olc('zm-anlatim-3'),
        },
      ],
    },
    alistirma: zamanAlistirma(),
    test: zamanTest(karistir),
  };
}
