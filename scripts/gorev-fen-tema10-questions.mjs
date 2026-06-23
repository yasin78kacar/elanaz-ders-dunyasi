/** PARTI-FEN-TEMA10 — Yer ve Uzay (100 görselli soru). */

import { dunyaVeEvren } from './gorev-fen3-questions.mjs';
import { DE_EK_A, DE_EK_T } from './gorev-fen-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function yerVeUzayTema10(karistir) {
  return genisletTema100(
    dunyaVeEvren,
    DE_EK_A,
    DE_EK_T,
    {
      id: 'yer-ve-uzay',
      baslik: 'Yer ve Uzay',
      kazanimKodu: 'FEN.2.3.1',
      onekA: 'yu-a',
      onekT: 'yu-t',
    },
    karistir,
    {
      soru: '🎭 Ay kendi ışığını üretir mi?',
      dogruCevap: 'Hayır, Güneş yansıtır',
      secenekler: ['Evet', 'Her gece', 'Hayır, Güneş yansıtır', 'Yıldız gibidir'],
      ipucu: 'Ay Güneş ışığını yansıtır!',
    },
  );
}
