/** GOREV-ING-TEMA4A — Colors (Renkler) */

const KAZANIM = 'ING.2.4.1';

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
  boslukEkle(s, 'rk-a1', 'Kırmızı rengin İngilizcesi ......... kelimesidir.', 'red', '', { gorsel: nesne('kirmizi-elma') });
  boslukEkle(s, 'rk-a2', 'Mavi rengin İngilizce karşılığı ......... kelimesidir.', 'blue', '', { gorsel: nesne('mavi-gokyuzu') });
  dyEkle(s, 'rk-a3', 'Sarı renk İngilizcede "Yellow" olarak söylenir.', 'Doğru', '', { gorsel: nesne('sari-gunes') });
  boslukEkle(s, 'rk-a4', 'Yeşil rengin İngilizcesi ......... kelimesidir.', 'green', '', { gorsel: nesne('yesil-yaprak') });
  dyEkle(s, 'rk-a5', 'Turuncu renk İngilizcede "Orange" demektir.', 'Doğru', '', { gorsel: nesne('turuncu-portakal') });
  boslukEkle(s, 'rk-a6', 'Pembe rengin İngilizce yazılışı ......... kelimesidir.', 'pink', '', { gorsel: nesne('pembe-pamuk-seker') });
  dyEkle(s, 'rk-a7', 'Mor renk İngilizcede "Purple" olarak yazılır ve okunur.', 'Doğru', '', { gorsel: nesne('mor-uzum') });
  boslukEkle(s, 'rk-a8', 'Siyah rengin İngilizcesi ......... kelimesidir.', 'black', '', { gorsel: nesne('siyah-kedi') });
  dyEkle(s, 'rk-a9', 'Beyaz renk İngilizcede "White" demektir.', 'Doğru', '', { gorsel: nesne('beyaz-kar') });
  boslukEkle(s, 'rk-a10', 'Kahverengi kelimesinin İngilizcesi ......... kelimesidir.', 'brown', '', { gorsel: nesne('kahverengi-ayi') });
  boslukEkle(s, 'rk-a11', 'Renkler kelimesinin İngilizcesi ......... kelimesidir.', 'colors', '', { gorsel: nesne('boya-kalemleri') });
  dyEkle(s, 'rk-a12', 'İngilizcede kırmızı "Red", mavi ise "Green" demektir.', 'Yanlış', '', { gorsel: nesne('kirmizi-gul') });
  boslukEkle(s, 'rk-a13', '"Yellow" kelimesi Türkçe olarak ......... rengini anlatır.', 'sarı', '', { gorsel: nesne('sari-limon') });
  dyEkle(s, 'rk-a14', '"Blue" kelimesi Türkçe olarak mavi anlamına gelir.', 'Doğru', '', { gorsel: nesne('mavi-deniz') });
  dyEkle(s, 'rk-a15', '"Pink" kelimesi siyah rengi ifade eder.', 'Yanlış', '', { gorsel: nesne('pembe-cicek') });
  boslukEkle(s, 'rk-a16', 'Kurbağanın rengi olan yeşil İngilizcede ......... olarak adlandırılır.', 'green', '', { gorsel: nesne('yesil-kurbaga') });
  dyEkle(s, 'rk-a17', '"Black" kelimesi beyaz anlamına gelir.', 'Yanlış', '', { gorsel: nesne('siyah-sapka') });
  boslukEkle(s, 'rk-a18', 'Gökyüzündeki beyaz bulutlar İngilizcede "........." renktedir.', 'white', '', { gorsel: nesne('beyaz-bulut') });
  boslukEkle(s, 'rk-a19', '"Purple" kelimesi Türkçe olarak ......... rengidir.', 'mor', '', { gorsel: nesne('mor-balon') });
  dyEkle(s, 'rk-a20', '"Orange" kelimesi hem meyve olan portakal hem de turuncu renk için kullanılır.', 'Doğru', '', { gorsel: nesne('turuncu-top') });
  boslukEkle(s, 'rk-a21', 'Ağacın gövdesi İngilizcede "........." renktedir.', 'brown', '', { gorsel: nesne('kahverengi-agac') });
  dyEkle(s, 'rk-a22', '"Gray" kelimesi gri rengi ifade eder.', 'Doğru', '', { gorsel: nesne('gri-fil') });
  boslukEkle(s, 'rk-a23', 'Çileğin rengi İngilizcede ......... kelimesidir.', 'red', '', { gorsel: nesne('kirmizi-cilek') });
  boslukEkle(s, 'rk-a24', 'Limonun rengi İngilizcede ......... kelimesidir.', 'yellow', '', { gorsel: nesne('sari-limon') });
  dyEkle(s, 'rk-a25', 'Renkler İngilizcede "Colors" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('renkli-boya-kutusu') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('rk-t1', "Ayşe'nin elindeki elmanın rengi İngilizcede nasıl söylenir?", 'Red', ['Blue', 'Yellow', 'Red', 'Green'], '', { gorsel: nesne('kirmizi-elma') });
  e('rk-t2', 'Denizin ve gökyüzünün rengi olan mavi, İngilizcede nedir?', 'Blue', ['Blue', 'Orange', 'Black', 'Pink'], '', { gorsel: nesne('mavi-deniz') });
  e('rk-t3', "Berk'in çizdiği güneşin rengi İngilizcede hangi kelimeyle ifade edilir?", 'Yellow', ['Red', 'Yellow', 'Purple', 'White'], '', { gorsel: nesne('sari-gunes') });
  e('rk-t4', 'Ağaçların ve yaprakların rengi olan "yeşil" kelimesinin İngilizcesi nedir?', 'Green', ['Green', 'Blue', 'Brown', 'Orange'], '', { gorsel: nesne('yesil-orman') });
  e('rk-t5', "Ali'nin çok sevdiği basketbol topunun rengi (turuncu) İngilizcede nedir?", 'Orange', ['Yellow', 'Pink', 'Orange', 'Black'], '', { gorsel: nesne('turuncu-basketbol') });
  e('rk-t6', 'Gökyüzünde süzülen pembe uçurtmanın rengi İngilizcede nasıl söylenir?', 'Pink', ['Purple', 'Pink', 'White', 'Green'], '', { gorsel: nesne('pembe-ucurtma') });
  e('rk-t7', 'Minik siyah kedinin rengi İngilizcede hangi kelimedir?', 'Black', ['White', 'Brown', 'Black', 'Red'], '', { gorsel: nesne('siyah-kedi') });
  e('rk-t8', 'Karlar üstünde zıplayan bembeyaz tavşanın rengi İngilizcede nedir?', 'White', ['White', 'Black', 'Blue', 'Yellow'], '', { gorsel: nesne('beyaz-tavsan') });
  e('rk-t9', "Fatma'nın çok sevdiği mor üzümlerin rengi İngilizcede nasıl yazılır?", 'Purple', ['Green', 'Orange', 'Pink', 'Purple'], '', { gorsel: nesne('mor-uzum-salkimi') });
  e('rk-t10', '"Brown" kelimesinin Türkçedeki anlamı hangi renktir?', 'Kahverengi', ['Mavi', 'Kahverengi', 'Sarı', 'Kırmızı'], '', { gorsel: nesne('kahverengi-cikolata') });
  e('rk-t11', 'İngilizcede "Renkler" kelimesinin karşılığı aşağıdakilerden hangisidir?', 'Colors', ['Numbers', 'Colors', 'Animals', 'Books'], '', { gorsel: nesne('renkli-boya-kutusu') });
  e('rk-t12', 'İngilizcede "Green" ve "Red" kelimeleri sırasıyla hangi renklerdir?', 'Yeşil ve Kırmızı', ['Mavi ve Sarı', 'Yeşil ve Kırmızı', 'Sarı ve Turuncu', 'Mor ve Pembe'], '', { gorsel: nesne('yesil-kirmizi-elma') });
  e('rk-t13', '"Blue car" ifadesi Türkçede ne anlama gelir?', 'Mavi araba', ['Kırmızı araba', 'Yeşil araba', 'Mavi araba', 'Sarı araba'], '', { gorsel: nesne('mavi-araba') });
  e('rk-t14', '"Yellow" kelimesi hangi hayvanın rengini çok güzel anlatır?', 'Civciv', ['Karga', 'Civciv', 'Fil', 'Timsah'], '', { gorsel: nesne('sari-civciv') });
  e('rk-t15', 'Piyanonun tuşları hangi iki renktedir?', 'Black and White', ['Red and Blue', 'Black and White', 'Pink and Purple', 'Green and Yellow'], '', { gorsel: nesne('piyano-tuslari') });
  e('rk-t16', 'Hem bir meyve adı hem de bir renk adı olan İngilizce kelime hangisidir?', 'Orange', ['Apple', 'Banana', 'Orange', 'Melon'], '', { gorsel: nesne('portakal-resmi') });
  e('rk-t17', 'Hangi seçenekteki eşleştirme YANLIŞTIR?', 'Green = Sarı', ['Red = Kırmızı', 'Blue = Mavi', 'Green = Sarı', 'Pink = Pembe'], 'Green yeşil demektir!', { gorsel: nesne('renk-paleti'), sasirtma: true });
  e('rk-t18', 'Çiftlikteki kahverengi atın rengi İngilizce hangi kelimeyle ifade edilir?', 'Brown', ['Brown', 'Purple', 'White', 'Black'], '', { gorsel: nesne('kahverengi-at') });
  e('rk-t19', '"Purple" kelimesinin Türkçe anlamı nedir?', 'Mor', ['Pembe', 'Siyah', 'Mor', 'Kırmızı'], '', { gorsel: nesne('mor-menekse') });
  e('rk-t20', 'Berk\'in takımının renkleri "Yellow and Blue"dur. Bunlar hangi renklerdir?', 'Sarı ve Mavi', ['Sarı ve Mavi', 'Kırmızı ve Beyaz', 'Siyah ve Beyaz', 'Yeşil ve Turuncu'], '', { gorsel: nesne('sari-mavi-forma') });
  e('rk-t21', '"Blue sky, white clouds" cümlesinde geçen renkler sırasıyla hangileridir?', 'Mavi ve Beyaz', ['Siyah ve Yeşil', 'Mavi ve Beyaz', 'Sarı ve Kırmızı', 'Mor ve Pembe'], '', { gorsel: nesne('mavi-gokyuzu-bulut') });
  e('rk-t22', 'Aşağıdaki renklerden hangisi bir gökkuşağında bulunmaz?', 'Black', ['Red', 'Blue', 'Black', 'Yellow'], '', { gorsel: nesne('gokkusagi') });
  e('rk-t23', 'Çileğin rengi İngilizcede hangi kelimedir?', 'Red', ['Blue', 'Red', 'Green', 'Yellow'], '', { gorsel: nesne('kirmizi-cilek') });
  e('rk-t24', 'Limonun rengi İngilizcede nedir?', 'Yellow', ['Red', 'Blue', 'Yellow', 'Green'], '', { gorsel: nesne('sari-limon') });
  e('rk-t25', 'Pembe rengin İngilizcesi nedir?', 'Pink', ['Purple', 'Pink', 'Red', 'Orange'], '', { gorsel: nesne('pembe-cicek') });
  return s;
}

export function renkler(karistir) {
  return {
    id: 'renkler',
    baslik: 'Colors',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Berk elinde rengarenk bir boya kutusuyla okula geldi. Kırmızı Red, mavi Blue, sarı Yellow, yeşil Green, turuncu Orange ve pembe Pink! Sınıfları İngilizce renklerle açan harika bir gökkuşağına dönüştü.',
          gorsel: anl('rk-anlatim-1'),
        },
        {
          metin:
            'Ali, Ayşe ve Berk öğrendikleri renkleri birleştirerek oyun oynadılar. "Red apple!", "Blue sky!", "Yellow sun!" Siyah Black, beyaz White ve mor Purple renkleri de oyunlarına kattılar.',
          gorsel: anl('rk-anlatim-2'),
        },
        {
          metin:
            'Öğretmenleri tahtaya bir gökkuşağı çizdi. "Colors are beautiful!" dedi. Çocuklar renkleri İngilizce söyleyerek sınıfı renkli bir dünyaya çevirdiler.',
          gorsel: anl('rk-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
