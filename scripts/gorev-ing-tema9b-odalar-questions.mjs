/** GOREV-ING-TEMA9B — Rooms (Odalar) */
const KAZANIM = 'ING.2.9.2';
const anl = (sahne) => ({ tur: 'ingilizce', mod: 'anlatim', sahne });
const nesne = (n, extra = {}) => ({ tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra });
const bosluk = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu: '', cevapTipi: 'metin', gorsel: nesne(g) });
const dy = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu: '', cevapTipi: 'metin', alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'], gorsel: nesne(g) });
const test = (s, id, soru, cevap, sec, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler: sec, ipucu: '', gorsel: nesne(g) });

function alistirma() {
  const s = [];
  bosluk(s, 'od-a1', 'Yatak odası kelimesinin İngilizcesi ......... kelimesidir.', 'bedroom', 'yatak-odasi');
  dy(s, 'od-a2', 'Mutfak İngilizcede "Kitchen" demektir.', 'Doğru', 'mutfak');
  bosluk(s, 'od-a3', 'Banyo kelimesinin İngilizcesi ......... kelimesidir.', 'bathroom', 'banyo');
  dy(s, 'od-a4', 'Oturma odası İngilizcede "Living room" olarak söylenir.', 'Doğru', 'oturma-odasi');
  bosluk(s, 'od-a5', 'Oda kelimesinin İngilizcesi ......... kelimesidir.', 'room', 'ev-odalari');
  dy(s, 'od-a6', 'Yemek odasında yemek yenir.', 'Doğru', 'yemek-odasi');
  bosluk(s, 'od-a7', 'Balkon kelimesinin İngilizcesi ......... kelimesidir.', 'balcony', 'balkon');
  dy(s, 'od-a8', 'Garaj arabaların park ettiği yerdir.', 'Doğru', 'garaj');
  bosluk(s, 'od-a9', 'Merdiven kelimesinin İngilizcesi ......... kelimesidir.', 'stairs', 'merdiven');
  dy(s, 'od-a10', 'Koridor İngilizcede "Hallway" denir.', 'Doğru', 'koridor');
  bosluk(s, 'od-a11', 'Çalışma odası İngilizcede "........." room kelimesidir.', 'study', 'calisma-odasi');
  dy(s, 'od-a12', 'Yatak odasında uyuruz.', 'Doğru', 'yatak-odasi');
  bosluk(s, 'od-a13', 'Kapı kelimesinin İngilizcesi ......... kelimesidir.', 'door', 'kapi');
  dy(s, 'od-a14', 'Pencere İngilizcede "Window" demektir.', 'Doğru', 'pencere');
  bosluk(s, 'od-a15', 'Ev kelimesinin İngilizcesi ......... kelimesidir.', 'house', 'ev-dis');
  dy(s, 'od-a16', 'Mutfakta yemek pişirilir.', 'Doğru', 'mutfak-ocak');
  bosluk(s, 'od-a17', 'Salon İngilizcede "........." room olarak söylenir.', 'living', 'oturma-odasi');
  dy(s, 'od-a18', 'Banyoda duş alınır.', 'Doğru', 'banyo-dus');
  bosluk(s, 'od-a19', 'Bahçe kelimesinin İngilizcesi ......... kelimesidir.', 'garden', 'bahce');
  dy(s, 'od-a20', 'Çatı katı İngilizcede "Attic" denir.', 'Doğru', 'cati-kati');
  bosluk(s, 'od-a21', 'Evimizde birçok ......... (oda) vardır.', 'room', 'ev-odalari');
  dy(s, 'od-a22', 'Oturma odasında TV izlenir.', 'Doğru', 'tv-oturma-odasi');
  bosluk(s, 'od-a23', 'Zemin kat İngilizcede "Ground ........." olarak söylenir.', 'floor', 'zemin-kat');
  dy(s, 'od-a24', 'Yatak odasında dolap vardır.', 'Doğru', 'yatak-odasi-dolap');
  bosluk(s, 'od-a25', 'Tuvalet kelimesinin İngilizcesi ......... kelimesidir.', 'toilet', 'tuvalet');
  return s;
}

function testSorular(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, g) => test(s, id, soru, cevap, karistir(sec), g);
  e('od-t1', 'Uyuduğumuz odanın İngilizcesi nedir?', 'Bedroom', ['Kitchen', 'Bedroom', 'Bathroom', 'Garage'], 'yatak-odasi');
  e('od-t2', 'Yemek pişirilen odanın İngilizcesi nedir?', 'Kitchen', ['Kitchen', 'Bedroom', 'Garden', 'Garage'], 'mutfak');
  e('od-t3', 'Duş aldığımız odanın İngilizcesi nedir?', 'Bathroom', ['Bathroom', 'Kitchen', 'Bedroom', 'Balcony'], 'banyo');
  e('od-t4', 'TV izlediğimiz odanın İngilizcesi nedir?', 'Living room', ['Living room', 'Kitchen', 'Garage', 'Garden'], 'oturma-odasi');
  e('od-t5', '"Room" kelimesinin anlamı nedir?', 'Oda', ['Ev', 'Oda', 'Kapı', 'Pencere'], 'ev-odalari');
  e('od-t6', 'Yemek yenilen odanın İngilizcesi nedir?', 'Dining room', ['Dining room', 'Bedroom', 'Bathroom', 'Garage'], 'yemek-odasi');
  e('od-t7', 'Balkonun İngilizcesi nedir?', 'Balcony', ['Balcony', 'Kitchen', 'Bedroom', 'Stairs'], 'balkon');
  e('od-t8', 'Arabanın park ettiği yerin İngilizcesi nedir?', 'Garage', ['Garage', 'Kitchen', 'Bedroom', 'Garden'], 'garaj');
  e('od-t9', 'Merdivenin İngilizcesi nedir?', 'Stairs', ['Stairs', 'Door', 'Window', 'Balcony'], 'merdiven');
  e('od-t10', 'Koridorun İngilizcesi nedir?', 'Hallway', ['Hallway', 'Kitchen', 'Garden', 'Garage'], 'koridor');
  e('od-t11', 'Çalışma odasının İngilizcesi nedir?', 'Study room', ['Study room', 'Bathroom', 'Garage', 'Balcony'], 'calisma-odasi');
  e('od-t12', 'Kapının İngilizcesi nedir?', 'Door', ['Door', 'Window', 'Wall', 'Floor'], 'kapi');
  e('od-t13', 'Pencerenin İngilizcesi nedir?', 'Window', ['Window', 'Door', 'Stairs', 'Roof'], 'pencere');
  e('od-t14', 'Evin İngilizcesi nedir?', 'House', ['House', 'Room', 'Door', 'Garden'], 'ev-dis');
  e('od-t15', 'Bahçenin İngilizcesi nedir?', 'Garden', ['Garden', 'Kitchen', 'Bathroom', 'Garage'], 'bahce');
  e('od-t16', 'Hangi odada uyuruz?', 'Bedroom', ['Kitchen', 'Bedroom', 'Bathroom', 'Garage'], 'yatak-odasi');
  e('od-t17', 'Hangi odada yemek pişirilir?', 'Kitchen', ['Kitchen', 'Bedroom', 'Bathroom', 'Garden'], 'mutfak-ocak');
  e('od-t18', 'Tuvaletin İngilizcesi nedir?', 'Toilet', ['Toilet', 'Kitchen', 'Garden', 'Garage'], 'tuvalet');
  e('od-t19', 'Çatı katının İngilizcesi nedir?', 'Attic', ['Attic', 'Kitchen', 'Garage', 'Balcony'], 'cati-kati');
  e('od-t20', 'Zemin katın İngilizcesi nedir?', 'Ground floor', ['Ground floor', 'Attic', 'Roof', 'Balcony'], 'zemin-kat');
  e('od-t21', 'Oturma odasında ne izlenir?', 'TV', ['Food', 'TV', 'Shower', 'Car'], 'tv-oturma-odasi');
  e('od-t22', 'Banyoda ne yapılır?', 'Take a shower', ['Cook food', 'Take a shower', 'Watch TV', 'Park car'], 'banyo-dus');
  e('od-t23', 'Evde kaç oda olabilir?', 'Many rooms', ['One room', 'Many rooms', 'No rooms', 'Only kitchen'], 'ev-odalari');
  e('od-t24', 'Mutfak ve banyo evin hangi bölümleridir?', 'Rooms', ['Sports', 'Rooms', 'Colors', 'Numbers'], 'ev-odalari');
  e('od-t25', 'Yatak odasında ne vardır?', 'Bed', ['Stove', 'Bed', 'Car', 'Tree'], 'yatak-odasi');
  return s;
}

export function odalar(karistir) {
  return {
    id: 'odalar',
    baslik: 'Rooms',
    kazanimKodu: KAZANIM,
    anlatim: { ekranlar: [
      { metin: 'Elanaz evini tanıttı. "This is my bedroom. This is the kitchen." Her odanın bir adı vardı. Ev çok sıcaktı.', gorsel: anl('od-anlatim-1') },
      { metin: 'Banyoda dişlerini fırçaladı. Oturma odasında ailesiyle TV izledi. "I love my house!" dedi.', gorsel: anl('od-anlatim-2') },
      { metin: 'Bahçede oynadılar. "The garden is beautiful!" dedi Berk. Evin her odası farklıydı ve hepsi güzeldi.', gorsel: anl('od-anlatim-3') },
    ]},
    alistirma: alistirma(),
    test: testSorular(karistir),
  };
}
