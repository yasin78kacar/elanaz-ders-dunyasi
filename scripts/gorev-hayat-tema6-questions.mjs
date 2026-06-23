/** PARTI-HB-TEMA6 — Güvenlik (100 görselli soru). */

import { guvenliYasam } from './gorev-hb2-questions.mjs';
import { GV_EK_A, GV_EK_T } from './gorev-hayat-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function guvenlikTema6(karistir) {
  return genisletTema100(
    guvenliYasam,
    GV_EK_A,
    GV_EK_T,
    {
      id: 'guvenlik',
      baslik: 'Güvenlik',
      kazanimKodu: 'HB.2.2.2',
      onekA: 'gv-a',
      onekT: 'gv-t',
    },
    karistir,
    {
      soru: '🎭 Yangın çıkınca 112\'yi aramak gerekir mi?',
      dogruCevap: 'Evet',
      secenekler: ['Hayır', 'Bekleriz', 'Evet', 'Gizleniriz'],
      ipucu: 'Acil durumda 112\'yi ararız!',
    },
  );
}
