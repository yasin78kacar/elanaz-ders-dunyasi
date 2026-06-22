/** PARTI-ZEKA-DIKKAT — Zekâ ve Dikkat (100 soru) */

const KAZANIM = 'ZD.2.1';

const anl = (sahne) => ({ tur: 'zeka-dikkat', mod: 'anlatim', sahne });
const oruntu = (elemanlar, adimEtiketi) => ({ tur: 'oruntu', elemanlar, adimEtiketi });
const farkli = (ogeler, farkliIndeks) => ({ tur: 'zeka-dikkat', mod: 'farkli', ogeler, farkliIndeks });
const sayim = (sahne, adet) => ({ tur: 'zeka-dikkat', mod: 'sayim', sahne, adet });
const dikkat = (sahne) => ({ tur: 'zeka-dikkat', mod: 'dikkat', sahne });

const SEK = ['kare', 'ucgen', 'daire', 'kare', 'ucgen', 'daire'];
const RENK = ['kirmizi', 'mavi', 'sari', 'kirmizi', 'mavi', 'soru'];

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

function sayiOruntu(baslangic, adim, adet = 5) {
  return Array.from({ length: adet }, (_, i) => ({
    tip: i === adet - 1 ? 'soru' : 'sayi',
    deger: i === adet - 1 ? undefined : baslangic + adim * i,
  }));
}

function sekilOruntu(sekiller, adet = 5) {
  return Array.from({ length: adet }, (_, i) => ({
    tip: i === adet - 1 ? 'soru' : 'sekil',
    deger: i === adet - 1 ? undefined : sekiller[i % sekiller.length],
  }));
}

function renkOruntu(renkler, adet = 5) {
  return Array.from({ length: adet }, (_, i) => ({
    tip: i === adet - 1 ? 'soru' : 'renk',
    deger: i === adet - 1 ? undefined : renkler[i % renkler.length],
  }));
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'zd-a1', '2, 4, 6, 8, ? örüntüsünde soru işareti yerine ......... gelir.', '10', 'İkişer artıyor.', { gorsel: oruntu(sayiOruntu(2, 2), '+2') });
  boslukEkle(s, 'zd-a2', '5, 10, 15, 20, ? örüntüsünde eksik sayı ......... dir.', '25', 'Beşer artıyor.', { gorsel: oruntu(sayiOruntu(5, 5), '+5') });
  boslukEkle(s, 'zd-a3', '1, 3, 5, 7, ? örüntüsünde son sayı ......... dir.', '9', 'Tek sayılar.', { gorsel: oruntu(sayiOruntu(1, 2), '+2') });
  boslukEkle(s, 'zd-a4', '10, 9, 8, 7, ? örüntüsünde eksik sayı ......... dir.', '6', 'Birer azalıyor.', { gorsel: oruntu([{ tip: 'sayi', deger: 10 }, { tip: 'sayi', deger: 9 }, { tip: 'sayi', deger: 8 }, { tip: 'sayi', deger: 7 }, { tip: 'soru' }], '-1') });
  boslukEkle(s, 'zd-a5', '3, 6, 9, 12, ? örüntüsünde son sayı ......... dir.', '15', 'Üçer artıyor.', { gorsel: oruntu(sayiOruntu(3, 3), '+3') });
  boslukEkle(s, 'zd-a6', 'Kare, üçgen, daire, kare, ? örüntüsünde eksik şekil ......... dir.', 'üçgen', 'Üçlü tekrar.', { gorsel: oruntu(sekilOruntu(SEK), '→') });
  boslukEkle(s, 'zd-a7', 'Kırmızı, mavi, sarı, kırmızı, ? örüntüsünde eksik renk ......... dir.', 'mavi', 'Renk tekrarı.', { gorsel: oruntu(renkOruntu(['kirmizi', 'mavi', 'sari']), '→') });
  boslukEkle(s, 'zd-a8', 'Aşağıdaki dizide farklı olan şekil ......... dir.', 'daire', 'Diğerleri kare.', { gorsel: farkli(['kare', 'kare', 'daire', 'kare', 'kare'], 2) });
  boslukEkle(s, 'zd-a9', 'Aşağıdaki dizide farklı olan renk ......... dir.', 'yeşil', 'Diğerleri kırmızı.', { gorsel: farkli(['kirmizi', 'kirmizi', 'yesil', 'kirmizi', 'kirmizi'], 2) });
  boslukEkle(s, 'zd-a10', 'Resimde kaç elma var?', '5', 'Her birini say.', { gorsel: sayim('elma-5', 5) });
  boslukEkle(s, 'zd-a11', '20, 18, 16, 14, ? örüntüsünde eksik sayı ......... dir.', '12', 'İkişer azalıyor.', { gorsel: oruntu(sayiOruntu(20, -2), '-2') });
  boslukEkle(s, 'zd-a12', '4, 8, 12, 16, ? örüntüsünde son sayı ......... dir.', '20', 'Dörder artıyor.', { gorsel: oruntu(sayiOruntu(4, 4), '+4') });
  boslukEkle(s, 'zd-a13', '2, 4, 8, 16, ? örüntüsünde son sayı ......... dir.', '32', 'İki katına çıkıyor.', { gorsel: oruntu([{ tip: 'sayi', deger: 2 }, { tip: 'sayi', deger: 4 }, { tip: 'sayi', deger: 8 }, { tip: 'sayi', deger: 16 }, { tip: 'soru' }], '×2') });
  boslukEkle(s, 'zd-a14', 'Üçgen, daire, üçgen, daire, ? örüntüsünde eksik şekil ......... dir.', 'üçgen', 'İkili tekrar.', { gorsel: oruntu(sekilOruntu(['ucgen', 'daire']), '→') });
  boslukEkle(s, 'zd-a15', 'Mavi, sarı, mavi, sarı, ? örüntüsünde eksik renk ......... dir.', 'mavi', 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['mavi', 'sari']), '→') });
  boslukEkle(s, 'zd-a16', 'Aşağıdaki dizide farklı olan şekil ......... dir.', 'üçgen', 'Diğerleri daire.', { gorsel: farkli(['daire', 'daire', 'ucgen', 'daire', 'daire'], 2) });
  boslukEkle(s, 'zd-a17', 'Aşağıdaki dizide farklı olan sayı ......... dir.', '7', 'Diğerleri çift.', { gorsel: farkli(['2', '4', '7', '8', '10'], 2) });
  boslukEkle(s, 'zd-a18', 'Resimde kaç yıldız var?', '4', 'Dikkatle say.', { gorsel: sayim('yildiz-4', 4) });
  boslukEkle(s, 'zd-a19', '6, 12, 18, 24, ? örüntüsünde son sayı ......... dir.', '30', 'Altışar artıyor.', { gorsel: oruntu(sayiOruntu(6, 6), '+6') });
  boslukEkle(s, 'zd-a20', '1, 2, 3, 4, ? örüntüsünde son sayı ......... dir.', '5', 'Birer artıyor.', { gorsel: oruntu(sayiOruntu(1, 1), '+1') });
  boslukEkle(s, 'zd-a21', 'Daire, kare, daire, kare, ? örüntüsünde eksik şekil ......... dir.', 'daire', 'İkili tekrar.', { gorsel: oruntu(sekilOruntu(['daire', 'kare']), '→') });
  boslukEkle(s, 'zd-a22', 'Sarı, kırmızı, sarı, kırmızı, ? örüntüsünde eksik renk ......... dir.', 'sarı', 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['sari', 'kirmizi']), '→') });
  boslukEkle(s, 'zd-a23', 'Aşağıdaki dizide farklı olan renk ......... dir.', 'mavi', 'Diğerleri sarı.', { gorsel: farkli(['sari', 'sari', 'mavi', 'sari', 'sari'], 2) });
  boslukEkle(s, 'zd-a24', 'Resimde kaç top var?', '6', 'Her birini say.', { gorsel: sayim('top-6', 6) });
  boslukEkle(s, 'zd-a25', '50, 45, 40, 35, ? örüntüsünde eksik sayı ......... dir.', '30', 'Beşer azalıyor.', { gorsel: oruntu(sayiOruntu(50, -5), '-5') });
  boslukEkle(s, 'zd-a26', '7, 14, 21, 28, ? örüntüsünde son sayı ......... dir.', '35', 'Yedişer artıyor.', { gorsel: oruntu(sayiOruntu(7, 7), '+7') });
  boslukEkle(s, 'zd-a27', 'Kare, kare, üçgen, kare, kare, ? örüntüsünde eksik şekil ......... dir.', 'üçgen', 'Ortada üçgen tekrar ediyor.', { gorsel: oruntu([{ tip: 'sekil', deger: 'kare' }, { tip: 'sekil', deger: 'kare' }, { tip: 'sekil', deger: 'ucgen' }, { tip: 'sekil', deger: 'kare' }, { tip: 'soru' }], '→') });
  boslukEkle(s, 'zd-a28', 'Yeşil, mavi, yeşil, mavi, ? örüntüsünde eksik renk ......... dir.', 'yeşil', 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['yesil', 'mavi']), '→') });
  boslukEkle(s, 'zd-a29', 'Aşağıdaki dizide farklı olan şekil ......... dir.', 'kare', 'Diğerleri üçgen.', { gorsel: farkli(['ucgen', 'ucgen', 'kare', 'ucgen', 'ucgen'], 2) });
  boslukEkle(s, 'zd-a30', 'Resimde kaç kuş var?', '3', 'Dikkatle say.', { gorsel: sayim('kus-3', 3) });
  boslukEkle(s, 'zd-a31', '11, 13, 15, 17, ? örüntüsünde son sayı ......... dir.', '19', 'İkişer artan tekler.', { gorsel: oruntu(sayiOruntu(11, 2), '+2') });
  boslukEkle(s, 'zd-a32', '100, 90, 80, 70, ? örüntüsünde eksik sayı ......... dir.', '60', 'Onar azalıyor.', { gorsel: oruntu(sayiOruntu(100, -10), '-10') });
  boslukEkle(s, 'zd-a33', 'Üçgen, üçgen, daire, üçgen, üçgen, ? örüntüsünde eksik şekil ......... dir.', 'daire', 'Daire her üç şekilde bir.', { gorsel: oruntu([{ tip: 'sekil', deger: 'ucgen' }, { tip: 'sekil', deger: 'ucgen' }, { tip: 'sekil', deger: 'daire' }, { tip: 'sekil', deger: 'ucgen' }, { tip: 'soru' }], '→') });
  boslukEkle(s, 'zd-a34', 'Kırmızı, kırmızı, mavi, kırmızı, kırmızı, ? örüntüsünde eksik renk ......... dir.', 'mavi', 'Mavi her üç renkte bir.', { gorsel: oruntu([{ tip: 'renk', deger: 'kirmizi' }, { tip: 'renk', deger: 'kirmizi' }, { tip: 'renk', deger: 'mavi' }, { tip: 'renk', deger: 'kirmizi' }, { tip: 'soru' }], '→') });
  boslukEkle(s, 'zd-a35', 'Aşağıdaki dizide farklı olan sayı ......... dir.', '14', 'Diğerleri 5\'in katı.', { gorsel: farkli(['10', '15', '14', '20', '25'], 2) });
  boslukEkle(s, 'zd-a36', 'Resimde kaç çiçek var?', '7', 'Her birini say.', { gorsel: sayim('cicek-7', 7) });
  boslukEkle(s, 'zd-a37', '8, 7, 6, 5, ? örüntüsünde eksik sayı ......... dir.', '4', 'Birer azalıyor.', { gorsel: oruntu(sayiOruntu(8, -1), '-1') });
  boslukEkle(s, 'zd-a38', 'Daire, daire, kare, daire, daire, ? örüntüsünde eksik şekil ......... dir.', 'kare', 'Kare her üç şekilde bir.', { gorsel: oruntu([{ tip: 'sekil', deger: 'daire' }, { tip: 'sekil', deger: 'daire' }, { tip: 'sekil', deger: 'kare' }, { tip: 'sekil', deger: 'daire' }, { tip: 'soru' }], '→') });
  boslukEkle(s, 'zd-a39', 'Mor, turuncu, mor, turuncu, ? örüntüsünde eksik renk ......... dir.', 'mor', 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['mor', 'turuncu']), '→') });
  boslukEkle(s, 'zd-a40', 'Aşağıdaki grupta farklı olan ......... dir.', 'balık', 'Diğerleri meyve.', { gorsel: farkli(['elma', 'armut', 'balik', 'muz', 'uzum'], 2) });
  boslukEkle(s, 'zd-a41', 'Resimde kaç kalem var?', '8', 'Dikkatle say.', { gorsel: sayim('kalem-8', 8) });
  boslukEkle(s, 'zd-a42', '2, 5, 8, 11, ? örüntüsünde son sayı ......... dir.', '14', 'Üçer artıyor.', { gorsel: oruntu(sayiOruntu(2, 3), '+3') });
  boslukEkle(s, 'zd-a43', '30, 27, 24, 21, ? örüntüsünde eksik sayı ......... dir.', '18', 'Üçer azalıyor.', { gorsel: oruntu(sayiOruntu(30, -3), '-3') });
  boslukEkle(s, 'zd-a44', 'Kare, üçgen, kare, üçgen, ? örüntüsünde eksik şekil ......... dir.', 'kare', 'İkili tekrar.', { gorsel: oruntu(sekilOruntu(['kare', 'ucgen']), '→') });
  boslukEkle(s, 'zd-a45', 'Eksik parçayı bul: Aynı desen devam etmeli.', 'sağ alt', 'Simetriye dikkat.', { gorsel: dikkat('esik-parca') });
  boslukEkle(s, 'zd-a46', 'Aşağıdaki dizide farklı olan şekil ......... dir.', 'daire', 'Diğerleri kare ve üçgen değil - kare.', { gorsel: farkli(['kare', 'kare', 'daire', 'kare', 'kare'], 2) });
  boslukEkle(s, 'zd-a47', 'Resimde kaç kelebek var?', '5', 'Her birini say.', { gorsel: sayim('kelebek-5', 5) });
  boslukEkle(s, 'zd-a48', '9, 8, 7, 6, ? örüntüsünde eksik sayı ......... dir.', '5', 'Birer azalıyor.', { gorsel: oruntu(sayiOruntu(9, -1), '-1') });
  boslukEkle(s, 'zd-a49', 'Dikkat: Aynı nesneden kaç tane var?', '4', 'Sadece kırmızı topları say.', { gorsel: dikkat('kirmizi-top-say') });
  boslukEkle(s, 'zd-a50', 'Örüntüde eksik sayı: 25, 20, 15, 10, ?', '5', 'Beşer azalıyor.', { gorsel: oruntu(sayiOruntu(25, -5), '-5') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);

  e('zd-t1', '2, 4, 6, 8, ? örüntüsünde ? yerine hangi sayı gelir?', '10', ['8', '9', '10', '12'], 'İkişer artıyor.', { gorsel: oruntu(sayiOruntu(2, 2), '+2') });
  e('zd-t2', '5, 10, 15, 20, ? örüntüsünde eksik sayı hangisidir?', '25', ['20', '22', '25', '30'], 'Beşer artıyor.', { gorsel: oruntu(sayiOruntu(5, 5), '+5') });
  e('zd-t3', 'Kare, üçgen, daire, kare, ? örüntüsünde eksik şekil hangisidir?', 'Üçgen', ['Daire', 'Kare', 'Üçgen', 'Yıldız'], 'Üçlü tekrar.', { gorsel: oruntu(sekilOruntu(SEK), '→') });
  e('zd-t4', 'Aşağıdaki dizide farklı olan hangisidir?', 'Daire', ['Kare', 'Kare', 'Daire', 'Kare'], 'Diğerleri kare.', { gorsel: farkli(['kare', 'kare', 'daire', 'kare', 'kare'], 2) });
  e('zd-t5', 'Resimde kaç elma vardır?', '5', ['4', '5', '6', '7'], 'Her birini say.', { gorsel: sayim('elma-5', 5) });
  e('zd-t6', '10, 9, 8, 7, ? örüntüsünde eksik sayı hangisidir?', '6', ['5', '6', '7', '8'], 'Birer azalıyor.', { gorsel: oruntu(sayiOruntu(10, -1), '-1') });
  e('zd-t7', 'Kırmızı, mavi, sarı, kırmızı, ? örüntüsünde eksik renk hangisidir?', 'Mavi', ['Sarı', 'Kırmızı', 'Mavi', 'Yeşil'], 'Renk tekrarı.', { gorsel: oruntu(renkOruntu(['kirmizi', 'mavi', 'sari']), '→') });
  e('zd-t8', 'Aşağıdaki dizide farklı olan renk hangisidir?', 'Yeşil', ['Kırmızı', 'Kırmızı', 'Yeşil', 'Kırmızı'], 'Diğerleri kırmızı.', { gorsel: farkli(['kirmizi', 'kirmizi', 'yesil', 'kirmizi', 'kirmizi'], 2) });
  e('zd-t9', '3, 6, 9, 12, ? örüntüsünde son sayı hangisidir?', '15', ['12', '14', '15', '18'], 'Üçer artıyor.', { gorsel: oruntu(sayiOruntu(3, 3), '+3') });
  e('zd-t10', 'Resimde kaç yıldız vardır?', '4', ['3', '4', '5', '6'], 'Dikkatle say.', { gorsel: sayim('yildiz-4', 4) });
  e('zd-t11', 'Üçgen, daire, üçgen, daire, ? örüntüsünde eksik şekil hangisidir?', 'Üçgen', ['Daire', 'Üçgen', 'Kare', 'Yıldız'], 'İkili tekrar.', { gorsel: oruntu(sekilOruntu(['ucgen', 'daire']), '→') });
  e('zd-t12', 'Aşağıdaki dizide farklı olan sayı hangisidir?', '7', ['2', '4', '7', '8'], 'Diğerleri çift.', { gorsel: farkli(['2', '4', '7', '8', '10'], 2) });
  e('zd-t13', '20, 18, 16, 14, ? örüntüsünde eksik sayı hangisidir?', '12', ['10', '12', '14', '16'], 'İkişer azalıyor.', { gorsel: oruntu(sayiOruntu(20, -2), '-2') });
  e('zd-t14', '4, 8, 12, 16, ? örüntüsünde son sayı hangisidir?', '20', ['16', '18', '20', '24'], 'Dörder artıyor.', { gorsel: oruntu(sayiOruntu(4, 4), '+4') });
  e('zd-t15', 'Resimde kaç top vardır?', '6', ['5', '6', '7', '8'], 'Her birini say.', { gorsel: sayim('top-6', 6) });
  e('zd-t16', 'Mavi, sarı, mavi, sarı, ? örüntüsünde eksik renk hangisidir?', 'Mavi', ['Sarı', 'Mavi', 'Kırmızı', 'Yeşil'], 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['mavi', 'sari']), '→') });
  e('zd-t17', 'Aşağıdaki dizide farklı olan şekil hangisidir?', 'Üçgen', ['Daire', 'Daire', 'Üçgen', 'Daire'], 'Diğerleri daire.', { gorsel: farkli(['daire', 'daire', 'ucgen', 'daire', 'daire'], 2) });
  e('zd-t18', '1, 3, 5, 7, ? örüntüsünde son sayı hangisidir?', '9', ['7', '8', '9', '11'], 'Tek sayılar.', { gorsel: oruntu(sayiOruntu(1, 2), '+2') });
  e('zd-t19', 'Resimde kaç kuş vardır?', '3', ['2', '3', '4', '5'], 'Dikkatle say.', { gorsel: sayim('kus-3', 3) });
  e('zd-t20', '6, 12, 18, 24, ? örüntüsünde son sayı hangisidir?', '30', ['24', '28', '30', '36'], 'Altışar artıyor.', { gorsel: oruntu(sayiOruntu(6, 6), '+6') });
  e('zd-t21', 'Daire, kare, daire, kare, ? örüntüsünde eksik şekil hangisidir?', 'Daire', ['Kare', 'Daire', 'Üçgen', 'Yıldız'], 'İkili tekrar.', { gorsel: oruntu(sekilOruntu(['daire', 'kare']), '→') });
  e('zd-t22', 'Sarı, kırmızı, sarı, kırmızı, ? örüntüsünde eksik renk hangisidir?', 'Sarı', ['Kırmızı', 'Sarı', 'Mavi', 'Yeşil'], 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['sari', 'kirmizi']), '→') });
  e('zd-t23', 'Aşağıdaki dizide farklı olan renk hangisidir?', 'Mavi', ['Sarı', 'Sarı', 'Mavi', 'Sarı'], 'Diğerleri sarı.', { gorsel: farkli(['sari', 'sari', 'mavi', 'sari', 'sari'], 2) });
  e('zd-t24', '50, 45, 40, 35, ? örüntüsünde eksik sayı hangisidir?', '30', ['25', '30', '35', '40'], 'Beşer azalıyor.', { gorsel: oruntu(sayiOruntu(50, -5), '-5') });
  e('zd-t25', 'Resimde kaç çiçek vardır?', '7', ['6', '7', '8', '9'], 'Her birini say.', { gorsel: sayim('cicek-7', 7) });
  e('zd-t26', '2, 4, 8, 16, ? örüntüsünde son sayı hangisidir?', '32', ['24', '28', '32', '36'], 'İki katına çıkıyor.', { gorsel: oruntu([{ tip: 'sayi', deger: 2 }, { tip: 'sayi', deger: 4 }, { tip: 'sayi', deger: 8 }, { tip: 'sayi', deger: 16 }, { tip: 'soru' }], '×2') });
  e('zd-t27', 'Kare, kare, üçgen, kare, kare, ? örüntüsünde eksik şekil hangisidir?', 'Üçgen', ['Kare', 'Üçgen', 'Daire', 'Yıldız'], 'Ortada üçgen tekrar ediyor.', { gorsel: oruntu([{ tip: 'sekil', deger: 'kare' }, { tip: 'sekil', deger: 'kare' }, { tip: 'sekil', deger: 'ucgen' }, { tip: 'sekil', deger: 'kare' }, { tip: 'soru' }], '→') });
  e('zd-t28', 'Aşağıdaki grupta farklı olan hangisidir?', 'Balık', ['Elma', 'Armut', 'Balık', 'Muz'], 'Diğerleri meyve.', { gorsel: farkli(['elma', 'armut', 'balik', 'muz', 'uzum'], 2) });
  e('zd-t29', '11, 13, 15, 17, ? örüntüsünde son sayı hangisidir?', '19', ['17', '18', '19', '21'], 'İkişer artan tekler.', { gorsel: oruntu(sayiOruntu(11, 2), '+2') });
  e('zd-t30', 'Resimde kaç kalem vardır?', '8', ['7', '8', '9', '10'], 'Dikkatle say.', { gorsel: sayim('kalem-8', 8) });
  e('zd-t31', '100, 90, 80, 70, ? örüntüsünde eksik sayı hangisidir?', '60', ['50', '60', '70', '80'], 'Onar azalıyor.', { gorsel: oruntu(sayiOruntu(100, -10), '-10') });
  e('zd-t32', 'Yeşil, mavi, yeşil, mavi, ? örüntüsünde eksik renk hangisidir?', 'Yeşil', ['Mavi', 'Yeşil', 'Sarı', 'Kırmızı'], 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['yesil', 'mavi']), '→') });
  e('zd-t33', 'Aşağıdaki dizide farklı olan şekil hangisidir?', 'Kare', ['Üçgen', 'Üçgen', 'Kare', 'Üçgen'], 'Diğerleri üçgen.', { gorsel: farkli(['ucgen', 'ucgen', 'kare', 'ucgen', 'ucgen'], 2) });
  e('zd-t34', '8, 7, 6, 5, ? örüntüsünde eksik sayı hangisidir?', '4', ['3', '4', '5', '6'], 'Birer azalıyor.', { gorsel: oruntu(sayiOruntu(8, -1), '-1') });
  e('zd-t35', 'Resimde kaç kelebek vardır?', '5', ['4', '5', '6', '7'], 'Her birini say.', { gorsel: sayim('kelebek-5', 5) });
  e('zd-t36', '7, 14, 21, 28, ? örüntüsünde son sayı hangisidir?', '35', ['28', '32', '35', '42'], 'Yedişer artıyor.', { gorsel: oruntu(sayiOruntu(7, 7), '+7') });
  e('zd-t37', 'Mor, turuncu, mor, turuncu, ? örüntüsünde eksik renk hangisidir?', 'Mor', ['Turuncu', 'Mor', 'Mavi', 'Sarı'], 'İki renk dönüşümlü.', { gorsel: oruntu(renkOruntu(['mor', 'turuncu']), '→') });
  e('zd-t38', 'Aşağıdaki dizide farklı olan sayı hangisidir?', '14', ['10', '15', '14', '20'], '14, 5\'in katı değil.', { gorsel: farkli(['10', '15', '14', '20', '25'], 2) });
  e('zd-t39', '2, 5, 8, 11, ? örüntüsünde son sayı hangisidir?', '14', ['11', '13', '14', '17'], 'Üçer artıyor.', { gorsel: oruntu(sayiOruntu(2, 3), '+3') });
  e('zd-t40', '30, 27, 24, 21, ? örüntüsünde eksik sayı hangisidir?', '18', ['15', '18', '21', '24'], 'Üçer azalıyor.', { gorsel: oruntu(sayiOruntu(30, -3), '-3') });
  e('zd-t41', 'Kare, üçgen, kare, üçgen, ? örüntüsünde eksik şekil hangisidir?', 'Kare', ['Üçgen', 'Kare', 'Daire', 'Yıldız'], 'İkili tekrar.', { gorsel: oruntu(sekilOruntu(['kare', 'ucgen']), '→') });
  e('zd-t42', 'Daire, daire, kare, daire, daire, ? örüntüsünde eksik şekil hangisidir?', 'Kare', ['Daire', 'Kare', 'Üçgen', 'Yıldız'], 'Kare her üç şekilde bir.', { gorsel: oruntu([{ tip: 'sekil', deger: 'daire' }, { tip: 'sekil', deger: 'daire' }, { tip: 'sekil', deger: 'kare' }, { tip: 'sekil', deger: 'daire' }, { tip: 'soru' }], '→') });
  e('zd-t43', 'Kırmızı, kırmızı, mavi, kırmızı, kırmızı, ? örüntüsünde eksik renk hangisidir?', 'Mavi', ['Kırmızı', 'Mavi', 'Sarı', 'Yeşil'], 'Mavi her üç renkte bir.', { gorsel: oruntu([{ tip: 'renk', deger: 'kirmizi' }, { tip: 'renk', deger: 'kirmizi' }, { tip: 'renk', deger: 'mavi' }, { tip: 'renk', deger: 'kirmizi' }, { tip: 'soru' }], '→') });
  e('zd-t44', '1, 2, 3, 4, ? örüntüsünde son sayı hangisidir?', '5', ['4', '5', '6', '7'], 'Birer artıyor.', { gorsel: oruntu(sayiOruntu(1, 1), '+1') });
  e('zd-t45', 'Sadece kırmızı topları sayınca kaç tane bulunur?', '4', ['3', '4', '5', '6'], 'Diğer renkleri sayma.', { gorsel: dikkat('kirmizi-top-say') });
  e('zd-t46', '25, 20, 15, 10, ? örüntüsünde eksik sayı hangisidir?', '5', ['0', '5', '10', '15'], 'Beşer azalıyor.', { gorsel: oruntu(sayiOruntu(25, -5), '-5') });
  e('zd-t47', '9, 8, 7, 6, ? örüntüsünde eksik sayı hangisidir?', '5', ['4', '5', '6', '7'], 'Birer azalıyor.', { gorsel: oruntu(sayiOruntu(9, -1), '-1') });
  e('zd-t48', 'Üçgen, üçgen, daire, üçgen, üçgen, ? örüntüsünde eksik şekil hangisidir?', 'Daire', ['Üçgen', 'Daire', 'Kare', 'Yıldız'], 'Daire her üç şekilde bir.', { gorsel: oruntu([{ tip: 'sekil', deger: 'ucgen' }, { tip: 'sekil', deger: 'ucgen' }, { tip: 'sekil', deger: 'daire' }, { tip: 'sekil', deger: 'ucgen' }, { tip: 'soru' }], '→') });
  e('zd-t49', 'Hangi seçenek örüntüyü doğru tamamlar? 2, 4, 6, ?', '8', ['6', '7', '8', '10'], 'İkişer artıyor.', { gorsel: oruntu(sayiOruntu(2, 2, 4), '+2') });
  e('zd-t50', 'Dikkat sorusu: Eksik parçayı bulmak için neye bakmalıyız?', 'Desenin tekrarına', ['Rastgele rengine', 'Desenin tekrarına', 'En büyük şekle', 'En küçük sayıya'], 'Örüntü kuralı.', { gorsel: dikkat('esik-parca') });
  return s;
}

export function zekaVeDikkat(karistir) {
  return {
    id: 'zeka-ve-dikkat',
    baslik: 'Zekâ ve Dikkat',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elanaz Zekâ ve Dikkat köşesinde örüntüleri keşfetti. Sayılar, şekiller ve renkler bir kurala göre sıralanır. Kuralı bulunca eksik parçayı tamamlamak kolaylaşır!',
          gorsel: anl('oruntu-anlatim'),
        },
        {
          metin:
            'Bazen dizide farklı olan tek bir parça vardır. Dikkatle bakınca Elanaz farklı şekli, rengi veya sayıyı hemen buldu. Sabırlı ve dikkatli olmak çok önemli!',
          gorsel: anl('farkli-anlatim'),
        },
        {
          metin:
            'Sayma sorularında her nesneyi tek tek saymak gerekir. Bazen sadece belirli renkteki nesneleri saymalıyız. Gözlerimizi iyi kullanalım!',
          gorsel: anl('sayim-anlatim'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
