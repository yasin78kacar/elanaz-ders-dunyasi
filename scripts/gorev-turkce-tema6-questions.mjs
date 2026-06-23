/** Türkçe Tema 6 — Cümle (100 görselli soru: cümle bilgisi + noktalama/yazım). */

import { cumleBilgisi, noktalamaVeYazim } from './gorev-turkce1-questions.mjs';

const KAZANIM = 'TUR.2.1.4';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

export function cumle(karistir) {
  const cumleKonu = cumleBilgisi(karistir);
  const noktalama = noktalamaVeYazim(karistir);

  return {
    id: 'cumle',
    baslik: 'Cümle',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        ...cumleKonu.anlatim.ekranlar,
        ...noktalama.anlatim.ekranlar,
      ],
    },
    alistirma: yenidenNumarala([...cumleKonu.alistirma, ...noktalama.alistirma], 'cm-a'),
    test: yenidenNumarala([...cumleKonu.test, ...noktalama.test], 'cm-t'),
  };
}
