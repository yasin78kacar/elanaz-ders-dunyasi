/** Matematik Tema 4 — Çarpma (1×1–10×10, 100 görselli soru). */

const KAZANIM = 'MAT.2.4.1';

const NESNELER = ['elma', 'top', 'yildiz', 'balon', 'cicek', 'kelebek', 'kalem', 'cilek', 'ari', 'kare'];
const RENKLER = ['kirmizi', 'mavi', 'sari', 'yesil', 'turuncu', 'mor', 'pembe'];

function carp(a, b, nesne, renk) {
  return { tur: 'islem', mod: 'carpma-grup', a, b, sonuc: a * b, nesne, renk1: renk };
}

function anl(sahne) {
  return { tur: 'islem', mod: 'anlatim', sahne };
}

function tumCarpimlar() {
  const pairs = [];
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      pairs.push([a, b]);
    }
  }
  return pairs;
}

function seceneklerUret(a, b, sonuc) {
  const opts = new Set([sonuc]);
  const adaylar = [
    sonuc + 1,
    sonuc - 1,
    sonuc + 2,
    sonuc - 2,
    sonuc + 10,
    sonuc - 10,
    sonuc + a,
    sonuc - a,
    (a + 1) * b,
    a * (b + 1),
    (a + 1) * (b + 1),
    a + b,
    Math.abs(a - b) || 1,
  ].filter((x) => x > 0 && x !== sonuc);

  for (const c of adaylar) {
    if (opts.size >= 4) break;
    opts.add(c);
  }

  let ek = 1;
  while (opts.size < 4) {
    const v = sonuc + ek;
    if (v > 0) opts.add(v);
    ek++;
  }

  return [...opts].slice(0, 4).map(String);
}

function alistirma() {
  return tumCarpimlar()
    .slice(0, 50)
    .map(([a, b], i) => {
      const nesne = NESNELER[i % NESNELER.length];
      const renk = RENKLER[i % RENKLER.length];
      return {
        id: `cp-a${i + 1}`,
        kazanimKodu: KAZANIM,
        tip: 'yazili',
        soru: `${a} × ${b} = ?`,
        dogruCevap: String(a * b),
        ipucu: '',
        cevapTipi: 'sayi',
        gorsel: carp(a, b, nesne, renk),
      };
    });
}

function carpmaTest(karistir) {
  return tumCarpimlar()
    .slice(50, 100)
    .map(([a, b], i) => {
      const idx = i + 50;
      const nesne = NESNELER[idx % NESNELER.length];
      const renk = RENKLER[idx % RENKLER.length];
      const sonuc = a * b;
      return {
        id: `cp-t${i + 1}`,
        kazanimKodu: KAZANIM,
        tip: 'coktanSecmeli',
        soru: `${a} × ${b} = ?`,
        dogruCevap: String(sonuc),
        secenekler: karistir(seceneklerUret(a, b, sonuc)),
        ipucu: '',
        gorsel: carp(a, b, nesne, renk),
      };
    });
}

export function carpma(karistir) {
  return {
    id: 'carpma',
    baslik: 'Çarpma (1×1–10×10)',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Çarpma, eşit grupların toplamını kısa yoldan bulmaktır. 3 grup, her grupta 4 elma → 3 × 4 = 12 elma.',
          gorsel: anl('cp-anlatim-1'),
        },
        {
          metin:
            'Çarpma işleminde sıra önemli değildir: 2 × 5 = 5 × 2 = 10. Aynı sayıları farklı sırada çarpınca sonuç değişmez.',
          gorsel: anl('cp-anlatim-2'),
        },
        {
          metin:
            'Çarpma tablosunu öğrenmek için grupları saymayı kullanırız. Her gruptaki nesne sayısını gruplarla çarparız.',
          gorsel: anl('cp-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: carpmaTest(karistir),
  };
}
