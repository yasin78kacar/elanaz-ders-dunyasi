/** Türkçe Tema 10 — Yazı / Bilgi Metni (100 görselli soru). */

import { bilgiMetni } from './gorev-turkce2-questions.mjs';
import { metinAnlamaVeYorumlama } from './gorev-turkce4-questions.mjs';

const KAZANIM = 'TUR.2.2.3';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

function sahne(sahneKey, nesne) {
  return { tur: 'turkce', mod: 'sahne', sahne: sahneKey, nesne };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function yaziEkAlistirma() {
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

  ekle('yz-ea1', 'Bilgi metni ne amaçla yazılır?', 'Bilgi vermek', '', { gorsel: sahne('bilgi-metni-etiketi', 'kitap') });
  ekle('yz-ea2', 'Ansiklopedi hangi yazı türüne örnektir?', 'Bilgi metni', '', { gorsel: sahne('ansiklopedi', 'kitap') });
  ekle('yz-ea3', 'Bilgi metninde başlık ne işe yarar?', 'Konuyu gösterir', '', { gorsel: sahne('bilgi-baslik', 'kitap') });
  ekle('yz-ea4', 'Bilgi metninde gerçek olay mı anlatılır?', 'Hayır, bilgi verilir', '', { gorsel: sahne('bilgi-icerik', 'kitap') });
  ekle('yz-ea5', 'Ders kitapları hangi yazı türündendir?', 'Bilgi metni', '', { gorsel: sahne('ders-kitabi', 'kitap') });
  ekle('yz-ea6', 'Bilgi metninde sonuç bölümü ne yapar?', 'Konuyu özetler', '', { gorsel: sahne('bilgi-sonuc', 'kitap') });
  ekle('yz-ea7', 'Broşürler hangi yazı türüne örnektir?', 'Bilgi metni', '', { gorsel: sahne('bilgi-brosur', 'kitap') });
  ekle('yz-ea8', 'Bilgi metninde kahraman olur mu?', 'Hayır', '', { gorsel: sahne('bilgi-fark', 'kitap') });
  ekle('yz-ea9', 'Bilgi metni ile hikâye arasındaki fark nedir?', 'Bilgi metni olay değil bilgi anlatır', '', { gorsel: sahne('bilgi-hikaye-fark', 'kitap') });
  ekle('yz-ea10', 'Bilgi metninde kafiye aranır mı?', 'Hayır', '', { gorsel: sahne('bilgi-siir-fark', 'kitap') });
  ekle('yz-ea11', 'Bilgi metninde gelişme bölümü ne içerir?', 'Ayrıntılı bilgiler', '', { gorsel: sahne('bilgi-gelisme', 'kitap') });
  ekle('yz-ea12', 'Bilgi metni okurken ne yapmalıyız?', 'Dikkatle okuyup not almalıyız', '', { gorsel: sahne('bilgi-okuma', 'kitap') });
  return sorular;
}

function yaziEkTest(karistir) {
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

  ekle('yz-et1', 'Bilgi metni ne amaçla yazılır?', 'Bilgi vermek', ['Duygu aktarmak', 'Bilgi vermek', 'Şarkı söylemek', 'Oyun oynamak'], '', { gorsel: sahne('bilgi-metni-etiketi', 'kitap') });
  ekle('yz-et2', 'Aşağıdakilerden hangisi bilgi metni örneğidir?', 'Ansiklopedi', ['Masal kitabı', 'Ansiklopedi', 'Şiir defteri', 'Günlük'], '', { gorsel: sahne('ansiklopedi', 'kitap') });
  ekle('yz-et3', 'Bilgi metninde başlık ne işe yarar?', 'Konuyu gösterir', ['Şiiri bitirir', 'Konuyu gösterir', 'Kahramanı tanıtır', 'Olayı sonlandırır'], '', { gorsel: sahne('bilgi-baslik', 'kitap') });
  ekle('yz-et4', 'Bilgi metni ile hikâye arasındaki fark hangisidir?', 'Bilgi metni olay değil bilgi anlatır', ['İkisi de şiirdir', 'Bilgi metni olay değil bilgi anlatır', 'Hikâyede bilgi yoktur', 'Fark yoktur'], '', { gorsel: sahne('bilgi-hikaye-fark', 'kitap') });
  ekle('yz-et5', 'Ders kitapları hangi yazı türündendir?', 'Bilgi metni', ['Hikâye', 'Şiir', 'Bilgi metni', 'Masal'], '', { gorsel: sahne('ders-kitabi', 'kitap') });
  ekle('yz-et6', 'Bilgi metninde kafiye aranır mı?', 'Hayır', ['Evet, her zaman', 'Hayır', 'Bazen', 'Sadece sonunda'], '', { gorsel: sahne('bilgi-siir-fark', 'kitap') });
  ekle('yz-et7', 'Bilgi metninde kahraman bulunur mu?', 'Hayır', ['Evet, her zaman', 'Hayır', 'Sadece başında', 'Bazen'], '', { gorsel: sahne('bilgi-fark', 'kitap') });
  ekle('yz-et8', 'Bilgi metninde gelişme bölümü ne içerir?', 'Ayrıntılı bilgiler', ['Sadece başlık', 'Ayrıntılı bilgiler', 'Kafiye', 'Dize'], '', { gorsel: sahne('bilgi-gelisme', 'kitap') });
  ekle('yz-et9', 'Broşürler hangi yazı türüne örnektir?', 'Bilgi metni', ['Hikâye', 'Şiir', 'Bilgi metni', 'Tiyatro'], '', { gorsel: sahne('bilgi-brosur', 'kitap') });
  ekle('yz-et10', 'Bilgi metninde sonuç bölümü ne yapar?', 'Konuyu özetler', ['Yeni kahraman ekler', 'Konuyu özetler', 'Şiir yazar', 'Oyun başlatır'], '', { gorsel: sahne('bilgi-sonuc', 'kitap') });
  ekle('yz-et11', 'Bilgi metni okurken ne yapmalıyız?', 'Dikkatle okuyup anlamalıyız', ['Hızlıca geçmeliyiz', 'Dikkatle okuyup anlamalıyız', 'Ezberlemeliyiz', 'Atlamalıyız'], '', { gorsel: sahne('bilgi-okuma', 'kitap') });
  ekle('yz-et12', 'Bu metinlerin ortak türü nedir?', 'Bilgi metni', ['Hikâye', 'Şiir', 'Bilgi metni', 'Mektup'], '', { gorsel: sahne('bilgi-metni-etiketi', 'kitap') });
  return sorular;
}

export function yazi(karistir) {
  const bilgi = bilgiMetni(karistir);
  const metin = metinAnlamaVeYorumlama(karistir);
  const ekA = yaziEkAlistirma();
  const ekT = yaziEkTest(karistir);

  const tumAlistirma = [...bilgi.alistirma, ...metin.alistirma, ...ekA];
  const tumTest = [...bilgi.test, ...metin.test, ...ekT];

  const alistirmaKaynak = [
    ...tumAlistirma,
    ...tumTest.slice(0, Math.max(0, 50 - tumAlistirma.length)),
  ].slice(0, 50);
  const testBaslangic = Math.max(0, 50 - tumAlistirma.length);
  const testKaynak = tumTest.slice(testBaslangic, testBaslangic + 50);

  return {
    id: 'yazi',
    baslik: 'Yazı',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        ...bilgi.anlatim.ekranlar,
        ...metin.anlatim.ekranlar.slice(0, 1),
      ],
    },
    alistirma: yenidenNumarala(alistirmaKaynak, 'yz-a'),
    test: yenidenNumarala(testKaynak, 'yz-t'),
  };
}
