/** Tema başına 50+50 genişletme (25 detaylı + 25 ek). */

import { yenidenNumarala } from './tema-100-utils.mjs';

export function sablonAlistirma(sablonlar, kazanim, onek) {
  return sablonlar.map(([soru, cevap, gorsel], i) => ({
    id: `${onek}-e${i + 1}`,
    kazanimKodu: kazanim,
    tip: 'yazili',
    soru,
    dogruCevap: String(cevap),
    ipucu: '',
    cevapTipi: 'metin',
    gorsel,
    ...(String(cevap) === 'Doğru' ? { alternatifCevaplar: ['Evet', 'evet', 'doğru'] } : {}),
  }));
}

export function sablonTest(sablonlar, kazanim, onek, karistir) {
  return sablonlar.map(([soru, cevap, secenekler, gorsel], i) => ({
    id: `${onek}-e${i + 1}`,
    kazanimKodu: kazanim,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler: karistir(secenekler),
    ipucu: '',
    gorsel,
  }));
}

export function genisletTema100(baseFn, ekA, ekT, meta, karistir, sasirtmaTest = null) {
  const base = baseFn(karistir);
  const ekAlistirma = sablonAlistirma(ekA, meta.kazanimKodu, 'ek');
  let ekTest = sablonTest(ekT, meta.kazanimKodu, 'ek', karistir);

  if (sasirtmaTest) {
    const idx = ekTest.length - 1;
    const secenekler = sasirtmaTest.secenekler
      ? karistir(sasirtmaTest.secenekler)
      : ekTest[idx].secenekler;
    ekTest[idx] = { ...ekTest[idx], ...sasirtmaTest, secenekler, sasirtma: true };
  }

  return {
    id: meta.id,
    baslik: meta.baslik,
    kazanimKodu: meta.kazanimKodu,
    anlatim: base.anlatim,
    alistirma: yenidenNumarala([...base.alistirma, ...ekAlistirma].slice(0, 50), meta.onekA),
    test: yenidenNumarala([...base.test, ...ekTest].slice(0, 50), meta.onekT),
  };
}
