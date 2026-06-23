/** Tema başına 50 alıştırma + 50 test birleştirme / genişletme. */

import { yenidenNumarala } from './tema-100-utils.mjs';

export function birlestir100(konu1, konu2, meta) {
  const al = [...konu1.alistirma, ...konu2.alistirma].slice(0, 50);
  const te = [...konu1.test, ...konu2.test].slice(0, 50);
  return {
    id: meta.id,
    baslik: meta.baslik,
    kazanimKodu: meta.kazanimKodu ?? konu1.kazanimKodu,
    anlatim: meta.anlatim ?? konu1.anlatim ?? konu2.anlatim,
    alistirma: yenidenNumarala(al, meta.onekA ?? 'a'),
    test: yenidenNumarala(te, meta.onekT ?? 't'),
  };
}

export function genislet100(konu, ekAlistirma, ekTest, meta) {
  const al = [...konu.alistirma, ...ekAlistirma];
  const te = [...konu.test, ...ekTest];
  while (al.length < 50 && te.length > 50) al.push(te.shift());
  while (te.length < 50 && al.length > 50) te.push(al.pop());
  return {
    id: meta.id,
    baslik: meta.baslik,
    kazanimKodu: meta.kazanimKodu ?? konu.kazanimKodu,
    anlatim: meta.anlatim ?? konu.anlatim,
    alistirma: yenidenNumarala(al.slice(0, 50), meta.onekA ?? 'a'),
    test: yenidenNumarala(te.slice(0, 50), meta.onekT ?? 't'),
  };
}

export function doldur100(birincil, havuzFns, meta, karistir) {
  const al = [...birincil.alistirma];
  const te = [...birincil.test];
  const soruVar = (arr, s) => arr.some((x) => x.soru === s.soru);

  for (const fn of havuzFns) {
    if (al.length >= 50 && te.length >= 50) break;
    const h = fn(karistir);
    for (const s of h.alistirma) {
      if (al.length < 50 && !soruVar(al, s)) al.push({ ...s });
    }
    for (const s of h.test) {
      if (te.length < 50 && !soruVar(te, s)) te.push({ ...s });
    }
  }

  return {
    id: meta.id,
    baslik: meta.baslik,
    kazanimKodu: meta.kazanimKodu ?? birincil.kazanimKodu,
    anlatim: meta.anlatim ?? birincil.anlatim,
    alistirma: yenidenNumarala(al.slice(0, 50), meta.onekA ?? 'a'),
    test: yenidenNumarala(te.slice(0, 50), meta.onekT ?? 't'),
  };
}
