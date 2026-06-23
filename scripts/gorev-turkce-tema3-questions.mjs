/** Türkçe Tema 3 — Kelime Yazma (100 görselli soru: yazma + sözcük bilgisi). */

import { yazmaBecerileri, sozcukVeDilBilgisi } from './gorev-turkce3-questions.mjs';

const KAZANIM = 'TUR.2.1.2';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

export function kelimeYazma(karistir) {
  const yazma = yazmaBecerileri(karistir);
  const sozcuk = sozcukVeDilBilgisi(karistir);

  return {
    id: 'kelime-yazma',
    baslik: 'Kelime Yazma',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        ...yazma.anlatim.ekranlar,
        ...sozcuk.anlatim.ekranlar,
      ],
    },
    alistirma: yenidenNumarala([...yazma.alistirma, ...sozcuk.alistirma], 'ky-a'),
    test: yenidenNumarala([...yazma.test, ...sozcuk.test], 'ky-t'),
  };
}
