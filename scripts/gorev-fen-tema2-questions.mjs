/** PARTI-FEN-TEMA2 — Bitkiler (100 görselli soru). */

import { bitkiler } from './gorev-fen1-questions.mjs';

const KAZANIM = 'FEN.2.1.2';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

function anl(sahne) {
  return { tur: 'fen', mod: 'anlatim', sahne };
}
function nesne(n, vurgu) {
  return { tur: 'fen', mod: 'nesne', nesne: n, vurgu };
}
function grup(nesneler, vurgu) {
  return { tur: 'fen', mod: 'grup', nesneler, vurgu };
}
function bitki(vurgu) {
  return { tur: 'fen', mod: 'bitki', vurgu };
}

function bitkilerEkAlistirma() {
  const s = [];
  const e = (id, soru, cevap, ipucu, extra = {}) =>
    s.push({
      id,
      kazanimKodu: KAZANIM,
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: extra.cevapTipi ?? 'metin',
      ...extra,
    });
  e('bt2-e1', 'Gül bir bitki midir?', 'Evet', '', { gorsel: nesne('cicek') });
  e('bt2-e2', 'Çam ağacı bitki midir?', 'Evet', '', { gorsel: nesne('agac') });
  e('bt2-e3', 'Domates bitkiden mi gelir?', 'Evet', '', { gorsel: nesne('sebze') });
  e('bt2-e4', 'Kök bitkiye su taşır mı?', 'Evet', '', { gorsel: bitki('kök') });
  e('bt2-e5', 'Yapraklar hangi renkte olur?', 'Yeşil', '', { gorsel: bitki('yaprak') });
  e('bt2-e6', 'Çiçek bitkinin hangi parçasıdır?', 'Üreme parçası', '', { gorsel: bitki('çiçek'), cevapTipi: 'metin' });
  e('bt2-e7', 'Meyve içinde ne bulunur?', 'Tohum', '', { gorsel: bitki('meyve') });
  e('bt2-e8', 'Bitkiler güneş ışığından enerji alır mı?', 'Evet', '', { gorsel: nesne('gunes') });
  e('bt2-e9', 'Fasulye bitki midir?', 'Evet', '', { gorsel: nesne('sebze') });
  e('bt2-e10', 'Kaktüs de bir bitkidir.', 'Doğru', '', { gorsel: nesne('cicek'), alternatifCevaplar: ['Evet', 'evet', 'doğru'] });
  e('bt2-e11', 'Gövde bitkiyi yerden yükseltir.', 'Doğru', '', { gorsel: bitki('gövde'), alternatifCevaplar: ['Evet', 'evet', 'doğru'] });
  e('bt2-e12', 'Bitkiler ölür mü?', 'Evet', '', { gorsel: nesne('agac') });
  e('bt2-e13', 'Tohum ekilince ne olur?', 'Filiz çıkar', '', { gorsel: nesne('toprak'), cevapTipi: 'metin' });
  e('bt2-e14', 'Ormanlardaki ağaçlar bitki midir?', 'Evet', '', { gorsel: nesne('agac') });
  e('bt2-e15', 'Lale bir çiçek midir?', 'Evet', '', { gorsel: nesne('cicek') });
  e('bt2-e16', 'Bitkiler hava almadan yaşayabilir mi?', 'Hayır', '', { gorsel: grup(['cicek', 'su', 'gunes', 'toprak']) });
  e('bt2-e17', 'Patates bitkiden mi gelir?', 'Evet', '', { gorsel: nesne('sebze') });
  e('bt2-e18', 'Çilek meyve midir?', 'Evet', '', { gorsel: nesne('meyve') });
  e('bt2-e19', 'Bitkilerin ihtiyaçlarından üçünü yaz', 'Su, güneş, toprak', '', { gorsel: grup(['su', 'gunes', 'toprak']), cevapTipi: 'metin' });
  e('bt2-e20', 'Kiraz ağacı bitki midir?', 'Evet', '', { gorsel: nesne('agac') });
  e('bt2-e21', 'Yapraklar fotosentez yapar.', 'Doğru', '', { gorsel: bitki('yaprak'), alternatifCevaplar: ['Evet', 'evet', 'doğru'] });
  e('bt2-e22', 'Kök toprak altında mı bulunur?', 'Evet', '', { gorsel: bitki('kök') });
  e('bt2-e23', 'Muz bitkiden mi gelir?', 'Evet', '', { gorsel: nesne('meyve') });
  e('bt2-e24', 'Bitkiler ürer mi?', 'Evet', '', { gorsel: bitki('çiçek') });
  e('bt2-e25', 'Salatalık sebze midir?', 'Evet', '', { gorsel: nesne('sebze') });
  return s;
}

function bitkilerEkTest(karistir) {
  const s = [];
  const e = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
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
  e('bt2-e1', 'Gül hangi canlı grubundadır?', 'Bitki', ['Hayvan', 'Taş', 'Bitki', 'Araba'], '', { gorsel: nesne('cicek') });
  e('bt2-e2', 'Çam ağacı hangi gruptadır?', 'Bitki', ['Kuş', 'Bitki', 'Balık', 'Böcek'], '', { gorsel: nesne('agac') });
  e('bt2-e3', 'Domates nereden gelir?', 'Bitkiden', ['Hayvandan', 'Bitkiden', 'Taştan', 'Sudan'], '', { gorsel: nesne('sebze') });
  e('bt2-e4', 'Kökün görevi nedir?', 'Toprağa tutunmak', ['Uçmak', 'Toprağa tutunmak', 'Güneşi tutmak', 'Yüzmek'], '', { gorsel: bitki('kök') });
  e('bt2-e5', 'Yapraklar genelde hangi renktedir?', 'Yeşil', ['Mavi', 'Sarı', 'Yeşil', 'Mor'], '', { gorsel: bitki('yaprak') });
  e('bt2-e6', 'Çiçeğin görevi nedir?', 'Üremek', ['Uçmak', 'Üremek', 'Yüzmek', 'Parlamak'], '', { gorsel: bitki('çiçek') });
  e('bt2-e7', 'Meyvenin içinde genelde ne bulunur?', 'Tohum', ['Kalem', 'Tohum', 'Taş', 'Su'], '', { gorsel: bitki('meyve') });
  e('bt2-e8', 'Bitkiler enerjiyi nereden alır?', 'Güneşten', ['Ay\'dan', 'Güneşten', 'Karanlıktan', 'Taştan'], '', { gorsel: nesne('gunes') });
  e('bt2-e9', 'Fasulye hangi gruptadır?', 'Bitki', ['Memeli', 'Bitki', 'Kuş', 'Balık'], '', { gorsel: nesne('sebze') });
  e('bt2-e10', 'Kaktüs bitki midir?', 'Evet', ['Hayır', 'Sadece çölde', 'Evet', 'Sadece yazın'], '', { gorsel: nesne('cicek') });
  e('bt2-e11', 'Gövdenin görevi nedir?', 'Bitkiyi yükseltmek', ['Tohum üretmek', 'Bitkiyi yükseltmek', 'Uçmak', 'Yüzmek'], '', { gorsel: bitki('gövde') });
  e('bt2-e12', 'Bitkiler ölür mü?', 'Evet', ['Hayır', 'Hiçbiri', 'Evet', 'Sadece kışın'], '', { gorsel: nesne('agac') });
  e('bt2-e13', 'Tohum ekilince ne olur?', 'Filiz çıkar', ['Taş olur', 'Filiz çıkar', 'Uçar', 'Erir'], '', { gorsel: nesne('toprak') });
  e('bt2-e14', 'Ormandaki ağaçlar bitki midir?', 'Evet', ['Hayır', 'Sadece büyükler', 'Evet', 'Sadece meyveliler'], '', { gorsel: nesne('agac') });
  e('bt2-e15', 'Lale hangi gruptadır?', 'Bitki', ['Hayvan', 'Bitki', 'Taş', 'Araba'], '', { gorsel: nesne('cicek') });
  e('bt2-e16', '🎭 Bitki hava olmadan yaşayabilir mi?', 'Hayır', ['Evet', 'Sadece kök için', 'Hayır', 'Sadece yazın'], 'Bitkiler solunum için havaya ihtiyaç duyar!', { gorsel: grup(['cicek', 'su', 'gunes', 'toprak']), sasirtma: true });
  e('bt2-e17', 'Patates nereden gelir?', 'Bitkiden', ['Hayvandan', 'Bitkiden', 'Taştan', 'Sudan'], '', { gorsel: nesne('sebze') });
  e('bt2-e18', 'Çilek hangi bitki parçasıdır?', 'Meyve', ['Kök', 'Gövde', 'Meyve', 'Tohum'], '', { gorsel: nesne('meyve') });
  e('bt2-e19', 'Bitkilerin ihtiyaçlarından biri değildir?', 'Televizyon', ['Su', 'Güneş', 'Televizyon', 'Toprak'], '', { gorsel: grup(['su', 'gunes', 'toprak', 'araba'], 'araba') });
  e('bt2-e20', 'Kiraz ağacı bitki midir?', 'Evet', ['Hayır', 'Sadece meyve verince', 'Evet', 'Sadece yazın'], '', { gorsel: nesne('agac') });
  e('bt2-e21', 'Yaprakların görevi nedir?', 'Güneş enerjisi almak', ['Uçmak', 'Güneş enerjisi almak', 'Yüzmek', 'Taşımak'], '', { gorsel: bitki('yaprak') });
  e('bt2-e22', 'Kök nerede bulunur?', 'Toprak altında', ['Gökyüzünde', 'Toprak altında', 'Suda', 'Havada'], '', { gorsel: bitki('kök') });
  e('bt2-e23', 'Muz nereden gelir?', 'Bitkiden', ['Hayvandan', 'Bitkiden', 'Taştan', 'Kalemden'], '', { gorsel: nesne('meyve') });
  e('bt2-e24', 'Bitkiler ürer mi?', 'Evet', ['Hayır', 'Sadece hayvanlar', 'Evet', 'Sadece insanlar'], '', { gorsel: bitki('çiçek') });
  e('bt2-e25', 'Salatalık hangi gruptadır?', 'Bitki', ['Kuş', 'Bitki', 'Balık', 'Böcek'], '', { gorsel: nesne('sebze') });
  return s;
}

export function bitkilerTema2(karistir) {
  const bt = bitkiler(karistir);
  const ekA = bitkilerEkAlistirma();
  const ekT = bitkilerEkTest(karistir);

  return {
    id: 'bitkiler',
    baslik: 'Bitkiler',
    kazanimKodu: KAZANIM,
    anlatim: bt.anlatim,
    alistirma: yenidenNumarala([...bt.alistirma, ...ekA], 'bt-a'),
    test: yenidenNumarala([...bt.test, ...ekT], 'bt-t'),
  };
}
