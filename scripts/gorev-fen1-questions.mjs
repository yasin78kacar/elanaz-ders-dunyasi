/** GOREV-FEN1 — Canlılar ve Cansızlar, Bitkiler, Hayvanlar (150 görselli soru). */

const KAZANIM = {
  CC: 'FEN.2.1.1',
  BT: 'FEN.2.1.2',
  HV: 'FEN.2.1.3',
};

function anl(sahne) {
  return { tur: 'fen', mod: 'anlatim', sahne };
}
function nesne(nesne, vurgu) {
  return { tur: 'fen', mod: 'nesne', nesne, vurgu };
}
function grup(nesneler, vurgu) {
  return { tur: 'fen', mod: 'grup', nesneler, vurgu };
}
function bitki(vurgu) {
  return { tur: 'fen', mod: 'bitki', vurgu };
}
function hayvan(nesne, ozellik) {
  return { tur: 'fen', mod: 'hayvan', nesne, ozellik };
}

function cevapTipiBelirle(cevap) {
  return /^\d+$/.test(String(cevap)) ? 'sayi' : 'metin';
}

function canlilarVeCansizlarAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.CC,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('cc-a1', 'Kedi canlı mı cansız mı?', 'Canlı', '', { gorsel: nesne('kedi') });
  ekle('cc-a2', 'Taş canlı mı cansız mı?', 'Cansız', '', { gorsel: nesne('tas') });
  ekle('cc-a3', 'Canlıların kaç yaşam özelliği vardır?', '7', '', { gorsel: anl('cc-anlatim-2') });
  ekle('cc-a4', 'Canlılar büyür mü?', 'Evet', '', { gorsel: nesne('agac') });
  ekle('cc-a5', 'Taş büyür mü?', 'Hayır', '', { gorsel: nesne('tas') });
  ekle('cc-a6', 'Canlılar beslenir mi?', 'Evet', '', { gorsel: nesne('kedi') });
  ekle('cc-a7', 'Masanın beslenmesi gerekir mi?', 'Hayır', '', { gorsel: nesne('masa') });
  ekle('cc-a8', 'Canlılar solur mu?', 'Evet', '', { gorsel: nesne('insan') });
  ekle('cc-a9', 'Kitap solur mu?', 'Hayır', '', { gorsel: nesne('kitap') });
  ekle('cc-a10', 'Canlılar ürer mi?', 'Evet', '', { gorsel: nesne('kedi') });
  ekle('cc-a11', 'Araba ürer mi?', 'Hayır', '', { gorsel: nesne('araba') });
  ekle('cc-a12', 'Canlılar hareket eder mi?', 'Evet', '', { gorsel: nesne('kus') });
  ekle('cc-a13', 'Kaya kendiliğinden hareket eder mi?', 'Hayır', '', { gorsel: nesne('kaya') });
  ekle('cc-a14', 'Canlılar tepki verir mi?', 'Evet', '', { gorsel: nesne('kopek') });
  ekle('cc-a15', 'Ağaç canlı mı?', 'Evet', '', { gorsel: nesne('agac') });
  ekle('cc-a16', 'Top canlı mı?', 'Hayır', '', { gorsel: nesne('top') });
  ekle('cc-a17', 'İnsan canlı mı?', 'Evet', '', { gorsel: nesne('insan') });
  ekle('cc-a18', 'Güneş canlı mı?', 'Hayır', '', { gorsel: nesne('gunes') });
  ekle('cc-a19', 'Çiçek büyür mü?', 'Evet', '', { gorsel: nesne('cicek') });
  ekle('cc-a20', 'Canlılar ölür mü?', 'Evet', '', { gorsel: anl('cc-anlatim-2') });
  ekle('cc-a21', 'Canlıların yaşam özelliklerinden üçünü yaz', 'Büyür, beslenir, solur', '', { gorsel: anl('cc-anlatim-2'), cevapTipi: 'metin' });
  ekle('cc-a22', 'Kelebek canlı mı?', 'Evet', '', { gorsel: nesne('kelebek') });
  ekle('cc-a23', 'Kalem canlı mı?', 'Hayır', '', { gorsel: nesne('kalem') });
  ekle('cc-a24', 'Beslenmeyen varlık canlı olabilir mi?', 'Hayır', '', { gorsel: grup(['kedi', 'kitap'], 'kedi') });
  ekle('cc-a25', 'Aşağıdakilerden hangileri canlıdır: kedi, kaya, kuş, masa?', 'Kedi ve kuş', '', { gorsel: grup(['kedi', 'kaya', 'kus', 'masa'], ['kedi', 'kus']), cevapTipi: 'metin' });

  return sorular;
}

function canlilarVeCansizlarTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.CC,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('cc-t1', 'Aşağıdakilerden hangisi canlıdır?', 'Kedi', ['Kaya', 'Masa', 'Kedi', 'Kitap'], '', { gorsel: grup(['kedi', 'kaya', 'masa', 'kitap'], 'kedi') });
  ekle('cc-t2', 'Aşağıdakilerden hangisi cansızdır?', 'Taş', ['Ağaç', 'Kedi', 'Taş', 'Çiçek'], '', { gorsel: grup(['agac', 'kedi', 'tas', 'cicek'], 'tas') });
  ekle('cc-t3', 'Canlıların kaç yaşam özelliği vardır?', '7', ['5', '6', '7', '8'], '', { gorsel: anl('cc-anlatim-2') });
  ekle('cc-t4', 'Hangisi canlıların yaşam özelliğidir?', 'Beslenir', ['Parlar', 'Beslenir', 'Erir', 'Kırılır'], '', { gorsel: anl('cc-anlatim-2') });
  ekle('cc-t5', 'Ağaç canlı mıdır?', 'Evet', ['Hayır', 'Bazen', 'Evet', 'Belli değil'], '', { gorsel: nesne('agac') });
  ekle('cc-t6', 'Araba canlı mıdır?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Sadece hareket edince'], '', { gorsel: nesne('araba') });
  ekle('cc-t7', 'Canlılar büyür mü?', 'Evet', ['Hayır', 'Sadece hayvanlar', 'Evet', 'Sadece bitkiler'], '', { gorsel: nesne('agac') });
  ekle('cc-t8', '🎭 Hareket eden her şey canlı mıdır?', 'Hayır', ['Evet', 'Sadece uçanlar', 'Hayır', 'Sadece yürüyenler'], 'Araba hareket eder ama canlı değildir!', { gorsel: grup(['araba', 'kedi', 'top', 'kus'], 'araba'), sasirtma: true });
  ekle('cc-t9', 'Canlılar solur mu?', 'Evet', ['Hayır', 'Sadece insan', 'Evet', 'Sadece balık'], '', { gorsel: nesne('insan') });
  ekle('cc-t10', 'Canlılar ürer mi?', 'Evet', ['Hayır', 'Sadece bitkiler', 'Evet', 'Sadece kuşlar'], '', { gorsel: nesne('kedi') });
  ekle('cc-t11', 'Canlılar tepki verir mi?', 'Evet', ['Hayır', 'Sadece köpekler', 'Evet', 'Sadece insanlar'], '', { gorsel: nesne('kopek') });
  ekle('cc-t12', 'Hangisi canlıların yaşam özelliği değildir?', 'Parlar', ['Büyür', 'Beslenir', 'Parlar', 'Solur'], '', { gorsel: anl('cc-anlatim-2') });
  ekle('cc-t13', 'Çiçek canlı mıdır?', 'Evet', ['Hayır', 'Sadece yazın', 'Evet', 'Kuruyunca'], '', { gorsel: nesne('cicek') });
  ekle('cc-t14', 'Kelebek canlı mıdır?', 'Evet', ['Hayır', 'Sadece uçarken', 'Evet', 'Sadece tırtılken'], '', { gorsel: nesne('kelebek') });
  ekle('cc-t15', 'Kitap canlı mıdır?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Okununca'], '', { gorsel: nesne('kitap') });
  ekle('cc-t16', '🎭 Güneş canlı mıdır?', 'Hayır', ['Evet', 'Sadece gündüz', 'Hayır', 'Sıcak olduğu için evet'], 'Güneş ısı ve ışık verir ama canlı değildir!', { gorsel: nesne('gunes'), sasirtma: true });
  ekle('cc-t17', 'Canlılar ölür mü?', 'Evet', ['Hayır', 'Hiçbiri', 'Evet', 'Sadece bitkiler'], '', { gorsel: anl('cc-anlatim-2') });
  ekle('cc-t18', 'Hangisi canlıdır?', 'Balık', ['Kaya', 'Kalem', 'Balık', 'Masa'], '', { gorsel: grup(['kaya', 'kalem', 'balik', 'masa'], 'balik') });
  ekle('cc-t19', 'Beslenmeyen varlık canlı olabilir mi?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Sadece taşlar'], '', { gorsel: grup(['kedi', 'kitap'], 'kedi') });
  ekle('cc-t20', '🎭 Aşağıdakilerden hangisi hem canlı hem cansız örneği içerir?', 'Kedi — Kaya', ['Kedi — Kuş', 'Ağaç — Çiçek', 'Kedi — Kaya', 'İnsan — Köpek'], 'Biri canlı, biri cansız olmalı!', { gorsel: grup(['kedi', 'kaya', 'kus', 'agac'], ['kedi', 'kaya']), sasirtma: true });
  ekle('cc-t21', 'İnsan canlı mıdır?', 'Evet', ['Hayır', 'Bazen', 'Evet', 'Sadece çocukken'], '', { gorsel: nesne('insan') });
  ekle('cc-t22', 'Top canlı mıdır?', 'Hayır', ['Evet', 'Yuvarlaksa evet', 'Hayır', 'Zıplarsa evet'], '', { gorsel: nesne('top') });
  ekle('cc-t23', 'Canlıların yaşam özelliklerinden biri hangisidir?', 'Hareket eder', ['Parlar', 'Donar', 'Hareket eder', 'Kırılır'], '', { gorsel: anl('cc-anlatim-2') });
  ekle('cc-t24', '🎭 Kuruyan çiçek hâlâ canlı mıdır?', 'Hayır', ['Evet', 'Bazen', 'Hayır', 'Rengi varsa evet'], 'Ölmüş canlı artık yaşam özelliklerini göstermez!', { gorsel: nesne('cicek'), sasirtma: true });
  ekle('cc-t25', '🎭 Aşağıdakilerden hangisi tüm canlılar için geçerlidir?', 'Büyür, beslenir ve solur', ['Parlar ve erir', 'Büyür, beslenir ve solur', 'Konuşur ve yazar', 'Uçar ve yüzer'], 'Her canlı bu temel özellikleri gösterir!', { gorsel: anl('cc-anlatim-2'), sasirtma: true });

  return sorular;
}

function bitkilerAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.BT,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('bt-a1', 'Bitkinin toprağa tutunmasını sağlayan kısım hangisidir?', 'Kök', '', { gorsel: bitki('kök') });
  ekle('bt-a2', 'Bitkinin toprak üstünde yükselen ana gövdesi nedir?', 'Gövde', '', { gorsel: bitki('gövde') });
  ekle('bt-a3', 'Bitkinin yeşil kısmı ve güneş enerjisi alan parçası hangisidir?', 'Yaprak', '', { gorsel: bitki('yaprak') });
  ekle('bt-a4', 'Bitkinin renkli ve güzel olan üreme kısmı hangisidir?', 'Çiçek', '', { gorsel: bitki('çiçek') });
  ekle('bt-a5', 'Tohumları koruyan bitki parçası hangisidir?', 'Meyve', '', { gorsel: bitki('meyve') });
  ekle('bt-a6', 'Bitkilerin yaşaması için su gerekli midir?', 'Evet', '', { gorsel: nesne('su') });
  ekle('bt-a7', 'Bitkilerin yaşaması için güneş gerekli midir?', 'Evet', '', { gorsel: nesne('gunes') });
  ekle('bt-a8', 'Bitkilerin yaşaması için toprak gerekli midir?', 'Evet', '', { gorsel: nesne('toprak') });
  ekle('bt-a9', 'Bitkilerin yaşaması için hava gerekli midir?', 'Evet', '', { gorsel: grup(['cicek', 'su', 'gunes', 'toprak']) });
  ekle('bt-a10', 'Ağacın kökü nerededir?', 'Toprak altında', '', { gorsel: bitki('kök') });
  ekle('bt-a11', 'Yapraklar genellikle hangi renktedir?', 'Yeşil', '', { gorsel: bitki('yaprak') });
  ekle('bt-a12', 'Bitki büyür mü?', 'Evet', '', { gorsel: nesne('agac') });
  ekle('bt-a13', 'Çiçekten sonra bitkide ne oluşabilir?', 'Meyve', '', { gorsel: bitki('meyve') });
  ekle('bt-a14', 'Havuç gibi sebzeler bitki midir?', 'Evet', '', { gorsel: nesne('sebze') });
  ekle('bt-a15', 'Elma bitkiden mi gelir?', 'Evet', '', { gorsel: nesne('meyve') });
  ekle('bt-a16', 'Bitki solur mu?', 'Evet', '', { gorsel: nesne('agac') });
  ekle('bt-a17', 'Bitki beslenir mi?', 'Evet', '', { gorsel: nesne('cicek') });
  ekle('bt-a18', 'Güneş olmadan bitki sağlıklı büyür mü?', 'Hayır', '', { gorsel: grup(['gunes', 'cicek'], 'gunes') });
  ekle('bt-a19', 'Susuz bırakılan bitki ne olur?', 'Solar ve kurur', '', { gorsel: nesne('su') });
  ekle('bt-a20', 'Bitkinin beş ana parçasını yaz', 'Kök, gövde, yaprak, çiçek, meyve', '', { gorsel: bitki(), cevapTipi: 'metin' });
  ekle('bt-a21', 'Ağaç bitki midir?', 'Evet', '', { gorsel: nesne('agac') });
  ekle('bt-a22', 'Çiçeğin görevi nedir?', 'Üremek/tohum oluşturmak', '', { gorsel: bitki('çiçek'), cevapTipi: 'metin' });
  ekle('bt-a23', 'Yapraklar bitkinin hangi kısmında bulunur?', 'Gövde ve dallarda', '', { gorsel: bitki('yaprak'), cevapTipi: 'metin' });
  ekle('bt-a24', 'Bitkiler hareket eder mi?', 'Büyüyerek hareket eder', '', { gorsel: nesne('agac'), cevapTipi: 'metin' });
  ekle('bt-a25', 'Tohum genellikle nerede bulunur?', 'Meyve veya çiçek içinde', '', { gorsel: bitki('meyve'), cevapTipi: 'metin' });

  return sorular;
}

function bitkilerTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.BT,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('bt-t1', 'Bitkinin toprağa tutunan kısmı hangisidir?', 'Kök', ['Yaprak', 'Çiçek', 'Kök', 'Meyve'], '', { gorsel: bitki('kök') });
  ekle('bt-t2', 'Bitkinin gövdesi ne işe yarar?', 'Bitkiyi yükseltir', ['Tohum üretir', 'Su içer', 'Bitkiyi yükseltir', 'Güneşi tutar'], '', { gorsel: bitki('gövde') });
  ekle('bt-t3', 'Güneş enerjisini alan bitki parçası hangisidir?', 'Yaprak', ['Kök', 'Meyve', 'Yaprak', 'Tohum'], '', { gorsel: bitki('yaprak') });
  ekle('bt-t4', 'Bitkinin renkli üreme kısmı hangisidir?', 'Çiçek', ['Kök', 'Gövde', 'Çiçek', 'Kabuk'], '', { gorsel: bitki('çiçek') });
  ekle('bt-t5', 'Tohumları koruyan bitki parçası hangisidir?', 'Meyve', ['Yaprak', 'Kök', 'Meyve', 'Dal'], '', { gorsel: bitki('meyve') });
  ekle('bt-t6', 'Bitkilerin yaşaması için hangisi gereklidir?', 'Su', ['Taş', 'Kalem', 'Su', 'Araba'], '', { gorsel: nesne('su') });
  ekle('bt-t7', 'Bitkilerin büyümesi için hangisi gereklidir?', 'Güneş', ['Ay', 'Güneş', 'Kar', 'Rüzgâr'], '', { gorsel: nesne('gunes') });
  ekle('bt-t8', '🎭 Bitki sadece su içerse ama güneş görmezse ne olur?', 'Sağlıklı büyüyemez', ['Çok hızlı büyür', 'Sağlıklı büyüyemez', 'Hiç etkilenmez', 'Meyve verir'], 'Bitkiler hem su hem güneş ister!', { gorsel: grup(['su', 'gunes', 'cicek'], ['su', 'gunes']), sasirtma: true });
  ekle('bt-t9', 'Bitkilerin yaşaması için toprak gerekli midir?', 'Evet', ['Hayır', 'Sadece ağaçlar için', 'Evet', 'Sadece çiçekler için'], '', { gorsel: nesne('toprak') });
  ekle('bt-t10', 'Bitkilerin yaşaması için hava gerekli midir?', 'Evet', ['Hayır', 'Sadece yazın', 'Evet', 'Sadece kök için'], '', { gorsel: grup(['cicek', 'su', 'gunes', 'toprak']) });
  ekle('bt-t11', 'Ağaç bitki midir?', 'Evet', ['Hayır', 'Sadece ormanda', 'Evet', 'Sadece meyve verince'], '', { gorsel: nesne('agac') });
  ekle('bt-t12', 'Elma nereden gelir?', 'Bitkiden', ['Hayvandan', 'Taştan', 'Bitkiden', 'Sudan'], '', { gorsel: nesne('meyve') });
  ekle('bt-t13', 'Havuç hangi canlı grubundadır?', 'Bitki', ['Hayvan', 'Taş', 'Bitki', 'Araba'], '', { gorsel: nesne('sebze') });
  ekle('bt-t14', 'Çiçekten sonra bitkide ne oluşabilir?', 'Meyve', ['Kök', 'Taş', 'Meyve', 'Kalem'], '', { gorsel: bitki('meyve') });
  ekle('bt-t15', 'Yapraklar genellikle hangi renktedir?', 'Yeşil', ['Mavi', 'Kırmızı', 'Yeşil', 'Siyah'], '', { gorsel: bitki('yaprak') });
  ekle('bt-t16', '🎭 Kökün görevi nedir?', 'Toprağa tutunmak ve su almak', ['Uçmak', 'Toprağa tutunmak ve su almak', 'Güneşi yakalamak', 'Tohum üretmek'], 'Kök yerin altındadır!', { gorsel: bitki('kök'), sasirtma: true });
  ekle('bt-t17', 'Bitki büyür mü?', 'Evet', ['Hayır', 'Sadece kışın', 'Evet', 'Sadece meyve verince'], '', { gorsel: nesne('agac') });
  ekle('bt-t18', 'Susuz bırakılan bitki ne olur?', 'Solar', ['Büyür', 'Uçar', 'Solar', 'Konuşur'], '', { gorsel: nesne('su') });
  ekle('bt-t19', 'Bitkinin beş ana parçasından biri hangisidir?', 'Gövde', ['Kanat', 'Tekerlek', 'Gövde', 'Pul'], '', { gorsel: bitki() });
  ekle('bt-t20', '🎭 Meyve bitkinin hangi göreviyle ilgilidir?', 'Tohumları korumak', ['Uçmak', 'Yüzmek', 'Tohumları korumak', 'Parlamak'], 'Meyve tohumu sarar!', { gorsel: bitki('meyve'), sasirtma: true });
  ekle('bt-t21', 'Bitkiler beslenir mi?', 'Evet', ['Hayır', 'Sadece hayvanlar', 'Evet', 'Sadece insanlar'], '', { gorsel: nesne('cicek') });
  ekle('bt-t22', 'Bitkiler solur mu?', 'Evet', ['Hayır', 'Sadece balıklar', 'Evet', 'Sadece kuşlar'], '', { gorsel: nesne('agac') });
  ekle('bt-t23', 'Bitkilerin ihtiyaçlarından biri değildir?', 'Araba', ['Su', 'Güneş', 'Araba', 'Toprak'], '', { gorsel: grup(['su', 'gunes', 'toprak', 'araba'], 'araba') });
  ekle('bt-t24', '🎭 Çiçeği olmayan bitki canlı olamaz mı?', 'Olabilir, çiçeği olmayabilir', ['Hayır, çiçeksiz olamaz', 'Olabilir, çiçeği olmayabilir', 'Evet, çiçek şart', 'Sadece ağaçlar çiçeksiz'], 'Bazı bitkilerin çiçeği görülmez!', { gorsel: nesne('agac'), sasirtma: true });
  ekle('bt-t25', '🎭 Bitki toprakta mı hava da mı yaşar?', 'Toprakta', ['Havada', 'Suda', 'Toprakta', 'Taşta'], 'Bitkiler kökleriyle toprakta tutunur!', { gorsel: nesne('agac'), sasirtma: true });

  return sorular;
}

function hayvanlarAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.HV,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? cevapTipiBelirle(cevap),
      ...extra,
    });
  ekle('hv-a1', 'Kedinin vücut örtüsü nedir?', 'Deri ve tüy', '', { gorsel: hayvan('kedi', 'deri'), cevapTipi: 'metin' });
  ekle('hv-a2', 'Kuşun vücut örtüsü nedir?', 'Tüy', '', { gorsel: hayvan('kus', 'tuy') });
  ekle('hv-a3', 'Balığın vücut örtüsü nedir?', 'Pul', '', { gorsel: hayvan('balik', 'pul') });
  ekle('hv-a4', 'Kedi nerede yaşar?', 'Kara', '', { gorsel: hayvan('kedi', 'kara') });
  ekle('hv-a5', 'Balık nerede yaşar?', 'Su', '', { gorsel: hayvan('balik', 'su') });
  ekle('hv-a6', 'Kuş en çok hangi ortamda hareket eder?', 'Hava', '', { gorsel: hayvan('kus', 'hava') });
  ekle('hv-a7', 'Kedi nasıl hareket eder?', 'Yürür', '', { gorsel: hayvan('kedi', 'yurur') });
  ekle('hv-a8', 'Kuş nasıl hareket eder?', 'Uçar', '', { gorsel: hayvan('kus', 'ucar') });
  ekle('hv-a9', 'Balık nasıl hareket eder?', 'Yüzer', '', { gorsel: hayvan('balik', 'yuzer') });
  ekle('hv-a10', 'Yavrusunu sütle besleyen hayvanlara ne denir?', 'Memeli', '', { gorsel: hayvan('kedi', 'memeli') });
  ekle('hv-a11', 'Kedi memeli midir?', 'Evet', '', { gorsel: hayvan('kedi', 'memeli') });
  ekle('hv-a12', 'Kuş hangi gruptadır?', 'Kuş', '', { gorsel: hayvan('kus', 'kus') });
  ekle('hv-a13', 'Balık hangi gruptadır?', 'Balık', '', { gorsel: hayvan('balik', 'balik') });
  ekle('hv-a14', 'Arı hangi gruptadır?', 'Böcek', '', { gorsel: hayvan('ari', 'bocek') });
  ekle('hv-a15', 'Kelebek böcek midir?', 'Evet', '', { gorsel: hayvan('kelebek', 'bocek') });
  ekle('hv-a16', 'İnek memeli midir?', 'Evet', '', { gorsel: hayvan('inek', 'memeli') });
  ekle('hv-a17', 'Ördek kuş mudur?', 'Evet', '', { gorsel: hayvan('ordek', 'kus') });
  ekle('hv-a18', 'Kurbağa hangi ortamlarda yaşar?', 'Kara ve su', '', { gorsel: hayvan('kurbağa', 'su'), cevapTipi: 'metin' });
  ekle('hv-a19', 'Yılan nasıl hareket eder?', 'Sürünür', '', { gorsel: hayvan('yilan', 'surunur') });
  ekle('hv-a20', 'Kaplumbağa nasıl hareket eder?', 'Yürür', '', { gorsel: hayvan('kaplumbaga', 'yurur') });
  ekle('hv-a21', 'Tüy örtüsü olan hayvan hangisidir?', 'Kuş', '', { gorsel: hayvan('kus', 'tuy') });
  ekle('hv-a22', 'Pul örtüsü olan hayvan hangisidir?', 'Balık', '', { gorsel: hayvan('balik', 'pul') });
  ekle('hv-a23', 'Deri örtüsü olan hayvan hangisidir?', 'Kedi', '', { gorsel: hayvan('kedi', 'deri') });
  ekle('hv-a24', 'Hayvanlar beslenir mi?', 'Evet', '', { gorsel: nesne('kedi') });
  ekle('hv-a25', 'Hayvan gruplarından üçünü yaz', 'Memeli, kuş, balık', '', { gorsel: anl('hv-anlatim-1'), cevapTipi: 'metin' });

  return sorular;
}

function hayvanlarTest(karistir) {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: KAZANIM.HV,
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });
  ekle('hv-t1', 'Kedinin vücut örtüsü hangisidir?', 'Deri', ['Pul', 'Tüy', 'Deri', 'Taş'], '', { gorsel: hayvan('kedi', 'deri') });
  ekle('hv-t2', 'Kuşun vücut örtüsü hangisidir?', 'Tüy', ['Pul', 'Deri', 'Tüy', 'Kaya'], '', { gorsel: hayvan('kus', 'tuy') });
  ekle('hv-t3', 'Balığın vücut örtüsü hangisidir?', 'Pul', ['Tüy', 'Pul', 'Deri', 'Kürk'], '', { gorsel: hayvan('balik', 'pul') });
  ekle('hv-t4', 'Kedi hangi ortamda yaşar?', 'Kara', ['Su', 'Hava', 'Kara', 'Uzay'], '', { gorsel: hayvan('kedi', 'kara') });
  ekle('hv-t5', 'Balık hangi ortamda yaşar?', 'Su', ['Kara', 'Su', 'Hava', 'Toprak'], '', { gorsel: hayvan('balik', 'su') });
  ekle('hv-t6', 'Kuş en çok hangi ortamda hareket eder?', 'Hava', ['Su', 'Toprak', 'Hava', 'Mağara'], '', { gorsel: hayvan('kus', 'hava') });
  ekle('hv-t7', 'Kedi nasıl hareket eder?', 'Yürür', ['Uçar', 'Yüzer', 'Yürür', 'Sürünür'], '', { gorsel: hayvan('kedi', 'yurur') });
  ekle('hv-t8', '🎭 Yürüyen her hayvan memeli midir?', 'Hayır', ['Evet', 'Sadece kediler', 'Hayır', 'Sadece köpekler'], 'Kaplumbağa da yürür ama memeli değildir!', { gorsel: hayvan('kaplumbaga', 'yurur'), sasirtma: true });
  ekle('hv-t9', 'Kuş nasıl hareket eder?', 'Uçar', ['Yüzer', 'Uçar', 'Sürünür', 'Zıplar'], '', { gorsel: hayvan('kus', 'ucar') });
  ekle('hv-t10', 'Balık nasıl hareket eder?', 'Yüzer', ['Uçar', 'Yürür', 'Yüzer', 'Tırmanır'], '', { gorsel: hayvan('balik', 'yuzer') });
  ekle('hv-t11', 'Kedi hangi hayvan grubundadır?', 'Memeli', ['Kuş', 'Balık', 'Memeli', 'Böcek'], '', { gorsel: hayvan('kedi', 'memeli') });
  ekle('hv-t12', 'Ördek hangi hayvan grubundadır?', 'Kuş', ['Memeli', 'Balık', 'Kuş', 'Böcek'], '', { gorsel: hayvan('ordek', 'kus') });
  ekle('hv-t13', 'Arı hangi hayvan grubundadır?', 'Böcek', ['Kuş', 'Memeli', 'Böcek', 'Balık'], '', { gorsel: hayvan('ari', 'bocek') });
  ekle('hv-t14', 'İnek hangi hayvan grubundadır?', 'Memeli', ['Kuş', 'Memeli', 'Balık', 'Böcek'], '', { gorsel: hayvan('inek', 'memeli') });
  ekle('hv-t15', 'Yılan nasıl hareket eder?', 'Sürünür', ['Uçar', 'Yüzer', 'Sürünür', 'Koşar'], '', { gorsel: hayvan('yilan', 'surunur') });
  ekle('hv-t16', '🎭 Tüy örtüsü olan hayvan hangisidir?', 'Kuş', ['Balık', 'Kedi', 'Kuş', 'Kurbağa'], 'Kuşların vücudu tüyle kaplıdır!', { gorsel: hayvan('kus', 'tuy'), sasirtma: true });
  ekle('hv-t17', 'Pul örtüsü olan hayvan hangisidir?', 'Balık', ['Kuş', 'Kedi', 'Balık', 'Arı'], '', { gorsel: hayvan('balik', 'pul') });
  ekle('hv-t18', 'Deri örtüsü olan hayvan hangisidir?', 'Kedi', ['Balık', 'Kedi', 'Kuş', 'Kelebek'], '', { gorsel: hayvan('kedi', 'deri') });
  ekle('hv-t19', 'Kelebek hangi hayvan grubundadır?', 'Böcek', ['Kuş', 'Memeli', 'Böcek', 'Balık'], '', { gorsel: hayvan('kelebek', 'bocek') });
  ekle('hv-t20', '🎭 Balık karada mı yaşar?', 'Hayır, suda yaşar', ['Evet, karada', 'Hayır, suda yaşar', 'Hem karada hem havada', 'Toprakta'], 'Balıklar solungaçlarıyla suda yaşar!', { gorsel: hayvan('balik', 'su'), sasirtma: true });
  ekle('hv-t21', 'Kaplumbağa nasıl hareket eder?', 'Yürür', ['Uçar', 'Yüzer', 'Yürür', 'Sürünür'], '', { gorsel: hayvan('kaplumbaga', 'yurur') });
  ekle('hv-t22', 'Kurbağa hangi ortamlarda yaşayabilir?', 'Kara ve su', ['Sadece hava', 'Sadece kara', 'Kara ve su', 'Sadece su'], '', { gorsel: hayvan('kurbağa', 'su') });
  ekle('hv-t23', 'Hayvanlar beslenir mi?', 'Evet', ['Hayır', 'Sadece bitkiler', 'Evet', 'Sadece taşlar'], '', { gorsel: nesne('kedi') });
  ekle('hv-t24', '🎭 Ördek hem yüzer hem uçar. Hangi gruptadır?', 'Kuş', ['Balık', 'Memeli', 'Kuş', 'Böcek'], 'Ördek bir kuştur!', { gorsel: hayvan('ordek', 'kus'), sasirtma: true });
  ekle('hv-t25', '🎭 Kedinin vücudu tüyle kaplıdır. Bu doğru mu?', 'Evet, memelilerde tüy veya kıl olabilir', ['Hayır, hiç tüy yok', 'Evet, memelilerde tüy veya kıl olabilir', 'Sadece kuşlarda tüy var', 'Sadece balıklarda tüy var'], 'Kedi memelidir, vücudunda tüy bulunur!', { gorsel: hayvan('kedi', 'tuy'), sasirtma: true });

  return sorular;
}

export function canlilarVeCansizlar(karistir) {
  return {
    id: 'canlilar-ve-cansizlar',
    baslik: 'Canlılar ve Cansızlar',
    kazanimKodu: KAZANIM.CC,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Dünyamızda canlılar ve cansızlar vardır. Canlılar; kedi, kuş, ağaç, çiçek gibi büyüyen ve beslenen varlıklardır. Cansızlar; taş, kitap, masa gibi büyümeyen varlıklardır.',
          gorsel: anl('cc-anlatim-1'),
        },
        {
          metin:
            'Canlıların 7 yaşam özelliği vardır: Büyür, beslenir, solur, ürer, hareket eder, tepki verir ve ölür.',
          gorsel: anl('cc-anlatim-2'),
        },
        {
          metin:
            'Bir varlığın canlı olup olmadığını anlamak için yaşam özelliklerine bakarız. Hepsini gösteriyorsa canlıdır!',
          gorsel: anl('cc-anlatim-3'),
        },
      ],
    },
    alistirma: canlilarVeCansizlarAlistirma(),
    test: canlilarVeCansizlarTest(karistir),
  };
}

export function bitkiler(karistir) {
  return {
    id: 'bitkiler',
    baslik: 'Bitkiler',
    kazanimKodu: KAZANIM.BT,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Bitkilerin beş ana parçası vardır: Kök, gövde, yaprak, çiçek ve meyve. Kök bitkiyi toprağa tutar, gövde yükseltir, yaprak güneş enerjisi alır.',
          gorsel: anl('bt-anlatim-1'),
        },
        {
          metin:
            'Bitkilerin yaşaması için su, güneş, toprak ve havaya ihtiyaç vardır. Bu ihtiyaçlar olmadan bitki sağlıklı büyüyemez.',
          gorsel: anl('bt-anlatim-2'),
        },
        {
          metin:
            'Bitkiler de canlıdır! Büyür, beslenir, solur, ürer ve ölür. Ağaçlar, çiçekler ve sebzeler bitkidir.',
          gorsel: anl('bt-anlatim-3'),
        },
      ],
    },
    alistirma: bitkilerAlistirma(),
    test: bitkilerTest(karistir),
  };
}

export function hayvanlar(karistir) {
  return {
    id: 'hayvanlar',
    baslik: 'Hayvanlar',
    kazanimKodu: KAZANIM.HV,
    anlatim: {
      ekranlar: [
        {
          metin:
            'Hayvanlar farklı gruplara ayrılır: Memeliler (kedi, inek), kuşlar (ördek, serçe), balıklar ve böcekler (arı, kelebek).',
          gorsel: anl('hv-anlatim-1'),
        },
        {
          metin:
            'Hayvanlar farklı ortamlarda yaşar. Kimi karada (kedi), kimi suda (balık), kimi de havada (kuş) yaşar.',
          gorsel: anl('hv-anlatim-2'),
        },
        {
          metin:
            'Hayvanların vücut örtüleri farklıdır: Kuşlarda tüy, balıklarda pul, memelilerde deri ve tüy bulunur. Hayvanlar yürür, uçar, yüzer veya sürünerek hareket eder.',
          gorsel: anl('hv-anlatim-3'),
        },
      ],
    },
    alistirma: hayvanlarAlistirma(),
    test: hayvanlarTest(karistir),
  };
}
