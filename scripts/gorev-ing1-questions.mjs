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
