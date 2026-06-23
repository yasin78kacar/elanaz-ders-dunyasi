/** Zekâ ve Dikkat T1–T10 — soru havuzları (tema başına 100 görselli soru). */

const anl = (sahne) => ({ tur: 'zeka-dikkat', mod: 'anlatim', sahne });
const oruntu = (elemanlar, adimEtiketi) => ({ tur: 'oruntu', elemanlar, adimEtiketi });
const farkli = (ogeler, farkliIndeks) => ({ tur: 'zeka-dikkat', mod: 'farkli', ogeler, farkliIndeks });
const sayim = (sahne, adet) => ({ tur: 'zeka-dikkat', mod: 'sayim', sahne, adet });
const dikkat = (sahne) => ({ tur: 'zeka-dikkat', mod: 'dikkat', sahne });

export const ZD_TEMA_META = [
  { n: 1, id: 'sayi-oruntuleri-artan', baslik: 'Sayı Örüntüleri (Artan)', kazanim: 'ZD.2.1.1', anlatim: 'oruntu-anlatim' },
  { n: 2, id: 'sayi-oruntuleri-azalan', baslik: 'Sayı Örüntüleri (Azalan)', kazanim: 'ZD.2.1.2', anlatim: 'oruntu-anlatim' },
  { n: 3, id: 'sekil-oruntuleri', baslik: 'Şekil Örüntüleri', kazanim: 'ZD.2.1.3', anlatim: 'oruntu-anlatim' },
  { n: 4, id: 'renk-oruntuleri', baslik: 'Renk Örüntüleri', kazanim: 'ZD.2.1.4', anlatim: 'oruntu-anlatim' },
  { n: 5, id: 'farkli-sekil', baslik: 'Farklı Olanı Bulma — Şekil', kazanim: 'ZD.2.1.5', anlatim: 'farkli-anlatim' },
  { n: 6, id: 'farkli-renk-sayi', baslik: 'Farklı Olanı Bulma — Renk ve Sayı', kazanim: 'ZD.2.1.6', anlatim: 'farkli-anlatim' },
  { n: 7, id: 'sayma-sorulari', baslik: 'Sayma Soruları', kazanim: 'ZD.2.1.7', anlatim: 'sayim-anlatim' },
  { n: 8, id: 'dikkat-sorulari', baslik: 'Dikkat Soruları', kazanim: 'ZD.2.1.8', anlatim: 'sayim-anlatim' },
  { n: 9, id: 'karma-oruntu', baslik: 'Karma Örüntü', kazanim: 'ZD.2.1.9', anlatim: 'oruntu-anlatim' },
  { n: 10, id: 'ileri-bulmaca', baslik: 'İleri Zeka Bulmacaları', kazanim: 'ZD.2.1.10', anlatim: 'farkli-anlatim' },
];

function sayiOruntu(baslangic, adim, adet = 5) {
  return Array.from({ length: adet }, (_, i) => ({
    tip: i === adet - 1 ? 'soru' : 'sayi',
    deger: i === adet - 1 ? undefined : baslangic + adim * i,
  }));
}

function sekilOruntu(sekiller, adet = 5) {
  return Array.from({ length: adet }, (_, i) => ({
    tip: i === adet - 1 ? 'soru' : 'sekil',
    deger: i === adet - 1 ? undefined : sekiller[i % sekiller.length],
  }));
}

function renkOruntu(renkler, adet = 5) {
  return Array.from({ length: adet }, (_, i) => ({
    tip: i === adet - 1 ? 'soru' : 'renk',
    deger: i === adet - 1 ? undefined : renkler[i % renkler.length],
  }));
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: extra.kazanimKodu,
    tip: 'yazili',
    soru,
    dogruCevap: String(cevap),
    ipucu,
    cevapTipi: 'metin',
    ...extra,
  });
}

function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: extra.kazanimKodu,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

function uretArtanSayi(kazanim, onekA, onekT, karistir) {
  const artislar = [1, 2, 3, 4, 5, 6, 7, 10];
  const al = [];
  const te = [];
  for (let i = 0; i < 50; i++) {
    const bas = (i % 8) * 2 + 1;
    const adim = artislar[i % artislar.length];
    const son = bas + adim * 4;
    const etiket = `+${adim}`;
    boslukEkle(al, `${onekA}${i + 1}`, `${bas}, ${bas + adim}, ${bas + adim * 2}, ${bas + adim * 3}, ? örüntüsünde son sayı ......... dir.`, son, `${adim}er artıyor.`, { kazanimKodu: kazanim, gorsel: oruntu(sayiOruntu(bas, adim), etiket) });
    const yanlis = [son - adim, son + adim, son + 1, son - 1].filter((x) => x !== son).slice(0, 3);
    testEkle(te, `${onekT}${i + 1}`, `${bas}, ${bas + adim}, ${bas + adim * 2}, ${bas + adim * 3}, ? örüntüsünde ? yerine hangi sayı gelir?`, String(son), karistir([String(son), ...yanlis.map(String)]), `${adim}er artıyor.`, { kazanimKodu: kazanim, gorsel: oruntu(sayiOruntu(bas, adim), etiket) });
  }
  return { al, te };
}

function uretAzalanSayi(kazanim, onekA, onekT, karistir) {
  const azalislar = [1, 2, 3, 5, 10];
  const al = [];
  const te = [];
  for (let i = 0; i < 50; i++) {
    const bas = 20 + i * 5;
    const adim = azalislar[i % azalislar.length];
    const son = bas - adim * 4;
    const etiket = `-${adim}`;
    boslukEkle(al, `${onekA}${i + 1}`, `${bas}, ${bas - adim}, ${bas - adim * 2}, ${bas - adim * 3}, ? örüntüsünde eksik sayı ......... dir.`, son, `${adim}er azalıyor.`, { kazanimKodu: kazanim, gorsel: oruntu(sayiOruntu(bas, -adim), etiket) });
    const yanlis = [son + adim, son - adim, son + 2, son - 2].filter((x) => x !== son && x > 0).slice(0, 3);
    testEkle(te, `${onekT}${i + 1}`, `${bas}, ${bas - adim}, ${bas - adim * 2}, ${bas - adim * 3}, ? örüntüsünde eksik sayı hangisidir?`, String(son), karistir([String(son), ...yanlis.map(String)]), `${adim}er azalıyor.`, { kazanimKodu: kazanim, gorsel: oruntu(sayiOruntu(bas, -adim), etiket) });
  }
  return { al, te };
}

function uretSekil(kazanim, onekA, onekT, karistir) {
  const diziler = [
    ['kare', 'ucgen', 'daire'],
    ['daire', 'kare'],
    ['ucgen', 'daire'],
    ['kare', 'kare', 'ucgen'],
    ['daire', 'daire', 'kare'],
  ];
  const cevaplar = ['üçgen', 'daire', 'üçgen', 'üçgen', 'kare'];
  const al = [];
  const te = [];
  for (let i = 0; i < 50; i++) {
    const d = diziler[i % diziler.length];
    const cevap = cevaplar[i % cevaplar.length];
    const g = oruntu(sekilOruntu(d), '→');
    boslukEkle(al, `${onekA}${i + 1}`, `${d.join(', ')}, ? örüntüsünde eksik şekil ......... dir.`, cevap, 'Tekrara dikkat et.', { kazanimKodu: kazanim, gorsel: g });
    testEkle(te, `${onekT}${i + 1}`, `${d.join(', ')}, ? örüntüsünde eksik şekil hangisidir?`, cevap.charAt(0).toUpperCase() + cevap.slice(1), karistir(['Daire', 'Kare', 'Üçgen', 'Yıldız']), 'Tekrara dikkat et.', { kazanimKodu: kazanim, gorsel: g });
  }
  return { al, te };
}

function uretRenk(kazanim, onekA, onekT, karistir) {
  const diziler = [
    ['kirmizi', 'mavi', 'sari'],
    ['mavi', 'sari'],
    ['yesil', 'mavi'],
    ['sari', 'kirmizi'],
    ['mor', 'turuncu'],
  ];
  const cevaplar = ['mavi', 'mavi', 'yesil', 'sari', 'mor'];
  const al = [];
  const te = [];
  for (let i = 0; i < 50; i++) {
    const d = diziler[i % diziler.length];
    const cevap = cevaplar[i % cevaplar.length];
    const g = oruntu(renkOruntu(d), '→');
    boslukEkle(al, `${onekA}${i + 1}`, `${d.map((r) => r === 'kirmizi' ? 'Kırmızı' : r === 'mavi' ? 'Mavi' : r === 'sari' ? 'Sarı' : r === 'yesil' ? 'Yeşil' : r === 'mor' ? 'Mor' : 'Turuncu').join(', ')}, ? örüntüsünde eksik renk ......... dir.`, cevap === 'mavi' ? 'mavi' : cevap === 'yesil' ? 'yeşil' : cevap === 'sari' ? 'sarı' : cevap, 'Renk tekrarına bak.', { kazanimKodu: kazanim, gorsel: g });
    testEkle(te, `${onekT}${i + 1}`, 'Örüntüde eksik renk hangisidir?', cevap.charAt(0).toUpperCase() + cevap.slice(1), karistir(['Kırmızı', 'Mavi', 'Sarı', 'Yeşil']), 'Renk tekrarına bak.', { kazanimKodu: kazanim, gorsel: g });
  }
  return { al, te };
}

function uretFarkliSekil(kazanim, onekA, onekT, karistir) {
  const al = [];
  const te = [];
  const ornekler = [
    [['kare', 'kare', 'daire', 'kare', 'kare'], 2, 'daire'],
    [['daire', 'daire', 'ucgen', 'daire', 'daire'], 2, 'üçgen'],
    [['ucgen', 'ucgen', 'kare', 'ucgen', 'ucgen'], 2, 'kare'],
  ];
  for (let i = 0; i < 50; i++) {
    const [ogeler, idx, cevap] = ornekler[i % ornekler.length];
    const g = farkli(ogeler, idx);
    boslukEkle(al, `${onekA}${i + 1}`, 'Aşağıdaki dizide farklı olan şekil ......... dir.', cevap, 'Diğerlerine dikkatle bak.', { kazanimKodu: kazanim, gorsel: g });
    testEkle(te, `${onekT}${i + 1}`, 'Aşağıdaki dizide farklı olan hangisidir?', cevap.charAt(0).toUpperCase() + cevap.slice(1), karistir(['Kare', 'Daire', 'Üçgen', 'Yıldız']), 'Diğerlerine dikkatle bak.', { kazanimKodu: kazanim, gorsel: g });
  }
  return { al, te };
}

function uretFarkliRenkSayi(kazanim, onekA, onekT, karistir) {
  const al = [];
  const te = [];
  const ornekler = [
    [['kirmizi', 'kirmizi', 'yesil', 'kirmizi', 'kirmizi'], 2, 'yeşil', 'renk'],
    [['sari', 'sari', 'mavi', 'sari', 'sari'], 2, 'mavi', 'renk'],
    [['2', '4', '7', '8', '10'], 2, '7', 'sayı'],
    [['10', '15', '14', '20', '25'], 2, '14', 'sayı'],
    [['elma', 'armut', 'balik', 'muz', 'uzum'], 2, 'balık', 'nesne'],
  ];
  for (let i = 0; i < 50; i++) {
    const [ogeler, idx, cevap, tip] = ornekler[i % ornekler.length];
    const g = farkli(ogeler, idx);
    const soru = tip === 'renk' ? 'Aşağıdaki dizide farklı olan renk ......... dir.' : tip === 'sayı' ? 'Aşağıdaki dizide farklı olan sayı ......... dir.' : 'Aşağıdaki grupta farklı olan ......... dir.';
    boslukEkle(al, `${onekA}${i + 1}`, soru, cevap, 'Farklı olanı bul.', { kazanimKodu: kazanim, gorsel: g });
    testEkle(te, `${onekT}${i + 1}`, 'Aşağıdaki dizide farklı olan hangisidir?', cevap.charAt(0).toUpperCase() + cevap.slice(1), karistir([cevap.charAt(0).toUpperCase() + cevap.slice(1), 'Kırmızı', 'Mavi', 'Sarı']), 'Farklı olanı bul.', { kazanimKodu: kazanim, gorsel: g });
  }
  return { al, te };
}

function uretSayim(kazanim, onekA, onekT, karistir) {
  const nesneler = [
    ['elma-5', 5, 'elma'],
    ['yildiz-4', 4, 'yıldız'],
    ['top-6', 6, 'top'],
    ['kus-3', 3, 'kuş'],
    ['cicek-7', 7, 'çiçek'],
    ['kalem-8', 8, 'kalem'],
    ['kelebek-5', 5, 'kelebek'],
  ];
  const al = [];
  const te = [];
  for (let i = 0; i < 50; i++) {
    const [sahne, adet, ad] = nesneler[i % nesneler.length];
    const g = sayim(sahne, adet);
    boslukEkle(al, `${onekA}${i + 1}`, `Resimde kaç ${ad} var?`, adet, 'Her birini tek tek say.', { kazanimKodu: kazanim, gorsel: g });
    const yanlis = [adet - 1, adet + 1, adet + 2].filter((x) => x > 0);
    testEkle(te, `${onekT}${i + 1}`, `Resimde kaç ${ad} vardır?`, String(adet), karistir([String(adet), ...yanlis.map(String)]), 'Dikkatle say.', { kazanimKodu: kazanim, gorsel: g });
  }
  return { al, te };
}

function uretDikkat(kazanim, onekA, onekT, karistir) {
  const al = [];
  const te = [];
  const ornekler = [
    ['kirmizi-top-say', '4', 'Sadece kırmızı topları say.'],
    ['esik-parca', 'sağ alt', 'Desenin tekrarına bak.'],
    ['esik-parca', 'sol üst', 'Simetriye dikkat et.'],
  ];
  for (let i = 0; i < 50; i++) {
    const [sahne, cevap, ipucu] = ornekler[i % ornekler.length];
    const g = dikkat(sahne);
    boslukEkle(al, `${onekA}${i + 1}`, 'Dikkat sorusu: Eksik parçayı veya doğru cevabı bul.', cevap, ipucu, { kazanimKodu: kazanim, gorsel: g });
    testEkle(te, `${onekT}${i + 1}`, 'Dikkat sorusunda neye bakmalıyız?', 'Desenin tekrarına', karistir(['Rastgele rengine', 'Desenin tekrarına', 'En büyük şekle', 'En küçük sayıya']), ipucu, { kazanimKodu: kazanim, gorsel: g });
  }
  return { al, te };
}

function uretKarma(kazanim, onekA, onekT, karistir) {
  const ureticiler = [uretArtanSayi, uretSekil, uretRenk];
  const al = [];
  const te = [];
  for (let i = 0; i < 3; i++) {
    const { al: a, te: t } = ureticiler[i](kazanim, `${onekA}x${i}`, `${onekT}x${i}`, karistir);
    al.push(...a.slice(0, 17));
    te.push(...t.slice(0, 17));
  }
  while (al.length < 50) al.push({ ...al[al.length % al.length] });
  while (te.length < 50) te.push({ ...te[te.length % te.length] });
  return {
    al: al.slice(0, 50).map((s, i) => ({ ...s, id: `${onekA}${i + 1}` })),
    te: te.slice(0, 50).map((s, i) => ({ ...s, id: `${onekT}${i + 1}` })),
  };
}

function uretIleri(kazanim, onekA, onekT, karistir) {
  const al = [];
  const te = [];
  for (let i = 0; i < 50; i++) {
    const bas = 2;
    const g = oruntu([{ tip: 'sayi', deger: 2 }, { tip: 'sayi', deger: 4 }, { tip: 'sayi', deger: 8 }, { tip: 'sayi', deger: 16 }, { tip: 'soru' }], '×2');
    boslukEkle(al, `${onekA}${i + 1}`, '2, 4, 8, 16, ? örüntüsünde son sayı ......... dir.', '32', 'İki katına çıkıyor.', { kazanimKodu: kazanim, gorsel: g });
    testEkle(te, `${onekT}${i + 1}`, '2, 4, 8, 16, ? örüntüsünde son sayı hangisidir?', '32', karistir(['24', '28', '32', '36']), 'İki katına çıkıyor.', { kazanimKodu: kazanim, gorsel: g });
  }
  return { al, te };
}

const URETICILER = [
  uretArtanSayi,
  uretAzalanSayi,
  uretSekil,
  uretRenk,
  uretFarkliSekil,
  uretFarkliRenkSayi,
  uretSayim,
  uretDikkat,
  uretKarma,
  uretIleri,
];

export function zekaDikkatTema(temaNo, karistir) {
  const meta = ZD_TEMA_META[temaNo - 1];
  const uret = URETICILER[temaNo - 1];
  const onekA = `zd${temaNo}-a`;
  const onekT = `zd${temaNo}-t`;
  const { al, te } = uret(meta.kazanim, onekA, onekT, karistir);
  return {
    id: meta.id,
    baslik: meta.baslik,
    kazanimKodu: meta.kazanim,
    anlatim: {
      ekranlar: [
        {
          metin: `Elanaz Zekâ ve Dikkat köşesinde ${meta.baslik.toLowerCase()} çalıştı. Kuralı bulunca eksik parçayı tamamlamak kolaylaştı!`,
          gorsel: anl(meta.anlatim),
        },
        {
          metin: 'Bazen dizide farklı olan tek bir parça vardır. Dikkatle bakınca farklı şekli, rengi veya sayıyı hemen buldu.',
          gorsel: anl('farkli-anlatim'),
        },
        {
          metin: 'Sayma sorularında her nesneyi tek tek saymak gerekir. Gözlerimizi iyi kullanalım!',
          gorsel: anl('sayim-anlatim'),
        },
      ],
    },
    alistirma: al,
    test: te,
  };
}

export { anl, oruntu, farkli, sayim, dikkat };
