/** GOREV-ING-TEMA10 — Directions */

const KAZANIM = 'ING.2.10.3';

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
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: String(cevap), ipucu, cevapTipi: 'metin', ...extra });
}
function dyEkle(sorular, id, soru, cevap, ipucu, extra = {}) {
  sorular.push({
    id, kazanimKodu: KAZANIM, tip: 'yazili', soru, dogruCevap: cevap, ipucu, cevapTipi: 'metin',
    alternatifCevaplar: cevap === 'Doğru' ? ['Evet', 'evet', 'doğru'] : ['Hayır', 'hayır', 'yanlış'],
    ...extra,
  });
}
function testEkle(sorular, id, soru, cevap, secenekler, ipucu, extra = {}) {
  sorular.push({ id, kazanimKodu: KAZANIM, tip: 'coktanSecmeli', soru, dogruCevap: cevap, secenekler, ipucu, ...extra });
}

function alistirma() {
  const s = [];
  boslukEkle(s, 'yn-a1', 'Kuzey kelimesinin İngilizcesi ......... kelimesidir.', 'north', '', { gorsel: nesne('pusula-kuzey') });
  dyEkle(s, 'yn-a2', 'Güney İngilizcede "south" demektir.', 'Doğru', '', { gorsel: nesne('pusula-guney') });
  boslukEkle(s, 'yn-a3', 'Doğu kelimesinin İngilizcesi ......... kelimesidir.', 'east', '', { gorsel: nesne('pusula-dogu') });
  dyEkle(s, 'yn-a4', 'Batı İngilizcede "west" olarak söylenir.', 'Doğru', '', { gorsel: nesne('pusula-bati') });
  boslukEkle(s, 'yn-a5', 'Sol kelimesinin İngilizcesi ......... kelimesidir.', 'left', '', { gorsel: nesne('sol-ok') });
  dyEkle(s, 'yn-a6', 'Sağ İngilizcede "right" demektir.', 'Doğru', '', { gorsel: nesne('sag-ok') });
  boslukEkle(s, 'yn-a7', 'Yukarı kelimesinin İngilizcesi ......... kelimesidir.', 'up', '', { gorsel: nesne('yukari-ok') });
  dyEkle(s, 'yn-a8', 'Aşağı İngilizcede "down" olarak söylenir.', 'Doğru', '', { gorsel: nesne('asagi-ok') });
  boslukEkle(s, 'yn-a9', 'Düz git ifadesinin İngilizcesi "Go ........." kelimesidir.', 'straight', '', { gorsel: nesne('duz-git') });
  dyEkle(s, 'yn-a10', 'Sola dön İngilizcede "Turn left" demektir.', 'Doğru', '', { gorsel: nesne('sola-don') });
  boslukEkle(s, 'yn-a11', 'Sağa dön ifadesinin İngilizcesi "Turn ........." kelimesidir.', 'right', '', { gorsel: nesne('saga-don') });
  dyEkle(s, 'yn-a12', 'Yön tabelası İngilizcede "direction sign" olarak adlandırılır.', 'Doğru', '', { gorsel: nesne('yon-tabelasi') });
  boslukEkle(s, 'yn-a13', 'Güneş doğudan doğar. Doğu kelimesi ......... kelimesidir.', 'east', '', { gorsel: nesne('dogu-gunes') });
  dyEkle(s, 'yn-a14', 'Güneş batıdan batar. Batı İngilizcede "west" demektir.', 'Doğru', '', { gorsel: nesne('bati-gunes-batimi') });
  boslukEkle(s, 'yn-a15', 'Sol ve sağ kelimeleri İngilizcede "left and ........." olarak söylenir.', 'right', '', { gorsel: nesne('sol-sag-ok') });
  dyEkle(s, 'yn-a16', 'Merdivenlerden yukarı çıkmak "Go up" demektir.', 'Doğru', '', { gorsel: nesne('yukari-merdiven') });
  boslukEkle(s, 'yn-a17', 'Merdivenlerden aşağı inmek "Go ........." kelimesidir.', 'down', '', { gorsel: nesne('asagi-merdiven') });
  dyEkle(s, 'yn-a18', 'Sağ elimizi İngilizcede "right hand" olarak söyleriz.', 'Doğru', '', { gorsel: nesne('sag-el') });
  boslukEkle(s, 'yn-a19', 'Yön kelimesinin İngilizcesi "........." kelimesidir.', 'direction', '', { gorsel: nesne('pusula-dort-yon') });
  dyEkle(s, 'yn-a20', 'Pusula dört yönü gösterir: north, south, east, west.', 'Doğru', '', { gorsel: nesne('pusula-dort-yon') });
  boslukEkle(s, 'yn-a21', 'Haritada kuzey yukarıdadır. Kuzey ......... kelimesidir.', 'north', '', { gorsel: nesne('dunya-haritasi') });
  dyEkle(s, 'yn-a22', '"Turn left" ifadesi sola dön anlamına gelir.', 'Doğru', '', { gorsel: nesne('sola-don') });
  boslukEkle(s, 'yn-a23', 'Okul nerede diye sorarken "Which ........."?" deriz.', 'direction', '', { gorsel: nesne('yon-tabelasi') });
  dyEkle(s, 'yn-a24', 'Güneş doğu yönünden yükselir.', 'Doğru', '', { gorsel: nesne('dogu-gunes') });
  boslukEkle(s, 'yn-a25', 'Yol tarifi alırken "Go ........." and turn right" deriz.', 'straight', '', { gorsel: nesne('duz-git') });
  return s;
}

function test(karistir) {
  const s = [];
  const e = (id, soru, cevap, sec, ipucu, extra) => testEkle(s, id, soru, cevap, karistir(sec), ipucu, extra);
  e('yn-t1', 'Kuzeyin İngilizce adı nedir?', 'North', ['North', 'South', 'East', 'West'], '', { gorsel: nesne('pusula-kuzey') });
  e('yn-t2', 'Güneyin İngilizce adı hangisidir?', 'South', ['South', 'North', 'East', 'Left'], '', { gorsel: nesne('pusula-guney') });
  e('yn-t3', 'Doğunun İngilizce adı nedir?', 'East', ['East', 'West', 'North', 'South'], '', { gorsel: nesne('pusula-dogu') });
  e('yn-t4', 'Batının İngilizce adı nedir?', 'West', ['West', 'East', 'Up', 'Down'], '', { gorsel: nesne('pusula-bati') });
  e('yn-t5', 'Solun İngilizce adı hangisidir?', 'Left', ['Left', 'Right', 'Up', 'Down'], '', { gorsel: nesne('sol-ok') });
  e('yn-t6', 'Sağın İngilizce adı nedir?', 'Right', ['Right', 'Left', 'North', 'South'], '', { gorsel: nesne('sag-ok') });
  e('yn-t7', 'Yukarının İngilizce adı nedir?', 'Up', ['Up', 'Down', 'Left', 'Right'], '', { gorsel: nesne('yukari-ok') });
  e('yn-t8', 'Aşağının İngilizce adı hangisidir?', 'Down', ['Down', 'Up', 'East', 'West'], '', { gorsel: nesne('asagi-ok') });
  e('yn-t9', 'Düz git ifadesinin İngilizcesi nedir?', 'Go straight', ['Turn left', 'Go straight', 'Go down', 'Turn right'], '', { gorsel: nesne('duz-git') });
  e('yn-t10', 'Sola dön ifadesinin İngilizcesi nedir?', 'Turn left', ['Turn left', 'Turn right', 'Go up', 'Go down'], '', { gorsel: nesne('sola-don') });
  e('yn-t11', 'Sağa dön ifadesinin İngilizcesi nedir?', 'Turn right', ['Turn right', 'Turn left', 'Go straight', 'Go up'], '', { gorsel: nesne('saga-don') });
  e('yn-t12', 'Yön kelimesinin İngilizcesi nedir?', 'Direction', ['Country', 'Direction', 'Fruit', 'Number'], '', { gorsel: nesne('yon-tabelasi') });
  e('yn-t13', 'Güneş hangi yönden doğar?', 'East', ['East', 'West', 'North', 'South'], '', { gorsel: nesne('dogu-gunes') });
  e('yn-t14', 'Güneş hangi yönden batar?', 'West', ['West', 'East', 'North', 'Left'], '', { gorsel: nesne('bati-gunes-batimi') });
  e('yn-t15', 'Sol ve sağ İngilizcede nedir?', 'Left and right', ['Up and down', 'Left and right', 'North and south', 'East and west'], '', { gorsel: nesne('sol-sag-ok') });
  e('yn-t16', 'Merdivenlerden yukarı çıkmak İngilizcede nedir?', 'Go up', ['Go down', 'Go up', 'Turn left', 'Turn right'], '', { gorsel: nesne('yukari-merdiven') });
  e('yn-t17', 'Merdivenlerden aşağı inmek İngilizcede nedir?', 'Go down', ['Go up', 'Go down', 'Go straight', 'Turn right'], '', { gorsel: nesne('asagi-merdiven') });
  e('yn-t18', 'Sağ elin İngilizce adı nedir?', 'Right hand', ['Left hand', 'Right hand', 'Right foot', 'Left foot'], '', { gorsel: nesne('sag-el') });
  e('yn-t19', 'Pusula kaç yön gösterir?', 'Four', ['Two', 'Three', 'Four', 'Five'], '', { gorsel: nesne('pusula-dort-yon') });
  e('yn-t20', 'Haritada kuzey nerededir?', 'Up', ['Down', 'Left', 'Up', 'Right'], '', { gorsel: nesne('dunya-haritasi') });
  e('yn-t21', '"Turn left" ifadesi ne demektir?', 'Sola dön', ['Sağa dön', 'Sola dön', 'Düz git', 'Yukarı çık'], '', { gorsel: nesne('sola-don') });
  e('yn-t22', '"Go straight" ifadesi ne demektir?', 'Düz git', ['Sola dön', 'Sağa dön', 'Düz git', 'Aşağı in'], '', { gorsel: nesne('duz-git') });
  e('yn-t23', 'Hangi eşleştirme doğrudur?', 'North = Kuzey', ['North = Güney', 'North = Kuzey', 'East = Batı', 'West = Doğu'], '', { gorsel: nesne('pusula-kuzey') });
  e('yn-t24', 'Güneş doğudan doğar, batıdan batar. Doğu hangisidir?', 'East', ['West', 'East', 'South', 'North'], '', { gorsel: nesne('dogu-gunes') });
  e('yn-t25', 'Yol tarifi alırken hangi ifade kullanılır?', 'Turn right', ['I am happy', 'Turn right', 'I love fruits', 'My country'], '', { gorsel: nesne('saga-don') });
  return s;
}

export function yonler(karistir) {
  return {
    id: 'yonler',
    baslik: 'Directions',
    kazanimKodu: KAZANIM,
    anlatim: {
      ekranlar: [
        { metin: 'Elanaz pusulaya baktı. Kuzey north, güney south, doğu east, batı west! Dört yön haritada farklı yerlere işaret ediyordu.', gorsel: anl('yn-anlatim-1') },
        { metin: 'Berk yön tabelasını gösterdi. Sol left, sağ right! "Go straight" düz git demekti. "Turn left" sola dön, "Turn right" sağa dön!', gorsel: anl('yn-anlatim-2') },
        { metin: 'Öğretmen güneşin doğu east yönünden doğduğunu, batı west yönünden battığını anlattı. Yukarı up, aşağı down! Yönleri bilmek kaybolmamak demekti.', gorsel: anl('yn-anlatim-3') },
      ],
    },
    alistirma: alistirma(),
    test: test(karistir),
  };
}
