/** PARTI-FEN-TEMA8 — Ses (100 görselli soru). */

import { isikVeSes } from './gorev-fen2-questions.mjs';
import { SE_EK_A, SE_EK_T } from './gorev-fen-temalar.mjs';
import { genislet100 } from './tema-konu-builder.mjs';
import { isikSesAyir } from './tema-100-utils.mjs';
import { sablonAlistirma, sablonTest } from './tema-100-genislet.mjs';

const KAZANIM = 'FEN.2.2.5';

function anl(sahne) {
  return { tur: 'fen', mod: 'anlatim', sahne };
}
function nesne(n, vurgu) {
  return { tur: 'fen', mod: 'nesne', nesne: n, vurgu };
}

export function sesTema8(karistir) {
  const is = isikVeSes(karistir);
  const { alS, teS } = isikSesAyir(is);
  const temel = { ...is, id: 'ses', baslik: 'Ses', alistirma: alS, test: teS };
  const seEkA2 = [
    ['Müzik aleti sesi yapay mıdır?', 'Evet', nesne('gitar')],
    ['Dalga sesi doğal mıdır?', 'Evet', nesne('deniz')],
    ['Kahkaha yüksek ses midir?', 'Evet', nesne('mutluluk')],
    ['Fısıltı düşük ses midir?', 'Evet', nesne('fisilda')],
    ['Gürültü kulakları yorar mı?', 'Evet', nesne('kulaklik')],
    ['Doğada kuş sesi duyulur mu?', 'Evet', nesne('kus')],
    ['Kapı zili ses çıkarır mı?', 'Evet', nesne('zil')],
    ['Ses dalgalar halinde yayılır.', 'Doğru', anl('is-anlatim-3')],
    ['Kulaklarımızla işitir miyiz?', 'Evet', nesne('kulak')],
    ['Sessiz kütüphanede ne yaparız?', 'Sessiz oluruz', nesne('kutuphane')],
    ['Yüksek sesten kaçınmalı mıyız?', 'Evet', nesne('kulaklik')],
    ['Sesin kaynağı titreşimdir.', 'Doğru', anl('is-anlatim-3')],
    ['Horoz ötüşü doğal sestir.', 'Doğru', nesne('horoz')],
  ];
  const seEkT2 = seEkA2.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Bazen', 'Hiçbiri'], g]);
  const ekA = [...sablonAlistirma(SE_EK_A, KAZANIM, 'se'), ...sablonAlistirma(seEkA2, KAZANIM, 'se2')];
  let ekT = [...sablonTest(SE_EK_T, KAZANIM, 'se', karistir), ...sablonTest(seEkT2, KAZANIM, 'se2', karistir)];
  const last = ekT[ekT.length - 1];
  ekT[ekT.length - 1] = {
    ...last,
    soru: '🎭 Sessizlikte ses duyar mıyız?',
    dogruCevap: 'Hayır',
    secenekler: karistir(['Evet', 'Her zaman', 'Hayır', 'Bazen çok']),
    ipucu: 'Ses kaynağı olmadan ses duymayız!',
    sasirtma: true,
  };
  return genislet100(temel, ekA, ekT, {
    id: 'ses',
    baslik: 'Ses',
    kazanimKodu: KAZANIM,
    onekA: 'ss-a',
    onekT: 'ss-t',
  });
}
