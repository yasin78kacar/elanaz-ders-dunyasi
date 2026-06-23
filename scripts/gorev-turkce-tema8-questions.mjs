/** Türkçe Tema 8 — Hikâye (100 görselli soru: yazı türü + hikâye metni). */

import { hikayeMetni } from './gorev-turkce2-questions.mjs';
import { yazTuruHikaye } from './gorev-turkce5-questions.mjs';

const KAZANIM = 'TUR.2.5.1';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

function sahne(sahneKey, nesne) {
  return { tur: 'turkce', mod: 'sahne', sahne: sahneKey, nesne };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function hikayeEkAlistirma() {
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

  ekle('hk-ea1', 'Hikâyede kahraman kimdir?', 'Olayı yaşayan kişi', '', { gorsel: sahne('hikaye-kahraman', 'kitap') });
  ekle('hk-ea2', 'Hikâyenin geçtiği yere ne denir?', 'Mekân', '', { gorsel: sahne('hikaye-mekan', 'ev') });
  ekle('hk-ea3', 'Hikâyede olaylar hangi sırayla anlatılır?', 'Başlangıç, gelişme, sonuç', '', { gorsel: sahne('hikaye-ozellikleri', 'kitap') });
  ekle('hk-ea4', 'Hikâyeyi anlamak için hangi soru sorulur?', 'Ne oldu?', '', { gorsel: sahne('hikaye-soru-kartlari', 'hikaye') });
  ekle('hk-ea5', 'Hikâyenin sonunda ne olur?', 'Olay çözülür', '', { gorsel: sahne('hikaye-sonuc', 'kitap') });
  ekle('hk-ea6', 'Hikâye metninin özelliği nedir?', 'Olay anlatır', '', { gorsel: sahne('hikaye-turu', 'kitap') });
  return sorular;
}

function hikayeEkTest(karistir) {
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

  ekle('hk-et1', 'Hikâyede "kahraman" ne demektir?', 'Olayı yaşayan kişi', ['Yazarın adı', 'Metnin başlığı', 'Olayı yaşayan kişi', 'Son cümle'], '', { gorsel: sahne('hikaye-kahraman', 'kitap') });
  ekle('hk-et2', 'Hikâyenin giriş bölümünde ne anlatılır?', 'Kahraman ve yer tanıtılır', ['Sadece sonuç', 'Kahraman ve yer tanıtılır', 'Sadece şiir', 'Tablo okunur'], '', { gorsel: sahne('hikaye-giris', 'hikaye') });
  ekle('hk-et3', 'Aşağıdakilerden hangisi hikâye metninin özelliğidir?', 'Kahraman, olay ve yer içerir', ['Sadece bilgi verir', 'Kahraman, olay ve yer içerir', 'Dizelerden oluşur', 'Kafiyelidir'], '', { gorsel: sahne('hikaye-ozellikleri', 'kitap') });
  ekle('hk-et4', 'Hikâyede sonuç bölümü neyi anlatır?', 'Olayın nasıl bittiğini', ['Kahramanın adını', 'Mekanın rengini', 'Olayın nasıl bittiğini', 'Yalnızca zamanı'], '', { gorsel: sahne('hikaye-sonuc', 'kitap') });
  ekle('hk-et5', 'Aşağıdakilerden hangisi hikâye başlığı olabilir?', 'Kayıp Uçurtma', ['Rüzgar Nedir?', 'Kayıp Uçurtma', 'Çarpım Tablosu', 'Mevsimler'], '', { gorsel: sahne('hikaye-kitabi', 'kitap') });
  ekle('hk-et6', 'Bu metinlerin ortak özelliği nedir?', 'Hepsi bir olayı anlatan hikâyedir', ['Hepsi şiirdir', 'Hepsi bilgi metnidir', 'Hepsi bir olayı anlatan hikâyedir', 'Hepsi haber metnidir'], '', { gorsel: sahne('hikaye-turu', 'kitap') });
  return sorular;
}

export function hikaye(karistir) {
  const yazTuru = yazTuruHikaye(karistir);
  const metin = hikayeMetni(karistir);
  const ekA = hikayeEkAlistirma();
  const ekT = hikayeEkTest(karistir);

  const tumAlistirma = [...yazTuru.alistirma, ...metin.alistirma, ...ekA];
  const tumTest = [...yazTuru.test, ...metin.test, ...ekT];

  const alistirmaKaynak = [
    ...tumAlistirma,
    ...tumTest.slice(0, Math.max(0, 50 - tumAlistirma.length)),
  ].slice(0, 50);
  const testBaslangic = Math.max(0, 50 - tumAlistirma.length);
  const testKaynak = tumTest.slice(testBaslangic, testBaslangic + 50);

  return {
    id: 'hikaye',
    baslik: 'Hikâye',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        ...yazTuru.anlatim.ekranlar,
        ...metin.anlatim.ekranlar.slice(0, 1),
      ],
    },
    alistirma: yenidenNumarala(alistirmaKaynak, 'hk-a'),
    test: yenidenNumarala(testKaynak, 'hk-t'),
  };
}
