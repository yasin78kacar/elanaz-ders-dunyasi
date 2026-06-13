/** GOREV-FEN2 — Madde ve Özellikleri, Kuvvet ve Hareket, Işık ve Ses */

const KAZANIM = {
  MO: 'FEN.2.2.1',
  KH: 'FEN.2.2.2',
  IS: 'FEN.2.2.3',
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

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: extra.kazanim ?? KAZANIM.MO,
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
    kazanimKodu: extra.kazanim ?? KAZANIM.MO,
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
    kazanimKodu: extra.kazanim ?? KAZANIM.MO,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

// ─── Madde ve Özellikleri ───────────────────────────────────────────────────

function maddeVeOzellikleriAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.MO };
  boslukEkle(s, 'mo-a1', 'Çevremizdeki maddelerin rengini ......... duyumuzla anlarız.', 'görme', '', { gorsel: nesne('gozluk'), ...k });
  boslukEkle(s, 'mo-a2', 'Limonun ekşi olduğunu anlamamızı sağlayan organımız ......... .', 'dildir', '', { gorsel: nesne('limon'), alternatifCevaplar: ['dil'], ...k });
  boslukEkle(s, 'mo-a3', 'Taş, ......... bir maddedir.', 'sert', '', { gorsel: nesne('tas'), ...k });
  dyEkle(s, 'mo-a4', 'Pamuk, sert bir maddedir.', 'Yanlış', '', { gorsel: nesne('pamuk'), ...k });
  boslukEkle(s, 'mo-a5', 'Süngeri sıkıp bırakınca eski haline döner, o bir ......... maddedir.', 'esnek', '', { gorsel: nesne('sunger'), ...k });
  boslukEkle(s, 'mo-a6', 'Cam bardak ve porselen tabak ......... maddelere örnektir.', 'kırılgan', '', { gorsel: nesne('cam'), ...k });
  boslukEkle(s, 'mo-a7', 'Zımpara kağıdının yüzeyi ......... bir yapıdadır.', 'pürüzlü', '', { gorsel: nesne('zimpara'), ...k });
  dyEkle(s, 'mo-a8', 'Aynanın yüzeyi pürüzlüdür.', 'Yanlış', '', { gorsel: nesne('ayna'), ...k });
  boslukEkle(s, 'mo-a9', 'Elmanın kokusunu ......... organımızla alırız.', 'burun', '', { gorsel: nesne('elma'), ...k });
  boslukEkle(s, 'mo-a10', 'Zilin sesini duyduğumuz organımız ......... .', 'kulak', '', { gorsel: nesne('zil'), ...k });
  boslukEkle(s, 'mo-a11', 'Tahta masa, dokunduğumuzda ......... hissi verir.', 'sert', '', { gorsel: nesne('masa'), ...k });
  dyEkle(s, 'mo-a12', 'Paket lastiği, kırılgan bir maddedir.', 'Yanlış', '', { gorsel: nesne('lastik'), ...k });
  boslukEkle(s, 'mo-a13', 'Yün kazak, ......... bir maddedir.', 'yumuşak', '', { gorsel: nesne('yun-kazak'), ...k });
  boslukEkle(s, 'mo-a14', 'Cevizin kabuğu ......... ve ......... .', 'sert ve pürüzlü', '', {
    gorsel: nesne('ceviz'),
    alternatifCevaplar: ['sert, pürüzlü', 'pürüzlü ve sert'],
    ...k,
  });
  boslukEkle(s, 'mo-a15', 'Televizyon ekranı dokunduğumuzda ......... bir yüzeye sahiptir.', 'pürüzsüz', '', { gorsel: nesne('telefon'), ...k });
  boslukEkle(s, 'mo-a16', 'Oyun hamuru kolayca şekil aldığı için ......... maddedir.', 'yumuşak', '', { gorsel: nesne('oyun-hamuru'), ...k });
  boslukEkle(s, 'mo-a17', 'Pencere camına top çarparsa kırılır, çünkü ......... .', 'kırılgandır', '', { gorsel: nesne('cam'), ...k });
  boslukEkle(s, 'mo-a18', 'Şişirilmiş bir balona bastırıp bırakırsak eski haline döner, bu onun ......... olduğunu gösterir.', 'esnek', '', { gorsel: nesne('balon'), ...k });
  dyEkle(s, 'mo-a19', 'Gülün kokusunu alma işleminde görme duyumuzu kullanırız.', 'Yanlış', '', { gorsel: nesne('gul'), ...k });
  boslukEkle(s, 'mo-a20', 'Çayın sıcak olduğunu ......... duyumuzla hissederiz.', 'dokunma', '', { gorsel: nesne('cay'), ...k });
  boslukEkle(s, 'mo-a21', 'Çikolatanın tadı tatlıdır, bunu ......... ile anlarız.', 'dil', '', { gorsel: nesne('cikolata'), ...k });
  boslukEkle(s, 'mo-a22', 'Ağaç gövdesine dokunduğumuzda yüzeyinin ......... olduğunu hissederiz.', 'pürüzlü', '', { gorsel: nesne('agac'), ...k });
  boslukEkle(s, 'mo-a23', 'Bulaşık süngerinin yeşil kısmı pürüzlü, sarı kısmı ......... .', 'yumuşaktır', '', { gorsel: nesne('sunger'), alternatifCevaplar: ['yumuşak'], ...k });
  dyEkle(s, 'mo-a24', 'Su döküldüğünde suyu çeken kağıt havlu serttir.', 'Yanlış', '', { gorsel: nesne('kagit-havlu'), ...k });
  dyEkle(s, 'mo-a25', 'Demir çivi esnek bir maddedir, kolayca eğilip bükülebilir.', 'Yanlış', '', { gorsel: nesne('demir-civi'), ...k });
  return s;
}

function maddeVeOzellikleriTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.MO };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('mo-t1', 'Limonun sarı ve ekşi olduğunu hangi iki duyumuzla anlarız?', 'Görme - Tatma', ['Görme - Dokunma', 'Görme - Tatma', 'İşitme - Koklama', 'Tatma - İşitme'], '', { gorsel: nesne('limon') });
  e('mo-t2', 'Ayşe lastiği çekip bıraktı, eski haline döndü. Lastik nasıl bir maddedir?', 'Esnek', ['Sert', 'Kırılgan', 'Esnek', 'Pürüzlü'], '', { gorsel: nesne('lastik') });
  e('mo-t3', 'Selin cam sürahiyi taşırken çok dikkat ediyor. Çünkü sürahi nasıl bir maddedir?', 'Kırılgan', ['Yumuşak', 'Esnek', 'Kırılgan', 'Pürüzsüz'], '', { gorsel: nesne('cam') });
  e('mo-t4', 'Gece uyurken başımızı koyduğumuz yastığın özelliği nedir?', 'Yumuşak', ['Sert', 'Pürüzlü', 'Kırılgan', 'Yumuşak'], '', { gorsel: nesne('yastik') });
  e('mo-t5', 'Ayna ve taşın yüzeyleri sırasıyla nasıldır?', 'Pürüzsüz - Pürüzlü', ['Pürüzlü - Pürüzsüz', 'Yumuşak - Sert', 'Esnek - Kırılgan', 'Pürüzsüz - Pürüzlü'], '', { gorsel: grup(['ayna', 'tas'], ['ayna', 'tas']) });
  e('mo-t6', 'Ağaçta öten kuşun sesini hangi organımızla algılarız?', 'Kulak', ['Göz', 'Kulak', 'Burun', 'Dil'], '', { gorsel: nesne('kus') });
  e('mo-t7', 'Ali oyun hamuruyla araba yapıyor. Oyun hamuru için hangisi söylenemez?', 'Serttir', ['Yumuşaktır', 'Şekil verilebilir', 'Serttir', 'Ele yapışabilir'], 'Oyun hamuru yumuşaktır, sert değildir!', { gorsel: nesne('oyun-hamuru'), sasirtma: true });
  e('mo-t8', 'Berk zımpara kağıdına dokunduğunda eli çizildi. Zımpara nasıl bir yüzeye sahiptir?', 'Pürüzlü', ['Kaygan', 'Pürüzsüz', 'Pürüzlü', 'Esnek'], '', { gorsel: nesne('zimpara') });
  e('mo-t9', 'Zeynep kırmızı güllerin mis gibi koktuğunu söyledi. Zeynep hangi duyularını kullandı?', 'Görme - Koklama', ['Tatma - Görme', 'İşitme - Koklama', 'Dokunma - Koklama', 'Görme - Koklama'], '', { gorsel: nesne('gul') });
  e('mo-t10', 'Evimizin demir kapısı için hangisi doğrudur?', 'Serttir', ['Esnektir', 'Kırılgandır', 'Serttir', 'Yumuşaktır'], '', { gorsel: nesne('demir-kapi') });
  e('mo-t11', 'Annemizin yaptığı çorbanın tuzlu olup olmadığını nasıl anlarız?', 'Tadarak', ['Bakarak', 'Koklayarak', 'Dokunarak', 'Tadarak'], '', { gorsel: nesne('corba') });
  e('mo-t12', 'Gökyüzündeki bulutlar pamuk gibidir. Pamuk hangi özelliğe sahiptir?', 'Yumuşak', ['Kırılgan', 'Sert', 'Yumuşak', 'Pürüzlü'], '', { gorsel: nesne('pamuk') });
  e('mo-t13', 'Cam bilye için hangisi yanlıştır?', 'Yumuşaktır', ['Pürüzsüzdür', 'Serttir', 'Yumuşaktır', 'Kırılgandır'], '', { gorsel: nesne('bilye') });
  e('mo-t14', 'Bulaşık süngeri suyu çekince şişer, sıkınca küçülür. Sünger nasıl bir maddedir?', 'Esnek', ['Kırılgan', 'Sert', 'Pürüzsüz', 'Esnek'], '', { gorsel: nesne('sunger') });
  e('mo-t15', 'Hande cevizi kırmak için çekiç kullandı çünkü ceviz kabuğu çok ... .', 'Sertti', ['Esnekti', 'Sertti', 'Yumuşaktı', 'Pürüzsüzdü'], '', { gorsel: nesne('ceviz') });
  e('mo-t16', "Yusuf'un telefonu yere düşünce çatladı. Çünkü ekran ... .", 'Kırılgandır', ['Esnektir', 'Kırılgandır', 'Pürüzlüdür', 'Yumuşaktır'], '', { gorsel: nesne('telefon') });
  e('mo-t17', "Can kedi yavrusunu severken tüylerinin ne kadar ... olduğunu fark etti.", 'Yumuşak', ['Sert', 'Kırılgan', 'Pürüzlü', 'Yumuşak'], '', { gorsel: nesne('kedi') });
  e('mo-t18', 'Ağacın gövdesine dokunduğumuzda elimize pütürler gelir. Bu onun ... olduğunu gösterir.', 'Pürüzlü', ['Pürüzsüz', 'Pürüzlü', 'Esnek', 'Yumuşak'], '', { gorsel: nesne('agac') });
  e('mo-t19', "Mehmet'in gözleri kapalı. Önündeki cismin top mu kitap mı olduğunu nasıl anlayabilir?", 'Dokunarak', ['Koklayarak', 'Dinleyerek', 'Tadarak', 'Dokunarak'], 'Gözler kapalıyken dokunma duyumunu kullanırız!', { gorsel: nesne('goz-kapali'), sasirtma: true });
  e('mo-t20', 'Hangisi kırılgan bir madde değildir?', 'Plastik top', ['Cam bardak', 'Porselen tabak', 'Plastik top', 'Cam şişe'], '', { gorsel: grup(['cam', 'top'], 'top') });
  e('mo-t21', 'Tükenmez kalemin içindeki küçük yay nasıl bir maddedir?', 'Esnek', ['Kırılgan', 'Yumuşak', 'Pürüzsüz', 'Esnek'], '', { gorsel: nesne('kalem') });
  e('mo-t22', "Çileğin kırmızı olduğunu ..., tatlı olduğunu ... anlarız.", 'Gözümüzle - Dilimizle', ['Gözümüzle - Burnumuzla', 'Dilimizle - Kulaklarımızla', 'Burnumuzla - Gözümüzle', 'Gözümüzle - Dilimizle'], '', { gorsel: nesne('cilek') });
  e('mo-t23', 'Taş ve pamuk için hangisi doğrudur?', 'Taş sert, pamuk yumuşaktır', ['İkisi de serttir', 'İkisi de yumuşaktır', 'Taş esnek, pamuk kırılgandır', 'Taş sert, pamuk yumuşaktır'], '', { gorsel: grup(['tas', 'pamuk'], ['tas', 'pamuk']) });
  e('mo-t24', 'Çayın sıcak olduğunu anladığımız duyumuz hangisidir?', 'Dokunma', ['Görme', 'Tatma', 'İşitme', 'Dokunma'], '', { gorsel: nesne('cay') });
  e('mo-t25', 'Islak bir sabun elimizdeyken kolayca kayar. Bu onun nasıl bir yüzeye sahip olduğunu gösterir?', 'Pürüzsüz', ['Pürüzlü', 'Sert', 'Esnek', 'Pürüzsüz'], '', { gorsel: nesne('sabun') });
  return s;
}

// ─── Kuvvet ve Hareket ──────────────────────────────────────────────────────

function kuvvetVeHareketAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.KH };
  boslukEkle(s, 'kh-a1', 'Market arabasını ileri hareket ettirmek için ......... kuvveti uygularız.', 'itme', '', { gorsel: nesne('market-arabasi'), ...k });
  boslukEkle(s, 'kh-a2', 'Çekmeceyi açmak için ......... kuvveti kullanırız.', 'çekme', '', { gorsel: nesne('cekmece'), ...k });
  boslukEkle(s, 'kh-a3', 'Bisikleti durdurmak için frene bastığımızda bisiklet ......... yapar.', 'yavaşlama', '', {
    gorsel: nesne('bisiklet'),
    alternatifCevaplar: ['durma', 'yavaşlar', 'durur', 'yavaşlama/durma'],
    ...k,
  });
  dyEkle(s, 'kh-a4', 'Salıncağı ileriye göndermek için arkasından itme kuvveti uygularız.', 'Doğru', '', { gorsel: nesne('salincak'), ...k });
  dyEkle(s, 'kh-a5', 'Halat çekme oyununda çocuklar halatı ileri doğru iterler.', 'Yanlış', '', { gorsel: nesne('halat'), ...k });
  boslukEkle(s, 'kh-a6', 'Pinpon topuna raketimizle vurduğumuzda topun ......... değiştiririz.', 'yönünü', '', { gorsel: nesne('raket'), alternatifCevaplar: ['yön'], ...k });
  boslukEkle(s, 'kh-a7', 'Lunaparktaki dönme dolabın yaptığı hareket ......... hareketidir.', 'dönme', '', { gorsel: nesne('donme-dolap'), ...k });
  boslukEkle(s, 'kh-a8', 'Bebek arabasını kendimize doğru yaklaştırmak istiyorsak onu ......... .', 'çekeriz', '', { gorsel: nesne('bebek-arabasi'), alternatifCevaplar: ['çekme'], ...k });
  dyEkle(s, 'kh-a9', 'Rüzgar, rüzgargülüne çarparak ona dönme hareketi yaptırır.', 'Doğru', '', { gorsel: nesne('ruzgar-gulu'), ...k });
  dyEkle(s, 'kh-a10', 'Yerde duran bir top biz kuvvet uygulamadan kendi kendine zıplayabilir.', 'Yanlış', '', { gorsel: nesne('top'), ...k });
  boslukEkle(s, 'kh-a11', 'Yokuş aşağı serbest bırakılan oyuncak araba gittikçe ......... .', 'hızlanır', '', { gorsel: nesne('araba'), ...k });
  boslukEkle(s, 'kh-a12', 'Zile basarken düğmeye ......... kuvveti uygularız.', 'itme', '', { gorsel: nesne('zil'), ...k });
  boslukEkle(s, 'kh-a13', 'Fişi prizden çıkarmak için ......... kuvveti uygularız.', 'çekme', '', { gorsel: nesne('fis'), ...k });
  dyEkle(s, 'kh-a14', 'Okul otobüsü okula yaklaştığında hızlanma hareketi yapar.', 'Yanlış', '', { gorsel: nesne('otobus'), ...k });
  boslukEkle(s, 'kh-a15', 'Uçurtmanın ipini kendimize doğru ......... .', 'çekeriz', '', { gorsel: nesne('ucurtma'), alternatifCevaplar: ['çekme'], ...k });
  dyEkle(s, 'kh-a16', 'Çekiçle çivi çakarken çiviye itme kuvveti uygularız.', 'Doğru', '', { gorsel: nesne('cekic'), ...k });
  boslukEkle(s, 'kh-a17', 'Çorabımızı giyerken onu yukarıya doğru ......... .', 'çekeriz', '', { gorsel: nesne('corap'), alternatifCevaplar: ['çekme'], ...k });
  boslukEkle(s, 'kh-a18', 'Mıknatıs demir ataşlara ......... kuvveti uygular.', 'çekme', '', { gorsel: nesne('miknatis'), ...k });
  boslukEkle(s, 'kh-a19', 'Gelen topu karşıya gönderen çocuk topa ......... kuvveti uygulamıştır.', 'itme', '', { gorsel: nesne('voleybol'), ...k });
  boslukEkle(s, 'kh-a20', 'Duvara çarpıp geri gelen top ......... değiştirmiştir.', 'yön', '', { gorsel: nesne('top'), alternatifCevaplar: ['yönünü'], ...k });
  boslukEkle(s, 'kh-a21', 'Duvar saatindeki yelkovan ve akrep sürekli ......... hareketi yapar.', 'dönme', '', { gorsel: nesne('saat'), ...k });
  dyEkle(s, 'kh-a22', 'Gözlüğü takarken yüzümüze doğru itme kuvvetiyle yerleştiririz.', 'Doğru', '', { gorsel: nesne('gozluk'), ...k });
  boslukEkle(s, 'kh-a23', 'Tekerlekli valizi arkamızdan götürürken ona ......... kuvveti uygularız.', 'çekme', '', { gorsel: nesne('valiz'), ...k });
  dyEkle(s, 'kh-a24', 'Fırıldağa üflediğimizde fırıldak yavaşlar.', 'Yanlış', '', { gorsel: nesne('firildak'), ...k });
  boslukEkle(s, 'kh-a25', 'Trafik lambası yeşil yandığında arabalar ......... yapmaya başlar.', 'hızlanma', '', { gorsel: nesne('trafik-isigi'), alternatifCevaplar: ['hızlanır'], ...k });
  return s;
}

function kuvvetVeHareketTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.KH };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('kh-t1', 'Ayşe sepeti kendinden uzaklaştırarak hareket ettirdi. Hangi kuvveti uyguladı?', 'İtme', ['Döndürme', 'İtme', 'Çekme', 'Yavaşlatma'], '', { gorsel: nesne('market-arabasi') });
  e('kh-t2', 'Yusuf fişi prizden çıkardı. Hangi kuvveti uyguladı?', 'Çekme', ['Çekme', 'İtme', 'Dönme', 'Hızlandırma'], '', { gorsel: nesne('fis') });
  e('kh-t3', 'Yokuş aşağı giden bisiklet kendi kendine hangi hareketi yapar?', 'Hızlanma', ['Durma', 'Dönme', 'Yavaşlama', 'Hızlanma'], '', { gorsel: nesne('bisiklet') });
  e('kh-t4', 'Şoför frenine basarak hangi hareketi yaptı?', 'Yavaşlama ve durma', ['Yavaşlama ve durma', 'Hızlanma', 'Dönme', 'Yön değiştirme'], '', { gorsel: nesne('araba') });
  e('kh-t5', "Can'ın topu çembere çarpıp geri döndü. Çemberle çarpışınca ne oldu?", 'Yön değiştirdi', ['Hızlandı', 'Yavaşladı', 'Yön değiştirdi', 'Döndü'], '', { gorsel: nesne('basketbol') });
  e('kh-t6', 'Masadaki kitabı kendimize yaklaştırmak için ne yapmalıyız?', 'Çekmeliyiz', ['İtmeliyiz', 'Çekmeliyiz', 'Döndürmeliyiz', 'Durdurmalıyız'], '', { gorsel: nesne('kitap') });
  e('kh-t7', 'Hande salıncağı ileriye gönderiyor. Ne uyguluyor?', 'İtme kuvveti', ['İtme kuvveti', 'Çekme kuvveti', 'Durdurucu kuvvet', 'Döndürme kuvveti'], '', { gorsel: nesne('salincak') });
  e('kh-t8', 'Ali uçurtmanın uçmaması için ipe hangi kuvveti uyguluyor?', 'Çekme', ['İtme', 'Çekme', 'Yavaşlatma', 'Döndürme'], '', { gorsel: nesne('ucurtma') });
  e('kh-t9', 'Virajlı yolda okul servisi ne yapmak zorundadır?', 'Yön değiştirme', ['Yön değiştirme', 'Hızlanma', 'Çekme', 'Dönme'], '', { gorsel: nesne('otobus') });
  e('kh-t10', 'Direksiyonu sağa sola çevirdiğimizde direksiyonun hareketi nedir?', 'Dönme', ['Hızlanma', 'Dönme', 'Çekme', 'İtme'], '', { gorsel: nesne('direksiyon') });
  e('kh-t11', 'Top havaya fırlatılınca en tepeye ulaşana kadar nasıl hareket eder?', 'Giderek yavaşlar', ['Giderek yavaşlar', 'Giderek hızlanır', 'Yön değiştirir', 'Döner'], '', { gorsel: nesne('top') });
  e('kh-t12', 'Kaleci Mehmet topu elleriyle tuttu. Topun hareketini ne yaptı?', 'Durdurdu', ['Hızlandırdı', 'Yön değiştirdi', 'Durdurdu', 'Döndürdü'], '', { gorsel: nesne('kaleci') });
  e('kh-t13', 'Rüzgargülünün hareketi nedir?', 'Dönme', ['Hızlanma', 'Yavaşlama', 'Dönme', 'Çekme'], '', { gorsel: nesne('ruzgar-gulu') });
  e('kh-t14', 'Montumuzun fermuarını kapatmak için yukarı doğru ne yaparız?', 'Çekeriz', ['Çekeriz', 'İteriz', 'Döndürürüz', 'Sıkıştırırız'], '', { gorsel: nesne('mont') });
  e('kh-t15', 'Fatma buzdolabı kapağını açtı. Kapağa hangi kuvveti uyguladı?', 'Çekme', ['İtme', 'Yavaşlatma', 'Dönme', 'Çekme'], '', { gorsel: nesne('buzdolabi') });
  e('kh-t16', 'Limona sıkarken hangi kuvveti uygularız?', 'İtme (Bastırma)', ['Çekme', 'İtme (Bastırma)', 'Döndürme', 'Hızlandırma'], '', { gorsel: nesne('limon') });
  e('kh-t17', 'Şemsiyeyi açarken sapı yukarı iteriz. Hangi kuvveti kullanırız?', 'İtme', ['Çekme', 'İtme', 'Durdurma', 'Yavaşlatma'], '', { gorsel: nesne('semsiye') });
  e('kh-t18', 'Dalından kopan yaprak yere inerken hangi hareketi yapar?', 'Hızlanma', ['Hızlanma', 'Durma', 'Çekme', 'Yukarı yön değiştirme'], '', { gorsel: nesne('yaprak') });
  e('kh-t19', 'Ali masayı duvara doğru uzaklaştırmak için ne uygular?', 'İtme', ['Çekme', 'İtme', 'Dönme', 'Sallama'], '', { gorsel: nesne('masa') });
  e('kh-t20', 'Süpürgeyi hem ileri ... hem geri ... . Boşluklara ne gelir?', 'İter - Çeker', ['İter - Çeker', 'Çeker - İter', 'Döndürür - İter', 'İter - Döndürür'], '', { gorsel: nesne('supurge') });
  e('kh-t21', 'Bağcıkları sıkıca bağlamak için ipleri kendimize doğru ne yaparız?', 'Çekeriz', ['Çekeriz', 'İteriz', 'Döndürürüz', 'Yavaşlatırız'], '', { gorsel: nesne('ayakkabi') });
  e('kh-t22', 'Pili biten treni hareket ettirmek için parmağımızla hangi kuvveti uygularız?', 'İtme', ['Çekme', 'Durdurma', 'İtme', 'Dönme'], '', { gorsel: nesne('tren') });
  e('kh-t23', 'Masa tenisinde top masaya çarptığında ne yapar?', 'Yön değiştirir', ['Yavaşlar', 'Durur', 'Yön değiştirir', 'Döner'], '', { gorsel: nesne('masa-tenisi') });
  e('kh-t24', 'Küreği toprağa batıran Zeynep, küreğe ayağıyla hangi kuvveti uygular?', 'İtme', ['Çekme', 'Döndürme', 'Yavaşlatma', 'İtme'], '', { gorsel: nesne('kurek') });
  e('kh-t25', 'Marangoz testereyi ileri iter ve kendine çeker. Hangi kuvvetleri kullanmış olur?', 'İtme ve çekme', ['Sadece itme', 'İtme ve çekme', 'Sadece çekme', 'Yalnızca döndürme'], '', { gorsel: nesne('testere') });
  return s;
}

// ─── Işık ve Ses ────────────────────────────────────────────────────────────

function isikVeSesAlistirma() {
  const s = [];
  const k = { kazanim: KAZANIM.IS };
  boslukEkle(s, 'is-a1', 'Karanlık odada nesneleri görmek için ......... ihtiyacımız vardır.', 'ışığa', '', { gorsel: nesne('goz'), alternatifCevaplar: ['ışık'], ...k });
  boslukEkle(s, 'is-a2', 'Dünyamızı aydınlatan en büyük doğal ışık kaynağımız ......... .', "Güneş'tir", '', { gorsel: nesne('gunes'), alternatifCevaplar: ['Güneş', 'güneş', 'güneştir'], ...k });
  boslukEkle(s, 'is-a3', 'El feneri ......... bir ışık kaynağıdır.', 'yapay', '', { gorsel: nesne('el-feneri'), ...k });
  dyEkle(s, 'is-a4', 'Ay, tıpkı Güneş gibi doğal bir ışık kaynağıdır.', 'Yanlış', '', { gorsel: nesne('ay'), ...k });
  boslukEkle(s, 'is-a5', 'Ateş böceği ......... ışık kaynağıdır.', 'doğal', '', { gorsel: nesne('ates-bocegi'), ...k });
  dyEkle(s, 'is-a6', 'Masa lambası yapay bir ışık kaynağıdır.', 'Doğru', '', { gorsel: nesne('masa-lambasi'), ...k });
  dyEkle(s, 'is-a7', 'Ayna kendi başına ışık kaynağı değildir, sadece ışığı yansıtır.', 'Doğru', '', { gorsel: nesne('ayna'), ...k });
  boslukEkle(s, 'is-a8', 'Sesleri duyabilmek için ......... organımızı kullanırız.', 'kulak', '', { gorsel: nesne('kulak'), ...k });
  boslukEkle(s, 'is-a9', 'Kuşun sesi ......... ses kaynağıdır.', 'doğal', '', { gorsel: nesne('kus'), ...k });
  boslukEkle(s, 'is-a10', 'Piyano ......... bir ses kaynağıdır.', 'yapay', '', { gorsel: nesne('piyano'), ...k });
  dyEkle(s, 'is-a11', 'Gök gürültüsü yapay bir sestir.', 'Yanlış', '', { gorsel: nesne('simsek'), ...k });
  boslukEkle(s, 'is-a12', 'Çalan cep telefonu ......... ses kaynağıdır.', 'yapay', '', { gorsel: nesne('telefon'), ...k });
  dyEkle(s, 'is-a13', 'Trafik lambaları doğal ışık kaynaklarıdır.', 'Yanlış', '', { gorsel: nesne('trafik-isigi'), ...k });
  boslukEkle(s, 'is-a14', 'Gökyüzündeki yıldızlar ......... ışık kaynaklarıdır.', 'doğal', '', { gorsel: nesne('yildiz'), ...k });
  boslukEkle(s, 'is-a15', 'Şelalenin su sesi ......... ses kaynağıdır.', 'doğal', '', { gorsel: nesne('selale'), ...k });
  dyEkle(s, 'is-a16', 'Arabaların korna sesi yapay bir sestir.', 'Doğru', '', { gorsel: nesne('korna'), ...k });
  boslukEkle(s, 'is-a17', 'Öğrencinin sesi ......... ses kaynağıdır.', 'doğal', '', { gorsel: nesne('cocuk'), ...k });
  boslukEkle(s, 'is-a18', 'Sokak lambaları ......... ışık kaynaklarıdır.', 'yapay', '', { gorsel: nesne('sokak-lambasi'), ...k });
  boslukEkle(s, 'is-a19', 'Ambulansın sireni ......... ses kaynağıdır.', 'yapay', '', { gorsel: nesne('ambulans'), ...k });
  boslukEkle(s, 'is-a20', 'İnsanların yaktığı kamp ateşi ......... ışık kaynağıdır.', 'yapay', '', { gorsel: nesne('kamp-atesi'), ...k });
  dyEkle(s, 'is-a21', 'Kedinin miyavlaması doğal bir ses kaynağıdır.', 'Doğru', '', { gorsel: nesne('kedi'), ...k });
  dyEkle(s, 'is-a22', 'Sönük duran ampul o anda ışık kaynağı görevini yapar.', 'Yanlış', '', { gorsel: nesne('ampul'), ...k });
  boslukEkle(s, 'is-a23', 'Gitarın telleri titreşerek ......... üretir.', 'ses', '', { gorsel: nesne('gitar'), ...k });
  boslukEkle(s, 'is-a24', 'Deniz dalgalarının sesi ......... ses kaynağıdır.', 'doğal', '', { gorsel: nesne('deniz'), ...k });
  boslukEkle(s, 'is-a25', 'Kitap okumak için ortamda ......... olmalıdır.', 'ışık', '', { gorsel: nesne('kitap'), ...k });
  return s;
}

function isikVeSesTest(karistir) {
  const s = [];
  const k = { kazanim: KAZANIM.IS };
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, { ...k, ...extra });
  e('is-t1', 'Ali karanlık odada oyuncağını görmek istiyor. Neye ihtiyacı var?', 'Işığa', ['Daha iyi gözlüğe', 'Işığa', 'Müzik sesine', 'Büyütece'], '', { gorsel: nesne('karanlik-oda') });
  e('is-t2', 'En büyük doğal ışık kaynağımız hangisidir?', 'Güneş', ['El feneri', 'Sokak lambası', 'Güneş', 'Yıldızlar'], '', { gorsel: nesne('gunes') });
  e('is-t3', 'Ay hakkında hangi bilgi doğrudur?', 'Kendi ışığı yok, Güneş\'i yansıtır', ['En büyük doğal ışık kaynağı', 'İnsanlar yaptı', 'Kendi ışığı yok, Güneş\'i yansıtır', 'Dünyayı ısıtır'], '', { gorsel: nesne('ay') });
  e('is-t4', 'Evdeki ampul hangi gruba girer?', 'Yapay ışık kaynağı', ['Doğal ışık kaynağı', 'Yapay ışık kaynağı', 'Doğal ses kaynağı', 'Yapay ses kaynağı'], '', { gorsel: nesne('ampul') });
  e('is-t5', 'Ateş böceği ne tür bir kaynaktır?', 'Doğal ışık kaynağı', ['Yapay ışık kaynağı', 'Doğal ses kaynağı', 'Doğal ışık kaynağı', 'Işık kaynağı değildir'], '', { gorsel: nesne('ates-bocegi') });
  e('is-t6', 'Üzerine fener tutulunca parlayan ayna ışık kaynağı mıdır?', 'Hayır, sadece yansıtır', ['Evet, doğal', 'Hayır, sadece yansıtır', 'Evet, yapay', 'Hem ses hem ışık'], '', { gorsel: nesne('ayna') });
  e('is-t7', 'Trafik lambaları ne tür kaynaktır?', 'Yapay ışık kaynağı', ['Doğal ışık kaynağı', 'Yapay ışık kaynağı', 'Doğal ses kaynağı', 'Güneş yansıtıcısı'], '', { gorsel: nesne('trafik-isigi') });
  e('is-t8', 'Deniz feneri hangi gruba girer?', 'Yapay ışık kaynağı', ['Yapay ışık kaynağı', 'Doğal ışık kaynağı', 'Yapay ses kaynağı', 'Doğal ses kaynağı'], '', { gorsel: nesne('deniz-feneri') });
  e('is-t9', 'Nehrin su sesi ne tür kaynaktır?', 'Doğal ses kaynağı', ['Yapay ses kaynağı', 'Yapay ışık kaynağı', 'Doğal ses kaynağı', 'Doğal ışık kaynağı'], '', { gorsel: nesne('nehir') });
  e('is-t10', "Selin'in flütü ne tür ses kaynağıdır?", 'Yapay ses kaynağı', ['Doğal ses kaynağı', 'Yapay ses kaynağı', 'Yapay ışık kaynağı', 'Doğal ışık kaynağı'], '', { gorsel: nesne('flut') });
  e('is-t11', 'Horozun sesi nedir?', 'Doğal ses', ['Yapay ses', 'Yapay ışık', 'Doğal ses', 'Doğal ışık'], '', { gorsel: nesne('horoz') });
  e('is-t12', 'Çalar saatin sesi nasıldır?', 'Yapay ses', ['Yapay ses', 'Doğal ses', 'Doğal ışık', 'Yapay ışık'], '', { gorsel: nesne('saat') });
  e('is-t13', 'Yağmur damlalarının çıkardığı ses hangi gruba aittir?', 'Doğal ses kaynağı', ['İnsan yapımı', 'Yapay ses', 'Doğal ses kaynağı', 'Yansıtıcı'], '', { gorsel: nesne('yagmur') });
  e('is-t14', 'Okul zilinin sesi hangi tür kaynaktır?', 'Yapay ses kaynağı', ['Doğal ses kaynağı', 'Yapay ses kaynağı', 'Doğal ışık kaynağı', 'Yıldız ışığı'], '', { gorsel: nesne('zil') });
  e('is-t15', 'Gökyüzündeki yıldızlar ne tür kaynaktır?', 'Doğal ışık kaynağı', ['Yapay ışık kaynağı', 'Işık yansıtıcısı', 'Doğal ışık kaynağı', 'Yapay ses kaynağı'], '', { gorsel: nesne('yildiz') });
  e('is-t16', 'Televizyondan gelen sesler hangi gruba girer?', 'Yapay ses kaynağı', ['Yapay ses kaynağı', 'Doğal ses kaynağı', 'Doğal ışık kaynağı', 'Sessiz kaynak'], '', { gorsel: nesne('televizyon') });
  e('is-t17', 'Annemizin sesi hangi türe örnektir?', 'Doğal ses kaynağı', ['Yapay ses kaynağı', 'Doğal ses kaynağı', 'Yankı kaynağı', 'Mekanik ses'], '', { gorsel: nesne('anne') });
  e('is-t18', 'Hangisinde doğal ses + yapay ışık yan yana verilmiştir?', 'Rüzgar sesi - Yanan Mum', ['Kuş sesi - Güneş', 'Rüzgar sesi - Yanan Mum', 'Radyo sesi - Yıldız', 'Araba kornası - El feneri'], '', { gorsel: grup(['ruzgar', 'mum'], ['ruzgar', 'mum']) });
  e('is-t19', 'Şimşek ne tür kaynaktır?', 'Doğal ışık kaynağı', ['Doğal ışık kaynağı', 'Yapay ışık kaynağı', 'Sadece ses', 'Yapay ses'], '', { gorsel: nesne('simsek') });
  e('is-t20', 'Vitrendeki yüzük ışık kaynağı mıdır?', 'Hayır, sadece yansıtır', ['Evet, doğal', 'Hayır, sadece yansıtır', 'Evet, yapay', 'Kendi üretir'], '', { gorsel: nesne('yuzuk') });
  e('is-t21', 'Arkadaşımızın şiirini duymamızı sağlayan organ hangisidir?', 'Kulağımız', ['Gözümüz', 'Kulağımız', 'Burnumuz', 'Dilimiz'], '', { gorsel: nesne('kulak') });
  e('is-t22', 'Trenin düdük sesi ne tür kaynaktan gelir?', 'Yapay ses kaynağı', ['Doğal ses kaynağı', 'Yapay ses kaynağı', 'Doğal ışık kaynağı', 'Güneş ışığı'], '', { gorsel: nesne('tren') });
  e('is-t23', 'İnsanların yaktığı meşale ne tür ışık kaynağıdır?', 'Yapay ışık kaynağı', ['Doğal ışık kaynağı', 'Yapay ışık kaynağı', 'Yapay ses kaynağı', 'Doğal ses kaynağı'], '', { gorsel: nesne('mesale') });
  e('is-t24', 'Aslanın sesi hangi ses sınıfına girer?', 'Doğal ses kaynağı', ['Yapay ses kaynağı', 'Doğal ses kaynağı', 'İnsan yapımı', 'Teknoloji sesi'], '', { gorsel: nesne('aslan') });
  e('is-t25', 'Henüz yakılmamış mum ışık kaynağı mıdır?', 'Hayır, ışık yaymadığı için o an değildir', ['Evet, yapay', 'Hayır, ışık yaymadığı için o an değildir', 'Evet, doğal', 'Işığı yansıtır'], '', { gorsel: nesne('mum') });
  return s;
}

// ─── Export ─────────────────────────────────────────────────────────────────

export function maddeVeOzellikleri(karistir) {
  return {
    id: 'madde-ve-ozellikleri',
    baslik: 'Madde ve Özellikleri',
    kazanimKodu: KAZANIM.MO,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Ayşe ve Berk parkta oyun oynuyorlardı. Beş duyumuz dünyadaki her maddeyi tanımamızı sağlayan sihirli dedektiflerimizdir: görme, işitme, koklama, tatma ve dokunma.',
          gorsel: anl('mo-anlatim-1'),
        },
        {
          metin:
            'Bazı maddeler yumuşak (oyuncak ayı), bazıları serttir (tahta blok). Maddelerin farklı özellikleri vardır.',
          gorsel: anl('mo-anlatim-2'),
        },
        {
          metin:
            'Lastik esnektir, cam kırılgandır. Zımpara pürüzlü, ayna pürüzsüzdür. Dünyamız ne kadar farklı özellikle dolu!',
          gorsel: anl('mo-anlatim-3'),
        },
      ],
    },
    alistirma: maddeVeOzellikleriAlistirma(),
    test: maddeVeOzellikleriTest(karistir),
  };
}

export function kuvvetVeHareket(karistir) {
  return {
    id: 'kuvvet-ve-hareket',
    baslik: 'Kuvvet ve Hareket',
    kazanimKodu: KAZANIM.KH,
    anlatim: {
      ekranlar: [
        {
          metin:
            'İleriye hareket için itme, kendimize doğru hareket için çekme kuvveti uygularız. Oyuncak kamyonu itince ilerler, çekince bize doğru gelir.',
          gorsel: anl('kh-anlatim-1'),
        },
        {
          metin:
            'Bisikletin pedallarını çevirdikçe hızlanır. Fren yapınca yavaşlar ve durur. Kuvvet hareketlileri de yavaşlatıp durdurabilir!',
          gorsel: anl('kh-anlatim-2'),
        },
        {
          metin:
            'Topa yan dokununca yön değiştirir. Hareket eden cisme kuvvet uyguladığımızda yönünü değiştirebiliriz.',
          gorsel: anl('kh-anlatim-3'),
        },
      ],
    },
    alistirma: kuvvetVeHareketAlistirma(),
    test: kuvvetVeHareketTest(karistir),
  };
}

export function isikVeSes(karistir) {
  return {
    id: 'isik-ve-ses',
    baslik: 'Işık ve Ses',
    kazanimKodu: KAZANIM.IS,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Görmek için ışığa ihtiyacımız vardır. Hava karardığında renkleri seçemeyiz; lamba yanınca her şey tekrar görünür.',
          gorsel: anl('is-anlatim-1'),
        },
        {
          metin:
            'Güneş en büyük doğal ışık kaynağıdır. Kamp feneri yapay ışıktır. Ay ise kendi ışığı olmayan, Güneş\'i yansıtan bir gök cismidir.',
          gorsel: anl('is-anlatim-2'),
        },
        {
          metin:
            'Ormandaki kuş sesi doğal, piyano sesi yapaydır. Her sesin bir kaynağı vardır ve biz kulaklarımızla duyarız.',
          gorsel: anl('is-anlatim-3'),
        },
      ],
    },
    alistirma: isikVeSesAlistirma(),
    test: isikVeSesTest(karistir),
  };
}
