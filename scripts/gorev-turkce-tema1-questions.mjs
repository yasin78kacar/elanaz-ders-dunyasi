/** Türkçe Tema 1 — Harfler (100 görselli soru). */

const KAZANIM = 'TUR.2.1.0';

const SESLI = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
const SESSIZ = ['b', 'c', 'ç', 'd', 'f', 'g', 'ğ', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'ş', 't', 'v', 'y', 'z'];
const ALFABE = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z'];
const OZEL = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü'];

function kart(harfler, vurgu) {
  return { tur: 'turkce', mod: 'kart', harfler, vurgu };
}
function harf(sahne, harfler, vurgu) {
  return { tur: 'turkce', mod: 'harf', sahne, harfler, vurgu };
}
function nesne(kelime, nesneKey, vurgu) {
  return { tur: 'turkce', mod: 'nesne', kelime, nesne: nesneKey, vurgu };
}
function anl(sahne) {
  return { tur: 'turkce', mod: 'anlatim', sahne };
}

function sesliMi(h) {
  return SESLI.includes(h.toLowerCase());
}

function cevapTipi(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function alistirma() {
  const s = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipi(cevap),
      ...extra,
    });

  ekle('hr-a1', 'Türkçe alfabede kaç harf vardır?', '29', '', { gorsel: kart(ALFABE) });
  ekle('hr-a2', 'Türkçede kaç sesli harf vardır?', '8', '', { gorsel: kart(SESLI, 'sesli') });
  ekle('hr-a3', 'Türkçede kaç sessiz harf vardır?', '21', '', { gorsel: kart(SESSIZ, 'sessiz') });
  ekle('hr-a4', '"a" harfi sesli midir sessiz midir?', 'sesli', '', { gorsel: kart(['a'], 'sesli') });
  ekle('hr-a5', '"k" harfi sesli midir sessiz midir?', 'sessiz', '', { gorsel: kart(['k'], 'sessiz') });
  ekle('hr-a6', 'Türkçe alfabenin ilk harfi hangisidir?', 'a', '', { gorsel: kart(['a', 'b', 'c']) });
  ekle('hr-a7', 'Türkçe alfabenin son harfi hangisidir?', 'z', '', { gorsel: kart(['x', 'y', 'z']) });
  ekle('hr-a8', '"ç" harfinden sonra hangi harf gelir?', 'd', '', { gorsel: kart(['ç', 'd', 'e']) });
  ekle('hr-a9', '"ğ" harfinden önce hangi harf gelir?', 'g', '', { gorsel: kart(['f', 'g', 'ğ']) });
  ekle('hr-a10', 'Türkçeye özgü harflerden biri hangisidir?', 'ş', '', { gorsel: kart(OZEL) });
  ekle('hr-a11', '"elma" kelimesinin ilk harfi nedir?', 'e', '', { gorsel: nesne('elma', 'elma') });
  ekle('hr-a12', '"kedi" kelimesinin son harfi nedir?', 'i', '', { gorsel: nesne('kedi', 'kedi') });
  ekle('hr-a13', '"okul" kelimesinde kaç harf vardır?', '4', '', { gorsel: nesne('okul', 'okul') });
  ekle('hr-a14', 'Büyük harfle yazılan "A" küçük harfi nedir?', 'a', '', { gorsel: harf('buyuk-kucuk', ['A', 'a']) });
  ekle('hr-a15', 'Büyük harfle yazılan "İ" küçük harfi nedir?', 'i', '', { gorsel: harf('buyuk-kucuk', ['İ', 'i']) });
  ekle('hr-a16', 'Sesli harfleri yaz (virgülle ayır)', 'a, e, ı, i, o, ö, u, ü', '', {
    gorsel: kart(SESLI, 'sesli'),
    cevapTipi: 'metin',
  });
  ekle('hr-a17', '"ö" harfi hangi gruba girer?', 'sesli', '', { gorsel: kart(['ö'], 'sesli') });
  ekle('hr-a18', '"ş" harfi hangi gruba girer?', 'sessiz', '', { gorsel: kart(['ş'], 'sessiz') });
  ekle('hr-a19', 'Alfabede "m" harfinden sonra hangi harf gelir?', 'n', '', { gorsel: kart(['l', 'm', 'n']) });
  ekle('hr-a20', 'Alfabede "r" harfinden önce hangi harf gelir?', 'p', '', { gorsel: kart(['p', 'r', 's']) });
  ekle('hr-a21', '"araba" kelimesinde kaç harf vardır?', '5', '', { gorsel: nesne('araba', 'araba') });
  ekle('hr-a22', '"çiçek" kelimesinin ilk harfi nedir?', 'ç', '', { gorsel: nesne('çiçek', 'cicek') });
  ekle('hr-a23', 'Türkçe alfabede olmayan harf hangisidir?', 'w', '', { gorsel: kart(['v', 'w', 'y']) });
  ekle('hr-a24', 'Türkçe alfabede olmayan harf hangisidir?', 'x', '', { gorsel: kart(['v', 'x', 'z']) });
  ekle('hr-a25', '"ı" harfi sesli midir?', 'evet', '', { gorsel: kart(['ı'], 'sesli'), alternatifCevaplar: ['Evet', 'evet'] });
  ekle('hr-a26', '"defter" kelimesinin son harfi nedir?', 'r', '', { gorsel: nesne('defter', 'kitap') });
  ekle('hr-a27', '"uçak" kelimesinde kaç harf vardır?', '4', '', { gorsel: nesne('uçak', 'ucak') });
  ekle('hr-a28', 'Özel isimler hangi harfle başlar?', 'büyük', '', { gorsel: anl('hr-anlatim-2') });
  ekle('hr-a29', 'Cümle hangi harfle başlar?', 'büyük', '', { gorsel: anl('hr-anlatim-2') });
  ekle('hr-a30', '"ğ" harfi tek başına hece olabilir mi?', 'hayır', '', { gorsel: kart(['ğ'], 'sessiz'), alternatifCevaplar: ['Hayır', 'hayır'] });
  ekle('hr-a31', '"anne" kelimesinin ilk harfi nedir?', 'a', '', { gorsel: nesne('anne', 'anne') });
  ekle('hr-a32', '"köpek" kelimesinin son harfi nedir?', 'k', '', { gorsel: nesne('köpek', 'kopek') });
  ekle('hr-a33', 'Alfabede "f" harfinden sonra hangi harf gelir?', 'g', '', { gorsel: kart(['e', 'f', 'g']) });
  ekle('hr-a34', '"ü" harfi sesli midir sessiz midir?', 'sesli', '', { gorsel: kart(['ü'], 'sesli') });
  ekle('hr-a35', '"j" harfi sesli midir sessiz midir?', 'sessiz', '', { gorsel: kart(['j'], 'sessiz') });
  ekle('hr-a36', '"masa" kelimesinde kaç harf vardır?', '4', '', { gorsel: nesne('masa', 'masa') });
  ekle('hr-a37', 'Türkçeye özgü harf sayısı kaçtır?', '6', '', { gorsel: kart(OZEL) });
  ekle('hr-a38', '"kitap" kelimesinin ilk harfi nedir?', 'k', '', { gorsel: nesne('kitap', 'kitap') });
  ekle('hr-a39', '"gül" kelimesinin son harfi nedir?', 'l', '', { gorsel: nesne('gül', 'cicek') });
  ekle('hr-a40', 'Alfabede "t" harfinden sonra hangi harf gelir?', 'u', '', { gorsel: kart(['s', 't', 'u']) });
  ekle('hr-a41', '"çanta" kelimesinde kaç harf vardır?', '5', '', { gorsel: nesne('çanta', 'canta') });
  ekle('hr-a42', '"b" harfi hangi gruba girer?', 'sessiz', '', { gorsel: kart(['b'], 'sessiz') });
  ekle('hr-a43', '"o" harfi hangi gruba girer?', 'sesli', '', { gorsel: kart(['o'], 'sesli') });
  ekle('hr-a44', '"pencere" kelimesinin ilk harfi nedir?', 'p', '', { gorsel: nesne('pencere', 'okul') });
  ekle('hr-a45', '"sincap" kelimesinin son harfi nedir?', 'p', '', { gorsel: nesne('sincap', 'kus') });
  ekle('hr-a46', 'Türkçe alfabede "q" harfi var mıdır?', 'hayır', '', { gorsel: kart(['k', 'q', 'r']), alternatifCevaplar: ['Hayır', 'hayır'] });
  ekle('hr-a47', '"ev" kelimesinde kaç harf vardır?', '2', '', { gorsel: nesne('ev', 'ev') });
  ekle('hr-a48', 'Alfabede "h" harfinden sonra hangi harf gelir?', 'ı', '', { gorsel: kart(['ğ', 'h', 'ı']) });
  ekle('hr-a49', '"tavşan" kelimesinin ilk harfi nedir?', 't', '', { gorsel: nesne('tavşan', 'kus') });
  ekle('hr-a50', '"bilgisayar" kelimesinde kaç harf vardır?', '10', '', { gorsel: nesne('bilgisayar', 'okul') });

  return s;
}

function test(karistir) {
  const s = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
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

  ekle('hr-t1', 'Türkçe alfabede kaç harf vardır?', '29', ['26', '28', '29', '30'], '', { gorsel: kart(ALFABE) });
  ekle('hr-t2', 'Türkçede kaç sesli harf vardır?', '8', ['6', '7', '8', '10'], '', { gorsel: kart(SESLI, 'sesli') });
  ekle('hr-t3', 'Aşağıdakilerden hangisi sesli harftir?', 'ü', ['k', 't', 'ü', 's'], '', { gorsel: kart(['k', 't', 'ü', 's']) });
  ekle('hr-t4', 'Aşağıdakilerden hangisi sessiz harftir?', 'm', ['a', 'e', 'm', 'ı'], '', { gorsel: kart(['a', 'e', 'm', 'ı']) });
  ekle('hr-t5', 'Türkçe alfabenin ilk harfi hangisidir?', 'a', ['b', 'e', 'a', 'ı'], '', { gorsel: kart(['a', 'b', 'c']) });
  ekle('hr-t6', 'Türkçe alfabenin son harfi hangisidir?', 'z', ['y', 'x', 'z', 'w'], '', { gorsel: kart(['x', 'y', 'z']) });
  ekle('hr-t7', 'Türkçeye özgü harflerden hangisi doğrudur?', 'ğ', ['w', 'x', 'ğ', 'q'], '', { gorsel: kart(OZEL) });
  ekle('hr-t8', '"ç" harfinden sonra hangi harf gelir?', 'd', ['b', 'c', 'd', 'e'], '', { gorsel: kart(['ç', 'd', 'e']) });
  ekle('hr-t9', '"elma" kelimesinin ilk harfi hangisidir?', 'e', ['a', 'l', 'e', 'm'], '', { gorsel: nesne('elma', 'elma') });
  ekle('hr-t10', '"kedi" kelimesinin son harfi hangisidir?', 'i', ['d', 'e', 'k', 'i'], '', { gorsel: nesne('kedi', 'kedi') });
  ekle('hr-t11', 'Türkçe alfabede olmayan harf hangisidir?', 'w', ['v', 'y', 'w', 'z'], '', { gorsel: kart(['v', 'w', 'y']) });
  ekle('hr-t12', 'Türkçe alfabede olmayan harf hangisidir?', 'x', ['ş', 'x', 'z', 'ç'], '', { gorsel: kart(['v', 'x', 'z']) });
  ekle('hr-t13', '"okul" kelimesinde kaç harf vardır?', '4', ['3', '4', '5', '6'], '', { gorsel: nesne('okul', 'okul') });
  ekle('hr-t14', 'Alfabede "m" harfinden sonra hangi harf gelir?', 'n', ['l', 'm', 'n', 'o'], '', { gorsel: kart(['l', 'm', 'n']) });
  ekle('hr-t15', 'Büyük "A" harfinin küçük hali hangisidir?', 'a', ['e', 'a', 'ı', 'i'], '', { gorsel: harf('buyuk-kucuk', ['A', 'a']) });
  ekle('hr-t16', '"ö" harfi hangi gruba girer?', 'sesli', ['sessiz', 'sesli', 'özel', 'yok'], '', { gorsel: kart(['ö'], 'sesli') });
  ekle('hr-t17', '"ş" harfi hangi gruba girer?', 'sessiz', ['sesli', 'sessiz', 'özel', 'yok'], '', { gorsel: kart(['ş'], 'sessiz') });
  ekle('hr-t18', '"araba" kelimesinde kaç harf vardır?', '5', ['4', '5', '6', '7'], '', { gorsel: nesne('araba', 'araba') });
  ekle('hr-t19', 'Cümleler hangi harfle başlar?', 'büyük', ['küçük', 'büyük', 'sesli', 'sessiz'], '', { gorsel: anl('hr-anlatim-2') });
  ekle('hr-t20', 'Özel isimler hangi harfle yazılır?', 'büyük', ['küçük', 'büyük', 'sesli', 'sessiz'], '', { gorsel: anl('hr-anlatim-2') });
  ekle('hr-t21', '"ı" harfi sesli midir?', 'evet', ['hayır', 'evet', 'bazen', 'bilinmez'], '', { gorsel: kart(['ı'], 'sesli') });
  ekle('hr-t22', '"ğ" harfi tek başına hece olabilir mi?', 'hayır', ['evet', 'hayır', 'bazen', 'her zaman'], '', { gorsel: kart(['ğ'], 'sessiz') });
  ekle('hr-t23', 'Alfabede "r" harfinden önce hangi harf gelir?', 'p', ['o', 'p', 'r', 's'], '', { gorsel: kart(['p', 'r', 's']) });
  ekle('hr-t24', '"çiçek" kelimesinin ilk harfi hangisidir?', 'ç', ['c', 'ç', 'i', 'e'], '', { gorsel: nesne('çiçek', 'cicek') });
  ekle('hr-t25', 'Türkçeye özgü harf sayısı kaçtır?', '6', ['4', '5', '6', '8'], '', { gorsel: kart(OZEL) });
  ekle('hr-t26', '"defter" kelimesinin son harfi hangisidir?', 'r', ['e', 't', 'f', 'r'], '', { gorsel: nesne('defter', 'kitap') });
  ekle('hr-t27', '"uçak" kelimesinde kaç harf vardır?', '4', ['3', '4', '5', '6'], '', { gorsel: nesne('uçak', 'ucak') });
  ekle('hr-t28', 'Alfabede "f" harfinden sonra hangi harf gelir?', 'g', ['e', 'f', 'g', 'ğ'], '', { gorsel: kart(['e', 'f', 'g']) });
  ekle('hr-t29', '"anne" kelimesinin ilk harfi hangisidir?', 'a', ['n', 'a', 'e', 'i'], '', { gorsel: nesne('anne', 'anne') });
  ekle('hr-t30', '"köpek" kelimesinin son harfi hangisidir?', 'k', ['e', 'p', 'ö', 'k'], '', { gorsel: nesne('köpek', 'kopek') });
  ekle('hr-t31', '"j" harfi hangi gruba girer?', 'sessiz', ['sesli', 'sessiz', 'özel', 'yabancı'], '', { gorsel: kart(['j'], 'sessiz') });
  ekle('hr-t32', '"o" harfi hangi gruba girer?', 'sesli', ['sesli', 'sessiz', 'özel', 'yabancı'], '', { gorsel: kart(['o'], 'sesli') });
  ekle('hr-t33', '"masa" kelimesinde kaç harf vardır?', '4', ['3', '4', '5', '6'], '', { gorsel: nesne('masa', 'masa') });
  ekle('hr-t34', 'Alfabede "t" harfinden sonra hangi harf gelir?', 'u', ['ş', 't', 'u', 'ü'], '', { gorsel: kart(['s', 't', 'u']) });
  ekle('hr-t35', '"kitap" kelimesinin ilk harfi hangisidir?', 'k', ['k', 'i', 't', 'a'], '', { gorsel: nesne('kitap', 'kitap') });
  ekle('hr-t36', 'Türkçe alfabede "q" harfi var mıdır?', 'hayır', ['evet', 'hayır', 'bazen', 'sadece yabancı kelimelerde'], '', { gorsel: kart(['k', 'q', 'r']) });
  ekle('hr-t37', '"ev" kelimesinde kaç harf vardır?', '2', ['1', '2', '3', '4'], '', { gorsel: nesne('ev', 'ev') });
  ekle('hr-t38', 'Alfabede "h" harfinden sonra hangi harf gelir?', 'ı', ['ğ', 'h', 'ı', 'i'], '', { gorsel: kart(['ğ', 'h', 'ı']) });
  ekle('hr-t39', '"çanta" kelimesinde kaç harf vardır?', '5', ['4', '5', '6', '7'], '', { gorsel: nesne('çanta', 'canta') });
  ekle('hr-t40', '"b" harfi hangi gruba girer?', 'sessiz', ['sesli', 'sessiz', 'özel', 'nötr'], '', { gorsel: kart(['b'], 'sessiz') });
  ekle('hr-t41', '"pencere" kelimesinin ilk harfi hangisidir?', 'p', ['p', 'e', 'n', 'c'], '', { gorsel: nesne('pencere', 'okul') });
  ekle('hr-t42', '"sincap" kelimesinin son harfi hangisidir?', 'p', ['s', 'a', 'n', 'p'], '', { gorsel: nesne('sincap', 'kus') });
  ekle('hr-t43', '"tavşan" kelimesinin ilk harfi hangisidir?', 't', ['t', 'a', 'v', 'ş'], '', { gorsel: nesne('tavşan', 'kus') });
  ekle('hr-t44', '"bilgisayar" kelimesinde kaç harf vardır?', '10', ['8', '9', '10', '11'], '', { gorsel: nesne('bilgisayar', 'okul') });
  ekle('hr-t45', 'Aşağıdaki harflerden hangisi Türkçeye özgüdür?', 'ı', ['a', 'b', 'ı', 'd'], '', { gorsel: kart(OZEL) });
  ekle('hr-t46', 'Sesli harf sayısı ile sessiz harf sayısının toplamı kaçtır?', '29', ['21', '8', '29', '27'], '', { gorsel: kart(ALFABE) });
  ekle('hr-t47', '"gül" kelimesinin son harfi hangisidir?', 'l', ['g', 'ü', 'l', 'u'], '', { gorsel: nesne('gül', 'cicek') });
  ekle('hr-t48', 'Alfabede "ğ" harfinden önce hangi harf gelir?', 'g', ['f', 'g', 'ğ', 'h'], '', { gorsel: kart(['f', 'g', 'ğ']) });
  ekle('hr-t49', 'Hangi harf hem sesli hem sessiz değildir — yani sessiz harftir?', 'r', ['a', 'e', 'r', 'ı'], '', { gorsel: kart(['a', 'e', 'r', 'ı']) });
  ekle('hr-t50', 'Türkçe alfabede kaç sessiz harf vardır?', '21', ['19', '20', '21', '22'], '', { gorsel: kart(SESSIZ, 'sessiz') });

  return s;
}

export function harfler(karistir) {
  return {
    id: 'harfler',
    baslik: 'Harfler',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin: 'Türkçe alfabede 29 harf vardır: a, b, c, ç, d, e, f, g, ğ, h, ı, i, j, k, l, m, n, o, ö, p, r, s, ş, t, u, ü, v, y, z. 8 tanesi sesli, 21 tanesi sessiz harftir.',
          gorsel: anl('hr-anlatim-1'),
        },
        {
          metin: 'Sesli harfler: a, e, ı, i, o, ö, u, ü. Cümleler ve özel isimler büyük harfle başlar. Türkçeye özgü harfler: ç, ğ, ı, ö, ş, ü.',
          gorsel: anl('hr-anlatim-2'),
        },
        {
          metin: 'Her harfin büyük ve küçük yazılışı vardır. Alfabetik sırayı bilmek sözlükte kelime aramayı kolaylaştırır. w, x, q harfleri Türkçe alfabede yoktur.',
          gorsel: anl('hr-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
