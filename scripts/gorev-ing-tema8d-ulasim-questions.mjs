/** GOREV-ING-TEMA8D — Transport (Ulaşım) */

const KAZANIM = 'ING.2.8.4';

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
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
  boslukEkle(s, 'ts-a1', 'Araba kelimesinin İngilizcesi ......... kelimesidir.', 'car', '', { gorsel: nesne('araba-yol') });
  dyEkle(s, 'ts-a2', 'Otobüs İngilizcede "Bus" demektir.', 'Doğru', '', { gorsel: nesne('sari-otobus') });
  boslukEkle(s, 'ts-a3', 'Tren kelimesinin İngilizcesi ......... kelimesidir.', 'train', '', { gorsel: nesne('tren') });
  dyEkle(s, 'ts-a4', 'Uçak İngilizcede "Plane" olarak söylenir.', 'Doğru', '', { gorsel: nesne('ucak') });
  boslukEkle(s, 'ts-a5', 'Gemi kelimesinin İngilizcesi ......... kelimesidir.', 'ship', '', { gorsel: nesne('gemi') });
  dyEkle(s, 'ts-a6', 'Bisiklet İngilizcede "Bike" demektir.', 'Doğru', '', { gorsel: nesne('bisiklet-park') });
  boslukEkle(s, 'ts-a7', 'Ulaşım kelimesinin İngilizcesi "........." kelimesidir.', 'transport', '', { gorsel: nesne('araba-yol') });
  dyEkle(s, 'ts-a8', '"Train" kelimesi tren anlamına gelir.', 'Doğru', '', { gorsel: nesne('tren-ray') });
  boslukEkle(s, 'ts-a9', 'Okula otobüsle gideriz. İngilizcesi "School ........." demektir.', 'bus', '', { gorsel: nesne('okul-otobusu') });
  dyEkle(s, 'ts-a10', 'Uçak gökyüzünde uçar.', 'Doğru', '', { gorsel: nesne('ucak-gokyuzu') });
  boslukEkle(s, 'ts-a11', 'Denizde yolculuk için ......... kullanırız.', 'ship', '', { gorsel: nesne('gemi-deniz') });
  dyEkle(s, 'ts-a12', '"Car" kelimesi araba demektir.', 'Doğru', '', { gorsel: nesne('mavi-araba') });
  boslukEkle(s, 'ts-a13', 'Havaalanında ......... görürüz.', 'plane', '', { gorsel: nesne('havaalani-ucak') });
  dyEkle(s, 'ts-a14', 'Tren istasyonunda "Train station" deriz.', 'Doğru', '', { gorsel: nesne('tren-istasyon') });
  boslukEkle(s, 'ts-a15', 'Parkta bisiklete binmek "Ride a ........." demektir.', 'bike', '', { gorsel: nesne('oyuncak-bisiklet') });
  dyEkle(s, 'ts-a16', 'Otobüs şehir içinde insan taşır.', 'Doğru', '', { gorsel: nesne('sari-otobus') });
  boslukEkle(s, 'ts-a17', 'Hızlı uçak İngilizcede "........." olarak adlandırılır.', 'plane', '', { gorsel: nesne('ucak-hizli') });
  dyEkle(s, 'ts-a18', '"Ship" ve "Boat" deniz taşıtlarıdır.', 'Doğru', '', { gorsel: nesne('gemi-deniz') });
  boslukEkle(s, 'ts-a19', 'Yolda giden araçlara "........." (ulaşım araçları) deriz.', 'vehicles', '', { gorsel: nesne('araba-yol') });
  dyEkle(s, 'ts-a20', 'Araba ile okula gitmek mümkündür.', 'Doğru', '', { gorsel: nesne('mavi-araba') });
  boslukEkle(s, 'ts-a21', 'Raylarda giden taşıt ......... kelimesidir.', 'train', '', { gorsel: nesne('tren-ray') });
  dyEkle(s, 'ts-a22', '"Bus" kelimesi otobüs demektir.', 'Doğru', '', { gorsel: nesne('okul-otobusu') });
  boslukEkle(s, 'ts-a23', 'Gökyüzünde uçan taşıt ......... kelimesidir.', 'plane', '', { gorsel: nesne('ucak') });
  dyEkle(s, 'ts-a24', 'Bisiklet sürmek sağlıklı bir ulaşım yoludur.', 'Doğru', '', { gorsel: nesne('bisiklet-park') });
  boslukEkle(s, 'ts-a25', 'Ulaşım araçlarını İngilizcede "........." deriz.', 'transport', '', { gorsel: nesne('sari-otobus') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ts-t1', 'Arabanın İngilizce adı nedir?', 'Car', ['Car', 'Bus', 'Train', 'Plane'], '', { gorsel: nesne('araba-yol') });
  e('ts-t2', 'Otobüsün İngilizce adı hangisidir?', 'Bus', ['Bus', 'Car', 'Ship', 'Bike'], '', { gorsel: nesne('sari-otobus') });
  e('ts-t3', 'Trenin İngilizce adı nedir?', 'Train', ['Train', 'Plane', 'Car', 'Ship'], '', { gorsel: nesne('tren') });
  e('ts-t4', 'Uçağın İngilizce adı nedir?', 'Plane', ['Plane', 'Train', 'Bus', 'Ship'], '', { gorsel: nesne('ucak') });
  e('ts-t5', 'Geminin İngilizce adı hangisidir?', 'Ship', ['Ship', 'Car', 'Bus', 'Train'], '', { gorsel: nesne('gemi') });
  e('ts-t6', 'Bisikletin İngilizce adı nedir?', 'Bike', ['Bike', 'Bus', 'Train', 'Plane'], '', { gorsel: nesne('bisiklet-park') });
  e('ts-t7', 'Ulaşım kelimesinin İngilizcesi nedir?', 'Transport', ['Transport', 'Sport', 'Fruit', 'Country'], '', { gorsel: nesne('araba-yol') });
  e('ts-t8', 'Okul otobüsünün İngilizcesi nedir?', 'School bus', ['School bus', 'School car', 'School train', 'School plane'], '', { gorsel: nesne('okul-otobusu') });
  e('ts-t9', 'Hangi taşıt gökyüzünde uçar?', 'Plane', ['Plane', 'Train', 'Ship', 'Bike'], '', { gorsel: nesne('ucak-gokyuzu') });
  e('ts-t10', 'Hangi taşıt denizde gider?', 'Ship', ['Ship', 'Bus', 'Car', 'Train'], '', { gorsel: nesne('gemi-deniz') });
  e('ts-t11', 'Tren istasyonunun İngilizcesi nedir?', 'Train station', ['Train station', 'Bus stop', 'Airport', 'Harbor'], '', { gorsel: nesne('tren-istasyon') });
  e('ts-t12', 'Havaalanında hangi taşıt görülür?', 'Plane', ['Plane', 'Train', 'Ship', 'Bike'], '', { gorsel: nesne('havaalani-ucak') });
  e('ts-t13', '"Car" kelimesinin anlamı nedir?', 'Araba', ['Otobüs', 'Araba', 'Tren', 'Uçak'], '', { gorsel: nesne('mavi-araba') });
  e('ts-t14', 'Raylarda giden taşıt hangisidir?', 'Train', ['Train', 'Bus', 'Car', 'Plane'], '', { gorsel: nesne('tren-ray') });
  e('ts-t15', 'Bisiklet sürmek İngilizcede nasıl söylenir?', 'Ride a bike', ['Ride a bike', 'Drive a car', 'Fly a plane', 'Sail a ship'], '', { gorsel: nesne('oyuncak-bisiklet') });
  e('ts-t16', 'Hangi eşleştirme doğrudur?', 'Bus = Otobüs', ['Bus = Araba', 'Bus = Otobüs', 'Train = Uçak', 'Ship = Bisiklet'], '', { gorsel: nesne('sari-otobus') });
  e('ts-t17', 'Şehir içi toplu taşıma aracı hangisidir?', 'Bus', ['Bus', 'Plane', 'Ship', 'Plane'], '', { gorsel: nesne('okul-otobusu') });
  e('ts-t18', '"Plane" kelimesi hangi taşıtı ifade eder?', 'Uçak', ['Gemi', 'Uçak', 'Tren', 'Araba'], '', { gorsel: nesne('ucak-hizli') });
  e('ts-t19', 'Deniz yolculuğu için hangi taşıt kullanılır?', 'Ship', ['Ship', 'Car', 'Bus', 'Bike'], '', { gorsel: nesne('gemi') });
  e('ts-t20', 'En hızlı ulaşım aracı hangisidir?', 'Plane', ['Bike', 'Bus', 'Train', 'Plane'], '', { gorsel: nesne('ucak') });
  e('ts-t21', '"Train" kelimesinin anlamı nedir?', 'Tren', ['Otobüs', 'Tren', 'Gemi', 'Araba'], '', { gorsel: nesne('tren') });
  e('ts-t22', 'Hangi taşıt iki tekerleklidir?', 'Bike', ['Bike', 'Car', 'Bus', 'Train'], '', { gorsel: nesne('bisiklet-park') });
  e('ts-t23', 'Araba ile gitmek İngilizcede nasıl ifade edilir?', 'Go by car', ['Go by car', 'Go by plane', 'Go by ship', 'Go by train'], '', { gorsel: nesne('araba-yol') });
  e('ts-t24', '"Transport" kelimesinin anlamı nedir?', 'Ulaşım', ['Spor', 'Ulaşım', 'Meyve', 'Ülke'], '', { gorsel: nesne('mavi-araba') });
  e('ts-t25', 'Okula gitmek için hangi taşıtlar kullanılabilir?', 'Bus or car', ['Only plane', 'Bus or car', 'Only ship', 'Only bike'], '', { gorsel: nesne('okul-otobusu') });
  return s;
}

export function ulasim(karistir) {
  return {
    id: 'ulasim',
    baslik: 'Transport',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz okula giderken farklı ulaşım araçları gördü. Sarı otobüs Bus, mavi araba Car! Her araç farklı yere gider.', gorsel: anl('ts-anlatim-1') },
        { metin: 'İstasyonda tren Train beklediler. Havaalanında uçak Plane, denizde gemi Ship! Transport kelimesi tüm ulaşım araçlarını kapsıyordu.', gorsel: anl('ts-anlatim-2') },
        { metin: 'Parkta bisiklete bindi: Ride a bike! Okul otobüsü School bus ile eve döndü. Ulaşım araçlarını bilmek çok işe yarıyordu!', gorsel: anl('ts-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
