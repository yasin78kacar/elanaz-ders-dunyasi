/** PARTI-FEN-TEMA9 — Kuvvet ve Hareket (100 görselli soru). */

import { kuvvetVeHareket } from './gorev-fen2-questions.mjs';
import { KH_EK_A, KH_EK_T } from './gorev-fen-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function kuvvetVeHareketTema9(karistir) {
  return genisletTema100(
    kuvvetVeHareket,
    KH_EK_A,
    KH_EK_T,
    {
      id: 'kuvvet-ve-hareket',
      baslik: 'Kuvvet ve Hareket',
      kazanimKodu: 'FEN.2.2.2',
      onekA: 'kv-a',
      onekT: 'kv-t',
    },
    karistir,
    {
      soru: '🎭 Kuvvet olmadan top kendiliğinden hareket eder mi?',
      dogruCevap: 'Hayır',
      secenekler: ['Evet', 'Her zaman', 'Hayır', 'Sadece rüzgarda'],
      ipucu: 'Hareket başlatmak için kuvvet gerekir!',
    },
  );
}
