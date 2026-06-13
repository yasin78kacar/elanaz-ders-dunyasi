/** GOREV-ING2A — Animals (Hayvanlar) */

const KAZANIM = 'ING.2.2.1';

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
  boslukEkle(s, 'hy-a1', 'Kedi kelimesinin İngilizcesi ......... kelimesidir.', 'cat', '', { gorsel: nesne('kedi-sevimli') });
  dyEkle(s, 'hy-a2', 'İngilizcede köpek "Dog" demektir.', 'Doğru', '', { gorsel: nesne('kopek-nese') });
  boslukEkle(s, 'hy-a3', 'Kuş kelimesinin İngilizce karşılığı ......... kelimesidir.', 'bird', '', { gorsel: nesne('kus-mavi') });
  dyEkle(s, 'hy-a4', 'Balık İngilizcede "Fish" olarak söylenir.', 'Doğru', '', { gorsel: nesne('balik-akvaryum') });
  boslukEkle(s, 'hy-a5', 'İnek kelimesinin İngilizcesi ......... kelimesidir.', 'cow', '', { gorsel: nesne('inek-ciftlik') });
  dyEkle(s, 'hy-a6', '"Sheep" kelimesi Türkçede at anlamına gelir.', 'Yanlış', '', { gorsel: nesne('koyun-otlayan') });
  boslukEkle(s, 'hy-a7', 'At kelimesinin İngilizce yazılışı ......... kelimesidir.', 'horse', '', { gorsel: nesne('at-kosan') });
  dyEkle(s, 'hy-a8', 'Tavuk İngilizcede "Chicken" demektir.', 'Doğru', '', { gorsel: nesne('tavuk-kumes') });
  boslukEkle(s, 'hy-a9', 'Aslan kelimesinin İngilizcesi ......... kelimesidir.', 'lion', '', { gorsel: nesne('aslan-orman') });
  dyEkle(s, 'hy-a10', 'Fil İngilizcede "Elephant" olarak yazılır.', 'Doğru', '', { gorsel: nesne('fil-hortum') });
  boslukEkle(s, 'hy-a11', 'Ağaçlarda zıplayan maymunun İngilizcesi ......... kelimesidir.', 'monkey', '', { gorsel: nesne('maymun-dal') });
  dyEkle(s, 'hy-a12', '"Cat" kelimesi Türkçede köpek demektir.', 'Yanlış', '', { gorsel: nesne('kedi-yavrusu') });
  dyEkle(s, 'hy-a13', '"Fish" kelimesi hem balık hem de balıklar anlamına gelebilir.', 'Doğru', '', { gorsel: nesne('yuzme-balik') });
  boslukEkle(s, 'hy-a14', 'İngilizcede ata binmek için sevimli bir "........." (at) gerekir.', 'horse', '', { gorsel: nesne('at-binen') });
  boslukEkle(s, 'hy-a15', 'Bize faydalı sütler veren ineğe İngilizcede "........." deriz.', 'cow', '', { gorsel: nesne('inek-sut') });
  dyEkle(s, 'hy-a16', '"Dog" kelimesi Türkçede kuş anlamına gelir.', 'Yanlış', '', { gorsel: nesne('havlayan-kopek') });
  boslukEkle(s, 'hy-a17', 'Güzel şarkılar söyleyen kuşa İngilizcede "........." adını veririz.', 'bird', '', { gorsel: nesne('kafes-kus') });
  dyEkle(s, 'hy-a18', '"Lion" kelimesi Türkçede ormanlar kralı olan aslan demektir.', 'Doğru', '', { gorsel: nesne('aslan-kukruyor') });
  boslukEkle(s, 'hy-a19', 'Dünyanın en büyük kara hayvanı olan filin İngilizcesi "........." olarak söylenir.', 'elephant', '', { gorsel: nesne('buyuk-fil') });
  dyEkle(s, 'hy-a20', '"Monkey" kelimesi inek anlamına gelir.', 'Yanlış', '', { gorsel: nesne('muz-maymun') });
  boslukEkle(s, 'hy-a21', 'Bize yün veren koyunun İngilizcesi "........." kelimesidir.', 'sheep', '', { gorsel: nesne('yunlu-koyun') });
  dyEkle(s, 'hy-a22', '"Chicken" kelimesi bize yumurta veren tavuk demektir.', 'Doğru', '', { gorsel: nesne('yumurtlayan-tavuk') });
  boslukEkle(s, 'hy-a23', '"Cats" ifadesi Türkçede ......... (birden fazla kedi) demektir.', 'kediler', '', { gorsel: nesne('kedi-surusu') });
  dyEkle(s, 'hy-a24', 'İki köpek İngilizcede "Two dogs" olarak söylenir.', 'Doğru', '', { gorsel: nesne('iki-kopek') });
  boslukEkle(s, 'hy-a25', 'Hayvanlar kelimesinin İngilizcesi "........." kelimesidir.', 'animals', '', { gorsel: nesne('orman-hayvan') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('hy-t1', 'Evimizde beslediğimiz sevimli kedinin İngilizcesi nedir?', 'Cat', ['Dog', 'Cat', 'Bird', 'Fish'], '', { gorsel: nesne('miyavlayan-kedi') });
  e('hy-t2', 'Bize dost olan ve evimizi koruyan köpeğin İngilizce adı hangisidir?', 'Dog', ['Dog', 'Lion', 'Sheep', 'Cow'], '', { gorsel: nesne('kuyruk-sallayan-kopek') });
  e('hy-t3', 'Ağaçlara yuva yapan ve gökyüzünde uçan kuşun İngilizcesi nedir?', 'Bird', ['Elephant', 'Monkey', 'Fish', 'Bird'], '', { gorsel: nesne('ucan-kus-gokyuzu') });
  e('hy-t4', 'Suda nefes alan ve yüzen balığın İngilizcesi aşağıdakilerden hangisidir?', 'Fish', ['Fish', 'Bird', 'Horse', 'Cat'], '', { gorsel: nesne('turuncu-balik') });
  e('hy-t5', 'Çiftlikte bize sağlıklı süt veren ineğin İngilizce karşılığı nedir?', 'Cow', ['Cow', 'Dog', 'Sheep', 'Lion'], '', { gorsel: nesne('cimen-inek') });
  e('hy-t6', 'Yumuşacık yünleri olan koyunun İngilizcesi hangi seçenekte doğru verilmiştir?', 'Sheep', ['Horse', 'Monkey', 'Sheep', 'Bird'], '', { gorsel: nesne('beyaz-koyun') });
  e('hy-t7', 'Çok hızlı koşan ve yelesi olan atın İngilizcesi nedir?', 'Horse', ['Elephant', 'Horse', 'Chicken', 'Cat'], '', { gorsel: nesne('kosan-at') });
  e('hy-t8', 'Çiftlikte sabahları bize yumurta veren tavuğun İngilizcesi nedir?', 'Chicken', ['Fish', 'Cow', 'Chicken', 'Lion'], '', { gorsel: nesne('gidaklayan-tavuk') });
  e('hy-t9', 'Ormanların kralı olarak bilinen aslanın İngilizcesi nedir?', 'Lion', ['Lion', 'Monkey', 'Dog', 'Sheep'], '', { gorsel: nesne('kukreyen-aslan') });
  e('hy-t10', 'Hortumu ve kocaman kulakları olan filin İngilizcesi hangisidir?', 'Elephant', ['Elephant', 'Bird', 'Fish', 'Horse'], '', { gorsel: nesne('kulakli-fil') });
  e('hy-t11', 'Ağaçlarda zıplayan ve muz yemeyi çok seven maymunun İngilizce adı nedir?', 'Monkey', ['Cat', 'Chicken', 'Cow', 'Monkey'], '', { gorsel: nesne('muz-yiyen-maymun') });
  e('hy-t12', 'Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?', 'Koyun = Bird', ['Kedi = Cat', 'Köpek = Dog', 'Koyun = Bird', 'İnek = Cow'], 'Sheep koyun demektir!', { gorsel: nesne('ciftlik-manzara'), sasirtma: true });
  e('hy-t13', '"Bird" ve "Fish" kelimeleri sırasıyla hangi hayvanlardır?', 'Kuş ve Balık', ['Kedi ve Köpek', 'Kuş ve Balık', 'At ve Koyun', 'Aslan ve Fil'], '', { gorsel: grup(['kus-mavi', 'balik-akvaryum'], ['kus-mavi', 'balik-akvaryum']) });
  e('hy-t14', 'Hayvanlar kelimesinin genel İngilizce adı nedir?', 'Animals', ['Colors', 'Numbers', 'Animals', 'Family'], '', { gorsel: nesne('orman-hayvan') });
  e('hy-t15', '"Horse" kelimesinin Türkçedeki anlamı nedir?', 'At', ['At', 'Tavuk', 'Köpek', 'Kedi'], '', { gorsel: grup(['at-kosan', 'tavuk-kumes'], 'at-kosan') });
  e('hy-t16', 'İngilizce "Monkey" denildiğinde aklımıza hangi hayvan gelir?', 'Maymun', ['Aslan', 'Maymun', 'Balık', 'Fil'], '', { gorsel: nesne('sevimli-maymun') });
  e('hy-t17', 'Aşağıdakilerden hangisi gökyüzünde uçar?', 'Bird', ['Dog', 'Horse', 'Bird', 'Cow'], '', { gorsel: grup(['ucan-kus-gokyuzu', 'kosan-at'], 'ucan-kus-gokyuzu') });
  e('hy-t18', 'Evcil dostlarımız olan "Cat and Dog" hangi iki hayvandır?', 'Kedi ve Köpek', ['Kedi ve Köpek', 'Aslan ve Kaplan', 'At ve İnek', 'Kuş ve Balık'], '', { gorsel: nesne('evde-kedi-kopek') });
  e('hy-t19', '"Cow" kelimesi Türkçede hangi anlama gelir?', 'İnek', ['Tavuk', 'At', 'Koyun', 'İnek'], '', { gorsel: nesne('cayir-inek-koyun') });
  e('hy-t20', 'Dünyanın en büyük hayvanlarından olan "Elephant" ne demektir?', 'Fil', ['Fil', 'Aslan', 'Maymun', 'Koyun'], '', { gorsel: nesne('fil-hortum-yakin') });
  e('hy-t21', 'Bize yün veren "Sheep" kelimesi hangi hayvandır?', 'Koyun', ['İnek', 'At', 'Koyun', 'Köpek'], '', { gorsel: nesne('koyun-yun') });
  e('hy-t22', '"Chicken" kelimesi hangi hayvanın İngilizce adıdır?', 'Tavuk', ['Aslan', 'Kuş', 'Tavuk', 'Maymun'], '', { gorsel: nesne('tavuk-yumurta') });
  e('hy-t23', '"Fish" nerede yaşar?', 'Suda', ['Suda', 'Gökyüzünde', 'Ağaçta', 'Toprak altında'], '', { gorsel: nesne('suda-balik') });
  e('hy-t24', '"Lion" kelimesinin Türkçe karşılığı hangisidir?', 'Aslan', ['At', 'Fil', 'Aslan', 'Maymun'], '', { gorsel: nesne('aslan-kafasi') });
  e('hy-t25', 'İngilizcesi "Cat" olan hayvan hangisidir?', 'Kedi', ['Kedi', 'Kuş', 'Köpek', 'İnek'], '', { gorsel: nesne('sevimli-hayvanlar') });
  return s;
}

export function hayvanlar(karistir) {
  return {
    id: 'hayvanlar',
    baslik: 'Animals',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Ali ve Zeynep parkta yürüdü. Kedinin İngilizcesi Cat, köpeğin Dog, kuşun Bird, akvaryumdaki balığın Fish olduğunu öğrendiler. Hayvan dostlarımızın İngilizce isimlerini bilmek çok eğlenceliydi!',
          gorsel: anl('hy-anlatim-1'),
        },
        {
          metin:
            'Berk ve Fatma dedelerinin çiftliğine gittiler. İnek Cow, koyun Sheep, at Horse, tavuk Chicken! Çiftlik hayatı İngilizce kelimelerle çok daha neşeli bir yer haline gelmişti.',
          gorsel: anl('hy-anlatim-2'),
        },
        {
          metin:
            'Can ve Hande doğa belgeseli izlediler. Aslan Lion, fil Elephant, maymun Monkey! Dünyamızdaki tüm hayvanları korumak ve onları çok sevmek zorundaydık.',
          gorsel: anl('hy-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
