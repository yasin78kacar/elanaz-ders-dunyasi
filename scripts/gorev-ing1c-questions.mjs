/** GOREV-ING1C — Greetings and Family (Selamlaşma ve Aile) */

const KAZANIM = 'ING.2.1.3';

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
}

function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: KAZANIM,
    tip: 'yazili',
    soru,
    dogruCevap: cevap,
    ipucu,
    cevapTipi: 'metin',
    alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'],
    ...extra,
  });
}

function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: KAZANIM,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'sa-a1', 'İngilizcede arkadaşımıza merhaba demek için "........." kelimesini kullanırız.', 'Hello', '', { gorsel: nesne('el-sallayan') });
  dyEkle(s, 'sa-a2', '"Hi" kelimesi İngilizcede merhaba (selam) anlamına gelir.', 'Doğru', '', { gorsel: nesne('merhaba-cocuklar') });
  boslukEkle(s, 'sa-a3', 'Sabah uyandığımızda ailemize İngilizce olarak "Good ........." deriz.', 'morning', '', { gorsel: nesne('sabah-gunes') });
  dyEkle(s, 'sa-a4', 'Öğleden sonra karşılaştığımız kişilere "Good afternoon" deriz.', 'Doğru', '', { gorsel: nesne('ogle-vakti') });
  boslukEkle(s, 'sa-a5', 'Aile kelimesinin İngilizcesi "........." kelimesidir.', 'family', '', { gorsel: nesne('aile-foto') });
  dyEkle(s, 'sa-a6', 'Anne kelimesi İngilizcede "Mother" olarak yazılır.', 'Doğru', '', { gorsel: nesne('anne-resmi') });
  boslukEkle(s, 'sa-a7', 'Babamıza İngilizcede "........." diyebiliriz.', 'father', '', { gorsel: nesne('baba-resmi'), alternatifCevaplar: ['Father'] });
  dyEkle(s, 'sa-a8', '"Sister" kelimesi Türkçede erkek kardeş demektir.', 'Yanlış', '', { gorsel: nesne('kiz-kardes') });
  boslukEkle(s, 'sa-a9', 'Erkek kardeşin İngilizcesi "........." kelimesidir.', 'brother', '', { gorsel: nesne('erkek-kardes') });
  dyEkle(s, 'sa-a10', 'Gece uyumadan önce ailemize "Good night" deriz.', 'Doğru', '', { gorsel: nesne('gece-uyku') });
  boslukEkle(s, 'sa-a11', 'Akşam saatlerinde birine iyi akşamlar demek için "Good ........." deriz.', 'evening', '', { gorsel: nesne('aksam-yemegi') });
  dyEkle(s, 'sa-a12', 'Evden çıkarken hoşça kal demek için "Goodbye" deriz.', 'Doğru', '', { gorsel: nesne('vedalasan') });
  boslukEkle(s, 'sa-a13', 'Kısa ve samimi bir hoşça kal demek için "........." diyebiliriz.', 'bye', '', { gorsel: nesne('bye-bye'), alternatifCevaplar: ['bye bye', 'Bye', 'Bye bye'] });
  dyEkle(s, 'sa-a14', 'Görüşürüz demek için İngilizcede "See you" kullanılır.', 'Doğru', '', { gorsel: nesne('park-ayrilma') });
  boslukEkle(s, 'sa-a15', 'Büyükannemize (ninemize) İngilizcede "Grand........." deriz.', 'mother', '', { gorsel: nesne('buyukanne') });
  dyEkle(s, 'sa-a16', 'Büyükbabamıza (dedemize) "Grandfather" denir.', 'Doğru', '', { gorsel: nesne('buyukbaba') });
  dyEkle(s, 'sa-a17', '"Good morning" iyi geceler anlamına gelir.', 'Yanlış', '', { gorsel: nesne('gunduz-gunes') });
  dyEkle(s, 'sa-a18', '"Mother" kelimesi annemizi ifade eder.', 'Doğru', '', { gorsel: nesne('neseli-anne') });
  boslukEkle(s, 'sa-a19', 'Ailemize katılan küçük bebeğe (bebek kardeşe) İngilizcede "........." diyebiliriz.', 'baby', '', { gorsel: nesne('bebek-kardes') });
  dyEkle(s, 'sa-a20', '"Father and son" ifadesinde geçen "Father", baba demektir.', 'Doğru', '', { gorsel: nesne('baba-ogul') });
  boslukEkle(s, 'sa-a21', '"Sister and brother" ifadesi ......... ve erkek kardeş demektir.', 'kız kardeş', '', { gorsel: nesne('kardesler') });
  dyEkle(s, 'sa-a22', '"My family" Türkçede "Benim ailem" anlamına gelir.', 'Doğru', '', { gorsel: nesne('aile-tablosu') });
  boslukEkle(s, 'sa-a23', 'Birine "Hello" dediğimizde o kişi bize "........." (selam) diye cevap verebilir.', 'Hi', '', { gorsel: nesne('merhaba-kiz'), alternatifCevaplar: ['Hello', 'hi', 'hello'] });
  dyEkle(s, 'sa-a24', 'Güneş batarken ve hava kararmaya başlarken "Good evening" deriz.', 'Doğru', '', { gorsel: nesne('aksam-gunes') });
  boslukEkle(s, 'sa-a25', 'Yıldızların çıktığı gece vaktinde uykuya dalarken "Good ........." (İyi geceler) deriz.', 'night', '', { gorsel: nesne('gece-ay') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('sa-t1', 'Sabah okulda arkadaşımızla karşılaştığımızda ona ne söyleriz?', 'Hello / Good morning', ['Good night', 'Goodbye', 'Hello / Good morning', 'See you'], '', { gorsel: nesne('okul-karsilasma') });
  e('sa-t2', 'Sabah uyandığımızda İngilizce günaydın demek için hangi ifadeyi kullanırız?', 'Good morning', ['Good morning', 'Good evening', 'Good night', 'Goodbye'], '', { gorsel: nesne('gunes-dogusu') });
  e('sa-t3', '"Anne" kelimesinin İngilizcesi aşağıdakilerden hangisidir?', 'Mother', ['Father', 'Brother', 'Mother', 'Sister'], '', { gorsel: nesne('anne-portre') });
  e('sa-t4', 'İngilizcede "Baba" kelimesi nasıl yazılır?', 'Father', ['Mother', 'Sister', 'Brother', 'Father'], '', { gorsel: nesne('baba-portre') });
  e('sa-t5', 'Ailenin kız çocuklarına, yani kız kardeşe İngilizcede ne ad verilir?', 'Sister', ['Sister', 'Brother', 'Father', 'Uncle'], '', { gorsel: nesne('kiz-kardes-abla') });
  e('sa-t6', "Ali'nin küçük bir erkek kardeşi var. Erkek kardeş kelimesinin İngilizcesi nedir?", 'Brother', ['Mother', 'Sister', 'Brother', 'Grandfather'], '', { gorsel: nesne('erkek-kardes-ali') });
  e('sa-t7', 'Anne, baba ve çocuklardan oluşan topluluğa (Aile) İngilizcede ne denir?', 'Family', ['Classroom', 'Family', 'Colors', 'Numbers'], '', { gorsel: nesne('aile-foto-test') });
  e('sa-t8', 'Arkadaşımızdan ayrılırken "Hoşça kal" demek için İngilizce hangi kelimeyi söyleriz?', 'Goodbye', ['Hello', 'Good morning', 'Goodbye', 'Hi'], '', { gorsel: nesne('okul-ayrilma') });
  e('sa-t9', 'Uyumadan önce ailemize İngilizce "İyi geceler" demek için ne söyleriz?', 'Good night', ['Good night', 'Good afternoon', 'Good morning', 'Hello'], '', { gorsel: nesne('gece-yatak') });
  e('sa-t10', 'Arkadaşımıza kısaca "Selam" demek için İngilizce hangi küçük kelimeyi kullanırız?', 'Hi', ['Bye', 'Hi', 'Good', 'See'], '', { gorsel: nesne('hi-selam') });
  e('sa-t11', 'Öğleden sonra saatlerinde (Tünaydın demek için) İngilizce hangi ifade kullanılır?', 'Good afternoon', ['Good morning', 'Good night', 'Good afternoon', 'Goodbye'], '', { gorsel: nesne('ogleden-sonra-park') });
  e('sa-t12', '"Görüşürüz" kelimesinin İngilizcesi aşağıdakilerden hangisidir?', 'See you', ['See you', 'Hi', 'Good morning', 'Hello'], '', { gorsel: nesne('gorusuruz') });
  e('sa-t13', '"Grandmother" kelimesinin Türkçedeki anlamı nedir?', 'Büyükanne (Nine)', ['Erkek kardeş', 'Büyükanne (Nine)', 'Baba', 'Kız kardeş'], '', { gorsel: nesne('buyukanne-resim') });
  e('sa-t14', 'Dedemize (büyükbabamıza) İngilizce ne deriz?', 'Grandfather', ['Brother', 'Father', 'Grandfather', 'Sister'], '', { gorsel: nesne('buyukbaba-resim') });
  e('sa-t15', 'Evin en küçüğü olan bebeğe İngilizcede ne ad verilir?', 'Baby', ['Baby', 'Mother', 'Grandfather', 'Teacher'], '', { gorsel: nesne('neseli-bebek') });
  e('sa-t16', 'Akşam vakti karşılaştığımız kişilere "İyi akşamlar" demek için ne söyleriz?', 'Good evening', ['Good morning', 'Good afternoon', 'Good evening', 'Good night'], '', { gorsel: nesne('aksam-yemegi-aile') });
  e('sa-t17', '"My family" ifadesi Türkçede ne anlama gelir?', 'Benim ailem', ['Benim okulum', 'Benim arkadaşlarım', 'Benim ailem', 'Benim sınıfım'], '', { gorsel: nesne('aile-uyeleri') });
  e('sa-t18', '"Brother and Sister" kelimeleri Türkçeye nasıl çevrilir?', 'Erkek kardeş ve Kız kardeş', ['Anne ve Baba', 'Erkek kardeş ve Kız kardeş', 'Büyükanne ve Büyükbaba', 'Öğretmen ve Öğrenci'], '', { gorsel: nesne('kardes-oyun') });
  e('sa-t19', '"Bye bye" ne zaman söylenir?', 'Birisinden ayrılırken (Hoşça kal derken)', ['Birisiyle karşılaşıldığında (Merhaba derken)', 'Sabah uyanınca', 'Birisinden ayrılırken (Hoşça kal derken)', 'Gece uyurken'], '', { gorsel: nesne('el-sallayan-kiz'), sasirtma: true });
  e('sa-t20', '"Mother and Father" ifadesinin Türkçe karşılığı hangisidir?', 'Anne ve Baba', ['Kız kardeş ve Erkek kardeş', 'Anne ve Baba', 'Dede ve Nine', 'Teyze ve Amca'], '', { gorsel: nesne('anne-baba') });
  e('sa-t21', 'Sabah kalktığımızda odamıza giren annemize ilk olarak İngilizce ne söyleriz?', 'Good morning', ['Good night', 'Good afternoon', 'Good morning', 'Goodbye'], '', { gorsel: nesne('gunaydin-cocuk') });
  e('sa-t22', 'Sınıfa yeni katılan bir arkadaşımıza kendimizi tanıtırken sıcak bir başlangıç için ne demeliyiz?', 'Hello', ['Hello', 'Good night', 'Bye bye', 'See you'], '', { gorsel: nesne('yeni-ogrenci') });
  e('sa-t23', '"I love my family" cümlesi İngilizcede neyi ifade eder?', 'Ailemi seviyorum', ['Okulumu seviyorum', 'Ailemi seviyorum', 'Yemekleri seviyorum', 'Renkleri seviyorum'], '', { gorsel: nesne('sarilan-aile') });
  e('sa-t24', 'Uykudan önce "Good night" diyen birisine biz nasıl cevap veririz?', 'Good night', ['Good morning', 'Good afternoon', 'Good night', 'Hello'], '', { gorsel: nesne('uyku-kardes') });
  e('sa-t25', 'Okul servisine binip annesinden ayrılan çocuk annesine ne der?', 'Goodbye', ['Hi', 'Good morning', 'Goodbye', 'Hello'], '', { gorsel: nesne('otobus-cocuk') });
  return s;
}

export function selamlasmaVeAile(karistir) {
  return {
    id: 'selamlasma-ve-aile',
    baslik: 'Greetings and Family',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Mehmet okula yürürken Fatma\'yı gördü. "Hello Fatma!" dedi. Fatma "Hi Mehmet!" diye cevap verdi. Yusuf gelince "Good morning!" dedi. Öğleden sonra "Good afternoon" diyorlardı. Küçük İngilizce selamlaşmalar günlerini daha neşeli yapıyordu.',
          gorsel: anl('sa-anlatim-1'),
        },
        {
          metin:
            'Selin aile ağacı hazırlıyordu. Annesinin altına Mother, babasının altına Father, erkek kardeşinin altına Brother, ablasının altına Sister yazdı. "My Family" panosu renkli ve sevgi dolu tamamlandı!',
          gorsel: anl('sa-anlatim-2'),
        },
        {
          metin:
            'Yusuf uyku vakti gelince annesine ve babasına "Good night!" dedi. Sabah okula giderken "Goodbye!" veya "Bye bye!" diyordu. Parkta ayrılırken "See you!" diyerek neşeyle evlerine dağılıyorlardı.',
          gorsel: anl('sa-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
