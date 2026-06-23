/** GOREV-ING-TEMA10 — Fruits */

const KAZANIM = 'ING.2.10.2';

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
  boslukEkle(s, 'my-a1', 'Elma kelimesinin İngilizcesi ......... kelimesidir.', 'apple', '', { gorsel: nesne('kirmizi-elma') });
  dyEkle(s, 'my-a2', 'Muz İngilizcede "banana" demektir.', 'Doğru', '', { gorsel: nesne('sari-muz') });
  boslukEkle(s, 'my-a3', 'Portakal kelimesinin İngilizcesi ......... kelimesidir.', 'orange', '', { gorsel: nesne('portakal-resmi') });
  dyEkle(s, 'my-a4', 'Üzüm İngilizcede "grape" olarak söylenir.', 'Doğru', '', { gorsel: nesne('mor-uzum') });
  boslukEkle(s, 'my-a5', 'Karpuz kelimesinin İngilizcesi ......... kelimesidir.', 'watermelon', '', { gorsel: nesne('karpuz-dilim') });
  dyEkle(s, 'my-a6', 'Çilek İngilizcede "strawberry" demektir.', 'Doğru', '', { gorsel: nesne('cilek-sepet') });
  boslukEkle(s, 'my-a7', 'Kiraz kelimesinin İngilizcesi ......... kelimesidir.', 'cherry', '', { gorsel: nesne('kiraz-dallari') });
  dyEkle(s, 'my-a8', 'Şeftali İngilizcede "peach" olarak söylenir.', 'Doğru', '', { gorsel: nesne('seftali-meyve') });
  boslukEkle(s, 'my-a9', 'Armut kelimesinin İngilizcesi ......... kelimesidir.', 'pear', '', { gorsel: nesne('armut-yesil') });
  dyEkle(s, 'my-a10', 'Kavun İngilizcede "melon" demektir.', 'Doğru', '', { gorsel: nesne('kavun-dilim') });
  boslukEkle(s, 'my-a11', 'Limon kelimesinin İngilizcesi ......... kelimesidir.', 'lemon', '', { gorsel: nesne('sari-limon') });
  dyEkle(s, 'my-a12', 'Ananas İngilizcede "pineapple" olarak söylenir.', 'Doğru', '', { gorsel: nesne('ananas-meyve') });
  boslukEkle(s, 'my-a13', 'Mango kelimesinin İngilizcesi ......... kelimesidir.', 'mango', '', { gorsel: nesne('mango-meyve') });
  dyEkle(s, 'my-a14', 'Kivi İngilizcede "kiwi" demektir.', 'Doğru', '', { gorsel: nesne('kiwi-meyve') });
  boslukEkle(s, 'my-a15', 'Erik kelimesinin İngilizcesi ......... kelimesidir.', 'plum', '', { gorsel: nesne('erik-meyve') });
  dyEkle(s, 'my-a16', 'Meyveler konusunda "fruit" kelimesi tekil meyve anlamına gelir.', 'Doğru', '', { gorsel: nesne('meyve-sepeti') });
  boslukEkle(s, 'my-a17', 'Birçok meyve için "........." (meyveler) kelimesini kullanırız.', 'fruits', '', { gorsel: nesne('cesitli-meyveler') });
  dyEkle(s, 'my-a18', 'Portakal hem meyve adı hem de turuncu renk için kullanılabilir.', 'Doğru', '', { gorsel: nesne('turuncu-portakal') });
  boslukEkle(s, 'my-a19', 'Pazarda taze meyveler satılır. İngilizcede buna "fruit ........." denir.', 'stand', '', { gorsel: nesne('meyve-tezgahi') });
  dyEkle(s, 'my-a20', 'Çilek ve kiraz kırmızı renkli meyvelerdir.', 'Doğru', '', { gorsel: nesne('cilek-kiraz') });
  boslukEkle(s, 'my-a21', 'Mor üzüm salkımının İngilizcesi "grape ........." olarak söylenir.', 'bunch', '', { gorsel: nesne('mor-uzum-salkimi') });
  dyEkle(s, 'my-a22', '"Apple" kelimesi elma anlamına gelir.', 'Doğru', '', { gorsel: nesne('kirmizi-elma') });
  boslukEkle(s, 'my-a23', 'Maymunların sevdiği sarı meyve ......... kelimesidir.', 'banana', '', { gorsel: nesne('sari-muz') });
  dyEkle(s, 'my-a24', 'Karpuz yazın serinletici bir meyvedir ve İngilizcede "watermelon" denir.', 'Doğru', '', { gorsel: nesne('karpuz-dilim') });
  boslukEkle(s, 'my-a25', 'Sağlıklı beslenmek için "I love ........." deriz.', 'fruits', '', { gorsel: nesne('cesitli-meyveler') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('my-t1', 'Elmanın İngilizce adı nedir?', 'Apple', ['Apple', 'Banana', 'Orange', 'Grape'], '', { gorsel: nesne('kirmizi-elma') });
  e('my-t2', 'Muzun İngilizce adı hangisidir?', 'Banana', ['Banana', 'Melon', 'Lemon', 'Pear'], '', { gorsel: nesne('sari-muz') });
  e('my-t3', 'Portakalın İngilizce adı nedir?', 'Orange', ['Orange', 'Apple', 'Cherry', 'Plum'], '', { gorsel: nesne('portakal-resmi') });
  e('my-t4', 'Üzümün İngilizce adı nedir?', 'Grape', ['Grape', 'Peach', 'Kiwi', 'Mango'], '', { gorsel: nesne('mor-uzum') });
  e('my-t5', 'Karpuzun İngilizce adı hangisidir?', 'Watermelon', ['Watermelon', 'Melon', 'Lemon', 'Pear'], '', { gorsel: nesne('karpuz-dilim') });
  e('my-t6', 'Çileğin İngilizce adı nedir?', 'Strawberry', ['Strawberry', 'Cherry', 'Plum', 'Peach'], '', { gorsel: nesne('cilek-sepet') });
  e('my-t7', 'Kirazın İngilizce adı nedir?', 'Cherry', ['Cherry', 'Grape', 'Pear', 'Kiwi'], '', { gorsel: nesne('kiraz-dallari') });
  e('my-t8', 'Şeftalinin İngilizce adı hangisidir?', 'Peach', ['Peach', 'Plum', 'Melon', 'Mango'], '', { gorsel: nesne('seftali-meyve') });
  e('my-t9', 'Armutun İngilizce adı nedir?', 'Pear', ['Pear', 'Apple', 'Orange', 'Banana'], '', { gorsel: nesne('armut-yesil') });
  e('my-t10', 'Kavunun İngilizce adı nedir?', 'Melon', ['Melon', 'Watermelon', 'Mango', 'Kiwi'], '', { gorsel: nesne('kavun-dilim') });
  e('my-t11', 'Limonun İngilizce adı nedir?', 'Lemon', ['Lemon', 'Orange', 'Plum', 'Cherry'], '', { gorsel: nesne('sari-limon') });
  e('my-t12', 'Ananasın İngilizce adı hangisidir?', 'Pineapple', ['Pineapple', 'Banana', 'Peach', 'Grape'], '', { gorsel: nesne('ananas-meyve') });
  e('my-t13', 'Mangonun İngilizce adı nedir?', 'Mango', ['Mango', 'Melon', 'Kiwi', 'Plum'], '', { gorsel: nesne('mango-meyve') });
  e('my-t14', 'Kivinin İngilizce adı nedir?', 'Kiwi', ['Kiwi', 'Cherry', 'Pear', 'Lemon'], '', { gorsel: nesne('kiwi-meyve') });
  e('my-t15', 'Eriğin İngilizce adı nedir?', 'Plum', ['Plum', 'Peach', 'Grape', 'Apple'], '', { gorsel: nesne('erik-meyve') });
  e('my-t16', 'Meyve kelimesinin İngilizcesi nedir?', 'Fruit', ['Vegetable', 'Fruit', 'Drink', 'Bread'], '', { gorsel: nesne('meyve-sepeti') });
  e('my-t17', '"Fruits" kelimesinin anlamı nedir?', 'Meyveler', ['Sebzeler', 'Meyveler', 'İçecekler', 'Yiyecekler'], '', { gorsel: nesne('cesitli-meyveler') });
  e('my-t18', 'Hangi eşleştirme doğrudur?', 'Banana = Muz', ['Banana = Elma', 'Banana = Muz', 'Orange = Üzüm', 'Cherry = Armut'], '', { gorsel: nesne('sari-muz') });
  e('my-t19', 'Pazarda satılan taze meyveler hangi kelimeyle anılır?', 'Fruits', ['Countries', 'Fruits', 'Directions', 'Numbers'], '', { gorsel: nesne('meyve-tezgahi') });
  e('my-t20', 'Hangi meyve turuncu renktedir?', 'Orange', ['Apple', 'Grape', 'Orange', 'Cherry'], '', { gorsel: nesne('turuncu-portakal') });
  e('my-t21', 'Çilek ve kiraz hangi renktedir?', 'Red', ['Blue', 'Green', 'Red', 'Yellow'], '', { gorsel: nesne('cilek-kiraz') });
  e('my-t22', 'Mor üzüm salkımı hangi meyvedir?', 'Grape', ['Grape', 'Plum', 'Pear', 'Melon'], '', { gorsel: nesne('mor-uzum-salkimi') });
  e('my-t23', 'Yazın serinletici büyük yeşil meyve hangisidir?', 'Watermelon', ['Watermelon', 'Strawberry', 'Cherry', 'Plum'], '', { gorsel: nesne('karpuz-dilim') });
  e('my-t24', '"I love fruits" ifadesi ne demektir?', 'Meyveleri severim', ['Meyveleri severim', 'Meyve yemem', 'Sebze severim', 'Su içerim'], '', { gorsel: nesne('cesitli-meyveler') });
  e('my-t25', 'Hangi meyve sarı renklidir?', 'Banana', ['Banana', 'Cherry', 'Grape', 'Plum'], '', { gorsel: nesne('sari-muz') });
  return s;
}

export function meyveler(karistir) {
  return {
    id: 'meyveler',
    baslik: 'Fruits',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz pazara gitti. Tezgahta kırmızı elmalar, sarı muzlar ve turuncu portakallar vardı. Apple, banana, orange! Meyveler renkli ve lezzetliydi.', gorsel: anl('my-anlatim-1') },
        { metin: 'Berk mor üzüm salkımını gösterdi. "Grape!" dedi. Karpuz watermelon, çilek strawberry, kiraz cherry! "Fruit" kelimesi meyve demektir.', gorsel: anl('my-anlatim-2') },
        { metin: 'Öğretmen ananas pineapple, mango, kivi kiwi ve erik plum kelimelerini öğretti. Elanaz "I love fruits!" dedi. Meyveler sağlıklı beslenmenin anahtarıydı.', gorsel: anl('my-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
