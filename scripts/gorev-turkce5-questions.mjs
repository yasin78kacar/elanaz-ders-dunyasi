/** GOREV-TURKCE5 — Yazı Türü: Hikâye ve Şiir */

const KAZANIM = {
  YTH: 'TUR.2.5.1',
  YTS: 'TUR.2.5.2',
};

const METIN_GOL_KENARINDA =
  'Elif, dedesiyle göl kenarına yürüdü. Suyun üstünde ördekler sessizce süzülüyordu. Elif cebinden ekmek kırıntıları çıkarıp suya attı. Bir ördek yanlarına kadar geldi. Dedesi gülümseyip "Sabırlı olursan doğa sana yaklaşır" dedi. Elif eve dönerken göldeki yansımayı uzun süre düşündü.';

const METIN_KAYIP_UCURTMA =
  'Mert yeni uçurtmasını parkta uçuruyordu. Rüzgar birden hızlandı, ip koptu. Uçurtma ağaçların üstünden geçip gözden kayboldu. Mert üzülerek eve döndü. Ertesi sabah komşu teyze kapıyı çaldı; uçurtma bahçesine düşmüştü. Mert teşekkür edip uçurtmasına daha sıkı bir ip bağladı.';

const METIN_FIRIN_MACERASI =
  'Sena annesiyle sabah erkenden fırına gitti. Tezgahta sıcak simitler diziliydi. Fırıncı amca "Bugün yardım eder misin?" dedi. Sena poşetleri tuttu, simitleri saydı. Eve dönerken annesi "Sorumluluk almak seni büyütür" dedi. Sena kendini çok önemli hissetti.';

const METIN_BAHAR_SARKISI = `Penceremde ince yağmur,
Toprak kokar usul usul.
Kuşlar döner uzaklardan,
Bahar der ki: "Uyan, koşul!"

Yeşil olur parkın yolu,
Tomurcuklar açar bir bir.
Gülen yüzle okula gider,
Kalbim olur kıpır kıpır.`;

const METIN_GECE_YILDIZ = `Gece oldu, gök lacivert,
Yıldızlar dizildi tek tek.
Ay bir fener gibi parlak,
Sokak sustu yavaş yavaş.

Camdan baktım uzun uzun,
Bir dilek tuttum içimden.
Sessiz gece arkadaşım,
Sır sakladı kalbimden.`;

const METIN_KIS_SEVINCI = `Sabah kalktım, cam bembeyaz,
Kar taneleri dans ediyor.
Eldivenim, atkım hazır,
Sokak beni çağırıyor.

Ayak izim ilk ben olayım,
Kardan kalbe yol çizeyim.
Soğuk olsa ne fark eder,
Neşeyle günü süsleyeyim.`;

function sahne(sahne, nesne) {
  return { tur: 'turkce', mod: 'sahne', sahne, nesne };
}
function anl(sahne) {
  return { tur: 'turkce', mod: 'anlatim', sahne };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function yazTuruHikayeAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YTH,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  const m1 = { okumaMetni: METIN_GOL_KENARINDA, cevapTipi: 'metin' };
  ekle('yth-a1', 'Hikâyedeki çocuk kimdir?', 'Elif', '', { gorsel: sahne('gol-kenari-yuruyus', 'cocuk'), ...m1 });
  ekle('yth-a2', 'Elif kiminle yürüdü?', 'Dedesiyle', '', { gorsel: sahne('dede-torun-yuruyus', 'cocuk'), ...m1 });
  ekle('yth-a3', 'Gölün üstünde ne vardı?', 'Ördekler', '', { gorsel: sahne('golde-ordekler', 'hayvan'), ...m1 });
  ekle('yth-a4', 'Elif suya ne attı?', 'Ekmek kırıntıları', '', { gorsel: sahne('suya-yem-atan-cocuk', 'gol'), ...m1 });
  ekle('yth-a5', 'Dedesi Elif\'e ne öğüt verdi?', 'Sabırlı olursan doğa yaklaşır', '', { gorsel: sahne('dede-ogut', 'cocuk'), ...m1 });
  ekle('yth-a6', 'Hikâye sonunda Elif neyi düşündü?', 'Göldeki yansımayı', '', { gorsel: sahne('gol-yansima', 'gol'), ...m1 });
  ekle('yth-a7', 'Bu hikâyenin geçtiği yer neresidir?', 'Göl kenarı', '', { gorsel: sahne('gol-manzarasi', 'gol'), ...m1 });
  ekle('yth-a8', 'Bu hikâyenin ana fikri nedir?', 'Doğada sakin ve sabırlı olmak güzeldir', '', { gorsel: sahne('dogada-sakinlik', 'cocuk'), ...m1 });

  const m2 = { okumaMetni: METIN_KAYIP_UCURTMA, cevapTipi: 'metin' };
  ekle('yth-a9', 'Mert parkta ne yapıyordu?', 'Uçurtma uçuruyordu', '', { gorsel: sahne('parkta-ucurtma', 'cocuk'), ...m2 });
  ekle('yth-a10', 'Uçurtmanın ipi neden koptu?', 'Rüzgar hızlandığı için', '', { gorsel: sahne('ruzgarli-park', 'ruzgar'), ...m2 });
  ekle('yth-a11', 'Mert uçurtma kaybolunca nasıl hissetti?', 'Üzüldü', '', { gorsel: sahne('uzgun-mert', 'cocuk'), ...m2 });
  ekle('yth-a12', 'Uçurtmayı kim buldu?', 'Komşu teyze', '', { gorsel: sahne('komsu-teyze-kapi', 'ev'), ...m2 });
  ekle('yth-a13', 'Mert sonunda ne yaptı?', 'Uçurtmaya daha sıkı ip bağladı', '', { gorsel: sahne('ucurtma-ipi-baglama', 'cocuk'), ...m2 });
  ekle('yth-a14', 'Bu hikâyenin sonucu nasıl bitti?', 'Mutlu bitti', '', { gorsel: sahne('mutlu-son', 'cocuk'), ...m2 });
  ekle('yth-a15', 'Hikâyedeki olay hangi sırayla oldu?', 'Uçurdu, kaybetti, geri buldu', '', { gorsel: sahne('olay-sirasi', 'default'), ...m2 });
  ekle('yth-a16', 'Bu metnin ana fikri nedir?', 'Umudu kaybetmeden çözüm aranmalıdır', '', { gorsel: sahne('umutlu-cocuk', 'cocuk'), ...m2 });

  const m3 = { okumaMetni: METIN_FIRIN_MACERASI, cevapTipi: 'metin' };
  ekle('yth-a17', 'Sena annesiyle nereye gitti?', 'Fırına', '', { gorsel: sahne('firin-onu', 'fırın'), ...m3 });
  ekle('yth-a18', 'Tezgahta ne diziliydi?', 'Sıcak simitler', '', { gorsel: sahne('simit-tezgahi', 'yiyecek'), ...m3 });
  ekle('yth-a19', 'Fırıncı amca Sena\'dan ne istedi?', 'Yardım etmesini', '', { gorsel: sahne('firinci-yardim', 'fırın'), ...m3 });
  ekle('yth-a20', 'Sena hangi işi yaptı?', 'Poşet tuttu ve simit saydı', '', { gorsel: sahne('simit-sayan-sena', 'cocuk'), ...m3 });
  ekle('yth-a21', 'Annesi dönüşte ne söyledi?', 'Sorumluluk almak seni büyütür', '', { gorsel: sahne('anne-konusma', 'cocuk'), ...m3 });
  ekle('yth-a22', 'Sena kendini nasıl hissetti?', 'Önemli hissetti', '', { gorsel: sahne('kendine-guvenen-cocuk', 'cocuk'), ...m3 });
  ekle('yth-a23', 'Bu hikâyede hangi değer öne çıkıyor?', 'Sorumluluk', '', { gorsel: sahne('sorumluluk', 'cocuk'), ...m3 });
  ekle('yth-a24', 'Hikâyenin zamanı ne olabilir?', 'Sabah erken saatler', '', { gorsel: sahne('sabah-firin', 'gunes'), ...m3 });
  ekle('yth-a25', 'Bu metnin türü nedir?', 'Hikâye', '', { gorsel: sahne('hikaye-kitabi', 'kitap'), ...m3 });
  return sorular;
}

function yazTuruHikayeTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YTH,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  const ek = (id, soru, cevap, sec, ipucu, metin, gorsel, extra = {}) =>
    ekle(id, soru, cevap, sec, ipucu, { okumaMetni: metin, gorsel, ...extra });

  ek('yth-t1', 'Elif, dedesiyle nereye yürüdü?', 'Göl kenarına', ['Parka', 'Göl kenarına', 'Ormana', 'Okula'], '', METIN_GOL_KENARINDA, sahne('gol-kenari-yuruyus', 'cocuk'));
  ek('yth-t2', 'Suyun üstünde hangi hayvanlar vardı?', 'Ördekler', ['Martılar', 'Balıklar', 'Ördekler', 'Kurbağalar'], '', METIN_GOL_KENARINDA, sahne('golde-ordekler', 'hayvan'));
  ek('yth-t3', 'Elif suya ne attı?', 'Ekmek kırıntıları', ['Yaprak', 'Taş', 'Ekmek kırıntıları', 'Yem torbası'], '', METIN_GOL_KENARINDA, sahne('suya-yem-atan-cocuk', 'gol'));
  ek('yth-t4', '"Sabırlı olursan doğa sana yaklaşır" cümlesi ne anlatır?', 'Sakin davranınca güzel şeyler olur', ['Koşunca ördek gelir', 'Sakin davranınca güzel şeyler olur', 'Doğa sadece sabah uyanır', 'Dede şaka yaptı'], '', METIN_GOL_KENARINDA, sahne('dede-ogut', 'cocuk'), { sasirtma: true });
  ek('yth-t5', 'Bu metnin ana fikri hangisidir?', 'Doğada sabır ve dikkat önemlidir', ['Ördekler hızlı yüzer', 'Gölde gezmek zordur', 'Doğada sabır ve dikkat önemlidir', 'Ekmek taşımalıyız'], '', METIN_GOL_KENARINDA, sahne('dogada-sakinlik', 'cocuk'));
  ek('yth-t6', 'Mert parkta ne yapıyordu?', 'Uçurtma uçuruyordu', ['Bisiklet sürüyordu', 'Uçurtma uçuruyordu', 'Kitap okuyordu', 'Top oynuyordu'], '', METIN_KAYIP_UCURTMA, sahne('parkta-ucurtma', 'cocuk'));
  ek('yth-t7', 'Uçurtma neden kayboldu?', 'Rüzgar hızlanıp ipi kopardığı için', ['Mert bıraktığı için', 'Rüzgar hızlanıp ipi kopardığı için', 'Yağmur yağdığı için', 'Kuş aldığı için'], '', METIN_KAYIP_UCURTMA, sahne('ruzgarli-park', 'ruzgar'));
  ek('yth-t8', 'Mert ertesi sabah ne öğrendi?', 'Uçurtmanın komşu bahçesine düştüğünü', ['Uçurtmanın yandığını', 'Uçurtmanın denize gittiğini', 'Uçurtmanın komşu bahçesine düştüğünü', 'Uçurtmanın bulunmadığını'], '', METIN_KAYIP_UCURTMA, sahne('komsu-teyze-kapi', 'ev'));
  ek('yth-t9', 'Mert uçurtmasına neden daha sıkı ip bağladı?', 'Tekrar kaybolmaması için', ['Daha yükseğe çıksın diye', 'Daha güzel görünsün diye', 'Tekrar kaybolmaması için', 'Komşu istediği için'], '', METIN_KAYIP_UCURTMA, sahne('ucurtma-ipi-baglama', 'cocuk'), { sasirtma: true });
  ek('yth-t10', 'Bu hikâyenin sonucu nasıldır?', 'Sorun çözülür ve mutlu biter', ['Üzücü biter', 'Yarım kalır', 'Sorun çözülür ve mutlu biter', 'Kahraman kaybolur'], '', METIN_KAYIP_UCURTMA, sahne('mutlu-son', 'cocuk'));
  ek('yth-t11', 'Sena annesiyle hangi saatte fırına gitti?', 'Sabah erkenden', ['Öğlen', 'Sabah erkenden', 'Akşam', 'Gece'], '', METIN_FIRIN_MACERASI, sahne('sabah-firin', 'gunes'));
  ek('yth-t12', 'Tezgahta ne vardı?', 'Sıcak simitler', ['Ekmek hamuru', 'Kurabiye', 'Sıcak simitler', 'Pastalar'], '', METIN_FIRIN_MACERASI, sahne('simit-tezgahi', 'yiyecek'));
  ek('yth-t13', 'Fırıncı amca Sena\'dan ne istedi?', 'Yardım etmesini', ['Para vermesini', 'Yardım etmesini', 'Eve gitmesini', 'Simit almasını'], '', METIN_FIRIN_MACERASI, sahne('firinci-yardim', 'fırın'));
  ek('yth-t14', 'Sena ne yaparak yardım etti?', 'Poşet tuttu ve simit saydı', ['Kasayı açtı', 'Poşet tuttu ve simit saydı', 'Fırını yaktı', 'Masa sildi'], '', METIN_FIRIN_MACERASI, sahne('simit-sayan-sena', 'cocuk'));
  ek('yth-t15', 'Annesinin "Sorumluluk almak seni büyütür" sözü neyi vurgular?', 'Görev almanın kişiyi geliştirdiğini', ['Sadece büyüklerin çalıştığını', 'Sorumluluğun zor olduğunu', 'Görev almanın kişiyi geliştirdiğini', 'Fırın işinin kolay olduğunu'], '', METIN_FIRIN_MACERASI, sahne('anne-konusma', 'cocuk'), { sasirtma: true });
  ek('yth-t16', 'Hikâyede geçen yerlerden biri hangisidir?', 'Fırın', ['Sinema', 'Müze', 'Fırın', 'Kütüphane'], '', METIN_FIRIN_MACERASI, sahne('firin-onu', 'fırın'));
  ek('yth-t17', 'Hikâyede "kahraman" ne demektir?', 'Olayı yaşayan kişi', ['Yazarın adı', 'Metnin başlığı', 'Olayı yaşayan kişi', 'Son cümle'], '', METIN_FIRIN_MACERASI, sahne('hikaye-kahraman', 'kitap'));
  ek('yth-t18', 'Hikâyede olayların belli sırayla verilmesine ne denir?', 'Olay örgüsü', ['Kafiye', 'Olay örgüsü', 'Başlık', 'Dize'], '', METIN_KAYIP_UCURTMA, sahne('olay-sirasi', 'default'));
  ek('yth-t19', 'Aşağıdakilerden hangisi hikâye metninin özelliğidir?', 'Kahraman, olay ve yer içerir', ['Sadece bilgi verir', 'Kahraman, olay ve yer içerir', 'Dizelerden oluşur', 'Kafiyelidir'], '', METIN_GOL_KENARINDA, sahne('hikaye-ozellikleri', 'kitap'));
  ek('yth-t20', 'Hikâyede sonuç bölümü neyi anlatır?', 'Olayın nasıl bittiğini', ['Kahramanın adını', 'Mekanın rengini', 'Olayın nasıl bittiğini', 'Yalnızca zamanı'], '', METIN_KAYIP_UCURTMA, sahne('hikaye-sonuc', 'kitap'));
  ek('yth-t21', 'Aşağıdakilerden hangisi hikâye başlığı olabilir?', 'Kayıp Uçurtma', ['Rüzgar Nedir?', 'Kayıp Uçurtma', 'Çarpım Tablosu', 'Mevsimler'], '', METIN_KAYIP_UCURTMA, sahne('hikaye-kitabi', 'kitap'));
  ek('yth-t22', 'Hikâyede "ana fikir" neyi belirtir?', 'Metnin vermek istediği temel mesajı', ['Kahramanın boyunu', 'Metnin uzunluğunu', 'Metnin vermek istediği temel mesajı', 'Sadece ilk cümleyi'], '', METIN_GOL_KENARINDA, sahne('ana-fikir', 'kitap'), { sasirtma: true });
  ek('yth-t23', 'Hikâyede zaman ifadesi hangisidir?', 'Ertesi sabah', ['Güzel bir gün', 'Mavi göl', 'Ertesi sabah', 'Uçan ördek'], '', METIN_KAYIP_UCURTMA, sahne('sabah-zamani', 'gunes'));
  ek('yth-t24', 'Aşağıdakilerden hangisi bir hikâyede çatışma oluşturur?', 'İpin kopup uçurtmanın kaybolması', ['Ördeklerin yüzmesi', 'İpin kopup uçurtmanın kaybolması', 'Simitlerin sıcak olması', 'Güneşin doğması'], '', METIN_KAYIP_UCURTMA, sahne('catisma-anı', 'cocuk'));
  ek('yth-t25', 'Bu üç metnin ortak özelliği nedir?', 'Hepsi bir olayı anlatan hikâyedir', ['Hepsi şiirdir', 'Hepsi bilgi metnidir', 'Hepsi bir olayı anlatan hikâyedir', 'Hepsi haber metnidir'], '', METIN_FIRIN_MACERASI, sahne('hikaye-turu', 'kitap'));
  return sorular;
}

function yazTuruSiirAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YTS,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  const s1 = { okumaMetni: METIN_BAHAR_SARKISI, cevapTipi: 'metin' };
  ekle('yts-a1', 'Bu şiirde anlatılan mevsim hangisidir?', 'Bahar', '', { gorsel: sahne('bahar-sahnesi', 'cicek'), ...s1 });
  ekle('yts-a2', 'Şiirde kuşlar nereden dönüyor?', 'Uzaklardan', '', { gorsel: sahne('gocmen-kuslar', 'kus'), ...s1 });
  ekle('yts-a3', 'Şiirde kaç kıta vardır?', '2', '', { gorsel: sahne('kita-sayimi', 'siir'), ...s1 });
  ekle('yts-a4', '"Kalbim olur kıpır kıpır" ifadesi hangi duyguyu anlatır?', 'Heyecan ve mutluluk', '', { gorsel: sahne('mutlu-cocuk', 'cocuk'), ...s1 });
  ekle('yts-a5', 'Şiirin ana duygusu nedir?', 'Canlılık ve sevinç', '', { gorsel: sahne('bahar-mutlulugu', 'cicek'), ...s1 });
  ekle('yts-a6', '"Toprak kokar usul usul" dizesi neyi çağrıştırır?', 'Yağmur sonrası bahar havasını', '', { gorsel: sahne('toprak-kokusu', 'yagmur'), ...s1 });
  ekle('yts-a7', 'Bu şiirde dizeler nasıl bir anlatım kuruyor?', 'Ritmik ve duygulu', '', { gorsel: sahne('ritimli-dizeler', 'siir'), ...s1 });
  ekle('yts-a8', 'Şiir türü olarak bu metin nedir?', 'Şiir', '', { gorsel: sahne('siir-kitabi', 'kitap'), ...s1 });

  const s2 = { okumaMetni: METIN_GECE_YILDIZ, cevapTipi: 'metin' };
  ekle('yts-a9', 'Şiirde gökyüzü nasıl tanımlanmış?', 'Lacivert', '', { gorsel: sahne('gece-gokyuzu', 'gece'), ...s2 });
  ekle('yts-a10', 'Ay neye benzetilmiş?', 'Fenere', '', { gorsel: sahne('ay-fener', 'gece'), ...s2 });
  ekle('yts-a11', 'Şiirde çocuk ne yaptı?', 'Dilek tuttu', '', { gorsel: sahne('dilek-tutan-cocuk', 'cocuk'), ...s2 });
  ekle('yts-a12', 'Bu şiirdeki ana atmosfer nedir?', 'Sakin ve huzurlu gece', '', { gorsel: sahne('sessiz-gece', 'gece'), ...s2 });
  ekle('yts-a13', 'Şiirde kaç kıta vardır?', '2', '', { gorsel: sahne('kita-sayimi', 'siir'), ...s2 });
  ekle('yts-a14', '"Sır sakladı kalbimden" dizesi ne anlatır?', 'İçten bir duygunun gizli kalmasını', '', { gorsel: sahne('kalpte-sir', 'cocuk'), ...s2 });
  ekle('yts-a15', 'Şiirde zaman dilimi hangisidir?', 'Gece', '', { gorsel: sahne('gece-zamani', 'gece'), ...s2 });
  ekle('yts-a16', 'Bu şiirin duygusu daha çok nasıldır?', 'Dingin', '', { gorsel: sahne('dingin-gece', 'gece'), ...s2 });

  const s3 = { okumaMetni: METIN_KIS_SEVINCI, cevapTipi: 'metin' };
  ekle('yts-a17', 'Şiirde hangi doğa olayı anlatılıyor?', 'Kar yağışı', '', { gorsel: sahne('kar-yagisi', 'kar'), ...s3 });
  ekle('yts-a18', 'Çocuk dışarı çıkmadan önce ne giyiyor?', 'Eldiven ve atkı', '', { gorsel: sahne('kis-hazirlik', 'cocuk'), ...s3 });
  ekle('yts-a19', '"Ayak izim ilk ben olayım" dizesi neyi gösterir?', 'Çocuğun heyecanını', '', { gorsel: sahne('ilk-ayak-izi', 'kar'), ...s3 });
  ekle('yts-a20', 'Şiirde soğuk hava nasıl karşılanıyor?', 'Neşeyle', '', { gorsel: sahne('karda-neşe', 'cocuk'), ...s3 });
  ekle('yts-a21', 'Bu şiirde kaç dize vardır?', '8', '', { gorsel: sahne('dize-sayimi', 'siir'), ...s3 });
  ekle('yts-a22', 'Şiirin ana duygusu nedir?', 'Kış sevincidir', '', { gorsel: sahne('kis-mutlulugu', 'kar'), ...s3 });
  ekle('yts-a23', 'Şiirdeki "dans ediyor" sözü ne tür anlatıma örnektir?', 'Kişileştirme', '', { gorsel: sahne('kisilestirme', 'siir'), ...s3 });
  ekle('yts-a24', 'Şiirde geçen "sokak beni çağırıyor" ifadesi ne anlatır?', 'Dışarı çıkma isteğini', '', { gorsel: sahne('disari-cagri', 'cocuk'), ...s3 });
  ekle('yts-a25', 'Bu metnin türü nedir?', 'Şiir', '', { gorsel: sahne('siir-kitabi', 'kitap'), ...s3 });
  return sorular;
}

function yazTuruSiirTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YTS,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  const ek = (id, soru, cevap, sec, ipucu, metin, gorsel, extra = {}) =>
    ekle(id, soru, cevap, sec, ipucu, { okumaMetni: metin, gorsel, ...extra });

  ek('yts-t1', 'Bahar Şarkısı şiirinde hangi mevsim anlatılır?', 'Bahar', ['Yaz', 'Kış', 'Bahar', 'Sonbahar'], '', METIN_BAHAR_SARKISI, sahne('bahar-sahnesi', 'cicek'));
  ek('yts-t2', '"Kuşlar döner uzaklardan" dizesi neyi anlatır?', 'Baharla birlikte dönüşü', ['Kuşların kaybolduğunu', 'Rüzgarı', 'Baharla birlikte dönüşü', 'Geceyi'], '', METIN_BAHAR_SARKISI, sahne('gocmen-kuslar', 'kus'));
  ek('yts-t3', 'Bahar Şarkısı kaç kıtadan oluşur?', '2', ['1', '3', '2', '4'], '', METIN_BAHAR_SARKISI, sahne('kita-sayimi', 'siir'));
  ek('yts-t4', '"Kalbim olur kıpır kıpır" cümlesi hangi duyguyu verir?', 'Heyecan', ['Korku', 'Heyecan', 'Öfke', 'Yorgunluk'], '', METIN_BAHAR_SARKISI, sahne('mutlu-cocuk', 'cocuk'));
  ek('yts-t5', 'Bu şiirin ana teması nedir?', 'Baharın getirdiği canlılık', ['Kışın zorluğu', 'Gece sessizliği', 'Baharın getirdiği canlılık', 'Okul hayatı'], '', METIN_BAHAR_SARKISI, sahne('bahar-mutlulugu', 'cicek'));
  ek('yts-t6', 'Gece Yıldız şiirinde gökyüzü nasıl betimlenir?', 'Lacivert', ['Mor', 'Lacivert', 'Açık mavi', 'Gri'], '', METIN_GECE_YILDIZ, sahne('gece-gokyuzu', 'gece'));
  ek('yts-t7', 'Ay neye benzetilir?', 'Fenere', ['Topa', 'Aynaya', 'Fenere', 'Muma'], '', METIN_GECE_YILDIZ, sahne('ay-fener', 'gece'));
  ek('yts-t8', 'Şiirde çocuk ne yapar?', 'Dilek tutar', ['Şarkı söyler', 'Uyur', 'Dilek tutar', 'Koşar'], '', METIN_GECE_YILDIZ, sahne('dilek-tutan-cocuk', 'cocuk'));
  ek('yts-t9', 'Bu şiirin duygu tonu nasıldır?', 'Sakin ve huzurlu', ['Öfkeli', 'Sakin ve huzurlu', 'Telaşlı', 'Komik'], '', METIN_GECE_YILDIZ, sahne('sessiz-gece', 'gece'));
  ek('yts-t10', '"Sır sakladı kalbimden" dizesi neyi gösterir?', 'İç dünyadaki duyguları', ['Kalbin hastalandığını', 'Bir oyuncağı sakladığını', 'İç dünyadaki duyguları', 'Arkadaşını beklediğini'], '', METIN_GECE_YILDIZ, sahne('kalpte-sir', 'cocuk'), { sasirtma: true });
  ek('yts-t11', 'Kış Sevinci şiirinde sabah pencere nasıl görünür?', 'Bembeyaz', ['Islak', 'Bembeyaz', 'Karanlık', 'Tozlu'], '', METIN_KIS_SEVINCI, sahne('karli-cam', 'kar'));
  ek('yts-t12', 'Çocuk dışarı çıkmadan önce neyi hazırlar?', 'Eldiven ve atkısını', ['Şemsiyesini', 'Defterini', 'Eldiven ve atkısını', 'Çantasını'], '', METIN_KIS_SEVINCI, sahne('kis-hazirlik', 'cocuk'));
  ek('yts-t13', '"Kar taneleri dans ediyor" ifadesi hangi sanatlı söyleyişe örnektir?', 'Kişileştirme', ['Abartma', 'Karşılaştırma', 'Kişileştirme', 'Soru cümlesi'], '', METIN_KIS_SEVINCI, sahne('kisilestirme', 'siir'));
  ek('yts-t14', 'Şiirde çocuk soğuğa rağmen nasıl hisseder?', 'Neşeli', ['Üzgün', 'Korkulu', 'Neşeli', 'Uykulu'], '', METIN_KIS_SEVINCI, sahne('karda-neşe', 'cocuk'));
  ek('yts-t15', 'Kış Sevinci şiiri kaç dizeden oluşur?', '8', ['6', '8', '10', '4'], '', METIN_KIS_SEVINCI, sahne('dize-sayimi', 'siir'));
  ek('yts-t16', 'Şiirde kıta nedir?', 'Bir grup dizedir', ['Başlıktır', 'Bir grup dizedir', 'Noktadır', 'Uzun cümledir'], '', METIN_BAHAR_SARKISI, sahne('kita-sayimi', 'siir'));
  ek('yts-t17', 'Aşağıdakilerden hangisi şiirin özelliğidir?', 'Dizeler ve ritim içerir', ['Sadece bilgi verir', 'Dizeler ve ritim içerir', 'Maddelerden oluşur', 'Tablo içerir'], '', METIN_GECE_YILDIZ, sahne('siir-ozellik', 'siir'));
  ek('yts-t18', 'Şiirde duyguyu artırmak için ne kullanılır?', 'Benzetme ve imgeler', ['Sayısal veriler', 'Grafikler', 'Benzetme ve imgeler', 'Dipnotlar'], '', METIN_KIS_SEVINCI, sahne('siirde-anlatim', 'siir'));
  ek('yts-t19', 'Hangi seçenek bir şiir başlığına uygundur?', 'Gece Yıldız', ['Matematik Soruları', 'Hava Durumu Raporu', 'Gece Yıldız', 'Sınıf Listesi'], '', METIN_GECE_YILDIZ, sahne('siir-kitabi', 'kitap'));
  ek('yts-t20', '"Toprak kokar usul usul" dizesi hangi duyuya seslenir?', 'Koku duyusuna', ['İşitme duyusuna', 'Tat duyusuna', 'Koku duyusuna', 'Dokunma duyusuna'], '', METIN_BAHAR_SARKISI, sahne('toprak-kokusu', 'yagmur'), { sasirtma: true });
  ek('yts-t21', 'Şiirde tekrar eden ses uyumu ne sağlar?', 'Ahenk', ['Hız', 'Ahenk', 'Kural', 'Uzunluk'], '', METIN_BAHAR_SARKISI, sahne('ritimli-dizeler', 'siir'));
  ek('yts-t22', 'Aşağıdakilerden hangisi şiirde zaman ifadesidir?', 'Gece oldu', ['Yıldızlar tek tek', 'Gece oldu', 'Camdan baktım', 'Sır sakladı'], '', METIN_GECE_YILDIZ, sahne('gece-zamani', 'gece'));
  ek('yts-t23', 'Şiir türünde anlatım genellikle nasıldır?', 'Kısa, yoğun ve duyguludur', ['Uzun ve açıklayıcıdır', 'Kısa, yoğun ve duyguludur', 'Sadece resmi dildir', 'Kurallı listelerdir'], '', METIN_KIS_SEVINCI, sahne('siir-turu', 'kitap'));
  ek('yts-t24', 'Aşağıdakilerden hangisi şiirin ana duygusunu verir?', 'Metnin bize hissettirdiği temel duygu', ['Yazarın yaşı', 'Metnin yazıldığı gün', 'Metnin bize hissettirdiği temel duygu', 'Kaç harf olduğu'], '', METIN_GECE_YILDIZ, sahne('ana-duygu', 'siir'), { sasirtma: true });
  ek('yts-t25', 'Bu üç metnin ortak türü hangisidir?', 'Şiir', ['Hikâye', 'Bilgi metni', 'Şiir', 'Mektup'], '', METIN_BAHAR_SARKISI, sahne('siir-kitabi', 'kitap'));
  return sorular;
}

export function yazTuruHikaye(karistir) {
  return {
    id: 'yazi-turu-hikaye',
    baslik: 'Yazı Türü — Hikâye',
    kazanimKodu: KAZANIM.YTH,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Hikâye, bir olayın kişi, yer ve zaman unsurlarıyla anlatıldığı yazı türüdür. Hikâyede kahramanlar bir sorun yaşar, olaylar gelişir ve sonunda bir sonuca ulaşılır.',
          gorsel: anl('yth-anlatim-1'),
        },
        {
          metin:
            'Hikâyelerde genellikle giriş, gelişme ve sonuç bölümü bulunur. Girişte kişiler ve ortam tanıtılır; gelişmede olay büyür; sonuçta ise düğüm çözülür.',
          gorsel: anl('yth-anlatim-2'),
        },
        {
          metin:
            'Hikâyeyi daha iyi anlamak için şu sorular önemlidir: Kim? Nerede? Ne oldu? Nasıl bitti? Bu sorular metnin ana fikrine ulaşmamıza yardımcı olur.',
          gorsel: anl('yth-anlatim-3'),
        },
      ],
    },
    alistirma: yazTuruHikayeAlistirma(),
    test: yazTuruHikayeTest(karistir),
  };
}

export function yazTuruSiir(karistir) {
  return {
    id: 'yazi-turu-siir',
    baslik: 'Yazı Türü — Şiir',
    kazanimKodu: KAZANIM.YTS,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Şiir, duygu ve düşünceleri dizelerle anlatan bir yazı türüdür. Şiirde ses uyumu, ritim ve imgeler anlatımı güçlendirir.',
          gorsel: anl('yts-anlatim-1'),
        },
        {
          metin:
            'Şiirlerde dizeler kıtaları oluşturur. Şair bazen benzetme ve kişileştirme kullanarak anlatımı daha canlı ve etkileyici hale getirir.',
          gorsel: anl('yts-anlatim-2'),
        },
        {
          metin:
            'Bir şiiri okurken ana duyguya odaklanırız: Şiir bize ne hissettiriyor? Neşe, huzur, özlem ya da heyecan gibi duyguları sezmek şiiri anlamayı kolaylaştırır.',
          gorsel: anl('yts-anlatim-3'),
        },
      ],
    },
    alistirma: yazTuruSiirAlistirma(),
    test: yazTuruSiirTest(karistir),
  };
}
