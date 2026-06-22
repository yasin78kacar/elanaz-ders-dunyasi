/** GOREV-ING-TEMA4 — Clothes and Seasons */

const KAZANIM = {
  GE: 'ING.2.4.1',
  MV: 'ING.2.4.2',
};

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  const { kazanimKodu = KAZANIM.GE, ...kalan } = extra;
  sorular.push({
    id,
    kazanimKodu,
    tip: 'yazili',
    soru,
    dogruCevap: String(cevap),
    ipucu,
    cevapTipi: 'metin',
    ...kalan,
  });
}

function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  const { kazanimKodu = KAZANIM.GE, ...kalan } = extra;
  sorular.push({
    id,
    kazanimKodu,
    tip: 'yazili',
    soru,
    dogruCevap: cevap,
    ipucu,
    cevapTipi: 'metin',
    alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'],
    ...kalan,
  });
}

function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  const { kazanimKodu = KAZANIM.GE, ...kalan } = extra;
  sorular.push({
    id,
    kazanimKodu,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...kalan,
  });
}

function giyimEsyalariAlistirma() {
  const s = [];
  boslukEkle(s, 'ge-a1', 'Gömlek kelimesinin İngilizcesi ......... kelimesidir.', 'shirt', '', { gorsel: nesne('shirt') });
  boslukEkle(s, 'ge-a2', 'Pantolon kelimesinin İngilizcesi ......... kelimesidir.', 'pants', '', { gorsel: nesne('pants') });
  boslukEkle(s, 'ge-a3', 'Elbise kelimesinin İngilizce karşılığı ......... kelimesidir.', 'dress', '', { gorsel: nesne('dress') });
  boslukEkle(s, 'ge-a4', 'Etek kelimesinin İngilizcesi ......... kelimesidir.', 'skirt', '', { gorsel: nesne('skirt') });
  boslukEkle(s, 'ge-a5', 'Ayakkabı için İngilizcede ......... kelimesi kullanılır.', 'shoes', '', { gorsel: nesne('shoes') });
  boslukEkle(s, 'ge-a6', 'Çorap kelimesinin İngilizce karşılığı ......... kelimesidir.', 'socks', '', { gorsel: nesne('socks') });
  boslukEkle(s, 'ge-a7', 'Şapka İngilizcede ......... demektir.', 'hat', '', { gorsel: nesne('hat') });
  boslukEkle(s, 'ge-a8', 'Kaban kelimesinin İngilizce yazılışı ......... kelimesidir.', 'coat', '', { gorsel: nesne('coat') });
  boslukEkle(s, 'ge-a9', 'Atkı İngilizcede ......... kelimesidir.', 'scarf', '', { gorsel: nesne('scarf') });
  boslukEkle(s, 'ge-a10', 'Eldiven için İngilizcede ......... denir.', 'gloves', '', { gorsel: nesne('gloves') });
  boslukEkle(s, 'ge-a11', 'Tişört kelimesinin İngilizce karşılığı ......... kelimesidir.', 't-shirt', '', {
    gorsel: nesne('t-shirt'),
    alternatifCevaplar: ['tshirt', 't shirt', 'T-shirt'],
  });
  boslukEkle(s, 'ge-a12', 'Ceket İngilizcede ......... demektir.', 'jacket', '', { gorsel: nesne('jacket') });
  boslukEkle(s, 'ge-a13', 'Bot kelimesinin İngilizce karşılığı ......... kelimesidir.', 'boots', '', { gorsel: nesne('boots') });
  boslukEkle(s, 'ge-a14', 'Kazak İngilizcede ......... kelimesidir.', 'sweater', '', { gorsel: nesne('sweater') });
  boslukEkle(s, 'ge-a15', 'Şemsiye kelimesinin İngilizcesi ......... kelimesidir.', 'umbrella', '', { gorsel: nesne('umbrella') });
  dyEkle(s, 'ge-a16', '"Shirt" kelimesi Türkçede gömlek anlamına gelir.', 'Doğru', '', { gorsel: nesne('shirt') });
  dyEkle(s, 'ge-a17', '"Skirt" kelimesi pantolon demektir.', 'Yanlış', '', { gorsel: nesne('skirt') });
  dyEkle(s, 'ge-a18', '"Gloves" ellerimizi sıcak tutar.', 'Doğru', '', { gorsel: nesne('gloves') });
  dyEkle(s, 'ge-a19', '"Scarf" boynumuza takılır.', 'Doğru', '', { gorsel: nesne('scarf') });
  dyEkle(s, 'ge-a20', '"Boots" yazın giyilen ince terliktir.', 'Yanlış', '', { gorsel: nesne('boots') });
  dyEkle(s, 'ge-a21', '"Coat" kalın bir dış giysidir.', 'Doğru', '', { gorsel: nesne('coat') });
  dyEkle(s, 'ge-a22', '"Hat" başımıza takılır.', 'Doğru', '', { gorsel: nesne('hat') });
  dyEkle(s, 'ge-a23', '"Socks" ayaklarımıza giyilir.', 'Doğru', '', { gorsel: nesne('socks') });
  dyEkle(s, 'ge-a24', '"Umbrella" yağmurdan korunmak için kullanılır.', 'Doğru', '', { gorsel: nesne('umbrella') });
  dyEkle(s, 'ge-a25', '"Dress" kelimesi ceket anlamına gelir.', 'Yanlış', '', { gorsel: nesne('dress') });
  return s;
}

function giyimEsyalariTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);

  e('ge-t1', 'Gömlek kelimesinin İngilizcesi hangisidir?', 'Shirt', ['Skirt', 'Shirt', 'Shoes', 'Scarf'], '', { gorsel: nesne('shirt') });
  e('ge-t2', 'Pantolonun İngilizcesi nedir?', 'Pants', ['Dress', 'Pants', 'Coat', 'Hat'], '', { gorsel: nesne('pants') });
  e('ge-t3', 'Elbise için doğru İngilizce kelime hangisidir?', 'Dress', ['Dress', 'Gloves', 'Boots', 'Jacket'], '', { gorsel: nesne('dress') });
  e('ge-t4', 'Etek kelimesinin İngilizce karşılığı nedir?', 'Skirt', ['Skirt', 'Shirt', 'Socks', 'Sweater'], '', { gorsel: nesne('skirt') });
  e('ge-t5', 'Ayakkabı için İngilizcede hangi kelime kullanılır?', 'Shoes', ['Shoes', 'Socks', 'Scarf', 'Shirt'], '', { gorsel: nesne('shoes') });
  e('ge-t6', 'Çorap kelimesinin İngilizcesi nedir?', 'Socks', ['Socks', 'Gloves', 'Boots', 'Pants'], '', { gorsel: nesne('socks') });
  e('ge-t7', 'Şapkanın İngilizcesi hangi seçenektedir?', 'Hat', ['Hat', 'Coat', 'Shirt', 'Dress'], '', { gorsel: nesne('hat') });
  e('ge-t8', 'Kaban kelimesinin İngilizcesi nedir?', 'Coat', ['Coat', 'Skirt', 'Scarf', 'Socks'], '', { gorsel: nesne('coat') });
  e('ge-t9', 'Atkı kelimesinin İngilizce karşılığı hangisidir?', 'Scarf', ['Gloves', 'Scarf', 'Hat', 'Shoes'], '', { gorsel: nesne('scarf') });
  e('ge-t10', 'Eldiven için doğru İngilizce kelime nedir?', 'Gloves', ['Gloves', 'Boots', 'Dress', 'Pants'], '', { gorsel: nesne('gloves') });
  e('ge-t11', 'Tişört kelimesinin İngilizcesi hangisidir?', 'T-shirt', ['Jacket', 'T-shirt', 'Sweater', 'Skirt'], '', { gorsel: nesne('t-shirt') });
  e('ge-t12', 'Ceketin İngilizce karşılığı nedir?', 'Jacket', ['Hat', 'Jacket', 'Shirt', 'Coat'], '', { gorsel: nesne('jacket') });
  e('ge-t13', 'Bot kelimesinin İngilizcesi nedir?', 'Boots', ['Socks', 'Boots', 'Shoes', 'Gloves'], '', { gorsel: nesne('boots') });
  e('ge-t14', 'Kazak için İngilizcede hangi kelime kullanılır?', 'Sweater', ['Scarf', 'Sweater', 'Skirt', 'Dress'], '', { gorsel: nesne('sweater') });
  e('ge-t15', 'Şemsiyenin İngilizcesi nedir?', 'Umbrella', ['Umbrella', 'Hat', 'Coat', 'Pants'], '', { gorsel: nesne('umbrella') });
  e('ge-t16', '"Hat, gloves, scarf" kelimeleri daha çok hangi mevsimde kullanılır?', 'Winter', ['Summer', 'Spring', 'Winter', 'Autumn'], '', { gorsel: nesne('kis-aksesuarlari') });
  e('ge-t17', '"T-shirt and shorts" ifadesinde tişörtün İngilizcesi hangisidir?', 'T-shirt', ['Dress', 'Coat', 'T-shirt', 'Boots'], '', { gorsel: nesne('t-shirt') });
  e('ge-t18', 'Yağmurlu bir günde en çok hangi eşya işe yarar?', 'Umbrella', ['Skirt', 'Umbrella', 'Socks', 'Hat'], '', { gorsel: nesne('umbrella') });
  e('ge-t19', 'Aşağıdakilerden hangisi bir dış giyim ürünüdür?', 'Coat', ['Socks', 'Coat', 'Hat', 'Gloves'], '', { gorsel: nesne('coat') });
  e('ge-t20', 'Aşağıdaki kelimelerden hangisi ayakla ilgilidir?', 'Boots', ['Scarf', 'Boots', 'Hat', 'Coat'], '', { gorsel: nesne('boots') });
  e('ge-t21', '"Shirt + pants" kombininde pants ne demektir?', 'Pantolon', ['Gömlek', 'Pantolon', 'Çorap', 'Ayakkabı'], '', { gorsel: nesne('pants') });
  e('ge-t22', 'Kışın ellerimizi sıcak tutan eşya hangisidir?', 'Gloves', ['Scarf', 'Hat', 'Gloves', 'Skirt'], '', { gorsel: nesne('gloves') });
  e('ge-t23', 'Boyna takılan giyim eşyasının İngilizcesi nedir?', 'Scarf', ['Scarf', 'Socks', 'Boots', 'Dress'], '', { gorsel: nesne('scarf') });
  e('ge-t24', 'Aşağıdakilerden hangisi üst bedene giyilir?', 'Jacket', ['Boots', 'Jacket', 'Socks', 'Shoes'], '', { gorsel: nesne('jacket') });
  e('ge-t25', '"Sweater" kelimesinin Türkçe karşılığı nedir?', 'Kazak', ['Atkı', 'Kazak', 'Ceket', 'Şapka'], '', { gorsel: nesne('sweater') });
  return s;
}

function mevsimlerIngAlistirma() {
  const s = [];
  const ek = (id, soru, cevap, ipucu, extra = {}) =>
    boslukEkle(s, id, soru, cevap, ipucu, { kazanimKodu: KAZANIM.MV, ...extra });
  const dy = (id, soru, cevap, ipucu, extra = {}) =>
    dyEkle(s, id, soru, cevap, ipucu, { kazanimKodu: KAZANIM.MV, ...extra });

  ek('mv-a1', 'İlkbahar kelimesinin İngilizcesi ......... kelimesidir.', 'spring', '', { gorsel: nesne('spring-flowers') });
  ek('mv-a2', 'Yaz mevsiminin İngilizce karşılığı ......... kelimesidir.', 'summer', '', { gorsel: nesne('summer-sun') });
  ek('mv-a3', 'Sonbahar İngilizcede ......... kelimesiyle ifade edilir.', 'autumn', '', { gorsel: nesne('autumn-leaves') });
  ek('mv-a4', 'Kış mevsiminin İngilizce karşılığı ......... kelimesidir.', 'winter', '', { gorsel: nesne('winter-snow') });
  ek('mv-a5', 'İlkbaharda hafif .......... (jacket) giyebiliriz.', 'jacket', '', { gorsel: nesne('spring-jacket') });
  ek('mv-a6', 'Yazın sık kullanılan giysi ......... (t-shirt) olur.', 't-shirt', '', {
    gorsel: nesne('summer-t-shirt'),
    alternatifCevaplar: ['tshirt', 't shirt'],
  });
  ek('mv-a7', 'Sonbaharda rüzgarlı günlerde ......... takarız.', 'scarf', '', { gorsel: nesne('autumn-scarf') });
  ek('mv-a8', 'Kışın ellerimizi korumak için ......... giyeriz.', 'gloves', '', { gorsel: nesne('winter-gloves') });
  ek('mv-a9', 'Karlı günlerde ......... giymek ayaklarımızı sıcak tutar.', 'boots', '', { gorsel: nesne('winter-boots') });
  ek('mv-a10', 'Yağmurlu havada ......... kullanırız.', 'umbrella', '', { gorsel: nesne('rainy-umbrella') });
  dy('mv-a11', '"Spring" mevsiminde çiçekler açar.', 'Doğru', '', { gorsel: nesne('spring-flowers') });
  dy('mv-a12', '"Summer" mevsimi genellikle sıcak olur.', 'Doğru', '', { gorsel: nesne('summer-sun') });
  dy('mv-a13', '"Autumn" mevsiminde yapraklar sararır.', 'Doğru', '', { gorsel: nesne('autumn-leaves') });
  dy('mv-a14', '"Winter" mevsimi en sıcak mevsimdir.', 'Yanlış', '', { gorsel: nesne('winter-snow') });
  dy('mv-a15', 'Kış mevsiminde "coat" giymek uygun olur.', 'Doğru', '', { gorsel: nesne('winter-coat') });
  dy('mv-a16', 'Yaz mevsiminde kalın "sweater" giymek en iyi seçimdir.', 'Yanlış', '', { gorsel: nesne('summer-sweater') });
  dy('mv-a17', 'Sonbaharda bazen "umbrella" gerekir.', 'Doğru', '', { gorsel: nesne('autumn-rain') });
  dy('mv-a18', 'İlkbaharda parkta "play" yapmak eğlencelidir.', 'Doğru', '', { gorsel: nesne('spring-park-play') });
  dy('mv-a19', 'Yazın denizde "swim" aktivitesi yapılabilir.', 'Doğru', '', { gorsel: nesne('summer-swim') });
  dy('mv-a20', 'Kışın "snowman" yapmak mümkündür.', 'Doğru', '', { gorsel: nesne('winter-snowman') });
  dy('mv-a21', '"Autumn" Türkçede ilkbahar demektir.', 'Yanlış', '', { gorsel: nesne('autumn-leaves') });
  dy('mv-a22', '"Spring" kelimesi kış mevsimini anlatır.', 'Yanlış', '', { gorsel: nesne('spring-flowers') });
  dy('mv-a23', 'Yazın güneşten korunmak için "hat" takabiliriz.', 'Doğru', '', { gorsel: nesne('summer-hat') });
  dy('mv-a24', 'Kışın "gloves" ve "boots" iyi bir kombin olur.', 'Doğru', '', { gorsel: nesne('winter-outfit') });
  dy('mv-a25', 'Mevsim kelimesinin İngilizcesi "season" dur.', 'Doğru', '', { gorsel: nesne('season-wheel') });
  return s;
}

function mevsimlerIngTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra = {}) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { kazanimKodu: KAZANIM.MV, ...extra });

  e('mv-t1', 'İlkbaharın İngilizce karşılığı nedir?', 'Spring', ['Winter', 'Spring', 'Autumn', 'Summer'], '', { gorsel: nesne('spring-flowers') });
  e('mv-t2', 'Yaz mevsimi İngilizcede nasıl söylenir?', 'Summer', ['Autumn', 'Summer', 'Winter', 'Spring'], '', { gorsel: nesne('summer-sun') });
  e('mv-t3', 'Sonbaharın İngilizcesi hangisidir?', 'Autumn', ['Autumn', 'Summer', 'Spring', 'Winter'], '', { gorsel: nesne('autumn-leaves') });
  e('mv-t4', 'Kış mevsiminin İngilizcesi nedir?', 'Winter', ['Spring', 'Winter', 'Summer', 'Autumn'], '', { gorsel: nesne('winter-snow') });
  e('mv-t5', 'Aşağıdakilerden hangisi yaz mevsimine daha uygundur?', 'T-shirt', ['Coat', 'Gloves', 'T-shirt', 'Boots'], '', { gorsel: nesne('summer-t-shirt') });
  e('mv-t6', 'Kış mevsiminde hangi giysi daha uygundur?', 'Coat', ['Skirt', 'Coat', 'T-shirt', 'Dress'], '', { gorsel: nesne('winter-coat') });
  e('mv-t7', 'Yağmurlu sonbahar gününde hangisi kullanılır?', 'Umbrella', ['Hat', 'Socks', 'Umbrella', 'Shoes'], '', { gorsel: nesne('autumn-rain') });
  e('mv-t8', 'Karlı havada ayakları sıcak tutan eşya hangisidir?', 'Boots', ['Boots', 'Scarf', 'Gloves', 'Hat'], '', { gorsel: nesne('winter-boots') });
  e('mv-t9', 'Boynu sıcak tutan giyim eşyası hangisidir?', 'Scarf', ['Socks', 'Scarf', 'Shoes', 'Pants'], '', { gorsel: nesne('autumn-scarf') });
  e('mv-t10', 'Ellerimizi koruyan eşya hangisidir?', 'Gloves', ['Hat', 'Dress', 'Gloves', 'Skirt'], '', { gorsel: nesne('winter-gloves') });
  e('mv-t11', '"Swim" aktivitesi en çok hangi mevsimde yapılır?', 'Summer', ['Winter', 'Autumn', 'Spring', 'Summer'], '', { gorsel: nesne('summer-swim') });
  e('mv-t12', '"Make a snowman" etkinliği hangi mevsime aittir?', 'Winter', ['Summer', 'Winter', 'Spring', 'Autumn'], '', { gorsel: nesne('winter-snowman') });
  e('mv-t13', 'Yaprakların sarardığı mevsim hangisidir?', 'Autumn', ['Summer', 'Autumn', 'Spring', 'Winter'], '', { gorsel: nesne('autumn-leaves') });
  e('mv-t14', 'Çiçeklerin açtığı mevsim genellikle hangisidir?', 'Spring', ['Spring', 'Autumn', 'Winter', 'Summer'], '', { gorsel: nesne('spring-flowers') });
  e('mv-t15', 'Aşağıdaki eşleşmelerden hangisi doğrudur?', 'Winter - coat', ['Summer - boots', 'Spring - gloves', 'Winter - coat', 'Autumn - t-shirt'], '', { gorsel: nesne('season-clothes-match') });
  e('mv-t16', '"Season" kelimesinin Türkçe anlamı nedir?', 'Mevsim', ['Rüzgar', 'Hava', 'Mevsim', 'Giysi'], '', { gorsel: nesne('season-wheel') });
  e('mv-t17', 'Yazın güneşten korunmak için hangisi kullanılabilir?', 'Hat', ['Scarf', 'Hat', 'Gloves', 'Coat'], '', { gorsel: nesne('summer-hat') });
  e('mv-t18', 'İlkbahar için hafif bir dış giyim hangisidir?', 'Jacket', ['Boots', 'Jacket', 'Gloves', 'Sweater'], '', { gorsel: nesne('spring-jacket') });
  e('mv-t19', 'Aşağıdakilerden hangisi kış kombinine uygundur?', 'Coat + gloves + boots', ['Dress + sandals', 'T-shirt + shorts', 'Coat + gloves + boots', 'Skirt + hat'], '', { gorsel: nesne('winter-outfit') });
  e('mv-t20', 'Aşağıdaki aktivitelerden hangisi ilkbahara uygundur?', 'Play in the park', ['Make a snowman', 'Play in the park', 'Wear thick coat', 'Stay home all day'], '', { gorsel: nesne('spring-park-play') });
  e('mv-t21', '"Autumn and winter" sıralaması hangi seçenekte doğru verilmiştir?', 'Sonbahar ve kış', ['İlkbahar ve yaz', 'Yaz ve sonbahar', 'Kış ve ilkbahar', 'Sonbahar ve kış'], '', { gorsel: nesne('season-wheel') });
  e('mv-t22', 'Hangi mevsim en sıcak olur?', 'Summer', ['Winter', 'Autumn', 'Summer', 'Spring'], '', { gorsel: nesne('summer-sun') });
  e('mv-t23', 'Hangi mevsimde soğuk hava daha yaygındır?', 'Winter', ['Summer', 'Winter', 'Spring', 'Autumn'], '', { gorsel: nesne('winter-snow') });
  e('mv-t24', 'Yağmurlu bir güne uygun seçim hangisidir?', 'Umbrella and jacket', ['T-shirt and shorts', 'Umbrella and jacket', 'Boots and gloves only', 'Scarf only'], '', { gorsel: nesne('rainy-umbrella') });
  e('mv-t25', 'Aşağıdaki mevsim sırası hangisidir?', 'Spring - Summer - Autumn - Winter', ['Winter - Autumn - Summer - Spring', 'Spring - Summer - Autumn - Winter', 'Summer - Spring - Winter - Autumn', 'Autumn - Winter - Summer - Spring'], '', { gorsel: nesne('season-wheel') });
  return s;
}

export function giyimEsyalari(karistir) {
  return {
    id: 'giyim-esyalari',
    baslik: 'Clothes',
    kazanimKodu: KAZANIM.GE,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elanaz ve Berk dolaplarını düzenliyordu. Elanaz, "Bu bir shirt, bu da pants!" dedi. Berk de "Benim mavi jacket ve kırmızı t-shirt nerede?" diye sordu. Sonra birlikte shoes, socks ve hat kelimelerini tekrar ettiler. Her yeni kelimeyle İngilizce giyim eşyalarını daha kolay hatırladılar.',
          gorsel: anl('ge-anlatim-1'),
        },
        {
          metin:
            'Hava biraz serinleyince çocuklar dışarı çıkmadan önce kıyafet seçti. Berk coat ve scarf aldı. Elanaz "Gloves da giyelim, ellerimiz üşümesin" dedi. Kapının yanında umbrella duruyordu. Yağmur başlarsa hemen kullanacaklardı.',
          gorsel: anl('ge-anlatim-2'),
        },
        {
          metin:
            'Okulda "What are you wearing?" oyunu oynadılar. Çocuklar sırayla "I am wearing a dress", "I am wearing boots", "I am wearing a sweater" dedi. Öğretmenleri hepsini alkışladı. Artık giyim eşyalarını İngilizce söylemek onlar için çok daha eğlenceliydi.',
          gorsel: anl('ge-anlatim-3'),
        },
      ],
    },
    alistirma: giyimEsyalariAlistirma(),
    test: giyimEsyalariTest(karistir),
  };
}

export function mevsimlerIng(karistir) {
  return {
    id: 'mevsimler-ing',
    baslik: 'Seasons',
    kazanimKodu: KAZANIM.MV,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Yılın ilk renkli günlerinde öğretmen tahtaya dört kelime yazdı: Spring, Summer, Autumn, Winter. Elanaz çiçekleri görünce "Spring!" dedi. Berk sıcak güneşi görünce "Summer!" diye ekledi. Her mevsimin farklı bir adı ve farklı bir havası olduğunu öğrendiler.',
          gorsel: anl('mv-anlatim-1'),
        },
        {
          metin:
            'Sonra mevsimlere göre kıyafet oyunu oynadılar. "Winter için coat, gloves, boots!" dedi sınıf. "Summer için t-shirt ve hat!" diye devam ettiler. Sonbaharda scarf ve umbrella, ilkbaharda ise hafif jacket uygun oluyordu.',
          gorsel: anl('mv-anlatim-2'),
        },
        {
          metin:
            'Dersin sonunda etkinlik kartlarını eşleştirdiler: Spring-play in the park, Summer-swim, Autumn-windy walk, Winter-make a snowman. Böylece hem mevsim adlarını hem de mevsimlere uygun kıyafet ve etkinlikleri İngilizce söylemeyi başardılar.',
          gorsel: anl('mv-anlatim-3'),
        },
      ],
    },
    alistirma: mevsimlerIngAlistirma(),
    test: mevsimlerIngTest(karistir),
  };
}
