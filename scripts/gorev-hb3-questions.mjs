/** GOREV-HB3 — Ülkemiz ve Vatandaşlık, Tarih ve Kültürümüz, Doğal Afetler ve Korunma */

const KAZANIM = {
  UV: 'HB.2.3.1',
  TK: 'HB.2.3.2',
  DA: 'HB.2.3.3',
};

function anl(sahne) {
  return { tur: 'hb', mod: 'anlatim', sahne };
}
function nesne(n, vurgu) {
  return { tur: 'hb', mod: 'nesne', nesne: n, vurgu };
}
function grup(nesneler, vurgu) {
  return { tur: 'hb', mod: 'grup', nesneler, vurgu };
}
function sahne(s, ozellik) {
  return { tur: 'hb', mod: 'sahne', sahne: s, ozellik };
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: extra.kazanim ?? KAZANIM.UV,
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
    kazanimKodu: extra.kazanim ?? KAZANIM.UV,
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
    kazanimKodu: extra.kazanim ?? KAZANIM.UV,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

// ─── Ülkemiz ve Vatandaşlık ─────────────────────────────────────────────────

function ulkemizVeVatandaslikAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.UV };
  boslukEkle(s, 'uv-a1', 'Ülkemizin adı ......... .', 'Türkiye', '', { gorsel: nesne('turkiye-haritasi'), ...k });
  boslukEkle(s, 'uv-a2', "Türkiye'nin başkenti ......... şehridir.", 'Ankara', '', { gorsel: nesne('ankara'), ...k });
  boslukEkle(s, 'uv-a3', 'Bayrağımızın renkleri ......... ve ......... .', 'kırmızı ve beyaz', '', {
    gorsel: nesne('bayrak'),
    alternatifCevaplar: ['kırmızı, beyaz', 'beyaz ve kırmızı'],
    ...k,
  });
  boslukEkle(s, 'uv-a4', 'Türk bayrağında ......... ve ......... bulunur.', 'ay ve yıldız', '', {
    gorsel: nesne('ay-yildiz'),
    alternatifCevaplar: ['ay, yıldız', 'yıldız ve ay'],
    ...k,
  });
  boslukEkle(s, 'uv-a5', 'Çöpleri yerlere atmamak iyi bir ......... görevidir.', 'vatandaşlık', '', { gorsel: nesne('cop'), ...k });
  boslukEkle(s, 'uv-a6', "Millî marşımızın adı ......... Marşı'dır.", 'İstiklal', '', { gorsel: nesne('istiklal-marasi'), ...k });
  boslukEkle(s, 'uv-a7', 'İstiklal Marşı okunurken ......... duruşuna geçeriz.', 'hazır ol', '', { gorsel: nesne('bayrak-toreni'), ...k });
  dyEkle(s, 'uv-a8', 'Boşa akan suları kapatmak vatanımızı sevdiğimizin göstergesidir.', 'Doğru', '', { gorsel: nesne('musluk'), ...k });
  dyEkle(s, 'uv-a9', 'Çevreyi korumak sadece büyüklerin görevidir.', 'Yanlış', '', { gorsel: nesne('fidan'), ...k });
  dyEkle(s, 'uv-a10', 'Hastaneler ve okullar tüm vatandaşların ortak kullanım alanıdır.', 'Doğru', '', { gorsel: nesne('hastane'), ...k });
  boslukEkle(s, 'uv-a11', 'Kağıt, cam ve plastik atıkları ......... kutusuna atmalıyız.', 'geri dönüşüm', '', { gorsel: nesne('geri-donusum'), ...k });
  dyEkle(s, 'uv-a12', 'Sokak hayvanlarına iyi davranmak iyi vatandaşlık örneğidir.', 'Doğru', '', { gorsel: sahne('sokak-hayvani', 'yardim'), ...k });
  dyEkle(s, 'uv-a13', 'Toplu taşıma araçlarına binerken sıramızı beklemeliyiz.', 'Doğru', '', { gorsel: nesne('otobus'), ...k });
  dyEkle(s, 'uv-a14', 'Parktaki banklara zarar vermek iyi vatandaşın davranışıdır.', 'Yanlış', '', { gorsel: nesne('park'), ...k });
  dyEkle(s, 'uv-a15', 'İstiklal Marşı okunurken arkadaşlarımızla konuşabiliriz.', 'Yanlış', '', { gorsel: nesne('saygi-durusu'), ...k });
  dyEkle(s, 'uv-a16', "Ülkemizi yönetenler başkentimiz İstanbul'da çalışır.", 'Yanlış', '', { gorsel: nesne('ankara'), ...k });
  dyEkle(s, 'uv-a17', 'Gereksiz yanan lambaları söndürerek ülkemizin enerjisini korumuş oluruz.', 'Doğru', '', { gorsel: nesne('lamba'), ...k });
  boslukEkle(s, 'uv-a18', 'Kütüphanedeki kitaplara zarar vermemeliyiz çünkü onlar ......... malıdır.', 'ortak', '', {
    gorsel: nesne('kutuphane'),
    alternatifCevaplar: ['kamu', 'ortak/kamu'],
    ...k,
  });
  boslukEkle(s, 'uv-a19', 'İyi vatandaşlar birbirlerine karşı her zaman ......... ve nazik olmalıdır.', 'saygılı', '', { gorsel: nesne('yardimlasma'), ...k });
  dyEkle(s, 'uv-a20', "İstiklal Marşı'mızın şairi Mehmet Akif Ersoy'dur.", 'Doğru', '', { gorsel: nesne('mehmet-akif'), ...k });
  boslukEkle(s, 'uv-a21', 'Bayrağımız bizim ......... sembolümüzdür.', 'bağımsızlık', '', { gorsel: nesne('bayrak'), ...k });
  boslukEkle(s, 'uv-a22', 'Büyüklerimiz seçimlerde ......... kullanarak vatandaşlık görevini yapar.', 'oy', '', { gorsel: nesne('secim'), ...k });
  dyEkle(s, 'uv-a23', 'Yiyebileceğimiz kadar yemek almak israfı önler.', 'Doğru', '', { gorsel: nesne('tabak'), ...k });
  dyEkle(s, 'uv-a24', 'Kurallara uymak bizi daha iyi vatandaş yapar.', 'Doğru', '', { gorsel: nesne('kirmizi-isik'), ...k });
  boslukEkle(s, 'uv-a25', 'Bizler bu ülkenin mutlu ......... olarak ülkemizi çok seviyoruz.', 'çocukları', '', {
    gorsel: nesne('cocuk'),
    alternatifCevaplar: ['çocuklarıyız', 'çocuklar'],
    ...k,
  });
  return s;
}

function ulkemizVeVatandaslikTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.UV };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('uv-t1', 'Ülkemizin adı nedir?', 'Türkiye', ['Ankara', 'İstanbul', 'Türkiye', 'Avrupa'], '', { gorsel: nesne('turkiye-haritasi') });
  e('uv-t2', 'Bayrağımızın renkleri hangi seçenekte doğru verilmiştir?', 'Kırmızı - Beyaz', ['Kırmızı - Beyaz', 'Sarı - Lacivert', 'Siyah - Beyaz', 'Mavi - Kırmızı'], '', { gorsel: nesne('bayrak') });
  e('uv-t3', "Türkiye'nin başkenti neresidir?", 'Ankara', ['İzmir', 'Antalya', 'Ankara', 'İstanbul'], '', { gorsel: nesne('meclis') });
  e('uv-t4', 'Okulda hep bir ağızdan söylediğimiz marşımızın adı nedir?', 'İstiklal Marşı', ['Gençlik Marşı', 'İstiklal Marşı', 'Çocuk Şarkısı', 'Okul Marşı'], '', { gorsel: nesne('bayrak-toreni') });
  e('uv-t5', 'İstiklal Marşı okunurken nasıl durmalıyız?', 'Hazır ol duruşunda saygıyla', ['Kollarımızı bağlamalıyız', 'Arkadaşlarımızla sohbet', 'Zıplamalıyız', 'Hazır ol duruşunda saygıyla'], '', { gorsel: nesne('saygi-durusu') });
  e('uv-t6', "İstiklal Marşı'mızın şairi kimdir?", 'Mehmet Akif Ersoy', ['Ali Rıza Efendi', 'Mehmet Akif Ersoy', 'Zübeyde Hanım', 'Barış Manço'], '', { gorsel: nesne('mehmet-akif') });
  e('uv-t7', 'İyi vatandaş çöplerini nereye atmalıdır?', 'Çöp kutusuna', ['Denizlere', 'Ormanlara', 'Çöp kutusuna', 'Sokağa'], '', { gorsel: nesne('cop') });
  e('uv-t8', 'Hangisi iyi vatandaşın özelliğidir?', 'Ağaç dikmek ve doğayı korumak', ['Suyu boşa harcamak', 'Ağaç dikmek ve doğayı korumak', 'Ortak eşyalara zarar vermek', 'Kurallara uymamak'], '', { gorsel: nesne('fidan') });
  e('uv-t9', 'Dişlerimizi fırçalarken suyu açık bırakmamak neyin göstergesidir?', 'Kaynakları koruyan iyi vatandaş olduğumuzun', ['Tembel olduğumuzun', 'Kaynakları koruyan iyi vatandaş olduğumuzun', 'Suyu sevmediğimizin', 'Bilmediğimizin'], '', { gorsel: nesne('musluk') });
  e('uv-t10', 'Atıkları geri dönüşüme vermek ülkemize nasıl fayda sağlar?', 'Kaynakları korumamızı sağlar', ['Hiçbir fayda yok', 'Çöplüğe dönmesine neden olur', 'Kaynakları korumamızı sağlar', 'Ülkemizi yorar'], '', { gorsel: nesne('geri-donusum') });
  e('uv-t11', 'Bayrağımızdaki şekiller nelerdir?', 'Ay ve Yıldız', ['Güneş ve Bulut', 'Çiçek ve Böcek', 'Ay ve Yıldız', 'Kalp ve Yıldız'], '', { gorsel: nesne('ay-yildiz') });
  e('uv-t12', 'Otobüs beklerken ne yapmalıyız?', 'Sıramızı beklemek', ['Sıramızı beklemek', 'İterek öne geçmek', 'Otobüsün önüne atlamak', 'Bağırarak şarkı söylemek'], '', { gorsel: nesne('otobus') });
  e('uv-t13', 'Ödünç aldığımız kitabı nasıl kullanmalıyız?', 'Özenle okuyup zamanında iade etmeliyiz', ['Sayfalarını yırtmalıyız', 'Resim çizmeliyiz', 'Özenle okuyup zamanında iade etmeliyiz', 'Kaybetmeliyiz'], '', { gorsel: nesne('kutuphane') });
  e('uv-t14', 'Gündüz lambayı kapatmak nasıl bir davranıştır?', 'Enerji tasarrufu sağlayan örnek davranıştır', ['Enerji tasarrufu sağlayan örnek davranıştır', 'Yanlıştır', 'Komiktir', 'Kötüdür'], '', { gorsel: nesne('lamba') });
  e('uv-t15', 'Parklardaki oyuncakları nasıl kullanmalıyız?', 'Dikkatli kullanmalı zarar vermemeliyiz', ['Sadece biz oynamalıyız', 'Dikkatli kullanmalı zarar vermemeliyiz', 'Kırıp evimize götürmeliyiz', 'Başkalarını engellemeliyiz'], '', { gorsel: nesne('park') });
  e('uv-t16', 'Kantinden alışveriş yaparken ne yapmalıyız?', 'Sıraya girmeliyiz', ['Sıraya girmeliyiz', 'Öne geçmeliyiz', 'Bağırmalıyız', 'İtmeliyiz'], '', { gorsel: nesne('sira') });
  e('uv-t17', 'Otobüste yaşlı teyze gördüğümüzde ne yapmalıyız?', 'Ona yer vermeliyiz', ['Görmezden gelmeliyiz', 'Ona yer vermeliyiz', 'Daha çok yayılmalıyız', 'Gözlerimizi kapatmalıyız'], '', { gorsel: nesne('yasli-teyze') });
  e('uv-t18', 'Hangisi çevreye karşı sorumluluğumuzdur?', 'Bitkileri sulamak ve korumak', ['Çiçekleri koparmak', 'Çimleri ezmek', 'Bitkileri sulamak ve korumak', 'Dalları kırmak'], '', { gorsel: nesne('cicek') });
  e('uv-t19', 'Kurallar kimlerin iyiliği için konulur?', 'Tüm vatandaşların barış ve mutluluğu için', ['Sadece büyüklerin', 'Tüm vatandaşların barış ve mutluluğu için', 'Sadece çocukların', 'Hayvanların'], '', { gorsel: nesne('turkiye-haritasi') });
  e('uv-t20', 'İsrafı önlemek için ne yapmalıyız?', 'Yiyeceğimiz kadar almalıyız', ['Çok fazla yemek almalıyız', 'Yemekleri çöpe atmalıyız', 'Yiyeceğimiz kadar almalıyız', 'Yemeklerle oynamalıyız'], '', { gorsel: nesne('tabak') });
  e('uv-t21', 'Harçlıktan kumbaraya atmak bize ne kazandırır?', 'Tasarruf alışkanlığı', ['Tasarruf alışkanlığı', 'Bizi yorar', 'Paranın kaybolmasını', 'Hiçbir işe yaramaz'], '', { gorsel: nesne('kumbara') });
  e('uv-t22', 'Yolda yürürken İstiklal Marşı duyarsak ne yapmalıyız?', 'Durup saygıyla marşımıza eşlik etmeliyiz', ['Koşarak uzaklaşmalıyız', 'Durup saygıyla marşımıza eşlik etmeliyiz', 'Kulaklarımızı kapatmalıyız', 'Telefonla konuşmalıyız'], '', { gorsel: nesne('istiklal-marasi') });
  e('uv-t23', 'Sınıf kurallarına uymak bizi neye hazırlar?', 'Toplum kurallarına uyan iyi vatandaş olmaya', ['Sporcu olmaya', 'Toplum kurallarına uyan iyi vatandaş olmaya', 'Müzisyen olmaya', 'Ressam olmaya'], '', { gorsel: nesne('sinif-kurallari') });
  e('uv-t24', 'Ülkemizi geliştirmek için ne yapmalıyız?', 'Çok çalışmalı ve görevlerimizi en iyi yapmalıyız', ['Çok çalışmalı ve görevlerimizi en iyi yapmalıyız', 'Sürekli uyumalıyız', 'Görevleri başkalarına bırakmalıyız', 'Kuralları bozmalıyız'], '', { gorsel: nesne('turkiye-kalp') });
  e('uv-t25', 'Hangi cümle yurdunu seven çocuğa aittir?', 'Ülkemi seviyor, doğayı koruyor ve çalışıyorum', ['Çevreyi hiç umursamam', 'Sadece öğretmenim varken uyarım', 'Ülkemi seviyor, doğayı koruyor ve çalışıyorum', 'Çöplerimi hep yere atarım'], '', { gorsel: nesne('cocuk') });
  return s;
}

// ─── Tarih ve Kültürümüz ────────────────────────────────────────────────────

function tarihVeKulturumuzAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.TK };
  boslukEkle(s, 'tk-a1', 'Atatürk ......... şehrinde doğmuştur.', 'Selanik', '', { gorsel: nesne('selanik'), ...k });
  boslukEkle(s, 'tk-a2', "Atatürk'ün annesinin adı ......... Hanım'dır.", 'Zübeyde', '', { gorsel: nesne('zubeyde-hanim'), ...k });
  boslukEkle(s, 'tk-a3', "Atatürk'ün babasının adı ......... Efendi'dir.", 'Ali Rıza', '', { gorsel: nesne('ali-riza'), ...k });
  boslukEkle(s, 'tk-a4', "Atatürk'ün kız kardeşinin adı ......... Hanım'dır.", 'Makbule', '', { gorsel: nesne('makbule-hanim'), ...k });
  boslukEkle(s, 'tk-a5', 'Atatürk okul yıllarında çok ......... bir öğrenciydi.', 'çalışkan', '', { gorsel: nesne('kitap'), ...k });
  boslukEkle(s, 'tk-a6', "Atatürk 23 Nisan'ı dünyadaki tüm ......... armağan etmiştir.", 'çocuklara', '', { gorsel: nesne('cocuk-dunya'), ...k });
  boslukEkle(s, 'tk-a7', "29 Ekim'de ......... Bayramı'nı kutlarız.", 'Cumhuriyet', '', { gorsel: nesne('29-ekim'), ...k });
  dyEkle(s, 'tk-a8', '23 Nisan, dünyada çocuklara armağan edilen tek bayramdır.', 'Doğru', '', { gorsel: nesne('23-nisan'), ...k });
  boslukEkle(s, 'tk-a9', 'Bayramlarda büyüklerimizi ziyaret etmek güzel bir ......... .', 'gelenektir', '', { gorsel: nesne('bayramlasma'), ...k });
  dyEkle(s, 'tk-a10', 'Evimize gelen misafirlere kolonya ve ikramlık sunarız.', 'Doğru', '', { gorsel: nesne('kolonya'), ...k });
  boslukEkle(s, 'tk-a11', 'Yöresel müzikle oynanan oyunlara ......... oyunları denir.', 'halk', '', { gorsel: nesne('davul-zurna'), ...k });
  boslukEkle(s, 'tk-a12', 'Mantı, yaprak sarması ve baklava güzel yöresel ......... örnekleridir.', 'yemeklerimize', '', {
    gorsel: nesne('baklava'),
    alternatifCevaplar: ['yemekler', 'yemeklerimiz'],
    ...k,
  });
  dyEkle(s, 'tk-a13', 'Bayramlarda büyüklerin elini öpmek sevgi ve saygımızı gösterir.', 'Doğru', '', { gorsel: nesne('el-opme'), ...k });
  dyEkle(s, 'tk-a14', 'Karagöz ve Hacivat gölge oyunu kültürümüzün neşeli parçasıdır.', 'Doğru', '', { gorsel: nesne('karagoz'), ...k });
  boslukEkle(s, 'tk-a15', 'Düğünler ve asker uğurlamaları milletimizin güzel ......... arasındadır.', 'gelenekleri', '', { gorsel: nesne('dugun'), alternatifCevaplar: ['gelenek'], ...k });
  dyEkle(s, 'tk-a16', 'Hastalanan komşularımıza uğramak kültürümüzde önemlidir.', 'Doğru', '', { gorsel: nesne('hasta-ziyaret'), ...k });
  boslukEkle(s, 'tk-a17', 'Akıllı fıkralarıyla güldüren büyüğümüz ......... Hoca\'dır.', 'Nasreddin', '', { gorsel: nesne('nasreddin'), ...k });
  dyEkle(s, 'tk-a18', "19 Mayıs'ta Atatürk'ü Anma, Gençlik ve Spor Bayramı'nı kutlarız.", 'Doğru', '', { gorsel: nesne('19-mayis'), ...k });
  boslukEkle(s, 'tk-a19', 'Bebekleri uyutmak için söylenen ezgilere ......... denir.', 'ninni', '', { gorsel: nesne('ninni'), ...k });
  boslukEkle(s, 'tk-a20', "Atatürk'ün Ankara'daki anıt mezarının adı ......... .", 'Anıtkabir', '', { gorsel: nesne('anitkabir'), ...k });
  dyEkle(s, 'tk-a21', 'Millî bayramlarda sınıfımızı süslemek bizi mutlu eder.', 'Doğru', '', { gorsel: nesne('sinif-susleme'), ...k });
  dyEkle(s, 'tk-a22', "30 Ağustos'ta Zafer Bayramı vardır.", 'Doğru', '', { gorsel: nesne('30-agustos'), ...k });
  boslukEkle(s, 'tk-a23', 'El dokuması ......... evlerimizi süsleyen kültürel eşyalardır.', 'halılar', '', {
    gorsel: nesne('kilim'),
    alternatifCevaplar: ['kilimler', 'halılar/kilimler'],
    ...k,
  });
  boslukEkle(s, 'tk-a24', 'Horon, zeybek, halay en çok bilinen ......... oyunlarımızdır.', 'halk', '', { gorsel: nesne('zeybek'), ...k });
  boslukEkle(s, 'tk-a25', 'Akrabalarımızla bir araya geldiğimiz bayramlar bizi sevgiyle ......... .', 'bağlar', '', { gorsel: nesne('aile'), ...k });
  return s;
}

function tarihVeKulturumuzTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.TK };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('tk-t1', 'Atatürk hangi şehirde doğmuştur?', 'Selanik', ['Ankara', 'İzmir', 'Selanik', 'İstanbul'], '', { gorsel: nesne('selanik') });
  e('tk-t2', "Atatürk'ün annesinin adı nedir?", 'Zübeyde Hanım', ['Fatma Hanım', 'Makbule Hanım', 'Zübeyde Hanım', 'Ayşe Hanım'], '', { gorsel: nesne('zubeyde-hanim') });
  e('tk-t3', "Atatürk'ün babasının adı nedir?", 'Ali Rıza Efendi', ['Ali Rıza Efendi', 'Mehmet Efendi', 'Hasan Tahsin', 'İsmet İnönü'], '', { gorsel: nesne('ali-riza') });
  e('tk-t4', "Atatürk 23 Nisan'ı kime armağan etmiştir?", 'Dünyadaki tüm çocuklara', ['Tüm yetişkinlere', 'Dünyadaki tüm çocuklara', 'Sadece öğretmenlere', 'Mühendislere'], '', { gorsel: nesne('23-nisan') });
  e('tk-t5', 'Anıtkabir hangi şehrimizdedir?', 'Ankara', ['Ankara', 'İstanbul', 'Selanik', 'Antalya'], '', { gorsel: nesne('anitkabir') });
  e('tk-t6', "29 Ekim'de hangi bayramı kutlarız?", 'Cumhuriyet Bayramı', ['Zafer Bayramı', 'Cumhuriyet Bayramı', 'Doğa Bayramı', 'Gençlik Bayramı'], '', { gorsel: nesne('29-ekim') });
  e('tk-t7', 'Yöresel kıyafetlerle oynanan oyunlara ne denir?', 'Halk Oyunları', ['Masa Oyunları', 'Halk Oyunları', 'Bilgisayar Oyunları', 'Zeka Oyunları'], '', { gorsel: nesne('folklor') });
  e('tk-t8', 'Hangisi geleneksel yiyeceğimizdir?', 'Mantı', ['Mantı', 'Pizza', 'Hamburger', 'Sosisli sandviç'], '', { gorsel: nesne('yemek') });
  e('tk-t9', 'Dinî bayramlarda büyüklerimizi ziyarette ne yaparız?', 'Ellerini öper, bayramlarını kutlarız', ['Ellerini öper, bayramlarını kutlarız', 'Konuşmadan otururuz', 'Sadece oyun oynarız', 'Hemen döneriz'], '', { gorsel: nesne('bayramlasma') });
  e('tk-t10', 'Misafire ne ikram ederiz?', 'Kolonya ve lokum', ['Eski eşyalar', 'Sadece su', 'Kolonya ve lokum', 'Meyve kabukları'], '', { gorsel: nesne('kolonya') });
  e('tk-t11', "Atatürk'ün kız kardeşinin adı nedir?", 'Makbule Hanım', ['Zübeyde Hanım', 'Fatma Hanım', 'Makbule Hanım', 'Ayşe Hanım'], '', { gorsel: nesne('makbule-hanim') });
  e('tk-t12', "19 Mayıs'ta hangi bayramı kutlarız?", "Atatürk'ü Anma, Gençlik ve Spor Bayramı", ['Zafer Bayramı', 'Ulusal Egemenlik', 'Cumhuriyet', "Atatürk'ü Anma, Gençlik ve Spor Bayramı"], '', { gorsel: nesne('19-mayis') });
  e('tk-t13', 'Akıllı fıkralarıyla güldüren kültür kişimiz kimdir?', 'Nasreddin Hoca', ['Keloğlan', 'Nasreddin Hoca', 'Karagöz', 'Hacivat'], '', { gorsel: nesne('nasreddin') });
  e('tk-t14', 'Hastayı ziyarette ne söyleriz?', 'Geçmiş olsun', ['İyi yolculuklar', 'Başarılar', 'Geçmiş olsun', 'Afiyet olsun'], '', { gorsel: nesne('hasta-ziyaret') });
  e('tk-t15', 'Gölge oyununun kahramanları kimlerdir?', 'Karagöz ve Hacivat', ['Sevimli dostlar', 'Keloğlan ve Annesi', 'Karagöz ve Hacivat', 'Nasreddin Hoca ve Eşeği'], '', { gorsel: nesne('karagoz') });
  e('tk-t16', 'Evlerimizi süsleyen kültürel eşyamız hangisidir?', 'Halı ve Kilim', ['Plastik masa', 'Halı ve Kilim', 'Televizyon', 'Bilgisayar'], '', { gorsel: nesne('kilim') });
  e('tk-t17', "Atatürk'ün çocukluğu hakkında hangisi doğrudur?", 'Çok zeki ve çalışkan öğrenciydi', ['Okula gitmek istemezdi', 'Çok zeki ve çalışkan öğrenciydi', 'Sadece tatil isterdi', 'Kitapla ilgilenmezdi'], '', { gorsel: nesne('kitap') });
  e('tk-t18', 'Vatan görevine gidecek gençler için ne yapılır?', 'Sevgi dolu asker uğurlama törenleri', ['Sevgi dolu asker uğurlama törenleri', 'Hiç konuşulmaz', 'Sadece mektup yazılır', 'Yalnız bırakılır'], '', { gorsel: nesne('asker') });
  e('tk-t19', 'Misafirlere en çok ne sunarız?', 'Çay ve Ayran', ['Asitli içecekler', 'Çay ve Ayran', 'Aromalı sular', 'Soğuk kahve'], '', { gorsel: nesne('cay') });
  e('tk-t20', 'Ege bölgemizde oynanan halk oyunumuzun adı nedir?', 'Zeybek', ['Horon', 'Halay', 'Zeybek', 'Vals'], '', { gorsel: nesne('zeybek') });
  e('tk-t21', 'Bebekleri uyutmak için söylenen ezgilere ne denir?', 'Ninni', ['Okul Marşı', 'Türkü', 'Pop Müzik', 'Ninni'], '', { gorsel: nesne('ninni') });
  e('tk-t22', 'Büyüklerimize nasıl davranmalıyız?', 'Sevgi ve saygıyla', ['Umursamazca', 'Sadece uzaktan bakarak', 'Sevgi ve saygıyla', 'Dinlemeyerek'], '', { gorsel: nesne('nine') });
  e('tk-t23', "30 Ağustos'ta hangi bayramı kutlarız?", 'Zafer Bayramı', ['Cumhuriyet Bayramı', 'Zafer Bayramı', 'Çocuk Bayramı', 'Bahar Bayramı'], '', { gorsel: nesne('30-agustos') });
  e('tk-t24', 'Millî bayramlarda hangi renkleri çok kullanırız?', 'Kırmızı - Beyaz', ['Siyah - Beyaz', 'Kırmızı - Beyaz', 'Yeşil - Sarı', 'Mavi - Pembe'], '', { gorsel: nesne('sinif-susleme') });
  e('tk-t25', 'Komşularımızla ilişkimiz nasıl olmalıdır?', 'Yardımlaşmalı ve tatlı dille konuşmalıyız', ['Yardımlaşmalı ve tatlı dille konuşmalıyız', 'Hiç tanımamalıyız', 'Sadece bayramlarda kapı çalmalıyız', 'Görmezden gelmeliyiz'], '', { gorsel: nesne('komsu') });
  return s;
}

// ─── Doğal Afetler ve Korunma ───────────────────────────────────────────────

function dogalAfetlerVeKorunmaAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.DA };
  boslukEkle(s, 'da-a1', 'Yer kabuğunun sallanmasıyla oluşan doğa olayına ......... denir.', 'deprem', '', { gorsel: nesne('deprem'), ...k });
  boslukEkle(s, 'da-a2', 'Acil ihtiyaçlar için önceden hazırladığımız çantaya ......... çantası denir.', 'deprem', '', { gorsel: nesne('deprem-cantasi'), ...k });
  boslukEkle(s, 'da-a3', 'Deprem çantasında içme suyu, el feneri ve ......... bulunmalıdır.', 'düdük', '', { gorsel: nesne('duduk'), ...k });
  boslukEkle(s, 'da-a4', 'Depremde sağlam eşyanın yanında "Çök, ........., Tutun" yapmalıyız.', 'Kapan', '', { gorsel: nesne('cok-kapan-tutun'), alternatifCevaplar: ['kapan'], ...k });
  dyEkle(s, 'da-a5', 'Depremde pencerelerden ve camlardan uzak durmak önemlidir.', 'Doğru', '', { gorsel: nesne('pencere'), ...k });
  dyEkle(s, 'da-a6', 'Deprem anında asansörü kullanmak doğru değildir.', 'Doğru', '', { gorsel: nesne('asansor'), ...k });
  boslukEkle(s, 'da-a7', 'Yağmurların suları çok artırarak çevreyi doldurmasına ......... denir.', 'sel', '', { gorsel: nesne('sel'), ...k });
  boslukEkle(s, 'da-a8', 'Çok ......... dikmek sel ve heyelanda güvende kalmamızı sağlar.', 'ağaç', '', { gorsel: nesne('fidan'), ...k });
  dyEkle(s, 'da-a9', 'Ateş, çakmak veya kibritle oynamamak evde güvende kalmayı sağlar.', 'Doğru', '', { gorsel: nesne('kibrit'), ...k });
  boslukEkle(s, 'da-a10', 'Ormanda piknik bittikten sonra yaktığımız ateşi tamamen ......... .', 'söndürmeliyiz', '', { gorsel: nesne('kamp-atesi'), alternatifCevaplar: ['söndürürüz'], ...k });
  boslukEkle(s, 'da-a11', "Acil durumlar için aramamız gereken numara .........'dir.", '112', '', { gorsel: nesne('112'), cevapTipi: 'sayi', ...k });
  dyEkle(s, 'da-a12', "Yangın gördüğümüzde 112'yi arayıp itfaiye istemeliyiz.", 'Doğru', '', { gorsel: nesne('itfaiye'), ...k });
  dyEkle(s, 'da-a13', "Hastalanan biri için 112'yi arayarak ambulans çağırırız.", 'Doğru', '', { gorsel: nesne('ambulans'), ...k });
  boslukEkle(s, 'da-a14', 'Dağlardaki kar kütlelerinin aşağı hareket etmesine ......... denir.', 'çığ', '', { gorsel: nesne('cig'), ...k });
  dyEkle(s, 'da-a15', 'Çığ ihtimali olan dağlarda yüksek sesle bağırmamalıyız.', 'Doğru', '', { gorsel: nesne('dagci'), ...k });
  dyEkle(s, 'da-a16', "112'yi aradığımızda sakin kalıp adresimizi söylemeliyiz.", 'Doğru', '', { gorsel: nesne('telefon'), ...k });
  dyEkle(s, 'da-a17', "112'yi şaka yapmak için aramak doğru bir davranıştır.", 'Yanlış', '', { gorsel: nesne('cocuk'), ...k });
  boslukEkle(s, 'da-a18', 'Toprağın dağdan aşağı kaymasına heyelan (......... kayması) denir.', 'toprak', '', { gorsel: nesne('heyelan'), ...k });
  dyEkle(s, 'da-a19', 'Depremde koşmadan sakin kalarak güvenli yerimizde beklemek en doğrusudur.', 'Doğru', '', { gorsel: nesne('cok-kapan-tutun'), ...k });
  boslukEkle(s, 'da-a20', 'Evimizdeki ağır dolapları duvara ......... .', 'sabitlemeliyiz', '', { gorsel: nesne('dolap'), alternatifCevaplar: ['sabitlemek'], ...k });
  dyEkle(s, 'da-a21', 'Islak ellerle elektrik prizlerine dokunmamak çok güvenlidir.', 'Doğru', '', { gorsel: nesne('priz'), ...k });
  boslukEkle(s, 'da-a22', 'Deprem sarsıntısı bittikten sonra ......... toplanma alanına gitmeliyiz.', 'acil', '', { gorsel: nesne('toplanma-alani'), ...k });
  boslukEkle(s, 'da-a23', 'Deprem çantamıza evcil hayvanlar için ......... koyabiliriz.', 'mama', '', { gorsel: nesne('kedi'), ...k });
  dyEkle(s, 'da-a24', 'Evleri dere kenarlarına değil güvenli yüksek alanlara yapmalıyız.', 'Doğru', '', { gorsel: nesne('ev'), ...k });
  boslukEkle(s, 'da-a25', 'Acil durumlarda telaşlanmak yerine ......... kalarak büyüklerimizin sözünü dinlemeliyiz.', 'sakin', '', { gorsel: nesne('nefes'), ...k });
  return s;
}

function dogalAfetlerVeKorunmaTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.DA };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('da-t1', 'Yeryüzünün sarsılması olayına ne denir?', 'Deprem', ['Sel', 'Rüzgar', 'Deprem', 'Çığ'], '', { gorsel: nesne('deprem') });
  e('da-t2', 'Acil durumlar için hazırladığımız çantanın adı nedir?', 'Deprem Çantası', ['Okul Çantası', 'Deprem Çantası', 'Beslenme Çantası', 'Gezi Çantası'], '', { gorsel: nesne('deprem-cantasi') });
  e('da-t3', 'Deprem çantasına hangisine gerek yoktur?', 'Oyuncak tren seti', ['El feneri ve düdük', 'Küçük şişelerde su', 'Oyuncak tren seti', 'Bisküvi ve yara bandı'], '', { gorsel: nesne('deprem-cantasi') });
  e('da-t4', 'Depremde kendimizi korumak için hangi hareketi yapmalıyız?', 'Çök - Kapan - Tutun', ['Çök - Kapan - Tutun', 'Zıpla - Koş - Saklan', 'Otur - Şarkı Söyle - Bekle', 'Camdan bak - El salla'], '', { gorsel: nesne('cok-kapan-tutun') });
  e('da-t5', 'Depremde çok katlı binada nereyi KULLANMAMALIYIZ?', 'Asansörü', ['Sağlam masaların yanını', 'Asansörü', 'Güvenli alanları', 'Çök-Kapan-Tutun hareketi'], '', { gorsel: nesne('asansor') });
  e('da-t6', 'Aşırı yağmurla oluşan doğa olayı nedir?', 'Sel', ['Heyelan', 'Güneş Tutulması', 'Sel', 'Deprem'], '', { gorsel: nesne('sel') });
  e('da-t7', 'Sel ve heyelandan koruyan doğa dostu davranış nedir?', 'Bol bol fidan dikmek', ['Ağaçları koparmak', 'Bol bol fidan dikmek', 'Her yere beton dökmek', 'Ormana çöp atmak'], '', { gorsel: nesne('fidan') });
  e('da-t8', 'Evde kibrit ve çakmakla oynamak hangi kazaya neden olabilir?', 'Yangın', ['Deprem', 'Sel', 'Yangın', 'Çığ'], '', { gorsel: nesne('kibrit') });
  e('da-t9', 'Acil yardım numarası hangisidir?', '112', ['112', '155', '110', '123'], '', { gorsel: nesne('112') });
  e('da-t10', "Yangında 112'yi arayarak kimi çağırırız?", 'İtfaiye', ['Polis', 'İtfaiye', 'Sağlık ekipleri', 'Orman görevlisi'], '', { gorsel: nesne('itfaiye') });
  e('da-t11', 'Kar kütlelerinin aşağı yuvarlanmasıyla oluşan olay nedir?', 'Çığ', ['Sel', 'Çığ', 'Heyelan', 'Deprem'], '', { gorsel: nesne('cig') });
  e('da-t12', 'Ağır dolapları duvara sabitleme hangi afette korur?', 'Deprem', ['Sel', 'Rüzgar', 'Deprem', 'Çığ'], '', { gorsel: nesne('dolap') });
  e('da-t13', 'Depremde nerelerden uzak durmalıyız?', 'Pencerelerden ve camlardan', ['Sağlam masaların yanından', 'Pencerelerden ve camlardan', 'İç duvar köşelerinden', 'Koltuk kenarlarından'], '', { gorsel: nesne('pencere') });
  e('da-t14', 'Toprağın dağdan aşağı kaymasına ne denir?', 'Heyelan', ['Heyelan', 'Deprem', 'Çığ', 'Fırtına'], '', { gorsel: nesne('heyelan') });
  e('da-t15', "112'yi aradığımızda ne söylemeliyiz?", 'Adresimizi ve neden yardım gerektiğini', ['En sevdiğimiz şarkıyı', 'Adresimizi ve neden yardım gerektiğini', 'Arkadaşımızın adını', 'Yaşımızı'], '', { gorsel: nesne('telefon') });
  e('da-t16', "112'yi aramak DOĞRU DEĞİLDİR:", 'Canımız sıkılıp sohbet için', ['Evde acil durum olduğunda', 'Biri fenalaşınca', 'Yolda yardım gerekince', 'Canımız sıkılıp sohbet için'], '', { gorsel: nesne('cocuk') });
  e('da-t17', "Acil şifaya ihtiyaç için 112'den kimi çağırırız?", 'Ambulans', ['Ambulans', 'İtfaiye', 'Postacı', 'Öğretmen'], '', { gorsel: nesne('ambulans') });
  e('da-t18', 'Tatile çıkarken evimizi güvende tutmak için ne yapmalıyız?', 'Su vanalarını ve fişleri kapat', ['Tüm ışıkları açık bırak', 'Su vanalarını ve fişleri kapat', 'Muslukları açık bırak', 'Pencereleri aç'], '', { gorsel: nesne('musluk') });
  e('da-t19', 'Depremde en güvenli davranış nedir?', 'Sakin kalıp başı koruyarak sağlam eşyanın yanına çökmek', ['Telaşla koşmak', 'Sakin kalıp başı koruyarak sağlam eşyanın yanına çökmek', 'Balkona çıkmak', 'Merdivene gitmek'], '', { gorsel: nesne('cok-kapan-tutun') });
  e('da-t20', 'Piknikten sonra doğamızı korumak için ne yapmalıyız?', 'Ateşi suyla tamamen söndürmek', ['Ateşi suyla tamamen söndürmek', 'Çöpleri ormanda bırakmak', 'Ateşi öylece bırakıp gitmek', 'Dalları kırmak'], '', { gorsel: nesne('kamp-atesi') });
  e('da-t21', 'Deprem çantasında hangi sağlık malzemesi bulunmalıdır?', 'Yara bandı', ['Yara bandı', 'Renkli kalemler', 'Tarak ve saç tokası', 'Boya fırçaları'], '', { gorsel: nesne('ilk-yardim') });
  e('da-t22', 'Deprem sarsıntısı bittikten sonra nereye gitmeliyiz?', "Acil Toplanma Alanı'na", ['Parktaki salıncaklara', "Acil Toplanma Alanı'na", 'Binanın en üst katına', 'Asansör boşluğuna'], '', { gorsel: nesne('toplanma-alani') });
  e('da-t23', 'Selden korunmak için evler nereye yapılmalıdır?', 'Güvenli yüksek alanlara', ['Nehir yataklarının içine', 'Güvenli yüksek alanlara', 'Kumların üzerine', 'Çukur yerlere'], '', { gorsel: nesne('ev') });
  e('da-t24', 'Elektrikli aletleri kullanırken neye dikkat etmeliyiz?', 'Islak ellerle prizlere dokunmamaya', ['Islak ellerle prizlere dokunmamaya', 'Prizlere kalem sokmaya', 'Kabloları bükmeye', 'Açık kablolarla oynamaya'], '', { gorsel: nesne('priz') });
  e('da-t25', 'Deprem çantasındaki düdük bize nasıl yardımcı olur?', 'Yardım ekiplerine sesimizi duyurmak için', ['Şarkı söyleyip eğlenmek için', 'Yardım ekiplerine sesimizi duyurmak için', 'Saklambaç için', 'Kuşlarla konuşmak için'], '', { gorsel: nesne('duduk') });
  return s;
}

// ─── Export ─────────────────────────────────────────────────────────────────

export function ulkemizVeVatandaslik(karistir) {
  return {
    id: 'ulkemiz-ve-vatandaslik',
    baslik: 'Ülkemiz ve Vatandaşlık',
    kazanimKodu: KAZANIM.UV,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Ülkemizin adı Türkiye, başkentimiz Ankaradır. Bayrağımız kırmızı beyazdır, üzerinde ay ve yıldız vardır. Biz bu güzel ülkenin mutlu çocuklarıyız.',
          gorsel: anl('uv-anlatim-1'),
        },
        {
          metin:
            'İyi vatandaş doğayı korur, suyu israf etmez, kurallara uyar. Çöpleri geri dönüşüme atar, ortak alanlara özen gösterir.',
          gorsel: anl('uv-anlatim-2'),
        },
        {
          metin:
            'Bayrak töreninde hazır ol duruşuna geçer, İstiklal Marşımızı saygıyla söyleriz. Marşımızın şairi Mehmet Akif Ersoy\'dur.',
          gorsel: anl('uv-anlatim-3'),
        },
      ],
    },
    alistirma: ulkemizVeVatandaslikAlistirma(),
    test: ulkemizVeVatandaslikTest(karistir),
  };
}

export function tarihVeKulturumuz(karistir) {
  return {
    id: 'tarih-ve-kulturumuz',
    baslik: 'Tarih ve Kültürümüz',
    kazanimKodu: KAZANIM.TK,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Atatürk 1881\'de Selanik\'te doğdu. Annesi Zübeyde Hanım, babası Ali Rıza Efendi, kız kardeşi Makbule Hanım\'dır. Çalışkan ve kitap seven bir çocuktu.',
          gorsel: anl('tk-anlatim-1'),
        },
        {
          metin:
            '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı, 29 Ekim Cumhuriyet Bayramıdır. Millî ve dinî bayramlar sevgiyle kutlanır.',
          gorsel: anl('tk-anlatim-2'),
        },
        {
          metin:
            'Mantı, baklava, halk oyunları, Nasreddin Hoca fıkraları ve Karagöz-Hacivat kültürümüzün güzel parçalarıdır.',
          gorsel: anl('tk-anlatim-3'),
        },
      ],
    },
    alistirma: tarihVeKulturumuzAlistirma(),
    test: tarihVeKulturumuzTest(karistir),
  };
}

export function dogalAfetlerVeKorunma(karistir) {
  return {
    id: 'dogal-afetler-ve-korunma',
    baslik: 'Doğal Afetler ve Korunma',
    kazanimKodu: KAZANIM.DA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Depreme hazırlıklı olmalıyız. Deprem çantasında el feneri, düdük, su ve bisküvi bulunur. Çök-Kapan-Tutun hareketini bilmeliyiz.',
          gorsel: anl('da-anlatim-1'),
        },
        {
          metin:
            'Bol ağaç dikmek sel ve heyelandan korur. Piknikte ateşi tamamen söndürmek ormanı ve hayvanları korur.',
          gorsel: anl('da-anlatim-2'),
        },
        {
          metin:
            'Acil durumlarda 112 numarasını ararız. Sakin kalır, adresimizi ve neden yardım gerektiğini söyleriz.',
          gorsel: anl('da-anlatim-3'),
        },
      ],
    },
    alistirma: dogalAfetlerVeKorunmaAlistirma(),
    test: dogalAfetlerVeKorunmaTest(karistir),
  };
}
