/** PARTI-FEN-TEMA7 — Işık (100 görselli soru). */

import { isikVeSes } from './gorev-fen2-questions.mjs';
import { IS_EK_A, IS_EK_T } from './gorev-fen-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function isikTema7(karistir) {
  return genisletTema100(
    isikVeSes,
    IS_EK_A,
    IS_EK_T,
    {
      id: 'isik',
      baslik: 'Işık',
      kazanimKodu: 'FEN.2.2.4',
      onekA: 'ik-a',
      onekT: 'ik-t',
    },
    karistir,
    {
      soru: '🎭 Karanlık odada renkleri görebilir miyiz?',
      dogruCevap: 'Hayır, ışık gerekir',
      secenekler: ['Evet', 'Bazen', 'Hayır, ışık gerekir', 'Gözlerimiz yeter'],
      ipucu: 'Görmek için ışığa ihtiyacımız vardır!',
    },
  );
}
