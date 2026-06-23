/** PARTI-HB-TEMA8 — İletişim (100 görselli soru). */

import { aileVeArkadaslik } from './gorev-hb1-questions.mjs';
import { IL_EK_A, IL_EK_T } from './gorev-hayat-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function iletisimTema8(karistir) {
  return genisletTema100(
    aileVeArkadaslik,
    IL_EK_A,
    IL_EK_T,
    {
      id: 'iletisim',
      baslik: 'İletişim',
      kazanimKodu: 'HB.2.2.5',
      onekA: 'il-a',
      onekT: 'il-t',
    },
    karistir,
    {
      soru: '🎭 Başkasının sözünü kesmek kibar mıdır?',
      dogruCevap: 'Hayır',
      secenekler: ['Evet', 'Bazen', 'Hayır', 'Hızlı konuşunca'],
      ipucu: 'Dinlemek iyi iletişimin parçasıdır!',
    },
  );
}
