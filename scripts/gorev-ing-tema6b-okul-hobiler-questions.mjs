/** GOREV-ING-TEMA6B — School, Hobbies & Daily (Okul, Hobiler, Günlük Rutin) */

const KAZANIM = 'ING.2.6.1';

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
  boslukEkle(s, 'oh-a1', 'Okul kelimesinin İngilizcesi ......... kelimesidir.', 'school', '', { gorsel: nesne('classroom') });
  boslukEkle(s, 'oh-a2', 'Sınıf kelimesinin İngilizcesi ......... kelimesidir.', 'classroom', '', { gorsel: nesne('sinif-ortam') });
  dyEkle(s, 'oh-a3', 'Öğretmen İngilizcede "Teacher" demektir.', 'Doğru', '', { gorsel: nesne('ogretmen') });
  boslukEkle(s, 'oh-a4', 'Öğrenci kelimesinin İngilizcesi ......... kelimesidir.', 'student', '', { gorsel: nesne('yeni-ogrenci') });
  dyEkle(s, 'oh-a5', 'Kitap İngilizcede "Book" olarak söylenir.', 'Doğru', '', { gorsel: nesne('kitap') });
  boslukEkle(s, 'oh-a6', 'Hobi kelimesinin İngilizcesi ......... kelimesidir.', 'hobby', '', { gorsel: nesne('hobi-resim') });
  dyEkle(s, 'oh-a7', 'Resim çizmek hobisi İngilizcede "Drawing" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('resim-cizen') });
  boslukEkle(s, 'oh-a8', 'Müzik dinlemek hobisinin İngilizcesi ......... kelimesidir.', 'music', '', { gorsel: nesne('muzik-dinleyen') });
  dyEkle(s, 'oh-a9', 'Sabah kalkmak günlük rutinimizde "Wake up" olarak söylenir.', 'Doğru', '', { gorsel: nesne('gunaydin-cocuk') });
  boslukEkle(s, 'oh-a10', 'Diş fırçalamak İngilizcede "Brush teeth" olarak ifade edilir.', 'brush teeth', '', { gorsel: nesne('dis-fircalayan'), alternatifCevaplar: ['Brush Teeth'] });
  dyEkle(s, 'oh-a11', 'Kahvaltı yapmak İngilizcede "Have breakfast" demektir.', 'Doğru', '', { gorsel: nesne('kahvalti-masasi') });
  boslukEkle(s, 'oh-a12', 'Okula gitmek İngilizcede "Go to ........." olarak söylenir.', 'school', '', { gorsel: nesne('okul-karsilasma') });
  dyEkle(s, 'oh-a13', '"Play football" futbol oynamak hobisidir.', 'Doğru', '', { gorsel: nesne('futbol-topu') });
  boslukEkle(s, 'oh-a14', 'Dans etmek hobisinin İngilizcesi "........." kelimesidir.', 'dance', '', { gorsel: nesne('dans-eden') });
  dyEkle(s, 'oh-a15', 'Akşam yemeği İngilizcede "Dinner" demektir.', 'Doğru', '', { gorsel: nesne('aksam-yemegi') });
  boslukEkle(s, 'oh-a16', 'Uyumak günlük rutinimizde "........." olarak söylenir.', 'sleep', '', { gorsel: nesne('gece-yatak') });
  dyEkle(s, 'oh-a17', 'Tahta İngilizcede "Board" olarak yazılır.', 'Doğru', '', { gorsel: nesne('board') });
  boslukEkle(s, 'oh-a18', 'Sandalye kelimesinin İngilizcesi ......... kelimesidir.', 'chair', '', { gorsel: nesne('chair') });
  dyEkle(s, 'oh-a19', 'Şarkı söylemek hobisi İngilizcede "Singing" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('mikrofon-sarki') });
  boslukEkle(s, 'oh-a20', 'Günlük rutin kelimesinin İngilizcesi "Daily ........." kelimesidir.', 'routine', '', { gorsel: nesne('gunluk-takvim') });
  dyEkle(s, 'oh-a21', '"Student" kelimesi öğrenci demektir.', 'Doğru', '', { gorsel: nesne('sinif-ortam') });
  boslukEkle(s, 'oh-a22', 'Öğle yemeği İngilizcede "........." olarak söylenir.', 'lunch', '', { gorsel: nesne('ogle-yemegi') });
  dyEkle(s, 'oh-a23', 'Kitap okumak hem okulda hem hobide "Reading" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('kitap-okuyan-kiz') });
  boslukEkle(s, 'oh-a24', 'Sınıfta ders dinlerken "Listen" kelimesini kullanırız.', 'listen', '', { gorsel: nesne('ders-dinleyen') });
  dyEkle(s, 'oh-a25', 'Her sabah aynı işleri yapmak "Daily routine" demektir.', 'Doğru', '', { gorsel: nesne('sabah-rutini') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('oh-t1', 'Okul kelimesinin İngilizcesi nedir?', 'School', ['School', 'Home', 'Park', 'Shop'], '', { gorsel: nesne('classroom') });
  e('oh-t2', 'Sınıfın İngilizce adı hangisidir?', 'Classroom', ['Classroom', 'Kitchen', 'Garden', 'Bedroom'], '', { gorsel: nesne('sinif-ortam') });
  e('oh-t3', 'Öğretmenin İngilizcesi nedir?', 'Teacher', ['Student', 'Teacher', 'Doctor', 'Driver'], '', { gorsel: nesne('ogretmen') });
  e('oh-t4', 'Öğrenci kelimesinin İngilizcesi hangisidir?', 'Student', ['Student', 'Teacher', 'Parent', 'Baby'], '', { gorsel: nesne('yeni-ogrenci') });
  e('oh-t5', 'Kitabın İngilizcesi nedir?', 'Book', ['Book', 'Pen', 'Bag', 'Chair'], '', { gorsel: nesne('kitap') });
  e('oh-t6', 'Hobi kelimesinin İngilizcesi nedir?', 'Hobby', ['Hobby', 'Food', 'Weather', 'Color'], '', { gorsel: nesne('hobi-resim') });
  e('oh-t7', 'Resim çizmek hobisinin İngilizcesi hangisidir?', 'Drawing', ['Drawing', 'Sleeping', 'Eating', 'Running'], '', { gorsel: nesne('resim-cizen') });
  e('oh-t8', 'Sabah uyanmak İngilizcede nasıl söylenir?', 'Wake up', ['Wake up', 'Go to bed', 'Have dinner', 'Play games'], '', { gorsel: nesne('gunaydin-cocuk') });
  e('oh-t9', 'Diş fırçalamak İngilizcede nasıl ifade edilir?', 'Brush teeth', ['Brush teeth', 'Wash hands', 'Comb hair', 'Eat lunch'], '', { gorsel: nesne('dis-fircalayan') });
  e('oh-t10', 'Kahvaltı yapmak İngilizcede nedir?', 'Have breakfast', ['Have breakfast', 'Go to school', 'Play football', 'Read a book'], '', { gorsel: nesne('kahvalti-masasi') });
  e('oh-t11', 'Okula gitmek İngilizcede nasıl söylenir?', 'Go to school', ['Go to school', 'Go to bed', 'Go swimming', 'Go shopping'], '', { gorsel: nesne('otobus-cocuk') });
  e('oh-t12', 'Futbol oynamak hobisinin İngilizcesi hangisidir?', 'Play football', ['Play football', 'Brush teeth', 'Have lunch', 'Go to bed'], '', { gorsel: nesne('futbol-topu') });
  e('oh-t13', 'Dans etmek İngilizcede nedir?', 'Dance', ['Dance', 'Sleep', 'Read', 'Write'], '', { gorsel: nesne('dans-eden') });
  e('oh-t14', 'Akşam yemeği İngilizcede nasıl adlandırılır?', 'Dinner', ['Breakfast', 'Lunch', 'Dinner', 'Snack'], '', { gorsel: nesne('aksam-yemegi') });
  e('oh-t15', 'Uyumak İngilizcede hangi kelimeyle ifade edilir?', 'Sleep', ['Sleep', 'Run', 'Draw', 'Sing'], '', { gorsel: nesne('gece-yatak') });
  e('oh-t16', 'Tahtanın İngilizcesi nedir?', 'Board', ['Board', 'Desk', 'Door', 'Window'], '', { gorsel: nesne('board') });
  e('oh-t17', 'Sandalyenin İngilizcesi hangisidir?', 'Chair', ['Chair', 'Desk', 'Book', 'Bag'], '', { gorsel: nesne('chair') });
  e('oh-t18', 'Şarkı söylemek hobisinin İngilizcesi nedir?', 'Singing', ['Singing', 'Sleeping', 'Eating', 'Swimming'], '', { gorsel: nesne('mikrofon-sarki') });
  e('oh-t19', 'Günlük rutin İngilizcede nasıl söylenir?', 'Daily routine', ['Daily routine', 'Daily weather', 'Daily food', 'Daily color'], '', { gorsel: nesne('gunluk-takvim') });
  e('oh-t20', 'Öğle yemeği İngilizcede nedir?', 'Lunch', ['Breakfast', 'Lunch', 'Dinner', 'Supper'], '', { gorsel: nesne('ogle-yemegi') });
  e('oh-t21', 'Sınıfta öğretmeni dinlemek için hangi kelimeyi kullanırız?', 'Listen', ['Listen', 'Sleep', 'Run', 'Jump'], '', { gorsel: nesne('ders-dinleyen') });
  e('oh-t22', '"School" ve "Classroom" kelimeleri sırasıyla ne demektir?', 'Okul ve Sınıf', ['Öğretmen ve Öğrenci', 'Okul ve Sınıf', 'Kitap ve Kalem', 'Ev ve Park'], '', { gorsel: grup(['classroom', 'ogretmen'], 'classroom') });
  e('oh-t23', 'Hangi aktivite bir hobidir?', 'Drawing pictures', ['Brush teeth', 'Drawing pictures', 'Go to school', 'Have breakfast'], '', { gorsel: nesne('hobi-resim') });
  e('oh-t24', 'Günlük rutinde sabah ilk ne yaparız?', 'Wake up', ['Go to bed', 'Wake up', 'Have dinner', 'Play games'], '', { gorsel: nesne('sabah-rutini') });
  e('oh-t25', '"Student" kelimesinin Türkçe karşılığı nedir?', 'Öğrenci', ['Öğretmen', 'Öğrenci', 'Doktor', 'Aşçı'], '', { gorsel: nesne('yeni-ogrenci') });
  return s;
}

export function okulHobilerGunluk(karistir) {
  return {
    id: 'okul-hobiler-gunluk',
    baslik: 'School, Hobbies & Daily',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz sabah uyandı. "Wake up!" dedi annesi. Dişlerini fırçaladı, kahvaltı yaptı ve "Go to school!" ile okula gitti. Sınıfta Teacher ve Student birlikte öğreniyordu.', gorsel: anl('oh-anlatim-1') },
        { metin: 'Berk\'in hobileri çok eğlenceliydi: Drawing, Singing, Dance ve Play football! Her gün farklı bir hobi onu mutlu ediyordu.', gorsel: anl('oh-anlatim-2') },
        { metin: 'Günlük rutinleri Daily routine ile düzenliydi: Breakfast, Lunch, Dinner ve Sleep. Classroom\'da Book, Board ve Chair vardı. Okul hayatı İngilizce çok kolaydı!', gorsel: anl('oh-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
