/** GOREV-HB1 — Okul ve Sınıf, Aile ve Arkadaşlık, Toplum ve Çevre (150 görselli soru). */

const KAZANIM = {
  OS: 'HB.2.1.1',
  AA: 'HB.2.1.2',
  TC: 'HB.2.1.3',
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

function okulVeSinifAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OS,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('os-a1', 'Okulda ders çalışırken sessiz olmalı mıyız?', 'Evet', '', { gorsel: sahne('sinif-ici', 'sessizlik') });
  ekle('os-a2', 'Sınıfta konuşmak istediğimizde ne yapmalıyız?', 'El kaldırmalıyız', '', { gorsel: sahne('el-kaldirma', 'kural') });
  ekle('os-a3', 'Okul eşyalarına özen göstermeli miyiz?', 'Evet', '', { gorsel: nesne('kitap', 'ozen') });
  ekle('os-a4', 'Sınıfta masalar düzenli olmalı mı?', 'Evet', '', { gorsel: sahne('sinif-duzeni', 'duzen') });
  ekle('os-a5', 'Öğretmenimize saygılı olmalı mıyız?', 'Evet', '', { gorsel: nesne('ogretmen', 'saygi') });
  ekle('os-a6', 'Arkadaşlarımıza kaba davranmalı mıyız?', 'Hayır', '', { gorsel: nesne('arkadas', 'saygi') });
  ekle('os-a7', 'Ders araçlarından biri hangisidir?', 'Kalem', '', { gorsel: nesne('kalem') });
  ekle('os-a8', 'Kitabımızı özenle kullanmalı mıyız?', 'Evet', '', { gorsel: nesne('kitap', 'ozen') });
  ekle('os-a9', 'Öğretmenimiz konuşurken ne yapmalıyız?', 'dinlemeliyiz', '', { gorsel: sahne('ogretmen-anlatim', 'dinleme') });
  ekle('os-a10', 'Sınıfta koşmak doğru mudur?', 'Hayır', '', { gorsel: sahne('sinif-ici', 'guvenlik') });
  ekle('os-a11', 'Okul bahçesinde oynarken kurallara uymalı mıyız?', 'Evet', '', { gorsel: sahne('okul-bahcesi', 'oyun') });
  ekle('os-a12', 'Başkasının eşyasını izinsiz almalı mıyız?', 'Hayır', '', { gorsel: nesne('canta', 'izin') });
  ekle('os-a13', 'Sınıfta tahtaya yazı yazan kimdir?', 'Öğretmen', '', { gorsel: nesne('tahta') });
  ekle('os-a14', 'Defterimizi düzenli tutmalı mıyız?', 'Evet', '', { gorsel: nesne('defter', 'duzen') });
  ekle('os-a15', 'Okula zamanında gelmeli miyiz?', 'Evet', '', { gorsel: sahne('okul-kapisi', 'zamaninda') });
  ekle('os-a16', 'Sınıfta yüksek sesle bağırmak uygun mudur?', 'Hayır', '', { gorsel: sahne('sinif-ici', 'sessizlik') });
  ekle('os-a17', 'Silgimizi paylaşmak doğru bir davranış mıdır?', 'Evet', '', { gorsel: nesne('silgi', 'paylasim') });
  ekle('os-a18', 'Okulda temiz kalmalı mıyız?', 'Evet', '', { gorsel: sahne('sinif-temizligi', 'temizlik') });
  ekle('os-a19', 'Arkadaşlarımızla birlikte ders çalışmak güzel midir?', 'Evet', '', { gorsel: grup(['ogrenci', 'arkadas', 'kitap'], 'arkadas') });
  ekle('os-a20', 'Okul kurallarından üçünü yaz', 'Sessiz olmak, el kaldırmak, eşyalara özen göstermek', '', { gorsel: anl('os-anlatim-1'), cevapTipi: 'metin' });
  ekle('os-a21', 'Çöpleri yere atmak doğru mudur?', 'Hayır', '', { gorsel: nesne('cop-kutusu') });
  ekle('os-a22', 'Öğretmenimizin sözünü kesmeli miyiz?', 'Hayır', '', { gorsel: nesne('ogretmen', 'saygi') });
  ekle('os-a23', 'Sınıfta sıramıza oturmalı mıyız?', 'Evet', '', { gorsel: sahne('sinif-duzeni', 'oturma') });
  ekle('os-a24', 'Okulda öğrenmek için nereye gideriz?', 'Sınıfa', '', { gorsel: nesne('sinif') });
  ekle('os-a25', 'Ders araçlarından üçünü yaz', 'Kalem, kitap, defter', '', { gorsel: grup(['kalem', 'kitap', 'defter']), cevapTipi: 'metin' });

  return sorular;
}

function okulVeSinifTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OS,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('os-t1', 'Sınıfta konuşmak istediğimizde ne yapmalıyız?', 'El kaldırmalıyız', ['Bağırmalıyız', 'El kaldırmalıyız', 'Masaya vurmalıyız', 'Koşmalıyız'], '', { gorsel: sahne('el-kaldirma', 'kural') });
  ekle('os-t2', 'Okul eşyalarına nasıl davranmalıyız?', 'Özenle', ['Kaba', 'Özenle', 'Umursamaz', 'Kırarak'], '', { gorsel: nesne('kitap', 'ozen') });
  ekle('os-t3', 'Öğretmenimize nasıl davranmalıyız?', 'Saygılı', ['Kaba', 'Umursamaz', 'Saygılı', 'Bağırarak'], '', { gorsel: nesne('ogretmen', 'saygi') });
  ekle('os-t4', 'Ders araçlarından hangisi doğrudur?', 'Defter', ['Top', 'Araba', 'Defter', 'Taş'], '', { gorsel: grup(['kalem', 'kitap', 'defter', 'silgi'], 'defter') });
  ekle('os-t5', 'Sınıfta sessiz olmak gerekir mi?', 'Evet', ['Hayır', 'Bazen değil', 'Evet', 'Sadece öğretmen yokken'], '', { gorsel: sahne('sinif-ici', 'sessizlik') });
  ekle('os-t6', 'Arkadaşlarımıza nasıl davranmalıyız?', 'Nazik', ['Kaba', 'Kıskanç', 'Nazik', 'Kızgın'], '', { gorsel: nesne('arkadas', 'saygi') });
  ekle('os-t7', 'Okula zamanında gelmek önemli midir?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Sadece sınav günü'], '', { gorsel: sahne('okul-kapisi', 'zamaninda') });
  ekle('os-t8', '🎭 Sınıfta koşmak her zaman serbest midir?', 'Hayır', ['Evet', 'Sadece öğretmen yokken', 'Hayır', 'Her zaman evet'], 'Sınıfta güvenli ve düzenli olmalıyız!', { gorsel: sahne('sinif-ici', 'guvenlik'), sasirtma: true });
  ekle('os-t9', 'Öğretmen konuşurken ne yapmalıyız?', 'Dinlemeliyiz', ['Konuşmalıyız', 'Oynamalıyız', 'Dinlemeliyiz', 'Bağırmalıyız'], '', { gorsel: sahne('ogretmen-anlatim', 'dinleme') });
  ekle('os-t10', 'Çöpleri nereye atmalıyız?', 'Çöp kutusuna', ['Yere', 'Masaya', 'Çöp kutusuna', 'Pencereye'], '', { gorsel: nesne('cop-kutusu') });
  ekle('os-t11', 'Başkasının kalemini izinsiz almak doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Her zaman'], '', { gorsel: nesne('kalem', 'izin') });
  ekle('os-t12', 'Sınıfta masalar nasıl olmalıdır?', 'Düzenli', ['Dağınık', 'Kırık', 'Düzenli', 'Yerde'], '', { gorsel: sahne('sinif-duzeni', 'duzen') });
  ekle('os-t13', 'Defterimizi nasıl tutmalıyız?', 'Düzenli', ['Yırtık', 'Kirli', 'Düzenli', 'Kayıp'], '', { gorsel: nesne('defter', 'duzen') });
  ekle('os-t14', 'Okul bahçesinde oynarken ne yapmalıyız?', 'Kurallara uymalıyız', ['Kavga etmeliyiz', 'Kurallara uymalıyız', 'Bağırmalıyız', 'Eşyaları kırmalıyız'], '', { gorsel: sahne('okul-bahcesi', 'oyun') });
  ekle('os-t15', 'Sınıfta yüksek sesle bağırmak uygun mudur?', 'Hayır', ['Evet', 'Her zaman', 'Hayır', 'Sadece arkadaşlarla'], '', { gorsel: sahne('sinif-ici', 'sessizlik') });
  ekle('os-t16', '🎭 Öğretmenin sözünü kesmek doğru mudur?', 'Hayır', ['Evet', 'Bazen olur', 'Hayır', 'Sıkıldığımızda evet'], 'Öğretmenimizi dinlemeliyiz!', { gorsel: nesne('ogretmen', 'saygi'), sasirtma: true });
  ekle('os-t17', 'Silgimizi arkadaşımızla paylaşmak doğru mudur?', 'Evet', ['Hayır', 'Asla', 'Evet', 'Sadece öğretmen isterse'], '', { gorsel: nesne('silgi', 'paylasim') });
  ekle('os-t18', 'Sınıfta sıramıza oturmalı mıyız?', 'Evet', ['Hayır', 'Ayakta durmalıyız', 'Evet', 'Masaya çıkmalıyız'], '', { gorsel: sahne('sinif-duzeni', 'oturma') });
  ekle('os-t19', 'Okulda temiz kalmak gerekir mi?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Sadece bahçede'], '', { gorsel: sahne('sinif-temizligi', 'temizlik') });
  ekle('os-t20', '🎭 Okul kurallarına uymak neden önemlidir?', 'Güvenli ve düzenli öğrenmek için', ['Sadece öğretmen istediği için', 'Güvenli ve düzenli öğrenmek için', 'Hiç önemli değil', 'Sadece ceza yememek için'], 'Kurallar hepimizin iyiliği içindir!', { gorsel: anl('os-anlatim-1'), sasirtma: true });
  ekle('os-t21', 'Tahtaya kim yazar?', 'Öğretmen', ['Öğrenci', 'Veli', 'Öğretmen', 'Komşu'], '', { gorsel: nesne('tahta') });
  ekle('os-t22', 'Ders çalışırken ne yapmalıyız?', 'Dikkatli dinlemeliyiz', ['Oynamalıyız', 'Uyumalıyız', 'Dikkatli dinlemeliyiz', 'Koşmalıyız'], '', { gorsel: sahne('ogretmen-anlatim', 'dinleme') });
  ekle('os-t23', 'Okulda öğrenmek için nereye gideriz?', 'Sınıfa', ['Markete', 'Sınıfa', 'Hastaneye', 'Denize'], '', { gorsel: nesne('sinif') });
  ekle('os-t24', '🎭 Arkadaşımızın çantasını izinsiz açmak doğru mudur?', 'Hayır', ['Evet', 'Merak ettiğimizde evet', 'Hayır', 'Sadece oyuncak varsa'], 'Başkalarının eşyalarına saygı göstermeliyiz!', { gorsel: nesne('canta', 'izin'), sasirtma: true });
  ekle('os-t25', '🎭 Okulda en önemli davranışlardan biri hangisidir?', 'Saygı ve dinleme', ['Bağırmak', 'Kavga etmek', 'Saygı ve dinleme', 'Eşyaları kırmak'], 'Okulda saygılı ve düzenli olmalıyız!', { gorsel: anl('os-anlatim-3'), sasirtma: true });

  return sorular;
}

function aileVeArkadaslikAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.AA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('aa-a1', 'Ailemizde kimler bulunabilir?', 'Anne, baba, kardeş', '', { gorsel: nesne('aile'), cevapTipi: 'metin' });
  ekle('aa-a2', 'Ailemizde birbirimize sevgi göstermeli miyiz?', 'Evet', '', { gorsel: sahne('aile-sevgisi', 'sevgi') });
  ekle('aa-a3', 'Evde yardımlaşmak güzel midir?', 'Evet', '', { gorsel: sahne('ev-isleri', 'yardim') });
  ekle('aa-a4', 'Arkadaşlarımızla paylaşmalı mıyız?', 'Evet', '', { gorsel: nesne('oyuncak', 'paylasim') });
  ekle('aa-a5', 'Arkadaşımıza kıskanmak doğru mudur?', 'Hayır', '', { gorsel: sahne('arkadaslik', 'kiskanclik-yok') });
  ekle('aa-a6', 'Hata yaptığımızda ne yapmalıyız?', 'Özür dilemeliyiz', '', { gorsel: sahne('ozur-dileme', 'ozur') });
  ekle('aa-a7', 'Arkadaşlarımızla birlikte oynamak güzel midir?', 'Evet', '', { gorsel: sahne('birlikte-oyun', 'oyun') });
  ekle('aa-a8', 'Annemize saygılı olmalı mıyız?', 'Evet', '', { gorsel: nesne('anne', 'saygi') });
  ekle('aa-a9', 'Babamıza yardım etmeli miyiz?', 'Evet', '', { gorsel: nesne('baba', 'yardim') });
  ekle('aa-a10', 'Kardeşimize kaba davranmalı mıyız?', 'Hayır', '', { gorsel: nesne('kardes', 'saygi') });
  ekle('aa-a11', 'Arkadaşımız üzgünse ne yapmalıyız?', 'Yanında olmalıyız', '', { gorsel: sahne('arkadas-destek', 'empati'), cevapTipi: 'metin' });
  ekle('aa-a12', 'Oyuncağımızı paylaşmak doğru mudur?', 'Evet', '', { gorsel: nesne('oyuncak', 'paylasim') });
  ekle('aa-a13', 'Ailemizde sevgi önemli midir?', 'Evet', '', { gorsel: sahne('aile-sevgisi', 'sevgi') });
  ekle('aa-a14', 'Arkadaşımıza yalan söylemeli miyiz?', 'Hayır', '', { gorsel: sahne('durustluk', 'dogruluk') });
  ekle('aa-a15', 'Dedemize ve nenemize saygı göstermeli miyiz?', 'Evet', '', { gorsel: grup(['dede', 'nene'], 'saygi') });
  ekle('aa-a16', 'Evde masayı birlikte kurmak yardımlaşma mıdır?', 'Evet', '', { gorsel: sahne('ev-isleri', 'yardim') });
  ekle('aa-a17', 'Arkadaşımızın sırrını herkese anlatmalı mıyız?', 'Hayır', '', { gorsel: sahne('guven', 'sır') });
  ekle('aa-a18', 'Birbirimize "özür dilerim" demek güzel midir?', 'Evet', '', { gorsel: sahne('ozur-dileme', 'ozur') });
  ekle('aa-a19', 'Aile bireylerinden üçünü yaz', 'Anne, baba, kardeş', '', { gorsel: nesne('aile'), cevapTipi: 'metin' });
  ekle('aa-a20', 'Arkadaşlıkta en önemli şeylerden biri nedir?', 'Güven ve paylaşma', '', { gorsel: sahne('arkadaslik', 'guven'), cevapTipi: 'metin' });
  ekle('aa-a21', 'Ailemizde kavga etmek yerine ne yapmalıyız?', 'Konuşarak çözmek', '', { gorsel: sahne('aile-iletisim', 'konusma'), cevapTipi: 'metin' });
  ekle('aa-a22', 'Arkadaşımızın oyuncağını kırarsak ne yapmalıyız?', 'Özür dilemeliyiz', '', { gorsel: sahne('ozur-dileme', 'ozur') });
  ekle('aa-a23', 'Evde annemize yardım etmek güzel midir?', 'Evet', '', { gorsel: nesne('anne', 'yardim') });
  ekle('aa-a24', 'Arkadaşlarımızla dışarıda oynamak güzel midir?', 'Evet', '', { gorsel: sahne('birlikte-oyun', 'disarida') });
  ekle('aa-a25', 'İyi bir arkadaş nasıl davranır?', 'Paylaşır, yardım eder ve saygılıdır', '', { gorsel: sahne('arkadaslik', 'iyi-arkadas'), cevapTipi: 'metin' });

  return sorular;
}

function aileVeArkadaslikTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.AA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('aa-t1', 'Ailemizde kimler bulunabilir?', 'Anne ve baba', ['Sadece öğretmen', 'Anne ve baba', 'Sadece komşu', 'Sadece doktor'], '', { gorsel: nesne('aile') });
  ekle('aa-t2', 'Ailemizde birbirimize ne göstermeliyiz?', 'Sevgi', ['Kıskançlık', 'Kaba davranış', 'Sevgi', 'Kızgınlık'], '', { gorsel: sahne('aile-sevgisi', 'sevgi') });
  ekle('aa-t3', 'Evde yardımlaşmak güzel midir?', 'Evet', ['Hayır', 'Sadece büyükler', 'Evet', 'Hiç gerekmez'], '', { gorsel: sahne('ev-isleri', 'yardim') });
  ekle('aa-t4', 'Arkadaşlarımızla ne yapmalıyız?', 'Paylaşmalıyız', ['Kavga etmeliyiz', 'Kıskanmalıyız', 'Paylaşmalıyız', 'Yalan söylemeliyiz'], '', { gorsel: nesne('oyuncak', 'paylasim') });
  ekle('aa-t5', 'Arkadaşımıza kıskanmak doğru mudur?', 'Hayır', ['Evet', 'Her zaman', 'Hayır', 'Bazen olur'], '', { gorsel: sahne('arkadaslik', 'kiskanclik-yok') });
  ekle('aa-t6', 'Hata yaptığımızda ne yapmalıyız?', 'Özür dilemeliyiz', ['Kaçmalıyız', 'Özür dilemeliyiz', 'Bağırmalıyız', 'Yalan söylemeliyiz'], '', { gorsel: sahne('ozur-dileme', 'ozur') });
  ekle('aa-t7', 'Arkadaşlarımızla birlikte oynamak güzel midir?', 'Evet', ['Hayır', 'Sadece yalnız', 'Evet', 'Hiç oynamamalıyız'], '', { gorsel: sahne('birlikte-oyun', 'oyun') });
  ekle('aa-t8', '🎭 Arkadaşımızın oyuncağını izinsiz almak doğru mudur?', 'Hayır', ['Evet', 'Merak ettiğimizde evet', 'Hayır', 'Sadece küçükse'], 'Paylaşmak güzeldir ama izin almalıyız!', { gorsel: nesne('oyuncak', 'izin'), sasirtma: true });
  ekle('aa-t9', 'Annemize nasıl davranmalıyız?', 'Saygılı', ['Kaba', 'Umursamaz', 'Saygılı', 'Bağırarak'], '', { gorsel: nesne('anne', 'saygi') });
  ekle('aa-t10', 'Babamıza yardım etmek güzel midir?', 'Evet', ['Hayır', 'Sadece annemize', 'Evet', 'Hiç gerekmez'], '', { gorsel: nesne('baba', 'yardim') });
  ekle('aa-t11', 'Kardeşimize kaba davranmak doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Kızdığımızda evet'], '', { gorsel: nesne('kardes', 'saygi') });
  ekle('aa-t12', 'Arkadaşımız üzgünse ne yapmalıyız?', 'Yanında olmalıyız', ['Gülmeliyiz', 'Yanında olmalıyız', 'Uzaklaşmalıyız', 'Alay etmeliyiz'], '', { gorsel: sahne('arkadas-destek', 'empati') });
  ekle('aa-t13', 'Ailemizde sevgi önemli midir?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Sadece bayramda'], '', { gorsel: sahne('aile-sevgisi', 'sevgi') });
  ekle('aa-t14', 'Arkadaşımıza yalan söylemek doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Şaka için evet'], '', { gorsel: sahne('durustluk', 'dogruluk') });
  ekle('aa-t15', 'Dedemize ve nenemize nasıl davranmalıyız?', 'Saygılı', ['Kaba', 'Umursamaz', 'Saygılı', 'Bağırarak'], '', { gorsel: grup(['dede', 'nene'], 'saygi') });
  ekle('aa-t16', '🎭 Evde sadece annemiz mi yardımlaşmalıdır?', 'Hayır, hepimiz yardımlaşmalıyız', ['Evet, sadece annemiz', 'Hayır, hepimiz yardımlaşmalıyız', 'Hiç kimse yardım etmez', 'Sadece babamız'], 'Ailede herkes görev alır!', { gorsel: sahne('ev-isleri', 'yardim'), sasirtma: true });
  ekle('aa-t17', 'Arkadaşımızın sırrını herkese anlatmak doğru mudur?', 'Hayır', ['Evet', 'Merak ettiğimizde evet', 'Hayır', 'Sadece annemize'], '', { gorsel: sahne('guven', 'sır') });
  ekle('aa-t18', 'Birbirimize "özür dilerim" demek güzel midir?', 'Evet', ['Hayır', 'Gereksiz', 'Evet', 'Sadece büyükler'], '', { gorsel: sahne('ozur-dileme', 'ozur') });
  ekle('aa-t19', 'İyi bir arkadaş nasıl davranır?', 'Paylaşır ve yardım eder', ['Kıskanır', 'Kavga eder', 'Paylaşır ve yardım eder', 'Yalan söyler'], '', { gorsel: sahne('arkadaslik', 'iyi-arkadas') });
  ekle('aa-t20', '🎭 Arkadaşımızın başarısını kıskanmak doğru mudur?', 'Hayır, onu tebrik etmeliyiz', ['Evet, hep kıskanmalıyız', 'Hayır, onu tebrik etmeliyiz', 'Onu eleştirmeliyiz', 'Uzaklaşmalıyız'], 'İyi arkadaş birbirini destekler!', { gorsel: sahne('arkadaslik', 'kiskanclik-yok'), sasirtma: true });
  ekle('aa-t21', 'Ailemizde kavga yerine ne yapmalıyız?', 'Konuşarak çözmek', ['Bağırmak', 'Konuşarak çözmek', 'Susmak', 'Kaçmak'], '', { gorsel: sahne('aile-iletisim', 'konusma') });
  ekle('aa-t22', 'Arkadaşımızın oyuncağını kırarsak ne yapmalıyız?', 'Özür dilemeliyiz', ['Gizlemeliyiz', 'Özür dilemeliyiz', 'Kaçmalıyız', 'Suçlamalıyız'], '', { gorsel: sahne('ozur-dileme', 'ozur') });
  ekle('aa-t23', 'Evde annemize yardım etmek güzel midir?', 'Evet', ['Hayır', 'Sadece babamız', 'Evet', 'Hiç gerekmez'], '', { gorsel: nesne('anne', 'yardim') });
  ekle('aa-t24', '🎭 Paylaşmak sadece oyuncaklar için midir?', 'Hayır, sevgi ve yardım da paylaşılır', ['Evet, sadece oyuncak', 'Hayır, sevgi ve yardım da paylaşılır', 'Hiç paylaşmayız', 'Sadece yemek için'], 'Paylaşmak güzel bir davranıştır!', { gorsel: sahne('aile-sevgisi', 'paylasim'), sasirtma: true });
  ekle('aa-t25', '🎭 Aile ve arkadaşlıkta en önemli değer hangisidir?', 'Sevgi ve saygı', ['Kıskançlık', 'Yalan', 'Sevgi ve saygı', 'Kaba davranış'], 'Sevgi ve saygı ilişkilerimizi güçlendirir!', { gorsel: anl('aa-anlatim-3'), sasirtma: true });

  return sorular;
}

function toplumVeCevreAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TC,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('tc-a1', 'Hastaları tedavi eden meslek hangisidir?', 'Doktor', '', { gorsel: nesne('doktor') });
  ekle('tc-a2', 'Güvenliğimizi sağlayan meslek hangisidir?', 'Polis', '', { gorsel: nesne('polis') });
  ekle('tc-a3', 'Yangın söndüren meslek hangisidir?', 'İtfaiyeci', '', { gorsel: nesne('itfaiyeci') });
  ekle('tc-a4', 'Komşularımıza nasıl davranmalıyız?', 'Saygılı', '', { gorsel: nesne('komsu', 'saygi') });
  ekle('tc-a5', 'Çevremizi temiz tutmalı mıyız?', 'Evet', '', { gorsel: sahne('temiz-cevre', 'temizlik') });
  ekle('tc-a6', 'Çöpleri yere atmak doğru mudur?', 'Hayır', '', { gorsel: nesne('cop-kutusu') });
  ekle('tc-a7', 'Geri dönüşüm nedir?', 'Atıkları yeniden kullanmak', '', { gorsel: nesne('geri-donusum'), cevapTipi: 'metin' });
  ekle('tc-a8', 'Kırmızı ışıkta ne yapmalıyız?', 'Durmalıyız', '', { gorsel: nesne('trafik-isigi', 'kirmizi') });
  ekle('tc-a9', 'Yeşil ışıkta yaya ne yapabilir?', 'Geçebilir', '', { gorsel: nesne('trafik-isigi', 'yesil') });
  ekle('tc-a10', 'Parkları temiz tutmalı mıyız?', 'Evet', '', { gorsel: sahne('park', 'temizlik') });
  ekle('tc-a11', 'Ağaçları korumalı mıyız?', 'Evet', '', { gorsel: nesne('agac', 'koruma') });
  ekle('tc-a12', 'Kamu kurallarına uymalı mıyız?', 'Evet', '', { gorsel: sahne('kamu-kurallari', 'kural') });
  ekle('tc-a13', 'Plastik şişeleri geri dönüşüme atmalı mıyız?', 'Evet', '', { gorsel: nesne('geri-donusum', 'plastik') });
  ekle('tc-a14', 'Komşumuza selam vermek güzel midir?', 'Evet', '', { gorsel: nesne('komsu', 'selam') });
  ekle('tc-a15', 'Sokakları kirletmek doğru mudur?', 'Hayır', '', { gorsel: sahne('temiz-sokak', 'temizlik') });
  ekle('tc-a16', 'Doktor ne iş yapar?', 'Hastaları tedavi eder', '', { gorsel: nesne('doktor', 'meslek'), cevapTipi: 'metin' });
  ekle('tc-a17', 'Polis ne iş yapar?', 'Güvenliği sağlar', '', { gorsel: nesne('polis', 'meslek'), cevapTipi: 'metin' });
  ekle('tc-a18', 'İtfaiyeci ne iş yapar?', 'Yangın söndürür', '', { gorsel: nesne('itfaiyeci', 'meslek'), cevapTipi: 'metin' });
  ekle('tc-a19', 'Çevreyi korumak neden önemlidir?', 'Sağlıklı yaşamak için', '', { gorsel: sahne('temiz-cevre', 'koruma'), cevapTipi: 'metin' });
  ekle('tc-a20', 'Trafik kurallarına uymak gerekir mi?', 'Evet', '', { gorsel: nesne('trafik-isigi') });
  ekle('tc-a21', 'Kağıtları geri dönüşüme atmalı mıyız?', 'Evet', '', { gorsel: nesne('geri-donusum', 'kagit') });
  ekle('tc-a22', 'Toplumda yaşayan mesleklerden üçünü yaz', 'Doktor, polis, itfaiyeci', '', { gorsel: grup(['doktor', 'polis', 'itfaiyeci']), cevapTipi: 'metin' });
  ekle('tc-a23', 'Yaya geçidinde ne yapmalıyız?', 'Dikkatli geçmeliyiz', '', { gorsel: sahne('yaya-gecidi', 'guvenlik'), cevapTipi: 'metin' });
  ekle('tc-a24', 'Çiçekleri koparmak doğru mudur?', 'Hayır', '', { gorsel: nesne('cicek', 'koruma') });
  ekle('tc-a25', 'Temiz bir çevre için ne yapmalıyız?', 'Çöpleri kutuya atmalıyız', '', { gorsel: sahne('temiz-cevre', 'cop'), cevapTipi: 'metin' });

  return sorular;
}

function toplumVeCevreTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TC,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('tc-t1', 'Hastaları tedavi eden meslek hangisidir?', 'Doktor', ['Polis', 'İtfaiyeci', 'Doktor', 'Öğretmen'], '', { gorsel: nesne('doktor') });
  ekle('tc-t2', 'Güvenliğimizi sağlayan meslek hangisidir?', 'Polis', ['Doktor', 'Polis', 'İtfaiyeci', 'Aşçı'], '', { gorsel: nesne('polis') });
  ekle('tc-t3', 'Yangın söndüren meslek hangisidir?', 'İtfaiyeci', ['Doktor', 'Polis', 'İtfaiyeci', 'Berber'], '', { gorsel: nesne('itfaiyeci') });
  ekle('tc-t4', 'Komşularımıza nasıl davranmalıyız?', 'Saygılı', ['Kaba', 'Umursamaz', 'Saygılı', 'Bağırarak'], '', { gorsel: nesne('komsu', 'saygi') });
  ekle('tc-t5', 'Çevremizi temiz tutmalı mıyız?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Sadece evde'], '', { gorsel: sahne('temiz-cevre', 'temizlik') });
  ekle('tc-t6', 'Çöpleri nereye atmalıyız?', 'Çöp kutusuna', ['Yere', 'Denize', 'Çöp kutusuna', 'Sokağa'], '', { gorsel: nesne('cop-kutusu') });
  ekle('tc-t7', 'Geri dönüşüm ne demektir?', 'Atıkları yeniden kullanmak', ['Çöpleri yere atmak', 'Atıkları yeniden kullanmak', 'Ağaç kesmek', 'Suyu kirletmek'], '', { gorsel: nesne('geri-donusum') });
  ekle('tc-t8', '🎭 Kırmızı ışıkta koşarak geçmek doğru mudur?', 'Hayır', ['Evet', 'Acelemiz varsa evet', 'Hayır', 'Kimse yoksa evet'], 'Kırmızı ışıkta durmalıyız!', { gorsel: nesne('trafik-isigi', 'kirmizi'), sasirtma: true });
  ekle('tc-t9', 'Yeşil ışıkta yaya ne yapabilir?', 'Geçebilir', ['Durmalı', 'Koşmalı', 'Geçebilir', 'Uyumalı'], '', { gorsel: nesne('trafik-isigi', 'yesil') });
  ekle('tc-t10', 'Parkları temiz tutmalı mıyız?', 'Evet', ['Hayır', 'Fark etmez', 'Evet', 'Sadece yazın'], '', { gorsel: sahne('park', 'temizlik') });
  ekle('tc-t11', 'Ağaçları korumalı mıyız?', 'Evet', ['Hayır', 'Kesebiliriz', 'Evet', 'Fark etmez'], '', { gorsel: nesne('agac', 'koruma') });
  ekle('tc-t12', 'Kamu kurallarına uymalı mıyız?', 'Evet', ['Hayır', 'Sadece okulda', 'Evet', 'Hiç gerekmez'], '', { gorsel: sahne('kamu-kurallari', 'kural') });
  ekle('tc-t13', 'Plastik şişeleri nereye atmalıyız?', 'Geri dönüşüme', ['Yere', 'Denize', 'Geri dönüşüme', 'Sokağa'], '', { gorsel: nesne('geri-donusum', 'plastik') });
  ekle('tc-t14', 'Komşumuza selam vermek güzel midir?', 'Evet', ['Hayır', 'Gereksiz', 'Evet', 'Sadece bayramda'], '', { gorsel: nesne('komsu', 'selam') });
  ekle('tc-t15', 'Sokakları kirletmek doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Kimse görmezse'], '', { gorsel: sahne('temiz-sokak', 'temizlik') });
  ekle('tc-t16', '🎭 Doktor sadece çocuklara mı bakar?', 'Hayır, herkese bakar', ['Evet, sadece çocuklara', 'Hayır, herkese bakar', 'Sadece kedilere', 'Hiç kimseye bakmaz'], 'Doktor tüm hastalara yardım eder!', { gorsel: nesne('doktor', 'meslek'), sasirtma: true });
  ekle('tc-t17', 'Polis ne iş yapar?', 'Güvenliği sağlar', ['Yemek yapar', 'Güvenliği sağlar', 'Ders anlatır', 'Ağaç diker'], '', { gorsel: nesne('polis', 'meslek') });
  ekle('tc-t18', 'İtfaiyeci ne iş yapar?', 'Yangın söndürür', ['Hasta tedavi eder', 'Yangın söndürür', 'Trafik yönetir', 'Kitap satar'], '', { gorsel: nesne('itfaiyeci', 'meslek') });
  ekle('tc-t19', 'Çevreyi korumak neden önemlidir?', 'Sağlıklı yaşamak için', ['Hiç önemli değil', 'Sağlıklı yaşamak için', 'Sadece öğretmen istedi', 'Çirkin görünür diye'], '', { gorsel: sahne('temiz-cevre', 'koruma') });
  ekle('tc-t20', '🎭 Geri dönüşüm sadece cam için midir?', 'Hayır, plastik ve kağıt da geri dönüşür', ['Evet, sadece cam', 'Hayır, plastik ve kağıt da geri dönüşür', 'Hiçbir şey geri dönüşmez', 'Sadece metal'], 'Birçok atık geri dönüştürülebilir!', { gorsel: nesne('geri-donusum'), sasirtma: true });
  ekle('tc-t21', 'Trafik kurallarına uymak gerekir mi?', 'Evet', ['Hayır', 'Sadece arabalar için', 'Evet', 'Hiç gerekmez'], '', { gorsel: nesne('trafik-isigi') });
  ekle('tc-t22', 'Kağıtları nereye atmalıyız?', 'Geri dönüşüme', ['Yere', 'Sokağa', 'Geri dönüşüme', 'Denize'], '', { gorsel: nesne('geri-donusum', 'kagit') });
  ekle('tc-t23', 'Yaya geçidinde ne yapmalıyız?', 'Dikkatli geçmeliyiz', ['Koşarak geçmeliyiz', 'Dikkatli geçmeliyiz', 'Göz kapalı geçmeliyiz', 'Beklemeden geçmeliyiz'], '', { gorsel: sahne('yaya-gecidi', 'guvenlik') });
  ekle('tc-t24', '🎭 Parkta çiçekleri koparmak serbest midir?', 'Hayır', ['Evet', 'Güzel görünüyorsa evet', 'Hayır', 'Kimse görmezse'], 'Doğayı ve çiçekleri korumalıyız!', { gorsel: nesne('cicek', 'koruma'), sasirtma: true });
  ekle('tc-t25', '🎭 Temiz çevre sadece evimizde mi önemlidir?', 'Hayır, her yerde önemlidir', ['Evet, sadece evde', 'Hayır, her yerde önemlidir', 'Hiç önemli değil', 'Sadece okulda'], 'Okul, park ve sokak da temiz olmalı!', { gorsel: anl('tc-anlatim-3'), sasirtma: true });

  return sorular;
}

export function okulVeSinif(karistir) {
  return {
    id: 'okul-ve-sinif',
    baslik: 'Okul ve Sınıf',
    kazanimKodu: KAZANIM.OS,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Okulda kurallara uymalıyız: Sessiz olmak, el kaldırmak, öğretmenimizi dinlemek ve okul eşyalarına özen göstermek önemlidir.',
          gorsel: anl('os-anlatim-1'),
        },
        {
          metin:
            'Sınıfımızı düzenli tutmalıyız. Masalarımız düzenli, çöplerimiz çöp kutusunda olmalı. Temiz ve düzenli sınıfta daha iyi öğreniriz.',
          gorsel: anl('os-anlatim-2'),
        },
        {
          metin:
            'Öğretmenimiz bize bilgi verir, arkadaşlarımızla birlikte öğreniriz. Birbirimize saygılı ve yardımsever olmalıyız.',
          gorsel: anl('os-anlatim-3'),
        },
      ],
    },
    alistirma: okulVeSinifAlistirma(),
    test: okulVeSinifTest(karistir),
  };
}

export function aileVeArkadaslik(karistir) {
  return {
    id: 'aile-ve-arkadaslik',
    baslik: 'Aile ve Arkadaşlık',
    kazanimKodu: KAZANIM.AA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Ailemizde anne, baba, kardeş, dede ve nene gibi bireyler bulunur. Ailemizde birbirimize sevgi gösterir, yardımlaşırız.',
          gorsel: anl('aa-anlatim-1'),
        },
        {
          metin:
            'Arkadaşlarımızla paylaşır, birlikte oynarız. Kıskançlık yapmamalı, hata yaptığımızda özür dilemeliyiz.',
          gorsel: anl('aa-anlatim-2'),
        },
        {
          metin:
            'İyi bir arkadaş paylaşır, yardım eder ve dürüsttür. Ailemizde ve arkadaşlıkta sevgi ve saygı en önemli değerlerdir.',
          gorsel: anl('aa-anlatim-3'),
        },
      ],
    },
    alistirma: aileVeArkadaslikAlistirma(),
    test: aileVeArkadaslikTest(karistir),
  };
}

export function toplumVeCevre(karistir) {
  return {
    id: 'toplum-ve-cevre',
    baslik: 'Toplum ve Çevre',
    kazanimKodu: KAZANIM.TC,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Toplumda farklı meslekler vardır: Doktor hastaları tedavi eder, polis güvenliği sağlar, itfaiyeci yangın söndürür.',
          gorsel: anl('tc-anlatim-1'),
        },
        {
          metin:
            'Komşularımıza saygılı olur, selam veririz. Çevremizi temiz tutar, çöpleri çöp kutusuna atarız.',
          gorsel: anl('tc-anlatim-2'),
        },
        {
          metin:
            'Geri dönüşüm atıkları yeniden kullanmaktır. Trafik kurallarına uyar, kamu kurallarına saygı gösteririz. Temiz çevre sağlıklı yaşam demektir.',
          gorsel: anl('tc-anlatim-3'),
        },
      ],
    },
    alistirma: toplumVeCevreAlistirma(),
    test: toplumVeCevreTest(karistir),
  };
}
