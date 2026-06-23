/** Fen Bilimleri T1–T10 — tema başına 100 görselli soru. */

import { hayvanlarTema3 } from './gorev-fen-tema3-questions.mjs';
import { insanVeSaglikTema4 } from './gorev-fen-tema4-questions.mjs';
import { maddeTema5 } from './gorev-fen-tema5-questions.mjs';
import { enerjiTema6 } from './gorev-fen-tema6-questions.mjs';
import { isikTema7 } from './gorev-fen-tema7-questions.mjs';
import { sesTema8 } from './gorev-fen-tema8-questions.mjs';
import { kuvvetVeHareketTema9 } from './gorev-fen-tema9-questions.mjs';
import { yerVeUzayTema10 } from './gorev-fen-tema10-questions.mjs';
import { maddeVeOzellikleri, kuvvetVeHareket, isikVeSes } from './gorev-fen2-questions.mjs';
import { dunyaVeEvren, havaDurumuVeMevsimler, saglikliYasamVeCevre } from './gorev-fen3-questions.mjs';
import { canlilarinSiniflandirilmasi } from './gorev-fen-tema1-questions.mjs';
import { bitkilerTema2 } from './gorev-fen-tema2-questions.mjs';
import { genislet100 } from './tema-konu-builder.mjs';
import { isikSesAyir } from './tema-100-utils.mjs';

const K = {
  HV: 'FEN.2.1.3',
  IS: 'FEN.2.2.4',
  SE: 'FEN.2.2.5',
  MO: 'FEN.2.2.1',
  EN: 'FEN.2.3.4',
  KH: 'FEN.2.2.2',
  SY: 'FEN.2.3.3',
  DE: 'FEN.2.3.1',
};

function anl(sahne) {
  return { tur: 'fen', mod: 'anlatim', sahne };
}
function nesne(n, vurgu) {
  return { tur: 'fen', mod: 'nesne', nesne: n, vurgu };
}
function grup(nesneler, vurgu) {
  return { tur: 'fen', mod: 'grup', nesneler, vurgu };
}
function hayvan(nesne, ozellik) {
  return { tur: 'fen', mod: 'hayvan', nesne, ozellik };
}

function sablonAlistirma(sablonlar, kazanim, onek) {
  return sablonlar.map(([soru, cevap, gorsel], i) => ({
    id: `${onek}-e${i + 1}`,
    kazanimKodu: kazanim,
    tip: 'yazili',
    soru,
    dogruCevap: String(cevap),
    ipucu: '',
    cevapTipi: 'metin',
    gorsel,
  }));
}

function sablonTest(sablonlar, kazanim, onek, karistir) {
  return sablonlar.map(([soru, cevap, secenekler, gorsel], i) => ({
    id: `${onek}-e${i + 1}`,
    kazanimKodu: kazanim,
    tip: 'coktanSecmeli',
    soru,
    dogruCevap: cevap,
    secenekler: karistir(secenekler),
    ipucu: '',
    gorsel,
  }));
}

const HV_EK_A = [
  ['Yun keçisi hangi gruptadır?', 'Memeli', nesne('inek')],
  ['Serçe hangi gruptadır?', 'Kuş', nesne('kus')],
  ['Yun balığı hangi gruptadır?', 'Balık', nesne('balik')],
  ['Sinek hangi gruptadır?', 'Böcek', nesne('kelebek')],
  ['Kaplumbağa karada yaşar mı?', 'Evet', nesne('kaplumbaga')],
  ['Yılan nasıl hareket eder?', 'Sürünerek', hayvan('yilan', 'surunme')],
  ['Ördek hem karada hem suda yaşayabilir mi?', 'Evet', nesne('ordek')],
  ['Arılar ne üretir?', 'Bal', nesne('ari')],
  ['Köpek sadık bir hayvan mıdır?', 'Evet', nesne('kopek')],
  ['Kelebek hangi gruptadır?', 'Böcek', nesne('kelebek')],
  ['Balıklar solungaçla mı nefes alır?', 'Evet', nesne('balik')],
  ['Kuşlar yumurtlayarak mı ürer?', 'Evet', nesne('kus')],
  ['Memeliler yavrularını nasıl besler?', 'Sütle', nesne('kedi')],
  ['Kurbağa hem karada hem suda yaşar mı?', 'Evet', nesne('kurbağa')],
  ['İnek otla beslenir mi?', 'Evet', nesne('inek')],
  ['Kedi etçil midir?', 'Evet', nesne('kedi')],
  ['Balıklar pullu mudur?', 'Evet', nesne('balik')],
  ['Kuşların kanatları vardır.', 'Doğru', nesne('kus')],
  ['Arı çiçeklerden ne toplar?', 'Polen', nesne('ari')],
  ['Köpek havlar mı?', 'Evet', nesne('kopek')],
  ['Yılan sürüngen midir?', 'Evet', nesne('yilan')],
  ['Ördek yüzer mi?', 'Evet', nesne('ordek')],
  ['Kelebek uçar mı?', 'Evet', nesne('kelebek')],
  ['İnek memeli midir?', 'Evet', nesne('inek')],
  ['Hayvanlar beslenir mi?', 'Evet', anl('hv-anlatim-1')],
];

const HV_EK_T = [
  ['Yun keçisi hangi gruptadır?', 'Memeli', ['Kuş', 'Memeli', 'Balık', 'Böcek'], nesne('inek')],
  ['Serçe hangi gruptadır?', 'Kuş', ['Kuş', 'Memeli', 'Balık', 'Sürüngen'], nesne('kus')],
  ['Yun balığı hangi gruptadır?', 'Balık', ['Kuş', 'Memeli', 'Balık', 'Böcek'], nesne('balik')],
  ['Kaplumbağa nerede yaşar?', 'Kara ve su', ['Sadece su', 'Kara ve su', 'Sadece hava', 'Uzay'], nesne('kaplumbaga')],
  ['Arılar ne üretir?', 'Bal', ['Süt', 'Bal', 'Yumurta', 'Taş'], nesne('ari')],
  ['Köpek sadık bir hayvan mıdır?', 'Evet', ['Hayır', 'Bazen', 'Evet', 'Sadece kışın'], nesne('kopek')],
  ['Balıklar nefes almak için ne kullanır?', 'Solungaç', ['Akciğer', 'Solungaç', 'Burun', 'Kulak'], nesne('balik')],
  ['Memeliler yavrularını nasıl besler?', 'Sütle', ['Yaprakla', 'Sütle', 'Taşla', 'Suyla'], nesne('kedi')],
  ['Kelebek hangi gruptadır?', 'Böcek', ['Kuş', 'Memeli', 'Böcek', 'Balık'], nesne('kelebek')],
  ['İnek neyle beslenir?', 'Ot', ['Et', 'Ot', 'Balık', 'Taş'], nesne('inek')],
  ['Kuşlar nasıl hareket eder?', 'Uçarak', ['Yüzerek', 'Uçarak', 'Sürünerek', 'Yürüyerek'], nesne('kus')],
  ['Yılan hangi gruptadır?', 'Sürüngen', ['Kuş', 'Memeli', 'Sürüngen', 'Balık'], nesne('yilan')],
  ['Ördek yüzer mi?', 'Evet', ['Hayır', 'Sadece uçar', 'Evet', 'Sadece yürür'], nesne('ordek')],
  ['Kurbağa hangi ortamlarda yaşar?', 'Kara ve su', ['Sadece kara', 'Kara ve su', 'Sadece hava', 'Uzay'], nesne('kurbağa')],
  ['Kedi etçil midir?', 'Evet', ['Hayır', 'Sadece ot yer', 'Evet', 'Hiç yemez'], nesne('kedi')],
  ['Balıkların vücut örtüsü nedir?', 'Pul', ['Tüy', 'Pul', 'Deri', 'Taş'], nesne('balik')],
  ['Kuşların yumurtası vardır.', 'Doğru', ['Yanlış', 'Sadece yazın', 'Doğru', 'Hiçbiri'], nesne('kus')],
  ['Arı çiçeklerden ne toplar?', 'Polen', ['Su', 'Polen', 'Taş', 'Kum'], nesne('ari')],
  ['İnek memeli midir?', 'Evet', ['Hayır', 'Kuş', 'Evet', 'Balık'], nesne('inek')],
  ['Hayvanlar beslenir mi?', 'Evet', ['Hayır', 'Sadece bitkiler', 'Evet', 'Sadece insanlar'], anl('hv-anlatim-1')],
  ['Köpek havlar mı?', 'Evet', ['Hayır', 'Uçar', 'Evet', 'Yüzer'], nesne('kopek')],
  ['Kelebek uçar mı?', 'Evet', ['Hayır', 'Yüzer', 'Evet', 'Sürünür'], nesne('kelebek')],
  ['Ördek hangi gruptadır?', 'Kuş', ['Balık', 'Memeli', 'Kuş', 'Böcek'], nesne('ordek')],
  ['Yılan nasıl hareket eder?', 'Sürünerek', ['Uçarak', 'Sürünerek', 'Yüzerek', 'Zıplayarak'], hayvan('yilan', 'surunme')],
  ['Hayvanlar canlı mıdır?', 'Evet', ['Hayır', 'Cansız', 'Evet', 'Bazen'], anl('hv-anlatim-1')],
];

const SY_EK_A = [
  ['Dişlerimizi günde kaç kez fırçalamalıyız?', 'En az iki kez', nesne('dis-fircasi')],
  ['Bol su içmek sağlığımız için önemli midir?', 'Evet', nesne('su')],
  ['Meyve ve sebze yemek sağlıklı mıdır?', 'Evet', grup(['meyve', 'sebze'])],
  ['Spor yapmak vücudumuza faydalı mıdır?', 'Evet', nesne('bisiklet')],
  ['Uyumak vücudumuzu dinlendirir mi?', 'Evet', nesne('gece')],
  ['Ellerimizi yemekten önce yıkamalı mıyız?', 'Evet', nesne('sabun')],
  ['Güneşte çok kalmak cildimize zarar verir mi?', 'Evet', nesne('gunes-gozlugu')],
  ['Düzenli kahvaltı yapmak önemli midir?', 'Evet', nesne('corba')],
  ['Aşı olmak bizi hastalıklardan korur mu?', 'Evet', nesne('asi')],
  ['Temiz hava solumak sağlıklı mıdır?', 'Evet', nesne('agac')],
  ['Gözlerimizi güneşten korumalı mıyız?', 'Evet', nesne('gunes-gozlugu')],
  ['Dengeli beslenmek sağlıklı büyümeyi sağlar mı?', 'Evet', grup(['et', 'sut', 'yumurta'])],
  ['Yürüyüş yapmak sağlıklı bir alışkanlık mıdır?', 'Evet', nesne('bisiklet')],
  ['Tatlıyı çok yemek dişlere zarar verir mi?', 'Evet', nesne('cikolata')],
  ['Bol uyku çocukların büyümesine yardım eder mi?', 'Evet', nesne('gece')],
  ['Temiz kıyafet giymek hijyen için önemli midir?', 'Evet', nesne('corap')],
  ['Parklarda oynamak sağlığımıza iyi gelir mi?', 'Evet', nesne('agac')],
  ['Vitaminli besinler bağışıklığı güçlendirir mi?', 'Evet', nesne('elma')],
  ['Hasta olduğumuzda doktora gitmeli miyiz?', 'Evet', nesne('doktor')],
  ['Kirli ellerle yemek yemek mikrop bulaştırır mı?', 'Evet', nesne('sabun')],
  ['Sağlıklı yaşam için spor önemli midir?', 'Evet', nesne('bisiklet')],
  ['Çöpleri yere atmamak çevreyi korur mu?', 'Evet', nesne('cop-kutusu')],
  ['Güneş ışığı kemikler için faydalı mıdır?', 'Evet', nesne('gunes')],
  ['Stresten kurtulmak için dinlenmek faydalı mıdır?', 'Evet', nesne('yastik')],
  ['Sağlıklı yaşam için beslenme önemli midir?', 'Evet', anl('sy-anlatim-1')],
];

const SY_EK_T = SY_EK_A.map(([s, c, g]) => [s, c, [c, 'Hayır', 'Gereksiz', 'Fark etmez'], g]);

const MO_EK_A = [
  ['Cam kırılgan bir maddedir.', 'Doğru', nesne('cam')],
  ['Pamuk yumuşak bir maddedir.', 'Doğru', nesne('pamuk')],
  ['Demir sert bir maddedir.', 'Doğru', nesne('demir-civi')],
  ['Lastik esnek bir maddedir.', 'Doğru', nesne('lastik')],
  ['Elmanın rengini gözümüzle görürüz.', 'Doğru', nesne('elma')],
  ['Limonun tadını dilimizle alırız.', 'Doğru', nesne('limon')],
  ['Zilin sesini kulağımızla duyarız.', 'Doğru', nesne('zil')],
  ['Sabun kaygan bir maddedir.', 'Doğru', nesne('sabun')],
  ['Taş sert bir maddedir.', 'Doğru', nesne('tas')],
  ['Balon şişirilebilir bir maddedir.', 'Doğru', nesne('balon')],
  ['Ayna pürüzsüz bir yüzeye sahiptir.', 'Doğru', nesne('ayna')],
  ['Zımpara kağıdı pürüzlüdür.', 'Doğru', nesne('zimpara')],
  ['Çikolatanın kokusunu burnumuzla alırız.', 'Doğru', nesne('cikolata')],
  ['Yün kazak yumuşak bir maddedir.', 'Doğru', nesne('yun-kazak')],
  ['Bilye sert ve pürüzsüzdür.', 'Doğru', nesne('bilye')],
  ['Kağıt havlu emici bir maddedir.', 'Doğru', nesne('kagit-havlu')],
  ['Oyun hamuru yumuşak ve esnektir.', 'Doğru', nesne('oyun-hamuru')],
  ['Ceviz kırılgan bir maddedir.', 'Doğru', nesne('ceviz')],
  ['Çayın kokusunu burnumuzla alırız.', 'Doğru', nesne('cay')],
  ['Telefon sert bir maddeden yapılmıştır.', 'Doğru', nesne('telefon')],
  ['Masanın yüzeyi serttir.', 'Doğru', nesne('masa')],
  ['Sünger esnek bir maddedir.', 'Doğru', nesne('sunger')],
  ['Gülün kokusunu burnumuzla alırız.', 'Doğru', nesne('gul')],
  ['Beş duyumuz maddeleri tanımamıza yardım eder.', 'Doğru', anl('mo-anlatim-1')],
  ['Maddelerin farklı özellikleri vardır.', 'Doğru', anl('mo-anlatim-2')],
];

const MO_EK_T = MO_EK_A.map(([s, c, g]) => [s, c, [c, 'Yanlış', 'Bazen', 'Fark etmez'], g]);

const EN_EK_A = [
  ['Güneş bir enerji kaynağıdır.', 'Doğru', nesne('gunes')],
  ['Rüzgar türbinleri elektrik üretir.', 'Doğru', nesne('ruzgar-gulu')],
  ['Pil taşınabilir enerji kaynağıdır.', 'Doğru', nesne('pil')],
  ['Güneş panelleri güneş enerjisini elektriğe çevirir.', 'Doğru', nesne('gunes-paneli')],
  ['Yiyecekler vücudumuza enerji verir.', 'Doğru', nesne('elma')],
  ['Benzin araçlara enerji sağlar.', 'Doğru', nesne('araba')],
  ['Odun yakıldığında ısı enerjisi oluşur.', 'Doğru', nesne('ates')],
  ['Mum yandığında ışık ve ısı enerjisi verir.', 'Doğru', nesne('mum')],
  ['Bitkiler güneş enerjisini kullanır.', 'Doğru', nesne('gunes')],
  ['Elektrikli lambalar yapay ışık verir.', 'Doğru', nesne('ampul')],
  ['Enerji tasarrufu önemlidir.', 'Doğru', nesne('ampul')],
  ['Güneş en büyük doğal enerji kaynağıdır.', 'Doğru', nesne('gunes')],
  ['Rüzgar enerjisi yenilenebilir bir enerjidir.', 'Doğru', nesne('ruzgar-gulu')],
  ['Piller bitince yenisiyle değiştirilir.', 'Doğru', nesne('pil')],
  ['Enerji olmadan ışık yanmaz.', 'Doğru', nesne('ampul')],
  ['Yemek yemek bize enerji verir.', 'Doğru', nesne('corba')],
  ['Güneş enerjisi temiz bir enerjidir.', 'Doğru', nesne('gunes-paneli')],
  ['Elektrik fişe takılınca çalışır.', 'Doğru', nesne('fis')],
  ['Isı enerjisi bizi ısıtır.', 'Doğru', nesne('ates')],
  ['Güneşten gelen enerji bitmez.', 'Doğru', nesne('gunes')],
  ['Enerji hareket ettirmek için kullanılır.', 'Doğru', nesne('bisiklet')],
  ['Enerji günlük yaşamımız için gereklidir.', 'Doğru', anl('hm-anlatim-1')],
  ['Rüzgar uçurtmayı hareket ettirir.', 'Doğru', nesne('ucurtma')],
  ['Yiyecekleri pişirmek ısı enerjisi kullanır.', 'Doğru', nesne('ocak')],
  ['Enerji kaynakları günlük hayatta kullanılır.', 'Doğru', nesne('fis')],
];

const EN_EK_T = EN_EK_A.map(([s, c, g]) => [s, c, [c, 'Yanlış', 'Bazen', 'Hiçbiri'], g]);

const IS_EK_A = [
  ['Güneş doğal bir ışık kaynağıdır.', 'Doğru', nesne('gunes')],
  ['Ay kendi ışığını üretmez.', 'Doğru', nesne('ay')],
  ['Lamba yapay ışık kaynağıdır.', 'Doğru', nesne('ampul')],
  ['Karanlıkta nesneleri göremeyiz.', 'Doğru', nesne('gece')],
  ['Ayna ışığı yansıtır.', 'Doğru', nesne('ayna')],
  ['Güneş gözlüğü gözlerimizi korur.', 'Doğru', nesne('gunes-gozlugu')],
  ['Mum yandığında ışık verir.', 'Doğru', nesne('mum')],
  ['Yıldızlar uzaktan ışık verir.', 'Doğru', nesne('yildiz')],
  ['Fener kamp ışığı sağlar.', 'Doğru', nesne('fener')],
  ['Gündüz Güneş ışığı vardır.', 'Doğru', nesne('gunduz')],
  ['Işık düz çizgiler halinde yayılır.', 'Doğru', anl('is-anlatim-1')],
  ['Güneşe doğrudan bakmak zararlıdır.', 'Doğru', nesne('gunes-gozlugu')],
  ['El feneri yapay ışık kaynağıdır.', 'Doğru', nesne('fener')],
  ['Ay Güneş ışığını yansıtır.', 'Doğru', grup(['ay', 'gunes'])],
  ['Gece gökyüzünde yıldızlar görünür.', 'Doğru', nesne('yildiz')],
  ['Işık olmadan renkleri ayırt edemeyiz.', 'Doğru', nesne('goz-kapali')],
  ['Gökkuşağı ışığın kırılmasıyla oluşur.', 'Doğru', nesne('gokkusagi')],
  ['Şimşek kısa süreli ışık verir.', 'Doğru', nesne('simsek')],
  ['Güneş bitkiler için ışık kaynağıdır.', 'Doğru', nesne('gunes')],
  ['Karanlık odada lamba yakarız.', 'Doğru', nesne('ampul')],
  ['Ayna yüzeyinde yansıma olur.', 'Doğru', nesne('ayna')],
  ['Görmek için ışığa ihtiyacımız vardır.', 'Doğru', anl('is-anlatim-1')],
  ['Gündüz aydınlıktır.', 'Doğru', nesne('gunduz')],
  ['Gece karanlıktır.', 'Doğru', nesne('gece')],
  ['Işık hızla hareket eder.', 'Doğru', anl('is-anlatim-2')],
];

const IS_EK_T = IS_EK_A.map(([s, c, g]) => [s, c, [c, 'Yanlış', 'Bazen', 'Hiçbiri'], g]);

const SE_EK_A = [
  ['Kuş sesi doğal bir sestir.', 'Doğru', nesne('kus')],
  ['Piyano yapay ses çıkarır.', 'Doğru', nesne('piyano')],
  ['Sesleri kulaklarımızla duyarız.', 'Doğru', nesne('kulak')],
  ['Yüksek ses kulaklarımıza zarar verebilir.', 'Doğru', nesne('kulaklik')],
  ['Zil çaldığında ses duyarız.', 'Doğru', nesne('zil')],
  ['Rüzgarın sesi doğaldır.', 'Doğru', nesne('ruzgar')],
  ['Gitar çalmak yapay ses üretir.', 'Doğru', nesne('gitar')],
  ['Horoz sabah sesi çıkarır.', 'Doğru', nesne('horoz')],
  ['Ses kaynağı titreşimle oluşur.', 'Doğru', anl('is-anlatim-3')],
  ['Ambulans siren sesi çıkarır.', 'Doğru', nesne('ambulans')],
  ['Yağmur damlalarının sesi doğaldır.', 'Doğru', nesne('yagmur')],
  ['Flüt üflemeli bir enstrümandır.', 'Doğru', nesne('flut')],
  ['Korna yüksek ses çıkarır.', 'Doğru', nesne('korna')],
  ['Televizyon sesi yapaydır.', 'Doğru', nesne('televizyon')],
  ['Köpek havlaması doğal sestir.', 'Doğru', nesne('kopek')],
  ['Tren düdüğü yapay sestir.', 'Doğru', nesne('tren')],
  ['Müzik dinlemek kulaklarımızla olur.', 'Doğru', nesne('kulak')],
  ['Arı vızıltısı doğal sestir.', 'Doğru', nesne('ari')],
  ['Ses boşlukta yayılır.', 'Doğru', anl('is-anlatim-3')],
  ['Her sesin bir kaynağı vardır.', 'Doğru', anl('is-anlatim-3')],
  ['Fısıldamak düşük sesle konuşmaktır.', 'Doğru', nesne('fisilda')],
  ['Bağırmak yüksek sestir.', 'Doğru', nesne('bagirma')],
  ['Sessizlikte ses duymayız.', 'Doğru', nesne('sessizlik')],
  ['Deniz dalgalarının sesi doğaldır.', 'Doğru', nesne('deniz')],
  ['Şelale suyun sesi doğaldır.', 'Doğru', nesne('selale')],
];

const SE_EK_T = SE_EK_A.map(([s, c, g]) => [s, c, [c, 'Yanlış', 'Bazen', 'Hiçbiri'], g]);

const KH_EK_A = [
  ['İtme kuvveti nesneyi uzağa götürür.', 'Doğru', nesne('market-arabasi')],
  ['Çekme kuvveti nesneyi kendimize doğru getirir.', 'Doğru', nesne('halat')],
  ['Fren yapmak yavaşlatma kuvvetidir.', 'Doğru', nesne('bisiklet')],
  ['Topa vurmak yön değiştirir.', 'Doğru', nesne('top')],
  ['Mıknatıs demir çekmek için kuvvet uygular.', 'Doğru', nesne('miknatis')],
  ['Salıncağı itince hareket eder.', 'Doğru', nesne('salincak')],
  ['Uçurtmayı rüzgar iter.', 'Doğru', nesne('ucurtma')],
  ['Çekiç çivi çakmak için kuvvet kullanır.', 'Doğru', nesne('cekic')],
  ['Otobüs motoru itme kuvveti uygular.', 'Doğru', nesne('otobus')],
  ['Raketle topa vurmak kuvvet uygular.', 'Doğru', nesne('raket')],
  ['Bebek arabasını itmek itme kuvvetidir.', 'Doğru', nesne('bebek-arabasi')],
  ['Çekmeceyi çekmek çekme kuvvetidir.', 'Doğru', nesne('cekmece')],
  ['Kuvvet hareketi başlatabilir.', 'Doğru', anl('kh-anlatim-1')],
  ['Kuvvet hareketi durdurabilir.', 'Doğru', anl('kh-anlatim-2')],
  ['Kuvvet yön değiştirebilir.', 'Doğru', anl('kh-anlatim-3')],
  ['Dönme dolap dönerken kuvvet uygulanır.', 'Doğru', nesne('donme-dolap')],
  ['Rüzgargülü rüzgar kuvvetiyle döner.', 'Doğru', nesne('ruzgar-gulu')],
  ['Fişi çekmek çekme kuvvetidir.', 'Doğru', nesne('fis')],
  ['Kapıyı itmek itme kuvvetidir.', 'Doğru', nesne('demir-kapi')],
  ['Bisiklet pedalı çevirmek kuvvet uygular.', 'Doğru', nesne('bisiklet')],
  ['Top yuvarlanırken sürtünme etkiler.', 'Doğru', nesne('top')],
  ['Kuvvet olmadan hareket başlamaz.', 'Doğru', anl('kh-anlatim-1')],
  ['Yerçekimi bizi aşağı çeker.', 'Doğru', nesne('dunya')],
  ['Kuvvet günlük hayatta sık kullanılır.', 'Doğru', anl('kh-anlatim-1')],
  ['Ağır kutuyu kaldırmak kuvvet gerektirir.', 'Doğru', nesne('kutu')],
];

const KH_EK_T = KH_EK_A.map(([s, c, g]) => [s, c, [c, 'Yanlış', 'Bazen', 'Hiçbiri'], g]);

const DE_EK_A = [
  ['Dünya küre şeklindedir.', 'Doğru', nesne('dunya')],
  ['Ay Dünya\'nın uydusudur.', 'Doğru', nesne('ay')],
  ['Güneş bir yıldızdır.', 'Doğru', nesne('gunes')],
  ['Gece gökyüzünde yıldızlar görünür.', 'Doğru', nesne('yildiz')],
  ['Dünya Güneş etrafında döner.', 'Doğru', nesne('donen-dunya')],
  ['Uzayda gezegenler vardır.', 'Doğru', nesne('uzay')],
  ['Dünya\'da gece ve gündüz oluşur.', 'Doğru', nesne('gunduz')],
  ['Astronotlar uzaya gider.', 'Doğru', nesne('astronot')],
  ['Roket uzaya fırlatılır.', 'Doğru', nesne('roket')],
  ['Dünya\'nın yüzeyinde su ve kara vardır.', 'Doğru', nesne('mavi-deniz')],
  ['Ay\'da hava yoktur.', 'Doğru', nesne('ay')],
  ['Güneş Dünya\'yı ısıtır.', 'Doğru', nesne('gunes')],
  ['Dünya kendi etrafında döner.', 'Doğru', nesne('topac')],
  ['Yıldızlar uzaktan parlar.', 'Doğru', nesne('yildiz')],
  ['Uzay boşluğu derin ve geniştir.', 'Doğru', nesne('uzay')],
  ['Teleskop uzaktaki cisimleri gösterir.', 'Doğru', nesne('teleskop')],
  ['Dünya mavi gezegen olarak bilinir.', 'Doğru', nesne('dunya')],
  ['Gece karanlıktır.', 'Doğru', nesne('gece')],
  ['Gündüz aydınlıktır.', 'Doğru', nesne('gunduz')],
  ['Uzayda yerçekimi farklı olabilir.', 'Doğru', nesne('astronot')],
  ['Dünya ve uzay birbirine bağlıdır.', 'Doğru', anl('de-anlatim-1')],
  ['Güneş sistemi birçok gezegenden oluşur.', 'Doğru', nesne('gunes-sistemi')],
  ['Ay\'ın şekli değişir.', 'Doğru', nesne('ay-evreleri')],
  ['Gezegenler Güneş etrafında döner.', 'Doğru', nesne('gunes-sistemi')],
  ['Dünya üzerinde yaşadığımız gezegendir.', 'Doğru', nesne('dunya')],
];

const DE_EK_T = DE_EK_A.map(([s, c, g]) => [s, c, [c, 'Yanlış', 'Bazen', 'Hiçbiri'], g]);

export { canlilarinSiniflandirilmasi };
export { bitkilerTema2 as bitkilerTema };

export function hayvanlarTema(karistir) {
  return hayvanlarTema3(karistir);
}

export function insanVeSaglik(karistir) {
  return insanVeSaglikTema4(karistir);
}

export function maddeTema(karistir) {
  return maddeTema5(karistir);
}

export function enerjiTema(karistir) {
  return enerjiTema6(karistir);
}

export function isikTema(karistir) {
  return isikTema7(karistir);
}

export function sesTema(karistir) {
  return sesTema8(karistir);
}

export function kuvvetVeHareketTema(karistir) {
  return kuvvetVeHareketTema9(karistir);
}

export function yerVeUzay(karistir) {
  return yerVeUzayTema10(karistir);
}

export {
  SY_EK_A,
  SY_EK_T,
  MO_EK_A,
  MO_EK_T,
  EN_EK_A,
  EN_EK_T,
  IS_EK_A,
  IS_EK_T,
  SE_EK_A,
  SE_EK_T,
  KH_EK_A,
  KH_EK_T,
  DE_EK_A,
  DE_EK_T,
};

export const FEN_TEMALAR = [
  { n: 1, dosya: 'canlilarin-siniflandirilmasi.json', baslik: 'Canlıların Sınıflandırılması', fn: canlilarinSiniflandirilmasi },
  { n: 2, dosya: 'bitkiler.json', baslik: 'Bitkiler', fn: bitkilerTema2 },
  { n: 3, dosya: 'hayvanlar.json', baslik: 'Hayvanlar', fn: hayvanlarTema },
  { n: 4, dosya: 'insan-ve-saglik.json', baslik: 'İnsan ve Sağlık', fn: insanVeSaglik },
  { n: 5, dosya: 'madde.json', baslik: 'Madde', fn: maddeTema },
  { n: 6, dosya: 'enerji.json', baslik: 'Enerji', fn: enerjiTema },
  { n: 7, dosya: 'isik.json', baslik: 'Işık', fn: isikTema },
  { n: 8, dosya: 'ses.json', baslik: 'Ses', fn: sesTema },
  { n: 9, dosya: 'kuvvet-ve-hareket.json', baslik: 'Kuvvet ve Hareket', fn: kuvvetVeHareketTema },
  { n: 10, dosya: 'yer-ve-uzay.json', baslik: 'Yer ve Uzay', fn: yerVeUzay },
];
