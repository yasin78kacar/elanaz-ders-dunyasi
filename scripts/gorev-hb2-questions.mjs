/** GOREV-HB2 — Sağlık ve Temizlik, Güvenli Yaşam, Meslekler ve Çalışma Hayatı (150 görselli soru). */

const KAZANIM = {
  ST: 'HB.2.2.1',
  GY: 'HB.2.2.2',
  MC: 'HB.2.2.3',
};

function anl(sahne) {
  return { tur: 'hb', mod: 'anlatim', sahne };
}
function nesne(nesne, vurgu) {
  return { tur: 'hb', mod: 'nesne', nesne, vurgu };
}
function grup(nesneler, vurgu) {
  return { tur: 'hb', mod: 'grup', nesneler, vurgu };
}
function sahne(sahne, ozellik) {
  return { tur: 'hb', mod: 'sahne', sahne, ozellik };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function saglikVeTemizlikAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ST,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('st-a1', 'Dişlerimizi günde kaç defa fırçalamalıyız?', 'Günde en az iki defa, sabah ve akşam, ikişer dakika', '', { gorsel: nesne('dis-fircasi', 'fircalama'), cevapTipi: 'metin' });
  ekle('st-a2', 'Sağlıklı çocuk kaç saat uyumalıdır?', '7-8 yaşında 9-10 saat', '', { gorsel: sahne('uyku', 'saglik'), cevapTipi: 'metin' });
  ekle('st-a3', 'Burnumuzu temizlemek için ne kullanmalıyız?', 'Kağıt mendil, işimiz bitince çöpe atmalıyız', '', { gorsel: nesne('mendil', 'temizlik'), cevapTipi: 'metin' });
  ekle('st-a4', 'Meyveleri yemeden önce ne yapmalıyız?', 'Bol suyla iyice yıkamalıyız', '', { gorsel: sahne('meyve-yikama', 'temizlik'), cevapTipi: 'metin' });
  ekle('st-a5', 'Tırnaklarımızı ne sıklıkla kesmeliyiz?', 'Haftada bir kez düzenli kesmeliyiz', '', { gorsel: nesne('tirnak-makasi'), cevapTipi: 'metin' });
  ekle('st-a6', 'Günde kaç bardak su içmeliyiz?', 'En az 5-6 bardak', '', { gorsel: sahne('su-icme', 'saglik'), cevapTipi: 'metin' });
  ekle('st-a7', 'Kışın kıyafet seçimini neye göre yapmalıyız?', 'Hava durumuna göre, mevsime uygun kalın kıyafetler seçmeliyiz', '', { gorsel: nesne('mont', 'mevsim'), cevapTipi: 'metin' });
  ekle('st-a8', 'Son kullanma tarihi geçmiş yiyecekleri yersek ne olur?', 'Zehilenebilir ve midemiz hastalanabilir', '', { gorsel: nesne('yiyecek', 'tarih'), cevapTipi: 'metin' });
  ekle('st-a9', 'İlaçları nerede satın alırız?', 'Eczanede', '', { gorsel: nesne('eczane') });
  ekle('st-a10', 'Düzenli spor vücudumuza ne kazandırır?', 'Kaslar ve kemikler güçlenir, zinde kalırız', '', { gorsel: sahne('spor', 'egzersiz'), cevapTipi: 'metin' });
  ekle('st-a11', 'Fazla tuz ve şeker sağlığı nasıl etkiler?', 'Kalbe, böbreklere zarar verir ve dişleri çürütür', '', { gorsel: grup(['tuz', 'seker'], 'zarar'), cevapTipi: 'metin' });
  ekle('st-a12', 'Junk food neden sağlıksızdır?', 'Vitamin yoktur, yağlı ve şekerli olduğu için zararlıdır', '', { gorsel: grup(['hamburger', 'gazoz'], 'zararli'), cevapTipi: 'metin' });
  ekle('st-a13', 'Kıyafet temizliği kişisel temizliğe girer mi?', 'Evet', '', { gorsel: nesne('corap', 'temizlik') });
  ekle('st-a14', 'Haftada kaç kez banyo yapmalıyız?', 'En az iki kez', '', { gorsel: sahne('banyo', 'temizlik'), cevapTipi: 'metin' });
  ekle('st-a15', 'Ağrı olmasa da neden diş hekimine gitmeliyiz?', 'Çürümeleri erkenden önlemek için', '', { gorsel: nesne('dis-hekimi', 'kontrol'), cevapTipi: 'metin' });
  ekle('st-a16', 'Bu besinler büyümemize nasıl yardımcı olur?', 'Protein kaynağı olarak kas büyümesini ve boy uzamasını sağlar', '', { gorsel: grup(['et', 'sut', 'yumurta'], 'protein'), cevapTipi: 'metin' });
  ekle('st-a17', 'Yere düşen yiyeceği üfleyip yemek doğru mu?', 'Hayır', '', { gorsel: sahne('dusen-yiyecek', 'mikrop') });
  ekle('st-a18', 'Bitki çayları kışın bizi nasıl korur?', 'Vücut direncini artırır, vitaminleri doldurur', '', { gorsel: nesne('bitki-cayi', 'saglik'), cevapTipi: 'metin' });
  ekle('st-a19', 'Kulak çubuğunu içeriye sokmamak neden önemlidir?', 'Kulak zarına zarar verebilir', '', { gorsel: nesne('kulak-cubugu', 'guvenlik'), cevapTipi: 'metin' });
  ekle('st-a20', 'Aşı bizi nasıl korur?', 'Mikropları tanımayı öğretir ve o hastalıklara karşı korur', '', { gorsel: nesne('asi', 'koruma'), cevapTipi: 'metin' });
  ekle('st-a21', 'Yemekte üstümüzün kirlenmemesi için ne yapmalıyız?', 'Peçete sermeliyiz', '', { gorsel: nesne('pecete', 'yemek') });
  ekle('st-a22', 'Sınıf havasının temiz kalması için ne yapmalıyız?', 'Teneffüslerde pencereleri açarak havalandırmalıyız', '', { gorsel: sahne('sinif-havalandirma', 'hava'), cevapTipi: 'metin' });
  ekle('st-a23', 'Yaz mevsiminde hangi meyveler su ihtiyacını karşılar?', 'Karpuz, kavun, şeftali gibi sulu meyveler', '', { gorsel: nesne('karpuz', 'yaz'), cevapTipi: 'metin' });
  ekle('st-a24', 'Herkesin kendi havlusu olması neden gereklidir?', 'Göz ve cilt hastalıklarının yayılmasını önlemek için', '', { gorsel: nesne('havlu', 'kisisel'), cevapTipi: 'metin' });
  ekle('st-a25', 'Yemekten sonra sofrayı hazırlayan büyüğümüze ne söylemeliyiz?', '"Eline sağlık" diyerek teşekkür etmeliyiz', '', { gorsel: sahne('yemek-sonrasi', 'tesekkur'), cevapTipi: 'metin' });

  return sorular;
}

function saglikVeTemizlikTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ST,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('st-t1', 'Hangisi en faydalı besindir?', 'Mercimek çorbası', ['Patates cipsi', 'Mercimek çorbası', 'Çikolatalı gofret', 'Jelibon'], '', { gorsel: grup(['corba', 'salata', 'yogurt'], 'saglikli') });
  ekle('st-t2', 'Ayşe ellerini yıkamadan peynir yedi, karnı ağrıdı. Sebebi nedir?', 'Mikroplar midesine gitti', ['Peynir çok beyaz', 'Mikroplar midesine gitti', 'Ekmek taze', 'Oyunda kaybetti'], '', { gorsel: sahne('el-yikama', 'mikrop') });
  ekle('st-t3', '🎭 Mehmet muzu kabuğuyla yedi. Bu davranış için ne söylenir?', 'Kabuktaki mikropları yutarak sağlığını riske attı', ['Akıllıca beslenme', 'Kabuktaki mikropları yutarak sağlığını riske attı', 'Dişleri beyazlatır', 'Daha lezzetlidir'], 'Meyveleri yemeden önce yıkamalıyız!', { gorsel: nesne('muz', 'kabuk'), sasirtma: true });
  ekle('st-t4', 'Vücudu mikroplardan koruyan A, B, C harfleriyle anılan maddeye ne denir?', 'Vitamin', ['Mikrop', 'Vitamin', 'Şeker', 'Tuz'], '', { gorsel: grup(['vitamin-a', 'vitamin-b', 'vitamin-c'], 'vitamin') });
  ekle('st-t5', 'Ali çok macun kullandı. Bu davranış için ne doğrudur?', 'Mercimek kadar koymak yeterlidir', ['Daha hızlı temizler', 'Mercimek kadar koymak yeterlidir', 'Tasarrufludur', 'Daha çok parlak yapar'], '', { gorsel: nesne('dis-fircasi', 'macun') });
  ekle('st-t6', 'Berk her gün asitli içecek içiyor. Ona ne söylemeliyiz?', 'Midene ve dişlerine zarar verir, su iç', ['Boyun uzar', 'Midene ve dişlerine zarar verir, su iç', 'Sadece gece iç', 'Şeker at'], '', { gorsel: nesne('asitli-icecek', 'zarar') });
  ekle('st-t7', 'Fatma ıslak saçla balkona çıktı. Ertesi gün ne olması beklenir?', 'Üşütüp hastalanır', ['Saçlar uzar', 'Üşütüp hastalanır', 'Boyu uzar', 'Göz rengi değişir'], '', { gorsel: sahne('islak-sac', 'usume') });
  ekle('st-t8', 'Hapşırırken ne yapmalıyız?', 'Mendil veya dirseğiyle kapatmalıdır', ['Bağırmalıyız', 'Mendil veya dirseğiyle kapatmalıdır', 'Arkadaşa üflemeli', 'Sıranın altına saklanmalı'], '', { gorsel: sahne('hapsirma', 'mendil') });
  ekle('st-t9', 'Can süt alırken pakette neye bakmalıdır?', 'Son Kullanma Tarihi', ['Paketin rengi', 'Son Kullanma Tarihi', 'Şirket amblemi', 'Paketin büyüklüğü'], '', { gorsel: nesne('sut', 'tarih') });
  ekle('st-t10', 'Hangisi kişisel bakım aracı DEĞİLDİR?', 'Bulaşık süngeri', ['Tırnak makası', 'Diş fırçası', 'Bulaşık süngeri', 'Saç tarağı'], '', { gorsel: grup(['tirnak-makasi', 'dis-fircasi', 'sac-taragi'], 'bakim') });
  ekle('st-t11', 'Sargı bezi ve yara bandı olan çantaya ne denir?', 'İlk Yardım Çantası', ['Oyun çantası', 'İlk Yardım Çantası', 'Resim çantası', 'Matematik kutusu'], '', { gorsel: nesne('ilk-yardim-cantasi') });
  ekle('st-t12', 'Selin tahtayı göremiyorsa hangi doktora gitmelidir?', 'Göz doktoru', ['Diş hekimi', 'Göz doktoru', 'Hemşire', 'Eczacı'], '', { gorsel: nesne('goz-doktoru') });
  ekle('st-t13', 'Zeynep her gün sadece patates yiyor. Bu davranış için ne söylenir?', 'Tek yönlü beslendiği için vücudu güçsüz kalır', ['Dengeli besleniyor', 'Tek yönlü beslendiği için vücudu güçsüz kalır', 'Hasta etmez', 'Atletik olur'], '', { gorsel: nesne('patates', 'tek-yonlu') });
  ekle('st-t14', '🎭 Hande aşıdan kaçtı. Bu karar için ne doğrudur?', 'Hata yaptı, aşılar mikroplardan koruyan kalkandır', ['Korkusuz ve cesur', 'Hata yaptı, aşılar mikroplardan koruyan kalkandır', 'Aşılar sadece bebekler için', 'Akıllı çocuklar yaptırmaz'], 'Aşılarımızı düzenli yaptırmalıyız!', { gorsel: nesne('asi', 'koruma'), sasirtma: true });
  ekle('st-t15', 'Yemeklerden önce ve sonra yapılması gereken temizlik nedir?', 'Elleri sabunla yıkamak', ['Saç taramak', 'Elleri sabunla yıkamak', 'Şarkı söylemek', 'Ayakkabı silmek'], '', { gorsel: sahne('el-yikama', 'sabun') });
  ekle('st-t16', 'Hastalanınca hangisi YANLIŞTIR?', 'Bilmediğimiz otları kaynatıp içmek', ['İlaçları içmek', 'Dinlenmek', 'Bilmediğimiz otları kaynatıp içmek', 'Meyve suyu içmek'], '', { gorsel: sahne('hasta-yatak', 'dinlenme') });
  ekle('st-t17', 'Hangisi hayvansal besindir ve kemikleri güçlendirir?', 'Süt ve peynir', ['Süt ve peynir', 'Elma ve armut', 'Ekmek ve makarna', 'Zeytin ve marul'], '', { gorsel: grup(['sut', 'peynir'], 'kalsiyum') });
  ekle('st-t18', 'Yusuf diş fırçalarken musluğu açık bırakıyor. Hangi kavramı unuttu?', 'Tasarrufu ve kaynakları korumayı', ['Temizliği', 'Tasarrufu ve kaynakları korumayı', 'Spor yapmayı', 'Ödev yapmayı'], '', { gorsel: sahne('dis-fircalama', 'tasarruf') });
  ekle('st-t19', 'Spor dersleri sağlığa nasıl katkı sağlar?', 'Vücudu esnek, güçlü ve sağlıklı tutar', ['Dersleri sıkıcı yapar', 'Vücudu esnek, güçlü ve sağlıklı tutar', 'Uyku getirir', 'Boy kısaltır'], '', { gorsel: sahne('spor', 'egzersiz') });
  ekle('st-t20', 'Kişisel temizliğine dikkat eden çocuk için hangisi SÖYLENEMEZ?', 'Sık mikrop kaparak yatar', ['Temizlik kokusu yayar', 'Sık mikrop kaparak yatar', 'Arkadaşları oynar', 'Tırnakları temizdir'], '', { gorsel: sahne('kisisel-bakim', 'temizlik') });
  ekle('st-t21', 'Sokakta açık satılan yiyecekler neden tehlikelidir?', 'Havadan mikrop bulaşma ihtimali yüksek', ['Çok pahalı', 'Havadan mikrop bulaşma ihtimali yüksek', 'Rengi güzel değil', 'Çok şekerli'], '', { gorsel: sahne('seyyar-tezgah', 'tehlike') });
  ekle('st-t22', 'Dişlerin çürümesini önlemek için ne kullanmalıyız?', 'Diş ipi ve fırça', ['Kürdan', 'Diş ipi ve fırça', 'Çatal ucu', 'Kağıt havlu'], '', { gorsel: grup(['dis-fircasi', 'dis-ipi'], 'dis-bakimi') });
  ekle('st-t23', '🎭 Yusuf gece tablet oynuyor, okulda uyuyor. Bu davranış için ne doğrudur?', 'Gece uykusu büyüme için şarttır, okulda uyumak yerini tutmaz', ['Zamanı iyi yönetiyor', 'Gece uykusu büyüme için şarttır, okulda uyumak yerini tutmaz', 'Tablet zinde tutar', 'Sadece yaşlılar uyur'], 'Sağlıklı çocuk 9-10 saat uyumalıdır!', { gorsel: sahne('gece-tablet', 'uyku'), sasirtma: true });
  ekle('st-t24', 'Sağlıklı yaşam için evimizi nasıl tutmalıyız?', 'Temiz, düzenli ve havalandırılmış', ['Tozlu ve dağınık', 'Temiz, düzenli ve havalandırılmış', 'Pencereleri kapalı', 'Oyuncaklarla kaplı'], '', { gorsel: sahne('temiz-ev', 'havalandirma') });
  ekle('st-t25', 'Acil sağlık için hangi numarayı aramalıyız?', '112', ['112', '155', '110', '177'], '', { gorsel: nesne('ambulans') });

  return sorular;
}

function guvenliYasamAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.GY,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('gy-a1', 'Arabaya binince ilk ne yapmalıyız?', 'Emniyet kemerimizi hemen takmalıyız', '', { gorsel: sahne('araba', 'emniyet-kemeri'), cevapTipi: 'metin' });
  ekle('gy-a2', 'Balkon demirlerine tırmanmak neden tehlikelidir?', 'Dengemizi kaybedip düşebiliriz', '', { gorsel: sahne('balkon', 'tehlike'), cevapTipi: 'metin' });
  ekle('gy-a3', 'Tanımadığı biri şeker uzatırsa ne yapmalıyız?', 'Kabul etmemeli, "Hayır" demeli ve ailemize koşmalıyız', '', { gorsel: sahne('yabanci-seker', 'guvenlik'), cevapTipi: 'metin' });
  ekle('gy-a4', 'Islak elle prize dokunursak ne olur?', 'Elektrik çarpabilir', '', { gorsel: sahne('priz', 'elektrik'), cevapTipi: 'metin' });
  ekle('gy-a5', 'Karşıya geçmek için en güvenli yer neresidir?', 'Üst geçit, alt geçit veya yaya geçidi', '', { gorsel: sahne('ust-gecit', 'guvenlik'), cevapTipi: 'metin' });
  ekle('gy-a6', 'Çocuklar arabada neden arka koltukta oturmalıdır?', 'Ani frenlerde arka koltuk daha korunaklıdır', '', { gorsel: sahne('araba', 'arka-koltuk'), cevapTipi: 'metin' });
  ekle('gy-a7', 'Yürüyen merdivende oyun oynamak doğru mu?', 'Hayır', '', { gorsel: sahne('yuruyen-merdiven', 'tehlike') });
  ekle('gy-a8', 'Bilgisayara çok yakından bakmak neye zarar verir?', 'Gözlerimize', '', { gorsel: sahne('bilgisayar', 'goz-sagligi'), cevapTipi: 'metin' });
  ekle('gy-a9', 'Yangında hangi numarayı aramalıyız?', '112', '', { gorsel: nesne('itfaiye-araci') });
  ekle('gy-a10', 'İnşaat alanına girmek neden yasaktır?', 'Taş veya demir düşebilir', '', { gorsel: sahne('insaat-alani', 'yasak'), cevapTipi: 'metin' });
  ekle('gy-a11', 'Tırabzandan aşağı kaymak neden yanlıştır?', 'Sırt üstü düşüp kafamızı çarpabiliriz', '', { gorsel: sahne('trabzan', 'tehlike'), cevapTipi: 'metin' });
  ekle('gy-a12', 'Elimizde makas varken nasıl yürümeliyiz?', 'Koşmamalı, sivri ucu aşağı tutarak sakin yürümeliyiz', '', { gorsel: nesne('makas', 'guvenlik'), cevapTipi: 'metin' });
  ekle('gy-a13', 'Şifrelerimizi arkadaşlarımıza söylemeli miyiz?', 'Hayır', '', { gorsel: sahne('internet-sifre', 'gizlilik') });
  ekle('gy-a14', 'Kaldırım yoksa yolun hangi tarafından yürümeliyiz?', 'Sol taraftan, arabaların geliş yönünün karşısından', '', { gorsel: sahne('yol-yuruyus', 'kaldirimsiz'), cevapTipi: 'metin' });
  ekle('gy-a15', 'Bisiklette hangi koruyucuları takmalıyız?', 'Kask, dizlik ve dirseklik', '', { gorsel: sahne('bisiklet', 'koruyucu'), cevapTipi: 'metin' });
  ekle('gy-a16', 'Kaynayan tencereye dokunursak ne olur?', 'Elimiz yanar', '', { gorsel: nesne('kaynar-tencere', 'yanik'), cevapTipi: 'metin' });
  ekle('gy-a17', 'Arabadan dışarı el çıkarmak neden tehlikelidir?', 'Arabalar veya dal çarpabilir', '', { gorsel: sahne('araba', 'el-cikarma'), cevapTipi: 'metin' });
  ekle('gy-a18', 'Hareket halindeki servise tutunmak doğru mu?', 'Hayır', '', { gorsel: sahne('servis', 'tehlike') });
  ekle('gy-a19', 'Depremde ne yapmalıyız?', 'Çök-Kapan-Tutun hareketini yapmalıyız', '', { gorsel: sahne('deprem', 'cok-kapan-tutun'), cevapTipi: 'metin' });
  ekle('gy-a20', 'Evde yalnızken kapıyı açmalı mıyız?', 'Hayır', '', { gorsel: sahne('kapi-gozleme', 'guvenlik') });
  ekle('gy-a21', 'Havuz kenarında koşup arkadaşı itmek neden tehlikelidir?', 'Kafasını beton kenara çarpabilir', '', { gorsel: sahne('havuz', 'tehlike'), cevapTipi: 'metin' });
  ekle('gy-a22', 'İzinsiz derin yere yüzmeli miyiz?', 'Hayır', '', { gorsel: sahne('deniz', 'siga-yuzme') });
  ekle('gy-a23', 'Kibrit ve çakmakla oynamak neye yol açar?', 'Yangın çıkmasına', '', { gorsel: nesne('kibrit', 'yangin'), cevapTipi: 'metin' });
  ekle('gy-a24', 'Acil çıkış kapıları ne işe yarar?', 'Tehlikeli anlarda binayı hızlıca terk etmemizi sağlar', '', { gorsel: nesne('acil-cikis', 'guvenlik'), cevapTipi: 'metin' });
  ekle('gy-a25', 'Süre sınırına uymak hangi özelliğimizi geliştirir?', 'Sorumluluk bilinci ve özdenetim', '', { gorsel: sahne('tablet-sure', 'sorumluluk'), cevapTipi: 'metin' });

  return sorular;
}

function guvenliYasamTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.GY,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('gy-t1', 'Yayalar için kırmızı ışık yandığında ne yapmalıyız?', 'Yeşil ışığı beklemeliyiz', ['Koşarak geçmeliyiz', 'Yeşil ışığı beklemeliyiz', 'El sallamalıyız', 'Şarkı söylemeliyiz'], '', { gorsel: nesne('trafik-isigi', 'kirmizi') });
  ekle('gy-t2', 'Ayşe\'nin topu caddeye kaçtı. Ne yapmalıdır?', 'Büyükten yardım istemelidir', ['Bakılmadan yola fırlamalı', 'Büyükten yardım istemelidir', 'Yolda ağlamalı', 'Arkadaşını itmelidir'], '', { gorsel: sahne('top-cadde', 'yardim') });
  ekle('gy-t3', '🎭 Mehmet emniyet kemerini koltuğa bağladı ama kendisi takmadı. Bu davranış için ne söylenir?', 'Arabayı kandırdı ama güvenliğini tehlikeye attı', ['Pratik zekalı', 'Arabayı kandırdı ama güvenliğini tehlikeye attı', 'Kemer sadece şoför için', 'Alarm ötmeyince güvende'], 'Emniyet kemerini mutlaka takmalıyız!', { gorsel: sahne('araba', 'emniyet-kemeri'), sasirtma: true });
  ekle('gy-t4', 'Hangisi çocuklar için güvenli kullanım aracıdır?', 'Plastik saç tarağı', ['Ütü', 'Plastik saç tarağı', 'Ocak ve çakmak', 'Matkap'], '', { gorsel: nesne('sac-taragi', 'guvenli') });
  ekle('gy-t5', 'Ali ıslak zeminde çıplak ayakla koştu. Ne olması beklenir?', 'Kayıp düşer', ['Ayaklar temizlenir', 'Kayıp düşer', 'Boyu uzar', 'Sabun biter'], '', { gorsel: sahne('islak-zemin', 'kayma') });
  ekle('gy-t6', 'Berk tablette "Ev adresinizi yazın" mesajı gördü. Ne yapmalıdır?', 'Tuzak olabilir, ailesine göstermeli', ['Adresi yazmalı', 'Tuzak olabilir, ailesine göstermeli', 'Şifresini de yazmalı', 'Ağlamalı'], '', { gorsel: sahne('internet-mesaj', 'guvenlik') });
  ekle('gy-t7', 'Fatma servis yavaşlayınca inmek istedi. Ne yapmalıdır?', 'Tamamen durmasını ve kapının açılmasını beklemeli', ['Kapıyı açıp atlamalı', 'Tamamen durmasını ve kapının açılmasını beklemeli', 'Bağırmalı', 'Camdan sarkmalı'], '', { gorsel: sahne('servis', 'inme') });
  ekle('gy-t8', 'Demir tokayı prize sokmak neye yol açar?', 'Şiddetli elektrik çarpması', ['Tokanın parlaması', 'Şiddetli elektrik çarpması', 'Müzik çalması', 'Renk değişmesi'], '', { gorsel: sahne('priz', 'elektrik') });
  ekle('gy-t9', 'Can yürürken korna duydu. Nerede yürüyor olabilir?', 'Caddenin ortasında', ['Kaldırımda', 'Caddenin ortasında', 'Koridorda', 'Çimenlerde'], '', { gorsel: sahne('cadde', 'tehlike') });
  ekle('gy-t10', 'Hangisi trafik kuralı DEĞİLDİR?', 'İki arabanın arasından fırlamak', ['Yaya geçidi kullanmak', 'İki arabanın arasından fırlamak', 'Kaldırımdan yürümek', 'Trafik polisine uymak'], '', { gorsel: sahne('trafik', 'kural') });
  ekle('gy-t11', 'Selin renkli tatlı kokulu sıvı buldu. Ne yapmalıdır?', 'Dokunmadan büyüklere sormalıdır', ['Tadına bakmalı', 'Dokunmadan büyüklere sormalıdır', 'Arkadaşına dökmelidir', 'Halıya dökmelidir'], '', { gorsel: nesne('temizlik-sisesi', 'tehlike') });
  ekle('gy-t12', 'Zeynep bisiklette köpek gördü. Nasıl davranmalıdır?', 'Sakin bir yere durdurmalı, panik yapmamalıdır', ['Bisikleti devirmelidir', 'Sakin bir yere durdurmalı, panik yapmamalıdır', 'Köpeğe doğru sürmelidir', 'İnip sarılmalıdır'], '', { gorsel: sahne('bisiklet', 'kopek') });
  ekle('gy-t13', 'Hande meyve yemek istiyor. Ne yapmalıdır?', 'Büyüğünden kesmesini rica etmeli', ['Büyük bıçakla kesmeli', 'Büyüğünden kesmesini rica etmeli', 'Bütün yutmalı', 'Kalemtıraşla soymaya çalışmalı'], '', { gorsel: nesne('bicak', 'tehlike') });
  ekle('gy-t14', '🎭 Yusuf depremde balkona koştu. Bu karar için ne doğrudur?', 'Balkonlar en çürük yerdir, büyük tehlikeye attı', ['Hızlı kurtulma yolu', 'Balkonlar en çürük yerdir, büyük tehlikeye attı', 'Balkon en güvenli', 'Balkondan uçabilir'], 'Depremde Çök-Kapan-Tutun yapmalıyız!', { gorsel: sahne('deprem', 'cok-kapan-tutun'), sasirtma: true });
  ekle('gy-t15', 'Karanlıkta tableti gözüne yakın tutmak neye yol açar?', 'Gözler bozulur ve baş ağrır', ['Kulaklar daha iyi duyar', 'Gözler bozulur ve baş ağrır', 'Şarj bitmez', 'Boy uzar'], '', { gorsel: sahne('tablet', 'goz-sagligi') });
  ekle('gy-t16', 'Kaybolunca en güvenli yardım kimden istenir?', 'Üniformalı güvenlik görevlisi veya polis', ['Herhangi yabancı', 'Üniformalı güvenlik görevlisi veya polis', 'Maskeli adam', 'Sokak kedisi'], '', { gorsel: nesne('polis', 'guvenlik') });
  ekle('gy-t17', 'Hangisi kırılınca elin kesilmesine sebep olur?', 'Cam sürahi', ['Plastik tabak', 'Cam sürahi', 'Kağıt bardak', 'Tahta kaşık'], '', { gorsel: nesne('cam-surahi', 'kesilme') });
  ekle('gy-t18', 'Yusuf çamaşır makinesine oyuncak koydu, düğmelere bastı. Bu neden tehlikelidir?', 'Elektrik kaçağı olabilir ve kendini tehlikeye atar', ['Oyuncak üşür', 'Elektrik kaçağı olabilir ve kendini tehlikeye atar', 'Rengi değişir', 'Gürültü yapar'], '', { gorsel: nesne('camasir-makinesi', 'tehlike') });
  ekle('gy-t19', 'Toplu taşımada nasıl davranmalıyız?', 'Sakince oturmalı veya demire tutunmalıyız', ['Koltukta zıplamalıyız', 'Sakince oturmalı veya demire tutunmalıyız', 'Kapıyı açmaya çalışmalıyız', 'Şoförün gözlerini kapatmalıyız'], '', { gorsel: sahne('otobus', 'guvenlik') });
  ekle('gy-t20', 'Evde gaz kokusu duyarsak ne yapmalıyız?', 'Pencereleri açmalı, büyüklere haber vermeliyiz', ['Kibrit çakmalıyız', 'Pencereleri açmalı, büyüklere haber vermeliyiz', 'Uyumalıyız', 'Lambaları açıp kapatmalıyız'], '', { gorsel: sahne('gaz-kokusu', 'tehlike') });
  ekle('gy-t21', 'Oyun araçlarını kullanmadan önce neye dikkat etmeliyiz?', 'Kırık veya kopuk olup olmadığına', ['Rengine', 'Kırık veya kopuk olup olmadığına', 'Kaç çocuk olduğuna', 'Bulut olup olmadığına'], '', { gorsel: sahne('salincak', 'kontrol') });
  ekle('gy-t22', 'Asansörde doğru davranış hangisidir?', 'Katın düğmesine bir kez basıp beklemek', ['Tüm düğmelere basmak', 'Katın düğmesine bir kez basıp beklemek', 'Kapıyı elle açmaya çalışmak', 'Aynaya resim çizmek'], '', { gorsel: sahne('asansor', 'kural') });
  ekle('gy-t23', '🎭 Can donmuş gölete çıktı. Bu davranış için ne doğrudur?', 'Buz aniden kırılıp boğulabilir, çok tehlikeli', ['Tasarruflu ve akıllı', 'Buz aniden kırılıp boğulabilir, çok tehlikeli', 'Olimpik pistten kalın', 'Yüzme öğrenmek istedi'], 'Donmuş göle çıkmak çok tehlikelidir!', { gorsel: sahne('donmus-golet', 'tehlike'), sasirtma: true });
  ekle('gy-t24', 'Tatbikat sırasında nasıl hareket etmeliyiz?', 'Öğretmenin talimatlarıyla sıra halinde sakin çıkmalıyız', ['Çığlık atarak koşmalıyız', 'Öğretmenin talimatlarıyla sıra halinde sakin çıkmalıyız', 'Sınıfta kalmalıyız', 'Altına saklanıp uyumalıyız'], '', { gorsel: sahne('tatbikat', 'cikis') });
  ekle('gy-t25', 'Tüm güvenlik kurallarının amacı nedir?', 'Sağlıklı, güvenli ve huzurlu yaşamamızı sağlamak', ['Çocukları kısıtlamak', 'Sağlıklı, güvenli ve huzurlu yaşamamızı sağlamak', 'Okulları erken kapatmak', 'Arabalar hızlansın'], '', { gorsel: sahne('mutlu-aile', 'guvenlik') });

  return sorular;
}

function mesleklerVeCalismaHayatiAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.MC,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('mc-a1', 'Öğrencilere bilgi öğreten meslek hangisidir?', 'Öğretmen', '', { gorsel: nesne('ogretmen', 'meslek') });
  ekle('mc-a2', 'Ekmek pişiren meslek sahibine ne denir?', 'Fırıncı', '', { gorsel: nesne('firinci', 'meslek') });
  ekle('mc-a3', 'Tarımla uğraşan meslek hangisidir?', 'Çiftçi', '', { gorsel: nesne('ciftci', 'meslek') });
  ekle('mc-a4', 'Restoranda yemek pişiren meslek?', 'Aşçı', '', { gorsel: nesne('asci', 'meslek') });
  ekle('mc-a5', 'Doktora yardım eden meslek?', 'Hemşire', '', { gorsel: nesne('hemsire', 'meslek') });
  ekle('mc-a6', 'Güvenliği sağlayan meslek?', 'Polis', '', { gorsel: nesne('polis', 'meslek') });
  ekle('mc-a7', 'Arabaları tamir eden meslek?', 'Oto tamircisi', '', { gorsel: nesne('oto-tamircisi', 'meslek') });
  ekle('mc-a8', 'Elbise diken meslek?', 'Terzi', '', { gorsel: nesne('terzi', 'meslek') });
  ekle('mc-a9', 'Bina projeleri çizen meslek?', 'Mühendis', '', { gorsel: nesne('muhendis', 'meslek') });
  ekle('mc-a10', 'Saç kesen meslek?', 'Berber / Kuaför', '', { gorsel: nesne('berber', 'meslek'), cevapTipi: 'metin' });
  ekle('mc-a11', 'Uçak kullanan meslek?', 'Pilot', '', { gorsel: nesne('pilot', 'meslek') });
  ekle('mc-a12', 'Tren kullanan meslek?', 'Makinist', '', { gorsel: nesne('makinist', 'meslek') });
  ekle('mc-a13', 'Manav ne satar?', 'Taze sebze ve meyve', '', { gorsel: nesne('manav', 'meslek'), cevapTipi: 'metin' });
  ekle('mc-a14', 'Tablo yapan sanatçı mesleği?', 'Ressam', '', { gorsel: nesne('ressam', 'meslek') });
  ekle('mc-a15', 'Müzik yapan meslek?', 'Şarkıcı / Müzisyen', '', { gorsel: nesne('muzisyen', 'meslek'), cevapTipi: 'metin' });
  ekle('mc-a16', 'Dişlerle ilgilenen meslek?', 'Diş hekimi', '', { gorsel: nesne('dis-hekimi', 'meslek') });
  ekle('mc-a17', 'Hayvan doktoru?', 'Veteriner', '', { gorsel: nesne('veteriner', 'meslek') });
  ekle('mc-a18', 'Mahkemede hakları savunan meslek?', 'Avukat', '', { gorsel: nesne('avukat', 'meslek') });
  ekle('mc-a19', 'Uygulama geliştiren meslek?', 'Yazılımcı / Bilgisayar Programcısı', '', { gorsel: nesne('yazilimci', 'meslek'), cevapTipi: 'metin' });
  ekle('mc-a20', 'Kütüphanedeki kitapları düzenleyen?', 'Kütüphaneci', '', { gorsel: nesne('kutuphaneci', 'meslek') });
  ekle('mc-a21', 'Başarılı öğrenci olmak için ne yapmalıyız?', 'Planlı çalışmalıyız', '', { gorsel: nesne('calisma-plani', 'plan'), cevapTipi: 'metin' });
  ekle('mc-a22', 'Ev inşaatı yapan meslek?', 'İnşaat ustası / Duvarcı', '', { gorsel: nesne('insaat-ustasi', 'meslek'), cevapTipi: 'metin' });
  ekle('mc-a23', 'Mektup ve paket getiren meslek?', 'Postacı / Kurye', '', { gorsel: nesne('postaci', 'meslek'), cevapTipi: 'metin' });
  ekle('mc-a24', 'Sokakları temizleyen meslek?', 'Temizlik görevlisi / Belediye işçisi', '', { gorsel: nesne('temizlik-gorevlisi', 'meslek'), cevapTipi: 'metin' });
  ekle('mc-a25', 'Uzaya giden meslek?', 'Astronot', '', { gorsel: nesne('astronot', 'meslek') });

  return sorular;
}

function mesleklerVeCalismaHayatiTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.MC,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('mc-t1', 'Yangınları söndüren meslek hangisidir?', 'İtfaiyeci', ['İtfaiyeci', 'Fırıncı', 'Terzi', 'Manav'], '', { gorsel: nesne('itfaiyeci', 'meslek') });
  ekle('mc-t2', 'Ayşe hayvanları sevdiği için onları iyileştirmek istiyor. Hangi mesleği seçmeli?', 'Veteriner', ['Çiftçi', 'Veteriner', 'Pilot', 'Avukat'], '', { gorsel: nesne('veteriner', 'meslek') });
  ekle('mc-t3', '🎭 Mehmet "Temizlik görevlisi önemsiz bir meslek" dedi. Bu fikir için ne doğrudur?', 'Yanılıyor; olmasaydı şehirler mikrop basardı, her meslek hayati önem taşır', ['Çok haklı', 'Yanılıyor; olmasaydı şehirler mikrop basardı, her meslek hayati önem taşır', 'Sadece okumayanlar yapar', 'Çöpler kendi yok olur'], 'Her meslek toplum için önemlidir!', { gorsel: nesne('temizlik-gorevlisi', 'meslek'), sasirtma: true });
  ekle('mc-t4', 'Mesleğinde başarılı olmak için okul yıllarında ne yapılmalıdır?', 'Planlı çalışmak ve kitap okumak', ['Ödevleri ertelemek', 'Planlı çalışmak ve kitap okumak', 'Sadece oyun oynamak', 'Sınıfta uyumak'], '', { gorsel: nesne('calisma-plani', 'plan') });
  ekle('mc-t5', 'Haberleri bize aktaran meslek hangisidir?', 'Gazeteci / Muhabir', ['Şoför', 'Gazeteci / Muhabir', 'Aşçı', 'Mühendis'], '', { gorsel: nesne('gazeteci', 'meslek') });
  ekle('mc-t6', 'Berk "Mühendis olacağım ama şimdi çalışmam gerekmez" diyor. Ne söylemeliyiz?', 'Mesleğinin temelini bugün öğreniyorsun, planlı çalışmazsan hayallerine ulaşamazsın', ['Çok haklısın', 'Mesleğinin temelini bugün öğreniyorsun, planlı çalışmazsan hayallerine ulaşamazsın', 'Sadece matematik yeter', 'Ders sadece öğretmenler için'], '', { gorsel: nesne('muhendis', 'meslek') });
  ekle('mc-t7', 'Fatma\'nın ayakkabısı açıldı. Kime gitmelidir?', 'Ayakkabı tamircisine', ['Terziye', 'Ayakkabı tamircisine', 'Berbere', 'Kasaba'], '', { gorsel: nesne('ayakkabi-tamircisi', 'meslek') });
  ekle('mc-t8', 'Etleri hazırlayan meslek sahibi kimdir?', 'Kasap', ['Balıkçı', 'Kasap', 'Manav', 'Fırıncı'], '', { gorsel: nesne('kasap', 'meslek') });
  ekle('mc-t9', 'Can her gün saatlerce TV izliyor, ödevi gece yapıyor. Temel sorunu nedir?', 'Zamanını planlamaması', ['TV çok büyük', 'Zamanını planlamaması', 'Ödevler çok kolay', 'Okul uzak'], '', { gorsel: sahne('tv-odev', 'plansizlik') });
  ekle('mc-t10', 'Hangisi doğrudan sağlığımızı korumak için çalışır?', 'Doktor', ['Polis', 'Doktor', 'Pilot', 'Çiftçi'], '', { gorsel: nesne('doktor', 'meslek') });
  ekle('mc-t11', 'İnsanları taşıyan meslek hangisidir?', 'Şoför', ['Makinist', 'Şoför', 'Pilot', 'Kaptan'], '', { gorsel: nesne('sofor', 'meslek') });
  ekle('mc-t12', 'Selin okul malzemesi almak için nereye gitmelidir?', 'Kırtasiyeye', ['Eczaneye', 'Kırtasiyeye', 'Manava', 'Pastaneye'], '', { gorsel: nesne('kirtasiye', 'alisveris') });
  ekle('mc-t13', 'Denizde gemi kullanan meslek?', 'Kaptan', ['Kaptan', 'Pilot', 'Şoför', 'Makinist'], '', { gorsel: nesne('kaptan', 'meslek') });
  ekle('mc-t14', '🎭 Yusuf "Hiç çalışmayacağım, sadece dondurma yiyeceğim" dedi. Bu plan için ne söylenir?', 'Çalışmayan hem kendine hem topluma fayda sağlayamaz', ['En mutlu insan olur', 'Çalışmayan hem kendine hem topluma fayda sağlayamaz', 'Dondurma dahi yapar', 'Sadece birinciler yer'], 'Çalışmak hem bize hem topluma fayda sağlar!', { gorsel: sahne('calisma', 'sorumluluk'), sasirtma: true });
  ekle('mc-t15', 'Tüm mesleklerin ortak amacı nedir?', 'İnsanların hayatını kolaylaştırmak', ['İnsanların hayatını kolaylaştırmak', 'Daha zengin olmak', 'Hiç dinlenmemek', 'Kavga etmek'], '', { gorsel: grup(['ogretmen', 'doktor', 'ciftci'], 'meslek') });
  ekle('mc-t16', 'İlaç geliştiren araştırmacı mesleği nedir?', 'Bilim İnsanı / Araştırmacı', ['Ressam', 'Bilim İnsanı / Araştırmacı', 'Gazeteci', 'Kütüphaneci'], '', { gorsel: nesne('bilim-insani', 'meslek') });
  ekle('mc-t17', 'Gece nöbeti tutan koruyucu meslek hangisidir?', 'Bekçi / Polis', ['Öğretmen', 'Bekçi / Polis', 'Çiftçi', 'Aşçı'], '', { gorsel: nesne('polis', 'nobet') });
  ekle('mc-t18', 'Yusuf her akşam ertesi günü planlıyor. Bu ne gösterir?', 'Sorumluluk sahibi ve planlı öğrencidir', ['Unutkanlık', 'Sorumluluk sahibi ve planlı öğrencidir', 'Çantaları seviyor', 'Uyumaktan korkuyor'], '', { gorsel: nesne('calisma-plani', 'plan') });
  ekle('mc-t19', 'Ahşap mobilya yapan meslek?', 'Marangoz', ['Demirci', 'Marangoz', 'Terzi', 'Duvarcı'], '', { gorsel: nesne('marangoz', 'meslek') });
  ekle('mc-t20', 'Meslek seçiminde en çok neye dikkat etmeli?', 'Kendi yeteneğine ve severek yapacağı işe', ['En çok para kazandırana', 'Kendi yeteneğine ve severek yapacağı işe', 'En kolay olana', 'Arkadaşının seçtiğine'], '', { gorsel: sahne('meslek-secimi', 'yetenek') });
  ekle('mc-t21', 'Para hesabı tutan meslek?', 'Muhasebeci / Bankacı', ['Muhasebeci / Bankacı', 'Aşçı', 'Pilot', 'Ressam'], '', { gorsel: nesne('bankaci', 'meslek') });
  ekle('mc-t22', 'Çiftçiler olmasaydı fabrikalar bisküvi yapabilir miydi?', 'Hayır, buğdayı çiftçiler üretir', ['Evet, bağımsız', 'Hayır, buğdayı çiftçiler üretir', 'Çakıldan yapar', 'Çiftçi çiçek yetiştirir'], '', { gorsel: nesne('ciftci', 'bugday') });
  ekle('mc-t23', '🎭 Zeynep "Dans ve tiyatro meslek değil" dedi. Bu fikir için ne doğrudur?', 'Sanat dalları da yıllarca eğitim gerektiren saygın mesleklerdir', ['Çok haklı', 'Sanat dalları da yıllarca eğitim gerektiren saygın mesleklerdir', 'Sessiz işler meslektir', 'Dansçılar para kazanamaz'], 'Sanat meslekleri de saygın ve önemlidir!', { gorsel: nesne('muzisyen', 'sanat'), sasirtma: true });
  ekle('mc-t24', 'Okul müdürünün görevi nedir?', 'Okulun düzenini, temizliğini ve eğitim kalitesini yönetmek', ['Çikolata yemek', 'Okulun düzenini, temizliğini ve eğitim kalitesini yönetmek', 'Sıralarda zıplamak', 'Top oynamak'], '', { gorsel: nesne('okul-muduru', 'meslek') });
  ekle('mc-t25', 'Planlı çalışan çocukların mutlu yetişkinler olması için en önemli yer neresidir?', 'Okul ve sınıf hayatımız', ['Alışveriş merkezleri', 'Okul ve sınıf hayatımız', 'Bilgisayar oyunları', 'Lunapark'], '', { gorsel: anl('mc-anlatim-3') });

  return sorular;
}

export function saglikVeTemizlik(karistir) {
  return {
    id: 'saglik-ve-temizlik',
    baslik: 'Sağlık ve Temizlik',
    kazanimKodu: KAZANIM.ST,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Vücudumuz en değerli giysimizdir. Mikroplar ellerimizde saklanır. Ellerimizi bol sabunla yıkamalı, hapşırırken mendil veya dirseğimizi kullanmalıyız. Kişisel bakım bizi mikroplara karşı güçlü yapar!',
          gorsel: anl('st-anlatim-1'),
        },
        {
          metin:
            'Ali her sabah yumurta ve süt yerdi. Yeşil sebzeler ve meyveler vitaminleriyle bizi güçlü kılar. Abur cuburlardan uzak durmak sağlığın altın kuralıdır.',
          gorsel: anl('st-anlatim-2'),
        },
        {
          metin:
            'Hastalanınca doktor ve hemşireye gideriz. Diş hekimine düzenli kontrole gideriz. Aşılarımızı yaptırmak sağlıklı büyümemizi sağlar.',
          gorsel: anl('st-anlatim-3'),
        },
      ],
    },
    alistirma: saglikVeTemizlikAlistirma(),
    test: saglikVeTemizlikTest(karistir),
  };
}

export function guvenliYasam(karistir) {
  return {
    id: 'guvenli-yasam',
    baslik: 'Güvenli Yaşam',
    kazanimKodu: KAZANIM.GY,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Yaya geçidinde kırmızı ışıkta bekler, yeşilde sola-sağa-sola bakarak geçeriz. Kaldırımdan yürür, yola top fırlatmamalıyız. Trafikte dikkatli olmak hayat kurtarır!',
          gorsel: anl('gy-anlatim-1'),
        },
        {
          metin:
            'Evde bıçakla oynamamalı, temizlik şişelerini içmemeliyiz. Elektrikli aletlerde aile büyüklerimizden yardım istemeliyiz.',
          gorsel: anl('gy-anlatim-2'),
        },
        {
          metin:
            'Günde sınırlı süre tablet oynarız. İnternette kişisel bilgilerimizi paylaşmayız, şüpheli durumlarda ailemize haber veririz. Teknolojiyi güvenli kullanırsak en iyi yardımcımız olur!',
          gorsel: anl('gy-anlatim-3'),
        },
      ],
    },
    alistirma: guvenliYasamAlistirma(),
    test: guvenliYasamTest(karistir),
  };
}

export function mesleklerVeCalismaHayati(karistir) {
  return {
    id: 'meslekler-ve-calisma-hayati',
    baslik: 'Meslekler ve Çalışma Hayatı',
    kazanimKodu: KAZANIM.MC,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Her meslek toplumun birer çarkıdır. Fırıncılar ekmek yapar, terziler kıyafet diker. Herkes işini sevgiyle yaparsa dünya güzel olur!',
          gorsel: anl('mc-anlatim-1'),
        },
        {
          metin:
            'Mühendisler bina çizer, pilotlar insanları taşır, çiftçiler buğday yetiştirir. Toplumdaki her meslek sahibi gizli kahramanımızdır.',
          gorsel: anl('mc-anlatim-2'),
        },
        {
          metin:
            'Eve gelince dinlenir, sonra çalışma planına bakarız. Ödevleri son dakikaya bırakmayız. Planlı çalışmak başarı kapısının anahtarıdır!',
          gorsel: anl('mc-anlatim-3'),
        },
      ],
    },
    alistirma: mesleklerVeCalismaHayatiAlistirma(),
    test: mesleklerVeCalismaHayatiTest(karistir),
  };
}
