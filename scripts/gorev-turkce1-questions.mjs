/** GOREV-TURKCE1 — Sesler ve Heceler, Kelime Bilgisi, Okuma Anlama, Cümle Bilgisi, Noktalama ve Yazım (238 soru). */

const KAZANIM = {
  SH: 'TUR.2.1.1',
  KB: 'TUR.2.1.2',
  OA: 'TUR.2.1.3',
  CB: 'TUR.2.1.4',
  NW: 'TUR.2.1.5',
};

function hece(kelime, heceler, nesne) { return { tur:'turkce', mod:'hece', kelime, heceler, nesne }; }
function nesne(kelime, nesne, vurgu) { return { tur:'turkce', mod:'nesne', kelime, nesne, vurgu }; }
function harf(sahne, harfler, vurgu) { return { tur:'turkce', mod:'harf', sahne, harfler, vurgu }; }
function sahne(sahne, nesne) { return { tur:'turkce', mod:'sahne', sahne, nesne }; }
function kars(kelimeler, iliski) { return { tur:'turkce', mod:'karsilastir', kelimeler, iliski }; }
function cumle(metin, opts={}) { return { tur:'turkce', mod:'cumle', metin, ...opts }; }
function nokta(isaret) { return { tur:'turkce', mod:'noktalama', isaret }; }
function kart(harfler) { return { tur:'turkce', mod:'kart', harfler }; }
function anl(sahne) { return { tur:'turkce', mod:'anlatim', sahne }; }

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function seslerVeHecelerAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SH,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("sh-a1", "\"elma\" kelimesinde kaç sesli harf var?", "2 (e, a)", '', { gorsel: nesne("elma", "elma", 'sesli'), cevapTipi: "metin" });
  ekle("sh-a2", "\"araba\" kelimesi kaç heceli?", "3 (a-ra-ba)", '', { gorsel: hece('araba', ['a', 'ra', 'ba'], 'araba'), cevapTipi: "metin" });
  ekle("sh-a3", "\"okul\" kelimesini hecele", "o-kul", '', { gorsel: hece('okul', ['o', 'kul'], 'okul'), cevapTipi: "metin" });
  ekle("sh-a4", "\"kedi\" kelimesinde kaç sessiz harf var?", "2 (k, d)", '', { gorsel: nesne("kedi", "kedi", 'sessiz'), cevapTipi: "metin" });
  ekle("sh-a5", "\"çiçek\" kaç heceli?", "2 (çi-çek)", '', { gorsel: hece('çiçek', ['çi', 'çek'], 'cicek'), cevapTipi: "metin" });
  ekle("sh-a6", "Sesli harfleri say: \"kitap\"", "2 (i, a)", '', { gorsel: nesne("kitap", "kitap", 'sesli'), cevapTipi: "metin" });
  ekle("sh-a7", "\"defter\" kelimesini hecele", "def-ter", '', { gorsel: hece('defter', ['def', 'ter'], 'kitap'), cevapTipi: "metin" });
  ekle("sh-a8", "\"anne\" kaç heceli?", "2 (an-ne)", '', { gorsel: hece('anne', ['an', 'ne'], 'cocuk'), cevapTipi: "metin" });
  ekle("sh-a9", "\"kalem\" kelimesinde kaç sesli harf?", "2 (a, e)", '', { gorsel: nesne("kalem", "kalem", 'sesli'), cevapTipi: "metin" });
  ekle("sh-a10", "\"sincap\" kelimesini hecele", "sin-cap", '', { gorsel: hece('sincap', ['sin', 'cap'], 'kus'), cevapTipi: "metin" });
  ekle("sh-a11", "\"tavşan\" kaç heceli?", "2 (tav-şan)", '', { gorsel: hece('tavşan', ['tav', 'şan'], 'kus'), cevapTipi: "metin" });
  ekle("sh-a12", "\"uçak\" kelimesinde sesli harfler hangileri?", "u, a", '', { gorsel: nesne("uçak", "ucak", 'sesli'), cevapTipi: "metin" });
  ekle("sh-a13", "\"köpek\" kelimesini hecele", "kö-pek", '', { gorsel: hece('köpek', ['kö', 'pek'], 'kopek'), cevapTipi: "metin" });
  ekle("sh-a14", "\"merdiven\" kaç heceli?", "3 (mer-di-ven)", '', { gorsel: hece('merdiven', ['mer', 'di', 'ven'], 'okul'), cevapTipi: "metin" });
  ekle("sh-a15", "\"balkon\" kelimesinde kaç sesli harf?", "2 (a, o)", '', { gorsel: nesne("balkon", "balkon", 'sesli'), cevapTipi: "metin" });
  ekle("sh-a16", "\"pencere\" kelimesini hecele", "pen-ce-re", '', { gorsel: hece('pencere', ['pen', 'ce', 're'], 'okul'), cevapTipi: "metin" });
  ekle("sh-a17", "\"çanta\" kaç heceli?", "2 (çan-ta)", '', { gorsel: hece('çanta', ['çan', 'ta'], 'canta'), cevapTipi: "metin" });
  ekle("sh-a18", "Türkçede kaç sesli harf vardır?", "8", '', { gorsel: kart(['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']) });
  ekle("sh-a19", "\"televizyon\" kaç heceli?", "4 (te-le-viz-yon)", '', { gorsel: hece('televizyon', ['te', 'le', 'viz', 'yon'], 'okul'), cevapTipi: "metin" });
  ekle("sh-a20", "\"masa\" kelimesini hecele", "ma-sa", '', { gorsel: hece('masa', ['ma', 'sa'], 'masa'), cevapTipi: "metin" });
  ekle("sh-a21", "\"ördek\" kelimesinde sesli harfler hangileri?", "ö, e", '', { gorsel: nesne("ördek", "ordek", 'sesli'), cevapTipi: "metin" });
  ekle("sh-a22", "\"bilgisayar\" kaç heceli?", "4 (bil-gi-sa-yar)", '', { gorsel: hece('bilgisayar', ['bil', 'gi', 'sa', 'yar'], 'okul'), cevapTipi: "metin" });
  ekle("sh-a23", "\"ev\" kelimesi kaç heceli?", "1 (tek hece)", '', { gorsel: hece('ev', ['ev'], 'ev'), cevapTipi: "metin" });
  ekle("sh-a24", "\"kuş\" kaç heceli?", "1", '', { gorsel: hece('kuş', ['kuş'], 'kus') });
  ekle("sh-a25", "\"çikolata\" kelimesini hecele", "çi-ko-la-ta", '', { gorsel: hece('çikolata', ['çi', 'ko', 'la', 'ta'], 'cikolata'), cevapTipi: "metin" });

  return sorular;
}

function seslerVeHecelerTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.SH,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("sh-t1", "Türkçede kaç sesli harf vardır?", "8", ["6", "10", "8", "7"], "", { gorsel: kart(['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']) });
  ekle("sh-t2", "\"elma\" kelimesi kaç heceli?", "2", ["1", "3", "2", "4"], "", { gorsel: hece('elma', ['el', 'ma'], 'elma') });
  ekle("sh-t3", "Aşağıdakilerden hangisi sesli harftir?", "ö", ["k", "t", "ö", "s"], "", { gorsel: kart(['k', 't', 'ö', 's']) });
  ekle("sh-t4", "\"defter\" kelimesini doğru heceleyen hangisi?", "def-ter", ["de-ft-er", "def-ter", "d-ef-ter", "deft-er"], "", { gorsel: hece('defter', ['def', 'ter'], 'kitap') });
  ekle("sh-t5", "\"araba\" kelimesinde kaç sesli harf var?", "3", ["2", "4", "3", "1"], "", { gorsel: nesne("araba", "araba", 'sesli') });
  ekle("sh-t6", "Kaç heceli olduğunu bul: \"merdiven\"", "3", ["2", "4", "3", "5"], "", { gorsel: hece('merdiven', ['mer', 'di', 'ven'], 'okul') });
  ekle("sh-t7", "\"kuş\" kelimesi kaç heceli?", "1", ["2", "3", "1", "4"], "", { gorsel: hece('kuş', ['kuş'], 'kus') });
  ekle("sh-t8", "Hangi kelimede sessiz harf sayısı sesli harf sayısından fazladır?", "kitap", ["anne", "ev", "araba", "kitap"], "kitap → k,t,p=3 sessiz, i,a=2 sesli", { gorsel: nesne("kitap", "kitap", 'sessiz'), sasirtma: true });
  ekle("sh-t9", "\"pencere\" kelimesini doğru heceleyen hangisi?", "pen-ce-re", ["pen-ce-re", "pe-nce-re", "penc-e-re", "p-en-cere"], "", { gorsel: hece('pencere', ['pen', 'ce', 're'], 'okul') });
  ekle("sh-t10", "Aşağıdaki kelimelerden hangisi 1 heceli?", "ev", ["elma", "masa", "ev", "kedi"], "", { gorsel: hece('elma', ['el', 'ma'], 'elma') });
  ekle("sh-t11", "\"çikolata\" kaç heceli?", "4", ["3", "5", "4", "2"], "", { gorsel: hece('çikolata', ['çi', 'ko', 'la', 'ta'], 'cikolata') });
  ekle("sh-t12", "Aşağıdaki kelimelerden hangisi 4 heceli?", "televizyon", ["araba", "defter", "televizyon", "kalem"], "", { gorsel: hece('elma', ['el', 'ma'], 'elma'), sasirtma: true });
  ekle("sh-t13", "Aşağıdakilerden hangisi sessiz harftir?", "m", ["a", "e", "m", "i"], "", { gorsel: kart(['k', 't', 'ö', 's']) });
  ekle("sh-t14", "\"okul\" kelimesini doğru heceleyen hangisi?", "o-kul", ["o-ku-l", "ok-ul", "o-kul", "oku-l"], "", { gorsel: hece('okul', ['o', 'kul'], 'okul') });
  ekle("sh-t15", "\"anne\" kelimesinde kaç sesli harf var?", "2", ["1", "3", "2", "4"], "", { gorsel: nesne("anne", "anne", 'sesli') });
  ekle("sh-t16", "Hangi kelimede her hece bir harften oluşur?", "u-çu-yor", ["araba", "elma", "a-ra-ba", "u-çu-yor"], "u, ça, yor — hayır! a-ra-ba her hece 1-2 harf", { gorsel: hece('uçuyor', ['u', 'çu', 'yor'], 'ucak'), sasirtma: true });
  ekle("sh-t17", "\"tavşan\" kelimesini doğru heceleyen hangisi?", "tav-şan", ["ta-vşan", "tav-şan", "tavş-an", "t-avşan"], "", { gorsel: hece('tavşan', ['tav', 'şan'], 'kus') });
  ekle("sh-t18", "Kaç sesli harf var: \"köpek\"", "2", ["1", "3", "2", "4"], "", { gorsel: nesne("köpek", "kopek", 'sesli') });
  ekle("sh-t19", "Hangi kelime 3 heceli?", "merdiven", ["ev", "kalem", "merdiven", "masa"], "", { gorsel: hece('elma', ['el', 'ma'], 'elma') });
  ekle("sh-t20", "\"bilgisayar\" kelimesinde kaç sesli harf var?", "4", ["3", "5", "4", "2"], "bil-gi-sa-yar → i, i, a, a = 4 sesli", { gorsel: nesne("bilgisayar", "okul", 'sesli'), sasirtma: true });
  ekle("sh-t21", "\"uçak\" kelimesini doğru heceleyen hangisi?", "uç-ak", ["u-ça-k", "uç-ak", "u-çak", "uça-k"], "", { gorsel: hece('uçak', ['uç', 'ak'], 'okul') });
  ekle("sh-t22", "Aşağıdaki sesli harflerden hangisi Türkçede yoktur?", "w", ["ü", "ö", "w", "ı"], "", { gorsel: kart(['k', 't', 'ö', 's']) });
  ekle("sh-t23", "\"çanta\" kaç heceli?", "2", ["1", "3", "2", "4"], "", { gorsel: hece('çanta', ['çan', 'ta'], 'canta') });
  ekle("sh-t24", "Bir kelimede 3 sesli harf varsa kaç heceli olur?", "3", ["2", "4", "3", "1"], "Sesli harf sayısı = hece sayısı!", { gorsel: kart(['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']), sasirtma: true });
  ekle("sh-t25", "\"çikolata\" kelimesinde sessiz harf sayısı kaçtır?", "4", ["3  B: 5", "4", "2"], "ç,k,l,t = 4 sessiz harf", { gorsel: hece('çikolata', ['çi', 'ko', 'la', 'ta'], 'cikolata'), sasirtma: true });

  return sorular;
}

function kelimeBilgisiAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.KB,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("kb-a1", "\"güzel\" kelimesinin eş anlamlısı nedir?", "hoş", '', { gorsel: sahne('guzel-cicek', 'cicek'), cevapTipi: "metin" });
  ekle("kb-a2", "\"büyük\" kelimesinin zıt anlamlısı nedir?", "küçük", '', { gorsel: kars(['büyük', 'küçük'], 'zit'), cevapTipi: "metin" });
  ekle("kb-a3", "\"hızlı\" kelimesinin eş anlamlısı nedir?", "çabuk", '', { gorsel: sahne('kosan-cocuk', 'cocuk'), cevapTipi: "metin" });
  ekle("kb-a4", "\"sıcak\" kelimesinin zıt anlamlısı nedir?", "soğuk", '', { gorsel: kars(['kar (yağış)', 'kar (kazanç)'], 'esSeslilik'), cevapTipi: "metin" });
  ekle("kb-a5", "\"mutlu\" kelimesinin zıt anlamlısı nedir?", "mutsuz/üzgün", '', { gorsel: kars(['yüz (sayı)', 'yüz (vücut)'], 'esSeslilik'), cevapTipi: "metin" });
  ekle("kb-a6", "\"yüz\" kelimesinin iki farklı anlamı nedir?", "100 sayısı ve insan yüzü", '', { gorsel: kars(['yüz (sayı)', 'yüz (vücut)'], 'esSeslilik'), cevapTipi: "metin" });
  ekle("kb-a7", "\"açık\" kelimesinin zıt anlamlısı nedir?", "kapalı", '', { gorsel: sahne('acik-kapali', 'ev'), cevapTipi: "metin" });
  ekle("kb-a8", "\"kolay\" kelimesinin zıt anlamlısı nedir?", "zor", '', { gorsel: kars(['gece', 'gündüz'], 'zit'), cevapTipi: "metin" });
  ekle("kb-a9", "\"şişman\" kelimesinin zıt anlamlısı nedir?", "zayıf/ince", '', { gorsel: kars(['büyük', 'küçük'], 'zit'), cevapTipi: "metin" });
  ekle("kb-a10", "\"ev\" anlamına gelen başka bir kelime nedir?", "konut, yuva", '', { gorsel: sahne('ev', 'ev'), cevapTipi: "metin" });
  ekle("kb-a11", "\"kar\" kelimesinin iki farklı anlamı nedir?", "beyaz yağış ve kazanç", '', { gorsel: kars(['kar (yağış)', 'kar (kazanç)'], 'esSeslilik'), cevapTipi: "metin" });
  ekle("kb-a12", "\"temiz\" kelimesinin zıt anlamlısı nedir?", "kirli", '', { gorsel: kars(['büyük', 'küçük'], 'zit'), cevapTipi: "metin" });
  ekle("kb-a13", "\"şehir\" kelimesinin eş anlamlısı nedir?", "kent", '', { gorsel: sahne('sehir', 'istanbul'), cevapTipi: "metin" });
  ekle("kb-a14", "\"gece\" kelimesinin zıt anlamlısı nedir?", "gündüz", '', { gorsel: kars(['büyük', 'küçük'], 'zit'), cevapTipi: "metin" });
  ekle("kb-a15", "\"çocuk\" kelimesinin eş anlamlısı nedir?", "evlat, yavru", '', { gorsel: sahne('kelime', 'default'), cevapTipi: "metin" });
  ekle("kb-a16", "\"uzun\" kelimesinin zıt anlamlısı nedir?", "kısa", '', { gorsel: sahne('kelime', 'default'), cevapTipi: "metin" });
  ekle("kb-a17", "\"ben\" kelimesinin iki anlamı var mı?", "Evet: \"ben\" (1. tekil kişi) ve \"ben\" (cilt lekesi)", '', { gorsel: sahne('kelime', 'default'), cevapTipi: "metin" });
  ekle("kb-a18", "\"eski\" kelimesinin zıt anlamlısı nedir?", "yeni", '', { gorsel: sahne('eski-yeni', 'araba'), cevapTipi: "metin" });
  ekle("kb-a19", "\"yardım etmek\" kelimesinin eş anlamlısı nedir?", "destek olmak", '', { gorsel: sahne('kelime', 'default'), cevapTipi: "metin" });
  ekle("kb-a20", "\"aydınlık\" kelimesinin zıt anlamlısı nedir?", "karanlık", '', { gorsel: kars(['kar (yağış)', 'kar (kazanç)'], 'esSeslilik'), cevapTipi: "metin" });
  ekle("kb-a21", "\"kır\" kelimesinin iki farklı anlamı nedir?", "doğa/tarla ve (bir şeyi) kırmak", '', { gorsel: sahne('kelime', 'default'), cevapTipi: "metin" });
  ekle("kb-a22", "\"çirkin\" kelimesinin zıt anlamlısı nedir?", "güzel", '', { gorsel: kars(['büyük', 'küçük'], 'zit'), cevapTipi: "metin" });
  ekle("kb-a23", "\"hata\" kelimesinin eş anlamlısı nedir?", "yanlış, yanılgı", '', { gorsel: sahne('hata-dogru', 'default'), cevapTipi: "metin" });
  ekle("kb-a24", "\"dolu\" kelimesinin zıt anlamlısı nedir?", "boş", '', { gorsel: sahne('dolu-bos', 'default'), cevapTipi: "metin" });
  ekle("kb-a25", "\"gül\" kelimesinin iki farklı anlamı nedir?", "çiçek türü ve gülmek eylemi", '', { gorsel: kars(['yüz (sayı)', 'yüz (vücut)'], 'esSeslilik'), cevapTipi: "metin" });

  return sorular;
}

function kelimeBilgisiTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.KB,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("kb-t1", "\"güzel\" kelimesinin eş anlamlısı hangisidir?", "hoş", ["çirkin", "hoş", "büyük", "uzun"], "", { gorsel: sahne('guzel-cicek', 'cicek') });
  ekle("kb-t2", "\"sıcak\" kelimesinin zıt anlamlısı hangisidir?", "soğuk", ["ılık", "serin", "soğuk", "donuk"], "", { gorsel: kars(['büyük', 'küçük'], 'zit') });
  ekle("kb-t3", "\"hızlı\" kelimesinin eş anlamlısı hangisidir?", "çabuk", ["yavaş", "ağır", "çabuk", "sakin"], "", { gorsel: sahne('kosan-cocuk', 'cocuk') });
  ekle("kb-t4", "\"gece\" kelimesinin zıt anlamlısı hangisidir?", "gündüz", ["akşam", "sabah", "gündüz", "öğle"], "", { gorsel: kars(['sıcak', 'soğuk'], 'zit') });
  ekle("kb-t5", "\"yüz\" kelimesi aşağıdaki hangi iki anlamda kullanılır?", "Sayı ve vücut parçası", ["Hayvan ve bitki", "Sayı ve vücut parçası", "Renk ve ses", "Yiyecek ve içecek"], "", { gorsel: kars(['yüz (sayı)', 'yüz (vücut)'], 'esSeslilik') });
  ekle("kb-t6", "\"açık\" kelimesinin zıt anlamlısı hangisidir?", "kapalı", ["aydınlık", "geniş", "kapalı", "net"], "", { gorsel: sahne('acik-kapali', 'ev') });
  ekle("kb-t7", "\"şehir\" kelimesinin eş anlamlısı hangisidir?", "kent", ["köy", "ülke", "kent", "mahalle"], "", { gorsel: sahne('sehir', 'istanbul') });
  ekle("kb-t8", "\"kar\" kelimesi hangi cümlede \"kazanç\" anlamında kullanılmıştır?", "Bu işten kar etti", ["Kar yağdı", "Kardan adam yaptık", "Bu işten kar etti", "Kar beyazdır"], "", { gorsel: kars(['kar (yağış)', 'kar (kazanç)'], 'esSeslilik'), sasirtma: true });
  ekle("kb-t9", "\"temiz\" kelimesinin zıt anlamlısı hangisidir?", "kirli", ["düzgün", "tertipli", "kirli", "pırıl pırıl"], "", { gorsel: kars(['büyük', 'küçük'], 'zit') });
  ekle("kb-t10", "\"büyük\" kelimesinin eş anlamlısı hangisidir?", "iri", ["küçük", "iri", "uzun", "geniş"], "", { gorsel: sahne('buyuk-fil', 'default') });
  ekle("kb-t11", "\"mutlu\" kelimesinin zıt anlamlısı hangisidir?", "üzgün", ["neşeli", "sevinçli", "üzgün", "heyecanlı"], "", { gorsel: kars(['yüz (sayı)', 'yüz (vücut)'], 'esSeslilik') });
  ekle("kb-t12", "\"gül\" kelimesi hangi cümlede \"çiçek\" anlamında kullanılmıştır?", "Bahçede güller açmış", ["Çok güldü", "Gülmekten ağladı", "Bahçede güller açmış", "Gülünç bir şey söyledi"], "", { gorsel: kars(['yüz (sayı)', 'yüz (vücut)'], 'esSeslilik'), sasirtma: true });
  ekle("kb-t13", "\"eski\" kelimesinin zıt anlamlısı hangisidir?", "yeni", ["kullanılmış", "bozuk", "yeni", "pahalı"], "", { gorsel: sahne('eski-yeni', 'araba') });
  ekle("kb-t14", "\"kolay\" kelimesinin zıt anlamlısı hangisidir?", "zor", ["basit", "sıradan", "zor", "karmaşık"], "", { gorsel: kars(['gece', 'gündüz'], 'zit') });
  ekle("kb-t15", "Eş anlamlı kelime çifti hangisidir?", "hızlı - çabuk", ["güzel - çirkin", "hızlı - çabuk", "büyük - küçük", "açık - kapalı"], "", { gorsel: kars(['güzel', 'hoş'], 'esAnlam') });
  ekle("kb-t16", "\"kır\" kelimesi hangi cümlede \"doğa\" anlamında kullanılmıştır?", "Kırda piknik yaptık", ["Kalemi kırdı", "Camı kırma", "Kırda piknik yaptık", "Kırık bir şey vardı"], "", { gorsel: kars(['kır (doğa)', 'kır (kırmak)'], 'esSeslilik'), sasirtma: true });
  ekle("kb-t17", "\"uzun\" kelimesinin zıt anlamlısı hangisidir?", "kısa", ["dar", "ince", "kısa", "küçük"], "", { gorsel: sahne('kelime', 'default') });
  ekle("kb-t18", "Zıt anlamlı kelime çifti hangisidir?", "dolu - boş", ["ev - konut", "güzel - hoş", "dolu - boş", "hızlı - çabuk"], "", { gorsel: kars(['güzel', 'hoş'], 'esAnlam') });
  ekle("kb-t19", "\"aydınlık\" kelimesinin zıt anlamlısı hangisidir?", "karanlık", ["loş", "gölgeli", "karanlık", "soluk"], "", { gorsel: kars(['kar (yağış)', 'kar (kazanç)'], 'esSeslilik') });
  ekle("kb-t20", "Aşağıdakilerden hangisi eş sesli kelimedir?", "ben (kişi - cilt lekesi)", ["güzel - hoş", "büyük - küçük", "ben (kişi - cilt lekesi)", "ev - konut"], "", { gorsel: sahne('kelime', 'default'), sasirtma: true });
  ekle("kb-t21", "\"çirkin\" kelimesinin zıt anlamlısı hangisidir?", "güzel", ["sıradan", "düz", "güzel", "soluk"], "", { gorsel: kars(['büyük', 'küçük'], 'zit') });
  ekle("kb-t22", "\"dolu\" kelimesinin zıt anlamlısı hangisidir?", "boş", ["az", "yarım", "boş", "hafif"], "", { gorsel: sahne('dolu-bos', 'default') });
  ekle("kb-t23", "\"yüz\" kelimesinin eş sesli olduğu iki anlam hangisidir?", "Sayı (100) ve vücut parçası", ["Renk ve boyut", "Sayı (100) ve vücut parçası", "Hayvan ve bitki", "Yiyecek ve içecek"], "", { gorsel: kars(['yüz (sayı)', 'yüz (vücut)'], 'esSeslilik'), sasirtma: true });
  ekle("kb-t24", "\"hata\" kelimesinin eş anlamlısı hangisidir?", "yanlış", ["doğru", "başarı", "yanlış", "güzel"], "", { gorsel: sahne('hata-dogru', 'default') });
  ekle("kb-t25", "Aşağıdakilerden hangisi hem eş anlamlı hem zıt anlamlı kelime içermektedir?", "\"güzel - hoş, büyük - küçük\"", ["\"güzel - hoş, büyük - küçük\"", "\"hızlı - çabuk, şehir - kent\"", "\"sıcak - soğuk, açık - kapalı\"", "\"ev - konut, gece - gündüz\""], "eş anlamlı + zıt anlamlı çifti birlikte veren seçenek", { sasirtma: true });

  return sorular;
}

function okumaAnlamaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("oa-a1", "Havayı nasıl anlatıyor?", "Çok güzel, güneş parlıyor", '', { gorsel: sahne('bahar', 'bahce'), okumaMetni: "Bugün hava çok güzeldi. Güneş parlıyordu, kuşlar ötüyordu. Ayşe bahçeye çıktı. Çiçeklerin açtığını gördü. \"Bahar geldi!\" diye bağırdı. Annesi de geldi ve birlikte çiçekleri suladılar.", cevapTipi: "metin" });
  ekle("oa-a2", "Kim bahçeye çıktı?", "Ayşe", '', { gorsel: sahne('bahar', 'bahce'), okumaMetni: "Bugün hava çok güzeldi. Güneş parlıyordu, kuşlar ötüyordu. Ayşe bahçeye çıktı. Çiçeklerin açtığını gördü. \"Bahar geldi!\" diye bağırdı. Annesi de geldi ve birlikte çiçekleri suladılar.", cevapTipi: "metin" });
  ekle("oa-a3", "Ayşe ne gördü?", "Çiçeklerin açtığını", '', { gorsel: sahne('okuma', 'kitap'), okumaMetni: "Bugün hava çok güzeldi. Güneş parlıyordu, kuşlar ötüyordu. Ayşe bahçeye çıktı. Çiçeklerin açtığını gördü. \"Bahar geldi!\" diye bağırdı. Annesi de geldi ve birlikte çiçekleri suladılar.", cevapTipi: "metin" });
  ekle("oa-a4", "Annesi ne yaptı?", "Geldi, birlikte çiçek suladılar", '', { gorsel: sahne('agac-dikmek', 'bahce'), okumaMetni: "Bugün hava çok güzeldi. Güneş parlıyordu, kuşlar ötüyordu. Ayşe bahçeye çıktı. Çiçeklerin açtığını gördü. \"Bahar geldi!\" diye bağırdı. Annesi de geldi ve birlikte çiçekleri suladılar.", cevapTipi: "metin" });
  ekle("oa-a5", "Bu metnin ana fikri nedir?", "Bahar geldi, doğa canlandı", '', { gorsel: sahne('okuma', 'kitap'), okumaMetni: "Bugün hava çok güzeldi. Güneş parlıyordu, kuşlar ötüyordu. Ayşe bahçeye çıktı. Çiçeklerin açtığını gördü. \"Bahar geldi!\" diye bağırdı. Annesi de geldi ve birlikte çiçekleri suladılar.", cevapTipi: "metin" });
  ekle("oa-a6", "Mehmet kütüphaneye ne zaman gider?", "Her Cumartesi", '', { gorsel: sahne('kutuphane', 'kutuphane'), okumaMetni: "Mehmet her Cumartesi kütüphaneye giderdi. Kitapları çok severdi. Bugün yeni bir kitap buldu: \"Uzaydaki Çocuk.\" Kitabı alıp köşeye oturdu ve okumaya başladı. Akşama kadar okuyacaktı.", cevapTipi: "metin" });
  ekle("oa-a7", "Mehmet ne buldu?", "\"Uzaydaki Çocuk\" adlı kitabı", '', { gorsel: sahne('kutuphane', 'kutuphane'), okumaMetni: "Mehmet her Cumartesi kütüphaneye giderdi. Kitapları çok severdi. Bugün yeni bir kitap buldu: \"Uzaydaki Çocuk.\" Kitabı alıp köşeye oturdu ve okumaya başladı. Akşama kadar okuyacaktı.", cevapTipi: "metin" });
  ekle("oa-a8", "Mehmet nereye oturdu?", "Köşeye", '', { gorsel: sahne('kutuphane', 'kutuphane'), okumaMetni: "Mehmet her Cumartesi kütüphaneye giderdi. Kitapları çok severdi. Bugün yeni bir kitap buldu: \"Uzaydaki Çocuk.\" Kitabı alıp köşeye oturdu ve okumaya başladı. Akşama kadar okuyacaktı.", cevapTipi: "metin" });
  ekle("oa-a9", "Bu metin Mehmet'in neyini anlatıyor?", "Kitap sevgisini", '', { gorsel: sahne('kutuphane', 'kutuphane'), okumaMetni: "Mehmet her Cumartesi kütüphaneye giderdi. Kitapları çok severdi. Bugün yeni bir kitap buldu: \"Uzaydaki Çocuk.\" Kitabı alıp köşeye oturdu ve okumaya başladı. Akşama kadar okuyacaktı.", cevapTipi: "metin" });
  ekle("oa-a10", "Ali neden üzüldü?", "Parka gidemeyeceği için", '', { gorsel: sahne('yagmurlu-gun', 'yagmur'), okumaMetni: "Sabah uyandığında yağmur yağıyordu. Ali üzüldü, parka gidemeyecekti. Annesi \"İçeride oynayalım\" dedi. Birlikte yapboz yaptılar. Ali çok eğlendi. \"Yağmurlu günler de güzelmiş\" dedi.", cevapTipi: "metin" });
  ekle("oa-a11", "Annesi ne önerdi?", "İçeride oynamayı", '', { gorsel: sahne('yagmurlu-gun', 'yagmur'), okumaMetni: "Sabah uyandığında yağmur yağıyordu. Ali üzüldü, parka gidemeyecekti. Annesi \"İçeride oynayalım\" dedi. Birlikte yapboz yaptılar. Ali çok eğlendi. \"Yağmurlu günler de güzelmiş\" dedi.", cevapTipi: "metin" });
  ekle("oa-a12", "Ali en sonunda ne düşündü?", "Yağmurlu günlerin de güzel olduğunu", '', { gorsel: sahne('yagmurlu-gun', 'yagmur'), okumaMetni: "Sabah uyandığında yağmur yağıyordu. Ali üzüldü, parka gidemeyecekti. Annesi \"İçeride oynayalım\" dedi. Birlikte yapboz yaptılar. Ali çok eğlendi. \"Yağmurlu günler de güzelmiş\" dedi.", cevapTipi: "metin" });
  ekle("oa-a13", "Bu metnin ana fikri nedir?", "Her durumda eğlence bulunabilir", '', { gorsel: sahne('yagmurlu-gun', 'yagmur'), okumaMetni: "Sabah uyandığında yağmur yağıyordu. Ali üzüldü, parka gidemeyecekti. Annesi \"İçeride oynayalım\" dedi. Birlikte yapboz yaptılar. Ali çok eğlendi. \"Yağmurlu günler de güzelmiş\" dedi.", cevapTipi: "metin" });

  return sorular;
}

function okumaAnlamaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.OA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("oa-t1", "Fatma kediyi nerede buldu?", "Sokakta", ["Evde", "Okulda", "Sokakta", "Parkta"], "", { gorsel: sahne('hayvan-hastanesi', 'kedi'), okumaMetni: "Fatma sokakta yaralı bir kedi buldu. Kedinin ayağı incinmişti. Hemen annesini çağırdı. Annesiyle birlikte kediyi hayvan hastanesine götürdüler. Doktor kediyi muayene etti ve ayağını sardı. Fatma çok memnun oldu. Kediyi eve götürüp baktılar." });
  ekle("oa-t2", "Kedinin sorunu neydi?", "Ayağı incinmişti", ["Aç kalmıştı", "Kaybolmuştu", "Ayağı incinmişti", "Hasta görünüyordu"], "", { gorsel: sahne('hayvan-hastanesi', 'kedi'), okumaMetni: "Fatma sokakta yaralı bir kedi buldu. Kedinin ayağı incinmişti. Hemen annesini çağırdı. Annesiyle birlikte kediyi hayvan hastanesine götürdüler. Doktor kediyi muayene etti ve ayağını sardı. Fatma çok memnun oldu. Kediyi eve götürüp baktılar." });
  ekle("oa-t3", "Fatma ilk ne yaptı?", "Annesini çağırdı", ["Kediyi aldı", "Annesini çağırdı", "Hastaneye gitti", "Ağladı"], "", { gorsel: sahne('okuma', 'kitap'), okumaMetni: "Fatma sokakta yaralı bir kedi buldu. Kedinin ayağı incinmişti. Hemen annesini çağırdı. Annesiyle birlikte kediyi hayvan hastanesine götürdüler. Doktor kediyi muayene etti ve ayağını sardı. Fatma çok memnun oldu. Kediyi eve götürüp baktılar." });
  ekle("oa-t4", "Doktor ne yaptı?", "Muayene edip ayağını sardı", ["Kediyi eve gönderdi", "Ameliyat etti", "Muayene edip ayağını sardı", "Kediyi bıraktı"], "", { gorsel: sahne('hayvan-hastanesi', 'kedi'), okumaMetni: "Fatma sokakta yaralı bir kedi buldu. Kedinin ayağı incinmişti. Hemen annesini çağırdı. Annesiyle birlikte kediyi hayvan hastanesine götürdüler. Doktor kediyi muayene etti ve ayağını sardı. Fatma çok memnun oldu. Kediyi eve götürüp baktılar." });
  ekle("oa-t5", "Bu metnin ana fikri nedir?", "Hayvanlara yardım etmek önemlidir", ["Kediler hastaneye gitmeli", "Hayvanlara yardım etmek önemlidir", "Fatma kedi seviyor", "Doktorlar iyidir"], "", { gorsel: sahne('hayvan-hastanesi', 'kedi'), okumaMetni: "Fatma sokakta yaralı bir kedi buldu. Kedinin ayağı incinmişti. Hemen annesini çağırdı. Annesiyle birlikte kediyi hayvan hastanesine götürdüler. Doktor kediyi muayene etti ve ayağını sardı. Fatma çok memnun oldu. Kediyi eve götürüp baktılar." });
  ekle("oa-t6", "Can ve babası ne zaman ağaç dikerdi?", "Her Mart", ["Her yaz", "Her kış", "Her Mart", "Her Ekim"], "", { gorsel: sahne('agac-dikmek', 'bahce'), okumaMetni: "Can ve babası her yıl Mart ayında ağaç dikerdi. Bu yıl bahçeye bir elma ağacı diktiler. \"Bu ağaç büyüyünce elma yiyeceğiz\" dedi babası. Can sabırsızlanıyordu. Sulama yapmayı unutmadı. Yıllar sonra ağaç meyve verdi." });
  ekle("oa-t7", "Bu yıl ne diktiler?", "Elma ağacı", ["Armut ağacı", "Kiraz ağacı", "Elma ağacı", "Erik ağacı"], "", { gorsel: sahne('agac-dikmek', 'bahce'), okumaMetni: "Can ve babası her yıl Mart ayında ağaç dikerdi. Bu yıl bahçeye bir elma ağacı diktiler. \"Bu ağaç büyüyünce elma yiyeceğiz\" dedi babası. Can sabırsızlanıyordu. Sulama yapmayı unutmadı. Yıllar sonra ağaç meyve verdi." });
  ekle("oa-t8", "Can ne yapmayı unutmadı?", "Sulama", ["Budama", "Sulama", "Gübreleme", "Hasat etme"], "", { gorsel: sahne('agac-dikmek', 'bahce'), okumaMetni: "Can ve babası her yıl Mart ayında ağaç dikerdi. Bu yıl bahçeye bir elma ağacı diktiler. \"Bu ağaç büyüyünce elma yiyeceğiz\" dedi babası. Can sabırsızlanıyordu. Sulama yapmayı unutmadı. Yıllar sonra ağaç meyve verdi." });
  ekle("oa-t9", "Babanın \"büyüyünce elma yiyeceğiz\" demesi neyi gösterir?", "Sabırlı olmak gerektiğini", ["Şu an elma var", "Elma sevdikleri", "Sabırlı olmak gerektiğini", "Ağacın küçük olduğunu"], "", { gorsel: sahne('agac-dikmek', 'bahce'), sasirtma: true, okumaMetni: "Can ve babası her yıl Mart ayında ağaç dikerdi. Bu yıl bahçeye bir elma ağacı diktiler. \"Bu ağaç büyüyünce elma yiyeceğiz\" dedi babası. Can sabırsızlanıyordu. Sulama yapmayı unutmadı. Yıllar sonra ağaç meyve verdi." });
  ekle("oa-t10", "Bu metnin ana fikri nedir?", "Emek ve sabırla güzel sonuçlar alınır", ["Elma çok lezzetlidir", "Babalar çocuklarıyla vakit geçirmeli", "Emek ve sabırla güzel sonuçlar alınır", "Mart'ta hava güzeldir"], "", { gorsel: sahne('agac-dikmek', 'bahce'), okumaMetni: "Can ve babası her yıl Mart ayında ağaç dikerdi. Bu yıl bahçeye bir elma ağacı diktiler. \"Bu ağaç büyüyünce elma yiyeceğiz\" dedi babası. Can sabırsızlanıyordu. Sulama yapmayı unutmadı. Yıllar sonra ağaç meyve verdi." });
  ekle("oa-t11", "Zeynep neden yalnız oturdu?", "Kimseyi tanımıyordu", ["Oyun istemedi", "Hasta hissetti", "Kimseyi tanımıyordu", "Yorgundu"], "", { gorsel: sahne('arkadaslik', 'cocuk'), okumaMetni: "Zeynep yeni okula başladı. Kimseyi tanımıyordu. Teneffüste yalnız oturdu. Selin onu gördü ve yanına geldi. \"Seninle oynamak ister misin?\" diye sordu. Zeynep çok sevindi. İkisi de iyi arkadaş oldu." });
  ekle("oa-t12", "Selin ne yaptı?", "Zeynep'e gidip oynamayı teklif etti", ["Öğretmene söyledi", "Zeynep'i görmezden geldi", "Zeynep'e gidip oynamayı teklif etti", "Ağladı"], "", { gorsel: sahne('okuma', 'kitap'), okumaMetni: "Zeynep yeni okula başladı. Kimseyi tanımıyordu. Teneffüste yalnız oturdu. Selin onu gördü ve yanına geldi. \"Seninle oynamak ister misin?\" diye sordu. Zeynep çok sevindi. İkisi de iyi arkadaş oldu." });
  ekle("oa-t13", "Zeynep neden çok sevindi?", "Biri onunla arkadaş olmak istedi", ["Yeni okul güzeldi", "Biri onunla arkadaş olmak istedi", "Teneffüs uzundu", "Eve gidecekti"], "", { gorsel: sahne('okuma', 'kitap'), sasirtma: true, okumaMetni: "Zeynep yeni okula başladı. Kimseyi tanımıyordu. Teneffüste yalnız oturdu. Selin onu gördü ve yanına geldi. \"Seninle oynamak ister misin?\" diye sordu. Zeynep çok sevindi. İkisi de iyi arkadaş oldu." });
  ekle("oa-t14", "Selin nasıl biri olarak gösteriliyor?", "Yardımsever ve nazik", ["Utangaç", "Yardımsever ve nazik", "Bencil", "Gürültücü"], "", { gorsel: sahne('okuma', 'kitap'), okumaMetni: "Zeynep yeni okula başladı. Kimseyi tanımıyordu. Teneffüste yalnız oturdu. Selin onu gördü ve yanına geldi. \"Seninle oynamak ister misin?\" diye sordu. Zeynep çok sevindi. İkisi de iyi arkadaş oldu." });
  ekle("oa-t15", "Bu metnin ana fikri nedir?", "Arkadaşlık güzel bir duygudur", ["Yeni okul zordur", "Arkadaşlık güzel bir duygudur", "Teneffüste oyun oynanır", "Yeni çocuklar sevilmez"], "", { gorsel: sahne('arkadaslik', 'cocuk'), okumaMetni: "Zeynep yeni okula başladı. Kimseyi tanımıyordu. Teneffüste yalnız oturdu. Selin onu gördü ve yanına geldi. \"Seninle oynamak ister misin?\" diye sordu. Zeynep çok sevindi. İkisi de iyi arkadaş oldu." });
  ekle("oa-t16", "Berk sabah ne gördü?", "Kar", ["Yağmur", "Güneş", "Kar", "Sis"], "", { gorsel: sahne('kar-tatili', 'kar'), okumaMetni: "Sabah uyandığında her yer bembeyaz karla kaplıydı. Berk sevinçle bağırdı: \"Okul tatil!\" Kardan adam yapmak için dışarı çıktı. Elleri dondu ama gülümsedi. Akşam içerde sıcak çorba içerken \"Bu günü unutmam\" dedi." });
  ekle("oa-t17", "Berk neden bağırdı?", "Okul tatil oldu", ["Korktu", "Düştü", "Okul tatil oldu", "Annesi çağırdı"], "", { gorsel: sahne('okuma', 'kitap'), okumaMetni: "Sabah uyandığında her yer bembeyaz karla kaplıydı. Berk sevinçle bağırdı: \"Okul tatil!\" Kardan adam yapmak için dışarı çıktı. Elleri dondu ama gülümsedi. Akşam içerde sıcak çorba içerken \"Bu günü unutmam\" dedi." });
  ekle("oa-t18", "Berk dışarıda ne yaptı?", "Kardan adam yaptı", ["Kayak yaptı", "Kardan adam yaptı", "Top oynadı", "Koştu"], "", { gorsel: sahne('kar-tatili', 'kar'), okumaMetni: "Sabah uyandığında her yer bembeyaz karla kaplıydı. Berk sevinçle bağırdı: \"Okul tatil!\" Kardan adam yapmak için dışarı çıktı. Elleri dondu ama gülümsedi. Akşam içerde sıcak çorba içerken \"Bu günü unutmam\" dedi." });
  ekle("oa-t19", "\"Elleri dondu ama gülümsedi\" cümlesi ne anlama gelir?", "Üşümesine rağmen mutluydu", ["Soğuktan ağladı", "Üşümesine rağmen mutluydu", "Ellerini ısıttı", "Eve girdi"], "", { gorsel: sahne('okuma', 'kitap'), sasirtma: true, okumaMetni: "Sabah uyandığında her yer bembeyaz karla kaplıydı. Berk sevinçle bağırdı: \"Okul tatil!\" Kardan adam yapmak için dışarı çıktı. Elleri dondu ama gülümsedi. Akşam içerde sıcak çorba içerken \"Bu günü unutmam\" dedi." });
  ekle("oa-t20", "Berk neden \"Bu günü unutmam\" dedi?", "Kar tatilinden çok keyif aldı", ["Kötü bir gün geçirdi", "Okul çok iyiydi", "Kar tatilinden çok keyif aldı", "Çorbayı beğenmedi"], "", { gorsel: sahne('kar-tatili', 'kar'), sasirtma: true, okumaMetni: "Sabah uyandığında her yer bembeyaz karla kaplıydı. Berk sevinçle bağırdı: \"Okul tatil!\" Kardan adam yapmak için dışarı çıktı. Elleri dondu ama gülümsedi. Akşam içerde sıcak çorba içerken \"Bu günü unutmam\" dedi." });
  ekle("oa-t21", "Hande ne zaman kitap okur?", "Her gece yatmadan önce", ["Sabahları", "Okulda", "Her gece yatmadan önce", "Teneffüste"], "", { gorsel: sahne('kitap-kurdu', 'kutuphane'), okumaMetni: "Hande her gece yatmadan önce kitap okurdu. Annesi \"Işığı kapat, uyu\" dese de Hande okumayı bırakamazdı. Bir gün öğretmeni \"Sınıfın en çok kitap okuyanı Hande\" dedi. Herkes alkışladı. Hande kızardı ama çok mutlu oldu." });
  ekle("oa-t22", "Annesi ne dedi?", "Işığı kapat, uyu", ["Kitap oku", "Işığı kapat, uyu", "Erken kalk", "Yemek ye"], "", { gorsel: sahne('okuma', 'kitap'), okumaMetni: "Hande her gece yatmadan önce kitap okurdu. Annesi \"Işığı kapat, uyu\" dese de Hande okumayı bırakamazdı. Bir gün öğretmeni \"Sınıfın en çok kitap okuyanı Hande\" dedi. Herkes alkışladı. Hande kızardı ama çok mutlu oldu." });
  ekle("oa-t23", "Öğretmen ne dedi?", "Hande sınıfın en çok kitap okuyanı", ["Hande çok çalışkan", "Hande sınıfın en çok kitap okuyanı", "Hande birinci", "Hande akıllı"], "", { gorsel: sahne('kitap-kurdu', 'kutuphane'), okumaMetni: "Hande her gece yatmadan önce kitap okurdu. Annesi \"Işığı kapat, uyu\" dese de Hande okumayı bırakamazdı. Bir gün öğretmeni \"Sınıfın en çok kitap okuyanı Hande\" dedi. Herkes alkışladı. Hande kızardı ama çok mutlu oldu." });
  ekle("oa-t24", "\"Hande kızardı\" ifadesi ne anlama gelir?", "Utandı/heyecanlandı", ["Sinirlendi", "Ağladı", "Utandı/heyecanlandı", "Güldü"], "", { gorsel: sahne('okuma', 'kitap'), sasirtma: true, okumaMetni: "Hande her gece yatmadan önce kitap okurdu. Annesi \"Işığı kapat, uyu\" dese de Hande okumayı bırakamazdı. Bir gün öğretmeni \"Sınıfın en çok kitap okuyanı Hande\" dedi. Herkes alkışladı. Hande kızardı ama çok mutlu oldu." });
  ekle("oa-t25", "Bu metinden Hande hakkında ne söylenebilir?", "Kitap okumayı çok seviyor", ["Okulu sevmiyor", "Annesiyle anlaşamıyor", "Kitap okumayı çok seviyor", "Öğretmenini tanımıyor"], "", { gorsel: sahne('kutuphane', 'kutuphane'), sasirtma: true, okumaMetni: "Hande her gece yatmadan önce kitap okurdu. Annesi \"Işığı kapat, uyu\" dese de Hande okumayı bırakamazdı. Bir gün öğretmeni \"Sınıfın en çok kitap okuyanı Hande\" dedi. Herkes alkışladı. Hande kızardı ama çok mutlu oldu." });

  return sorular;
}

function cumleBilgisiAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.CB,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("cb-a1", "\"Ali koştu\" cümlesinde özne nedir?", "Ali", '', { gorsel: cumle("Ali koştu"), cevapTipi: "metin" });
  ekle("cb-a2", "\"Kedi uyudu\" cümlesinde yüklem nedir?", "uyudu", '', { gorsel: cumle("Kedi uyudu"), cevapTipi: "metin" });
  ekle("cb-a3", "\"Ayşe kitap okudu\" — özne kim?", "Ayşe", '', { gorsel: cumle("Ayşe kitap okudu"), cevapTipi: "metin" });
  ekle("cb-a4", "\"Mehmet yemek yedi\" — yüklem ne?", "yedi", '', { gorsel: cumle("Mehmet yemek yedi"), cevapTipi: "metin" });
  ekle("cb-a5", "Olumlu mu olumsuz mu? \"Fatma okula gitmedi.\"", "Olumsuz", '', { gorsel: cumle("Fatma okula gitmedi."), cevapTipi: "metin" });
  ekle("cb-a6", "Soru cümlesi hangisi? \"Hava güzel. / Hava güzel mi?\"", "Hava güzel mi?", '', { gorsel: nokta('?'), cevapTipi: "metin" });
  ekle("cb-a7", "\"Kuşlar uçtu\" — özne nedir?", "Kuşlar", '', { gorsel: cumle("Kuşlar uçtu"), cevapTipi: "metin" });
  ekle("cb-a8", "\"Çocuklar parkta oynadı\" — yüklem nedir?", "oynadı", '', { gorsel: cumle("Çocuklar parkta oynadı"), cevapTipi: "metin" });
  ekle("cb-a9", "Ünlem cümlesi yap: \"Güzel hava\"", "Güzel hava! / Ne güzel hava!", '', { gorsel: nokta('!'), cevapTipi: "metin" });
  ekle("cb-a10", "\"Ali eve gelmedi\" — olumlu mu olumsuz mu?", "Olumsuz", '', { gorsel: cumle("Ali eve gelmedi"), cevapTipi: "metin" });
  ekle("cb-a11", "\"Annesi çorbayı pişirdi\" — özne kim?", "Annesi", '', { gorsel: cumle("Annesi çorbayı pişirdi"), cevapTipi: "metin" });
  ekle("cb-a12", "\"Çiçekler soldu\" — yüklem nedir?", "soldu", '', { gorsel: cumle("Çiçekler soldu"), cevapTipi: "metin" });
  ekle("cb-a13", "Bu bir tam cümle mi? \"Güzel çiçek\"", "Hayır, yüklem yok", '', { gorsel: nokta('?'), cevapTipi: "metin" });
  ekle("cb-a14", "Cümleyi olumsuza çevir: \"Berk uyudu\"", "Berk uyumadı", '', { gorsel: cumle("Berk uyudu"), cevapTipi: "metin" });
  ekle("cb-a15", "\"Köpek havladı mı?\" — cümle türü nedir?", "Soru cümlesi", '', { gorsel: cumle("Köpek havladı mı?"), cevapTipi: "metin" });
  ekle("cb-a16", "\"Öğrenciler dersi dinledi\" — özne nedir?", "Öğrenciler", '', { gorsel: cumle("Öğrenciler dersi dinledi"), cevapTipi: "metin" });
  ekle("cb-a17", "\"Kedi balık yedi\" — yüklem nedir?", "yedi", '', { gorsel: cumle("Kedi balık yedi"), cevapTipi: "metin" });
  ekle("cb-a18", "Ünlem cümlesi hangisi? \"Yangın var! / Yangın var.\"", "Yangın var!", '', { gorsel: nokta('!'), cevapTipi: "metin" });
  ekle("cb-a19", "Cümleyi olumluya çevir: \"Selin gelmedi\"", "Selin geldi", '', { gorsel: cumle("Selin gelmedi"), cevapTipi: "metin" });
  ekle("cb-a20", "\"Kardeşim oyun oynadı\" — özne nedir?", "Kardeşim", '', { gorsel: cumle("Kardeşim oyun oynadı"), cevapTipi: "metin" });
  ekle("cb-a21", "Bu tam cümle mi? \"Hızlı koşan çocuk\"", "Hayır", '', { gorsel: nokta('?'), cevapTipi: "metin" });
  ekle("cb-a22", "\"Kuşlar göç etti mi?\" — cümle türü?", "Soru", '', { gorsel: cumle("Kuşlar göç etti mi?"), cevapTipi: "metin" });
  ekle("cb-a23", "\"Güneş battı\" — yüklem nedir?", "battı", '', { gorsel: cumle("Güneş battı"), cevapTipi: "metin" });
  ekle("cb-a24", "Cümledeki özneyi bul: \"Yaşlı adam yavaş yürüdü\"", "Adam", '', { gorsel: cumle("Yaşlı adam yavaş yürüdü"), cevapTipi: "metin" });
  ekle("cb-a25", "Olumlu cümle hangisi? \"Hava yağmurlu değil / Hava güneşli\"", "Hava güneşli", '', { gorsel: cumle("Hava yağmurlu değil / Hava güneşli"), cevapTipi: "metin" });

  return sorular;
}

function cumleBilgisiTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.CB,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("cb-t1", "\"Ayşe bahçeye gitti\" cümlesinde özne hangisidir?", "Ayşe", ["bahçeye", "gitti", "Ayşe", "gitti bahçeye"], "", { gorsel: cumle("Ayşe bahçeye gitti") });
  ekle("cb-t2", "\"Kedi uyudu\" cümlesinde yüklem hangisidir?", "uyudu", ["Kedi", "uyudu", "Kedi uyudu", "Yok"], "", { gorsel: cumle("Kedi uyudu") });
  ekle("cb-t3", "Hangi cümle olumsuzdur?", "Mehmet gelmedi", ["Ali koştu", "Hava güzel", "Mehmet gelmedi", "Kuşlar uçtu"], "", { gorsel: cumle('Hava güzel mi?') });
  ekle("cb-t4", "Hangi cümle soru cümlesidir?", "Hava güzel mi?", ["Hava güzel.", "Ne güzel hava!", "Hava güzel mi?", "Hava güzeldi."], "", { gorsel: cumle('Hava güzel mi?') });
  ekle("cb-t5", "\"Çocuklar oyun oynadı\" cümlesinde özne hangisidir?", "Çocuklar", ["oyun", "oynadı", "Çocuklar", "oyun oynadı"], "", { gorsel: cumle("Çocuklar oyun oynadı") });
  ekle("cb-t6", "Tam cümle hangisidir?", "Kuşlar uçtu", ["Güzel çiçek", "Hızlı koşan", "Mavi gökyüzü", "Kuşlar uçtu"], "", { gorsel: cumle('Ali koştu.') });
  ekle("cb-t7", "\"Fatma kitap okumadı\" cümlesi hangi türdür?", "Olumsuz", ["Olumlu", "Soru", "Olumsuz", "Ünlem"], "", { gorsel: cumle("Fatma kitap okumadı") });
  ekle("cb-t8", "\"Ali koştu\" cümlesini soru cümlesine çevirirsek ne olur?", "Ali koştu mu?", ["Ali koşmadı", "Ali koştu!", "Ali koştu mu?", "Koşan Ali"], "", { gorsel: nokta('?'), sasirtma: true });
  ekle("cb-t9", "\"Güneş battı\" cümlesinde yüklem hangisidir?", "battı", ["Güneş", "battı", "Güneş battı", "Yok"], "", { gorsel: cumle("Güneş battı") });
  ekle("cb-t10", "Ünlem cümlesi hangisidir?", "Ne güzel yağmur!", ["Yağmur yağıyor.", "Yağmur yağıyor mu?", "Yağmur yağmıyor.", "Ne güzel yağmur!"], "", { gorsel: cumle('Hava güzel mi?') });
  ekle("cb-t11", "\"Öğretmen tahtaya yazdı\" cümlesinde özne hangisidir?", "Öğretmen", ["tahtaya", "yazdı", "Öğretmen", "tahtaya yazdı"], "", { gorsel: cumle("Öğretmen tahtaya yazdı") });
  ekle("cb-t12", "\"Kedi balık yedi\" cümlesini olumsuza çevir.", "Kedi balık yemedi", ["Kedi balık yedi mi?", "Kedi balık yemedi", "Kedi balık yer", "Kedi yemedi"], "", { gorsel: cumle("Kedi balık yedi"), sasirtma: true });
  ekle("cb-t13", "Hangi cümle olumlulur?", "Mehmet koştu", ["Ali gelmedi", "Hava güzel değil", "Fatma uyumadı", "Mehmet koştu"], "", { gorsel: cumle('Hava güzel mi?') });
  ekle("cb-t14", "\"Kardeşim oyun oynadı mı?\" — cümle türü nedir?", "Soru", ["Olumlu", "Olumsuz", "Soru", "Ünlem"], "", { gorsel: cumle("Kardeşim oyun oynadı mı?") });
  ekle("cb-t15", "Hangi seçenekte hem özne hem yüklem doğru gösterilmiştir?", "\"Ayşe (özne) gitti (yüklem)\"", ["\"Kedi (yüklem) uyudu (özne)\"", "\"Ayşe (özne) gitti (yüklem)\"", "\"Koştu (özne) Ali (yüklem)\"", "\"Gitti (özne) Mehmet (yüklem)\""], "", { gorsel: cumle('Ayşe gitti', { ozne: 'Ayşe', yuklem: 'gitti' }), sasirtma: true });
  ekle("cb-t16", "\"Çiçekler solmadı\" — hangi türde cümle?", "Olumsuz", ["Olumlu", "Soru", "Olumsuz", "Ünlem"], "", { gorsel: cumle("Çiçekler solmadı") });
  ekle("cb-t17", "\"Yaşlı adam yavaş yürüdü\" — özne hangisidir?", "adam", ["yavaş", "yürüdü", "adam", "yavaş yürüdü"], "", { gorsel: cumle("Yaşlı adam yavaş yürüdü") });
  ekle("cb-t18", "Bu cümleyi tamamla: \"Çocuklar bahçede ___\" (yüklem ekle)", "oynadı", ["güzel bahçe", "oynadı", "hızlı çocuk", "yeşil çimen"], "", { gorsel: cumle("Çocuklar bahçede ___"), sasirtma: true });
  ekle("cb-t19", "Hangi cümle tam değildir (yüklem eksik)?", "Güzel çiçek", ["Ali koştu", "Kedi uyudu", "Güzel çiçek", "Hava soğuk"], "", { gorsel: cumle('Ali koştu.') });
  ekle("cb-t20", "\"Köpekler havlamadı\" cümlesini olumluya çevir.", "Köpekler havladı", ["Köpekler havladı mı?", "Köpekler havladı", "Köpekler havlar", "Köpek havlar"], "", { gorsel: cumle("Köpekler havlamadı"), sasirtma: true });
  ekle("cb-t21", "\"Selin güldü mü?\" — yüklem hangisidir?", "güldü", ["Selin", "güldü", "mü", "güldü mü"], "", { gorsel: cumle("Selin güldü mü?") });
  ekle("cb-t22", "Ünlem cümlesinde hangi işaret kullanılır?", "!", ["?", ".", "!", ","], "", { gorsel: cumle('Ali koştu.') });
  ekle("cb-t23", "\"Ne güzel bir gün!\" cümlesinin türü nedir?", "Ünlem", ["Soru", "Olumsuz", "Ünlem", "Olumlu"], "", { gorsel: cumle("Ne güzel bir gün!"), sasirtma: true });
  ekle("cb-t24", "\"Annem yemek pişirdi\" — özne ve yüklem hangileri?", "Özne: Annem, Yüklem: pişirdi", ["Özne: yemek, Yüklem: pişirdi", "Özne: Annem, Yüklem: pişirdi", "Özne: pişirdi, Yüklem: Annem", "Özne: yemek, Yüklem: Annem"], "", { gorsel: cumle("Annem yemek pişirdi") });
  ekle("cb-t25", "Aşağıdaki cümle türlerini eşleştir: \"Yağmur yağdı. / Yağmur yağdı mı? / Yağmur yağmadı. / Ne yağmur!\"", "Olumlu-Soru-Olumsuz-Ünlem", ["Olumlu-Soru-Olumsuz-Ünlem", "Soru-Olumlu-Ünlem-Olumsuz", "Ünlem-Soru-Olumlu-Olumsuz", "Olumsuz-Soru-Olumlu-Ünlem"], "", { gorsel: cumle('Hava güzel mi?'), sasirtma: true });

  return sorular;
}

function noktalamaVeYazimAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.NW,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("nw-a1", "\"Hava güzel\" cümlesinin sonuna ne gelir?", "Nokta (.)", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a2", "\"Adın ne\" cümlesinin sonuna ne gelir?", "Soru işareti (?)", '', { gorsel: nokta('?'), cevapTipi: "metin" });
  ekle("nw-a3", "\"Yangın var\" cümlesinin sonuna ne gelir?", "Ünlem işareti (!)", '', { gorsel: nokta('!'), cevapTipi: "metin" });
  ekle("nw-a4", "\"elma armut muz\" listesinde virgül nereye gelir?", "elma, armut, muz", '', { gorsel: nokta(','), cevapTipi: "metin" });
  ekle("nw-a5", "\"ali ankara'ya gitti\" cümlesini düzelt", "Ali Ankara'ya gitti.", '', { gorsel: cumle("ali ankara'ya gitti"), cevapTipi: "metin" });
  ekle("nw-a6", "Hangi kelime büyük harfle başlamalı?", "Özel isimler (Ayşe, İstanbul)", '', { gorsel: kart(['Ayşe','elma','Ankara','koşmak']), cevapTipi: "metin" });
  ekle("nw-a7", "\"mehmet okula gitti\" cümlesini düzelt", "Mehmet okula gitti.", '', { gorsel: cumle("mehmet okula gitti"), cevapTipi: "metin" });
  ekle("nw-a8", "Virgül nerelerde kullanılır?", "Saymada ve duraklamada", '', { gorsel: nokta(','), cevapTipi: "metin" });
  ekle("nw-a9", "\"ne güzel hava\" cümlesinin sonuna ne gelir?", "!", '', { gorsel: nokta('!'), cevapTipi: "metin" });
  ekle("nw-a10", "\"çocuklar koştu oynadı güldü\" — virgülleri koy", "koştu, oynadı, güldü", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a11", "\"türkiye güzel bir ülkedir\" cümlesini düzelt", "Türkiye güzel bir ülkedir.", '', { gorsel: sahne("türkiye", 'turkiye'), cevapTipi: "metin" });
  ekle("nw-a12", "Nokta nerede kullanılır?", "Cümle sonunda", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a13", "\"fatma ayşe ve ali parka gitti\" — düzelt", "Fatma, Ayşe ve Ali parka gitti.", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a14", "Hangi cümle doğru yazılmıştır?", "\"Ali okula gitti.\"", '', { gorsel: cumle('Ali okula gitti.'), cevapTipi: "metin" });
  ekle("nw-a15", "\"istanbul türkiye'nin büyük şehridir\" — düzelt", "İstanbul Türkiye'nin büyük şehridir.", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a16", "Büyük harfle başlaması gereken kelime hangisi?", "\"ankara\" → Ankara", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a17", "\"elma, armut ve muz\" listesinde kaç virgül var?", "1 (and'dan önce virgül gerekmez Türkçede, burada 1)", '', { gorsel: nokta(','), cevapTipi: "metin" });
  ekle("nw-a18", "\"hava soğuk değil mi\" — düzelt", "Hava soğuk değil mi?", '', { gorsel: nokta('?'), cevapTipi: "metin" });
  ekle("nw-a19", "Cümle hangi harfle başlamalı?", "Büyük harfle", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a20", "\"berk, can ve selin sınıfa girdi\" — büyük harf düzeltmesi", "Berk, Can ve Selin sınıfa girdi.", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a21", "Soru işareti hangi cümlenin sonuna gelir?", "Soru cümlesinin", '', { gorsel: nokta('?'), cevapTipi: "metin" });
  ekle("nw-a22", "\"merhaba nasılsın\" — noktalama ekle", "Merhaba! Nasılsın?", '', { gorsel: nokta('.'), cevapTipi: "metin" });
  ekle("nw-a23", "\"ayşe İzmir'de yaşıyor\" — hata nerede?", "\"ayşe\" → Ayşe", '', { gorsel: cumle("ayşe İzmir'de yaşıyor"), cevapTipi: "metin" });
  ekle("nw-a24", "Virgüllü cümle yaz (3 şey say)", "Elma, armut ve muz aldım.", '', { gorsel: nokta(','), cevapTipi: "metin" });
  ekle("nw-a25", "\"aferin sen çok başarılısın\" — noktalama ekle", "Aferin! Sen çok başarılısın.", '', { gorsel: sahne('selamlama', 'ogretmen'), cevapTipi: "metin" });

  return sorular;
}

function noktalamaVeYazimTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.NW,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("nw-t1", "Cümlenin sonuna hangi noktalama işareti gelir?", ".", [",", "?", ".", "!"], "", { gorsel: nokta('.') });
  ekle("nw-t2", "Hangi cümle doğru yazılmıştır?", "Ali okula gitti.", ["ali okula gitti.", "Ali okula gitti.", "ali Okula gitti.", "Ali okula Gitti."], "", { gorsel: cumle('Ali okula gitti.') });
  ekle("nw-t3", "Soru cümlesinin sonuna hangi işaret gelir?", "?", [".", "!", "?", ","], "", { gorsel: nokta('?') });
  ekle("nw-t4", "\"Elma armut ve muz aldım\" cümlesine virgül nereye gelir?", "Elma, armut ve muz", ["Elma, armut, ve muz", "Elma, armut ve muz", "Elma armut, ve muz", "Elma, armut ve, muz"], "", { gorsel: nokta(',') });
  ekle("nw-t5", "Hangi kelime büyük harfle yazılmalıdır?", "ankara", ["elma", "güzel", "ankara", "koşmak"], "", { gorsel: kart(['Ayşe','elma','Ankara','koşmak']) });
  ekle("nw-t6", "\"ne güzel bir gün\" cümlesine hangi işaret gelir?", "!", [".", "?", ",", "!"], "", { gorsel: nokta('.') });
  ekle("nw-t7", "Hangi cümlede yazım hatası var?", "mehmet koştu.", ["Ali okula gitti.", "Ayşe İstanbul'da yaşıyor.", "mehmet koştu.", "Hava güzel."], "", { gorsel: cumle('Ali okula gitti.'), sasirtma: true });
  ekle("nw-t8", "Virgül ne zaman kullanılır?", "Sayarken", ["Cümle bitince", "Soru cümlelerinde", "Sayarken", "Ünlem cümlelerinde"], "", { gorsel: nokta(',') });
  ekle("nw-t9", "\"türkiye güzel bir ülkedir\" cümlesini doğru yaz.", "Türkiye güzel bir ülkedir.", ["türkiye Güzel bir ülkedir.", "Türkiye güzel bir ülkedir.", "Türkiye Güzel Bir Ülkedir.", "türkiye güzel bir ülkedir."], "", { gorsel: sahne("türkiye", 'turkiye') });
  ekle("nw-t10", "Özel isimler nasıl yazılır?", "Büyük harfle başlar", ["Küçük harfle", "Tamamı büyük harfle", "Büyük harfle başlar", "Fark etmez"], "", { gorsel: kart(['Ayşe','elma','Ankara','koşmak']) });
  ekle("nw-t11", "Hangi cümlede tüm noktalama doğrudur?", "Ali, Ayşe ve Mehmet koştu.", ["ali, ayşe ve mehmet koştu", "Ali, Ayşe ve Mehmet koştu.", "Ali Ayşe ve Mehmet, koştu.", "ali, Ayşe ve mehmet koştu."], "", { gorsel: cumle('Ali okula gitti.'), sasirtma: true });
  ekle("nw-t12", "Ünlem işareti hangi cümlenin sonuna gelir?", "Aferin!", ["Hava güzel.", "Hava güzel mi?", "Aferin!", "Hava güzeldi."], "", { gorsel: nokta('!') });
  ekle("nw-t13", "\"fatma izmir'de doğdu\" cümlesindeki hatalar nelerdir?", "f ve i küçük", ["Sadece f küçük", "Sadece i küçük", "f ve i küçük", "Hata yok"], "", { gorsel: cumle("fatma izmir'de doğdu") });
  ekle("nw-t14", "Kaç noktalama işareti var: \"Ali, Ayşe ve Mehmet okula gitti. Hava güzel miydi?\"", "3", ["1", "3", "2", "4"], "virgül + nokta + soru işareti = 3", { sasirtma: true });
  ekle("nw-t15", "Hangi cümle yanlış yazılmıştır?", "ayşe geldi.", ["Hava güzel.", "Ali koştu.", "ayşe geldi.", "Mehmet uyudu."], "", { gorsel: cumle('Ali okula gitti.') });
  ekle("nw-t16", "\"merhaba nasılsın\" cümlesine hangi noktalama işaretleri eklenmeli?", "Ünlem ve soru işareti", ["Nokta ve virgül", "İki nokta", "Ünlem ve soru işareti", "İki virgül"], "", { gorsel: sahne('selamlama', 'ogretmen') });
  ekle("nw-t17", "\"Ankara Türkiye'nin başkentidir\" cümlesinde kaç büyük harf olmalı?", "2", ["1", "3", "2", "4"], "Ankara ve Türkiye", { sasirtma: true });
  ekle("nw-t18", "Hangi cümle doğru noktalanmıştır?", "Aferin, çok iyisin!", ["Ali okula gitti?", "Hava güzel mi.", "Aferin, çok iyisin!", "Ne güzel."], "", { gorsel: cumle('Ali okula gitti.') });
  ekle("nw-t19", "Büyük harfle başlaması gerekmeyen hangisidir?", "elma", ["Ayşe", "İstanbul", "elma", "Türkiye"], "", { gorsel: kart(['Ayşe','elma','Ankara','koşmak']) });
  ekle("nw-t20", "\"berk can selin ve hande parkta oynadı\" — kaç düzeltme gerekir?", "3", ["2", "4", "3", "5"], "B, C, S, H büyük + nokta = 5? Hayır: 4 büyük harf + 2 virgül + 1 nokta...", { sasirtma: true });
  ekle("nw-t21", "Virgül olmadan doğru yazılan cümle hangisidir?", "\"Ali ve Ayşe geldi.\"", ["\"Elma armut muz aldım\"", "\"Ali ve Ayşe geldi.\"", "\"Ali Ayşe Mehmet geldi\"", "\"Koştum oynadım geldim\""], "", { gorsel: cumle('Ali okula gitti.') });
  ekle("nw-t22", "\"aferin sen çok çalışkansın\" cümlesini doğru yaz.", "Aferin! Sen çok çalışkansın.", ["aferin! sen çok çalışkansın.", "Aferin! Sen çok çalışkansın.", "Aferin, sen çok çalışkansın!", "AFERIN sen çok çalışkansın."], "", { gorsel: sahne('selamlama', 'ogretmen'), sasirtma: true });
  ekle("nw-t23", "Hangi cümlede gereksiz büyük harf kullanılmıştır?", "Hava Güzel.", ["Ali okula gitti.", "Hava Güzel.", "Ayşe koştu.", "İstanbul büyük şehir."], "", { gorsel: cumle('Ali okula gitti.') });
  ekle("nw-t24", "Noktalama işaretlerinin kullanım amacı nedir?", "Anlamı belirginleştirmek", ["Cümleyi uzatmak", "Anlamı belirginleştirmek", "Kelime saymak", "Yazıyı süslemek"], "", { gorsel: nokta('.') });
  ekle("nw-t25", "Aşağıdaki cümleyi tamamen doğru yaz: \"bugün hava çok güzel değil mi\"", "Bugün hava çok güzel değil mi?", ["Bugün hava çok güzel değil mi?", "bugün Hava çok güzel değil mi?", "Bugün hava çok güzel değil mi.", "Bugün Hava Çok Güzel Değil Mi?"], "", { gorsel: cumle("bugün hava çok güzel değil mi"), sasirtma: true });

  return sorular;
}

export function seslerVeHeceler(karistir) {
  return {
    id: "sesler-ve-heceler",
    baslik: "Sesler ve Heceler",
    kazanimKodu: KAZANIM.SH,
    anlatim: {
      ekranlar: [
        { metin: "Türkçede 29 harf vardır. 8 tanesi sesli (a, e, ı, i, o, ö, u, ü), 21 tanesi sessiz harftir. Sesli harfler tek başına ses çıkarır!", gorsel: anl("sh-anlatim-1") },
        { metin: "Hece, içinde en az bir sesli harf bulunan ses topluluğudur. \"araba\" kelimesi 3 heceli: a-ra-ba. Her hecede bir sesli harf vardır!", gorsel: anl("sh-anlatim-2") },
        { metin: "Kelimeyi hecelere bölerken sesli harfleri sayarız — kaç sesli harf varsa o kadar hece vardır! \"okul\" → o-kul (2 sesli = 2 hece).", gorsel: anl("sh-anlatim-3") },
      ],
    },
    alistirma: seslerVeHecelerAlistirma(),
    test: seslerVeHecelerTest(karistir),
  };
}

export function kelimeBilgisi(karistir) {
  return {
    id: "kelime-bilgisi",
    baslik: "Kelime Bilgisi",
    kazanimKodu: KAZANIM.KB,
    anlatim: {
      ekranlar: [
        { metin: "EŞ ANLAMLI KELİMELER: Yazılışları farklı ama anlamları aynı olan kelimelerdir. \"güzel = hoş\", \"hızlı = çabuk\", \"büyük = iri\".", gorsel: anl("kb-anlatim-1") },
        { metin: "ZIT ANLAMLI KELİMELER: Anlamları birbirinin tersi olan kelimelerdir. \"büyük ↔ küçük\", \"sıcak ↔ soğuk\", \"açık ↔ kapalı\".", gorsel: anl("kb-anlatim-2") },
        { metin: "EŞ SESLİ KELİMELER: Yazılış ve okunuşları aynı ama anlamları farklı kelimelerdir. \"yüz\" → hem sayı (100), hem vücudun bir parçası!", gorsel: anl("kb-anlatim-3") },
      ],
    },
    alistirma: kelimeBilgisiAlistirma(),
    test: kelimeBilgisiTest(karistir),
  };
}

export function okumaAnlama(karistir) {
  return {
    id: "okuma-anlama",
    baslik: "Okuma Anlama",
    kazanimKodu: KAZANIM.OA,
    anlatim: {
      ekranlar: [
        { metin: "Okuma anlamak için yapılır! Bir metni okurken \"Kim? Ne yaptı? Nerede? Ne zaman? Neden?\" sorularını sorarız.", gorsel: anl("oa-anlatim-1") },
        { metin: "Metnin ANA FİKRİ, yazarın okuyucuya vermek istediği en önemli mesajdır. Genellikle başta veya sonda bulunur.", gorsel: anl("oa-anlatim-2") },
        { metin: "DETAY sorularında metinde açıkça yazılı bilgiyi buluruz. YORUM sorularında metinden çıkarım yaparız — yani satırlar arasını okuruz!", gorsel: anl("oa-anlatim-3") },
      ],
    },
    alistirma: okumaAnlamaAlistirma(),
    test: okumaAnlamaTest(karistir),
  };
}

export function cumleBilgisi(karistir) {
  return {
    id: "cumle-bilgisi",
    baslik: "Cümle Bilgisi",
    kazanimKodu: KAZANIM.CB,
    anlatim: {
      ekranlar: [
        { metin: "CÜMLE, bir düşünceyi tam olarak anlatan kelime grubudur. Her cümlede bir eylem (iş, oluş, durum) vardır. \"Ayşe koştu.\" → Tam cümle! \"Ayşe koş...\" → Eksik!", gorsel: anl("cb-anlatim-1") },
        { metin: "ÖZNE: Cümlede işi yapan kişi veya varlıktır. \"Kim?\" sorusunun cevabıdır. YÜKLEM: Cümlede yapılan iş, oluş veya durumu belirtir. \"Ne yaptı?\" sorusunun cevabıdır.", gorsel: anl("cb-anlatim-2") },
        { metin: "Cümle türleri: OLUMLU (iş yapıldı), OLUMSUZ (iş yapılmadı), SORU (? ile biter), ÜNLEM (! ile biter).", gorsel: anl("cb-anlatim-3") },
      ],
    },
    alistirma: cumleBilgisiAlistirma(),
    test: cumleBilgisiTest(karistir),
  };
}

export function noktalamaVeYazim(karistir) {
  return {
    id: "noktalama-ve-yazim",
    baslik: "Noktalama ve Yazım",
    kazanimKodu: KAZANIM.NW,
    anlatim: {
      ekranlar: [
        { metin: "NOKTA (.) — Cümlenin bittiğini gösterir. VİRGÜL (,) — Sayma ve duraklamada kullanılır. SORU İŞARETİ (?) — Soru cümlelerinin sonuna gelir. ÜNLEM İŞARETİ (!) — Ünlem cümlelerinin sonuna gelir.", gorsel: anl("nw-anlatim-1") },
        { metin: "BÜYÜK HARF KURALLARI: Cümle büyük harfle başlar. Özel isimler (kişi, şehir, ülke adları) büyük harfle yazılır.", gorsel: anl("nw-anlatim-2") },
        { metin: "YAZIM KURALLARI: Bitişik yazılan kelimeler (bugün, yarın) ve ayrı yazılan kelimeler. Sesli harf uyumu: Türkçe kelimelerde sesli harfler uyum içindedir.", gorsel: anl("nw-anlatim-3") },
      ],
    },
    alistirma: noktalamaVeYazimAlistirma(),
    test: noktalamaVeYazimTest(karistir),
  };
}
