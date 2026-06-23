/** Matematik Tema 10 — Zaman (100 görselli soru). */

import { zaman as zamanTemel } from './gorev-tema4-questions.mjs';

const KAZANIM = 'MAT.2.5.4';

function olc(sahne) {
  return { tur: 'olcme', mod: 'anlatim', sahne };
}
function saa(saat, dakika = 0, dijital = false) {
  return { tur: 'olcme', mod: 'zaman', sahne: dijital ? 'dijital' : 'analog', saat, dakika };
}
function saaCift(s1, d1, s2, d2) {
  return { tur: 'olcme', mod: 'zaman', sahne: 'iki-saat', saat: s1, dakika: d1, saat2: s2, dakika2: d2 };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function zamanEkAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });

  ekle('zm2-a1', "Uzun kol 12'de, kısa kol 1'de. Saat kaç?", 'Saat 1', '', { gorsel: saa(1, 0) });
  ekle('zm2-a2', "Uzun kol 6'da, kısa kol 4 ile 5 arasında. Saat kaç?", 'Saat 4 buçuk', '', { gorsel: saa(4, 30) });
  ekle('zm2-a3', 'Dijital saat 03:30. Saat kaç?', 'Saat 3 buçuk', '', { gorsel: saa(3, 30, true) });
  ekle('zm2-a4', "Öğle yemeği saat 12'de. Hangi saat?", 'Saat 12', '', { gorsel: saa(12, 0) });
  ekle('zm2-a5', "Uzun kol 12'de, kısa kol 5'te. Saat kaç?", 'Saat 5', '', { gorsel: saa(5, 0) });
  ekle('zm2-a6', "Uzun kol 6'da, kısa kol 7 ile 8 arasında. Saat kaç?", 'Saat 7 buçuk', '', { gorsel: saa(7, 30) });
  ekle('zm2-a7', 'Dijital saat 02:00. Saat kaç?', 'Saat 2', '', { gorsel: saa(2, 0, true) });
  ekle('zm2-a8', "Akşam yemeği saat 7'de. Saat kaç?", 'Saat 7', '', { gorsel: saa(7, 0) });
  ekle('zm2-a9', "Uzun kol 6'da, kısa kol 10 ile 11 arasında. Saat kaç?", 'Saat 10 buçuk', '', { gorsel: saa(10, 30) });
  ekle('zm2-a10', 'Yarım saat kaç dakikadır?', '30 dakika', '', { gorsel: olc('zm-yarim-saat') });
  ekle('zm2-a11', "Ders saat 10'da başladı, 11'de bitti. Kaç saat sürdü?", '1 saat', '', { gorsel: saaCift(10, 0, 11, 0) });
  ekle('zm2-a12', "Uzun kol 12'de, kısa kol 8'de. Saat kaç?", 'Saat 8', '', { gorsel: saa(8, 0) });
  ekle('zm2-a13', 'Dijital saat 06:30. Saat kaç?', 'Saat 6 buçuk', '', { gorsel: saa(6, 30, true) });
  ekle('zm2-a14', "Sabah 6'da kalktım, 7 buçukta okula gittim. Kaç saat geçti?", '1,5 saat', '', { gorsel: saaCift(6, 0, 7, 30) });
  ekle('zm2-a15', "Uzun kol 6'da, kısa kol 11 ile 12 arasında. Saat kaç?", 'Saat 11 buçuk', '', { gorsel: saa(11, 30) });
  ekle('zm2-a16', '2 saat kaç dakikadır?', '120 dakika', '', { gorsel: olc('zm-120-dakika') });
  ekle('zm2-a17', "Film saat 2'de başladı, 4 buçukta bitti. Kaç saat sürdü?", '2,5 saat', '', { gorsel: saaCift(2, 0, 4, 30) });
  ekle('zm2-a18', "Uzun kol 12'de, kısa kol 3'te. Saat kaç?", 'Saat 3', '', { gorsel: saa(3, 0) });
  ekle('zm2-a19', 'Dijital saat 04:00. Saat kaç?', 'Saat 4', '', { gorsel: saa(4, 0, true) });
  ekle('zm2-a20', "Elanaz saat 5'te parka gitti, saat 6'da döndü. Kaç saat kaldı?", '1 saat', '', { gorsel: saaCift(5, 0, 6, 0) });
  ekle('zm2-a21', "Uzun kol 6'da, kısa kol 1 ile 2 arasında. Saat kaç?", 'Saat 1 buçuk', '', { gorsel: saa(1, 30) });
  ekle('zm2-a22', "Öğle arası saat 12 buçukta. Uzun kol nerede?", "6'da", '', { gorsel: saa(12, 30) });
  ekle('zm2-a23', "Ders saat 1'de başladı, 2 saat sürdü. Hangi saatte bitti?", 'Saat 3', '', { gorsel: saaCift(1, 0, 3, 0) });
  ekle('zm2-a24', 'Dijital saat 09:00. Saat kaç?', 'Saat 9', '', { gorsel: saa(9, 0, true) });
  ekle('zm2-a25', "Gece saat 10'da yattım, sabah 6'da kalktım. Kaç saat uyudum?", '8 saat', '', { gorsel: saaCift(22, 0, 6, 0) });

  return sorular;
}

function zamanEkTest(karistir) {
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

  ekle('zm2-t1', "Uzun kol 12'de, kısa kol 1'de. Saat kaç?", 'Saat 1', ['Saat 12', 'Saat 1', 'Saat 6', 'Saat 11'], '', { gorsel: saa(1, 0) });
  ekle('zm2-t2', "Uzun kol 6'da, kısa kol 4-5 arası. Saat kaç?", 'Saat 4 buçuk', ['Saat 4', 'Saat 5', 'Saat 4 buçuk', 'Saat 5 buçuk'], '', { gorsel: saa(4, 30) });
  ekle('zm2-t3', 'Dijital saat 03:30 hangi saati gösterir?', 'Saat 3 buçuk', ['Saat 3', 'Saat 4', 'Saat 3 buçuk', 'Saat 2 buçuk'], '', { gorsel: saa(3, 30, true) });
  ekle('zm2-t4', 'Yarım saat kaç dakikadır?', '30', ['15', '30', '60', '45'], '', { gorsel: olc('zm-yarim-saat') });
  ekle('zm2-t5', "Okul 08:30'da başlıyor. Bu saat nasıl okunur?", 'Saat 8 buçuk', ['Saat 8', 'Saat 9', 'Saat 8 buçuk', 'Saat 7 buçuk'], '', { gorsel: saa(8, 30) });
  ekle('zm2-t6', "Ders saat 11'de başladı, 12'de bitti. Kaç saat sürdü?", '1', ['0,5', '1', '2', '3'], '', { gorsel: saaCift(11, 0, 12, 0) });
  ekle('zm2-t7', "Uzun kol 12'de, kısa kol 8'de. Saat kaç?", 'Saat 8', ['Saat 4', 'Saat 8', 'Saat 12', 'Saat 2'], '', { gorsel: saa(8, 0) });
  ekle('zm2-t8', '2 saat kaç dakikadır?', '120', ['60', '90', '120', '180'], '', { gorsel: olc('zm-120-dakika') });
  ekle('zm2-t9', "Film saat 2'de başladı, 3 buçukta bitti. Kaç saat sürdü?", '1,5', ['1', '2', '1,5', '2,5'], '', { gorsel: saaCift(2, 0, 3, 30) });
  ekle('zm2-t10', 'Dijital saat 06:00. Saat kaç?', 'Saat 6', ['Saat 5', 'Saat 7', 'Saat 6', 'Saat 12'], '', { gorsel: saa(6, 0, true) });
  ekle('zm2-t11', "Uzun kol 6'da, kısa kol 10-11 arası. Saat kaç?", 'Saat 10 buçuk', ['Saat 10', 'Saat 11', 'Saat 10 buçuk', 'Saat 9 buçuk'], '', { gorsel: saa(10, 30) });
  ekle('zm2-t12', "Elanaz saat 4'te parka gitti, saat 5 buçukta döndü. Kaç saat kaldı?", '1,5', ['1', '2', '1,5', '0,5'], '', { gorsel: saaCift(4, 0, 5, 30) });
  ekle('zm2-t13', "Öğle yemeği saat 12'de. Uzun kol nerede?", "12'de", ["6'da", "3'te", "12'de", "9'da"], '', { gorsel: saa(12, 0) });
  ekle('zm2-t14', 'Dijital saat 01:30. Saat kaç?', 'Saat 1 buçuk', ['Saat 1', 'Saat 2', 'Saat 1 buçuk', 'Saat 12 buçuk'], '', { gorsel: saa(1, 30, true) });
  ekle('zm2-t15', "Sabah 7'de kalktım, 8 buçukta okula gittim. Kaç saat geçti?", '1,5', ['1', '2', '1,5', '0,5'], '', { gorsel: saaCift(7, 0, 8, 30) });
  ekle('zm2-t16', "Uzun kol 12'de, kısa kol 3'te. Saat kaç?", 'Saat 3', ['Saat 9', 'Saat 3', 'Saat 6', 'Saat 12'], '', { gorsel: saa(3, 0) });
  ekle('zm2-t17', 'Buçukta uzun kol nerededir?', "6'da", ["12'de", "3'te", "6'da", "9'da"], '', { gorsel: saa(5, 30) });
  ekle('zm2-t18', "Ders saat 9 buçukta başladı, 1 saat sürdü. Hangi saatte bitti?", 'Saat 10 buçuk', ['Saat 10', 'Saat 11', 'Saat 10 buçuk', 'Saat 9'], '', { gorsel: saaCift(9, 30, 10, 30) });
  ekle('zm2-t19', 'Dijital saat 05:30. Saat kaç?', 'Saat 5 buçuk', ['Saat 5', 'Saat 6', 'Saat 5 buçuk', 'Saat 4 buçuk'], '', { gorsel: saa(5, 30, true) });
  ekle('zm2-t20', "Gece 9'da yattım, sabah 7'de kalktım. Kaç saat uyudum?", '10', ['8', '9', '10', '11'], '', { gorsel: saaCift(21, 0, 7, 0) });
  ekle('zm2-t21', "Uzun kol 6'da, kısa kol 7-8 arası. Saat kaç?", 'Saat 7 buçuk', ['Saat 7', 'Saat 8', 'Saat 7 buçuk', 'Saat 6 buçuk'], '', { gorsel: saa(7, 30) });
  ekle('zm2-t22', "Akşam yemeği saat 7'de. Saat kaç?", 'Saat 7', ['Saat 6', 'Saat 8', 'Saat 7', 'Saat 5'], '', { gorsel: saa(7, 0) });
  ekle('zm2-t23', '3 saat kaç dakikadır?', '180', ['120', '150', '180', '200'], '', { gorsel: olc('zm-180-dakika') });
  ekle('zm2-t24', "Film saat 3 buçukta başladı, 2 saat sürdü. Hangi saatte bitti?", 'Saat 5 buçuk', ['Saat 5', 'Saat 6', 'Saat 5 buçuk', 'Saat 4 buçuk'], '', { gorsel: saaCift(3, 30, 5, 30) });
  ekle('zm2-t25', 'Dijital saat 12:30. Saat kaç?', 'Saat 12 buçuk', ['Saat 12', 'Saat 1', 'Saat 12 buçuk', 'Saat 11 buçuk'], '', { gorsel: saa(12, 30, true) });

  return sorular;
}

export function zamanTema10(karistir) {
  const temel = zamanTemel(karistir);
  return {
    ...temel,
    id: 'zaman-tema10',
    alistirma: [...temel.alistirma, ...zamanEkAlistirma()],
    test: [...temel.test, ...zamanEkTest(karistir)],
  };
}
