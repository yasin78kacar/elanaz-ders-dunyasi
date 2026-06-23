/** PARTI-FEN-TEMA5 — Madde (100 görselli soru). */

import { maddeVeOzellikleri } from './gorev-fen2-questions.mjs';
import { MO_EK_A, MO_EK_T } from './gorev-fen-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function maddeTema5(karistir) {
  return genisletTema100(
    maddeVeOzellikleri,
    MO_EK_A,
    MO_EK_T,
    {
      id: 'madde',
      baslik: 'Madde',
      kazanimKodu: 'FEN.2.2.1',
      onekA: 'md-a',
      onekT: 'md-t',
    },
    karistir,
    {
      soru: '🎭 Cam kırılsa bile yumuşak kalır mı?',
      dogruCevap: 'Hayır, kırılgandır',
      secenekler: ['Evet, yumuşaktır', 'Hayır, kırılgandır', 'Elastiktir', 'Sünger gibidir'],
      ipucu: 'Cam kırılgan bir maddedir!',
    },
  );
}
