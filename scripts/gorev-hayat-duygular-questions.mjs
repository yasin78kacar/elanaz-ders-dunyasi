/** PARTI-HAYAT-TEMA1 — Aile ve Duygular (100 soru) */

const KAZANIM = 'HB.2.1.4';

function anl(sahne) {
  return { tur: 'hb', mod: 'anlatim', sahne };
}
function nesne(nesne, vurgu) {
  return { tur: 'hb', mod: 'nesne', nesne, vurgu };
}
function sahne(sahne, ozellik) {
  return { tur: 'hb', mod: 'sahne', sahne, ozellik };
}
function grup(nesneler, vurgu) {
  return { tur: 'hb', mod: 'grup', nesneler, vurgu };
}

function cevapTipiBelirle(cevap) {
  return /^(Evet|Hayır|Doğru|Yanlış)$/i.test(String(cevap)) ? 'metin' : 'metin';
}

function alistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('ad-a1', 'Mutlu olduğumuzda yüzümüzde hangi ifade olur?', 'Gülümseme', '', { gorsel: nesne('mutluluk') });
  ekle('ad-a2', 'Üzgün olduğumuzda ne hissedebiliriz?', 'Gözlerimiz dolabilir', '', { gorsel: nesne('uzuntu') });
  ekle('ad-a3', 'Ailemizde duygularımızı paylaşmak doğru mudur?', 'Evet', '', { gorsel: sahne('aile-sevgisi', 'paylasim') });
  ekle('ad-a4', 'Kızgın olduğumuzda ne yapmalıyız?', 'Sakinleşip konuşmalıyız', '', { gorsel: nesne('kizginlik'), cevapTipi: 'metin' });
  ekle('ad-a5', 'Annemize sarılmak hangi duyguyu gösterir?', 'Sevgi', '', { gorsel: nesne('sevgi') });
  ekle('ad-a6', 'Kardeşimiz ağlıyorsa ne yapmalıyız?', 'Yanında olup teselli etmeliyiz', '', { gorsel: sahne('arkadas-destek', 'empati'), cevapTipi: 'metin' });
  ekle('ad-a7', 'Korktuğumuzda kime güvenebiliriz?', 'Ailemize', '', { gorsel: nesne('korku') });
  ekle('ad-a8', 'Babamız bizi sevdiğini nasıl gösterir?', 'Bizi korur, ilgilenir ve zaman ayırır', '', { gorsel: nesne('baba', 'sevgi'), cevapTipi: 'metin' });
  ekle('ad-a9', 'Heyecanlı olduğumuzda kalbimiz nasıl atar?', 'Daha hızlı atar', '', { gorsel: nesne('heyecan') });
  ekle('ad-a10', 'Duygularımızı saklamak her zaman iyi midir?', 'Hayır', '', { gorsel: sahne('aile-iletisim', 'konusma') });
  ekle('ad-a11', 'Empati ne demektir?', 'Başkalarının duygularını anlamaya çalışmak', '', { gorsel: nesne('empati'), cevapTipi: 'metin' });
  ekle('ad-a12', 'Ailemizde kavga çıktığında ne yapmalıyız?', 'Sakin konuşarak çözüm bulmalıyız', '', { gorsel: sahne('aile-iletisim', 'konusma'), cevapTipi: 'metin' });
  ekle('ad-a13', 'Mutlu bir anı paylaşmak aileyi nasıl etkiler?', 'Herkesi mutlu eder, bağları güçlendirir', '', { gorsel: sahne('aile-sevgisi', 'mutluluk'), cevapTipi: 'metin' });
  ekle('ad-a14', 'Özür dilediğimizde hangi duyguyu gösteririz?', 'Pişmanlık ve saygı', '', { gorsel: sahne('ozur-dileme', 'ozur'), cevapTipi: 'metin' });
  ekle('ad-a15', 'Dedemiz bizi kucakladığında ne hissederiz?', 'Sevgi ve güven', '', { gorsel: grup(['dede', 'cocuk'], 'sevgi'), cevapTipi: 'metin' });
  ekle('ad-a16', 'Kıskançlık hangi duygudur?', 'Olumsuz bir duygu', '', { gorsel: sahne('arkadaslik', 'kiskanclik-yok') });
  ekle('ad-a17', 'Ailemizde birbirimize "seni seviyorum" demek güzel midir?', 'Evet', '', { gorsel: nesne('sevgi') });
  ekle('ad-a18', 'Üzüldüğümüzde annemiz bizi nasıl rahatlatır?', 'Sarılarak, dinleyerek ve anlayarak', '', { gorsel: nesne('anne', 'teselli'), cevapTipi: 'metin' });
  ekle('ad-a19', 'Temel duygulardan üçünü yaz', 'Mutluluk, üzüntü, kızgınlık', '', { gorsel: nesne('duygu-kartlari'), cevapTipi: 'metin' });
  ekle('ad-a20', 'Ailemizde sevgi neden önemlidir?', 'Bizi güvende ve mutlu hissettirir', '', { gorsel: sahne('aile-sevgisi', 'sevgi'), cevapTipi: 'metin' });
  ekle('ad-a21', 'Korktuğumuzda bağırmak yerine ne yapmalıyız?', 'Ailemize söylemeliyiz', '', { gorsel: nesne('korku') });
  ekle('ad-a22', 'Kardeşimizle oyuncak paylaşırken hangi duygu önemlidir?', 'Cömertlik ve sevgi', '', { gorsel: nesne('oyuncak', 'paylasim'), cevapTipi: 'metin' });
  ekle('ad-a23', 'Mutlu olduğumuzda ailemizle ne yapabiliriz?', 'Birlikte oynayabilir veya anlatabiliriz', '', { gorsel: sahne('birlikte-oyun', 'mutluluk'), cevapTipi: 'metin' });
  ekle('ad-a24', 'Sinirlendiğimizde eşyalara vurmak doğru mudur?', 'Hayır', '', { gorsel: nesne('kizginlik') });
  ekle('ad-a25', 'Ailemizde güven duygusu nasıl oluşur?', 'Dürüst ve sevgi dolu davranarak', '', { gorsel: sahne('guven', 'aile'), cevapTipi: 'metin' });
  ekle('ad-a26', 'Şaşırdığımızda yüzümüzde ne olur?', 'Gözlerimiz büyür, ağzımız açılır', '', { gorsel: nesne('saskinlik'), cevapTipi: 'metin' });
  ekle('ad-a27', 'Ninemiz bize masal anlatınca ne hissederiz?', 'Mutluluk ve huzur', '', { gorsel: nesne('nine', 'masal'), cevapTipi: 'metin' });
  ekle('ad-a28', 'Ailemizde herkesin duygularına saygı göstermeli miyiz?', 'Evet', '', { gorsel: sahne('aile-sevgisi', 'saygi') });
  ekle('ad-a29', 'Üzüntüyü paylaşmak bizi rahatlatır mı?', 'Evet', '', { gorsel: sahne('arkadas-destek', 'empati') });
  ekle('ad-a30', 'Babamız işten yorgun gelince ne yapabiliriz?', 'Sessiz olup ona zaman tanıyabiliriz', '', { gorsel: nesne('baba', 'yorgun'), cevapTipi: 'metin' });
  ekle('ad-a31', 'Sevinç duygusu ne zaman ortaya çıkar?', 'Güzel bir haber aldığımızda', '', { gorsel: nesne('mutluluk'), cevapTipi: 'metin' });
  ekle('ad-a32', 'Ailemizde dürüst olmak güveni artırır mı?', 'Evet', '', { gorsel: sahne('durustluk', 'guven') });
  ekle('ad-a33', 'Kardeşimiz başarılı olunca kıskanmak yerine ne yapmalıyız?', 'Onu tebrik etmeliyiz', '', { gorsel: sahne('arkadaslik', 'tebrik'), cevapTipi: 'metin' });
  ekle('ad-a34', 'Yalnız hissettiğimizde ailemiz ne yapar?', 'Yanımızda olur ve bizi dinler', '', { gorsel: sahne('aile-sevgisi', 'destek'), cevapTipi: 'metin' });
  ekle('ad-a35', 'Öfke kontrolü neden önemlidir?', 'Başkalarını incitmemek ve sağlıklı iletişim için', '', { gorsel: nesne('kizginlik'), cevapTipi: 'metin' });
  ekle('ad-a36', 'Ailecek film izlemek hangi duyguyu artırır?', 'Birliktelik ve mutluluk', '', { gorsel: sahne('aile-sevgisi', 'birlikte'), cevapTipi: 'metin' });
  ekle('ad-a37', 'Hasta olduğumuzda annemizin ilgisi bize ne hissettirir?', 'Sevildiğimizi ve önemsendiğimizi', '', { gorsel: nesne('anne', 'ilgi'), cevapTipi: 'metin' });
  ekle('ad-a38', 'Duygularımızı kelimelerle ifade etmek neden önemlidir?', 'Başkaları bizi daha iyi anlar', '', { gorsel: sahne('aile-iletisim', 'ifade'), cevapTipi: 'metin' });
  ekle('ad-a39', 'Ailemizde gülümsemek bulaşıcı mıdır?', 'Evet', '', { gorsel: nesne('mutluluk') });
  ekle('ad-a40', 'Korktuğumuzda annemiz veya babamız bizi nasıl rahatlatır?', 'Sarılarak ve güvende olduğumuzu söyleyerek', '', { gorsel: nesne('anne', 'guven'), cevapTipi: 'metin' });
  ekle('ad-a41', 'Aile büyüklerimizin duygularına saygı göstermeli miyiz?', 'Evet', '', { gorsel: grup(['dede', 'nine'], 'saygi') });
  ekle('ad-a42', 'Mutlu bir ailede en çok hangi duygu vardır?', 'Sevgi', '', { gorsel: nesne('aile') });
  ekle('ad-a43', 'Üzüntümüzü gizlemek yerine annemize anlatmak doğru mudur?', 'Evet', '', { gorsel: sahne('aile-iletisim', 'paylasim') });
  ekle('ad-a44', 'Kardeşimizle kavga ettikten sonra ne yapmalıyız?', 'Özür dileyip barışmalıyız', '', { gorsel: sahne('ozur-dileme', 'baris'), cevapTipi: 'metin' });
  ekle('ad-a45', 'Ailemizde sevgi göstermenin yollarından ikisini yaz', 'Sarılmak, teşekkür etmek', '', { gorsel: nesne('sevgi'), cevapTipi: 'metin' });
  ekle('ad-a46', 'Heyecanlı olduğumuzda nefes almak bizi sakinleştirir mi?', 'Evet', '', { gorsel: nesne('nefes') });
  ekle('ad-a47', 'Ailemizde herkesin duygusu değerli midir?', 'Evet', '', { gorsel: sahne('aile-sevgisi', 'deger') });
  ekle('ad-a48', 'Kızgınken yüksek sesle bağırmak doğru mudur?', 'Hayır', '', { gorsel: nesne('kizginlik') });
  ekle('ad-a49', 'Ailemiz bizi her halimizle sever mi?', 'Evet', '', { gorsel: nesne('aile') });
  ekle('ad-a50', 'Duygularımızı tanımak neden önemlidir?', 'Kendimizi ve başkalarını daha iyi anlarız', '', { gorsel: nesne('duygu-kartlari'), cevapTipi: 'metin' });

  return sorular;
}

function test(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('ad-t1', 'Mutlu olduğumuzda yüzümüzde ne olur?', 'Gülümseriz', ['Ağlarız', 'Gülümseriz', 'Kaşlarımızı çatarız', 'Uyuruz'], '', { gorsel: nesne('mutluluk') });
  ekle('ad-t2', 'Üzgün olduğumuzda ne hissedebiliriz?', 'Gözlerimiz dolabilir', ['Çok enerjik oluruz', 'Gözlerimiz dolabilir', 'Koşmak isteriz', 'Güleriz'], '', { gorsel: nesne('uzuntu') });
  ekle('ad-t3', 'Ailemizde duygularımızı paylaşmak doğru mudur?', 'Evet', ['Hayır', 'Sadece üzüntüyü', 'Evet', 'Hiç paylaşmayız'], '', { gorsel: sahne('aile-sevgisi', 'paylasim') });
  ekle('ad-t4', 'Kızgın olduğumuzda ne yapmalıyız?', 'Sakinleşip konuşmalıyız', ['Bağırmalıyız', 'Eşyalara vurmalıyız', 'Sakinleşip konuşmalıyız', 'Kaçmalıyız'], '', { gorsel: nesne('kizginlik') });
  ekle('ad-t5', 'Annemize sarılmak hangi duyguyu gösterir?', 'Sevgi', ['Kızgınlık', 'Korku', 'Sevgi', 'Üzüntü'], '', { gorsel: nesne('sevgi') });
  ekle('ad-t6', 'Kardeşimiz ağlıyorsa ne yapmalıyız?', 'Yanında olup teselli etmeliyiz', ['Gülmeliyiz', 'Uzaklaşmalıyız', 'Yanında olup teselli etmeliyiz', 'Bağırmalıyız'], '', { gorsel: sahne('arkadas-destek', 'empati') });
  ekle('ad-t7', 'Korktuğumuzda kime güvenebiliriz?', 'Ailemize', ['Yabancılara', 'Ailemize', 'Kimseye', 'Sadece arkadaşlara'], '', { gorsel: nesne('korku') });
  ekle('ad-t8', '🎭 Duygularımızı hiç paylaşmamak sağlıklı mıdır?', 'Hayır, paylaşmak önemlidir', ['Evet, hep saklamalıyız', 'Hayır, paylaşmak önemlidir', 'Sadece mutluluğu paylaşırız', 'Fark etmez'], 'Duygularımızı ailemizle konuşmak bizi rahatlatır!', { gorsel: sahne('aile-iletisim', 'konusma'), sasirtma: true });
  ekle('ad-t9', 'Empati ne demektir?', 'Başkalarının duygularını anlamaya çalışmak', ['Sadece kendini düşünmek', 'Başkalarının duygularını anlamaya çalışmak', 'Çok konuşmak', 'Oyun oynamak'], '', { gorsel: nesne('empati') });
  ekle('ad-t10', 'Ailemizde kavga çıktığında ne yapmalıyız?', 'Sakin konuşarak çözüm bulmalıyız', ['Daha çok bağırmalıyız', 'Sakin konuşarak çözüm bulmalıyız', 'Susmalıyız', 'Kaçmalıyız'], '', { gorsel: sahne('aile-iletisim', 'konusma') });
  ekle('ad-t11', 'Özür dilediğimizde hangi duyguyu gösteririz?', 'Pişmanlık ve saygı', ['Kızgınlık', 'Korku', 'Pişmanlık ve saygı', 'Sevinç'], '', { gorsel: sahne('ozur-dileme', 'ozur') });
  ekle('ad-t12', 'Kıskançlık hangi tür duygudur?', 'Olumsuz', ['Olumlu', 'Olumsuz', 'Nötr', 'Gerekli'], '', { gorsel: sahne('arkadaslik', 'kiskanclik-yok') });
  ekle('ad-t13', 'Ailemizde "seni seviyorum" demek güzel midir?', 'Evet', ['Hayır', 'Gereksiz', 'Evet', 'Sadece bayramda'], '', { gorsel: nesne('sevgi') });
  ekle('ad-t14', 'Üzüldüğümüzde annemiz bizi nasıl rahatlatır?', 'Sarılarak ve dinleyerek', ['Bağırmakla', 'Sarılarak ve dinleyerek', 'Görmezden gelerek', 'Cezalandırarak'], '', { gorsel: nesne('anne', 'teselli') });
  ekle('ad-t15', 'Sinirlendiğimizde eşyalara vurmak doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Her zaman'], '', { gorsel: nesne('kizginlik') });
  ekle('ad-t16', '🎭 Sadece mutlu duyguları paylaşmak yeterli midir?', 'Hayır, tüm duygularımızı paylaşabiliriz', ['Evet, sadece mutluluk', 'Hayır, tüm duygularımızı paylaşabiliriz', 'Hiç paylaşmayız', 'Sadece kızgınlık'], 'Üzüntü ve korkuyu da paylaşmak önemlidir!', { gorsel: sahne('aile-sevgisi', 'paylasim'), sasirtma: true });
  ekle('ad-t17', 'Ailemizde güven duygusu nasıl oluşur?', 'Dürüst ve sevgi dolu davranarak', ['Yalan söyleyerek', 'Dürüst ve sevgi dolu davranarak', 'Kavga ederek', 'Susarak'], '', { gorsel: sahne('guven', 'aile') });
  ekle('ad-t18', 'Kardeşimiz başarılı olunca ne yapmalıyız?', 'Onu tebrik etmeliyiz', ['Kıskanmalıyız', 'Onu tebrik etmeliyiz', 'Eleştirmeliyiz', 'Uzaklaşmalıyız'], '', { gorsel: sahne('arkadaslik', 'tebrik') });
  ekle('ad-t19', 'Yalnız hissettiğimizde ailemiz ne yapar?', 'Yanımızda olur', ['Bizi yalnız bırakır', 'Yanımızda olur', 'Bağırmaya başlar', 'Görmezden gelir'], '', { gorsel: sahne('aile-sevgisi', 'destek') });
  ekle('ad-t20', 'Ailecek birlikte vakit geçirmek ne sağlar?', 'Birliktelik ve mutluluk', ['Kavga', 'Yalnızlık', 'Birliktelik ve mutluluk', 'Korku'], '', { gorsel: sahne('aile-sevgisi', 'birlikte') });
  ekle('ad-t21', 'Duygularımızı kelimelerle ifade etmek neden önemlidir?', 'Başkaları bizi daha iyi anlar', ['Gereksizdir', 'Başkaları bizi daha iyi anlar', 'Sadece yazı için', 'Kimse anlamaz'], '', { gorsel: sahne('aile-iletisim', 'ifade') });
  ekle('ad-t22', 'Korktuğumuzda annemiz bizi nasıl rahatlatır?', 'Sarılarak güvende olduğumuzu söyler', ['Bağırmaya devam eder', 'Sarılarak güvende olduğumuzu söyler', 'Görmezden gelir', 'Cezalandırır'], '', { gorsel: nesne('anne', 'guven') });
  ekle('ad-t23', 'Aile büyüklerimize saygı göstermeli miyiz?', 'Evet', ['Hayır', 'Sadece bayramda', 'Evet', 'Gereksiz'], '', { gorsel: grup(['dede', 'nine'], 'saygi') });
  ekle('ad-t24', 'Mutlu bir ailede en çok hangi duygu vardır?', 'Sevgi', ['Kızgınlık', 'Korku', 'Sevgi', 'Kıskançlık'], '', { gorsel: nesne('aile') });
  ekle('ad-t25', '🎭 Ailemiz bizi sadece başarılı olduğumuzda mı sever?', 'Hayır, her halimizle sever', ['Evet, sadece başarılıyken', 'Hayır, her halimizle sever', 'Sadece mutlu olduğumuzda', 'Hiç sevmez'], 'Aile sevgisi koşulsuzdur!', { gorsel: nesne('aile'), sasirtma: true });
  ekle('ad-t26', 'Heyecanlı olduğumuzda kalbimiz nasıl atar?', 'Daha hızlı', ['Durur', 'Daha hızlı', 'Yavaşlar', 'Fark etmez'], '', { gorsel: nesne('heyecan') });
  ekle('ad-t27', 'Üzüntüyü paylaşmak bizi rahatlatır mı?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Daha kötü yapar'], '', { gorsel: sahne('arkadas-destek', 'empati') });
  ekle('ad-t28', 'Kardeşimizle kavga ettikten sonra ne yapmalıyız?', 'Özür dileyip barışmalıyız', ['Asla konuşmamalıyız', 'Özür dileyip barışmalıyız', 'Daha çok kavga etmeliyiz', 'Kaçmalıyız'], '', { gorsel: sahne('ozur-dileme', 'baris') });
  ekle('ad-t29', 'Ailemizde dürüst olmak güveni artırır mı?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Güveni azaltır'], '', { gorsel: sahne('durustluk', 'guven') });
  ekle('ad-t30', 'Kızgınken yüksek sesle bağırmak doğru mudur?', 'Hayır', ['Evet', 'Her zaman', 'Hayır', 'Bazen olur'], '', { gorsel: nesne('kizginlik') });
  ekle('ad-t31', 'Şaşırdığımızda yüzümüzde ne olur?', 'Gözlerimiz büyür', ['Uyuruz', 'Gözlerimiz büyür', 'Ağlarız', 'Koşarız'], '', { gorsel: nesne('saskinlik') });
  ekle('ad-t32', 'Hasta olduğumuzda annemizin ilgisi bize ne hissettirir?', 'Sevildiğimizi', ['Kızdığımızı', 'Sevildiğimizi', 'Yalnız olduğumuzu', 'Cezalandırıldığımızı'], '', { gorsel: nesne('anne', 'ilgi') });
  ekle('ad-t33', 'Ailemizde herkesin duygusuna saygı göstermeli miyiz?', 'Evet', ['Hayır', 'Sadece büyüklerin', 'Evet', 'Hiç gerekmez'], '', { gorsel: sahne('aile-sevgisi', 'saygi') });
  ekle('ad-t34', '🎭 Kızgınken hemen karar vermek doğru mudur?', 'Hayır, önce sakinleşmeliyiz', ['Evet, hemen bağırmalıyız', 'Hayır, önce sakinleşmeliyiz', 'Eşyalara vurmalıyız', 'Kaçmalıyız'], 'Sakinleşince daha iyi karar veririz!', { gorsel: nesne('nefes'), sasirtma: true });
  ekle('ad-t35', 'Sevinç duygusu ne zaman ortaya çıkar?', 'Güzel bir haber aldığımızda', ['Üzüldüğümüzde', 'Güzel bir haber aldığımızda', 'Korktuğumuzda', 'Uyurken'], '', { gorsel: nesne('mutluluk') });
  ekle('ad-t36', 'Babamız bizi sevdiğini nasıl gösterir?', 'Bizi korur ve ilgilenir', ['Bağırmakla', 'Bizi korur ve ilgilenir', 'Görmezden gelmekle', 'Cezalandırmakla'], '', { gorsel: nesne('baba', 'sevgi') });
  ekle('ad-t37', 'Ailemizde gülümsemek bulaşıcı mıdır?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Sadece çocuklarda'], '', { gorsel: nesne('mutluluk') });
  ekle('ad-t38', 'Duygularımızı tanımak neden önemlidir?', 'Kendimizi daha iyi anlarız', ['Gereksizdir', 'Kendimizi daha iyi anlarız', 'Sadece büyükler için', 'Kimse anlamaz'], '', { gorsel: nesne('duygu-kartlari') });
  ekle('ad-t39', 'Ninemiz bize masal anlatınca ne hissederiz?', 'Mutluluk ve huzur', ['Korku', 'Mutluluk ve huzur', 'Kızgınlık', 'Üzüntü'], '', { gorsel: nesne('nine', 'masal') });
  ekle('ad-t40', 'Kardeşimizle oyuncak paylaşırken hangi duygu önemlidir?', 'Cömertlik', ['Kıskançlık', 'Kızgınlık', 'Cömertlik', 'Korku'], '', { gorsel: nesne('oyuncak', 'paylasim') });
  ekle('ad-t41', 'Üzüntümüzü annemize anlatmak doğru mudur?', 'Evet', ['Hayır', 'Gizlemeliyiz', 'Evet', 'Sadece babaya'], '', { gorsel: sahne('aile-iletisim', 'paylasim') });
  ekle('ad-t42', 'Ailemizde herkesin duygusu değerli midir?', 'Evet', ['Hayır', 'Sadece büyüklerin', 'Evet', 'Fark etmez'], '', { gorsel: sahne('aile-sevgisi', 'deger') });
  ekle('ad-t43', '🎭 Erkek çocuklar üzüntü hissetmez mi?', 'Hayır, herkes her duyguyu hisseder', ['Evet, sadece kızlar üzülür', 'Hayır, herkes her duyguyu hisseder', 'Erkekler ağlamaz', 'Duygu yoktur'], 'Tüm duygular herkes için doğaldır!', { gorsel: nesne('duygu-kartlari'), sasirtma: true });
  ekle('ad-t44', 'Öfke kontrolü neden önemlidir?', 'Başkalarını incitmemek için', ['Daha çok bağırmak için', 'Başkalarını incitmemek için', 'Gereksizdir', 'Sadece okulda'], '', { gorsel: nesne('kizginlik') });
  ekle('ad-t45', 'Mutlu bir anı paylaşmak aileyi nasıl etkiler?', 'Herkesi mutlu eder', ['Üzer', 'Herkesi mutlu eder', 'Kavga çıkarır', 'Fark etmez'], '', { gorsel: sahne('aile-sevgisi', 'mutluluk') });
  ekle('ad-t46', 'Heyecanlı olduğumuzda nefes almak bizi sakinleştirir mi?', 'Evet', ['Hayır', 'Evet', 'Daha heyecanlı yapar', 'Fark etmez'], '', { gorsel: nesne('nefes') });
  ekle('ad-t47', 'Ailemizde sevgi göstermenin bir yolu hangisidir?', 'Sarılmak', ['Bağırmak', 'Sarılmak', 'Kavga etmek', 'Susmak'], '', { gorsel: nesne('sevgi') });
  ekle('ad-t48', 'Korktuğumuzda bağırmak yerine ne yapmalıyız?', 'Ailemize söylemeliyiz', ['Gizlemeliyiz', 'Ailemize söylemeliyiz', 'Daha çok bağırmalıyız', 'Kaçmalıyız'], '', { gorsel: nesne('korku') });
  ekle('ad-t49', 'Temel duygulardan biri hangisidir?', 'Mutluluk', ['Masa', 'Mutluluk', 'Kalem', 'Araba'], '', { gorsel: nesne('duygu-kartlari') });
  ekle('ad-t50', '🎭 Aile ve duygularda en önemli değer hangisidir?', 'Sevgi ve empati', ['Kıskançlık', 'Kaba davranış', 'Sevgi ve empati', 'Yalan söylemek'], 'Sevgi ve empati aileyi güçlendirir!', { gorsel: anl('ad-anlatim-3'), sasirtma: true });

  return sorular;
}

export function aileDuygular(karistir) {
  return {
    id: 'aile-duygular',
    baslik: 'Aile ve Duygular',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Her insanın mutluluk, üzüntü, kızgınlık, korku ve sevinç gibi duyguları vardır. Ailemizde bu duyguları paylaşmak bizi daha mutlu ve güvende hissettirir.',
          gorsel: anl('ad-anlatim-1'),
        },
        {
          metin:
            'Üzüldüğümüzde veya korktuğumuzda annemiz ve babamız bizi dinler, sarılır. Duygularımızı kelimelerle ifade etmek çok önemlidir.',
          gorsel: anl('ad-anlatim-2'),
        },
        {
          metin:
            'Empati, başkalarının duygularını anlamaya çalışmaktır. Ailemizde sevgi, saygı ve empati en değerli duygulardır.',
          gorsel: anl('ad-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
