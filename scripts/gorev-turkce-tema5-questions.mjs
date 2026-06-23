/** Türkçe Tema 5 — Anlam (100 görselli soru: kelime bilgisi + ileri anlam). */

import { kelimeBilgisi } from './gorev-turkce1-questions.mjs';
import { kelimeVeAnlamBilgisiIleri } from './gorev-turkce4-questions.mjs';

const KAZANIM = 'TUR.2.1.2';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

export function anlam(karistir) {
  const kelime = kelimeBilgisi(karistir);
  const ileri = kelimeVeAnlamBilgisiIleri(karistir);

  const alistirma = [...kelime.alistirma, ...ileri.alistirma];
  const test = [...kelime.test, ...ileri.test];

  return {
    id: 'anlam',
    baslik: 'Anlam',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        ...kelime.anlatim.ekranlar,
        ...ileri.anlatim.ekranlar,
      ],
    },
    alistirma: yenidenNumarala(alistirma, 'an-a'),
    test: yenidenNumarala(test, 'an-t'),
  };
}
