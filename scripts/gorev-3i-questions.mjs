/** GOREV-3I — Sıvı Ölçme (50 görselli soru). Metinler patron onaylıdır. */

const KAZANIM = 'MAT.2.1.5';
const kap = (id) => ({ tur: 'kap', sahne: `g5m-${id}` });

const K = {
  Bardak: { tip: 'kap', anahtar: 'bardak' },
  Kova: { tip: 'kap', anahtar: 'kova' },
  Sürahi: { tip: 'kap', anahtar: 'surahi' },
  Şişe: { tip: 'kap', anahtar: 'sise' },
  Bidon: { tip: 'kap', anahtar: 'bidon' },
};

function ikonlar(map) {
  return map;
}

export function gorev3iAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? (/^\d+$/.test(String(cevap)) ? 'sayi' : 'metin'),
      ...extra,
    });

  ekle('g5m-a1', 'Bardak mı büyüktür, kova mı?', 'kova', 'Kova bardaktan daha büyük bir kaptır.', {
    gorsel: kap('a1'),
    alternatifCevaplar: ['Kova'],
  });
  ekle('g5m-a2', 'Sürahi mi büyüktür, bardak mı?', 'sürahi', 'Sürahi bardaktan daha büyük bir kaptır.', {
    gorsel: kap('a2'),
    alternatifCevaplar: ['Sürahi'],
  });
  ekle(
    'g5m-a3',
    'Hangisine daha çok su sığar: küçük şişeye mi, büyük kovaya mı?',
    'büyük kova',
    'Büyük kap daha çok su tutar.',
    {
      gorsel: kap('a3'),
      alternatifCevaplar: ['Büyük kova', 'kova', 'Kova'],
    },
  );
  ekle(
    'g5m-a4',
    'Elanaz kovayı bardakla doldurursa çok mu, az mı bardak gerekir?',
    'çok',
    'Kova büyük olduğu için çok bardak gerekir.',
    {
      gorsel: kap('a4'),
      alternatifCevaplar: ['Çok'],
    },
  );
  ekle(
    'g5m-a5',
    '🎭 Büyük sürahi mi yoksa küçük bardak mı daha az su tutar?',
    'küçük bardak',
    '"Az tutan" hangisi? Büyük/küçük sıfatlarına dikkat!',
    {
      gorsel: kap('a5'),
      sasirtma: true,
      alternatifCevaplar: ['Küçük bardak', 'bardak', 'Bardak'],
    },
  );
  ekle(
    'g5m-a6',
    '1 kova suyu şişelere doldurduk, 4 şişe doldu. Kova mı büyüktür, şişe mi?',
    'kova',
    '1 kova 4 şişeye eşit — kova daha büyüktür.',
    {
      gorsel: kap('a6'),
      alternatifCevaplar: ['Kova'],
    },
  );
  ekle(
    'g5m-a7',
    'Elanaz sürahiyi bardakla doldurdu: 5 bardak gerekti. Sürahi mi büyüktür, bardak mı?',
    'sürahi',
    '5 bardak sürahiye sığdı — sürahi daha büyüktür.',
    {
      gorsel: kap('a7'),
      alternatifCevaplar: ['Sürahi'],
    },
  );
  ekle('g5m-a8', '1 bidon suyu şişelere boşalttık, 6 şişe doldu. 1 bidon kaç şişeye eşittir?', '6', 'Resimde 6 şişe doldu.', {
    gorsel: kap('a8'),
    cevapTipi: 'sayi',
  });
  ekle(
    'g5m-a9',
    '🎭 Büyük şişe 4 bardak, küçük şişe 2 bardak su tutuyor. Hangisi daha çok su tutar?',
    'büyük şişe',
    'Bardak sayısı fazla olan daha büyüktür!',
    {
      gorsel: kap('a9'),
      sasirtma: true,
      alternatifCevaplar: ['Büyük şişe', 'büyük şişe'],
    },
  );
  ekle(
    'g5m-a10',
    'Elanaz sürahiyi doldurmak için 3 bardak su kullandı. Sürahiye kaç bardak sığmış?',
    '3',
    '3 bardak sürahiye sığdı.',
    {
      gorsel: kap('a10'),
      cevapTipi: 'sayi',
    },
  );
  ekle('g5m-a11', 'Kova mu yoksa bardak mı daha büyüktür?', 'kova', 'Kova bardaktan daha büyük bir kaptır.', {
    gorsel: kap('a11'),
    alternatifCevaplar: ['Kova'],
  });
  ekle(
    'g5m-a12',
    'Bir şişeyi doldurmak için 2 bardak gerekti. Şişe mi büyüktür, bardak mı?',
    'şişe',
    '2 bardak şişeye sığdı — şişe daha büyüktür.',
    {
      gorsel: kap('a12'),
      alternatifCevaplar: ['Şişe'],
    },
  );
  ekle(
    'g5m-a13',
    'Elanaz "Kovayı doldurmak için kaç bardak gerekir?" diye sormadan önce ne yapmalı?',
    'tahmin etmeli',
    'Önce tahmin ederiz, sonra deneriz.',
    {
      gorsel: kap('a13'),
      alternatifCevaplar: ['Tahmin etmeli', 'tahmin et', 'Tahmin et'],
    },
  );
  ekle(
    'g5m-a14',
    '🎭 Onur 5 bardak yetecek dedi, 8 bardak gerekti. Onur az mı fazla mı tahmin etmiş?',
    'az tahmin etmiş',
    '5 mi çok, 8 mi çok? Gerçek daha çok çıktı!',
    {
      gorsel: kap('a14'),
      sasirtma: true,
      alternatifCevaplar: ['az', 'Az', 'Az tahmin etmiş'],
    },
  );
  ekle(
    'g5m-a15',
    'Büyük bidon mu, küçük şişe mi daha az suyla dolar?',
    'küçük şişe',
    'Küçük kap az su sığar, az suyla dolar.',
    {
      gorsel: kap('a15'),
      alternatifCevaplar: ['Küçük şişe', 'şişe', 'Şişe'],
    },
  );
  ekle(
    'g5m-a16',
    '2 büyük kova su 10 şişeye dolduruldu. Resimdeki şişeleri sayarak 1 kova kaç şişe eder?',
    '5',
    '10 şişe 2 kovaya eşit — 1 kova 5 şişe eder.',
    {
      gorsel: kap('a16'),
      cevapTipi: 'sayi',
    },
  );
  ekle('g5m-a17', 'Hangisi daha büyük bir kaptır: sürahi mi bidon mu?', 'bidon', 'Bidon sürahiden daha büyük bir kaptır.', {
    gorsel: kap('a17'),
    alternatifCevaplar: ['Bidon'],
  });
  ekle(
    'g5m-a18',
    '🎭 Kovayı doldurmak için 10 bardak mı, 3 sürahi mi daha kolay olur?',
    '3 sürahi',
    'Sürahi bardaktan büyük — az sayıda büyük kapla doldurmak kolaydır!',
    {
      gorsel: kap('a18'),
      sasirtma: true,
      alternatifCevaplar: ['3 sürahi', 'sürahi', 'Sürahi'],
    },
  );
  ekle(
    'g5m-a19',
    "Elanaz'ın sürahisi 4 bardak su tutuyor. Resimdeki 2 sürahide toplam kaç bardak su var?",
    '8',
    'Her sürahide 4 bardak — 4 + 4 = 8.',
    {
      gorsel: kap('a19'),
      cevapTipi: 'sayi',
    },
  );
  ekle('g5m-a20', 'Büyük kap mı çok su tutar, küçük kap mı?', 'büyük kap', 'Büyük kap daha çok su tutar.', {
    gorsel: kap('a20'),
    alternatifCevaplar: ['Büyük kap'],
  });
  ekle(
    'g5m-a21',
    '1 sürahi su 3 bardağı doldurdu. Sürahi mi büyüktür, bardak mı?',
    'sürahi',
    '3 bardak sürahiye eşit — sürahi daha büyüktür.',
    {
      gorsel: kap('a21'),
      alternatifCevaplar: ['Sürahi'],
    },
  );
  ekle(
    'g5m-a22',
    '🎭 Elanaz "Büyük kova küçük bardaktan az su tutar" dedi. Bu doğru mu?',
    'hayır, yanlış',
    'Büyük kap HER ZAMAN daha çok su tutar!',
    {
      gorsel: kap('a22'),
      sasirtma: true,
      alternatifCevaplar: ['hayır', 'Hayır', 'yanlış', 'Yanlış', 'Hayır, yanlış'],
    },
  );
  ekle(
    'g5m-a23',
    '3 şişe su 1 kovayı doldurdu. Kova mı büyüktür, şişe mi?',
    'kova',
    '3 şişe 1 kovaya eşit — kova daha büyüktür.',
    {
      gorsel: kap('a23'),
      alternatifCevaplar: ['Kova'],
    },
  );
  ekle(
    'g5m-a24',
    '1 sürahi 3 bardak tutuyor. Resimdeki 3 sürahide kaç bardak su var?',
    '9',
    'Her sürahide 3 bardak — 3 + 3 + 3 = 9.',
    {
      gorsel: kap('a24'),
      cevapTipi: 'sayi',
    },
  );
  ekle(
    'g5m-a25',
    'Elanaz şişeye 3 bardak koydu, şişe dolmadı. En az kaç bardak daha gerekir?',
    'en az 1',
    'Şişe dolmadı — en az 1 bardak daha gerekir.',
    {
      gorsel: kap('a25'),
      alternatifCevaplar: ['1', 'En az 1', 'en az bir', 'En az bir'],
    },
  );

  return sorular;
}

export function gorev3iTest(karistir) {
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

  ekle(
    'g5m-t1',
    'Hangisine daha çok su sığar?',
    'Kova',
    ['Bardak', 'Kova', 'Şişe', 'Sürahi'],
    'Kap ne kadar büyükse o kadar çok su sığar.',
    {
      gorsel: kap('t1'),
      secenekIkonlari: ikonlar({ Bardak: K.Bardak, Kova: K.Kova, Şişe: K.Şişe, Sürahi: K.Sürahi }),
    },
  );
  ekle(
    'g5m-t2',
    'Sürahiyi doldurmak için 4 bardak gerekti. Hangisi doğrudur?',
    'Sürahi daha büyüktür',
    ['Bardak daha büyüktür', 'Sürahi daha büyüktür', 'İkisi eşittir', 'Bardak 4 kat büyüktür'],
    '4 bardak sürahiye sığdı — sürahi daha büyüktür.',
    { gorsel: kap('t2') },
  );
  ekle(
    'g5m-t3',
    'Elanaz kovayı bardakla dolduruyor. Kaç bardak gerekir: az mı çok mu?',
    'Çok bardak',
    ['Çok bardak', 'Az bardak', '1 bardak', 'Hiç gerekmez'],
    'Kova büyük — çok bardak gerekir.',
    { gorsel: kap('t3') },
  );
  ekle(
    'g5m-t4',
    '1 büyük şişe kaç küçük şişeye eşit? Resimdeki şişeleri say.',
    '3',
    ['1', '3', '5', '10'],
    'Resimde 1 büyük şişe 3 küçük şişeye eşit.',
    { gorsel: kap('t4') },
  );
  ekle(
    'g5m-t5',
    'Onur 3 bardak yetecek dedi, 6 bardak gerekti. Nasıl tahmin etmiş?',
    'Az',
    ['Doğru', 'Fazla', 'Az', 'Hiç tahmin etmemiş'],
    '3 yetmez dedi, 6 gerekti — az tahmin etmiş.',
    { gorsel: kap('t5') },
  );
  ekle(
    'g5m-t6',
    'Hangisi en az su tutar?',
    'Bardak',
    ['Bidon', 'Kova', 'Sürahi', 'Bardak'],
    'En küçük kap en az su tutar.',
    {
      gorsel: kap('t6'),
      secenekIkonlari: ikonlar({ Bidon: K.Bidon, Kova: K.Kova, Sürahi: K.Sürahi, Bardak: K.Bardak }),
    },
  );
  ekle(
    'g5m-t7',
    '1 kova su 5 şişeyi doldurdu. Resimdeki 2 kova kaç şişeyi doldurur?',
    '10',
    ['5', '10', '7', '3'],
    '1 kova 5 şişe — 2 kova 10 şişe eder.',
    { gorsel: kap('t7') },
  );
  ekle(
    'g5m-t8',
    '🎭 Küçük bardak mı, büyük sürahi mi daha az suyla dolar?',
    'Küçük bardak',
    ['Küçük bardak', 'Büyük sürahi', 'İkisi eşit', 'Önce doldurulan'],
    'KÜÇÜK kap az su sığar — az su gerekir, çabuk dolar!',
    {
      gorsel: kap('t8'),
      sasirtma: true,
    },
  );
  ekle(
    'g5m-t9',
    'Elanaz sürahiye 4 bardak koydu, sürahi doldu. Sürahiye kaç bardak sığar?',
    '4',
    ['2', '3', '4', '5'],
    '4 bardak sürahiyi doldurdu.',
    { gorsel: kap('t9') },
  );
  ekle(
    'g5m-t10',
    'Kap ne kadar büyükse içine ne kadar su sığar?',
    'Çok su sığar',
    ['Az su sığar', 'Eşit su sığar', 'Çok su sığar', 'Hiç su sığmaz'],
    'Büyük kap daha çok su tutar.',
    { gorsel: kap('t10') },
  );
  ekle(
    'g5m-t11',
    '2 bidon gül suyu 6 şişeyi doldurdu. Resimdeki şişeleri iki gruba ayırınca 1 bidon kaç şişeyi doldurur?',
    '3',
    ['6', '3', '2', '8'],
    '6 şişe 2 bidona eşit — 1 bidon 3 şişe eder.',
    { gorsel: kap('t11') },
  );
  ekle(
    'g5m-t12',
    '🎭 Elanaz "Büyük kova ile küçük kova aynı suyu tutar" dedi. Hangisi doğrudur?',
    'Büyük kova daha çok tutar',
    ['Evet, aynıdır', 'Büyük kova daha çok tutar', 'Küçük kova daha çok tutar', 'İkisi de boştur'],
    'BÜYÜK kap her zaman DAHA ÇOK su tutar!',
    {
      gorsel: kap('t12'),
      sasirtma: true,
    },
  );
  ekle(
    'g5m-t13',
    'Hangisi en büyük kaptır?',
    'Bidon',
    ['Bardak', 'Şişe', 'Sürahi', 'Bidon'],
    'Bidon en büyük kaptır.',
    {
      gorsel: kap('t13'),
      secenekIkonlari: ikonlar({ Bardak: K.Bardak, Şişe: K.Şişe, Sürahi: K.Sürahi, Bidon: K.Bidon }),
    },
  );
  ekle(
    'g5m-t14',
    'Elanaz 1 sürahi = 3 bardak olduğunu öğrendi. Resimdeki 3 sürahide kaç bardak su var? (Resimdeki bardakları say.)',
    '9',
    ['3', '6', '9', '12'],
    'Her sürahide 3 bardak — 3 × 3 = 9.',
    { gorsel: kap('t14') },
  );
  ekle(
    'g5m-t15',
    'Hangisi doğrudur?',
    'Büyük kap daha çok su tutar',
    ['Küçük kap daha çok su tutar', 'Büyük kap daha az su tutar', 'Büyük kap daha çok su tutar', 'Tüm kaplar eşit tutar'],
    'Büyük kap daha çok su tutar.',
    { gorsel: kap('t15') },
  );
  ekle(
    'g5m-t16',
    '🎭 Elanaz şişeye 5 bardak koyacak dedi, 3 bardakta şişe doldu. Elanaz nasıl tahmin etmiş?',
    'Fazla',
    ['Az', 'Fazla', 'Doğru', 'Hiç tahmin etmemiş'],
    "5 dedi ama 3'te doldu — daha az gerekti, fazla mı yoksa az mı düşünmüş?",
    {
      gorsel: kap('t16'),
      sasirtma: true,
    },
  );
  ekle(
    'g5m-t17',
    'Resimdeki 4 sürahide toplam kaç bardak su var? (Her sürahide 2 bardak su var.)',
    '8',
    ['4', '6', '8', '10'],
    'Her sürahide 2 bardak — 2 + 2 + 2 + 2 = 8.',
    { gorsel: kap('t17') },
  );
  ekle(
    'g5m-t18',
    'Hangisi doğru sıralamadır (küçükten büyüğe)?',
    'Bardak, sürahi, kova',
    ['Kova, sürahi, bardak', 'Bardak, sürahi, kova', 'Sürahi, bardak, kova', 'Kova, bardak, sürahi'],
    'Bardak en küçük, kova en büyük.',
    { gorsel: kap('t18') },
  );
  ekle(
    'g5m-t19',
    'Elanaz 10 bardak suyu 2 sürahiye eşit doldurdu. Resimdeki bardakları iki gruba ayır: 1 sürahiye kaç bardak sığmış?',
    '5',
    ['10', '2', '5', '8'],
    '10 bardak 2 sürahiye eşit — 1 sürahiye 5 bardak sığmış.',
    { gorsel: kap('t19') },
  );
  ekle(
    'g5m-t20',
    '🎭 Bardakla kova doldurmak zor, sürahiyle daha kolay. Neden?',
    'Sürahi daha büyük, daha az sayıda gerekir',
    ['Sürahi daha küçüktür', 'Sürahi daha büyük, daha az sayıda gerekir', 'Bardak daha büyüktür', 'İkisi aynıdır'],
    'Büyük kapla doldururken sayı AZALIR!',
    {
      gorsel: kap('t20'),
      sasirtma: true,
    },
  );
  ekle(
    'g5m-t21',
    'Elanaz sürahiyi 4 bardakla doldurdu. 2 sürahi için kaç bardak gerekir?',
    '8',
    ['4', '6', '8', '2'],
    '1 sürahi 4 bardak — 2 sürahi 8 bardak eder.',
    { gorsel: kap('t21') },
  );
  ekle(
    'g5m-t22',
    '🎭 "Az su tutan kap daha hızlı dolar." Bu doğru mu?',
    'Evet',
    ['Hayır', 'Evet', 'Bazen', 'Hiçbir zaman'],
    'Az su SIĞAR = az su gerekir = çabuk dolar!',
    {
      gorsel: kap('t22'),
      sasirtma: true,
    },
  );
  ekle(
    'g5m-t23',
    '1 büyük bidon 8 şişeyi doldurdu. Resimdeki 2 bidona bakarak kaç şişe dolar?',
    '16',
    ['8', '12', '16', '4'],
    '1 bidon 8 şişe — 2 bidon 16 şişe eder.',
    { gorsel: kap('t23') },
  );
  ekle(
    'g5m-t24',
    'Elanaz sürahiyi 4 bardakla doldurdu. 3 sürahi için kaç bardak gerekir?',
    '12',
    ['4', '8', '12', '16'],
    '1 sürahi 4 bardak — 3 sürahi 12 bardak eder.',
    { gorsel: kap('t24') },
  );
  ekle(
    'g5m-t25',
    '🎭 Büyük kap dolduktan sonra küçük kaba dökülürse ne olur?',
    'Küçük kap taşar',
    ['Küçük kap taşar', 'Küçük kap yarı dolar', 'İkisi eşit olur', 'Hiçbir şey olmaz'],
    'Büyük kaptan fazla su var — küçük kaba sığmaz, taşar!',
    {
      gorsel: kap('t25'),
      sasirtma: true,
    },
  );

  return sorular;
}

export function siviOlcme(karistir) {
  return {
    id: 'sivi-olcme',
    baslik: 'Sıvı Ölçme',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Sıvıları ölçmek için farklı kaplar kullanırız: bardak, sürahi, şişe, kova, bidon. Hangi kap daha büyükse içine daha çok sıvı sığar!',
          gorsel: kap('anlatim-1'),
        },
        {
          metin: 'Büyük kap boşaltılınca küçük kaplara daha çok dolar. 1 kova suyla kaç sürahi dolar?',
          gorsel: kap('anlatim-2'),
        },
        {
          metin:
            'Tahmin etmek de önemli! "Bu şişeye kaç bardak su sığar?" diye sormadan önce TAHMİN EDERİZ, sonra deneriz. Tahminimiz fazlaysa FAZLA, azsa AZ tahmin etmişizdir.',
          gorsel: kap('anlatim-3'),
        },
        {
          metin:
            'Sami Bey 2 bidon gül suyu şişelere koydu — 6 şişe doldu. Onur 8 şişe yeterli diye tahmin etmişti. Onur FAZLA tahmin etmiş!',
          gorsel: kap('anlatim-4'),
        },
      ],
    },
    alistirma: gorev3iAlistirma(),
    test: gorev3iTest(karistir),
  };
}
