/** GOREV-ING-TEMA8A — Sports (Sporlar) */

const KAZANIM = 'ING.2.8.1';

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
}
function grup(nesneler, vurgu) {
  return { tur: 'ingilizce', mod: 'grup', nesneler, vurgu };
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu, cevapTipi: 'metin', ...extra });
}
function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu, cevapTipi: 'metin',
    alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'],
    ...extra,
  });
}
function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler, ipucu, ...extra });
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'sp-a1', 'Spor kelimesinin İngilizcesi ......... kelimesidir.', 'sport', '', { gorsel: nesne('futbol-topu') });
  dyEkle(s, 'sp-a2', 'Futbol İngilizcede "Football" demektir.', 'Doğru', '', { gorsel: nesne('futbol-topu') });
  boslukEkle(s, 'sp-a3', 'Basketbol kelimesinin İngilizcesi ......... kelimesidir.', 'basketball', '', { gorsel: nesne('turuncu-basketbol') });
  dyEkle(s, 'sp-a4', 'Yüzmek İngilizcede "Swim" olarak söylenir.', 'Doğru', '', { gorsel: nesne('yuzme-havuz') });
  boslukEkle(s, 'sp-a5', 'Koşmak kelimesinin İngilizcesi ......... kelimesidir.', 'run', '', { gorsel: nesne('hizli-kosan-sporcu') });
  dyEkle(s, 'sp-a6', 'Tenis İngilizcede "Tennis" demektir.', 'Doğru', '', { gorsel: nesne('tenis-raketi') });
  boslukEkle(s, 'sp-a7', 'Voleybol kelimesinin İngilizcesi ......... kelimesidir.', 'volleyball', '', { gorsel: nesne('voleybol-topu') });
  dyEkle(s, 'sp-a8', '"Run" kelimesi koşmak anlamına gelir.', 'Doğru', '', { gorsel: nesne('kosu-parkur') });
  boslukEkle(s, 'sp-a9', 'Bisiklet sürmek İngilizcede "Ride a ........." olarak söylenir.', 'bike', '', { gorsel: nesne('oyuncak-bisiklet') });
  dyEkle(s, 'sp-a10', 'Futbol oynamak "Play football" demektir.', 'Doğru', '', { gorsel: nesne('futbol-oynayan') });
  boslukEkle(s, 'sp-a11', 'Sporlar kelimesinin İngilizcesi "........." kelimesidir.', 'sports', '', { gorsel: nesne('spor-sahasi') });
  dyEkle(s, 'sp-a12', '"Swim" kelimesi yüzmek demektir.', 'Doğru', '', { gorsel: nesne('yuzme-havuz') });
  boslukEkle(s, 'sp-a13', 'Zıplamak kelimesinin İngilizcesi ......... kelimesidir.', 'jump', '', { gorsel: nesne('ziplayan-cocuk') });
  dyEkle(s, 'sp-a14', 'Basketbol topu turuncu renktedir.', 'Doğru', '', { gorsel: nesne('turuncu-basketbol') });
  boslukEkle(s, 'sp-a15', 'Takım sporu futbol İngilizcede "........." olarak yazılır.', 'football', '', { gorsel: nesne('futbol-takimi') });
  dyEkle(s, 'sp-a16', '"Tennis" kelimesi tenis sporu demektir.', 'Doğru', '', { gorsel: nesne('tenis-kortu') });
  boslukEkle(s, 'sp-a17', 'Parkta koşmak için "........." kelimesini kullanırız.', 'run', '', { gorsel: nesne('park-kosu') });
  dyEkle(s, 'sp-a18', 'Spor yapmak bizi sağlıklı yapar.', 'Doğru', '', { gorsel: nesne('saglikli-sporcu') });
  boslukEkle(s, 'sp-a19', 'Yüzme havuzunda "........." yaparız.', 'swim', '', { gorsel: nesne('havuz-yuzucu') });
  dyEkle(s, 'sp-a20', '"Volleyball" kelimesi voleybol demektir.', 'Doğru', '', { gorsel: nesne('voleybol-smac') });
  boslukEkle(s, 'sp-a21', 'Futbol topuyla oynamak "Play ........." demektir.', 'football', '', { gorsel: nesne('futbol-oynayan') });
  dyEkle(s, 'sp-a22', '"Basketball" ve "Football" ikisi de spor dalıdır.', 'Doğru', '', { gorsel: nesne('spor-toplari') });
  boslukEkle(s, 'sp-a23', 'Koşu yarışında hızlı "........." yaparız.', 'run', '', { gorsel: nesne('kosu-yarisi') });
  dyEkle(s, 'sp-a24', 'Tenis raketiyle topa vurmak tenis sporudur.', 'Doğru', '', { gorsel: nesne('tenis-raketi') });
  boslukEkle(s, 'sp-a25', 'Spor yapmayı seven çocuklara "I love ........." deriz.', 'sports', '', { gorsel: nesne('spor-seven-cocuk') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('sp-t1', 'Futbol kelimesinin İngilizcesi nedir?', 'Football', ['Football', 'Basketball', 'Tennis', 'Swimming'], '', { gorsel: nesne('futbol-topu') });
  e('sp-t2', 'Basketbol topunun İngilizcesi hangisidir?', 'Basketball', ['Basketball', 'Volleyball', 'Football', 'Tennis'], '', { gorsel: nesne('turuncu-basketbol') });
  e('sp-t3', 'Yüzmek İngilizcede nasıl söylenir?', 'Swim', ['Swim', 'Run', 'Jump', 'Draw'], '', { gorsel: nesne('yuzme-havuz') });
  e('sp-t4', 'Koşmak kelimesinin İngilizcesi nedir?', 'Run', ['Run', 'Sleep', 'Eat', 'Read'], '', { gorsel: nesne('hizli-kosan-sporcu') });
  e('sp-t5', 'Tenis sporunun İngilizcesi hangisidir?', 'Tennis', ['Tennis', 'Football', 'Basketball', 'Volleyball'], '', { gorsel: nesne('tenis-raketi') });
  e('sp-t6', 'Voleybol kelimesinin İngilizcesi nedir?', 'Volleyball', ['Volleyball', 'Basketball', 'Football', 'Tennis'], '', { gorsel: nesne('voleybol-topu') });
  e('sp-t7', 'Futbol oynamak İngilizcede nasıl ifade edilir?', 'Play football', ['Play football', 'Play piano', 'Play school', 'Play food'], '', { gorsel: nesne('futbol-oynayan') });
  e('sp-t8', 'Sporlar kelimesinin İngilizcesi nedir?', 'Sports', ['Sports', 'Toys', 'Colors', 'Jobs'], '', { gorsel: nesne('spor-sahasi') });
  e('sp-t9', 'Zıplamak İngilizcede hangi kelimeyle söylenir?', 'Jump', ['Jump', 'Swim', 'Run', 'Sleep'], '', { gorsel: nesne('ziplayan-cocuk') });
  e('sp-t10', 'Bisiklet sürmek İngilizcede nasıl söylenir?', 'Ride a bike', ['Ride a bike', 'Play football', 'Go swimming', 'Read a book'], '', { gorsel: nesne('oyuncak-bisiklet') });
  e('sp-t11', '"Run" ve "Jump" kelimeleri ne tür eylemlerdir?', 'Spor eylemleri', ['Yemek eylemleri', 'Spor eylemleri', 'Uyku eylemleri', 'Renk eylemleri'], '', { gorsel: nesne('kosu-havuz') });
  e('sp-t12', 'Hangi top turuncu renklidir?', 'Basketball', ['Football', 'Basketball', 'Tennis ball', 'Volleyball'], '', { gorsel: nesne('turuncu-basketbol') });
  e('sp-t13', '"Swim" kelimesinin Türkçe anlamı nedir?', 'Yüzmek', ['Koşmak', 'Yüzmek', 'Zıplamak', 'Oynamak'], '', { gorsel: nesne('havuz-yuzucu') });
  e('sp-t14', 'Parkta en çok hangi spor yapılır?', 'Run / Play football', ['Sleep', 'Run / Play football', 'Cook', 'Draw'], '', { gorsel: nesne('park-kosu') });
  e('sp-t15', '"Football" kelimesi hangi sporu ifade eder?', 'Futbol', ['Basketbol', 'Futbol', 'Tenis', 'Yüzme'], '', { gorsel: nesne('futbol-takimi') });
  e('sp-t16', 'Tenis oynamak için ne gerekir?', 'Tennis racket and ball', ['Swimming pool', 'Tennis racket and ball', 'Football goal', 'Basketball hoop'], '', { gorsel: nesne('tenis-kortu') });
  e('sp-t17', 'Hangi eşleştirme doğrudur?', 'Run = Koşmak', ['Run = Uyumak', 'Run = Koşmak', 'Swim = Koşmak', 'Jump = Yüzmek'], '', { gorsel: nesne('kosu-yarisi') });
  e('sp-t18', 'Spor yapmak bizi nasıl etkiler?', 'Sağlıklı yapar', ['Uykulu yapar', 'Sağlıklı yapar', 'Üşütür', 'Yorar sadece'], '', { gorsel: nesne('saglikli-sporcu') });
  e('sp-t19', '"Volleyball" hangi spor dalıdır?', 'Voleybol', ['Basketbol', 'Voleybol', 'Futbol', 'Tenis'], '', { gorsel: nesne('voleybol-smac') });
  e('sp-t20', 'Havuzda yapılan spor hangisidir?', 'Swimming', ['Running', 'Swimming', 'Football', 'Tennis'], '', { gorsel: nesne('yuzme-havuz') });
  e('sp-t21', '"Play football" ne demektir?', 'Futbol oynamak', ['Futbol oynamak', 'Basketbol oynamak', 'Tenis oynamak', 'Yüzmek'], '', { gorsel: nesne('futbol-oynayan') });
  e('sp-t22', 'Aşağıdakilerden hangisi takım sporudur?', 'Football', ['Tennis', 'Football', 'Swimming', 'Running'], '', { gorsel: nesne('futbol-takimi') });
  e('sp-t23', '"Sports" kelimesinin anlamı nedir?', 'Sporlar', ['Oyuncaklar', 'Sporlar', 'Meslekler', 'Renkler'], '', { gorsel: nesne('spor-seven-cocuk') });
  e('sp-t24', 'Hangi aktivite "Jump" ile ifade edilir?', 'Zıplamak', ['Koşmak', 'Zıplamak', 'Yüzmek', 'Uyumak'], '', { gorsel: nesne('ziplayan-cocuk') });
  e('sp-t25', '"Basketball" ve "Football" için ortak özellik nedir?', 'İkisi de top ile oynanan sporlardır', ['İkisi de suda yapılır', 'İkisi de top ile oynanan sporlardır', 'İkisi de müzik aletidir', 'İkisi de meslektir'], '', { gorsel: nesne('spor-toplari') });
  return s;
}

export function sporlar(karistir) {
  return {
    id: 'sporlar',
    baslik: 'Sports',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Berk ve Yusuf spor parkında çok eğleniyordu. Berk koştu: "Run!" Yusuf zıpladı: "Jump!" Can yüzdü: "Swim!" Spor yapmak İngilizcede harikaydı.', gorsel: anl('sp-anlatim-1') },
        { metin: 'Okul bahçesinde futbol oynadılar. "Play football!" dedi öğretmen. Turuncu basketbol topuyla "Basketball" ve fileyle "Volleyball" öğrendiler.', gorsel: anl('sp-anlatim-2') },
        { metin: 'Tenis kortunda raket salladılar: "Tennis!" Bisiklete bindiler: "Ride a bike!" Sports kelimesi tüm sporları kapsıyordu. Her gün yeni bir spor öğrenmek çok eğlenceliydi!', gorsel: anl('sp-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
