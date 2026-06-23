/** PARTI-HB-TEMA3 — Okul (100 görselli soru: 50 detaylı + 50 genişletme). */

import { okulVeSinif } from './gorev-hb1-questions.mjs';

const KAZANIM = 'HB.2.1.1';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

function anl(sahne) {
  return { tur: 'hb', mod: 'anlatim', sahne };
}
function nesne(nesne, vurgu) {
  return { tur: 'hb', mod: 'nesne', nesne, vurgu };
}
function grup(nesneler, vurgu) {
  return { tur: 'hb', mod: 'grup', nesneler, vurgu };
}
function sahne(sahne, ozellik) {
  return { tur: 'hb', mod: 'sahne', sahne, ozellik };
}

function okulEkAlistirma() {
  const s = [];
  const e = (id, soru, cevap, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? 'metin',
      ...extra,
    });
  e('ok2-e1', 'Okula zamanında gitmeli miyiz?', 'Evet', '', { gorsel: sahne('okul-kapisi', 'zamaninda') });
  e('ok2-e2', 'Sınıfta öğretmeni dinlemeliyiz.', 'Evet', '', { gorsel: sahne('ogretmen-anlatim', 'dinleme') });
  e('ok2-e3', 'Ders araçlarımızı düzenli tutmalıyız.', 'Evet', '', { gorsel: grup(['kalem', 'kitap', 'defter'], 'duzen') });
  e('ok2-e4', 'Teneffüste bahçede oynarız.', 'Evet', '', { gorsel: sahne('okul-bahcesi', 'oyun') });
  e('ok2-e5', 'Arkadaşlarımıza yardım etmeliyiz.', 'Evet', '', { gorsel: nesne('arkadas', 'yardim') });
  e('ok2-e6', 'Ödevlerimizi zamanında yapmalıyız.', 'Evet', '', { gorsel: nesne('defter', 'odev') });
  e('ok2-e7', 'Okulda kurallara uymalıyız.', 'Evet', '', { gorsel: sahne('sinif-ici', 'kural') });
  e('ok2-e8', 'Kütüphanede sessiz olmalıyız.', 'Evet', '', { gorsel: nesne('kutuphane', 'sessizlik') });
  e('ok2-e9', 'Okulda sportif etkinliklere katılabiliriz.', 'Evet', '', { gorsel: nesne('spor', 'etkinlik') });
  e('ok2-e10', 'Sınıfta el kaldırarak konuşuruz.', 'Evet', '', { gorsel: sahne('el-kaldirma', 'kural') });
  e('ok2-e11', 'Okulda başkalarının eşyasına dokunmayız.', 'Evet', '', { gorsel: nesne('canta', 'izin') });
  e('ok2-e12', 'Okul servisinde emniyet kemeri takarız.', 'Evet', '', { gorsel: nesne('emniyetKemeri', 'guvenlik') });
  e('ok2-e13', 'Okulda öğretmenimize saygı gösteririz.', 'Evet', '', { gorsel: nesne('ogretmen', 'saygi') });
  e('ok2-e14', 'Sınıf panosuna çalışmalarımızı asarız.', 'Evet', '', { gorsel: sahne('sinif-panosu', 'basari') });
  e('ok2-e15', 'Okulda yeni arkadaşlar edinebiliriz.', 'Evet', '', { gorsel: nesne('arkadas', 'arkadaslik') });
  e('ok2-e16', 'Derslerde not almak faydalıdır.', 'Evet', '', { gorsel: nesne('defter', 'not') });
  e('ok2-e17', 'Okul bahçesinde çiçeklere zarar vermeyiz.', 'Evet', '', { gorsel: nesne('fidan', 'koruma') });
  e('ok2-e18', 'Okulda yemekhanede sıra bekleriz.', 'Evet', '', { gorsel: sahne('yemekhane', 'sira') });
  e('ok2-e19', 'Okulda başarılı olmak için çalışırız.', 'Evet', '', { gorsel: nesne('kitap', 'calisma') });
  e('ok2-e20', 'Okulda kavga etmek doğru değildir.', 'Evet', '', { gorsel: sahne('arkadaslik', 'baris') });
  e('ok2-e21', 'Okulda ders dinlemek öğrenmemizi sağlar.', 'Evet', '', { gorsel: sahne('ogretmen-anlatim', 'dinleme') });
  e('ok2-e22', 'Okulda herkesin fikrine saygı duyarız.', 'Evet', '', { gorsel: sahne('sinif-ici', 'saygi') });
  e('ok2-e23', 'Okulda kitap okumayı severiz.', 'Evet', '', { gorsel: nesne('kitap', 'okuma') });
  e('ok2-e24', 'Okul eğitim aldığımız önemli yerdir.', 'Evet', '', { gorsel: nesne('okul', 'egitim') });
  e('ok2-e25', 'Okulda temizlik görevlilerine saygı gösteririz.', 'Evet', '', { gorsel: nesne('temizlikGorevlisi', 'saygi') });
  return s;
}

function okulEkTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  const yanlis = (dogru) => [dogru, 'Hayır', 'Gereksiz', 'Fark etmez'];
  e('ok2-e1', 'Okula zamanında gitmeli miyiz?', 'Evet', yanlis('Evet'), '', { gorsel: sahne('okul-kapisi', 'zamaninda') });
  e('ok2-e2', 'Sınıfta öğretmeni dinlemeliyiz.', 'Evet', yanlis('Evet'), '', { gorsel: sahne('ogretmen-anlatim', 'dinleme') });
  e('ok2-e3', 'Ders araçlarımızı nasıl tutmalıyız?', 'Düzenli', ['Dağınık', 'Düzenli', 'Kırık', 'Kayıp'], '', { gorsel: grup(['kalem', 'kitap', 'defter'], 'duzen') });
  e('ok2-e4', 'Teneffüste nerede oynarız?', 'Bahçede', ['Sınıfta', 'Bahçede', 'Koridorda', 'Tuvalette'], '', { gorsel: sahne('okul-bahcesi', 'oyun') });
  e('ok2-e5', 'Arkadaşlarımıza nasıl davranmalıyız?', 'Yardımsever', ['Kaba', 'Yardımsever', 'Kıskanç', 'Bağırarak'], '', { gorsel: nesne('arkadas', 'yardim') });
  e('ok2-e6', 'Ödevlerimizi ne zaman yapmalıyız?', 'Zamanında', ['Hiç', 'Zamanında', 'Sınavdan sonra', 'Yaz tatilinde'], '', { gorsel: nesne('defter', 'odev') });
  e('ok2-e7', 'Okulda kurallara uymalı mıyız?', 'Evet', yanlis('Evet'), '', { gorsel: sahne('sinif-ici', 'kural') });
  e('ok2-e8', 'Kütüphanede nasıl olmalıyız?', 'Sessiz', ['Gürültülü', 'Sessiz', 'Koşarak', 'Bağırarak'], '', { gorsel: nesne('kutuphane', 'sessizlik') });
  e('ok2-e9', 'Okulda sportif etkinliklere katılabilir miyiz?', 'Evet', yanlis('Evet'), '', { gorsel: nesne('spor', 'etkinlik') });
  e('ok2-e10', 'Sınıfta konuşmak için ne yaparız?', 'El kaldırırız', ['Bağırırız', 'El kaldırırız', 'Masaya vururuz', 'Koşarız'], '', { gorsel: sahne('el-kaldirma', 'kural') });
  e('ok2-e11', 'Başkasının eşyasına izinsiz dokunmak doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Her zaman'], '', { gorsel: nesne('canta', 'izin') });
  e('ok2-e12', 'Okul servisinde ne takarız?', 'Emniyet kemeri', ['Şapka', 'Emniyet kemeri', 'Eldiven', 'Atkı'], '', { gorsel: nesne('emniyetKemeri', 'guvenlik') });
  e('ok2-e13', 'Öğretmenimize nasıl davranmalıyız?', 'Saygılı', ['Kaba', 'Saygılı', 'Umursamaz', 'Bağırarak'], '', { gorsel: nesne('ogretmen', 'saygi') });
  e('ok2-e14', 'Sınıf panosuna ne asarız?', 'Çalışmalarımızı', ['Çöp', 'Çalışmalarımızı', 'Oyuncak', 'Taş'], '', { gorsel: sahne('sinif-panosu', 'basari') });
  e('ok2-e15', 'Okulda yeni arkadaşlar edinebilir miyiz?', 'Evet', yanlis('Evet'), '', { gorsel: nesne('arkadas', 'arkadaslik') });
  e('ok2-e16', 'Derslerde not almak faydalı mıdır?', 'Evet', yanlis('Evet'), '', { gorsel: nesne('defter', 'not') });
  e('ok2-e17', 'Okul bahçesindeki çiçeklere zarar vermek doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Her zaman'], '', { gorsel: nesne('fidan', 'koruma') });
  e('ok2-e18', 'Yemekhanede ne yaparız?', 'Sıra bekleriz', ['Koşarız', 'Sıra bekleriz', 'Bağırırız', 'Masaya çıkarız'], '', { gorsel: sahne('yemekhane', 'sira') });
  e('ok2-e19', 'Okulda başarılı olmak için ne yaparız?', 'Çalışırız', ['Uyuruz', 'Çalışırız', 'Oynamayız', 'Kaçarız'], '', { gorsel: nesne('kitap', 'calisma') });
  e('ok2-e20', 'Okulda kavga etmek doğru mudur?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Her zaman'], '', { gorsel: sahne('arkadaslik', 'baris') });
  e('ok2-e21', 'Ders dinlemek ne sağlar?', 'Öğrenmemizi', ['Uyumamızı', 'Öğrenmemizi', 'Oynamamızı', 'Koşmamızı'], '', { gorsel: sahne('ogretmen-anlatim', 'dinleme') });
  e('ok2-e22', 'Herkesin fikrine saygı duymalı mıyız?', 'Evet', yanlis('Evet'), '', { gorsel: sahne('sinif-ici', 'saygi') });
  e('ok2-e23', 'Okulda kitap okumak güzel midir?', 'Evet', yanlis('Evet'), '', { gorsel: nesne('kitap', 'okuma') });
  e('ok2-e24', '🎭 Okul sadece oyun oynamak için midir?', 'Hayır, eğitim aldığımız yerdir', ['Evet, sadece oyun', 'Hayır, eğitim aldığımız yerdir', 'Sadece yemek için', 'Hiç gitmeyiz'], 'Okulda öğreniriz!', { gorsel: nesne('okul', 'egitim'), sasirtma: true });
  e('ok2-e25', 'Temizlik görevlilerine nasıl davranmalıyız?', 'Saygılı', ['Kaba', 'Saygılı', 'Umursamaz', 'Bağırarak'], '', { gorsel: nesne('temizlikGorevlisi', 'saygi') });
  return s;
}

export function okulTema3(karistir) {
  const os = okulVeSinif(karistir);
  const ekA = okulEkAlistirma();
  const ekT = okulEkTest(karistir);

  return {
    id: 'okul',
    baslik: 'Okul',
    kazanimKodu: KAZANIM,
    anlatim: os.anlatim,
    alistirma: yenidenNumarala([...os.alistirma, ...ekA], 'ok-a'),
    test: yenidenNumarala([...os.test, ...ekT], 'ok-t'),
  };
}
