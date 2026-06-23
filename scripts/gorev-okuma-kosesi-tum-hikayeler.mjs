/** Okuma Köşesi — 55 hikâye (3 seviye: 18 + 18 + 19). */

const ok = (sahne) => ({ tur: 'okuma-kosesi', sahne });

function mc(id, soru, dogru, secenekler, ipucu, gorsel) {
  return { id, kazanimKodu: 'OKU.2.1', tip: 'coktanSecmeli', soru, dogruCevap: dogru, secenekler, ipucu, gorsel: ok(gorsel) };
}

const KONULAR = [
  { baslik: 'Kayıp Boya Kalemi', konu: 'renk karışımı', sahne: 'ok-boya-kalemleri', ders: 'resim' },
  { baslik: 'Sınıf Bahçesindeki Tohum', konu: 'tohum ekmek', sahne: 'ok-tohum-ekme', ders: 'fen' },
  { baslik: 'Yağmurlu Piknik', konu: 'plan değişikliği', sahne: 'ok-gunesli-park', ders: 'aile' },
  { baslik: 'Kütüphane Günü', konu: 'kitap okuma', sahne: 'ok-kutuphane-raflar', ders: 'okuma' },
  { baslik: 'Bisiklet Öğreniyor', konu: 'tekrar deneme', sahne: 'ok-destek-bisiklet', ders: 'spor' },
  { baslik: 'Kayıp Anahtar', konu: 'düzenli olmak', sahne: 'ok-kutuphane-raflar', ders: 'okul' },
  { baslik: 'Yeni Arkadaş', konu: 'arkadaşlık', sahne: 'ok-cozum-arkadas', ders: 'sosyal' },
  { baslik: 'Sınıf Görevlisi', konu: 'sorumluluk', sahne: 'ok-sinif-panosu', ders: 'okul' },
  { baslik: 'Doğum Günü Sürprizi', konu: 'paylaşmak', sahne: 'ok-mutlu-piknik', ders: 'aile' },
  { baslik: 'Korkulan Köpek', konu: 'cesaret', sahne: 'ok-hayvan-kitap', ders: 'hayvanlar' },
  { baslik: 'İlk Diş', konu: 'büyümek', sahne: 'ok-ogretmen-konusma', ders: 'sağlık' },
  { baslik: 'Pazar Alışverişi', konu: 'sayma', sahne: 'ok-domates-bitkisi', ders: 'matematik' },
  { baslik: 'Kış Manzarası', konu: 'mevsimler', sahne: 'ok-yagmur', ders: 'fen' },
  { baslik: 'Resim Yarışması', konu: 'yaratıcılık', sahne: 'ok-pano-resim', ders: 'resim' },
  { baslik: 'Kayıp Çorap', konu: 'dikkat', sahne: 'ok-battaniye', ders: 'ev' },
  { baslik: 'Büyükanne Ziyareti', konu: 'aile sevgisi', sahne: 'ok-mutlu-piknik', ders: 'aile' },
  { baslik: 'İlk Yardım', konu: 'yardımseverlik', sahne: 'ok-baba-tutuyor', ders: 'sağlık' },
  { baslik: 'Sessiz Kütüphane', konu: 'kurallar', sahne: 'ok-sessizlik', ders: 'okuma' },
  { baslik: 'Park Macerası', konu: 'doğa', sahne: 'ok-park', ders: 'çevre' },
  { baslik: 'Yeni Kardeş', konu: 'paylaşmak', sahne: 'ok-cozum-arkadas', ders: 'aile' },
  { baslik: 'Futbol Maçı', konu: 'takım çalışması', sahne: 'ok-basari-surus', ders: 'spor' },
  { baslik: 'Balık Tutma', konu: 'sabır', sahne: 'ok-filiz-alt', ders: 'aile' },
  { baslik: 'Kamp Gezisi', konu: 'doğa sevgisi', sahne: 'ok-gunesli-park', ders: 'çevre' },
  { baslik: 'Müze Gezisi', konu: 'tarih', sahne: 'ok-kutuphane-raflar', ders: 'kültür' },
  { baslik: 'Yarış Atleti', konu: 'azim', sahne: 'ok-tek-basina', ders: 'spor' },
  { baslik: 'Sihirli Kalem', konu: 'hayal gücü', sahne: 'ok-resim-defteri', ders: 'resim' },
  { baslik: 'Kedi Dostu', konu: 'hayvan sevgisi', sahne: 'ok-hayvan-kitap', ders: 'hayvanlar' },
  { baslik: 'Kar Yağışı', konu: 'mevsim', sahne: 'ok-yagmur', ders: 'fen' },
  { baslik: 'Okul Tiyatrosu', konu: 'sahne sanatı', sahne: 'ok-sinif-panosu', ders: 'sanat' },
  { baslik: 'Deniz Kenarı', konu: 'tatil', sahne: 'ok-park', ders: 'aile' },
  { baslik: 'Yardım Kampanyası', konu: 'yardımlaşma', sahne: 'ok-ali-elanaz', ders: 'toplum' },
  { baslik: 'Zaman Makinesi', konu: 'hayal', sahne: 'ok-elanaz-okuyor', ders: 'hikâye' },
  { baslik: 'Gizli Hazine', konu: 'keşif', sahne: 'ok-domates-tohumu', ders: 'macera' },
  { baslik: 'Uzay Yolculuğu', konu: 'bilim', sahne: 'ok-yildiz', ders: 'fen' },
  { baslik: 'Orman Yangını', konu: 'çevre koruma', sahne: 'ok-tohum-ekme', ders: 'çevre' },
  { baslik: 'Köy Ziyareti', konu: 'köy hayatı', sahne: 'ok-domates-bitkisi', ders: 'toplum' },
  { baslik: 'Robot Arkadaş', konu: 'teknoloji', sahne: 'ok-okuma-kosesi', ders: 'bilim' },
  { baslik: 'Göl Kenarı', konu: 'doğa', sahne: 'ok-park', ders: 'çevre' },
  { baslik: 'Büyük Proje', konu: 'planlama', sahne: 'ok-pano-resim', ders: 'okul' },
  { baslik: 'Sihirli Orman', konu: 'macera', sahne: 'ok-yesil-filiz', ders: 'hikâye' },
  { baslik: 'Zaman Yolculuğu', konu: 'tarih', sahne: 'ok-kutuphane-raflar', ders: 'kültür' },
  { baslik: 'Denizaltı', konu: 'keşif', sahne: 'ok-filiz-alt', ders: 'fen' },
  { baslik: 'Dağ Tırmanışı', konu: 'cesaret', sahne: 'ok-basari-surus', ders: 'spor' },
  { baslik: 'Gizemli Ada', konu: 'macera', sahne: 'ok-gunesli-park', ders: 'hikâye' },
  { baslik: 'Bilim Fuarı', konu: 'deney', sahne: 'ok-ogretmen-konusma', ders: 'fen' },
  { baslik: 'Kış Sporları', konu: 'spor', sahne: 'ok-destek-bisiklet', ders: 'spor' },
  { baslik: 'Yıldız Gözlemi', konu: 'uzay', sahne: 'ok-mum', ders: 'fen' },
  { baslik: 'El Sanatları', konu: 'yaratıcılık', sahne: 'ok-renk-karistirma', ders: 'sanat' },
  { baslik: 'Çevre Gönüllüsü', konu: 'çevre', sahne: 'ok-tohum-ekme', ders: 'çevre' },
  { baslik: 'Kitap Yazarı', konu: 'yazma', sahne: 'ok-elanaz-okuyor', ders: 'okuma' },
  { baslik: 'Müzik Grubu', konu: 'müzik', sahne: 'ok-salon-piknik', ders: 'sanat' },
  { baslik: 'Arkeoloji', konu: 'tarih', sahne: 'ok-kitap-raf', ders: 'kültür' },
  { baslik: 'Geleceğin Şehri', konu: 'hayal', sahne: 'ok-okuma-kosesi', ders: 'bilim' },
  { baslik: 'Büyük Keşif', konu: 'merak', sahne: 'ok-domates-bitkisi', ders: 'fen' },
  { baslik: 'Son Macera', konu: 'arkadaşlık', sahne: 'ok-mutlu-piknik', ders: 'hikâye' },
];

function slugify(baslik, i) {
  const map = {
    'Kayıp Boya Kalemi': 'elanaz-kayip-boya-kalemi',
    'Sınıf Bahçesindeki Tohum': 'elanaz-sinif-bahcesi-tohum',
    'Yağmurlu Piknik': 'elanaz-yagmurlu-piknik',
    'Kütüphane Günü': 'elanaz-kutuphane-gunu',
    'Bisiklet Öğreniyor': 'elanaz-bisiklet-ogreniyor',
  };
  if (map[baslik]) return map[baslik];
  return `elanaz-hikaye-${String(i + 1).padStart(2, '0')}-${baslik.toLowerCase().replace(/[^a-z0-9ğüşıöçĞÜŞİÖÇ]+/gi, '-').replace(/^-|-$/g, '').slice(0, 30)}`;
}

function hikayeUret(k, i, seviye) {
  const id = slugify(k.baslik, i);
  const sayfaUzunluk = seviye === 1 ? 'kısa' : seviye === 2 ? 'orta' : 'uzun';
  const sayfa1 = seviye === 1
    ? `Elanaz ${k.ders} ile ilgili bir gün yaşadı. ${k.konu} hakkında öğrendi. Arkadaşı Zeynep yanındaydı.`
    : seviye === 2
      ? `Elanaz o sabah okula gitti. ${k.ders} dersinde ${k.konu} konusunu işlediler. Öğretmeni "Dikkatle dinleyin" dedi. Elanaz not aldı.`
      : `Elanaz hafta sonu ailesiyle birlikte ${k.konu} deneyimi yaşamak istedi. Önce biraz endişelendi. Sonra cesaretini topladı. ${k.ders} konusunda yeni şeyler öğrenecekti. Yanında en iyi arkadaşı Zeynep de vardı.`;

  const sayfa2 = seviye === 1
    ? `Bir sorun çıktı ama Elanaz üzülmedi. Zeynep yardım etti. Birlikte çözüm buldular.`
    : seviye === 2
      ? `Ders sırasında beklenmedik bir durum oldu. Elanaz önce şaşırdı. Sonra düşündü ve doğru kararı verdi. Arkadaşları da ona destek oldu.`
      : `Yolculuk sırasında zorluklarla karşılaştılar. Hava değişti, plan değişti. Elanaz sabırlı oldu. Ailesi ve öğretmeni ona güvendi. Her adımda ${k.konu} ile ilgili yeni bir şey keşfetti.`;

  const sayfa3 = seviye === 1
    ? `Sonunda her şey yoluna girdi. Elanaz mutlu oldu. ${k.konu} hakkında bir şey öğrendi.`
    : seviye === 2
      ? `Günün sonunda Elanaz başardı. Öğretmeni onu tebrik etti. Elanaz ${k.konu} konusunda artık daha bilgiliydi ve gurur duyuyordu.`
      : `Macera bittiğinde Elanaz çok şey öğrenmişti. ${k.konu} ona sabır, cesaret ve paylaşmanın önemini hatırlattı. Eve dönerken annesine anlattı: "Yarın yine deneyeceğim!"`;

  const sorular = [
    mc(`${id}-s1`, 'Elanaz hikâyede ne öğrendi?', `${k.konu.charAt(0).toUpperCase() + k.konu.slice(1)}`, ['Hiçbir şey', `${k.konu.charAt(0).toUpperCase() + k.konu.slice(1)}`, 'Korkmak', 'Kaçmak'], 'Hikâyenin konusuna bak.', k.sahne),
    mc(`${id}-s2`, 'Elanaz\'a kim yardım etti?', 'Zeynep', ['Ali', 'Zeynep', 'Kimse', 'Öğretmen'], 'Arkadaşı kimdi?', 'ok-cozum-arkadas'),
    mc(`${id}-s3`, 'Sorun çıkınca Elanaz ne yaptı?', 'Çözüm aradı', ['Ağladı', 'Çözüm aradı', 'Pes etti', 'Kaçtı'], 'Elanaz ne yaptı?', k.sahne),
    mc(`${id}-s4`, 'Hikâyenin sonunda Elanaz nasıl hissetti?', 'Mutlu', ['Kızgın', 'Mutlu', 'Korkmuş', 'Üzgün'], 'Son sayfaya bak.', 'ok-mutlu-piknik'),
    mc(`${id}-s5`, 'Hikâyenin ana fikri nedir?', 'Sabırlı ve cesur olmak gerekir', ['Vazgeçmek gerekir', 'Sabırlı ve cesur olmak gerekir', 'Yardım etmemek gerekir', 'Korkmak gerekir'], 'Elanaz ne öğrendi?', 'ok-elanaz-okuyor'),
  ];

  return {
    id,
    baslik: `Elanaz ve ${k.baslik}`,
    seviye,
    sayfalar: [
      { metin: sayfa1, gorsel: ok(k.sahne) },
      { metin: sayfa2, gorsel: ok(seviye === 1 ? 'ok-cozum-arkadas' : 'ok-ogretmen-konusma') },
      { metin: sayfa3, gorsel: ok(seviye === 3 ? 'ok-basari-surus' : 'ok-mutlu-piknik') },
    ],
    sorular,
  };
}

/** Mevcut 5 detaylı hikâye + 50 üretilmiş hikâye */
import { okumaKosesiHikayeleri as mevcut5 } from './gorev-okuma-kosesi-hikayeler.mjs';

const uretilen = KONULAR.map((k, i) => {
  const seviye = i < 18 ? 1 : i < 36 ? 2 : 3;
  return hikayeUret(k, i, seviye);
}).filter((h) => !mevcut5.some((m) => m.id === h.id));

export const okumaKosesiTumHikayeler = [
  ...mevcut5.map((h, i) => ({ ...h, seviye: i < 2 ? 1 : i < 4 ? 2 : 3 })),
  ...uretilen,
];

export const okumaKosesiHikayeleri = okumaKosesiTumHikayeler;
