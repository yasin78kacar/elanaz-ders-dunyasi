/** GOREV-ING1B — Numbers and Classroom (Sayılar ve Sınıf Eşyaları) */

const KAZANIM = 'ING.2.1.2';

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
}
function sayi(n) {
  return { tur: 'ingilizce', mod: 'sayi', sayi: String(n) };
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
  boslukEkle(s, 'se-a1', 'İngilizcede 1 sayısı ......... olarak yazılır.', 'one', '', { gorsel: sayi(1) });
  dyEkle(s, 'se-a2', 'İngilizcede 2 sayısı "Two" demektir.', 'Doğru', '', { gorsel: sayi(2) });
  boslukEkle(s, 'se-a3', 'İngilizcede 3 sayısı ......... olarak söylenir.', 'three', '', { gorsel: sayi(3) });
  dyEkle(s, 'se-a4', '"Four" kelimesi Türkçede 4 anlamına gelir.', 'Doğru', '', { gorsel: sayi(4) });
  boslukEkle(s, 'se-a5', '5 sayısının İngilizcesi ......... kelimesidir.', 'five', '', { gorsel: sayi(5) });
  dyEkle(s, 'se-a6', 'İngilizcede 10 sayısı "Ten" olarak yazılır.', 'Doğru', '', { gorsel: sayi(10) });
  boslukEkle(s, 'se-a7', 'Kitap kelimesinin İngilizcesi ......... kelimesidir.', 'book', '', { gorsel: nesne('kitap') });
  dyEkle(s, 'se-a8', 'Çanta İngilizcede "Bag" demektir.', 'Doğru', '', { gorsel: nesne('canta') });
  boslukEkle(s, 'se-a9', 'Kurşun kalem kelimesinin İngilizcesi ......... kelimesidir.', 'pencil', '', { gorsel: nesne('kursun-kalem') });
  dyEkle(s, 'se-a10', 'Tükenmez kalem İngilizcede "Pen" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('tukenmez-kalem') });
  boslukEkle(s, 'se-a11', 'Sınıftaki öğrenci sırasına İngilizcede ......... denir.', 'desk', '', { gorsel: nesne('desk') });
  dyEkle(s, 'se-a12', 'Sandalye kelimesi İngilizcede "Chair" demektir.', 'Doğru', '', { gorsel: nesne('chair') });
  boslukEkle(s, 'se-a13', 'Sınıf tahtası İngilizcede ......... olarak yazılır.', 'board', '', { gorsel: nesne('board') });
  dyEkle(s, 'se-a14', 'Sınıf kelimesinin İngilizcesi "Classroom"dur.', 'Doğru', '', { gorsel: nesne('classroom') });
  boslukEkle(s, 'se-a15', 'İngilizcede 7 sayısı ......... kelimesiyle ifade edilir.', 'seven', '', { gorsel: sayi(7) });
  dyEkle(s, 'se-a16', '"Eight" kelimesi Türkçede 9 anlamına gelir.', 'Yanlış', '', { gorsel: sayi(8) });
  boslukEkle(s, 'se-a17', '9 sayısının İngilizce yazılışı ......... kelimesidir.', 'nine', '', { gorsel: sayi(9) });
  dyEkle(s, 'se-a18', 'Silgi kelimesi İngilizcede "Eraser" demektir.', 'Doğru', '', { gorsel: nesne('silgi') });
  boslukEkle(s, 'se-a19', 'Kalem kutusu (kalemlik) İngilizcede "Pencil ........." olarak söylenir.', 'case', '', { gorsel: nesne('kalemlik') });
  dyEkle(s, 'se-a20', '"Two books" ifadesi Türkçe olarak "Üç kitap" demektir.', 'Yanlış', '', { gorsel: nesne('iki-kitap') });
  boslukEkle(s, 'se-a21', '"Five pencils" Türkçede ......... kurşun kalem demektir.', 'beş', '', { gorsel: nesne('bes-kalem') });
  dyEkle(s, 'se-a22', 'İngilizcede 6 sayısı "Six" olarak yazılır.', 'Doğru', '', { gorsel: sayi(6) });
  boslukEkle(s, 'se-a23', 'Sınıfın kapısı İngilizcede ......... olarak adlandırılır.', 'door', '', { gorsel: nesne('kapi') });
  dyEkle(s, 'se-a24', 'Pencere kelimesi İngilizcede "Window" demektir.', 'Doğru', '', { gorsel: nesne('pencere') });
  boslukEkle(s, 'se-a25', 'Öğretmen kelimesinin İngilizcesi ......... kelimesidir.', 'teacher', '', { gorsel: nesne('ogretmen') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('se-t1', 'İngilizcede 1, 2, 3 sayıları sırasıyla nasıl söylenir?', 'One, Two, Three', ['Four, Five, Six', 'One, Two, Three', 'Seven, Eight, Nine', 'Ten, Nine, Eight'], '', { gorsel: grup(['sayi-1', 'sayi-2', 'sayi-3'], ['sayi-1', 'sayi-2', 'sayi-3']) });
  e('se-t2', "Zeynep'in tuttuğu balonun üzerindeki 5 sayısının İngilizcesi nedir?", 'Five', ['Four', 'Six', 'Five', 'Ten'], '', { gorsel: nesne('balon-5') });
  e('se-t3', "Can'ın tişörtünde yazan 10 sayısının İngilizce karşılığı hangisidir?", 'Ten', ['Ten', 'Nine', 'Eight', 'Seven'], '', { gorsel: nesne('tisort-10') });
  e('se-t4', "Hande'nin elindeki kitabın İngilizce adı nedir?", 'Book', ['Bag', 'Pencil', 'Book', 'Desk'], '', { gorsel: nesne('kitap') });
  e('se-t5', 'Okula giderken eşyalarımızı koyduğumuz okul çantasının İngilizcesi nedir?', 'Bag', ['Bag', 'Board', 'Chair', 'Eraser'], '', { gorsel: nesne('canta') });
  e('se-t6', 'İngilizcede kurşun kalem "........", tükenmez kalem ise "........" olarak adlandırılır.', 'Pencil / Pen', ['Book / Desk', 'Pencil / Pen', 'Pen / Pencil', 'Bag / Board'], '', { gorsel: grup(['kursun-kalem', 'tukenmez-kalem'], ['kursun-kalem', 'tukenmez-kalem']) });
  e('se-t7', 'Sınıfta oturduğumuz öğrenci sırasının İngilizcesi nedir?', 'Desk', ['Chair', 'Window', 'Desk', 'Door'], '', { gorsel: nesne('desk') });
  e('se-t8', 'Öğretmenin üzerine yazı yazdığı tahtanın İngilizcesi nedir?', 'Board', ['Board', 'Book', 'Bag', 'Eraser'], '', { gorsel: nesne('board') });
  e('se-t9', 'Masanın yanında duran sandalyenin İngilizce karşılığı hangisidir?', 'Chair', ['Pen', 'Chair', 'Pencil case', 'Teacher'], '', { gorsel: nesne('chair') });
  e('se-t10', 'Doğum günü pastasının üzerindeki 7 sayısının İngilizcesi nedir?', 'Seven', ['Six', 'Seven', 'Eight', 'Nine'], '', { gorsel: nesne('pasta-7') });
  e('se-t11', 'İngilizcede 4 sayısı nasıl yazılır?', 'Four', ['Three', 'Five', 'Four', 'Two'], '', { gorsel: nesne('dort-elma') });
  e('se-t12', '"Eight" kelimesinin Türkçedeki anlamı hangi sayıdır?', '8', ['6', '7', '8', '9'], '', { gorsel: sayi(8) });
  e('se-t13', 'Defterdeki yazıları silmek için kullandığımız silginin İngilizcesi nedir?', 'Eraser', ['Eraser', 'Pencil', 'Desk', 'Book'], '', { gorsel: nesne('silgi') });
  e('se-t14', 'İngilizcede "Three books" ne anlama gelir?', 'Üç kitap', ['İki çanta', 'Üç kitap', 'Dört kalem', 'Beş silgi'], '', { gorsel: nesne('uc-kitap') });
  e('se-t15', 'İngilizcede öğretmene ne ad verilir?', 'Teacher', ['Student', 'Teacher', 'Doctor', 'Police'], '', { gorsel: nesne('ogretmen-masa') });
  e('se-t16', 'Kalemlerimizi koyduğumuz kalem kutusunun (kalemliğin) İngilizcesi nedir?', 'Pencil case', ['Pencil case', 'Book bag', 'Eraser box', 'Board pen'], '', { gorsel: nesne('kalemlik') });
  e('se-t17', '"Nine" kelimesi hangi sayıyı anlatır?', '9', ['7', '8', '9', '10'], '', { gorsel: sayi(9) });
  e('se-t18', '"Six" kelimesinin Türkçesi hangi sayıdır?', '6', ['4', '5', '6', '7'], '', { gorsel: nesne('alti-top') });
  e('se-t19', 'Sınıfın penceresine İngilizcede ne denir?', 'Window', ['Door', 'Window', 'Chair', 'Desk'], '', { gorsel: nesne('sinif-pencere') });
  e('se-t20', 'İngilizcede sınıf kapısına ne isim verilir?', 'Door', ['Door', 'Board', 'Window', 'Bag'], '', { gorsel: nesne('acik-kapi') });
  e('se-t21', '"Two pens" Türkçede ne demektir?', 'İki tükenmez kalem', ['Bir silgi', 'İki tükenmez kalem', 'Üç kitap', 'Dört çanta'], '', { gorsel: nesne('iki-pen') });
  e('se-t22', 'Bütün bu eşyaların bulunduğu yer olan sınıfımızın İngilizce adı nedir?', 'Classroom', ['Bedroom', 'Kitchen', 'Classroom', 'Garden'], '', { gorsel: nesne('sinif-ortam') });
  e('se-t23', 'İngilizce "Five erasers" ifadesi neyi anlatır?', 'Beş silgi', ['Üç kitap', 'Beş silgi', 'Altı kalem', 'Dört çanta'], '', { gorsel: nesne('bes-silgi') });
  e('se-t24', 'İngilizcede saymaya başlarken ilk söylediğimiz iki sayı sırasıyla hangileridir?', 'One, Two', ['One, Two', 'Three, Four', 'Five, Six', 'Nine, Ten'], '', { gorsel: nesne('one-two') });
  e('se-t25', '"Ten pencils" ifadesi Türkçede kaç tane kurşun kalemi belirtir?', '10', ['5', '8', '10', '1'], '', { gorsel: nesne('on-kalem') });
  return s;
}

export function sayilarVeSinifEsyalari(karistir) {
  return {
    id: 'sayilar-ve-sinif-esyalari',
    baslik: 'Numbers and Classroom',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Zeynep ve Can okula çok enerjik geldiler. Öğretmenleri tahtaya kocaman sayılar çizmişti: "One, two, three, four, five! Six, seven, eight, nine, ten!" İngilizce sayı saymak çok eğlenceli bir tekerleme gibiydi.',
          gorsel: anl('se-anlatim-1'),
        },
        {
          metin:
            'Hande çantasını sırasının üzerine koydu. Tahta Board, çanta Bag, kalem Pen, kurşun kalem Pencil, kitap Book, masa Desk, sandalye Chair! Sınıf artık İngilizce kelimelerle dolu bir hazine sandığıydı.',
          gorsel: anl('se-anlatim-2'),
        },
        {
          metin:
            'Öğretmen masanın üzerine üç kitap koydu: "How many books? Three books!" Can\'ın iki kurşun kalemi: "Two pencils!" Hande sırasını gösterdi: "One desk!" Rakamlar ve eşyalar yan yana gelince her şey daha anlamlı oldu.',
          gorsel: anl('se-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
