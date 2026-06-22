/** OKUMA-KOSESI-HIKAYELER.md — 5 hikâye içeriği */

const ok = (sahne) => ({ tur: 'okuma-kosesi', sahne });

function mc(id, soru, dogru, secenekler, ipucu, gorsel) {
  return { id, kazanimKodu: 'OKU.2.1', tip: 'coktanSecmeli', soru, dogruCevap: dogru, secenekler, ipucu, gorsel: ok(gorsel) };
}

export const okumaKosesiHikayeleri = [
  {
    id: 'elanaz-kayip-boya-kalemi',
    baslik: 'Elanaz ve Kayıp Boya Kalemi',
    sayfalar: [
      {
        metin: 'Elanaz o sabah okula neşeyle gitti. Çünkü resim dersi vardı ve öğretmeni "Bugün hayalinizdeki bahçeyi çizeceğiz" demişti. Elanaz çantasını açtı. Boya kalemlerini tek tek sıraya dizdi. Kırmızı, sarı, mavi, yeşil... Ama bir şey eksikti. Turuncu kalemi yoktu!',
        gorsel: ok('ok-boya-kalemleri'),
      },
      {
        metin: '"Olamaz!" dedi Elanaz. "Bahçemdeki portakal ağacını nasıl boyayacağım?" Yan sırada oturan arkadaşı Zeynep, Elanaz\'ın üzüldüğünü fark etti. "Ne oldu Elanaz?" diye sordu. "Turuncu kalemim kaybolmuş," dedi Elanaz. Zeynep biraz düşündü. Sonra gülümsedi. "Kaybolan kalemine üzülme. Bir sırrım var: kırmızı ile sarıyı karıştırırsan turuncu olur!"',
        gorsel: ok('ok-renk-karistirma'),
      },
      {
        metin: 'Elanaz önce inanamadı. Kâğıdın kenarına önce kırmızı sürdü, üstüne sarı sürdü. Gerçekten de turuncu olmuştu! Portakal ağacını boyadı. Resmi o kadar güzel oldu ki öğretmeni resmi sınıf panosuna astı. O gün Elanaz iki şey öğrendi: Renkler karışınca yeni renkler oluşur. Ve bir sorun olduğunda üzülmek yerine çözüm aramak gerekir.',
        gorsel: ok('ok-pano-resim'),
      },
    ],
    sorular: [
      mc('ok-s1', 'Elanaz o gün okula neden neşeyle gitti?', 'Resim dersi olduğu için', ['Matematik sınavı olduğu için', 'Resim dersi olduğu için', 'Tatil olduğu için', 'Arkadaşı hasta olduğu için'], 'Hikâyenin başında hangi ders vardı?', 'ok-resim-defteri'),
      mc('ok-s2', 'Elanaz\'ın hangi boya kalemi kayıptı?', 'Turuncu', ['Kırmızı', 'Mavi', 'Turuncu', 'Yeşil'], 'Portakal ağacını boyayamadı çünkü bu renk yoktu.', 'ok-turuncu-eksik'),
      mc('ok-s3', 'Zeynep hangi sırrı söyledi?', 'Kırmızı ile sarı karışınca turuncu olur', ['Mavi ile yeşil karışınca mor olur', 'Kırmızı ile sarı karışınca turuncu olur', 'Sarı ile yeşil karışınca kahverengi olur', 'Turuncu kalem bulunur'], 'Zeynep iki rengi karıştırmayı önerdi.', 'ok-renk-karistirma'),
      mc('ok-s4', 'Öğretmen resmi ne yaptı?', 'Sınıf panosuna astı', ['Çöpe attı', 'Sınıf panosuna astı', 'Elanaz\'a geri verdi', 'Zeynep\'e verdi'], 'Resim çok beğenildi, hikâyenin sonuna bak.', 'ok-sinif-panosu'),
      mc('ok-s5', 'Hikâyenin ana fikri nedir?', 'Sorun olunca üzülmek yerine çözüm aramak gerekir', ['Boya kalemleri çok önemlidir', 'Okula geç kalmamak gerekir', 'Sorun olunca üzülmek yerine çözüm aramak gerekir', 'Turuncu en güzel renktir'], 'Elanaz sonunda ne öğrendi?', 'ok-cozum-arkadas'),
    ],
  },
  {
    id: 'elanaz-sinif-bahcesi-tohum',
    baslik: 'Elanaz ve Sınıf Bahçesindeki Tohum',
    sayfalar: [
      {
        metin: 'Bahar gelmişti. Öğretmen sınıf bahçesine tohum ekeceklerini söyledi. Elanaz\'ın gözleri parladı. Eve gidince annesinden domates tohumu istedi. Ertesi gün çantasının cebine koydu. Sınıf bahçesinde herkes sırayla toprağa küçük çukur açtı.',
        gorsel: ok('ok-tohum-ekme'),
      },
      {
        metin: 'Elanaz tohumunu dikkatlice ekti. Üstünü toprakla örttü. Her gün suladı. Bir hafta geçti, bir şey çıkmadı. Elanaz üzüldü. "Belki tohum bozuktur," dedi. Öğretmeni gülümsedi: "Sabırlı ol Elanaz. Tohumlar yerin altında büyüyor, biz göremiyoruz."',
        gorsel: ok('ok-filiz-alt'),
      },
      {
        metin: 'Onuncu gün Elanaz bahçeye koştu. Topraktan minik yeşil bir filiz çıkmıştı! "Bakın, benim tohumum!" diye bağırdı. Arkadaşları da sevindi. Elanaz her sabah filizi suladı. Yaz sonunda kırmızı domatesler yetişti. O gün Elanaz sabrın ve emeğin meyvesini öğrendi.',
        gorsel: ok('ok-domates-bitkisi'),
      },
    ],
    sorular: [
      mc('ok2-s1', 'Elanaz bahçeye ne ekti?', 'Domates tohumu', ['Elma çekirdeği', 'Domates tohumu', 'Gül tohumu', 'Mısır tanesi'], 'Annesinden ne istedi?', 'ok-domates-tohumu'),
      mc('ok2-s2', 'Tohum ilk hafta neden görünmedi?', 'Toprak altında büyüyordu', ['Tohum bozuktu', 'Su verilmedi', 'Toprak altında büyüyordu', 'Hava çok soğuktu'], 'Öğretmen ne açıkladı?', 'ok-filiz-alt'),
      mc('ok2-s3', 'Öğretmen Elanaz\'a ne dedi?', 'Sabırlı ol', ['Tohumu at', 'Sabırlı ol', 'Başkasının tohumunu al', 'Bahçeye gitme'], 'Elanaz üzülünce öğretmen ne dedi?', 'ok-ogretmen-konusma'),
      mc('ok2-s4', 'Onuncu gün ne oldu?', 'Yeşil filiz çıktı', ['Tohum çürüdü', 'Yağmur yağdı', 'Yeşil filiz çıktı', 'Domates oldu'], 'Elanaz ne gördü?', 'ok-yesil-filiz'),
      mc('ok2-s5', 'Hikâyenin ana fikri nedir?', 'Sabırlı olmak ve emek vermek gerekir', ['Tohum atmak zordur', 'Sabırlı olmak ve emek vermek gerekir', 'Bahçeye gitmemek gerekir', 'Domates sevilmez'], 'Elanaz sonunda ne öğrendi?', 'ok-domates-bitkisi'),
    ],
  },
  {
    id: 'elanaz-yagmurlu-piknik',
    baslik: 'Elanaz ve Yağmurlu Piknik',
    sayfalar: [
      {
        metin: 'Cumartesi sabahı güneş parlıyordu. Aile pikniğe gidecekti. Elanaz en sevdiği kırmızı elbiseni giydi. Annesi sandviçleri hazırladı, babası battaniyeyi arabaya koydu. Elanaz parka gitmek için sabırsızlanıyordu. "Bugün harika bir gün olacak!" dedi.',
        gorsel: ok('ok-gunesli-park'),
      },
      {
        metin: 'Parka vardıklarında gökyüzü karardı. Damla damla yağmur yağmaya başladı. "Ne yazık, piknik iptal," dedi baba. Elanaz çok üzüldü. Gözleri doldu. Annesi ona sarıldı. "Üzülme canım. Plan değişebilir. Eve dönüp salonda piknik yapabiliriz!"',
        gorsel: ok('ok-yagmur-aile'),
      },
      {
        metin: 'Eve geldiler. Annesi battaniyeyi salona serdi. Sandviçleri ortaya koydular. Baba mum yakıp ışıkları söndürdü. "İşte salon pikniğimiz!" dedi. Elanaz güldü. Yağmur sesi pencereden geliyordu. O gün Elanaz planlar değişse bile mutlu olmayı öğrendi.',
        gorsel: ok('ok-salon-piknik'),
      },
    ],
    sorular: [
      mc('ok3-s1', 'Aile nereye gitmek istiyordu?', 'Parka pikniğe', ['Alışverişe', 'Sinemaya', 'Parka pikniğe', 'Okula'], 'Cumartesi planı neydi?', 'ok-park'),
      mc('ok3-s2', 'Parkta ne oldu?', 'Yağmur yağdı', ['Kar yağdı', 'Güneş daha çok parladı', 'Yağmur yağdı', 'Park kapalıydı'], 'Gökyüzü ne yaptı?', 'ok-yagmur'),
      mc('ok3-s3', 'Annesi ne önerdi?', 'Salonda piknik yapmak', ['Pikniği iptal etmek', 'Dışarıda beklemek', 'Salonda piknik yapmak', 'Uyumak'], 'Annesi alternatif plan önerdi.', 'ok-battaniye'),
      mc('ok3-s4', 'Baba ne yaptı?', 'Mum yaktı', ['Televizyon açtı', 'Mum yaktı', 'Dışarı çıktı', 'Yemek pişirdi'], 'Salon pikniğinde baba ne yaptı?', 'ok-mum'),
      mc('ok3-s5', 'Hikâyenin ana fikri nedir?', 'Plan değişse bile mutlu olabiliriz', ['Yağmurdan korkmalıyız', 'Piknik yapılmaz', 'Plan değişse bile mutlu olabiliriz', 'Parka gitmemeliyiz'], 'Elanaz sonunda ne öğrendi?', 'ok-mutlu-piknik'),
    ],
  },
  {
    id: 'elanaz-kutuphane-gunu',
    baslik: 'Elanaz ve Kütüphane Günü',
    sayfalar: [
      {
        metin: 'Okul kütüphanesi haftası başlamıştı. Elanaz kütüphaneye ilk kez gidecekti. İçeri girince raflar dolu kitaplarla kaplıydı. Kütüphaneci teyze "Sessiz olalım, burada herkes okuyor," dedi. Elanaz fısıldayarak "Tamam," dedi.',
        gorsel: ok('ok-kutuphane-raflar'),
      },
      {
        metin: 'Elanaz hayvanlar hakkında kitap aradı. Bir rafın en üstünde güzel bir kitap gördü ama yetişemedi. Yanındaki Ali uzun boyuyla kitabı indirdi. "Bunu mu istiyorsun?" diye sordu. Elanaz başını salladı. Ali kitabı ona verdi.',
        gorsel: ok('ok-ali-kitap'),
      },
      {
        metin: 'Elanaz kitabı masaya koydu. Kediler ve köpekler hakkında okudu. Okurken zaman su gibi aktı. Kütüphane kapanmadan önce kitabı yerine koydu. Eve gidince annesine anlattı. "Yarın yine gideceğim!" dedi. O gün Elanaz kitapların dünyasını ve yardımlaşmayı öğrendi.',
        gorsel: ok('ok-elanaz-okuyor'),
      },
    ],
    sorular: [
      mc('ok4-s1', 'Elanaz kütüphanede ne aradı?', 'Hayvanlar hakkında kitap', ['Matematik kitabı', 'Hayvanlar hakkında kitap', 'Yemek kitabı', 'Harita'], 'Elanaz hangi konuda kitap istedi?', 'ok-hayvan-kitap'),
      mc('ok4-s2', 'Kitaba kim yardım etti?', 'Ali', ['Zeynep', 'Öğretmen', 'Ali', 'Kütüphaneci'], 'Uzun boylu arkadaş kimdi?', 'ok-ali-elanaz'),
      mc('ok4-s3', 'Kütüphaneci ne dedi?', 'Sessiz olalım', ['Koşun', 'Sessiz olalım', 'Yemek yiyin', 'Oyun oynayın'], 'Kütüphanede nasıl davranmalıyız?', 'ok-sessizlik'),
      mc('ok4-s4', 'Elanaz kitabı nereye koydu?', 'Yerine, rafa', ['Çöpe attı', 'Çantasına koydu', 'Yerine, rafa', 'Masada bıraktı'], 'Kütüphane kapanmadan önce ne yaptı?', 'ok-kitap-raf'),
      mc('ok4-s5', 'Hikâyenin ana fikri nedir?', 'Kitap okumak güzeldir, yardımlaşmak iyidir', ['Kütüphaneye gitmemeliyiz', 'Kitap okumak güzeldir, yardımlaşmak iyidir', 'Kitap verilmez', 'Sessiz olmak zordur'], 'Elanaz ne öğrendi?', 'ok-okuma-kosesi'),
    ],
  },
  {
    id: 'elanaz-bisiklet-ogreniyor',
    baslik: 'Elanaz Bisiklet Sürmeyi Öğreniyor',
    sayfalar: [
      {
        metin: 'Elanaz\'ın yeni bir bisikleti vardı. Dört tekerlekli küçük bisikletti. Artık büyük çocuklar gibi iki tekerlekli bisiklete binmek istiyordu. Babası destek tekerleklerini taktı. "Önce bunlarla alış, sonra çıkarırız," dedi.',
        gorsel: ok('ok-destek-bisiklet'),
      },
      {
        metin: 'İlk denemede Elanaz dengesini kaybetti ve düştü. Dizinin üstü acıdı. Ağlamak istedi ama pes etmedi. Baba yanına geldi. "Herkes düşerek öğrenir. Tekrar dene!" dedi. Elanaz ayağa kalktı. Bu sefer babası arkadan tuttu. Pedallara bastı, yavaş yavaş ilerledi.',
        gorsel: ok('ok-baba-tutuyor'),
      },
      {
        metin: 'Bir hafta sonra Elanaz tek başına sürebildi. Destek tekerleklerini çıkardılar. Parkta arkadaşlarının yanından geçti. Rüzgâr yüzüne vuruyordu. "Babacığım, başardım!" diye bağırdı. Baba alkışladı. O gün Elanaz düşse bile tekrar denemenin önemini öğrendi.',
        gorsel: ok('ok-basari-surus'),
      },
    ],
    sorular: [
      mc('ok5-s1', 'Elanaz ilk başta hangi bisikleti kullandı?', 'Destek tekerlekli bisiklet', ['İki tekerlekli bisiklet', 'Üç tekerlekli bisiklet', 'Destek tekerlekli bisiklet', 'Scooter'], 'Baba ne taktı?', 'ok-destek-bisiklet'),
      mc('ok5-s2', 'İlk denemede ne oldu?', 'Düştü', ['Uçtu', 'Düştü', 'Uyudu', 'Koştu'], 'Dizinin üstü acıdı.', 'ok-dusen-bisiklet'),
      mc('ok5-s3', 'Baba ne dedi?', 'Herkes düşerek öğrenir, tekrar dene', ['Bisiklete binme', 'Herkes düşerek öğrenir, tekrar dene', 'Yarın dene', 'Korkma ama bırak'], 'Baba cesaret verdi.', 'ok-baba-tutuyor'),
      mc('ok5-s4', 'Bir hafta sonra ne yapabildi?', 'Tek başına sürebildi', ['Hiç süremedi', 'Baba tutmadan süremedi', 'Tek başına sürebildi', 'Bisikleti sattı'], 'Destek tekerlekleri çıkarıldı.', 'ok-tek-basina'),
      mc('ok5-s5', 'Hikâyenin ana fikri nedir?', 'Düşsek bile tekrar denemek gerekir', ['Bisiklet tehlikelidir', 'Düşsek bile tekrar denemek gerekir', 'Destek tekerlekleri hep gerekir', 'Parka gitmemeliyiz'], 'Elanaz ne öğrendi?', 'ok-basari-surus'),
    ],
  },
];
