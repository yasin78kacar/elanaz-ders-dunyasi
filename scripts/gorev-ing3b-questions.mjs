/** GOREV-ING3B — Weather (Hava Durumu) */

const KAZANIM = 'ING.2.3.2';

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
  boslukEkle(s, 'hd-a1', 'Hava durumu kelimesinin İngilizcesi ......... kelimesidir.', 'weather', '', { gorsel: nesne('gunes-bulutlar') });
  dyEkle(s, 'hd-a2', 'Güneşli havalara İngilizcede "Sunny" denir.', 'Doğru', '', { gorsel: nesne('pirl-pirl-gunes') });
  boslukEkle(s, 'hd-a3', 'Yağmurlu havanın İngilizce karşılığı ......... kelimesidir.', 'rainy', '', { gorsel: nesne('yagmur-damlalari') });
  dyEkle(s, 'hd-a4', 'Karlı hava İngilizcede "Snowy" olarak söylenir.', 'Doğru', '', { gorsel: nesne('kardan-adam') });
  boslukEkle(s, 'hd-a5', 'Rüzgarlı havalara İngilizcede ......... denir.', 'windy', '', { gorsel: nesne('ucan-yapraklar') });
  dyEkle(s, 'hd-a6', '"Cloudy" kelimesi Türkçede bulutlu hava demektir.', 'Doğru', '', { gorsel: nesne('gri-bulutlar') });
  boslukEkle(s, 'hd-a7', 'Hava çok sıcak olduğunda İngilizcede ......... kelimesini kullanırız.', 'hot', '', { gorsel: nesne('terleyen-cocuk') });
  dyEkle(s, 'hd-a8', '"Cold" kelimesi soğuk anlamına gelir.', 'Doğru', '', { gorsel: nesne('titreyen-cocuk') });
  boslukEkle(s, 'hd-a9', '"Sunny" (güneşli) günlerde şapka ve ......... takarız.', 'gözlük', '', { gorsel: nesne('gunes-gozlugu'), alternatifCevaplar: ['gozluk'] });
  dyEkle(s, 'hd-a10', '"Rainy" (yağmurlu) günlerde şemsiyemizi yanımızdan ayırmayız.', 'Doğru', '', { gorsel: nesne('semsiye-acan') });
  boslukEkle(s, 'hd-a11', '"Snowy" (karlı) günlerde dışarıda ......... oynayabiliriz.', 'kartopu', '', { gorsel: nesne('kartopu-oynayan') });
  dyEkle(s, 'hd-a12', '"Windy" (rüzgarlı) havalarda uçurtma uçurmak çok zor olur.', 'Yanlış', '', { gorsel: nesne('ucurtma') });
  boslukEkle(s, 'hd-a13', 'Gökyüzünü bulutlar kapladığında hava "........." olur.', 'cloudy', '', { gorsel: nesne('gokyuzu-bulutlar') });
  dyEkle(s, 'hd-a14', '"Hot" (sıcak) kelimesi genellikle yaz mevsimi için kullanılır.', 'Doğru', '', { gorsel: nesne('yaz-gunesi') });
  boslukEkle(s, 'hd-a15', 'Kışın hava "........." (soğuk) olduğu için kalın giyiniriz.', 'cold', '', { gorsel: nesne('kislik-atki') });
  dyEkle(s, 'hd-a16', '"Weather" kelimesi İngilizcede hava durumu demektir.', 'Doğru', '', { gorsel: nesne('hava-durumu-sunucusu') });
  boslukEkle(s, 'hd-a17', 'Güneş kelimesinin İngilizcesi "........." olarak yazılır.', 'sun', '', { gorsel: nesne('sapsari-gunes') });
  dyEkle(s, 'hd-a18', 'Yağmur kelimesi İngilizcede "Rain" demektir.', 'Doğru', '', { gorsel: nesne('yagmur-bulutu') });
  boslukEkle(s, 'hd-a19', 'Kar tanesinin İngilizce karşılığı "........." kelimesidir.', 'snow', '', { gorsel: nesne('kar-tanesi') });
  dyEkle(s, 'hd-a20', 'Rüzgar kelimesi İngilizcede "Wind" olarak söylenir.', 'Doğru', '', { gorsel: nesne('ruzgar-gulu') });
  boslukEkle(s, 'hd-a21', 'Bulut kelimesinin İngilizcesi "........." kelimesidir.', 'cloud', '', { gorsel: nesne('bulut-resmi') });
  dyEkle(s, 'hd-a22', '"Hot" havalarda denize girip serinlemek çok güzeldir.', 'Doğru', '', { gorsel: nesne('plaj-resmi') });
  boslukEkle(s, 'hd-a23', 'Hava "........." (soğuk) olduğunda soba veya kalorifer yanar.', 'cold', '', { gorsel: nesne('ates-basinda') });
  dyEkle(s, 'hd-a24', '"Rainy" kelimesi karlı hava anlamına gelir.', 'Yanlış', '', { gorsel: nesne('simsek') });
  boslukEkle(s, 'hd-a25', 'Hava durumunu öğrenmek, doğru kıyafetler seçmemizi ......... .', 'sağlar', '', { gorsel: nesne('hava-durumu-sembolleri'), alternatifCevaplar: ['saglar'] });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('hd-t1', 'İngilizcede "Hava Durumu" kelimesinin karşılığı nedir?', 'Weather', ['Time', 'Weather', 'Months', 'Colors'], '', { gorsel: nesne('hava-durumu-sembolleri') });
  e('hd-t2', 'Gökyüzünün açık ve güneşli olduğu günlere İngilizcede ne deriz?', 'Sunny', ['Rainy', 'Snowy', 'Sunny', 'Cloudy'], '', { gorsel: nesne('pirl-pirl-gunesli-gun') });
  e('hd-t3', 'Yağmurlu havaların İngilizce karşılığı aşağıdakilerden hangisidir?', 'Rainy', ['Rainy', 'Sunny', 'Hot', 'Windy'], '', { gorsel: nesne('semsiye-tutan') });
  e('hd-t4', 'Lapa lapa kar yağan kış günlerine İngilizcede ne denir?', 'Snowy', ['Cloudy', 'Rainy', 'Snowy', 'Hot'], '', { gorsel: nesne('kardan-adam-kar') });
  e('hd-t5', 'Ağaç dallarının sallandığı rüzgarlı havaların İngilizcesi nedir?', 'Windy', ['Sunny', 'Windy', 'Snowy', 'Cold'], '', { gorsel: nesne('ruzgar-yapraklar') });
  e('hd-t6', 'Güneşin görünmediği, bulutlu havalara ne ad verilir?', 'Cloudy', ['Cloudy', 'Windy', 'Rainy', 'Sunny'], '', { gorsel: nesne('bulutlu-gokyuzu') });
  e('hd-t7', 'Havanın çok sıcak olduğunu anlatmak için hangi İngilizce kelimeyi kullanırız?', 'Hot', ['Cold', 'Windy', 'Hot', 'Snowy'], '', { gorsel: nesne('terleyen-dondurma') });
  e('hd-t8', 'Havanın buz gibi soğuk olduğunu ifade eden kelime hangisidir?', 'Cold', ['Hot', 'Cold', 'Sunny', 'Rain'], '', { gorsel: nesne('titreyen-kalin-giyinen') });
  e('hd-t9', '"Rainy" kelimesinin Türkçedeki anlamı nedir?', 'Yağmurlu', ['Güneşli', 'Bulutlu', 'Karlı', 'Yağmurlu'], '', { gorsel: nesne('yagmur-semsiye') });
  e('hd-t10', 'Hangi havada şapka ve güneş gözlüğü takarız?', 'Sunny', ['Snowy', 'Sunny', 'Rainy', 'Windy'], '', { gorsel: nesne('gunes-gozlugu-test') });
  e('hd-t11', 'Hangi havada dışarıda kartopu oynamak çok keyiflidir?', 'Snowy', ['Snowy', 'Hot', 'Sunny', 'Rainy'], '', { gorsel: nesne('kartopu-oynayan-iki') });
  e('hd-t12', '"Windy" kelimesinin Türkçe karşılığı nedir?', 'Rüzgarlı', ['Sisli', 'Sıcak', 'Rüzgarlı', 'Yağmurlu'], '', { gorsel: nesne('ruzgar-gulu-donuyor') });
  e('hd-t13', '"Cloudy" kelimesi ne anlama gelir?', 'Bulutlu', ['Güneşli', 'Karlı', 'Bulutlu', 'Soğuk'], '', { gorsel: nesne('bulutlu-gokyuzu') });
  e('hd-t14', '"Hot" kelimesinin anlamı nedir?', 'Sıcak', ['Soğuk', 'Sıcak', 'Rüzgarlı', 'Bulutlu'], '', { gorsel: nesne('kirmizi-termometre') });
  e('hd-t15', '"Cold" kelimesi Türkçeye nasıl çevrilir?', 'Soğuk', ['Soğuk', 'Sıcak', 'Güneşli', 'Yağmurlu'], '', { gorsel: nesne('mavi-termometre') });
  e('hd-t16', 'Rüzgarlı (Windy) bir günde aşağıdakilerden hangisini yapmak çok eğlencelidir?', 'Uçurtma uçurmak', ['Denize girmek', 'Kardan adam yapmak', 'Uçurtma uçurmak', 'Şemsiye açmak'], '', { gorsel: nesne('ucurtma-ucuran') });
  e('hd-t17', 'İngilizcede "Sun" kelimesi ne demektir?', 'Güneş', ['Ay', 'Yıldız', 'Bulut', 'Güneş'], '', { gorsel: nesne('gunes-resmi') });
  e('hd-t18', 'İngilizce "Snow" kelimesinin anlamı nedir?', 'Kar', ['Yağmur', 'Kar', 'Rüzgar', 'Dolu'], '', { gorsel: nesne('kar-tanesi-resmi') });
  e('hd-t19', '"Rain" kelimesinin Türkçesi nedir?', 'Yağmur', ['Yağmur', 'Sis', 'Kar', 'Güneş'], '', { gorsel: nesne('yagmur-damlasi') });
  e('hd-t20', '"Cloud" kelimesi hangi anlama gelir?', 'Bulut', ['Rüzgar', 'Yağmur', 'Bulut', 'Kar'], '', { gorsel: nesne('bulut-resmi-test') });
  e('hd-t21', '"Hot" ve "Cold" kelimeleri sırasıyla ne anlama gelir?', 'Sıcak ve Soğuk', ['Soğuk ve Sıcak', 'Sıcak ve Soğuk', 'Güneşli ve Yağmurlu', 'Karlı ve Rüzgarlı'], '', { gorsel: nesne('sicak-corbasi-soguk-dondurma') });
  e('hd-t22', '"Sunny and Rainy" kelimeleri sırasıyla hangi havaları anlatır?', 'Güneşli ve Yağmurlu', ['Güneşli ve Yağmurlu', 'Karlı ve Rüzgarlı', 'Sıcak ve Soğuk', 'Bulutlu ve Sisli'], '', { gorsel: nesne('gunesli-yagmurlu-semboller') });
  e('hd-t23', 'Çok "Hot" (Sıcak) bir günde ne yapmayı tercih ederiz?', 'Serinletici sular içip gölgede dinlenmeyi', ['Atkı takmayı', 'Kartopu oynamayı', 'Serinletici sular içip gölgede dinlenmeyi', 'Kalın mont giymeyi'], '', { gorsel: nesne('plaj-manzarasi') });
  e('hd-t24', '"Cold" (Soğuk) bir kış akşamında evde ne yapmak güzeldir?', 'Sıcak bir çay veya süt içmek', ['Denize girmek', 'Sıcak bir çay veya süt içmek', 'Şortla dolaşmak', 'Güneş gözlüğü takmak'], '', { gorsel: nesne('somine-aile') });
  e('hd-t25', 'Dışarıya çıkmadan önce doğru kıyafetleri seçmek için neye bakarız?', 'Weather (Hava durumu)', ['Numbers (Sayılar)', 'Colors (Renkler)', 'Body Parts (Vücut bölümleri)', 'Weather (Hava durumu)'], '', { gorsel: nesne('pencereden-bakan') });
  return s;
}

export function havaDurumu(karistir) {
  return {
    id: 'hava-durumu',
    baslik: 'Weather',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Güzel bir ilkbahar sabahında Ayşe ve Mehmet pencerelerinden gökyüzüne bakıyorlardı. Gökyüzünde sapsarı bir Güneş onlara gülümsüyordu. Mehmet neşeyle, "Ayşe bak, hava çok güneşli! Güneşli havalara İngilizcede Sunny diyoruz," dedi. Ayşe hemen güneş gözlüğünü taktı. Öğleden sonra ise aniden pamuk gibi gri bulutlar toplandı ve tıp tıp yağmur yağmaya başladı. Ayşe şemsiyesini açarken, "Yağmur yağıyor, yani hava Rainy oldu!" dedi. Güneşli (Sunny) ve yağmurlu (Rainy) günler, doğanın bize oynadığı neşeli bir oyun gibiydi. Yağmurlu günlerde camdan damlaları izlemek de en az güneşli günlerde parkta koşmak kadar keyifliydi.',
          gorsel: anl('hd-anlatim-1'),
        },
        {
          metin:
            'Kış mevsimi geldiğinde her yer bembeyaz bir örtüyle kaplanmıştı. Fatma ve Can atkılarını sarıp bahçeye çıktılar. Can havaya zıplayarak, "Her yer kar! Hava karlı, yani Snowy!" diye bağırdı. Birlikte havuç burunlu harika bir kardan adam yaptılar. O sırada ağaçların dalları şiddetle sallanmaya başladı. Fatma rüzgarı hissedince, "Rüzgar esiyor Can, hava çok rüzgarlı. Buna İngilizcede Windy diyoruz," diye anlattı. Karlı (Snowy) havalarda kartopu oynamak, rüzgarlı (Windy) havalarda ise renkli uçurtmalar uçurmak çok güzeldi. Gökyüzü onlara her gün yepyeni bir İngilizce kelime hediye ediyordu.',
          gorsel: anl('hd-anlatim-2'),
        },
        {
          metin:
            'Hafta sonu Selin ve Yusuf dışarı çıkmak için hava durumunu kontrol ettiler. Yusuf termometreye baktı, "Hava bugün çok sıcak Selin, yani Hot!" dedi. Yaz aylarında havalar her zaman çok Hot (Sıcak) olurdu. Kışın ise tam tersiydi; hava buz gibi soğuk, yani "Cold" olurdu. Selin gökyüzüne baktı, Güneş yoktu ve her yer bulutlarla doluydu. "Hava bugün bulutlu, İngilizcede buna Cloudy diyoruz," dedi. Sıcak (Hot) havalarda dondurma yerken, soğuk (Cold) ve bulutlu (Cloudy) havalarda evde sıcak çikolata içmek harikaydı. Hava durumu (Weather) ne olursa olsun, çocuklar İngilizce kelimeleri öğrenirken hep çok mutluydular.',
          gorsel: anl('hd-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
