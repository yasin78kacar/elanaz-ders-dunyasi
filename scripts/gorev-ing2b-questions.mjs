/** GOREV-ING2B — Food and Drinks (Yiyecekler ve İçecekler) */

const KAZANIM = 'ING.2.2.2';

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
  boslukEkle(s, 'yi-a1', 'Ekmek kelimesinin İngilizcesi ......... kelimesidir.', 'bread', '', { gorsel: nesne('ekmek-dilim') });
  dyEkle(s, 'yi-a2', 'İngilizcede peynir "Cheese" demektir.', 'Doğru', '', { gorsel: nesne('peynir-tabak') });
  boslukEkle(s, 'yi-a3', 'Yumurta kelimesinin İngilizce karşılığı ......... kelimesidir.', 'egg', '', { gorsel: nesne('yumurta-hasli') });
  dyEkle(s, 'yi-a4', 'Süt İngilizcede "Milk" olarak söylenir.', 'Doğru', '', { gorsel: nesne('bardak-sut') });
  boslukEkle(s, 'yi-a5', 'Elma kelimesinin İngilizcesi ......... kelimesidir.', 'apple', '', { gorsel: nesne('kirmizi-elma-yiyecek') });
  dyEkle(s, 'yi-a6', '"Banana" kelimesi Türkçede portakal anlamına gelir.', 'Yanlış', '', { gorsel: nesne('sari-muz') });
  boslukEkle(s, 'yi-a7', 'Et kelimesinin İngilizce yazılışı ......... kelimesidir.', 'meat', '', { gorsel: nesne('et-yemegi') });
  dyEkle(s, 'yi-a8', 'Tavuk eti yemeğine İngilizcede "Chicken" denir.', 'Doğru', '', { gorsel: nesne('tavuk-yemek') });
  boslukEkle(s, 'yi-a9', 'Su kelimesinin İngilizcesi ......... kelimesidir.', 'water', '', { gorsel: nesne('bardak-su') });
  dyEkle(s, 'yi-a10', 'Meyve suyu İngilizcede "Juice" olarak yazılır.', 'Doğru', '', { gorsel: nesne('meyve-suyu') });
  boslukEkle(s, 'yi-a11', 'Çay içeceğinin İngilizcesi ......... kelimesidir.', 'tea', '', { gorsel: nesne('sicak-cay') });
  dyEkle(s, 'yi-a12', '"Cheese" kelimesi Türkçede süt demektir.', 'Yanlış', '', { gorsel: nesne('peynir-ekmek') });
  dyEkle(s, 'yi-a13', '"Apple" kelimesi çok lezzetli ve sağlıklı bir meyve olan elmadır.', 'Doğru', '', { gorsel: nesne('taze-elma') });
  boslukEkle(s, 'yi-a14', 'Spor yaparken bol bol "........." (su) içmeliyiz.', 'water', '', { gorsel: nesne('matara') });
  boslukEkle(s, 'yi-a15', 'Maymunların en sevdiği meyve olan muzun İngilizcesi "........." olarak yazılır.', 'banana', '', { gorsel: nesne('muz-salkimi') });
  dyEkle(s, 'yi-a16', '"Milk" kelimesi Türkçede su anlamına gelir.', 'Yanlış', '', { gorsel: nesne('bardak-sut-2') });
  boslukEkle(s, 'yi-a17', 'Yiyecekler kelimesinin İngilizce karşılığı "........." kelimesidir.', 'food', '', { gorsel: nesne('kahvalti-masa') });
  dyEkle(s, 'yi-a18', '"Tea" kelimesi Türkçede çay demektir.', 'Doğru', '', { gorsel: nesne('cay-fincan') });
  boslukEkle(s, 'yi-a19', 'İçecekler kelimesinin İngilizcesi "........." olarak söylenir.', 'drinks', '', { gorsel: nesne('cesitli-icecek') });
  dyEkle(s, 'yi-a20', '"Meat" kelimesi ekmek anlamına gelir.', 'Yanlış', '', { gorsel: nesne('dilim-et') });
  boslukEkle(s, 'yi-a21', 'Hem hayvanın adı hem de yemeği olan tavuk etinin İngilizcesi "........." kelimesidir.', 'chicken', '', { gorsel: nesne('tavuk-budu') });
  dyEkle(s, 'yi-a22', 'Tavukların bize verdiği "Egg" yumurta demektir.', 'Doğru', '', { gorsel: nesne('sepet-yumurta') });
  boslukEkle(s, 'yi-a23', 'Taze sıkılmış meyve suyuna "........." deriz.', 'juice', '', { gorsel: nesne('portakal-suyu') });
  dyEkle(s, 'yi-a24', 'Ekmek İngilizcede "Bread" olarak söylenir.', 'Doğru', '', { gorsel: nesne('sandvic') });
  boslukEkle(s, 'yi-a25', 'Elma, muz gibi meyvelerin genel İngilizce adı "........." (meyveler) kelimesidir.', 'fruits', '', { gorsel: nesne('cesitli-meyveler') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('yi-t1', 'Kahvaltıda yediğimiz ekmeğin İngilizcesi nedir?', 'Bread', ['Milk', 'Bread', 'Apple', 'Water'], '', { gorsel: nesne('dilim-ekmek') });
  e('yi-t2', 'Kahvaltıların en lezzetli yiyeceği olan peynirin İngilizce adı hangisidir?', 'Cheese', ['Cheese', 'Meat', 'Tea', 'Banana'], '', { gorsel: nesne('beyaz-peynir') });
  e('yi-t3', 'Sağlıklı kemikler için yediğimiz yumurtanın İngilizcesi nedir?', 'Egg', ['Egg', 'Juice', 'Water', 'Chicken'], '', { gorsel: nesne('yumurta-hasli') });
  e('yi-t4', 'Her gün içmemiz gereken sağlıklı sütün İngilizcesi aşağıdakilerden hangisidir?', 'Milk', ['Milk', 'Bread', 'Meat', 'Tea'], '', { gorsel: nesne('bardak-sut') });
  e('yi-t5', 'Çok sağlıklı ve tatlı bir meyve olan elmanın İngilizce karşılığı nedir?', 'Apple', ['Apple', 'Banana', 'Cheese', 'Juice'], '', { gorsel: nesne('kirmizi-elma-yiyecek') });
  e('yi-t6', 'Maymunların da çok sevdiği muz meyvesinin İngilizcesi hangi seçenekte doğru verilmiştir?', 'Banana', ['Water', 'Apple', 'Banana', 'Egg'], '', { gorsel: nesne('sari-muz') });
  e('yi-t7', 'Bizi güçlü yapan et yemeğinin İngilizcesi nedir?', 'Meat', ['Bread', 'Meat', 'Milk', 'Chicken'], '', { gorsel: nesne('et-yemegi') });
  e('yi-t8', 'Akşam yemeğinde yediğimiz tavuk etinin İngilizcesi nedir?', 'Chicken', ['Tea', 'Cheese', 'Chicken', 'Water'], '', { gorsel: nesne('kizarmis-tavuk') });
  e('yi-t9', 'Susadığımızda içtiğimiz hayat kaynağımız olan suyun İngilizcesi nedir?', 'Water', ['Water', 'Juice', 'Milk', 'Tea'], '', { gorsel: nesne('bardak-su-temiz') });
  e('yi-t10', 'Taze sıkılmış meyve suyunun İngilizcesi hangisidir?', 'Juice', ['Juice', 'Meat', 'Apple', 'Bread'], '', { gorsel: nesne('portakal-suyu') });
  e('yi-t11', 'Büyüklerimizin kahvaltıda içmeyi çok sevdiği çayın İngilizce adı nedir?', 'Tea', ['Water', 'Egg', 'Cheese', 'Tea'], '', { gorsel: nesne('sicak-cay-fincan') });
  e('yi-t12', 'Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?', 'Ekmek = Water', ['Peynir = Cheese', 'Süt = Milk', 'Ekmek = Water', 'Et = Meat'], 'Bread ekmek demektir!', { gorsel: nesne('yiyecekler-masasi'), sasirtma: true });
  e('yi-t13', '"Apple" ve "Banana" kelimeleri sırasıyla hangi meyvelerdir?', 'Elma ve Muz', ['Çilek ve Kiraz', 'Elma ve Muz', 'Karpuz ve Kavun', 'Portakal ve Üzüm'], '', { gorsel: grup(['kirmizi-elma-yiyecek', 'sari-muz'], ['kirmizi-elma-yiyecek', 'sari-muz']) });
  e('yi-t14', 'Yiyecekler kelimesinin genel İngilizce adı nedir?', 'Food', ['Animals', 'Colors', 'Food', 'Toys'], '', { gorsel: nesne('cesitli-yiyecekler') });
  e('yi-t15', '"Tea" kelimesinin Türkçedeki anlamı nedir?', 'Çay', ['Çay', 'Su', 'Süt', 'Meyve Suyu'], '', { gorsel: nesne('cay-bardak') });
  e('yi-t16', 'İngilizce "Cheese" denildiğinde aklımıza hangi yiyecek gelir?', 'Peynir', ['Yumurta', 'Peynir', 'Et', 'Ekmek'], '', { gorsel: nesne('peynir-tabak') });
  e('yi-t17', 'Aşağıdakilerden hangisi bir içecektir (Drink)?', 'Water', ['Bread', 'Meat', 'Water', 'Cheese'], '', { gorsel: grup(['bardak-sut', 'bardak-su'], 'bardak-su') });
  e('yi-t18', 'Yemeklerimizden olan "Meat and Chicken" hangi iki yiyecektir?', 'Et ve Tavuk', ['Et ve Tavuk', 'Ekmek ve Peynir', 'Elma ve Muz', 'Su ve Süt'], '', { gorsel: grup(['et-yemegi', 'tavuk-yemek'], ['et-yemegi', 'tavuk-yemek']) });
  e('yi-t19', '"Egg" kelimesi Türkçede hangi anlama gelir?', 'Yumurta', ['Ekmek', 'Çay', 'Peynir', 'Yumurta'], '', { gorsel: nesne('yumurta-resim') });
  e('yi-t20', 'Sevilen içecek "Juice" ne demektir?', 'Meyve suyu', ['Meyve suyu', 'Süt', 'Su', 'Çay'], '', { gorsel: nesne('taze-elma-sulari') });
  e('yi-t21', 'Bize enerji veren "Bread" kelimesi hangi yiyecektir?', 'Ekmek', ['Et', 'Tavuk', 'Ekmek', 'Muz'], '', { gorsel: nesne('ekmek-dilim') });
  e('yi-t22', '"Milk" kelimesi hangi içeceğin İngilizce adıdır?', 'Süt', ['Meyve suyu', 'Su', 'Süt', 'Çay'], '', { gorsel: nesne('sut-icen-cocuk') });
  e('yi-t23', '"Apple" kelimesinin Türkçe karşılığı hangisidir?', 'Elma', ['Elma', 'Muz', 'Yumurta', 'Peynir'], '', { gorsel: nesne('elma-resmi') });
  e('yi-t24', '"Banana" kelimesi hangi sarı meyvedir?', 'Muz', ['Limon', 'Elma', 'Muz', 'Portakal'], '', { gorsel: nesne('muz-salkimi') });
  e('yi-t25', 'İçecekler kelimesinin İngilizcesi "........." olarak söylenir.', 'Drinks', ['Drinks', 'Food', 'Animals', 'Books'], '', { gorsel: nesne('icecekler-resmi') });
  return s;
}

export function yiyeceklerVeIcecekler(karistir) {
  return {
    id: 'yiyecekler-ve-icecekler',
    baslik: 'Food and Drinks',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Güneşli ve çok tatlı bir sabahtı. Ayşe ve Yusuf erkenden uyanıp kahvaltı sofrasına oturdular. Anneleri onlar için mis gibi bir kahvaltı hazırlamıştı. Ayşe ekmeği göstererek, "Ekmek İngilizcede Bread demektir, enerji verir," dedi. Yusuf tabağındaki peyniri afiyetle yerken, "Peynir çok lezzetli, İngilizcesi ise Cheese!" diye ekledi. Anneleri masaya haşlanmış yumurta getirdi. Yumurtanın İngilizcesi "Egg" idi ve kemiklerini güçlendiriyordu. Sağlıklı bir kahvaltının en önemli içeceği olan sütü yudumlarken, sütün İngilizcede "Milk" olarak söylendiğini hatırladılar. Güzel bir kahvaltı, güne mutlu ve güçlü başlamanın en harika yoluydu!',
          gorsel: anl('yi-anlatim-1'),
        },
        {
          metin:
            'Öğle vakti geldiğinde Mehmet ve Selin okulun yemekhanesine gittiler. Tabaklarında harika bir et yemeği vardı. Mehmet, "Etin İngilizcesi Meat\'tir, çok sağlıklıdır," dedi. Selin ise tavuk yemeğini göstererek, "Benim yemeğim tavuk, yani Chicken!" diye gülümsedi. Yemeklerini bitirdikten sonra sıra en sevdikleri kısma, meyvelere gelmişti. Mehmet kıpkırmızı bir elmayı ısırırken elmanın İngilizcesinin "Apple" olduğunu söyledi. Selin de sarı muzunu soyarken, "Muz İngilizcede Banana demektir, maymunlar da bunu çok sever!" dedi. Meyveler (Fruits) ve sağlıklı yiyecekler (Food) onları hastalıklardan koruyan sihirli kalkanlardı.',
          gorsel: anl('yi-anlatim-2'),
        },
        {
          metin:
            'Hafta sonu parkta koşup oyun oynayan Fatma ve Berk çok susamışlardı. Berk hemen matarasından kana kana su içti. "Su, hayatımız için çok önemli. Suyun İngilizcesi Water!" dedi neşeyle. Fatma da yanında getirdiği portakal suyunu içti. Meyve sularına İngilizcede genel olarak "Juice" dendiğini biliyordu. Akşam eve döndüklerinde dedeleri bahçede çay içiyordu. Dedelerine sıcak bir çay ikram ettiler. Çayın İngilizcesi "Tea" idi. Yiyecekler (Food) ve içecekler (Drinks) dünyasını İngilizce kelimelerle öğrenmek, her öğünü çok eğlenceli bir oyuna dönüştürmüştü.',
          gorsel: anl('yi-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
