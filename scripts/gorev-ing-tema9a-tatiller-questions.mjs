/** GOREV-ING-TEMA9A — Holidays (Tatiller ve Özel Günler) */
const KAZANIM = 'ING.2.9.1';
const anl = (sahne) => ({ tur: 'ingilizce', mod: 'anlatim', sahne });
const nesne = (n, extra = {}) => ({ tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra });
const bosluk = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu: '', cevapTipi: 'metin', gorsel: nesne(g) });
const dy = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu: '', cevapTipi: 'metin', alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'], gorsel: nesne(g) });
const test = (s, id, soru, cevap, sec, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler: sec, ipucu: '', gorsel: nesne(g) });

function alistirma() {
  const s = [];
  bosluk(s, 'tt-a1', 'Tatil kelimesinin İngilizcesi ......... kelimesidir.', 'holiday', 'tatil-plaj');
  dy(s, 'tt-a2', 'Noel İngilizcede "Christmas" demektir.', 'Doğru', 'noel-agaci');
  bosluk(s, 'tt-a3', 'Doğum günü kelimesinin İngilizcesi ......... kelimesidir.', 'birthday', 'dogum-gunu-pasta');
  dy(s, 'tt-a4', 'Yeni Yıl İngilizcede "New Year" olarak söylenir.', 'Doğru', 'yeni-yil');
  bosluk(s, 'tt-a5', 'Bayram kelimesinin İngilizcesi ......... kelimesidir.', 'festival', 'bayram-kutlama');
  dy(s, 'tt-a6', 'Paskalya İngilizcede "Easter" demektir.', 'Doğru', 'paskalya-yumurtasi');
  bosluk(s, 'tt-a7', 'Hediye kelimesinin İngilizcesi ......... kelimesidir.', 'gift', 'hediye-paketi');
  dy(s, 'tt-a8', 'Doğum gününde pasta kesilir.', 'Doğru', 'dogum-gunu-pasta');
  bosluk(s, 'tt-a9', 'Kutlama kelimesinin İngilizcesi ......... kelimesidir.', 'celebration', 'kutlama-partisi');
  dy(s, 'tt-a10', 'Cadılar Bayramı İngilizcede "Halloween" denir.', 'Doğru', 'cadilar-bayrami');
  bosluk(s, 'tt-a11', 'Sevgililer Günü İngilizcede "........." Day olarak söylenir.', 'Valentine', 'sevgililer-gunu');
  dy(s, 'tt-a12', 'Yaz tatili "Summer holiday" demektir.', 'Doğru', 'yaz-tatili');
  bosluk(s, 'tt-a13', 'Balon kelimesinin İngilizcesi ......... kelimesidir.', 'balloon', 'dogum-gunu-balon');
  dy(s, 'tt-a14', 'Noel Baba İngilizcede "Santa Claus" denir.', 'Doğru', 'noel-baba');
  bosluk(s, 'tt-a15', 'Parti kelimesinin İngilizcesi ......... kelimesidir.', 'party', 'kutlama-partisi');
  dy(s, 'tt-a16', '23 Nisan Çocuk Bayramı kutlanır.', 'Doğru', 'cocuk-bayrami');
  bosluk(s, 'tt-a17', 'Şenlik kelimesinin İngilizcesi ......... kelimesidir.', 'festival', 'sokak-senligi');
  dy(s, 'tt-a18', 'Hediye paketi açmak eğlencelidir.', 'Doğru', 'hediye-paketi');
  bosluk(s, 'tt-a19', 'Kutlamak eyleminin İngilizcesi ......... kelimesidir.', 'celebrate', 'kutlama-yapanlar');
  dy(s, 'tt-a20', 'Yılbaşı gecesi havai fişekler patlar.', 'Doğru', 'yilbasi-havaifisek');
  bosluk(s, 'tt-a21', 'Tatilde dinlenmek "Have a ........." olarak söylenir.', 'holiday', 'tatil-dinlenme');
  dy(s, 'tt-a22', 'Doğum günü şarkısı "Happy Birthday" ile başlar.', 'Doğru', 'dogum-gunu-sarki');
  bosluk(s, 'tt-a23', 'Mum kelimesinin İngilizcesi ......... kelimesidir.', 'candle', 'pasta-mumlari');
  dy(s, 'tt-a24', 'Noelde ağaç süslenir.', 'Doğru', 'noel-agaci');
  bosluk(s, 'tt-a25', 'Özel günler İngilizcede "Special ........." olarak adlandırılır.', 'days', 'ozel-gunler');
  return s;
}

function testSorular(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, g) => test(s, id, soru, cevap, karistir(sec), g);
  e('tt-t1', 'Tatil kelimesinin İngilizcesi nedir?', 'Holiday', ['School', 'Holiday', 'Work', 'Sport'], 'tatil-plaj');
  e('tt-t2', 'Noelin İngilizcesi nedir?', 'Christmas', ['Easter', 'Christmas', 'Halloween', 'Birthday'], 'noel-agaci');
  e('tt-t3', 'Doğum gününün İngilizcesi nedir?', 'Birthday', ['Birthday', 'Holiday', 'Festival', 'Party'], 'dogum-gunu-pasta');
  e('tt-t4', 'Yeni Yılın İngilizcesi nedir?', 'New Year', ['New Year', 'Christmas', 'Easter', 'Summer'], 'yeni-yil');
  e('tt-t5', 'Hediyenin İngilizcesi nedir?', 'Gift', ['Gift', 'Balloon', 'Candle', 'Tree'], 'hediye-paketi');
  e('tt-t6', 'Paskalyanın İngilizcesi nedir?', 'Easter', ['Easter', 'Christmas', 'Halloween', 'Valentine'], 'paskalya-yumurtasi');
  e('tt-t7', 'Cadılar Bayramının İngilizcesi nedir?', 'Halloween', ['Halloween', 'Christmas', 'Easter', 'Birthday'], 'cadilar-bayrami');
  e('tt-t8', 'Partinin İngilizcesi nedir?', 'Party', ['Party', 'School', 'Work', 'Sport'], 'kutlama-partisi');
  e('tt-t9', 'Noel Babanın İngilizcesi nedir?', 'Santa Claus', ['Santa Claus', 'Teacher', 'Doctor', 'Pilot'], 'noel-baba');
  e('tt-t10', 'Yaz tatilinin İngilizcesi nedir?', 'Summer holiday', ['Winter holiday', 'Summer holiday', 'School day', 'Work day'], 'yaz-tatili');
  e('tt-t11', 'Balonun İngilizcesi nedir?', 'Balloon', ['Balloon', 'Gift', 'Candle', 'Cake'], 'dogum-gunu-balon');
  e('tt-t12', 'Mumun İngilizcesi nedir?', 'Candle', ['Candle', 'Ball', 'Book', 'Pen'], 'pasta-mumlari');
  e('tt-t13', 'Kutlamanın İngilizcesi nedir?', 'Celebration', ['Celebration', 'Transport', 'Weather', 'Sport'], 'kutlama-partisi');
  e('tt-t14', 'Doğum günü şarkısı hangisiyle başlar?', 'Happy Birthday', ['Good morning', 'Happy Birthday', 'Good night', 'Hello'], 'dogum-gunu-sarki');
  e('tt-t15', 'Sevgililer Gününün İngilizcesi nedir?', "Valentine's Day", ["Valentine's Day", 'Christmas', 'Easter', 'Halloween'], 'sevgililer-gunu');
  e('tt-t16', '23 Nisan hangi bayramdır?', "Children's Day", ["Children's Day", 'Christmas', 'Easter', 'Halloween'], 'cocuk-bayrami');
  e('tt-t17', 'Kutlamak İngilizcede nedir?', 'Celebrate', ['Celebrate', 'Sleep', 'Run', 'Swim'], 'kutlama-yapanlar');
  e('tt-t18', 'Yılbaşında ne patlar?', 'Fireworks', ['Balloons', 'Fireworks', 'Books', 'Balls'], 'yilbasi-havaifisek');
  e('tt-t19', 'Noelde ne süslenir?', 'Tree', ['Car', 'Tree', 'Book', 'Chair'], 'noel-agaci');
  e('tt-t20', 'Doğum gününde ne yenir?', 'Cake', ['Soup', 'Cake', 'Bread', 'Rice'], 'dogum-gunu-pasta');
  e('tt-t21', 'Festivalin İngilizcesi nedir?', 'Festival', ['Festival', 'School', 'Hospital', 'Airport'], 'sokak-senligi');
  e('tt-t22', 'Tatilde ne yapılır?', 'Rest and have fun', ['Go to school', 'Rest and have fun', 'Do homework', 'Sleep only'], 'tatil-dinlenme');
  e('tt-t23', 'Hediye paketinin İngilizcesi nedir?', 'Gift box', ['Gift box', 'School bag', 'Lunch box', 'Shoe box'], 'hediye-paketi');
  e('tt-t24', 'Özel günler İngilizcede nedir?', 'Special days', ['Special days', 'Normal days', 'School days', 'Work days'], 'ozel-gunler');
  e('tt-t25', 'En güzel tatil hangi mevsimde olur?', 'Summer', ['Winter', 'Summer', 'Autumn', 'Spring'], 'yaz-tatili');
  return s;
}

export function tatiller(karistir) {
  return {
    id: 'tatiller',
    baslik: 'Holidays',
    kazanimKodu: KAZANIM,
    anlatim: { ekranlar: [
      { metin: 'Noel yaklaşıyordu. Sınıfı süslediler. "Merry Christmas!" dediler birbirlerine. Tatiller hep sevinç getirirdi.', gorsel: anl('tt-anlatim-1') },
      { metin: 'Elanaz\'ın doğum günüydü. "Happy Birthday!" diye şarkı söylediler. Pasta ve balonlar vardı. Kutlamak çok eğlenceliydi!', gorsel: anl('tt-anlatim-2') },
      { metin: 'Yaz tatili başladı. "Summer holiday is here!" dedi Berk. Denize gittiler. Tatil dinlenmek için güzeldi.', gorsel: anl('tt-anlatim-3') },
    ]},
    alistirma: alistirma(),
    test: testSorular(karistir),
  };
}
