/** PARTI-HB-TEMA7 — Çevre (100 görselli soru). */

import { toplumVeCevre } from './gorev-hb1-questions.mjs';
import { CE_EK_A, CE_EK_T } from './gorev-hayat-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function cevreTema7(karistir) {
  return genisletTema100(
    toplumVeCevre,
    CE_EK_A,
    CE_EK_T,
    {
      id: 'cevre',
      baslik: 'Çevre',
      kazanimKodu: 'HB.2.2.4',
      onekA: 'ce-a',
      onekT: 'ce-t',
    },
    karistir,
    {
      soru: '🎭 Çöpleri yere atmak doğru mudur?',
      dogruCevap: 'Hayır',
      secenekler: ['Evet', 'Bazen', 'Hayır', 'Parkta olur'],
      ipucu: 'Çöpleri kutuya atmalıyız!',
    },
  );
}
