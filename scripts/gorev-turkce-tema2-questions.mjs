/** Türkçe Tema 2 — Ses Bilgisi / Hece (100 görselli soru). */

import { seslerVeHeceler } from './gorev-turkce1-questions.mjs';

const KAZANIM = 'TUR.2.1.1';

function hece(kelime, heceler, nesne) {
  return { tur: 'turkce', mod: 'hece', kelime, heceler, nesne };
}
function nesne(kelime, nesne, vurgu) {
  return { tur: 'turkce', mod: 'nesne', kelime, nesne, vurgu };
}

function cevapTipi(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function ekAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipi(cevap),
      ...extra,
    });

  const heceSorular = [
    ['domates', ['do', 'ma', 'tes'], 'meyve'],
    ['portakal', ['por', 'ta', 'kal'], 'meyve'],
    ['muz', ['muz'], 'meyve'],
    ['karpuz', ['kar', 'puz'], 'meyve'],
    ['salata', ['sa', 'la', 'ta'], 'meyve'],
    ['yumurta', ['yu', 'mur', 'ta'], 'default'],
    ['peynir', ['pey', 'nir'], 'default'],
    ['ekmek', ['ek', 'mek'], 'default'],
    ['çorba', ['çor', 'ba'], 'default'],
    ['biber', ['bi', 'ber'], 'default'],
    ['havuç', ['ha', 'vuç'], 'meyve'],
    ['soğan', ['so', 'ğan'], 'default'],
    ['patates', ['pa', 'ta', 'tes'], 'default'],
    ['makarna', ['ma', 'kar', 'na'], 'default'],
    ['balık', ['ba', 'lık'], 'default'],
    ['tavuk', ['ta', 'vuk'], 'kus'],
    ['süt', ['süt'], 'default'],
    ['ayran', ['ay', 'ran'], 'default'],
    ['reçel', ['re', 'çel'], 'default'],
    ['bal', ['bal'], 'default'],
    ['fındık', ['fın', 'dık'], 'default'],
    ['ceviz', ['ce', 'viz'], 'default'],
    ['üzüm', ['ü', 'züm'], 'meyve'],
    ['kiraz', ['ki', 'raz'], 'meyve'],
    ['armut', ['ar', 'mut'], 'meyve'],
  ];

  heceSorular.forEach(([kelime, heceler, nesneAd], i) => {
    ekle(`sb-a${26 + i}`, `"${kelime}" kelimesini hecele`, heceler.join('-'), 'Sesli harf sayısı = hece sayısı', {
      gorsel: hece(kelime, heceler, nesneAd),
      cevapTipi: 'metin',
    });
  });

  return sorular;
}

function ekTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  const testler = [
    ['"domates" kaç heceli?', '3', ['2', '3', '4', '1'], ['do', 'ma', 'tes'], 'meyve'],
    ['"portakal" kelimesini doğru heceleyen hangisi?', 'por-ta-kal', ['por-tak-al', 'por-ta-kal', 'p-or-ta-kal', 'porta-kal'], ['por', 'ta', 'kal'], 'meyve'],
    ['"muz" kelimesi kaç heceli?', '1', ['2', '3', '1', '4'], ['muz'], 'meyve'],
    ['"karpuz" kelimesini doğru heceleyen hangisi?', 'kar-puz', ['ka-rpuz', 'kar-puz', 'karp-uz', 'karpu-z'], ['kar', 'puz'], 'meyve'],
    ['"yumurta" kaç heceli?', '3', ['2', '4', '3', '5'], ['yu', 'mur', 'ta'], 'default'],
    ['"ekmek" kelimesinde kaç sesli harf var?', '2', ['1', '3', '2', '4'], null, 'default', 'sesli'],
    ['"çorba" kelimesini doğru heceleyen hangisi?', 'çor-ba', ['ç-or-ba', 'çor-ba', 'çorb-a', 'ço-rba'], ['çor', 'ba'], 'default'],
    ['"patates" kaç heceli?', '3', ['2', '4', '3', '5'], ['pa', 'ta', 'tes'], 'default'],
    ['"balık" kelimesi kaç heceli?', '2', ['1', '3', '2', '4'], ['ba', 'lık'], 'default'],
    ['"süt" kelimesi kaç heceli?', '1', ['2', '3', '1', '4'], ['süt'], 'default'],
    ['"üzüm" kelimesinde kaç sesli harf var?', '2', ['1', '3', '2', '4'], null, 'meyve', 'sesli'],
    ['"kiraz" kelimesini doğru heceleyen hangisi?', 'ki-raz', ['kir-az', 'ki-raz', 'k-iraz', 'kira-z'], ['ki', 'raz'], 'meyve'],
    ['"armut" kaç heceli?', '2', ['1', '3', '2', '4'], ['ar', 'mut'], 'meyve'],
    ['"makarna" kelimesinde kaç sesli harf var?', '3', ['2', '4', '3', '5'], ['ma', 'kar', 'na'], 'default', 'sesli'],
    ['"fındık" kelimesini doğru heceleyen hangisi?', 'fın-dık', ['fın-dık', 'fı-ndık', 'find-ık', 'fınd-ık'], ['fın', 'dık'], 'default'],
    ['"ceviz" kelimesinde kaç sessiz harf var?', '3', ['2', '4', '3', '1'], null, 'default', 'sessiz'],
    ['"reçel" kaç heceli?', '2', ['1', '3', '2', '4'], ['re', 'çel'], 'default'],
    ['"ayran" kelimesinde kaç sesli harf var?', '2', ['1', '3', '2', '4'], null, 'default', 'sesli'],
    ['"soğan" kelimesini doğru heceleyen hangisi?', 'so-ğan', ['s-o-ğan', 'so-ğan', 'soğ-an', 'sog-an'], ['so', 'ğan'], 'default'],
    ['"havuç" kaç heceli?', '2', ['1', '3', '2', '4'], ['ha', 'vuç'], 'meyve'],
    ['"biber" kelimesinde kaç sesli harf var?', '2', ['1', '3', '2', '4'], null, 'default', 'sesli'],
    ['"salata" kaç heceli?', '3', ['2', '4', '3', '5'], ['sa', 'la', 'ta'], 'meyve'],
    ['"peynir" kelimesini doğru heceleyen hangisi?', 'pey-nir', ['pe-ynir', 'pey-nir', 'peyn-ir', 'p-eynir'], ['pey', 'nir'], 'default'],
    ['"tavuk" kelimesinde kaç sessiz harf var?', '3', ['2', '4', '3', '1'], ['ta', 'vuk'], 'kus'],
    ['🎭 "bal" kelimesi kaç heceli?', '1', ['2', '3', '1', '4'], ['bal'], 'default'],
  ];

  testler.forEach(([soru, cevap, sec, heceler, nesneAd, vurgu], i) => {
    const kelime = soru.match(/"([^"]+)"/)?.[1] ?? '';
    const gorsel = heceler
      ? hece(kelime, heceler, nesneAd)
      : nesne(kelime, nesneAd, vurgu);
    ekle(`sb-t${26 + i}`, soru, cevap, sec, '', {
      gorsel,
      sasirtma: soru.includes('🎭'),
    });
  });

  return sorular;
}

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

export function sesBilgisi(karistir) {
  const kaynak = seslerVeHeceler(karistir);
  const alistirmaKaynak = [...kaynak.alistirma, ...ekAlistirma()];
  const testKaynak = [...kaynak.test, ...ekTest(karistir)];

  return {
    id: 'ses-bilgisi',
    baslik: 'Ses Bilgisi',
    kazanimKodu: KAZANIM,
    anlatim: kaynak.anlatim,
    alistirma: yenidenNumarala(alistirmaKaynak, 'sb-a'),
    test: yenidenNumarala(testKaynak, 'sb-t'),
  };
}
