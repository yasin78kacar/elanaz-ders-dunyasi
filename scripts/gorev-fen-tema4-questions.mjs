/** PARTI-FEN-TEMA4 — İnsan ve Sağlık (100 görselli soru). */

import { saglikliYasamVeCevre } from './gorev-fen3-questions.mjs';
import { SY_EK_A, SY_EK_T } from './gorev-fen-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function insanVeSaglikTema4(karistir) {
  return genisletTema100(
    saglikliYasamVeCevre,
    SY_EK_A,
    SY_EK_T,
    {
      id: 'insan-ve-saglik',
      baslik: 'İnsan ve Sağlık',
      kazanimKodu: 'FEN.2.3.3',
      onekA: 'is-a',
      onekT: 'is-t',
    },
    karistir,
    {
      soru: '🎭 Sadece şeker yiyerek sağlıklı olabilir miyiz?',
      dogruCevap: 'Hayır',
      secenekler: ['Evet', 'Her gün', 'Hayır', 'Sadece yazın'],
      ipucu: 'Dengeli beslenme gerekir!',
    },
  );
}
