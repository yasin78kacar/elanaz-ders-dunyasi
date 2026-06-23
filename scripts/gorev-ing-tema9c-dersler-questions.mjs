/** GOREV-ING-TEMA9C — School Subjects (Dersler) */
const KAZANIM = 'ING.2.9.3';
const anl = (sahne) => ({ tur: 'ingilizce', mod: 'anlatim', sahne });
const nesne = (n, extra = {}) => ({ tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra });
const bosluk = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu: '', cevapTipi: 'metin', gorsel: nesne(g) });
const dy = (s, id, soru, cevap, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu: '', cevapTipi: 'metin', alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'], gorsel: nesne(g) });
const test = (s, id, soru, cevap, sec, g) => s.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler: sec, ipucu: '', gorsel: nesne(g) });

function alistirma() {
  const s = [];
  bosluk(s, 'dr-a1', 'Matematik dersinin İngilizcesi ......... kelimesidir.', 'math', 'matematik-dersi');
  dy(s, 'dr-a2', 'Fen bilimleri İngilizcede "Science" demektir.', 'Doğru', 'fen-dersi');
  bosluk(s, 'dr-a3', 'Türkçe dersinin İngilizcesi ......... kelimesidir.', 'Turkish', 'turkce-dersi');
  dy(s, 'dr-a4', 'İngilizce dersi "English" olarak söylenir.', 'Doğru', 'ingilizce-dersi');
  bosluk(s, 'dr-a5', 'Müzik dersinin İngilizcesi ......... kelimesidir.', 'music', 'muzik-dersi');
  dy(s, 'dr-a6', 'Resim dersi İngilizcede "Art" demektir.', 'Doğru', 'resim-dersi');
  bosluk(s, 'dr-a7', 'Beden eğitimi İngilizcede "PE" veya "........." education kelimesidir.', 'physical', 'beden-egitimi');
  dy(s, 'dr-a8', 'Sosyal bilgiler İngilizcede "Social studies" denir.', 'Doğru', 'sosyal-dersi');
  bosluk(s, 'dr-a9', 'Ders kelimesinin İngilizcesi ......... kelimesidir.', 'lesson', 'ders-programi');
  dy(s, 'dr-a10', 'Hayat bilgisi dersi okulda işlenir.', 'Doğru', 'hayat-dersi');
  bosluk(s, 'dr-a11', 'Ders programı İngilizcede "........." table kelimesidir.', 'timetable', 'ders-programi');
  dy(s, 'dr-a12', 'Görsel sanatlar İngilizcede "Visual arts" denir.', 'Doğru', 'gorsel-sanatlar-ders');
  bosluk(s, 'dr-a13', 'Okuma dersinin İngilizcesi ......... kelimesidir.', 'reading', 'okuma-dersi');
  dy(s, 'dr-a14', 'Yazma dersi İngilizcede "Writing" demektir.', 'Doğru', 'yazma-dersi');
  bosluk(s, 'dr-a15', 'Dersler kelimesinin İngilizcesi ......... kelimesidir.', 'subjects', 'ders-panosu');
  dy(s, 'dr-a16', 'Matematikte sayılar öğrenilir.', 'Doğru', 'matematik-dersi');
  bosluk(s, 'dr-a17', 'Fen dersinde deney yapılır. İngilizcesi ......... kelimesidir.', 'science', 'fen-deney');
  dy(s, 'dr-a18', 'İngilizce dersinde yeni kelimeler öğrenilir.', 'Doğru', 'ingilizce-dersi');
  bosluk(s, 'dr-a19', 'En sevdiğim ders "My favorite ........." olarak söylenir.', 'subject', 'favori-ders');
  dy(s, 'dr-a20', 'Müzik dersinde şarkı söylenir.', 'Doğru', 'muzik-dersi');
  bosluk(s, 'dr-a21', 'Resim dersinde boyama yapılır. İngilizcesi ......... kelimesidir.', 'art', 'resim-dersi');
  dy(s, 'dr-a22', 'Beden eğitiminde spor yapılır.', 'Doğru', 'beden-egitimi');
  bosluk(s, 'dr-a23', 'Okulda her gün farklı ......... (dersler) vardır.', 'subjects', 'ders-panosu');
  dy(s, 'dr-a24', 'Türkçe dersinde okuma yapılır.', 'Doğru', 'turkce-dersi');
  bosluk(s, 'dr-a25', 'Zeka oyunları dersinin İngilizcesi "Brain ........." kelimesidir.', 'games', 'zeka-dersi');
  return s;
}

function testSorular(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, g) => test(s, id, soru, cevap, karistir(sec), g);
  e('dr-t1', 'Sayıların öğrenildiği dersin İngilizcesi nedir?', 'Math', ['Math', 'Art', 'Music', 'PE'], 'matematik-dersi');
  e('dr-t2', 'Deneylerin yapıldığı dersin İngilizcesi nedir?', 'Science', ['Science', 'Math', 'Art', 'Music'], 'fen-dersi');
  e('dr-t3', 'Türkçe dersinin İngilizcesi nedir?', 'Turkish', ['Turkish', 'English', 'Math', 'Art'], 'turkce-dersi');
  e('dr-t4', 'Yabancı dil dersinin İngilizcesi nedir?', 'English', ['English', 'Turkish', 'Math', 'Science'], 'ingilizce-dersi');
  e('dr-t5', 'Şarkı söylenen dersin İngilizcesi nedir?', 'Music', ['Music', 'Math', 'Science', 'PE'], 'muzik-dersi');
  e('dr-t6', 'Boyama yapılan dersin İngilizcesi nedir?', 'Art', ['Art', 'Math', 'Science', 'PE'], 'resim-dersi');
  e('dr-t7', 'Spor yapılan dersin İngilizcesi nedir?', 'PE', ['PE', 'Art', 'Music', 'Math'], 'beden-egitimi');
  e('dr-t8', '"Subjects" kelimesinin anlamı nedir?', 'Dersler', ['Okul', 'Dersler', 'Ev', 'Spor'], 'ders-panosu');
  e('dr-t9', 'Ders programının İngilizcesi nedir?', 'Timetable', ['Timetable', 'Blackboard', 'Chair', 'Window'], 'ders-programi');
  e('dr-t10', 'Okuma dersinin İngilizcesi nedir?', 'Reading', ['Reading', 'Writing', 'Math', 'Art'], 'okuma-dersi');
  e('dr-t11', 'Yazma dersinin İngilizcesi nedir?', 'Writing', ['Writing', 'Reading', 'Math', 'PE'], 'yazma-dersi');
  e('dr-t12', 'Sosyal bilgilerin İngilizcesi nedir?', 'Social studies', ['Social studies', 'Science', 'Math', 'Art'], 'sosyal-dersi');
  e('dr-t13', 'Görsel sanatların İngilizcesi nedir?', 'Visual arts', ['Visual arts', 'Math', 'Science', 'PE'], 'gorsel-sanatlar-ders');
  e('dr-t14', 'Hangi derste sayılar öğrenilir?', 'Math', ['Math', 'Art', 'Music', 'PE'], 'matematik-dersi');
  e('dr-t15', 'Hangi derste deney yapılır?', 'Science', ['Science', 'Art', 'Music', 'Turkish'], 'fen-deney');
  e('dr-t16', 'Hangi derste İngilizce kelimeler öğrenilir?', 'English', ['English', 'Math', 'PE', 'Art'], 'ingilizce-dersi');
  e('dr-t17', '"Lesson" kelimesinin anlamı nedir?', 'Ders', ['Ders', 'Okul', 'Ev', 'Oyun'], 'ders-programi');
  e('dr-t18', 'En sevdiğim ders İngilizcede nasıl söylenir?', 'My favorite subject', ['My favorite food', 'My favorite subject', 'My favorite toy', 'My favorite color'], 'favori-ders');
  e('dr-t19', 'Hangi derste resim çizilir?', 'Art', ['Art', 'Math', 'Science', 'PE'], 'resim-dersi');
  e('dr-t20', 'Hangi derste koşulur?', 'PE', ['PE', 'Art', 'Music', 'Turkish'], 'beden-egitimi');
  e('dr-t21', 'Hayat bilgisi hangi kategoridedir?', 'School subject', ['Sport', 'School subject', 'Holiday', 'Transport'], 'hayat-dersi');
  e('dr-t22', 'Ders panosunda ne görürüz?', 'Subjects', ['Animals', 'Subjects', 'Cars', 'Food'], 'ders-panosu');
  e('dr-t23', 'Türkçe ve İngilizce hangi tür derslerdir?', 'Language subjects', ['Math subjects', 'Language subjects', 'Sport subjects', 'Art subjects'], 'ders-panosu');
  e('dr-t24', 'Zeka oyunları dersinin İngilizcesi nedir?', 'Brain games', ['Brain games', 'Football', 'Swimming', 'Cooking'], 'zeka-dersi');
  e('dr-t25', 'Okulda kaç farklı ders olabilir?', 'Many subjects', ['One subject', 'Many subjects', 'No subjects', 'Only math'], 'ders-panosu');
  return s;
}

export function dersler(karistir) {
  return {
    id: 'dersler',
    baslik: 'School Subjects',
    kazanimKodu: KAZANIM,
    anlatim: { ekranlar: [
      { metin: 'Ders programına baktılar. "Math, Science, English, Art!" dedi Elanaz. Her gün farklı dersler vardı. Okul çok eğlenceliydi.', gorsel: anl('dr-anlatim-1') },
      { metin: 'Müzik dersinde şarkı söylediler. Resim dersinde boyadılar. "I love Art class!" dedi Berk. Her ders farklıydı.', gorsel: anl('dr-anlatim-2') },
      { metin: 'Beden eğitiminde koştular. Fen dersinde deney yaptılar. "School subjects are fun!" dediler.', gorsel: anl('dr-anlatim-3') },
    ]},
    alistirma: alistirma(),
    test: testSorular(karistir),
  };
}
