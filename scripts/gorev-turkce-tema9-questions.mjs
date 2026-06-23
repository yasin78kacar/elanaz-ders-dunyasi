/** Türkçe Tema 9 — Şiir (100 görselli soru: yazı türü + şiir metni). */

import { siir } from './gorev-turkce2-questions.mjs';
import { yazTuruSiir } from './gorev-turkce5-questions.mjs';

const KAZANIM = 'TUR.2.5.2';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

function sahne(sahneKey, nesne) {
  return { tur: 'turkce', mod: 'sahne', sahne: sahneKey, nesne };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function siirEkAlistirma() {
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

  ekle('sr-ea1', 'Şiirde satırlara ne denir?', 'Dize', '', { gorsel: sahne('dize-sayimi', 'siir') });
  ekle('sr-ea2', 'Dizelerin bir araya gelmesiyle ne oluşur?', 'Kıta', '', { gorsel: sahne('kita-sayimi', 'siir') });
  ekle('sr-ea3', 'Şiirde ses uyumuna ne denir?', 'Kafiye', '', { gorsel: sahne('ritimli-dizeler', 'siir') });
  ekle('sr-ea4', 'Şiirde duyguyu güçlendiren söyleyişe ne denir?', 'Benzetme', '', { gorsel: sahne('siirde-anlatim', 'siir') });
  ekle('sr-ea5', 'Şiirin ana duygusunu bulmak ne işe yarar?', 'Şiiri daha iyi anlamamızı sağlar', '', { gorsel: sahne('ana-duygu', 'siir') });
  ekle('sr-ea6', 'Şiir türü olarak bu metin nedir?', 'Şiir', '', { gorsel: sahne('siir-kitabi', 'kitap') });
  return sorular;
}

function siirEkTest(karistir) {
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

  ekle('sr-et1', 'Şiirde kıta nedir?', 'Bir grup dizedir', ['Başlıktır', 'Bir grup dizedir', 'Noktadır', 'Uzun cümledir'], '', { gorsel: sahne('kita-sayimi', 'siir') });
  ekle('sr-et2', 'Aşağıdakilerden hangisi şiirin özelliğidir?', 'Dizeler ve ritim içerir', ['Sadece bilgi verir', 'Dizeler ve ritim içerir', 'Maddelerden oluşur', 'Tablo içerir'], '', { gorsel: sahne('siir-ozellik', 'siir') });
  ekle('sr-et3', 'Şiirde duyguyu artırmak için ne kullanılır?', 'Benzetme ve imgeler', ['Sayısal veriler', 'Grafikler', 'Benzetme ve imgeler', 'Dipnotlar'], '', { gorsel: sahne('siirde-anlatim', 'siir') });
  ekle('sr-et4', 'Hangi seçenek bir şiir başlığına uygundur?', 'Gece Yıldız', ['Matematik Soruları', 'Hava Durumu Raporu', 'Gece Yıldız', 'Sınıf Listesi'], '', { gorsel: sahne('siir-kitabi', 'kitap') });
  ekle('sr-et5', 'Şiirde tekrar eden ses uyumu ne sağlar?', 'Ahenk', ['Hız', 'Ahenk', 'Kural', 'Uzunluk'], '', { gorsel: sahne('ritimli-dizeler', 'siir') });
  ekle('sr-et6', 'Şiir türünde anlatım genellikle nasıldır?', 'Kısa, yoğun ve duyguludur', ['Uzun ve açıklayıcıdır', 'Kısa, yoğun ve duyguludur', 'Sadece resmi dildir', 'Kurallı listelerdir'], '', { gorsel: sahne('siir-turu', 'kitap') });
  return sorular;
}

export function siirYazisi(karistir) {
  const yazTuru = yazTuruSiir(karistir);
  const metin = siir(karistir);
  const ekA = siirEkAlistirma();
  const ekT = siirEkTest(karistir);

  const tumAlistirma = [...yazTuru.alistirma, ...metin.alistirma, ...ekA];
  const tumTest = [...yazTuru.test, ...metin.test, ...ekT];

  const alistirmaKaynak = [
    ...tumAlistirma,
    ...tumTest.slice(0, Math.max(0, 50 - tumAlistirma.length)),
  ].slice(0, 50);
  const testBaslangic = Math.max(0, 50 - tumAlistirma.length);
  const testKaynak = tumTest.slice(testBaslangic, testBaslangic + 50);

  return {
    id: 'siir-yazisi',
    baslik: 'Şiir',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        ...yazTuru.anlatim.ekranlar,
        ...metin.anlatim.ekranlar.slice(0, 1),
      ],
    },
    alistirma: yenidenNumarala(alistirmaKaynak, 'sr-a'),
    test: yenidenNumarala(testKaynak, 'sr-t'),
  };
}
