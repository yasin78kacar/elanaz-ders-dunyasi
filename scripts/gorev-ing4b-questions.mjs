/** GOREV-ING4B — Simple Dialogues (Basit Karşılıklı Konuşmalar) */

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
  boslukEkle(s, 'bd-a1', 'Karşılıklı konuşmalara İngilizcede "........." (Dialogue) denir.', 'diyalog', '', {
    gorsel: nesne('konusma-balonlari'),
    alternatifCevaplar: ['dialogue'],
  });
  dyEkle(s, 'bd-a2', 'Arkadaşımıza "How are you?" diye sorduğumuzda "Nasılsın?" demiş oluruz.', 'Doğru', '', {
    gorsel: nesne('el-sallayan-cocuk'),
  });
  boslukEkle(s, 'bd-a3', '"I am fine" cümlesi Türkçede "Ben ........." demektir.', 'iyiyim', '', {
    gorsel: nesne('gulen-cocuk'),
  });
  boslukEkle(s, 'bd-a4', 'Birisi bize yardım ettiğinde ona mutlaka "Thank ........." deriz.', 'you', '', {
    gorsel: nesne('tesekkur-eden'),
  });
  dyEkle(s, 'bd-a5', 'İngilizcede "Lütfen" kelimesinin karşılığı "Please" kelimesidir.', 'Doğru', '', {
    gorsel: nesne('rica-eden'),
  });
  boslukEkle(s, 'bd-a6', 'Arkadaşımıza "Let\'s play!" dediğimizde "Hadi .........!" demiş oluruz.', 'oynayalım', '', {
    gorsel: nesne('top-oynayan-ikili'),
    alternatifCevaplar: ['oynayalim'],
  });
  dyEkle(s, 'bd-a7', 'Bir eşyayı verirken "Buyurun" demek için "Here you are" deriz.', 'Doğru', '', {
    gorsel: nesne('elma-uzatan-bakkal'),
  });
  boslukEkle(s, 'bd-a8', 'Sınıfa girmek için izin isterken "May I come .........?" diye sorarız.', 'in', '', {
    gorsel: nesne('kapi-calan-ogrenci'),
  });
  dyEkle(s, 'bd-a9', 'Öğretmenimiz "Stand up!" dediğinde sıralarımıza otururuz.', 'Yanlış', '', {
    gorsel: nesne('ayaga-kalkan-sinif'),
  });
  boslukEkle(s, 'bd-a10', 'Sıramıza oturmamız söylendiğinde İngilizce "Sit ........." kelimesi kullanılır.', 'down', '', {
    gorsel: nesne('oturan-ogrenci'),
  });
  boslukEkle(s, 'bd-a11', 'Bize teşekkür eden birisine "Rica ederim" demek için "You are ........." deriz.', 'welcome', '', {
    gorsel: nesne('hediye-alan-kiz'),
  });
  dyEkle(s, 'bd-a12', 'İngilizce diyalog kurmak İngilizce konuşmayı öğrenmemizi sağlar.', 'Doğru', '', {
    gorsel: nesne('neseli-iki-arkadas'),
  });
  boslukEkle(s, 'bd-a13', 'Diyaloglar genellikle "........." veya "Hi" (Merhaba) diyerek başlar.', 'Hello', '', {
    gorsel: nesne('hello-diyen'),
    alternatifCevaplar: ['hello', 'Hi', 'hi'],
  });
  dyEkle(s, 'bd-a14', 'Konuşmayı bitirip ayrılırken birbirimize "Goodbye" deriz.', 'Doğru', '', {
    gorsel: nesne('goodbye-yazisi'),
  });
  dyEkle(s, 'bd-a15', '"I am fine" kelimesi "Hastayım" anlamına gelir.', 'Yanlış', '', {
    gorsel: nesne('uzgun-yuz'),
  });
  boslukEkle(s, 'bd-a16', 'İstemek ve rica etmek için kullandığımız nazik kelime "........." (Lütfen)\'dir.', 'please', '', {
    gorsel: nesne('please-kelimesi'),
  });
  boslukEkle(s, 'bd-a17', '"Catch the ball" ifadesi "Topu ........." anlamına gelir.', 'yakala', '', {
    gorsel: nesne('top-firlatilan'),
  });
  dyEkle(s, 'bd-a18', 'Kapıdan içeri girmeden önce kapıyı çalmak güzel bir nezaket kuralıdır.', 'Doğru', '', {
    gorsel: nesne('kapi-resmi'),
  });
  dyEkle(s, 'bd-a19', '"Can I have an apple?" sorusu "Bir elma alabilir miyim?" demektir.', 'Doğru', '', {
    gorsel: nesne('kirmizi-elma-diyalog'),
  });
  boslukEkle(
    s,
    'bd-a20',
    'Karşılıklı konuşmalarda sırayla konuşmak ve birbirimizi ......... (dinlemek) önemlidir.',
    'dinlemek',
    '',
    { gorsel: nesne('iki-konusan-cocuk') },
  );
  boslukEkle(s, 'bd-a21', '"Stand up" ve "......... down" birbirinin tersi (zıt) hareketlerdir.', 'Sit', '', {
    gorsel: nesne('otur-kalk-oklar'),
  });
  dyEkle(s, 'bd-a22', 'Öğretmenimiz "Yes, you may" diyerek bize izin verdiğini söyler.', 'Doğru', '', {
    gorsel: nesne('gulumsen-ogretmen'),
  });
  boslukEkle(s, 'bd-a23', '"How are you?" sorusuna vereceğimiz en güzel cevap "I am ........." (İyiyim) olur.', 'fine', '', {
    gorsel: nesne('iyiyim-isareti'),
    alternatifCevaplar: ['fine', 'good', 'Fine', 'Good'],
  });
  dyEkle(s, 'bd-a24', 'İngilizce konuşurken gülümsemek karşımızdakini çok mutlu eder.', 'Doğru', '', {
    gorsel: nesne('goz-kirpan'),
  });
  boslukEkle(s, 'bd-a25', 'Küçük ve basit konuşmalara İngilizcede "Simple ........." (Dialogues) denir.', 'Dialogues', '', {
    gorsel: nesne('konusma-balonu'),
  });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) =>
    testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e(
    'bd-t1',
    'Parkta karşılaştığınız arkadaşınız size "How are you?" diye sorarsa ne cevap verirsiniz?',
    'I am fine, thank you.',
    ['Goodbye.', 'I am fine, thank you.', 'Open the door.', 'It is an apple.'],
    '',
    { gorsel: nesne('karsilasan-arkadaslar') },
  );
  e(
    'bd-t2',
    '"How are you?" sorusunun Türkçe anlamı nedir?',
    'Nasılsın?',
    ['Adın ne?', 'Kaç yaşındasın?', 'Nasılsın?', 'Neredesin?'],
    '',
    { gorsel: nesne('soru-isareti') },
  );
  e(
    'bd-t3',
    'Size kalemini ödünç veren arkadaşınıza İngilizce ne söylersiniz?',
    'Thank you!',
    ['Stand up!', 'Thank you!', 'Sit down!', 'May I come in?'],
    '',
    { gorsel: nesne('tesekkur-eden') },
  );
  e(
    'bd-t4',
    '"Thank you" diyen birine "Rica ederim" diye cevap vermek için hangisi söylenir?',
    'You are welcome!',
    ['See you!', 'Goodbye!', 'You are welcome!', "Let's play!"],
    '',
    { gorsel: nesne('rica-eden-kiz') },
  );
  e(
    'bd-t5',
    'İngilizcede "Lütfen" kelimesinin karşılığı hangisidir?',
    'Please',
    ['Thank you', 'Please', 'Sorry', 'Hello'],
    '',
    { gorsel: nesne('lutfen-diyen') },
  );
  e(
    'bd-t6',
    'Bakkaldan elma isterken "Can I have an apple, .........?" cümlesindeki boşluğa hangi nazik kelime gelmelidir?',
    'Please',
    ['Please', 'Goodbye', 'Down', 'Up'],
    '',
    { gorsel: nesne('bakkal-elma') },
  );
  e(
    'bd-t7',
    'Size istenilen bir şeyi (örneğin elmayı) uzatırken "Buyurun" demek için İngilizce ne denir?',
    'Here you are!',
    ['Here you are!', 'May I come in!', 'Sit down!', 'Catch the ball!'],
    '',
    { gorsel: nesne('esya-uzatan') },
  );
  e(
    'bd-t8',
    'Derse geç kaldığınızda kapıyı çalıp "İçeri girebilir miyim?" demek için hangi soruyu sorarsınız?',
    'May I come in?',
    ['How are you?', 'What is this?', 'May I come in?', "Let's play?"],
    '',
    { gorsel: nesne('kapi-calan') },
  );
  e(
    'bd-t9',
    'Öğretmen sınıfa girdiğinde saygı için "Ayağa kalk" demek istediğinde ne söyler?',
    'Stand up!',
    ['Sit down!', 'Stand up!', 'Sleep!', 'Eat!'],
    '',
    { gorsel: nesne('ayaga-kalkan-sinif') },
  );
  e(
    'bd-t10',
    '"Sit down" kelimesinin Türkçedeki komut anlamı nedir?',
    'Otur',
    ['Ayağa kalk', 'Otur', 'Koş', 'Zıpla'],
    '',
    { gorsel: nesne('sandalyeye-oturan') },
  );
  e(
    'bd-t11',
    'Arkadaşınıza "Hadi oynayalım!" demek için İngilizce ne söylersiniz?',
    "Let's play!",
    ["Let's read!", "Let's play!", "Let's write!", "Let's sleep!"],
    '',
    { gorsel: nesne('top-oynayan-ikili') },
  );
  e(
    'bd-t12',
    'Oyunda arkadaşınıza "Topu yakala!" demek isterseniz hangi cümleyi kurarsınız?',
    'Catch the ball!',
    ['Catch the ball!', 'Read the book!', 'Open the door!', 'Drink water!'],
    '',
    { gorsel: nesne('top-firlatilan') },
  );
  e(
    'bd-t13',
    '"I am fine" cümlesinin Türkçe çevirisi nedir?',
    'Ben iyiyim',
    ['Ben kötüyüm', 'Ben yorgunum', 'Ben iyiyim', 'Ben uyuyorum'],
    '',
    { gorsel: nesne('gulumseyen-yuz') },
  );
  e(
    'bd-t14',
    'Konuşmayı bitirip vedalaşırken söylenen "Goodbye" kelimesi ne demektir?',
    'Hoşça kal',
    ['Hoşça kal', 'Merhaba', 'Günaydın', 'Lütfen'],
    '',
    { gorsel: nesne('okul-kapisindan-cikan') },
  );
  e(
    'bd-t15',
    'Karşılıklı iki kişinin konuşmasına İngilizcede ne ad verilir?',
    'Dialogue',
    ['Color', 'Number', 'Dialogue', 'Animal'],
    '',
    { gorsel: nesne('konusma-balonu-dialogue') },
  );
  e(
    'bd-t16',
    '"I am fine, thank you. And you?" cümlesindeki "And you?" ne anlama gelir?',
    'Ya sen (nasılsın)?',
    ['Benim adım ne?', 'Sen kimsin?', 'Ya sen (nasılsın)?', 'Saat kaç?'],
    '',
    { gorsel: nesne('and-you-sorusu') },
  );
  e(
    'bd-t17',
    'Biriyle konuşurken (Diyalog kurarken) nereye bakmalıyız?',
    'Karşımızdaki kişinin gözlerine',
    ['Yere', 'Havaya', 'Karşımızdaki kişinin gözlerine', 'Arkamıza'],
    '',
    { gorsel: nesne('goz-temasi') },
  );
  e(
    'bd-t18',
    'İnsanlara "Please" ve "Thank you" demek bizi nasıl biri yapar?',
    'Nazik ve saygılı biri yapar',
    ['Nazik ve saygılı biri yapar', 'Kaba biri yapar', 'Şaşkın biri yapar', 'Komik biri yapar'],
    '',
    { gorsel: nesne('neseli-arkadas') },
  );
  e(
    'bd-t19',
    '"Can I have a toy, please?" cümlesinde çocuk ne rica etmektedir?',
    'Bir oyuncak',
    ['Bir kitap', 'Bir oyuncak', 'Bir elma', 'Bir kalem'],
    '',
    { gorsel: nesne('oyuncak-ayi') },
  );
  e(
    'bd-t20',
    '"Yes, you may." cümlesi Türkçede ne anlama gelir?',
    'Evet, yapabilirsin (İzin veriyorum).',
    ['Hayır, yapamazsın.', 'Evet, yapabilirsin (İzin veriyorum).', 'Bilmiyorum.', 'Belki.'],
    '',
    { gorsel: nesne('izin-veren-ogretmen') },
  );
  e(
    'bd-t21',
    '"Stand up" cümlesindeki "Up" kelimesi hangi yönü belirtir?',
    'Yukarı',
    ['Aşağı', 'Sağ', 'Sol', 'Yukarı'],
    '',
    { gorsel: nesne('yukari-ok') },
  );
  e(
    'bd-t22',
    '"Sit down" cümlesindeki "Down" kelimesi hangi yönü belirtir?',
    'Aşağı',
    ['Aşağı', 'Yukarı', 'İleri', 'Geri'],
    '',
    { gorsel: nesne('asagi-ok') },
  );
  e(
    'bd-t23',
    'İngilizce bir konuşma (diyalog) genellikle hangi kelimeyle başlar?',
    'Hello / Hi',
    ['Goodbye', 'Hello / Hi', 'Thank you', 'Please'],
    '',
    { gorsel: nesne('hello-yazisi') },
  );
  e(
    'bd-t24',
    'Sınıf içinde kurallara uymak ve nazik olmak neden çok önemlidir?',
    'Derslerin eğlenceli ve huzurlu geçmesi için',
    [
      'Derslerin eğlenceli ve huzurlu geçmesi için',
      'Sadece öğretmenden korktuğumuz için',
      'Hiç önemli değildir',
      'Çabuk yorulmak için',
    ],
    '',
    { gorsel: nesne('ogretmen-masasi-diyalog') },
  );
  e(
    'bd-t25',
    '"Simple Dialogues" Türkçede ne anlama gelir?',
    'Basit karşılıklı konuşmalar',
    ['Uzun şiirler', 'Zor şarkılar', 'Basit karşılıklı konuşmalar', 'Renkli resimler'],
    '',
    { gorsel: nesne('mutlu-konusan') },
  );
  return s;
}

export function basitDiyaloglar(karistir) {
  return {
    id: 'basit-diyaloglar',
    baslik: 'Simple Dialogues',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Selin ve Yusuf parkta karşılaştılar. Selin: "Hello Yusuf! How are you?" (Nasılsın?). Yusuf: "I am fine, thank you. And you?" (Ben iyiyim, ya sen?). Selin: "I am good, let\'s play!" (İyiyim, hadi oynayalım!).',
          gorsel: anl('bd-anlatim-1'),
        },
        {
          metin:
            'Mehmet: "Can I have an apple, please?" (Bir elma alabilir miyim?). Bakkal: "Here you are!" (Buyurun!). Mehmet: "Thank you!" (Teşekkür ederim).',
          gorsel: anl('bd-anlatim-2'),
        },
        {
          metin:
            'Ali: "May I come in?" (İçeri girebilir miyim?). Öğretmen: "Yes, you may." (Evet). Öğretmen: "Stand up!" (Ayağa kalk). Öğretmen: "Sit down!" (Otur).',
          gorsel: anl('bd-anlatim-3'),
        },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
