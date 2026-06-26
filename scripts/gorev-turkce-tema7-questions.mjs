/** Türkçe Tema 7 — Noktalama (100 görselli soru: temel + genişletilmiş). */

import { noktalamaVeYazim } from './gorev-turkce1-questions.mjs';

const KAZANIM = 'TUR.2.1.5';

function nokta(isaret) {
  return { tur: 'turkce', mod: 'noktalama', isaret };
}
function cumle(metin, opts = {}) {
  return { tur: 'turkce', mod: 'cumle', metin, ...opts };
}
function sahne(sahneKey, nesne) {
  return { tur: 'turkce', mod: 'sahne', sahne: sahneKey, nesne };
}
function kart(harfler) {
  return { tur: 'turkce', mod: 'kart', harfler };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

function noktalamaEkAlistirma() {
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

  ekle('nke-a1', '"Okula gidiyorum" cümlesinin sonuna ne gelir?', 'Nokta (.)', '', { gorsel: nokta('.') });
  ekle('nke-a2', '"Kaç yaşındasın" cümlesinin sonuna ne gelir?', 'Soru işareti (?)', '', { gorsel: nokta('?') });
  ekle('nke-a3', '"Yangına dikkat" cümlesinin sonuna ne gelir?', 'Ünlem işareti (!)', '', { gorsel: nokta('!') });
  ekle('nke-a4', '"elma armut kiraz" listesine virgül koy', 'elma, armut, kiraz', '', { gorsel: nokta(','), cevapTipi: 'metin' });
  ekle('nke-a5', '"selin okula gitti" cümlesini düzelt', 'Selin okula gitti.', '', { gorsel: cumle('selin okula gitti'), cevapTipi: 'metin' });
  ekle('nke-a6', '"izmir güzel bir şehirdir" cümlesini düzelt', 'İzmir güzel bir şehirdir.', '', { gorsel: sahne('sehir', 'izmir'), cevapTipi: 'metin' });
  ekle('nke-a7', '"ne kadar güzel" cümlesinin sonuna ne gelir?', '!', '', { gorsel: nokta('!'), cevapTipi: 'metin' });
  ekle('nke-a8', '"Bugün pazartesi mi" cümlesini düzelt', 'Bugün pazartesi mi?', '', { gorsel: nokta('?'), cevapTipi: 'metin' });
  ekle('nke-a9', 'Cümle hangi harfle başlamalıdır?', 'Büyük harfle', '', { gorsel: kart(['A', 'a', 'B']), cevapTipi: 'metin' });
  ekle('nke-a10', '"çocuklar oynadı koştu güldü" — virgülleri koy', 'oynadı, koştu, güldü', '', { gorsel: sahne('parkta-oyun', 'park'), cevapTipi: 'metin' });
  ekle('nke-a11', '"antalya sıcak bir şehirdir" cümlesini düzelt', 'Antalya sıcak bir şehirdir.', '', { gorsel: sahne('sehir', 'antalya'), cevapTipi: 'metin' });
  ekle('nke-a12', '"tamam anladım" cümlesinin sonuna ne gelir?', 'Nokta (.)', '', { gorsel: nokta('.'), cevapTipi: 'metin' });
  ekle('nke-a13', '"haydi koş" cümlesinin sonuna ne gelir?', 'Ünlem işareti (!)', '', { gorsel: nokta('!'), cevapTipi: 'metin' });
  ekle('nke-a14', '"Lale, Nil ve Arda parka gitti" cümlesinde kaç virgül var?', '2', '', { gorsel: nokta(','), cevapTipi: 'sayi' });
  ekle('nke-a15', '"van gölü türkiye\'dedir" cümlesini düzelt', "Van Gölü Türkiye'dedir.", '', { gorsel: sahne('dogal-guzellik', 'gol'), cevapTipi: 'metin' });
  ekle('nke-a16', 'Nokta işareti ne işe yarar?', 'Cümleyi bitirir', '', { gorsel: nokta('.'), cevapTipi: 'metin' });
  ekle('nke-a17', '"emre emir ve ege geldi" cümlesini düzelt', 'Emre, Emir ve Ege geldi.', '', { gorsel: nokta('.'), cevapTipi: 'metin' });
  ekle('nke-a18', '"okuldan geldim" cümlesini düzelt', 'Okuldan geldim.', '', { gorsel: cumle('okuldan geldim'), cevapTipi: 'metin' });
  ekle('nke-a19', 'Virgül hangi durumda kullanılır?', 'Sayarken', '', { gorsel: nokta(','), cevapTipi: 'metin' });
  ekle('nke-a20', '"bravo çok iyisin" cümlesini düzelt', 'Bravo! Çok iyisin!', '', { gorsel: sahne('selamlama', 'ogretmen'), cevapTipi: 'metin' });
  ekle('nke-a21', '"ders bitti mi" cümlesinin sonuna ne gelir?', 'Soru işareti (?)', '', { gorsel: nokta('?'), cevapTipi: 'metin' });
  ekle('nke-a22', '"sus lütfen" cümlesinin sonuna ne gelir?', 'Ünlem işareti (!)', '', { gorsel: nokta('!'), cevapTipi: 'metin' });
  ekle('nke-a23', '"bursa yeşil bir şehirdir" cümlesini düzelt', 'Bursa yeşil bir şehirdir.', '', { gorsel: sahne('sehir', 'bursa'), cevapTipi: 'metin' });
  ekle('nke-a24', '"kırmızı mavi sarı" renkleri virgülle yaz', 'kırmızı, mavi, sarı', '', { gorsel: kart(['kırmızı', 'mavi', 'sarı']), cevapTipi: 'metin' });
  ekle('nke-a25', '"iyi geceler" cümlesinin sonuna ne gelir?', 'Ünlem işareti (!)', '', { gorsel: sahne('gece-uyku', 'yatak'), cevapTipi: 'metin' });

  return sorular;
}

function noktalamaEkTest(karistir) {
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

  ekle('nke-t1', '"Kitabı okudum" cümlesinin sonuna hangi işaret gelir?', '.', [',', '?', '.', '!'], '', { gorsel: nokta('.') });
  ekle('nke-t2', '"Nerede oturuyorsun" cümlesinin sonuna hangi işaret gelir?', '?', ['.', '!', '?', ','], '', { gorsel: nokta('?') });
  ekle('nke-t3', '"Dikkat et" cümlesinin sonuna hangi işaret gelir?', '!', ['.', '?', ',', '!'], '', { gorsel: nokta('!') });
  ekle('nke-t4', 'Hangi cümle doğru yazılmıştır?', 'Zeynep okula gitti.', ['zeynep okula gitti.', 'Zeynep okula gitti.', 'zeynep Okula gitti.', 'Zeynep okula Gitti.'], '', { gorsel: cumle('Zeynep okula gitti.') });
  ekle('nke-t5', '"Portakal mandalina üzüm" listesine virgül nereye gelir?', 'Portakal, mandalina, üzüm', ['Portakal mandalina, üzüm', 'Portakal, mandalina, üzüm', 'Portakal, mandalina üzüm', 'Portakal mandalina üzüm'], '', { gorsel: nokta(',') });
  ekle('nke-t6', 'Hangi kelime büyük harfle yazılmalıdır?', 'bursa', ['masa', 'güzel', 'bursa', 'koşmak'], '', { gorsel: kart(['Bursa', 'masa', 'güzel', 'koşmak']) });
  ekle('nke-t7', '"Ne güzel bir manzara" cümlesine hangi işaret gelir?', '!', ['.', '?', ',', '!'], '', { gorsel: sahne('dogal-guzellik', 'dag') });
  ekle('nke-t8', 'Hangi cümlede yazım hatası vardır?', 'can koştu.', ['Ali geldi.', 'Ayşe İzmir\'de.', 'can koştu.', 'Hava güzel.'], '', { gorsel: cumle('Ali geldi.'), sasirtma: true });
  ekle('nke-t9', 'Virgül en çok hangi durumda kullanılır?', 'Sayarken', ['Cümle bitince', 'Soru sorarken', 'Sayarken', 'Ünlem yaparken'], '', { gorsel: nokta(',') });
  ekle('nke-t10', '"antalya güzel bir şehirdir" cümlesini doğru yaz.', 'Antalya güzel bir şehirdir.', ['antalya Güzel bir şehirdir.', 'Antalya güzel bir şehirdir.', 'Antalya Güzel Bir Şehirdir.', 'antalya güzel bir şehirdir.'], '', { gorsel: sahne('sehir', 'antalya') });
  ekle('nke-t11', 'Hangi cümlede noktalama doğrudur?', 'Lale, Can ve Efe oynadı.', ['lale can ve efe oynadı', 'Lale, Can ve Efe oynadı.', 'Lale Can ve Efe, oynadı.', 'lale, Can ve efe oynadı.'], '', { gorsel: cumle('Lale, Can ve Efe oynadı.'), sasirtma: true });
  ekle('nke-t12', 'Ünlem işareti hangi cümlede kullanılır?', 'Bravo!', ['Hava güzel.', 'Hava güzel mi?', 'Bravo!', 'Ali geldi.'], '', { gorsel: nokta('!') });
  ekle('nke-t13', '"deniz trabzon\'da yaşıyor" cümlesindeki hata nedir?', 'd ve t küçük', ['Sadece d küçük', 'Sadece t küçük', 'd ve t küçük', 'Hata yok'], '', { gorsel: cumle('deniz trabzon\'da yaşıyor') });
  ekle('nke-t14', 'Kaç noktalama işareti var: "Elif, Arda ve Mert geldi. Hava sıcak mı?"', '3', ['1', '2', '3', '4'], 'virgül + nokta + soru işareti = 3', { gorsel: cumle('Elif, Arda ve Mert geldi. Hava sıcak mı?'), sasirtma: true });
  ekle('nke-t15', 'Hangi cümle yanlış yazılmıştır?', 'elif uyudu.', ['Hava güzel.', 'Ali koştu.', 'elif uyudu.', 'Mehmet geldi.'], '', { gorsel: cumle('Ali koştu.') });
  ekle('nke-t16', '"iyi akşamlar nasılsın" cümlesine hangi işaretler eklenmeli?', 'Ünlem ve soru işareti', ['Nokta ve virgül', 'İki nokta', 'Ünlem ve soru işareti', 'İki virgül'], '', { gorsel: sahne('selamlama', 'aile') });
  ekle('nke-t17', '"İzmir Ege\'nin güzel şehridir" cümlesinde kaç büyük harf olmalı?', '2', ['1', '3', '2', '4'], 'İzmir ve Ege', { gorsel: cumle("İzmir Ege'nin güzel şehridir."), sasirtma: true });
  ekle('nke-t18', 'Hangi cümle doğru noktalanmıştır?', 'Harika, çok güzel!', ['Ali okula gitti?', 'Hava güzel mi.', 'Harika, çok güzel!', 'Ne güzel.'], '', { gorsel: cumle('Harika, çok güzel!') });
  ekle('nke-t19', 'Büyük harfle başlaması gerekmeyen kelime hangisidir?', 'kitap', ['Ayşe', 'İstanbul', 'kitap', 'Türkiye'], '', { gorsel: kart(['Ayşe', 'kitap', 'Ankara', 'koşmak']) });
  ekle('nke-t20', '"ece ilayda deniz ve arda sınıfa girdi" — kaç düzeltme gerekir?', '5', ['3', '4', '5', '6'], 'E, I, D, A büyük + virgüller + nokta', { gorsel: sahne('sinif-ici', 'sinif'), sasirtma: true });
  ekle('nke-t21', 'Virgül olmadan doğru yazılan cümle hangisidir?', '"Ali ve Ayşe geldi."', ['"Elma armut kiraz aldım"', '"Ali ve Ayşe geldi."', '"Ali Ayşe Mert geldi"', '"Koştum oynadım geldim"'], '', { gorsel: cumle('Ali ve Ayşe geldi.') });
  ekle('nke-t22', '"süper sen çok akıllısın" cümlesini doğru yaz.', 'Süper! Sen çok akıllısın!', ['süper! sen çok akıllısın.', 'Süper! Sen çok akıllısın!', 'Süper, sen çok akıllısın!', 'SÜPER sen çok akıllısın.'], '', { gorsel: sahne('selamlama', 'ogretmen'), sasirtma: true });
  ekle('nke-t23', 'Hangi cümlede gereksiz büyük harf kullanılmıştır?', 'Kitap Güzel.', ['Ali okula gitti.', 'Kitap Güzel.', 'Ayşe koştu.', 'İstanbul büyük şehir.'], '', { gorsel: cumle('Ali okula gitti.') });
  ekle('nke-t24', 'Noktalama işaretleri neden kullanılır?', 'Anlamı netleştirmek için', ['Cümleyi uzatmak için', 'Anlamı netleştirmek için', 'Kelime saymak için', 'Yazıyı süslemek için'], '', { gorsel: nokta('.') });
  ekle('nke-t25', 'Aşağıdaki cümleyi tamamen doğru yaz: "yarın okula gidecek misin"', 'Yarın okula gidecek misin?', ['Yarın okula gidecek misin?', 'yarın Okula gidecek misin?', 'Yarın okula gidecek misin.', 'Yarın Okula Gidecek Misin?'], '', { gorsel: cumle('yarın okula gidecek misin'), sasirtma: true });

  return sorular;
}

function secenekleriTemizle(secenekler) {
  return secenekler.map((s) => s.replace(/^[A-D]\)\s*/, ''));
}

function harfdenCevap(secenekler, harf) {
  return secenekleriTemizle(secenekler)[harf.charCodeAt(0) - 65];
}

function sampleTestSorulari(karistir) {
  const mc = (id, soru, raw, harf, gorsel) => {
    const secenekler = secenekleriTemizle(raw);
    return {
      id,
      kazanimKodu: KAZANIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: secenekler[harf.charCodeAt(0) - 65],
      secenekler: karistir(secenekler),
      ipucu: '',
      gorsel,
    };
  };

  return [
    mc(
      'tr_t6_01',
      'Pazardan elma, armut, muz ve çilek aldık. Bu cümlede virgül hangi amaçla kullanılmıştır?',
      [
        'A) Eş görevli kelimeleri ayırmak',
        'B) Hitap kelimesinden sonra',
        'C) Sıralı cümleleri ayırmak',
        'D) Sayıların yazımında',
      ],
      'A',
      kart(['elma', 'armut', 'muz', 'çilek']),
    ),
    mc(
      'tr_t6_02',
      "Cümledeki boşluğa hangisi gelmelidir?\n'Sevgili Öğretmenim ( ) sizi çok özledim.'",
      ['A) .', 'B) ,', 'C) !', 'D) ?'],
      'B',
      sahne('selamlama', 'ogretmen'),
    ),
    mc(
      'tr_t6_03',
      'Eve geldim, ellerimi yıkadım, yemeğe oturdum. Bu cümlede virgüller ne için kullanılmıştır?',
      [
        'A) Korku ifadesi için',
        'B) Soru sormak için',
        'C) Sıralı cümleleri ayırmak için',
        'D) Tarih belirtmek için',
      ],
      'C',
      cumle('Eve geldim, ellerimi yıkadım, yemeğe oturdum.'),
    ),
    mc(
      'tr_t6_51',
      'Yarınki sınavda başarılar dilerim( ) Cümlenin sonuna hangi işaret gelmelidir?',
      ['A) ?', 'B) !', 'C) .', 'D) ,'],
      'C',
      cumle('Yarınki sınavda başarılar dilerim.'),
    ),
    mc(
      'tr_t6_52',
      'Eyvah, süt döküldü ( ) cümlesinde parantez içine hangi işaret gelmelidir?',
      ['A) !', 'B) ?', 'C) .', 'D) :'],
      'A',
      nokta('!'),
    ),
  ];
}

export function noktalama(karistir) {
  const temel = noktalamaVeYazim(karistir);
  const ekA = noktalamaEkAlistirma();
  const ekT = noktalamaEkTest(karistir);
  const baseTest = yenidenNumarala([...temel.test, ...ekT], 'nk-t');
  const mevcutIdler = new Set(baseTest.map((s) => s.id));
  const ornekTest = sampleTestSorulari(karistir).filter((s) => !mevcutIdler.has(s.id));

  return {
    id: 'noktalama',
    baslik: 'Noktalama',
    kazanimKodu: KAZANIM,
    anlatim: temel.anlatim,
    alistirma: yenidenNumarala([...temel.alistirma, ...ekA], 'nk-a'),
    test: [...baseTest, ...ornekTest],
  };
}
