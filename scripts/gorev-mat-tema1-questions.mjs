/** Matematik Tema 1 — Sayılar ve Sayma (1-20, 100 görselli soru). */

const KAZANIM = 'MAT.2.2.1';

const NESNELER = ['elma', 'top', 'yildiz', 'balon', 'cicek', 'kelebek', 'kalem', 'cilek'];
const RENKLER = ['kirmizi', 'mavi', 'sari', 'yesil', 'turuncu', 'mor', 'pembe'];

const BIRLER = ['', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz', 'on'];

function sayiYazi(n) {
  if (n <= 10) return BIRLER[n];
  if (n < 20) return `on ${BIRLER[n - 10]}`;
  return 'yirmi';
}

function say(adet, nesne = 'elma', renk1 = 'kirmizi') {
  return { tur: 'islem', mod: 'sayma-grup', a: adet, nesne, renk1 };
}

function ikiGrup(a, b, nesne = 'top', renk1 = 'kirmizi', renk2 = 'mavi') {
  return { tur: 'islem', mod: 'karsilastirma-grup', a, b, nesne, renk1, renk2 };
}

function sd(baslangic, adimSayisi, vurgulananlar = []) {
  return { tur: 'sayi-seridi', baslangic, adim: 1, adimSayisi, vurgulananlar };
}

function anl(sahne) {
  return { tur: 'islem', mod: 'anlatim', sahne };
}

function cevapTipi(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function alistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipi(cevap),
      ...extra,
    });

  const sayimlar = [
    [3, 'elma', 'kirmizi'],
    [5, 'top', 'mavi'],
    [7, 'yildiz', 'sari'],
    [4, 'balon', 'yesil'],
    [6, 'cicek', 'pembe'],
    [8, 'kelebek', 'mor'],
    [2, 'kalem', 'turuncu'],
    [9, 'cilek', 'kirmizi'],
    [1, 'elma', 'yesil'],
    [10, 'top', 'mavi'],
    [11, 'yildiz', 'sari'],
    [12, 'balon', 'turuncu'],
    [13, 'cicek', 'kirmizi'],
    [14, 'kelebek', 'mavi'],
    [15, 'kalem', 'yesil'],
    [16, 'cilek', 'mor'],
    [17, 'elma', 'pembe'],
    [18, 'top', 'kirmizi'],
    [19, 'yildiz', 'mavi'],
    [20, 'balon', 'sari'],
  ];

  sayimlar.forEach(([n, nesne, renk], i) => {
    ekle(`s1-a${i + 1}`, `Resimde kaç ${nesne} var?`, n, 'Her birini tek tek say.', { gorsel: say(n, nesne, renk) });
  });

  const yazilar = [
    [7, 'yedi'],
    [12, 'on iki'],
    [15, 'on beş'],
    [3, 'üç'],
    [18, 'on sekiz'],
    [20, 'yirmi'],
    [9, 'dokuz'],
    [14, 'on dört'],
  ];
  yazilar.forEach(([n, yazi], i) => {
    ekle(`s1-a${21 + i}`, `"${yazi}" sayısını rakamla yaz.`, n, 'Sayının rakam karşılığını düşün.', {
      gorsel: say(n, NESNELER[i % NESNELER.length], RENKLER[i % RENKLER.length]),
    });
  });

  ekle('s1-a29', '5 sayısından sonra hangi sayı gelir?', '6', '5\'e 1 ekle.', { gorsel: sd(1, 10, [5, 6]) });
  ekle('s1-a30', '9 sayısından önce hangi sayı vardır?', '8', '9\'dan 1 çıkar.', { gorsel: sd(5, 8, [8, 9]) });
  ekle('s1-a31', '12 sayısından sonra hangi sayı gelir?', '13', '12\'ye 1 ekle.', { gorsel: sd(10, 8, [12, 13]) });
  ekle('s1-a32', '17 sayısından önce hangi sayı vardır?', '16', '17\'den 1 çıkar.', { gorsel: sd(13, 8, [16, 17]) });
  ekle('s1-a33', '1\'den başlayarak sayarken 4\'ten sonra hangi sayı gelir?', '5', 'Sırayla say.', { gorsel: sd(1, 8, [4, 5]) });
  ekle('s1-a34', '19 sayısından sonra hangi sayı gelir?', '20', '19\'a 1 ekle.', { gorsel: sd(15, 8, [19, 20]) });
  ekle('s1-a35', '11 sayısından önce hangi sayı vardır?', '10', '11\'den 1 çıkar.', { gorsel: sd(8, 6, [10, 11]) });

  ekle('s1-a36', 'Soldaki grupta 4, sağdaki grupta 7 top var. Hangi grupta daha çok top vardır?', '7', 'Sayıları karşılaştır.', {
    gorsel: ikiGrup(4, 7, 'top', 'kirmizi', 'mavi'),
    cevapTipi: 'sayi',
  });
  ekle('s1-a37', 'Soldaki grupta 9, sağdaki grupta 6 elma var. Hangi grupta daha az elma vardır?', '6', 'Küçük olanı bul.', {
    gorsel: ikiGrup(9, 6, 'elma', 'yesil', 'kirmizi'),
    cevapTipi: 'sayi',
  });
  ekle('s1-a38', '8 ile 12 sayılarından hangisi daha büyüktür?', '12', 'Sayı doğrusunda sağdaki daha büyüktür.', {
    gorsel: sd(5, 10, [8, 12]),
    cevapTipi: 'sayi',
  });
  ekle('s1-a39', '3 ile 3 sayıları eşit midir? "evet" veya "hayır" yaz.', 'evet', 'İki sayı aynı mı?', {
    gorsel: ikiGrup(3, 3, 'yildiz', 'sari', 'sari'),
    cevapTipi: 'metin',
  });
  ekle('s1-a40', '15 sayısı 10\'dan büyük müdür? "evet" veya "hayır" yaz.', 'evet', '15, 10\'dan sonra gelir.', {
    gorsel: sd(8, 10, [10, 15]),
    cevapTipi: 'metin',
  });
  ekle('s1-a41', 'Sayı doğrusunda 6 ile 14 arasında kaç sayı vardır? (6 ve 14 dahil değil)', '7', '7, 8, 9, 10, 11, 12, 13', {
    gorsel: sd(5, 12, [6, 14]),
    cevapTipi: 'sayi',
  });
  ekle('s1-a42', 'Elanaz 10 tane çiçek saydı, Kerem 10 tane çiçek saydı. Toplam kaç çiçek?', '20', '10 + 10', {
    gorsel: ikiGrup(10, 10, 'cicek', 'pembe', 'mor'),
  });

  ekle('s1-a43', 'Sayı doğrusunda mavi ile işaretli sayı kaçtır?', '7', 'İşaretli noktayı oku.', { gorsel: sd(1, 10, [7]) });
  ekle('s1-a44', 'Sayı doğrusunda vurgulanan sayı kaçtır?', '15', '10 ile 20 arasına bak.', { gorsel: sd(11, 10, [15]) });
  ekle('s1-a45', '1\'den 20\'ye kadar sayarken 10. sayı hangisidir?', '10', 'Parmaklarınla say.', { gorsel: sd(1, 12, [10]) });
  ekle('s1-a46', 'Elanaz\'ın 0 elması var. Kaç elma vardır?', '0', 'Hiç yok demektir.', { gorsel: say(0, 'elma', 'kirmizi') });
  ekle('s1-a47', '"on dokuz" sayısını rakamla yaz.', '19', 'On dokuz = 1 ve 9', { gorsel: say(19, 'kelebek', 'mor') });

  ekle(
    's1-a48',
    '🎭 Resimde 8 elma var. "6 elma" diyen arkadaş doğru mu? "evet" veya "hayır" yaz.',
    'hayır',
    'Önce say, sonra karşılaştır!',
    { gorsel: say(8, 'elma', 'kirmizi'), cevapTipi: 'metin', sasirtma: true },
  );
  ekle(
    's1-a49',
    '🎭 20 sayısından sonra 21 gelir mi? "evet" veya "hayır" yaz.',
    'hayır',
    '1\'den 20\'ye sayıyoruz — 20 en son!',
    { gorsel: sd(15, 8, [20]), cevapTipi: 'metin', sasirtma: true },
  );
  ekle(
    's1-a50',
    '🎭 5 top ile 8 top sayıldı. "5 daha büyük" denirse doğru mu? "evet" veya "hayır" yaz.',
    'hayır',
    '8, 5\'ten büyüktür!',
    { gorsel: ikiGrup(5, 8, 'top', 'kirmizi', 'mavi'), cevapTipi: 'metin', sasirtma: true },
  );

  return sorular;
}

function test(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('s1-t1', 'Resimde kaç elma vardır?', '6', ['5', '6', '7', '8'], 'Her birini say.', { gorsel: say(6, 'elma', 'kirmizi') });
  ekle('s1-t2', 'Resimde kaç top vardır?', '9', ['7', '8', '9', '10'], 'Tek tek say.', { gorsel: say(9, 'top', 'mavi') });
  ekle('s1-t3', 'Resimde kaç yıldız vardır?', '4', ['3', '4', '5', '6'], 'Dikkatle say.', { gorsel: say(4, 'yildiz', 'sari') });
  ekle('s1-t4', 'Resimde kaç balon vardır?', '11', ['10', '11', '12', '13'], 'Her birini say.', { gorsel: say(11, 'balon', 'yesil') });
  ekle('s1-t5', 'Resimde kaç çiçek vardır?', '13', ['11', '12', '13', '14'], 'Tek tek say.', { gorsel: say(13, 'cicek', 'pembe') });
  ekle('s1-t6', 'Resimde kaç kelebek vardır?', '15', ['13', '14', '15', '16'], 'Dikkatle say.', { gorsel: say(15, 'kelebek', 'mor') });
  ekle('s1-t7', 'Resimde kaç kalem vardır?', '17', ['15', '16', '17', '18'], 'Her birini say.', { gorsel: say(17, 'kalem', 'turuncu') });
  ekle('s1-t8', 'Resimde kaç çilek vardır?', '18', ['16', '17', '18', '19'], 'Tek tek say.', { gorsel: say(18, 'cilek', 'kirmizi') });
  ekle('s1-t9', 'Resimde kaç elma vardır?', '20', ['18', '19', '20', '21'], 'Hepsini say.', { gorsel: say(20, 'elma', 'yesil') });
  ekle('s1-t10', 'Resimde kaç top vardır?', '2', ['1', '2', '3', '4'], 'Az sayıda — dikkatle say.', { gorsel: say(2, 'top', 'mavi') });
  ekle('s1-t11', 'Resimde kaç yıldız vardır?', '14', ['12', '13', '14', '15'], 'Her birini say.', { gorsel: say(14, 'yildiz', 'sari') });
  ekle('s1-t12', 'Resimde kaç balon vardır?', '16', ['14', '15', '16', '17'], 'Tek tek say.', { gorsel: say(16, 'balon', 'turuncu') });
  ekle('s1-t13', 'Resimde kaç çiçek vardır?', '12', ['10', '11', '12', '13'], 'Dikkatle say.', { gorsel: say(12, 'cicek', 'kirmizi') });
  ekle('s1-t14', 'Resimde kaç kelebek vardır?', '19', ['17', '18', '19', '20'], 'Her birini say.', { gorsel: say(19, 'kelebek', 'mavi') });
  ekle('s1-t15', 'Resimde hiç nesne yoksa kaç tane vardır?', '0', ['0', '1', '2', '10'], 'Hiç yok = 0', { gorsel: say(0, 'top', 'kirmizi') });

  ekle('s1-t16', '"yedi" sayısının rakam karşılığı hangisidir?', '7', ['5', '6', '7', '8'], '', { gorsel: say(7, 'elma', 'yesil') });
  ekle('s1-t17', '"on iki" sayısının rakam karşılığı hangisidir?', '12', ['10', '11', '12', '13'], '', { gorsel: say(12, 'balon', 'mavi') });
  ekle('s1-t18', '"on beş" sayısının rakam karşılığı hangisidir?', '15', ['13', '14', '15', '16'], '', { gorsel: say(15, 'cicek', 'pembe') });
  ekle('s1-t19', '"yirmi" sayısının rakam karşılığı hangisidir?', '20', ['18', '19', '20', '21'], '', { gorsel: say(20, 'yildiz', 'sari') });
  ekle('s1-t20', '8 sayısı nasıl okunur?', 'sekiz', ['altı', 'yedi', 'sekiz', 'dokuz'], '', { gorsel: say(8, 'top', 'turuncu') });
  ekle('s1-t21', '11 sayısı nasıl okunur?', 'on bir', ['on', 'on bir', 'on iki', 'yirmi bir'], '', { gorsel: say(11, 'kalem', 'mor') });
  ekle('s1-t22', '16 sayısı nasıl okunur?', 'on altı', ['on dört', 'on beş', 'on altı', 'on yedi'], '', { gorsel: say(16, 'cilek', 'kirmizi') });
  ekle('s1-t23', '3 sayısının yazılışı hangisidir?', 'üç', ['iki', 'üç', 'dört', 'beş'], '', { gorsel: say(3, 'kelebek', 'yesil') });
  ekle('s1-t24', '10 sayısının yazılışı hangisidir?', 'on', ['dokuz', 'on', 'on bir', 'yirmi'], '', { gorsel: say(10, 'elma', 'kirmizi') });
  ekle('s1-t25', '19 sayısının yazılışı hangisidir?', 'on dokuz', ['on sekiz', 'on dokuz', 'yirmi', 'on yedi'], '', { gorsel: say(19, 'balon', 'mavi') });

  ekle('s1-t26', '7 sayısından sonra hangi sayı gelir?', '8', ['6', '7', '8', '9'], '', { gorsel: sd(4, 8, [7, 8]) });
  ekle('s1-t27', '13 sayısından önce hangi sayı vardır?', '12', ['10', '11', '12', '13'], '', { gorsel: sd(9, 8, [12, 13]) });
  ekle('s1-t28', '1, 2, 3, 4, … dizisinde 4\'ten sonra hangi sayı gelir?', '5', ['3', '4', '5', '6'], '', { gorsel: sd(1, 8, [4, 5]) });
  ekle('s1-t29', '18 sayısından sonra hangi sayı gelir?', '19', ['17', '18', '19', '20'], '', { gorsel: sd(14, 8, [18, 19]) });
  ekle('s1-t30', '10 sayısından önce hangi sayı vardır?', '9', ['7', '8', '9', '10'], '', { gorsel: sd(5, 8, [9, 10]) });
  ekle('s1-t31', '2 sayısından sonra hangi sayı gelir?', '3', ['1', '2', '3', '4'], '', { gorsel: sd(1, 6, [2, 3]) });
  ekle('s1-t32', '20 sayısından önce hangi sayı vardır?', '19', ['17', '18', '19', '20'], '', { gorsel: sd(15, 8, [19, 20]) });
  ekle('s1-t33', '5 ile 6 arasında başka sayı var mı?', 'Hayır', ['Evet, 5.5', 'Evet, 7', 'Hayır', 'Evet, 4'], 'Tam sayılarda arada sayı yok.', {
    gorsel: sd(3, 6, [5, 6]),
  });
  ekle('s1-t34', '1\'den 20\'ye sayarken ilk sayı hangisidir?', '1', ['0', '1', '2', '10'], '', { gorsel: sd(1, 8, [1]) });
  ekle('s1-t35', '1\'den 20\'ye sayarken son sayı hangisidir?', '20', ['18', '19', '20', '21'], '', { gorsel: sd(13, 10, [20]) });

  ekle('s1-t36', 'Hangi grupta daha çok nesne vardır?', '9', ['4', '6', '9', '5'], 'Sayıları karşılaştır.', {
    gorsel: ikiGrup(5, 9, 'top', 'kirmizi', 'mavi'),
    cevapTipi: 'sayi',
  });
  ekle('s1-t37', 'Hangi sayı daha büyüktür?', '17', ['12', '15', '17', '14'], '', { gorsel: sd(10, 10, [12, 17]) });
  ekle('s1-t38', 'Hangi sayı daha küçüktür?', '3', ['8', '3', '12', '15'], '', { gorsel: sd(1, 10, [3, 12]) });
  ekle('s1-t39', 'Soldaki grupta 7, sağdaki grupta 7 elma var. Hangisi doğrudur?', 'İkisi eşit', ['Sol daha çok', 'Sağ daha çok', 'İkisi eşit', 'Sayılamaz'], '', {
    gorsel: ikiGrup(7, 7, 'elma', 'yesil', 'kirmizi'),
  });
  ekle('s1-t40', '10 ile 20 arasında hangi sayı vardır?', '15', ['5', '8', '15', '25'], '', { gorsel: sd(10, 12, [10, 15, 20]) });
  ekle('s1-t41', 'Hangi sayı 1-20 aralığında DEĞİLDİR?', '21', ['5', '12', '20', '21'], '1 ile 20 arasına bak.', { gorsel: sd(1, 12, [20]) });
  ekle('s1-t42', 'En büyük tek basamaklı sayı hangisidir?', '9', ['8', '9', '10', '11'], '9\'dan sonra 10 gelir.', { gorsel: sd(5, 8, [9, 10]) });

  ekle('s1-t43', 'Sayı doğrusunda vurgulanan sayı kaçtır?', '6', ['4', '5', '6', '7'], '', { gorsel: sd(1, 10, [6]) });
  ekle('s1-t44', 'Sayı doğrusunda işaretli sayı kaçtır?', '14', ['12', '13', '14', '15'], '', { gorsel: sd(10, 8, [14]) });
  ekle('s1-t45', 'Sayı doğrusunda vurgulanan sayı kaçtır?', '11', ['9', '10', '11', '12'], '', { gorsel: sd(8, 8, [11]) });
  ekle('s1-t46', '1 ile 5 arasında (5 dahil) kaç sayı vardır?', '5', ['3', '4', '5', '6'], '1, 2, 3, 4, 5', { gorsel: sd(1, 8, [1, 5]) });
  ekle('s1-t47', 'Sayı doğrusunda 3 ile 8 arasında kaç sayı vardır? (3 ve 8 dahil)', '6', ['4', '5', '6', '7'], '3\'ten 8\'e say.', { gorsel: sd(1, 10, [3, 8]) });

  ekle(
    's1-t48',
    '🎭 Resimde 5 elma var. "7 elma" diyen doğru mu?',
    'Hayır',
    ['Evet', 'Hayır', 'Bazen', 'Bilinemez'],
    'Önce say, sonra karşılaştır!',
    { gorsel: say(5, 'elma', 'kirmizi'), sasirtma: true },
  );
  ekle(
    's1-t49',
    '🎭 0 sayısı "hiç yok" anlamına mı gelir?',
    'Evet',
    ['Hayır', 'Evet', 'Sadece büyük sayılar için', 'Bilinemez'],
    '0 = hiç demektir!',
    { gorsel: say(0, 'top', 'mavi'), sasirtma: true },
  );
  ekle(
    's1-t50',
    '🎭 1\'den 20\'ye sayarken 0 sayısını söyler miyiz?',
    'Hayır',
    ['Evet, ilk sayı 0', 'Hayır', 'Sadece sonda', 'Her zaman'],
    '1\'den başlarız!',
    { gorsel: sd(1, 10, [1]), sasirtma: true },
  );

  return sorular;
}

export function sayilarVeSayma(karistir) {
  return {
    id: 'sayilar-ve-sayma',
    baslik: 'Sayılar ve Sayma (1-20)',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Elanaz masadaki elmaları sayıyor: 1, 2, 3, 4, 5… Saymak, nesnelerin kaç tane olduğunu bulmaktır. 1\'den 20\'ye kadar saymayı öğrenelim!',
          gorsel: anl('s1-anlatim-1'),
        },
        {
          metin:
            'Sayı doğrusunda sayılar soldan sağa büyür. 7 sayısı 5\'ten büyük, 3\'ten de büyüktür. Bir sayıdan sonra gelen sayıya 1 ekleriz.',
          gorsel: anl('s1-anlatim-2'),
        },
        {
          metin:
            'İki gruptaki nesneleri sayarak hangisinde daha çok olduğunu bulabiliriz. Sayıları okurken "on bir", "on iki"… "yirmi" deriz.',
          gorsel: anl('s1-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
