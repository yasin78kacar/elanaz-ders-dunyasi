/** GOREV-ING-TEMA10 — Ordinal Numbers */

const KAZANIM = 'ING.2.10.4';

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
  boslukEkle(s, 'ss-a1', 'Birinci kelimesinin İngilizcesi ......... kelimesidir.', 'first', '', { gorsel: nesne('birinci-madalya') });
  dyEkle(s, 'ss-a2', 'İkinci İngilizcede "second" demektir.', 'Doğru', '', { gorsel: nesne('ikinci-madalya') });
  boslukEkle(s, 'ss-a3', 'Üçüncü kelimesinin İngilizcesi ......... kelimesidir.', 'third', '', { gorsel: nesne('ucuncu-podyum') });
  dyEkle(s, 'ss-a4', 'Dördüncü İngilizcede "fourth" olarak söylenir.', 'Doğru', '', { gorsel: nesne('dorduncu-sira') });
  boslukEkle(s, 'ss-a5', 'Beşinci kelimesinin İngilizcesi ......... kelimesidir.', 'fifth', '', { gorsel: nesne('besinci-sira') });
  dyEkle(s, 'ss-a6', 'Altıncı İngilizcede "sixth" demektir.', 'Doğru', '', { gorsel: nesne('altinci-sira') });
  boslukEkle(s, 'ss-a7', 'Yedinci kelimesinin İngilizcesi ......... kelimesidir.', 'seventh', '', { gorsel: nesne('yedinci-sira') });
  dyEkle(s, 'ss-a8', 'Sekizinci İngilizcede "eighth" olarak söylenir.', 'Doğru', '', { gorsel: nesne('sekizinci-sira') });
  boslukEkle(s, 'ss-a9', 'Dokuzuncu kelimesinin İngilizcesi ......... kelimesidir.', 'ninth', '', { gorsel: nesne('dokuzuncu-sira') });
  dyEkle(s, 'ss-a10', 'Onuncu İngilizcede "tenth" demektir.', 'Doğru', '', { gorsel: nesne('onuncu-sira') });
  boslukEkle(s, 'ss-a11', 'Sıra sayıları İngilizcede "ordinal ........." olarak adlandırılır.', 'numbers', '', { gorsel: nesne('sira-sayilari-pano') });
  dyEkle(s, 'ss-a12', 'Yarışta birinci olan altın madalya kazanır.', 'Doğru', '', { gorsel: nesne('yaris-birinci') });
  boslukEkle(s, 'ss-a13', 'Podyumda üçüncü olan bronz madalya alır. Üçüncü ......... kelimesidir.', 'third', '', { gorsel: nesne('ucuncu-madalya') });
  dyEkle(s, 'ss-a14', 'İkinci öğrenci gümüş madalya kazanmıştır.', 'Doğru', '', { gorsel: nesne('ikinci-ogrenci') });
  boslukEkle(s, 'ss-a15', 'Sekizinci ve dokuzuncu sıradaki öğrenciler "eighth and ........." olarak söylenir.', 'ninth', '', { gorsel: nesne('sekiz-dokuz-sira') });
  dyEkle(s, 'ss-a16', 'Yedinci ve sekizinci sıra sayılarıdır.', 'Doğru', '', { gorsel: nesne('yedinci-sekizinci') });
  boslukEkle(s, 'ss-a17', 'Birinci sıra "........." place demektir.', 'first', '', { gorsel: nesne('birinci-madalya') });
  dyEkle(s, 'ss-a18', '"Second" kelimesi ikinci anlamına gelir.', 'Doğru', '', { gorsel: nesne('ikinci-madalya') });
  boslukEkle(s, 'ss-a19', 'Beşinci sıra ......... kelimesidir.', 'fifth', '', { gorsel: nesne('besinci-sira') });
  dyEkle(s, 'ss-a20', 'Onuncu sıra "tenth" olarak yazılır.', 'Doğru', '', { gorsel: nesne('onuncu-sira') });
  boslukEkle(s, 'ss-a21', 'Dördüncü sıra ......... kelimesidir.', 'fourth', '', { gorsel: nesne('dorduncu-sira') });
  dyEkle(s, 'ss-a22', 'Altıncı sıra "sixth" demektir.', 'Doğru', '', { gorsel: nesne('altinci-sira') });
  boslukEkle(s, 'ss-a23', 'Yarışta "I am ........." dersek birinci olduğumuzu söyleriz.', 'first', '', { gorsel: nesne('yaris-birinci') });
  dyEkle(s, 'ss-a24', 'Sıra sayıları sıralamada kullanılır: first, second, third...', 'Doğru', '', { gorsel: nesne('sira-sayilari-pano') });
  boslukEkle(s, 'ss-a25', 'Yedinci sıra ......... kelimesidir.', 'seventh', '', { gorsel: nesne('yedinci-sira') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ss-t1', 'Birincinin İngilizce adı nedir?', 'First', ['First', 'Second', 'Third', 'Fourth'], '', { gorsel: nesne('birinci-madalya') });
  e('ss-t2', 'İkincinin İngilizce adı hangisidir?', 'Second', ['Second', 'First', 'Third', 'Fifth'], '', { gorsel: nesne('ikinci-madalya') });
  e('ss-t3', 'Üçüncünün İngilizce adı nedir?', 'Third', ['Third', 'Second', 'Fourth', 'Sixth'], '', { gorsel: nesne('ucuncu-podyum') });
  e('ss-t4', 'Dördüncünün İngilizce adı nedir?', 'Fourth', ['Fourth', 'Fifth', 'Third', 'Second'], '', { gorsel: nesne('dorduncu-sira') });
  e('ss-t5', 'Beşincinin İngilizce adı hangisidir?', 'Fifth', ['Fifth', 'Fourth', 'Sixth', 'First'], '', { gorsel: nesne('besinci-sira') });
  e('ss-t6', 'Altıncının İngilizce adı nedir?', 'Sixth', ['Sixth', 'Seventh', 'Fifth', 'Eighth'], '', { gorsel: nesne('altinci-sira') });
  e('ss-t7', 'Yedincinin İngilizce adı nedir?', 'Seventh', ['Seventh', 'Sixth', 'Eighth', 'Ninth'], '', { gorsel: nesne('yedinci-sira') });
  e('ss-t8', 'Sekizincinin İngilizce adı hangisidir?', 'Eighth', ['Eighth', 'Seventh', 'Ninth', 'Tenth'], '', { gorsel: nesne('sekizinci-sira') });
  e('ss-t9', 'Dokuzuncunun İngilizce adı nedir?', 'Ninth', ['Ninth', 'Eighth', 'Tenth', 'Seventh'], '', { gorsel: nesne('dokuzuncu-sira') });
  e('ss-t10', 'Onuncunun İngilizce adı nedir?', 'Tenth', ['Tenth', 'Ninth', 'Eighth', 'First'], '', { gorsel: nesne('onuncu-sira') });
  e('ss-t11', 'Sıra sayılarının İngilizce adı nedir?', 'Ordinal numbers', ['Cardinal numbers', 'Ordinal numbers', 'Directions', 'Countries'], '', { gorsel: nesne('sira-sayilari-pano') });
  e('ss-t12', 'Yarışta birinci olan ne kazanır?', 'Gold medal', ['Silver medal', 'Gold medal', 'Bronze medal', 'No medal'], '', { gorsel: nesne('yaris-birinci') });
  e('ss-t13', 'Üçüncü sıra hangi madalyayı alır?', 'Bronze medal', ['Gold medal', 'Silver medal', 'Bronze medal', 'No medal'], '', { gorsel: nesne('ucuncu-madalya') });
  e('ss-t14', 'İkinci sıra hangi madalyayı alır?', 'Silver medal', ['Gold medal', 'Silver medal', 'Bronze medal', 'No medal'], '', { gorsel: nesne('ikinci-ogrenci') });
  e('ss-t15', 'Sekizinci ve dokuzuncu İngilizcede nedir?', 'Eighth and ninth', ['Seventh and eighth', 'Eighth and ninth', 'Ninth and tenth', 'First and second'], '', { gorsel: nesne('sekiz-dokuz-sira') });
  e('ss-t16', 'Yedinci ve sekizinci hangi tür sayılardır?', 'Ordinal numbers', ['Countries', 'Fruits', 'Ordinal numbers', 'Directions'], '', { gorsel: nesne('yedinci-sekizinci') });
  e('ss-t17', 'Hangi eşleştirme doğrudur?', 'First = Birinci', ['First = İkinci', 'First = Birinci', 'Third = Dördüncü', 'Fifth = Altıncı'], '', { gorsel: nesne('birinci-madalya') });
  e('ss-t18', '"Third" kelimesi ne anlama gelir?', 'Üçüncü', ['Birinci', 'İkinci', 'Üçüncü', 'Dördüncü'], '', { gorsel: nesne('ucuncu-podyum') });
  e('ss-t19', '"Fifth" kelimesi hangi sıradır?', 'Beşinci', ['Dördüncü', 'Beşinci', 'Altıncı', 'Yedinci'], '', { gorsel: nesne('besinci-sira') });
  e('ss-t20', '"Tenth" kelimesi ne anlama gelir?', 'Onuncu', ['Sekizinci', 'Dokuzuncu', 'Onuncu', 'Birinci'], '', { gorsel: nesne('onuncu-sira') });
  e('ss-t21', 'Podyumda ikinci sıra hangisidir?', 'Second', ['First', 'Second', 'Third', 'Fourth'], '', { gorsel: nesne('ikinci-madalya') });
  e('ss-t22', 'Altıncı sıra hangi kelimedir?', 'Sixth', ['Fifth', 'Sixth', 'Seventh', 'Eighth'], '', { gorsel: nesne('altinci-sira') });
  e('ss-t23', 'Dördüncü sıra hangi kelimedir?', 'Fourth', ['Third', 'Fourth', 'Fifth', 'Sixth'], '', { gorsel: nesne('dorduncu-sira') });
  e('ss-t24', 'Yarışta "I am first" ne demektir?', 'Birinciyim', ['İkinciyim', 'Birinciyim', 'Üçüncüyüm', 'Sonuncuyum'], '', { gorsel: nesne('yaris-birinci') });
  e('ss-t25', 'Sıra sayıları ne için kullanılır?', 'Sıralama', ['Renk', 'Sıralama', 'Yön', 'Ülke'], '', { gorsel: nesne('sira-sayilari-pano') });
  return s;
}

export function siraSayilari(karistir) {
  return {
    id: 'siraSayilari',
    baslik: 'Ordinal Numbers',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Okul yarışması başladı! Birinci first altın madalya kazandı. İkinci second gümüş, üçüncü third bronz madalya aldı. Sıra sayıları yarışlarda çok önemliydi!', gorsel: anl('ss-anlatim-1') },
        { metin: 'Öğretmen tahtaya first, second, third, fourth, fifth yazdı. Dördüncü fourth, beşinci fifth, altıncı sixth! Sıra sayıları ordinal numbers olarak adlandırılır.', gorsel: anl('ss-anlatim-2') },
        { metin: 'Yedinci seventh, sekizinci eighth, dokuzuncu ninth, onuncu tenth! Elanaz "I am first!" dedi. Sıra sayılarını bilmek sıralamada yerini bulmak demekti.', gorsel: anl('ss-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
