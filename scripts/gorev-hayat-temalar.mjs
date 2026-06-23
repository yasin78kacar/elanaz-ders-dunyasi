/** Hayat Bilgisi T1–T10 — tema başına 100 görselli soru. */

import { aileVeArkadaslik, toplumVeCevre } from './gorev-hb1-questions.mjs';
import { okulTema3 } from './gorev-hayat-tema3-questions.mjs';
import { saglikVeTemizlik, guvenliYasam, mesleklerVeCalismaHayati } from './gorev-hb2-questions.mjs';
import { dogalAfetlerVeKorunma } from './gorev-hb3-questions.mjs';
import { aileDuygular } from './gorev-hayat-duygular-questions.mjs';
import { birlestir100, genislet100 } from './tema-konu-builder.mjs';

const K = {
  AA: 'HB.2.1.2',
  OS: 'HB.2.1.1',
  TC: 'HB.2.1.3',
  ST: 'HB.2.2.1',
  GY: 'HB.2.2.2',
  CE: 'HB.2.2.4',
  IL: 'HB.2.2.5',
  DY: 'HB.2.1.4',
  YB: 'HB.2.3.4',
};

function anl(sahne) {
  return { tur: 'hb', mod: 'anlatim', sahne };
}
function nesne(n, vurgu) {
  return { tur: 'hb', mod: 'nesne', nesne: n, vurgu };
}
function sahne(s, ozellik) {
  return { tur: 'hb', mod: 'sahne', sahne: s, ozellik };
}
function grup(nesneler, vurgu) {
  return { tur: 'hb', mod: 'grup', nesneler, vurgu };
}

function sablonA(sablonlar, kazanim, onek) {
  return sablonlar.map(([soru, cevap, gorsel], i) => ({
    id: `${onek}-e${i + 1}`,
    kazanimKodu: kazanim,
    tip: 'yazili',
    soru,
    dogruCevap: String(cevap),
    ipucu: '',
    cevapTipi: 'metin',
    gorsel,
  }));
}

function sablonT(sablonlar, kazanim, onek, karistir) {
  return sablonlar.map(([soru, cevap, secenekler, gorsel], i) => ({
    id: `${onek}-e${i + 1}`,
    kazanimKodu: kazanim,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler: karistir(secenekler),
    ipucu: '',
    gorsel,
  }));
}

const EV_EK_A = [
  ['Evimizde odalarımız düzenli olmalı mı?', 'Evet', sahne('ev-duzeni', 'duzen')],
  ['Yatak odasında uyuruz.', 'Doğru', nesne('yatak')],
  ['Mutfakta yemek pişirilir.', 'Doğru', sahne('mutfak', 'yemek')],
  ['Banyoda temizleniriz.', 'Doğru', sahne('banyo', 'temizlik')],
  ['Salonda ailece vakit geçiririz.', 'Doğru', sahne('aile-sevgisi', 'birlikte')],
  ['Ev eşyalarına özen göstermeliyiz.', 'Evet', nesne('masa', 'ozen')],
  ['Evde ayakkabılarımızı düzenli koymalıyız.', 'Evet', sahne('ev-duzeni', 'duzen')],
  ['Evde elektrikli aletlere dikkatli yaklaşmalıyız.', 'Evet', nesne('fis', 'guvenlik')],
  ['Evimizde misafir gelince ne yaparız?', 'Karşılarız', sahne('misafir', 'karsilama')],
  ['Evde pencereyi açmak havalandırma sağlar.', 'Evet', sahne('ev-havalandirma', 'hava')],
  ['Evde kitaplarımızı düzenli tutmalıyız.', 'Evet', nesne('kitap', 'duzen')],
  ['Evde çöpleri çöp kutusuna atmalıyız.', 'Evet', nesne('cop-kutusu')],
  ['Evde yemek masasında birlikte otururuz.', 'Evet', sahne('yemek-masasi', 'aile')],
  ['Evde ışıkları gereksiz yere yakmamalıyız.', 'Evet', nesne('lamba', 'tasarruf')],
  ['Evde oyuncaklarımızı toplamalıyız.', 'Evet', nesne('oyuncak', 'duzen')],
  ['Evde yangın çıkarsa yetişkinlere haber veririz.', 'Evet', sahne('yangin', 'guvenlik')],
  ['Evde herkesin görevleri vardır.', 'Evet', sahne('ev-gorevleri', 'sorumluluk')],
  ['Evde misafirperver olmalıyız.', 'Evet', sahne('misafir', 'karsilama')],
  ['Evde eşyaları paylaşmak güzeldir.', 'Evet', nesne('oyuncak', 'paylasim')],
  ['Evde temiz kalmak sağlıklıdır.', 'Evet', sahne('ev-temizligi', 'temizlik')],
  ['Ev ailemizin sıcak yuvasıdır.', 'Evet', nesne('aile')],
  ['Evde bitki yetiştirmek güzel bir hobidir.', 'Evet', nesne('fidan')],
  ['Evde sessiz olmak komşulara saygıdır.', 'Evet', sahne('komsu', 'saygi')],
  ['Evde kapıyı kilitlerken dikkatli olmalıyız.', 'Evet', sahne('guvenlik', 'kapi')],
  ['Evde televizyon izlerken çok yaklaşmamalıyız.', 'Doğru', nesne('televizyon', 'saglik')],
];

const EV_EK_T = EV_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

const OK_EK_A = [
  ['Okula zamanında gitmeli miyiz?', 'Evet', sahne('okul-kapisi', 'zamaninda')],
  ['Sınıfta öğretmeni dinlemeliyiz.', 'Evet', sahne('ogretmen-anlatim', 'dinleme')],
  ['Ders araçlarımızı düzenli tutmalıyız.', 'Evet', grup(['kalem', 'kitap', 'defter'])],
  ['Teneffüste bahçede oynarız.', 'Evet', sahne('okul-bahcesi', 'oyun')],
  ['Arkadaşlarımıza yardım etmeliyiz.', 'Evet', nesne('arkadas', 'yardim')],
  ['Ödevlerimizi zamanında yapmalıyız.', 'Evet', nesne('defter', 'odev')],
  ['Okulda kurallara uymalıyız.', 'Evet', sahne('sinif-ici', 'kural')],
  ['Kütüphanede sessiz olmalıyız.', 'Evet', nesne('kutuphane')],
  ['Okulda sportif etkinliklere katılabiliriz.', 'Evet', nesne('spor')],
  ['Sınıfta el kaldırarak konuşuruz.', 'Evet', sahne('el-kaldirma', 'kural')],
  ['Okulda başkalarının eşyasına dokunmayız.', 'Evet', nesne('canta', 'izin')],
  ['Okul servisinde emniyet kemeri takarız.', 'Evet', nesne('emniyetKemeri')],
  ['Okulda öğretmenimize saygı gösteririz.', 'Evet', nesne('ogretmen', 'saygi')],
  ['Sınıf panosuna çalışmalarımızı asarız.', 'Evet', sahne('sinif-panosu', 'basari')],
  ['Okulda yeni arkadaşlar edinebiliriz.', 'Evet', nesne('arkadas')],
  ['Derslerde not almak faydalıdır.', 'Evet', nesne('defter')],
  ['Okul bahçesinde çiçeklere zarar vermeyiz.', 'Evet', nesne('fidan')],
  ['Okulda yemekhanede sıra bekleriz.', 'Evet', sahne('yemekhane', 'sira')],
  ['Okulda başarılı olmak için çalışırız.', 'Evet', nesne('kitap', 'calisma')],
  ['Okulda kavga etmek doğru değildir.', 'Evet', sahne('arkadaslik', 'baris')],
  ['Okulda ders dinlemek öğrenmemizi sağlar.', 'Evet', sahne('ogretmen-anlatim', 'dinleme')],
  ['Okulda herkesin fikrine saygı duyarız.', 'Evet', sahne('sinif-ici', 'saygi')],
  ['Okulda kitap okumayı severiz.', 'Evet', nesne('kitap')],
  ['Okul eğitim aldığımız önemli yerdir.', 'Evet', nesne('okul')],
  ['Okulda temizlik görevlilerine saygı gösteririz.', 'Evet', nesne('temizlikGorevlisi')],
];

const OK_EK_T = OK_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

const TP_EK_A = [
  ['Komşularımıza saygılı olmalıyız.', 'Evet', nesne('mahalle')],
  ['Parkları temiz tutmalıyız.', 'Evet', nesne('park')],
  ['Trafik kurallarına uymalıyız.', 'Evet', nesne('trafik')],
  ['Yaşlılara yardım etmek güzeldir.', 'Evet', nesne('dede', 'yardim')],
  ['Toplu taşımada yaşlılara yer veririz.', 'Evet', nesne('otobus')],
  ['Mahallemizde güvenli olmalıyız.', 'Evet', nesne('mahalle')],
  ['Çöpleri geri dönüşüm kutusuna atarız.', 'Evet', nesne('geri-donusum')],
  ['Toplumda yardımlaşmak önemlidir.', 'Evet', nesne('yardimlasma')],
  ['Bayrak törenine saygıyla katılırız.', 'Evet', nesne('bayrak-toreni')],
  ['Vatandaşlık görevlerimizi yerine getiririz.', 'Evet', nesne('bayrak')],
  ['Toplumda herkesin hakları vardır.', 'Evet', sahne('haklar', 'saygi')],
  ['Kırmızı ışıkta dururuz.', 'Evet', nesne('kirmizi-isik')],
  ['Kamu mallarına zarar vermeyiz.', 'Evet', sahne('kamu-mali', 'koruma')],
  ['Toplumda dürüst olmalıyız.', 'Evet', sahne('durustluk', 'guven')],
  ['Sokak hayvanlarına şefkat gösteririz.', 'Evet', nesne('kopek', 'sevgi')],
  ['Toplumda hoşgörülü olmalıyız.', 'Evet', sahne('hosgoru', 'saygi')],
  ['Seçimlerde büyüklerimiz oy kullanır.', 'Evet', nesne('secim')],
  ['Toplumda birlikte yaşarız.', 'Evet', nesne('mahalle')],
  ['Yardıma ihtiyacı olanlara destek oluruz.', 'Evet', nesne('yardimlasma')],
  ['Toplum kurallarına uymalıyız.', 'Evet', nesne('trafik')],
  ['Toplumda saygılı davranırız.', 'Evet', sahne('saygi', 'toplum')],
  ['Parkta oynarken başkalarını rahatsız etmeyiz.', 'Evet', nesne('park')],
  ['Toplumda barış içinde yaşarız.', 'Evet', sahne('baris', 'toplum')],
  ['Vatanımızı sevmeliyiz.', 'Evet', nesne('bayrak')],
  ['Toplumda sorumluluklarımız vardır.', 'Evet', anl('tc-anlatim-1')],
];

const TP_EK_T = TP_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

const SG_EK_A = [
  ['Ellerimizi sabunla yıkamalıyız.', 'Evet', nesne('sabun')],
  ['Dişlerimizi günde iki kez fırçalarız.', 'Evet', nesne('disFircasi')],
  ['Sağlıklı beslenmek önemlidir.', 'Evet', grup(['meyve', 'sebze'])],
  ['Bol su içmeliyiz.', 'Evet', sahne('su-icme', 'saglik')],
  ['Düzenli uyumak sağlıklıdır.', 'Evet', sahne('uyku', 'saglik')],
  ['Spor yapmak vücudumuzu güçlendirir.', 'Evet', nesne('spor')],
  ['Hasta olduğumuzda dinlenmeliyiz.', 'Evet', sahne('hasta', 'dinlenme')],
  ['Tırnaklarımızı temiz tutmalıyız.', 'Evet', nesne('tirnak-makasi')],
  ['Saçlarımızı düzenli yıkamalıyız.', 'Evet', sahne('sac-bakimi', 'temizlik')],
  ['Güneşte şapka takmak korur.', 'Evet', nesne('sapka', 'gunes')],
  ['Vitamin almak bağışıklığı destekler.', 'Evet', nesne('vitamin')],
  ['Cildimizi temiz tutmalıyız.', 'Evet', nesne('sabun')],
  ['Aşı olmak koruyucudur.', 'Evet', nesne('asi', 'koruma')],
  ['Sağlıklı atıştırmalıklar tercih ederiz.', 'Evet', nesne('meyve')],
  ['Hijyen sağlığımızı korur.', 'Evet', sahne('hijyen', 'temizlik')],
  ['Doktora düzenli kontrole gideriz.', 'Evet', nesne('doktor')],
  ['Temiz kıyafet giymek önemlidir.', 'Evet', nesne('corap', 'temizlik')],
  ['Burnumuzu mendille temizleriz.', 'Evet', nesne('mendil', 'temizlik')],
  ['Sağlıklı yaşam alışkanlıkları ediniriz.', 'Evet', sahne('saglikli-yasam', 'saglik')],
  ['Yemekten önce ellerimizi yıkarız.', 'Evet', nesne('sabun')],
  ['Sağlıklı olmak için spor yaparız.', 'Evet', nesne('spor')],
  ['Şekerli yiyecekleri az tüketiriz.', 'Evet', grup(['tuz', 'seker'], 'zarar')],
  ['Banyo yapmak temizlik sağlar.', 'Evet', sahne('banyo', 'temizlik')],
  ['Sağlıklı uyku büyümemize yardım eder.', 'Evet', sahne('uyku', 'saglik')],
  ['Sağlığımıza dikkat etmeliyiz.', 'Evet', anl('st-anlatim-1')],
];

const SG_EK_T = SG_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

const GV_EK_A = [
  ['Yangın çıkarsa 112\'yi ararız.', 'Evet', sahne('yangin', '112')],
  ['Depremde sağlam bir yerin altına gireriz.', 'Evet', nesne('deprem')],
  ['Trafikte kırmızı ışıkta dururuz.', 'Evet', nesne('trafik')],
  ['Evde prize dokunmadan önce yetişkin sorarız.', 'Evet', nesne('fis', 'guvenlik')],
  ['Bisiklet sürerken kask takarız.', 'Evet', nesne('bisiklet', 'kask')],
  ['Yüzme bilmiyorsak derin suya girmeyiz.', 'Evet', sahne('yuzme', 'guvenlik')],
  ['Acil durumda polisi ararız.', 'Evet', nesne('polis')],
  ['İlaçları kendi başımıza içmeyiz.', 'Evet', nesne('eczane')],
  ['Yolda koşarken etrafa dikkat ederiz.', 'Evet', nesne('trafik')],
  ['Acil çıkış kapılarını bilmeliyiz.', 'Evet', sahne('acil-cikis', 'guvenlik')],
  ['Denizde can kurtaran olmadan yüzmeyiz.', 'Evet', sahne('deniz', 'guvenlik')],
  ['Elektrikli aletleri ıslak elle tutmayız.', 'Evet', nesne('fis', 'guvenlik')],
  ['Yangın söndürücüyü bilmek önemlidir.', 'Evet', nesne('itfaiye')],
  ['Okulda acil durum tatbikatı yaparız.', 'Evet', sahne('tatbikat', 'guvenlik')],
  ['Emniyet kemeri takmak hayat kurtarır.', 'Evet', nesne('emniyetKemeri')],
  ['Yüksek yerlerden atlamayız.', 'Evet', sahne('guvenlik', 'dusme')],
  ['Güvenli yoldan yürürüz.', 'Evet', nesne('trafik')],
  ['Acil durumlarda sakin kalmalıyız.', 'Evet', sahne('sakinlik', 'guvenlik')],
  ['İtfaiyeyi yangında ararız.', 'Evet', nesne('itfaiye')],
  ['Güvenlik kuralları bizi korur.', 'Evet', anl('gy-anlatim-1')],
  ['Güvenliğimiz için kurallara uymalıyız.', 'Evet', sahne('guvenlik', 'kural')],
  ['Yabancılarla dikkatli olmalıyız.', 'Evet', sahne('guvenlik', 'yabanci')],
  ['Evde bıçak gibi keskin aletlere dikkat ederiz.', 'Evet', sahne('mutfak', 'guvenlik')],
  ['Kayıp olduğumuzda güvenli bir yere gideriz.', 'Evet', nesne('polis')],
  ['Yabancı hediyeleri kabul etmemeliyiz.', 'Dikkatli olmalıyız', sahne('guvenlik', 'yabanci')],
];

const GV_EK_T = GV_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Serbest', 'Fark etmez'], g]);

const CE_EK_A = [
  ['Ağaç dikmek çevreyi korur.', 'Evet', nesne('fidan')],
  ['Çöpleri yere atmamalıyız.', 'Evet', nesne('cop-kutusu')],
  ['Geri dönüşüm yapmak önemlidir.', 'Evet', nesne('geri-donusum')],
  ['Su tasarrufu yapmalıyız.', 'Evet', nesne('musluk')],
  ['Enerji tasarrufu çevreyi korur.', 'Evet', nesne('lamba', 'tasarruf')],
  ['Hayvanları korumalıyız.', 'Evet', nesne('agac')],
  ['Parkları temiz tutmalıyız.', 'Evet', nesne('park')],
  ['Plastik kullanımını azaltmalıyız.', 'Evet', nesne('geri-donusum')],
  ['Doğayı kirletmemeliyiz.', 'Evet', nesne('agac')],
  ['Kuşlara yem vermek güzeldir.', 'Evet', nesne('kus')],
  ['Denizleri kirletmemeliyiz.', 'Evet', sahne('deniz', 'temizlik')],
  ['Çiçekleri koparmamalıyız.', 'Evet', nesne('fidan')],
  ['Gürültü kirliliği yapmayız.', 'Evet', sahne('sessizlik', 'cevre')],
  ['Doğayı sevmeliyiz.', 'Evet', nesne('agac')],
  ['Çevre temizliği herkesin görevidir.', 'Evet', nesne('temizlik')],
  ['Atıkları ayrıştırarak geri dönüştürürüz.', 'Evet', nesne('geri-donusum')],
  ['Ormanları korumalıyız.', 'Evet', nesne('agac')],
  ['Hava kirliliğini azaltmalıyız.', 'Evet', sahne('temiz-hava', 'cevre')],
  ['Doğal kaynakları israf etmemeliyiz.', 'Evet', nesne('musluk')],
  ['Çevre bilinci önemlidir.', 'Evet', anl('tc-anlatim-2')],
  ['Bitkilere su vermek onları büyütür.', 'Evet', nesne('fidan')],
  ['Çevreyi temiz tutmak sağlıklıdır.', 'Evet', nesne('temizlik')],
  ['Doğada çöp bırakmayız.', 'Evet', nesne('cop-kutusu')],
  ['Enerji tasarrufu yaparız.', 'Evet', nesne('lamba', 'tasarruf')],
  ['Çevremizi korumak geleceğimiz içindir.', 'Evet', nesne('agac')],
];

const CE_EK_T = CE_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

const IL_EK_A = [
  ['Konuşurken karşımızdakini dinlemeliyiz.', 'Evet', sahne('dinleme', 'iletisim')],
  ['Teşekkür etmek güzel bir iletişimdir.', 'Evet', sahne('tesekkur', 'iletisim')],
  ['Özür dilemek önemlidir.', 'Evet', sahne('ozur-dileme', 'ozur')],
  ['Kibarca konuşmalıyız.', 'Evet', sahne('kibarlik', 'iletisim')],
  ['Duygularımızı sözcüklerle ifade ederiz.', 'Evet', sahne('aile-iletisim', 'ifade')],
  ['Başkalarının sözünü kesmemeliyiz.', 'Evet', sahne('dinleme', 'saygi')],
  ['Selamlaşmak iletişimin başlangıcıdır.', 'Evet', sahne('selamlasma', 'iletisim')],
  ['Hoşça kal demek güzel bir vedadır.', 'Evet', sahne('veda', 'iletisim')],
  ['Sorular sormak öğrenmemize yardım eder.', 'Evet', sahne('soru-sorma', 'iletisim')],
  ['Yalan söylemek iletişimi bozar.', 'Evet', sahne('durustluk', 'guven')],
  ['Gülümsemek olumlu iletişimdir.', 'Evet', nesne('mutluluk')],
  ['Telefonla konuşurken kibar oluruz.', 'Evet', nesne('telefon')],
  ['İletişimde sabırlı olmalıyız.', 'Evet', sahne('sabir', 'iletisim')],
  ['Fikirlerimizi açıkça söyleyebiliriz.', 'Evet', sahne('aile-iletisim', 'ifade')],
  ['İyi bir dinleyici olmak önemlidir.', 'Evet', sahne('dinleme', 'iletisim')],
  ['İletişimde saygılı olmalıyız.', 'Evet', sahne('saygi', 'iletisim')],
  ['Yardım istemek iletişimin parçasıdır.', 'Evet', sahne('yardim-isteme', 'iletisim')],
  ['Grup çalışmasında konuşarak anlaşırız.', 'Evet', grup(['ogrenci', 'arkadas'], 'iletisim')],
  ['İletişim ilişkilerimizi güçlendirir.', 'Evet', sahne('aile-iletisim', 'konusma')],
  ['Etkili iletişim başarının anahtarıdır.', 'Evet', anl('aa-anlatim-2')],
  ['Göz teması kurmak iletişimi güçlendirir.', 'Evet', sahne('goz-temasi', 'iletisim')],
  ['Telefonda yüksek sesle konuşmamalıyız.', 'Evet', nesne('telefon', 'kibarlik')],
  ['Mesajlarımızı nazikçe yazarız.', 'Evet', nesne('tablet', 'iletisim')],
  ['Beden dilimiz de iletişim kurar.', 'Evet', sahne('beden-dili', 'iletisim')],
  ['Mektuplar yazmak iletişim yoludur.', 'Evet', nesne('mektup')],
];

const IL_EK_T = IL_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

const DY_EK_A = [
  ['Mutluluk olumlu bir duygudur.', 'Evet', nesne('mutluluk')],
  ['Üzüntü hissetmek doğaldır.', 'Evet', nesne('uzuntu')],
  ['Kızgınlığı kontrol etmeliyiz.', 'Evet', nesne('kizginlik')],
  ['Korktuğumuzda yardım isteyebiliriz.', 'Evet', nesne('korku')],
  ['Sevgi en güzel duygudur.', 'Evet', nesne('sevgi')],
  ['Heyecan kalp atışımızı hızlandırır.', 'Evet', nesne('heyecan')],
  ['Şaşkınlık yeni şeyler görünce olur.', 'Evet', nesne('saskinlik')],
  ['Empati başkalarını anlamaktır.', 'Evet', nesne('empati')],
  ['Duygularımızı paylaşmak iyidir.', 'Evet', sahne('aile-sevgisi', 'paylasim')],
  ['Sinirlendiğimizde nefes alırız.', 'Evet', nesne('nefes')],
  ['Mutlu anları hatırlamak güzeldir.', 'Evet', nesne('mutluluk')],
  ['Üzüntüyü paylaşmak rahatlatır.', 'Evet', sahne('arkadas-destek', 'empati')],
  ['Kıskançlık olumsuz bir duygudur.', 'Evet', sahne('arkadaslik', 'kiskanclik-yok')],
  ['Gurur başarıda hissedilir.', 'Evet', sahne('basari', 'gurur')],
  ['Duygularımızı tanımak önemlidir.', 'Evet', nesne('duygu-kartlari')],
  ['Olumsuz duyguları yönetebiliriz.', 'Evet', nesne('nefes')],
  ['Sevinç güzel haberle gelir.', 'Evet', nesne('mutluluk')],
  ['Hüzün geçicidir.', 'Evet', nesne('uzuntu')],
  ['Duygular renkli bir palet gibidir.', 'Evet', nesne('duygu-kartlari')],
  ['Kendimizi ifade etmek sağlıklıdır.', 'Evet', sahne('aile-iletisim', 'ifade')],
  ['Duygularımıza isim verebiliriz.', 'Evet', nesne('duygu-kartlari')],
  ['Her duygu bir amaca hizmet eder.', 'Evet', anl('ad-anlatim-1')],
  ['Duygularımızı çizmek de ifade eder.', 'Evet', nesne('duygu-kartlari')],
  ['Duygular hayatımızın parçasıdır.', 'Evet', anl('ad-anlatim-3')],
  ['Utanma bazen doğal bir duygudur.', 'Evet', nesne('utanma')],
];

const DY_EK_T = DY_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Kötü', 'Fark etmez'], g]);

const AA_EK_A = [
  ['Ailemizde birbirimize saygı göstermeli miyiz?', 'Evet', sahne('aile-sevgisi', 'saygi')],
  ['Annemize yardım etmek güzel bir davranış mıdır?', 'Evet', nesne('anne', 'yardim')],
  ['Babamızla sohbet etmek güzel midir?', 'Evet', nesne('baba', 'sohbet')],
  ['Kardeşimizle paylaşmak önemli midir?', 'Evet', nesne('kardes', 'paylasim')],
  ['Dedemize saygılı olmalı mıyız?', 'Evet', nesne('dede', 'saygi')],
  ['Ailemizde teşekkür etmek güzel midir?', 'Evet', nesne('sevgi')],
  ['Ailecek birlikte vakit geçirmek güzel midir?', 'Evet', sahne('aile-sevgisi', 'birlikte')],
  ['Ailemizde yalan söylemek doğru mudur?', 'Hayır', sahne('durustluk', 'guven')],
  ['Ailemizde özür dilemek önemli midir?', 'Evet', sahne('ozur-dileme', 'ozur')],
  ['Ailemizde güven önemli midir?', 'Evet', sahne('guven', 'aile')],
  ['Ailemizde sevgi en önemli değerdir.', 'Doğru', nesne('sevgi')],
  ['Aile büyüklerimizi dinlemeliyiz.', 'Doğru', grup(['dede', 'nine'], 'saygi')],
  ['Ailemizde nazik olmalıyız.', 'Doğru', nesne('arkadas', 'nazik')],
  ['Ailemizde birlikte oyun oynamak güzel midir?', 'Evet', sahne('birlikte-oyun', 'oyun')],
  ['Ailemizde yardımlaşma önemlidir.', 'Doğru', sahne('yardimlasma', 'aile')],
  ['Ailemizde dürüst olmalıyız.', 'Doğru', sahne('durustluk', 'guven')],
  ['Ailemizde herkesin görevi vardır.', 'Doğru', sahne('aile-sevgisi', 'gorev')],
  ['Aile fotoğrafı güzel bir anıdır.', 'Doğru', nesne('aile')],
  ['Ailemizde hoşgörülü olmalıyız.', 'Doğru', sahne('aile-sevgisi', 'hosgoru')],
  ['Ailemizde birbirimizi dinlemeliyiz.', 'Doğru', sahne('aile-iletisim', 'dinleme')],
  ['Ailemizde sorumluluk almalıyız.', 'Doğru', nesne('cocuk', 'sorumluluk')],
  ['Ailemizde kıskançlık olmamalıdır.', 'Doğru', sahne('arkadaslik', 'kiskanclik-yok')],
  ['Ailemizde sabırlı olmalıyız.', 'Doğru', nesne('anne', 'sabir')],
  ['Ailemizde birlikte kitap okumak güzel midir?', 'Evet', nesne('kitap', 'birlikte')],
  ['Ailemiz bizi her halimizle sever.', 'Doğru', nesne('aile')],
];
const AA_EK_T = AA_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

export function hayatTema1(karistir) {
  const k = aileDuygular(karistir);
  return { ...k, id: 'aile', baslik: 'Aile', kazanimKodu: 'HB.2.1.1' };
}

export function hayatTema2(karistir) {
  return genislet100(aileVeArkadaslik(karistir), sablonA(EV_EK_A, K.AA, 'ev'), sablonT(EV_EK_T, K.AA, 'ev', karistir), {
    id: 'ev', baslik: 'Ev', kazanimKodu: K.AA, onekA: 'ev-a', onekT: 'ev-t',
  });
}

export function hayatTema3(karistir) {
  return okulTema3(karistir);
}

export function hayatTema4(karistir) {
  return genislet100(toplumVeCevre(karistir), sablonA(TP_EK_A, K.TC, 'tp'), sablonT(TP_EK_T, K.TC, 'tp', karistir), {
    id: 'toplum', baslik: 'Toplum', kazanimKodu: K.TC, onekA: 'tp-a', onekT: 'tp-t',
  });
}

export function hayatTema5(karistir) {
  return genislet100(saglikVeTemizlik(karistir), sablonA(SG_EK_A, K.ST, 'sg'), sablonT(SG_EK_T, K.ST, 'sg', karistir), {
    id: 'saglik', baslik: 'Sağlık', kazanimKodu: K.ST, onekA: 'sg-a', onekT: 'sg-t',
  });
}

export function hayatTema6(karistir) {
  return genislet100(guvenliYasam(karistir), sablonA(GV_EK_A, K.GY, 'gv'), sablonT(GV_EK_T, K.GY, 'gv', karistir), {
    id: 'guvenlik', baslik: 'Güvenlik', kazanimKodu: K.GY, onekA: 'gv-a', onekT: 'gv-t',
  });
}

export function hayatTema7(karistir) {
  return genislet100(toplumVeCevre(karistir), sablonA(CE_EK_A, K.CE, 'ce'), sablonT(CE_EK_T, K.CE, 'ce', karistir), {
    id: 'cevre', baslik: 'Çevre', kazanimKodu: K.CE, onekA: 'ce-a', onekT: 'ce-t',
  });
}

export function hayatTema8(karistir) {
  return genislet100(aileVeArkadaslik(karistir), sablonA(IL_EK_A, K.IL, 'il'), sablonT(IL_EK_T, K.IL, 'il', karistir), {
    id: 'iletisim', baslik: 'İletişim', kazanimKodu: K.IL, onekA: 'il-a', onekT: 'il-t',
  });
}

export function hayatTema9(karistir) {
  return genislet100(aileDuygular(karistir), sablonA(DY_EK_A, K.DY, 'dy'), sablonT(DY_EK_T, K.DY, 'dy', karistir), {
    id: 'duygular', baslik: 'Duygular', kazanimKodu: K.DY, onekA: 'dy-a', onekT: 'dy-t',
  });
}

export function hayatTema10(karistir) {
  return birlestir100(mesleklerVeCalismaHayati(karistir), dogalAfetlerVeKorunma(karistir), {
    id: 'yasam-becerileri',
    baslik: 'Yaşam Becerileri',
    kazanimKodu: K.YB,
    onekA: 'yb-a',
    onekT: 'yb-t',
    anlatim: mesleklerVeCalismaHayati(karistir).anlatim,
  });
}

export const HAYAT_TEMALAR = [
  { n: 1, dosya: 'aile.json', baslik: 'Aile', fn: hayatTema1 },
  { n: 2, dosya: 'ev.json', baslik: 'Ev', fn: hayatTema2 },
  { n: 3, dosya: 'okul.json', baslik: 'Okul', fn: hayatTema3 },
  { n: 4, dosya: 'toplum.json', baslik: 'Toplum', fn: hayatTema4 },
  { n: 5, dosya: 'saglik.json', baslik: 'Sağlık', fn: hayatTema5 },
  { n: 6, dosya: 'guvenlik.json', baslik: 'Güvenlik', fn: hayatTema6 },
  { n: 7, dosya: 'cevre.json', baslik: 'Çevre', fn: hayatTema7 },
  { n: 8, dosya: 'iletisim.json', baslik: 'İletişim', fn: hayatTema8 },
  { n: 9, dosya: 'duygular.json', baslik: 'Duygular', fn: hayatTema9 },
  { n: 10, dosya: 'yasam-becerileri.json', baslik: 'Yaşam Becerileri', fn: hayatTema10 },
];

export {
  hayatTema1 as aileTema,
  hayatTema2 as evTema,
  hayatTema3 as okulTema,
  hayatTema4 as toplumTema,
  hayatTema5 as saglikTema,
  hayatTema6 as guvenlikTema,
  hayatTema7 as cevreTema,
  hayatTema8 as iletisimTema,
  hayatTema9 as duygularTema,
  hayatTema10 as yasamBecerileriTema,
};
