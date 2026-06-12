/** GOREV-TEMA3 — Toplama, Çıkarma, Zihinden İşlemler, Problemler (250 görselli soru). */

const KAZANIM = {
  TOPLAMA: 'MAT.2.3.1',
  CIKARMA: 'MAT.2.3.2',
  ZIHINDEN_TOPLAMA: 'MAT.2.3.3',
  ZIHINDEN_CIKARMA: 'MAT.2.3.4',
  PROBLEMLER: 'MAT.2.3.5',
};

function top(a, b, nesne = 'top', renk1 = 'kirmizi', renk2 = 'mavi') {
  return { tur: 'islem', mod: 'toplama-grup', a, b, sonuc: a + b, nesne, renk1, renk2 };
}
function cik(a, b, nesne = 'top', renk1 = 'kirmizi') {
  return { tur: 'islem', mod: 'cikarma-grup', a, b, sonuc: a - b, nesne, renk1 };
}
function onluk(a, b) {
  return { tur: 'islem', mod: 'onluk-toplama', a, b, sonuc: a + b };
}
function sd(baslangic, adimSayisi, vurgulananlar = []) {
  return { tur: 'sayi-seridi', baslangic, adim: 1, adimSayisi, vurgulananlar };
}
function bil(tip, a, b, sonuc, nesne = 'top') {
  return { tur: 'islem', mod: 'bilinmeyen', bilinmeyen: tip, a, b, sonuc, nesne };
}
function kars(...islemler) {
  return { tur: 'islem', mod: 'karsilastirma', islemler };
}
function adim(...list) {
  return { tur: 'islem', mod: 'adimlar', adimlar: list.map((x) => (typeof x === 'number' ? { deger: x } : x)) };
}
function zihin(a, b, nesne = 'top') {
  return { tur: 'islem', mod: 'zihin', a, b, sonuc: a + b, nesne };
}
function zihinCik(a, b, nesne = 'top') {
  return { tur: 'islem', mod: 'zihin-cik', a, b, sonuc: a - b, nesne };
}
function prob(sahne) {
  return { tur: 'islem', mod: 'problem', sahne };
}
function anl(sahne) {
  return { tur: 'islem', mod: 'anlatim', sahne };
}
function esit(...islemler) {
  return { tur: 'islem', mod: 'esitlik', islemler };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function toplamaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TOPLAMA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('ti-a1', '2 + 3 = ?', '5', '', { gorsel: top(2, 3) });
  ekle('ti-a2', '4 + 1 = ?', '5', '', { gorsel: top(4, 1, 'cicek', 'sari', 'pembe') });
  ekle('ti-a3', '3 + 3 = ?', '6', '', { gorsel: top(3, 3, 'kelebek') });
  ekle('ti-a4', '5 + 2 = ?', '7', '', { gorsel: top(5, 2, 'elma', 'yesil', 'kirmizi') });
  ekle('ti-a5', '6 + 1 = ?', '7', '', { gorsel: top(6, 1, 'balon', 'mavi', 'sari') });
  ekle('ti-a6', '4 + 4 = ?', '8', '', { gorsel: top(4, 4, 'yildiz') });
  ekle('ti-a7', '3 + 5 = ?', '8', '', { gorsel: top(3, 5, 'kare', 'turuncu', 'mor') });
  ekle('ti-a8', '7 + 2 = ?', '9', '', { gorsel: top(7, 2, 'cilek') });
  ekle('ti-a9', '5 + 4 = ?', '9', '', { gorsel: top(5, 4, 'ari') });
  ekle('ti-a10', '6 + 4 = ?', '10', '', { gorsel: top(6, 4) });
  ekle('ti-a11', '8 + 2 = ?', '10', '', { gorsel: top(8, 2, 'yildiz', 'sari', 'yesil') });
  ekle('ti-a12', '5 + 5 = ?', '10', '', { gorsel: top(5, 5, 'parmak') });
  ekle('ti-a13', '7 + 3 = ?', '10', '', { gorsel: top(7, 3, 'meyve') });
  ekle('ti-a14', '9 + 1 = ?', '10', '', { gorsel: top(9, 1, 'cilek') });
  ekle('ti-a15', '6 + 5 = ?', '11', '', { gorsel: top(6, 5, 'kup', 'mavi', 'kirmizi') });
  ekle('ti-a16', '8 + 4 = ?', '12', '', { gorsel: top(8, 4, 'top', 'sari', 'mor') });
  ekle('ti-a17', '7 + 6 = ?', '13', '', { gorsel: top(7, 6, 'kelebek') });
  ekle('ti-a18', '9 + 5 = ?', '14', '', { gorsel: top(9, 5, 'yildiz') });
  ekle('ti-a19', '8 + 7 = ?', '15', '', { gorsel: top(8, 7) });
  ekle('ti-a20', '9 + 6 = ?', '15', '', { gorsel: top(9, 6, 'elma') });
  ekle('ti-a21', '7 + 9 = ?', '16', '', { gorsel: top(7, 9, 'balon', 'mavi', 'kirmizi') });
  ekle('ti-a22', '8 + 9 = ?', '17', '', { gorsel: top(8, 9, 'cicek') });
  ekle('ti-a23', '9 + 9 = ?', '18', '', { gorsel: top(9, 9, 'yildiz') });
  ekle('ti-a24', '10 + 8 = ?', '18', '', { gorsel: onluk(10, 8) });
  ekle('ti-a25', '10 + 9 = ?', '19', '', { gorsel: onluk(10, 9) });

  return sorular;
}

function toplamaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TOPLAMA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('ti-t1', '3 + 4 = ?', '7', ['6', '7', '8', '5'], '', { gorsel: top(3, 4) });
  ekle('ti-t2', '5 + 3 = ?', '8', ['7', '9', '8', '6'], '', { gorsel: top(5, 3, 'cilek') });
  ekle('ti-t3', 'Elde 4 kalem var, 3 kalem daha aldı. Kaç kalemi var?', '7', ['6', '8', '7', '9'], '', { gorsel: top(4, 3, 'kalem', 'sari', 'kirmizi') });
  ekle('ti-t4', '6 + 6 = ?', '12', ['11', '13', '12', '10'], '', { gorsel: top(6, 6, 'kelebek') });
  ekle('ti-t5', '9 + 0 = ?', '9', ['0', '10', '8', '9'], '', { gorsel: top(9, 0) });
  ekle('ti-t6', 'Sınıfta 7 kız, 5 erkek öğrenci var. Toplam kaç öğrenci var?', '12', ['11', '13', '12', '10'], '', { gorsel: prob('sinif-ogrenci') });
  ekle('ti-t7', '8 + 3 = ?', '11', ['10', '12', '11', '13'], '', { gorsel: top(8, 3, 'yildiz') });
  ekle('ti-t8', '□ + 4 = 9. Kutudaki sayı kaçtır?', '5', ['4', '6', '5', '3'], '', { gorsel: bil('a', 4, 9, 9) });
  ekle('ti-t9', '7 + 7 = ?', '14', ['13', '15', '14', '12'], '', { gorsel: top(7, 7, 'elma') });
  ekle('ti-t10', "Hangi işlemin sonucu 10'dur?", '6 + 4', ['4 + 5', '3 + 6', '6 + 4', '5 + 4'], '', { gorsel: kars(top(4, 5), top(3, 6), top(6, 4), top(5, 4)) });
  ekle('ti-t11', '6 + 7 = ?', '13', ['12', '14', '13', '11'], '', { gorsel: top(6, 7, 'balon', 'mavi', 'kirmizi') });
  ekle('ti-t12', 'Masada 8 portakal var, 5 tane daha konuldu. Kaç portakal var?', '13', ['12', '14', '13', '11'], '', { gorsel: prob('masa-portakal') });
  ekle('ti-t13', '5 + □ = 12. Kutudaki sayı nedir?', '7', ['6', '8', '7', '5'], '', { gorsel: bil('b', 5, 12, 12) });
  ekle('ti-t14', '9 + 8 = ?', '17', ['16', '18', '17', '15'], '', { gorsel: top(9, 8, 'yildiz') });
  ekle('ti-t15', 'Hangisi yanlıştır?', '4 + 7 = 10', ['3 + 7 = 10', '6 + 4 = 10', '5 + 5 = 10', '4 + 7 = 10'], '', { gorsel: kars(top(3, 7), top(6, 4), top(5, 5), top(4, 7)) });
  ekle('ti-t16', '10 + 7 = ?', '17', ['16', '18', '17', '15'], '', { gorsel: onluk(10, 7) });
  ekle('ti-t17', 'Bahçede 9 gül, 9 papatya var. Toplam kaç çiçek?', '18', ['17', '16', '19', '18'], '', { gorsel: prob('bahce-cicek') });
  ekle('ti-t18', '□ + □ = 8. Hangi çift doğrudur?', '4 + 4', ['3 + 6', '4 + 4', '5 + 4', '2 + 5'], '', { gorsel: bil('a', 4, 4, 8) });
  ekle('ti-t19', '10 + 10 = ?', '20', ['19', '21', '20', '18'], '', { gorsel: onluk(10, 10) });
  ekle(
    'ti-t20',
    '🎭 Bir sayıya 0 eklersek ne olur?',
    'Sayı değişmez',
    ['Sayı 1 artar', 'Sayı değişmez', 'Sayı 0 olur', 'Sayı 2 artar'],
    '0 hiç demek!',
    { gorsel: top(9, 0), sasirtma: true },
  );
  ekle('ti-t21', '8 + 5 = ?', '13', ['12', '14', '13', '11'], '', { gorsel: top(8, 5, 'cilek') });
  ekle(
    'ti-t22',
    '🎭 5 + 3 ile 3 + 5 eşit midir?',
    "Evet, ikisi de 8'dir",
    ['Hayır, farklıdır', "Evet, ikisi de 8'dir", 'Bazen eşit olur', 'Hiçbir zaman eşit olmaz'],
    'Toplama işleminde sıra değişmez!',
    { gorsel: esit(top(5, 3), top(3, 5)), sasirtma: true },
  );
  ekle('ti-t23', 'Kutuda 6 top var, 8 tane daha atıldı. Kutuda kaç top var?', '14', ['13', '15', '14', '12'], '', { gorsel: prob('kutu-top') });
  ekle(
    'ti-t24',
    '🎭 Hangisi en büyük sonucu verir?',
    '8 + 5',
    ['9 + 1', '7 + 4', '8 + 5', '6 + 6'],
    'Her birini hesapla, en büyüğü bul!',
    { gorsel: kars(top(9, 1), top(7, 4), top(8, 5), top(6, 6)), sasirtma: true },
  );
  ekle(
    'ti-t25',
    "🎭 Elanaz'ın 7 kalemi, Elif'in 9 kalemi var. İkisinin kalemlerini birleştirirlerse kaç kalemi olur?",
    '16',
    ['15', '17', '16', '14'],
    'Elanaz + Elif = ?',
    { gorsel: prob('elanaz-elif-kalem'), sasirtma: true },
  );

  return sorular;
}

function cikarmaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.CIKARMA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('ci-a1', '5 - 2 = ?', '3', '', { gorsel: cik(5, 2, 'elma') });
  ekle('ci-a2', '4 - 1 = ?', '3', '', { gorsel: cik(4, 1, 'balon') });
  ekle('ci-a3', '6 - 3 = ?', '3', '', { gorsel: cik(6, 3) });
  ekle('ci-a4', '7 - 2 = ?', '5', '', { gorsel: cik(7, 2, 'yildiz') });
  ekle('ci-a5', '8 - 4 = ?', '4', '', { gorsel: cik(8, 4, 'cilek') });
  ekle('ci-a6', '9 - 3 = ?', '6', '', { gorsel: cik(9, 3, 'kelebek') });
  ekle('ci-a7', '10 - 5 = ?', '5', '', { gorsel: cik(10, 5) });
  ekle('ci-a8', '6 - 6 = ?', '0', '', { gorsel: cik(6, 6, 'elma') });
  ekle('ci-a9', '8 - 0 = ?', '8', '', { gorsel: cik(8, 0) });
  ekle('ci-a10', '10 - 3 = ?', '7', '', { gorsel: cik(10, 3, 'cicek') });
  ekle('ci-a11', '11 - 4 = ?', '7', '', { gorsel: cik(11, 4, 'kup') });
  ekle('ci-a12', '12 - 5 = ?', '7', '', { gorsel: cik(12, 5, 'balon') });
  ekle('ci-a13', '13 - 6 = ?', '7', '', { gorsel: cik(13, 6, 'yildiz') });
  ekle('ci-a14', '14 - 7 = ?', '7', '', { gorsel: cik(14, 7) });
  ekle('ci-a15', '15 - 8 = ?', '7', '', { gorsel: cik(15, 8, 'cilek') });
  ekle('ci-a16', '16 - 9 = ?', '7', '', { gorsel: cik(16, 9, 'kelebek') });
  ekle('ci-a17', '18 - 9 = ?', '9', '', { gorsel: cik(18, 9, 'yildiz') });
  ekle('ci-a18', '20 - 10 = ?', '10', '', { gorsel: cik(20, 10, 'onluk') });
  ekle('ci-a19', '15 - 5 = ?', '10', '', { gorsel: cik(15, 5) });
  ekle('ci-a20', '20 - 5 = ?', '15', '', { gorsel: cik(20, 5, 'kup') });
  ekle('ci-a21', '17 - 8 = ?', '9', '', { gorsel: cik(17, 8, 'cicek') });
  ekle('ci-a22', '19 - 10 = ?', '9', '', { gorsel: cik(19, 10) });
  ekle('ci-a23', '16 - 7 = ?', '9', '', { gorsel: cik(16, 7, 'elma') });
  ekle('ci-a24', '20 - 8 = ?', '12', '', { gorsel: cik(20, 8, 'yildiz') });
  ekle('ci-a25', '20 - 3 = ?', '17', '', { gorsel: cik(20, 3, 'balon') });

  return sorular;
}

function cikarmaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.CIKARMA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('ci-t1', '6 - 2 = ?', '4', ['3', '5', '4', '6'], '', { gorsel: cik(6, 2, 'cilek') });
  ekle('ci-t2', '9 - 4 = ?', '5', ['4', '6', '5', '3'], '', { gorsel: cik(9, 4) });
  ekle('ci-t3', 'Masada 8 elma vardı, 3 tanesi yendi. Kaç elma kaldı?', '5', ['4', '6', '5', '7'], '', { gorsel: prob('masa-elma') });
  ekle('ci-t4', '10 - 6 = ?', '4', ['3', '5', '4', '6'], '', { gorsel: cik(10, 6, 'yildiz') });
  ekle('ci-t5', '7 - 7 = ?', '0', ['1', '7', '2', '0'], '', { gorsel: cik(7, 7) });
  ekle('ci-t6', 'Bahçede 12 kuş vardı, 5 tanesi uçtu. Kaç kuş kaldı?', '7', ['6', '8', '7', '9'], '', { gorsel: prob('bahce-kus') });
  ekle('ci-t7', '11 - 3 = ?', '8', ['7', '9', '8', '6'], '', { gorsel: cik(11, 3, 'balon') });
  ekle('ci-t8', '□ - 4 = 6. Kutudaki sayı kaçtır?', '10', ['9', '11', '10', '8'], '', { gorsel: bil('a', 4, 6, 10) });
  ekle('ci-t9', '14 - 6 = ?', '8', ['7', '9', '8', '6'], '', { gorsel: cik(14, 6, 'cicek') });
  ekle('ci-t10', "Hangi işlemin sonucu 5'tir?", '10 - 5', ['9 - 3', '8 - 2', '10 - 5', '7 - 3'], '', { gorsel: kars(cik(9, 3), cik(8, 2), cik(10, 5), cik(7, 3)) });
  ekle('ci-t11', '15 - 7 = ?', '8', ['9', '7', '8', '6'], '', { gorsel: cik(15, 7) });
  ekle('ci-t12', 'Kutuda 16 top vardı, 9 tanesi alındı. Kaç top kaldı?', '7', ['6', '8', '7', '5'], '', { gorsel: prob('kutu-top-aliniyor') });
  ekle('ci-t13', '12 - □ = 7. Kutudaki sayı nedir?', '5', ['4', '6', '5', '3'], '', { gorsel: bil('b', 12, 7, 12) });
  ekle('ci-t14', '18 - 9 = ?', '9', ['8', '10', '7', '9'], '', { gorsel: cik(18, 9, 'yildiz') });
  ekle('ci-t15', 'Hangisi yanlıştır?', '9 - 4 = 4', ['10 - 5 = 5', '8 - 4 = 4', '6 - 3 = 3', '9 - 4 = 4'], '', { gorsel: kars(cik(10, 5), cik(8, 4), cik(6, 3), cik(9, 4)) });
  ekle('ci-t16', '20 - 7 = ?', '13', ['12', '14', '13', '11'], '', { gorsel: cik(20, 7, 'kup') });
  ekle('ci-t17', "Elanaz'ın 15 boyası vardı, 6 tanesini Elif'e verdi. Kaç boyası kaldı?", '9', ['8', '10', '9', '7'], '', { gorsel: prob('elanaz-boya-veriyor') });
  ekle(
    'ci-t18',
    '🎭 Bir sayıdan 0 çıkarırsak ne olur?',
    'Sayı değişmez',
    ['Sayı 0 olur', 'Sayı 1 azalır', 'Sayı değişmez', 'Sayı 2 azalır'],
    '0 hiç demek!',
    { gorsel: cik(7, 0), sasirtma: true },
  );
  ekle('ci-t19', '20 - 11 = ?', '9', ['8', '10', '9', '7'], '', { gorsel: cik(20, 11, 'balon') });
  ekle(
    'ci-t20',
    '🎭 13 - 8 = ?',
    '5',
    ['4', '6', '5', '3'],
    "8'den 13'e kaç adım?",
    { gorsel: sd(8, 6, [8, 13]), sasirtma: true },
  );
  ekle('ci-t21', 'Sınıfta 20 kalem vardı, 14 tanesi dağıtıldı. Kaç kalem kaldı?', '6', ['5', '7', '6', '4'], '', { gorsel: prob('kalem-kutusu-dagitim') });
  ekle(
    'ci-t22',
    '🎭 17 - 9 = ?',
    '8',
    ['7', '9', '8', '6'],
    "17 = 10 + 7, önce 10'dan 9 çıkar!",
    { gorsel: adim(17, 10, 8), sasirtma: true },
  );
  ekle('ci-t23', '□ - 6 = 8. Kutudaki sayı nedir?', '14', ['13', '15', '14', '12'], '', { gorsel: bil('a', 6, 8, 14) });
  ekle(
    'ci-t24',
    '🎭 Hangisi en küçük sonucu verir?',
    '11 - 9',
    ['15 - 9', '12 - 8', '10 - 7', '11 - 9'],
    'Her birini hesapla, en küçüğü bul!',
    { gorsel: kars(cik(15, 9), cik(12, 8), cik(10, 7), cik(11, 9)), sasirtma: true },
  );
  ekle(
    'ci-t25',
    "🎭 Elanaz'ın 20 çikolatası var. Elanaz, Elif'e 7, Alya'ya 5 çikolata verdi. Elanaz'da kaç çikolata kaldı?",
    '8',
    ['7', '9', '8', '6'],
    'Önce verdiği toplam: 7 + 5 = 12, sonra 20 - 12 = ?',
    { gorsel: prob('elanaz-cikolata-paylasim'), sasirtma: true },
  );

  return sorular;
}

function zihindenToplamaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ZIHINDEN_TOPLAMA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('zt-a1', '5 + 4 = ?', '9', '', { gorsel: zihin(5, 4, 'parmak') });
  ekle('zt-a2', '7 + 2 = ?', '9', '', { gorsel: zihin(7, 2) });
  ekle('zt-a3', '6 + 3 = ?', '9', '', { gorsel: zihin(6, 3, 'yildiz') });
  ekle('zt-a4', '8 + 1 = ?', '9', '', { gorsel: zihin(8, 1, 'elma') });
  ekle('zt-a5', '9 + 1 = ?', '10', '', { gorsel: zihin(9, 1) });
  ekle('zt-a6', '8 + 2 = ?', '10', '', { gorsel: adim(8, 2, 10) });
  ekle('zt-a7', '7 + 3 = ?', '10', '', { gorsel: zihin(7, 3, 'cilek') });
  ekle('zt-a8', '6 + 4 = ?', '10', '', { gorsel: zihin(6, 4, 'balon') });
  ekle('zt-a9', '9 + 3 = ?', '12', '', { gorsel: adim(9, 1, 10, 2, 12) });
  ekle('zt-a10', '8 + 4 = ?', '12', '', { gorsel: adim(8, 2, 10, 2, 12) });
  ekle('zt-a11', '7 + 6 = ?', '13', '', { gorsel: adim(7, 3, 10, 3, 13) });
  ekle('zt-a12', '9 + 5 = ?', '14', '', { gorsel: adim(9, 1, 10, 4, 14) });
  ekle('zt-a13', '8 + 7 = ?', '15', '', { gorsel: adim(8, 2, 10, 5, 15) });
  ekle('zt-a14', '6 + 9 = ?', '15', '', { gorsel: adim(6, 4, 10, 5, 15) });
  ekle('zt-a15', '10 + 4 = ?', '14', '', { gorsel: onluk(10, 4) });
  ekle('zt-a16', '10 + 7 = ?', '17', '', { gorsel: onluk(10, 7) });
  ekle('zt-a17', '10 + 9 = ?', '19', '', { gorsel: onluk(10, 9) });
  ekle('zt-a18', '11 + 3 = ?', '14', '', { gorsel: sd(11, 4, [11, 14]) });
  ekle('zt-a19', '12 + 5 = ?', '17', '', { gorsel: sd(12, 6, [12, 17]) });
  ekle('zt-a20', '13 + 4 = ?', '17', '', { gorsel: zihin(13, 4) });
  ekle('zt-a21', '14 + 4 = ?', '18', '', { gorsel: sd(14, 5, [14, 18]) });
  ekle('zt-a22', '15 + 3 = ?', '18', '', { gorsel: zihin(15, 3, 'yildiz') });
  ekle('zt-a23', '16 + 2 = ?', '18', '', { gorsel: zihin(16, 2, 'balon') });
  ekle('zt-a24', '17 + 2 = ?', '19', '', { gorsel: sd(17, 3, [17, 19]) });
  ekle('zt-a25', '18 + 2 = ?', '20', '', { gorsel: zihin(18, 2) });

  return sorular;
}

function zihindenToplamaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ZIHINDEN_TOPLAMA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('zt-t1', 'Zihninden hesapla: 6 + 5 = ?', '11', ['10', '12', '11', '9'], '', { gorsel: zihin(6, 5) });
  ekle('zt-t2', '9 + 4 = ?', '13', ['12', '14', '13', '11'], '', { gorsel: adim(9, 1, 10, 3, 13) });
  ekle('zt-t3', 'Markette 7 elma, 5 armut aldı. Toplam kaç meyve aldı?', '12', ['11', '13', '12', '10'], '', { gorsel: prob('market-sepeti') });
  ekle('zt-t4', '8 + 6 = ?', '14', ['13', '15', '14', '12'], '', { gorsel: adim(8, 2, 10, 4, 14) });
  ekle('zt-t5', "10'a tamamlayarak hesapla: 7 + □ = 10. Kutu kaçtır?", '3', ['2', '4', '3', '5'], '', { gorsel: bil('b', 7, 10, 10) });
  ekle('zt-t6', "Elanaz'ın 9 resmi, Elif'in 6 resmi var. Toplam kaç resim?", '15', ['14', '16', '15', '13'], '', { gorsel: prob('elanaz-elif-resim') });
  ekle('zt-t7', '8 + 8 = ?', '16', ['15', '17', '16', '14'], '', { gorsel: zihin(8, 8) });
  ekle(
    'zt-t8',
    'Zihninden en hızlı nasıl hesaplarsın: 9 + 7 = ?',
    "9'a 1 ekle 10 yap, 6 ekle",
    ["9'dan 7 geri say", "9'a 1 ekle 10 yap, 6 ekle", "7'den başla 9 say", 'İkisini de say'],
    '',
    { gorsel: adim(9, 1, 10, 6, 16) },
  );
  ekle('zt-t9', '13 + 5 = ?', '18', ['17', '19', '18', '16'], '', { gorsel: sd(13, 6, [13, 18]) });
  ekle('zt-t10', "Hangi işlemin sonucu 15'tir?", '9 + 6', ['7 + 7', '9 + 6', '8 + 6', '6 + 8'], '', { gorsel: kars(zihin(7, 7), zihin(9, 6), zihin(8, 6), zihin(6, 8)) });
  ekle('zt-t11', '14 + 5 = ?', '19', ['18', '20', '19', '17'], '', { gorsel: zihin(14, 5) });
  ekle('zt-t12', 'Sınıfta 11 kız, 7 erkek var. Toplam kaç öğrenci?', '18', ['17', '19', '18', '16'], '', { gorsel: prob('sinif-ogrenci') });
  ekle('zt-t13', '15 + 4 = ?', '19', ['18', '20', '19', '17'], '', { gorsel: sd(15, 5, [15, 19]) });
  ekle(
    'zt-t14',
    "🎭 Hangisi 10'a tamamlama yöntemiyle en kolay hesaplanır?",
    '9 + 6',
    ['3 + 4', '9 + 6', '2 + 3', '4 + 5'],
    "9'u 10'a tamamlamak çok kolay!",
    { gorsel: adim(9, 1, 10), sasirtma: true },
  );
  ekle('zt-t15', '16 + 3 = ?', '19', ['18', '20', '19', '17'], '', { gorsel: zihin(16, 3, 'yildiz') });
  ekle('zt-t16', 'Bahçede 12 kırmızı, 6 sarı gül var. Toplam kaç gül?', '18', ['17', '19', '18', '16'], '', { gorsel: prob('bahce-gul') });
  ekle('zt-t17', '17 + 3 = ?', '20', ['19', '21', '20', '18'], '', { gorsel: zihin(17, 3) });
  ekle(
    'zt-t18',
    '🎭 □ + 8 = 15. Kutudaki sayı nedir?',
    '7',
    ['6', '8', '7', '5'],
    '15 - 8 = ?',
    { gorsel: bil('a', 8, 15, 15), sasirtma: true },
  );
  ekle('zt-t19', '11 + 8 = ?', '19', ['18', '20', '19', '17'], '', { gorsel: sd(11, 9, [11, 19]) });
  ekle(
    'zt-t20',
    '🎭 9 + 9 = ?',
    '18',
    ['17', '19', '18', '16'],
    '9 + 1 = 10, 10 + 8 = 18!',
    { gorsel: adim(9, 1, 10, 8, 18), sasirtma: true },
  );
  ekle('zt-t21', 'Markette 13 portakal, 4 mandalina var. Toplam kaç turunçgil?', '17', ['16', '18', '17', '15'], '', { gorsel: prob('market-turuncgil') });
  ekle('zt-t22', '12 + 7 = ?', '19', ['18', '20', '19', '17'], '', { gorsel: zihin(12, 7, 'balon') });
  ekle(
    'zt-t23',
    '🎭 Aşağıdakilerden hangisi yanlıştır?',
    '7 + 9 = 16',
    ['8 + 7 = 15', '9 + 6 = 15', '7 + 9 = 16', '6 + 9 = 15'],
    '7 + 9 = kaç?',
    { gorsel: kars(zihin(8, 7), zihin(9, 6), zihin(7, 9), zihin(6, 9)), sasirtma: true },
  );
  ekle('zt-t24', "Alya'nın 6 oyuncağı, Elanaz'ın 14 oyuncağı var. Toplam kaç oyuncak?", '20', ['19', '21', '20', '18'], '', { gorsel: prob('alya-elanaz-oyuncak') });
  ekle(
    'zt-t25',
    '🎭 Zihninden hesapla: 13 + 7 = ?',
    '20',
    ['19', '21', '20', '18'],
    '13 + 7… 3 + 7 = 10, 10 + 10 = 20!',
    { gorsel: sd(13, 8, [13, 20]), sasirtma: true },
  );

  return sorular;
}

function zihindenCikarmaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ZIHINDEN_CIKARMA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('zc-a1', '10 - 3 = ?', '7', '', { gorsel: zihinCik(10, 3) });
  ekle('zc-a2', '9 - 4 = ?', '5', '', { gorsel: zihinCik(9, 4, 'elma') });
  ekle('zc-a3', '8 - 5 = ?', '3', '', { gorsel: zihinCik(8, 5, 'balon') });
  ekle('zc-a4', '10 - 7 = ?', '3', '', { gorsel: zihinCik(10, 7, 'yildiz') });
  ekle('zc-a5', '10 - 2 = ?', '8', '', { gorsel: zihinCik(10, 2, 'cilek') });
  ekle('zc-a6', '11 - 1 = ?', '10', '', { gorsel: zihinCik(11, 1) });
  ekle('zc-a7', '12 - 2 = ?', '10', '', { gorsel: zihinCik(12, 2, 'kup') });
  ekle('zc-a8', '13 - 3 = ?', '10', '', { gorsel: zihinCik(13, 3, 'cicek') });
  ekle('zc-a9', '14 - 4 = ?', '10', '', { gorsel: zihinCik(14, 4, 'balon') });
  ekle('zc-a10', '15 - 5 = ?', '10', '', { gorsel: zihinCik(15, 5) });
  ekle('zc-a11', '11 - 4 = ?', '7', '', { gorsel: adim(11, 10, 7) });
  ekle('zc-a12', '12 - 5 = ?', '7', '', { gorsel: adim(12, 10, 7) });
  ekle('zc-a13', '13 - 6 = ?', '7', '', { gorsel: sd(13, 7, [13, 7]) });
  ekle('zc-a14', '14 - 7 = ?', '7', '', { gorsel: zihinCik(14, 7, 'yildiz') });
  ekle('zc-a15', '15 - 8 = ?', '7', '', { gorsel: adim(15, 10, 7) });
  ekle('zc-a16', '16 - 9 = ?', '7', '', { gorsel: sd(16, 8, [16, 7]) });
  ekle('zc-a17', '17 - 8 = ?', '9', '', { gorsel: adim(17, 10, 9) });
  ekle('zc-a18', '18 - 9 = ?', '9', '', { gorsel: zihinCik(18, 9) });
  ekle('zc-a19', '20 - 10 = ?', '10', '', { gorsel: zihinCik(20, 10, 'onluk') });
  ekle('zc-a20', '20 - 5 = ?', '15', '', { gorsel: zihinCik(20, 5, 'kup') });
  ekle('zc-a21', '19 - 9 = ?', '10', '', { gorsel: zihinCik(19, 9, 'balon') });
  ekle('zc-a22', '16 - 6 = ?', '10', '', { gorsel: zihinCik(16, 6, 'cilek') });
  ekle('zc-a23', '20 - 8 = ?', '12', '', { gorsel: sd(20, 9, [20, 12]) });
  ekle('zc-a24', '20 - 6 = ?', '14', '', { gorsel: zihinCik(20, 6, 'yildiz') });
  ekle('zc-a25', '20 - 4 = ?', '16', '', { gorsel: zihinCik(20, 4) });

  return sorular;
}

function zihindenCikarmaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ZIHINDEN_CIKARMA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('zc-t1', 'Zihninden hesapla: 10 - 6 = ?', '4', ['3', '5', '4', '6'], '', { gorsel: zihinCik(10, 6) });
  ekle('zc-t2', '11 - 5 = ?', '6', ['5', '7', '6', '4'], '', { gorsel: adim(11, 10, 6) });
  ekle('zc-t3', 'Sepette 12 elma vardı, 4 tanesi yendi. Kaç elma kaldı?', '8', ['7', '9', '8', '6'], '', { gorsel: prob('sepet-elma') });
  ekle('zc-t4', '13 - 7 = ?', '6', ['5', '7', '6', '4'], '', { gorsel: sd(13, 7, [13, 6]) });
  ekle(
    'zc-t5',
    "10'a inerek hesapla: 14 - 6 = ?",
    '8',
    ['7', '9', '8', '6'],
    "14'ten 4 çıkar=10, 2 daha çıkar=8",
    { gorsel: adim(14, 10, 8) },
  );
  ekle('zc-t6', 'Bahçede 15 kuş vardı, 7 tanesi uçtu. Kaç kuş kaldı?', '8', ['7', '9', '8', '6'], '', { gorsel: prob('bahce-kus') });
  ekle('zc-t7', '16 - 8 = ?', '8', ['7', '9', '8', '6'], '', { gorsel: adim(16, 10, 8) });
  ekle('zc-t8', '□ - 5 = 8. Kutudaki sayı kaçtır?', '13', ['12', '14', '13', '11'], '', { gorsel: bil('a', 5, 8, 13) });
  ekle('zc-t9', '17 - 9 = ?', '8', ['7', '9', '8', '6'], '', { gorsel: sd(17, 10, [17, 8]) });
  ekle('zc-t10', "Hangi işlemin sonucu 6'dır?", '13 - 8', ['14 - 9', '13 - 8', '12 - 7', '15 - 8'], '', { gorsel: kars(zihinCik(14, 9), zihinCik(13, 8), zihinCik(12, 7), zihinCik(15, 8)) });
  ekle('zc-t11', '18 - 8 = ?', '10', ['9', '11', '10', '8'], '', { gorsel: zihinCik(18, 8) });
  ekle('zc-t12', 'Kutuda 20 top vardı, 7 tanesi alındı. Kaç top kaldı?', '13', ['12', '14', '13', '11'], '', { gorsel: prob('kutu-top-aliniyor') });
  ekle('zc-t13', '20 - 9 = ?', '11', ['10', '12', '11', '9'], '', { gorsel: sd(20, 10, [20, 11]) });
  ekle(
    'zc-t14',
    '🎭 15 - □ = 8. Kutudaki sayı nedir?',
    '7',
    ['6', '8', '7', '5'],
    "8'e ne eklersek 15 olur?",
    { gorsel: bil('b', 15, 8, 15), sasirtma: true },
  );
  ekle('zc-t15', "Elanaz'ın 16 boyası vardı, 9 tanesini Elif'e verdi. Kaç boyası kaldı?", '7', ['6', '8', '7', '5'], '', { gorsel: prob('elanaz-boya-veriyor') });
  ekle('zc-t16', '19 - 8 = ?', '11', ['10', '12', '11', '9'], '', { gorsel: adim(19, 10, 11) });
  ekle(
    'zc-t17',
    '🎭 Zihninden hesaplamanın en iyi yolu hangisidir?',
    "Önce 10'a in, sonra kalanı çıkar",
    ['Rastgele bir sayı söyle', "Önce 10'a in, sonra kalanı çıkar", 'Hep küçük say', 'Parmak say'],
    '',
    { gorsel: anl('zc-anlatim-2'), sasirtma: true },
  );
  ekle('zc-t18', '20 - 13 = ?', '7', ['6', '8', '7', '5'], '', { gorsel: sd(20, 8, [20, 7]) });
  ekle('zc-t19', 'Sınıfta 18 kalem vardı, 9 tanesi dağıtıldı. Kaç kalem kaldı?', '9', ['8', '10', '9', '7'], '', { gorsel: prob('kalem-kutusu-dagitim') });
  ekle(
    'zc-t20',
    '🎭 17 - 7 = ?',
    '10',
    ['9', '11', '10', '8'],
    "17'den tam 7 çıkar, 10'a inersin!",
    { gorsel: adim(17, 10), sasirtma: true },
  );
  ekle('zc-t21', '20 - 12 = ?', '8', ['7', '9', '8', '6'], '', { gorsel: zihinCik(20, 12, 'balon') });
  ekle('zc-t22', '□ - 9 = 9. Kutudaki sayı nedir?', '18', ['17', '19', '18', '16'], '', { gorsel: bil('a', 9, 9, 18) });
  ekle(
    'zc-t23',
    '🎭 Hangisi en büyük sonucu verir?',
    '18 - 6',
    ['20 - 9', '18 - 6', '17 - 7', '19 - 8'],
    'Her birini hesapla!',
    { gorsel: kars(zihinCik(20, 9), zihinCik(18, 6), zihinCik(17, 7), zihinCik(19, 8)), sasirtma: true },
  );
  ekle('zc-t24', "Alya'nın 14 çikolatası vardı, 6 tanesini yedi. Kaç çikolatası kaldı?", '8', ['7', '9', '8', '6'], '', { gorsel: prob('alya-cikolata') });
  ekle(
    'zc-t25',
    '🎭 Elanaz 20 TL ile markete gitti. 8 TL\'lik dondurma aldı. Kaç TL\'si kaldı?',
    '12',
    ['11', '13', '12', '10'],
    '20 - 8 = ?',
    { gorsel: prob('elanaz-market-dondurma'), sasirtma: true },
  );

  return sorular;
}

function problemlerAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.PROBLEMLER,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('tcp-a1', 'Sepette 5 elma, 3 armut var. Toplam kaç meyve?', '8', '', { gorsel: prob('sepet-meyve') });
  ekle('tcp-a2', 'Masada 9 kalem vardı, 4 tanesi düştü. Masada kaç kalem kaldı?', '5', '', { gorsel: prob('masa-kalem') });
  ekle('tcp-a3', 'Bahçede 7 kırmızı, 6 sarı çiçek var. Toplam kaç çiçek?', '13', '', { gorsel: prob('bahce-cicek') });
  ekle('tcp-a4', 'Kutuda 12 top vardı, 5 tanesi alındı. Kaç top kaldı?', '7', '', { gorsel: prob('kutu-top') });
  ekle('tcp-a5', 'Sınıfta 8 kız, 9 erkek var. Toplam kaç öğrenci?', '17', '', { gorsel: prob('sinif-ogrenci') });
  ekle('tcp-a6', 'Rafta 14 kitap vardı, 6 tanesi ödünç verildi. Kaç kitap kaldı?', '8', '', { gorsel: prob('raf-kitap') });
  ekle('tcp-a7', 'Elanaz 7 resim çizdi, Elif 8 resim çizdi. İkisi toplam kaç resim çizdi?', '15', '', { gorsel: prob('elanaz-elif-resim') });
  ekle('tcp-a8', 'Balonda 16 şeker vardı, 7 tanesi yendi. Kaç şeker kaldı?', '9', '', { gorsel: prob('balon-seker') });
  ekle('tcp-a9', 'Markette 9 elma, 9 portakal var. Toplam kaç meyve?', '18', '', { gorsel: prob('market-tezgah') });
  ekle('tcp-a10', 'Kutuda 20 kalem vardı, 8 tanesi dağıtıldı. Kaç kalem kaldı?', '12', '', { gorsel: prob('kalem-kutusu') });
  ekle('tcp-a11', 'Alya 4 oyuncak, Elanaz 13 oyuncak aldı. Toplam kaç oyuncak?', '17', '', { gorsel: prob('oyuncak-magazasi') });
  ekle('tcp-a12', 'Bahçede 18 kuş vardı, 9 tanesi uçtu. Kaç kuş kaldı?', '9', '', { gorsel: prob('agac-kus') });
  ekle('tcp-a13', 'Bir kutuda 6 mavi, 7 kırmızı, 4 sarı top var. Toplam kaç top?', '17', '', { gorsel: prob('kutu-renkli-top') });
  ekle('tcp-a14', 'Annem 15 TL verdi, 7 TL harcadım. Kaç TL kaldı?', '8', '', { gorsel: prob('cocuk-market') });
  ekle('tcp-a15', 'Sınıfta 11 çocuk vardı, 3 tanesi çıktı, 5 tanesi girdi. Şimdi kaç çocuk var?', '13', '', { gorsel: prob('sinif-kapi') });
  ekle('tcp-a16', 'Elanaz sabah 6, öğlen 5 bardak su içti. Toplam kaç bardak?', '11', '', { gorsel: prob('bardaklar') });
  ekle('tcp-a17', 'Rafta 20 kitap vardı, 8 tanesi alındı, 3 tanesi geri kondu. Kaç kitap var?', '15', '', { gorsel: prob('raf-sahne') });
  ekle('tcp-a18', 'Bahçede 14 gül, 5 papatya var. Güller papatyadan kaç fazla?', '9', '', { gorsel: prob('gul-papatya') });
  ekle('tcp-a19', 'Bir torba 9 elma, diğer torba 8 elma var. İkisi birlikte kaç elma?', '17', '', { gorsel: prob('iki-torba-elma') });
  ekle('tcp-a20', 'Kutuda 16 top vardı, önce 4, sonra 5 tane alındı. Kaç top kaldı?', '7', '', { gorsel: prob('kutu-iki-kez-aliniyor') });
  ekle('tcp-a21', 'Elanaz 13, Elif 7 puan aldı. İkisinin puanları toplamı kaç?', '20', '', { gorsel: prob('puan-tablosu') });
  ekle('tcp-a22', 'Markette 20 yumurta vardı, 12 tanesi satıldı. Kaç yumurta kaldı?', '8', '', { gorsel: prob('yumurta-kasasi') });
  ekle('tcp-a23', 'Sınıfta 9 erkek, 8 kız var. Erkekler kızlardan kaç fazla?', '1', '', { gorsel: prob('sinif-ogrenci') });
  ekle('tcp-a24', 'Alya 5 çikolata yedi, Elanaz 9 çikolata yedi. İkisi toplam kaç çikolata yedi?', '14', '', { gorsel: prob('cikolata-kutusu') });
  ekle('tcp-a25', 'Bir çantada 7 kitap, 6 defter, 4 kalem var. Toplam kaç eşya?', '17', '', { gorsel: prob('acik-canta') });

  return sorular;
}

function problemlerTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.PROBLEMLER,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('tcp-t1', 'Sepette 8 elma, 5 armut var. Toplam kaç meyve?', '13', ['12', '14', '13', '11'], '', { gorsel: prob('sepet-meyve') });
  ekle('tcp-t2', 'Sınıfta 15 kalem vardı, 6 tanesi dağıtıldı. Kaç kalem kaldı?', '9', ['8', '10', '9', '7'], '', { gorsel: prob('kalem-dagitim') });
  ekle('tcp-t3', 'Bu problemde hangi işlemi yapmalıyız? "Bahçede 12 çiçek vardı, 5 tanesi soldu."', 'Çıkarma', ['Toplama', 'Çıkarma', 'İkisi de', 'Hiçbiri'], '', { gorsel: prob('bahce-solmus-cicek') });
  ekle('tcp-t4', 'Elanaz 9 resim, Elif 8 resim çizdi. İkisi toplam kaç resim çizdi?', '17', ['16', '18', '17', '15'], '', { gorsel: prob('elanaz-elif-resim') });
  ekle('tcp-t5', 'Kutuda 17 top vardı, 8 tanesi alındı. Kaç top kaldı?', '9', ['8', '10', '9', '7'], '', { gorsel: prob('kutu-top') });
  ekle('tcp-t6', 'Markette 6 elma, 7 portakal, 4 muz var. Toplam kaç meyve?', '17', ['16', '18', '17', '15'], '', { gorsel: prob('market-tezgah-uc-meyve') });
  ekle('tcp-t7', 'Annem 20 TL verdi, 9 TL harcadım. Kaç TL kaldı?', '11', ['10', '12', '11', '9'], '', { gorsel: prob('cocuk-kasa') });
  ekle(
    'tcp-t8',
    '🎭 Sınıfta 14 çocuk vardı, 5 tanesi çıktı, 3 tanesi girdi. Şimdi kaç çocuk var?',
    '12',
    ['11', '13', '12', '10'],
    'Önce çıkanları çıkar, sonra girenleri ekle!',
    { gorsel: prob('sinif-kapi'), sasirtma: true },
  );
  ekle('tcp-t9', 'Rafta 18 kitap vardı, 9 tanesi ödünç verildi. Kaç kitap kaldı?', '9', ['8', '10', '9', '7'], '', { gorsel: prob('raf-kitap') });
  ekle('tcp-t10', 'Güller papatyadan 6 fazla. Papatya 7 tane ise gül kaç tanedir?', '13', ['12', '14', '13', '11'], '', { gorsel: prob('gul-papatya-karsilastirma') });
  ekle('tcp-t11', 'Elanaz sabah 5, öğlen 6, akşam 4 bardak su içti. Toplam kaç bardak?', '15', ['14', '16', '15', '13'], '', { gorsel: prob('sabah-oglen-aksam-bardak') });
  ekle('tcp-t12', 'Bir torbada 20 top var. 8 tanesi kırmızı, kalanı mavi. Kaç mavi top var?', '12', ['11', '13', '12', '10'], '', { gorsel: prob('torba-kirmizi-mavi-top') });
  ekle(
    'tcp-t13',
    "🎭 Elanaz'ın 14 TL'si var. 9 TL'lik kitap aldı. Kaç TL kaldı?",
    '5',
    ['4', '6', '5', '3'],
    '14 - 9 = ?',
    { gorsel: prob('elanaz-kitapci'), sasirtma: true },
  );
  ekle('tcp-t14', 'Bahçede 7 kedi, 9 köpek var. Köpekler kedilerden kaç fazla?', '2', ['1', '3', '2', '4'], '', { gorsel: prob('kedi-kopek') });
  ekle(
    'tcp-t15',
    '🎭 Önce hangi işlemi yapmalıyız? "Kutuda 10 top vardı, 3 eklendi, 5 alındı."',
    '10 + 3 - 5',
    ['10 - 5 + 3', '10 + 3 - 5', '10 - 3 + 5', '3 + 5 - 10'],
    '',
    { gorsel: prob('kutu-ekleme-cikarma'), sasirtma: true },
  );
  ekle('tcp-t16', 'Sınıfta 9 kız, 8 erkek var. Kızlar erkeklerden kaç fazla?', '1', ['0', '2', '1', '3'], '', { gorsel: prob('sinif-kiz-erkek') });
  ekle('tcp-t17', 'Alya 6, Elanaz 7, Elif 5 çikolata aldı. Üçü toplam kaç çikolata aldı?', '18', ['17', '19', '18', '16'], '', { gorsel: prob('uc-kiz-cikolata') });
  ekle(
    'tcp-t18',
    '🎭 Bir problemde "kaç fazla" yazıyorsa hangi işlemi yaparız?',
    'Çıkarma',
    ['Toplama', 'Çıkarma', 'İkisi de', 'Hiçbiri'],
    '',
    { gorsel: prob('kac-fazla-kart'), sasirtma: true },
  );
  ekle('tcp-t19', 'Rafta 20 oyuncak vardı. 8 tanesi satıldı, 5 tanesi yeni geldi. Kaç oyuncak var?', '17', ['16', '18', '17', '15'], '', { gorsel: prob('oyuncak-raf') });
  ekle('tcp-t20', "Elanaz'ın 15 kalemi var, Elif'in 9 kalemi var. Elanaz'ın kaç fazla kalemi var?", '6', ['5', '7', '6', '4'], '', { gorsel: prob('elanaz-elif-kalem-karsilastirma') });
  ekle('tcp-t21', 'Bahçede 8 sarı, 7 kırmızı, 5 beyaz gül var. Toplam kaç gül?', '20', ['19', '21', '20', '18'], '', { gorsel: prob('uc-renk-gul-bahcesi') });
  ekle(
    'tcp-t22',
    "🎭 Markette 18 TL'lik alışveriş yaptım. 20 TL verdim. Kaç TL para üstü alırım?",
    '2',
    ['1', '3', '2', '4'],
    '',
    { gorsel: prob('kasa-sahnesi'), sasirtma: true },
  );
  ekle('tcp-t23', 'Sınıfta 19 öğrenci vardı, 7 tanesi çıktı. Sonra 4 tanesi daha girdi. Şimdi kaç öğrenci var?', '16', ['15', '17', '16', '14'], '', { gorsel: prob('sinif-giris-cikis') });
  ekle(
    'tcp-t24',
    '🎭 Elanaz 20 TL ile markete gitti. 8 TL dondurma, 5 TL su aldı. Kaç TL kaldı?',
    '7',
    ['6', '8', '7', '5'],
    'Önce harcamaları topla: 8+5=13, sonra 20-13=?',
    { gorsel: prob('elanaz-market-dondurma-su'), sasirtma: true },
  );
  ekle(
    'tcp-t25',
    '🎭 Sınıfta 9 kız, 8 erkek var. Bugün 2 kız ve 3 erkek hasta. Sınıfta kaç öğrenci var?',
    '12',
    ['11', '13', '12', '10'],
    'Toplam: 9+8=17, hastalar: 2+3=5, 17-5=?',
    { gorsel: prob('sinif-hasta-ogrenci'), sasirtma: true },
  );

  return sorular;
}

export function toplama(karistir) {
  return {
    id: 'toplama',
    baslik: 'Toplama İşlemi',
    kazanimKodu: KAZANIM.TOPLAMA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elimde 3 elma var, arkadaşım bana 2 elma daha verdi. Şimdi kaç elmam var? 3 + 2 = 5! Buna TOPLAMA deriz.',
          gorsel: anl('ti-anlatim-1'),
        },
        {
          metin:
            'Toplama işaretimiz artı (+) işaretidir. 4 + 3 = 7. Büyük sayıdan başlayıp küçük sayıyı sayarız: 4… 5, 6, 7!',
          gorsel: anl('ti-anlatim-2'),
        },
        {
          metin: 'Toplama işleminde sayıların yeri değişse de sonuç değişmez! 2 + 5 = 7, 5 + 2 = 7.',
          gorsel: anl('ti-anlatim-3'),
        },
      ],
    },
    alistirma: toplamaAlistirma(),
    test: toplamaTest(karistir),
  };
}

export function cikarma(karistir) {
  return {
    id: 'cikarma',
    baslik: 'Çıkarma İşlemi',
    kazanimKodu: KAZANIM.CIKARMA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elimde 5 elma vardı, 2 tanesini yedim. Kaç elma kaldı? 5 - 2 = 3! Buna ÇIKARMA deriz.',
          gorsel: anl('ci-anlatim-1'),
        },
        {
          metin:
            'Çıkarma işaretimiz eksi (-) işaretidir. Büyük sayıdan küçük sayıyı çıkarırız. 7 - 3 = 4.',
          gorsel: anl('ci-anlatim-2'),
        },
        {
          metin:
            'Bir sayıdan kendisini çıkarırsak 0 kalır! 5 - 5 = 0. Bir sayıdan 0 çıkarırsak sayı değişmez! 5 - 0 = 5.',
          gorsel: anl('ci-anlatim-3'),
        },
      ],
    },
    alistirma: cikarmaAlistirma(),
    test: cikarmaTest(karistir),
  };
}

export function zihindenToplama(karistir) {
  return {
    id: 'zihinden-toplama',
    baslik: 'Zihinden Toplama',
    kazanimKodu: KAZANIM.ZIHINDEN_TOPLAMA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Kağıt-kalem kullanmadan, sadece aklımızda toplama yapabiliriz! Buna ZİHİNDEN TOPLAMA deriz. 6 + 3 = ? Aklında say: 6… 7, 8, 9!',
          gorsel: anl('zt-anlatim-1'),
        },
        {
          metin:
            "Kolaylaştırma tüyosu: Önce 10'a tamamla! 8 + 5 = ? 8'e 2 ekle → 10, kalan 3'ü ekle → 13!",
          gorsel: anl('zt-anlatim-2'),
        },
        {
          metin: "Büyük sayıdan başla, küçük sayıyı ekle! 14 + 3 = ? 14'ten başla… 15, 16, 17!",
          gorsel: anl('zt-anlatim-3'),
        },
      ],
    },
    alistirma: zihindenToplamaAlistirma(),
    test: zihindenToplamaTest(karistir),
  };
}

export function zihindenCikarma(karistir) {
  return {
    id: 'zihinden-cikarma',
    baslik: 'Zihinden Çıkarma',
    kazanimKodu: KAZANIM.ZIHINDEN_CIKARMA,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Kağıt kullanmadan aklımızda çıkarma yapabiliriz! 10 - 4 = ? Aklında say: 10… 9, 8, 7, 6!',
          gorsel: anl('zc-anlatim-1'),
        },
        {
          metin:
            "Kolaylaştırma tüyosu: Önce 10'a in! 13 - 5 = ? 13'ten 3 çıkar → 10, sonra 2 daha çıkar → 8!",
          gorsel: anl('zc-anlatim-2'),
        },
        {
          metin: "Sayı doğrusunda geri say! 15 - 4 = ? 15'ten 4 adım geri: 14, 13, 12, 11!",
          gorsel: anl('zc-anlatim-3'),
        },
      ],
    },
    alistirma: zihindenCikarmaAlistirma(),
    test: zihindenCikarmaTest(karistir),
  };
}

export function problemler(karistir) {
  return {
    id: 'toplama-cikarma-problemleri',
    baslik: 'Toplama ve Çıkarma Problemleri',
    kazanimKodu: KAZANIM.PROBLEMLER,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Problem çözmek için önce ne sorulduğunu anlarız! "Toplam kaç?" → toplama. "Kaç kaldı?" → çıkarma.',
          gorsel: anl('tcp-anlatim-1'),
        },
        {
          metin:
            'Problem çözme adımları: 1) Oku 2) Ne soruyor? 3) İşlem seç 4) Hesapla 5) Kontrol et!',
          gorsel: anl('tcp-anlatim-2'),
        },
        {
          metin: 'Bazen iki işlem yaparız! Önce topla, sonra çıkar — ya da önce çıkar, sonra topla.',
          gorsel: anl('tcp-anlatim-3'),
        },
      ],
    },
    alistirma: problemlerAlistirma(),
    test: problemlerTest(karistir),
  };
}

