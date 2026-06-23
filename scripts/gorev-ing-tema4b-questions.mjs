/** GOREV-ING-TEMA4B — Feelings (Duygular) */

const KAZANIM = 'ING.2.4.2';

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
  boslukEkle(s, 'dg-a1', 'Mutlu kelimesinin İngilizcesi ......... kelimesidir.', 'happy', '', { gorsel: nesne('mutlu-yuz') });
  boslukEkle(s, 'dg-a2', 'Üzgün kelimesinin İngilizce karşılığı ......... kelimesidir.', 'sad', '', { gorsel: nesne('uzgun-yuz') });
  dyEkle(s, 'dg-a3', '"Happy" kelimesi mutlu anlamına gelir.', 'Doğru', '', { gorsel: nesne('mutlu-cocuk') });
  boslukEkle(s, 'dg-a4', 'Kızgın kelimesinin İngilizcesi ......... kelimesidir.', 'angry', '', { gorsel: nesne('kizgin-yuz') });
  dyEkle(s, 'dg-a5', '"Sad" kelimesi üzgün demektir.', 'Doğru', '', { gorsel: nesne('uzgun-cocuk') });
  boslukEkle(s, 'dg-a6', 'Korkmuş kelimesinin İngilizcesi ......... kelimesidir.', 'scared', '', { gorsel: nesne('korkmus-yuz'), alternatifCevaplar: ['afraid'] });
  boslukEkle(s, 'dg-a7', 'Yorgun kelimesinin İngilizce karşılığı ......... kelimesidir.', 'tired', '', { gorsel: nesne('yorgun-cocuk') });
  dyEkle(s, 'dg-a8', '"Surprised" kelimesi şaşırmış anlamına gelir.', 'Doğru', '', { gorsel: nesne('sasirmis-yuz') });
  boslukEkle(s, 'dg-a9', 'Heyecanlı kelimesinin İngilizcesi ......... kelimesidir.', 'excited', '', { gorsel: nesne('heyecanli-cocuk') });
  boslukEkle(s, 'dg-a10', 'Duygular kelimesinin İngilizcesi ......... kelimesidir.', 'feelings', '', { gorsel: nesne('duygu-kartlari') });
  dyEkle(s, 'dg-a11', '"Angry" kelimesi mutlu anlamına gelir.', 'Yanlış', '', { gorsel: nesne('kizgin-yuz') });
  boslukEkle(s, 'dg-a12', 'Aç kelimesinin İngilizcesi ......... kelimesidir.', 'hungry', '', { gorsel: nesne('ac-cocuk') });
  boslukEkle(s, 'dg-a13', 'Susamış kelimesinin İngilizcesi ......... kelimesidir.', 'thirsty', '', { gorsel: nesne('susuz-cocuk') });
  dyEkle(s, 'dg-a14', '"Tired" kelimesi yorgun demektir.', 'Doğru', '', { gorsel: nesne('yorgun-cocuk') });
  boslukEkle(s, 'dg-a15', 'Sıkılmış kelimesinin İngilizcesi ......... kelimesidir.', 'bored', '', { gorsel: nesne('sikilmis-cocuk') });
  dyEkle(s, 'dg-a16', '"Scared" kelimesi korkmuş anlamına gelir.', 'Doğru', '', { gorsel: nesne('korkmus-cocuk') });
  boslukEkle(s, 'dg-a17', '"How are you?" sorusuna "I am ........." (iyiyim) diyebiliriz.', 'fine', '', { gorsel: nesne('iyiyim-isareti'), alternatifCevaplar: ['good', 'well'] });
  dyEkle(s, 'dg-a18', '"Excited" kelimesi heyecanlı demektir.', 'Doğru', '', { gorsel: nesne('heyecanli-cocuk') });
  boslukEkle(s, 'dg-a19', 'Gülümsemek İngilizcede "........." kelimesidir.', 'smile', '', { gorsel: nesne('gulumseyen-yuz') });
  dyEkle(s, 'dg-a20', '"Bored" kelimesi sıkılmış anlamına gelir.', 'Doğru', '', { gorsel: nesne('sikilmis-cocuk') });
  boslukEkle(s, 'dg-a21', 'Ağlamak İngilizcede "........." kelimesidir.', 'cry', '', { gorsel: nesne('aglayan-cocuk') });
  dyEkle(s, 'dg-a22', '"Hungry" kelimesi aç demektir.', 'Doğru', '', { gorsel: nesne('ac-cocuk') });
  boslukEkle(s, 'dg-a23', 'Sevinç kelimesinin İngilizcesi ......... kelimesidir.', 'joy', '', { gorsel: nesne('sevincli-cocuk') });
  dyEkle(s, 'dg-a24', '"Thirsty" kelimesi susamış anlamına gelir.', 'Doğru', '', { gorsel: nesne('susuz-cocuk') });
  boslukEkle(s, 'dg-a25', '"I feel happy" cümlesi Türkçede "Mutlu hissediyorum" demektir.', 'Mutlu hissediyorum', '', { gorsel: nesne('mutlu-cocuk'), cevapTipi: 'metin' });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('dg-t1', 'Mutlu kelimesinin İngilizcesi hangisidir?', 'Happy', ['Sad', 'Angry', 'Happy', 'Tired'], '', { gorsel: nesne('mutlu-yuz') });
  e('dg-t2', 'Üzgün kelimesinin İngilizcesi nedir?', 'Sad', ['Happy', 'Sad', 'Excited', 'Hungry'], '', { gorsel: nesne('uzgun-yuz') });
  e('dg-t3', 'Kızgın kelimesinin İngilizcesi hangisidir?', 'Angry', ['Angry', 'Happy', 'Tired', 'Bored'], '', { gorsel: nesne('kizgin-yuz') });
  e('dg-t4', 'Korkmuş kelimesinin İngilizcesi nedir?', 'Scared', ['Scared', 'Happy', 'Excited', 'Hungry'], '', { gorsel: nesne('korkmus-yuz') });
  e('dg-t5', 'Yorgun kelimesinin İngilizcesi hangisidir?', 'Tired', ['Tired', 'Happy', 'Angry', 'Excited'], '', { gorsel: nesne('yorgun-cocuk') });
  e('dg-t6', 'Şaşırmış kelimesinin İngilizcesi nedir?', 'Surprised', ['Surprised', 'Sad', 'Bored', 'Thirsty'], '', { gorsel: nesne('sasirmis-yuz') });
  e('dg-t7', 'Heyecanlı kelimesinin İngilizcesi hangisidir?', 'Excited', ['Excited', 'Tired', 'Sad', 'Angry'], '', { gorsel: nesne('heyecanli-cocuk') });
  e('dg-t8', 'Aç kelimesinin İngilizcesi nedir?', 'Hungry', ['Hungry', 'Thirsty', 'Happy', 'Tired'], '', { gorsel: nesne('ac-cocuk') });
  e('dg-t9', 'Susamış kelimesinin İngilizcesi hangisidir?', 'Thirsty', ['Thirsty', 'Hungry', 'Sad', 'Happy'], '', { gorsel: nesne('susuz-cocuk') });
  e('dg-t10', 'Sıkılmış kelimesinin İngilizcesi nedir?', 'Bored', ['Bored', 'Excited', 'Happy', 'Surprised'], '', { gorsel: nesne('sikilmis-cocuk') });
  e('dg-t11', '"How are you?" sorusunun Türkçe anlamı nedir?', 'Nasılsın?', ['Merhaba', 'Nasılsın?', 'Hoşça kal', 'Görüşürüz'], '', { gorsel: nesne('nasilsin-sorusu') });
  e('dg-t12', '"I am fine" ifadesi ne anlama gelir?', 'İyiyim', ['Üzgünüm', 'İyiyim', 'Yorgunum', 'Kızgınım'], '', { gorsel: nesne('iyiyim-isareti') });
  e('dg-t13', 'Duygular kelimesinin İngilizcesi hangisidir?', 'Feelings', ['Colors', 'Feelings', 'Numbers', 'Family'], '', { gorsel: nesne('duygu-kartlari') });
  e('dg-t14', 'Gülümsemek İngilizcede nasıl söylenir?', 'Smile', ['Cry', 'Smile', 'Sleep', 'Run'], '', { gorsel: nesne('gulumseyen-yuz') });
  e('dg-t15', 'Ağlamak İngilizcede hangi kelimedir?', 'Cry', ['Cry', 'Smile', 'Jump', 'Sing'], '', { gorsel: nesne('aglayan-cocuk') });
  e('dg-t16', 'Parkta oynayan neşeli çocuğun duygusu hangisidir?', 'Happy', ['Sad', 'Angry', 'Happy', 'Scared'], '', { gorsel: nesne('parkta-oynayan') });
  e('dg-t17', 'Kaybolan oyuncağı için ağlayan çocuk hangi duyguyu hisseder?', 'Sad', ['Happy', 'Excited', 'Sad', 'Hungry'], '', { gorsel: nesne('aglayan-cocuk') });
  e('dg-t18', 'Karanlıkta korkan çocuk hangi duyguyu hisseder?', 'Scared', ['Happy', 'Bored', 'Scared', 'Excited'], '', { gorsel: nesne('korkmus-cocuk') });
  e('dg-t19', 'Uzun yürüyüşten sonra çocuk hangi duyguyu hisseder?', 'Tired', ['Excited', 'Tired', 'Angry', 'Surprised'], '', { gorsel: nesne('yorgun-cocuk') });
  e('dg-t20', 'Doğum günü sürprizinde çocuk hangi duyguyu hisseder?', 'Surprised', ['Bored', 'Sad', 'Surprised', 'Thirsty'], '', { gorsel: nesne('sasirmis-cocuk') });
  e('dg-t21', 'Öğle yemeği vakti gelince çocuk hangi duyguyu hisseder?', 'Hungry', ['Thirsty', 'Happy', 'Hungry', 'Tired'], '', { gorsel: nesne('ac-cocuk') });
  e('dg-t22', 'Sıcak günde su içmek isteyen çocuk hangi duyguyu hisseder?', 'Thirsty', ['Hungry', 'Thirsty', 'Sad', 'Angry'], '', { gorsel: nesne('susuz-cocuk') });
  e('dg-t23', '"I feel excited" cümlesi ne anlama gelir?', 'Heyecanlı hissediyorum', ['Üzgünüm', 'Yorgunum', 'Heyecanlı hissediyorum', 'Korkuyorum'], '', { gorsel: nesne('heyecanli-cocuk') });
  e('dg-t24', 'Arkadaşı oyuncağını alınca çocuk hangi duyguyu hisseder?', 'Angry', ['Happy', 'Angry', 'Excited', 'Bored'], '', { gorsel: nesne('kizgin-cocuk') });
  e('dg-t25', 'Uzun süre bekleyen çocuk hangi duyguyu hisseder?', 'Bored', ['Excited', 'Happy', 'Bored', 'Surprised'], '', { gorsel: nesne('sikilmis-cocuk') });
  return s;
}

export function duygular(karistir) {
  return {
    id: 'duygular',
    baslik: 'Feelings',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Sınıfta duygu kartları vardı. Öğretmen "Happy, sad, angry, scared!" dedi. Elanaz gülümsedi: "I am happy!" Berk biraz üzgündü: "I am sad." Her çocuk kendi duygusunu İngilizce söylemeyi öğrendi.',
          gorsel: anl('dg-anlatim-1'),
        },
        {
          metin:
            'Öğretmen sordu: "How are you?" Çocuklar sırayla cevap verdi: "I am fine!", "I am tired!", "I am excited!" Duygularını paylaşmak sınıfı daha sıcak bir yer yaptı.',
          gorsel: anl('dg-anlatim-2'),
        },
        {
          metin:
            'Parkta oynarken Berk korktu: "I am scared!" Annesi ona sarıldı. Elanaz heyecanlandı: "I am surprised!" Duygularımızı İngilizce söylemek çok kolaydı.',
          gorsel: anl('dg-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
