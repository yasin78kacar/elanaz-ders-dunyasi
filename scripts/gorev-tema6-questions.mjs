/** GOREV-TEMA6 — Eşit Parçalara Bölme, Yarım ve Çeyrek, Basit Kesirler (150 görselli soru). */

const KAZANIM = {
  ESIT: 'MAT.2.6.1',
  YARIM: 'MAT.2.6.2',
  KESIR: 'MAT.2.6.3',
};

function bol(sekil, parca, opts = {}) {
  return { tur: 'kesir', mod: 'bolme', sekil, parca, ...opts };
}
function kes(parca, renkli = 1, opts = {}) {
  return { tur: 'kesir', mod: 'kesir', parca, renkli, ...opts };
}
function yar(opts = {}) {
  return { tur: 'kesir', mod: 'yarim', ...opts };
}
function kars(...kesirler) {
  return { tur: 'kesir', mod: 'karsilastir', kesirler };
}
function birles(parca, adet) {
  return { tur: 'kesir', mod: 'birlesim', parca, adet };
}
function paylas(parca, kisi, alinan) {
  return { tur: 'kesir', mod: 'paylasim', parca, kisi, alinan };
}
function anl(sahne) {
  return { tur: 'kesir', mod: 'anlatim', sahne };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function esitParcalaraBolmeAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ESIT,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('ep-a1', 'Bir elma ikiye bölündü. Her parça eşit mi?', 'Evet', '', { gorsel: bol('daire', 2, { nesne: 'elma', esit: true }) });
  ekle('ep-a2', 'Pizza 4 eşit parçaya bölündü. Kaç parça var?', '4', '', { gorsel: bol('daire', 4, { nesne: 'pizza' }) });
  ekle('ep-a3', 'Kâğıt 2 eşit parçaya bölündü. Her parça kaçta bir?', "2'de 1", '', { gorsel: bol('dikdortgen', 2, { nesne: 'kagit' }) });
  ekle('ep-a4', 'Çikolata 3 eşit parçaya bölündü. Kaç parça var?', '3', '', { gorsel: bol('dikdortgen', 3, { nesne: 'cikolata' }) });
  ekle('ep-a5', 'Hangi bölme eşittir? A) Büyük-küçük B) Aynı büyüklükte', 'Aynı büyüklükte', '', { gorsel: kars({ esit: false }, { esit: true }) });
  ekle('ep-a6', 'Karpuz 8 eşit parçaya bölündü. Her parça kaçta bir?', "8'de 1", '', { gorsel: bol('daire', 8, { nesne: 'karpuz' }) });
  ekle('ep-a7', 'Dikdörtgen 4 eşit parçaya bölündü. Kaç parça var?', '4', '', { gorsel: bol('dikdortgen', 4) });
  ekle('ep-a8', 'Bir pasta ikiye bölündü ama parçalar eşit değil. Bu doğru mu?', 'Hayır', '', { gorsel: bol('daire', 2, { nesne: 'pasta', esit: false }) });
  ekle('ep-a9', 'Kare 2 eşit üçgene bölündü. Kaç parça var?', '2', '', { gorsel: bol('kare', 2, { bolme: 'ucgen' }) });
  ekle('ep-a10', 'Elma 4 eşit parçaya bölündü, 1 parça yendi. Kaç parça kaldı?', '3', '', { gorsel: bol('daire', 4, { nesne: 'elma', yenilen: 1 }) });
  ekle('ep-a11', 'Pizza 6 eşit parçaya bölündü. Her parça kaçta bir?', "6'da 1", '', { gorsel: bol('daire', 6, { nesne: 'pizza' }) });
  ekle('ep-a12', 'Dikdörtgen kaç farklı şekilde 2 eşit parçaya bölünebilir?', '2 (yatay ve dikey)', '', { gorsel: anl('ep-iki-bolme-yontemi') });
  ekle('ep-a13', 'Çikolata 6 eşit parçaya bölündü, 2 parça yendi. Kaç parça kaldı?', '4', '', { gorsel: bol('dikdortgen', 6, { nesne: 'cikolata', yenilen: 2 }) });
  ekle('ep-a14', 'Kâğıt 4 eşit parçaya bölündü. Her parça toplamın kaçta biri?', "4'te 1", '', { gorsel: bol('dikdortgen', 4, { nesne: 'kagit' }) });
  ekle('ep-a15', '8 eşit parçaya bölünmüş pizzadan 3 parça yendi. Kaç parça kaldı?', '5', '', { gorsel: bol('daire', 8, { nesne: 'pizza', yenilen: 3 }) });
  ekle('ep-a16', 'Hangi şekil 3 eşit parçaya bölünmüştür?', 'Her parça aynı büyüklükte olan', '', { gorsel: kars({ parca: 3, esit: true }, { parca: 3, esit: false }) });
  ekle('ep-a17', 'Kare 4 eşit küçük kareye bölündü. Her parça toplamın kaçta biri?', "4'te 1", '', { gorsel: bol('kare', 4, { bolme: 'grid' }) });
  ekle('ep-a18', '12 eşit parçaya bölünmüş çikolata. 4 parça yendi. Kaç parça kaldı?', '8', '', { gorsel: bol('dikdortgen', 12, { nesne: 'cikolata', yenilen: 4 }) });
  ekle('ep-a19', 'Bir pasta 5 kişiye eşit bölünecek. Kaç eşit parçaya bölünmeli?', '5', '', { gorsel: bol('daire', 5, { nesne: 'pasta' }) });
  ekle('ep-a20', 'Eşit bölme için ne şart?', 'Her parça aynı büyüklükte olmalı', '', { gorsel: anl('ep-esit-kural') });
  ekle('ep-a21', '10 eşit parçalı pizzadan 6 parça yendi. Kaç parça kaldı?', '4', '', { gorsel: bol('daire', 10, { nesne: 'pizza', yenilen: 6 }) });
  ekle('ep-a22', 'Dikdörtgen 6 eşit parçaya bölündü. Her parça kaçta bir?', "6'da 1", '', { gorsel: bol('dikdortgen', 6) });
  ekle('ep-a23', '4 arkadaş pastayı eşit paylaşacak. Kaç eşit parçaya bölünmeli?', '4', '', { gorsel: paylas(4, 4, 1) });
  ekle('ep-a24', 'Kâğıt önce ikiye, sonra tekrar ikiye bölündü. Kaç eşit parça oldu?', '4', '', { gorsel: anl('ep-katlanma') });
  ekle('ep-a25', '3 arkadaş çikolatayı eşit paylaştı. Her biri kaç parça aldı? Çikolata 9 parçalı', '3', '', { gorsel: paylas(9, 3, 3) });

  return sorular;
}

function esitParcalaraBolmeTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.ESIT,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('ep-t1', 'Pizza 4 eşit parçaya bölündü. Her parça toplamın kaçta biridir?', "4'te 1", ["2'de 1", "3'te 1", "4'te 1", "8'de 1"], '', { gorsel: bol('daire', 4, { nesne: 'pizza' }) });
  ekle('ep-t2', 'Hangi bölme EŞİT değildir?', 'Pasta büyük-küçük iki parçaya', ['Pizza iki eşit yarıya', 'Kâğıt dört eşit parçaya', 'Pasta büyük-küçük iki parçaya', 'Elma dört eşit parçaya'], '', { gorsel: kars({ esit: true }, { esit: true }, { esit: false }, { esit: true }) });
  ekle('ep-t3', '8 parçalı pizzadan 3 parça yendi. Kaç parça kaldı?', '5', ['4', '6', '5', '3'], '', { gorsel: bol('daire', 8, { nesne: 'pizza', yenilen: 3 }) });
  ekle('ep-t4', 'Çikolata 6 eşit parçaya bölündü. Her parça kaçta birdir?', "6'da 1", ["3'te 1", "4'te 1", "6'da 1", "2'de 1"], '', { gorsel: bol('dikdortgen', 6, { nesne: 'cikolata' }) });
  ekle('ep-t5', '5 çocuk pastayı eşit paylaşacak. Pasta kaç eşit parçaya bölünmeli?', '5', ['4', '6', '5', '3'], '', { gorsel: paylas(5, 5, 1) });
  ekle('ep-t6', 'Kâğıt önce ikiye, sonra tekrar ikiye katlandı ve kesildi. Kaç parça oldu?', '4', ['2', '6', '4', '8'], '', { gorsel: anl('ep-katlanma-adim') });
  ekle('ep-t7', '12 parçalı çikolata. 4 parça Ali\'ye, 4 parça Ayşe\'ye verildi. Kaç parça kaldı?', '4', ['2', '6', '4', '8'], '', { gorsel: bol('dikdortgen', 12, { nesne: 'cikolata', yenilen: 8 }) });
  ekle('ep-t8', '🎭 Hangi bölme DOĞRU eşit bölmedir?', '4 eşit parça', ['Büyük + küçük', '3 eşit + 1 büyük', '4 eşit parça', '2 farklı büyüklük'], '', { gorsel: kars({ esit: false }, { esit: false }, { esit: true }, { esit: false }), sasirtma: true });
  ekle('ep-t9', 'Pizza 8 eşit parçaya bölündü. Her parça toplamın kaçta biridir?', "8'de 1", ["4'te 1", "6'da 1", "8'de 1", "2'de 1"], '', { gorsel: bol('daire', 8, { nesne: 'pizza' }) });
  ekle('ep-t10', '10 parçalı pastadan 6 parça yendi. Kaç parça kaldı?', '4', ['3', '5', '4', '6'], '', { gorsel: bol('daire', 10, { nesne: 'pasta', yenilen: 6 }) });
  ekle('ep-t11', 'Kare kaç eşit üçgene bölünebilir?', '2', ['1', '3', '2', '4'], '', { gorsel: bol('kare', 2, { bolme: 'ucgen' }) });
  ekle('ep-t12', '🎭 Dikdörtgen 3 eşit parçaya bölünüyor. Her parça kaçta birdir?', "3'te 1", ["2'de 1", "4'te 1", "3'te 1", "6'da 1"], '', { gorsel: bol('dikdortgen', 3), sasirtma: true });
  ekle('ep-t13', '6 arkadaş pastayı eşit paylaşacak. Her biri kaç parça alır? Pasta 12 parçalı.', '2', ['1', '3', '2', '4'], '', { gorsel: paylas(12, 6, 2) });
  ekle('ep-t14', 'Hangi nesne en kolay eşit parçalara bölünür?', 'Kâğıt', ['Taş', 'Su', 'Kâğıt', 'Bulut'], '', { gorsel: anl('ep-nesne-secenek') });
  ekle('ep-t15', '🎭 Pizza 8 eşit parçaya bölündü. 2 parça Mehmet\'e, 3 parça Fatma\'ya verildi. Kaç parça kaldı?', '3', ['2', '4', '3', '5'], '8-2-3=3', { gorsel: bol('daire', 8, { nesne: 'pizza', yenilen: 5 }), sasirtma: true });
  ekle('ep-t16', 'Eşit bölmede her parça nasıl olmalıdır?', 'Aynı büyüklükte', ['Farklı büyüklükte', 'Aynı büyüklükte', 'Büyük olmalı', 'Küçük olmalı'], '', { gorsel: anl('ep-esit-kural') });
  ekle('ep-t17', '9 parçalı çikolata 3 arkadaşa eşit bölündü. Her biri kaç parça aldı?', '3', ['2', '4', '3', '5'], '', { gorsel: paylas(9, 3, 3) });
  ekle('ep-t18', '🎭 Bir kâğıt 3 kez ikiye katlanıp kesilirse kaç eşit parça olur?', '8', ['4', '10', '8', '6'], '2×2×2=8', { gorsel: anl('ep-katlanma-3kez'), sasirtma: true });
  ekle('ep-t19', '16 parçalı pasta. 4 parça yendi. Kaçta kaçı kaldı?', "4'te 3", ["4'te 3", "4'te 1", "2'de 1", "8'de 3"], '', { gorsel: bol('daire', 16, { nesne: 'pasta', yenilen: 4 }) });
  ekle('ep-t20', 'Hangi şekil 4 eşit parçaya bölünmüştür?', '4 eşit kare', ['3 eşit + 1 büyük', '2 büyük + 2 küçük', '4 eşit kare', '4 farklı boyut'], '', { gorsel: kars({ esit: false }, { esit: false }, { esit: true }, { esit: false }) });
  ekle('ep-t21', '🎭 12 parçalı çikolata. Berk 3, Can 4, Selin 2 parça aldı. Kaç parça kaldı?', '3', ['2', '4', '3', '5'], '12-3-4-2=3', { gorsel: bol('dikdortgen', 12, { nesne: 'cikolata', yenilen: 9 }), sasirtma: true });
  ekle('ep-t22', 'Pizza 6 eşit parçaya bölündü. 2 parça yendi. Kaçta kaçı kaldı?', "3'te 2", ["3'te 1", "6'da 2", "3'te 2", "6'da 4"], '', { gorsel: bol('daire', 6, { nesne: 'pizza', yenilen: 2 }) });
  ekle('ep-t23', 'Eşit bölme neden önemlidir?', 'Herkes eşit pay alır', ['Güzel görünür', 'Herkes eşit pay alır', 'Daha hızlı kesilir', 'Daha büyük olur'], '', { gorsel: anl('ep-paylasim') });
  ekle('ep-t24', '🎭 Kare 4 eşit parçaya bölünebilir mi?', 'Evet, birden fazla yolla', ['Hayır', 'Sadece üçgene', 'Evet, birden fazla yolla', 'Yalnızca dikey'], '', { gorsel: anl('ep-kare-bolme-yollari'), sasirtma: true });
  ekle('ep-t25', '🎭 20 parçalı pastayı 4 arkadaş eşit paylaşırsa, her biri kaçta kaç alır?', "4'te 1", ["4'te 1", "5'te 1", "20'de 5 = 4'te 1", "2'de 1"], "Her biri 5 parça = 20'nin 4'te 1'i", { gorsel: paylas(20, 4, 5), sasirtma: true });

  return sorular;
}

function yarimVeCeyrekAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YARIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('yc-a1', 'Elma ikiye eşit bölündü. Her parça nedir?', 'Yarım', '', { gorsel: yar({ nesne: 'elma' }) });
  ekle('yc-a2', 'Pizza dörde eşit bölündü. Her parça nedir?', 'Çeyrek', '', { gorsel: kes(4, 1, { nesne: 'pizza', etiket: 'çeyrek' }) });
  ekle('yc-a3', '1/2 ne demektir?', "Yarım, 2 eşit parçadan 1'i", '', { gorsel: kes(2, 1, { nesne: 'dikdortgen' }) });
  ekle('yc-a4', '1/4 ne demektir?', "Çeyrek, 4 eşit parçadan 1'i", '', { gorsel: kes(4, 1, { nesne: 'kare', etiket: 'çeyrek' }) });
  ekle('yc-a5', '2 yarım = kaç tam?', '1 tam', '', { gorsel: birles(2, 2) });
  ekle('yc-a6', '4 çeyrek = kaç tam?', '1 tam', '', { gorsel: birles(4, 4) });
  ekle('yc-a7', '2 çeyrek = kaç yarım?', '1 yarım', '', { gorsel: birles(4, 2) });
  ekle('yc-a8', 'Pastanın yarısı yendi. Kaçta kaçı kaldı?', '1/2', '', { gorsel: kes(2, 1, { nesne: 'pasta', yenilen: 1 }) });
  ekle('yc-a9', 'Portakal 4 eşit parçaya bölündü. 1 parça yendi. Kaçta kaçı kaldı?', '3/4', '', { gorsel: kes(4, 3, { nesne: 'portakal', yenilen: 1 }) });
  ekle('yc-a10', 'Elmanın çeyreği kaç parçadır?', "1 parça (4'te 1'i)", '', { gorsel: kes(4, 1, { nesne: 'elma' }) });
  ekle('yc-a11', '1/2 elma ile 1/2 elma toplamı kaç?', '1 tam elma', '', { gorsel: birles(2, 2) });
  ekle('yc-a12', 'Pastanın 3 çeyreği yendi. Kaç çeyrek kaldı?', '1 çeyrek', '', { gorsel: kes(4, 1, { nesne: 'pasta', yenilen: 3 }) });
  ekle('yc-a13', '1 tam pizzadan 1/4 yenildi. Kaçta kaçı kaldı?', '3/4', '', { gorsel: kes(4, 3, { nesne: 'pizza', yenilen: 1 }) });
  ekle('yc-a14', 'Yarım ile çeyrek hangisi büyüktür?', 'Yarım', '', { gorsel: kars('1/2', '1/4') });
  ekle('yc-a15', '8 çeyrek kaç tama eşittir?', '2 tam', '', { gorsel: birles(4, 8) });
  ekle('yc-a16', 'Pastanın yarısı 3 dilimse, tam pasta kaç dilimdir?', '6 dilim', '', { gorsel: bol('daire', 6, { nesne: 'pasta', vurgu: 'yarim' }) });
  ekle('yc-a17', '1/4 + 1/4 = ?', '2/4 = 1/2', '', { gorsel: birles(4, 2) });
  ekle('yc-a18', '3 çeyrek + 1 çeyrek = ?', '1 tam', '', { gorsel: birles(4, 4) });
  ekle('yc-a19', 'Pastanın çeyreği 4 dilimse, tam pasta kaç dilim?', '16 dilim', '', { gorsel: bol('daire', 16, { nesne: 'pasta', vurgu: 'ceyrek' }) });
  ekle('yc-a20', '1/2 > 1/4 mı?', 'Evet', '', { gorsel: kars('1/2', '1/4') });
  ekle('yc-a21', 'Elmanın 3/4\'ü yenildi. Kaçta kaçı kaldı?', '1/4', '', { gorsel: kes(4, 1, { nesne: 'elma', yenilen: 3 }) });
  ekle('yc-a22', '4 yarım = kaç tam?', '2 tam', '', { gorsel: birles(2, 4) });
  ekle('yc-a23', 'Pastanın yarısı Ali\'ye, çeyreği Ayşe\'ye verildi. Toplam kaçta kaçı verildi?', '3/4', '', { gorsel: kes(4, 3, { nesne: 'pasta', vurgu: 'paylasim' }) });
  ekle('yc-a24', '6 çeyrek kaç tam ve kaç çeyrek?', '1 tam 2 çeyrek', '', { gorsel: birles(4, 6) });
  ekle('yc-a25', '1/2 + 1/4 + 1/4 = ?', '1 tam', '', { gorsel: birles(4, 4) });

  return sorular;
}

function yarimVeCeyrekTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.YARIM,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('yc-t1', 'Elma ikiye eşit bölündü. Her parçanın adı nedir?', 'Yarım', ['Çeyrek', 'Yarım', 'Tam', 'Üçte bir'], '', { gorsel: yar({ nesne: 'elma' }) });
  ekle('yc-t2', '1/4 ne anlama gelir?', 'Dörde bölünmüş, bir parça', ['İkiye bölünmüş', 'Üçe bölünmüş', 'Dörde bölünmüş, bir parça', 'Beşe bölünmüş'], '', { gorsel: kes(4, 1, { nesne: 'kare' }) });
  ekle('yc-t3', '2 çeyrek kaç yarime eşittir?', '1', ['2', '3', '1', '4'], '', { gorsel: birles(4, 2) });
  ekle('yc-t4', 'Pastanın yarısı yendi. Ne kadar kaldı?', '1/2', ['1/4', '3/4', '1/2', '1/3'], '', { gorsel: kes(2, 1, { nesne: 'pasta', yenilen: 1 }) });
  ekle('yc-t5', '4 çeyrek kaç tama eşittir?', '1', ['2', '3', '1', '4'], '', { gorsel: birles(4, 4) });
  ekle('yc-t6', 'Hangisi daha büyüktür?', '1/2', ['1/4', '1/2', 'Eşit', 'Belli değil'], '', { gorsel: kars('1/2', '1/4') });
  ekle('yc-t7', 'Pizzanın 3/4\'ü yendi. Kaç çeyrek kaldı?', '1', ['3', '2', '1', '4'], '', { gorsel: kes(4, 1, { nesne: 'pizza', yenilen: 3 }) });
  ekle('yc-t8', '🎭 Pastanın yarısı 4 dilimse, çeyreği kaç dilimdir?', '2', ['4', '3', '2', '1'], 'Yarım = 4 dilim → Tam = 8 dilim → Çeyrek = 2 dilim', { gorsel: bol('daire', 8, { nesne: 'pasta' }), sasirtma: true });
  ekle('yc-t9', '1/2 + 1/2 = ?', '1 tam', ['1/4', '1/2', '1 tam', '2 tam'], '', { gorsel: birles(2, 2) });
  ekle('yc-t10', 'Elmadan Ali 1/4, Ayşe 1/4 aldı. Toplam ne kadar aldılar?', '1/2', ['1/4', '3/4', '1/2', '1 tam'], '', { gorsel: kes(4, 2, { nesne: 'elma', yenilen: 2 }) });
  ekle('yc-t11', '6 yarım kaç tama eşittir?', '3', ['4', '2', '3', '6'], '', { gorsel: birles(2, 6) });
  ekle('yc-t12', '🎭 Pastadan 1/4 Mehmet\'e, 1/2 Fatma\'ya verildi. Toplam kaçta kaçı verildi?', '3/4', ['1/2', '1', '3/4', '1/4'], '1/4 + 2/4 = 3/4', { gorsel: kes(4, 3, { nesne: 'pasta', vurgu: 'paylasim' }), sasirtma: true });
  ekle('yc-t13', 'Çeyrek kaç parçadan kaç parçadır?', "4'te 1", ["2'de 1", "3'te 1", "4'te 1", "8'de 1"], '', { gorsel: kes(4, 1, { etiket: 'çeyrek' }) });
  ekle('yc-t14', '🎭 8 çeyrek kaç tama eşittir?', '2', ['1', '3', '2', '4'], '4 çeyrek = 1 tam, 8 çeyrek = ?', { gorsel: birles(4, 8), sasirtma: true });
  ekle('yc-t15', 'Elmadan 3/4 yendi. Kaçta kaçı kaldı?', '1/4', ['3/4', '1/2', '1/4', '2/4'], '', { gorsel: kes(4, 1, { nesne: 'elma', yenilen: 3 }) });
  ekle('yc-t16', '🎭 Pastanın çeyreği 3 dilimse, yarısı kaç dilimdir?', '6', ['3', '8', '6', '4'], 'Çeyrek=3 → Tam=12 → Yarım=6', { gorsel: bol('daire', 12, { nesne: 'pasta' }), sasirtma: true });
  ekle('yc-t17', '1/4 + 1/4 + 1/4 + 1/4 = ?', '1 tam', ['1/2', '2/4', '1 tam', '3/4'], '', { gorsel: birles(4, 4) });
  ekle('yc-t18', 'Hangi ifade doğrudur?', '1/2 > 1/4', ['1/4 > 1/2', '1/2 = 1/4', '1/2 > 1/4', '1/4 = 1/2'], '', { gorsel: kars('1/2', '1/4') });
  ekle('yc-t19', '🎭 Ali bir pastayı 4 eşit parçaya böldü ve 2 parça yedi. Kaçta kaçını yedi?', '1/2', ['1/4', '3/4', '1/2', '2/4 = 1/2'], '2 parça = 2/4 = 1/2', { gorsel: kes(4, 2, { nesne: 'pasta', yenilen: 2 }), sasirtma: true });
  ekle('yc-t20', '3 yarım + 1 yarım = ?', '2 tam', ['1 tam', '3 tam', '2 tam', '4 tam'], '', { gorsel: birles(2, 4) });
  ekle('yc-t21', '🎭 Pastanın yarısını 2 kişi eşit paylaştı. Her biri kaçta kaç aldı?', '1/4', ['1/2', '1/3', '1/4', '2/4'], '1/2 ÷ 2 = 1/4', { gorsel: paylas(2, 2, 1), sasirtma: true });
  ekle('yc-t22', 'Bir elmanın 1/4\'ü 50 g ise, tam elma kaç gramdır?', '200 g', ['100 g', '250 g', '200 g', '150 g'], '', { gorsel: kes(4, 1, { nesne: 'elma', etiket: '50g' }) });
  ekle('yc-t23', '1/2 = kaç çeyrek?', '2', ['1', '3', '2', '4'], '', { gorsel: birles(4, 2) });
  ekle('yc-t24', '🎭 Pastadan Berk 1/4, Can 1/4, Selin 1/2 aldı. Pastanın tamamı yendi mi?', 'Evet, tamamı yendi', ['Hayır, 1/4 kaldı', 'Evet, tamamı yendi', 'Hayır, 1/2 kaldı', 'Evet ama fazla var'], '1/4 + 1/4 + 1/2 = 1/4 + 1/4 + 2/4 = 4/4 = 1 tam', { gorsel: kes(4, 4, { nesne: 'pasta', yenilen: 4 }), sasirtma: true });
  ekle('yc-t25', '🎭 4 elmanın yarısı kaç elmadır?', '2', ['1', '3', '2', '4'], "4'ün yarısı = 2", { gorsel: kes(2, 1, { nesne: 'elma', adet: 4 }), sasirtma: true });

  return sorular;
}

function basitKesirlerAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.KESIR,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('bk-a1', 'Dikdörtgen 2 eşit parçaya bölündü, 1 parça renkli. Kesri nedir?', '1/2', '', { gorsel: kes(2, 1, { nesne: 'dikdortgen' }) });
  ekle('bk-a2', 'Pizza 3 eşit parçaya bölündü, 1 parça yendi. Kesri nedir?', '1/3', '', { gorsel: kes(3, 1, { nesne: 'pizza', yenilen: 1 }) });
  ekle('bk-a3', 'Kare 4 eşit parçaya bölündü, 1 parça renkli. Kesri nedir?', '1/4', '', { gorsel: kes(4, 1, { nesne: 'kare' }) });
  ekle('bk-a4', '1/2\'de payda kaçtır?', '2', '', { gorsel: kes(2, 1, { vurgu: 'payda' }) });
  ekle('bk-a5', '1/3\'te pay kaçtır?', '1', '', { gorsel: kes(3, 1, { vurgu: 'pay' }) });
  ekle('bk-a6', '1/2, 1/3, 1/4\'ü büyükten küçüğe sırala', '1/2, 1/3, 1/4', '', { gorsel: kars('1/2', '1/3', '1/4') });
  ekle('bk-a7', 'Hangi kesir daha büyük: 1/2 mi 1/3 mü?', '1/2', '', { gorsel: kars('1/2', '1/3') });
  ekle('bk-a8', 'Hangi kesir daha küçük: 1/3 mü 1/4 mü?', '1/4', '', { gorsel: kars('1/3', '1/4') });
  ekle('bk-a9', 'Pizza 2 eşit parçaya bölündü. Her parça kaçta birdir?', '1/2', '', { gorsel: kes(2, 1, { nesne: 'pizza' }) });
  ekle('bk-a10', 'Elma 3 eşit parçaya bölündü. Her parça kaçta birdir?', '1/3', '', { gorsel: kes(3, 1, { nesne: 'elma' }) });
  ekle('bk-a11', 'Çikolata 4 eşit parçaya bölündü. Her parça kaçta birdir?', '1/4', '', { gorsel: kes(4, 1, { nesne: 'cikolata' }) });
  ekle('bk-a12', '3 tane 1/3 = kaç tam?', '1 tam', '', { gorsel: birles(3, 3) });
  ekle('bk-a13', '2 tane 1/2 = kaç tam?', '1 tam', '', { gorsel: birles(2, 2) });
  ekle('bk-a14', '4 tane 1/4 = kaç tam?', '1 tam', '', { gorsel: birles(4, 4) });
  ekle('bk-a15', '1/2 ile 1/4 toplamı nedir?', '3/4', '', { gorsel: kes(4, 3, { nesne: 'pasta', vurgu: 'toplam' }) });
  ekle('bk-a16', 'Pastanın 1/3\'ü yendi. Kaç parça kaldı? Pasta 3 parçalı', '2 parça', '', { gorsel: kes(3, 2, { nesne: 'pasta', yenilen: 1 }) });
  ekle('bk-a17', '6 parçalı pizzanın 1/2\'si kaç parçadır?', '3 parça', '', { gorsel: kes(6, 3, { nesne: 'pizza', vurgu: 'yarim' }) });
  ekle('bk-a18', '12 parçalı pastanın 1/4\'ü kaç parçadır?', '3 parça', '', { gorsel: kes(12, 3, { nesne: 'pasta', vurgu: 'ceyrek' }) });
  ekle('bk-a19', '9 parçalı çikolatanın 1/3\'ü kaç parçadır?', '3 parça', '', { gorsel: kes(9, 3, { nesne: 'cikolata', vurgu: 'uctebir' }) });
  ekle('bk-a20', '1/4 < 1/3 mü?', 'Evet', '', { gorsel: kars('1/4', '1/3') });
  ekle('bk-a21', 'Dikdörtgeni 3 eşit parçaya böl ve 1 parçayı renklendir. Bu kaçta birdir?', '1/3', '', { gorsel: kes(3, 1, { nesne: 'dikdortgen' }) });
  ekle('bk-a22', '8 parçalı pizzanın 1/2\'si kaç parçadır?', '4 parça', '', { gorsel: kes(8, 4, { nesne: 'pizza', vurgu: 'yarim' }) });
  ekle('bk-a23', '1/2 + 1/2 + 1/2 = kaç tam?', '1 tam + 1/2', '', { gorsel: birles(2, 3) });
  ekle('bk-a24', 'Hangi kesrin paydası en büyük: 1/2, 1/3, 1/4?', '1/4 (payda 4)', '', { gorsel: kars('1/2', '1/3', '1/4') });
  ekle('bk-a25', '1/3 + 1/3 + 1/3 = ?', '1 tam', '', { gorsel: birles(3, 3) });

  return sorular;
}

function basitKesirlerTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.KESIR,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('bk-t1', 'Dikdörtgen 3 eşit parçaya bölündü, 1 tanesi renkli. Bu kesir nedir?', '1/3', ['1/2', '1/4', '1/3', '2/3'], '', { gorsel: kes(3, 1, { nesne: 'dikdortgen' }) });
  ekle('bk-t2', 'Hangi kesir en büyüktür?', '1/2', ['1/4', '1/3', '1/2', 'Hepsi eşit'], '', { gorsel: kars('1/2', '1/3', '1/4') });
  ekle('bk-t3', '1/4\'te payda kaçtır?', '4', ['1', '2', '4', '3'], '', { gorsel: kes(4, 1, { vurgu: 'payda' }) });
  ekle('bk-t4', 'Pizza 4 eşit parçaya bölündü, 1 parça yendi. Ne kadar yendi?', '1/4', ['1/2', '1/3', '1/4', '3/4'], '', { gorsel: kes(4, 1, { nesne: 'pizza', yenilen: 1 }) });
  ekle('bk-t5', 'Hangi kesir en küçüktür?', '1/4', ['1/2', '1/3', '1/4', 'Hepsi eşit'], '', { gorsel: kars('1/2', '1/3', '1/4') });
  ekle('bk-t6', '6 parçalı pizzanın 1/3\'ü kaç parçadır?', '2', ['1', '3', '2', '4'], '', { gorsel: kes(6, 2, { nesne: 'pizza', vurgu: 'uctebir' }) });
  ekle('bk-t7', '1/2 + 1/2 = ?', '1 tam', ['1/2', '2/2', '1 tam', '1/4'], '', { gorsel: birles(2, 2) });
  ekle('bk-t8', '🎭 Hangi kesirde payda en küçüktür?', '1/2', ['1/4', '1/3', '1/2', 'Hepsi eşit'], "1/2'nin paydası 2, en küçük!", { gorsel: kars('1/2', '1/3', '1/4'), sasirtma: true });
  ekle('bk-t9', '12 parçalı pastanın 1/4\'ü kaç parçadır?', '3', ['2', '4', '3', '6'], '', { gorsel: kes(12, 3, { nesne: 'pasta', vurgu: 'ceyrek' }) });
  ekle('bk-t10', '1/3 < 1/2 midir?', 'Evet', ['Hayır', 'Eşit', 'Evet', 'Belli değil'], '', { gorsel: kars('1/3', '1/2') });
  ekle('bk-t11', 'Elma 2 eşit parçaya bölündü. Her parçanın kesri nedir?', '1/2', ['1/3', '1/4', '1/2', '2/4'], '', { gorsel: kes(2, 1, { nesne: 'elma' }) });
  ekle('bk-t12', '🎭 9 parçalı çikolatanın 1/3\'ü kaç parçadır?', '3', ['2', '4', '3', '6'], '9 ÷ 3 = ?', { gorsel: kes(9, 3, { nesne: 'cikolata', vurgu: 'uctebir' }), sasirtma: true });
  ekle('bk-t13', 'Hangi ifade doğrudur?', '1/2 > 1/3 > 1/4', ['1/4 > 1/3', '1/3 > 1/2', '1/2 > 1/3 > 1/4', '1/4 = 1/3'], '', { gorsel: kars('1/2', '1/3', '1/4') });
  ekle('bk-t14', 'Pastanın 1/2\'si Ali\'ye, 1/4\'ü Ayşe\'ye verildi. Toplam kaçta kaçı verildi?', '3/4', ['1/2', '1', '3/4', '1/4'], '', { gorsel: kes(4, 3, { nesne: 'pasta', vurgu: 'paylasim' }) });
  ekle('bk-t15', '🎭 8 parçalı pizzanın 1/4\'ü kaç parçadır?', '2', ['1', '3', '2', '4'], '8 ÷ 4 = ?', { gorsel: kes(8, 2, { nesne: 'pizza', vurgu: 'ceyrek' }), sasirtma: true });
  ekle('bk-t16', '1/3 + 1/3 + 1/3 = ?', '1 tam', ['1/3', '2/3', '1 tam', '3/3 = 1 tam'], '', { gorsel: birles(3, 3) });
  ekle('bk-t17', 'Hangi kesir daha büyüktür: 1/3 mü 1/4 mü?', '1/3', ['1/4', 'Eşit', '1/3', 'Belli değil'], '', { gorsel: kars('1/3', '1/4') });
  ekle('bk-t18', '🎭 Pastadan Berk 1/4, Can 1/4 aldı. Kalan kaçta kaçtır?', '1/2', ['1/4', '3/4', '1/2', '1 tam'], '1 - 1/4 - 1/4 = 2/4 = 1/2', { gorsel: kes(4, 2, { nesne: 'pasta', yenilen: 2 }), sasirtma: true });
  ekle('bk-t19', '1/2 kaç tane 1/4\'e eşittir?', '2', ['1', '3', '2', '4'], '', { gorsel: birles(4, 2) });
  ekle('bk-t20', '🎭 Paydası büyük olan kesir neden küçüktür?', 'Her parça küçük olur', ['Parça sayısı az olur', 'Her parça küçük olur', 'Sayı büyük olur', 'Hiçbiri'], '4 parçaya bölününce her parça 2 parçaya göre daha küçük!', { gorsel: kars('1/2', '1/4'), sasirtma: true });
  ekle('bk-t21', '10 parçalı pastanın 1/2\'si kaç parçadır?', '5', ['4', '6', '5', '3'], '', { gorsel: kes(10, 5, { nesne: 'pasta', vurgu: 'yarim' }) });
  ekle('bk-t22', '🎭 Mehmet 1/3, Fatma 1/3, Zeynep 1/3 pasta aldı. Pasta bitti mi?', 'Evet, tamamı yendi', ['Hayır, 1/3 kaldı', 'Evet, tamamı yendi', 'Hayır, 1/2 kaldı', 'Evet ama fazla var'], '1/3 + 1/3 + 1/3 = 3/3 = 1 tam', { gorsel: kes(3, 3, { nesne: 'pasta', yenilen: 3 }), sasirtma: true });
  ekle('bk-t23', '1/4 kaç tane 1/2\'nin kaçta biridir?', 'Yarısı', ['Yarısı', 'İki katı', 'Eşit', 'Üç katı'], '', { gorsel: kars('1/4', '1/2') });
  ekle('bk-t24', '🎭 12 parçalı pastanın 1/3\'ü Hande\'ye, 1/4\'ü Yusuf\'a verildi. Hande kaç parça aldı?', '4', ['3', '5', '4', '6'], '12 × 1/3 = 12 ÷ 3 = 4', { gorsel: kes(12, 4, { nesne: 'pasta', vurgu: 'hande' }), sasirtma: true });
  ekle('bk-t25', '🎭 Selin bir pastanın 1/2\'sini yedi, kalan 1/2\'yi 2 arkadaşıyla eşit paylaştı. Her arkadaş kaçta kaç aldı?', '1/4', ['1/2', '1/3', '1/4', '2/4'], '1/2 ÷ 2 = 1/4', { gorsel: paylas(4, 2, 1), sasirtma: true });

  return sorular;
}

export function esitParcalaraBolme(karistir) {
  return {
    id: 'esit-parcalara-bolme',
    baslik: 'Eşit Parçalara Bölme',
    kazanimKodu: KAZANIM.ESIT,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Bir nesneyi eşit parçalara bölebiliriz! Pizza, elma, kâğıt... Eşit parça demek her parçanın aynı büyüklükte olması demektir.',
          gorsel: anl('ep-anlatim-1'),
        },
        {
          metin:
            '2 eşit parça → ikiye bölünmüş. 3 eşit parça → üçe bölünmüş. 4 eşit parça → dörde bölünmüş.',
          gorsel: anl('ep-anlatim-2'),
        },
        {
          metin:
            'DİKKAT: Eşit olmayan bölme, eşit parça sayılmaz!',
          gorsel: anl('ep-anlatim-3'),
        },
      ],
    },
    alistirma: esitParcalaraBolmeAlistirma(),
    test: esitParcalaraBolmeTest(karistir),
  };
}

export function yarimVeCeyrek(karistir) {
  return {
    id: 'yarim-ve-ceyrek',
    baslik: 'Yarım ve Çeyrek',
    kazanimKodu: KAZANIM.YARIM,
    anlatim: {
      ekranlar: [
        {
          metin:
            "Bir nesneyi 2 eşit parçaya böldüğümüzde her parçaya YARIM denir. Yarım = 2'de 1 = 1/2.",
          gorsel: anl('yc-anlatim-1'),
        },
        {
          metin:
            "Bir nesneyi 4 eşit parçaya böldüğümüzde her parçaya ÇEYREK denir. Çeyrek = 4'te 1 = 1/4. 2 çeyrek = 1 yarım!",
          gorsel: anl('yc-anlatim-2'),
        },
        {
          metin:
            'Yarım elma + yarım elma = 1 tam elma. Çeyrek + çeyrek + çeyrek + çeyrek = 1 tam.',
          gorsel: anl('yc-anlatim-3'),
        },
      ],
    },
    alistirma: yarimVeCeyrekAlistirma(),
    test: yarimVeCeyrekTest(karistir),
  };
}

export function basitKesirler(karistir) {
  return {
    id: 'basit-kesirler',
    baslik: 'Basit Kesirler',
    kazanimKodu: KAZANIM.KESIR,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Kesir, bir bütünün eşit parçalarından birini gösterir. Kesrin altındaki sayı (payda) kaç eşit parçaya bölündüğünü, üstündeki sayı (pay) kaç parça alındığını gösterir.',
          gorsel: anl('bk-anlatim-1'),
        },
        {
          metin:
            "1/2 = Yarım (2 eşit parçadan 1'i). 1/3 = Üçte bir (3 eşit parçadan 1'i). 1/4 = Çeyrek (4 eşit parçadan 1'i).",
          gorsel: anl('bk-anlatim-2'),
        },
        {
          metin:
            'Hangi kesir daha büyük? Payda küçüldükçe her parça BÜYÜR! 1/2 > 1/3 > 1/4.',
          gorsel: anl('bk-anlatim-3'),
        },
      ],
    },
    alistirma: basitKesirlerAlistirma(),
    test: basitKesirlerTest(karistir),
  };
}
