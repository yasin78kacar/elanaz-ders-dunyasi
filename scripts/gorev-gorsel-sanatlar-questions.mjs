/** PARTI-GORSEL-SANATLAR — Görsel Sanatlar (100 soru) */

const KAZANIM = 'GS.2.1';

const anl = (sahne) => ({ tur: 'gorsel-sanatlar', mod: 'anlatim', sahne });
const renk = (r) => ({ tur: 'gorsel-sanatlar', mod: 'renk', renk: r });
const nesne = (n) => ({ tur: 'gorsel-sanatlar', mod: 'nesne', nesne: n });
const eser = (s) => ({ tur: 'gorsel-sanatlar', mod: 'eser', sahne: s });

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
  boslukEkle(s, 'gs-a1', 'Kırmızı, mavi ve sarı renkler ......... renklerdir.', 'ana', 'Üç temel renk vardır.', { gorsel: renk('ana-renkler') });
  boslukEkle(s, 'gs-a2', 'Turuncu, yeşil ve mor ......... renklerdir.', 'ara', 'Ana renkler karışınca oluşur.', { gorsel: renk('ara-renkler') });
  dyEkle(s, 'gs-a3', 'Kırmızı ve sarı karışınca turuncu oluşur.', 'Doğru', 'Renk karışımına bak.', { gorsel: renk('kirmizi-sari-turuncu') });
  boslukEkle(s, 'gs-a4', 'Mavi ve sarı karışınca ......... rengi oluşur.', 'yeşil', 'Doğadaki yaprak rengi.', { gorsel: renk('mavi-sari-yesil') });
  dyEkle(s, 'gs-a5', 'Sıcak renkler bizi enerjik hissettirir.', 'Doğru', 'Kırmızı, turuncu, sarı sıcaktır.', { gorsel: renk('sicak-renkler') });
  boslukEkle(s, 'gs-a6', 'Mavi, mor ve yeşil ......... renk grubundadır.', 'soğuk', 'Deniz ve gökyüzü renkleri.', { gorsel: renk('soguk-renkler') });
  dyEkle(s, 'gs-a7', 'Beyaz, tüm renkleri üzerinde toplar.', 'Doğru', 'Işığın birleşimi.', { gorsel: renk('beyaz') });
  boslukEkle(s, 'gs-a8', 'Siyah rengi ......... renklerin karışımıyla elde edilir.', 'tüm', 'Karanlık rengi.', { gorsel: renk('siyah') });
  dyEkle(s, 'gs-a9', 'Resim yaparken kullandığımız boya kutusuna palet de denir.', 'Yanlış', 'Palet renkleri karıştırma tahtasıdır.', { gorsel: nesne('palet') });
  boslukEkle(s, 'gs-a10', 'Tuval üzerine yapılan resme ......... resmi denir.', 'tuval', 'Kumaş üzerine boyama.', { gorsel: nesne('tuval') });
  dyEkle(s, 'gs-a11', 'Fırça ile boya süreriz.', 'Doğru', 'Temel malzeme.', { gorsel: nesne('firca') });
  boslukEkle(s, 'gs-a12', 'Sulu boya yaparken fırçayı ......... ile ıslatırız.', 'su', 'Boya inceltmek için.', { gorsel: nesne('sulu-boya') });
  dyEkle(s, 'gs-a13', 'Pastel boyalar parmakla da sürtülebilir.', 'Doğru', 'Yumuşak boya türü.', { gorsel: nesne('pastel') });
  boslukEkle(s, 'gs-a14', 'Kağıt, kumaş ve düğme ile yapılan sanata ......... denir.', 'kolaj', 'Yapıştırma sanatı.', { gorsel: nesne('kolaj') });
  dyEkle(s, 'gs-a15', 'Heykel üç boyutlu bir sanat eseridir.', 'Doğru', 'Yüksekliği, genişliği ve derinliği vardır.', { gorsel: nesne('heykel') });
  boslukEkle(s, 'gs-a16', 'Kil ile şekil vererek yapılan sanata ......... denir.', 'seramik', 'Çömlek yapımı da buna girer.', { gorsel: nesne('seramik') });
  dyEkle(s, 'gs-a17', 'Resimde yatay çizgiler sakinlik hissi verir.', 'Doğru', 'Çizgi türleri duygu taşır.', { gorsel: nesne('yatay-cizgi') });
  boslukEkle(s, 'gs-a18', 'Daire şekli dostluk ve birlik simgesidir.', 'Doğru', 'Yuvarlak formlar.', { gorsel: nesne('daire-form') });
  dyEkle(s, 'gs-a19', 'Üçgen şekli genellikle güç ve dikkat hissi verir.', 'Doğru', 'Keskin köşeler.', { gorsel: nesne('ucgen-form') });
  boslukEkle(s, 'gs-a20', 'Osmanlı döneminde cami duvarlarını süsleyen sanata ......... denir.', 'çini', 'Mavi-beyaz süslemeler.', { gorsel: eser('cini') });
  dyEkle(s, 'gs-a21', 'Ebru sanatında boyalar suyun üzerine dökülür.', 'Doğru', 'Su üstü boyama.', { gorsel: eser('ebru') });
  boslukEkle(s, 'gs-a22', 'Halı ve kilim dokumacılık sanatıdır.', 'Doğru', 'Geleneksel Türk sanatı.', { gorsel: eser('kilim') });
  dyEkle(s, 'gs-a23', 'Minyatür resimler çok küçük ve ayrıntılı çizilir.', 'Doğru', 'İnce fırça işi.', { gorsel: eser('minyatur') });
  boslukEkle(s, 'gs-a24', 'Müzede eserlere dokunmamalıyız.', 'Doğru', 'Sanat eserlerini korumalıyız.', { gorsel: nesne('muze') });
  dyEkle(s, 'gs-a25', 'Resim yaparken önlük giymek kıyafetimizi korur.', 'Doğru', 'Temiz çalışma alışkanlığı.', { gorsel: nesne('onluk') });
  boslukEkle(s, 'gs-a26', 'Güneş, ateş ve kırmızı elma ......... renk grubundadır.', 'sıcak', 'Enerji veren renkler.', { gorsel: renk('sicak-ornek') });
  boslukEkle(s, 'gs-a27', 'Deniz, gökyüzü ve kar ......... renk grubundadır.', 'soğuk', 'Sakinleştiren renkler.', { gorsel: renk('soguk-ornek') });
  dyEkle(s, 'gs-a28', 'Mor renk mavi ile kırmızının karışımıdır.', 'Doğru', 'Ara renk örneği.', { gorsel: renk('mor-karisim') });
  boslukEkle(s, 'gs-a29', 'Kahverengi, toprak ve ağaç gövdesinin rengidir.', 'Doğru', 'Doğal renk.', { gorsel: renk('kahverengi') });
  dyEkle(s, 'gs-a30', 'Pembe, kırmızının açık tonudur.', 'Doğru', 'Beyaz eklenince açılır.', { gorsel: renk('pembe') });
  boslukEkle(s, 'gs-a31', 'Güneş resmi yaparken en çok ......... renk kullanılır.', 'sarı', 'Güneşin rengi.', { gorsel: nesne('gunes-resmi') });
  dyEkle(s, 'gs-a32', 'Kalem ile önce çizim yapıp sonra boyamak doğru bir sıradır.', 'Doğru', 'Önce taslak, sonra boya.', { gorsel: nesne('cizim-boyama') });
  boslukEkle(s, 'gs-a33', 'Makas ile kağıt keserek kolaj yapılabilir.', 'Doğru', 'Kolaj malzemesi.', { gorsel: nesne('makas-kagit') });
  dyEkle(s, 'gs-a34', 'Parmak boyası ile elle de resim yapılabilir.', 'Doğru', 'Serbest teknik.', { gorsel: nesne('parmak-boyasi') });
  boslukEkle(s, 'gs-a35', 'Resimde ön plandaki nesneler daha ......... görünür.', 'büyük', 'Derinlik hissi.', { gorsel: nesne('on-plan') });
  dyEkle(s, 'gs-a36', 'Arka plandaki nesneler daha küçük ve soluk çizilir.', 'Doğru', 'Uzaklık hissi.', { gorsel: nesne('arka-plan') });
  boslukEkle(s, 'gs-a37', 'Simetri, iki tarafın birbirinin aynası olmasıdır.', 'Doğru', 'Kelebek kanatları gibi.', { gorsel: nesne('simetri') });
  dyEkle(s, 'gs-a38', 'Çizgi çalışması resim yapmanın temelidir.', 'Doğru', 'Her resim çizgiyle başlar.', { gorsel: nesne('cizgi-calismasi') });
  boslukEkle(s, 'gs-a39', 'Natürmort, cansız nesnelerin resmidir.', 'Doğru', 'Meyve, vazo örneği.', { gorsel: nesne('naturmort') });
  dyEkle(s, 'gs-a40', 'Manzara resmi doğa görüntülerini gösterir.', 'Doğru', 'Dağ, deniz, orman.', { gorsel: nesne('manzara') });
  boslukEkle(s, 'gs-a41', 'Portre, bir kişinin yüz resmidir.', 'Doğru', 'Özçekim de portredir.', { gorsel: nesne('portre') });
  dyEkle(s, 'gs-a42', 'Kompozisyon, resimdeki nesnelerin düzenidir.', 'Doğru', 'Yerleşim planı.', { gorsel: nesne('kompozisyon') });
  boslukEkle(s, 'gs-a43', 'Açık renkler mekânı geniş gösterir.', 'Doğru', 'Aydınlık hissi.', { gorsel: renk('acik-tonlar') });
  dyEkle(s, 'gs-a44', 'Koyu renkler mekânda derinlik hissi verir.', 'Doğru', 'Gölge alanları.', { gorsel: renk('koyu-tonlar') });
  boslukEkle(s, 'gs-a45', 'Grafiti duvarlara yapılan sokak sanatıdır.', 'Doğru', 'Şehir sanatı.', { gorsel: nesne('graffiti') });
  dyEkle(s, 'gs-a46', 'Origami kağıt katlama sanatıdır.', 'Doğru', 'Japon kağıt sanatı.', { gorsel: nesne('origami') });
  boslukEkle(s, 'gs-a47', 'Ahşap baskı tekniğinde tahta üzerine oyma yapılır.', 'Doğru', 'Baskı sanatı.', { gorsel: nesne('ahsap-baski') });
  dyEkle(s, 'gs-a48', 'Serigrafi, kalıp ile baskı yapma yöntemidir.', 'Doğru', 'Tekrarlı baskı.', { gorsel: nesne('serigrafi') });
  boslukEkle(s, 'gs-a49', 'Sanat eserlerini sergilemek için pano kullanılır.', 'Doğru', 'Sınıf panosu gibi.', { gorsel: nesne('sergi-panosu') });
  dyEkle(s, 'gs-a50', 'Elanaz resim dersinde önce fikir çizer, sonra boyar.', 'Doğru', 'Planlı çalışma.', { gorsel: nesne('elanaz-resim') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);

  e('gs-t1', 'Aşağıdakilerden hangisi ana renktir?', 'Mavi', ['Turuncu', 'Yeşil', 'Mavi', 'Mor'], 'Üç ana renkten biri.', { gorsel: renk('ana-renkler') });
  e('gs-t2', 'Kırmızı ve mavi karışınca hangi renk oluşur?', 'Mor', ['Yeşil', 'Turuncu', 'Mor', 'Kahverengi'], 'İki ana rengin karışımı.', { gorsel: renk('mor-karisim') });
  e('gs-t3', 'Hangisi sıcak renk grubundadır?', 'Turuncu', ['Mavi', 'Yeşil', 'Turuncu', 'Mor'], 'Güneş ve ateş renkleri.', { gorsel: renk('sicak-renkler') });
  e('gs-t4', 'Hangisi soğuk renk grubundadır?', 'Mavi', ['Kırmızı', 'Sarı', 'Turuncu', 'Mavi'], 'Deniz ve gökyüzü.', { gorsel: renk('soguk-renkler') });
  e('gs-t5', 'Resim yaparken renkleri karıştırmak için ne kullanılır?', 'Palet', ['Cetvel', 'Palet', 'Makas', 'Silgi'], 'Boya karıştırma tahtası.', { gorsel: nesne('palet') });
  e('gs-t6', 'Sulu boya resmi için hangi malzeme gereklidir?', 'Su ve fırça', ['Sadece kalem', 'Su ve fırça', 'Makas', 'Çekiç'], 'Boya inceltmek için.', { gorsel: nesne('sulu-boya') });
  e('gs-t7', 'Kağıt parçaları yapıştırarak yapılan sanat hangisidir?', 'Kolaj', ['Heykel', 'Kolaj', 'Ebru', 'Minyatür'], 'Yapıştırma sanatı.', { gorsel: nesne('kolaj') });
  e('gs-t8', 'Üç boyutlu sanat eserine ne denir?', 'Heykel', ['Resim', 'Heykel', 'Çizim', 'Fotoğraf'], 'Yükseklik de vardır.', { gorsel: nesne('heykel') });
  e('gs-t9', 'Su üzerine boya dökerek yapılan Türk sanatı hangisidir?', 'Ebru', ['Kolaj', 'Ebru', 'Grafiti', 'Origami'], 'Su üstü boyama.', { gorsel: eser('ebru') });
  e('gs-t10', 'Cami duvarlarını süsleyen geleneksel sanat hangisidir?', 'Çini', ['Kolaj', 'Grafiti', 'Çini', 'Origami'], 'Mavi-beyaz süsleme.', { gorsel: eser('cini') });
  e('gs-t11', 'Müzede sanat eserlerine dokunmak neden yanlıştır?', 'Eserler bozulabilir', ['Eserler çok ağırdır', 'Eserler bozulabilir', 'Eserler ıslaktır', 'Eserler çok küçüktür'], 'Koruma kuralı.', { gorsel: nesne('muze') });
  e('gs-t12', 'Resimde yatay çizgiler genellikle ne hissi verir?', 'Sakinlik', ['Korku', 'Sakinlik', 'Öfke', 'Hız'], 'Düz çizgiler.', { gorsel: nesne('yatay-cizgi') });
  e('gs-t13', 'Daire formu genellikle neyi simgeler?', 'Birlik ve dostluk', ['Korku', 'Hız', 'Birlik ve dostluk', 'Karanlık'], 'Yuvarlak formlar.', { gorsel: nesne('daire-form') });
  e('gs-t14', 'Hangisi ara renktir?', 'Turuncu', ['Kırmızı', 'Mavi', 'Sarı', 'Turuncu'], 'Ana renklerin karışımı.', { gorsel: renk('ara-renkler') });
  e('gs-t15', 'Beyaz renk tüm renkleri üzerinde toplar mı?', 'Evet', ['Hayır', 'Evet', 'Sadece siyahla', 'Sadece kırmızıyla'], 'Işık birleşimi.', { gorsel: renk('beyaz') });
  e('gs-t16', 'Pastel boya ile resim yaparken boya nasıl uygulanabilir?', 'Fırça veya parmakla', ['Sadece suyla', 'Fırça veya parmakla', 'Makasla', 'Çekiçle'], 'Yumuşak boya.', { gorsel: nesne('pastel') });
  e('gs-t17', 'Kil ile yapılan çömlek hangi sanat dalına girer?', 'Seramik', ['Resim', 'Seramik', 'Ebru', 'Minyatür'], 'Kil şekillendirme.', { gorsel: nesne('seramik') });
  e('gs-t18', 'Halı dokumak hangi sanat türüdür?', 'El sanatları', ['Heykel', 'El sanatları', 'Grafiti', 'Fotoğraf'], 'Geleneksel dokuma.', { gorsel: eser('kilim') });
  e('gs-t19', 'Resimde ön plandaki nesneler nasıl görünür?', 'Daha büyük', ['Daha küçük', 'Daha soluk', 'Daha büyük', 'Görünmez'], 'Derinlik kuralı.', { gorsel: nesne('on-plan') });
  e('gs-t20', 'Natürmort resminde genellikle ne çizilir?', 'Cansız nesneler', ['Hareketli hayvanlar', 'Cansız nesneler', 'Sadece insanlar', 'Sadece binalar'], 'Meyve, vazo örneği.', { gorsel: nesne('naturmort') });
  e('gs-t21', 'Kağıt katlayarak kuş yapmak hangi sanattır?', 'Origami', ['Kolaj', 'Origami', 'Ebru', 'Grafiti'], 'Japon kağıt sanatı.', { gorsel: nesne('origami') });
  e('gs-t22', 'Hangisi yanlıştır?', 'Mavi ve sarı karışınca mor olur', ['Kırmızı ve sarı turuncu yapar', 'Mavi ve kırmızı mor yapar', 'Mavi ve sarı karışınca mor olur', 'Beyaz renkleri açar'], 'Mavi+sarı=yeşil!', { gorsel: renk('mavi-sari-yesil'), sasirtma: true });
  e('gs-t23', 'Resim sergisinde eserler nerede gösterilir?', 'Pano veya duvar', ['Yerde', 'Pano veya duvar', 'Suda', 'Toprakta'], 'Sergileme alanı.', { gorsel: nesne('sergi-panosu') });
  e('gs-t24', 'Manzara resmi neyi gösterir?', 'Doğa görüntüleri', ['Sadece insan yüzü', 'Doğa görüntüleri', 'Sadece yazı', 'Sadece sayılar'], 'Dağ, deniz, orman.', { gorsel: nesne('manzara') });
  e('gs-t25', 'Portre resmi neyi gösterir?', 'Bir kişinin yüzü', ['Sadece hayvan', 'Bir kişinin yüzü', 'Sadece bina', 'Sadece araba'], 'Yüz çizimi.', { gorsel: nesne('portre') });
  e('gs-t26', 'Sarı ve mavi karışınca hangi renk oluşur?', 'Yeşil', ['Mor', 'Turuncu', 'Yeşil', 'Pembe'], 'Yaprak rengi.', { gorsel: renk('mavi-sari-yesil') });
  e('gs-t27', 'Kırmızı ve sarı karışınca hangi renk oluşur?', 'Turuncu', ['Yeşil', 'Turuncu', 'Mor', 'Mavi'], 'Portakal rengi.', { gorsel: renk('kirmizi-sari-turuncu') });
  e('gs-t28', 'Hangisi resim malzemesi değildir?', 'Çekiç', ['Fırça', 'Boya', 'Kağıt', 'Çekiç'], 'Ağır alet.', { gorsel: nesne('malzemeler') });
  e('gs-t29', 'Simetri ne demektir?', 'İki taraf birbirinin aynı', ['Rastgele çizim', 'İki taraf birbirinin aynı', 'Sadece tek renk', 'Sadece siyah-beyaz'], 'Kelebek kanatları.', { gorsel: nesne('simetri') });
  e('gs-t30', 'Açık tonlar mekânda ne hissi verir?', 'Genişlik', ['Darlık', 'Genişlik', 'Korku', 'Karanlık'], 'Aydınlık alan.', { gorsel: renk('acik-tonlar') });
  e('gs-t31', 'Koyu tonlar ne hissi verir?', 'Derinlik', ['Boşluk', 'Derinlik', 'Hız', 'Gürültü'], 'Gölge alanları.', { gorsel: renk('koyu-tonlar') });
  e('gs-t32', 'Minyatür resimler nasıl çizilir?', 'Çok küçük ve ayrıntılı', ['Çok büyük', 'Çok küçük ve ayrıntılı', 'Sadece tek çizgi', 'Sadece siyah'], 'İnce iş.', { gorsel: eser('minyatur') });
  e('gs-t33', 'Grafiti genellikle nerede yapılır?', 'Duvarlarda', ['Suda', 'Duvarlarda', 'Havada', 'Toprakta'], 'Sokak sanatı.', { gorsel: nesne('graffiti') });
  e('gs-t34', 'Resim yaparken önlük giymek neden önemlidir?', 'Kıyafeti korur', ['Daha hızlı boyar', 'Kıyafeti korur', 'Renkleri karıştırır', 'Fırçayı keser'], 'Temizlik.', { gorsel: nesne('onluk') });
  e('gs-t35', 'Tuval nedir?', 'Resim yapılan kumaş', ['Yemek tabağı', 'Resim yapılan kumaş', 'Müzik aleti', 'Spor topu'], 'Boyama yüzeyi.', { gorsel: nesne('tuval') });
  e('gs-t36', 'Kompozisyon ne demektir?', 'Nesnelerin düzeni', ['Sadece renk adı', 'Nesnelerin düzeni', 'Bir hayvan adı', 'Bir yemek adı'], 'Yerleşim planı.', { gorsel: nesne('kompozisyon') });
  e('gs-t37', 'Hangisi soğuk renk örneğidir?', 'Yeşil', ['Kırmızı', 'Turuncu', 'Sarı', 'Yeşil'], 'Doğa ve sakinlik.', { gorsel: renk('soguk-ornek') });
  e('gs-t38', 'Hangisi sıcak renk örneğidir?', 'Kırmızı', ['Mavi', 'Yeşil', 'Mor', 'Kırmızı'], 'Ateş ve güneş.', { gorsel: renk('sicak-ornek') });
  e('gs-t39', 'Parmak boyası ile resim yapılır mı?', 'Evet', ['Hayır', 'Evet', 'Sadece kışın', 'Sadece gece'], 'Serbest teknik.', { gorsel: nesne('parmak-boyasi') });
  e('gs-t40', 'Çizgi çalışması resim için neden önemlidir?', 'Temel oluşturur', ['Gereksizdir', 'Temel oluşturur', 'Boya bitirir', 'Kağıdı yırtar'], 'Her resim çizgiyle başlar.', { gorsel: nesne('cizgi-calismasi') });
  e('gs-t41', 'Elanaz önce taslak çizip sonra boyarsa bu doğru mudur?', 'Evet', ['Hayır', 'Evet', 'Sadece yazıda', 'Sadece müzikte'], 'Planlı çalışma.', { gorsel: nesne('elanaz-resim') });
  e('gs-t42', 'Siyah renk neyi simgeler?', 'Karanlık ve güç', ['Sadece mutluluk', 'Karanlık ve güç', 'Sadece su', 'Sadece rüzgar'], 'Koyu ton.', { gorsel: renk('siyah') });
  e('gs-t43', 'Pembe hangi rengin açık tonudur?', 'Kırmızı', ['Mavi', 'Yeşil', 'Kırmızı', 'Siyah'], 'Beyaz eklenince.', { gorsel: renk('pembe') });
  e('gs-t44', 'Ahşap baskıda ne yapılır?', 'Tahtaya oyma', ['Suya boya', 'Tahtaya oyma', 'Kil yoğurma', 'Kağıt katlama'], 'Baskı tekniği.', { gorsel: nesne('ahsap-baski') });
  e('gs-t45', 'Serigrafi ne işe yarar?', 'Tekrarlı baskı', ['Yemek pişirme', 'Tekrarlı baskı', 'Müzik çalma', 'Dans etme'], 'Kalıp baskısı.', { gorsel: nesne('serigrafi') });
  e('gs-t46', 'Arka plandaki nesneler nasıl çizilir?', 'Küçük ve soluk', ['Büyük ve parlak', 'Küçük ve soluk', 'Sadece kırmızı', 'Sadece siyah'], 'Uzaklık hissi.', { gorsel: nesne('arka-plan') });
  e('gs-t47', 'Güneş resmi için en uygun renk hangisidir?', 'Sarı', ['Mavi', 'Mor', 'Sarı', 'Siyah'], 'Güneşin rengi.', { gorsel: nesne('gunes-resmi') });
  e('gs-t48', 'Makas kolaj yapımında kullanılır mı?', 'Evet', ['Hayır', 'Evet', 'Sadece heykelde', 'Sadece ebruda'], 'Kağıt kesme.', { gorsel: nesne('makas-kagit') });
  e('gs-t49', 'Kahverengi genellikle hangi nesnelerin rengidir?', 'Toprak ve ağaç', ['Su ve buz', 'Toprak ve ağaç', 'Güneş ve ateş', 'Kar ve bulut'], 'Doğal renk.', { gorsel: renk('kahverengi') });
  e('gs-t50', 'Sanat yapmak bize ne kazandırır?', 'Yaratıcılık ve estetik duyu', ['Sadece yorgunluk', 'Yaratıcılık ve estetik duyu', 'Hiçbir şey', 'Sadece korku'], 'Sanat eğitimi.', { gorsel: nesne('sanat-atolyesi') });
  return s;
}

export function gorselSanatlar(karistir) {
  return {
    id: 'gorsel-sanatlar',
    baslik: 'Görsel Sanatlar',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elanaz resim dersinde öğretmeni renkleri anlattı. Kırmızı, mavi ve sarı ana renklerdir. Bu renkler karışınca turuncu, yeşil ve mor gibi ara renkler oluşur. Sıcak renkler bizi neşelendirir, soğuk renkler sakinleştirir.',
          gorsel: anl('renk-teorisi'),
        },
        {
          metin:
            'Sınıfta fırça, palet, tuval ve boya kutuları vardı. Elanaz sulu boya ile çalıştı. Fırçayı suya batırıp boyayı inceltti. Pastel boyalarla da gölgelendirme yaptı. Kolaj için makas ve yapıştırıcı kullandı.',
          gorsel: anl('malzemeler'),
        },
        {
          metin:
            'Öğretmen Türk sanatlarını tanıttı: Ebru, çini, kilim ve minyatür. Müzede eserlere dokunmamayı öğrendiler. Resim sergisinde panoya astıkları çalışmaları arkadaşlarıyla paylaştılar.',
          gorsel: anl('turk-sanatlari'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
