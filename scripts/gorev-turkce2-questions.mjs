/** GOREV-TURKCE2 — Hikâye Metni, Şiir, Bilgi Metni (114 soru). */

const KAZANIM = {
  HM: 'TUR.2.2.1',
  SR: 'TUR.2.2.2',
  BT: 'TUR.2.2.3',
};

const METIN_KAYIP_OYUNCAK =
  'Berk oyuncak ayısını kaybetti. Her yeri aradı; yatağının altına baktı, dolabı karıştırdı. Bulamadı ve ağladı. Annesi geldi ve "Son nerede oynadın?" diye sordu. Berk bahçeyi hatırladı. Koştu, baktı — ayı çalının altındaydı! Berk sevinçle güldü.';

const METIN_CESUR_KEDI =
  "Mahalledeki en küçük kedi Pamuk'tu. Diğer kediler büyüktü, Pamuk'a gülerlerdi. Bir gün bahçede bir fare belirdi. Büyük kediler kaçtı! Ama Pamuk korkmadı. Fareyi kovaladı ve kovdu. Artık kimse Pamuk'a gülmüyordu.";

const METIN_YAZ_TATILI = `Okul bitti, yaz geldi,
Tatil başladı işte.
Denize koştum hemen,
Dalgalar bekliyordu.

Kumda kale yaptım ben,
Güneş yaktı ensemi.
Akşam eve döndüm yorgun,
Mutluydum ama gerçekten.`;

const METIN_SONBAHAR = `Yapraklar sarardı,
Rüzgâr söylüyor türkü.
Ağaçlar dans ediyor,
Sonbahar geldi işte.`;

const METIN_YAGMURDA_FUTBOL =
  'Zeynep ve arkadaşları her gün futbol oynarlardı. Bir gün yağmur yağmaya başladı. "Eve gidelim" dedi biri. Ama Zeynep "Hayır, oynayalım!" dedi. Çamurda koştular, düştüler, güldüler. Eve döndüklerinde çok kirliydiler ama çok mutluydular da.';

const METIN_ILK_BISIKLET =
  'Hande bisiklete binmeyi öğrenmek istiyordu. Babası yanında durdu. İlk denemede düştü, dizi kanadı. Ağlamak istedi ama "Bir daha" dedi. İkinci denemede de düştü. Üçüncüde ise düşmedi! Bisiklet sürerken rüzgâr saçlarını uçuruyordu.';

const METIN_PAYLASMAK =
  'Yusuf sınıfa yeni bir oyuncak getirdi. Herkes görmek istedi. Yusuf "Dokunmayın, benim!" dedi. Öğretmen "Paylaşmak güzeldir" dedi. Yusuf düşündü. Sonra "Sırayla oynayabilirsiniz" dedi. Herkes güldü. Yusuf da çok mutlu oldu.';

const METIN_BUYUKANNE_BAHCE =
  'Her yaz Selin büyükannesinin köyüne giderdi. Büyükannesinin bahçesinde domates, biber ve salatalık yetişirdi. Selin sulama yapmaya yardım ederdi. "Tohumdan sebze olur" derdi büyükannnesi. Selin şehre döndüğünde balkonuna bir saksı dikti.';

const METIN_ROBOT_ARKADAS =
  'Can robotlarla ilgili bir kitap okudu. O gece rüyasında robot arkadaşı oldu. Robot her sorusuna cevap veriyordu, ama gülemiyordu. Can "Neden gülmüyorsun?" diye sordu. Robot "Duygularım yok" dedi. Can uyandığında insan arkadaşlarını çok sevdi.';

const METIN_ARILAR =
  'Arılar çok çalışkan böceklerdir. Kovanda yaşarlar. Çiçeklerden nektar toplayarak bal yaparlar. Bir arı kovanında binlerce arı yaşar. Kraliçe arı yumurta bırakır, işçi arılar bal yapar, erkek arılar ürer. Bal hem lezzetli hem de sağlıklıdır.';

const METIN_SU_DONGUSU =
  'Su yeryüzünde sürekli döner. Güneş suyu ısıtır, su buharlaşır. Bulutlar oluşur. Bulutlar soğuyunca yağmur ya da kar yağar. Yağmur suları denize, göle ve nehirlere akar. Sonra tekrar buharlaşır. Bu döngü sonsuza kadar devam eder.';

const METIN_KAR_SIIRI = `Beyaz beyaz kar yağar,
Dünya pamuk olur.
Çocuklar dışarı fırlar,
Kardan adam kurulur.

Eller üşür, yüz güler,
Kış mevsimi böyledir.
Soğuk gelir, neşe getirir,
Her çocuk bilir bunu.`;

const METIN_OKUL_SIIRI = `Okul açıldı, zil çaldı,
Koştum sınıfa hemen.
Defterim, kalemim hazır,
Öğrenmek istiyorum ben.

Öğretmenim anlattı güzel,
Ben de dinledim onu.
Her gün biraz daha büyüdüm,
Okul böyle işte, dolu dolu.`;

const METIN_BAHAR_SIIRI = `Karlar eridi, seller aktı,
Tohumlar uyandı topraktan.
Çiçekler açtı renk renk,
Bahar geldi uzaktan.

Kuşlar döndü yuvaya,
Arılar toplar balı.
Her yer güldü, her yer şakıdı,
Gitti kışın karı.`;

const METIN_ANNEME_SIIRI = `Annemi çok seviyorum,
Elleri sıcak, gözleri nur.
Yorulunca yanımda olur,
Gülüşü bana güç verir.`;

const METIN_DENIZ_SIIRI = `Deniz büyük, deniz derin,
Dalgalar oynar benimle.
Kumlar altın sarısı,
Güneş gülümser geride.

Martılar uçar gökte,
Ben de dalmak istiyorum.
Denize her bakışımda,
Mutluluk doluyorum.`;

const METIN_GUNES_SISTEMI =
  "Güneş sisteminde Güneş ve ona bağlı gezegenler bulunur. Sekiz gezegen vardır: Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün. Dünya, Güneş'ten üçüncü gezegen olup yaşam barındıran tek gezegendir. Dünya hem kendi etrafında hem de Güneş etrafında döner.";

const METIN_AGACLAR =
  'Ağaçlar doğanın en önemli varlıklarından biridir. Karbondioksiti alıp oksijen verirler. Böylece havanın temiz kalmasını sağlarlar. Ağaçlar aynı zamanda kuşlara ve böceklere yuva olur. Kâğıt, mobilya ve birçok ürün ağaçtan yapılır. Bu yüzden ağaçları korumak çok önemlidir.';

const METIN_SAGLIKLI_BESLENME =
  'Sağlıklı büyümek için doğru beslenmeliyiz. Her gün sebze ve meyve yemeliyiz. Süt ve süt ürünleri kemiklerimizi güçlendirir. Ekmek ve tahıllar enerji verir. Şeker ve hazır yiyecekler az tüketilmelidir. Su içmek de çok önemlidir.';

const METIN_DEPREM =
  'Deprem, yer kabuğunun hareket etmesiyle oluşan doğal bir olaydır. Depremde zemin sallanır. Büyük depremler binalara zarar verebilir. Deprem sırasında paniklemeden "Çök-Kapan-Tutun" hareketini yapmalıyız. Güvenli bir yere geçmek önemlidir.';

const METIN_GOC_EDEN_KUSLAR =
  'Bazı kuşlar her yıl uzun yolculuklar yapar. Buna "göç" denir. Yazın serin ülkelerde yaşayan kuşlar kışın sıcak ülkelere göç eder. Leylekler, kırlangıçlar ve turna kuşları göç eder. Binlerce kilometre uçarlar. Yorulmadan yollarını bulmak için Güneş ve yıldızlardan yararlanırlar.';

function hece(kelime, heceler, nesne) { return { tur:'turkce', mod:'hece', kelime, heceler, nesne }; }
function nesne(kelime, nesne, vurgu) { return { tur:'turkce', mod:'nesne', kelime, nesne, vurgu }; }
function sahne(sahne, nesne) { return { tur:'turkce', mod:'sahne', sahne, nesne }; }
function anl(sahne) { return { tur:'turkce', mod:'anlatim', sahne }; }
function siirGorsel(sahne, opts={}) { return { tur:'turkce', mod:'siir', sahne, ...opts }; }

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function hikayeMetniAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.HM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("hm-a1", "Hikâyenin kahramanı kim?", "Berk", '', { gorsel: sahne('oyuncak-ayi', 'cocuk'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a2", "Berk ne kaybetti?", "Oyuncak ayısını", '', { gorsel: sahne('oyuncak-ayi', 'default'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a3", "Berk nereye baktı?", "Yatağın altına, dolaba", '', { gorsel: sahne('arama', 'ev'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a4", "Annesi ne sordu?", "\"Son nerede oynadın?\"", '', { gorsel: sahne('anne-cocuk', 'cocuk'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a5", "Oyuncak neredeydi?", "Bahçede, çalının altında", '', { gorsel: sahne('cali-oyuncak', 'bahce'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a6", "Hikâye nerede geçiyor?", "Evde ve bahçede", '', { gorsel: sahne('ev-bahce', 'ev'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a7", "Hikâyenin sonu nasıl bitti?", "Mutlu sona erdi", '', { gorsel: sahne('mutlu-berk', 'cocuk'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a8", "Bu hikâyenin ana fikri nedir?", "Kayıp şeyleri bulmak için son gittiğimiz yeri hatırlamalıyız", '', { gorsel: sahne('dusunen-cocuk', 'cocuk'), okumaMetni: METIN_KAYIP_OYUNCAK, cevapTipi: "metin" });
  ekle("hm-a9", "Pamuk nasıl bir kedi?", "Mahalledeki en küçük kedi", '', { gorsel: sahne('kucuk-kedi', 'kedi'), okumaMetni: METIN_CESUR_KEDI, cevapTipi: "metin" });
  ekle("hm-a10", "Büyük kediler ne yaptı?", "Fareden kaçtılar", '', { gorsel: sahne('kacan-kediler', 'kedi'), okumaMetni: METIN_CESUR_KEDI, cevapTipi: "metin" });
  ekle("hm-a11", "Pamuk ne yaptı?", "Fareyi kovladı ve kovdu", '', { gorsel: sahne('cesur-kedi-fare', 'kedi'), okumaMetni: METIN_CESUR_KEDI, cevapTipi: "metin" });
  ekle("hm-a12", "Hikâyenin sonunda ne değişti?", "Artık kimse Pamuk'a gülmüyor", '', { gorsel: sahne('saygili-pamuk', 'kedi'), okumaMetni: METIN_CESUR_KEDI, cevapTipi: "metin" });
  ekle("hm-a13", "Bu hikâyenin ana fikri nedir?", "Cesaret boyuya değil yüreğe bağlıdır", '', { gorsel: sahne('cesur-kucuk-kedi', 'kedi'), okumaMetni: METIN_CESUR_KEDI, cevapTipi: "metin" });

  return sorular;
}

function hikayeMetniTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.HM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("hm-t1", "Zeynep ve arkadaşları her gün ne yapardı?", "Futbol oynarlardı", ["Yüzerlerdi", "Kitap okurlarrdı", "Futbol oynarlardı", "Koşarlardı"], "", { gorsel: sahne('futbol', 'cocuk'), okumaMetni: METIN_YAGMURDA_FUTBOL });
  ekle("hm-t2", "Yağmur yağınca biri ne dedi?", "Eve gidelim", ["Oynayalım", "Eve gidelim", "Şemsiye alalım", "Bekleyelim"], "", { gorsel: sahne('yagmurlu-hava', 'yagmur'), okumaMetni: METIN_YAGMURDA_FUTBOL });
  ekle("hm-t3", "Zeynep ne yapmak istedi?", "Oynamaya devam etmek", ["Eve gitmek", "Ağlamak", "Oynamaya devam etmek", "Şemsiye almak"], "", { gorsel: sahne('yagmurda-oynayan', 'cocuk'), okumaMetni: METIN_YAGMURDA_FUTBOL });
  ekle("hm-t4", "Eve döndüklerinde nasıldılar?", "Kirli ve mutlu", ["Yorgun ve üzgün", "Kirli ve mutlu", "Temiz ve mutlu", "Hasta ve yorgun"], "", { gorsel: sahne('camurlu-mutlu', 'cocuk'), okumaMetni: METIN_YAGMURDA_FUTBOL });
  ekle("hm-t5", "Bu hikâyenin ana fikri nedir?", "Eğlence için mükemmel koşullar gerekmez", ["Yağmurda oynamak tehlikelidir", "Futbol çok güzel bir spordur", "Eğlence için mükemmel koşullar gerekmez", "Zeynep çok iyi futbol oynar"], "", { gorsel: sahne('yagmurda-mutlu', 'yagmur'), okumaMetni: METIN_YAGMURDA_FUTBOL });
  ekle("hm-t6", "Hande ne öğrenmek istiyordu?", "Bisiklet sürmeyi", ["Yüzmeyi", "Koşmayı", "Bisiklet sürmeyi", "Paten kaymayı"], "", { gorsel: sahne('bisiklet', 'cocuk'), okumaMetni: METIN_ILK_BISIKLET });
  ekle("hm-t7", "İlk denemede ne oldu?", "Düştü", ["Başardı", "Ağladı", "Düştü", "Bıraktı"], "", { gorsel: sahne('dusen-cocuk', 'cocuk'), okumaMetni: METIN_ILK_BISIKLET });
  ekle("hm-t8", "Hande kaçıncı denemede başardı?", "Üçüncü", ["Birinci", "İkinci", "Üçüncü", "Dördüncü"], "", { gorsel: sahne('basaran-hande', 'cocuk'), okumaMetni: METIN_ILK_BISIKLET });
  ekle("hm-t9", "\"Ağlamak istedi ama 'Bir daha' dedi\" cümlesi Hande hakkında ne söylüyor?", "Kararlı ve azimli biri", ["Ağlamayı sevmiyor", "Kararlı ve azimli biri", "Acı hissetmiyor", "Bisikleti sevmiyor"], "Hande düşse de pes etmedi, tekrar denedi.", { gorsel: sahne('kararli-hande', 'cocuk'), sasirtma: true, okumaMetni: METIN_ILK_BISIKLET });
  ekle("hm-t10", "Bu hikâyenin ana fikri nedir?", "Azim ve kararlılıkla her şey başarılır", ["Bisiklet tehlikeli bir spordur", "Babalar çok yardımseverdir", "Azim ve kararlılıkla her şey başarılır", "İlk denemede başarmak gerekir"], "", { gorsel: sahne('bisiklet-mutlu', 'cocuk'), okumaMetni: METIN_ILK_BISIKLET });
  ekle("hm-t11", "Yusuf ne getirdi?", "Oyuncak", ["Kitap", "Oyuncak", "Resim", "Kalem"], "", { gorsel: sahne('oyuncak-getiren', 'cocuk'), okumaMetni: METIN_PAYLASMAK });
  ekle("hm-t12", "Yusuf ilk başta ne dedi?", "Dokunmayın, benim", ["Alın, oynayın", "Sırayla oynayın", "Dokunmayın, benim", "Öğretmene sorun"], "", { gorsel: sahne('koruyucu-yusuf', 'cocuk'), okumaMetni: METIN_PAYLASMAK });
  ekle("hm-t13", "Öğretmen ne dedi?", "Paylaşmak güzeldir", ["Oyuncağı eve götür", "Paylaşmak güzeldir", "Oyuncak getirme", "Arkadaşlarına ver"], "", { gorsel: sahne('ogretmen-konusuyor', 'ogretmen'), okumaMetni: METIN_PAYLASMAK });
  ekle("hm-t14", "Yusuf sonunda ne yaptı?", "Sırayla oynamaya izin verdi", ["Oyuncağı sakladı", "Eve gönderdi", "Sırayla oynamaya izin verdi", "Ağladı"], "", { gorsel: sahne('sirayla-oynayan', 'cocuk'), okumaMetni: METIN_PAYLASMAK });
  ekle("hm-t15", "Yusuf neden mutlu oldu?", "Paylaşmanın güzelliğini hissetti", ["Oyuncağı geri aldı", "Öğretmen övdü", "Paylaşmanın güzelliğini hissetti", "Herkes gitti"], "Paylaşınca hem arkadaşları hem kendisi mutlu oldu.", { gorsel: sahne('mutlu-yusuf', 'cocuk'), sasirtma: true, okumaMetni: METIN_PAYLASMAK });
  ekle("hm-t16", "Selin her yaz nereye giderdi?", "Büyükannesinin köyüne", ["Tatil köyüne", "Büyükannesinin köyüne", "Denize", "Dağa"], "", { gorsel: sahne('koy-evi-bahce', 'bahce'), okumaMetni: METIN_BUYUKANNE_BAHCE });
  ekle("hm-t17", "Büyüannenin bahçesinde ne yetişirdi?", "Domates, biber, salatalık", ["Elma, armut, muz", "Domates, biber, salatalık", "Çiçekler", "Meyve ağaçları"], "", { gorsel: sahne('sebze-bahcesi', 'bahce'), okumaMetni: METIN_BUYUKANNE_BAHCE });
  ekle("hm-t18", "Selin ne yapmaya yardım ederdi?", "Sulamaya", ["Hasat etmeye", "Pişirmeye", "Sulamaya", "Satmaya"], "", { gorsel: sahne('sulama-yapan', 'bahce'), okumaMetni: METIN_BUYUKANNE_BAHCE });
  ekle("hm-t19", "Selin şehre dönünce neden balkonuna saksı dikti?", "Büyükannesinden öğrendiklerini uyguladı", ["Büyükannesini özledi", "Büyükannesinden öğrendiklerini uyguladı", "Annesi istedi", "Ödev için"], "Büyükannesi \"Tohumdan sebze olur\" demişti.", { gorsel: sahne('balkon-saksi', 'bahce'), sasirtma: true, okumaMetni: METIN_BUYUKANNE_BAHCE });
  ekle("hm-t20", "Bu hikâyenin ana fikri nedir?", "Büyüklerden öğrendiklerimizi hayata geçirebiliriz", ["Köy hayatı şehirden iyidir", "Büyükanneler çok bilgelikdir", "Büyüklerden öğrendiklerimizi hayata geçirebiliriz", "Sebze yetiştirmek zordur"], "", { gorsel: sahne('buyukanne-selin', 'bahce'), okumaMetni: METIN_BUYUKANNE_BAHCE });
  ekle("hm-t21", "Can rüyasında ne gördü?", "Robot arkadaş", ["Uzay gemisi", "Robot arkadaş", "Kitap karakteri", "Macera"], "", { gorsel: sahne('ruyada-robot', 'default'), okumaMetni: METIN_ROBOT_ARKADAS });
  ekle("hm-t22", "Robot neden gülemiyordu?", "Duyguları olmadığı için", ["Hasta olduğu için", "İzni olmadığı için", "Duyguları olmadığı için", "Bilmiyordu"], "", { gorsel: sahne('duygusuz-robot', 'default'), okumaMetni: METIN_ROBOT_ARKADAS });
  ekle("hm-t23", "Can uyandığında neden arkadaşlarını çok sevdi?", "İnsan arkadaşların duyguları olduğunu anladı", ["Onları özlemişti", "İnsan arkadaşların duyguları olduğunu anladı", "Rüya korkutucuydu", "Okula gidecekti"], "Robot \"Duygularım yok\" dedi.", { gorsel: sahne('can-arkadaslari', 'cocuk'), sasirtma: true, okumaMetni: METIN_ROBOT_ARKADAS });
  ekle("hm-t24", "Bu hikâye ne tür bir metindir?", "Hikâye", ["Bilgi metni", "Şiir", "Hikâye", "Haber"], "", { gorsel: sahne('hikaye-kitabi', 'kitap'), okumaMetni: METIN_ROBOT_ARKADAS });
  ekle("hm-t25", "Bu hikâyenin vermek istediği mesaj nedir?", "İnsan ilişkileri ve duygular değerlidir", ["Robotlar tehlikelidir", "Kitap okumak rüya gördürür", "İnsan ilişkileri ve duygular değerlidir", "Teknoloji gelişiyor"], "Robot cevap veriyordu ama gülemiyordu.", { gorsel: sahne('insan-robot', 'default'), sasirtma: true, okumaMetni: METIN_ROBOT_ARKADAS });

  return sorular;
}

function siirAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SR,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("sr-a1", "Bu şiirde kaç kıta var?", "2", '', { gorsel: siirGorsel('yaz-tatili-kita'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a2", "Şiirde anlatılan mevsim hangisi?", "Yaz", '', { gorsel: siirGorsel('yaz-tatili'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a3", "\"Dalgalar bekliyordu\" ifadesi ne anlama geliyor?", "Deniz hazır, hemen gidildi", '', { gorsel: siirGorsel('dalgalı-deniz'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a4", "Şair kumda ne yaptı?", "Kale yaptı", '', { gorsel: siirGorsel('kumda-kale'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a5", "Eve dönerken nasıl hissediyordu?", "Yorgun ama mutlu", '', { gorsel: siirGorsel('yorgun-mutlu'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a6", "\"Güneş yaktı ensemi\" ifadesinde ne anlatılıyor?", "Güneşin çok sıcak olduğu", '', { gorsel: siirGorsel('sicak-gunes'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a7", "Şiirde kafiyeli dizeler var mı?", "Evet: \"geldi/işte\" tam değil, \"ensemi/gerçekten\" de tam kafiye değil — öğretici tartışma", '', { gorsel: siirGorsel('kafiye-analizi'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a8", "Bu şiirin ana duygusu nedir?", "Tatil mutluluğu", '', { gorsel: siirGorsel('mutlu-deniz'), okumaMetni: METIN_YAZ_TATILI, cevapTipi: "metin" });
  ekle("sr-a9", "Bu şiirde hangi mevsim anlatılıyor?", "Sonbahar", '', { gorsel: siirGorsel('sonbahar'), okumaMetni: METIN_SONBAHAR, cevapTipi: "metin" });
  ekle("sr-a10", "\"Rüzgâr söylüyor türkü\" ne anlama geliyor?", "Rüzgâr güzel esiyor (kişileştirme)", '', { gorsel: siirGorsel('ruzgar'), okumaMetni: METIN_SONBAHAR, cevapTipi: "metin" });
  ekle("sr-a11", "\"Ağaçlar dans ediyor\" gerçek mi?", "Hayır, benzetme", '', { gorsel: siirGorsel('sallanan-agaclar'), okumaMetni: METIN_SONBAHAR, cevapTipi: "metin" });
  ekle("sr-a12", "Yapraklar nasıl anlatılıyor?", "Sararmış", '', { gorsel: siirGorsel('sari-yapraklar'), okumaMetni: METIN_SONBAHAR, cevapTipi: "metin" });
  ekle("sr-a13", "Şiirde kaç dize var?", "4", '', { gorsel: siirGorsel('dize-sayimi'), okumaMetni: METIN_SONBAHAR, cevapTipi: "metin" });

  return sorular;
}

function siirTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SR,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("sr-t1", "Bu şiirde kaç kıta vardır?", "2", ["1", "3", "2", "4"], "", { gorsel: siirGorsel('kar-kita'), okumaMetni: METIN_KAR_SIIRI });
  ekle("sr-t2", "\"Dünya pamuk olur\" ifadesi ne anlama gelir?", "Her yer bembeyaz kar kaplanıyor", ["Pamuk yağıyor", "Her yer bembeyaz kar kaplanıyor", "Yumuşak bir his var", "Pamuk satılıyor"], "", { gorsel: siirGorsel('karli-manzara'), okumaMetni: METIN_KAR_SIIRI });
  ekle("sr-t3", "Çocuklar ne yapıyor?", "Dışarı fırlıyor", ["Evde kalıyor", "Uyuyor", "Dışarı fırlıyor", "Okula gidiyor"], "", { gorsel: siirGorsel('karda-oynayan'), okumaMetni: METIN_KAR_SIIRI });
  ekle("sr-t4", "\"Eller üşür, yüz güler\" ne anlama geliyor?", "Soğukta üşüseler de mutlular", ["Elleri acıyor, ağlıyorlar", "Soğukta üşüseler de mutlular", "Eldiven takıyorlar", "Eve giriyorlar"], "", { gorsel: siirGorsel('usuyen-gulen'), okumaMetni: METIN_KAR_SIIRI });
  ekle("sr-t5", "Bu şiirin ana duygusu nedir?", "Kış neşesi", ["Kış korkusu", "Üzüntü", "Kış neşesi", "Soğuktan şikâyet"], "", { gorsel: siirGorsel('karda-mutlu'), okumaMetni: METIN_KAR_SIIRI });
  ekle("sr-t6", "Şair okul açılınca ne yaptı?", "Sınıfa koştu", ["Yavaş yürüdü", "Bekledi", "Sınıfa koştu", "Eve döndü"], "", { gorsel: siirGorsel('okula-kosan'), okumaMetni: METIN_OKUL_SIIRI });
  ekle("sr-t7", "\"Her gün biraz daha büyüdüm\" ifadesi ne anlama geliyor?", "Her gün yeni şeyler öğrendi", ["Boyu uzadı", "Kilosu arttı", "Her gün yeni şeyler öğrendi", "Yaşlandı"], "", { gorsel: siirGorsel('buyuyen-cocuk'), okumaMetni: METIN_OKUL_SIIRI });
  ekle("sr-t8", "\"Okul böyle işte, dolu dolu\" ifadesi ne anlama geliyor?", "Okul çok şey öğretiyor, zengin bir yer", ["Okul kalabalık", "Okul çok şey öğretiyor, zengin bir yer", "Sınıf dolu", "Ödev çok"], "Okul dolu dolu = öğrenmekle dolu.", { gorsel: siirGorsel('dolu-okul'), sasirtma: true, okumaMetni: METIN_OKUL_SIIRI });
  ekle("sr-t9", "Şiirde kaç dize var?", "8", ["6", "10", "8", "4"], "", { gorsel: siirGorsel('dize-sayimi'), okumaMetni: METIN_OKUL_SIIRI });
  ekle("sr-t10", "Bu şiirin ana fikri nedir?", "Okul öğrenme ve büyüme yeridir", ["Okul sıkıcıdır", "Okul öğrenme ve büyüme yeridir", "Öğretmenler çok anlatır", "Zil güzel çalar"], "", { gorsel: siirGorsel('mutlu-okul'), okumaMetni: METIN_OKUL_SIIRI });
  ekle("sr-t11", "Bu şiirde hangi mevsim anlatılıyor?", "Bahar", ["Yaz", "Kış", "Bahar", "Sonbahar"], "", { gorsel: siirGorsel('bahar'), okumaMetni: METIN_BAHAR_SIIRI });
  ekle("sr-t12", "\"Tohumlar uyandı topraktan\" ne anlama geliyor?", "Tohumlar filizleniyor", ["Tohumlar konuşuyor", "Tohumlar filizleniyor", "Tohumlar dışarı çıkıyor", "Tohumlar ısınıyor"], "", { gorsel: siirGorsel('filizlenen-tohum'), okumaMetni: METIN_BAHAR_SIIRI });
  ekle("sr-t13", "\"Her yer güldü\" ifadesinde ne kullanılmıştır?", "Kişileştirme", ["Kafiye", "Gerçek anlatım", "Kişileştirme", "Karşıtlık"], "Her yer gülmez; doğa insana benzetilmiş.", { gorsel: siirGorsel('kisilestirme'), sasirtma: true, okumaMetni: METIN_BAHAR_SIIRI });
  ekle("sr-t14", "Son dizede ne söyleniyor?", "Kışın karı gitti", ["Kış geri döndü", "Kar devam ediyor", "Kışın karı gitti", "Bahar bitti"], "", { gorsel: siirGorsel('eriyen-kar'), okumaMetni: METIN_BAHAR_SIIRI });
  ekle("sr-t15", "Şiirde kaç kıta var?", "2", ["1", "3", "2", "4"], "", { gorsel: siirGorsel('bahar-kita'), okumaMetni: METIN_BAHAR_SIIRI });
  ekle("sr-t16", "Bu şiir kime yazılmış?", "Anneye", ["Öğretmene", "Arkadaşa", "Anneye", "Büyükanneye"], "", { gorsel: siirGorsel('anne-cocuk'), okumaMetni: METIN_ANNEME_SIIRI });
  ekle("sr-t17", "\"Elleri sıcak\" ifadesi ne anlama geliyor?", "Annenin şefkatli ve sevecen olduğu", ["Elleri gerçekten sıcak", "Annenin şefkatli ve sevecen olduğu", "Ateşi var", "Eldiven takıyor"], "", { gorsel: siirGorsel('anne-el-ele'), okumaMetni: METIN_ANNEME_SIIRI });
  ekle("sr-t18", "\"Gülüşü bana güç verir\" ifadesi ne anlama geliyor?", "Annenin gülüşü çocuğa enerji ve destek verir", ["Gülmek güçlüdür", "Annenin gülüşü çocuğa enerji ve destek verir", "Annesini güçlendiriyor", "Güç sporu yapıyor"], "", { gorsel: siirGorsel('gulen-anne'), okumaMetni: METIN_ANNEME_SIIRI });
  ekle("sr-t19", "Bu şiirde kaç dize var?", "4", ["3", "5", "4", "6"], "", { gorsel: siirGorsel('dize-sayimi'), okumaMetni: METIN_ANNEME_SIIRI });
  ekle("sr-t20", "Bu şiirin duygusal tonu nedir?", "Sevgi dolu", ["Üzgün", "Korkulu", "Sevgi dolu", "Heyecanlı"], "Annemi çok seviyorum...", { gorsel: siirGorsel('sevgi'), sasirtma: true, okumaMetni: METIN_ANNEME_SIIRI });
  ekle("sr-t21", "Deniz nasıl tarif ediliyor?", "Büyük ve derin", ["Küçük ve sığ", "Büyük ve derin", "Soğuk ve karanlık", "Durgun ve sakin"], "", { gorsel: siirGorsel('genis-deniz'), okumaMetni: METIN_DENIZ_SIIRI });
  ekle("sr-t22", "\"Dalgalar oynar benimle\" ifadesi ne tür bir anlatım?", "Kişileştirme", ["Gerçek", "Kafiye", "Kişileştirme", "Zıtlık"], "", { gorsel: siirGorsel('oynayan-dalgalar'), okumaMetni: METIN_DENIZ_SIIRI });
  ekle("sr-t23", "\"Güneş gülümser geride\" ifadesinde ne var?", "Kişileştirme", ["Gerçek bir olay", "Kişileştirme", "Kafiye", "Karşıtlık"], "", { gorsel: siirGorsel('gulen-gunes'), okumaMetni: METIN_DENIZ_SIIRI });
  ekle("sr-t24", "\"Denize her bakışımda mutluluk doluyorum\" ne anlama geliyor?", "Denizi görünce çok mutlu oluyor", ["Deniz onu doldurdu", "Denizi görünce çok mutlu oluyor", "Yüzmek istiyor", "Deniz suyu içiyor"], "Bakışımda mutluluk doluyorum = görünce seviniyorum.", { gorsel: siirGorsel('denize-bakan'), sasirtma: true, okumaMetni: METIN_DENIZ_SIIRI });
  ekle("sr-t25", "Bu şiirin ana duygusu nedir?", "Denizden duyulan mutluluk", ["Deniz korkusu", "Yalnızlık", "Denizden duyulan mutluluk", "Yorgunluk"], "", { gorsel: siirGorsel('denizde-mutlu'), okumaMetni: METIN_DENIZ_SIIRI });

  return sorular;
}

function bilgiMetniAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.BT,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("bt-a1", "Arılar nerede yaşar?", "Kovanda", '', { gorsel: sahne('ari-kovani', 'default'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a2", "Arılar neyi toplayarak bal yapar?", "Çiçeklerden nektar", '', { gorsel: sahne('cicekte-ari', 'cicek'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a3", "Kraliçe arı ne yapar?", "Yumurta bırakır", '', { gorsel: sahne('kralice-ari', 'default'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a4", "İşçi arılar ne yapar?", "Bal yapar", '', { gorsel: sahne('bal-yapan-arilar', 'default'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a5", "Bal nasıl tanımlanıyor?", "Hem lezzetli hem sağlıklı", '', { gorsel: sahne('bal-kavanozu', 'default'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a6", "Bu metin ne tür bir metin?", "Bilgi metni", '', { gorsel: sahne('bilgi-metni-etiketi', 'kitap'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a7", "Bu metnin başlığı ne?", "Arılar", '', { gorsel: sahne('ari-baslik', 'default'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a8", "Bu metinden ne öğrendik?", "Arıların nasıl yaşadığı ve bal yaptığı", '', { gorsel: sahne('ari-hayati', 'default'), okumaMetni: METIN_ARILAR, cevapTipi: "metin" });
  ekle("bt-a9", "Su döngüsünde ilk adım nedir?", "Güneş suyu ısıtır, su buharlaşır", '', { gorsel: sahne('su-dongusu-semasi', 'gunes'), okumaMetni: METIN_SU_DONGUSU, cevapTipi: "metin" });
  ekle("bt-a10", "Bulutlar nasıl oluşur?", "Su buharlaşır ve yükselir", '', { gorsel: sahne('bulut-olusumu', 'gunes'), okumaMetni: METIN_SU_DONGUSU, cevapTipi: "metin" });
  ekle("bt-a11", "Yağmur suları nereye akar?", "Deniz, göl ve nehirlere", '', { gorsel: sahne('su-akisi', 'default'), okumaMetni: METIN_SU_DONGUSU, cevapTipi: "metin" });
  ekle("bt-a12", "Su döngüsü ne zaman biter?", "Bitmez, sonsuza kadar devam eder", '', { gorsel: sahne('sonsuz-dongu', 'default'), okumaMetni: METIN_SU_DONGUSU, cevapTipi: "metin" });
  ekle("bt-a13", "Bu metinin konusu nedir?", "Suyun doğadaki döngüsü", '', { gorsel: sahne('su-dongusu', 'default'), okumaMetni: METIN_SU_DONGUSU, cevapTipi: "metin" });

  return sorular;
}

function bilgiMetniTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.BT,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("bt-t1", "Güneş sisteminde kaç gezegen vardır?", "8", ["6", "10", "8", "9"], "", { gorsel: sahne('gunes-sistemi', 'gunes'), okumaMetni: METIN_GUNES_SISTEMI });
  ekle("bt-t2", "Dünya Güneş'ten kaçıncı gezegendir?", "Üçüncü", ["İkinci", "Dördüncü", "Üçüncü", "Birinci"], "", { gorsel: sahne('gezegen-siralamasi', 'gunes'), okumaMetni: METIN_GUNES_SISTEMI });
  ekle("bt-t3", "Yaşam barındıran tek gezegen hangisidir?", "Dünya", ["Mars", "Venüs", "Dünya", "Jüpiter"], "", { gorsel: sahne('dunya-gezegeni', 'default'), okumaMetni: METIN_GUNES_SISTEMI });
  ekle("bt-t4", "Dünya hangi hareketleri yapar?", "Hem kendi hem Güneş etrafında", ["Sadece kendi etrafında", "Sadece Güneş etrafında", "Hem kendi hem Güneş etrafında", "Hiç dönmez"], "", { gorsel: sahne('dunya-hareketleri', 'gunes'), okumaMetni: METIN_GUNES_SISTEMI });
  ekle("bt-t5", "Bu metin ne tür bir metindir?", "Bilgi metni", ["Hikâye", "Şiir", "Bilgi metni", "Mektup"], "", { gorsel: sahne('bilgi-metni-etiketi', 'kitap'), okumaMetni: METIN_GUNES_SISTEMI });
  ekle("bt-t6", "Ağaçlar ne alıp ne verirler?", "Karbondioksit alır, oksijen verir", ["Oksijen alır, karbondioksit verir", "Karbondioksit alır, oksijen verir", "Su alır, hava verir", "Işık alır, nem verir"], "", { gorsel: sahne('agac-gaz-alisverisi', 'bahce'), okumaMetni: METIN_AGACLAR });
  ekle("bt-t7", "Ağaçlar kimin yuvası olur?", "Kuşların ve böceklerin", ["Balıkların", "Kuşların ve böceklerin", "Evcil hayvanların", "İnsanların"], "", { gorsel: sahne('agacta-kus-yuvasi', 'kus'), okumaMetni: METIN_AGACLAR });
  ekle("bt-t8", "Hangi ürünler ağaçtan yapılır?", "Kâğıt ve mobilya", ["Cam ve metal", "Plastik ve kauçuk", "Kâğıt ve mobilya", "Kumaş ve ipek"], "", { gorsel: sahne('agactan-urunler', 'default'), okumaMetni: METIN_AGACLAR });
  ekle("bt-t9", "\"Havanın temiz kalmasını sağlarlar\" cümlesi ağaçların hangi özelliğini anlatıyor?", "Karbondioksiti temizleyip oksijen verdikleri", ["Güzel göründükleri", "Karbondioksiti temizleyip oksijen verdikleri", "Gölge yaptıkları", "Meyve verdikleri"], "Karbondioksiti alıp oksijen verirler.", { gorsel: sahne('temiz-hava-agac', 'bahce'), sasirtma: true, okumaMetni: METIN_AGACLAR });
  ekle("bt-t10", "Bu metnin ana fikri nedir?", "Ağaçlar doğa için çok önemlidir ve korunmalıdır", ["Ağaçlar güzeldir", "Ağaçlardan mobilya yapılır", "Ağaçlar doğa için çok önemlidir ve korunmalıdır", "Kuşlar ağaçlarda yaşar"], "", { gorsel: sahne('agac-koruma', 'bahce'), okumaMetni: METIN_AGACLAR });
  ekle("bt-t11", "Kemikleri güçlendiren besin grubu hangisidir?", "Süt ve süt ürünleri", ["Sebze ve meyve", "Ekmek ve tahıllar", "Süt ve süt ürünleri", "Et ve balık"], "", { gorsel: sahne('sut-urunleri', 'default'), okumaMetni: METIN_SAGLIKLI_BESLENME });
  ekle("bt-t12", "Enerji veren besin grubu hangisidir?", "Ekmek ve tahıllar", ["Meyveler", "Su", "Ekmek ve tahıllar", "Şeker"], "", { gorsel: sahne('ekmek-tahil', 'default'), okumaMetni: METIN_SAGLIKLI_BESLENME });
  ekle("bt-t13", "Az tüketilmesi gereken besinler hangileri?", "Şeker ve hazır yiyecekler", ["Sebze ve meyve", "Süt ürünleri", "Şeker ve hazır yiyecekler", "Su"], "", { gorsel: sahne('seker-uyari', 'default'), okumaMetni: METIN_SAGLIKLI_BESLENME });
  ekle("bt-t14", "Bu metne göre sağlıklı beslenmenin amacı nedir?", "Doğru büyümek", ["Şişmanlamak", "Doğru büyümek", "Para biriktirmek", "Hızlı koşmak"], "Metnin ilk cümlesi: Sağlıklı büyümek için...", { gorsel: sahne('saglikli-cocuk', 'cocuk'), sasirtma: true, okumaMetni: METIN_SAGLIKLI_BESLENME });
  ekle("bt-t15", "Bu metin hangi soruya cevap veriyor?", "Sağlıklı nasıl besleniriz?", ["Yemek nasıl pişirilir?", "Sağlıklı nasıl besleniriz?", "Hangi spor yapmalıyız?", "Su neden önemlidir?"], "", { gorsel: sahne('saglikli-beslenme', 'default'), okumaMetni: METIN_SAGLIKLI_BESLENME });
  ekle("bt-t16", "Deprem nasıl oluşur?", "Yer kabuğunun hareketiyle", ["Rüzgârın etkisiyle", "Yağmurun etkisiyle", "Yer kabuğunun hareketiyle", "Bulutların birleşmesiyle"], "", { gorsel: sahne('deprem', 'default'), okumaMetni: METIN_DEPREM });
  ekle("bt-t17", "Depremde zemin nasıl olur?", "Sallanır", ["Isınır", "Sallanır", "Donur", "Islak olur"], "", { gorsel: sahne('sallanan-zemin', 'default'), okumaMetni: METIN_DEPREM });
  ekle("bt-t18", "Deprem sırasında hangi hareketi yapmalıyız?", "Çök-Kapan-Tutun", ["Koş-Bağır-Kaç", "Çök-Kapan-Tutun", "Dur-Otur-Bekle", "Zıpla-Yürü-Git"], "", { gorsel: sahne('deprem-guvenlik', 'cocuk'), okumaMetni: METIN_DEPREM });
  ekle("bt-t19", "Depremde neden paniklememelidir?", "Panik hareketlerimizi bozar ve tehlike yaratır", ["Deprem zararsızdır", "Panik hareketlerimizi bozar ve tehlike yaratır", "Deprem çabuk biter", "Herkes panikte"], "Sakin kalıp güvenli hareket yapmalıyız.", { gorsel: sahne('sakin-deprem', 'cocuk'), sasirtma: true, okumaMetni: METIN_DEPREM });
  ekle("bt-t20", "Bu metnin amacı nedir?", "Depremi tanıtmak ve güvenlik bilgisi vermek", ["Deprem hikâyesi anlatmak", "Depremi tanıtmak ve güvenlik bilgisi vermek", "Depremi güzel göstermek", "Deprem masalı yazmak"], "", { gorsel: sahne('bilgi-metni-etiketi', 'kitap'), okumaMetni: METIN_DEPREM });
  ekle("bt-t21", "Kuşların uzun yolculuk yapmasına ne denir?", "Göç", ["Uçuş", "Göç", "Yolculuk", "Seyahat"], "", { gorsel: sahne('goc-eden-kuslar', 'kus'), okumaMetni: METIN_GOC_EDEN_KUSLAR });
  ekle("bt-t22", "Kuşlar kışın nereye göç eder?", "Sıcak ülkelere", ["Serin ülkelere", "Soğuk ülkelere", "Sıcak ülkelere", "Bulundukları yerde kalır"], "", { gorsel: sahne('goc-haritasi', 'kus'), okumaMetni: METIN_GOC_EDEN_KUSLAR });
  ekle("bt-t23", "Hangi kuşlar göç eder?", "Leylek, kırlangıç, turna", ["Papağan, muhabbet kuşu", "Leylek, kırlangıç, turna", "Tavuk, hindi", "Devekuşu, penguen"], "", { gorsel: sahne('leylek-kirlangic', 'kus'), okumaMetni: METIN_GOC_EDEN_KUSLAR });
  ekle("bt-t24", "Kuşlar yollarını nasıl bulur?", "Güneş ve yıldızlardan yararlanarak", ["Haritaya bakarak", "Koku alarak", "Güneş ve yıldızlardan yararlanarak", "Diğer kuşları takip ederek"], "Metinde açıkça yazılı.", { gorsel: sahne('kus-gunes-yildiz', 'gunes'), sasirtma: true, okumaMetni: METIN_GOC_EDEN_KUSLAR });
  ekle("bt-t25", "Bu metnin ana fikri nedir?", "Bazı kuşlar hayatta kalmak için mevsimlik göç eder", ["Kuşlar çok güçlüdür", "Göç uzun bir yolculuktur", "Bazı kuşlar hayatta kalmak için mevsimlik göç eder", "Kışın soğuk olur"], "Yazın serin, kışın sıcak ülkelere giderler.", { gorsel: sahne('goc-suru', 'kus'), sasirtma: true, okumaMetni: METIN_GOC_EDEN_KUSLAR });

  return sorular;
}

export function hikayeMetni(karistir) {
  return {
    id: "hikaye-metni",
    baslik: "Hikâye Metni",
    kazanimKodu: KAZANIM.HM,
    anlatim: {
      ekranlar: [
        { metin: "HİKÂYE; başı, ortası ve sonu olan bir anlatıdır. Hikâyede kahramanlar (kişiler), olay ve yer vardır.", gorsel: anl("hm-anlatim-1") },
        { metin: "Hikâyenin BAŞINDA kahramanlar ve yer tanıtılır. GELİŞME bölümünde olaylar yaşanır. SONUÇ bölümünde her şey çözüme kavuşur.", gorsel: anl("hm-anlatim-2") },
        { metin: "İyi bir hikâye okuyucuyu içine çeker! Kahraman kim? Nerede? Ne yaşadı? Ne öğrendi? Bu soruları sormak hikâyeyi daha iyi anlamamızı sağlar.", gorsel: anl("hm-anlatim-3") },
      ],
    },
    alistirma: hikayeMetniAlistirma(),
    test: hikayeMetniTest(karistir),
  };
}

export function siir(karistir) {
  return {
    id: "siir",
    baslik: "Şiir",
    kazanimKodu: KAZANIM.SR,
    anlatim: {
      ekranlar: [
        { metin: "ŞİİR, duygu ve düşünceleri ahenkli, ritmik bir şekilde anlatan yazıdır. Şiirde dizeler (satırlar) vardır. Dizeler kıtalar oluşturur.", gorsel: anl("sr-anlatim-1") },
        { metin: "KAFİYE: Dizelerin sonundaki benzer seslerdir. \"Güneş — gider / Yağmur — biter\" → güneş/gider kafiyesi yok, ama \"güneş/ateş\", \"biter/gider\" kafiyeli!", gorsel: anl("sr-anlatim-2") },
        { metin: "Şiirde sözcükler gerçek anlamı dışında da kullanılabilir. \"Güneş güldü\" → Güneş aslında gülmez, bu bir benzetmedir!", gorsel: anl("sr-anlatim-3") },
      ],
    },
    alistirma: siirAlistirma(),
    test: siirTest(karistir),
  };
}

export function bilgiMetni(karistir) {
  return {
    id: "bilgi-metni",
    baslik: "Bilgi Metni",
    kazanimKodu: KAZANIM.BT,
    anlatim: {
      ekranlar: [
        { metin: "BİLGİ METNİ, bir konuyu açıklamak veya bilgi vermek amacıyla yazılan metindir. Ansiklopediler, ders kitapları, broşürler bilgi metni örnekleridir.", gorsel: anl("bt-anlatim-1") },
        { metin: "Bilgi metninde: BAŞLIK (konu ne?), GİRİŞ (konuya giriş), GELİŞME (ayrıntılar), SONUÇ (özet/sonuç) bulunur.", gorsel: anl("bt-anlatim-2") },
        { metin: "Bilgi metni okurken ana fikri ve önemli detayları not alırız. \"Bu metinde ne öğrendim?\" sorusu bize yol gösterir!", gorsel: anl("bt-anlatim-3") },
      ],
    },
    alistirma: bilgiMetniAlistirma(),
    test: bilgiMetniTest(karistir),
  };
}
