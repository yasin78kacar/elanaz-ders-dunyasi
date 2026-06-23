/** GOREV-ING-TEMA5C — Shapes (Geometrik Şekiller) */

const KAZANIM = 'ING.2.5.3';

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
  boslukEkle(s, 'sk-a1', 'Daire kelimesinin İngilizcesi ......... kelimesidir.', 'circle', '', { gorsel: nesne('daire-sekil') });
  boslukEkle(s, 'sk-a2', 'Kare kelimesinin İngilizcesi ......... kelimesidir.', 'square', '', { gorsel: nesne('kare-sekil') });
  dyEkle(s, 'sk-a3', 'Üçgen İngilizcede "Triangle" demektir.', 'Doğru', '', { gorsel: nesne('ucgen-sekil') });
  boslukEkle(s, 'sk-a4', 'Dikdörtgen kelimesinin İngilizcesi ......... kelimesidir.', 'rectangle', '', { gorsel: nesne('dikdortgen-sekil') });
  dyEkle(s, 'sk-a5', 'Yıldız şeklinin İngilizcesi "Star" olarak söylenir.', 'Doğru', '', { gorsel: nesne('yildiz-sekil') });
  boslukEkle(s, 'sk-a6', 'Kalp şeklinin İngilizcesi ......... kelimesidir.', 'heart', '', { gorsel: nesne('kalp-sekil') });
  dyEkle(s, 'sk-a7', '"Circle" kelimesi Türkçede kare demektir.', 'Yanlış', '', { gorsel: nesne('top-sekli') });
  boslukEkle(s, 'sk-a8', 'Şekiller kelimesinin İngilizcesi "........." kelimesidir.', 'shapes', '', { gorsel: nesne('renkli-sekiller') });
  dyEkle(s, 'sk-a9', '"Square" kelimesi dört eşit kenarlı kare şeklidir.', 'Doğru', '', { gorsel: nesne('kare-kutu') });
  boslukEkle(s, 'sk-a10', 'Oval şeklinin İngilizcesi ......... kelimesidir.', 'oval', '', { gorsel: nesne('oval-sekil') });
  dyEkle(s, 'sk-a11', '"Triangle" kelimesi üç kenarlı şekil demektir.', 'Doğru', '', { gorsel: nesne('ucgen-cad') });
  boslukEkle(s, 'sk-a12', 'Elmas şeklinin İngilizcesi ......... kelimesidir.', 'diamond', '', { gorsel: nesne('elmas-sekil') });
  dyEkle(s, 'sk-a13', 'Futbol topu bir "Circle" (daire) şekline benzer.', 'Doğru', '', { gorsel: nesne('futbol-topu') });
  boslukEkle(s, 'sk-a14', 'Pencere çoğu zaman ......... (dikdörtgen) şeklindedir.', 'rectangle', '', { gorsel: nesne('pencere') });
  dyEkle(s, 'sk-a15', '"Heart" kelimesi kalp şekli demektir.', 'Doğru', '', { gorsel: nesne('kalp-cizim') });
  boslukEkle(s, 'sk-a16', 'Çadırın çatısı ......... (üçgen) şeklindedir.', 'triangle', '', { gorsel: nesne('ucgen-cad') });
  dyEkle(s, 'sk-a17', '"Star" kelimesi yıldız şekli anlamına gelir.', 'Doğru', '', { gorsel: nesne('yildiz-parlak') });
  boslukEkle(s, 'sk-a18', 'Zarın her yüzü bir ......... (kare) şeklindedir.', 'square', '', { gorsel: nesne('zar-kup') });
  dyEkle(s, 'sk-a19', '"Oval" kelimesi yumurta şekline benzer.', 'Doğru', '', { gorsel: nesne('yumurta-sekil') });
  boslukEkle(s, 'sk-a20', 'Gökkuşağındaki yıldız desenine "........." deriz.', 'star', '', { gorsel: nesne('yildiz-sekil') });
  dyEkle(s, 'sk-a21', '"Diamond" kelimesi elmas şekli demektir.', 'Doğru', '', { gorsel: nesne('elmas-sekil') });
  boslukEkle(s, 'sk-a22', 'Şekiller konusunda "........." (şekiller) kelimesini kullanırız.', 'shapes', '', { gorsel: nesne('sekil-panosu') });
  dyEkle(s, 'sk-a23', 'Daire ve kare aynı şekildir.', 'Yanlış', '', { gorsel: nesne('daire-kare-karsilastirma') });
  boslukEkle(s, 'sk-a24', 'Üçgenin İngilizcesi ......... kelimesidir.', 'triangle', '', { gorsel: nesne('ucgen-sekil') });
  dyEkle(s, 'sk-a25', '"Rectangle" kelimesi dikdörtgen demektir.', 'Doğru', '', { gorsel: nesne('dikdortgen-sekil') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('sk-t1', 'Top gibi yuvarlak şeklin İngilizcesi nedir?', 'Circle', ['Square', 'Circle', 'Triangle', 'Star'], '', { gorsel: nesne('top-sekli') });
  e('sk-t2', 'Dört eşit kenarlı karenin İngilizcesi hangisidir?', 'Square', ['Square', 'Circle', 'Heart', 'Oval'], '', { gorsel: nesne('kare-sekil') });
  e('sk-t3', 'Üç kenarlı şeklin İngilizce adı nedir?', 'Triangle', ['Triangle', 'Rectangle', 'Diamond', 'Star'], '', { gorsel: nesne('ucgen-sekil') });
  e('sk-t4', 'Kitap gibi uzun dörtgen şeklin İngilizcesi nedir?', 'Rectangle', ['Rectangle', 'Circle', 'Triangle', 'Heart'], '', { gorsel: nesne('dikdortgen-sekil') });
  e('sk-t5', 'Gökyüzündeki parlayan yıldız şeklinin İngilizcesi nedir?', 'Star', ['Star', 'Square', 'Oval', 'Diamond'], '', { gorsel: nesne('yildiz-sekil') });
  e('sk-t6', 'Sevgi sembolü kalp şeklinin İngilizcesi hangisidir?', 'Heart', ['Heart', 'Circle', 'Triangle', 'Square'], '', { gorsel: nesne('kalp-sekil') });
  e('sk-t7', 'Şekiller kelimesinin İngilizcesi nedir?', 'Shapes', ['Colors', 'Shapes', 'Numbers', 'Animals'], '', { gorsel: nesne('renkli-sekiller') });
  e('sk-t8', 'Yumurtaya benzeyen şeklin İngilizcesi nedir?', 'Oval', ['Oval', 'Square', 'Star', 'Triangle'], '', { gorsel: nesne('oval-sekil') });
  e('sk-t9', 'Elmas şeklinin İngilizce karşılığı nedir?', 'Diamond', ['Diamond', 'Heart', 'Circle', 'Rectangle'], '', { gorsel: nesne('elmas-sekil') });
  e('sk-t10', '"Circle" kelimesinin Türkçe anlamı nedir?', 'Daire', ['Kare', 'Daire', 'Üçgen', 'Yıldız'], '', { gorsel: nesne('daire-sekil') });
  e('sk-t11', 'Çadırın çatısı hangi şekle benzer?', 'Triangle', ['Circle', 'Square', 'Triangle', 'Oval'], '', { gorsel: nesne('ucgen-cad') });
  e('sk-t12', 'Zarın yüzleri hangi şekildedir?', 'Square', ['Square', 'Circle', 'Star', 'Heart'], '', { gorsel: nesne('zar-kup') });
  e('sk-t13', '"Square" ve "Rectangle" kelimeleri sırasıyla ne demektir?', 'Kare ve Dikdörtgen', ['Daire ve Kare', 'Kare ve Dikdörtgen', 'Üçgen ve Yıldız', 'Kalp ve Elmas'], '', { gorsel: grup(['kare-sekil', 'dikdortgen-sekil'], ['kare-sekil', 'dikdortgen-sekil']) });
  e('sk-t14', 'Hangi şekil yuvarlaktır?', 'Circle', ['Square', 'Triangle', 'Circle', 'Rectangle'], '', { gorsel: nesne('top-sekli') });
  e('sk-t15', '"Triangle" kelimesinin anlamı nedir?', 'Üçgen', ['Kare', 'Daire', 'Üçgen', 'Yıldız'], '', { gorsel: nesne('ucgen-sekil') });
  e('sk-t16', 'Aşağıdakilerden hangisi dört kenarlıdır?', 'Rectangle', ['Circle', 'Oval', 'Rectangle', 'Star'], '', { gorsel: nesne('dikdortgen-sekil') });
  e('sk-t17', '"Heart" kelimesi hangi şekli ifade eder?', 'Kalp', ['Yıldız', 'Kalp', 'Elmas', 'Daire'], '', { gorsel: nesne('kalp-cizim') });
  e('sk-t18', 'Pencere genelde hangi şekildedir?', 'Rectangle', ['Circle', 'Triangle', 'Rectangle', 'Star'], '', { gorsel: nesne('pencere') });
  e('sk-t19', '"Star" kelimesinin Türkçe karşılığı nedir?', 'Yıldız', ['Kalp', 'Yıldız', 'Elmas', 'Kare'], '', { gorsel: nesne('yildiz-parlak') });
  e('sk-t20', 'Futbol topu hangi şekle benzer?', 'Circle', ['Square', 'Triangle', 'Circle', 'Diamond'], '', { gorsel: nesne('futbol-topu') });
  e('sk-t21', '"Shapes" kelimesi ne anlama gelir?', 'Şekiller', ['Renkler', 'Sayılar', 'Şekiller', 'Hayvanlar'], '', { gorsel: nesne('sekil-panosu') });
  e('sk-t22', 'Hangi eşleştirme YANLIŞTIR?', 'Daire = Square', ['Daire = Circle', 'Kare = Square', 'Daire = Square', 'Üçgen = Triangle'], 'Circle daire demektir!', { gorsel: nesne('daire-kare-karsilastirma'), sasirtma: true });
  e('sk-t23', '"Oval" kelimesi hangi şekle benzer?', 'Yumurta', ['Kare', 'Yumurta', 'Üçgen', 'Yıldız'], '', { gorsel: nesne('yumurta-sekil') });
  e('sk-t24', '"Diamond" kelimesinin anlamı nedir?', 'Elmas şekli', ['Kalp', 'Yıldız', 'Elmas şekli', 'Daire'], '', { gorsel: nesne('elmas-sekil') });
  e('sk-t25', 'Üç kenarı olan şekil hangisidir?', 'Triangle', ['Circle', 'Square', 'Triangle', 'Rectangle'], '', { gorsel: nesne('ucgen-sekil') });
  return s;
}

export function sekiller(karistir) {
  return {
    id: 'sekiller-ing',
    baslik: 'Shapes',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz ve Berk sınıfta şekil panosu hazırladılar. Daire Circle, kare Square, üçgen Triangle! Renkli şekiller duvara asılınca sınıf çok neşeli oldu.', gorsel: anl('sk-anlatim-1') },
        { metin: 'Öğretmen dikdörtgen Rectangle, yıldız Star ve kalp Heart şekillerini gösterdi. "Shapes" kelimesi tüm şekillerin adıydı. Her şekil farklı ve güzeldi!', gorsel: anl('sk-anlatim-2') },
        { metin: 'Parkta top Circle, çadır Triangle, pencere Rectangle şeklindeydi. Şekilleri İngilizce öğrenmek çevremizdeki her şeyi daha eğlenceli yapıyordu.', gorsel: anl('sk-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
