/** PARTI-HB-TEMA4 — Toplum (100 görselli soru). */

import { toplumVeCevre } from './gorev-hb1-questions.mjs';
import { TP_EK_A, TP_EK_T } from './gorev-hayat-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function toplumTema4(karistir) {
  return genisletTema100(
    toplumVeCevre,
    TP_EK_A,
    TP_EK_T,
    {
      id: 'toplum',
      baslik: 'Toplum',
      kazanimKodu: 'HB.2.1.3',
      onekA: 'tp-a',
      onekT: 'tp-t',
    },
    karistir,
    {
      soru: '🎭 Trafik kurallarına uymak gereksiz midir?',
      dogruCevap: 'Hayır',
      secenekler: ['Evet', 'Bazen', 'Hayır', 'Sadece yetişkinler için'],
      ipucu: 'Kurallar güvenliğimiz içindir!',
    },
  );
}
