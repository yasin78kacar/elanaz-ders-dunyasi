/** GOREV-ING1 — Alphabet and Colors (Alfabe ve Renkler) */

const KAZANIM = 'ING.2.1.1';

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
}
function harf(h, renk) {
  return { tur: 'ingilizce', mod: 'harf', nesne: h, renk };
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
  boslukEkle(s, 'ar-a1', 'Kırmızı rengin İngilizcesi ......... kelimesidir.', 'red', '', { gorsel: nesne('kirmizi-elma') });
  boslukEkle(s, 'ar-a2', 'Mavi rengin İngilizce karşılığı ......... kelimesidir.', 'blue', '', { gorsel: nesne('mavi-gokyuzu') });
  dyEkle(s, 'ar-a3', 'Sarı renk İngilizcede "Yellow" olarak söylenir.', 'Doğru', '', { gorsel: nesne('sari-gunes') });
  boslukEkle(s, 'ar-a4', 'Yeşil rengin İngilizcesi ......... kelimesidir.', 'green', '', { gorsel: nesne('yesil-yaprak') });
  dyEkle(s, 'ar-a5', 'Turuncu renk İngilizcede "Orange" demektir.', 'Doğru', '', { gorsel: nesne('turuncu-portakal') });
  boslukEkle(s, 'ar-a6', 'Pembe rengin İngilizce yazılışı ......... kelimesidir.', 'pink', '', { gorsel: nesne('pembe-pamuk-seker') });
  dyEkle(s, 'ar-a7', 'Mor renk İngilizcede "Purple" olarak yazılır ve okunur.', 'Doğru', '', { gorsel: nesne('mor-uzum') });
  boslukEkle(s, 'ar-a8', 'Siyah rengin İngilizcesi ......... kelimesidir.', 'black', '', { gorsel: nesne('siyah-kedi') });
  dyEkle(s, 'ar-a9', 'Beyaz renk İngilizcede "White" demektir.', 'Doğru', '', { gorsel: nesne('beyaz-kar') });
  boslukEkle(s, 'ar-a10', 'Kahverengi kelimesinin İngilizcesi ......... kelimesidir.', 'brown', '', { gorsel: nesne('kahverengi-ayi') });
  dyEkle(s, 'ar-a11', 'İngilizce alfabenin ilk harfi "A"dır ve "Ey" diye okunur.', 'Doğru', '', { gorsel: harf('A', 'red') });
  dyEkle(s, 'ar-a12', 'İngilizce "B" harfi "Bi" şeklinde seslendirilir.', 'Doğru', '', { gorsel: harf('B', 'blue') });
  boslukEkle(s, 'ar-a13', 'Renkler kelimesinin İngilizcesi ......... kelimesidir.', 'colors', '', { gorsel: nesne('boya-kalemleri') });
  dyEkle(s, 'ar-a14', 'İngilizcede kırmızı "Red", mavi ise "Green" demektir.', 'Yanlış', '', { gorsel: nesne('kirmizi-gul') });
  boslukEkle(s, 'ar-a15', '"Yellow" kelimesi Türkçe olarak ......... rengini anlatır.', 'sarı', '', { gorsel: nesne('sari-limon') });
  dyEkle(s, 'ar-a16', '"Blue" kelimesi Türkçe olarak mavi anlamına gelir.', 'Doğru', '', { gorsel: nesne('mavi-deniz') });
  boslukEkle(s, 'ar-a17', 'İngilizcede alfabe kelimesi ......... olarak yazılır.', 'alphabet', '', { gorsel: nesne('alfabe-tablosu') });
  dyEkle(s, 'ar-a18', '"Pink" kelimesi siyah rengi ifade eder.', 'Yanlış', '', { gorsel: nesne('pembe-cicek') });
  boslukEkle(s, 'ar-a19', 'Kurbağanın rengi olan yeşil İngilizcede ......... olarak adlandırılır.', 'green', '', { gorsel: nesne('yesil-kurbaga') });
  dyEkle(s, 'ar-a20', '"Black" kelimesi beyaz anlamına gelir.', 'Yanlış', '', { gorsel: nesne('siyah-sapka') });
  boslukEkle(s, 'ar-a21', 'Gökyüzündeki beyaz bulutlar İngilizcede "........." renktedir.', 'white', '', { gorsel: nesne('beyaz-bulut') });
  dyEkle(s, 'ar-a22', 'İngilizce "C" harfi "Si" şeklinde okunur.', 'Doğru', '', { gorsel: harf('C', 'yellow') });
  boslukEkle(s, 'ar-a23', '"Purple" kelimesi Türkçe olarak ......... rengidir.', 'mor', '', { gorsel: nesne('mor-balon') });
  dyEkle(s, 'ar-a24', '"Orange" kelimesi hem meyve olan portakal hem de turuncu renk için kullanılır.', 'Doğru', '', { gorsel: nesne('turuncu-top') });
  boslukEkle(s, 'ar-a25', 'Ağacın gövdesi İngilizcede "........." renktedir.', 'brown', '', { gorsel: nesne('kahverengi-agac') });
  boslukEkle(s, 'ar-a26', 'İngilizcede "D" harfi ......... diye okunur.', 'Di', '', { gorsel: harf('D', 'green') });
  dyEkle(s, 'ar-a27', '"Gray" kelimesi gri rengi ifade eder.', 'Doğru', '', { gorsel: nesne('gri-fil') });
  boslukEkle(s, 'ar-a28', 'Çileğin rengi İngilizcede ......... kelimesidir.', 'red', '', { gorsel: nesne('kirmizi-cilek') });
  dyEkle(s, 'ar-a29', 'İngilizce alfabede 26 harf vardır.', 'Doğru', '', { gorsel: nesne('alfabe-tablosu') });
  boslukEkle(s, 'ar-a30', 'Limonun rengi İngilizcede ......... kelimesidir.', 'yellow', '', { gorsel: nesne('sari-limon') });
  dyEkle(s, 'ar-a31', '"White" kelimesi siyah anlamına gelir.', 'Yanlış', '', { gorsel: nesne('beyaz-kar') });
  boslukEkle(s, 'ar-a32', 'Denizin rengi İngilizcede ......... kelimesidir.', 'blue', '', { gorsel: nesne('mavi-deniz') });
  dyEkle(s, 'ar-a33', '"E" harfi İngilizcede "İ" diye okunur.', 'Doğru', '', { gorsel: harf('E', 'pink') });
  boslukEkle(s, 'ar-a34', 'Üzümün rengi İngilizcede ......... kelimesidir.', 'purple', '', { gorsel: nesne('mor-uzum') });
  dyEkle(s, 'ar-a35', 'Renkler İngilizcede "Colors" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('renkli-boya-kutusu') });
  boslukEkle(s, 'ar-a36', 'Portakalın rengi İngilizcede ......... kelimesidir.', 'orange', '', { gorsel: nesne('turuncu-portakal') });
  dyEkle(s, 'ar-a37', '"F" harfi "Ef" şeklinde okunur.', 'Doğru', '', { gorsel: harf('F', 'blue') });
  boslukEkle(s, 'ar-a38', 'Çimenin rengi İngilizcede ......... kelimesidir.', 'green', '', { gorsel: nesne('yesil-cimen') });
  dyEkle(s, 'ar-a39', '"Pink" kelimesi pembe rengi ifade eder.', 'Doğru', '', { gorsel: nesne('pembe-cicek') });
  boslukEkle(s, 'ar-a40', 'Gökyüzünün rengi İngilizcede ......... kelimesidir.', 'blue', '', { gorsel: nesne('mavi-gokyuzu') });
  dyEkle(s, 'ar-a41', 'İngilizce alfabenin ikinci harfi "B"dir.', 'Doğru', '', { gorsel: harf('B', 'red') });
  boslukEkle(s, 'ar-a42', 'Karanlık rengin İngilizcesi ......... kelimesidir.', 'black', '', { gorsel: nesne('siyah-gece') });
  dyEkle(s, 'ar-a43', '"G" harfi "Ci" şeklinde okunur.', 'Doğru', '', { gorsel: harf('G', 'green') });
  boslukEkle(s, 'ar-a44', 'Gülün rengi İngilizcede ......... kelimesidir.', 'red', '', { gorsel: nesne('kirmizi-gul') });
  dyEkle(s, 'ar-a45', '"Brown" kelimesi kahverengi rengi ifade eder.', 'Doğru', '', { gorsel: nesne('kahverengi-ayi') });
  boslukEkle(s, 'ar-a46', 'Karın rengi İngilizcede ......... kelimesidir.', 'white', '', { gorsel: nesne('beyaz-kar') });
  dyEkle(s, 'ar-a47', 'İngilizcede "H" harfi "Eyc" diye okunur.', 'Doğru', '', { gorsel: harf('H', 'orange') });
  boslukEkle(s, 'ar-a48', 'Muzun kabuğu İngilizcede ......... renktedir.', 'yellow', '', { gorsel: nesne('sari-muz') });
  dyEkle(s, 'ar-a49', '"Purple" ve "Pink" farklı renklerdir.', 'Doğru', '', { gorsel: grup(['mor-uzum', 'pembe-cicek'], 'renkler') });
  boslukEkle(s, 'ar-a50', 'İngilizce alfabenin üçüncü harfi ......... harfidir.', 'C', '', { gorsel: harf('C', 'yellow') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ar-t1', "Ayşe'nin elindeki elmanın rengi İngilizcede nasıl söylenir?", 'Red', ['Blue', 'Yellow', 'Red', 'Green'], '', { gorsel: nesne('kirmizi-elma') });
  e('ar-t2', 'Denizin ve gökyüzünün rengi olan mavi, İngilizcede nedir?', 'Blue', ['Blue', 'Orange', 'Black', 'Pink'], '', { gorsel: nesne('mavi-deniz') });
  e('ar-t3', "Berk'in çizdiği güneşin rengi İngilizcede hangi kelimeyle ifade edilir?", 'Yellow', ['Red', 'Yellow', 'Purple', 'White'], '', { gorsel: nesne('sari-gunes') });
  e('ar-t4', 'Ağaçların ve yaprakların rengi olan "yeşil" kelimesinin İngilizcesi nedir?', 'Green', ['Green', 'Blue', 'Brown', 'Orange'], '', { gorsel: nesne('yesil-orman') });
  e('ar-t5', "Ali'nin çok sevdiği basketbol topunun rengi (turuncu) İngilizcede nedir?", 'Orange', ['Yellow', 'Pink', 'Orange', 'Black'], '', { gorsel: nesne('turuncu-basketbol') });
  e('ar-t6', 'Gökyüzünde süzülen pembe uçurtmanın rengi İngilizcede nasıl söylenir?', 'Pink', ['Purple', 'Pink', 'White', 'Green'], '', { gorsel: nesne('pembe-ucurtma') });
  e('ar-t7', 'Minik siyah kedinin rengi İngilizcede hangi kelimedir?', 'Black', ['White', 'Brown', 'Black', 'Red'], '', { gorsel: nesne('siyah-kedi') });
  e('ar-t8', 'Karlar üstünde zıplayan bembeyaz tavşanın rengi İngilizcede nedir?', 'White', ['White', 'Black', 'Blue', 'Yellow'], '', { gorsel: nesne('beyaz-tavsan') });
  e('ar-t9', "Fatma'nın çok sevdiği mor üzümlerin rengi İngilizcede nasıl yazılır?", 'Purple', ['Green', 'Orange', 'Pink', 'Purple'], '', { gorsel: nesne('mor-uzum-salkimi') });
  e('ar-t10', '"Brown" kelimesinin Türkçedeki anlamı hangi renktir?', 'Kahverengi', ['Mavi', 'Kahverengi', 'Sarı', 'Kırmızı'], '', { gorsel: nesne('kahverengi-cikolata') });
  e('ar-t11', 'İngilizce alfabenin (Alphabet) ilk harfi aşağıdakilerden hangisidir?', 'A', ['B', 'C', 'A', 'D'], '', { gorsel: nesne('alfabe-kupleri') });
  e('ar-t12', 'İngilizcede "Renkler" kelimesinin karşılığı aşağıdakilerden hangisidir?', 'Colors', ['Numbers', 'Colors', 'Animals', 'Books'], '', { gorsel: nesne('renkli-boya-kutusu') });
  e('ar-t13', "İngilizcede 'B' harfi alfabeyi okurken nasıl seslendirilir?", 'Bi', ['Ey', 'Si', 'Bi', 'Di'], '', { gorsel: nesne('abc-harfleri') });
  e('ar-t14', 'İngilizcede "Green" ve "Red" kelimeleri sırasıyla hangi renklerdir?', 'Yeşil ve Kırmızı', ['Mavi ve Sarı', 'Yeşil ve Kırmızı', 'Sarı ve Turuncu', 'Mor ve Pembe'], '', { gorsel: nesne('yesil-kirmizi-elma') });
  e('ar-t15', '"Blue car" ifadesi Türkçede ne anlama gelir?', 'Mavi araba', ['Kırmızı araba', 'Yeşil araba', 'Mavi araba', 'Sarı araba'], '', { gorsel: nesne('mavi-araba') });
  e('ar-t16', '"Yellow" kelimesi hangi hayvanın rengini çok güzel anlatır?', 'Civciv', ['Karga', 'Civciv', 'Fil', 'Timsah'], '', { gorsel: nesne('sari-civciv') });
  e('ar-t17', 'Piyanonun tuşları hangi iki renktedir?', 'Black and White', ['Red and Blue', 'Black and White', 'Pink and Purple', 'Green and Yellow'], '', { gorsel: nesne('piyano-tuslari') });
  e('ar-t18', 'Hem bir meyve adı hem de bir renk adı olan İngilizce kelime hangisidir?', 'Orange', ['Apple', 'Banana', 'Orange', 'Melon'], '', { gorsel: nesne('portakal-resmi') });
  e('ar-t19', 'Hangi seçenekteki eşleştirme YANLIŞTIR?', 'Green = Sarı', ['Red = Kırmızı', 'Blue = Mavi', 'Green = Sarı', 'Pink = Pembe'], 'Green yeşil demektir!', { gorsel: nesne('renk-paleti'), sasirtma: true });
  e('ar-t20', 'Çiftlikteki kahverengi atın rengi İngilizce hangi kelimeyle ifade edilir?', 'Brown', ['Brown', 'Purple', 'White', 'Black'], '', { gorsel: nesne('kahverengi-at') });
  e('ar-t21', 'İngilizce şarkılarda duyduğumuz "A, B, C" harflerinin doğru okunuşu nasıldır?', 'Ey, Bi, Si', ['A, Be, Ce', 'Ey, Bi, Si', 'E, B, S', 'İ, Bi, C'], '', { gorsel: nesne('ingilizce-tahta') });
  e('ar-t22', '"Purple" kelimesinin Türkçe anlamı nedir?', 'Mor', ['Pembe', 'Siyah', 'Mor', 'Kırmızı'], '', { gorsel: nesne('mor-menekse') });
  e('ar-t23', 'Berk\'in takımının renkleri "Yellow and Blue"dur. Bunlar hangi renklerdir?', 'Sarı ve Mavi', ['Sarı ve Mavi', 'Kırmızı ve Beyaz', 'Siyah ve Beyaz', 'Yeşil ve Turuncu'], '', { gorsel: nesne('sari-mavi-forma') });
  e('ar-t24', '"Blue sky, white clouds" cümlesinde geçen renkler sırasıyla hangileridir?', 'Mavi ve Beyaz', ['Siyah ve Yeşil', 'Mavi ve Beyaz', 'Sarı ve Kırmızı', 'Mor ve Pembe'], '', { gorsel: nesne('mavi-gokyuzu-bulut') });
  e('ar-t25', 'Aşağıdaki renklerden hangisi bir gökkuşağında bulunmaz?', 'Black', ['Red', 'Blue', 'Black', 'Yellow'], '', { gorsel: nesne('gokkusagi') });
  e('ar-t26', 'İngilizcede "D" harfi nasıl okunur?', 'Di', ['Bi', 'Di', 'Si', 'Ci'], '', { gorsel: harf('D', 'green') });
  e('ar-t27', 'Çileğin rengi İngilizcede hangi kelimedir?', 'Red', ['Blue', 'Red', 'Green', 'Yellow'], '', { gorsel: nesne('kirmizi-cilek') });
  e('ar-t28', 'İngilizce alfabede kaç harf vardır?', '26', ['24', '25', '26', '28'], '', { gorsel: nesne('alfabe-tablosu') });
  e('ar-t29', 'Limonun rengi İngilizcede nedir?', 'Yellow', ['Red', 'Blue', 'Yellow', 'Green'], '', { gorsel: nesne('sari-limon') });
  e('ar-t30', '"White" kelimesinin Türkçe karşılığı nedir?', 'Beyaz', ['Siyah', 'Beyaz', 'Mavi', 'Kırmızı'], '', { gorsel: nesne('beyaz-kar') });
  e('ar-t31', 'Üzümün rengi İngilizcede hangi kelimedir?', 'Purple', ['Pink', 'Purple', 'Orange', 'Brown'], '', { gorsel: nesne('mor-uzum') });
  e('ar-t32', 'İngilizcede renkler kelimesi nedir?', 'Colors', ['Numbers', 'Colors', 'Letters', 'Animals'], '', { gorsel: nesne('renkli-boya-kutusu') });
  e('ar-t33', '"F" harfi nasıl okunur?', 'Ef', ['Ey', 'Bi', 'Ef', 'Di'], '', { gorsel: harf('F', 'blue') });
  e('ar-t34', 'Çimenin rengi İngilizcede nedir?', 'Green', ['Blue', 'Green', 'Red', 'Pink'], '', { gorsel: nesne('yesil-cimen') });
  e('ar-t35', 'Gökyüzünün rengi İngilizcede hangi kelimedir?', 'Blue', ['Green', 'Blue', 'Yellow', 'Red'], '', { gorsel: nesne('mavi-gokyuzu') });
  e('ar-t36', 'İngilizce alfabenin ikinci harfi hangisidir?', 'B', ['A', 'B', 'C', 'D'], '', { gorsel: harf('B', 'red') });
  e('ar-t37', 'Karanlık rengin İngilizcesi nedir?', 'Black', ['White', 'Black', 'Gray', 'Brown'], '', { gorsel: nesne('siyah-gece') });
  e('ar-t38', '"G" harfi nasıl okunur?', 'Ci', ['Bi', 'Di', 'Ci', 'Si'], '', { gorsel: harf('G', 'green') });
  e('ar-t39', 'Gülün rengi İngilizcede hangi kelimedir?', 'Red', ['Pink', 'Red', 'Purple', 'Orange'], '', { gorsel: nesne('kirmizi-gul') });
  e('ar-t40', 'Karın rengi İngilizcede nedir?', 'White', ['Blue', 'White', 'Gray', 'Yellow'], '', { gorsel: nesne('beyaz-kar') });
  e('ar-t41', '"H" harfi nasıl okunur?', 'Eyc', ['Ef', 'Eyc', 'Bi', 'Di'], '', { gorsel: harf('H', 'orange') });
  e('ar-t42', 'Muzun kabuğu hangi renktedir?', 'Yellow', ['Green', 'Yellow', 'Brown', 'Red'], '', { gorsel: nesne('sari-muz') });
  e('ar-t43', '🎭 "Purple" kelimesi hangi renktir?', 'Mor', ['Pembe', 'Mor', 'Kırmızı', 'Sarı'], 'Purple = mor!', { gorsel: nesne('mor-uzum'), sasirtma: true });
  e('ar-t44', 'İngilizce alfabenin üçüncü harfi hangisidir?', 'C', ['B', 'C', 'D', 'E'], '', { gorsel: harf('C', 'yellow') });
  e('ar-t45', '"Gray" kelimesinin Türkçe karşılığı nedir?', 'Gri', ['Beyaz', 'Gri', 'Siyah', 'Mavi'], '', { gorsel: nesne('gri-fil') });
  e('ar-t46', 'Portakal hem meyve hem renk adıdır. İngilizcede nedir?', 'Orange', ['Apple', 'Orange', 'Banana', 'Grape'], '', { gorsel: nesne('turuncu-portakal') });
  e('ar-t47', '"Red apple" ifadesi Türkçede ne demektir?', 'Kırmızı elma', ['Mavi elma', 'Kırmızı elma', 'Sarı elma', 'Yeşil elma'], '', { gorsel: nesne('kirmizi-elma') });
  e('ar-t48', 'Pembe rengin İngilizcesi nedir?', 'Pink', ['Purple', 'Pink', 'Red', 'Orange'], '', { gorsel: nesne('pembe-cicek') });
  e('ar-t49', 'İngilizcede "E" harfi nasıl okunur?', 'İ', ['Ey', 'İ', 'Bi', 'Si'], '', { gorsel: harf('E', 'pink') });
  e('ar-t50', 'Alfabe ve renkler konusunda en önemli kelime grubu hangisidir?', 'Colors ve Alphabet', ['Numbers only', 'Colors ve Alphabet', 'Animals only', 'Food only'], '', { gorsel: nesne('alfabe-tablosu') });
  return s;
}

export function alfabeVeRenkler(karistir) {
  return {
    id: 'alfabe-ve-renkler',
    baslik: 'Alphabet and Colors',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Güneşli bir pazartesi sabahı Ali ve Ayşe sınıflarına geldiklerinde tahtada yepyeni harfler gördüler. İngilizce alfabesi Türkçe alfabemize çok benziyordu ama okunuşları harika bir şarkı gibiydi: "A, B, C, D, E, F, G... (Ey, Bi, Si, Di, İ, Ef, Ci)".',
          gorsel: anl('ac-anlatim-1'),
        },
        {
          metin:
            'Berk elinde rengarenk bir boya kutusuyla okula geldi. Kırmızı Red, mavi Blue, sarı Yellow, yeşil Green, turuncu Orange ve pembe Pink! Sınıfları İngilizce renklerle açan harika bir gökkuşağına dönüştü.',
          gorsel: anl('ac-anlatim-2'),
        },
        {
          metin:
            'Ali, Ayşe ve Berk öğrendikleri harfleri ve renkleri birleştirerek oyun oynadılar. "Red A!", "Blue B!", "Yellow C!" Siyah Black, beyaz White ve mor Purple renkleri de oyunlarına kattılar.',
          gorsel: anl('ac-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
