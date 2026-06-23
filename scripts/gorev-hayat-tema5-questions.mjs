/** PARTI-HB-TEMA5 — Sağlık (100 görselli soru). */

import { saglikVeTemizlik } from './gorev-hb2-questions.mjs';
import { SG_EK_A, SG_EK_T } from './gorev-hayat-temalar.mjs';
import { genisletTema100 } from './tema-100-genislet.mjs';

export function saglikTema5(karistir) {
  return genisletTema100(
    saglikVeTemizlik,
    SG_EK_A,
    SG_EK_T,
    {
      id: 'saglik',
      baslik: 'Sağlık',
      kazanimKodu: 'HB.2.2.1',
      onekA: 'sg-a',
      onekT: 'sg-t',
    },
    karistir,
    {
      soru: '🎭 Ellerimizi yıkamadan yemek yemek doğru mudur?',
      dogruCevap: 'Hayır',
      secenekler: ['Evet', 'Bazen', 'Hayır', 'Fark etmez'],
      ipucu: 'Temiz eller sağlığımızı korur!',
    },
  );
}
