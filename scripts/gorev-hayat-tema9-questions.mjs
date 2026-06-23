/** PARTI-HB-TEMA9 — Duygular (100 görselli soru). */

import { aileDuygular } from './gorev-hayat-duygular-questions.mjs';
import { DY_EK_A, DY_EK_T } from './gorev-hayat-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function duygularTema9(karistir) {
  return genisletTema100(
    aileDuygular,
    DY_EK_A,
    DY_EK_T,
    {
      id: 'duygular',
      baslik: 'Duygular',
      kazanimKodu: 'HB.2.1.4',
      onekA: 'dy-a',
      onekT: 'dy-t',
    },
    karistir,
    {
      soru: '🎭 Üzüntü hissetmek kötü bir şey midir?',
      dogruCevap: 'Hayır, doğaldır',
      secenekler: ['Evet, kötüdür', 'Hiç hissetmeyiz', 'Hayır, doğaldır', 'Sadece yetişkinler'],
      ipucu: 'Tüm duygular doğaldır!',
    },
  );
}
