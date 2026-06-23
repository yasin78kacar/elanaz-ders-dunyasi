/** Türkçe Tema 4 — Okuma (100 görselli soru: okuma anlama + hikâye + bilgi metni). */

import { okumaAnlama } from './gorev-turkce1-questions.mjs';
import { hikayeMetni, bilgiMetni } from './gorev-turkce2-questions.mjs';

const KAZANIM = 'TUR.2.1.3';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

export function okuma(karistir) {
  const okumaKonu = okumaAnlama(karistir);
  const hikaye = hikayeMetni(karistir);
  const bilgi = bilgiMetni(karistir);

  const tumAlistirma = [
    ...okumaKonu.alistirma,
    ...hikaye.alistirma,
    ...bilgi.alistirma,
  ];
  const tumTest = [
    ...okumaKonu.test,
    ...hikaye.test,
    ...bilgi.test,
  ];

  const alistirmaKaynak = [
    ...tumAlistirma,
    ...tumTest.slice(0, Math.max(0, 50 - tumAlistirma.length)),
  ].slice(0, 50);
  const testBaslangic = Math.max(0, 50 - tumAlistirma.length);
  const testKaynak = tumTest.slice(testBaslangic, testBaslangic + 50);

  return {
    id: 'okuma',
    baslik: 'Okuma',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        ...okumaKonu.anlatim.ekranlar,
        ...hikaye.anlatim.ekranlar.slice(0, 1),
        ...bilgi.anlatim.ekranlar.slice(0, 1),
      ],
    },
    alistirma: yenidenNumarala(alistirmaKaynak, 'ok-a'),
    test: yenidenNumarala(testKaynak, 'ok-t'),
  };
}
