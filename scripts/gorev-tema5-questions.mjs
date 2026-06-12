/** GOREV-TEMA5 — Tablo Okuma, Grafik Okuma, Veri Toplama (150 görselli soru). */

const KAZANIM = {
  TABLO: 'MAT.2.5.1',
  GRAFIK: 'MAT.2.5.2',
  VERI: 'MAT.2.5.3',
};

const TABLOLAR = {
  "tablo1-meyve": {
    baslik: "Sınıftaki Meyveler",
    sutunlar: [
      "Elma",
      "Armut",
      "Muz",
      "Üzüm"
    ],
    satirlar: [
      {
        etiket: "Adet",
        degerler: [
          8,
          5,
          3,
          6
        ]
      }
    ]
  },
  "tablo2-hava": {
    baslik: "Haftalık Hava Durumu",
    sutunlar: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma"
    ],
    satirlar: [
      {
        etiket: "Hava",
        degerler: [
          "Güneşli",
          "Bulutlu",
          "Yağmurlu",
          "Güneşli",
          "Bulutlu"
        ]
      }
    ]
  },
  "tablo3-kitap": {
    baslik: "Öğrenci Kitap Sayıları",
    sutunlar: [
      "Mehmet",
      "Ayşe",
      "Ali",
      "Fatma",
      "Berk"
    ],
    satirlar: [
      {
        etiket: "Kitap",
        degerler: [
          6,
          9,
          4,
          7,
          5
        ]
      }
    ]
  },
  "tablo4-renk": {
    baslik: "Renk Tercihleri",
    sutunlar: [
      "Mavi",
      "Kırmızı",
      "Sarı",
      "Yeşil"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          12,
          8,
          5,
          10
        ]
      }
    ]
  },
  "tablo5-spor": {
    baslik: "Spor Yapan Öğrenciler",
    sutunlar: [
      "Futbol",
      "Yüzme",
      "Basketbol",
      "Tenis"
    ],
    satirlar: [
      {
        etiket: "Öğrenci",
        degerler: [
          15,
          10,
          8,
          7
        ]
      }
    ]
  },
  "test1-hayvan": {
    baslik: "Hayvan Sayıları",
    sutunlar: [
      "Kedi",
      "Köpek",
      "Kuş",
      "Tavşan"
    ],
    satirlar: [
      {
        etiket: "Adet",
        degerler: [
          7,
          12,
          5,
          9
        ]
      }
    ]
  },
  "test2-ekmek": {
    baslik: "Günlük Satılan Ekmek",
    sutunlar: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma"
    ],
    satirlar: [
      {
        etiket: "Ekmek",
        degerler: [
          20,
          15,
          18,
          22,
          25
        ]
      }
    ]
  },
  "test3-ders": {
    baslik: "Öğrencilerin Favori Dersleri",
    sutunlar: [
      "Matematik",
      "Türkçe",
      "Fen",
      "Müzik"
    ],
    satirlar: [
      {
        etiket: "Öğrenci",
        degerler: [
          14,
          10,
          8,
          13
        ]
      }
    ]
  },
  "test4-meyve": {
    baslik: "Meyve Satışları",
    sutunlar: [
      "Elma",
      "Armut",
      "Muz",
      "Kiraz"
    ],
    satirlar: [
      {
        etiket: "Kg",
        degerler: [
          18,
          12,
          9,
          15
        ]
      }
    ]
  },
  "test5-nobet": {
    baslik: "Sınıf Temizlik Nöbeti",
    sutunlar: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma"
    ],
    satirlar: [
      {
        etiket: "Öğrenci",
        degerler: [
          "Mehmet",
          "Ayşe",
          "Ali",
          "Fatma",
          "Berk"
        ]
      }
    ]
  },
  "vt-renk-oy": {
    baslik: "Renk Oyları",
    sutunlar: [
      "Kırmızı",
      "Mavi",
      "Sarı"
    ],
    satirlar: [
      {
        etiket: "Oy",
        degerler: [
          8,
          12,
          5
        ]
      }
    ]
  },
  "vt-hayvan-tercih": {
    baslik: "Hayvan Tercihleri",
    sutunlar: [
      "Kedi",
      "Köpek",
      "Kuş"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          7,
          12,
          5
        ]
      }
    ]
  },
  "vt-meyve-3": {
    baslik: "Meyve Sayıları",
    sutunlar: [
      "Elma",
      "Armut",
      "Muz"
    ],
    satirlar: [
      {
        etiket: "Adet",
        degerler: [
          6,
          4,
          9
        ]
      }
    ]
  },
  "vt-hava-gun": {
    baslik: "Hava Durumu",
    sutunlar: [
      "Yağmur",
      "Güneşli",
      "Bulutlu"
    ],
    satirlar: [
      {
        etiket: "Gün",
        degerler: [
          3,
          4,
          2
        ]
      }
    ]
  },
  "vt-spor-anket": {
    baslik: "Spor Anketi",
    sutunlar: [
      "Futbol",
      "Yüzme",
      "Koşu"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          15,
          8,
          12
        ]
      }
    ]
  },
  "vt-kitap-tur": {
    baslik: "Kitap Türleri",
    sutunlar: [
      "Masal",
      "Bilim",
      "Şiir"
    ],
    satirlar: [
      {
        etiket: "Adet",
        degerler: [
          8,
          6,
          4
        ]
      }
    ]
  },
  "vt-mevsim-dogum": {
    baslik: "Doğum Mevsimleri",
    sutunlar: [
      "Kış",
      "İlkbahar",
      "Yaz",
      "Sonbahar"
    ],
    satirlar: [
      {
        etiket: "Öğrenci",
        degerler: [
          5,
          8,
          10,
          7
        ]
      }
    ]
  },
  "vt-erkek-kiz": {
    baslik: "Anket Katılımcıları",
    sutunlar: [
      "Erkek",
      "Kız"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          16,
          14
        ]
      }
    ]
  },
  "vt-elma-armut": {
    baslik: "Meyve Sayımı",
    sutunlar: [
      "Elma",
      "Armut"
    ],
    satirlar: [
      {
        etiket: "Adet",
        degerler: [
          5,
          3
        ]
      }
    ]
  },
  "vt-meyve-anket": {
    baslik: "Favori Meyve Anketi",
    sutunlar: [
      "Elma",
      "Muz",
      "Çilek"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          4,
          3,
          3
        ]
      }
    ]
  },
  "vt-kutuphane": {
    baslik: "Sınıf Kütüphanesi",
    sutunlar: [
      "Masal",
      "Bilim",
      "Şiir",
      "Roman"
    ],
    satirlar: [
      {
        etiket: "Kitap",
        degerler: [
          12,
          8,
          5,
          10
        ]
      }
    ]
  },
  "vt-favori-meyve": {
    baslik: "Favori Meyve Anketi",
    sutunlar: [
      "Elma",
      "Muz",
      "Çilek"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          8,
          5,
          12
        ]
      }
    ]
  },
  "vt-renk-anket-20": {
    baslik: "Renk Anketi",
    sutunlar: [
      "Kırmızı",
      "Mavi",
      "Sarı"
    ],
    satirlar: [
      {
        etiket: "Oy",
        degerler: [
          7,
          9,
          4
        ]
      }
    ]
  },
  "vt-hatali-spor": {
    baslik: "Spor Anketi",
    sutunlar: [
      "Futbol",
      "Yüzme"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          10,
          8
        ]
      }
    ]
  },
  "vt-hatali-meyve-toplam": {
    baslik: "Meyve Anketi",
    sutunlar: [
      "Elma",
      "Armut",
      "Muz",
      "Toplam"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          6,
          4,
          5,
          16
        ]
      }
    ]
  },
  "vt-haftalik-hava": {
    baslik: "Haftalık Hava",
    sutunlar: [
      "Güneşli",
      "Bulutlu",
      "Yağmurlu"
    ],
    satirlar: [
      {
        etiket: "Gün",
        degerler: [
          3,
          2,
          2
        ]
      }
    ]
  },
  "vt-spor-anket2": {
    baslik: "Spor Anketi",
    sutunlar: [
      "Futbol",
      "Yüzme",
      "Basketbol"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          18,
          12,
          9
        ]
      }
    ]
  },
  "vt-hayvan-30": {
    baslik: "Hayvan Anketi",
    sutunlar: [
      "Kedi",
      "Köpek",
      "Kuş"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          12,
          10,
          8
        ]
      }
    ]
  },
  "vt-mevsim-anket": {
    baslik: "Mevsim Doğum Anketi",
    sutunlar: [
      "Kış",
      "İlkbahar",
      "Yaz",
      "Sonbahar"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          5,
          9,
          11,
          7
        ]
      }
    ]
  },
  "vt-hatali-tablo": {
    baslik: "Hatalı Tablo",
    sutunlar: [
      "Değer 1",
      "Değer 2",
      "Değer 3",
      "Toplam"
    ],
    satirlar: [
      {
        etiket: "Kişi",
        degerler: [
          3,
          5,
          7,
          15
        ]
      }
    ]
  }
};

const GRAFIKLER = {
  "graf1-kalem": {
    baslik: "Sınıftaki Renkli Kalemler",
    kategoriler: [
      "Mavi",
      "Kırmızı",
      "Sarı",
      "Yeşil"
    ],
    degerler: [
      8,
      5,
      3,
      7
    ]
  },
  "graf2-kitap": {
    baslik: "Haftalık Satılan Kitap",
    kategoriler: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma"
    ],
    degerler: [
      10,
      15,
      8,
      12,
      20
    ]
  },
  "graf3-meyve": {
    baslik: "Öğrencilerin Favori Meyveleri",
    kategoriler: [
      "Elma",
      "Muz",
      "Çilek",
      "Armut"
    ],
    degerler: [
      9,
      6,
      12,
      4
    ]
  },
  "graf4-spor": {
    baslik: "Spor Kulübü Üyeleri",
    kategoriler: [
      "Futbol",
      "Yüzme",
      "Basketbol",
      "Tenis"
    ],
    degerler: [
      18,
      12,
      9,
      6
    ]
  },
  "graf5-sicaklik": {
    baslik: "Günlük Hava Sıcaklığı (°C)",
    kategoriler: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma"
    ],
    degerler: [
      20,
      25,
      18,
      22,
      28
    ]
  },
  "test1-kitap": {
    baslik: "Sınıf Kütüphanesi Kitap Türleri",
    kategoriler: [
      "Masal",
      "Bilim",
      "Şiir",
      "Roman"
    ],
    degerler: [
      15,
      8,
      5,
      12
    ]
  },
  "test2-oyuncak": {
    baslik: "Çocukların Tercih Ettiği Oyuncaklar",
    kategoriler: [
      "Araba",
      "Bebek",
      "Top",
      "Yapboz"
    ],
    degerler: [
      10,
      14,
      8,
      7
    ]
  },
  "test3-sebze": {
    baslik: "Pazarda Satılan Sebzeler (kg)",
    kategoriler: [
      "Domates",
      "Biber",
      "Patlıcan",
      "Salatalık"
    ],
    degerler: [
      20,
      12,
      8,
      16
    ]
  },
  "test4-dogum": {
    baslik: "Sınıf Doğum Ayları",
    kategoriler: [
      "Kış",
      "İlkbahar",
      "Yaz",
      "Sonbahar"
    ],
    degerler: [
      6,
      9,
      12,
      8
    ]
  },
  "test5-yagis": {
    baslik: "Haftalık Yağış (mm)",
    kategoriler: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma"
    ],
    degerler: [
      5,
      0,
      15,
      10,
      8
    ]
  },
  "vt-grafik-esit": {
    baslik: "Eşit Dağılımlı Anket",
    kategoriler: [
      "A",
      "B",
      "C",
      "D"
    ],
    degerler: [
      10,
      10,
      10,
      10
    ]
  }
};

function tab(id, vurgu = []) {
  const t = TABLOLAR[id];
  return { tur: 'veri', mod: 'tablo', ...t, vurgu };
}
function graf(id, vurgu = []) {
  const g = GRAFIKLER[id];
  return { tur: 'veri', mod: 'grafik', ...g, vurgu };
}
function anl(sahne) {
  return { tur: 'veri', mod: 'anlatim', sahne };
}
function anket(sahne) {
  return { tur: 'veri', mod: 'anket', sahne };
}
function liste(...degerler) {
  return { tur: 'veri', mod: 'liste', liste: degerler };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function tabloOkumaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TABLO,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("to-a1", "Sınıfta kaç elma var?", "8", "", { gorsel: tab('tablo1-meyve', ['Elma']) });
  ekle("to-a2", "En az hangi meyve var?", "Muz", "", { gorsel: tab('tablo1-meyve', ['Muz']) });
  ekle("to-a3", "En çok hangi meyve var?", "Elma", "", { gorsel: tab('tablo1-meyve', ['Elma']) });
  ekle("to-a4", "Armut ve muz toplamı kaçtır?", "8", "", { gorsel: tab('tablo1-meyve', ['Armut', 'Muz']) });
  ekle("to-a5", "Elma ile üzüm farkı kaçtır?", "2", "", { gorsel: tab('tablo1-meyve', ['Elma', 'Üzüm']) });
  ekle("to-a6", "Çarşamba günü hava nasıl?", "Yağmurlu", "", { gorsel: tab('tablo2-hava', ['Çarşamba']) });
  ekle("to-a7", "Kaç gün güneşli?", "2", "", { gorsel: tab('tablo2-hava', ['Pazartesi', 'Perşembe']) });
  ekle("to-a8", "Kaç gün bulutlu?", "2", "", { gorsel: tab('tablo2-hava', ['Salı', 'Cuma']) });
  ekle("to-a9", "Perşembe ve cuma hava nasıl?", "Güneşli, Bulutlu", "", { gorsel: tab('tablo2-hava', ['Perşembe', 'Cuma']), cevapTipi: "metin" });
  ekle("to-a10", "Yağmurlu gün sayısı kaçtır?", "1", "", { gorsel: tab('tablo2-hava', ['Çarşamba']) });
  ekle("to-a11", "Ayşe kaç kitap okudu?", "9", "", { gorsel: tab('tablo3-kitap', ['Ayşe']) });
  ekle("to-a12", "En az kitap okuyan kim?", "Ali", "", { gorsel: tab('tablo3-kitap', ['Ali']) });
  ekle("to-a13", "En çok kitap okuyan kim?", "Ayşe", "", { gorsel: tab('tablo3-kitap', ['Ayşe']) });
  ekle("to-a14", "Mehmet ve Ali toplamı kaç?", "10", "", { gorsel: tab('tablo3-kitap', ['Mehmet', 'Ali']) });
  ekle("to-a15", "Fatma Berk'ten kaç fazla okudu?", "2", "", { gorsel: tab('tablo3-kitap', ['Fatma', 'Berk']) });
  ekle("to-a16", "Kaç kişi mavi seviyor?", "12", "", { gorsel: tab('tablo4-renk', ['Mavi']) });
  ekle("to-a17", "En az tercih edilen renk hangisi?", "Sarı", "", { gorsel: tab('tablo4-renk', ['Sarı']) });
  ekle("to-a18", "Mavi ve yeşil toplamı kaçtır?", "22", "", { gorsel: tab('tablo4-renk', ['Mavi', 'Yeşil']) });
  ekle("to-a19", "Kırmızı sarıdan kaç fazladır?", "3", "", { gorsel: tab('tablo4-renk', ['Kırmızı', 'Sarı']) });
  ekle("to-a20", "Toplam kaç kişi ankete katıldı?", "35", "", { gorsel: tab('tablo4-renk', [0, 1, 2, 3]) });
  ekle("to-a21", "En popüler spor hangisi?", "Futbol", "", { gorsel: tab('tablo5-spor', ['Futbol']) });
  ekle("to-a22", "Yüzme ve basketbol toplamı kaç?", "18", "", { gorsel: tab('tablo5-spor', ['Yüzme', 'Basketbol']) });
  ekle("to-a23", "En az tercih edilen spor?", "Tenis", "", { gorsel: tab('tablo5-spor', ['Tenis']) });
  ekle("to-a24", "Futbol tenisten kaç fazladır?", "8", "", { gorsel: tab('tablo5-spor', ['Futbol', 'Tenis']) });
  ekle("to-a25", "Toplam kaç öğrenci spor yapıyor?", "40", "", { gorsel: tab('tablo5-spor', [0, 1, 2, 3]) });

  return sorular;
}

function tabloOkumaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.TABLO,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("to-t1", "En çok hangi hayvan var?", "Köpek", ["Kedi","Köpek","Kuş","Tavşan"], "", { gorsel: tab('test1-hayvan', ['Köpek']) });
  ekle("to-t2", "Kedi ve kuş toplamı kaçtır?", "13", ["10","13","12","11"], "", { gorsel: tab('test1-hayvan', ['Kedi', 'Kuş']) });
  ekle("to-t3", "En az hangi hayvan var?", "Kuş", ["Kedi","Köpek","Kuş","Tavşan"], "", { gorsel: tab('test1-hayvan', ['Kuş']) });
  ekle("to-t4", "Köpek tavşandan kaç fazladır?", "3", ["2","4","3","5"], "", { gorsel: tab('test1-hayvan', ['Köpek', 'Tavşan']) });
  ekle("to-t5", "Toplam kaç hayvan var?", "33", ["31","35","33","30"], "", { gorsel: tab('test1-hayvan', [0, 1, 2, 3]) });
  ekle("to-t6", "En çok ekmek hangi gün satıldı?", "Cuma", ["Pazartesi","Salı","Perşembe","Cuma"], "", { gorsel: tab('test2-ekmek', ['Cuma']) });
  ekle("to-t7", "Pazartesi ve salı toplamı kaçtır?", "35", ["33","37","35","32"], "", { gorsel: tab('test2-ekmek', ['Pazartesi', 'Salı']) });
  ekle("to-t8", "En az ekmek hangi gün satıldı?", "Salı", ["Pazartesi","Salı","Çarşamba","Perşembe"], "", { gorsel: tab('test2-ekmek', ['Salı']) });
  ekle("to-t9", "🎭 Çarşamba ile perşembe farkı kaçtır?", "4", ["2","6","4","3"], "22 - 18 = ?", { gorsel: tab('test2-ekmek', ['Çarşamba', 'Perşembe']), sasirtma: true });
  ekle("to-t10", "Beş günde toplam kaç ekmek satıldı?", "100", ["95","105","100","98"], "", { gorsel: tab('test2-ekmek', [0, 1, 2, 3, 4]) });
  ekle("to-t11", "En çok sevilen ders hangisi?", "Matematik", ["Türkçe","Matematik","Fen","Müzik"], "", { gorsel: tab('test3-ders', ['Matematik']) });
  ekle("to-t12", "Fen ile müzik toplamı kaçtır?", "21", ["19","23","21","20"], "", { gorsel: tab('test3-ders', ['Fen', 'Müzik']) });
  ekle("to-t13", "🎭 Matematik türkçeden kaç fazla sevilmiştir?", "4", ["3","5","4","6"], "14 - 10 = ?", { gorsel: tab('test3-ders', ['Matematik', 'Türkçe']), sasirtma: true });
  ekle("to-t14", "En az sevilen ders hangisi?", "Fen", ["Matematik","Türkçe","Fen","Müzik"], "", { gorsel: tab('test3-ders', ['Fen']) });
  ekle("to-t15", "Toplam kaç öğrenci ankete katıldı?", "45", ["43","47","45","44"], "", { gorsel: tab('test3-ders', [0, 1, 2, 3]) });
  ekle("to-t16", "En çok hangi meyve satıldı?", "Elma", ["Armut","Muz","Elma","Kiraz"], "", { gorsel: tab('test4-meyve', ['Elma']) });
  ekle("to-t17", "🎭 Muz ve armut toplamı elma satışından fazla mı?", "Evet", ["Evet","Hayır","Eşit","Belli değil"], "9 + 12 = 21, 21 > 18", { gorsel: tab('test4-meyve', ['Muz', 'Armut', 'Elma']), sasirtma: true });
  ekle("to-t18", "Kiraz ile muz farkı kaçtır?", "6", ["4","8","6","5"], "", { gorsel: tab('test4-meyve', ['Kiraz', 'Muz']) });
  ekle("to-t19", "Toplam kaç kg meyve satıldı?", "54", ["52","58","54","56"], "", { gorsel: tab('test4-meyve', [0, 1, 2, 3]) });
  ekle("to-t20", "🎭 Elma satışı hangi iki meyvenin toplamına eşittir?", "Hiçbiri", ["Armut + Kiraz","Muz + Kiraz","Muz + Armut","Hiçbiri"], "Hiçbir ikili toplam 18 etmez", { gorsel: tab('test4-meyve', [0, 1, 2, 3]), sasirtma: true });
  ekle("to-t21", "Çarşamba günü kim nöbetçi?", "Ali", ["Ayşe","Mehmet","Ali","Fatma"], "", { gorsel: tab('test5-nobet', ['Çarşamba']) });
  ekle("to-t22", "Fatma hangi gün nöbetçi?", "Perşembe", ["Salı","Çarşamba","Perşembe","Cuma"], "", { gorsel: tab('test5-nobet', ['Fatma']) });
  ekle("to-t23", "🎭 Haftanın ilk nöbetçisi kim?", "Mehmet", ["Ali","Ayşe","Mehmet","Berk"], "", { gorsel: tab('test5-nobet', ['Pazartesi']), sasirtma: true });
  ekle("to-t24", "Berk hangi gün nöbetçi?", "Cuma", ["Perşembe","Salı","Cuma","Pazartesi"], "", { gorsel: tab('test5-nobet', ['Berk']) });
  ekle("to-t25", "🎭 Salı nöbetçisi ile perşembe nöbetçisi yer değiştirse, perşembe kim nöbet tutar?", "Ayşe", ["Ali","Fatma","Ayşe","Mehmet"], "Salı = Ayşe, Perşembe = Fatma → yer değiştirince Perşembe = Ayşe", { gorsel: tab('test5-nobet', ['Salı', 'Perşembe']), sasirtma: true });

  return sorular;
}

function grafikOkumaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.GRAFIK,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("gr-a1", "Kaç tane mavi kalem var?", "8", "", { gorsel: graf('graf1-kalem', ['Mavi']) });
  ekle("gr-a2", "En az hangi renk kalem var?", "Sarı", "", { gorsel: graf('graf1-kalem', ['Sarı']) });
  ekle("gr-a3", "En çok hangi renk kalem var?", "Mavi", "", { gorsel: graf('graf1-kalem', ['Mavi']) });
  ekle("gr-a4", "Kırmızı ve sarı toplamı kaçtır?", "8", "", { gorsel: graf('graf1-kalem', ['Kırmızı', 'Sarı']) });
  ekle("gr-a5", "Mavi yeşilden kaç fazladır?", "1", "", { gorsel: graf('graf1-kalem', ['Mavi', 'Yeşil']) });
  ekle("gr-a6", "En çok kitap hangi gün satıldı?", "Cuma", "", { gorsel: graf('graf2-kitap', ['Cuma']) });
  ekle("gr-a7", "En az kitap hangi gün satıldı?", "Çarşamba", "", { gorsel: graf('graf2-kitap', ['Çarşamba']) });
  ekle("gr-a8", "Pazartesi ve salı toplamı kaç?", "25", "", { gorsel: graf('graf2-kitap', ['Pazartesi', 'Salı']) });
  ekle("gr-a9", "Cuma çarşambadan kaç fazla?", "12", "", { gorsel: graf('graf2-kitap', ['Cuma', 'Çarşamba']) });
  ekle("gr-a10", "Beş günde toplam kaç kitap?", "65", "", { gorsel: graf('graf2-kitap', [0, 1, 2, 3, 4]) });
  ekle("gr-a11", "En sevilen meyve hangisi?", "Çilek", "", { gorsel: graf('graf3-meyve', ['Çilek']) });
  ekle("gr-a12", "En az sevilen meyve?", "Armut", "", { gorsel: graf('graf3-meyve', ['Armut']) });
  ekle("gr-a13", "Elma ve muz toplamı kaç?", "15", "", { gorsel: graf('graf3-meyve', ['Elma', 'Muz']) });
  ekle("gr-a14", "Çilek elmadan kaç fazla?", "3", "", { gorsel: graf('graf3-meyve', ['Çilek', 'Elma']) });
  ekle("gr-a15", "Toplam kaç öğrenci ankete katıldı?", "31", "", { gorsel: graf('graf3-meyve', [0, 1, 2, 3]) });
  ekle("gr-a16", "Futbol kulübünde kaç üye var?", "18", "", { gorsel: graf('graf4-spor', ['Futbol']) });
  ekle("gr-a17", "En az üyesi olan kulüp hangisi?", "Tenis", "", { gorsel: graf('graf4-spor', ['Tenis']) });
  ekle("gr-a18", "Yüzme ve basketbol toplamı?", "21", "", { gorsel: graf('graf4-spor', ['Yüzme', 'Basketbol']) });
  ekle("gr-a19", "Futbol tenisten kaç fazla?", "12", "", { gorsel: graf('graf4-spor', ['Futbol', 'Tenis']) });
  ekle("gr-a20", "Toplam kaç üye var?", "45", "", { gorsel: graf('graf4-spor', [0, 1, 2, 3]) });
  ekle("gr-a21", "En sıcak gün hangisi?", "Cuma", "", { gorsel: graf('graf5-sicaklik', ['Cuma']) });
  ekle("gr-a22", "En serin gün hangisi?", "Çarşamba", "", { gorsel: graf('graf5-sicaklik', ['Çarşamba']) });
  ekle("gr-a23", "Salı ile perşembe farkı?", "3", "", { gorsel: graf('graf5-sicaklik', ['Salı', 'Perşembe']) });
  ekle("gr-a24", "Pazartesi ve çarşamba toplamı?", "38", "", { gorsel: graf('graf5-sicaklik', ['Pazartesi', 'Çarşamba']) });
  ekle("gr-a25", "Beş günün ortalama sıcaklığı yaklaşık kaç?", "23", "", { gorsel: graf('graf5-sicaklik', [0, 1, 2, 3, 4]) });

  return sorular;
}

function grafikOkumaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.GRAFIK,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("gr-t1", "En çok hangi tür kitap var?", "Masal", ["Bilim","Şiir","Masal","Roman"], "", { gorsel: graf('test1-kitap', ['Masal']) });
  ekle("gr-t2", "Şiir kitabı sayısı kaçtır?", "5", ["8","12","5","15"], "", { gorsel: graf('test1-kitap', ['Şiir']) });
  ekle("gr-t3", "Roman ve bilim toplamı kaçtır?", "20", ["18","22","20","19"], "", { gorsel: graf('test1-kitap', ['Roman', 'Bilim']) });
  ekle("gr-t4", "Masal roman'dan kaç fazladır?", "3", ["2","5","3","4"], "", { gorsel: graf('test1-kitap', ['Masal', 'Roman']) });
  ekle("gr-t5", "Toplam kaç kitap var?", "40", ["38","42","40","39"], "", { gorsel: graf('test1-kitap', [0, 1, 2, 3]) });
  ekle("gr-t6", "En çok tercih edilen oyuncak hangisi?", "Bebek", ["Araba","Bebek","Top","Yapboz"], "", { gorsel: graf('test2-oyuncak', ['Bebek']) });
  ekle("gr-t7", "Araba ve top toplamı kaçtır?", "18", ["16","20","18","17"], "", { gorsel: graf('test2-oyuncak', ['Araba', 'Top']) });
  ekle("gr-t8", "🎭 Yapboz bebek'ten kaç eksiktir?", "7", ["5","9","7","6"], "14 - 7 = ?", { gorsel: graf('test2-oyuncak', ['Yapboz', 'Bebek']), sasirtma: true });
  ekle("gr-t9", "En az tercih edilen oyuncak hangisi?", "Yapboz", ["Araba","Top","Yapboz","Bebek"], "", { gorsel: graf('test2-oyuncak', ['Yapboz']) });
  ekle("gr-t10", "Toplam kaç çocuk ankete katıldı?", "39", ["37","41","39","40"], "", { gorsel: graf('test2-oyuncak', [0, 1, 2, 3]) });
  ekle("gr-t11", "En çok hangi sebze satıldı?", "Domates", ["Biber","Patlıcan","Domates","Salatalık"], "", { gorsel: graf('test3-sebze', ['Domates']) });
  ekle("gr-t12", "Biber ve patlıcan toplamı kaç kg?", "20", ["18","22","20","19"], "", { gorsel: graf('test3-sebze', ['Biber', 'Patlıcan']) });
  ekle("gr-t13", "Salatalık domatesten kaç kg azdır?", "4", ["3","5","4","6"], "", { gorsel: graf('test3-sebze', ['Salatalık', 'Domates']) });
  ekle("gr-t14", "🎭 Hangi sebzenin satışı diğer ikisinin toplamına eşittir?", "Domates", ["Domates","Biber","Salatalık","Patlıcan"], "8 + 12 = 20 = Domates", { gorsel: graf('test3-sebze', ['Domates', 'Biber', 'Patlıcan']), sasirtma: true });
  ekle("gr-t15", "Toplam kaç kg sebze satıldı?", "56", ["54","58","56","52"], "", { gorsel: graf('test3-sebze', [0, 1, 2, 3]) });
  ekle("gr-t16", "En çok öğrenci hangi mevsimde doğmuş?", "Yaz", ["Kış","İlkbahar","Yaz","Sonbahar"], "", { gorsel: graf('test4-dogum', ['Yaz']) });
  ekle("gr-t17", "Kış ve sonbahar toplamı kaçtır?", "14", ["12","16","14","13"], "", { gorsel: graf('test4-dogum', ['Kış', 'Sonbahar']) });
  ekle("gr-t18", "🎭 İlkbahar kıştan kaç fazladır?", "3", ["2","4","3","5"], "9 - 6 = ?", { gorsel: graf('test4-dogum', ['İlkbahar', 'Kış']), sasirtma: true });
  ekle("gr-t19", "Toplam kaç öğrenci var?", "35", ["33","37","35","36"], "", { gorsel: graf('test4-dogum', [0, 1, 2, 3]) });
  ekle("gr-t20", "🎭 Yaz ve ilkbahar toplamı kış ve sonbahardan kaç fazladır?", "7", ["5","9","7","6"], "12 + 9 = 21, 6 + 8 = 14, 21 - 14 = 7", { gorsel: graf('test4-dogum', [2, 1, 0, 3]), sasirtma: true });
  ekle("gr-t21", "En çok yağış hangi gün oldu?", "Çarşamba", ["Pazartesi","Perşembe","Çarşamba","Cuma"], "", { gorsel: graf('test5-yagis', ['Çarşamba']) });
  ekle("gr-t22", "Salı günü yağış var mı?", "Hayır", ["Evet, 5 mm","Evet, 10 mm","Hayır","Belli değil"], "", { gorsel: graf('test5-yagis', ['Salı']) });
  ekle("gr-t23", "🎭 Hangi günler yağış toplamı çarşambaya eşittir?", "Pazartesi + Perşembe", ["Salı + Cuma","Pazartesi + Perşembe","Salı + Perşembe","Pazartesi + Cuma"], "5 + 10 = 15 = Çarşamba", { gorsel: graf('test5-yagis', ['Pazartesi', 'Perşembe', 'Çarşamba']), sasirtma: true });
  ekle("gr-t24", "Perşembe ve cuma toplamı kaç mm?", "18", ["16","20","18","15"], "", { gorsel: graf('test5-yagis', ['Perşembe', 'Cuma']) });
  ekle("gr-t25", "🎭 Beş günde toplam kaç mm yağış düştü?", "38", ["36","40","38","35"], "5 + 0 + 15 + 10 + 8 = 38", { gorsel: graf('test5-yagis', [0, 1, 2, 3, 4]), sasirtma: true });

  return sorular;
}

function veriToplamaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.VERI,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle("vt-a1", "Sınıfta kaç öğrenci olduğunu öğrenmek için ne yaparsın?", "Sayarım", "", { gorsel: anl('vt-sinif-say') });
  ekle("vt-a2", "Arkadaşlarının favori rengini öğrenmek için ne yaparsın?", "Anket yaparım", "", { gorsel: anket('vt-anket-formu') });
  ekle("vt-a3", "Aşağıdaki veriler tabloya girildi. En çok oy alan hangisi? Kırmızı:8, Mavi:12, Sarı:5", "Mavi", "", { gorsel: tab('vt-renk-oy', ['Mavi']) });
  ekle("vt-a4", "5 arkadaştan veri toplandı: 3, 7, 5, 8, 2. En büyük değer kaçtır?", "8", "", { gorsel: liste(3, 7, 5, 8, 2) });
  ekle("vt-a5", "5 arkadaştan veri toplandı: 3, 7, 5, 8, 2. En küçük değer kaçtır?", "2", "", { gorsel: liste(3, 7, 5, 8, 2) });
  ekle("vt-a6", "Veri: Elma:6, Armut:4, Muz:9. Toplam kaç meyve?", "19", "", { gorsel: tab('vt-meyve-3', [0, 1, 2]) });
  ekle("vt-a7", "Hangi yöntem veri toplamak için kullanılmaz?", "Hayal etmek", "", { gorsel: anl('vt-yontemler') });
  ekle("vt-a8", "Veri: Kedi:7, Köpek:12, Kuş:5. En az tercih hangisi?", "Kuş", "", { gorsel: tab('vt-hayvan-tercih', ['Kuş']) });
  ekle("vt-a9", "10 kişiye \"favori meyve\" soruldu. Elma:4, Muz:3, Çilek:3. Toplam doğru mu?", "Evet", "", { gorsel: tab('vt-meyve-anket', [0, 1, 2]) });
  ekle("vt-a10", "Grafik mi tablo mu daha kolay okumak için?", "İkisi de kullanışlı", "", { gorsel: anl('vt-tablo-grafik') });
  ekle("vt-a11", "Veri: Yağmur:3 gün, Güneşli:4 gün, Bulutlu:2 gün. Kaç gün veri toplandı?", "9", "", { gorsel: tab('vt-hava-gun', [0, 1, 2]) });
  ekle("vt-a12", "En çok hangi hava? Yağmur:3, Güneşli:4, Bulutlu:2", "Güneşli", "", { gorsel: tab('vt-hava-gun', ['Güneşli']) });
  ekle("vt-a13", "Anket sonucu: Futbol:15, Yüzme:8, Koşu:12. Futbol koşudan kaç fazla?", "3", "", { gorsel: tab('vt-spor-anket', ['Futbol', 'Koşu']) });
  ekle("vt-a14", "Toplam katılımcı: Futbol:15, Yüzme:8, Koşu:12", "35", "", { gorsel: tab('vt-spor-anket', [0, 1, 2]) });
  ekle("vt-a15", "Veri doğru mu? 3+5+7=16 kişi ankete katıldı, tablo toplamı 15.", "Hayır, hata var", "", { gorsel: tab('vt-hatali-tablo', [3]), cevapTipi: "metin" });
  ekle("vt-a16", "Sınıfta kitap sayısı: Masal:8, Bilim:6, Şiir:4. En az hangi tür?", "Şiir", "", { gorsel: tab('vt-kitap-tur', ['Şiir']) });
  ekle("vt-a17", "Masal ve bilim toplamı şiirin kaç katı?", "3", "", { gorsel: tab('vt-kitap-tur', ['Masal', 'Bilim', 'Şiir']) });
  ekle("vt-a18", "20 kişiye anket yapıldı. 8'i elma, 7'si muz, kalanı çilek sevdi. Çilek kaç kişi?", "5", "", { gorsel: anket('vt-meyve-anket-20') });
  ekle("vt-a19", "Grafik okurken sütunun tepesi neyi gösterir?", "O kategorinin değerini", "", { gorsel: anl('vt-grafik-okuma') });
  ekle("vt-a20", "Tabloda satır ve sütunların kesiştiği yere ne denir?", "Hücre", "", { gorsel: anl('vt-tablo-hucre') });
  ekle("vt-a21", "Veri: Kış:5, İlkbahar:8, Yaz:10, Sonbahar:7. Yaz kıştan kaç fazla?", "5", "", { gorsel: tab('vt-mevsim-dogum', ['Yaz', 'Kış']) });
  ekle("vt-a22", "Toplam öğrenci: 5+8+10+7=?", "30", "", { gorsel: tab('vt-mevsim-dogum', [0, 1, 2, 3]) });
  ekle("vt-a23", "Anket: 30 kişi katıldı. Erkek:16, kız kaç?", "14", "", { gorsel: tab('vt-erkek-kiz', [1]) });
  ekle("vt-a24", "Veri eksik mi? Elma:5, Armut:3, Toplam:9", "Evet", "", { gorsel: tab('vt-elma-armut', [0, 1, 2]) });
  ekle("vt-a25", "Doğru veri toplama yöntemi hangisi? Sınıfın favori rengi için", "Herkese sor, say", "", { gorsel: anl('vt-dogru-yontem') });

  return sorular;
}

function veriToplamaTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.VERI,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle("vt-t1", "Veri toplamak için hangi yöntem kullanılabilir?", "Anket yapmak", ["Hayal etmek","Anket yapmak","Tahmin etmek","Rastgele söylemek"], "", { gorsel: anket('vt-anket-formu') });
  ekle("vt-t2", "Sınıfta favori meyve anketi yapıldı: Elma:8, Muz:5, Çilek:12. En sevilen meyve hangisi?", "Çilek", ["Elma","Muz","Çilek","Hepsi eşit"], "", { gorsel: tab('vt-favori-meyve', ['Çilek']) });
  ekle("vt-t3", "Aynı ankette toplam kaç kişi oy kullandı?", "25", ["23","27","25","24"], "", { gorsel: tab('vt-favori-meyve', [0, 1, 2]) });
  ekle("vt-t4", "Tablo ve grafik ne için kullanılır?", "Veri göstermek", ["Veri saklamak","Veri göstermek","Veri silmek","Veri tahmin etmek"], "", { gorsel: anl('vt-tablo-grafik-karsilastir') });
  ekle("vt-t5", "Anket: 20 kişi katıldı. Kırmızı:7, Mavi:9, Sarı:?. Sarı kaç oy aldı?", "4", ["3","5","4","6"], "20 - 7 - 9 = 4", { gorsel: tab('vt-renk-anket-20', ['Sarı']) });
  ekle("vt-t6", "🎭 Veriler doğru mu? Futbol:10, Yüzme:8, Toplam:20", "Hayır", ["Evet","Hayır","Belli değil","Yaklaşık doğru"], "10 + 8 = 18 ≠ 20", { gorsel: tab('vt-hatali-spor', [0, 1]), sasirtma: true });
  ekle("vt-t7", "Grafik okurken en uzun sütun neyi gösterir?", "En büyük değeri", ["En az değeri","En büyük değeri","Ortalamayı","Toplamı"], "", { gorsel: graf('test1-kitap', [0]) });
  ekle("vt-t8", "Sınıf kütüphanesi: Masal:12, Bilim:8, Şiir:5, Roman:10. Masal ve roman toplamı?", "22", ["20","24","22","21"], "", { gorsel: tab('vt-kutuphane', ['Masal', 'Roman']) });
  ekle("vt-t9", "🎭 Aynı veride en az ile en çok arasındaki fark kaçtır?", "7", ["5","9","7","6"], "12 - 5 = 7", { gorsel: tab('vt-kutuphane', ['Masal', 'Şiir']), sasirtma: true });
  ekle("vt-t10", "Hangi veri toplama yöntemi en doğru sonucu verir?", "Gözlem ve sayma", ["Tahmin","Gözlem ve sayma","Hayal","Rastgele"], "", { gorsel: anl('vt-dogru-yontem') });
  ekle("vt-t11", "Haftalık hava: Güneşli:3, Bulutlu:2, Yağmurlu:2. Toplam kaç gün?", "7", ["6","8","7","5"], "", { gorsel: tab('vt-haftalik-hava', [0, 1, 2]) });
  ekle("vt-t12", "🎭 Aynı veride güneşli günler diğerlerinin toplamından fazla mı?", "Hayır", ["Evet","Hayır","Eşit","Belli değil"], "3 > 2 + 2 = 4? Hayır! 3 < 4", { gorsel: tab('vt-haftalik-hava', ['Güneşli', 'Bulutlu', 'Yağmurlu']), sasirtma: true });
  ekle("vt-t13", "25 kişiye anket yapıldı. Erkek:13, kız kaçtır?", "12", ["11","13","12","14"], "", { gorsel: anket('vt-erkek-kiz-25') });
  ekle("vt-t14", "Tablo ile grafik arasındaki fark nedir?", "Grafik görsel, tablo sayısal", ["Tabloda sayı yok","Grafikte sayı yok","Grafik görsel, tablo sayısal","İkisi aynıdır"], "", { gorsel: anl('vt-tablo-grafik-karsilastir') });
  ekle("vt-t15", "🎭 Anket: Elma:6, Armut:4, Muz:5, Toplam:16. Veri doğru mu?", "Hayır", ["Evet","Hayır","Belli değil","Yaklaşık"], "6 + 4 + 5 = 15, 16 değil!", { gorsel: tab('vt-hatali-meyve-toplam', [0, 1, 2, 3]), sasirtma: true });
  ekle("vt-t16", "Spor anketi: Futbol:18, Yüzme:12, Basketbol:9. Futbol yüzmeden kaç fazla?", "6", ["4","8","6","5"], "", { gorsel: tab('vt-spor-anket2', ['Futbol', 'Yüzme']) });
  ekle("vt-t17", "Aynı ankette toplam kaç kişi var?", "39", ["37","41","39","40"], "", { gorsel: tab('vt-spor-anket2', [0, 1, 2]) });
  ekle("vt-t18", "🎭 Verilerden hangisi yorum yapılamaz?", "Gelecekte ne olacak", ["En çok tercih","En az tercih","Gelecekte ne olacak","Toplam katılımcı"], "Veriler geçmişi gösterir, geleceği değil!", { gorsel: anl('vt-yorum-balon'), sasirtma: true });
  ekle("vt-t19", "30 kişilik ankette: Kedi:12, Köpek:10, Kuş:?. Kuş kaç kişi?", "8", ["6","10","8","7"], "30 - 12 - 10 = 8", { gorsel: tab('vt-hayvan-30', ['Kuş']) });
  ekle("vt-t20", "🎭 Hangi grafik türü sütun grafiği ile aynı işlevi görür?", "Çizgi grafik", ["Harita","Çizgi grafik","Fotoğraf","Tablo"], "", { gorsel: anl('vt-sutun-cizgi-grafik'), sasirtma: true });
  ekle("vt-t21", "Mevsim doğum anketi: Kış:5, İlkbahar:9, Yaz:11, Sonbahar:7. En çok hangi mevsimde doğulmuş?", "Yaz", ["Kış","İlkbahar","Yaz","Sonbahar"], "", { gorsel: tab('vt-mevsim-anket', ['Yaz']) });
  ekle("vt-t22", "Aynı ankette toplam kaç kişi?", "32", ["30","34","32","31"], "", { gorsel: tab('vt-mevsim-anket', [0, 1, 2, 3]) });
  ekle("vt-t23", "🎭 İlkbahar ve sonbahar toplamı kış ve yazın toplamından az mı?", "Eşit", ["Evet","Hayır","Eşit","Belli değil"], "9 + 7 = 16, 5 + 11 = 16... Eşit!", { gorsel: tab('vt-mevsim-anket', [1, 3, 0, 2]), sasirtma: true });
  ekle("vt-t24", "Anket verisini tabloya geçirmek için ne yapmalıyız?", "Sayarız ve yazarız", ["Tahmin ederiz","Sayarız ve yazarız","Çizeriz","Okuruz"], "", { gorsel: anl('vt-anket-tablo-donusum') });
  ekle("vt-t25", "🎭 40 kişilik ankette 4 seçenek var ve hepsi eşit oy aldı. Her seçenek kaç oy aldı?", "10", ["8","12","10","9"], "40 ÷ 4 = 10", { gorsel: graf('vt-grafik-esit', [0, 1, 2, 3]), sasirtma: true });

  return sorular;
}


export function tabloOkuma(karistir) {
  return {
    id: 'tablo-okuma',
    baslik: 'Tablo Okuma',
    kazanimKodu: KAZANIM.TABLO,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Bilgileri düzenli göstermek için TABLO kullanırız! Tablonun satırları ve sütunları vardır.',
          gorsel: anl('to-anlatim-1'),
        },
        {
          metin:
            'Tabloda bir bilgiyi bulmak için doğru satır ve sütunun kesiştiği yere bakarız.',
          gorsel: anl('to-anlatim-2'),
        },
        {
          metin:
            'Tablodan toplama, karşılaştırma ve en çok/en az bilgisini okuyabiliriz.',
          gorsel: anl('to-anlatim-3'),
        },
      ],
    },
    alistirma: tabloOkumaAlistirma(),
    test: tabloOkumaTest(karistir),
  };
}

export function grafikOkuma(karistir) {
  return {
    id: 'grafik-okuma',
    baslik: 'Grafik Okuma',
    kazanimKodu: KAZANIM.GRAFIK,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Verileri görsel olarak göstermek için GRAFİK kullanırız! Sütun grafikte her sütunun yüksekliği miktarı gösterir.',
          gorsel: anl('gr-anlatim-1'),
        },
        {
          metin:
            'Grafik okumak için sütunun tepesine bakıp yatay çizgiye geliriz — o değeri okuruz. En uzun sütun en büyük değeri gösterir!',
          gorsel: anl('gr-anlatim-2'),
        },
        {
          metin:
            'Grafikten toplama, çıkarma ve karşılaştırma yapabiliriz — tıpkı tablodan okur gibi!',
          gorsel: anl('gr-anlatim-3'),
        },
      ],
    },
    alistirma: grafikOkumaAlistirma(),
    test: grafikOkumaTest(karistir),
  };
}

export function veriToplama(karistir) {
  return {
    id: 'veri-toplama',
    baslik: 'Veri Toplama ve Yorumlama',
    kazanimKodu: KAZANIM.VERI,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Veri toplamak demek bilgi toplamak demektir! Anket yaparak, sayarak veya ölçerek veri toplayabiliriz.',
          gorsel: anl('vt-anlatim-1'),
        },
        {
          metin:
            'Topladığımız veriyi tabloya veya grafiğe dönüştürürüz. Bu sayede verileri kolay okuruz!',
          gorsel: anl('vt-anlatim-2'),
        },
        {
          metin:
            'Veriyi yorumlamak demek "ne anlıyor?" sorusunu cevaplamak demektir. En çok, en az, toplam, fark gibi bilgileri çıkarabiliriz.',
          gorsel: anl('vt-anlatim-3'),
        },
      ],
    },
    alistirma: veriToplamaAlistirma(),
    test: veriToplamaTest(karistir),
  };
}
