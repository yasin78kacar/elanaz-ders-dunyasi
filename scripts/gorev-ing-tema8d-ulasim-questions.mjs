/** GOREV-ING-TEMA8D — Transport (Ulaşım) */

const KAZANIM = 'ING.2.8.4';

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
  boslukEkle(s, 'ul-a1', 'Araba kelimesinin İngilizcesi ......... kelimesidir.', 'car', '', { gorsel: nesne('mavi-araba') });
  dyEkle(s, 'ul-a2', 'Otobüs İngilizcede "Bus" demektir.', 'Doğru', '', { gorsel: nesne('sari-otobus') });
  boslukEkle(s, 'ul-a3', 'Tren kelimesinin İngilizcesi ......... kelimesidir.', 'train', '', { gorsel: nesne('tren') });
  dyEkle(s, 'ul-a4', 'Uçak İngilizcede "Plane" veya "Airplane" olarak söylenir.', 'Doğru', '', { gorsel: nesne('ucak') });
  boslukEkle(s, 'ul-a5', 'Bisiklet kelimesinin İngilizcesi ......... kelimesidir.', 'bike', '', { gorsel: nesne('oyuncak-bisiklet') });
  dyEkle(s, 'ul-a6', 'Gemi İngilizcede "Ship" demektir.', 'Doğru', '', { gorsel: nesne('gemi') });
  boslukEkle(s, 'ul-a7', 'Motosiklet kelimesinin İngilizcesi ......... kelimesidir.', 'motorcycle', '', { gorsel: nesne('motosiklet') });
  dyEkle(s, 'ul-a8', '"Car" kelimesi araba demektir.', 'Doğru', '', { gorsel: nesne('mavi-araba') });
  boslukEkle(s, 'ul-a9', 'Okula otobüsle giderken "........." kullanırız.', 'bus', '', { gorsel: nesne('okul-otobusu') });
  dyEkle(s, 'ul-a10', 'Tren raylarda gider.', 'Doğru', '', { gorsel: nesne('tren-ray') });
  boslukEkle(s, 'ul-a11', 'Taşıtlar kelimesinin İngilizcesi "........." kelimesidir.', 'transport', '', { gorsel: nesne('tasitlar-grup') });
  dyEkle(s, 'ul-a12', '"Plane" kelimesi uçak demektir.', 'Doğru', '', { gorsel: nesne('ucak-gokyuzu') });
  boslukEkle(s, 'ul-a13', 'Denizde yüzen büyük taşıta "........." deriz.', 'ship', '', { gorsel: nesne('gemi-deniz') });
  dyEkle(s, 'ul-a14', 'Bisiklet iki tekerleklidir.', 'Doğru', '', { gorsel: nesne('bisiklet-park') });
  boslukEkle(s, 'ul-a15', 'Hızlı motosiklete İngilizcede "........." denir.', 'motorcycle', '', { gorsel: nesne('motosiklet') });
  dyEkle(s, 'ul-a16', '"Bus" kelimesi otobüs demektir.', 'Doğru', '', { gorsel: nesne('sari-otobus') });
  boslukEkle(s, 'ul-a17', 'Gökyüzünde uçan taşıt "........." dir.', 'plane', '', { gorsel: nesne('ucak'), alternatifCevaplar: ['airplane'] });
  dyEkle(s, 'ul-a18', 'Araba yolda gider.', 'Doğru', '', { gorsel: nesne('araba-yol') });
  boslukEkle(s, 'ul-a19', 'Tren istasyonunda "........." bekleriz.', 'train', '', { gorsel: nesne('tren-istasyon') });
  dyEkle(s, 'ul-a20', '"Ship" kelimesi gemi demektir.', 'Doğru', '', { gorsel: nesne('gemi') });
  boslukEkle(s, 'ul-a21', 'Okula "Go by ........." (otobüsle gitmek) deriz.', 'bus', '', { gorsel: nesne('okul-otobusu') });
  dyEkle(s, 'ul-a22', 'Ulaşım araçları bizi bir yerden başka yere götürür.', 'Doğru', '', { gorsel: nesne('tasitlar-grup') });
  boslukEkle(s, 'ul-a23', 'Havaalanında "........." görürüz.', 'plane', '', { gorsel: nesne('havaalani-ucak') });
  dyEkle(s, 'ul-a24', '"Transport" kelimesi ulaşım demektir.', 'Doğru', '', { gorsel: nesne('tasitlar-grup') });
  boslukEkle(s, 'ul-a25', 'En hızlı taşıt genelde "........." dir.', 'plane', '', { gorsel: nesne('ucak-hizli') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ul-t1', 'Arabanın İngilizcesi nedir?', 'Car', ['Car', 'Bus', 'Train', 'Ship'], '', { gorsel: nesne('mavi-araba') });
  e('ul-t2', 'Otobüsün İngilizcesi hangisidir?', 'Bus', ['Bus', 'Car', 'Plane', 'Bike'], '', { gorsel: nesne('sari-otobus') });
  e('ul-t3', 'Trenin İngilizcesi nedir?', 'Train', ['Train', 'Ship', 'Car', 'Plane'], '', { gorsel: nesne('tren') });
  e('ul-t4', 'Uçağın İngilizcesi hangisidir?', 'Plane', ['Plane', 'Bus', 'Bike', 'Ship'], '', { gorsel: nesne('ucak') });
  e('ul-t5', 'Bisikletin İngilizcesi nedir?', 'Bike', ['Bike', 'Car', 'Train', 'Ship'], '', { gorsel: nesne('bisiklet-park') });
  e('ul-t6', 'Geminin İngilizcesi hangisidir?', 'Ship', ['Ship', 'Plane', 'Bus', 'Car'], '', { gorsel: nesne('gemi-deniz') });
  e('ul-t7', 'Motosikletin İngilizcesi nedir?', 'Motorcycle', ['Motorcycle', 'Bicycle', 'Car', 'Bus'], '', { gorsel: nesne('motosiklet') });
  e('ul-t8', 'Ulaşım kelimesinin İngilizcesi nedir?', 'Transport', ['Transport', 'Sport', 'Job', 'Toy'], '', { gorsel: nesne('tasitlar-grup') });
  e('ul-t9', 'Okula otobüsle gitmek İngilizcede nasıl söylenir?', 'Go by bus', ['Go by bus', 'Go by plane', 'Go by ship', 'Go by train only'], '', { gorsel: nesne('okul-otobusu') });
  e('ul-t10', 'Gökyüzünde uçan taşıt hangisidir?', 'Plane', ['Plane', 'Car', 'Ship', 'Train'], '', { gorsel: nesne('ucak-gokyuzu') });
  e('ul-t11', 'Denizde giden taşıt hangisidir?', 'Ship', ['Ship', 'Bus', 'Car', 'Bike'], '', { gorsel: nesne('gemi') });
  e('ul-t12', 'Raylarda giden taşıt hangisidir?', 'Train', ['Train', 'Car', 'Plane', 'Ship'], '', { gorsel: nesne('tren-ray') });
  e('ul-t13', '"Car" kelimesinin anlamı nedir?', 'Araba', ['Otobüs', 'Araba', 'Uçak', 'Gemi'], '', { gorsel: nesne('araba-yol') });
  e('ul-t14', 'Hangi taşıt iki tekerleklidir?', 'Bike', ['Bike', 'Bus', 'Train', 'Ship'], '', { gorsel: nesne('bisiklet-park') });
  e('ul-t15', 'En hızlı ulaşım aracı genelde hangisidir?', 'Plane', ['Bike', 'Bus', 'Plane', 'Ship'], '', { gorsel: nesne('ucak-hizli') });
  e('ul-t16', '"Bus" ve "Car" için ortak özellik nedir?', 'İkisi de karayolunda gider', ['İkisi de suda gider', 'İkisi de karayolunda gider', 'İkisi de havada uçar', 'İkisi de rayda gider'], '', { gorsel: grup(['mavi-araba', 'sari-otobus'], ['mavi-araba', 'sari-otobus']) });
  e('ul-t17', 'Tren istasyonunda ne bekleriz?', 'Train', ['Plane', 'Train', 'Ship', 'Bike'], '', { gorsel: nesne('tren-istasyon') });
  e('ul-t18', 'Havaalanında hangi taşıtı görürüz?', 'Plane', ['Plane', 'Ship', 'Train', 'Bike'], '', { gorsel: nesne('havaalani-ucak') });
  e('ul-t19', '"Transport" ne anlama gelir?', 'Ulaşım', ['Spor', 'Ulaşım', 'Meslek', 'Oyuncak'], '', { gorsel: nesne('tasitlar-grup') });
  e('ul-t20', 'Hangi eşleştirme doğrudur?', 'Ship = Gemi', ['Plane = Gemi', 'Ship = Gemi', 'Bus = Uçak', 'Car = Tren'], '', { gorsel: nesne('gemi-deniz') });
  e('ul-t21', 'Okul servisi hangi taşıttır?', 'Bus', ['Bus', 'Plane', 'Ship', 'Train'], '', { gorsel: nesne('okul-otobusu') });
  e('ul-t22', '"Motorcycle" ne demektir?', 'Motosiklet', ['Bisiklet', 'Motosiklet', 'Araba', 'Otobüs'], '', { gorsel: nesne('motosiklet') });
  e('ul-t23', 'Taşıtlar bizi nereye götürür?', 'Bir yerden başka yere', ['Sadece okula', 'Bir yerden başka yere', 'Sadece eve', 'Hiçbir yere'], '', { gorsel: nesne('tasitlar-grup') });
  e('ul-t24', '"Train" kelimesinin anlamı nedir?', 'Tren', ['Otobüs', 'Tren', 'Uçak', 'Gemi'], '', { gorsel: nesne('tren') });
  e('ul-t25', 'Karayolunda giden iki taşıt hangileridir?', 'Car and Bus', ['Ship and Plane', 'Car and Bus', 'Train and Ship', 'Plane and Bike'], '', { gorsel: nesne('tasitlar-grup') });
  return s;
}

export function ulasim(karistir) {
  return {
    id: 'ulasim',
    baslik: 'Transport',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz okula otobüsle gitti: "Go by bus!" Babası arabayla işe gitti: "Car!" Her gün farklı bir taşıt kullanıyorlardı.', gorsel: anl('ul-anlatim-1') },
        { metin: 'Tatilde trene bindiler: "Train!" Uçakla gökyüzüne çıktılar: "Plane!" Gemiyle denize açıldılar: "Ship!" Transport kelimesi tüm taşıtları kapsıyordu.', gorsel: anl('ul-anlatim-2') },
        { metin: 'Berk bisikletine bindi: "Bike!" Motosiklet gördü: "Motorcycle!" Taşıtları İngilizce öğrenmek yolculukları daha eğlenceli yapıyordu.', gorsel: anl('ul-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
