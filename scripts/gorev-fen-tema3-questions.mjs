/** PARTI-FEN-TEMA3 — Hayvanlar (100 görselli soru: 50 detaylı + 50 genişletme). */

import { hayvanlar } from './gorev-fen1-questions.mjs';

const KAZANIM = 'FEN.2.1.3';

function yenidenNumarala(sorular, onek) {
  return sorular.map((s, i) => ({ ...s, id: `${onek}${i + 1}` }));
}

function anl(sahne) {
  return { tur: 'fen', mod: 'anlatim', sahne };
}
function hayvan(nesne, ozellik) {
  return { tur: 'fen', mod: 'hayvan', nesne, ozellik };
}

function hayvanlarEkAlistirma() {
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
  e('hv2-e1', 'Yün keçisi hangi gruptadır?', 'Memeli', '', { gorsel: hayvan('inek', 'memeli') });
  e('hv2-e2', 'Serçe hangi gruptadır?', 'Kuş', '', { gorsel: hayvan('kus', 'kus') });
  e('hv2-e3', 'Yun balığı hangi gruptadır?', 'Balık', '', { gorsel: hayvan('balik', 'balik') });
  e('hv2-e4', 'Sinek hangi gruptadır?', 'Böcek', '', { gorsel: hayvan('kelebek', 'bocek') });
  e('hv2-e5', 'Kaplumbağa karada yaşar mı?', 'Evet', '', { gorsel: hayvan('kaplumbaga', 'kara') });
  e('hv2-e6', 'Yılan nasıl hareket eder?', 'Sürünerek', '', { gorsel: hayvan('yilan', 'surunur') });
  e('hv2-e7', 'Ördek hem karada hem suda yaşayabilir mi?', 'Evet', '', { gorsel: hayvan('ordek', 'su') });
  e('hv2-e8', 'Arılar ne üretir?', 'Bal', '', { gorsel: hayvan('ari', 'bocek') });
  e('hv2-e9', 'Köpek sadık bir hayvan mıdır?', 'Evet', '', { gorsel: hayvan('kopek', 'memeli') });
  e('hv2-e10', 'Kelebek hangi gruptadır?', 'Böcek', '', { gorsel: hayvan('kelebek', 'bocek') });
  e('hv2-e11', 'Balıklar solungaçla mı nefes alır?', 'Evet', '', { gorsel: hayvan('balik', 'su') });
  e('hv2-e12', 'Kuşlar yumurtlayarak mı ürer?', 'Evet', '', { gorsel: hayvan('kus', 'kus') });
  e('hv2-e13', 'Memeliler yavrularını nasıl besler?', 'Sütle', '', { gorsel: hayvan('kedi', 'memeli') });
  e('hv2-e14', 'Kurbağa hem karada hem suda yaşar mı?', 'Evet', '', { gorsel: hayvan('kurbağa', 'su') });
  e('hv2-e15', 'İnek otla beslenir mi?', 'Evet', '', { gorsel: hayvan('inek', 'memeli') });
  e('hv2-e16', 'Kedi etçil midir?', 'Evet', '', { gorsel: hayvan('kedi', 'yurur') });
  e('hv2-e17', 'Balıklar pullu mudur?', 'Evet', '', { gorsel: hayvan('balik', 'pul') });
  e('hv2-e18', 'Kuşların kanatları vardır.', 'Doğru', '', { gorsel: hayvan('kus', 'ucar'), alternatifCevaplar: ['Evet', 'evet', 'doğru'] });
  e('hv2-e19', 'Arı çiçeklerden ne toplar?', 'Polen', '', { gorsel: hayvan('ari', 'bocek') });
  e('hv2-e20', 'Köpek havlar mı?', 'Evet', '', { gorsel: hayvan('kopek', 'memeli') });
  e('hv2-e21', 'Yılan sürüngen midir?', 'Evet', '', { gorsel: hayvan('yilan', 'surunur') });
  e('hv2-e22', 'Ördek yüzer mi?', 'Evet', '', { gorsel: hayvan('ordek', 'yuzer') });
  e('hv2-e23', 'Kelebek uçar mı?', 'Evet', '', { gorsel: hayvan('kelebek', 'bocek') });
  e('hv2-e24', 'İnek memeli midir?', 'Evet', '', { gorsel: hayvan('inek', 'memeli') });
  e('hv2-e25', 'Hayvanlar beslenir mi?', 'Evet', '', { gorsel: anl('hv-anlatim-1') });
  return s;
}

function hayvanlarEkTest(karistir) {
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
  e('hv2-e1', 'Yün keçisi hangi gruptadır?', 'Memeli', ['Kuş', 'Memeli', 'Balık', 'Böcek'], '', { gorsel: hayvan('inek', 'memeli') });
  e('hv2-e2', 'Serçe hangi gruptadır?', 'Kuş', ['Kuş', 'Memeli', 'Balık', 'Sürüngen'], '', { gorsel: hayvan('kus', 'kus') });
  e('hv2-e3', 'Yun balığı hangi gruptadır?', 'Balık', ['Kuş', 'Memeli', 'Balık', 'Böcek'], '', { gorsel: hayvan('balik', 'balik') });
  e('hv2-e4', 'Kaplumbağa nerede yaşar?', 'Kara ve su', ['Sadece su', 'Kara ve su', 'Sadece hava', 'Uzay'], '', { gorsel: hayvan('kaplumbaga', 'kara') });
  e('hv2-e5', 'Arılar ne üretir?', 'Bal', ['Süt', 'Bal', 'Yumurta', 'Taş'], '', { gorsel: hayvan('ari', 'bocek') });
  e('hv2-e6', 'Köpek sadık bir hayvan mıdır?', 'Evet', ['Hayır', 'Bazen', 'Evet', 'Sadece kışın'], '', { gorsel: hayvan('kopek', 'memeli') });
  e('hv2-e7', 'Balıklar nefes almak için ne kullanır?', 'Solungaç', ['Akciğer', 'Solungaç', 'Burun', 'Kulak'], '', { gorsel: hayvan('balik', 'su') });
  e('hv2-e8', 'Memeliler yavrularını nasıl besler?', 'Sütle', ['Yaprakla', 'Sütle', 'Taşla', 'Suyla'], '', { gorsel: hayvan('kedi', 'memeli') });
  e('hv2-e9', 'Kelebek hangi gruptadır?', 'Böcek', ['Kuş', 'Memeli', 'Böcek', 'Balık'], '', { gorsel: hayvan('kelebek', 'bocek') });
  e('hv2-e10', 'İnek neyle beslenir?', 'Ot', ['Et', 'Ot', 'Balık', 'Taş'], '', { gorsel: hayvan('inek', 'memeli') });
  e('hv2-e11', 'Kuşlar nasıl hareket eder?', 'Uçarak', ['Yüzerek', 'Uçarak', 'Sürünerek', 'Yürüyerek'], '', { gorsel: hayvan('kus', 'ucar') });
  e('hv2-e12', 'Yılan hangi gruptadır?', 'Sürüngen', ['Kuş', 'Memeli', 'Sürüngen', 'Balık'], '', { gorsel: hayvan('yilan', 'surunur') });
  e('hv2-e13', 'Ördek yüzer mi?', 'Evet', ['Hayır', 'Sadece uçar', 'Evet', 'Sadece yürür'], '', { gorsel: hayvan('ordek', 'yuzer') });
  e('hv2-e14', 'Kurbağa hangi ortamlarda yaşar?', 'Kara ve su', ['Sadece kara', 'Kara ve su', 'Sadece hava', 'Uzay'], '', { gorsel: hayvan('kurbağa', 'su') });
  e('hv2-e15', 'Kedi etçil midir?', 'Evet', ['Hayır', 'Sadece ot yer', 'Evet', 'Hiç yemez'], '', { gorsel: hayvan('kedi', 'yurur') });
  e('hv2-e16', 'Balıkların vücut örtüsü nedir?', 'Pul', ['Tüy', 'Pul', 'Deri', 'Taş'], '', { gorsel: hayvan('balik', 'pul') });
  e('hv2-e17', 'Kuşların yumurtası vardır.', 'Doğru', ['Yanlış', 'Sadece yazın', 'Doğru', 'Hiçbiri'], '', { gorsel: hayvan('kus', 'kus') });
  e('hv2-e18', 'Arı çiçeklerden ne toplar?', 'Polen', ['Su', 'Polen', 'Taş', 'Kum'], '', { gorsel: hayvan('ari', 'bocek') });
  e('hv2-e19', 'İnek memeli midir?', 'Evet', ['Hayır', 'Kuş', 'Evet', 'Balık'], '', { gorsel: hayvan('inek', 'memeli') });
  e('hv2-e20', 'Hayvanlar beslenir mi?', 'Evet', ['Hayır', 'Sadece bitkiler', 'Evet', 'Sadece insanlar'], '', { gorsel: anl('hv-anlatim-1') });
  e('hv2-e21', 'Köpek havlar mı?', 'Evet', ['Hayır', 'Uçar', 'Evet', 'Yüzer'], '', { gorsel: hayvan('kopek', 'memeli') });
  e('hv2-e22', 'Kelebek uçar mı?', 'Evet', ['Hayır', 'Yüzer', 'Evet', 'Sürünür'], '', { gorsel: hayvan('kelebek', 'bocek') });
  e('hv2-e23', 'Ördek hangi gruptadır?', 'Kuş', ['Balık', 'Memeli', 'Kuş', 'Böcek'], '', { gorsel: hayvan('ordek', 'kus') });
  e('hv2-e24', 'Yılan nasıl hareket eder?', 'Sürünerek', ['Uçarak', 'Sürünerek', 'Yüzerek', 'Zıplayarak'], '', { gorsel: hayvan('yilan', 'surunur') });
  e('hv2-e25', '🎭 Balık karada mı yaşar?', 'Hayır, suda yaşar', ['Evet, karada', 'Hayır, suda yaşar', 'Hem karada hem havada', 'Toprakta'], 'Balıklar solungaçlarıyla suda yaşar!', { gorsel: hayvan('balik', 'su'), sasirtma: true });
  return s;
}

export function hayvanlarTema3(karistir) {
  const hv = hayvanlar(karistir);
  const ekA = hayvanlarEkAlistirma();
  const ekT = hayvanlarEkTest(karistir);

  return {
    id: 'hayvanlar',
    baslik: 'Hayvanlar',
    kazanimKodu: KAZANIM,
    anlatim: hv.anlatim,
    alistirma: yenidenNumarala([...hv.alistirma, ...ekA], 'hv-a'),
    test: yenidenNumarala([...hv.test, ...ekT], 'hv-t'),
  };
}
