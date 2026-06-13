/** GOREV-ING4A — Short Stories (Kısa Hikayeler) */

const KAZANIM = 'ING.2.4.1';

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
  boslukEkle(s, 'kh-a1', 'Hikaye kelimesinin İngilizcesi ......... kelimesidir.', 'story', '', { gorsel: nesne('hikaye-kitabi') });
  dyEkle(s, 'kh-a2', '"The Little Red Apple" hikayesi, kırmızı bir elmayı anlatır.', 'Doğru', '', { gorsel: nesne('kirmizi-elma-kucuk') });
  boslukEkle(s, 'kh-a3', 'Hikaye okumak İngilizcede "Read a ........." olarak söylenir.', 'story', '', { gorsel: nesne('kitap-okuyan') });
  dyEkle(s, 'kh-a4', 'İngilizcede köpek "Dog" demektir.', 'Doğru', '', { gorsel: nesne('cesur-kopek') });
  boslukEkle(s, 'kh-a5', 'Mutlu kuşun İngilizce adı "The Happy ........." (Kuş) olarak yazılır.', 'Bird', '', { gorsel: nesne('mutlu-kus'), alternatifCevaplar: ['bird'] });
  dyEkle(s, 'kh-a6', 'Hikayedeki yeşil ağaç İngilizcede "Green Tree" olarak okunur.', 'Doğru', '', { gorsel: nesne('agac-resmi') });
  dyEkle(s, 'kh-a7', 'Cesur köpek "The Brave Dog" hikayesinde geçmektedir.', 'Doğru', '', { gorsel: nesne('ciftlik-kopegi') });
  boslukEkle(s, 'kh-a8', 'Hikayedeki kuş sabahları uyanıp Güneş\'e İngilizce "......... morning" der.', 'Good', '', { gorsel: nesne('gunesli-gokyuz') });
  boslukEkle(s, 'kh-a9', '"Sing a song" İngilizcede ......... söylemek demektir.', 'şarkı', '', { gorsel: nesne('sarki-kusu') });
  dyEkle(s, 'kh-a10', 'İngilizce kısa hikayeler "Short Stories" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('kitaplik') });
  boslukEkle(s, 'kh-a11', 'Cesur köpek hikayesinde köpek, sevimli ......... (koyunları) korur.', 'sheep', '', { gorsel: nesne('koyun-surusu') });
  dyEkle(s, 'kh-a12', 'Köpeğin zıplaması İngilizcede "Jump" eylemiyle anlatılır.', 'Doğru', '', { gorsel: nesne('ziplayan-kopek') });
  dyEkle(s, 'kh-a13', 'Gökyüzünde "Fly" (uçmak) kuşların yaptığı en güzel eylemdir.', 'Doğru', '', { gorsel: nesne('ucan-kuslar') });
  boslukEkle(s, 'kh-a14', 'Kitabın sonunda cesur köpek mışıl mışıl "........." (uyur).', 'sleep', '', { gorsel: nesne('uyuyan-kopek'), alternatifCevaplar: ['sleeps'] });
  boslukEkle(s, 'kh-a15', 'Mutlu kelimesinin İngilizcesi ......... kelimesidir.', 'happy', '', { gorsel: nesne('gulen-cocuk') });
  dyEkle(s, 'kh-a16', 'Hikayedeki tüm orman canlılarına genel olarak "Animals" deriz.', 'Doğru', '', { gorsel: nesne('orman-hayvanlari') });
  boslukEkle(s, 'kh-a17', 'Resimlere bakarak hikaye okumak kelime öğrenmemizi çok ......... .', 'kolaylaştırır', '', { gorsel: nesne('renkli-sayfa'), alternatifCevaplar: ['sağlar'] });
  boslukEkle(s, 'kh-a18', 'Mutlu kuşun tüyleri sarı (Yellow) ve ......... (mavi) renktedir.', 'blue', '', { gorsel: nesne('sari-mavi-tuy') });
  boslukEkle(s, 'kh-a19', 'Elma kelimesinin İngilizcesi "........." kelimesidir.', 'apple', '', { gorsel: nesne('elma-agaci') });
  dyEkle(s, 'kh-a20', 'Hikayedeki köpek çok hızlı "Run" (koşar).', 'Doğru', '', { gorsel: nesne('kosan-kopek') });
  dyEkle(s, 'kh-a21', 'Kuşlar pencereden girerken "Hello" (merhaba) derler.', 'Doğru', '', { gorsel: nesne('acik-pencere') });
  dyEkle(s, 'kh-a22', '"Short" kelimesi uzun anlamına gelir.', 'Yanlış', '', { gorsel: nesne('hikaye-dinleyen') });
  boslukEkle(s, 'kh-a23', 'Kırmızı renk İngilizcede "........." olarak yazılır.', 'red', '', { gorsel: nesne('kirmizi-elma-sepet') });
  dyEkle(s, 'kh-a24', 'Küçük kelimesinin İngilizcesi "Little" demektir.', 'Doğru', '', { gorsel: nesne('kopek-yavrusu') });
  dyEkle(s, 'kh-a25', 'Kütüphanede hikaye okurken (Read) sessiz olmalıyız.', 'Doğru', '', { gorsel: nesne('kutuphane-sessiz') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('kh-t1', 'İngilizcede "Hikaye" anlamına gelen kelime hangisidir?', 'Story', ['Song', 'Story', 'Apple', 'Dog'], '', { gorsel: nesne('hikaye-kitabi-acik') });
  e('kh-t2', '"Read a story" Türkçede hangi güzel anlama gelir?', 'Hikaye okumak', ['Şarkı söylemek', 'Hikaye okumak', 'Resim çizmek', 'Yemek yemek'], '', { gorsel: nesne('kitap-okuyan-iki') });
  e('kh-t3', 'İngilizcede "Short" kelimesi ne anlama gelir?', 'Kısa', ['Uzun', 'Büyük', 'Kısa', 'Sıcak'], '', { gorsel: nesne('kisa-masal') });
  e('kh-t4', '"The Little Red Apple" hikayesinde anlatılan meyve hangisidir?', 'Elma', ['Muz', 'Elma', 'Portakal', 'Karpuz'], '', { gorsel: nesne('kirmizi-elma-kucuk') });
  e('kh-t5', 'Hikayenin adında geçen "Little" kelimesi ne demektir?', 'Küçük', ['Kocaman', 'Uzun', 'Küçük', 'Yeşil'], '', { gorsel: nesne('gulen-elma') });
  e('kh-t6', '"The Brave Dog" hikayesinin kahramanı olan hayvan hangisidir?', 'Dog', ['Cat', 'Bird', 'Dog', 'Lion'], '', { gorsel: nesne('cesur-kopek') });
  e('kh-t7', '"The Happy Bird" hikayesinde uçan sevimli hayvanın adı nedir?', 'Kuş (Bird)', ['Kuş (Bird)', 'Köpek (Dog)', 'İnek (Cow)', 'At (Horse)'], '', { gorsel: nesne('mutlu-kus') });
  e('kh-t8', 'İngilizcede "Happy" kelimesinin Türkçe karşılığı nedir?', 'Mutlu', ['Üzgün', 'Mutlu', 'Kızgın', 'Şaşkın'], '', { gorsel: nesne('gulen-cocuk') });
  e('kh-t9', 'Kuşun yaptığı "Sing a song" eylemi ne demektir?', 'Şarkı söylemek', ['Şarkı söylemek', 'Dans etmek', 'Uyumak', 'Koşmak'], '', { gorsel: nesne('sarki-kusu') });
  e('kh-t10', 'İngilizcede kuşların yaptığı eylem olan "Fly" ne anlama gelir?', 'Uçmak', ['Zıplamak', 'Uçmak', 'Yüzmek', 'Oturmak'], '', { gorsel: nesne('ucan-kuslar') });
  e('kh-t11', 'Köpeğin koruduğu "Sheep" kelimesi hangi hayvandır?', 'Koyun', ['Tavuk', 'İnek', 'Koyun', 'At'], '', { gorsel: nesne('koyun-surusu') });
  e('kh-t12', '"Green Tree" ifadesi Türkçede neyi anlatır?', 'Yeşil ağaç', ['Mavi deniz', 'Kırmızı elma', 'Yeşil ağaç', 'Sarı güneş'], '', { gorsel: nesne('agac-resmi') });
  e('kh-t13', 'Kuşun sabahları Güneş\'e söylediği "Good morning" ne demektir?', 'Günaydın', ['İyi geceler', 'Günaydın', 'Hoşça kal', 'Teşekkürler'], '', { gorsel: nesne('gunes-dogusu-kus') });
  e('kh-t14', '"Short Stories" kelimeleri sırasıyla ne anlama gelir?', 'Kısa hikayeler', ['Uzun şiirler', 'Kısa hikayeler', 'Müzikli şarkılar', 'Renkli resimler'], '', { gorsel: nesne('kitaplik') });
  e('kh-t15', 'Aşağıdakilerden hangisi bir "Story" (Hikaye) kahramanı olabilir?', 'The Brave Dog (Cesur Köpek)', ['Chair (Sandalye)', 'Pencil (Kalem)', 'The Brave Dog (Cesur Köpek)', 'Desk (Sıra)'], '', { gorsel: nesne('hikaye-kapak') });
  e('kh-t16', 'Hikayedeki köpeğin yaptığı "Run" eylemi nedir?', 'Koşmak', ['Yürümek', 'Koşmak', 'Uyumak', 'İçmek'], '', { gorsel: nesne('kosan-kopek') });
  e('kh-t17', 'Köpeğin engellerden geçerken yaptığı "Jump" nedir?', 'Zıplamak', ['Zıplamak', 'Uçmak', 'Düşmek', 'Çizmek'], '', { gorsel: nesne('ziplayan-kopek') });
  e('kh-t18', 'Hikayenin sonunda köpeğin yaptığı "Sleep" eylemi nedir?', 'Uyumak', ['Yemek yemek', 'Uyumak', 'Uyanmak', 'Oturmak'], '', { gorsel: nesne('uyuyan-kopek') });
  e('kh-t19', 'Ormandaki tüm canlılar olan "Animals" ne anlama gelir?', 'Hayvanlar', ['Renkler', 'Sayılar', 'Eşyalar', 'Hayvanlar'], '', { gorsel: nesne('orman-hayvanlari') });
  e('kh-t20', '"Blue bird" Türkçede ne anlama gelir?', 'Mavi kuş', ['Kırmızı elma', 'Mavi kuş', 'Yeşil ağaç', 'Sarı güneş'], '', { gorsel: nesne('mavi-kus') });
  e('kh-t21', '"Red apple" ifadesi hangi meyveyi tarif eder?', 'Kırmızı elma', ['Sarı muz', 'Yeşil armut', 'Kırmızı elma', 'Mor üzüm'], '', { gorsel: nesne('kirmizi-elma-sepet') });
  e('kh-t22', '"Happy" kelimesinin zıttı (tersi) aşağıdakilerden hangisi olabilir?', 'Üzgün (Sad)', ['Üzgün (Sad)', 'Neşeli', 'Sevimli', 'Hızlı'], '', { gorsel: nesne('mutlu-cocuk-kus') });
  e('kh-t23', 'Hikaye okurken (Read) en çok hangi organımızı kullanırız?', 'Eye', ['Foot', 'Hand', 'Eye', 'Leg'], '', { gorsel: nesne('okuyan-kiz') });
  e('kh-t24', 'Hayvanların "Sing" yapması ne anlama gelir?', 'Şarkı söylemesi', ['Şarkı söylemesi', 'Yemek yemesi', 'Su içmesi', 'Oyun oynaması'], '', { gorsel: nesne('hayvan-korosu') });
  e('kh-t25', 'Kitap okumak hayal gücümüzü nasıl etkiler?', 'Çok geliştirir ve bizi mutlu eder', ['Çok geliştirir ve bizi mutlu eder', 'Bizi üzer', 'Hiç etkilemez', 'Bizi sıkıcı yapar'], '', { gorsel: nesne('kitap-okuyan-mutlu') });
  return s;
}

export function kisaHikayeler(karistir) {
  return {
    id: 'kisa-hikayeler',
    baslik: 'Short Stories',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Ali ve Ayşe kütüphanede "The Little Red Apple" hikayesini okudular. Yeşil ağacın dalındaki mutlu kırmızı elma güneşe gülümsüyordu. "Read a story" İngilizce yeni kelimeler öğrenmek için çok eğlenceliydi!',
          gorsel: anl('kh-anlatim-1'),
        },
        {
          metin:
            'Berk ve Fatma "The Brave Dog" hikayesini okudular. Köpek koyunları (Sheep) koruyordu — gerçekten çok cesur (Brave)! Dog, Run, Jump kelimelerini öğrendiler.',
          gorsel: anl('kh-anlatim-2'),
        },
        {
          metin:
            'Can ve Zeynep "The Happy Bird" kitabını seçtiler. Kuş sabahları "Good morning!" diyor ve gökyüzünde özgürce uçuyordu (Fly). Sing a song yapıyor, ormandaki Animals dinliyordu.',
          gorsel: anl('kh-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
