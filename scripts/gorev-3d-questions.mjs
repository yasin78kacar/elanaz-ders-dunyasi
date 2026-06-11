/** GOREV-3D — Onluk-Birlik + Sayıları Okuma-Yazma havuz takviyesi (100 soru). Metinler patron onaylıdır. */

const KAZANIM_ONLUK = 'MAT.2.1.2';
const KAZANIM_SAYI = 'MAT.2.1.1';

function cevapTipi(cevap) {
  const s = String(cevap);
  if (Number.isNaN(Number(s)) || s.includes(' ') || /[a-zA-ZğüşıöçĞÜŞİÖÇ]/.test(s)) return 'metin';
  return 'sayi';
}

export function gorev3dOnlukAlistirma() {
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

  ekle(
    '3d-go-a1',
    'Elanaz, masanın üzerindeki boncukları onarlı gruplayınca 4 onluk ve 3 birlik elde etti. Masada kaç boncuk vardır?',
    '43',
    '40 + 3',
  );
  ekle(
    '3d-go-a2',
    'Kalem kutumda bulunan 57 kalemi onluk ve birliklerine ayırırsam kaç onluk, kaç birlik olur?',
    '5 onluk, 7 birlik',
    '5 onluk 7 birlik',
  );
  ekle(
    '3d-go-a3',
    'Bir yumurta kolisinde 2 onluk ve 0 birlik kadar yumurta vardır. Kolideki toplam yumurta sayısı kaçtır?',
    '20',
    '2 onluk = 20',
  );
  ekle(
    '3d-go-a4',
    "Elanaz'ın misket torbasında 6 onluk ve 8 birlik misket vardır. Torbada kaç misket bulunur?",
    '68',
    '60 + 8',
  );
  ekle(
    '3d-go-a5',
    '7 birlik ve 3 onluktan oluşan sayı kaçtır?',
    '37',
    'Sayıyı yazarken önce onlukları, sonra birlikleri düşünmelisin.',
    { sasirtma: true },
  );
  ekle(
    '3d-go-a6',
    'Sınıf kitaplığımızda 85 kitap var. Bu kitaplar kaç onluk ve kaç birlikten oluşur?',
    '8 onluk, 5 birlik',
    '8 onluk 5 birlik',
  );
  ekle(
    '3d-go-a7',
    'Bir ataç kutusundan 9 onluk ve 9 birlik ataç çıktı. Kutuda toplam kaç ataç vardır?',
    '99',
    '90 + 9',
  );
  ekle(
    '3d-go-a8',
    "Elanaz'ın hikâye kitabı 4 onluk ve 2 birlik sayfadan oluşuyor. Kitap kaç sayfadır?",
    '42',
    '40 + 2',
  );
  ekle(
    '3d-go-a9',
    'Bahçemizdeki ağaçlardan 63 tane elma topladık. Bu elmaları onarlı kasalara koyarsak kaç onluk ve kaç birlik elde ederiz?',
    '6 onluk, 3 birlik',
    '6 onluk 3 birlik',
  );
  ekle(
    '3d-go-a10',
    '1 onluk ve 5 birlikten oluşan boya kalemlerinin üzerine 2 birlik daha eklersek yeni sayı kaç olur?',
    '17',
    '15 + 2',
  );
  ekle(
    '3d-go-a11',
    "Elanaz'ın tokalarını saydığımızda 3 onluk ve 4 birlik çıktı. Elanaz'ın toplam kaç tokası vardır?",
    '34',
    '30 + 4',
  );
  ekle(
    '3d-go-a12',
    'Bir fırıncı sabah 72 ekmek sattı. Fırıncı kaç onluk ve kaç birlik ekmek satmıştır?',
    '7 onluk, 2 birlik',
    '7 onluk 2 birlik',
  );
  ekle(
    '3d-go-a13',
    '4 onluk ve 5 birlikten oluşan sayıdan hangi seçenekteki birlik sayısını çıkarırsak geriye sadece 4 onluk kalır?',
    '5 birlik',
    'Sadece birliklerin yok olmasını istiyoruz.',
    { sasirtma: true },
  );
  ekle(
    '3d-go-a14',
    'Bir oyuncakçıda 8 onluk ve 1 birlik kadar oyuncak araba vardır. Bu dükkanda kaç oyuncak araba bulunur?',
    '81',
    '80 + 1',
  );
  ekle(
    '3d-go-a15',
    "Elanaz'ın annesi pazardan 2 onluk ve 6 birlik kadar çilek aldı. Annem kaç çilek almıştır?",
    '26',
    '20 + 6',
  );
  ekle(
    '3d-go-a16',
    'Kumbaramdan çıkan paraları saydığımda 94 kuruş buldum. Bu para kaç onluk ve kaç birlikten oluşur?',
    '9 onluk, 4 birlik',
    '9 onluk 4 birlik',
  );
  ekle(
    '3d-go-a17',
    'Bir çiçekçi 5 onluk ve 5 birlik gülü demet yaptı. Çiçekçide toplam kaç gül vardır?',
    '55',
    '50 + 5',
  );
  ekle(
    '3d-go-a18',
    '6 onluk ve 2 birlikten oluşan sayı hangisi DEĞİLDİR: 62 mi, 26 mı?',
    '26',
    'Vurgulu olumsuz soruya dikkat et, yanlış olan sayıyı arıyoruz.',
    { sasirtma: true },
  );
  ekle(
    '3d-go-a19',
    'Elanaz panoya 1 onluk ve 9 birlik kadar yıldız yapıştırdı. Panoda kaç yıldız oldu?',
    '19',
    '10 + 9',
  );
  ekle(
    '3d-go-a20',
    'Koleksiyonumdaki 48 pulu onluk ve birliklerine ayırırsam nasıl yazarım?',
    '4 onluk, 8 birlik',
    '4 onluk 8 birlik',
  );
  ekle(
    '3d-go-a21',
    'Bir çikolata kutusunda 3 onluk ve 2 birlik çikolata vardır. Kutuda toplam kaç çikolata bulunur?',
    '32',
    '30 + 2',
  );
  ekle(
    '3d-go-a22',
    'Sayı boncuğunda 7 onluk ve 6 birlik gösteren Elanaz, toplam kaç sayısını modellemiştir?',
    '76',
    '70 + 6',
  );
  ekle(
    '3d-go-a23',
    'Sınıftaki 29 öğrenciyi onarlı sıralara oturtursak kaç onluk grup ve kaç açıkta kalan birlik öğrenci olur?',
    '2 onluk, 9 birlik',
    '2 onluk 9 birlik',
  );
  ekle('3d-go-a24', '8 onluk ve 0 birlikten oluşan sayının adı nedir?', 'Seksen', '80 = seksen', {
    alternatifCevaplar: ['seksen'],
  });
  ekle(
    '3d-go-a25',
    'Elanaz 5 onluk, arkadaşı ise 1 birlik kadar şeker getirdi. İkisinin toplam kaç şekeri oldu?',
    '51',
    '50 + 1',
  );

  return sorular;
}

export function gorev3dOnlukTest(karistir) {
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

  ekle(
    '3d-go-t1',
    'Elanaz 3 onluk ve 5 birlik boncukla kolye yaptı. Kolyede kaç boncuk vardır?',
    '35',
    ['53', '35', '30', '50'],
    '30 + 5',
  );
  ekle(
    '3d-go-t2',
    'Kalem kutusunda 42 kalemi olan Ali, bu kalemi onluk ve birliklerine nasıl ayırır?',
    '4 onluk, 2 birlik',
    ['2 onluk, 4 birlik', '4 onluk, 0 birlik', '4 onluk, 2 birlik', '2 onluk, 2 birlik'],
    '4 onluk 2 birlik',
  );
  ekle(
    '3d-go-t3',
    'Bir koli yumurtada 2 onluk ve 8 birlik yumurta vardır. Kolide toplam kaç yumurta bulunur?',
    '28',
    ['28', '82', '20', '80'],
    '20 + 8',
  );
  ekle(
    '3d-go-t4',
    '6 birlik ve 4 onluktan oluşan sayı aşağıdakilerden hangisidir?',
    '46',
    ['64', '46', '60', '40'],
    'Önce birliklerin mi yoksa onlukların mı söylendiğine çok dikkat etmelisin.',
    { sasirtma: true },
  );
  ekle(
    '3d-go-t5',
    "Elanaz'ın misket torbasında 74 misket vardır. Bu misketlerin onluk ve birlik dağılımı hangisidir?",
    '7 onluk, 4 birlik',
    ['4 onluk, 7 birlik', '7 onluk, 4 birlik', '7 onluk, 0 birlik', '4 onluk, 4 birlik'],
    '7 onluk 4 birlik',
  );
  ekle(
    '3d-go-t6',
    'Bir ataç kutusundan 5 onluk ve 0 birlik ataç çıktı. Kutudaki ataç sayısı kaçtır?',
    '50',
    ['5', '50', '55', '15'],
    '5 onluk = 50',
  );
  ekle(
    '3d-go-t7',
    'Kitaplığımızdaki kitapları sayınca 8 onluk ve 3 birlik bulduk. Kitaplıkta kaç kitap vardır?',
    '83',
    ['38', '80', '83', '30'],
    '80 + 3',
  );
  ekle(
    '3d-go-t8',
    'Bir boncuk kutusunda 1 onluk ve 7 birlik boncuk vardır. Kutuda kaç boncuk vardır?',
    '17',
    ['71', '17', '10', '70'],
    '10 + 7',
  );
  ekle(
    '3d-go-t9',
    'Bahçeden topladığımız 92 elma kaç onluk ve kaç birlikten oluşur?',
    '9 onluk, 2 birlik',
    ['2 onluk, 9 birlik', '9 onluk, 2 birlik', '9 onluk, 0 birlik', '2 onluk, 2 birlik'],
    '9 onluk 2 birlik',
  );
  ekle(
    '3d-go-t10',
    '3 onluk ve 6 birlikten oluşan boya kalemlerine 3 birlik daha eklersek hangi sayıyı buluruz?',
    '39',
    ['36', '63', '39', '93'],
    '36 + 3',
  );
  ekle(
    '3d-go-t11',
    "Elanaz 5 onluk ve 2 birlik tokaya sahiptir. Arkadaşı ise Elanaz'ın tokalarının onluk ve birliğinin yerini karıştırarak bir sayı söylüyor. Arkadaşının söylediği sayı kaçtır?",
    '25',
    ['52', '25', '50', '20'],
    'Çocukların sıkça yaptığı gibi onluk ve birliği ters çevirerek düşünmelisin.',
    { sasirtma: true },
  );
  ekle(
    '3d-go-t12',
    'Bir fırıncı sabah 61 ekmek sattı. Fırıncı kaç onluk ve kaç birlik ekmek satmıştır?',
    '6 onluk, 1 birlik',
    ['1 onluk, 6 birlik', '6 onluk, 1 birlik', '6 onluk, 0 birlik', '1 onluk, 1 birlik'],
    '6 onluk 1 birlik',
  );
  ekle(
    '3d-go-t13',
    'Bir dükkandaki oyuncak ayıları saydığımızda 8 onluk ve 7 birlik çıktı. Toplam oyuncak ayı sayısı kaçtır?',
    '87',
    ['78', '80', '87', '70'],
    '80 + 7',
  );
  ekle(
    '3d-go-t14',
    "Elanaz'ın annesi pazardan 4 onluk ve 9 birlik kadar çilek aldı. Annem kaç çilek almıştır?",
    '49',
    ['49', '94', '40', '90'],
    '40 + 9',
  );
  ekle(
    '3d-go-t15',
    'Kumbaramdan çıkan paraları saydığımda 23 kuruş buldum. Bu para kaç onluk ve kaç birlikten oluşur?',
    '2 onluk, 3 birlik',
    ['3 onluk, 2 birlik', '2 onluk, 3 birlik', '2 onluk, 0 birlik', '3 onluk, 3 birlik'],
    '2 onluk 3 birlik',
  );
  ekle(
    '3d-go-t16',
    'Bir çiçekçi 6 onluk ve 6 birlik gülü demet yaptı. Çiçekçide toplam kaç gül vardır?',
    '66',
    ['60', '66', '6', '16'],
    '60 + 6',
  );
  ekle(
    '3d-go-t17',
    '8 onluk ve 4 birlikten oluşan sayı hakkında hangi ifade YANLIŞTIR?',
    "Bu sayı 48'dir.",
    ["Bu sayı 84'tür.", "Bu sayı 48'dir.", 'Sayıda 8 tane onluk grup vardır.', 'Sayıda 4 tane açıkta kalan birlik vardır.'],
    'Soruda olumsuz bir ifade arandığını unutma, şıkları tek tek incele.',
    { sasirtma: true },
  );
  ekle(
    '3d-go-t18',
    'Elanaz panoya 7 onluk ve 1 birlik yıldız yapıştırdı. Panoda kaç yıldız oldu?',
    '71',
    ['17', '70', '71', '11'],
    '70 + 1',
  );
  ekle(
    '3d-go-t19',
    'Koleksiyonumdaki 59 pulu onluk ve birliklerine ayırırsam hangi seçeneğe ulaşırım?',
    '5 onluk, 9 birlik',
    ['9 onluk, 5 birlik', '5 onluk, 9 birlik', '5 onluk, 0 birlik', '9 onluk, 9 birlik'],
    '5 onluk 9 birlik',
  );
  ekle(
    '3d-go-t20',
    'Bir çikolata kutusunda 1 onluk ve 2 birlik çikolata vardır. Kutuda toplam kaç çikolata bulunur?',
    '12',
    ['21', '10', '12', '20'],
    '10 + 2',
  );
  ekle(
    '3d-go-t21',
    'Sayı boncuğunda 3 onluk ve 9 birlik gösteren Elanaz, toplam hangi sayıyı modellemiştir?',
    '39',
    ['93', '30', '39', '90'],
    '30 + 9',
  );
  ekle(
    '3d-go-t22',
    'Sınıftaki 45 öğrenciyi onarlı gruplara ayırırsak kaç onluk grup ve kaç açıkta kalan birlik öğrenci olur?',
    '4 onluk, 5 birlik',
    ['5 onluk, 4 birlik', '4 onluk, 5 birlik', '4 onluk, 0 birlik', '5 onluk, 5 birlik'],
    '4 onluk 5 birlik',
  );
  ekle(
    '3d-go-t23',
    '9 onluk ve 0 birlikten oluşan sayının doğru yazılışı hangisidir?',
    '90',
    ['9', '90', '99', '19'],
    '9 onluk = 90',
  );
  ekle(
    '3d-go-t24',
    'Elanaz 2 onluk, arkadaşı ise 2 birlik kadar şeker getirdi. İkisinin toplam kaç şekeri oldu?',
    '22',
    ['22', '20', '40', '2'],
    '20 + 2',
  );
  ekle(
    '3d-go-t25',
    '87 sayısında kaç onluk ve kaç birlik bulunur?',
    '8 onluk, 7 birlik',
    ['7 onluk, 8 birlik', '8 onluk, 7 birlik', '8 onluk, 0 birlik', '7 onluk, 7 birlik'],
    '8 onluk 7 birlik',
  );

  return sorular;
}

export function gorev3dSayiAlistirma() {
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

  ekle('3d-gs-a1', '"altmış dört" sayısının rakamla yazılışı nedir?', '64', '6 onluk 4 birlik');
  ekle('3d-gs-a2', '31 sayısının okunuşu nedir?', 'otuz bir', '3 onluk 1 birlik');
  ekle('3d-gs-a3', '"kırk yedi" sayısının rakamla yazılışı nedir?', '47', '4 onluk 7 birlik');
  ekle('3d-gs-a4', '86 sayısının okunuşu nedir?', 'seksen altı', '8 onluk 6 birlik');
  ekle('3d-gs-a5', 'Elanaz "on dokuz" tane çıkartma saydı. Rakamla kaç çıkartma saymıştır?', '19', '1 onluk 9 birlik');
  ekle('3d-gs-a6', '70 sayısının okunuşu nedir?', 'yetmiş', '7 onluk');
  ekle('3d-gs-a7', '"doksan üç" sayısının rakamla yazılışı nedir?', '93', '9 onluk 3 birlik');
  ekle('3d-gs-a8', '12 sayısının okunuşu nedir?', 'on iki', '1 onluk 2 birlik');
  ekle('3d-gs-a9', 'Elanaz "yirmi sekiz" boncuk saydı. Rakamla kaç boncuktur?', '28', '2 onluk 8 birlik');
  ekle('3d-gs-a10', '55 sayısının okunuşu nedir?', 'elli beş', '5 onluk 5 birlik');
  ekle('3d-gs-a11', '"seksen iki" sayısının rakamla yazılışı nedir?', '82', '8 onluk 2 birlik');
  ekle('3d-gs-a12', '46 sayısının okunuşu nedir?', 'kırk altı', '4 onluk 6 birlik');
  ekle(
    '3d-gs-a13',
    '"doksan" sayısının rakamla yazılışı nedir?',
    '90',
    "Bu sayıda birlik yok — 9'un yanına ne gelir, dikkat!",
    { sasirtma: true },
  );
  ekle('3d-gs-a14', '"otuz üç" sayısının rakamla yazılışı nedir?', '33', '3 onluk 3 birlik');
  ekle('3d-gs-a15', '67 sayısının okunuşu nedir?', 'altmış yedi', '6 onluk 7 birlik');
  ekle('3d-gs-a16', '"elli bir" sayısının rakamla yazılışı nedir?', '51', '5 onluk 1 birlik');
  ekle('3d-gs-a17', '78 sayısının okunuşu nedir?', 'yetmiş sekiz', '7 onluk 8 birlik');
  ekle('3d-gs-a18', '"kırk dört" sayısının rakamla yazılışı nedir?', '44', '4 onluk 4 birlik');
  ekle('3d-gs-a19', '95 sayısının okunuşu nedir?', 'doksan beş', '9 onluk 5 birlik');
  ekle(
    '3d-gs-a20',
    '"yüz" sayısının rakamla yazılışı nedir?',
    '100',
    'Bu, öğrendiğimiz tek üç basamaklı sayı — kaç tane sıfır var?',
    { sasirtma: true },
  );
  ekle('3d-gs-a21', '"yirmi" sayısının rakamla yazılışı nedir?', '20', '2 onluk');
  ekle('3d-gs-a22', '89 sayısının okunuşu nedir?', 'seksen dokuz', '8 onluk 9 birlik');
  ekle('3d-gs-a23', '"on bir" sayısının rakamla yazılışı nedir?', '11', '1 onluk 1 birlik');
  ekle('3d-gs-a24', '36 sayısının okunuşu nedir?', 'otuz altı', '3 onluk 6 birlik');
  ekle(
    '3d-gs-a25',
    'Elanaz tahtaya "yetmiş altı" yazdı. Bu sayının rakamla yazılışı nedir?',
    '76',
    '7 onluk 6 birlik',
  );

  return sorular;
}

export function gorev3dSayiTest(karistir) {
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

  ekle(
    '3d-gs-t1',
    'Elanaz "otuz sekiz" tane boncuk saydı. Bu sayının rakamla yazılışı hangisidir?',
    '38',
    ['83', '38', '30', '80'],
    '3 onluk 8 birlik',
  );
  ekle(
    '3d-gs-t2',
    'Kalem kutusunda 65 kalemi olan Ali, bu sayının okunuşunu nasıl yazar?',
    'Altmış beş',
    ['Altmış beş', 'Elli altı', 'Altmış', 'Beş'],
    '6 onluk 5 birlik',
  );
  ekle(
    '3d-gs-t3',
    'Bir koli yumurtada "yirmi dokuz" yumurta vardır. Rakamla yazılışı hangisidir?',
    '29',
    ['92', '20', '29', '90'],
    '2 onluk 9 birlik',
  );
  ekle(
    '3d-gs-t4',
    'Okunuşu "yetmiş üç" olan sayının rakamla doğru yazılışı hangisidir?',
    '73',
    ['73', '37', '703', '307'],
    'Duyduğun sayıları yan yana ekleyip 703 yazma hatasına düşmemelisin.',
    { sasirtma: true },
  );
  ekle(
    '3d-gs-t5',
    "Elanaz'ın misket torbasında 54 misket vardır. Bu sayının okunuşu hangisidir?",
    'Elli dört',
    ['Kırk beş', 'Elli dört', 'Elli', 'Dört'],
    '5 onluk 4 birlik',
  );
  ekle(
    '3d-gs-t6',
    'Bir ataç kutusundan "seksen bir" ataç çıktı. Sayının rakamla gösterimi hangisidir?',
    '81',
    ['18', '80', '81', '10'],
    '8 onluk 1 birlik',
  );
  ekle(
    '3d-gs-t7',
    'Kitaplığımızdaki kitapları sayınca "92" bulduk. Bu sayının doğru okunuşu hangisidir?',
    'Doksan iki',
    ['Yirmi dokuz', 'Doksan iki', 'Doksan', 'İki'],
    '9 onluk 2 birlik',
  );
  ekle(
    '3d-gs-t8',
    'Elanaz bugün kitabından "on altı" sayfa okudu. Rakamla yazılışı hangisidir?',
    '16',
    ['61', '10', '16', '60'],
    '1 onluk 6 birlik',
  );
  ekle(
    '3d-gs-t9',
    'Bahçeden topladığımız "elli" elmayı rakamla nasıl gösteririz?',
    '50',
    ['5', '50', '55', '15'],
    '5 onluk',
  );
  ekle(
    '3d-gs-t10',
    'Okunuşu "kırk bir" olan sayının rakamla yazılışı aşağıdakilerden hangisidir?',
    '41',
    ['14', '40', '41', '401'],
    '4 onluk 1 birlik',
  );
  ekle(
    '3d-gs-t11',
    'Elanaz tahtaya "otuz altı" yazdı. Arkadaşı sayının rakamlarının yerini değiştirerek yeni bir sayı söyledi. Arkadaşı hangi sayıyı söylemiştir?',
    'Altmış üç',
    ['Otuz altı', 'Altmış üç', 'Otuz', 'Altmış'],
    "36'nın rakamlarının yeri değişince hangi sayı olur?",
    { sasirtma: true },
  );
  ekle(
    '3d-gs-t12',
    'Bir fırıncı sabah "yetmiş beş" ekmek sattı. Sayının rakamla yazılışı hangisidir?',
    '75',
    ['57', '75', '70', '50'],
    '7 onluk 5 birlik',
  );
  ekle(
    '3d-gs-t13',
    'Bir dükkandaki oyuncak ayıları saydığımızda "84" çıktı. Sayının okunuşu hangisidir?',
    'Seksen dört',
    ['Kırk sekiz', 'Seksen dört', 'Seksen', 'Dört'],
    '8 onluk 4 birlik',
  );
  ekle(
    '3d-gs-t14',
    "Elanaz'ın annesi pazardan \"yirmi iki\" çilek aldı. Rakamla yazılışı hangisidir?",
    '22',
    ['22', '20', '2', '12'],
    '2 onluk 2 birlik',
  );
  ekle(
    '3d-gs-t15',
    'Kumbaramdan çıkan paraları saydığımda "91" kuruş buldum. Sayının okunuşu hangisidir?',
    'Doksan bir',
    ['On dokuz', 'Doksan bir', 'Doksan', 'Bir'],
    '9 onluk 1 birlik',
  );
  ekle(
    '3d-gs-t16',
    'Bir çiçekçi "otuz dört" gülü demet yaptı. Rakamla yazılışı hangisidir?',
    '34',
    ['43', '30', '34', '40'],
    '3 onluk 4 birlik',
  );
  ekle(
    '3d-gs-t17',
    'Okunuşu "altmış sekiz" olan sayı hakkında hangi ifade YANLIŞTIR?',
    'Rakamla 86 olarak yazılır.',
    [
      'Rakamla 68 olarak yazılır.',
      'Rakamla 86 olarak yazılır.',
      'Okunuşu altmış sekiz şeklindedir.',
      'İki basamaklı bir sayıdır.',
    ],
    'Soruda olumsuz bir ifade arandığını unutma, şıkları dikkatli incele.',
    { sasirtma: true },
  );
  ekle(
    '3d-gs-t18',
    'Elanaz panoya "yedi" tane yıldız yapıştırdı. Bu sayının rakamla yazılışı hangisidir?',
    '7',
    ['70', '7', '17', '77'],
    '7 birlik',
  );
  ekle(
    '3d-gs-t19',
    'Koleksiyonumda "elli dokuz" pul var. Bu sayının rakamla yazılışı hangisidir?',
    '59',
    ['95', '50', '59', '509'],
    '5 onluk 9 birlik',
  );
  ekle(
    '3d-gs-t20',
    'Bir çikolata kutusunda "13" çikolata vardır. Bu sayının okunuşu hangisidir?',
    'On üç',
    ['Otuz bir', 'On üç', 'On', 'Üç'],
    '1 onluk 3 birlik',
  );
  ekle(
    '3d-gs-t21',
    'Sayı boncuğunda "kırk dokuz" gösteren Elanaz, hangi rakamları yan yana yazmalıdır?',
    '49',
    ['94', '40', '49', '409'],
    '4 onluk 9 birlik',
  );
  ekle(
    '3d-gs-t22',
    'Sınıftaki "25" öğrencinin okunuşu aşağıdakilerden hangisinde doğru verilmiştir?',
    'Yirmi beş',
    ['Elli iki', 'Yirmi beş', 'Yirmi', 'Beş'],
    '2 onluk 5 birlik',
  );
  ekle(
    '3d-gs-t23',
    'Okunuşu "seksen altı" olan sayının rakamla doğru yazılışı hangisidir?',
    '86',
    ['68', '80', '86', '806'],
    '8 onluk 6 birlik',
  );
  ekle(
    '3d-gs-t24',
    'Okunuşu "kırk" olan sayıya 1 birlik eklersek yeni sayı hangisi OLMAZ?',
    '14',
    ['41', 'Kırk bir', '14', 'Kırkın bir fazlası'],
    'Vurgulu olumsuz soru köküne dikkat et, yanlış seçeneği bulmalısın.',
    { sasirtma: true },
  );
  ekle(
    '3d-gs-t25',
    'Elanaz "yetmiş iki" sayfalık kitabın adını okudu. Rakamla yazılışı hangisidir?',
    '72',
    ['27', '72', '70', '20'],
    '7 onluk 2 birlik',
  );

  return sorular;
}
