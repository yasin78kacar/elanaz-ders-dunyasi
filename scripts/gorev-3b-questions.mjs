/** GOREV-3B — Onluk-Birlik + Sayıları Okuma-Yazma havuz takviyesi (100 soru). Metinler patron onaylıdır. */

const KAZANIM_ONLUK = 'MAT.2.1.2';
const KAZANIM_SAYI = 'MAT.2.1.1';

function cevapTipi(cevap) {
  const s = String(cevap);
  if (Number.isNaN(Number(s)) || s.includes(' ') || /[a-zA-ZğüşıöçĞÜŞİÖÇ]/.test(s)) return 'metin';
  return 'sayi';
}

export function gorev3bOnlukAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM_ONLUK,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipi(cevap),
      ...extra,
    });

  ekle('3b-o-a1', '3 onluk 5 birlik hangi sayıdır?', '35', '30 + 5');
  ekle('3b-o-a2', '47 sayısında kaç onluk vardır?', '4', 'Onluk basamağına bak.');
  ekle('3b-o-a3', '47 sayısında kaç birlik vardır?', '7', 'Birlik basamağına bak.');
  ekle('3b-o-a4', '6 onluk hangi sayıdır?', '60', '6 onluk = 60');
  ekle('3b-o-a5', "Elanaz'ın 2 onluk 8 birlik boncuğu var. Kaç boncuğu vardır?", '28', '20 + 8');
  ekle('3b-o-a6', '90 sayısı kaç onluktan oluşur?', '9', '9 onluk 0 birlik.');
  ekle('3b-o-a7', '5 onluk 0 birlik hangi sayıdır?', '50', 'Sadece onluk var.');
  ekle('3b-o-a8', '73 sayısında kaç onluk vardır?', '7', 'Soldaki rakam onluk.');
  ekle('3b-o-a9', '1 onluk 1 birlik hangi sayıdır?', '11', '10 + 1');
  ekle(
    '3b-o-a10',
    'Elanaz çıkartmalarını onarlı paketledi: 4 paket ve 6 tek çıkartma. Kaç çıkartması var?',
    '46',
    "10'ar 4 paket + 6",
  );
  ekle('3b-o-a11', '80 sayısında kaç birlik vardır?', '0', '0 birlik.');
  ekle('3b-o-a12', '9 onluk 9 birlik hangi sayıdır?', '99', '90 + 9');
  ekle('3b-o-a13', '25 sayısı kaç onluk kaç birliktir?', '2 onluk 5 birlik', '2 onluk 5 birlik');
  ekle('3b-o-a14', 'Bir torbada 10 misket var. 3 torba ve 4 tek misket kaç misket eder?', '34', '30 + 4');
  ekle('3b-o-a15', '7 onluk 2 birlik hangi sayıdır?', '72', '70 + 2');
  ekle('3b-o-a16', '56 sayısında onluk sayısı mı büyüktür, birlik sayısı mı?', 'Birlik', '6 > 5');
  ekle('3b-o-a17', '100 sayısı kaç onluktan oluşur?', '10', '10 onluk = 100');
  ekle(
    '3b-o-a18',
    "Elanaz'ın kalemleri 10'arlı 2 kutuda, masada da 9 kalem var. Toplam kaç kalem?",
    '29',
    '20 + 9',
  );
  ekle('3b-o-a19', '4 onluk 4 birlik hangi sayıdır?', '44', '40 + 4');
  ekle('3b-o-a20', '61 sayısında kaç onluk vardır?', '6', 'Soldaki rakam.');
  ekle(
    '3b-o-a21',
    '38 sayısında 8 onluk vardır. Bu söz doğru mu, yanlış mı?',
    'Yanlış',
    'Önce gelen rakam onlukları gösterir',
    { sasirtma: true },
  );
  ekle('3b-o-a22', '2 onluk kaç birliğe eşittir?', '20', '1 onluk = 10 birlik');
  ekle('3b-o-a23', '8 onluk 3 birlik hangi sayıdır?', '83', '80 + 3');
  ekle('3b-o-a24', '19 sayısı kaç onluk kaç birliktir?', '1 onluk 9 birlik', '1 onluk 9 birlik');
  ekle(
    '3b-o-a25',
    'Elanaz 5 onluk topladı, Zeynep 50 birlik topladı. Kim daha çok topladı?',
    'İkisi de eşit topladı',
    '5 onluk kaç eder? 50 birlik kaç eder?',
    { sasirtma: true },
  );

  return sorular;
}

export function gorev3bOnlukTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM_ONLUK,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('3b-o-t1', '3 onluk 7 birlik hangi sayıdır?', '37', ['73', '37', '30', '10'], '30 + 7');
  ekle('3b-o-t2', '52 sayısında kaç onluk vardır?', '5', ['5', '2', '52', '7'], 'Soldaki rakam.');
  ekle('3b-o-t3', 'Hangisi 4 onluk 9 birliktir?', '49', ['94', '49', '40', '9'], '40 + 9');
  ekle('3b-o-t4', '60 sayısında kaç birlik vardır?', '0', ['6', '60', '0', '10'], '0 birlik.');
  ekle(
    '3b-o-t5',
    "Elanaz'ın 10'arlı 3 paket ve 5 tek balonu var. Kaç balonu vardır?",
    '35',
    ['8', '30', '35', '53'],
    '30 + 5',
  );
  ekle('3b-o-t6', '8 onluk hangi sayıdır?', '80', ['8', '18', '80', '88'], '8 onluk = 80');
  ekle('3b-o-t7', '26 sayısı için hangisi doğrudur?', '2 onluk 6 birlik', ['6 onluk 2 birlik', '2 onluk 6 birlik', '26 onluk', '2 onluk 2 birlik'], '20 + 6');
  ekle(
    '3b-o-t8',
    'Hangisinde onluk sayısı YANLIŞ verilmiştir?',
    '38 → 8 onluk',
    ['45 → 4 onluk', '72 → 7 onluk', '38 → 8 onluk', '91 → 9 onluk'],
    'Önce gelen rakam onlukları gösterir, tek tek kontrol et',
    { sasirtma: true },
  );
  ekle('3b-o-t9', '1 onluk kaç birliğe eşittir?', '10', ['1', '10', '100', '11'], '1 onluk = 10 birlik');
  ekle('3b-o-t10', '99 sayısı için hangisi doğrudur?', '9 onluk 9 birlik', ['9 onluk 9 birlik', '99 onluk', '9 onluk 0 birlik', '0 onluk 9 birlik'], '90 + 9');
  ekle('3b-o-t11', 'Hangi sayıda 5 birlik vardır?', '35', ['50', '35', '53', '5 onluk'], 'Birlik sağdaki rakamdır.');
  ekle('3b-o-t12', "10'arlı 7 kutu yumurta kaç yumurtadır?", '70', ['17', '7', '70', '77'], "10'ar 7 kez");
  ekle('3b-o-t13', '84 sayısında kaç onluk vardır?', '8', ['8', '4', '84', '12'], 'Soldaki rakam.');
  ekle('3b-o-t14', 'Hangisi en büyüktür?', '1 onluk', ['9 birlik', '1 onluk', '8 birlik', '5 birlik'], '1 onluk = 10 birlik');
  ekle(
    '3b-o-t15',
    "Elanaz'ın 3 onluk 2 birlik şekeri, Kerem'in 2 onluk 3 birlik şekeri var. Hangisi doğrudur?",
    "Elanaz'ınki daha çok",
    ["Kerem'inki daha çok", "Elanaz'ınki daha çok", 'İkisi eşit', 'Bilinemez'],
    "Sayıları yaz — 32 ile 23'ü karşılaştır",
    { sasirtma: true },
  );
  ekle('3b-o-t16', '40 + 7 işleminin sonucu kaç onluk kaç birliktir?', '4 onluk 7 birlik', ['4 onluk 7 birlik', '7 onluk 4 birlik', '47 onluk', '4 onluk 0 birlik'], '47 = 4 onluk 7 birlik');
  ekle('3b-o-t17', 'Hangisi 6 onluk 1 birliktir?', '61', ['16', '61', '60', '6'], '60 + 1');
  ekle('3b-o-t18', '75 sayısının onluğu ile birliği arasındaki fark kaçtır?', '2', ['2', '7', '5', '12'], '7 − 5 = 2');
  ekle('3b-o-t19', '2 onluk 0 birlik hangi sayıdır?', '20', ['2', '02', '20', '200'], '20');
  ekle('3b-o-t20', 'Hangi sayının onluğu ile birliği eşittir?', '55', ['12', '21', '55', '50'], '5 = 5');
  ekle(
    '3b-o-t21',
    "Hangisi 70'e EŞİT DEĞİLDİR?",
    '7 birlik',
    ['7 onluk', '70 birlik', '6 onluk 10 birlik', '7 birlik'],
    '7 birlik sadece 7 eder — diğerlerini tek tek hesapla',
    { sasirtma: true },
  );
  ekle('3b-o-t22', '13 sayısında kaç onluk vardır?', '1', ['1', '3', '13', '0'], 'Soldaki rakam.');
  ekle('3b-o-t23', "10'arlı 5 demet çiçek ve 8 tek çiçek toplam kaç çiçektir?", '58', ['13', '58', '85', '508'], '50 + 8');
  ekle('3b-o-t24', '67 sayısı için hangisi YANLIŞTIR?', '7 onluğu vardır', ['6 onluğu vardır', '7 birliği vardır', '60 + 7 eder', '7 onluğu vardır'], '6 onluk 7 birlik.');
  ekle('3b-o-t25', 'Hangisi 100 eder?', '10 onluk', ['10 onluk', '10 birlik', '1 onluk', '100 onluk'], '10 onluk = 100');

  return sorular;
}

export function gorev3bSayiAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM_SAYI,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipi(cevap),
      ...extra,
    });

  ekle('3b-s-a1', '47 sayısının okunuşunu yaz.', 'kırk yedi', '4 onluk 7 birlik');
  ekle('3b-s-a2', '"altmış üç" sayısını rakamla yaz.', '63', '6 onluk 3 birlik');
  ekle('3b-s-a3', '80 sayısının okunuşunu yaz.', 'seksen', '8 onluk');
  ekle('3b-s-a4', '"yirmi dokuz" sayısını rakamla yaz.', '29', '2 onluk 9 birlik');
  ekle('3b-s-a5', "35'ten bir sonra gelen sayıyı yaz.", '36', 'Bir artır.');
  ekle('3b-s-a6', "50'den bir önce gelen sayıyı yaz.", '49', 'Bir eksilt.');
  ekle('3b-s-a7', '"doksan bir" sayısını rakamla yaz.', '91', '9 onluk 1 birlik');
  ekle('3b-s-a8', '16 sayısının okunuşunu yaz.', 'on altı', '1 onluk 6 birlik');
  ekle('3b-s-a9', 'Elanaz\'ın okul numarası "elli dört". Rakamla yaz.', '54', '5 onluk 4 birlik');
  ekle('3b-s-a10', '78 sayısının okunuşunu yaz.', 'yetmiş sekiz', '7 onluk 8 birlik');
  ekle('3b-s-a11', '"kırk" sayısını rakamla yaz.', '40', '4 onluk');
  ekle('3b-s-a12', "99'dan bir sonra gelen sayıyı yaz.", '100', 'Bir artır.');
  ekle('3b-s-a13', '70 ile 72 arasındaki sayıyı yaz.', '71', 'Ortadaki sayı');
  ekle('3b-s-a14', '"otuz beş" sayısını rakamla yaz.', '35', '3 onluk 5 birlik');
  ekle('3b-s-a15', '22 sayısının okunuşunu yaz.', 'yirmi iki', '2 onluk 2 birlik');
  ekle('3b-s-a16', "60'tan bir önce gelen sayıyı yaz.", '59', 'Bir eksilt.');
  ekle('3b-s-a17', '"seksen sekiz" sayısını rakamla yaz.', '88', '8 onluk 8 birlik');
  ekle('3b-s-a18', '13 sayısının okunuşunu yaz.', 'on üç', '1 onluk 3 birlik');
  ekle('3b-s-a19', 'Elanaz kitabın "altmış yedinci" sayfasını açtı. Sayfa numarasını rakamla yaz.', '67', '6 onluk 7 birlik');
  ekle('3b-s-a20', '89 ile 91 arasındaki sayıyı yaz.', '90', 'Ortadaki sayı');
  ekle(
    '3b-s-a21',
    'Zeynep "yetmiş beş" sayısını 57 olarak yazdı. Doğru mu yazdı?',
    'Hayır, doğrusu 75',
    'Önce söylenen "yetmiş", onlukları gösterir',
    { sasirtma: true },
  );
  ekle('3b-s-a22', '"yüz" sayısını rakamla yaz.', '100', '100');
  ekle('3b-s-a23', '41 sayısının okunuşunu yaz.', 'kırk bir', '4 onluk 1 birlik');
  ekle('3b-s-a24', "19'dan bir sonra gelen sayıyı yaz.", '20', 'Bir artır.');
  ekle(
    '3b-s-a25',
    'Bir sayının okunuşu "elli". Bu sayıda birlik var mıdır?',
    "Hayır, birliği 0'dır (50)",
    "50'nin son rakamına bak",
    { sasirtma: true },
  );

  return sorular;
}

export function gorev3bSayiTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM_SAYI,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('3b-s-t1', '56 sayısının okunuşu hangisidir?', 'elli altı', ['altmış beş', 'elli altı', 'beş altı', 'elli beş'], '5 onluk 6 birlik');
  ekle('3b-s-t2', '"otuz iki" sayısı hangisidir?', '32', ['23', '32', '302', '3'], '3 onluk 2 birlik');
  ekle('3b-s-t3', 'Hangisinin okunuşu "doksan dört"tür?', '94', ['49', '94', '904', '44'], '9 onluk 4 birlik');
  ekle('3b-s-t4', '70 sayısının okunuşu hangisidir?', 'yetmiş', ['yedi', 'on yedi', 'yetmiş', 'yetmiş yedi'], '7 onluk');
  ekle('3b-s-t5', "64'ten bir sonra gelen sayı hangisidir?", '65', ['63', '65', '74', '66'], 'Bir artır.');
  ekle('3b-s-t6', "30'dan bir önce gelen sayı hangisidir?", '29', ['31', '29', '39', '20'], 'Bir eksilt.');
  ekle('3b-s-t7', '"on sekiz" sayısı hangisidir?', '18', ['81', '18', '108', '8'], '1 onluk 8 birlik');
  ekle(
    '3b-s-t8',
    'Hangisi YANLIŞ yazılmıştır?',
    '45 → elli dört',
    ['25 → yirmi beş', '52 → elli iki', '45 → elli dört', '90 → doksan'],
    'Her sayıyı kendin oku, eşleşmeyeni bul',
    { sasirtma: true },
  );
  ekle('3b-s-t9', '79 ile 81 arasındaki sayı hangisidir?', '80', ['78', '80', '82', '79'], 'Ortadaki sayı');
  ekle('3b-s-t10', 'Hangisinin okunuşu tek kelimedir?', '60', ['21', '60', '45', '13'], '6 onluk = altmış');
  ekle('3b-s-t11', '"kırk altı" sayısı hangisidir?', '46', ['64', '46', '406', '44'], '4 onluk 6 birlik');
  ekle('3b-s-t12', '100 sayısının okunuşu hangisidir?', 'yüz', ['on', 'bin', 'yüz', 'doksan dokuz'], '100 = yüz');
  ekle('3b-s-t13', 'Elanaz\'ın sırasının numarası "yirmi yedi". Hangisidir?', '27', ['72', '27', '207', '17'], '2 onluk 7 birlik');
  ekle('3b-s-t14', '85 sayısının okunuşu hangisidir?', 'seksen beş', ['seksen beş', 'elli sekiz', 'seksen', 'beş sekiz'], '8 onluk 5 birlik');
  ekle(
    '3b-s-t15',
    '"altmış" ile "on altı" sayıları için hangisi doğrudur?',
    "altmış 60'tır, on altı 16'dır",
    ['İkisi de aynı sayıdır', "altmış 60'tır, on altı 16'dır", "altmış 16'dır", 'on altı 60\'tır'],
    'İkisini de rakamla yaz, karşılaştır',
    { sasirtma: true },
  );
  ekle('3b-s-t16', "49'dan bir sonra gelen sayı hangisidir?", '50', ['48', '50', '59', '40'], 'Bir artır.');
  ekle('3b-s-t17', 'Hangisi "yetmiş üç"tür?', '73', ['37', '73', '703', '33'], '7 onluk 3 birlik');
  ekle('3b-s-t18', '11 sayısının okunuşu hangisidir?', 'on bir', ['bir bir', 'on bir', 'on bir bir', 'birli'], '1 onluk 1 birlik');
  ekle('3b-s-t19', "Hangisi 90'dan bir önce gelir?", '89', ['91', '89', '80', '99'], 'Bir eksilt.');
  ekle('3b-s-t20', '"elli dokuz" sayısı hangisidir?', '59', ['95', '59', '509', '99'], '5 onluk 9 birlik');
  ekle(
    '3b-s-t21',
    'Hangi sayının okunuşunda "beş" kelimesi GEÇMEZ?',
    '53',
    ['35', '53', '65', '5'],
    "53'ü oku: elli üç — beş var mı?",
    { sasirtma: true },
  );
  ekle('3b-s-t22', '38 sayısının okunuşu hangisidir?', 'otuz sekiz', ['seksen üç', 'otuz sekiz', 'üç sekiz', 'otuz'], '3 onluk 8 birlik');
  ekle('3b-s-t23', '96 ile 98 arasındaki sayı hangisidir?', '97', ['95', '97', '99', '94'], 'Ortadaki sayı');
  ekle('3b-s-t24', 'Hangisi rakamla YANLIŞ eşleşmiştir?', 'altmış iki → 26', ['on dört → 14', 'kırk bir → 41', 'altmış iki → 26', 'otuz → 30'], '62 = altmış iki');
  ekle('3b-s-t25', "20'den bir önce gelen sayının okunuşu hangisidir?", 'on dokuz', ['yirmi bir', 'on dokuz', 'on sekiz', 'yirmi'], '19 = on dokuz');

  return sorular;
}
