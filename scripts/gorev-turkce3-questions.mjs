/** GOREV-TURKCE3 — Yazma Becerileri, Dinleme ve Konuşma, Sözcük ve Dil Bilgisi (150 soru). */

const KAZANIM = {
  YZ: 'TUR.2.3.1',
  DK: 'TUR.2.3.2',
  SDB: 'TUR.2.3.3',
};

function sahne(sahne, nesne) { return { tur:'turkce', mod:'sahne', sahne, nesne }; }
function anl(sahne) { return { tur:'turkce', mod:'anlatim', sahne }; }
function nesne(kelime, nesne, vurgu) { return { tur:'turkce', mod:'nesne', kelime, nesne, vurgu }; }
function cumle(metin, opts={}) { return { tur:'turkce', mod:'cumle', metin, ...opts }; }
function kart(harfler) { return { tur:'turkce', mod:'kart', harfler }; }

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function yazmaBecerileriAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YZ,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("yz-a1", "\"Kedi\" sözcüğüyle bir cümle kur.", "Kedi uyuyor. / Kedi süt içti.", '', { gorsel: sahne('kedi', 'kedi'), cevapTipi: "metin" });
  ekle("yz-a2", "\"Bahçe, çiçek, güzel\" sözcüklerini kullanarak cümle kur.", "Bahçedeki çiçekler çok güzel.", '', { gorsel: sahne('cicekli-bahce', 'bahce'), cevapTipi: "metin" });
  ekle("yz-a3", "Şu cümleyi tamamla: \"Sabah uyandığımda ___\"", "Sabah uyandığımda güneş parlıyordu.", '', { gorsel: sahne('sabah', 'gunes'), cevapTipi: "metin" });
  ekle("yz-a4", "İki cümleyi birleştir: \"Hava soğuktu. Palto giydim.\"", "Hava soğuk olduğu için palto giydim.", '', { gorsel: sahne('palto-giyen-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("yz-a5", "\"Mutlu\" sözcüğüyle bir cümle kur.", "Bugün çok mutluyum.", '', { gorsel: sahne('gulen-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("yz-a6", "Paragraf mı, cümle mi? \"Bugün okula gittim.\"", "Cümle", '', { gorsel: cumle('Bugün okula gittim.', { cumleTuru: 'Cümle' }), cevapTipi: "metin" });
  ekle("yz-a7", "Şu cümleyi genişlet: \"Köpek koştu.\"", "Küçük köpek bahçede hızla koştu.", '', { gorsel: sahne('kosen-kopek', 'kopek'), cevapTipi: "metin" });
  ekle("yz-a8", "Resmi tarif eden bir cümle yaz:", "Yağmurda şemsiye tutan çocuk ıslanmıyor.", '', { gorsel: sahne('yagmurda-semsiye', 'yagmur'), cevapTipi: "metin" });
  ekle("yz-a9", "\"Çünkü\" bağlacını kullanarak cümle kur.", "Uyudum çünkü çok yorgundum.", '', { gorsel: sahne('uyuyan-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("yz-a10", "Şu paragrafın ana fikrini bul: \"Kitaplar çok yararlıdır. Yeni şeyler öğretirir. Hayal dünyamızı genişletir.\"", "Kitapların yararları", '', { gorsel: sahne('kitap-yigini', 'kitap'), cevapTipi: "metin" });
  ekle("yz-a11", "Eksik kelimeyi ekle: \"Ayşe ___ bahçede oynadı.\"", "Ayşe arkadaşıyla bahçede oynadı.", '', { gorsel: sahne('oynayan-cocuklar', 'cocuk'), cevapTipi: "metin" });
  ekle("yz-a12", "\"Ama\" bağlacını kullanarak iki cümle birleştir: \"Yağmur yağıyordu. Dışarı çıktım.\"", "Yağmur yağıyordu ama dışarı çıktım.", '', { gorsel: sahne('yagmurda-cocuk', 'yagmur'), cevapTipi: "metin" });
  ekle("yz-a13", "Sıfat ekle: \"Araba geçti.\"", "Kırmızı araba hızla geçti.", '', { gorsel: sahne('araba', 'araba'), cevapTipi: "metin" });
  ekle("yz-a14", "Hikâyenin başlangıcını yaz: \"Bir gün ormanda ___\"", "Bir gün ormanda küçük bir tilki yolunu kaybetti.", '', { gorsel: sahne('orman', 'agac'), cevapTipi: "metin" });
  ekle("yz-a15", "\"Önce, sonra, en son\" kelimelerini kullanarak sıralı cümleler kur.", "Önce uyandım, sonra yıkandım, en son kahvaltı yaptım.", '', { gorsel: sahne('sabah-rutini', 'cocuk'), cevapTipi: "metin" });
  ekle("yz-a16", "Paragrafın hangi cümlesi ana fikirdir? \"Sağlıklı olmak önemlidir. Her gün spor yapmalıyız. Sebze yemek de gerekir.\"", "Sağlıklı olmak önemlidir.", '', { gorsel: sahne('saglikli-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("yz-a17", "Resmi anlatan 2 cümle yaz:", "Çocuklar denizde oynuyor. Dalgalar onlara vuruyor.", '', { gorsel: sahne('denizde-oyun', 'deniz'), cevapTipi: "metin" });
  ekle("yz-a18", "Zıt anlamlı sözcük kullanarak cümle çifti oluştur.", "Hava bugün sıcak. / Hava dün soğuktu.", '', { gorsel: sahne('sicak-soguk', 'gunes'), cevapTipi: "metin" });
  ekle("yz-a19", "\"Ve\" bağlacıyla iki cümle birleştir: \"Güneş parladı. Çiçekler açtı.\"", "Güneş parladı ve çiçekler açtı.", '', { gorsel: sahne('gunesli-cicek', 'cicek'), cevapTipi: "metin" });
  ekle("yz-a20", "Hikâyeye uygun bir başlık bul: \"Küçük kedi yolunu kaybetti. Onu bir çocuk buldu ve eve götürdü.\"", "\"Kayıp Kedi\" veya \"İyi Kalpli Çocuk\"", '', { gorsel: sahne('kedi-cocuk', 'kedi'), cevapTipi: "metin" });
  ekle("yz-a21", "Eksik özneyi ekle: \"___ parkta oyun oynuyor.\"", "Çocuklar parkta oyun oynuyor.", '', { gorsel: sahne('park', 'park'), cevapTipi: "metin" });
  ekle("yz-a22", "\"Güzel bir gün\" konusunda 2 cümle yaz.", "Bugün hava çok güzel. Güneş parlıyor, kuşlar ötüyor.", '', { gorsel: sahne('guzel-gun', 'gunes'), cevapTipi: "metin" });
  ekle("yz-a23", "Cümleyi soru haline getir: \"Ali okula gitti.\"", "Ali okula gitti mi?", '', { gorsel: cumle('Ali okula gitti mi?', { cumleTuru: 'Soru' }), cevapTipi: "metin" });
  ekle("yz-a24", "Hikâyenin sonunu tamamla: \"Mehmet parkta bir cüzdan buldu. İçinde para vardı. Mehmet ___\"", "Mehmet cüzdanı karakola götürdü.", '', { gorsel: sahne('cuzdan-bulan-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("yz-a25", "Sevdiğin bir şey hakkında 3 cümle yaz.", "Kitapları seviyorum. Her gün okuyorum. Harika maceralar yaşıyorum.", '', { gorsel: sahne('sevilen-seyler', 'kitap'), cevapTipi: "metin" });

  return sorular;
}

function yazmaBecerileriTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YZ,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("yz-t1", "Aşağıdakilerden hangisi tam bir cümledir?", "Ali okula gitti", ["Güzel çiçek", "Hızlı koşan", "Ali okula gitti", "Mavi gökyüzü"], "", { gorsel: kart(['A', 'B', 'C', 'D']) });
  ekle("yz-t2", "\"Kedi süt içti. Kedi mutlu oldu.\" cümlelerini \"ve\" ile birleştir.", "Kedi süt içti ve mutlu oldu", ["Kedi süt içti ve mutlu oldu", "Kedi süt içti, mutlu oldu", "Kedi ve süt içti", "Kedi mutlu süt içti"], "", { gorsel: sahne('sut-icen-kedi', 'kedi') });
  ekle("yz-t3", "Paragraf hangi özelliği taşır?", "Aynı konudaki cümleler topluluğudur", ["Tek cümleden oluşur", "Aynı konudaki cümleler topluluğudur", "Her zaman 5 cümle içerir", "Şiir gibi yazılır"], "", { gorsel: sahne('paragraf-yapisi', 'kitap') });
  ekle("yz-t4", "Hangi bağlaç neden-sonuç ilişkisi kurar?", "çünkü", ["ve", "ama", "çünkü", "ile"], "", { gorsel: kart(['ve', 'ama', 'çünkü', 'ile']) });
  ekle("yz-t5", "\"Hava soğuktu ___ palto giydim.\" Boşluğa hangi bağlaç gelir?", "çünkü", ["ve", "ama", "çünkü", "veya"], "", { gorsel: sahne('palto-giyen-cocuk', 'cocuk') });
  ekle("yz-t6", "Hikâye yazarken hangi sorular sorulur?", "Kim, nerede, ne yaptı", ["Ne zaman, nerede, nasıl", "Kim, nerede, ne yaptı", "Kaç, ne kadar, hangi", "Neden, nasıl, kim"], "", { gorsel: sahne('hikaye-soru-kartlari', 'hikaye') });
  ekle("yz-t7", "Şu paragrafın ana fikri nedir? \"Ağaçlar çok önemlidir. Hava temizler, gölge yapar, hayvanlar barınak bulur.\"", "Ağaçlar çok önemlidir", ["Ağaçlar güzeldir", "Hayvanlar ağaçlarda yaşar", "Ağaçlar çok önemlidir", "Ağaçlar gölge yapar"], "", { gorsel: sahne('agac-onemi', 'agac') });
  ekle("yz-t8", "\"Ali koştu ama yorulmadı.\" cümlesinde \"ama\" ne işlevi görür?", "Zıtlık", ["Neden-sonuç", "Zıtlık", "Sıralama", "Ekleme"], "", { gorsel: sahne('kosen-cocuk', 'cocuk'), sasirtma: true });
  ekle("yz-t9", "Cümleye sıfat eklemek ne işe yarar?", "Anlamı zenginleştirir", ["Cümleyi kısaltır", "Özneyi değiştirir", "Anlamı zenginleştirir", "Yüklemi kaldırır"], "", { gorsel: sahne('sifat-ornegi', 'araba') });
  ekle("yz-t10", "Hangisi paragrafın ilk cümlesi için doğrudur?", "Ana fikri içerir", ["Girintisiz başlar", "Ana fikri içerir", "Her zaman soru cümlesidir", "En kısa cümledir"], "", { gorsel: sahne('paragraf-yapisi', 'kitap') });
  ekle("yz-t11", "\"Önce dişlerimi fırçaladım, ___ yatağa girdim.\" Boşluğa ne gelir?", "sonra", ["çünkü", "ama", "sonra", "ile"], "", { gorsel: sahne('yatma-rutini', 'cocuk') });
  ekle("yz-t12", "Hangi cümle daha açıklayıcıdır?", "Kırmızı spor araba hızla geçti", ["Araba geçti", "Kırmızı spor araba hızla geçti", "Araba hızlı", "Geçti araba"], "", { gorsel: sahne('araba-karsilastirma', 'araba'), sasirtma: true });
  ekle("yz-t13", "Hikâyenin başlangıcına ne yazılır?", "Kahraman ve yer tanıtımı", ["Sonuç", "Kahraman ve yer tanıtımı", "Olay çözümü", "Ders"], "", { gorsel: sahne('hikaye-baslangici', 'hikaye') });
  ekle("yz-t14", "\"Mehmet kitap okudu. Mehmet çok şey öğrendi.\" Bu iki cümleyi birleştir.", "Mehmet kitap okuyarak çok şey öğrendi", ["Mehmet kitap okudu çünkü çok şey öğrendi", "Mehmet kitap okuyarak çok şey öğrendi", "Mehmet ve kitap okudu", "Mehmet okuyunca şey öğrendi"], "", { gorsel: sahne('kitap-okuyan-cocuk', 'kitap') });
  ekle("yz-t15", "Yazarken en önemli şey nedir?", "Düşünceleri açık ve anlaşılır ifade etmek", ["Uzun yazmak", "Güzel el yazısı", "Düşünceleri açık ve anlaşılır ifade etmek", "Çok noktalama kullanmak"], "", { gorsel: sahne('yazan-cocuk', 'cocuk'), sasirtma: true });
  ekle("yz-t16", "\"Hava güneşli ___ dışarı çıktım.\" Boşluğa ne gelir?", "ve", ["ama", "çünkü", "ve", "ile"], "", { gorsel: sahne('gunesli-gun', 'gunes') });
  ekle("yz-t17", "Paragrafta kaç ana fikir olur?", "Bir", ["İki", "Üç", "Bir", "Beş"], "", { gorsel: sahne('paragraf-yapisi', 'kitap') });
  ekle("yz-t18", "Hangi cümle zıtlık bildiren bağlaç içerir?", "Hava soğuktu ama dışarı çıktım", ["Ali geldi ve gitti", "Hava soğuktu ama dışarı çıktım", "Önce geldi sonra gitti", "Ali ile Ayşe geldi"], "", { gorsel: sahne('zitlik-baglaci', 'default'), sasirtma: true });
  ekle("yz-t19", "Resmi anlatırken ne yapılır?", "Resimdeki varlıkları ve olayları cümlelerle anlatırız", ["Resmi kopyalarız", "Resimdeki varlıkları ve olayları cümlelerle anlatırız", "Resmin renklerini sayarız", "Resmi kesip yapıştırırız"], "", { gorsel: sahne('resim-anlatan-cocuk', 'cocuk') });
  ekle("yz-t20", "\"Fatma ___ çünkü hava yağmurluydu.\" Boşluğa ne gelebilir?", "şemsiye aldı", ["güldü", "yüzdü", "şemsiye aldı", "güneşlendi"], "", { gorsel: sahne('yagmurlu-hava', 'yagmur') });
  ekle("yz-t21", "İyi bir hikâyede ne olmaz?", "Anlamsız cümleler", ["Kahraman", "Olay", "Yer", "Anlamsız cümleler"], "", { gorsel: sahne('hikaye-unsurlari', 'hikaye'), sasirtma: true });
  ekle("yz-t22", "Cümleye hangi ekleme onu daha ilgi çekici yapar?", "Sıfat ve zarf ekleme", ["Daha fazla nokta", "Sıfat ve zarf ekleme", "Özneyi silme", "Yüklemi öne alma"], "", { gorsel: sahne('cumle-zenginlestirme', 'default') });
  ekle("yz-t23", "\"Bir gün ormanda bir ayı gördüm.\" Bu cümle hikâyenin neresine uyar?", "Başlangıç", ["Sonuç", "Başlangıç", "Orta", "Her yerine"], "", { gorsel: sahne('orman', 'agac') });
  ekle("yz-t24", "Paragraf girintili neden başlar?", "Yeni bir konuya geçildiğini göstermek için", ["Güzel göründüğü için", "Yeni bir konuya geçildiğini göstermek için", "Kural böyle olmadığı için", "Öğretmen istediği için"], "", { gorsel: sahne('girintili-paragraf', 'kitap'), sasirtma: true });
  ekle("yz-t25", "Hangi başlık aşağıdaki hikâyeye en uygun düşer? \"Küçük kedi kayboldu. Onu iyi kalpli bir çocuk buldu ve eve götürdü.\"", "Kayıp Kedi", ["Büyük Köpek", "Kayıp Kedi", "Orman Macerası", "Yağmurlu Gün"], "", { gorsel: sahne('kedi-cocuk-sahnesi', 'kedi'), sasirtma: true });

  return sorular;
}

function dinlemeVeKonusmaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.DK,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("dk-a1", "İyi bir dinleyici ne yapar?", "Konuşana bakar, sessiz olur, anlamaya çalışır", '', { gorsel: sahne('dinleyen-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a2", "Arkadaşın konuşurken ne yapmalısın?", "Sessizce dinlemeliyim", '', { gorsel: sahne('dinleme-sahnesi', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a3", "\"Lütfen\" ne zaman kullanılır?", "Bir şey istenirken", '', { gorsel: sahne('kibarca-isteyen-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a4", "Öğretmen anlatırken ne yapmalısın?", "Dikkatle dinlemeliyim, not almalıyım", '', { gorsel: sahne('ogretmen-dinleyen-ogrenciler', 'ogretmen'), cevapTipi: "metin" });
  ekle("dk-a5", "Telefonda konuşurken nasıl davranmalısın?", "Açık ve anlaşılır konuşmalı, kibarca davranmalıyım", '', { gorsel: sahne('telefonda-konusan-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a6", "\"Özür dilerim\" ne zaman söylenir?", "Hata yapıldığında veya birini rahatsız ettiğinde", '', { gorsel: sahne('ozur-dileyen-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a7", "Sınıfta konuşmak istediğinde ne yapmalısın?", "Elimi kaldırmalıyım", '', { gorsel: sahne('el-kaldiran-ogrenci', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a8", "İyi bir konuşma için ne gerekir?", "Açık, anlaşılır, saygılı konuşmak", '', { gorsel: sahne('konusma-balonu', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a9", "Dinlerken anlamadığın bir şey olursa ne yaparsın?", "Kibarca soru sorarım", '', { gorsel: sahne('soru-soran-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a10", "\"Teşekkür ederim\" ne zaman söylenir?", "Yardım alındığında veya hediye alındığında", '', { gorsel: sahne('tesekkur-eden-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a11", "Arkadaşının sözünü kesmek neden yanlıştır?", "Saygısızlık olur, konuşanı rahatsız eder", '', { gorsel: sahne('sozu-kesilen-kisi', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a12", "Toplu taşımada yüksek sesle konuşmak doğru mu?", "Hayır, etrafı rahatsız eder", '', { gorsel: sahne('otobuste-sessiz-konusma', 'default'), cevapTipi: "metin" });
  ekle("dk-a13", "İyi bir dinleyici nasıl oturur?", "Dik ve dikkatli, konuşana yönelik", '', { gorsel: sahne('dikkatli-oturan-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a14", "Konuşurken ne yapmamalısın?", "Yüksek sesle bağırmamalı, sözünü kesmemeli", '', { gorsel: sahne('yanlis-konusma-davranislari', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a15", "\"Rica ederim\" ne anlama gelir?", "Teşekküre verilen kibarca cevap", '', { gorsel: sahne('kibarca-konusan-cocuklar', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a16", "Sunuş yaparken nasıl konuşmalısın?", "Yüksek, net ve anlaşılır", '', { gorsel: sahne('sunum-yapan-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a17", "Arkadaşın üzgünse ne söylersin?", "\"Geçmiş olsun, sana yardım edebilir miyim?\"", '', { gorsel: sahne('teselli-eden-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a18", "Dinlemek neden önemlidir?", "Bilgi öğreniriz, karşımızdakine saygı gösteririz", '', { gorsel: sahne('dinlemenin-onemi', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a19", "Konuşma sırası sana geldiğinde ne yaparsın?", "Açık ve net konuşur, konuya odaklanırım", '', { gorsel: sahne('konusma-sirasi', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a20", "Yanlış anladığında ne yaparsın?", "\"Özür dilerim, tekrar anlatır mısın?\" derim", '', { gorsel: sahne('yanlis-anlama-sahnesi', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a21", "Kalabalık bir yerde konuşurken ne yapmalısın?", "Net ama saygılı bir ses tonu kullanmalıyım", '', { gorsel: sahne('kalabalik-ortam', 'default'), cevapTipi: "metin" });
  ekle("dk-a22", "İyi iletişimin en önemli kuralı nedir?", "Karşındakine saygı göstermek", '', { gorsel: sahne('saygi-sembolu', 'default'), cevapTipi: "metin" });
  ekle("dk-a23", "Birinin adını bilmiyorsan nasıl sorarsın?", "\"Özür dilerim, adınız ne?\" diye sorarım", '', { gorsel: sahne('kibarca-soran-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("dk-a24", "Konuşmak ile yazmak arasındaki fark nedir?", "Konuşma sesle, yazma harflerle ifade edilir", '', { gorsel: sahne('konusma-yazma-karsilastirma', 'default'), cevapTipi: "metin" });
  ekle("dk-a25", "Empati nedir?", "Karşındakinin duygularını anlamaya çalışmak", '', { gorsel: sahne('empati-gosteren-cocuklar', 'cocuk'), cevapTipi: "metin" });

  return sorular;
}

function dinlemeVeKonusmaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.DK,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("dk-t1", "İyi bir dinleyici hangisini yapar?", "Konuşana bakarak sessizce dinler", ["Konuşanın sözünü keser", "Başka şeylerle ilgilenir", "Konuşana bakarak sessizce dinler", "Yüksek sesle güler"], "", { gorsel: sahne('iyi-dinleyici', 'cocuk') });
  ekle("dk-t2", "Sınıfta konuşmak istediğinde ne yapmalısın?", "Elini kaldırmalı", ["Bağırarak söylemeli", "Elini kaldırmalı", "Öğretmeni iterek geçmeli", "Arkadaşına fısıldamalı"], "", { gorsel: sahne('el-kaldiran-ogrenci', 'cocuk') });
  ekle("dk-t3", "\"Lütfen\" sözcüğü ne zaman kullanılır?", "Bir şey istenirken", ["Kızarken", "Bir şey istenirken", "Veda ederken", "Gülerken"], "", { gorsel: sahne('kibarca-isteyen-cocuk', 'cocuk') });
  ekle("dk-t4", "Arkadaşın konuşurken ne yapmalısın?", "Sessizce dinlemeli", ["Başka yöne bakmalı", "Sessizce dinlemeli", "Sözünü kesmeli", "Gülerek geçmeli"], "", { gorsel: sahne('dinleme-sahnesi', 'cocuk') });
  ekle("dk-t5", "\"Teşekkür ederim\" hangi durumda söylenir?", "Yardım alınca", ["Hata yapınca", "Yardım alınca", "Veda ederken", "Kızınca"], "", { gorsel: sahne('tesekkur-eden-cocuk', 'cocuk') });
  ekle("dk-t6", "Öğretmen ders anlatırken ne yapılmalıdır?", "Dikkatle dinlenilmeli", ["Arkadaşla konuşulmalı", "Oyun oynanmalı", "Dikkatle dinlenilmeli", "Yüksek sesle gülünmeli"], "", { gorsel: sahne('ders-dinleyen-ogrenciler', 'ogretmen') });
  ekle("dk-t7", "Birinin sözünü kesmek neden yanlıştır?", "Saygısızlıktır ve konuşanı rahatsız eder", ["Zaman kaybettirir", "Saygısızlıktır ve konuşanı rahatsız eder", "Ses çıkarır", "Öğretmen duyar"], "", { gorsel: sahne('sozu-kesilen-kisi', 'cocuk'), sasirtma: true });
  ekle("dk-t8", "Anlamadığın bir şeyi sormak için nasıl davranırsın?", "Kibarca elini kaldırıp sorarsın", ["Sessiz kalırsın", "Bağırırsın", "Kibarca elini kaldırıp sorarsın", "Arkadaşına sorarsın"], "", { gorsel: sahne('soru-soran-cocuk', 'cocuk') });
  ekle("dk-t9", "\"Özür dilerim\" ne zaman söylenir?", "Hata yapınca veya birini rahatsız edince", ["Yardım alınca", "Hata yapınca veya birini rahatsız edince", "Hediye alınca", "Gülerken"], "", { gorsel: sahne('ozur-dileyen-cocuk', 'cocuk') });
  ekle("dk-t10", "İyi bir konuşmacı nasıl konuşur?", "Açık, net ve saygılı", ["Çok hızlı ve yüksek sesle", "Fısıldayarak", "Açık, net ve saygılı", "Sadece kendi bildiği kelimelerle"], "", { gorsel: sahne('iyi-konusmaci', 'cocuk') });
  ekle("dk-t11", "Toplu taşımada yüksek sesle konuşmak neden yanlıştır?", "Etrafındaki insanları rahatsız eder", ["Kurallar var", "Etrafındaki insanları rahatsız eder", "Ses çıkarır", "Öğretmen duyar"], "", { gorsel: sahne('otobuste-sessiz-konusma', 'default'), sasirtma: true });
  ekle("dk-t12", "Dinlemenin önemi nedir?", "Bilgi öğrenmek ve saygı göstermek", ["Zaman geçirmek", "Bilgi öğrenmek ve saygı göstermek", "Uyumamak", "Konuşmamak"], "", { gorsel: sahne('dinlemenin-onemi', 'cocuk') });
  ekle("dk-t13", "\"Rica ederim\" hangi durumda söylenir?", "Teşekküre cevap verirken", ["Hata yapınca", "İstekte bulununca", "Teşekküre cevap verirken", "Veda ederken"], "", { gorsel: sahne('kibarca-konusma', 'cocuk') });
  ekle("dk-t14", "Empati nedir?", "Karşındakinin duygularını anlamaya çalışmak", ["Kendini düşünmek", "Karşındakinin duygularını anlamaya çalışmak", "Çok konuşmak", "Sessiz kalmak"], "", { gorsel: sahne('empati-sahnesi', 'cocuk'), sasirtma: true });
  ekle("dk-t15", "Konuşma ile yazmanın ortak amacı nedir?", "Düşünceleri ve duyguları ifade etmek", ["Eğlenmek", "Düşünceleri ve duyguları ifade etmek", "Oyun oynamak", "Uyumak"], "", { gorsel: sahne('konusma-ve-yazma', 'default') });
  ekle("dk-t16", "Sunuş yaparken nasıl konuşmalısın?", "Yüksek ve net", ["Çok hızlı", "Fısıldayarak", "Yüksek ve net", "Arkaya dönerek"], "", { gorsel: sahne('sunum-yapan-cocuk', 'cocuk') });
  ekle("dk-t17", "İletişimin altın kuralı nedir?", "Karşındakine saygı göstermek", ["Çok konuşmak", "Hep haklı olmak", "Karşındakine saygı göstermek", "Sessiz kalmak"], "", { gorsel: sahne('iletisim-kurallari', 'default'), sasirtma: true });
  ekle("dk-t18", "Arkadaşın üzgünse ne yaparsın?", "Teselli edersin", ["Gülersin", "Görmezden gelirsin", "Teselli edersin", "Kaçarsın"], "", { gorsel: sahne('teselli-eden-cocuk', 'cocuk') });
  ekle("dk-t19", "Hangi davranış iyi iletişimi gösterir?", "Kibarca dinlemek ve konuşmak", ["Bağırarak konuşmak", "Sözünü kesmek", "Kibarca dinlemek ve konuşmak", "Yüzünü çevirmek"], "", { gorsel: sahne('iyi-iletisim-sahnesi', 'cocuk') });
  ekle("dk-t20", "Telefonda konuşurken ne yapmamalısın?", "Bağırarak konuşmamalısın", ["Net konuşmamalısın", "Kibarca konuşmamalısın", "Bağırarak konuşmamalısın", "Selamlaşmamalısın"], "", { gorsel: sahne('telefon-konusmasi', 'cocuk'), sasirtma: true });
  ekle("dk-t21", "Nezaket sözcükleri nelerdir?", "Lütfen, teşekkür ederim, özür dilerim", ["Bağır, koş, git", "Lütfen, teşekkür ederim, özür dilerim", "Evet, hayır, belki", "Ben, sen, o"], "", { gorsel: kart(['Lütfen', 'Teşekkür ederim', 'Özür dilerim']) });
  ekle("dk-t22", "Kalabalıkta kaybolunca ne yaparsın?", "Güvenli bir yetişkine kibarca yardım istersin", ["Ağlarsın", "Koşarsın", "Güvenli bir yetişkine kibarca yardım istersin", "Sessiz beklersin"], "", { gorsel: sahne('kalabalikta-cocuk', 'cocuk') });
  ekle("dk-t23", "\"Dinlemek duymaktan farklıdır\" ne anlama gelir?", "Dinlemek aktif anlamaya çalışmaktır, duymak sadece sesi algılamaktır", ["İkisi aynıdır", "Dinlemek aktif anlamaya çalışmaktır, duymak sadece sesi algılamaktır", "Duymak daha iyidir", "İkisi de gereksizdir"], "", { gorsel: sahne('dinlemek-vs-duymak', 'cocuk'), sasirtma: true });
  ekle("dk-t24", "Hangi ortamda daha dikkatli konuşmalısın?", "Kütüphanede", ["Oyun alanında", "Kütüphanede", "Spor alanında", "Parkta"], "", { gorsel: sahne('kutuphane-sahnesi', 'kutuphane') });
  ekle("dk-t25", "İyi bir iletişimci için en önemli özellik nedir?", "Karşındakini dinlemek ve anlamak", ["Çok kelime bilmek", "Hızlı konuşmak", "Karşındakini dinlemek ve anlamak", "Yüksek sesle konuşmak"], "", { gorsel: sahne('iletisim-sahnesi', 'cocuk'), sasirtma: true });

  return sorular;
}

function sozcukVeDilBilgisiAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SDB,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("sdb-a1", "\"Kalem\" hangi tür sözcüktür?", "İsim", '', { gorsel: nesne("kalem", "kalem"), cevapTipi: "metin" });
  ekle("sdb-a2", "\"Büyük\" hangi tür sözcüktür?", "Sıfat", '', { gorsel: sahne('buyuk-kucuk-karsilastirma', 'default'), cevapTipi: "metin" });
  ekle("sdb-a3", "\"Koşmak\" hangi tür sözcüktür?", "Fiil", '', { gorsel: sahne('kosen-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a4", "\"Ben\" hangi tür sözcüktür?", "Zamir", '', { gorsel: sahne('kendini-gosteren-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a5", "\"Kırmızı araba\" cümlesinde sıfat hangisi?", "Kırmızı", '', { gorsel: nesne("araba", "araba", 'kirmizi'), cevapTipi: "metin" });
  ekle("sdb-a6", "Cümlede fiili bul: \"Ayşe hızla koştu.\"", "koştu", '', { gorsel: sahne('kosen-kiz', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a7", "\"Ankara\" özel isim mi cins isim mi?", "Özel isim", '', { gorsel: nesne("Ankara", "ankara"), cevapTipi: "metin" });
  ekle("sdb-a8", "\"masa\" özel isim mi cins isim mi?", "Cins isim", '', { gorsel: nesne("masa", "masa"), cevapTipi: "metin" });
  ekle("sdb-a9", "\"O çok akıllı.\" cümlesinde \"O\" neyin yerini tutuyor?", "Bir kişinin (ismin)", '', { gorsel: sahne('zamir-gosterimi', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a10", "\"Üç kedi\" cümlesinde sıfat hangisi?", "Üç", '', { gorsel: nesne("kedi", "kedi"), cevapTipi: "metin" });
  ekle("sdb-a11", "Fiil bul: \"Çocuklar bahçede oynadı.\"", "oynadı", '', { gorsel: sahne('oynayan-cocuklar', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a12", "\"Biz\" hangi tür sözcüktür?", "Zamir (kişi zamiri)", '', { gorsel: sahne('grup-gosteren-zamir', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a13", "\"Küçük sarı çiçek\" cümlesinde kaç sıfat var?", "2 (küçük, sarı)", '', { gorsel: nesne("çiçek", "cicek"), cevapTipi: "metin" });
  ekle("sdb-a14", "\"Ali\" özel isim mi?", "Evet, büyük harfle yazılır", '', { gorsel: kart(['Ali']), cevapTipi: "metin" });
  ekle("sdb-a15", "Cümledeki isimleri bul: \"Kedi bahçede uyudu.\"", "Kedi, bahçe", '', { gorsel: nesne("kedi", "kedi"), cevapTipi: "metin" });
  ekle("sdb-a16", "\"Güzel\" hangi tür sözcük?", "Sıfat", '', { gorsel: sahne('guzel-manzara', 'default'), cevapTipi: "metin" });
  ekle("sdb-a17", "\"Onlar okula gitti.\" cümlesinde zamir hangisi?", "Onlar", '', { gorsel: sahne('okula-giden-cocuklar', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a18", "Fiil bul: \"Güneş battı.\"", "battı", '', { gorsel: sahne('gunbatimi', 'gunes'), cevapTipi: "metin" });
  ekle("sdb-a19", "\"Siz nereye gidiyorsunuz?\" cümlesinde zamir hangisi?", "Siz", '', { gorsel: sahne('soru-soran-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a20", "\"Mavi defter\" cümlesinde isim ve sıfat hangisi?", "İsim: defter, Sıfat: mavi", '', { gorsel: nesne("defter", "kitap", 'mavi'), cevapTipi: "metin" });
  ekle("sdb-a21", "\"İstanbul\" özel isim mi cins isim mi?", "Özel isim", '', { gorsel: nesne("İstanbul", "istanbul"), cevapTipi: "metin" });
  ekle("sdb-a22", "Cümleyi fiille tamamla: \"Çocuklar parkta ___\"", "oynadı / koştu", '', { gorsel: sahne('park', 'park'), cevapTipi: "metin" });
  ekle("sdb-a23", "\"Ben eve gidiyorum.\" cümlesinde \"ben\" nedir?", "Kişi zamiri", '', { gorsel: sahne('eve-giden-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("sdb-a24", "Sıfat ekle: \"___ kitap okudum.\"", "Kalın bir kitap okudum. / İnce kırmızı kitap okudum.", '', { gorsel: nesne("kitap", "kitap"), cevapTipi: "metin" });
  ekle("sdb-a25", "\"Kedi, köpek ve kuş\" listesinde sözcüklerin türü nedir?", "Hepsi isim", '', { gorsel: sahne('uc-hayvan', 'kedi'), cevapTipi: "metin" });

  return sorular;
}

function sozcukVeDilBilgisiTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SDB,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("sdb-t1", "\"Kalem\" hangi sözcük türüdür?", "İsim", ["Sıfat", "Fiil", "İsim", "Zamir"], "", { gorsel: nesne("kalem", "kalem") });
  ekle("sdb-t2", "\"Kırmızı\" hangi sözcük türüdür?", "Sıfat", ["İsim", "Fiil", "Sıfat", "Zamir"], "", { gorsel: kart(['Kırmızı']) });
  ekle("sdb-t3", "\"Uyumak\" hangi sözcük türüdür?", "Fiil", ["İsim", "Sıfat", "Zamir", "Fiil"], "", { gorsel: sahne('uyuyan-cocuk', 'cocuk') });
  ekle("sdb-t4", "\"Ben\" hangi sözcük türüdür?", "Zamir", ["İsim", "Sıfat", "Zamir", "Fiil"], "", { gorsel: sahne('kendini-gosteren-cocuk', 'cocuk') });
  ekle("sdb-t5", "\"Büyük ev\" cümlesinde sıfat hangisidir?", "büyük", ["ev", "büyük", "ikisi de", "ikisi de değil"], "", { gorsel: sahne('buyuk-ev', 'ev') });
  ekle("sdb-t6", "\"Ayşe koştu.\" cümlesinde fiil hangisidir?", "koştu", ["Ayşe", "koştu", "ikisi de", "ikisi de değil"], "", { gorsel: sahne('kosen-kiz', 'cocuk') });
  ekle("sdb-t7", "Hangi sözcük özel isimdir?", "Ankara", ["masa", "kalem", "Ankara", "çiçek"], "", { gorsel: kart(['masa', 'kalem', 'Ankara', 'çiçek']) });
  ekle("sdb-t8", "\"Ali geldi. O çok mutluydu.\" cümlesinde \"O\" kimin yerini tutuyor?", "Ali", ["Bir hayvan", "Ali", "Bir nesne", "Bir yer"], "", { gorsel: sahne('zamir-gosterimi', 'cocuk'), sasirtma: true });
  ekle("sdb-t9", "\"Üç kırmızı elma\" cümlesinde kaç sıfat var?", "2", ["1", "3", "2", "0"], "", { gorsel: nesne("elma", "elma") });
  ekle("sdb-t10", "Hangi sözcük fiildir?", "koşmak", ["güzel", "masa", "koşmak", "ben"], "", { gorsel: kart(['koşmak']) });
  ekle("sdb-t11", "\"Biz parka gittik.\" cümlesinde \"biz\" nedir?", "Zamir", ["İsim", "Sıfat", "Zamir", "Fiil"], "", { gorsel: sahne('parka-giden-grup', 'park'), sasirtma: true });
  ekle("sdb-t12", "Hangi cümle sıfat içerir?", "Mavi araba geçti", ["Ali koştu", "Kedi uyudu", "Mavi araba geçti", "Güneş battı"], "", { gorsel: kart(['Ali koştu', 'Kedi uyudu', 'Mavi araba geçti', 'Güneş battı']) });
  ekle("sdb-t13", "\"İstanbul\" neden büyük harfle yazılır?", "Özel isim olduğu için", ["Uzun kelime olduğu için", "Cins isim olduğu için", "Özel isim olduğu için", "Güzel bir sözcük olduğu için"], "", { gorsel: nesne("İstanbul", "istanbul") });
  ekle("sdb-t14", "Cümledeki isimleri bul: \"Küçük kedi bahçede uyudu.\"", "kedi, bahçe", ["küçük, uyudu", "kedi, bahçe", "küçük, bahçe", "kedi, uyudu"], "", { gorsel: nesne("kedi", "kedi") });
  ekle("sdb-t15", "Hangi sözcük hem isim hem sıfat olabilir?", "güzel", ["koşmak", "güzel", "ben", "ve"], "İpucu: \"Güzel bir kız\" → sıfat, \"Güzel her yerde\" → isim gibi", { gorsel: sahne('cift-anlam-gosterimi', 'default'), sasirtma: true });
  ekle("sdb-t16", "\"Onlar okula gitti.\" cümlesinde zamir hangisidir?", "Onlar", ["okula", "gitti", "Onlar", "Yok"], "", { gorsel: sahne('okula-giden-grup', 'cocuk') });
  ekle("sdb-t17", "Fiil hangi soruya cevap verir?", "Ne yaptı/oluyor?", ["Nasıl?", "Ne?", "Ne yaptı/oluyor?", "Kaç tane?"], "", { gorsel: kart(['Ne yaptı/oluyor?']) });
  ekle("sdb-t18", "\"Siz nereye gidiyorsunuz?\" cümlesinde \"siz\" nedir?", "Zamir", ["İsim", "Sıfat", "Zamir", "Fiil"], "", { gorsel: sahne('soru-soran-cocuk', 'cocuk'), sasirtma: true });
  ekle("sdb-t19", "Sıfat hangi soruya cevap verir?", "Nasıl/Kaç tane?", ["Kim?", "Ne yaptı?", "Nasıl/Kaç tane?", "Nerede?"], "", { gorsel: kart(['Nasıl/Kaç tane?']) });
  ekle("sdb-t20", "\"Küçük, şirin, sarı kedi uyudu.\" cümlesinde kaç sıfat var?", "3", ["1", "2", "3", "4"], "", { gorsel: nesne("kedi", "kedi"), sasirtma: true });
  ekle("sdb-t21", "Hangi sözcük cins isimdir?", "masa", ["Ayşe", "İstanbul", "masa", "Türkiye"], "", { gorsel: kart(['Ayşe', 'İstanbul', 'masa', 'Türkiye']) });
  ekle("sdb-t22", "\"Ben, sen, o, biz, siz, onlar\" sözcükleri hangi grupta yer alır?", "Zamirler", ["İsimler", "Sıfatlar", "Zamirler", "Fiiller"], "", { gorsel: kart(['Ben', 'sen', 'o', 'biz', 'siz', 'onlar']) });
  ekle("sdb-t23", "\"Güneş battı.\" cümlesinde sözcük türleri nelerdir?", "İsim + Fiil", ["İsim + İsim", "Sıfat + Fiil", "İsim + Fiil", "Zamir + Fiil"], "", { gorsel: sahne('gunbatimi-cumle-analizi', 'gunes'), sasirtma: true });
  ekle("sdb-t24", "Hangi cümle zamir içerir?", "O eve gitti", ["Kedi uyudu", "Güneş battı", "O eve gitti", "Çiçek açtı"], "", { gorsel: kart(['Kedi uyudu', 'Güneş battı', 'O eve gitti', 'Çiçek açtı']) });
  ekle("sdb-t25", "\"Ali kitap okuyor. O çok mutlu.\" İkinci cümlede \"O\" kimin yerini tutar?", "Ali'nin", ["Kitabın", "Ali'nin", "Okumanın", "Mutluluğun"], "", { gorsel: sahne('zamir-gosterimi', 'cocuk'), sasirtma: true });

  return sorular;
}

export function yazmaBecerileri(karistir) {
  return {
    id: "yazma-becerileri",
    baslik: "Yazma Becerileri",
    kazanimKodu: KAZANIM.YZ,
    anlatim: {
      ekranlar: [
        { metin: "Yazmak düşüncelerimizi başkalarıyla paylaşmanın harika bir yoludur! İyi bir cümle kurmak için özne + yüklem gerekir. \"Ali koştu.\" → Kısa ama tam!", gorsel: anl("yz-anlatim-1") },
        { metin: "PARAGRAF, aynı konuyu anlatan cümleler topluluğudur. Her paragraf bir ana fikir içerir. Paragraf girintili başlar!", gorsel: anl("yz-anlatim-2") },
        { metin: "Yaratıcı yazmada hayal gücümüzü kullanırız! Hikâye yazarken: Kim? Nerede? Ne yaptı? Ne oldu? sorularını cevaplarız.", gorsel: anl("yz-anlatim-3") },
      ],
    },
    alistirma: yazmaBecerileriAlistirma(),
    test: yazmaBecerileriTest(karistir),
  };
}

export function dinlemeVeKonusma(karistir) {
  return {
    id: "dinleme-ve-konusma",
    baslik: "Dinleme ve Konuşma",
    kazanimKodu: KAZANIM.DK,
    anlatim: {
      ekranlar: [
        { metin: "DİNLEMEK sadece duymak değildir! İyi bir dinleyici: konuşana bakar, sessiz olur, anlamaya çalışır ve gerekirse soru sorar.", gorsel: anl("dk-anlatim-1") },
        { metin: "KONUŞMAK düşüncelerimizi sesle ifade etmektir. İyi bir konuşmacı: açık ve anlaşılır konuşur, sırasını bekler, kibarca ifade eder.", gorsel: anl("dk-anlatim-2") },
        { metin: "İLETİŞİM kurmanın altın kuralları: Karşındakine saygı göster. Sözünü kesme. Konuya odaklan. Nezaket kelimelerini kullan: \"Lütfen, teşekkür ederim, özür dilerim.\"", gorsel: anl("dk-anlatim-3") },
      ],
    },
    alistirma: dinlemeVeKonusmaAlistirma(),
    test: dinlemeVeKonusmaTest(karistir),
  };
}

export function sozcukVeDilBilgisi(karistir) {
  return {
    id: "sozcuk-ve-dil-bilgisi",
    baslik: "Sözcük ve Dil Bilgisi",
    kazanimKodu: KAZANIM.SDB,
    anlatim: {
      ekranlar: [
        { metin: "İSİM: Varlıkların adıdır. Canlı (insan, hayvan, bitki) ve cansız (masa, kalem, taş) her şeyin ismi vardır. Özel isimler büyük harfle, cins isimler küçük harfle yazılır.", gorsel: anl("sdb-anlatim-1") },
        { metin: "SIFAT: İsimleri niteleyen veya belirten sözcüklerdir. \"Büyük ev, kırmızı araba, üç kalem\" — büyük, kırmızı, üç birer sıfattır. FİİL: İş, oluş ve durumu bildiren sözcüklerdir. \"koşmak, uyumak, düşünmek\"", gorsel: anl("sdb-anlatim-2") },
        { metin: "ZAMİR: İsimlerin yerini tutan sözcüklerdir. Ben, sen, o, biz, siz, onlar — kişi zamirleridir. \"Ali geldi. O çok mutluydu.\" — O = Ali", gorsel: anl("sdb-anlatim-3") },
      ],
    },
    alistirma: sozcukVeDilBilgisiAlistirma(),
    test: sozcukVeDilBilgisiTest(karistir),
  };
}
