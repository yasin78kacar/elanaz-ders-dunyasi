/** GOREV-FEN3 — Dünya ve Evren, Hava Durumu ve Mevsimler, Sağlıklı Yaşam ve Çevre */

const KAZANIM = {
  DE: 'FEN.2.3.1',
  HM: 'FEN.2.3.2',
  SY: 'FEN.2.3.3',
};

function anl(sahne) {
  return { tur: 'fen', mod: 'anlatim', sahne };
}
function nesne(n, vurgu) {
  return { tur: 'fen', mod: 'nesne', nesne: n, vurgu };
}
function grup(nesneler, vurgu) {
  return { tur: 'fen', mod: 'grup', nesneler, vurgu };
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: extra.kazanim ?? KAZANIM.DE,
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
    kazanimKodu: extra.kazanim ?? KAZANIM.DE,
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
    kazanimKodu: extra.kazanim ?? KAZANIM.DE,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

// ─── Dünya ve Evren ─────────────────────────────────────────────────────────

function dunyaVeEvrenAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.DE };
  boslukEkle(s, 'de-a1', 'Üzerinde yaşadığımız gezegenimizin adı ......... .', 'Dünya', '', { gorsel: nesne('dunya'), ...k });
  boslukEkle(s, 'de-a2', 'Dünyamızı ısıtan ve aydınlatan yıldızın adı ......... .', 'Güneş', '', { gorsel: nesne('gunes'), alternatifCevaplar: ['güneş'], ...k });
  dyEkle(s, 'de-a3', 'Ay kendi başına ışık üreten bir yıldızdır.', 'Yanlış', '', { gorsel: nesne('ay'), ...k });
  boslukEkle(s, 'de-a4', 'Dünyamız şekil olarak ......... benzer.', 'küreye', '', { gorsel: nesne('kure'), alternatifCevaplar: ['topa', 'küre', 'top'], ...k });
  boslukEkle(s, 'de-a5', 'Dünyamızın Güneş ışığı alan tarafında ......... yaşanır.', 'gündüz', '', { gorsel: nesne('gunduz'), ...k });
  boslukEkle(s, 'de-a6', 'Dünyamızın karanlık tarafında ......... yaşanır.', 'gece', '', { gorsel: nesne('gece'), ...k });
  dyEkle(s, 'de-a7', 'Dünyamız kendi etrafında dönerek gece ve gündüzü oluşturur.', 'Doğru', '', { gorsel: nesne('donen-dunya'), ...k });
  dyEkle(s, 'de-a8', "Güneş'e çıplak gözle doğrudan bakmak gözlerimiz için faydalıdır.", 'Yanlış', '', { gorsel: nesne('gunes-gozlugu'), ...k });
  boslukEkle(s, 'de-a9', 'Geceleri gökyüzünde gördüğümüz parlak noktalara ......... denir.', 'yıldız', '', { gorsel: nesne('yildiz'), ...k });
  dyEkle(s, 'de-a10', "Ay, Güneş'ten aldığı ışığı bize yansıtır.", 'Doğru', '', { gorsel: grup(['ay', 'gunes'], 'ay'), ...k });
  boslukEkle(s, 'de-a11', 'Dünyamızdaki mavi alanlar ......... gösterir.', 'suları', '', { gorsel: nesne('mavi-deniz'), alternatifCevaplar: ['okyanusları', 'denizleri'], ...k });
  dyEkle(s, 'de-a12', 'Dünyamızın yüzeyindeki karalar sulara göre daha fazladır.', 'Yanlış', '', { gorsel: nesne('dunya'), ...k });
  boslukEkle(s, 'de-a13', "Dünyamızın, Güneş'in ve yıldızların bulunduğu devasa boşluğa ......... denir.", 'uzay', '', { gorsel: nesne('uzay'), ...k });
  dyEkle(s, 'de-a14', "Eski zamanlarda insanlar Dünya'nın düz tepsi gibi olduğunu sanıyorlardı.", 'Doğru', '', { gorsel: nesne('eski-harita'), ...k });
  boslukEkle(s, 'de-a15', "Güneş'in zararlı ışınlarından korunmak için ......... takarız.", 'güneş gözlüğü', '', { gorsel: nesne('gunes-gozlugu'), alternatifCevaplar: ['güneş gözlüğü takarız'], ...k });
  boslukEkle(s, 'de-a16', 'Dünyamız kendi etrafında tıpkı bir ......... gibi döner.', 'topaç', '', { gorsel: nesne('topac'), ...k });
  dyEkle(s, 'de-a17', 'Güneş olmasaydı Dünyamız sıcacık ve aydınlık olurdu.', 'Yanlış', '', { gorsel: nesne('karanlik-dunya'), ...k });
  boslukEkle(s, 'de-a18', 'Ufuktan yaklaşan geminin önce ......... görürüz.', 'direğini', '', { gorsel: nesne('gemi'), alternatifCevaplar: ['dumanını', 'direğini/dumanını'], ...k });
  dyEkle(s, 'de-a19', "Ay'ın şekli gökyüzünde hiç değişmez.", 'Yanlış', '', { gorsel: nesne('ay-evreleri'), ...k });
  boslukEkle(s, 'de-a20', 'Uzaya giden kişilere ......... denir.', 'astronot', '', { gorsel: nesne('astronot'), ...k });
  boslukEkle(s, 'de-a21', "Güneş'in doğmasıyla birlikte ......... başlar.", 'gündüz', '', { gorsel: nesne('sabah-gunesi'), ...k });
  dyEkle(s, 'de-a22', 'Dünyamızın karanlık tarafında insanlar uyanık okula giderler.', 'Yanlış', '', { gorsel: nesne('gece'), ...k });
  boslukEkle(s, 'de-a23', 'Bitkilerin büyüyüp gelişmesi için ......... ışığına ihtiyaçları vardır.', 'Güneş', '', { gorsel: nesne('cicek'), alternatifCevaplar: ['güneş'], ...k });
  boslukEkle(s, 'de-a24', "Ay'ı yuvarlak gördüğümüz evreye ......... denir.", 'dolunay', '', { gorsel: nesne('dolunay'), ...k });
  dyEkle(s, 'de-a25', 'Dünya, Güneş etrafında dolanarak mevsimlerin oluşmasını sağlar.', 'Doğru', '', { gorsel: nesne('gunes-sistemi'), ...k });
  return s;
}

function dunyaVeEvrenTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.DE };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('de-t1', 'Üzerinde yaşadığımız gezegenin adı nedir?', 'Dünya', ['Ay', 'Güneş', 'Dünya', 'Yıldız'], '', { gorsel: nesne('dunya') });
  e('de-t2', 'Dünyamızın şekli hangisine benzer?', 'Küre', ['Küp', 'Küre', 'Silindir', 'Kare'], '', { gorsel: grup(['top', 'kure'], 'kure') });
  e('de-t3', 'Dünyamızı ısıtan ve aydınlatan kaynak nedir?', 'Güneş', ['Ay', 'Dünya', 'Yıldızlar', 'Güneş'], '', { gorsel: nesne('gunes') });
  e('de-t4', 'Gece ve gündüzü ne oluşturur?', "Dünya'nın kendi etrafında dönmesi", ["Ay'ın uzaklaşması", "Güneş'in uyuması", 'Bulutlar', "Dünya'nın kendi etrafında dönmesi"], '', { gorsel: nesne('gece-gunduz') });
  e('de-t5', 'Ay hakkında hangisi doğrudur?', "Dünya'nın doğal uydusu, Güneş'i yansıtır", ['Kendisi ısı kaynağı', "Dünya'nın doğal uydusu, Güneş'i yansıtır", "Güneş'ten büyük", 'Kare şekilli'], '', { gorsel: nesne('ay') });
  e('de-t6', 'Modeldeki mavi renkler neyi gösterir?', 'Okyanus ve denizleri', ['Ormanları', 'Çölleri', 'Okyanus ve denizleri', 'Dağları'], '', { gorsel: nesne('dunya') });
  e('de-t7', 'Gözlerimizi korumak için ne kullanmalıyız?', 'Güneş gözlüğü', ['Büyüteç', 'Güneş gözlüğü', 'Dürbün', 'Mikroskop'], '', { gorsel: nesne('gunes-gozlugu') });
  e('de-t8', "Eski zamanlarda Dünya'nın şekli neye benzetilirdi?", 'Düz tepsi', ['Düz tepsi', 'Yuvarlak top', 'Üçgen', 'Küre'], '', { gorsel: nesne('eski-harita') });
  e('de-t9', "Dünya dönünce Güneş'i gören tarafta ne yaşanır?", 'Gündüz', ['Gece', 'Kış', 'Gündüz', 'Kar'], '', { gorsel: nesne('topac') });
  e('de-t10', "Ay neden bazen yay, bazen yuvarlak görünür?", "Ay'ın şeklinin değişir gibi görünmesi", ['Parçaları kopuyor', "Ay'ın şeklinin değişir gibi görünmesi", "Güneş'i yutuyor", 'Bulutlar boyuyor'], '', { gorsel: nesne('ay-evreleri') });
  e('de-t11', 'Yıldızların ve gezegenlerin bulunduğu boşluğa ne denir?', 'Uzay', ['Gökyüzü', 'Bulut', 'Uzay', 'Okyanus'], '', { gorsel: nesne('uzay') });
  e('de-t12', 'Bitkilerin büyümesi için neye ihtiyaç vardır?', 'Güneş ışığına', ['Sadece rüzgara', 'Güneş ışığına', 'Ay ışığına', 'Karanlığa'], '', { gorsel: nesne('cicek') });
  e('de-t13', 'Ufuktan gelen geminin önce neresini görürüz?', 'Direğin en üstü', ['Sadece gövdesi', 'Direğin en üstü', 'Deniz altı', 'Arka taraf'], '', { gorsel: nesne('gemi') });
  e('de-t14', 'Büyükten küçüğe sıralama hangisidir?', 'Güneş - Dünya - Ay', ['Güneş - Dünya - Ay', 'Ay - Dünya - Güneş', 'Dünya - Güneş - Ay', 'Dünya - Ay - Güneş'], '', { gorsel: grup(['gunes', 'dunya', 'ay'], ['gunes', 'dunya', 'ay']) });
  e('de-t15', 'Dünya Güneş etrafında dönerken ne oluşur?', 'Mevsimler', ['Sadece gece', 'Mevsimler', 'Sadece gündüz', 'Saatler'], '', { gorsel: nesne('gunes-sistemi') });
  e('de-t16', 'Sular ve karalar nasıldır?', 'Sular daha fazla', ['Karalar daha fazla', 'Eşit', 'Sular daha fazla', 'Hiç su yok'], '', { gorsel: nesne('dunya') });
  e('de-t17', 'Geceleri parlayan küçük ışıklara ne denir?', 'Yıldız', ['Yıldız', 'Bulut', 'Gökkuşağı', 'Ay'], '', { gorsel: nesne('yildiz') });
  e('de-t18', 'Plajda cildimizi korumak için ne süreriz?', 'Güneş kremi', ['Kolonya', 'Güneş kremi', 'Sabun', 'Şampuan'], '', { gorsel: nesne('gunes-kremi') });
  e('de-t19', 'Dünyamız ortadan biraz şişkin, hafif basık bir ......... benzer.', 'Küreye', ['Kareye', 'Konie', 'Küreye', 'Silindire'], '', { gorsel: nesne('kure') });
  e('de-t20', 'Canlılar dinlenmek için hangi zaman dilimini tercih eder?', 'Gece', ['Gündüz', 'Gece', 'Öğle', 'İkindi'], '', { gorsel: nesne('uyuyan-cocuk') });
  e('de-t21', 'Uzayı yakından görmek için ne kullanılır?', 'Teleskop', ['Büyüteç', 'Gözlük', 'Teleskop', 'Ayna'], '', { gorsel: nesne('teleskop') });
  e('de-t22', 'Güneş hangi yönden doğar?', 'Doğu', ['Batı', 'Doğu', 'Kuzey', 'Güney'], '', { gorsel: nesne('sabah-gunesi') });
  e('de-t23', 'Uzaya çıkan kişiye ne denir?', 'Astronot', ['Pilot', 'Şoför', 'Dalgıç', 'Astronot'], '', { gorsel: nesne('astronot') });
  e('de-t24', "Uzaydan bakıldığında Dünya'da hangi renk öne çıkar?", 'Mavi', ['Kırmızı', 'Sarı', 'Mavi', 'Siyah'], '', { gorsel: nesne('dunya') });
  e('de-t25', "Dünya'yı diğer gezegenlerden özel kılan nedir?", 'Üzerinde canlıların yaşaması', ['Çok sıcak olması', 'Üzerinde canlıların yaşaması', "Güneş'ten büyük olması", 'Hiç dönmemesi'], '', { gorsel: grup(['dunya', 'gunes'], 'dunya') });
  return s;
}

// ─── Hava Durumu ve Mevsimler ───────────────────────────────────────────────

function havaDurumuVeMevsimlerAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.HM };
  boslukEkle(s, 'hm-a1', 'Günlük hava olaylarına hava ......... denir.', 'durumu', '', { gorsel: grup(['gunes', 'bulut'], 'bulut'), ...k });
  boslukEkle(s, 'hm-a2', 'Yağmur yağıyorsa yanımıza ......... almalıyız.', 'şemsiye', '', { gorsel: nesne('semsiye'), ...k });
  boslukEkle(s, 'hm-a3', 'Bir yılda ......... tane mevsim vardır.', 'dört', '', { gorsel: nesne('dort-mevsim'), alternatifCevaplar: ['4'], ...k });
  boslukEkle(s, 'hm-a4', 'Yılın en soğuk mevsimi ......... .', 'Kış', '', { gorsel: nesne('kis'), alternatifCevaplar: ['kış'], ...k });
  dyEkle(s, 'hm-a5', 'İlkbahar mevsiminde doğa uyanır, ağaçlar çiçek açar.', 'Doğru', '', { gorsel: nesne('ilkbahar'), ...k });
  dyEkle(s, 'hm-a6', 'Yaz mevsiminde havalar çok soğur, kalın montlar giyeriz.', 'Yanlış', '', { gorsel: nesne('yaz'), ...k });
  boslukEkle(s, 'hm-a7', 'Yaprakların sararıp döküldüğü mevsim ......... .', 'Sonbahar', '', { gorsel: nesne('sonbahar'), alternatifCevaplar: ['sonbahar'], ...k });
  dyEkle(s, 'hm-a8', 'Hava güneşliyse gökyüzünde güneş görürüz ve hava sıcaktır.', 'Doğru', '', { gorsel: nesne('gunduz'), ...k });
  dyEkle(s, 'hm-a9', 'Kışın dışarı çıkarken ince tişört giymeliyiz.', 'Yanlış', '', { gorsel: nesne('kis-kiyafet'), ...k });
  dyEkle(s, 'hm-a10', 'Yaz aylarında güneşten korunmak için şapka ve güneş gözlüğü kullanmalıyız.', 'Doğru', '', { gorsel: nesne('sapka'), ...k });
  boslukEkle(s, 'hm-a11', 'Havanın yer değiştirmesiyle oluşan esintiye ......... denir.', 'rüzgar', '', { gorsel: nesne('ruzgar-gulu'), ...k });
  boslukEkle(s, 'hm-a12', 'Gökyüzünü gri bulutlar kapladığında hava ......... olduğunu anlarız.', 'bulutlu', '', { gorsel: nesne('bulut'), alternatifCevaplar: ['yağmurlu'], ...k });
  boslukEkle(s, 'hm-a13', 'Bir tam yılda ......... ay bulunur.', '12', '', { gorsel: nesne('takvim'), ...k });
  dyEkle(s, 'hm-a14', 'Eylül, Ekim ve Kasım Sonbahar mevsiminin aylarıdır.', 'Doğru', '', { gorsel: nesne('sonbahar'), ...k });
  dyEkle(s, 'hm-a15', 'Kardan adam yapmak Yaz mevsiminin oyunlarındandır.', 'Yanlış', '', { gorsel: nesne('kardan-adam'), ...k });
  boslukEkle(s, 'hm-a16', 'Yazın terlememek için ......... kıyafetler giymeliyiz.', 'ince', '', { gorsel: nesne('yaz-kiyafet'), alternatifCevaplar: ['pamuklu'], ...k });
  boslukEkle(s, 'hm-a17', 'Kışın dışarı çıkarken boynumuza atkı, başımıza ......... takarız.', 'bere', '', { gorsel: nesne('bere'), ...k });
  dyEkle(s, 'hm-a18', 'Televizyonda yarınki havayı anlatan haberlere "Hava Durumu" denir.', 'Doğru', '', { gorsel: nesne('hava-durumu'), ...k });
  boslukEkle(s, 'hm-a19', 'Yağmurlu günlerde ayaklarımız ıslanmasın diye ......... giymeliyiz.', 'çizme', '', { gorsel: nesne('yagmur-cizme'), alternatifCevaplar: ['bot'], ...k });
  boslukEkle(s, 'hm-a20', 'Fırtınalı havalarda gökyüzünde ......... çakabilir.', 'şimşek', '', { gorsel: nesne('simsek'), ...k });
  boslukEkle(s, 'hm-a21', 'Mart, Nisan ve Mayıs ......... mevsiminin aylarıdır.', 'İlkbahar', '', { gorsel: nesne('papatya'), alternatifCevaplar: ['ilkbahar'], ...k });
  dyEkle(s, 'hm-a22', 'Hava durumu haritasında Güneş, bulut ve kar tanesi semboller kullanılır.', 'Doğru', '', { gorsel: nesne('hava-sembol'), ...k });
  dyEkle(s, 'hm-a23', 'Yağmur yağdığında toprak yollar çamur olabilir.', 'Doğru', '', { gorsel: nesne('su-birikintisi'), ...k });
  boslukEkle(s, 'hm-a24', 'Rüzgarlı havalarda dışarıda ......... uçurmak çok eğlencelidir.', 'uçurtma', '', { gorsel: nesne('ucurtma'), ...k });
  dyEkle(s, 'hm-a25', 'Kışın ıslak saçla dışarı çıkmak bizi daha sağlıklı yapar.', 'Yanlış', '', { gorsel: nesne('islak-sac'), ...k });
  return s;
}

function havaDurumuVeMevsimlerTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.HM };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('hm-t1', 'Bir yılda kaç mevsim vardır?', '4', ['2', '3', '4', '5'], '', { gorsel: nesne('dort-mevsim') });
  e('hm-t2', 'Hangi mevsimde kar yağar ve kardan adam yaparız?', 'Kış', ['İlkbahar', 'Yaz', 'Sonbahar', 'Kış'], '', { gorsel: nesne('kardan-adam') });
  e('hm-t3', 'Yağmurlu havada yanımıza ne almalıyız?', 'Şemsiye', ['Güneş gözlüğü', 'Şemsiye', 'Deniz paleti', 'İnce tişört'], '', { gorsel: nesne('semsiye') });
  e('hm-t4', 'Çiçeklerin açtığı, havaların ısındığı mevsim hangisidir?', 'İlkbahar', ['İlkbahar', 'Sonbahar', 'Kış', 'Aralık'], '', { gorsel: nesne('ilkbahar') });
  e('hm-t5', 'Denize girdiğimiz, çok sıcak mevsim nedir?', 'Yaz', ['Kış', 'Yaz', 'Sonbahar', 'İlkbahar'], '', { gorsel: nesne('yaz') });
  e('hm-t6', 'Yaprakların döküldüğü mevsim hangisidir?', 'Sonbahar', ['Kış', 'İlkbahar', 'Sonbahar', 'Yaz'], '', { gorsel: nesne('sonbahar') });
  e('hm-t7', 'Aralık, Ocak ve Şubat hangi mevsimin aylarıdır?', 'Kış', ['Kış', 'Yaz', 'İlkbahar', 'Sonbahar'], '', { gorsel: nesne('takvim') });
  e('hm-t8', 'Kışın hangisini GİYMEMELİYİZ?', 'Şort ve yazlık terlik', ['Kalın mont', 'Bere ve eldiven', 'Atkı', 'Şort ve yazlık terlik'], 'Kışın sıcak tutan kıyafetler giymeliyiz!', { gorsel: nesne('kis-kiyafet'), sasirtma: true });
  e('hm-t9', 'Sıcak yaz günlerinde nasıl giyinmeliyiz?', 'İnce, pamuklu, açık renkli', ['Kalın yünlü kazak', 'Siyah ve kalın mont', 'İnce, pamuklu, açık renkli', 'Kat kat kıyafet'], '', { gorsel: nesne('yaz-kiyafet') });
  e('hm-t10', 'Hava durumunda gülen Güneş sembolü görünce hava nasıl?', 'Güneşli', ['Karlı', 'Yağmurlu', 'Rüzgarlı', 'Güneşli'], '', { gorsel: nesne('hava-sembol') });
  e('hm-t11', 'Ağaç dalları sallanıp yapraklar uçuşuyorsa hava nasıldır?', 'Rüzgarlı', ['Karlı', 'Rüzgarlı', 'Güneşli', 'Sisli'], '', { gorsel: nesne('ruzgar-gulu') });
  e('hm-t12', 'Hava durumunu dinlemenin faydası nedir?', 'Havaya uygun kıyafet seçmek', ['Çizgi film öğrenmek', 'Havaya uygun kıyafet seçmek', 'Yemek öğrenmek', 'Hiçbir faydası yok'], '', { gorsel: nesne('hava-durumu') });
  e('hm-t13', 'Güneşli yaz gününde ne kullanmalıyız?', 'Şapka ve güneş gözlüğü', ['Kalın atkı', 'Kar botu', 'Şapka ve güneş gözlüğü', 'Kalın eldiven'], '', { gorsel: nesne('sapka') });
  e('hm-t14', 'Rüzgarlı bahar gününde en eğlenceli etkinlik nedir?', 'Uçurtma uçurmak', ['Uçurtma uçurmak', 'Kardan adam yapmak', 'Denize girmek', 'Karda yatmak'], '', { gorsel: nesne('ucurtma') });
  e('hm-t15', 'Göz gözü görmeyecek kadar yoğun pus varsa bu hava nedir?', 'Sis', ['Yağmur', 'Kar', 'Sis', 'Dolu'], '', { gorsel: nesne('sis') });
  e('hm-t16', 'Haziran, Temmuz ve Ağustos hangi mevsimin ayları?', 'Yaz', ['Sonbahar', 'Kış', 'İlkbahar', 'Yaz'], '', { gorsel: nesne('takvim') });
  e('hm-t17', 'Yağmur damlalarının buz topları şeklinde düşmesine ne denir?', 'Dolu', ['Sis', 'Dolu', 'Rüzgar', 'Güneş'], '', { gorsel: nesne('dolu') });
  e('hm-t18', 'İlkbaharda hangisini GÖZLEMLEYEMEYİZ?', 'Her yer bembeyaz karla kaplanır', ['Ağaçlar çiçek açar', 'Her yer bembeyaz karla kaplanır', 'Havalar ısınır', 'Kelebekler uçuşur'], 'Kar kış mevsimine aittir!', { gorsel: nesne('ilkbahar'), sasirtma: true });
  e('hm-t19', 'Gök gürültüsü ve şimşek hangi havada görülür?', 'Fırtınalı ve yağmurlu', ['Güneşli', 'Sisli', 'Fırtınalı ve yağmurlu', 'Karlı'], '', { gorsel: nesne('simsek') });
  e('hm-t20', 'Ali bere ve eldiven taktı. Hangi mevsim?', 'Kış', ['Yaz', 'Kış', 'İlkbahar', 'Sonbahar'], '', { gorsel: nesne('bere') });
  e('hm-t21', 'Hangi eşleştirme yanlıştır?', 'Yaz → Yaprak dökülmesi', ['İlkbahar → Çiçekler', 'Kış → Kar', 'Yaz → Yaprak dökülmesi', 'Sonbahar → Yağmur'], 'Yaprak dökülmesi sonbaharda olur!', { gorsel: nesne('dort-mevsim'), sasirtma: true });
  e('hm-t22', 'Gri su dolu bulutlar görünce ne bekleriz?', 'Yağmur', ['Yağmur', 'Havanın ısınması', 'Güneş', 'Kar erimesi'], '', { gorsel: nesne('bulut') });
  e('hm-t23', 'Kıyafetlerimizi neye göre seçmeliyiz?', 'Hava durumuna', ['Sadece sevdiğimiz renge', 'Modaya', 'Hava durumuna', 'Oyuncaklarımıza'], '', { gorsel: nesne('kis-kiyafet') });
  e('hm-t24', 'Havanın sıcaklığını ölçmek için ne kullanırız?', 'Termometre', ['Büyüteç', 'Dürbün', 'Termometre', 'Pusula'], '', { gorsel: nesne('termometre') });
  e('hm-t25', 'Mevsimlerin ve farklı hava durumlarının yaşanması doğa için nasıldır?', 'Çok faydalı ve gerekli', ['Çok faydalı ve gerekli', 'Doğaya zararlı', 'Kötü', 'Tehlikeli'], '', { gorsel: nesne('dort-mevsim') });
  return s;
}

// ─── Sağlıklı Yaşam ve Çevre ────────────────────────────────────────────────

function saglikliYasamVeCevreAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.SY };
  boslukEkle(s, 'sy-a1', 'Sabah ve gece ......... fırçalamalıyız.', 'dişlerimizi', '', { gorsel: nesne('dis-fircasi'), ...k });
  boslukEkle(s, 'sy-a2', 'Yemeklerden önce ve sonra ellerimizi su ve ......... ile yıkamalıyız.', 'sabun', '', { gorsel: nesne('el-yikama'), ...k });
  boslukEkle(s, 'sy-a3', 'Sağlıklı büyümek için bol bol ......... ve sebze yemeliyiz.', 'meyve', '', { gorsel: nesne('meyve-sepeti'), ...k });
  boslukEkle(s, 'sy-a4', 'Kemiklerimizin güçlü olması için her gün ......... içmeliyiz.', 'süt', '', { gorsel: nesne('sut'), ...k });
  dyEkle(s, 'sy-a5', 'Düzenli banyo yapmak vücudumuzu temiz tutar.', 'Doğru', '', { gorsel: nesne('banyo'), ...k });
  dyEkle(s, 'sy-a6', 'Uzayan tırnaklarımızı hiç kesmeden uzatmalıyız.', 'Yanlış', '', { gorsel: nesne('tirnak'), ...k });
  boslukEkle(s, 'sy-a7', 'Düzenli ......... kaslarımızı güçlendirir ve bizi enerjik yapar.', 'spor', '', { gorsel: nesne('spor'), alternatifCevaplar: ['egzersiz'], ...k });
  boslukEkle(s, 'sy-a8', 'Büyüme hormonları biz ......... çalışır.', 'uyurken', '', { gorsel: nesne('uyuyan-cocuk'), ...k });
  dyEkle(s, 'sy-a9', 'Uzun süre televizyon izlemek gözlerimize faydalıdır.', 'Yanlış', '', { gorsel: nesne('tablet'), ...k });
  boslukEkle(s, 'sy-a10', 'Çocukların sağlıklı büyümesi için ......... yatıp yeterince uyuması gerekir.', 'erken', '', { gorsel: nesne('uyuyan-cocuk'), ...k });
  boslukEkle(s, 'sy-a11', 'Kağıt, plastik ve cam atıkları ......... kutusuna atmalıyız.', 'geri dönüşüm', '', { gorsel: nesne('geri-donusum'), ...k });
  boslukEkle(s, 'sy-a12', 'Çöplerimizi sokağa değil ......... atmalıyız.', 'çöp kutusuna', '', { gorsel: nesne('cop-kutusu'), ...k });
  dyEkle(s, 'sy-a13', 'Çevreyi temiz tutmak hayvanlar için de önemlidir.', 'Doğru', '', { gorsel: nesne('temiz-park'), ...k });
  dyEkle(s, 'sy-a14', 'Dişlerimizi fırçalarken suyu açık bırakmak doğru bir davranıştır.', 'Yanlış', '', { gorsel: nesne('acik-musluk'), ...k });
  boslukEkle(s, 'sy-a15', 'Havamızı temiz tutmak için bol bol ......... dikmeliyiz.', 'ağaç', '', { gorsel: nesne('fidan'), alternatifCevaplar: ['fidan'], ...k });
  dyEkle(s, 'sy-a16', 'Mikroplar kirli yerlerde yaşar ve bizi hasta eder.', 'Doğru', '', { gorsel: nesne('kirli-el'), ...k });
  boslukEkle(s, 'sy-a17', 'Yiyeceğimiz kadar yemek almak israfı ......... .', 'önler', '', { gorsel: nesne('yemek'), ...k });
  boslukEkle(s, 'sy-a18', 'Hapşırırken ağzımızı ......... veya kolumuzun içiyle kapatmalıyız.', 'mendille', '', { gorsel: nesne('hapsiran'), ...k });
  dyEkle(s, 'sy-a19', 'Ispanak, havuç ve brokoli sağlıklı sebzelerdir.', 'Doğru', '', { gorsel: nesne('sebze'), ...k });
  dyEkle(s, 'sy-a20', 'Çok fazla şeker tüketmek dişleri çürütmez.', 'Yanlış', '', { gorsel: nesne('seker'), ...k });
  boslukEkle(s, 'sy-a21', 'Saçları taramak ve temiz giysiler giymek ......... temizliğimizin parçasıdır.', 'kişisel', '', { gorsel: nesne('taranmis-sac'), ...k });
  dyEkle(s, 'sy-a22', 'Kırılan cam bardakları plastik geri dönüşüm kutusuna atmalıyız.', 'Yanlış', '', { gorsel: nesne('cam-atik'), ...k });
  boslukEkle(s, 'sy-a23', 'Bisiklete binmek ve koşmak fiziksel ......... örnekleridir.', 'aktivite', '', { gorsel: nesne('bisiklet'), alternatifCevaplar: ['spor'], ...k });
  dyEkle(s, 'sy-a24', 'Piknik çöplerini ormanda bırakmak doğaya zarar verir.', 'Doğru', '', { gorsel: nesne('orman-cop'), ...k });
  boslukEkle(s, 'sy-a25', 'Temiz vücut, sağlıklı besinler ve temiz çevre bizi ......... yapar.', 'mutlu', '', { gorsel: nesne('mutlu-cocuk'), ...k });
  return s;
}

function saglikliYasamVeCevreTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.SY };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('sy-t1', 'Dişlerimizi günde kaç kez fırçalamalıyız?', 'Günde en az iki kez', ['Hiç', 'Günde en az iki kez', 'Ayda bir', 'Sadece ağrıyınca'], '', { gorsel: nesne('dis-fircasi') });
  e('sy-t2', 'Hangisi sağlıklı büyümemiz için faydalıdır?', 'Elma ve havuç', ['Çok cips', 'Asitli içecekler', 'Elma ve havuç', 'Hazır şekerlemeler'], '', { gorsel: nesne('meyve-sepeti') });
  e('sy-t3', 'Ellerimizi ne zaman yıkamalıyız?', 'Yemeklerden önce, sonra ve tuvaletten çıkınca', ['Sadece banyoda', 'Yemeklerden önce, sonra ve tuvaletten çıkınca', 'Sadece çamurluysa', 'Haftada bir'], '', { gorsel: nesne('el-yikama') });
  e('sy-t4', 'Kemik ve kasların güçlenmesi için ne yapmalıyız?', 'Düzenli spor yapmalıyız', ['Sürekli uyumalıyız', 'Düzenli spor yapmalıyız', 'Bilgisayar oynamalıyız', 'Sadece TV izlemeliyiz'], '', { gorsel: nesne('spor') });
  e('sy-t5', 'Büyüme hormonları için ne gereklidir?', 'Erken yatıp yeterli uyku', ['Çok yemek', 'Çok şeker', 'Erken yatıp yeterli uyku', 'Geç saate kadar TV'], '', { gorsel: nesne('uyuyan-cocuk') });
  e('sy-t6', 'Plastik şişe ve cam kavanozları nereye atmalıyız?', 'Geri dönüşüm kutularına', ['Denize', 'Geri dönüşüm kutularına', 'Ormana', 'Sokağa'], '', { gorsel: nesne('geri-donusum') });
  e('sy-t7', 'Çevreyi temiz tutmak için ne yapmalıyız?', 'Çöpleri çöp kutusuna atmak', ['Çöpleri yere atmak', 'Çöpleri çöp kutusuna atmak', 'Pencereden atmak', 'Parka bırakmak'], '', { gorsel: nesne('cop-kutusu') });
  e('sy-t8', 'Hapşırırken ne yapmalıyız?', 'Mendil veya kolumuzla ağzı kapatmak', ['Yüzlere hapşırmak', 'Bağırmak', 'Mendil veya kolumuzla ağzı kapatmak', 'Hiçbir şey'], '', { gorsel: nesne('hapsiran') });
  e('sy-t9', 'Tırnaklarımız uzayınca ne yapmalıyız?', 'Düzenli kesmeliyiz', ['Düzenli kesmeliyiz', 'Dişle koparmalıyız', 'Boyamalıyız', 'Çok uzatmalıyız'], '', { gorsel: nesne('tirnak') });
  e('sy-t10', 'Vücudumuzu temizlemek için ne yapmalıyız?', 'Düzenli banyo yapmak', ['Parfüm sıkmak', 'Sadece yüz yıkamak', 'Düzenli banyo yapmak', 'Islak mendil kullanmak'], '', { gorsel: nesne('banyo') });
  e('sy-t11', 'Uzun süre tablet ve TV hangi organımıza zarar verir?', 'Gözler', ['Mide', 'Kulaklar', 'Gözler', 'Burun'], '', { gorsel: nesne('tablet') });
  e('sy-t12', 'Kemik ve dişleri güçlendiren içecek nedir?', 'Süt', ['Asitli içecek', 'Kahve', 'Gazoz', 'Süt'], '', { gorsel: nesne('sut') });
  e('sy-t13', 'Doğayı korumak için en güzel davranış nedir?', 'Fidan dikmek', ['Dal kırmak', 'Fidan dikmek', 'Çiçek koparmak', 'Çimleri ezmek'], '', { gorsel: nesne('fidan') });
  e('sy-t14', 'Dişlerimizi fırçalarken suyu açık bırakırsak ne olur?', 'Su israfı yaparız', ['Su temizlenir', 'Su israfı yaparız', 'Elektrik üretiriz', 'Mikroplar kaçar'], '', { gorsel: nesne('acik-musluk') });
  e('sy-t15', 'Hastalanınca kime gidmeliyiz?', 'Doktora', ['Doktora', 'Polise', 'İtfaiyeciye', 'Öğretmene'], '', { gorsel: nesne('doktor') });
  e('sy-t16', 'Hangisi kişisel temizlik kuralıdır?', 'Banyo ve temiz kıyafet', ['Odayı dağıtmak', 'Çamurlu ayakkabı ile eve girmek', 'Banyo ve temiz kıyafet', 'Çöp bırakmak'], '', { gorsel: nesne('banyo') });
  e('sy-t17', 'Çok şeker ve cips tüketmek neye neden olur?', 'Diş çürümesi ve hastalık', ['Zeka artışı', 'Diş çürümesi ve hastalık', 'Boy uzaması', 'Güçlü olmak'], '', { gorsel: nesne('seker') });
  e('sy-t18', 'Seksek ve ip atlamak ne tür etkinliktir?', 'Fiziksel aktivite', ['Zeka oyunu', 'Fiziksel aktivite', 'Bilgisayar oyunu', 'Tembellik'], '', { gorsel: nesne('spor') });
  e('sy-t19', 'Güne enerjik başlamak için ne yapmalıyız?', 'Sağlıklı kahvaltı yapmak', ['Hiç yemeden gitmek', 'Sağlıklı kahvaltı yapmak', 'Sadece çikolata yemek', 'Hemen uyumak'], '', { gorsel: nesne('kahvalti') });
  e('sy-t20', 'Hayvan dostlarımıza nasıl davranmalıyız?', 'Sevgiyle yaklaşıp su ve mama koymak', ['Zarar vermek', 'Sevgiyle yaklaşıp su ve mama koymak', 'Rahatsız etmek', 'Görmezden gelmek'], '', { gorsel: nesne('kopek') });
  e('sy-t21', 'Meyve ve sebzeleri yemeden önce ne yapmalıyız?', 'Bol suyla yıkamak', ['Hemen yemek', 'Güneşte bekletmek', 'Bol suyla yıkamak', 'Peçeteyle silmek'], '', { gorsel: nesne('meyve-sepeti') });
  e('sy-t22', 'Bol ağaçlı ve yeşillik alanlara ne denir?', 'Orman', ['Otopark', 'Orman', 'Çöl', 'Otoban'], '', { gorsel: nesne('orman') });
  e('sy-t23', 'Odamız güneş alıyorken ne yapmalıyız?', 'Gereksiz lambaları kapatmak', ['Tüm lambaları açmak', 'Perde kapatıp lamba yakmak', 'Gereksiz lambaları kapatmak', 'El feneri kullanmak'], '', { gorsel: nesne('lamba') });
  e('sy-t24', 'En temel içeceğimiz nedir?', 'Temiz su', ['Limonata', 'Temiz su', 'Asitli içecek', 'Soğuk çay'], '', { gorsel: nesne('su') });
  e('sy-t25', 'Sağlıklı ve temiz yaşayan çocuk etrafına ne verir?', 'Neşe ve mutluluk', ['Üzüntü', 'Neşe ve mutluluk', 'Şikayet', 'Mutsuzluk'], '', { gorsel: nesne('mutlu-cocuk') });
  return s;
}

// ─── Export ─────────────────────────────────────────────────────────────────

export function dunyaVeEvren(karistir) {
  return {
    id: 'dunya-ve-evren',
    baslik: 'Dünya ve Evren',
    kazanimKodu: KAZANIM.DE,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Ali ve Zeynep sınıftaki küreye baktı. Dünyamız bir topa benziyor — mavi yerler denizler, yeşil-kahverengi yerler karalar! Dünyamız uzayda dönüp duruyor. Şekli küre!',
          gorsel: anl('de-anlatim-1'),
        },
        {
          metin:
            "Berk ve Fatma bahçede oturdu. Güneş kocaman bir yıldız — ısı ve ışık kaynağımız! Güneş'e çıplak gözle bakılmaz. Güneş olmasaydı Dünya buz gibi soğuk olurdu.",
          gorsel: anl('de-anlatim-2'),
        },
        {
          metin:
            "Can ve Hande gece gökyüzüne baktı. Dünya kendi etrafında döner — güneş gören taraf gündüz, karanlık taraf gece! Ay kendi ışığı olmayan, Güneş'i yansıtan bir ayna.",
          gorsel: anl('de-anlatim-3'),
        },
      ],
    },
    alistirma: dunyaVeEvrenAlistirma(),
    test: dunyaVeEvrenTest(karistir),
  };
}

export function havaDurumuVeMevsimler(karistir) {
  return {
    id: 'hava-durumu-ve-mevsimler',
    baslik: 'Hava Durumu ve Mevsimler',
    kazanimKodu: KAZANIM.HM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Ayşe ve Yusuf pencereden baktı. Masmavi gökyüzü! Ama radyo "öğleden sonra yağmur" dedi. Hava durumu sürekli değişiyor — güneşli, bulutlu, yağmurlu, karlı olabilir! Dışarı çıkmadan havaya bakmak önemli.',
          gorsel: anl('hm-anlatim-1'),
        },
        {
          metin:
            'Selin ve Mehmet sarı yaprakları topladı. Sonbahar geldi! 4 mevsim: İlkbahar (doğa uyanır), Yaz (sıcak, deniz), Sonbahar (yapraklar döküler), Kış (kar, soğuk). Dünya Güneş etrafında dönerken mevsimler oluşur.',
          gorsel: anl('hm-anlatim-2'),
        },
        {
          metin:
            'Fatma kışın kalın mont, atkı, bere ve eldiven giydi. Can ince tişörtle çıkmak istedi. Annesi uyardı: "Üşütürsün!" Can sıcak giydi, kardan adam yaptılar. Havaya göre giyinmek sağlığı korur.',
          gorsel: anl('hm-anlatim-3'),
        },
      ],
    },
    alistirma: havaDurumuVeMevsimlerAlistirma(),
    test: havaDurumuVeMevsimlerTest(karistir),
  };
}

export function saglikliYasamVeCevre(karistir) {
  return {
    id: 'saglikli-yasam-ve-cevre',
    baslik: 'Sağlıklı Yaşam ve Çevre',
    kazanimKodu: KAZANIM.SY,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Zeynep uyandığında hemen banyoya gidip yüzünü yıkadı ve dişlerini fırçaladı. Kahvaltıda peynir, zeytin, yumurta ve domates yedi. Berk "Ben her gün süt ve meyve yiyorum!" dedi. Sağlıklı büyümek için bol sebze-meyve, az şeker ve yemeklerden önce-sonra el yıkamak şart!',
          gorsel: anl('sy-anlatim-1'),
        },
        {
          metin:
            'Ali ve Hande bahçede seksek oynadı. Spor kemik ve kasları güçlendiriyor! Ekran başında oturmak yerine hareket etmek daha sağlıklı. Gece erken yatmak büyüme hormonunun çalışmasını sağlar.',
          gorsel: anl('sy-anlatim-2'),
        },
        {
          metin:
            'Yusuf parkta plastik şişeyi geri dönüşüm kutusuna attı. Çevreyi temiz tutmak bitkiler ve hayvanlar için de önemli! Geri dönüşüm, su tasarrufu, fidan dikmek — çevremize yapabileceğimiz en güzel iyilikler.',
          gorsel: anl('sy-anlatim-3'),
        },
      ],
    },
    alistirma: saglikliYasamVeCevreAlistirma(),
    test: saglikliYasamVeCevreTest(karistir),
  };
}
