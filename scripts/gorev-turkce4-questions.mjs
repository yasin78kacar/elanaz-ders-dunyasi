/** GOREV-TURKCE4 — Metin Anlama ve Yorumlama, Kelime ve Anlam Bilgisi İleri, Yazma ve Anlatım İleri */

const KAZANIM = {
  MA: 'TUR.2.4.1',
  KA: 'TUR.2.4.2',
  YA: 'TUR.2.4.3',
};

function sahne(s, nesne) {
  return { tur: 'turkce', mod: 'sahne', sahne: s, nesne };
}
function anl(s) {
  return { tur: 'turkce', mod: 'anlatim', sahne: s };
}
function kart(harfler) {
  return { tur: 'turkce', mod: 'kart', harfler };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

const METIN_KUTUPHANEDE =
  'Selin her Cumartesi kütüphaneye giderdi. Bugün de gitti ama favori köşesi doluydu. Biraz üzüldü. Sonra pencere kenarındaki boş koltuğa oturdu. Güneş kitabının üzerine vuruyordu. Sayfaları çevirirken gülümsedi. "Aslında burası daha güzel" diye düşündü.';

const METIN_YAGMURDA_FUTBOL_M =
  'Mehmet ve arkadaşları parkta futbol oynuyordu. Aniden yağmur başladı. Herkes "Eve gidelim!" dedi. Mehmet "Bir dakika" dedi ve gözlerini kapattı. Yağmurun sesini dinledi, yüzüne damlaları hissetti. Sonra gülerek "Tamam, gidelim" dedi.';

const METIN_EKMEK_KOKUSU =
  'Ayşe sabah erken uyandı. Mutfaktan mis gibi bir koku geliyordu. Annesi daha kalkmamıştı. Ayşe mutfağa koştu — ekmek makinesi çalışıyordu. Güldü: "Annem dün gece ayarlamış!"';

const METIN_KOPEGIN_SIRRI =
  "Ali'nin köpeği Rex her gün aynı saatte havlardı. Ali merak etti. Bir gün saati tuttu. Tam 17:00'de havladı. Ali pencereye baktı — babası kapıdan giriyordu. Rex her gün babasını karşılıyordu!";

const METIN_KARIN_ILK_GUNU =
  'Berk sabah uyandığında her yer bembeyaz karla kaplıydı. Sevinçle pencereye koştu. Sokakta kimse yoktu. Saate baktı: 06:30. "Herkes uyuyor" diye düşündü. Yavaşça giyindi ve dışarı çıktı. Karlar bozulmamıştı. O ilk izleri bırakacaktı.';

const METIN_UNUTULAN_ODEV =
  'Fatma okula geldiğinde ödevini yapmadığını hatırladı. Kalbi hızlandı. Öğretmen sınıfa girdi. Fatma elini kaldırdı: "Öğretmenim, ödevimi yapmadım, özür dilerim." Öğretmen güldü: "Dürüstlüğün için teşekkür ederim Fatma."';

const METIN_KUCUK_RESSAM =
  'Zeynep her gün bir resim çizerdi. Annesine gösterirdi, anası "Güzel" derdi. Babası da "Harika" derdi. Bir gün komşunun çocuğu "Bu ne?" diye sordu. Zeynep düşündü. "Belki daha çok çalışmalıyım" dedi.';

// ─── Metin Anlama ve Yorumlama ───────────────────────────────────────────────

function metinAnlamaVeYorumlamaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.MA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  const m1 = { okumaMetni: METIN_KUTUPHANEDE, cevapTipi: 'metin' };
  ekle('ma-a1', 'Selin her Cumartesi nereye gider?', 'Kütüphaneye', '', { gorsel: sahne('kutuphane', 'kutuphane'), ...m1 });
  ekle('ma-a2', 'Bugün neden üzüldü?', 'Favori köşesi doluydu', '', { gorsel: sahne('dolu-koltuklar', 'kutuphane'), ...m1 });
  ekle('ma-a3', 'Sonunda nereye oturdu?', 'Pencere kenarındaki koltuğa', '', { gorsel: sahne('pencere-kenari', 'kutuphane'), alternatifCevaplar: ['Pencere kenarına'], ...m1 });
  ekle('ma-a4', '"Güneş kitabının üzerine vuruyordu" — bu ne anlama gelir?', 'Hava güneşliydi, ışık içeriye giriyordu', '', { gorsel: sahne('gunes-isigi', 'gunes'), ...m1 });
  ekle('ma-a5', 'Selin sonunda ne düşündü?', 'Pencere köşesinin daha güzel olduğunu', '', { gorsel: sahne('memnun-cocuk', 'cocuk'), ...m1 });
  ekle('ma-a6', 'Bu metinden Selin hakkında ne öğreniyoruz?', 'Kitap okumayı seviyor', '', { gorsel: sahne('kitap-seven', 'kitap'), ...m1 });
  ekle('ma-a7', 'Selin başta üzüldü ama sonunda mutlu oldu. Neden?', 'Yeni yerin daha güzel olduğunu fark etti', '', { gorsel: sahne('mutlu-cocuk', 'cocuk'), ...m1 });
  ekle('ma-a8', 'Bu metnin ana fikri nedir?', 'Bazen beklenmedik şeyler güzel sonuçlar doğurur', '', { gorsel: sahne('surpriz-mutluluk', 'cocuk'), ...m1 });
  const m2 = { okumaMetni: METIN_YAGMURDA_FUTBOL_M, cevapTipi: 'metin' };
  ekle('ma-a9', 'Nerede futbol oynuyorlardı?', 'Parkta', '', { gorsel: sahne('park-sahnesi', 'park'), ...m2 });
  ekle('ma-a10', 'Ne oldu aniden?', 'Yağmur başladı', '', { gorsel: sahne('yagmur-park', 'yagmur'), ...m2 });
  ekle('ma-a11', 'Mehmet ne yaptı yağmur yağınca?', 'Gözlerini kapattı, yağmuru hissetti', '', { gorsel: sahne('yagmurda-duran', 'yagmur'), ...m2 });
  ekle('ma-a12', 'Mehmet neden gülümsedi sence?', 'Yağmurun güzelliğini hissetti, mutlu oldu', '', { gorsel: sahne('yagmurda-gulen', 'yagmur'), ...m2 });
  ekle('ma-a13', 'Bu metinden Mehmet hakkında ne söylenebilir?', 'Anın tadını çıkarmasını bilen biri', '', { gorsel: sahne('doga-seven', 'cocuk'), alternatifCevaplar: ['Doğayı seven biri'], ...m2 });
  return sorular;
}

function metinAnlamaVeYorumlamaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.MA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  const ek = (id, soru, cevap, sec, ipucu, metin, gorsel, extra = {}) =>
    ekle(id, soru, cevap, sec, ipucu, { okumaMetni: metin, gorsel, ...extra });
  ek('ma-t1', 'Ayşe neden erken uyandı?', 'Güzel koku onu uyandırmış', ['Okul varmış', 'Annesi çağırmış', 'Güzel koku onu uyandırmış', 'Alarm çalmış'], '', METIN_EKMEK_KOKUSU, sahne('sabah-mutfak', 'ev'));
  ek('ma-t2', '"Annesi daha kalkmamıştı" — bu cümle ne anlatıyor?', 'Sabahın erken saatiydi', ['Annesi hastayı', 'Sabahın erken saatiydi', 'Anne geç yattı', 'Annenin işi yoktu'], '', METIN_EKMEK_KOKUSU, sahne('sabah-erken', 'gunes'));
  ek('ma-t3', 'Ekmek makinesini kim ayarlamıştı?', 'Annesi', ['Ayşe', 'Babası', 'Annesi', 'Komşu'], '', METIN_EKMEK_KOKUSU, sahne('ekmek-makinesi', 'ev'));
  ek('ma-t4', '"Güldü: Annem dün gece ayarlamış!" — Ayşe neden güldü?', 'Annesinin düşünceli davranışını sevdi', ['Komik bir şey gördü', 'Annesinin düşünceli davranışını sevdi', 'Ekmek yanmıştı', 'Korktu'], 'Annesinin önceden düşünmesi onu mutlu etti.', METIN_EKMEK_KOKUSU, sahne('gulen-ayse', 'cocuk'), { sasirtma: true });
  ek('ma-t5', 'Bu metnin ana fikri nedir?', 'Sevgi küçük jestlerde saklıdır', ['Ekmek makineleri kullanışlıdır', 'Sabah erken kalkmak iyidir', 'Sevgi küçük jestlerde saklıdır', 'Ayşe yemek yapmayı sever'], '', METIN_EKMEK_KOKUSU, sahne('anne-sevgisi', 'anne'));
  ek('ma-t6', 'Rex ne yapardı her gün?', 'Aynı saatte havlardı', ['Uyurdu', 'Aynı saatte havlardı', 'Yemek yerdi', 'Koşardı'], '', METIN_KOPEGIN_SIRRI, sahne('havlayan-kopek', 'kopek'));
  ek('ma-t7', 'Ali ne yaptı merakını gidermek için?', 'Saati tuttu', ['Sordu', 'Saati tuttu', 'Kamerayı kurdu', 'Uyudu'], '', METIN_KOPEGIN_SIRRI, sahne('saate-bakan', 'cocuk'));
  ek('ma-t8', "Rex saat 17:00'de neden havlıyordu?", 'Babasının geldiğini hissediyordu', ['Acıkmıştı', 'Korkmuştu', 'Babasının geldiğini hissediyordu', 'Oyun istiyordu'], '', METIN_KOPEGIN_SIRRI, sahne('kopek-baba', 'kopek'));
  ek('ma-t9', 'Bu metinden Rex hakkında ne söylenebilir?', 'Aile üyelerini tanıyan zeki bir köpek', ['Sadece gürültü çıkarır', 'Aile üyelerini tanıyan zeki bir köpek', 'Kötü huylu bir köpek', 'Yabancıları sever'], 'Rex babasını her gün karşılıyordu!', METIN_KOPEGIN_SIRRI, sahne('sadik-kopek', 'kopek'), { sasirtma: true });
  ek('ma-t10', 'Bu metnin konusu nedir?', "Rex'in her günkü alışkanlığı ve onun sırrı", ['Köpek bakımı', "Ali'nin ailesi", "Rex'in her günkü alışkanlığı ve onun sırrı", 'Saat kullanımı'], '', METIN_KOPEGIN_SIRRI, sahne('kopek-cocuk', 'kopek'));
  ek('ma-t11', 'Berk saat kaçta uyandı?', '06:30', ['07:00', '08:00', '06:30', '05:00'], '', METIN_KARIN_ILK_GUNU, sahne('saat-0630', 'kar'), { cevapTipi: 'metin' });
  ek('ma-t12', 'Sokakta neden kimse yoktu?', 'Herkes uyuyordu', ['Tatil günüydü', 'Çok soğuktu', 'Herkes uyuyordu', 'Okul günüydü'], '', METIN_KARIN_ILK_GUNU, sahne('karli-sokak', 'kar'));
  ek('ma-t13', 'Berk neden "ilk izleri bırakacaktı" diye düşündü?', 'Bozulmamış karda iz bırakmanın özelliğini fark etti', ['Karda resim yapmak istiyordu', 'Bozulmamış karda iz bırakmanın özelliğini fark etti', 'Kaybolmamak için', 'Arkadaşlarına göstermek için'], 'Henüz kimse karda yürümemişti.', METIN_KARIN_ILK_GUNU, sahne('bozulmamis-kar', 'kar'), { sasirtma: true });
  ek('ma-t14', 'Bu metinden Berk nasıl biri olarak çıkıyor?', 'Meraklı ve anı değerlendiren', ['Tembel ve uyumcu', 'Meraklı ve anı değerlendiren', 'Korkak', 'Bencil'], '', METIN_KARIN_ILK_GUNU, sahne('merakli-cocuk', 'cocuk'));
  ek('ma-t15', '"Karlar bozulmamıştı" cümlesinden ne anlarız?', 'Henüz kimse basmamış tertemiz kardı', ['Kar az yağmıştı', 'Henüz kimse basmamış tertemiz kardı', 'Kar ıslanmıştı', 'Kar çok sertti'], '', METIN_KARIN_ILK_GUNU, sahne('temiz-kar', 'kar'));
  ek('ma-t16', 'Fatma ne zaman ödevini yapmadığını hatırladı?', 'Okula gelince', ['Evde', 'Yolda', 'Okula gelince', 'Ders sırasında'], '', METIN_UNUTULAN_ODEV, sahne('okul-kapisi', 'okul'));
  ek('ma-t17', '"Kalbi hızlandı" ne anlama gelir?', 'Heyecanlandı ve endişelendi', ['Hasta hissetti', 'Koştu', 'Heyecanlandı ve endişelendi', 'Sevindi'], '', METIN_UNUTULAN_ODEV, sahne('endiseli-yuz', 'cocuk'));
  ek('ma-t18', 'Fatma ne yaptı?', 'Dürüstçe itiraf etti', ['Sessiz oturdu', 'Kaçtı', 'Dürüstçe itiraf etti', 'Yalan söyledi'], '', METIN_UNUTULAN_ODEV, sahne('el-kaldiran', 'cocuk'));
  ek('ma-t19', 'Öğretmen neden güldü?', "Fatma'nın dürüstlüğünü beğendi", ['Ödev önemsizdi', "Fatma'nın dürüstlüğünü beğendi", 'Kendi de unutmuştu', 'Komik buldu'], '', METIN_UNUTULAN_ODEV, sahne('gulen-ogretmen', 'ogretmen'), { sasirtma: true });
  ek('ma-t20', 'Bu metnin vermek istediği mesaj nedir?', 'Dürüstlük her zaman doğru yoldur', ['Ödevler yapılmalıdır', 'Öğretmenler iyidir', 'Dürüstlük her zaman doğru yoldur', 'Unutmak normaldir'], '', METIN_UNUTULAN_ODEV, sahne('durustluk', 'cocuk'));
  ek('ma-t21', 'Zeynep her gün ne yapardı?', 'Bir resim çizerdi', ['Oyun oynardı', 'Bir resim çizerdi', 'Kitap okurdu', 'Şarkı söylerdi'], '', METIN_KUCUK_RESSAM, sahne('resim-cizen', 'cocuk'));
  ek('ma-t22', 'Ailesi resimler için ne derdi?', 'Güzel ve harika derdi', ['Hiçbir şey', 'Eleştirirdi', 'Güzel ve harika derdi', 'Beğenmezdi'], '', METIN_KUCUK_RESSAM, sahne('resme-bakan-aile', 'aile'));
  ek('ma-t23', 'Komşu çocuğu "Bu ne?" diye sordu. Bu Zeynep\'e ne düşündürdü?', 'Daha çok çalışıp gelişmesi gerekiyor', ['Komşu kötü bir çocuk', 'Resim çizmek gereksiz', 'Daha çok çalışıp gelişmesi gerekiyor', 'Ailesi yalan söylüyor'], '', METIN_KUCUK_RESSAM, sahne('dusunen-zeynep', 'cocuk'), { sasirtma: true });
  ek('ma-t24', '"Belki daha çok çalışmalıyım" demesi Zeynep hakkında ne gösterir?', 'Kendini geliştirme isteği', ['Pes ettiği', 'Kendini geliştirme isteği', 'Resimden nefret ettiği', 'Yorulduğu'], '', METIN_KUCUK_RESSAM, sahne('kararli-cocuk', 'cocuk'));
  ek('ma-t25', 'Bu metinden ne öğrenebiliriz?', 'Gerçek gelişim için dürüst geri bildirim değerlidir', ['Her zaman aile övgüsü yeterlidir', 'Komşuları dinleme', 'Gerçek gelişim için dürüst geri bildirim değerlidir', 'Resim çizmek zor bir iştir'], '', METIN_KUCUK_RESSAM, sahne('gelisim', 'cocuk'), { sasirtma: true });
  return sorular;
}

// ─── Kelime ve Anlam Bilgisi İleri ──────────────────────────────────────────

function kelimeVeAnlamBilgisiIleriAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.KA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: 'metin',
      ...extra,
    });
  ekle('ka-a1', '"Kulak vermek" deyimi ne anlama gelir?', 'Dikkatle dinlemek', '', { gorsel: sahne('dinleyen-cocuk', 'cocuk') });
  ekle('ka-a2', '"El ele vermek" ne demektir?', 'Birlikte çalışmak, yardımlaşmak', '', { gorsel: sahne('el-ele', 'cocuk') });
  ekle('ka-a3', '"Damlaya damlaya göl olur" atasözü ne öğretir?', 'Küçük birikimler büyük sonuçlar doğurur', '', { gorsel: sahne('damla', 'deniz') });
  ekle('ka-a4', '"Bugün işini yarına bırakma" atasözünün anlamı nedir?', 'İşleri ertelemeden yapmalıyız', '', { gorsel: sahne('calisan-cocuk', 'cocuk') });
  ekle('ka-a5', '"Aslan gibi cesur" ifadesinde aslan gerçek midir?', 'Hayır, mecaz anlam — çok cesur demek', '', { gorsel: sahne('cesur-cocuk', 'cocuk') });
  ekle('ka-a6', '"Gönül koydu" deyimi ne demektir?', 'Küstü, darıldı', '', { gorsel: sahne('kusan-cocuk', 'cocuk') });
  ekle('ka-a7', '"Ağzı sıkı" ne anlama gelir?', 'Sır saklayan, çok konuşmayan', '', { gorsel: sahne('agzi-siki', 'cocuk') });
  ekle('ka-a8', '"Bir elin nesi var, iki elin sesi var" atasözü ne demek?', 'Birlikte çalışmak daha güçlüdür', '', { gorsel: sahne('birlikte-calisma', 'cocuk') });
  ekle('ka-a9', '"Bal gibi tatlı" ifadesinde mecaz nedir?', 'Çok tatlı anlamında bal kullanılmış', '', { gorsel: sahne('bal', 'meyve') });
  ekle('ka-a10', '"Dil dökmek" deyiminin anlamı?', 'Birini ikna etmek için güzel konuşmak', '', { gorsel: sahne('konusan-cocuk', 'cocuk') });
  ekle('ka-a11', '"Saçma sapan konuşmak" ne demektir?', 'Anlamsız, mantıksız şeyler söylemek', '', { gorsel: sahne('kafasi-karisi', 'cocuk') });
  ekle('ka-a12', '"Körle yatan şaşı kalkar" atasözü ne öğretir?', 'Kötü arkadaş kötü alışkanlıklar kazandırır', '', { gorsel: sahne('arkadas-secimi', 'cocuk') });
  ekle('ka-a13', '"Güneş gibi parlak" ifadesinde ne var?', 'Mecaz anlam — çok zeki ve başarılı demek', '', { gorsel: sahne('parlak-ogrenci', 'cocuk') });
  ekle('ka-a14', '"Baş vurmak" deyimi ne anlama gelir?', 'Yardım istemek, başvurmak', '', { gorsel: sahne('yardim-isteyen', 'cocuk') });
  ekle('ka-a15', '"Taş gibi uyudu" ifadesini açıkla.', 'Çok derin ve rahat uyudu', '', { gorsel: sahne('derin-uyku', 'cocuk') });
  ekle('ka-a16', '"Bir taşla iki kuş vurmak" deyimi ne demektir?', 'Tek hareketle iki işi birden halletmek', '', { gorsel: sahne('iki-is', 'cocuk') });
  ekle('ka-a17', '"Ağzı var dili yok" deyiminin anlamı?', 'Çok sessiz, konuşmayan, çekingen biri', '', { gorsel: sahne('sessiz-cocuk', 'cocuk') });
  ekle('ka-a18', '"Sakla samanı, gelir zamanı" atasözü ne öğretir?', 'Her şeyi ileride lazım olur diye saklamalıyız', '', { gorsel: sahne('tasarruf', 'cocuk') });
  ekle('ka-a19', '"Buz gibi soğuk" ifadesinde mecaz nedir?', 'Çok soğuk demek için buz kullanılmış', '', { gorsel: sahne('buz', 'kar') });
  ekle('ka-a20', '"Kör olası para" ifadesi nasıl bir kullanımdır?', 'Deyimsel, paranın sorun çıkardığını anlatır', '', { gorsel: sahne('para', 'default') });
  ekle('ka-a21', '"İki yakasını bir araya getirememek" ne demektir?', 'Geçim sıkıntısı, para yetiştirememe', '', { gorsel: sahne('gecim-sikintisi', 'cocuk') });
  ekle('ka-a22', '"Dağ gibi adam" ifadesindeki mecaz nedir?', 'Çok iri, güçlü adam demek', '', { gorsel: sahne('guclu-adam', 'cocuk') });
  ekle('ka-a23', '"Bin düşün bir söyle" atasözü ne öğütler?', 'Konuşmadan önce iyice düşünmeli', '', { gorsel: sahne('dusunen-cocuk', 'cocuk') });
  ekle('ka-a24', '"Gözden düştü" deyiminin anlamı?', 'Değerini, itibarını kaybetti', '', { gorsel: sahne('uzgun-cocuk', 'cocuk') });
  ekle('ka-a25', '"Akıl akıldan üstündür" atasözü ne demektir?', 'Herkesin fikri değerlidir, birbirinden öğrenilir', '', { gorsel: sahne('birlikte-dusunen', 'cocuk') });
  return sorular;
}

function kelimeVeAnlamBilgisiIleriTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.KA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('ka-t1', '"Kulak vermek" deyiminin anlamı nedir?', 'Dikkatle dinlemek', ['Kulağını vermek', 'Dikkatle dinlemek', 'Kulağı ağrımak', 'Kulak takmak'], '', { gorsel: sahne('dinleyen-cocuk', 'cocuk') });
  ekle('ka-t2', '"Damlaya damlaya göl olur" atasözü ne öğretir?', 'Küçük birikimler büyük sonuçlar doğurur', ['Yağmur yağınca göl oluşur', 'Su tasarrufu yapmalıyız', 'Küçük birikimler büyük sonuçlar doğurur', 'Göller yağmurdan oluşur'], '', { gorsel: sahne('damla-gol', 'deniz') });
  ekle('ka-t3', '"Aslan gibi cesur savaştı" cümlesinde "aslan" nasıl kullanılmıştır?', 'Mecaz anlamında', ['Gerçek anlamında', 'Mecaz anlamında', 'Deyim olarak', 'Atasözü olarak'], '', { gorsel: sahne('cesur-cocuk', 'cocuk') });
  ekle('ka-t4', '"El ele vermek" deyimi ne anlama gelir?', 'Yardımlaşmak', ['El sıkışmak', 'Yardımlaşmak', 'El vermek', 'Tokatlamak'], '', { gorsel: sahne('el-ele', 'cocuk') });
  ekle('ka-t5', 'Hangi cümle atasözü içerir?', 'Damlaya damlaya göl olur', ['Bugün hava güzel', 'Ali okula gitti', 'Damlaya damlaya göl olur', 'Kedi miyavladı'], '', { gorsel: kart(['A', 'B', 'C', 'D']) });
  ekle('ka-t6', '"Ağzı sıkı" deyiminin anlamı nedir?', 'Sır saklayan', ['Ağzı küçük', 'Çok yemek yiyen', 'Sır saklayan', 'Az konuşan'], '', { gorsel: sahne('sir-saklayan', 'cocuk') });
  ekle('ka-t7', '"Bal gibi tatlı" ifadesinde bal gerçek anlamında mı kullanılmıştır?', 'Hayır, mecaz anlam', ['Evet, bal var', 'Hayır, mecaz anlam', 'Bazen', 'Her zaman gerçek'], '', { gorsel: sahne('bal', 'meyve'), sasirtma: true });
  ekle('ka-t8', '"Bir taşla iki kuş vurmak" deyimi ne demektir?', 'Tek seferde iki işi bitirmek', ['İki kuş avlamak', 'Taş atmak', 'Tek seferde iki işi bitirmek', 'Çok çalışmak'], '', { gorsel: sahne('iki-is', 'cocuk') });
  ekle('ka-t9', '"Bin düşün bir söyle" atasözü ne öğütler?', 'Konuşmadan önce iyice düşün', ['Çok konuş', 'Söz söyleme', 'Konuşmadan önce iyice düşün', 'Yavaş konuş'], '', { gorsel: sahne('dusunen-cocuk', 'cocuk') });
  ekle('ka-t10', '"Taş gibi uyudu" ifadesindeki mecaz nedir?', 'Çok derin uyudu', ['Taş üzerinde uyudu', 'Çok derin uyudu', 'Taş gibi sert yattı', 'Uyumadı'], '', { gorsel: sahne('derin-uyku', 'cocuk'), sasirtma: true });
  ekle('ka-t11', 'Deyim hangi seçenektir?', 'Gönül koydu', ['Hava güzel', 'Gülümsedi', 'Gönül koydu', 'Koştu'], '', { gorsel: kart(['A', 'B', 'C', 'D']) });
  ekle('ka-t12', '"Baş vurmak" deyiminin anlamı nedir?', 'Yardım istemek, başvurmak', ['Başını vurmak', 'Yardım istemek, başvurmak', 'Baş ağrısı', 'Koşmak'], '', { gorsel: sahne('yardim-isteyen', 'cocuk') });
  ekle('ka-t13', '"Dağ gibi adam" ifadesinde "dağ" ne anlama gelir?', 'İri ve güçlü', ['Dağda yaşayan', 'İri ve güçlü', 'Dağcı', 'Yürüyen dağ'], '', { gorsel: sahne('guclu-adam', 'cocuk'), sasirtma: true });
  ekle('ka-t14', 'Atasözü hangisidir?', 'Bir elin nesi var, iki elin sesi var', ['Ali top oynadı', 'Güneş doğdu', 'Bir elin nesi var, iki elin sesi var', 'Yağmur yağdı'], '', { gorsel: kart(['A', 'B', 'C', 'D']) });
  ekle('ka-t15', '"Ağzı var dili yok" deyimi kimi anlatır?', 'Çok sessiz, çekingen biri', ['Dilsiz biri', 'Çok konuşan biri', 'Çok sessiz, çekingen biri', 'Yabancı biri'], '', { gorsel: sahne('sessiz-cocuk', 'cocuk') });
  ekle('ka-t16', '"Gözden düştü" deyimi ne anlatır?', 'İtibarını kaybetti', ['Gözleri düştü', 'Yere düştü', 'İtibarını kaybetti', 'Ağladı'], '', { gorsel: sahne('deger-kaybi', 'cocuk'), sasirtma: true });
  ekle('ka-t17', '"Buz gibi soğuk" ifadesi nasıl bir kullanımdır?', 'Mecaz anlam', ['Gerçek anlam', 'Mecaz anlam', 'Deyim', 'Atasözü'], '', { gorsel: sahne('buz', 'kar') });
  ekle('ka-t18', '"Dil dökmek" deyiminin anlamı nedir?', 'İkna etmek için güzel konuşmak', ['Dilini çıkarmak', 'Dili tutulmak', 'İkna etmek için güzel konuşmak', 'Dili düşmek'], '', { gorsel: sahne('ikna-eden', 'cocuk') });
  ekle('ka-t19', 'Mecaz anlam içeren cümle hangisidir?', 'Yüreği dayanmadı', ['Kedi miyavladı', 'Güneş battı', 'Yüreği dayanmadı', 'Top yuvarlandı'], '', { gorsel: kart(['A', 'B', 'C', 'D']), sasirtma: true });
  ekle('ka-t20', '"Sakla samanı gelir zamanı" atasözü ne öğütler?', 'Tasarruflu ol, bir gün işe yarar', ['Saman topla', 'Her şeyi harca', 'Tasarruflu ol, bir gün işe yarar', 'Zamanı iyi kullan'], '', { gorsel: sahne('tasarruf', 'cocuk') });
  ekle('ka-t21', 'Deyim ne demektir?', 'Birkaç kelimenin farklı anlam oluşturması', ['Kısa ve özlü söz', 'Birkaç kelimenin farklı anlam oluşturması', 'Yabancı kelime', 'Şiirsel söz'], '', { gorsel: sahne('deyim-tanimi', 'default') });
  ekle('ka-t22', '"Akıl akıldan üstündür" atasözünün anlamı nedir?', 'Her aklın bir değeri var, birbirinden öğrenilir', ['Akıllı olmak iyidir', 'Herkes aptal', 'Her aklın bir değeri var, birbirinden öğrenilir', 'Çok akıllı olmak kötüdür'], '', { gorsel: sahne('birlikte-dusunen', 'cocuk'), sasirtma: true });
  ekle('ka-t23', 'Atasözü ile deyim arasındaki fark nedir?', 'Atasözü öğüt verir, deyim farklı anlam taşır', ['Fark yok', 'Atasözü öğüt verir, deyim farklı anlam taşır', 'İkisi de şiirdir', 'Atasözü daha kısadır'], '', { gorsel: sahne('karsilastirma', 'default') });
  ekle('ka-t24', '"İki yakasını bir araya getirememek" ne demektir?', 'Geçim sıkıntısı çekmek', ['Ceket dikememek', 'Geçim sıkıntısı çekmek', 'Çok kısa boylu olmak', 'Elbisesi dar gelmek'], '', { gorsel: sahne('gecim-sikintisi', 'cocuk') });
  ekle('ka-t25', '"Güneş gibi parlak bir öğrenci" cümlesinde mecaz nedir?', 'Öğrenci çok başarılı', ['Güneş var sınıfta', 'Öğrenci ışık saçıyor', 'Öğrenci çok başarılı', 'Güneş okula girmiş'], '', { gorsel: sahne('basarili-ogrenci', 'cocuk'), sasirtma: true });
  return sorular;
}

// ─── Yazma ve Anlatım İleri ─────────────────────────────────────────────────

function yazmaVeAnlatimIleriAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: 'metin',
      ...extra,
    });
  ekle('ya-a1', 'Mektupta hangi bilgiler bulunur?', 'Tarih, selamlama, gövde, kapanış, imza', '', { gorsel: sahne('mektup-sablonu', 'mektup') });
  ekle('ya-a2', 'Mektuba nasıl başlanır?', '"Sevgili..." veya "Sayın..." gibi selamlama ile', '', { gorsel: sahne('mektup-baslangic', 'mektup') });
  ekle('ya-a3', 'Mektup nasıl bitirilir?', '"Sevgilerimle, Saygılarımla" gibi kapanış + imza', '', { gorsel: sahne('mektup-bitis', 'mektup') });
  ekle('ya-a4', 'Günlük nedir?', 'Her günü nasıl geçirdiğimizi yazdığımız kişisel defter', '', { gorsel: sahne('gunluk-defteri', 'gunluk') });
  ekle('ya-a5', 'Günlüğe nasıl başlanır?', 'Tarih yazarak', '', { gorsel: sahne('tarihli-gunluk', 'gunluk') });
  ekle('ya-a6', 'Şiirde kafiye ne demektir?', 'Dizelerin sonundaki benzer sesler', '', { gorsel: sahne('kafiye', 'siir') });
  ekle('ya-a7', 'Şiirde benzetme neden kullanılır?', 'Anlatımı güzelleştirmek ve canlılaştırmak için', '', { gorsel: sahne('benzetme', 'siir') });
  ekle('ya-a8', 'Mektup ile mesaj arasındaki fark nedir?', 'Mektup daha uzun ve resmi, mesaj kısa ve hızlı', '', { gorsel: sahne('mektup-telefon', 'mektup') });
  ekle('ya-a9', 'Arkadaşına bir mektup yaz: selamlama cümlesi', 'Sevgili Ali,', '', { gorsel: sahne('mektup-baslangic', 'mektup') });
  ekle('ya-a10', 'Günlüğe bugün ne yazardın?', 'Bugünün en güzel anını yazardım', '', { gorsel: sahne('guzel-an', 'cocuk') });
  ekle('ya-a11', '"Yağmur" için bir benzetme yaz', 'Gökyüzünün gözyaşları', '', { gorsel: sahne('yagmur', 'yagmur'), alternatifCevaplar: ['Bulutların şarkısı'] });
  ekle('ya-a12', 'Kafiyeli iki cümle yaz.', 'Güneş doğdu parlayarak / Kuşlar uçtu şakıyarak', '', { gorsel: sahne('kafiye-gosterimi', 'siir') });
  ekle('ya-a13', 'Şiirde kıta nedir?', 'Birkaç dizenin oluşturduğu grup', '', { gorsel: sahne('kita-yapisi', 'siir') });
  ekle('ya-a14', 'Mektupta tarih neden yazılır?', 'Mektubun ne zaman yazıldığını göstermek için', '', { gorsel: sahne('tarihli-mektup', 'mektup') });
  ekle('ya-a15', 'Günlük ile anı arasındaki fark nedir?', 'Günlük o gün yazılır, anı sonradan hatırlanır', '', { gorsel: sahne('gunluk-ani', 'gunluk') });
  ekle('ya-a16', '"Bahar" konusunda 2 kafiyeli dize yaz.', 'Bahar geldi çiçeklerle / Kuşlar doldu neşeyle', '', { gorsel: sahne('bahar', 'cicek') });
  ekle('ya-a17', 'Mektupta gövde kısmında ne yazılır?', 'Anlatmak istediğimiz konular', '', { gorsel: sahne('mektup-govdesi', 'mektup') });
  ekle('ya-a18', 'Şiirde ritim neden önemlidir?', 'Şiiri müzikal ve akıcı yapar', '', { gorsel: sahne('ritimli-siir', 'siir') });
  ekle('ya-a19', '"Deniz" için bir kişileştirme yaz.', 'Deniz şarkı söylüyor', '', { gorsel: sahne('deniz', 'deniz'), alternatifCevaplar: ['Dalgalar dans ediyor'] });
  ekle('ya-a20', 'Günlüğüne hangi duyguları yazabilirsin?', 'Mutluluk, üzüntü, heyecan, şaşkınlık gibi her duyguyu', '', { gorsel: sahne('duygu-kartlari', 'cocuk') });
  ekle('ya-a21', 'Mektubu kime yazabiliriz?', 'Arkadaşa, aile büyüğüne, öğretmene, herkese', '', { gorsel: sahne('mektup-alicilari', 'mektup') });
  ekle('ya-a22', '"Mutluluk" kelimesi için bir benzetme yaz.', 'Mutluluk güneş gibi sıcak', '', { gorsel: sahne('mutluluk', 'gunes'), alternatifCevaplar: ['Mutluluk balon gibi uçucu'] });
  ekle('ya-a23', 'Şiirde neden kısa cümleler kullanılır?', 'Ritim ve etki için', '', { gorsel: sahne('kisa-dizeli-siir', 'siir') });
  ekle('ya-a24', 'Mektup ve günlük hangi bakımdan benzerdir?', 'İkisi de yazılı anlatımdır, düşünce ve duygu içerir', '', { gorsel: sahne('mektup-gunluk', 'mektup') });
  ekle('ya-a25', '"Kar" için bir şiir dizesi yaz.', 'Kar yağar bembeyaz / Dünya olur masal', '', { gorsel: sahne('kar-yagisi', 'kar') });
  return sorular;
}

function yazmaVeAnlatimIleriTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('ya-t1', 'Mektupta hangi bölüm en başta gelir?', 'Tarih ve selamlama', ['İmza', 'Gövde', 'Tarih ve selamlama', 'Kapanış'], '', { gorsel: sahne('mektup-siralama', 'mektup') });
  ekle('ya-t2', 'Günlük nedir?', 'Her günü nasıl geçirdiğimizi yazdığımız kişisel defter', ['Günlük haber gazetesi', 'Her günü nasıl geçirdiğimizi yazdığımız kişisel defter', 'Ders notu', 'Alışveriş listesi'], '', { gorsel: sahne('gunluk-defteri', 'gunluk') });
  ekle('ya-t3', 'Şiirde kafiye ne demektir?', 'Dizelerin sonundaki benzer sesler', ['Şiirin başlığı', 'Dizelerin sonundaki benzer sesler', 'Şiirin konusu', 'Şiirin uzunluğu'], '', { gorsel: sahne('kafiye-gosterimi', 'siir') });
  ekle('ya-t4', 'Mektup nasıl bitirilir?', 'Kapanış ifadesi ve imza ile', ['Nokta ile', 'Selamlama ile', 'Kapanış ifadesi ve imza ile', 'Tarih ile'], '', { gorsel: sahne('mektup-sonu', 'mektup') });
  ekle('ya-t5', 'Günlüğe hangi bilgi en başta yazılır?', 'Tarih', ['İmza', 'Tarih', 'Konu', 'Selamlama'], '', { gorsel: sahne('tarihli-gunluk', 'gunluk') });
  ekle('ya-t6', '"Güneş güldü" ifadesinde ne var?', 'Kişileştirme', ['Kafiye', 'Gerçek bilgi', 'Kişileştirme', 'Atasözü'], '', { gorsel: sahne('gulen-gunes', 'gunes') });
  ekle('ya-t7', 'Mektup ile günlük arasındaki fark nedir?', 'Mektup birine yazılır, günlük kişisel', ['Fark yok', 'Mektup birine yazılır, günlük kişisel', 'İkisi de aynı', 'Günlük daha uzundur'], '', { gorsel: sahne('mektup-gunluk-karsilastirma', 'mektup'), sasirtma: true });
  ekle('ya-t8', 'Şiirde benzetme neden kullanılır?', 'Anlatımı güzelleştirmek için', ['Şiiri uzatmak için', 'Anlatımı güzelleştirmek için', 'Kafiye oluşturmak için', 'Konu değiştirmek için'], '', { gorsel: sahne('siirde-benzetme', 'siir') });
  ekle('ya-t9', '"Sevgili Ayşe," ifadesi mektubun hangi bölümüdür?', 'Selamlama', ['Kapanış', 'Gövde', 'Selamlama', 'İmza'], '', { gorsel: sahne('mektup-selamlama', 'mektup') });
  ekle('ya-t10', 'Günlük neden kişiseldir?', 'Sadece bize ait duygu ve düşünceler içerir', ['Çünkü çok uzundur', 'Sadece bize ait duygu ve düşünceler içerir', 'Çünkü kimse okumaz', 'Çünkü gizli bir dilde yazılır'], '', { gorsel: sahne('kisisel-gunluk', 'gunluk'), sasirtma: true });
  ekle('ya-t11', 'Şiirde kıta nedir?', 'Birkaç dizenin oluşturduğu grup', ['Tek bir dize', 'Birkaç dizenin oluşturduğu grup', 'Şiirin başlığı', 'Kafiye çifti'], '', { gorsel: sahne('kita-yapisi', 'siir') });
  ekle('ya-t12', 'Mektupta tarih neden yazılır?', 'Ne zaman yazıldığını göstermek için', ['Güzel görünsün diye', 'Zorunlu olduğu için', 'Ne zaman yazıldığını göstermek için', 'Posta için'], '', { gorsel: sahne('tarihli-mektup', 'mektup') });
  ekle('ya-t13', '"Yağmur gökyüzünün gözyaşı" ifadesinde ne var?', 'Benzetme', ['Kafiye', 'Benzetme', 'Atasözü', 'Deyim'], '', { gorsel: sahne('yagmur-benzetmesi', 'yagmur'), sasirtma: true });
  ekle('ya-t14', 'Şiir yazarken en önemli şey nedir?', 'Duygu ve düşüncelerimizi özgünce ifade etmek', ['Çok uzun yazmak', 'Hep kafiye kullanmak', 'Duygu ve düşüncelerimizi özgünce ifade etmek', 'Başkasının şiirini kopyalamak'], '', { gorsel: sahne('siir-yazan', 'cocuk') });
  ekle('ya-t15', 'Mektup hangi amaçla yazılır?', 'Birine düşünce ve duygularımızı iletmek için', ['Not almak için', 'Birine düşünce ve duygularımızı iletmek için', 'Hikâye anlatmak için', 'Alışveriş için'], '', { gorsel: sahne('mektup-yazimi', 'mektup') });
  ekle('ya-t16', 'Günlükte hangi zaman kullanılır?', 'Geçmiş zaman', ['Gelecek zaman', 'Geçmiş zaman', 'Geniş zaman', 'Şimdiki zaman'], '', { gorsel: sahne('gunluk-zaman', 'gunluk'), sasirtma: true });
  ekle('ya-t17', 'Kafiyeli dize çifti hangisidir?', 'Güneş doğdu parlayarak / Kuşlar uçtu şakıyarak', ['Hava güzel, top oynadım', 'Güneş doğdu parlayarak / Kuşlar uçtu şakıyarak', 'Okula gittim, ders çalıştım', 'Ali koştu, Ayşe yürüdü'], '', { gorsel: sahne('kafiye-cifti', 'siir') });
  ekle('ya-t18', 'Mektup ile mesajın farkı nedir?', 'Mektup daha uzun ve resmi, mesaj kısa ve hızlı', ['Fark yok', 'Mektup yazılı, mesaj sözlü', 'Mektup daha uzun ve resmi, mesaj kısa ve hızlı', 'İkisi de aynı uzunlukta'], '', { gorsel: sahne('mektup-mesaj', 'mektup') });
  ekle('ya-t19', 'Şiirde ritim ne işe yarar?', 'Şiiri müzikal ve akıcı yapar', ['Şiiri uzatır', 'Şiiri müzikal ve akıcı yapar', 'Kafiye oluşturur', 'Anlam değiştirir'], '', { gorsel: sahne('ritimli-siir', 'siir'), sasirtma: true });
  ekle('ya-t20', 'Günlük ne zaman yazılır?', 'O günün yaşananlarını o gün veya gece', ['Hafta sonları', 'O günün yaşananlarını o gün veya gece', 'Ayda bir', 'Sadece özel günlerde'], '', { gorsel: sahne('aksam-gunluk', 'gunluk') });
  ekle('ya-t21', 'Kişileştirme nedir?', 'Cansız varlıklara insan özellikleri vermek', ['Bir kişiyi tanıtmak', 'Cansız varlıklara insan özellikleri vermek', 'İsim vermek', 'Benzetme yapmak'], '', { gorsel: sahne('kisilestirme', 'siir'), sasirtma: true });
  ekle('ya-t22', 'Hangi cümle mektup kapanışına uygun?', 'Sevgilerimle, Ali', ['Merhaba!', 'Bugün hava güzel', 'Sevgilerimle, Ali', '23 Kasım 2024'], '', { gorsel: sahne('mektup-kapanisi', 'mektup') });
  ekle('ya-t23', 'Şiirde benzetme nasıl yapılır?', '"Gibi, sanki, tıpkı" gibi sözcüklerle', ['Konuyu anlatarak', 'Kafiye kurarak', '"Gibi, sanki, tıpkı" gibi sözcüklerle', 'Uzun cümleler yazarak'], '', { gorsel: sahne('benzetme-ornekleri', 'siir') });
  ekle('ya-t24', 'Hangisi yaratıcı yazma türüdür?', 'Hikâye yazma', ['Alışveriş listesi', 'Telefon numarası', 'Hikâye yazma', 'Tarih listesi'], '', { gorsel: sahne('yaratici-yazma', 'hikaye'), sasirtma: true });
  ekle('ya-t25', 'İyi bir şiir için hangisi en önemlidir?', 'Yazarın duygularını içtenlikle yansıtması', ['Çok uzun olması', 'Resimsiz olması', 'Yazarın duygularını içtenlikle yansıtması', 'Hep aynı konuda olması'], '', { gorsel: sahne('icten-siir', 'cocuk'), sasirtma: true });
  return sorular;
}

// ─── Export ─────────────────────────────────────────────────────────────────

export function metinAnlamaVeYorumlama(karistir) {
  return {
    id: 'metin-anlama-ve-yorumlama',
    baslik: 'Metin Anlama ve Yorumlama',
    kazanimKodu: KAZANIM.MA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Bir metni okurken "Ne anlatıyor?" sorusunu sorarız. İyi okuyucular bir adım daha gider: "Bu bana ne hissettiriyor? Yazar ne demek istiyor?" diye de sorar. Buna yorum denir.',
          gorsel: anl('ma-anlatim-1'),
        },
        {
          metin:
            'Çıkarımlar metinde açıkça yazılmayan ama anlaşılan bilgilerdir. "Ayşe şemsiyesini aldı" → dışarıda yağmur yağıyor! Doğrudan yazmasa da anlıyoruz.',
          gorsel: anl('ma-anlatim-2'),
        },
        {
          metin:
            'Sebep-sonuç olayların neden-niçin bağlantısıdır. "Hava soğudu çünkü kar yağdı." Metinde sebep-sonuç ilişkisini bulmak anlamamızı derinleştirir.',
          gorsel: anl('ma-anlatim-3'),
        },
      ],
    },
    alistirma: metinAnlamaVeYorumlamaAlistirma(),
    test: metinAnlamaVeYorumlamaTest(karistir),
  };
}

export function kelimeVeAnlamBilgisiIleri(karistir) {
  return {
    id: 'kelime-ve-anlam-bilgisi-ileri',
    baslik: 'Kelime ve Anlam Bilgisi İleri',
    kazanimKodu: KAZANIM.KA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Deyim, birden fazla kelimenin bir araya gelerek farklı bir anlam oluşturmasıdır. "Kulak vermek" gerçek anlamıyla kulağını vermez — "dikkatle dinlemek" demektir!',
          gorsel: anl('ka-anlatim-1'),
        },
        {
          metin:
            'Atasözleri uzun deneyimlerden doğmuş kısa ve özlü sözlerdir. "Damlaya damlaya göl olur" — küçük şeyler birikerek büyük sonuçlar doğurur!',
          gorsel: anl('ka-anlatim-2'),
        },
        {
          metin:
            'Mecaz anlam bir kelimenin gerçek anlamı dışında kullanılmasıdır. "Aslan gibi savaştı" — gerçek aslan değil, güçlü ve cesur demek!',
          gorsel: anl('ka-anlatim-3'),
        },
      ],
    },
    alistirma: kelimeVeAnlamBilgisiIleriAlistirma(),
    test: kelimeVeAnlamBilgisiIleriTest(karistir),
  };
}

export function yazmaVeAnlatimIleri(karistir) {
  return {
    id: 'yazma-ve-anlatim-ileri',
    baslik: 'Yazma ve Anlatım İleri',
    kazanimKodu: KAZANIM.YA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Mektup yazmak sevdiklerimizle iletişim kurmanın güzel bir yoludur. Mektupta tarih, selamlama, gövde, kapanış ve imza bulunur.',
          gorsel: anl('ya-anlatim-1'),
        },
        {
          metin:
            'Günlükte o günü nasıl geçirdiğimizi yazarız. Tarih olur, "ben" anlatımı olur, duygularımızı paylaşırız. Günlük tamamen özeldir!',
          gorsel: anl('ya-anlatim-2'),
        },
        {
          metin:
            'Şiir yazmak için kafiye, ritim ve duygu önemlidir. Kısa cümleler, benzetmeler ve imgeler şiirimizi güzelleştirir.',
          gorsel: anl('ya-anlatim-3'),
        },
      ],
    },
    alistirma: yazmaVeAnlatimIleriAlistirma(),
    test: yazmaVeAnlatimIleriTest(karistir),
  };
}
