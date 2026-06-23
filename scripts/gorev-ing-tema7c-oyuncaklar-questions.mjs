/** GOREV-ING-TEMA7C — Toys (Oyuncaklar) */

const KAZANIM = 'ING.2.7.3';

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
}
function grup(nesneler, vurgu) {
  return { tur: 'ingilizce', mod: 'grup', nesneler, vurgu };
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu, cevapTipi: 'metin', ...extra });
}
function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu, cevapTipi: 'metin',
    alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'],
    ...extra,
  });
}
function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler, ipucu, ...extra });
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'oy-a1', 'Oyuncak kelimesinin İngilizcesi ......... kelimesidir.', 'toy', '', { gorsel: nesne('oyuncak-ayi') });
  boslukEkle(s, 'oy-a2', 'Oyuncak ayının İngilizcesi "Teddy ........." kelimesidir.', 'bear', '', { gorsel: nesne('oyuncak-ayi') });
  dyEkle(s, 'oy-a3', 'Top İngilizcede "Ball" demektir.', 'Doğru', '', { gorsel: nesne('futbol-topu') });
  boslukEkle(s, 'oy-a4', 'Bebek oyuncağının İngilizcesi ......... kelimesidir.', 'doll', '', { gorsel: nesne('oyuncak-bebek') });
  dyEkle(s, 'oy-a5', 'Araba oyuncağı İngilizcede "Toy car" olarak söylenir.', 'Doğru', '', { gorsel: nesne('oyuncak-araba') });
  boslukEkle(s, 'oy-a6', 'Uçurtma kelimesinin İngilizcesi ......... kelimesidir.', 'kite', '', { gorsel: nesne('ucurtma') });
  dyEkle(s, 'oy-a7', 'Lego bloklarıyla oynamak çok eğlencelidir.', 'Doğru', '', { gorsel: nesne('lego-bloklari') });
  boslukEkle(s, 'oy-a8', 'Oyuncaklar kelimesinin İngilizcesi "........." kelimesidir.', 'toys', '', { gorsel: nesne('oyuncak-kutusu') });
  dyEkle(s, 'oy-a9', '"Doll" kelimesi bebek oyuncağı demektir.', 'Doğru', '', { gorsel: nesne('oyuncak-bebek') });
  boslukEkle(s, 'oy-a10', 'Bisiklet oyuncağının İngilizcesi ......... kelimesidir.', 'bike', '', { gorsel: nesne('oyuncak-bisiklet') });
  dyEkle(s, 'oy-a11', '"Ball" kelimesi top anlamına gelir.', 'Doğru', '', { gorsel: nesne('renkli-toplar') });
  boslukEkle(s, 'oy-a12', 'Puzzle (yapboz) İngilizcede ......... olarak yazılır.', 'puzzle', '', { gorsel: nesne('yapboz') });
  dyEkle(s, 'oy-a13', 'Oyuncak ayıya "Teddy bear" denir.', 'Doğru', '', { gorsel: nesne('oyuncak-ayi') });
  boslukEkle(s, 'oy-a14', 'Rüzgarlı havada uçan oyuncağa "........." deriz.', 'kite', '', { gorsel: nesne('ucurtma-ucuran') });
  dyEkle(s, 'oy-a15', '"Toy car" oyuncak araba demektir.', 'Doğru', '', { gorsel: nesne('oyuncak-araba') });
  boslukEkle(s, 'oy-a16', 'Oyuncaklarımızı "Play with ........." (oyuncaklarla oynamak) deriz.', 'toys', '', { gorsel: nesne('oyuncak-oynayan') });
  dyEkle(s, 'oy-a17', '"Bike" kelimesi bisiklet demektir.', 'Doğru', '', { gorsel: nesne('oyuncak-bisiklet') });
  boslukEkle(s, 'oy-a18', 'Renkli bloklar İngilizcede "........." blocks olarak söylenir.', 'building', '', { gorsel: nesne('lego-bloklari'), alternatifCevaplar: ['Building'] });
  dyEkle(s, 'oy-a19', 'Bebekler genelde doll ile oynamayı sever.', 'Doğru', '', { gorsel: nesne('oyuncak-bebek') });
  boslukEkle(s, 'oy-a20', 'Parkta top oynamak için "........." gerekir.', 'ball', '', { gorsel: nesne('park-topu') });
  dyEkle(s, 'oy-a21', '"Kite" kelimesi uçurtma anlamına gelir.', 'Doğru', '', { gorsel: nesne('ucurtma') });
  boslukEkle(s, 'oy-a22', 'Oyuncak kutusunun İngilizcesi "Toy ........." kelimesidir.', 'box', '', { gorsel: nesne('oyuncak-kutusu') });
  dyEkle(s, 'oy-a23', 'Teddy bear bir oyuncak ayıdır.', 'Doğru', '', { gorsel: nesne('oyuncak-ayi') });
  boslukEkle(s, 'oy-a24', 'Yapboz İngilizcede "........." kelimesidir.', 'puzzle', '', { gorsel: nesne('yapboz') });
  dyEkle(s, 'oy-a25', 'Çocuklar en çok toys ile oynamayı sever.', 'Doğru', '', { gorsel: nesne('oyuncak-mutlu') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('oy-t1', 'Oyuncak kelimesinin İngilizcesi nedir?', 'Toy', ['Toy', 'Book', 'Food', 'Shirt'], '', { gorsel: nesne('oyuncak-ayi') });
  e('oy-t2', 'Oyuncak ayının İngilizcesi hangisidir?', 'Teddy bear', ['Teddy bear', 'Toy car', 'Ball', 'Kite'], '', { gorsel: nesne('oyuncak-ayi') });
  e('oy-t3', 'Topun İngilizcesi nedir?', 'Ball', ['Ball', 'Doll', 'Bike', 'Puzzle'], '', { gorsel: nesne('futbol-topu') });
  e('oy-t4', 'Bebek oyuncağının İngilizcesi hangisidir?', 'Doll', ['Doll', 'Ball', 'Kite', 'Bear'], '', { gorsel: nesne('oyuncak-bebek') });
  e('oy-t5', 'Oyuncak arabanın İngilizcesi nedir?', 'Toy car', ['Toy car', 'Toy bear', 'Toy ball', 'Toy kite'], '', { gorsel: nesne('oyuncak-araba') });
  e('oy-t6', 'Uçurtmanın İngilizcesi hangisidir?', 'Kite', ['Kite', 'Ball', 'Doll', 'Bike'], '', { gorsel: nesne('ucurtma') });
  e('oy-t7', 'Oyuncaklar kelimesinin İngilizcesi nedir?', 'Toys', ['Toys', 'Clothes', 'Food', 'Shapes'], '', { gorsel: nesne('oyuncak-kutusu') });
  e('oy-t8', 'Bisikletin İngilizcesi hangisidir?', 'Bike', ['Bike', 'Ball', 'Doll', 'Kite'], '', { gorsel: nesne('oyuncak-bisiklet') });
  e('oy-t9', 'Yapbozun İngilizcesi nedir?', 'Puzzle', ['Puzzle', 'Ball', 'Doll', 'Bear'], '', { gorsel: nesne('yapboz') });
  e('oy-t10', '"Ball" kelimesinin anlamı nedir?', 'Top', ['Top', 'Araba', 'Bebek', 'Uçurtma'], '', { gorsel: nesne('renkli-toplar') });
  e('oy-t11', 'Hangi oyuncakla parkta oynarız?', 'Ball', ['Doll', 'Ball', 'Puzzle', 'Kite'], '', { gorsel: nesne('park-topu') });
  e('oy-t12', '"Doll" kelimesi ne demektir?', 'Bebek oyuncağı', ['Oyuncak araba', 'Bebek oyuncağı', 'Top', 'Uçurtma'], '', { gorsel: nesne('oyuncak-bebek') });
  e('oy-t13', 'Rüzgarlı havada hangi oyuncağı uçururuz?', 'Kite', ['Ball', 'Doll', 'Kite', 'Bike'], '', { gorsel: nesne('ucurtma-ucuran') });
  e('oy-t14', '"Teddy bear" hangi oyuncaktır?', 'Oyuncak ayı', ['Oyuncak araba', 'Oyuncak ayı', 'Top', 'Yapboz'], '', { gorsel: nesne('oyuncak-ayi') });
  e('oy-t15', 'Lego blokları hangi tür oyuncaktır?', 'Building blocks', ['Ball', 'Doll', 'Building blocks', 'Kite'], '', { gorsel: nesne('lego-bloklari') });
  e('oy-t16', '"Toy car" ne anlama gelir?', 'Oyuncak araba', ['Oyuncak ayı', 'Oyuncak araba', 'Oyuncak top', 'Oyuncak bebek'], '', { gorsel: nesne('oyuncak-araba') });
  e('oy-t17', 'Oyuncak kutusunun İngilizcesi nedir?', 'Toy box', ['Toy box', 'Toy car', 'Toy ball', 'Toy shop'], '', { gorsel: nesne('oyuncak-kutusu') });
  e('oy-t18', '"Play with toys" ne demektir?', 'Oyuncaklarla oynamak', ['Oyuncak satmak', 'Oyuncaklarla oynamak', 'Oyuncak yemek', 'Oyuncak okumak'], '', { gorsel: nesne('oyuncak-oynayan') });
  e('oy-t19', 'Hangi eşleştirme doğrudur?', 'Ball = Top', ['Doll = Top', 'Ball = Top', 'Kite = Bebek', 'Bike = Ayı'], '', { gorsel: nesne('renkli-toplar') });
  e('oy-t20', '"Bike" kelimesinin anlamı nedir?', 'Bisiklet', ['Top', 'Bisiklet', 'Bebek', 'Uçurtma'], '', { gorsel: nesne('oyuncak-bisiklet') });
  e('oy-t21', 'Çocuk odasında en çok hangi kelimeyi görürüz?', 'Toys', ['Weather', 'Toys', 'Months', 'Shapes'], '', { gorsel: nesne('oyuncak-kutusu') });
  e('oy-t22', 'Hangi oyuncak iç mekanda yapılır?', 'Puzzle', ['Kite', 'Puzzle', 'Ball game', 'Bike ride'], '', { gorsel: nesne('yapboz') });
  e('oy-t23', '"Kite" ve "Ball" sırasıyla ne demektir?', 'Uçurtma ve Top', ['Araba ve Bebek', 'Uçurtma ve Top', 'Ayı ve Bisiklet', 'Yapboz ve Kutu'], '', { gorsel: grup(['ucurtma', 'futbol-topu'], ['ucurtma', 'futbol-topu']) });
  e('oy-t24', 'Arkadaşına oyuncak istemek için ne dersin?', 'Can I have a toy?', ['Good night!', 'Can I have a toy?', 'What time is it?', 'Goodbye!'], '', { gorsel: nesne('oyuncak-ayi') });
  e('oy-t25', '"Puzzle" kelimesinin anlamı nedir?', 'Yapboz', ['Top', 'Yapboz', 'Uçurtma', 'Araba'], '', { gorsel: nesne('yapboz') });
  return s;
}

export function oyuncaklar(karistir) {
  return {
    id: 'oyuncaklar',
    baslik: 'Toys',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz oyuncak kutusunu açtı. İçinde Teddy bear, Ball, Doll ve Toy car vardı! "I love my toys!" dedi neşeyle.', gorsel: anl('oy-anlatim-1') },
        { metin: 'Berk parka gitti. Kite uçurdu, Ball ile oynadı ve Bike sürdü. Toys onların en iyi arkadaşlarıydı.', gorsel: anl('oy-anlatim-2') },
        { metin: 'Yağmurlu günde evde Puzzle yaptılar. Toy box doluydu: ayı, bebek, araba, top! Oyuncaklar İngilizce öğrenmeyi çok eğlenceli yapıyordu.', gorsel: anl('oy-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
