/** GOREV-ING3A — Days and Months (Günler ve Aylar) */

const KAZANIM = 'ING.2.3.1';

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
  sorular.push({
    id,
    kazanimKodu: KAZANIM,
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
    kazanimKodu: KAZANIM,
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
    kazanimKodu: KAZANIM,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'ga-a1', 'Gün kelimesinin İngilizcesi ......... kelimesidir.', 'day', '', { gorsel: nesne('takvim-yapragi') });
  dyEkle(s, 'ga-a2', 'İngilizcede Pazartesi "Monday" demektir.', 'Doğru', '', { gorsel: nesne('pazartesi-okul') });
  boslukEkle(s, 'ga-a3', 'Pazartesi kelimesinin İngilizce karşılığı ......... kelimesidir.', 'monday', '', { gorsel: nesne('pazartesi-takvim') });
  dyEkle(s, 'ga-a4', 'Salı İngilizcede "Tuesday" olarak söylenir.', 'Doğru', '', { gorsel: nesne('sali-takvim') });
  boslukEkle(s, 'ga-a5', 'Salı kelimesinin İngilizcesi ......... kelimesidir.', 'tuesday', '', { gorsel: nesne('sali-takvim') });
  dyEkle(s, 'ga-a6', '"Wednesday" kelimesi Türkçede Perşembe anlamına gelir.', 'Yanlış', '', { gorsel: nesne('carsamba-yapragi') });
  boslukEkle(s, 'ga-a7', 'Çarşamba kelimesinin İngilizce yazılışı ......... kelimesidir.', 'wednesday', '', { gorsel: nesne('carsamba-yapragi') });
  dyEkle(s, 'ga-a8', 'Perşembe İngilizcede "Thursday" denir.', 'Doğru', '', { gorsel: nesne('persembe-takvim') });
  boslukEkle(s, 'ga-a9', 'Perşembe kelimesinin İngilizcesi ......... kelimesidir.', 'thursday', '', { gorsel: nesne('persembe-takvim') });
  dyEkle(s, 'ga-a10', 'Cumartesi İngilizcede "Saturday" olarak yazılır.', 'Doğru', '', { gorsel: nesne('cumartesi-park') });
  boslukEkle(s, 'ga-a11', 'Cumartesi kelimesinin İngilizce karşılığı ......... kelimesidir.', 'saturday', '', { gorsel: nesne('cumartesi-park') });
  dyEkle(s, 'ga-a12', '"Sunday" kelimesi Türkçede Cuma demektir.', 'Yanlış', '', { gorsel: nesne('pazar-piknik') });
  dyEkle(s, 'ga-a13', '"Monday" kelimesi okula gittiğimiz haftanın ilk günüdür.', 'Doğru', '', { gorsel: nesne('pazartesi-okul') });
  boslukEkle(s, 'ga-a14', 'Ay kelimesinin İngilizce karşılığı "........." kelimesidir.', 'month', '', { gorsel: nesne('12-aylik-takvim') });
  dyEkle(s, 'ga-a15', 'Şubat İngilizcede "February" olarak söylenir.', 'Doğru', '', { gorsel: nesne('subat-takvim') });
  boslukEkle(s, 'ga-a16', 'Şubat kelimesinin İngilizcesi ......... kelimesidir.', 'february', '', { gorsel: nesne('subat-takvim') });
  boslukEkle(s, 'ga-a17', 'Nisan kelimesinin İngilizce yazılışı ......... kelimesidir.', 'april', '', { gorsel: nesne('nisan-yagmur') });
  dyEkle(s, 'ga-a18', 'Haziran İngilizcede "June" demektir.', 'Doğru', '', { gorsel: nesne('haziran-karne') });
  boslukEkle(s, 'ga-a19', 'Haziran kelimesinin İngilizcesi ......... kelimesidir.', 'june', '', { gorsel: nesne('haziran-karne') });
  boslukEkle(s, 'ga-a20', 'Ağustos kelimesinin İngilizcesi ......... kelimesidir.', 'august', '', { gorsel: nesne('agustos-sicak') });
  dyEkle(s, 'ga-a21', '"October" kelimesi Türkçede Ekim anlamına gelir.', 'Doğru', '', { gorsel: nesne('ekim-ruzgar') });
  boslukEkle(s, 'ga-a22', 'Ekim kelimesinin İngilizce karşılığı ......... kelimesidir.', 'october', '', { gorsel: nesne('ekim-ruzgar') });
  boslukEkle(
    s,
    'ga-a23',
    'Haftanın günlerine İngilizcede "Days of the week" deriz, yani "........." (günler) kelimesini kullanırız.',
    'days',
    '',
    { gorsel: nesne('gunler-panosu'), alternatifCevaplar: ['day'] },
  );
  boslukEkle(s, 'ga-a24', 'Aralık kelimesinin İngilizcesi ......... kelimesidir.', 'december', '', { gorsel: nesne('aralik-kar') });
  boslukEkle(s, 'ga-a25', 'Zaman/saat kelimesinin İngilizcesi "........." kelimesidir.', 'time', '', { gorsel: nesne('saat-resmi') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ga-t1', 'Haftanın ilk günü olan Pazartesi\'nin İngilizcesi nedir?', 'Monday', ['Sunday', 'Monday', 'Friday', 'Tuesday'], '', { gorsel: nesne('pazartesi-takvim') });
  e('ga-t2', 'Salı gününün İngilizce adı hangisidir?', 'Tuesday', ['Thursday', 'Tuesday', 'Wednesday', 'Saturday'], '', { gorsel: nesne('sali-takvim') });
  e('ga-t3', 'Çarşamba gününün İngilizcesi nedir?', 'Wednesday', ['Wednesday', 'Monday', 'Friday', 'Sunday'], '', { gorsel: nesne('carsamba-yapragi') });
  e('ga-t4', 'Perşembe gününün İngilizce karşılığı aşağıdakilerden hangisidir?', 'Thursday', ['Tuesday', 'Thursday', 'Saturday', 'Sunday'], '', { gorsel: nesne('persembe-takvim') });
  e('ga-t5', 'Cuma gününün İngilizcesi nedir?', 'Friday', ['Friday', 'Monday', 'Thursday', 'Sunday'], '', { gorsel: nesne('cuma-okul') });
  e('ga-t6', 'Parkta oynadığımız Cumartesi gününün İngilizcesi hangi seçenekte doğru verilmiştir?', 'Saturday', ['Sunday', 'Saturday', 'Friday', 'Monday'], '', { gorsel: nesne('cumartesi-park') });
  e('ga-t7', 'Pazar gününün İngilizcesi nedir?', 'Sunday', ['Sunday', 'Saturday', 'Monday', 'Friday'], '', { gorsel: nesne('pazar-piknik') });
  e('ga-t8', '"Day" kelimesinin Türkçedeki anlamı nedir?', 'Gün', ['Ay', 'Gün', 'Saat', 'Hafta'], '', { gorsel: nesne('takvim-yapragi') });
  e('ga-t9', '"Month" kelimesinin Türkçedeki anlamı nedir?', 'Ay', ['Gün', 'Yıl', 'Ay', 'Hafta'], '', { gorsel: nesne('12-aylik-takvim') });
  e('ga-t10', 'Yılın ilk ayı olan Ocak\'ın İngilizcesi nedir?', 'January', ['February', 'January', 'March', 'December'], '', { gorsel: nesne('ocak-kar') });
  e('ga-t11', 'Şubat ayının İngilizce adı hangisidir?', 'February', ['February', 'April', 'June', 'August'], '', { gorsel: nesne('subat-takvim') });
  e('ga-t12', 'Mart ayının İngilizcesi nedir?', 'March', ['May', 'March', 'July', 'November'], '', { gorsel: nesne('mart-cicek') });
  e('ga-t13', 'Nisan ayının İngilizce karşılığı nedir?', 'April', ['April', 'June', 'October', 'December'], '', { gorsel: nesne('nisan-yagmur') });
  e('ga-t14', '"May" kelimesinin Türkçedeki anlamı nedir?', 'Mayıs', ['Mart', 'Nisan', 'Mayıs', 'Haziran'], '', { gorsel: nesne('mayis-gunes') });
  e('ga-t15', 'Haziran ayının İngilizcesi nedir?', 'June', ['June', 'July', 'August', 'September'], '', { gorsel: nesne('haziran-karne') });
  e('ga-t16', '"July" kelimesinin Türkçedeki anlamı nedir?', 'Temmuz', ['Haziran', 'Temmuz', 'Ağustos', 'Eylül'], '', { gorsel: nesne('temmuz-deniz') });
  e('ga-t17', 'Ağustos ayının İngilizcesi hangisidir?', 'August', ['August', 'October', 'April', 'February'], '', { gorsel: nesne('agustos-sicak') });
  e('ga-t18', 'Eylül ayının İngilizce adı nedir?', 'September', ['September', 'November', 'January', 'March'], '', { gorsel: nesne('eylul-yaprak') });
  e('ga-t19', '"October" kelimesinin Türkçedeki anlamı nedir?', 'Ekim', ['Ağustos', 'Eylül', 'Ekim', 'Kasım'], '', { gorsel: nesne('ekim-ruzgar') });
  e('ga-t20', 'Kasım ayının İngilizcesi nedir?', 'November', ['November', 'December', 'October', 'September'], '', { gorsel: nesne('kasim-yagmur') });
  e('ga-t21', 'Aralık ayının İngilizce karşılığı hangisidir?', 'December', ['December', 'November', 'January', 'February'], '', { gorsel: nesne('aralik-kar') });
  e('ga-t22', '"Saturday" ve "Sunday" kelimeleri sırasıyla hangi günlerdir?', 'Cumartesi ve Pazar', ['Pazartesi ve Salı', 'Cuma ve Cumartesi', 'Cumartesi ve Pazar', 'Perşembe ve Cuma'], '', { gorsel: grup(['cumartesi-park', 'pazar-piknik'], ['cumartesi-park', 'pazar-piknik']) });
  e('ga-t23', 'Okulun bittiği Cuma gününün İngilizcesi nedir?', 'Friday', ['Friday', 'Thursday', 'Saturday', 'Monday'], '', { gorsel: nesne('cuma-okul') });
  e('ga-t24', 'Sonbaharın başladığı Ekim ayının İngilizcesi nedir?', 'October', ['October', 'August', 'June', 'April'], '', { gorsel: nesne('ekim-ruzgar') });
  e('ga-t25', 'Saat ve zamanı ifade eden kelimenin İngilizcesi nedir?', 'Time', ['Day', 'Month', 'Time', 'Week'], '', { gorsel: nesne('saat-resmi') });
  return s;
}

export function gunlerVeAylar(karistir) {
  return {
    id: 'gunler-ve-aylar',
    baslik: 'Days and Months',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Yeni bir hafta başlamıştı. Elanaz ve Berk sabah okula giderken takvime baktılar. "Pazartesi İngilizcede Monday," dedi Elanaz. Berk gülümsedi: "Salı Tuesday, Çarşamba Wednesday!" Öğretmenleri tahtaya Perşembe (Thursday) ve Cuma (Friday) yazdı. Hafta sonu geldiğinde parka gittiler — Cumartesi Saturday, Pazar Sunday! Bir haftada yedi gün vardı ve her günün İngilizcede güzel bir adı vardı.',
          gorsel: anl('ga-anlatim-1'),
        },
        {
          metin:
            'Sınıfta büyük bir takvim asılıydı. Öğretmen ay ay gösterdi: "Ocak January, Şubat February, Mart March, Nisan April!" Çocuklar birlikte saydı: Mayıs May, Haziran June, Temmuz July, Ağustos August. Sonra Eylül September, Ekim October, Kasım November ve Aralık December geldi. Bir yılda on iki ay vardı. Her ayın farklı havası, farklı renkleri ve farklı anıları vardı.',
          gorsel: anl('ga-anlatim-2'),
        },
        {
          metin:
            'Duvar saati tik tak ediyordu. Öğretmen sordu: "Saat kaç?" Elanaz cevap verdi: "Zaman İngilizcede Time demek!" Berk de ekledi: "Tek bir gün Day, bir ay Month! Takvimde günleri ve ayları İngilizce öğrenmek çok kolaymış." Artık her sabah saate bakıp "What time is it?" diye sorabiliyorlardı. Günler, aylar ve zaman — hepsi İngilizce kelimelerle çok daha eğlenceliydi!',
          gorsel: anl('ga-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
