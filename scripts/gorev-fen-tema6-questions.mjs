/** PARTI-FEN-TEMA6 — Enerji (100 görselli soru). */

import { havaDurumuVeMevsimler } from './gorev-fen3-questions.mjs';
import { EN_EK_A, EN_EK_T } from './gorev-fen-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function enerjiTema6(karistir) {
  return genisletTema100(
    havaDurumuVeMevsimler,
    EN_EK_A,
    EN_EK_T,
    {
      id: 'enerji',
      baslik: 'Enerji',
      kazanimKodu: 'FEN.2.3.4',
      onekA: 'en-a',
      onekT: 'en-t',
    },
    karistir,
    {
      soru: '🎭 Güneş enerjisi bir gün biter mi?',
      dogruCevap: 'Hayır, yenilenebilir',
      secenekler: ['Evet, biter', 'Sadece yazın', 'Hayır, yenilenebilir', 'Pillerle biter'],
      ipucu: 'Güneş sürekli enerji verir!',
    },
  );
}
