/** GOREV-ING-TEMA10 — Countries */

const KAZANIM = 'ING.2.10.1';

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
  boslukEkle(s, 'ul-a1', 'Türkiye kelimesinin İngilizcesi ......... kelimesidir.', 'Turkey', '', { gorsel: nesne('turkiye-bayrak') });
  dyEkle(s, 'ul-a2', 'İngiltere İngilizcede "England" demektir.', 'Doğru', '', { gorsel: nesne('ingiltere-bayrak') });
  boslukEkle(s, 'ul-a3', 'Amerika Birleşik Devletleri İngilizcede ......... olarak yazılır.', 'USA', '', { gorsel: nesne('abd-bayrak') });
  dyEkle(s, 'ul-a4', 'Fransa kelimesinin İngilizcesi "France" olarak söylenir.', 'Doğru', '', { gorsel: nesne('fransa-bayrak') });
  boslukEkle(s, 'ul-a5', 'Almanya kelimesinin İngilizcesi ......... kelimesidir.', 'Germany', '', { gorsel: nesne('almanya-bayrak') });
  dyEkle(s, 'ul-a6', 'İtalya İngilizcede "Italy" demektir.', 'Doğru', '', { gorsel: nesne('italya-bayrak') });
  boslukEkle(s, 'ul-a7', 'İspanya kelimesinin İngilizcesi ......... kelimesidir.', 'Spain', '', { gorsel: nesne('ispanya-bayrak') });
  dyEkle(s, 'ul-a8', '"Japan" kelimesi Japonya anlamına gelir.', 'Doğru', '', { gorsel: nesne('japonya-bayrak') });
  boslukEkle(s, 'ul-a9', 'Çin kelimesinin İngilizcesi ......... kelimesidir.', 'China', '', { gorsel: nesne('cin-bayrak') });
  dyEkle(s, 'ul-a10', 'Mısır İngilizcede "Egypt" olarak söylenir.', 'Doğru', '', { gorsel: nesne('misir-bayrak') });
  boslukEkle(s, 'ul-a11', 'Ülke kelimesinin İngilizcesi "........." kelimesidir.', 'country', '', { gorsel: nesne('dunya-haritasi') });
  dyEkle(s, 'ul-a12', '"Brazil" kelimesi Brezilya demektir.', 'Doğru', '', { gorsel: nesne('brezilya-bayrak') });
  boslukEkle(s, 'ul-a13', 'Avustralya kelimesinin İngilizcesi ......... kelimesidir.', 'Australia', '', { gorsel: nesne('avustralya-bayrak') });
  dyEkle(s, 'ul-a14', 'Kanada İngilizcede "Canada" demektir.', 'Doğru', '', { gorsel: nesne('kanada-bayrak') });
  boslukEkle(s, 'ul-a15', 'Hindistan kelimesinin İngilizcesi ......... kelimesidir.', 'India', '', { gorsel: nesne('hindistan-bayrak') });
  dyEkle(s, 'ul-a16', 'Yunanistan İngilizcede "Greece" olarak söylenir.', 'Doğru', '', { gorsel: nesne('yunanistan-bayrak') });
  boslukEkle(s, 'ul-a17', 'Başkent Ankara Türkiye\'nin ......... şehridir.', 'capital', '', { gorsel: nesne('ankara-sehir') });
  dyEkle(s, 'ul-a18', '"London" kelimesi Londra şehridir ve İngiltere\'dedir.', 'Doğru', '', { gorsel: nesne('london-sehir') });
  boslukEkle(s, 'ul-a19', 'Ülkeler konusunda "........." (ülkeler) kelimesini kullanırız.', 'countries', '', { gorsel: nesne('ulkeler-pano') });
  dyEkle(s, 'ul-a20', 'Türkiye\'nin bayrağı kırmızı ve beyazdır.', 'Doğru', '', { gorsel: nesne('turkiye-bayrak') });
  boslukEkle(s, 'ul-a21', 'Rusya kelimesinin İngilizcesi ......... kelimesidir.', 'Russia', '', { gorsel: nesne('rusya-bayrak') });
  dyEkle(s, 'ul-a22', '"France" ve "Germany" ikisi de Avrupa ülkeleridir.', 'Doğru', '', { gorsel: nesne('avrupa-haritasi') });
  boslukEkle(s, 'ul-a23', 'Meksika kelimesinin İngilizcesi ......... kelimesidir.', 'Mexico', '', { gorsel: nesne('meksika-bayrak') });
  dyEkle(s, 'ul-a24', 'Hollanda İngilizcede "Netherlands" demektir.', 'Doğru', '', { gorsel: nesne('hollanda-bayrak') });
  boslukEkle(s, 'ul-a25', 'Kendi ülkemize İngilizcede "My ........." deriz.', 'country', '', { gorsel: nesne('turkiye-bayrak') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ul-t1', 'Türkiye\'nin İngilizce adı nedir?', 'Turkey', ["Turkey","England","France","Japan"], '', { gorsel: nesne('turkiye-bayrak') });
  e('ul-t2', 'İngiltere\'nin İngilizce adı hangisidir?', 'England', ["England","Germany","Spain","China"], '', { gorsel: nesne('ingiltere-bayrak') });
  e('ul-t3', 'Amerika\'nın kısa İngilizce adı nedir?', 'USA', ["USA","UK","EU","UN"], '', { gorsel: nesne('abd-bayrak') });
  e('ul-t4', 'Fransa\'nın İngilizce adı nedir?', 'France', ["France","Italy","Spain","Greece"], '', { gorsel: nesne('fransa-bayrak') });
  e('ul-t5', 'Almanya\'nın İngilizce adı hangisidir?', 'Germany', ["Germany","Greece","Brazil","India"], '', { gorsel: nesne('almanya-bayrak') });
  e('ul-t6', 'İtalya\'nın İngilizce adı nedir?', 'Italy', ["Italy","India","Egypt","Mexico"], '', { gorsel: nesne('italya-bayrak') });
  e('ul-t7', 'İspanya\'nın İngilizce adı nedir?', 'Spain', ["Spain","France","China","Russia"], '', { gorsel: nesne('ispanya-bayrak') });
  e('ul-t8', 'Japonya\'nın İngilizce adı hangisidir?', 'Japan', ["Japan","China","India","Brazil"], '', { gorsel: nesne('japonya-bayrak') });
  e('ul-t9', 'Çin\'in İngilizce adı nedir?', 'China', ["China","Japan","Korea","India"], '', { gorsel: nesne('cin-bayrak') });
  e('ul-t10', 'Mısır\'ın İngilizce adı nedir?', 'Egypt', ["Egypt","Greece","Mexico","Canada"], '', { gorsel: nesne('misir-bayrak') });
  e('ul-t11', 'Ülke kelimesinin İngilizcesi nedir?', 'Country', ["City","Country","School","Fruit"], '', { gorsel: nesne('dunya-haritasi') });
  e('ul-t12', 'Brezilya\'nın İngilizce adı nedir?', 'Brazil', ["Brazil","Australia","Canada","Russia"], '', { gorsel: nesne('brezilya-bayrak') });
  e('ul-t13', 'Avustralya\'nın İngilizce adı hangisidir?', 'Australia', ["Australia","Austria","America","Africa"], '', { gorsel: nesne('avustralya-bayrak') });
  e('ul-t14', 'Kanada\'nın İngilizce adı nedir?', 'Canada', ["Canada","China","Cuba","Chile"], '', { gorsel: nesne('kanada-bayrak') });
  e('ul-t15', 'Hindistan\'ın İngilizce adı nedir?', 'India', ["India","Indonesia","Italy","Ireland"], '', { gorsel: nesne('hindistan-bayrak') });
  e('ul-t16', 'Yunanistan\'ın İngilizce adı nedir?', 'Greece', ["Greece","Germany","Greenland","Georgia"], '', { gorsel: nesne('yunanistan-bayrak') });
  e('ul-t17', 'Türkiye\'nin başkenti Ankara hangi ülkededir?', 'Turkey', ["Turkey","England","France","Spain"], '', { gorsel: nesne('ankara-sehir') });
  e('ul-t18', 'Londra hangi ülkededir?', 'England', ["England","France","Germany","Italy"], '', { gorsel: nesne('london-sehir') });
  e('ul-t19', '"Countries" kelimesinin anlamı nedir?', 'Ülkeler', ["Şehirler","Ülkeler","Meyveler","Yönler"], '', { gorsel: nesne('ulkeler-pano') });
  e('ul-t20', 'Hangi eşleştirme doğrudur?', 'Turkey = Türkiye', ["Turkey = İngiltere","Turkey = Türkiye","France = Almanya","Japan = Çin"], '', { gorsel: nesne('turkiye-bayrak') });
  e('ul-t21', 'Rusya\'nın İngilizce adı nedir?', 'Russia', ["Russia","Romania","Rwanda","Portugal"], '', { gorsel: nesne('rusya-bayrak') });
  e('ul-t22', 'Meksika\'nın İngilizce adı nedir?', 'Mexico', ["Mexico","Egypt","Canada","Greece"], '', { gorsel: nesne('meksika-bayrak') });
  e('ul-t23', 'Hollanda\'nın İngilizce adı nedir?', 'Netherlands', ["Netherlands","Norway","New Zealand","Nigeria"], '', { gorsel: nesne('hollanda-bayrak') });
  e('ul-t24', '"My country" ifadesi ne demektir?', 'Benim ülkem', ["Benim şehrim","Benim ülkem","Benim okulum","Benim evim"], '', { gorsel: nesne('turkiye-bayrak') });
  e('ul-t25', 'Hangi ülke Asya kıtasındadır?', 'Japan', ["England","France","Japan","Spain"], '', { gorsel: nesne('japonya-bayrak') });
  return s;
}

export function ulkeler(karistir) {
  return {
    id: 'ulkeler',
    baslik: 'Countries',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz ve Berk sınıfta dünya haritasına baktılar. Türkiye Turkey, İngiltere England! Her ülkenin bayrağı farklı ve güzeldi.', gorsel: anl('ul-anlatim-1') },
        { metin: 'Öğretmen Fransa France, Almanya Germany ve İspanya Spain ülkelerini gösterdi. "Country" kelimesi ülke demektir. Haritada yeni yerler keşfetmek çok heyecanlıydı!', gorsel: anl('ul-anlatim-2') },
        { metin: 'Japonya Japan, Çin China ve Mısır Egypt haritada uzak ülkelerdi. Elanaz "I love my country Turkey!" dedi. Ülkeleri İngilizce öğrenmek dünyayı tanımak gibiydi.', gorsel: anl('ul-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
