/** GOREV-ING3C — Actions (Eylemler / Hareketler) */

const KAZANIM = 'ING.2.3.3';

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
  boslukEkle(s, 'ey-a1', 'İngilizcede koşmak kelimesi ......... olarak yazılır.', 'run', '', { gorsel: nesne('kosan-cocuk') });
  dyEkle(s, 'ey-a2', 'Zıplamak eyleminin İngilizcesi "Jump" demektir.', 'Doğru', '', { gorsel: nesne('ziplayan-cocuk') });
  boslukEkle(s, 'ey-a3', 'Yüzmek kelimesinin İngilizce karşılığı ......... kelimesidir.', 'swim', '', { gorsel: nesne('suda-yuzen') });
  dyEkle(s, 'ey-a4', 'Okumak İngilizcede "Read" olarak söylenir.', 'Doğru', '', { gorsel: nesne('kitap-okuyan-kiz') });
  boslukEkle(s, 'ey-a5', 'Yazı yazmak eyleminin İngilizcesi ......... kelimesidir.', 'write', '', { gorsel: nesne('deftere-yazan') });
  dyEkle(s, 'ey-a6', '"Draw" kelimesi Türkçede resim çizmek demektir.', 'Doğru', '', { gorsel: nesne('resim-cizen') });
  boslukEkle(s, 'ey-a7', 'Şarkı söylemek İngilizcede ......... olarak adlandırılır.', 'sing', '', { gorsel: nesne('mikrofon-sarki') });
  dyEkle(s, 'ey-a8', '"Dance" kelimesi İngilizcede dans etmek anlamına gelir.', 'Doğru', '', { gorsel: nesne('dans-eden') });
  boslukEkle(s, 'ey-a9', 'Oyun oynamak kelimesinin İngilizcesi ......... kelimesidir.', 'play', '', { gorsel: nesne('oyuncak-oynayan') });
  dyEkle(s, 'ey-a10', 'Yemek yemek İngilizcede "Eat" demektir.', 'Doğru', '', { gorsel: nesne('yemek-yiyen') });
  boslukEkle(s, 'ey-a11', 'İçecek içmek eyleminin İngilizcesi ......... kelimesidir.', 'drink', '', { gorsel: nesne('su-icen') });
  dyEkle(s, 'ey-a12', 'Uyumak kelimesi İngilizcede "Sleep" olarak yazılır.', 'Doğru', '', { gorsel: nesne('yatakta-uyuyan') });
  boslukEkle(s, 'ey-a13', '"Run" eylemini yapmak kalbimizi çok daha ......... çalıştırır.', 'hızlı', '', { gorsel: nesne('kosu-bandi'), alternatifCevaplar: ['hizli'] });
  dyEkle(s, 'ey-a14', 'Yüzmek için (Swim) suya girmeliyiz.', 'Doğru', '', { gorsel: nesne('havuz-resmi') });
  boslukEkle(s, 'ey-a15', 'Çok fazla kitap "........." (okumak) hayal gücümüzü geliştirir.', 'read', '', { gorsel: nesne('kitaplik') });
  dyEkle(s, 'ey-a16', '"Write" kelimesi Türkçede uyumak anlamına gelir.', 'Yanlış', '', { gorsel: nesne('kursun-kalem') });
  boslukEkle(s, 'ey-a17', 'Boya kalemleriyle harika resimler "........." (çizebiliriz).', 'draw', '', { gorsel: nesne('boya-kalemleri') });
  dyEkle(s, 'ey-a18', '"Sing" kelimesi şarkı söylemek demektir.', 'Doğru', '', { gorsel: nesne('nota-sembolleri') });
  boslukEkle(s, 'ey-a19', 'Balerinler sahnede çok güzel "........." (dans ederler).', 'dance', '', { gorsel: nesne('bale-yapan') });
  dyEkle(s, 'ey-a20', 'Arkadaşlarla top "Play" (oynamak) çok sıkıcıdır.', 'Yanlış', '', { gorsel: nesne('futbol-topu') });
  boslukEkle(s, 'ey-a21', 'Sağlıklı şeyler "........." (yemek) bizi büyütür.', 'eat', '', { gorsel: nesne('saglikli-yemek') });
  dyEkle(s, 'ey-a22', '"Drink" kelimesi bir şeyler içmek anlamına gelir.', 'Doğru', '', { gorsel: nesne('bardak-su') });
  boslukEkle(s, 'ey-a23', 'Gece olduğunda yatağımızda mışıl mışıl "........." (uyuruz).', 'sleep', '', { gorsel: nesne('yastik') });
  dyEkle(s, 'ey-a24', 'İp atlarken aslında sürekli "Jump" (zıplarız).', 'Doğru', '', { gorsel: nesne('ip-atlayan') });
  boslukEkle(s, 'ey-a25', 'Bu yaptığımız tüm hareketlere İngilizcede "........." (eylemler/hareketler) denir.', 'actions', '', { gorsel: nesne('hareketli-karakterler') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('ey-t1', 'İngilizcede "Koşmak" eyleminin karşılığı nedir?', 'Run', ['Sleep', 'Walk', 'Run', 'Read'], '', { gorsel: nesne('hizli-kosan-sporcu') });
  e('ey-t2', 'Beden eğitimi dersinde zıplayan Berk hangi İngilizce hareketi yapmaktadır?', 'Jump', ['Jump', 'Eat', 'Write', 'Sing'], '', { gorsel: nesne('havaya-ziplayan') });
  e('ey-t3', 'Suda ilerlemek için yaptığımız "Yüzmek" eyleminin İngilizcesi hangisidir?', 'Swim', ['Drink', 'Swim', 'Dance', 'Draw'], '', { gorsel: nesne('denizde-yuzen') });
  e('ey-t4', 'Kütüphanede sessizce kitap okuyan Selin\'in yaptığı "Okumak" eyleminin İngilizcesi nedir?', 'Read', ['Read', 'Sing', 'Jump', 'Run'], '', { gorsel: nesne('acik-kitap') });
  e('ey-t5', 'Defterimize ödevimizi yaparken kullandığımız "Yazmak" kelimesinin İngilizcesi nedir?', 'Write', ['Play', 'Read', 'Write', 'Sleep'], '', { gorsel: nesne('defter-kalem') });
  e('ey-t6', 'Renkli kalemlerle resim "Çizmek" İngilizcede nasıl söylenir?', 'Draw', ['Swim', 'Draw', 'Eat', 'Drink'], '', { gorsel: nesne('ev-resmi-cizen') });
  e('ey-t7', 'Sahnede güzel sesiyle "Şarkı söyleyen" Can\'ın yaptığı eylem hangisidir?', 'Sing', ['Sing', 'Dance', 'Run', 'Jump'], '', { gorsel: nesne('mikrofon-tutan') });
  e('ey-t8', 'Müziğe ayak uydurarak yapılan "Dans etmek" eyleminin İngilizcesi nedir?', 'Dance', ['Read', 'Dance', 'Write', 'Sleep'], '', { gorsel: nesne('ritim-tutan') });
  e('ey-t9', 'Arkadaşımızla veya oyuncaklarımızla "Oyun oynamak" İngilizcede nedir?', 'Play', ['Play', 'Eat', 'Drink', 'Draw'], '', { gorsel: nesne('oyuncak-mutlu') });
  e('ey-t10', 'Acıktığımızda yaptığımız "Yemek yemek" eyleminin İngilizcesi hangisidir?', 'Eat', ['Drink', 'Swim', 'Eat', 'Sing'], '', { gorsel: nesne('elma-yiyen') });
  e('ey-t11', 'Susadığımızda yaptığımız "İçmek" eyleminin İngilizcesi nedir?', 'Drink', ['Read', 'Drink', 'Eat', 'Jump'], '', { gorsel: nesne('bardaktan-su') });
  e('ey-t12', 'Geceleri yatağımızda yaptığımız "Uyumak" eyleminin İngilizce adı nedir?', 'Sleep', ['Sleep', 'Run', 'Play', 'Write'], '', { gorsel: nesne('yatakta-uyuyan') });
  e('ey-t13', 'Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?', 'Read = Uyumak', ['Run = Koşmak', 'Swim = Yüzmek', 'Read = Uyumak', 'Jump = Zıplamak'], 'Read okumak demektir!', { gorsel: nesne('eylemler-sembolleri'), sasirtma: true });
  e('ey-t14', 'Kurbağalar en çok hangi hareketi (Action) yaparlar?', 'Jump', ['Read', 'Write', 'Jump', 'Sing'], '', { gorsel: nesne('ziplayan-kurbaga') });
  e('ey-t15', 'Balıklar suda hangi eylemi gerçekleştirirler?', 'Swim', ['Swim', 'Dance', 'Run', 'Sleep'], '', { gorsel: nesne('balik-resmi') });
  e('ey-t16', '"Sing and Dance" kelimeleri sırasıyla ne anlama gelir?', 'Şarkı söylemek ve Dans etmek', ['Uyumak ve İçmek', 'Şarkı söylemek ve Dans etmek', 'Koşmak ve Zıplamak', 'Okumak ve Yazmak'], '', { gorsel: nesne('muzik-notalari') });
  e('ey-t17', 'Sınıfta öğrenciler en çok hangi iki eylemi yaparlar?', 'Read and Write', ['Read and Write', 'Swim and Run', 'Sleep and Eat', 'Sing and Dance'], '', { gorsel: nesne('okul-masasi') });
  e('ey-t18', '"Eat and Drink" ifadeleri Türkçede hangi anlama gelir?', 'Yemek ve İçmek', ['Okumak ve Çizmek', 'Yemek ve İçmek', 'Koşmak ve Yüzmek', 'Dans etmek ve Uyumak'], '', { gorsel: nesne('yemek-masasi') });
  e('ey-t19', '"Play" kelimesi ne anlama gelir?', 'Oyun oynamak', ['Uyumak', 'Zıplamak', 'Oyun oynamak', 'Şarkı söylemek'], '', { gorsel: nesne('top-oynayan-kopek') });
  e('ey-t20', '"Sleep" eylemi bize ne hissettirir?', 'Dinlendirir', ['Yorar', 'Dinlendirir', 'Susatır', 'Acıktırır'], '', { gorsel: nesne('gece-manzarasi') });
  e('ey-t21', '"Run" ve "Swim" eylemlerinin ortak özelliği nedir?', 'İkisi de eğlenceli ve sağlıklı spor eylemleridir', ['İkisi de bizi uykulu yapar', 'İkisi de eğlenceli ve sağlıklı spor eylemleridir', 'İkisi de yemekle ilgilidir', 'İkisi de müzikle yapılır'], '', { gorsel: nesne('kosu-havuz') });
  e('ey-t22', '"Read" eylemini yaparken vücudumuzun en çok hangi bölümünü (Body Part) kullanırız?', 'Eye', ['Nose', 'Ear', 'Eye', 'Foot'], '', { gorsel: nesne('kitap-okuyan-gozler') });
  e('ey-t23', '"Run" ve "Jump" yaparken vücudumuzun hangi bölümünü çok kullanırız?', 'Leg', ['Hand', 'Leg', 'Ear', 'Nose'], '', { gorsel: nesne('kosan-bacaklar') });
  e('ey-t24', '"Eat", "Drink" ve "Sing" eylemlerini yaparken vücudumuzun hangi organını kullanırız?', 'Mouth', ['Mouth', 'Eye', 'Foot', 'Ear'], '', { gorsel: nesne('sarki-soyleyen-agiz') });
  e('ey-t25', '"Write" ve "Draw" yaparken kullandığımız marifetli organımız hangisidir?', 'Hand', ['Leg', 'Hand', 'Nose', 'Ear'], '', { gorsel: nesne('resim-cizen-eller') });
  return s;
}

export function eylemler(karistir) {
  return {
    id: 'eylemler',
    baslik: 'Actions',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Enerjik bir hafta sonuydu. Berk ve Yusuf spor parkında çok eğleniyorlardı. Berk hızlıca koşmaya başladı ve "Bak Yusuf, ben koşuyorum! İngilizcede koşmak Run demektir!" diye seslendi. Yusuf da durduğu yerde havaya doğru sıçradı. "Ben de zıplıyorum Berk, zıplamak İngilizcede Jump demek!" diye gülümsedi. O sırada parkın yanındaki kapalı yüzme havuzundan çıkan Can yanlarına geldi. Saçları ıslaktı. "Ben de az önce yüzdüm," dedi Can, "Yüzmek kelimesinin İngilizcesi ise Swim." Çocuklar; koşmak (Run), zıplamak (Jump) ve yüzmek (Swim) gibi hareketlerin onları ne kadar sağlıklı ve güçlü yaptığını bir kez daha anladılar. İngilizce hareket etmek (Actions) harikaydı!',
          gorsel: anl('ey-anlatim-1'),
        },
        {
          metin:
            'Pazartesi sabahı sınıfta çok huzurlu bir ortam vardı. Zeynep sırasında oturmuş, renkli bir hikaye kitabı okuyordu. Öğretmeni yanına gelip, "Okumak İngilizcede Read demektir Zeynep, harikasın," dedi. Ayşe defterine güzel harflerle yazılar yazıyordu. Ayşe, "Öğretmenim, yazmak İngilizcede ne demek?" diye sordu. "Yazmak Write demektir canım," diye cevap verdi öğretmeni. Arka sırada oturan Ali ise kocaman bir kağıda güneş ve ev resmi çiziyordu. Resim çizmenin İngilizcesi "Draw" idi. Sınıftaki bu sessiz ama akıllı eylemler; okumak (Read), yazmak (Write) ve çizmek (Draw) onların zihnini tıpkı bir spor gibi güçlendiriyordu.',
          gorsel: anl('ey-anlatim-2'),
        },
        {
          metin:
            'Müzik dersi zili çaldığında herkesin yüzünde kocaman bir gülümseme vardı. Öğretmenleri piyanonun başına geçti ve onlara harika bir İngilizce şarkı söylemeye başladı. Şarkı söylemenin İngilizcesi "Sing" idi. Hande ve Selin müziğin ritmine kapılıp neşeyle dans etmeye başladılar. Dans etmek İngilizcede "Dance" olarak söylenirdi. Tüm sınıf birlikte ritim tutup oyunlar oynadı. Oyun oynamak ise "Play" demekti. Günün sonunda eve dönüp güzel yemekler yediklerinde yemek yemek "Eat", su içmek "Drink", gece mışıl mışıl uyumak ise "Sleep" demekti. Hayatımızdaki her hareketin (Action) İngilizce bir adı vardı ve onları öğrenmek hayatı çok daha neşeli kılıyordu!',
          gorsel: anl('ey-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
