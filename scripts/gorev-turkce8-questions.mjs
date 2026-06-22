/** GOREV-TURKCE8 — Olayların Oluş Sırası */

const KAZANIM = {
  OOSM: 'TUR.2.8.1',
  OOSZ: 'TUR.2.8.2',
};

const METIN_SABAH_HAZIRLIK =
  'Elanaz sabah uyandı. Önce yüzünü yıkadı. Sonra dişlerini fırçaladı. Ardından okul çantasını hazırladı. En son kahvaltı etti. Annesi kapıda onu karşıladı. Elanaz okula gitti.';

const METIN_PASTA_YAPIMI =
  'Suna annesiyle mutfağa girdi. İlk olarak yumurtaları kırdılar. Sonra un ve şekeri karıştırdılar. Ardından hamuru yağlı kağıda döktüler. Fırına koyup beklediler. En son sıcak pasta sofraya geldi.';

const METIN_PIKNIK_GUNU =
  'Aile pikniğe gitti. Önce battaniyeyi serdiler. Sonra sandviçleri çıkardılar. Çocuklar parkta koştular. Akşamüzeri yağmur başlayınca toplanıp eve döndüler.';

const METIN_KUTUPHANE =
  'Deniz kütüphaneye gitti. Önce kartını gösterdi. Sonra sessizce raftan kitap seçti. Ardından köşedeki koltuğa oturdu. En son kitabını ödünç alıp eve döndü.';

const METIN_BISIKLET =
  'Can bisiklet sürmeyi öğreniyordu. İlk olarak babası tekerlekleri tuttu. Sonra yavaşça bıraktı. Can biraz sallandı ama düşmedi. Ardından parkta tek başına tur attı. En son gururla gülümsedi.';

const METIN_YAGMUR_GUNU =
  'Sabah güneş parlıyordu. Öğlen bulutlar toplandı. Sonra yağmur yağmaya başladı. Çocuklar şemsiyelerini açtı. Akşam yağmur durdu ve gökkuşağı çıktı.';

function sahne(s, nesne) {
  return { tur: 'turkce', mod: 'sahne', sahne: s, nesne };
}
function anl(s) {
  return { tur: 'turkce', mod: 'anlatim', sahne: s };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function olaySirasiMetinAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OOSM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  const m1 = { okumaMetni: METIN_SABAH_HAZIRLIK, cevapTipi: 'metin' };
  ekle('oosm-a1', 'Elanaz sabah ilk ne yaptı?', 'Uyandı', '', { gorsel: sahne('sabah-uyanma', 'cocuk'), ...m1 });
  ekle('oosm-a2', 'Yüzünü yıkadıktan sonra ne yaptı?', 'Dişlerini fırçaladı', '', { gorsel: sahne('dis-fircalama', 'cocuk'), ...m1 });
  ekle('oosm-a3', 'Okul çantasını hazırlamadan önce ne yapmıştı?', 'Dişlerini fırçalamıştı', '', { gorsel: sahne('canta-hazirlama', 'okul'), ...m1 });
  ekle('oosm-a4', 'Kahvaltı etmeden önce hangi işi yaptı?', 'Çantasını hazırladı', '', { gorsel: sahne('kahvalti', 'yiyecek'), ...m1 });
  ekle('oosm-a5', 'Metindeki olayların doğru sırası hangisidir?', 'Uyandı, yıkadı, fırçaladı, çanta, kahvaltı, okula gitti', '', { gorsel: sahne('olay-sirasi', 'default'), ...m1 });
  ekle('oosm-a6', 'En son yapılan işlem hangisidir?', 'Okula gitmek', '', { gorsel: sahne('okula-gitme', 'okul'), ...m1 });
  ekle('oosm-a7', '"Önce" kelimesi metinde neyi gösterir?', 'İlk yapılan işi', '', { gorsel: sahne('once-kelimesi', 'kitap'), ...m1 });
  ekle('oosm-a8', '"En son" ifadesi hangi olayı anlatır?', 'Kahvaltı etmeyi', '', { gorsel: sahne('en-son', 'default'), ...m1 });

  const m2 = { okumaMetni: METIN_PASTA_YAPIMI, cevapTipi: 'metin' };
  ekle('oosm-a9', 'Suna ve annesi nereye girdi?', 'Mutfağa', '', { gorsel: sahne('mutfak-sahnesi', 'ev'), ...m2 });
  ekle('oosm-a10', 'İlk olarak ne yaptılar?', 'Yumurtaları kırdılar', '', { gorsel: sahne('yumurta-kirma', 'yiyecek'), ...m2 });
  ekle('oosm-a11', 'Un ve şekeri karıştırmadan önce ne olmuştu?', 'Yumurtalar kırılmıştı', '', { gorsel: sahne('karistirma', 'yiyecek'), ...m2 });
  ekle('oosm-a12', 'Hamur fırına konmadan önce ne yapıldı?', 'Yağlı kağıda döküldü', '', { gorsel: sahne('hamur-dokme', 'yiyecek'), ...m2 });
  ekle('oosm-a13', 'Pastanın sofraya gelmesinden önce ne oldu?', 'Fırında pişirildi', '', { gorsel: sahne('firin-pasta', 'yiyecek'), ...m2 });
  ekle('oosm-a14', 'Olayların oluş sırasını yaz.', 'Yumurta, karıştırma, hamur, fırın, pasta', '', { gorsel: sahne('olay-sirasi', 'default'), ...m2 });
  ekle('oosm-a15', '"Ardından" kelimesi ne anlama gelir?', 'Sonraki adımı', '', { gorsel: sahne('ardindan', 'kitap'), ...m2 });
  ekle('oosm-a16', 'Metindeki son olay nedir?', 'Pasta sofraya geldi', '', { gorsel: sahne('pasta-sofra', 'yiyecek'), ...m2 });

  const m3 = { okumaMetni: METIN_PIKNIK_GUNU, cevapTipi: 'metin' };
  ekle('oosm-a17', 'Aile nereye gitti?', 'Pikniğe', '', { gorsel: sahne('piknik-sahnesi', 'park'), ...m3 });
  ekle('oosm-a18', 'Piknikte ilk ne yapıldı?', 'Battaniye serildi', '', { gorsel: sahne('battaniye-serme', 'park'), ...m3 });
  ekle('oosm-a19', 'Sandviçler ne zaman çıkarıldı?', 'Battaniyeyi serdikten sonra', '', { gorsel: sahne('sandvic', 'yiyecek'), ...m3 });
  ekle('oosm-a20', 'Çocuklar ne zaman koştu?', 'Sandviçlerden sonra', '', { gorsel: sahne('parkta-kosma', 'cocuk'), ...m3 });
  ekle('oosm-a21', 'Yağmur ne zaman başladı?', 'Akşamüzeri', '', { gorsel: sahne('yagmur-park', 'yagmur'), ...m3 });
  ekle('oosm-a22', 'Aile eve ne zaman döndü?', 'Yağmur başlayınca', '', { gorsel: sahne('eve-donus', 'ev'), ...m3 });
  ekle('oosm-a23', 'Metindeki olaylar hangi sırayla oldu?', 'Piknik, battaniye, sandviç, koşma, yağmur, dönüş', '', { gorsel: sahne('olay-sirasi', 'default'), ...m3 });
  ekle('oosm-a24', 'Metnin son olayı nedir?', 'Eve dönmek', '', { gorsel: sahne('eve-donus', 'ev'), ...m3 });
  ekle('oosm-a25', 'Bu metinde olaylar nasıl anlatılmış?', 'Zaman sırasına göre', '', { gorsel: sahne('zaman-sirasi', 'kitap'), ...m3 });

  return sorular;
}

function olaySirasiMetinTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OOSM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  const ek = (id, soru, cevap, sec, ipucu, metin, gorsel, extra = {}) =>
    ekle(id, soru, cevap, sec, ipucu, { okumaMetni: metin, gorsel, ...extra });

  ek('oosm-t1', 'Elanaz sabah ilk ne yaptı?', 'Uyandı', ['Kahvaltı etti', 'Uyandı', 'Okula gitti', 'Çantasını hazırladı'], '', METIN_SABAH_HAZIRLIK, sahne('sabah-uyanma', 'cocuk'));
  ek('oosm-t2', 'Dişlerini fırçalamadan önce ne yapmıştı?', 'Yüzünü yıkamıştı', ['Kahvaltı etmişti', 'Yüzünü yıkamıştı', 'Okula gitmişti', 'Çantasını hazırlamıştı'], '', METIN_SABAH_HAZIRLIK, sahne('dis-fircalama', 'cocuk'));
  ek('oosm-t3', 'Kahvaltıdan önceki son işlem hangisidir?', 'Çanta hazırlama', ['Uyku', 'Çanta hazırlama', 'Okula gitme', 'Oyun oynama'], '', METIN_SABAH_HAZIRLIK, sahne('canta-hazirlama', 'okul'));
  ek('oosm-t4', 'Metindeki olayların doğru sırası hangisidir?', 'Uyandı → yıkadı → fırçaladı → çanta → kahvaltı', ['Kahvaltı → uyandı → okul', 'Uyandı → yıkadı → fırçaladı → çanta → kahvaltı', 'Okul → çanta → kahvaltı', 'Fırçaladı → uyandı → yıkadı'], '', METIN_SABAH_HAZIRLIK, sahne('olay-sirasi', 'default'));
  ek('oosm-t5', '"Ardından" kelimesi hangi anlamı verir?', 'Sonraki adımı', ['Önceki adımı', 'Sonraki adımı', 'Son olayı', 'İlk olayı'], '', METIN_SABAH_HAZIRLIK, sahne('ardindan', 'kitap'));
  ek('oosm-t6', 'Pasta yapımında ilk adım hangisidir?', 'Yumurtaları kırmak', ['Fırına koymak', 'Yumurtaları kırmak', 'Pastayı yemek', 'Hamuru dökmek'], '', METIN_PASTA_YAPIMI, sahne('yumurta-kirma', 'yiyecek'));
  ek('oosm-t7', 'Hamur fırına konmadan önce ne yapıldı?', 'Yağlı kağıda döküldü', ['Yenildi', 'Yağlı kağıda döküldü', 'Yumurta kırıldı', 'Un karıştırıldı'], '', METIN_PASTA_YAPIMI, sahne('hamur-dokme', 'yiyecek'));
  ek('oosm-t8', 'Pastanın sofraya gelmesinden hemen önce ne oldu?', 'Fırında pişirildi', ['Yumurta kırıldı', 'Un alındı', 'Fırında pişirildi', 'Mutfak temizlendi'], '', METIN_PASTA_YAPIMI, sahne('firin-pasta', 'yiyecek'));
  ek('oosm-t9', 'Piknikte battaniyeden sonra ne yapıldı?', 'Sandviçler çıkarıldı', ['Eve dönüldü', 'Sandviçler çıkarıldı', 'Yağmur yağdı', 'Uyku'], '', METIN_PIKNIK_GUNU, sahne('sandvic', 'yiyecek'));
  ek('oosm-t10', 'Aile eve ne zaman döndü?', 'Yağmur başlayınca', ['Sabah erken', 'Yağmur başlayınca', 'Sandviç yerken', 'Battaniye sererken'], '', METIN_PIKNIK_GUNU, sahne('eve-donus', 'ev'));
  ek('oosm-t11', 'Deniz kütüphanede ilk ne yaptı?', 'Kartını gösterdi', ['Kitap okudu', 'Kartını gösterdi', 'Eve döndü', 'Koştu'], '', METIN_KUTUPHANE, sahne('kutuphane-kart', 'kutuphane'));
  ek('oosm-t12', 'Kitabı ödünç almadan önce ne yaptı?', 'Koltuğa oturdu', ['Uyudu', 'Koltuğa oturdu', 'Yemek yedi', 'Koştu'], '', METIN_KUTUPHANE, sahne('kutuphane-oturma', 'kutuphane'));
  ek('oosm-t13', 'Kütüphane metnindeki son olay nedir?', 'Kitabı ödünç alıp eve dönmek', ['Kart göstermek', 'Kitap seçmek', 'Kitabı ödünç alıp eve dönmek', 'Koşmak'], '', METIN_KUTUPHANE, sahne('kutuphane-donus', 'kutuphane'));
  ek('oosm-t14', 'Can bisiklette ilk olarak kimin yardımıyla gitti?', 'Babasının', ['Annesinin', 'Babasının', 'Öğretmeninin', 'Kimsenin'], '', METIN_BISIKLET, sahne('bisiklet-ogrenme', 'bisiklet'));
  ek('oosm-t15', 'Baba tekerlekleri bıraktıktan sonra ne oldu?', 'Can biraz sallandı ama düşmedi', ['Can düştü', 'Can biraz sallandı ama düşmedi', 'Can bisikleti bıraktı', 'Yağmur yağdı'], '', METIN_BISIKLET, sahne('bisiklet-surus', 'bisiklet'));
  ek('oosm-t16', 'Bisiklet metnindeki son olay hangisidir?', 'Gururla gülümsemek', ['Düşmek', 'Ağlamak', 'Gururla gülümsemek', 'Uyumak'], '', METIN_BISIKLET, sahne('gururlu-cocuk', 'cocuk'));
  ek('oosm-t17', 'Yağmur günü metninde öğlen ne oldu?', 'Bulutlar toplandı', ['Gökkuşağı çıktı', 'Bulutlar toplandı', 'Güneş parladı', 'Kar yağdı'], '', METIN_YAGMUR_GUNU, sahne('bulutlar', 'yagmur'));
  ek('oosm-t18', 'Gökkuşağı ne zaman çıktı?', 'Akşam yağmur durunca', ['Sabah', 'Öğlen', 'Akşam yağmur durunca', 'Gece'], '', METIN_YAGMUR_GUNU, sahne('gokkusagi', 'gunes'));
  ek('oosm-t19', 'Olayların oluş sırasını anlamak için hangi soru sorulur?', 'Önce ne oldu, sonra ne oldu?', ['Kaç harf var?', 'Önce ne oldu, sonra ne oldu?', 'Kim yazdı?', 'Kaç sayfa?'], '', METIN_SABAH_HAZIRLIK, sahne('soru-isaretleri', 'kitap'), { sasirtma: true });
  ek('oosm-t20', 'Metinlerde olaylar genelde nasıl anlatılır?', 'Zaman sırasına göre', ['Rastgele', 'Zaman sırasına göre', 'Alfabetik', 'Tersten'], '', METIN_PIKNIK_GUNU, sahne('zaman-sirasi', 'kitap'));
  ek('oosm-t21', '"Sonra" kelimesi hangi ilişkiyi gösterir?', 'Bir sonraki olayı', ['Önceki olayı', 'Bir sonraki olayı', 'Son olayı', 'İlk olayı'], '', METIN_PASTA_YAPIMI, sahne('sonra-kelimesi', 'kitap'));
  ek('oosm-t22', 'Hangi cümle olay sırasına uygundur?', 'Önce yıkadı, sonra giyindi', ['Giyindi önce yıkadı sonra', 'Önce yıkadı, sonra giyindi', 'Yıkadı giyindi önce', 'Sonra önce yıkadı'], '', METIN_SABAH_HAZIRLIK, sahne('cumle-sirasi', 'kitap'));
  ek('oosm-t23', 'Piknik metninde yağmur başlamadan önce çocuklar ne yaptı?', 'Parkta koştular', ['Eve döndüler', 'Parkta koştular', 'Uyudular', 'Battaniye topladılar'], '', METIN_PIKNIK_GUNU, sahne('parkta-kosma', 'cocuk'));
  ek('oosm-t24', 'Olay sırasını bozan cümle hangisidir?', 'Sonra önce kahvaltı etti uyandı', ['Önce uyandı', 'Sonra kahvaltı etti', 'Sonra önce kahvaltı etti uyandı', 'Ardından okula gitti'], '', METIN_SABAH_HAZIRLIK, sahne('yanlis-sira', 'kitap'));
  ek('oosm-t25', 'Bu metinlerin ortak özelliği nedir?', 'Olaylar sırayla anlatılmıştır', ['Hepsi şiirdir', 'Olaylar sırayla anlatılmıştır', 'Sadece soru vardır', 'Hiç olay yoktur'], '', METIN_KUTUPHANE, sahne('olay-sirasi', 'default'));
  return sorular;
}

function olaySirasiZamanAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OOSZ,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('oosz-a1', '"Önce" kelimesi neyi gösterir?', 'İlk yapılan işi', '', { gorsel: sahne('once-kelimesi', 'kitap') });
  ekle('oosz-a2', '"Sonra" kelimesi ne anlama gelir?', 'Bir sonraki adımı', '', { gorsel: sahne('sonra-kelimesi', 'kitap') });
  ekle('oosz-a3', '"En son" ifadesi hangi olayı anlatır?', 'Son yapılan işi', '', { gorsel: sahne('en-son', 'default') });
  ekle('oosz-a4', '"Ardından" kelimesi hangi sırayı gösterir?', 'Hemen sonraki olayı', '', { gorsel: sahne('ardindan', 'kitap') });
  ekle('oosz-a5', '"İlk olarak" ifadesi ne demektir?', 'Başlangıçtaki olayı', '', { gorsel: sahne('ilk-olarak', 'kitap') });
  ekle('oosz-a6', 'Sabah, öğlen, akşam kelimeleri neyi gösterir?', 'Günün zaman dilimlerini', '', { gorsel: sahne('gun-zamanlari', 'gunes') });
  ekle('oosz-a7', 'Günün zamanları doğru sırayla nasıldır?', 'Sabah, öğlen, akşam', '', { gorsel: sahne('zaman-sirasi', 'gunes') });
  ekle('oosz-a8', 'Hikâyede giriş bölümü neyi anlatır?', 'Kahraman ve yerin tanıtımını', '', { gorsel: sahne('hikaye-giris', 'kitap') });

  ekle('oosz-a9', 'Hikâyede gelişme bölümü neyi anlatır?', 'Olayların büyüdüğü kısmı', '', { gorsel: sahne('hikaye-gelisme', 'kitap') });
  ekle('oosz-a10', 'Hikâyede sonuç bölümü neyi anlatır?', 'Olayın nasıl bittiğini', '', { gorsel: sahne('hikaye-sonuc', 'kitap') });
  ekle('oosz-a11', 'Giriş, gelişme, sonuç hangi sırayla gelir?', 'Giriş → gelişme → sonuç', '', { gorsel: sahne('giris-gelisme-sonuc', 'kitap') });
  ekle('oosz-a12', 'Aşağıdaki cümleleri sırala: "Çantasını aldı." "Okula gitti." "Uyandı."', 'Uyandı, çantasını aldı, okula gitti', '', { gorsel: sahne('cumle-sirasi', 'okul') });
  ekle('oosz-a13', 'Aşağıdaki cümleleri sırala: "Yemek yedi." "Ellerini yıkadı." "Sofraya oturdu."', 'Sofraya oturdu, ellerini yıkadı, yemek yedi', '', { gorsel: sahne('sofra-sirasi', 'yiyecek') });
  ekle('oosz-a14', 'Aşağıdaki cümleleri sırala: "Kitabı okudu." "Kütüphaneye gitti." "Kitap seçti."', 'Kütüphaneye gitti, kitap seçti, kitabı okudu', '', { gorsel: sahne('kutuphane-sirasi', 'kutuphane') });
  ekle('oosz-a15', 'Aşağıdaki cümleleri sırala: "Top oynadı." "Formasını giydi." "Sahaya çıktı."', 'Formasını giydi, sahaya çıktı, top oynadı', '', { gorsel: sahne('futbol-sirasi', 'futbol') });
  ekle('oosz-a16', 'Aşağıdaki cümleleri sırala: "Uyudu." "Pijamasını giydi." "Dişlerini fırçaladı."', 'Dişlerini fırçaladı, pijamasını giydi, uyudu', '', { gorsel: sahne('gece-sirasi', 'cocuk') });

  ekle('oosz-a17', '"Ertesi gün" ifadesi neyi gösterir?', 'Bir sonraki günü', '', { gorsel: sahne('ertesi-gun', 'gunes') });
  ekle('oosz-a18', '"Bir süre sonra" ne anlama gelir?', 'Biraz zaman geçtikten sonra', '', { gorsel: sahne('sure-sonra', 'default') });
  ekle('oosz-a19', 'Olay örgüsü ne demektir?', 'Olayların sıralı düzeni', '', { gorsel: sahne('olay-orgusu', 'kitap') });
  ekle('oosz-a20', 'Zaman ifadeleri metinde ne işe yarar?', 'Olayların sırasını gösterir', '', { gorsel: sahne('zaman-ifadeleri', 'kitap') });
  ekle('oosz-a21', 'Hangi kelime olay sırasını bozar?', 'Rastgele', '', { gorsel: sahne('yanlis-sira', 'kitap'), alternatifCevaplar: ['Karışık'] });
  ekle('oosz-a22', 'Resimleri sıraya dizmek hangi beceriyi geliştirir?', 'Olay sırasını anlama', '', { gorsel: sahne('resim-sirasi', 'cocuk') });
  ekle('oosz-a23', 'Bir günlük yazarken olaylar nasıl yazılmalı?', 'Zaman sırasına göre', '', { gorsel: sahne('gunluk-yazma', 'gunluk') });
  ekle('oosz-a24', 'Hikâye anlatırken ilk söylenen bölüm hangisidir?', 'Giriş', '', { gorsel: sahne('hikaye-giris', 'kitap') });
  ekle('oosz-a25', 'Olayların oluş sırasını anlamak okumayı nasıl etkiler?', 'Metni daha iyi anlamamızı sağlar', '', { gorsel: sahne('okuma-anlama', 'kitap') });
  return sorular;
}

function olaySirasiZamanTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OOSZ,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('oosz-t1', '"Önce" kelimesi neyi gösterir?', 'İlk yapılan işi', ['Son işi', 'İlk yapılan işi', 'Rastgele olayı', 'Yarını'], '', { gorsel: sahne('once-kelimesi', 'kitap') });
  ekle('oosz-t2', '"Sonra" kelimesi hangi anlamı verir?', 'Bir sonraki adımı', ['Önceki adımı', 'Bir sonraki adımı', 'Son cümleyi', 'Başlığı'], '', { gorsel: sahne('sonra-kelimesi', 'kitap') });
  ekle('oosz-t3', '"En son" ifadesi neyi anlatır?', 'Son yapılan işi', ['İlk işi', 'Son yapılan işi', 'Ortadaki işi', 'Yarınki işi'], '', { gorsel: sahne('en-son', 'default') });
  ekle('oosz-t4', 'Günün zamanları doğru sırayla hangisidir?', 'Sabah, öğlen, akşam', ['Akşam, sabah, öğlen', 'Sabah, öğlen, akşam', 'Öğlen, akşam, sabah', 'Gece, sabah, öğlen'], '', { gorsel: sahne('gun-zamanlari', 'gunes') });
  ekle('oosz-t5', 'Hikâyede giriş bölümü neyi anlatır?', 'Kahraman ve yerin tanıtımını', ['Olayın sonunu', 'Kahraman ve yerin tanıtımını', 'Sadece başlığı', 'Şiir kafiyesini'], '', { gorsel: sahne('hikaye-giris', 'kitap') });
  ekle('oosz-t6', 'Hikâyede gelişme bölümü neyi anlatır?', 'Olayların büyüdüğü kısmı', ['Sadece selamı', 'Olayların büyüdüğü kısmı', 'Kitap kapağını', 'Noktalama işaretini'], '', { gorsel: sahne('hikaye-gelisme', 'kitap') });
  ekle('oosz-t7', 'Giriş, gelişme, sonuç hangi sırayla gelir?', 'Giriş → gelişme → sonuç', ['Sonuç → giriş → gelişme', 'Giriş → gelişme → sonuç', 'Gelişme → sonuç → giriş', 'Rastgele'], '', { gorsel: sahne('giris-gelisme-sonuc', 'kitap') });
  ekle('oosz-t8', 'Cümleleri doğru sıraya koy: Uyandı / Çantasını aldı / Okula gitti', 'Uyandı → çantasını aldı → okula gitti', ['Okula gitti → uyandı → çanta', 'Uyandı → çantasını aldı → okula gitti', 'Çanta → okul → uyandı', 'Uyandı → okul → çanta'], '', { gorsel: sahne('cumle-sirasi', 'okul') });
  ekle('oosz-t9', 'Cümleleri doğru sıraya koy: Sofraya oturdu / Ellerini yıkadı / Yemek yedi', 'Sofraya oturdu → ellerini yıkadı → yemek yedi', ['Yemek yedi → sofra → yıkadı', 'Sofraya oturdu → ellerini yıkadı → yemek yedi', 'Yıkadı → yedi → oturdu', 'Oturu → yedi → yıkadı'], '', { gorsel: sahne('sofra-sirasi', 'yiyecek') });
  ekle('oosz-t10', 'Cümleleri doğru sıraya koy: Kütüphaneye gitti / Kitap seçti / Okudu', 'Gitti → seçti → okudu', ['Okudu → gitti → seçti', 'Gitti → seçti → okudu', 'Seçti → okudu → gitti', 'Gitti → okudu → seçti'], '', { gorsel: sahne('kutuphane-sirasi', 'kutuphane') });
  ekle('oosz-t11', '"Ertesi gün" ifadesi neyi gösterir?', 'Bir sonraki günü', ['Dünü', 'Bir sonraki günü', 'Geceyi', 'Öğleni'], '', { gorsel: sahne('ertesi-gun', 'gunes') });
  ekle('oosz-t12', 'Olay örgüsü ne demektir?', 'Olayların sıralı düzeni', ['Şiir kafiyesi', 'Olayların sıralı düzeni', 'Noktalama kuralı', 'Hece sayısı'], '', { gorsel: sahne('olay-orgusu', 'kitap') });
  ekle('oosz-t13', 'Zaman ifadeleri metinde ne işe yarar?', 'Olayların sırasını gösterir', ['Renk verir', 'Olayların sırasını gösterir', 'Hece sayar', 'Başlık yazar'], '', { gorsel: sahne('zaman-ifadeleri', 'kitap') });
  ekle('oosz-t14', 'Hangi cümle olay sırasına uygundur?', 'Önce yıkadı, sonra giyindi', ['Giyindi önce sonra yıkadı', 'Önce yıkadı, sonra giyindi', 'Sonra önce yıkadı', 'Yıkadı sonra önce'], '', { gorsel: sahne('cumle-sirasi', 'kitap') });
  ekle('oosz-t15', 'Hikâye anlatırken ilk söylenen bölüm hangisidir?', 'Giriş', ['Sonuç', 'Giriş', 'Gelişme', 'Kapanış şiiri'], '', { gorsel: sahne('hikaye-giris', 'kitap') });
  ekle('oosz-t16', 'Resimleri sıraya dizmek hangi beceriyi geliştirir?', 'Olay sırasını anlama', ['Çarpım tablosu', 'Olay sırasını anlama', 'Noktalama', 'Hece sayma'], '', { gorsel: sahne('resim-sirasi', 'cocuk') });
  ekle('oosz-t17', 'Bir günlük yazarken olaylar nasıl yazılmalı?', 'Zaman sırasına göre', ['Rastgele', 'Zaman sırasına göre', 'Tersten', 'Sadece tek cümle'], '', { gorsel: sahne('gunluk-yazma', 'gunluk') });
  ekle('oosz-t18', '"Ardından" kelimesi hangi ilişkiyi gösterir?', 'Hemen sonraki olayı', ['Önceki günü', 'Hemen sonraki olayı', 'Son cümleyi', 'Başlığı'], '', { gorsel: sahne('ardindan', 'kitap') });
  ekle('oosz-t19', 'Olayların oluş sırasını anlamak okumayı nasıl etkiler?', 'Metni daha iyi anlamamızı sağlar', ['Metni uzatır', 'Metni daha iyi anlamamızı sağlar', 'Okumayı zorlaştırır', 'Hiç etkilemez'], '', { gorsel: sahne('okuma-anlama', 'kitap'), sasirtma: true });
  ekle('oosz-t20', 'Cümleleri doğru sıraya koy: Forma giydi / Sahaya çıktı / Top oynadı', 'Forma → sahaya çıktı → top oynadı', ['Top oynadı → forma → sahaya', 'Forma → sahaya çıktı → top oynadı', 'Sahaya → top → forma', 'Forma → top → sahaya'], '', { gorsel: sahne('futbol-sirasi', 'futbol') });
  ekle('oosz-t21', 'Cümleleri doğru sıraya koy: Diş fırçaladı / Pijama giydi / Uyudu', 'Fırçaladı → pijama → uyudu', ['Uyudu → pijama → fırçaladı', 'Fırçaladı → pijama → uyudu', 'Pijama → uyudu → fırçaladı', 'Uyudu → fırçaladı → pijama'], '', { gorsel: sahne('gece-sirasi', 'cocuk') });
  ekle('oosz-t22', 'Hangi kelime grubu zaman sırasını gösterir?', 'Önce, sonra, en son', ['Kırmızı, mavi, yeşil', 'Önce, sonra, en son', 'Kedi, köpek, kuş', 'Elma, armut, muz'], '', { gorsel: sahne('zaman-kelimeleri', 'kitap') });
  ekle('oosz-t23', 'Hikâyede sonuç bölümü neyi anlatır?', 'Olayın nasıl bittiğini', ['Kahramanın adını', 'Olayın nasıl bittiğini', 'Sadece rengi', 'Hece sayısını'], '', { gorsel: sahne('hikaye-sonuc', 'kitap') });
  ekle('oosz-t24', 'Olay sırasını bozan ifade hangisidir?', 'Sonra önce karışık anlattı', ['Önce yıkadı', 'Sonra giyindi', 'Sonra önce karışık anlattı', 'En son uyudu'], '', { gorsel: sahne('yanlis-sira', 'kitap') });
  ekle('oosz-t25', 'Olayların oluş sırası konusunun amacı nedir?', 'Metindeki olayları doğru sırayla anlamak', ['Sadece yazı yazmak', 'Metindeki olayları doğru sırayla anlamak', 'Hece saymak', 'Renk öğrenmek'], '', { gorsel: sahne('olay-sirasi', 'default') });
  return sorular;
}

export function olaySirasiMetin(karistir) {
  return {
    id: 'olay-sirasi-metin',
    baslik: 'Olay Sırası — Metin Okuma',
    kazanimKodu: KAZANIM.OOSM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Metinlerde olaylar genellikle zaman sırasına göre anlatılır. Önce ne oldu, sonra ne oldu sorularıyla olayların oluş sırasını bulabiliriz.',
          gorsel: anl('oosm-anlatim-1'),
        },
        {
          metin:
            '"Önce", "sonra", "ardından", "en son" gibi kelimeler bize olayların hangi sırayla olduğunu gösterir. Bu kelimelere dikkat ederek metni daha iyi anlarız.',
          gorsel: anl('oosm-anlatim-2'),
        },
        {
          metin:
            'Bir metni okurken olayları kafamızda sıraya dizmeliyiz. İlk olay, aradaki olaylar ve son olay — hepsi birbirine bağlıdır.',
          gorsel: anl('oosm-anlatim-3'),
        },
      ],
    },
    alistirma: olaySirasiMetinAlistirma(),
    test: olaySirasiMetinTest(karistir),
  };
}

export function olaySirasiZaman(karistir) {
  return {
    id: 'olay-sirasi-zaman',
    baslik: 'Olay Sırası — Zaman ve Sıralama',
    kazanimKodu: KAZANIM.OOSZ,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Zaman ifadeleri olayların sırasını gösterir. Sabah, öğlen, akşam gibi kelimeler günün akışını anlatır.',
          gorsel: anl('oosz-anlatim-1'),
        },
        {
          metin:
            'Hikâyelerde giriş, gelişme ve sonuç bölümleri vardır. Girişte tanıtım yapılır, gelişmede olay büyür, sonuçta düğüm çözülür.',
          gorsel: anl('oosz-anlatim-2'),
        },
        {
          metin:
            'Cümleleri doğru sıraya koymak olay sırasını anlamanın önemli bir parçasıdır. Mantıklı bir akış kurmalıyız.',
          gorsel: anl('oosz-anlatim-3'),
        },
      ],
    },
    alistirma: olaySirasiZamanAlistirma(),
    test: olaySirasiZamanTest(karistir),
  };
}
