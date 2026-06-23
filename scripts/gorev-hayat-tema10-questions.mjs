/** PARTI-HB-TEMA10 — Yaşam Becerileri (100 görselli soru). */

import { mesleklerVeCalismaHayati } from './gorev-hb2-questions.mjs';
import { dogalAfetlerVeKorunma } from './gorev-hb3-questions.mjs';
import { birlestir100 } from './tema-konu-builder.mjs';

export function yasamBecerileriTema10(karistir) {
  const meslek = mesleklerVeCalismaHayati(karistir);
  const afet = dogalAfetlerVeKorunma(karistir);
  const konu = birlestir100(meslek, afet, {
    id: 'yasam-becerileri',
    baslik: 'Yaşam Becerileri',
    kazanimKodu: 'HB.2.3.4',
    onekA: 'yb-a',
    onekT: 'yb-t',
    anlatim: meslek.anlatim,
  });
  const lastTest = konu.test[konu.test.length - 1];
  konu.test[konu.test.length - 1] = {
    ...lastTest,
    soru: '🎭 Depremde ne yapmalıyız?',
    dogruCevap: 'Sağlam yerin altına gireriz',
    secenekler: ['Koşarız', 'Pencereden atlarız', 'Sağlam yerin altına gireriz', 'Bağırırız'],
    ipucu: 'Depremde çök-kapan-tutun!',
    sasirtma: true,
  };
  return konu;
}
