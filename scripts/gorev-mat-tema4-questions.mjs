/** PARTI-MATEMATIK-TEMA4 — Çarpma ve Bölme (100 görselli soru). */

const KAZANIM = {
  CARPMA: 'MAT.2.4.1',
  BOLME: 'MAT.2.4.2',
};

function carp(a, b, nesne = 'top', renk = 'kirmizi') {
  return { tur: 'islem', mod: 'carpma-grup', a, b, sonuc: a * b, nesne, renk1: renk };
}
function bol(toplam, grup, nesne = 'elma', renk = 'kirmizi') {
  return { tur: 'islem', mod: 'bolme-grup', a: toplam, b: grup, sonuc: toplam / grup, nesne, renk1: renk };
}
function anl(sahne) {
  return { tur: 'islem', mod: 'anlatim', sahne };
}
function kars(...islemler) {
  return { tur: 'islem', mod: 'karsilastirma', islemler };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function carpmaAlistirma() {
  const s = [];
  const e = (id, soru, cevap, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM.CARPMA,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  e('cp-a1', '2 × 3 = ?', '6', '', { gorsel: carp(2, 3) });
  e('cp-a2', '3 × 2 = ?', '6', '', { gorsel: carp(3, 2, 'elma', 'yesil') });
  e('cp-a3', '4 × 2 = ?', '8', '', { gorsel: carp(4, 2, 'yildiz', 'sari') });
  e('cp-a4', '2 × 4 = ?', '8', '', { gorsel: carp(2, 4, 'balon', 'mavi') });
  e('cp-a5', '5 × 2 = ?', '10', '', { gorsel: carp(5, 2) });
  e('cp-a6', '2 × 5 = ?', '10', '', { gorsel: carp(2, 5, 'cilek') });
  e('cp-a7', '3 × 3 = ?', '9', '', { gorsel: carp(3, 3, 'kelebek') });
  e('cp-a8', '4 × 3 = ?', '12', '', { gorsel: carp(4, 3, 'kalem', 'sari') });
  e('cp-a9', '3 × 4 = ?', '12', '', { gorsel: carp(3, 4) });
  e('cp-a10', '5 × 3 = ?', '15', '', { gorsel: carp(5, 3, 'cicek', 'pembe') });
  e('cp-a11', '3 × 5 = ?', '15', '', { gorsel: carp(3, 5) });
  e('cp-a12', '4 × 4 = ?', '16', '', { gorsel: carp(4, 4, 'kare', 'turuncu') });
  e('cp-a13', '5 × 4 = ?', '20', '', { gorsel: carp(5, 4) });
  e('cp-a14', '4 × 5 = ?', '20', '', { gorsel: carp(4, 5, 'ari') });
  e('cp-a15', '5 × 5 = ?', '25', '', { gorsel: carp(5, 5, 'yildiz') });
  e('cp-a16', '2 × 6 = ?', '12', '', { gorsel: carp(2, 6) });
  e('cp-a17', '6 × 2 = ?', '12', '', { gorsel: carp(6, 2, 'top', 'mavi') });
  e('cp-a18', '3 × 6 = ?', '18', '', { gorsel: carp(3, 6) });
  e('cp-a19', '6 × 3 = ?', '18', '', { gorsel: carp(6, 3, 'elma') });
  e('cp-a20', '4 × 6 = ?', '24', '', { gorsel: carp(4, 6) });
  e('cp-a21', '6 × 4 = ?', '24', '', { gorsel: carp(6, 4, 'balon') });
  e('cp-a22', '5 × 6 = ?', '30', '', { gorsel: carp(5, 6) });
  e('cp-a23', '6 × 5 = ?', '30', '', { gorsel: carp(6, 5, 'cilek') });
  e('cp-a24', '10 × 2 = ?', '20', '', { gorsel: carp(10, 2) });
  e('cp-a25', '2 × 10 = ?', '20', '', { gorsel: carp(2, 10, 'kalem') });
  return s;
}

function carpmaTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM.CARPMA,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  e('cp-t1', '2 × 4 = ?', '8', ['6', '8', '10', '12'], '', { gorsel: carp(2, 4) });
  e('cp-t2', '3 × 3 = ?', '9', ['6', '9', '12', '15'], '', { gorsel: carp(3, 3) });
  e('cp-t3', 'Her sepette 5 elma var. 3 sepette kaç elma vardır?', '15', ['10', '12', '15', '18'], '3 × 5', { gorsel: carp(3, 5, 'elma') });
  e('cp-t4', '4 × 5 = ?', '20', ['15', '18', '20', '25'], '', { gorsel: carp(4, 5) });
  e('cp-t5', '5 × 2 = ?', '10', ['8', '10', '12', '15'], '', { gorsel: carp(5, 2) });
  e('cp-t6', 'Her kutuda 4 kalem var. 4 kutuda kaç kalem vardır?', '16', ['12', '14', '16', '20'], '4 × 4', { gorsel: carp(4, 4, 'kalem', 'sari') });
  e('cp-t7', '6 × 2 = ?', '12', ['10', '11', '12', '14'], '', { gorsel: carp(6, 2) });
  e('cp-t8', '3 × 5 = ?', '15', ['12', '15', '18', '20'], '', { gorsel: carp(3, 5) });
  e('cp-t9', 'Her sırada 3 öğrenci var. 5 sırada kaç öğrenci vardır?', '15', ['10', '12', '15', '18'], '5 × 3', { gorsel: carp(5, 3, 'top', 'mavi') });
  e('cp-t10', '4 × 4 = ?', '16', ['12', '14', '16', '18'], '', { gorsel: carp(4, 4) });
  e('cp-t11', '2 × 6 = ?', '12', ['10', '12', '14', '16'], '', { gorsel: carp(2, 6) });
  e('cp-t12', '5 × 5 = ?', '25', ['20', '22', '25', '30'], '', { gorsel: carp(5, 5) });
  e('cp-t13', 'Her tabakta 2 kurabiye var. 6 tabakta kaç kurabiye vardır?', '12', ['10', '12', '14', '16'], '6 × 2', { gorsel: carp(6, 2, 'kare', 'kahve') });
  e('cp-t14', '3 × 4 = ?', '12', ['9', '10', '12', '15'], '', { gorsel: carp(3, 4) });
  e('cp-t15', '10 × 2 = ?', '20', ['15', '18', '20', '22'], '', { gorsel: carp(10, 2) });
  e('cp-t16', '🎭 4 × 3 ile 3 × 4 sonuçları nasıldır?', 'İkisi de 12', ['4 daha büyük', '3 daha büyük', 'İkisi de 12', 'Farklıdır'], 'Çarpma değişmelidir.', { gorsel: kars('4×3=12', '3×4=12'), sasirtma: true });
  e('cp-t17', '6 × 3 = ?', '18', ['15', '16', '18', '21'], '', { gorsel: carp(6, 3) });
  e('cp-t18', 'Her grupta 5 top var. 4 grupta kaç top vardır?', '20', ['15', '18', '20', '25'], '4 × 5', { gorsel: carp(4, 5, 'top') });
  e('cp-t19', '5 × 4 = ?', '20', ['16', '18', '20', '24'], '', { gorsel: carp(5, 4) });
  e('cp-t20', '2 × 5 = ?', '10', ['8', '9', '10', '12'], '', { gorsel: carp(2, 5) });
  e('cp-t21', '4 × 6 = ?', '24', ['20', '22', '24', '28'], '', { gorsel: carp(4, 6) });
  e('cp-t22', 'Her rafta 3 kitap var. 6 rafta kaç kitap vardır?', '18', ['15', '16', '18', '21'], '6 × 3', { gorsel: carp(6, 3, 'kalem') });
  e('cp-t23', '6 × 5 = ?', '30', ['25', '28', '30', '35'], '', { gorsel: carp(6, 5) });
  e('cp-t24', '3 × 6 = ?', '18', ['15', '16', '18', '20'], '', { gorsel: carp(3, 6) });
  e('cp-t25', 'Çarpma işlemi ne anlama gelir?', 'Eşit grupların toplamı', ['Çıkarma', 'Eşit grupların toplamı', 'Bölme', 'Sıralama'], 'Tekrarlı toplama.', { gorsel: anl('cp-anlatim-1') });
  return s;
}

function bolmeAlistirma() {
  const s = [];
  const e = (id, soru, cevap, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM.BOLME,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  e('bl-a1', '6 ÷ 2 = ?', '3', '', { gorsel: bol(6, 2) });
  e('bl-a2', '8 ÷ 2 = ?', '4', '', { gorsel: bol(8, 2, 'elma') });
  e('bl-a3', '10 ÷ 2 = ?', '5', '', { gorsel: bol(10, 2) });
  e('bl-a4', '12 ÷ 2 = ?', '6', '', { gorsel: bol(12, 2, 'kalem', 'sari') });
  e('bl-a5', '6 ÷ 3 = ?', '2', '', { gorsel: bol(6, 3) });
  e('bl-a6', '9 ÷ 3 = ?', '3', '', { gorsel: bol(9, 3, 'top', 'mavi') });
  e('bl-a7', '12 ÷ 3 = ?', '4', '', { gorsel: bol(12, 3) });
  e('bl-a8', '15 ÷ 3 = ?', '5', '', { gorsel: bol(15, 3, 'cicek') });
  e('bl-a9', '18 ÷ 3 = ?', '6', '', { gorsel: bol(18, 3) });
  e('bl-a10', '10 ÷ 5 = ?', '2', '', { gorsel: bol(10, 5) });
  e('bl-a11', '15 ÷ 5 = ?', '3', '', { gorsel: bol(15, 5, 'yildiz') });
  e('bl-a12', '20 ÷ 5 = ?', '4', '', { gorsel: bol(20, 5) });
  e('bl-a13', '25 ÷ 5 = ?', '5', '', { gorsel: bol(25, 5, 'balon') });
  e('bl-a14', '30 ÷ 5 = ?', '6', '', { gorsel: bol(30, 5) });
  e('bl-a15', '8 ÷ 4 = ?', '2', '', { gorsel: bol(8, 4) });
  e('bl-a16', '12 ÷ 4 = ?', '3', '', { gorsel: bol(12, 4, 'elma') });
  e('bl-a17', '16 ÷ 4 = ?', '4', '', { gorsel: bol(16, 4) });
  e('bl-a18', '20 ÷ 4 = ?', '5', '', { gorsel: bol(20, 4, 'kare') });
  e('bl-a19', '24 ÷ 4 = ?', '6', '', { gorsel: bol(24, 4) });
  e('bl-a20', '6 ÷ 6 = ?', '1', '', { gorsel: bol(6, 6) });
  e('bl-a21', '12 ÷ 6 = ?', '2', '', { gorsel: bol(12, 6, 'cilek') });
  e('bl-a22', '18 ÷ 6 = ?', '3', '', { gorsel: bol(18, 6) });
  e('bl-a23', '24 ÷ 6 = ?', '4', '', { gorsel: bol(24, 6) });
  e('bl-a24', '30 ÷ 6 = ?', '5', '', { gorsel: bol(30, 6, 'kelebek') });
  e('bl-a25', '20 ÷ 2 = ?', '10', '', { gorsel: bol(20, 2) });
  return s;
}

function bolmeTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM.BOLME,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  e('bl-t1', '8 ÷ 2 = ?', '4', ['2', '3', '4', '5'], '', { gorsel: bol(8, 2) });
  e('bl-t2', '12 ÷ 3 = ?', '4', ['3', '4', '5', '6'], '', { gorsel: bol(12, 3) });
  e('bl-t3', '10 elmayı 2 kişiye eşit paylaştırırsak her birine kaç elma düşer?', '5', ['4', '5', '6', '8'], '10 ÷ 2', { gorsel: bol(10, 2, 'elma') });
  e('bl-t4', '15 ÷ 5 = ?', '3', ['2', '3', '4', '5'], '', { gorsel: bol(15, 5) });
  e('bl-t5', '18 ÷ 3 = ?', '6', ['4', '5', '6', '9'], '', { gorsel: bol(18, 3) });
  e('bl-t6', '20 kurabiyeyi 4 tabağa eşit koyarsak her tabakta kaç kurabiye olur?', '5', ['4', '5', '6', '8'], '20 ÷ 4', { gorsel: bol(20, 4, 'kare', 'turuncu') });
  e('bl-t7', '24 ÷ 6 = ?', '4', ['3', '4', '5', '6'], '', { gorsel: bol(24, 6) });
  e('bl-t8', '16 ÷ 4 = ?', '4', ['2', '3', '4', '8'], '', { gorsel: bol(16, 4) });
  e('bl-t9', '12 kalemi 3 gruba eşit ayırırsak her grupta kaç kalem olur?', '4', ['3', '4', '5', '6'], '12 ÷ 3', { gorsel: bol(12, 3, 'kalem') });
  e('bl-t10', '30 ÷ 5 = ?', '6', ['5', '6', '7', '10'], '', { gorsel: bol(30, 5) });
  e('bl-t11', '9 ÷ 3 = ?', '3', ['2', '3', '4', '6'], '', { gorsel: bol(9, 3) });
  e('bl-t12', '20 ÷ 4 = ?', '5', ['4', '5', '6', '8'], '', { gorsel: bol(20, 4) });
  e('bl-t13', '18 topu 6 çocuğa eşit verirsek her çocuk kaç top alır?', '3', ['2', '3', '4', '6'], '18 ÷ 6', { gorsel: bol(18, 6, 'top') });
  e('bl-t14', '25 ÷ 5 = ?', '5', ['4', '5', '6', '10'], '', { gorsel: bol(25, 5) });
  e('bl-t15', '6 ÷ 2 = ?', '3', ['2', '3', '4', '6'], '', { gorsel: bol(6, 2) });
  e('bl-t16', '🎭 12 ÷ 3 ile 12 ÷ 4 sonuçları sırasıyla nedir?', '4 ve 3', ['3 ve 4', '4 ve 3', '3 ve 3', '4 ve 4'], 'Bölen değişince sonuç değişir.', { gorsel: kars('12÷3=4', '12÷4=3'), sasirtma: true });
  e('bl-t17', '14 ÷ 2 = ?', '7', ['5', '6', '7', '8'], '', { gorsel: bol(14, 2) });
  e('bl-t18', '21 ÷ 3 = ?', '7', ['6', '7', '8', '9'], '', { gorsel: bol(21, 3, 'yildiz') });
  e('bl-t19', '24 ÷ 4 = ?', '6', ['4', '5', '6', '8'], '', { gorsel: bol(24, 4) });
  e('bl-t20', '10 ÷ 5 = ?', '2', ['1', '2', '3', '5'], '', { gorsel: bol(10, 5) });
  e('bl-t21', '15 ÷ 3 = ?', '5', ['3', '4', '5', '6'], '', { gorsel: bol(15, 3) });
  e('bl-t22', '16 balonu 4 gruba eşit ayırırsak her grupta kaç balon olur?', '4', ['3', '4', '5', '6'], '16 ÷ 4', { gorsel: bol(16, 4, 'balon', 'mavi') });
  e('bl-t23', '12 ÷ 6 = ?', '2', ['1', '2', '3', '6'], '', { gorsel: bol(12, 6) });
  e('bl-t24', '20 ÷ 2 = ?', '10', ['8', '9', '10', '12'], '', { gorsel: bol(20, 2) });
  e('bl-t25', 'Bölme işlemi ne anlama gelir?', 'Eşit paylaştırma', ['Toplama', 'Eşit paylaştırma', 'Çarpma', 'Sıralama'], 'Eşit gruplara ayırma.', { gorsel: anl('bl-anlatim-1') });
  return s;
}

export function carpma(karistir) {
  return {
    id: 'carpma',
    baslik: 'Çarpma',
    kazanimKodu: KAZANIM.CARPMA,
    anlatim: {
      ekranlar: [
        {
          metin: 'Çarpma, eşit grupların toplamını kısa yoldan bulmaktır. 3 grup, her grupta 4 elma → 3 × 4 = 12 elma.',
          gorsel: anl('cp-anlatim-1'),
        },
        {
          metin: 'Çarpma işleminde sıra önemli değildir: 2 × 5 = 5 × 2 = 10. Aynı sayıları farklı sırada çarpınca sonuç değişmez.',
          gorsel: anl('cp-anlatim-2'),
        },
        {
          metin: 'Çarpma tablosunu öğrenmek için grupları saymayı kullanırız. Her gruptaki nesne sayısını gruplarla çarparız.',
          gorsel: anl('cp-anlatim-3'),
        },
      ],
    },
    alistirma: carpmaAlistirma(),
    test: carpmaTest(karistir),
  };
}

export function bolme(karistir) {
  return {
    id: 'bolme',
    baslik: 'Bölme',
    kazanimKodu: KAZANIM.BOLME,
    anlatim: {
      ekranlar: [
        {
          metin: 'Bölme, bir topluluğu eşit parçalara ayırmaktır. 12 elmayı 3 kişiye eşit paylaştırırsak her birine 4 elma düşer: 12 ÷ 3 = 4.',
          gorsel: anl('bl-anlatim-1'),
        },
        {
          metin: 'Bölmede kalan olmamalıdır. Eşit paylaştırma yaparken her grupta aynı sayıda nesne olur.',
          gorsel: anl('bl-anlatim-2'),
        },
        {
          metin: 'Bölme, çarpmanın tersidir. 3 × 4 = 12 ise 12 ÷ 3 = 4 ve 12 ÷ 4 = 3 olur.',
          gorsel: anl('bl-anlatim-3'),
        },
      ],
    },
    alistirma: bolmeAlistirma(),
    test: bolmeTest(karistir),
  };
}
