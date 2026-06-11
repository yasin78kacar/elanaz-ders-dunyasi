/** GOREV-3E — Geometrik Cisimler anlatım ve soru görselleri. */

const nesne = (sahne) => ({ tur: 'nesne', sahne });

const SORU_GORSELLERI = {
  'geo-t1': nesne('top'),
  'geo-t2': nesne('sut-kutusu'),
  '3c-g1-t5': nesne('top'),
  '3c-g1-t10': nesne('portakal-misket'),
  '3c-g1-t14': nesne('karpuz'),
  '3c-g1-t20': nesne('sira'),
  '3c-g1-t22': nesne('hediye-kutusu'),
};

const GEO_E1_IKONLAR = {
  Top: 'top',
  Kitap: 'kitap',
  Portakal: 'portakal',
  'Hediye kutusu': 'hediye-kutusu',
};

export function geoGorselEkle(konu) {
  const ekranlar = konu.anlatim.ekranlar.map((ekran, i) => ({
    ...ekran,
    gorsel: nesne(`anlatim-${i + 1}`),
  }));

  const test = konu.test.map((soru) => {
    let guncel = SORU_GORSELLERI[soru.id] ? { ...soru, gorsel: SORU_GORSELLERI[soru.id] } : soru;
    if (guncel.id === 'geo-e1' && guncel.ciftler) {
      guncel = {
        ...guncel,
        ciftler: guncel.ciftler.map((c) => ({
          ...c,
          ikon: GEO_E1_IKONLAR[c.sol],
        })),
      };
    }
    return guncel;
  });

  return {
    ...konu,
    anlatim: { ekranlar },
    test,
  };
}
