/** GOREV-ING-TEMA8B — Instruments (Enstrümanlar) */

const KAZANIM = 'ING.2.8.2';

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
  boslukEkle(s, 'en-a1', 'Enstrüman kelimesinin İngilizcesi ......... kelimesidir.', 'instrument', '', { gorsel: nesne('muzik-enstrumanlari') });
  dyEkle(s, 'en-a2', 'Piyano İngilizcede "Piano" demektir.', 'Doğru', '', { gorsel: nesne('piyano-tuslari') });
  boslukEkle(s, 'en-a3', 'Gitar kelimesinin İngilizcesi ......... kelimesidir.', 'guitar', '', { gorsel: nesne('gitar-calan') });
  dyEkle(s, 'en-a4', 'Keman İngilizcede "Violin" olarak söylenir.', 'Doğru', '', { gorsel: nesne('keman-calan') });
  boslukEkle(s, 'en-a5', 'Davul kelimesinin İngilizcesi ......... kelimesidir.', 'drum', '', { gorsel: nesne('davul-calan') });
  dyEkle(s, 'en-a6', 'Flüt İngilizcede "Flute" demektir.', 'Doğru', '', { gorsel: nesne('flut-calan') });
  boslukEkle(s, 'en-a7', 'Trompet kelimesinin İngilizcesi ......... kelimesidir.', 'trumpet', '', { gorsel: nesne('trompet-calan') });
  dyEkle(s, 'en-a8', '"Piano" kelimesi piyano demektir.', 'Doğru', '', { gorsel: nesne('piyano-tuslari') });
  boslukEkle(s, 'en-a9', 'Müzik aletleri İngilizcede "Musical ........." olarak adlandırılır.', 'instruments', '', { gorsel: nesne('muzik-enstrumanlari') });
  dyEkle(s, 'en-a10', 'Gitar çalmak "Play the guitar" demektir.', 'Doğru', '', { gorsel: nesne('gitar-calan') });
  boslukEkle(s, 'en-a11', 'Piyano çalmak İngilizcede "Play the ........." olarak söylenir.', 'piano', '', { gorsel: nesne('piyano-calan') });
  dyEkle(s, 'en-a12', '"Drum" kelimesi davul demektir.', 'Doğru', '', { gorsel: nesne('davul-calan') });
  boslukEkle(s, 'en-a13', 'Keman çalan kişiye "........." player deriz.', 'violin', '', { gorsel: nesne('keman-calan') });
  dyEkle(s, 'en-a14', 'Flüt üflemeli bir enstrümandır.', 'Doğru', '', { gorsel: nesne('flut-calan') });
  boslukEkle(s, 'en-a15', 'Trompet çalmak "Play the ........." demektir.', 'trumpet', '', { gorsel: nesne('trompet-calan') });
  dyEkle(s, 'en-a16', '"Guitar" kelimesi gitar demektir.', 'Doğru', '', { gorsel: nesne('gitar-calan') });
  boslukEkle(s, 'en-a17', 'Okulda müzik dersinde "........." öğreniriz.', 'instruments', '', { gorsel: nesne('muzik-sinifi') });
  dyEkle(s, 'en-a18', 'Piyano tuşlarına basarak müzik yaparız.', 'Doğru', '', { gorsel: nesne('piyano-tuslari') });
  boslukEkle(s, 'en-a19', 'Davula vurmak "Play the ........." demektir.', 'drum', '', { gorsel: nesne('davul-vuran') });
  dyEkle(s, 'en-a20', '"Violin" kelimesi keman demektir.', 'Doğru', '', { gorsel: nesne('keman-calan') });
  boslukEkle(s, 'en-a21', 'Gitar tellerine dokunarak "Play ........." deriz.', 'guitar', '', { gorsel: nesne('gitar-telleri') });
  dyEkle(s, 'en-a22', 'Flüt ve trompet üflemeli enstrümanlardır.', 'Doğru', '', { gorsel: nesne('uflemeli-enstruman') });
  boslukEkle(s, 'en-a23', 'Müzik dersinde en sevdiğim enstrüman "........." dir.', 'piano', '', { gorsel: nesne('piyano-calan'), alternatifCevaplar: ['guitar', 'violin', 'drum', 'flute', 'trumpet'] });
  dyEkle(s, 'en-a24', '"Instrument" kelimesi enstrüman demektir.', 'Doğru', '', { gorsel: nesne('muzik-enstrumanlari') });
  boslukEkle(s, 'en-a25', 'Orkestrada birçok "Musical ........." çalarız.', 'instrument', '', { gorsel: nesne('orkestra') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('en-t1', 'Piyanonun İngilizcesi nedir?', 'Piano', ['Piano', 'Guitar', 'Drum', 'Flute'], '', { gorsel: nesne('piyano-tuslari') });
  e('en-t2', 'Gitar kelimesinin İngilizcesi hangisidir?', 'Guitar', ['Guitar', 'Violin', 'Trumpet', 'Piano'], '', { gorsel: nesne('gitar-calan') });
  e('en-t3', 'Kemanın İngilizcesi nedir?', 'Violin', ['Violin', 'Guitar', 'Drum', 'Flute'], '', { gorsel: nesne('keman-calan') });
  e('en-t4', 'Davul kelimesinin İngilizcesi hangisidir?', 'Drum', ['Drum', 'Piano', 'Guitar', 'Flute'], '', { gorsel: nesne('davul-calan') });
  e('en-t5', 'Flütün İngilizcesi nedir?', 'Flute', ['Flute', 'Trumpet', 'Drum', 'Violin'], '', { gorsel: nesne('flut-calan') });
  e('en-t6', 'Trompetin İngilizcesi hangisidir?', 'Trumpet', ['Trumpet', 'Flute', 'Guitar', 'Piano'], '', { gorsel: nesne('trompet-calan') });
  e('en-t7', 'Enstrüman kelimesinin İngilizcesi nedir?', 'Instrument', ['Instrument', 'Sport', 'Toy', 'Job'], '', { gorsel: nesne('muzik-enstrumanlari') });
  e('en-t8', 'Piyano çalmak İngilizcede nasıl söylenir?', 'Play the piano', ['Play the piano', 'Play football', 'Ride a bike', 'Go to school'], '', { gorsel: nesne('piyano-calan') });
  e('en-t9', 'Gitar çalmak İngilizcede nasıl ifade edilir?', 'Play the guitar', ['Play the guitar', 'Play the drum', 'Play tennis', 'Play school'], '', { gorsel: nesne('gitar-calan') });
  e('en-t10', 'Müzik aletleri İngilizcede nasıl adlandırılır?', 'Musical instruments', ['Musical instruments', 'Sports equipment', 'School supplies', 'Toys'], '', { gorsel: nesne('muzik-sinifi') });
  e('en-t11', '"Drum" kelimesinin anlamı nedir?', 'Davul', ['Gitar', 'Davul', 'Keman', 'Flüt'], '', { gorsel: nesne('davul-vuran') });
  e('en-t12', 'Hangi enstrüman tuşludur?', 'Piano', ['Piano', 'Guitar', 'Drum', 'Flute'], '', { gorsel: nesne('piyano-tuslari') });
  e('en-t13', 'Üflemeli enstrümanlar hangileridir?', 'Flute and Trumpet', ['Piano and Guitar', 'Flute and Trumpet', 'Drum and Violin', 'Guitar and Piano'], '', { gorsel: nesne('uflemeli-enstruman') });
  e('en-t14', '"Violin" kelimesi ne demektir?', 'Keman', ['Gitar', 'Keman', 'Davul', 'Piyano'], '', { gorsel: nesne('keman-calan') });
  e('en-t15', 'Davul çalmak için ne yaparız?', 'Hit the drum', ['Hit the drum', 'Blow the flute', 'Press the keys', 'Pluck the strings'], '', { gorsel: nesne('davul-calan') });
  e('en-t16', 'Orkestrada çok sayıda ne bulunur?', 'Instruments', ['Toys', 'Instruments', 'Cars', 'Foods'], '', { gorsel: nesne('orkestra') });
  e('en-t17', '"Guitar" ve "Violin" için ortak özellik nedir?', 'İkisi de telli enstrümandır', ['İkisi de üflemeli', 'İkisi de telli enstrümandır', 'İkisi de spor aleti', 'İkisi de taşıt'], '', { gorsel: grup(['gitar-calan', 'keman-calan'], ['gitar-calan', 'keman-calan']) });
  e('en-t18', 'Müzik dersinde öğrendiğimiz aletlere ne deriz?', 'Instruments', ['Sports', 'Instruments', 'Jobs', 'Colors'], '', { gorsel: nesne('muzik-sinifi') });
  e('en-t19', '"Play the trumpet" ne demektir?', 'Trompet çalmak', ['Flüt çalmak', 'Trompet çalmak', 'Davul çalmak', 'Gitar çalmak'], '', { gorsel: nesne('trompet-calan') });
  e('en-t20', 'Hangi eşleştirme doğrudur?', 'Piano = Piyano', ['Drum = Gitar', 'Piano = Piyano', 'Flute = Davul', 'Guitar = Keman'], '', { gorsel: nesne('piyano-tuslari') });
  e('en-t21', 'Flüt çalmak için ne yapılır?', 'Blow into the flute', ['Hit with sticks', 'Blow into the flute', 'Press the keys', 'Pluck strings'], '', { gorsel: nesne('flut-calan') });
  e('en-t22', '"Musical instruments" ne anlama gelir?', 'Müzik aletleri', ['Spor malzemeleri', 'Müzik aletleri', 'Okul eşyaları', 'Oyuncaklar'], '', { gorsel: nesne('muzik-enstrumanlari') });
  e('en-t23', 'Piyano tuşları hangi renktedir?', 'Siyah ve beyaz', ['Kırmızı ve mavi', 'Siyah ve beyaz', 'Yeşil ve sarı', 'Turuncu ve pembe'], '', { gorsel: nesne('piyano-tuslari') });
  e('en-t24', 'Hangi enstrüman vurularak çalınır?', 'Drum', ['Flute', 'Drum', 'Violin', 'Guitar'], '', { gorsel: nesne('davul-vuran') });
  e('en-t25', '"Instrument" kelimesinin Türkçe karşılığı nedir?', 'Enstrüman', ['Spor', 'Enstrüman', 'Meslek', 'Taşıt'], '', { gorsel: nesne('muzik-enstrumanlari') });
  return s;
}

export function enstrumanlar(karistir) {
  return {
    id: 'enstrumanlar',
    baslik: 'Instruments',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Müzik sınıfında Elanaz piyanoya dokundu: "Piano!" Berk gitar çaldı: "Guitar!" Öğretmen keman gösterdi: "Violin!" Musical instruments çok eğlenceliydi.', gorsel: anl('en-anlatim-1') },
        { metin: 'Davula vurdular: "Drum!" Flüt üflediler: "Flute!" Trompet sesi sınıfı doldurdu. Her enstrüman farklı ve güzel bir ses çıkarıyordu.', gorsel: anl('en-anlatim-2') },
        { metin: 'Orkestra konserinde birçok instrument bir arada çaldı. "Play the piano, play the guitar!" İngilizce enstrüman adları müziği daha da renkli yapıyordu.', gorsel: anl('en-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
