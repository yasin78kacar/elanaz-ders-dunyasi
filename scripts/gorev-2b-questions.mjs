/** GOREV-2B — Ritmik Sayma havuz takviyesi (100 soru). Metinler talimata sadıktır. */

export function gorev2bAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: 'MAT.2.1.3',
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? (Number.isNaN(Number(cevap)) || String(cevap).includes(' ') ? 'metin' : 'sayi'),
      ...extra,
    });

  // PARTI-1
  ekle('2b-a1', "Elanaz 2'şer sayıyor: 2, 4, 6, 8... Sıradaki sayı kaçtır?", '10', '8\'den sonra 2 ekle.');
  ekle('2b-a2', "5'er ileriye say: 5, 10, 15, __", '20', '15\'e 5 ekle.');
  ekle('2b-a3', "Elanaz'ın kumbarasına her gün 10 lira atılıyor. 10, 20, 30... Dördüncü gün kumbarada kaç lira olur?", '40', '10\'ar saymayı sürdür.');
  ekle('2b-a4', '3\'er sayıyoruz: 3, 6, 9, 12, __', '15', '12\'ye 3 ekle.');
  ekle('2b-a5', "Geriye doğru 1'er say: 20, 19, 18, __", '17', '18\'den 1 eksilt.');
  ekle('2b-a6', 'Zeynep ile Elanaz 4\'er sayıyor: 4, 8, 12, __', '16', '12\'ye 4 ekle.');
  ekle('2b-a7', "2'şer geriye say: 10, 8, 6, __", '4', '6\'dan 2 eksilt.');
  ekle('2b-a8', 'Bir elin parmakları 5 tanedir. 3 elde kaç parmak vardır? (5\'er say)', '15', '5\'er üç kez say.');
  ekle('2b-a9', "10'ar ileriye say: 40, 50, 60, __", '70', '60\'a 10 ekle.');
  ekle('2b-a10', 'Merdivenleri 2\'şer çıkıyoruz: 2, 4, 6, 8, 10, __', '12', '10\'a 2 ekle.');
  ekle('2b-a11', "5'er geriye say: 30, 25, 20, __", '15', '20\'den 5 eksilt.');
  ekle('2b-a12', "Elanaz'ın çıkartma defterinde her sayfada 4 çıkartma var. 4, 8, 12... Beşinci sayfada toplam kaç çıkartma sayar?", '20', '4\'er beş kez say.');
  ekle('2b-a13', "3'er geriye say: 18, 15, 12, __", '9', '12\'den 3 eksilt.');
  ekle('2b-a14', "1'er ileriye say: 67, 68, 69, __", '70', '69\'a 1 ekle.');
  ekle('2b-a15', 'Bisikletlerin 2 tekerleği var. 6 bisiklette kaç teker vardır? (2\'şer say)', '12', '2\'şer altı kez say.');
  ekle('2b-a16', "10'ar geriye say: 100, 90, 80, __", '70', '80\'den 10 eksilt.');
  ekle('2b-a17', 'Eldivenler 5 parmaklı. 4 eldivende kaç parmak yeri var? (5\'er say)', '20', '5\'er dört kez say.');
  ekle('2b-a18', "4'er ileriye say: 12, 16, 20, __", '24', '20\'ye 4 ekle.');
  ekle('2b-a19', 'Elanaz ip atlıyor ve 3\'er sayıyor: 3, 6, 9... Altıncı atlayışta kaç der?', '18', '3\'er altı kez say.');
  ekle('2b-a20', "2'şer say ve eksik sayıyı bul: 14, 16, __, 20", '18', '16 ile 20 arasında çift sayı.');
  ekle('2b-a21', "5'er say ve eksik sayıyı bul: 35, __, 45, 50", '40', '35 ile 45 arasında 5\'in katı.');
  ekle('2b-a22', "10'ar say ve eksik sayıyı bul: 20, 30, __, 50", '40', '30 ile 50 arasında 10\'un katı.');
  ekle(
    '2b-a23',
    "Elanaz 2'şer sayarken bir sayıyı yanlış söyledi: 2, 4, 6, 7, 10. Yanlış söylediği sayı hangisi?",
    '7',
    "2'şer sayarken hep çift sayılar gelir",
    { sasirtma: true },
  );
  ekle('2b-a24', "3'er say ve eksik sayıyı bul: 21, 24, __, 30", '27', '24 ile 30 arasında 3\'ün katı.');
  ekle('2b-a25', "Geriye 4'er say: 24, 20, 16, __", '12', '16\'dan 4 eksilt.');

  // PARTI-G1
  ekle('2b-ga1', "Elanaz ikişer ileriye doğru sayarken 12'den sonra hangi sayıyı söyler?", '14', '12\'ye 2 ekle.');
  ekle('2b-ga2', 'Bahçedeki 5 kedinin patilerini dörder sayalım: 4, 8, 12, 16... Son kedi için hangi sayıyı söyleriz?', '20', '4\'er beş kez say.');
  ekle('2b-ga3', 'Kitaplığın raflarını üçer üçer sayıyoruz: 3, 6, 9... Bir sonraki raf kaçıncı olur?', '12', '9\'a 3 ekle.');
  ekle('2b-ga4', 'Onar onar geriye doğru sayıyoruz: 90, 80, 70... Sırada hangi sayı var?', '60', '70\'ten 10 eksilt.');
  ekle('2b-ga5', 'Elanaz her gün kumbarasına 4 lira atıyor. 4, 8, 12, 16... Beşinci gün kumbarada kaç lira olur?', '20', '4\'er beş kez say.');
  ekle('2b-ga6', "30'dan başlayıp geriye doğru beşer ritmik sayarken 25'ten sonra hangi sayıyı söyleriz?", '20', '25\'ten 5 eksilt.');
  ekle('2b-ga7', 'Masada 8 çift çorap var. Çorapları ikişer ikişer sayarsak en son hangi sayıyı buluruz?', '16', '2\'şer sekiz kez say.');
  ekle('2b-ga8', 'Elanaz merdivenleri dörder dörder çıkıyor. 4, 8... Üçüncü adımında hangi basamakta olur?', '12', '4\'er üç kez say.');
  ekle('2b-ga9', "Birer ileriye sayarken 45'ten bir önce gelen sayı hangisidir?", '44', '45\'ten 1 eksilt.');
  ekle('2b-ga10', "Üçer ileriye sayarken 18 ile 24 arasında hangi sayıyı söyleriz?", '21', '18\'den sonra 21 gelir.');
  ekle(
    '2b-ga11',
    "Elanaz 40'tan geriye onar sayıyor. Kerem ise 10'dan ileriye onar sayıyor. İkisinin de söylediği ortak bir sayı yoktur diyebilir miyiz?",
    'Hayır, diyemeyiz',
    'İki saymayı da yaz, ortak sayıları karşılaştır',
    { cevapTipi: 'metin', sasirtma: true },
  );
  ekle('2b-ga12', "Beşer ritmik saymada 35'ten hemen sonra gelen sayı hangisidir?", '40', '35\'e 5 ekle.');
  ekle('2b-ga13', 'Kutudaki boya kalemlerini dörder sayıyoruz: 12, 16, 20... Bir sonraki saymada kaç kalem olur?', '24', '20\'ye 4 ekle.');
  ekle('2b-ga14', "16'dan başlayıp geriye doğru ikişer sayarken söyleyeceğimiz ilk sayı kaçtır?", '14', '16\'dan 2 eksilt.');
  ekle('2b-ga15', "Elanaz'ın 50 tane çıkartması var. Onar onar arkadaşlarına dağıtıyor. Kalana doğru geriye sayalım: 50, 40, 30... Bir sonraki sayı kaçtır?", '20', '30\'dan 10 eksilt.');
  ekle('2b-ga16', "Üçer ritmik sayarken 15'ten önce hangi sayıyı söyleriz?", '12', '15\'ten 3 eksilt.');
  ekle('2b-ga17', "Dörder ileriye ritmik sayarken 28'den sonra gelen sayı hangisidir?", '32', '28\'e 4 ekle.');
  ekle('2b-ga18', 'Masadaki 7 bardağın içine onar tane boncuk koyduk. Onar sayarsak toplam kaç boncuk olur?', '70', '10\'ar yedi kez say.');
  ekle('2b-ga19', "24'ten başlayıp geriye doğru üçer sayarken hangi sayıyı söylemeyiz: 21 mi, 20 mi?", '20', '3\'er geriye giderken 21 gelir, 20 gelmez.');
  ekle('2b-ga20', 'Elanaz bisikletlerin tekerleklerini ikişer ikişer sayıyor. 2, 4, 6... 5 tane bisikletin toplam kaç tekerleği vardır?', '10', '2\'şer beş kez say.');
  ekle(
    '2b-ga21',
    "Beşer ileriye sayarken her sayının sonu ya 0 ya da 5 ile biter. Buna göre beşer sayarken 44 sayısını söyler miyiz?",
    'Hayır, söylemeyiz.',
    '44 hangi rakamla bitiyor? Kurala uy',
    { cevapTipi: 'metin', sasirtma: true },
  );
  ekle('2b-ga22', "Dörder ritmik saymada 36'dan bir önceki sayı kaçtır?", '32', '36\'dan 4 eksilt.');
  ekle('2b-ga23', "100'den geriye doğru onar sayarken 80'den sonra hangi sayıyı söyleriz?", '70', '80\'den 10 eksilt.');
  ekle('2b-ga24', "Elanaz 9'dan başlayıp üçer ileriye sayıyor. Söylediği dördüncü sayı kaçtır?", '18', '9, 12, 15, 18');
  ekle('2b-ga25', "İkişer geriye sayarken 20'den hemen SONRA hangi sayıyı söyleriz?", '18', '20\'den 2 eksilt.');

  return sorular;
}

export function gorev2bTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: 'MAT.2.1.3',
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  // PARTI-1
  ekle('2b-t1', "2'şer sayarken hangisi söylenmez?", '7', ['4', '8', '7', '10'], '2\'şer sayıda çift sayılar gelir.');
  ekle('2b-t2', '5, 10, 15, 20... Bu sayma kaçar kaçar yapılıyor?', "5'er", ["2'şer", "5'er", "3'er", "10'ar"], 'Her adımda 5 ekleniyor.');
  ekle('2b-t3', "Elanaz 10'ar sayıyor. 30'dan sonra hangi sayıyı söyler?", '40', ['31', '35', '40', '50'], '30\'a 10 ekle.');
  ekle('2b-t4', '3, 6, 9, 12 dizisinde sıradaki sayı hangisidir?', '15', ['13', '14', '15', '16'], '12\'ye 3 ekle.');
  ekle('2b-t5', "Geriye doğru 5'er sayarken 25'ten sonra hangisi gelir?", '20', ['24', '20', '30', '15'], '25\'ten 5 eksilt.');
  ekle('2b-t6', "Hangisi 4'er ileriye saymadır?", '4, 8, 12, 16', ['4, 8, 12, 16', '4, 6, 8, 10', '4, 5, 6, 7', '4, 9, 14, 19'], 'Her adımda 4 eklenir.');
  ekle('2b-t7', "Elanaz'ın sınıfında sıralar 2'şer kişilik. 5 sırada kaç öğrenci oturur?", '10', ['7', '10', '12', '25'], '2\'şer beş kez say.');
  ekle(
    '2b-t8',
    "Aşağıdakilerden hangisi 5'er saymada YOKTUR?",
    '42',
    ['15', '35', '42', '50'],
    "5'er sayarken sayılar hep 0 ya da 5 ile biter",
    { sasirtma: true },
  );
  ekle('2b-t9', '18, 15, 12, 9... Bu sayma nasıl yapılıyor?', "3'er geriye", ["3'er ileriye", "3'er geriye", "2'şer geriye", "5'er geriye"], 'Her adımda 3 eksiliyor.');
  ekle('2b-t10', 'Eksik sayı hangisidir? 10, 20, __, 40', '30', ['25', '30', '35', '21'], '20 ile 40 arasında 10\'un katı.');
  ekle('2b-t11', 'Bir yıldızın 5 köşesi var. 3 yıldızda kaç köşe vardır?', '15', ['8', '10', '15', '20'], '5\'er üç kez say.');
  ekle('2b-t12', "2'şer geriye sayarken 12'den sonra hangisi gelir?", '10', ['14', '11', '10', '8'], '12\'den 2 eksilt.');
  ekle('2b-t13', 'Hangisi yanlıştır?', '10, 20, 25, 30', ['2, 4, 6, 8', '5, 10, 15, 20', '3, 6, 9, 12', '10, 20, 25, 30'], '10\'ar saymada 25 olmaz.');
  ekle('2b-t14', 'Elanaz 4\'er sayarak topladığı kestaneleri sayıyor: 4, 8, 12, 16. Kaç kestanesi var?', '16', ['4', '12', '16', '20'], 'Son sayı toplamı verir.');
  ekle(
    '2b-t15',
    "Elanaz'ın 3 kalemi, 2 silgisi ve 1 defteri var. Kalemleri sayarsa kaça kadar sayar?",
    '3',
    ['6', '5', '3', '2'],
    'Soruda yalnızca KALEMLER soruluyor, dikkatle oku',
    { sasirtma: true },
  );
  ekle('2b-t16', '60, 70, 80, 90... Bu saymada 90\'dan sonra hangisi gelir?', '100', ['91', '95', '100', '110'], '90\'a 10 ekle.');
  ekle('2b-t17', "Hangisi 3'er geriye saymadır?", '12, 9, 6, 3', ['12, 9, 6, 3', '12, 10, 8, 6', '3, 6, 9, 12', '12, 11, 10, 9'], 'Her adımda 3 eksilir.');
  ekle('2b-t18', 'Eksik sayı hangisidir? 16, 20, __, 28', '24', ['22', '24', '26', '21'], '4\'er sayıyoruz.');
  ekle('2b-t19', "Arabaların 4 tekerleği var. 4'er sayarak 3 arabanın tekerleklerini bul.", '12', ['7', '8', '12', '16'], '4\'er üç kez say.');
  ekle('2b-t20', "1'er geriye sayarken 41'den sonra hangisi gelir?", '40', ['42', '40', '39', '45'], '41\'den 1 eksilt.');
  ekle(
    '2b-t21',
    "Hangisi hem 2'şer hem 5'er saymada söylenir?",
    '10',
    ['15', '12', '10', '4'],
    'İki listeyi de düşün — hangi sayı ikisinde de var?',
    { sasirtma: true },
  );
  ekle('2b-t22', "Elanaz kumbarasındaki paraları 5'er sayıyor: 5, 10, 15, 20, 25. Kaç lirası var?", '25', ['5', '20', '25', '30'], 'Son sayı toplamı verir.');
  ekle('2b-t23', 'Eksik sayı hangisidir? 9, 12, 15, __', '18', ['16', '17', '18', '21'], '15\'e 3 ekle.');
  ekle('2b-t24', "10'ar geriye sayarken 50'den sonra hangisi gelir?", '40', ['60', '45', '40', '30'], '50\'den 10 eksilt.');
  ekle('2b-t25', 'Hangi sayma en hızlı 100\'e ulaştırır?', "10'ar", ["1'er", "2'şer", "5'er", "10'ar"], 'En büyük adımla saymak daha hızlıdır.');

  // PARTI-G1
  ekle('2b-gt1', 'Elanaz geriye doğru ikişer sayıyor: 18 - 16 - 14 - ? - 10. Soru işareti yerine hangisi gelmelidir?', '12', ['11', '12', '13', '15'], '14\'ten 2 eksilt.');
  ekle('2b-gt2', "Üçer ritmik saymada 21'den sonra gelen sayı hangisidir?", '24', ['22', '23', '24', '25'], '21\'e 3 ekle.');
  ekle('2b-gt3', "Beşer ileriye doğru sayarken hangisini en son söyleriz?", '45', ['35', '40', '45', '30'], 'Sıradaki en büyük sayı.');
  ekle('2b-gt4', 'Elanaz her gün 10 sayfa kitap okuyor. 4 günün sonunda okuduğu sayfa sayıları sırasıyla hangisidir?', '10-20-30-40', ['10-20-30-40', '10-11-12-13', '5-10-15-20', '10-15-20-25'], '10\'ar dört gün say.');
  ekle('2b-gt5', "Dörder ileriye doğru sayarken 16 ile 24'ün tam ortasında hangi sayı bulunur?", '20', ['18', '20', '22', '26'], '16\'dan 4\'er git.');
  ekle('2b-gt6', "Geriye doğru birer sayarken 70'ten SONRA hangi sayıyı söyleriz?", '69', ['69', '71', '60', '80'], '70\'ten 1 eksilt.');
  ekle(
    '2b-gt7',
    'Elanaz dörder ileriye doğru sayıyor: 4, 8, 12, 16, 20. Aşağıdaki sayılardan hangisi bu saymada DEĞİLDİR?',
    '18',
    ['12', '16', '18', '20'],
    'Diziyi tek tek kontrol et',
    { sasirtma: true },
  );
  ekle('2b-gt8', "Üçer ritmik sayarken 9'dan başlayıp 4 adım ileri gidersek hangi sayıya ulaşırız?", '21', ['12', '15', '18', '21'], '9\'dan 4 adım 3\'er say.');
  ekle('2b-gt9', "İkişer ileriye sayarken aşağıdaki sayılardan hangisini asla söylemeyiz?", '15', ['14', '15', '16', '18'], '2\'şer sayıda tek sayılar gelmez.');
  ekle('2b-gt10', "Elanaz'ın tokaları beşerli gruplar halinde duruyor. 5, 10, 15, ?, 25. Boşluğa hangisi gelmelidir?", '20', ['16', '20', '22', '30'], '15\'e 5 ekle.');
  ekle('2b-gt11', "40'tan başlayıp geriye doğru onar sayarken 3. sırada hangi sayıyı söyleriz? (40 dahil)", '20', ['30', '20', '10', '0'], '40, 30, 20...');
  ekle('2b-gt12', "Dörder ritmik sayarken 24'ten hemen önce ve hemen sonra gelen sayılar hangileridir?", '20 ve 28', ['20 ve 28', '23 ve 25', '22 ve 26', '18 ve 30'], '24\'ten 4 eksilt ve 4 ekle.');
  ekle('2b-gt13', 'Elanaz bahçeden topladığı 12 çiçeği üçerli demetler yapıyor. Demetleri üçer sayarsak hangisini söyleriz?', '3-6-9-12', ['3-6-9-12', '2-4-6-8', '4-8-12-16', '5-10-15-20'], '3\'er say.');
  ekle('2b-gt14', "15'ten başlayıp geriye doğru üçer sayarken 9'dan önce hangi sayıyı söyleriz?", '12', ['6', '12', '8', '10'], '9\'dan 3 eksilt.');
  ekle('2b-gt15', "Onar ritmik saymada 60'tan bir sonraki sayı kaçtır?", '70', ['50', '61', '70', '80'], '60\'a 10 ekle.');
  ekle('2b-gt16', 'Elanaz merdivenleri ikişer ikişer çıkıyor. 6. basamaktan sonra hangi basamağa basar?', '8', ['7', '8', '9', '10'], '6\'dan sonra 8 gelir.');
  ekle(
    '2b-gt17',
    "Beşer ileriye sayarken 50'ye ulaştık. Onar ileriye sayarken de 50'ye ulaşırız. Bu iki saymada 50'den bir önce söylenen sayılar hakkında hangisi doğrudur?",
    'Beşer saymada 45, onar saymada 40 söylenir.',
    [
      'İkisinde de 40 söylenir.',
      'Beşer saymada 45, onar saymada 40 söylenir.',
      'İkisinde de 45 söylenir.',
      'Beşer saymada 40, onar saymada 45 söylenir.',
    ],
    "50'den önceki sayılara bak",
    { sasirtma: true },
  );
  ekle('2b-gt18', "Dörder ritmik saymada 32'den sonra gelen sayı hangisidir?", '36', ['34', '36', '38', '40'], '32\'ye 4 ekle.');
  ekle('2b-gt19', "90'dan geriye doğru onar sayarken 50'den hemen sonra hangisini söyleriz?", '40', ['60', '40', '30', '70'], '50\'den 10 eksilt.');
  ekle('2b-gt20', 'Elanaz her gün kumbarasından 2 lira alıp harcıyor. Kumbarada 20 lira vardı. Geriye doğru sayarsak 3 gün sonra kaç lira kalır?', '14', ['18', '16', '14', '12'], 'Her gün 2 eksilt.');
  ekle('2b-gt21', "Üçer ileriye sayarken 12'den başlayarak 3 sayma yaparsak hangi sayıya geliriz?", '21', ['15', '18', '21', '24'], '12, 15, 18, 21');
  ekle('2b-gt22', "Beşer geriye doğru sayarken 45'ten önce hangi sayıyı söylemiştik?", '50', ['50', '40', '35', '55'], '45\'ten önce 50 gelir.');
  ekle('2b-gt23', 'Elanaz masadaki 4 kutunun her birine dörder kalem koydu. Kalemleri dörder sayalım:', '4-8-12-16', ['4-8-12-16', '2-4-6-8', '4-5-6-7', '10-20-30-40'], '4\'er dört kutu.');
  ekle('2b-gt24', "Birer ileriye ritmik saymada 89'dan sonra gelen sayı hangisidir?", '90', ['88', '90', '91', '100'], '89\'a 1 ekle.');
  ekle('2b-gt25', "İkişer geriye doğru sayarken 10'dan önce hangi sayı gelir?", '12', ['12', '8', '9', '11'], 'Soru metnindeki sırayı dikkatle oku.');

  return sorular;
}
