/** Tema başına 50 alıştırma + 50 test (100 soru) yardımcıları. */

export function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

export function tema100(konu, alistirma, test, onekA = 'a', onekT = 't') {
  return {
    ...konu,
    alistirma: yenidenNumarala(alistirma.slice(0, 50), onekA),
    test: yenidenNumarala(test.slice(0, 50), onekT),
  };
}

export function soruFiltre(sorular, fn) {
  return sorular.filter(fn);
}

/** Işık/ses sorularını id veya görsel ipucuna göre ayırır. */
export function isikSesAyir(konu) {
  const isikAnahtar = /ışık|isik|güneş|gunes|ayna|ampul|fener|karanlık|karanlik|yıldız|yildiz|mum|lamba|simsek|şimşek/i;
  const sesAnahtar = /ses|kulak|zil|gitar|flut|korna|piyano|horoz|tren|ambulans|siren|televizyon|nehir|selale|yagmur|yağmur|ruzgar|rüzgar/i;
  const ayir = (s) => {
    const metin = `${s.soru} ${s.dogruCevap}`;
    if (sesAnahtar.test(metin)) return 'ses';
    if (isikAnahtar.test(metin)) return 'isik';
    return 'isik';
  };
  const alA = konu.alistirma.filter((s) => ayir(s) === 'isik');
  const alS = konu.alistirma.filter((s) => ayir(s) === 'ses');
  const teA = konu.test.filter((s) => ayir(s) === 'isik');
  const teS = konu.test.filter((s) => ayir(s) === 'ses');
  return { alA, alS, teA, teS };
}
