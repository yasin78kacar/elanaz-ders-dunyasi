/** PARTI-FEN-TEMA1 — Canlılar (100 görselli soru: cansızlar + bitkiler + hayvanlar). */

import { bitkiler, canlilarVeCansizlar, hayvanlar } from './gorev-fen1-questions.mjs';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

export function canlilar(karistir) {
  const cc = canlilarVeCansizlar(karistir);
  const bt = bitkiler(karistir);
  const hv = hayvanlar(karistir);

  const alistirmaKaynak = [
    ...cc.alistirma.slice(0, 17),
    ...bt.alistirma.slice(0, 17),
    ...hv.alistirma.slice(0, 16),
  ];
  const testKaynak = [
    ...cc.test.slice(0, 17),
    ...bt.test.slice(0, 17),
    ...hv.test.slice(0, 16),
  ];

  return {
    id: 'canlilar',
    baslik: 'Canlılar',
    kazanimKodu: 'FEN.2.1',
    anlatim: {
      ekranlar: [...cc.anlatim.ekranlar, ...bt.anlatim.ekranlar, ...hv.anlatim.ekranlar],
    },
    alistirma: yenidenNumarala(alistirmaKaynak, 'cn-a'),
    test: yenidenNumarala(testKaynak, 'cn-t'),
  };
}
