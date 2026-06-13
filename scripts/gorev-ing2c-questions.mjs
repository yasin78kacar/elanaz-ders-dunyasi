/** GOREV-ING2C — Body Parts (Vücudumuzun Bölümleri) */

const KAZANIM = 'ING.2.2.3';

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
  boslukEkle(s, 'vb-a1', 'Vücudumuzun en üstünde bulunan baş (kafa) kelimesinin İngilizcesi ......... kelimesidir.', 'head', '', { gorsel: nesne('bas-kafa') });
  dyEkle(s, 'vb-a2', 'İngilizcede göz "Eye" demektir.', 'Doğru', '', { gorsel: nesne('insan-gozu') });
  boslukEkle(s, 'vb-a3', 'Kulak kelimesinin İngilizce karşılığı ......... kelimesidir.', 'ear', '', { gorsel: nesne('insan-kulak') });
  dyEkle(s, 'vb-a4', 'Burun İngilizcede "Nose" olarak söylenir.', 'Doğru', '', { gorsel: nesne('insan-burnu') });
  boslukEkle(s, 'vb-a5', 'Ağız kelimesinin İngilizcesi ......... kelimesidir.', 'mouth', '', { gorsel: nesne('gulumseyen-agiz') });
  dyEkle(s, 'vb-a6', '"Arm" kelimesi Türkçede bacak anlamına gelir.', 'Yanlış', '', { gorsel: nesne('insan-kolu') });
  boslukEkle(s, 'vb-a7', 'El kelimesinin İngilizce yazılışı ......... kelimesidir.', 'hand', '', { gorsel: nesne('insan-eli') });
  dyEkle(s, 'vb-a8', 'El parmaklarımıza İngilizcede "Finger" denir.', 'Doğru', '', { gorsel: nesne('el-parmaklari') });
  boslukEkle(s, 'vb-a9', 'Bacak kelimesinin İngilizcesi ......... kelimesidir.', 'leg', '', { gorsel: nesne('insan-bacagi') });
  dyEkle(s, 'vb-a10', 'Ayak İngilizcede "Foot" olarak yazılır.', 'Doğru', '', { gorsel: nesne('insan-ayagi') });
  boslukEkle(s, 'vb-a11', 'Ayak parmaklarımızın İngilizcesi ......... kelimesidir.', 'toe', '', { gorsel: nesne('ayak-parmaklari') });
  dyEkle(s, 'vb-a12', '"Eye" kelimesi Türkçede kulak demektir.', 'Yanlış', '', { gorsel: nesne('cift-goz') });
  dyEkle(s, 'vb-a13', '"Hand" kelimesi el anlamına gelir ve resim yapmamızı sağlar.', 'Doğru', '', { gorsel: nesne('el-sallayan-el') });
  boslukEkle(s, 'vb-a14', 'Çiçekleri kokladığımız organımız olan buruna "........." deriz.', 'nose', '', { gorsel: nesne('koklayan-burun') });
  boslukEkle(s, 'vb-a15', 'Sesleri duyduğumuz kulak İngilizcede "........." olarak yazılır.', 'ear', '', { gorsel: nesne('dinleyen-kulak') });
  dyEkle(s, 'vb-a16', '"Arm" kelimesi Türkçede kafa anlamına gelir.', 'Yanlış', '', { gorsel: nesne('guclu-kol') });
  boslukEkle(s, 'vb-a17', 'Koşmamızı ve yürümemizi sağlayan bacağa "........." deriz.', 'leg', '', { gorsel: nesne('kosan-bacaklar') });
  dyEkle(s, 'vb-a18', '"Foot" kelimesi Türkçede ayak demektir.', 'Doğru', '', { gorsel: nesne('ayakkabi-ayak') });
  boslukEkle(s, 'vb-a19', 'Vücut bölümleri İngilizcede "Body ........." olarak söylenir.', 'parts', '', { gorsel: nesne('insan-vucudu') });
  dyEkle(s, 'vb-a20', '"Mouth" kelimesi göz anlamına gelir.', 'Yanlış', '', { gorsel: nesne('konusan-agiz') });
  boslukEkle(s, 'vb-a21', 'Ellerimizde bulunan parmaklara İngilizcede "........." kelimesini kullanırız.', 'finger', '', { gorsel: nesne('on-el-parmagi') });
  dyEkle(s, 'vb-a22', 'Ayak parmaklarımıza "Toe" deriz.', 'Doğru', '', { gorsel: nesne('ayak-parmagi') });
  boslukEkle(s, 'vb-a23', 'Kafamıza kask takarken koruduğumuz bölge olan baş "........." olarak adlandırılır.', 'head', '', { gorsel: nesne('kask-bas') });
  dyEkle(s, 'vb-a24', 'Ağzımız İngilizcede "Mouth" olarak söylenir.', 'Doğru', '', { gorsel: nesne('gulumseyen-yuz') });
  boslukEkle(s, 'vb-a25', 'Gözlük taktığımız organımız olan göz İngilizcede "........." (göz) kelimesidir.', 'eye', '', { gorsel: nesne('gozluk-cocuk') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('vb-t1', 'Saçlarımızın bulunduğu baş (kafa) bölümünün İngilizcesi nedir?', 'Head', ['Ear', 'Head', 'Leg', 'Arm'], '', { gorsel: nesne('sac-taranan-bas') });
  e('vb-t2', 'Dünyayı, renkleri ve şekilleri görmemizi sağlayan gözün İngilizce adı hangisidir?', 'Eye', ['Eye', 'Nose', 'Hand', 'Foot'], '', { gorsel: nesne('guzel-goz') });
  e('vb-t3', 'Sesleri, müziği ve arkadaşlarımızın sesini duyduğumuz kulağın İngilizcesi nedir?', 'Ear', ['Mouth', 'Finger', 'Ear', 'Leg'], '', { gorsel: nesne('muzik-kulak') });
  e('vb-t4', 'Nefes almamızı ve mis gibi kokuları duymamızı sağlayan burnun İngilizcesi aşağıdakilerden hangisidir?', 'Nose', ['Nose', 'Eye', 'Arm', 'Toe'], '', { gorsel: nesne('cicek-burun') });
  e('vb-t5', 'Yemek yediğimiz, konuştuğumuz ve şarkı söylediğimiz ağzın İngilizce karşılığı nedir?', 'Mouth', ['Mouth', 'Head', 'Foot', 'Hand'], '', { gorsel: nesne('konusan-agiz') });
  e('vb-t6', 'Eşyaları kaldırmamızı sağlayan kolun İngilizcesi hangi seçenekte doğru verilmiştir?', 'Arm', ['Ear', 'Leg', 'Arm', 'Nose'], '', { gorsel: nesne('guclu-kol') });
  e('vb-t7', 'Birine el sallarken kullandığımız elin İngilizcesi nedir?', 'Hand', ['Hand', 'Foot', 'Eye', 'Mouth'], '', { gorsel: nesne('el-sallayan-el') });
  e('vb-t8', 'Kalem tutmamızı sağlayan el parmaklarımızın İngilizcesi nedir?', 'Finger', ['Leg', 'Head', 'Finger', 'Toe'], '', { gorsel: nesne('el-parmaklari') });
  e('vb-t9', 'Yürümemizi, koşmamızı ve zıplamamızı sağlayan bacağın İngilizcesi nedir?', 'Leg', ['Leg', 'Arm', 'Ear', 'Nose'], '', { gorsel: nesne('yuruyen-bacaklar') });
  e('vb-t10', 'Ayakkabı giydiğimiz ve yere sağlam basmamızı sağlayan ayağın İngilizcesi hangisidir?', 'Foot', ['Foot', 'Hand', 'Head', 'Eye'], '', { gorsel: nesne('yere-basan-ayak') });
  e('vb-t11', 'Ayak uçlarımızda bulunan ayak parmaklarına İngilizcede ne ad verilir?', 'Toe', ['Finger', 'Toe', 'Arm', 'Mouth'], '', { gorsel: nesne('ayak-parmaklari') });
  e('vb-t12', 'Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?', 'Burun = Hand', ['Göz = Eye', 'Kulak = Ear', 'Burun = Hand', 'Ağız = Mouth'], 'Nose burun demektir!', { gorsel: nesne('yuz-organlari'), sasirtma: true });
  e('vb-t13', '"Eye" ve "Ear" kelimeleri sırasıyla hangi organlardır?', 'Göz ve Kulak', ['Burun ve Ağız', 'Göz ve Kulak', 'El ve Ayak', 'Kol ve Bacak'], '', { gorsel: grup(['insan-gozu', 'insan-kulak'], ['insan-gozu', 'insan-kulak']) });
  e('vb-t14', '"Vücut bölümleri" ifadesinin genel İngilizce adı nedir?', 'Body Parts', ['Animals', 'Colors', 'Body Parts', 'Food'], '', { gorsel: nesne('insan-vucudu-resmi') });
  e('vb-t15', '"Head" kelimesinin Türkçedeki anlamı nedir?', 'Baş (Kafa)', ['Baş (Kafa)', 'Bacak', 'Kol', 'Ayak'], '', { gorsel: nesne('bas-kafa-resmi') });
  e('vb-t16', 'İngilizce "Mouth" denildiğinde aklımıza hangi organımız gelir?', 'Ağız', ['Göz', 'Ağız', 'Kulak', 'Burun'], '', { gorsel: nesne('gulumseyen-agiz') });
  e('vb-t17', 'Aşağıdakilerden hangisi yürümemize yardımcı olur?', 'Leg', ['Ear', 'Arm', 'Leg', 'Eye'], '', { gorsel: grup(['insan-kolu', 'insan-bacagi'], 'insan-bacagi') });
  e('vb-t18', 'Vücudumuzdaki "Hand and Foot" hangi iki bölümdür?', 'El ve Ayak', ['El ve Ayak', 'Kol ve Bacak', 'Göz ve Kulak', 'Burun ve Ağız'], '', { gorsel: grup(['insan-eli', 'insan-ayagi'], ['insan-eli', 'insan-ayagi']) });
  e('vb-t19', '"Ear" kelimesi Türkçede hangi anlama gelir?', 'Kulak', ['Burun', 'Baş', 'Göz', 'Kulak'], '', { gorsel: nesne('kulak-resmi') });
  e('vb-t20', 'Güzel kokuları aldığımız "Nose" ne demektir?', 'Burun', ['Burun', 'Ağız', 'El', 'Parmak'], '', { gorsel: nesne('insan-burnu') });
  e('vb-t21', 'Görme organımız "Eye" kelimesi hangi organdır?', 'Göz', ['Kol', 'Bacak', 'Göz', 'Ayak'], '', { gorsel: nesne('iki-goz') });
  e('vb-t22', '"Hand" kelimesi hangi organın İngilizce adıdır?', 'El', ['Bacak', 'Ayak', 'El', 'Kulak'], '', { gorsel: nesne('el-sallayan-el') });
  e('vb-t23', '"Arm" kelimesinin Türkçe karşılığı hangisidir?', 'Kol', ['Kol', 'Parmak', 'Baş', 'Ağız'], '', { gorsel: nesne('kol-kasi') });
  e('vb-t24', '"Finger" kelimesi nedir?', 'El parmağı', ['Ayak', 'Burun', 'El parmağı', 'Göz'], '', { gorsel: nesne('parmak-sayan-cocuk') });
  e('vb-t25', '"Foot" kelimesinin Türkçesi hangi seçenekte doğru verilmiştir?', 'Ayak', ['Ayak', 'Bacak', 'Kol', 'El'], '', { gorsel: nesne('yere-basan-ayak') });
  return s;
}

export function vucudumuzunBolumleri(karistir) {
  return {
    id: 'vucudumuzun-bolumleri',
    baslik: 'Body Parts',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Pırıl pırıl bir sabahtı. Can ve Zeynep aynanın karşısına geçmiş, yüzlerindeki organları inceliyorlardı. Can, ellerini başına koydu ve "Başımızın İngilizcesi Head," dedi. Zeynep iri ve güzel gözlerini göstererek, "Gözlerimiz ise Eye demek, dünyayı onların sayesinde görüyoruz!" diye gülümsedi. Can kulaklarını işaret etti: "Müziği ve kuşların sesini duyduğumuz kulağımız İngilizcede Ear olarak söylenir." Çiçeklerin mis gibi kokusunu aldığımız burnumuzun adı "Nose", yemek yediğimiz ve konuştuğumuz ağzımızın adı ise "Mouth" idi. Vücudumuzun baş (Head) bölgesi, harika şeyleri görmemizi, duymamızı, koklamamızı ve tatmamızı sağlayan harika bir komuta merkeziydi.',
          gorsel: anl('vb-anlatim-1'),
        },
        {
          metin:
            'Dışarı çıkıp oyun oynamaya başladıklarında Ali ve Hande birbirlerine top atıyorlardı. Ali topu fırlatırken, "Kollarımız ne kadar güçlü, İngilizcede onlara Arm diyoruz!" diye seslendi. Hande topu elleriyle havada yakaladı ve neşeyle cevap verdi: "Topu tutmamı sağlayan ellerimin İngilizcesi ise Hand." Ellerimiz olmasaydı resim yapamaz, kalem tutamaz ve sevdiklerimize sarılamazdık. Öğretmenleri onlara şarkı söylerken parmaklarını şıklatmayı da öğretmişti. Her bir parmağın adı İngilizcede "Finger" idi. İki kolda (Arm) iki el (Hand) ve tam on tane marifetli parmak (Finger) vardı. Vücudumuz kusursuz çalışan çok tatlı bir makine gibiydi.',
          gorsel: anl('vb-anlatim-2'),
        },
        {
          metin:
            'Öğleden sonra Yusuf ve Ayşe parkta seksek oynamaya başladılar. Yusuf tek bacağının üzerinde zıplarken, "Bacaklarımız çok sağlam, İngilizcesi Leg!" diyerek zıpladı. Ayşe de yere sağlam basan ayaklarını gösterdi: "Bizi ayakta tutan ve yürümemizi sağlayan ayaklarımıza ise Foot diyoruz." İngilizcede ayak parmakları için el parmaklarından farklı bir kelime kullanılırdı. Ayak parmaklarının adı "Toe" idi. Vücudumuzun bölümleri (Body Parts) muhteşem bir uyum içinde çalışıyordu. Gözlerimiz (Eye) yolu görüyor, kollarımız (Arm) denge kuruyor, bacaklarımız (Leg) ve ayaklarımız (Foot) ise bizi istediğimiz her yere sevgiyle taşıyordu.',
          gorsel: anl('vb-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
