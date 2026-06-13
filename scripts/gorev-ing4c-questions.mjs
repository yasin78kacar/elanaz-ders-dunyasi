/** GOREV-ING4C — Songs (İngilizce Şarkılar) */

const KAZANIM = 'ING.2.4.3';

function anl(sahne) {
  return { tur: 'ingilizce', mod: 'anlatim', sahne };
}
function nesne(n, extra = {}) {
  return { tur: 'ingilizce', mod: 'nesne', nesne: n, ...extra };
}
function grup(nesneler, vurgu) {
  return { tur: 'ingilizce', mod: 'grup', nesneler, vurgu };
}

function boslukEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: KAZANIM,
    tip: 'yazili',
    soru,
    dogruCevap: String(cevap),
    ipucu,
    cevapTipi: 'metin',
    ...extra,
  });
}

function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: KAZANIM,
    tip: 'yazili',
    soru,
    dogruCevap: cevap,
    ipucu,
    cevapTipi: 'metin',
    alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'],
    ...extra,
  });
}

function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({
    id,
    kazanimKodu: KAZANIM,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler,
    ipucu,
    ...extra,
  });
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'is-a1', 'İngilizcede şarkı kelimesi "........." (Song) olarak yazılır.', 'song', '', { gorsel: nesne('muzik-notalari') });
  dyEkle(s, 'is-a2', 'Şarkı söylemek eylemine İngilizcede "Sing a song" denir.', 'Doğru', '', { gorsel: nesne('sarki-soyleyen-cocuklar') });
  boslukEkle(s, 'is-a3', 'Harfleri eğlenerek öğrenmek için "The ......... Song" (Alfabe Şarkısı) dinleriz.', 'Alphabet', '', { gorsel: nesne('alfabe-bloklari'), alternatifCevaplar: ['alphabet'] });
  dyEkle(s, 'is-a4', 'Alfabe şarkısı "A, B, C, D" (Ey, Bi, Si, Di) diye başlar.', 'Doğru', '', { gorsel: nesne('abc-harfleri') });
  boslukEkle(s, 'is-a5', 'İngilizce alfabe şarkısının en sonundaki harf "........." (Z) harfidir.', 'Z', '', { gorsel: nesne('z-harfi') });
  dyEkle(s, 'is-a6', 'Sayıları öğrenmek için "The Numbers Song" şarkısını söyleriz.', 'Doğru', '', { gorsel: nesne('sayi-1-10') });
  boslukEkle(s, 'is-a7', 'Sayılar şarkısında geçen "Five" kelimesi ......... (5) sayısıdır.', 'beş', '', { gorsel: nesne('bes-balon'), alternatifCevaplar: ['bes', '5'] });
  dyEkle(s, 'is-a8', 'Sayılar şarkısındaki "Jump" komutunu duyunca yere otururuz.', 'Yanlış', '', { gorsel: nesne('ziplayan-cocuk') });
  boslukEkle(s, 'is-a9', '"Clap your hands" ifadesi Türkçede "Ellerini ........." demektir.', 'çırp', '', { gorsel: nesne('ellerini-cirpan'), alternatifCevaplar: ['cirp'] });
  dyEkle(s, 'is-a10', 'Sayılar şarkısında "Ten" sayısı söylendiğinde 10 demiş oluruz.', 'Doğru', '', { gorsel: nesne('on-blok') });
  boslukEkle(s, 'is-a11', 'Renkleri öğrenmek için söylediğimiz şarkının konusu "The ......... Song"dur.', 'Colors', '', { gorsel: nesne('gokkusagi') });
  dyEkle(s, 'is-a12', 'Gökkuşağı şarkısındaki "Red and Yellow", Kırmızı ve Sarı renkleridir.', 'Doğru', '', { gorsel: nesne('kirmizi-sari-boya') });
  boslukEkle(s, 'is-a13', '"Pink and Green" kelimeleri Pembe ve ......... renklerini anlatır.', 'yeşil', '', { gorsel: nesne('pembe-yesil-elma'), alternatifCevaplar: ['yesil'] });
  dyEkle(s, 'is-a14', 'Gökkuşağı şarkısında "Purple and Orange", Mor ve Turuncu renkleridir.', 'Doğru', '', { gorsel: nesne('mor-turuncu') });
  boslukEkle(s, 'is-a15', 'İngilizce şarkılar dinlemek yeni kelimeler öğrenmemizi çok ......... (kolaylaştırır).', 'kolaylaştırır', '', { gorsel: nesne('kulaklik-dinleyen'), alternatifCevaplar: ['kolaylastirir'] });
  dyEkle(s, 'is-a16', '"Song" kelimesi Türkçede hikaye demektir.', 'Yanlış', '', { gorsel: nesne('muzik-notalari') });
  dyEkle(s, 'is-a17', 'Müzik eşliğinde İngilizce öğrenmek çok eğlencelidir.', 'Doğru', '', { gorsel: nesne('piyano-tuslari') });
  boslukEkle(s, 'is-a18', 'Gökkuşağı şarkısındaki ilk renk "........." (Kırmızı)\'dır.', 'Red', '', { gorsel: nesne('kirmizi-elma') });
  dyEkle(s, 'is-a19', '"Blue" kelimesi şarkıda da geçen mavi renk demektir.', 'Doğru', '', { gorsel: nesne('mavi-deniz') });
  boslukEkle(s, 'is-a20', 'Şarkılar (Songs) sayesinde alfabeyi (Alphabet) hiç ......... (unutmayız).', 'unutmayız', '', { gorsel: nesne('harf-corbasi'), alternatifCevaplar: ['unutmayiz'] });
  dyEkle(s, 'is-a21', 'İngilizce şarkılara sınıfça eşlik etmek ve ritim tutmak takım çalışmasını güçlendirir.', 'Doğru', '', { gorsel: nesne('koro-sarki') });
  boslukEkle(s, 'is-a22', 'İngilizcede alfabe "........." kelimesiyle ifade edilir.', 'alphabet', '', { gorsel: nesne('gulen-harfler'), alternatifCevaplar: ['Alphabet'] });
  dyEkle(s, 'is-a23', 'Sadece okulda değil, evde de İngilizce şarkılar dinlemek bize fayda sağlar.', 'Doğru', '', { gorsel: nesne('muzik-dinleyen') });
  boslukEkle(s, 'is-a24', 'Şarkı söylerken aynı zamanda "........." (dans etmek/dance) da yapabiliriz.', 'dance', '', { gorsel: nesne('dans-eden-arkadas') });
  dyEkle(s, 'is-a25', 'İngilizce şarkılar ve oyunlar, öğrenmeyi sıkıcı olmaktan kurtarıp neşeli hale getirir.', 'Doğru', '', { gorsel: nesne('mutlu-cocuk-sarki') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('is-t1', 'İngilizcede "Şarkı" kelimesinin karşılığı nedir?', 'Song', ['Story', 'Song', 'Apple', 'Dialogue'], '', { gorsel: nesne('muzik-notasi-sembolu') });
  e('is-t2', '"Sing a song" ifadesi Türkçede hangi eylemdir?', 'Şarkı söylemek', ['Şarkı söylemek', 'Kitap okumak', 'Resim çizmek', 'Koşmak'], '', { gorsel: nesne('mikrofon-sarki') });
  e('is-t3', 'İngilizce harfleri eğlenerek öğrenmek için hangi şarkıyı dinleriz?', 'The Alphabet Song', ['The Colors Song', 'The Numbers Song', 'The Alphabet Song', 'The Animal Song'], '', { gorsel: nesne('abc-tablosu') });
  e('is-t4', 'Alfabe şarkısı hangi harflerle başlar?', 'A, B, C', ['Z, Y, X', 'A, B, C', 'One, Two, Three', 'Red, Blue, Green'], '', { gorsel: nesne('sarki-soyleyen') });
  e('is-t5', 'Sayıları öğrenmek için dinlediğimiz "The Numbers Song"da hangi kelimeler geçer?', 'One, Two, Three', ['A, B, C', 'One, Two, Three', 'Red, Yellow, Blue', 'Cat, Dog, Bird'], '', { gorsel: nesne('rakam-tahta') });
  e('is-t6', 'Sayılar şarkısındaki "Five" kelimesi hangi sayıdır?', '5', ['4', '6', '5', '10'], '', { gorsel: nesne('bes-balon') });
  e('is-t7', 'Sayılar şarkısındaki "Jump" komutu geldiğinde çocuklar ne yapar?', 'Zıplarlar', ['Uyumaya başlarlar', 'Zıplarlar', 'Yere otururlar', 'Kitap okurlar'], '', { gorsel: nesne('ziplayan') });
  e('is-t8', 'Şarkıdaki "Clap your hands" komutunun anlamı nedir?', 'Ellerini çırp', ['Gözlerini kapat', 'Ellerini çırp', 'Ayaklarını vur', 'Arkana dön'], '', { gorsel: nesne('eller-cirpan') });
  e('is-t9', 'İngilizce renkleri öğrenmek için hangi şarkı çok eğlencelidir?', 'The Colors Song (Renkler Şarkısı)', ['The Colors Song (Renkler Şarkısı)', 'The Alphabet Song', 'The Numbers Song', 'The Classroom Song'], '', { gorsel: nesne('gokkusagi-resmi') });
  e('is-t10', 'Renkler şarkısında geçen "Red and Yellow" sırasıyla hangi renklerdir?', 'Kırmızı ve Sarı', ['Yeşil ve Mavi', 'Siyah ve Beyaz', 'Kırmızı ve Sarı', 'Mor ve Pembe'], '', { gorsel: nesne('kirmizi-sari-kalem') });
  e('is-t11', '"Pink and Green" kelimelerinin Türkçe karşılığı nedir?', 'Pembe ve Yeşil', ['Pembe ve Yeşil', 'Kırmızı ve Sarı', 'Mor ve Turuncu', 'Mavi ve Siyah'], '', { gorsel: nesne('pembe-yesil-balon') });
  e('is-t12', 'Renkler şarkısında geçen "Blue" kelimesi hangi renktir?', 'Mavi', ['Sarı', 'Kırmızı', 'Yeşil', 'Mavi'], '', { gorsel: nesne('mavi-deniz-gokyuzu') });
  e('is-t13', 'İngilizce şarkılar (Songs) dinlemek kelime öğrenmemizi nasıl etkiler?', 'Eğlenerek kalıcı şekilde öğrenmemizi sağlar', ['Daha çabuk unutmamızı sağlar', 'Sıkılmamıza sebep olur', 'Eğlenerek kalıcı şekilde öğrenmemizi sağlar', 'Hiçbir işe yaramaz'], '', { gorsel: nesne('kulaklik-dinleyen') });
  e('is-t14', 'Şarkılarda söylenen "Words" (Kelimeler) neden zihnimizde daha kolay kalır?', 'Çünkü müzik ve ritim hafızamızı güçlendirir', ['Çünkü çok kısadırlar', 'Çünkü müzik ve ritim hafızamızı güçlendirir', 'Çünkü zor yazılırlar', 'Çünkü siyah beyazdırlar'], '', { gorsel: nesne('kelime-nota') });
  e('is-t15', '"The Numbers Song" şarkısı genellikle hangi sayıyla biter?', 'Ten', ['One', 'Five', 'Ten', 'Three'], '', { gorsel: nesne('on-blok') });
  e('is-t16', 'Gökkuşağı şarkısında geçen "Purple" kelimesinin anlamı nedir?', 'Mor', ['Pembe', 'Mavi', 'Turuncu', 'Mor'], '', { gorsel: nesne('mor-cicek') });
  e('is-t17', '"Orange" kelimesi hangi renk için kullanılır?', 'Turuncu', ['Turuncu', 'Siyah', 'Beyaz', 'Yeşil'], '', { gorsel: nesne('turuncu-portakal') });
  e('is-t18', 'Sınıfça şarkı söylerken nasıl davranmalıyız?', 'Arkadaşlarımızla uyumlu bir şekilde ritim tutmalıyız', ['Arkadaşlarımızla uyumlu bir şekilde ritim tutmalıyız', 'Sadece bağırmalıyız', 'Kulaklarımızı kapatmalıyız', 'Şarkıyı bozmalıyız'], '', { gorsel: nesne('sinif-sarki') });
  e('is-t19', '"Alphabet" kelimesi Türkçede ne anlama gelir?', 'Alfabe', ['Sayılar', 'Alfabe', 'Hayvanlar', 'Renkler'], '', { gorsel: nesne('nota-alfabe') });
  e('is-t20', 'Alfabe şarkısının son harfi hangisidir?', 'Z', ['A', 'C', 'Z', 'M'], '', { gorsel: nesne('z-harfi-kup') });
  e('is-t21', 'Şarkı söylerken aynı zamanda "Dance" yapmak ne demektir?', 'Dans etmek', ['Dans etmek', 'Kitap okumak', 'Yemek yemek', 'Resim çizmek'], '', { gorsel: nesne('dans-eden') });
  e('is-t22', 'İngilizce dersinde şarkı dinlemek dersi nasıl bir hale getirir?', 'Eğlenceli, neşeli ve akılda kalıcı', ['Çok sıkıcı ve yorucu', 'Eğlenceli, neşeli ve akılda kalıcı', 'Korkutucu', 'Uykulu'], '', { gorsel: nesne('muzik-calar') });
  e('is-t23', '"One, two, three, four, five" sayılarından "Three" hangisidir?', '3', ['1', '2', '3', '4'], '', { gorsel: nesne('sayilar-1-5') });
  e('is-t24', 'Gökkuşağı şarkısında "I can sing a rainbow" ne demektir?', 'Bir gökkuşağı şarkısı söyleyebilirim', ['Bir araba çizebilirim', 'Bir kuş uçurabilirim', 'Bir gökkuşağı şarkısı söyleyebilirim', 'Bir kitap okuyabilirim'], '', { gorsel: nesne('boya-paleti') });
  e('is-t25', 'Şarkılar, hikayeler ve diyaloglar sayesinde İngilizce dilini öğrenmek bizim için nasıldır?', 'Eğlenceli ve yepyeni bir macera', ['Çok zor ve üzücü', 'İmkansız', 'Eğlenceli ve yepyeni bir macera', 'Sıkıcı'], '', { gorsel: nesne('mutlu-ingilizce-sinif') });
  return s;
}

export function ingilizceSarkilar(karistir) {
  return {
    id: 'ingilizce-sarkilar',
    baslik: 'Songs',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            '"A, B, C, D, E, F, G... H, I, J, K, L, M, N, O, P... Q, R, S... T, U, V... W, X, Y and Z". Şarkı söylemek (Sing a song) alfabeyi ezberlemeyi çok kolaylaştırıyordu.',
          gorsel: anl('is-anlatim-1'),
        },
        {
          metin:
            '"One, two, three, four, five... Jump!" (Zıpla). "Six, seven, eight, nine, ten... Clap your hands!" (Ellerini çırp).',
          gorsel: anl('is-anlatim-2'),
        },
        {
          metin:
            '"I can sing a rainbow... Red, yellow, pink, green, purple, orange, blue." Renkler (Colors) şarkıyla çok daha akılda kalıcıydı.',
          gorsel: anl('is-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
