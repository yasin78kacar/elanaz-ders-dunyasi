/**
 * İçerik üretim scripti.
 *
 * gorsel alanı türleri:
 * - string (onluk-blok): "onluk-blok-47" → OnlukBlokIllustration (GOREV-2)
 * - string (sabit): "sayi-kartlari", "elma-gruplari" vb.
 * - { tur: "sayi-seridi", baslangic, adim, adimSayisi, vurgulananlar? } (GOREV-3)
 * - { tur: "nesne", sahne } → GeoGorsel sahne anahtarı (GOREV-3E)
 *   [GÖRSEL: tarif] brifinglerinde nesne türüne eşlenir.
 * - { tur: "kap", sahne } → G5mGorsel (GOREV-3I sıvı ölçme kap illüstrasyonları)
 * - { tur: "oruntu", elemanlar, adimEtiketi? } → OruntuGorsel (GOREV-4A)
 * - { tur: "tahmin-etme", sahne, tahmin?, gercek? } → TahminEtmeGorsel (GOREV-4A)
 * - { tur: "islem", mod, ... } → IslemGorsel (TEMA3 toplama/çıkarma)
 * - { tur: "olcme", mod, ... } → OlcmeGorsel (Tema 5 ölçme)
 * - { tur: "veri", mod, ... } → VeriGorsel (TEMA5 veri)
 * - { tur: "kesir", mod, ... } → KesirGorsel (TEMA6 kesirler)
 * - { tur: "turkce", mod, ... } → TurkceGorsel (Türkçe Tema 1)
 * - { tur: "fen", mod, ... } → FenGorsel (Fen Bilimleri Tema 1)
 * - { tur: "hb", mod, ... } → HbGorsel (Hayat Bilgisi Tema 1)
 * - { tur: "okuma-kosesi", sahne } → OkumaKosesiGorsel (Okuma Köşesi hikâyeleri)
 * - { tur: "gorsel-sanatlar", ... } → GorselSanatlarGorsel
 * - { tur: "zeka-dikkat", ... } → ZekaDikkatGorsel
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { gorev2bAlistirma, gorev2bTest } from './gorev-2b-questions.mjs';
import {
  gorev3bOnlukAlistirma,
  gorev3bOnlukTest,
  gorev3bSayiAlistirma,
  gorev3bSayiTest,
} from './gorev-3b-questions.mjs';
import { geometrikCisimler, gorev3RitmikTablo, sayiSeridiGorselEkle } from './gorev-3-content.mjs';
import { gorev3cAlistirma, gorev3cTest } from './gorev-3c-questions.mjs';
import {
  gorev3dOnlukAlistirma,
  gorev3dOnlukTest,
  gorev3dSayiAlistirma,
  gorev3dSayiTest,
} from './gorev-3d-questions.mjs';
import { geoGorselEkle } from './gorev-3e-gorseller.mjs';
import { geometrikCisimModelleri } from './gorev-3f-questions.mjs';
import { geometrikSekilModelleri } from './gorev-3g-questions.mjs';
import { bicimselOzellikler } from './gorev-3h-questions.mjs';
import { siviOlcme } from './gorev-3i-questions.mjs';
import { oruntu, sayiDogrusu, tahminEtme } from './gorev-4a-questions.mjs';
import { cikarma, toplama } from './gorev-mat-tema3-questions.mjs';
import { siviMiktari, zaman } from './gorev-tema4-questions.mjs';
import { bolme, carpma } from './gorev-mat-tema4-questions.mjs';
import { tartma, uzunlukOlcme } from './gorev-mat-tema5-questions.mjs';
import { grafikOkuma, tabloOkuma, veriToplama } from './gorev-tema5-questions.mjs';
import { basitKesirler, esitParcalaraBolme, yarimVeCeyrek } from './gorev-tema6-questions.mjs';
import {
  cumleBilgisi,
  kelimeBilgisi,
  noktalamaVeYazim,
  okumaAnlama,
  seslerVeHeceler,
} from './gorev-turkce1-questions.mjs';
import { bilgiMetni, hikayeMetni, siir } from './gorev-turkce2-questions.mjs';
import { dinlemeVeKonusma, sozcukVeDilBilgisi, yazmaBecerileri } from './gorev-turkce3-questions.mjs';
import { kelimeVeAnlamBilgisiIleri, metinAnlamaVeYorumlama, yazmaVeAnlatimIleri } from './gorev-turkce4-questions.mjs';
import { bitkiler, canlilarVeCansizlar, hayvanlar } from './gorev-fen1-questions.mjs';
import { canlilar } from './gorev-fen-tema1-questions.mjs';
import { bitkilerTema2 } from './gorev-fen-tema2-questions.mjs';
import { isikVeSes, kuvvetVeHareket, maddeVeOzellikleri } from './gorev-fen2-questions.mjs';
import { dunyaVeEvren, havaDurumuVeMevsimler, saglikliYasamVeCevre } from './gorev-fen3-questions.mjs';
import { aileVeArkadaslik, okulVeSinif, toplumVeCevre } from './gorev-hb1-questions.mjs';
import { aileDuygular } from './gorev-hayat-tema1-questions.mjs';
import { guvenliYasam, mesleklerVeCalismaHayati, saglikVeTemizlik } from './gorev-hb2-questions.mjs';
import { dogalAfetlerVeKorunma, tarihVeKulturumuz, ulkemizVeVatandaslik } from './gorev-hb3-questions.mjs';
import { alfabeVeRenkler } from './gorev-ing1-questions.mjs';
import { sayilarVeSinifEsyalari } from './gorev-ing2-questions.mjs';
import { gunlerVeAylar } from './gorev-ing3-questions.mjs';
import { selamlasmaVeAile } from './gorev-ing-tema3-questions.mjs';
import { kisaHikayeler } from './gorev-ing4a-questions.mjs';
import { basitDiyaloglar } from './gorev-ing4b-questions.mjs';
import { ingilizceSarkilar } from './gorev-ing4c-questions.mjs';
import { giyimEsyalari, mevsimlerIng } from './gorev-ing-tema4-clothes-questions.mjs';
import { renkler, duygular } from './gorev-ing-tema4-questions.mjs';
import { hayvanlar as hayvanlarIng, yiyecekler, sekiller, vucudBolumleri } from './gorev-ing-tema5-questions.mjs';
import { eylemler, okulHobilerGunluk } from './gorev-ing-tema6-questions.mjs';
import { giyimEsyalari as giyimT7, havaDurumu as havaT7, mevsimlerIng as mevsimT7, oyuncaklar } from './gorev-ing-tema7-questions.mjs';
import { spor, meslekler, enstrumanlar, ulasim } from './gorev-ing-tema8-questions.mjs';
import { tatiller, odalar, dersler, sayilar1120 } from './gorev-ing-tema9-questions.mjs';
import { sporlar, enstrumanlar, meslekler, ulasim } from './gorev-ing-tema8-questions.mjs';
import { yazTuruHikaye, yazTuruSiir } from './gorev-turkce5-questions.mjs';
import { olaySirasiMetin, olaySirasiZaman } from './gorev-turkce8-questions.mjs';
import { okumaKosesiHikayeleri } from './gorev-okuma-kosesi-hikayeler.mjs';
import { gorselSanatlar } from './gorev-gorsel-sanatlar-questions.mjs';
import { zekaVeDikkat } from './gorev-zeka-dikkat-questions.mjs';
import { spawnSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../content/sinif2/matematik');
const turkceDir = join(__dirname, '../content/sinif2/turkce');
const fenDir = join(__dirname, '../content/sinif2/fen-bilimleri');
const hbDir = join(__dirname, '../content/sinif2/hayat-bilgisi');
const ingDir = join(__dirname, '../content/sinif2/ingilizce');
const gsDir = join(__dirname, '../content/sinif2/gorsel-sanatlar');
const zdDir = join(__dirname, '../content/sinif2/zeka-dikkat');
mkdirSync(contentDir, { recursive: true });
mkdirSync(turkceDir, { recursive: true });
mkdirSync(fenDir, { recursive: true });
mkdirSync(hbDir, { recursive: true });
mkdirSync(ingDir, { recursive: true });
mkdirSync(gsDir, { recursive: true });
mkdirSync(zdDir, { recursive: true });

function karistir(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Tema başına 4 alt konu × 25 soru (13 alıştırma + 12 test) */
function konuParca(konuFn, a = 13, t = 12) {
  const k = konuFn(karistir);
  return { ...k, alistirma: k.alistirma.slice(0, a), test: k.test.slice(0, t) };
}

function ritmikAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: 'MAT.2.1.3',
      tip: 'yazili',
      soru,
      dogruCevap: String(cevap),
      ipucu,
      cevapTipi: 'sayi',
      ...extra,
    });

  const ikiser = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
  ikiser.forEach((n, i) => {
    if (i < ikiser.length - 1) {
      ekle(
        `rs-a-ik-${i}`,
        `Elanaz ikişer sayıyor: ${ikiser.slice(0, i + 1).join(', ')}… Sıradaki sayı kaç?`,
        ikiser[i + 1],
        `${n}'ye 2 ekle.`,
      );
    }
  });

  const beser = [5, 10, 15, 20, 25, 30, 35, 40];
  beser.forEach((n, i) => {
    if (i < beser.length - 1) {
      ekle(
        `rs-a-bes-${i}`,
        `Beşer ritmik sayarken ${n}'den sonra hangi sayı gelir?`,
        beser[i + 1],
        `${n}'ye 5 ekle.`,
      );
    }
  });

  const onar = [10, 20, 30, 40, 50, 60, 70, 80];
  onar.forEach((n, i) => {
    if (i < onar.length - 1) {
      ekle(
        `rs-a-on-${i}`,
        `Onar onar sayarken ${n}'den sonra hangi sayı gelir?`,
        onar[i + 1],
        `${n}'ye 10 ekle.`,
      );
    }
  });

  ekle(
    'rs-a-sas-1',
    'Elanaz ikişer sayıyor: 2, 4, 6, 8… Aşağıdakilerden hangisi bu dizide YOKTUR?',
    '9',
    'İkişer sayıda tüm sayılar çifttir. Tuzağı fark et, bir daha dikkatle oku!',
    { cevapTipi: 'metin', sasirtma: true },
  );
  ekle(
    'rs-a-sas-2',
    'Beşer sayarken 10, 15, 20… dizisinde 18 sayısı var mı? Varsa "evet", yoksa "hayır" yaz.',
    'hayır',
    'Beşer dizisinde sayılar 5\'in katıdır. Soruyu tekrar oku!',
    { cevapTipi: 'metin', sasirtma: true },
  );
  ekle(
    'rs-a-sas-3',
    'Onar sayarken 30\'dan sonra 50 mi gelir? "evet" veya "hayır" yaz.',
    'hayır',
    'Onar giderken her adımda 10 eklenir: 30, 40… Dikkatle düşün!',
    { cevapTipi: 'metin', sasirtma: true },
  );

  return sorular.slice(0, 22);
}

function ritmikTest() {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id,
      kazanimKodu: 'MAT.2.1.3',
      tip: 'coktanSecmeli',
      soru,
      dogruCevap: cevap,
      secenekler: karistir(secenekler),
      ipucu,
      ...extra,
    });

  ekle('rs-t-1', 'İkişer ritmik sayarken 14\'ten sonra hangi sayı gelir?', '16', ['15', '16', '17', '18'], '14\'e 2 ekle.');
  ekle('rs-t-2', 'Beşer ritmik sayarken 35\'ten sonra hangi sayı gelir?', '40', ['36', '38', '40', '45'], '35\'e 5 ekle.');
  ekle('rs-t-3', 'Onar ritmik sayarken 60\'tan sonra hangi sayı gelir?', '70', ['65', '70', '80', '90'], '60\'a 10 ekle.');
  ekle('rs-t-4', 'Hangisi ikişer ritmik sayma dizisidir?', '2, 4, 6, 8', ['1, 2, 3, 4', '2, 4, 6, 8', '5, 10, 15', '3, 6, 9'], 'Her adımda 2 eklenir.');
  ekle('rs-t-5', 'Elanaz beşer sayıyor: 5, 10, 15… Sıradaki sayı?', '20', ['16', '18', '20', '25'], '15\'e 5 ekle.');
  ekle('rs-t-6', 'İkişer sayarken 20\'den sonra hangi sayı gelir?', '22', ['21', '22', '23', '24'], '20\'ye 2 ekle.');
  ekle('rs-t-7', 'Onar sayarken 40\'tan sonra hangi sayı gelir?', '50', ['45', '50', '55', '60'], '40\'a 10 ekle.');
  ekle('rs-t-8', 'Beşer sayarken 45\'ten sonra hangi sayı gelir?', '50', ['46', '48', '50', '55'], '45\'e 5 ekle.');
  ekle('rs-t-9', 'İkişer sayarken 8\'den sonra hangi sayı gelir?', '10', ['9', '10', '11', '12'], '8\'e 2 ekle.');
  ekle('rs-t-10', 'Onar sayarken 20\'den sonra hangi sayı gelir?', '30', ['25', '30', '40', '50'], '20\'ye 10 ekle.');
  ekle('rs-t-11', 'Elanaz\'ın 3 kırmızı, 3 mavi çıkartması var. İkişer sayarsa kaç adım sayar?', '3', ['2', '3', '4', '6'], '6 çıkartmayı 2\'li gruplara böl.');
  ekle('rs-t-12', 'Beşer dizisinde 25\'ten sonra hangi sayı gelir?', '30', ['26', '28', '30', '35'], '25\'e 5 ekle.');
  ekle('rs-t-13', 'İkişer dizisinde 18\'den sonra hangi sayı gelir?', '20', ['19', '20', '21', '22'], '18\'e 2 ekle.');
  ekle('rs-t-14', 'Onar dizisinde 90\'dan sonra hangi sayı gelir?', '100', ['95', '100', '110', '120'], '90\'a 10 ekle.');
  ekle('rs-t-15', 'Beşer dizisinde 50\'den sonra hangi sayı gelir?', '55', ['51', '53', '55', '60'], '50\'ye 5 ekle.');
  ekle('rs-t-16', 'İkişer sayarken 30\'dan sonra hangi sayı gelir?', '32', ['31', '32', '33', '34'], '30\'a 2 ekle.');
  ekle('rs-t-17', 'Hangisi beşer ritmik sayma DEĞİLDİR?', '2, 4, 6, 8', ['5, 10, 15', '10, 15, 20', '2, 4, 6, 8', '20, 25, 30'], 'Beşer giderken 5 eklenir. Tuzağı fark et!', { sasirtma: true });
  ekle('rs-t-18', 'Onar sayarken 70\'ten sonra hangi sayı gelir?', '80', ['75', '80', '85', '90'], '70\'e 10 ekle.');
  ekle('rs-t-19', 'Elanaz ikişer sayıyor. 10\'dan sonra 13 mü gelir?', 'Hayır', ['Evet', 'Hayır', 'Bilmiyorum', 'İkisi de'], 'İkişer dizide 10, 12 gelir. Dikkatle oku!', { sasirtma: true });
  ekle('rs-t-20', 'Beşer sayarken 15\'ten sonra hangi sayı gelir?', '20', ['16', '18', '20', '25'], '15\'e 5 ekle.');
  ekle('rs-t-21', 'Onar sayarken 50\'den sonra hangi sayı gelir?', '60', ['55', '60', '70', '80'], '50\'ye 10 ekle.');
  ekle('rs-t-22', 'İkişer sayarken 24\'ten sonra hangi sayı gelir?', '26', ['25', '26', '27', '28'], '24\'e 2 ekle.');

  return sorular.slice(0, 22);
}

function sayiOkumaAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id, kazanimKodu: 'MAT.2.1.1', tip: 'yazili', soru,
      dogruCevap: String(cevap), ipucu, cevapTipi: 'sayi', ...extra,
    });

  const sayilar = [12, 24, 36, 47, 58, 63, 71, 85, 92, 99, 34, 56, 78, 41, 67];
  sayilar.forEach((n, i) => {
    ekle(`so-a-${i}`, `"${n}" sayısını yaz.`, n, `Onluk ve birlikleri düşün.`);
  });
  ekle('so-a-sas-1', 'Elanaz 47 elma saydı. Hangi sayı YÜZDE kırk yediden KÜÇÜKTÜR? (sayı yaz)', '35', '47\'den küçük bir sayı ara. Tuzağı fark et!', { sasirtma: true });
  ekle('so-a-sas-2', '58 sayısından sonra 57 mi gelir? "evet" veya "hayır"', 'evet', 'Sayı doğrusunda 58\'den önce 57 gelir.', { cevapTipi: 'metin', sasirtma: true });
  return sorular;
}

function sayiOkumaTest() {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id, kazanimKodu: 'MAT.2.1.1', tip: 'coktanSecmeli', soru,
      dogruCevap: cevap, secenekler: karistir(secenekler), ipucu, ...extra,
    });

  ekle('so-t-1', '"Kırk beş" hangi sayıdır?', '45', ['54', '45', '40', '35'], '40 + 5');
  ekle('so-t-2', '67 sayısı nasıl okunur?', 'Altmış yedi', ['Yetmiş altı', 'Altmış yedi', 'Altmış dokuz', 'Yedi altı'], '6 onluk 7 birlik.');
  ekle('so-t-3', 'Hangisi en büyük sayıdır?', '89', ['89', '98', '79', '88'], 'Onluklara bak.');
  ekle('so-t-4', '32 sayısından sonra hangi sayı gelir?', '33', ['31', '32', '33', '34'], 'Bir artır.');
  ekle('so-t-5', '"Seksen" hangi sayıdır?', '80', ['8', '18', '80', '88'], '8 onluk.');
  ekle('so-t-6', 'Elanaz 56 çıkartma saydı. Bu sayı nasıl okunur?', 'Elli altı', ['Altı elli', 'Elli altı', 'Elli dokuz', 'Altmış beş'], '5 onluk 6 birlik.');
  ekle('so-t-7', '91 ile 19\'dan hangisi daha büyük?', '91', ['91', '19', 'İkisi eşit', 'Bilmiyorum'], 'Onlukları karşılaştır.');
  ekle('so-t-8', '44 sayısının okunuşu hangisidir?', 'Kırk dört', ['Dört kırk', 'Kırk dört', 'Kırk altı', 'Otuz dört'], '4 onluk 4 birlik.');
  ekle('so-t-9', '100\'e en yakın sayı hangisidir?', '99', ['50', '75', '99', '10'], '99\'a 1 ekleyince 100 olur.');
  ekle('so-t-10', '73 sayısı hangi iki onluk arasındadır?', '70-80', ['60-70', '70-80', '80-90', '50-60'], '7 onluk.');
  ekle('so-t-11', '"Doksan dokuz" hangi sayıdır?', '99', ['90', '99', '89', '19'], '9 onluk 9 birlik.');
  ekle('so-t-12', '28 sayısından önce hangi sayı gelir?', '27', ['26', '27', '28', '29'], 'Bir eksilt.');
  ekle('so-t-13', 'Hangisi DOĞRU yazılmış sayı DEĞİLDİR?', '1000', ['45', '67', '1000', '82'], '2. sınıfta 100\'e kadar sayıları öğreniyoruz.', { sasirtma: true });
  ekle('so-t-14', '50 sayısı nasıl okunur?', 'Elli', ['Beş', 'On beş', 'Elli', 'Elli beş'], '5 onluk, 0 birlik.');
  ekle('so-t-15', 'Elanaz 38 tane düğme saydı. Bu sayıyı yaz.', '38', ['83', '38', '28', '48'], '3 onluk 8 birlik.');
  return sorular;
}

function onlukBirlikAlistirma() {
  const sorular = [];
  const ekle = (id, soru, cevap, ipucu, extra = {}) =>
    sorular.push({
      id, kazanimKodu: 'MAT.2.1.2', tip: 'yazili', soru,
      dogruCevap: String(cevap), ipucu, cevapTipi: 'sayi', ...extra,
    });

  ekle('ob-a-1', '47 sayısında kaç onluk vardır?', '4', 'Onluk basamağına bak.');
  ekle('ob-a-2', '47 sayısında kaç birlik vardır?', '7', 'Birlik basamağına bak.');
  ekle('ob-a-3', '3 onluk 5 birlik hangi sayıdır?', '35', '30 + 5');
  ekle('ob-a-4', '6 onluk 0 birlik hangi sayıdır?', '60', 'Sadece onluk var.');
  ekle('ob-a-5', '82 sayısında kaç birlik vardır?', '2', 'Sağdaki rakam birliktir.', { gorsel: 'onluk-blok-82' });
  ekle('ob-a-6', '5 onluk 9 birlik hangi sayıdır?', '59', '50 + 9');
  ekle('ob-a-7', '70 sayısında kaç onluk vardır?', '7', '0 birlik var.', { gorsel: 'onluk-blok-70' });
  ekle('ob-a-8', '4 onluk 4 birlik hangi sayıdır?', '44', '40 + 4');
  ekle('ob-a-9', '91 sayısında kaç onluk vardır?', '9', 'Onluk basamağı 9.', { gorsel: 'onluk-blok-91' });
  ekle('ob-a-10', '2 onluk 8 birlik hangi sayıdır?', '28', '20 + 8');
  ekle('ob-a-11', '36 sayısında kaç birlik vardır?', '6', '6 birlik.', { gorsel: 'onluk-blok-36' });
  ekle('ob-a-12', '8 onluk 3 birlik hangi sayıdır?', '83', '80 + 3');
  ekle('ob-a-13', '50 sayısında kaç birlik vardır?', '0', 'Onluk tam, birlik yok.', { gorsel: 'onluk-blok-50' });
  ekle('ob-a-14', '1 onluk 7 birlik hangi sayıdır?', '17', '10 + 7');
  ekle('ob-a-15', '64 sayısında kaç onluk vardır?', '6', '6 onluk 4 birlik.', { gorsel: 'onluk-blok-64' });
  ekle('ob-a-sas-1', '47 sayısında 7 onluk var mı? "evet" veya "hayır"', 'hayır', '47\'de 4 onluk 7 birlik vardır. Tuzağı fark et!', { cevapTipi: 'metin', sasirtma: true });
  return sorular;
}

function onlukBirlikTest() {
  const sorular = [];
  const ekle = (id, soru, cevap, secenekler, ipucu, extra = {}) =>
    sorular.push({
      id, kazanimKodu: 'MAT.2.1.2', tip: 'coktanSecmeli', soru,
      dogruCevap: cevap, secenekler: karistir(secenekler), ipucu, ...extra,
    });

  ekle('ob-t-1', 'Resimdeki bloklarda kaç onluk var?', '5', ['4', '5', '6', '50'], 'Her uzun blok 1 onluktur.', { gorsel: 'onluk-blok-53' });
  ekle('ob-t-2', '3 onluk 7 birlik hangi sayıdır?', '37', ['73', '37', '30', '7'], '30 + 7');
  ekle('ob-t-3', '58 sayısında kaç birlik vardır?', '8', ['5', '8', '58', '0'], 'Sağdaki rakam.');
  ekle('ob-t-4', 'Resimde toplam kaç birlik var?', '4', ['4', '6', '64', '40'], 'Kısa bloklar birliktir.', { gorsel: 'onluk-blok-64' });
  ekle('ob-t-5', '9 onluk 0 birlik hangi sayıdır?', '90', ['9', '90', '99', '09'], 'Sadece onluk.');
  ekle('ob-t-6', 'Resimdeki sayı kaçtır?', '42', ['24', '42', '40', '2'], '4 onluk 2 birlik.', { gorsel: 'onluk-blok-42' });
  ekle('ob-t-7', '76 sayısında kaç onluk vardır?', '7', ['6', '7', '76', '17'], 'Soldaki rakam onluk.');
  ekle('ob-t-8', '2 onluk 5 birlik hangi sayıdır?', '25', ['52', '25', '20', '5'], '20 + 5');
  ekle('ob-t-9', 'Resimde kaç onluk görüyorsun?', '3', ['2', '3', '8', '38'], 'Uzun blok sayısı.', { gorsel: 'onluk-blok-38' });
  ekle('ob-t-10', '40 sayısında kaç birlik vardır?', '0', ['4', '0', '40', '10'], '4 onluk, 0 birlik.');
  ekle('ob-t-11', '7 onluk 1 birlik hangi sayıdır?', '71', ['17', '71', '70', '1'], '70 + 1');
  ekle('ob-t-12', 'Resimdeki bloklar hangi sayıyı gösterir?', '29', ['92', '29', '20', '9'], '2 onluk 9 birlik.', { gorsel: 'onluk-blok-29' });
  ekle('ob-t-13', '85 sayısında kaç onluk vardır?', '8', ['5', '8', '85', '18'], '8 onluk 5 birlik.');
  ekle('ob-t-14', 'Hangisi 6 onluk 3 birlik DEĞİLDİR?', '36', ['63', '36', '60+3', '603'], '6 onluk 3 birlik = 63. Tuzağı fark et!', { sasirtma: true });
  ekle('ob-t-15', 'Resimde toplam kaç onluk var?', '7', ['7', '2', '72', '9'], 'Uzun sütunları say.', { gorsel: 'onluk-blok-72' });
  return sorular;
}

const ritmikSayma = {
  id: 'ritmik-sayma',
  baslik: 'Ritmik Sayma',
  kazanimKodu: 'MAT.2.1.3',
  anlatim: {
    ekranlar: [
      { metin: 'Elanaz bahçede oynarken taşları sayıyor. İkişer ikişer sayınca işi daha kolay oluyor: 2, 4, 6, 8… Bu yönteme ritmik sayma denir.', gorsel: 'sayi-kartlari' },
      { metin: 'Beşer beşer saymak da ritmik saymadır: 5, 10, 15, 20… Onar onar saymak en hızlısıdır: 10, 20, 30, 40…', gorsel: 'elma-gruplari' },
      { metin: 'Ritmik sayarken her adımda aynı sayıyı ekleriz. İkişer giderken 2 ekleriz, beşer giderken 5 ekleriz. Şimdi sen de dene!' },
    ],
  },
  alistirma: sayiSeridiGorselEkle([...ritmikAlistirma(), ...gorev2bAlistirma()]),
  test: sayiSeridiGorselEkle([...ritmikTest(), ...gorev2bTest(karistir), ...gorev3RitmikTablo()]),
};

const geoBase = geometrikCisimler(karistir);
const geometrikCisimlerKonu = geoGorselEkle({
  ...geoBase,
  alistirma: [...geoBase.alistirma, ...gorev3cAlistirma()],
  test: [...geoBase.test, ...gorev3cTest(karistir)],
});

const sayiOkuma = {
  id: 'sayilari-okuma-yazma',
  baslik: 'Sayıları Okuma ve Yazma (100\'e kadar)',
  kazanimKodu: 'MAT.2.1.1',
  anlatim: {
    ekranlar: [
      { metin: 'Elanaz sınıfta sayıları okumayı öğreniyor. 23 sayısı "yirmi üç" diye okunur. Soldaki rakam onluk, sağdaki birliktir.', gorsel: 'sayi-kartlari' },
      { metin: '47 sayısında 4 onluk ve 7 birlik vardır. "Kırk yedi" diye okuruz. 100\'e kadar tüm sayıları okuyup yazabilirsin.', gorsel: 'sayi-kart-47' },
      { metin: 'Sayıları karşılaştırırken önce onluklara bakarız. 56, 45\'ten büyüktür çünkü 5 onluk, 4 onluktan fazladır.' },
    ],
  },
  alistirma: [...sayiOkumaAlistirma(), ...gorev3bSayiAlistirma(), ...gorev3dSayiAlistirma()],
  test: [...sayiOkumaTest(), ...gorev3bSayiTest(karistir), ...gorev3dSayiTest(karistir)],
};

const onlukBirlik = {
  id: 'onluk-birlik',
  baslik: 'Onluk ve Birlik',
  kazanimKodu: 'MAT.2.1.2',
  anlatim: {
    ekranlar: [
      { metin: 'Onluk blokları uzun, birlik blokları kısadır. 3 onluk 5 birlik = 35 sayısı demektir.', gorsel: 'onluk-blok-35' },
      { metin: 'Elanaz bloklarla oynarken fark etti: 10 birlik bir araya gelince 1 onluk olur. Bu yüzden 47 = 4 onluk + 7 birlik.', gorsel: 'onluk-blok-47' },
      { metin: 'Bir sayının onluk ve birliklerini bulmak, sayıları anlamanın en güzel yoludur. Şimdi dene!' },
    ],
  },
  alistirma: [...onlukBirlikAlistirma(), ...gorev3bOnlukAlistirma(), ...gorev3dOnlukAlistirma()],
  test: [...onlukBirlikTest(), ...gorev3bOnlukTest(karistir), ...gorev3dOnlukTest(karistir)],
};

writeFileSync(join(contentDir, 'ritmik-sayma.json'), JSON.stringify(ritmikSayma, null, 2));
const sayiDogrusuKonu = sayiDogrusu(karistir);
const oruntuKonu = oruntu(karistir);
const tahminEtmeKonu = tahminEtme(karistir);
writeFileSync(join(contentDir, 'sayi-dogrusu.json'), JSON.stringify(sayiDogrusuKonu, null, 2));
writeFileSync(join(contentDir, 'oruntu.json'), JSON.stringify(oruntuKonu, null, 2));
writeFileSync(join(contentDir, 'tahmin-etme.json'), JSON.stringify(tahminEtmeKonu, null, 2));
writeFileSync(join(contentDir, 'sayilari-okuma-yazma.json'), JSON.stringify(sayiOkuma, null, 2));
writeFileSync(join(contentDir, 'onluk-birlik.json'), JSON.stringify(onlukBirlik, null, 2));
writeFileSync(join(contentDir, 'geometrik-cisimler.json'), JSON.stringify(geometrikCisimlerKonu, null, 2));
writeFileSync(
  join(contentDir, 'geometrik-cisim-modelleri.json'),
  JSON.stringify(geometrikCisimModelleri(karistir), null, 2),
);
writeFileSync(
  join(contentDir, 'geometrik-sekil-modelleri.json'),
  JSON.stringify(geometrikSekilModelleri(karistir), null, 2),
);
const bicimselOzelliklerKonu = bicimselOzellikler(karistir);
writeFileSync(
  join(contentDir, 'bicimsel-ozellikler.json'),
  JSON.stringify(bicimselOzelliklerKonu, null, 2),
);
const siviOlcmeKonu = siviOlcme(karistir);
writeFileSync(join(contentDir, 'sivi-olcme.json'), JSON.stringify(siviOlcmeKonu, null, 2));

const toplamaKonu = toplama(karistir);
const cikarmaKonu = cikarma(karistir);
writeFileSync(join(contentDir, 'toplama.json'), JSON.stringify(toplamaKonu, null, 2));
writeFileSync(join(contentDir, 'cikarma.json'), JSON.stringify(cikarmaKonu, null, 2));

const carpmaKonu = carpma(karistir);
const bolmeKonu = bolme(karistir);
writeFileSync(join(contentDir, 'carpma.json'), JSON.stringify(carpmaKonu, null, 2));
writeFileSync(join(contentDir, 'bolme.json'), JSON.stringify(bolmeKonu, null, 2));

const uzunlukOlcmeKonu = uzunlukOlcme(karistir);
const tartmaKonu = tartma(karistir);
const siviMiktariKonu = siviMiktari(karistir);
const zamanKonu = zaman(karistir);
writeFileSync(join(contentDir, 'uzunluk-olcme.json'), JSON.stringify(uzunlukOlcmeKonu, null, 2));
writeFileSync(join(contentDir, 'tartma.json'), JSON.stringify(tartmaKonu, null, 2));
writeFileSync(join(contentDir, 'sivi-miktari.json'), JSON.stringify(siviMiktariKonu, null, 2));
writeFileSync(join(contentDir, 'zaman.json'), JSON.stringify(zamanKonu, null, 2));

const tabloOkumaKonu = tabloOkuma(karistir);
const grafikOkumaKonu = grafikOkuma(karistir);
const veriToplamaKonu = veriToplama(karistir);
writeFileSync(join(contentDir, 'tablo-okuma.json'), JSON.stringify(tabloOkumaKonu, null, 2));
writeFileSync(join(contentDir, 'grafik-okuma.json'), JSON.stringify(grafikOkumaKonu, null, 2));
writeFileSync(join(contentDir, 'veri-toplama.json'), JSON.stringify(veriToplamaKonu, null, 2));

const esitParcalaraBolmeKonu = esitParcalaraBolme(karistir);
const yarimVeCeyrekKonu = yarimVeCeyrek(karistir);
const basitKesirlerKonu = basitKesirler(karistir);
writeFileSync(join(contentDir, 'esit-parcalara-bolme.json'), JSON.stringify(esitParcalaraBolmeKonu, null, 2));
writeFileSync(join(contentDir, 'yarim-ve-ceyrek.json'), JSON.stringify(yarimVeCeyrekKonu, null, 2));
writeFileSync(join(contentDir, 'basit-kesirler.json'), JSON.stringify(basitKesirlerKonu, null, 2));

const seslerVeHecelerKonu = seslerVeHeceler(karistir);
const kelimeBilgisiKonu = kelimeBilgisi(karistir);
const okumaAnlamaKonu = okumaAnlama(karistir);
const cumleBilgisiKonu = cumleBilgisi(karistir);
const noktalamaVeYazimKonu = noktalamaVeYazim(karistir);
writeFileSync(join(turkceDir, 'sesler-ve-heceler.json'), JSON.stringify(seslerVeHecelerKonu, null, 2));
writeFileSync(join(turkceDir, 'kelime-bilgisi.json'), JSON.stringify(kelimeBilgisiKonu, null, 2));
writeFileSync(join(turkceDir, 'okuma-anlama.json'), JSON.stringify(okumaAnlamaKonu, null, 2));
writeFileSync(join(turkceDir, 'cumle-bilgisi.json'), JSON.stringify(cumleBilgisiKonu, null, 2));
writeFileSync(join(turkceDir, 'noktalama-ve-yazim.json'), JSON.stringify(noktalamaVeYazimKonu, null, 2));

const hikayeMetniKonu = hikayeMetni(karistir);
const siirKonu = siir(karistir);
const bilgiMetniKonu = bilgiMetni(karistir);
writeFileSync(join(turkceDir, 'hikaye-metni.json'), JSON.stringify(hikayeMetniKonu, null, 2));
writeFileSync(join(turkceDir, 'siir.json'), JSON.stringify(siirKonu, null, 2));
writeFileSync(join(turkceDir, 'bilgi-metni.json'), JSON.stringify(bilgiMetniKonu, null, 2));

const yazmaBecerileriKonu = yazmaBecerileri(karistir);
const dinlemeVeKonusmaKonu = dinlemeVeKonusma(karistir);
const sozcukVeDilBilgisiKonu = sozcukVeDilBilgisi(karistir);
writeFileSync(join(turkceDir, 'yazma-becerileri.json'), JSON.stringify(yazmaBecerileriKonu, null, 2));
writeFileSync(join(turkceDir, 'dinleme-ve-konusma.json'), JSON.stringify(dinlemeVeKonusmaKonu, null, 2));
writeFileSync(join(turkceDir, 'sozcuk-ve-dil-bilgisi.json'), JSON.stringify(sozcukVeDilBilgisiKonu, null, 2));

const metinAnlamaVeYorumlamaKonu = metinAnlamaVeYorumlama(karistir);
const kelimeVeAnlamBilgisiIleriKonu = kelimeVeAnlamBilgisiIleri(karistir);
const yazmaVeAnlatimIleriKonu = yazmaVeAnlatimIleri(karistir);
writeFileSync(join(turkceDir, 'metin-anlama-ve-yorumlama.json'), JSON.stringify(metinAnlamaVeYorumlamaKonu, null, 2));
writeFileSync(join(turkceDir, 'kelime-ve-anlam-bilgisi-ileri.json'), JSON.stringify(kelimeVeAnlamBilgisiIleriKonu, null, 2));
writeFileSync(join(turkceDir, 'yazma-ve-anlatim-ileri.json'), JSON.stringify(yazmaVeAnlatimIleriKonu, null, 2));

const canlilarKonu = canlilar(karistir);
const canlilarVeCansizlarKonu = canlilarVeCansizlar(karistir);
const bitkilerKonu = bitkilerTema2(karistir);
const hayvanlarKonu = hayvanlar(karistir);
writeFileSync(join(fenDir, 'canlilar.json'), JSON.stringify(canlilarKonu, null, 2));
writeFileSync(join(fenDir, 'canlilar-ve-cansizlar.json'), JSON.stringify(canlilarVeCansizlarKonu, null, 2));
writeFileSync(join(fenDir, 'bitkiler.json'), JSON.stringify(bitkilerKonu, null, 2));
writeFileSync(join(fenDir, 'hayvanlar.json'), JSON.stringify(hayvanlarKonu, null, 2));

const maddeVeOzellikleriKonu = maddeVeOzellikleri(karistir);
const kuvvetVeHareketKonu = kuvvetVeHareket(karistir);
const isikVeSesKonu = isikVeSes(karistir);
writeFileSync(join(fenDir, 'madde-ve-ozellikleri.json'), JSON.stringify(maddeVeOzellikleriKonu, null, 2));
writeFileSync(join(fenDir, 'kuvvet-ve-hareket.json'), JSON.stringify(kuvvetVeHareketKonu, null, 2));
writeFileSync(join(fenDir, 'isik-ve-ses.json'), JSON.stringify(isikVeSesKonu, null, 2));

const dunyaVeEvrenKonu = dunyaVeEvren(karistir);
const havaDurumuVeMevsimlerKonu = havaDurumuVeMevsimler(karistir);
const saglikliYasamVeCevreKonu = saglikliYasamVeCevre(karistir);
writeFileSync(join(fenDir, 'dunya-ve-evren.json'), JSON.stringify(dunyaVeEvrenKonu, null, 2));
writeFileSync(join(fenDir, 'hava-durumu-ve-mevsimler.json'), JSON.stringify(havaDurumuVeMevsimlerKonu, null, 2));
writeFileSync(join(fenDir, 'saglikli-yasam-ve-cevre.json'), JSON.stringify(saglikliYasamVeCevreKonu, null, 2));

const okulVeSinifKonu = okulVeSinif(karistir);
const aileVeArkadaslikKonu = aileVeArkadaslik(karistir);
const aileDuygularKonu = aileDuygular(karistir);
const toplumVeCevreKonu = toplumVeCevre(karistir);
writeFileSync(join(hbDir, 'okul-ve-sinif.json'), JSON.stringify(okulVeSinifKonu, null, 2));
writeFileSync(join(hbDir, 'aile-ve-arkadaslik.json'), JSON.stringify(aileVeArkadaslikKonu, null, 2));
writeFileSync(join(hbDir, 'aile-duygular.json'), JSON.stringify(aileDuygularKonu, null, 2));
writeFileSync(join(hbDir, 'toplum-ve-cevre.json'), JSON.stringify(toplumVeCevreKonu, null, 2));

const saglikVeTemizlikKonu = saglikVeTemizlik(karistir);
const guvenliYasamKonu = guvenliYasam(karistir);
const mesleklerVeCalismaHayatiKonu = mesleklerVeCalismaHayati(karistir);
writeFileSync(join(hbDir, 'saglik-ve-temizlik.json'), JSON.stringify(saglikVeTemizlikKonu, null, 2));
writeFileSync(join(hbDir, 'guvenli-yasam.json'), JSON.stringify(guvenliYasamKonu, null, 2));
writeFileSync(join(hbDir, 'meslekler-ve-calisma-hayati.json'), JSON.stringify(mesleklerVeCalismaHayatiKonu, null, 2));

const ulkemizVeVatandaslikKonu = ulkemizVeVatandaslik(karistir);
const tarihVeKulturumuzKonu = tarihVeKulturumuz(karistir);
const dogalAfetlerVeKorunmaKonu = dogalAfetlerVeKorunma(karistir);
writeFileSync(join(hbDir, 'ulkemiz-ve-vatandaslik.json'), JSON.stringify(ulkemizVeVatandaslikKonu, null, 2));
writeFileSync(join(hbDir, 'tarih-ve-kulturumuz.json'), JSON.stringify(tarihVeKulturumuzKonu, null, 2));
writeFileSync(join(hbDir, 'dogal-afetler-ve-korunma.json'), JSON.stringify(dogalAfetlerVeKorunmaKonu, null, 2));

const alfabeVeRenklerKonu = alfabeVeRenkler(karistir);
writeFileSync(join(ingDir, 'alfabe-ve-renkler.json'), JSON.stringify(alfabeVeRenklerKonu, null, 2));

const sayilarVeSinifEsyalariKonu = sayilarVeSinifEsyalari(karistir);
writeFileSync(join(ingDir, 'sayilar-ve-sinif-esyalari.json'), JSON.stringify(sayilarVeSinifEsyalariKonu, null, 2));

const gunlerVeAylarKonu = gunlerVeAylar(karistir);
writeFileSync(join(ingDir, 'gunler-ve-aylar.json'), JSON.stringify(gunlerVeAylarKonu, null, 2));

const selamlasmaVeAileKonu = selamlasmaVeAile(karistir);
const yazTuruHikayeKonu = yazTuruHikaye(karistir);
const yazTuruSiirKonu = yazTuruSiir(karistir);
const olaySirasiMetinKonu = olaySirasiMetin(karistir);
const olaySirasiZamanKonu = olaySirasiZaman(karistir);
writeFileSync(join(turkceDir, 'yaz-turu-hikaye.json'), JSON.stringify(yazTuruHikayeKonu, null, 2));
writeFileSync(join(turkceDir, 'yaz-turu-siir.json'), JSON.stringify(yazTuruSiirKonu, null, 2));
writeFileSync(join(turkceDir, 'olay-sirasi-metin.json'), JSON.stringify(olaySirasiMetinKonu, null, 2));
writeFileSync(join(turkceDir, 'olay-sirasi-zaman.json'), JSON.stringify(olaySirasiZamanKonu, null, 2));

const renklerKonu = renkler(karistir);
const duygularKonu = duygular(karistir);
writeFileSync(join(ingDir, 'renkler.json'), JSON.stringify(renklerKonu, null, 2));
writeFileSync(join(ingDir, 'duygular.json'), JSON.stringify(duygularKonu, null, 2));

const kisaHikayelerKonu = kisaHikayeler(karistir);
const basitDiyaloglarKonu = basitDiyaloglar(karistir);
const ingilizceSarkilarKonu = ingilizceSarkilar(karistir);
writeFileSync(join(ingDir, 'selamlasma-ve-aile.json'), JSON.stringify(selamlasmaVeAileKonu, null, 2));
writeFileSync(join(ingDir, 'kisa-hikayeler.json'), JSON.stringify(kisaHikayelerKonu, null, 2));
writeFileSync(join(ingDir, 'basit-diyaloglar.json'), JSON.stringify(basitDiyaloglarKonu, null, 2));
writeFileSync(join(ingDir, 'ingilizce-sarkilar.json'), JSON.stringify(ingilizceSarkilarKonu, null, 2));

const englishDataDir = join(__dirname, '../src/data/english');
const mathDataDir = join(__dirname, '../src/data/math');
mkdirSync(englishDataDir, { recursive: true });
mkdirSync(mathDataDir, { recursive: true });
const hayvanlarIngKonu = konuParca(hayvanlarIng);
const yiyeceklerKonu = konuParca(yiyecekler);
const sekillerIngKonu = konuParca(sekiller);
const vucudBolumleriKonu = konuParca(vucudBolumleri);
writeFileSync(join(ingDir, 'hayvanlar-ing.json'), JSON.stringify(hayvanlarIngKonu, null, 2));
writeFileSync(join(ingDir, 'yiyecekler.json'), JSON.stringify(yiyeceklerKonu, null, 2));
writeFileSync(join(ingDir, 'sekiller-ing.json'), JSON.stringify(sekillerIngKonu, null, 2));
writeFileSync(join(ingDir, 'vucud-bolumleri.json'), JSON.stringify(vucudBolumleriKonu, null, 2));

const eylemlerKonuIng = eylemler(karistir);
const okulHobilerGunlukKonu = okulHobilerGunluk(karistir);
writeFileSync(join(ingDir, 'eylemler.json'), JSON.stringify(eylemlerKonuIng, null, 2));
writeFileSync(join(ingDir, 'okul-hobiler-gunluk.json'), JSON.stringify(okulHobilerGunlukKonu, null, 2));

const havaDurumuKonuIng = konuParca(havaT7);
const giyimEsyalariKonuIng = konuParca(giyimT7);
const mevsimlerIngKonuParca = konuParca(mevsimT7);
const oyuncaklarKonu = konuParca(oyuncaklar);
writeFileSync(join(ingDir, 'hava-durumu.json'), JSON.stringify(havaDurumuKonuIng, null, 2));
writeFileSync(join(ingDir, 'giyim-esyalari.json'), JSON.stringify(giyimEsyalariKonuIng, null, 2));
writeFileSync(join(ingDir, 'mevsimler-ing.json'), JSON.stringify(mevsimlerIngKonuParca, null, 2));
writeFileSync(join(ingDir, 'oyuncaklar.json'), JSON.stringify(oyuncaklarKonu, null, 2));

const sporKonu = konuParca(spor);
const mesleklerKonu = konuParca(meslekler);
const enstrumanlarKonu = konuParca(enstrumanlar);
const ulasimKonu = konuParca(ulasim);
writeFileSync(join(ingDir, 'spor.json'), JSON.stringify(sporKonu, null, 2));
writeFileSync(join(ingDir, 'meslekler-ing.json'), JSON.stringify(mesleklerKonu, null, 2));
writeFileSync(join(ingDir, 'enstrumanlar.json'), JSON.stringify(enstrumanlarKonu, null, 2));
writeFileSync(join(ingDir, 'ulasim.json'), JSON.stringify(ulasimKonu, null, 2));

const tatillerKonu = konuParca(tatiller);
const odalarKonu = konuParca(odalar);
const derslerKonu = konuParca(dersler);
const sayilar1120Konu = konuParca(sayilar1120);
writeFileSync(join(ingDir, 'tatiller.json'), JSON.stringify(tatillerKonu, null, 2));
writeFileSync(join(ingDir, 'odalar.json'), JSON.stringify(odalarKonu, null, 2));
writeFileSync(join(ingDir, 'dersler-ing.json'), JSON.stringify(derslerKonu, null, 2));
writeFileSync(join(ingDir, 'sayilar-11-20.json'), JSON.stringify(sayilar1120Konu, null, 2));

const theme3Ing = {
  id: 'tema-3',
  baslik: 'İngilizce — Tema 3',
  konular: [selamlasmaVeAileKonu, basitDiyaloglarKonu],
};
writeFileSync(join(englishDataDir, 'theme3.json'), JSON.stringify(theme3Ing, null, 2));

const theme4 = {
  id: 'tema-4',
  baslik: 'İngilizce — Tema 4',
  konular: [renklerKonu, duygularKonu],
};
writeFileSync(join(englishDataDir, 'theme4.json'), JSON.stringify(theme4, null, 2));

const theme5Ing = {
  id: 'tema-5',
  baslik: 'İngilizce — Tema 5',
  konular: [hayvanlarIngKonu, yiyeceklerKonu, sekillerIngKonu, vucudBolumleriKonu],
};
writeFileSync(join(englishDataDir, 'theme5.json'), JSON.stringify(theme5Ing, null, 2));

const theme6Ing = {
  id: 'tema-6',
  baslik: 'İngilizce — Tema 6',
  konular: [eylemlerKonuIng, okulHobilerGunlukKonu],
};
writeFileSync(join(englishDataDir, 'theme6.json'), JSON.stringify(theme6Ing, null, 2));

const theme7Ing = {
  id: 'tema-7',
  baslik: 'İngilizce — Tema 7',
  konular: [havaDurumuKonuIng, giyimEsyalariKonuIng, oyuncaklarKonu, mevsimlerIngKonuParca],
};
writeFileSync(join(englishDataDir, 'theme7.json'), JSON.stringify(theme7Ing, null, 2));

const sporlarKonu = konuParca(sporlar);
const enstrumanlarKonu = konuParca(enstrumanlar);
const mesleklerKonu = konuParca(meslekler);
const ulasimKonu = konuParca(ulasim);
writeFileSync(join(ingDir, 'sporlar.json'), JSON.stringify(sporlarKonu, null, 2));
writeFileSync(join(ingDir, 'enstrumanlar.json'), JSON.stringify(enstrumanlarKonu, null, 2));
writeFileSync(join(ingDir, 'meslekler-ing.json'), JSON.stringify(mesleklerKonu, null, 2));
writeFileSync(join(ingDir, 'ulasim.json'), JSON.stringify(ulasimKonu, null, 2));

const theme8Ing = {
  id: 'tema-8',
  baslik: 'İngilizce — Tema 8',
  konular: [sporlarKonu, enstrumanlarKonu, mesleklerKonu, ulasimKonu],
};
writeFileSync(join(englishDataDir, 'theme8.json'), JSON.stringify(theme8Ing, null, 2));

const tema3 = {
  id: 'tema-3',
  baslik: 'Matematik — Tema 3 — Toplama ve Çıkarma',
  konular: [toplamaKonu, cikarmaKonu],
};
writeFileSync(join(mathDataDir, 'tema3.json'), JSON.stringify(tema3, null, 2));

const matTema4 = {
  id: 'tema-4',
  baslik: 'Tema 4 — Çarpma ve Bölme',
  konular: [carpmaKonu, bolmeKonu],
};
writeFileSync(join(mathDataDir, 'tema4.json'), JSON.stringify(matTema4, null, 2));

const matTema5 = {
  id: 'tema-5',
  baslik: 'Matematik — Tema 5 — Ölçü ve Tartı',
  konular: [uzunlukOlcmeKonu, tartmaKonu],
};
writeFileSync(join(mathDataDir, 'tema5.json'), JSON.stringify(matTema5, null, 2));

const matTema6 = {
  id: 'tema-6',
  baslik: 'Matematik — Tema 6 — Kesirler',
  konular: [esitParcalaraBolmeKonu, yarimVeCeyrekKonu, basitKesirlerKonu],
};
writeFileSync(join(mathDataDir, 'tema6.json'), JSON.stringify(matTema6, null, 2));

const matTema7 = {
  id: 'tema-7',
  baslik: 'Matematik — Tema 7 — Parça-Bütün',
  konular: [esitParcalaraBolmeKonu, yarimVeCeyrekKonu, basitKesirlerKonu],
};
writeFileSync(join(mathDataDir, 'tema7.json'), JSON.stringify(matTema7, null, 2));

const hikayeDir = join(__dirname, '../content/sinif2/okuma-kosesi');
mkdirSync(hikayeDir, { recursive: true });

for (const hikaye of okumaKosesiHikayeleri) {
  writeFileSync(join(hikayeDir, `${hikaye.id}.json`), JSON.stringify(hikaye, null, 2));
}

const gorselSanatlarKonu = gorselSanatlar(karistir);
const zekaVeDikkatKonu = zekaVeDikkat(karistir);
writeFileSync(join(gsDir, 'gorsel-sanatlar.json'), JSON.stringify(gorselSanatlarKonu, null, 2));
writeFileSync(join(zdDir, 'zeka-ve-dikkat.json'), JSON.stringify(zekaVeDikkatKonu, null, 2));

const index = {
  sinif: 2,
  dersler: [
    { id: 'turkce', baslik: 'Türkçe', unite: [
        {
          id: 'tema-1',
          baslik: 'Türkçe — Tema 1',
          konuDosyalari: [
            'turkce/sesler-ve-heceler.json',
            'turkce/kelime-bilgisi.json',
            'turkce/okuma-anlama.json',
            'turkce/cumle-bilgisi.json',
            'turkce/noktalama-ve-yazim.json',
          ],
        },
        {
          id: 'tema-2',
          baslik: 'Türkçe — Tema 2',
          konuDosyalari: [
            'turkce/hikaye-metni.json',
            'turkce/siir.json',
            'turkce/bilgi-metni.json',
          ],
        },
        {
          id: 'tema-3',
          baslik: 'Türkçe — Tema 3',
          konuDosyalari: [
            'turkce/yazma-becerileri.json',
            'turkce/dinleme-ve-konusma.json',
            'turkce/sozcuk-ve-dil-bilgisi.json',
          ],
        },
        {
          id: 'tema-4',
          baslik: 'Türkçe — Tema 4',
          konuDosyalari: [
            'turkce/metin-anlama-ve-yorumlama.json',
            'turkce/kelime-ve-anlam-bilgisi-ileri.json',
            'turkce/yazma-ve-anlatim-ileri.json',
          ],
        },
        {
          id: 'tema-5',
          baslik: 'Türkçe — Tema 5',
          konuDosyalari: [
            'turkce/yaz-turu-hikaye.json',
            'turkce/yaz-turu-siir.json',
          ],
        },
        {
          id: 'tema-8',
          baslik: 'Türkçe — Tema 8',
          konuDosyalari: [
            'turkce/olay-sirasi-metin.json',
            'turkce/olay-sirasi-zaman.json',
          ],
        },
      ] },
    {
      id: 'matematik',
      baslik: 'Matematik',
      unite: [
        {
          id: 'geometri',
          baslik: 'Geometri',
          konuDosyalari: [
            'matematik/geometrik-cisimler.json',
            'matematik/geometrik-cisim-modelleri.json',
            'matematik/geometrik-sekil-modelleri.json',
            'matematik/bicimsel-ozellikler.json',
            'matematik/sivi-olcme.json',
          ],
        },
        {
          id: 'sayilar',
          baslik: 'Sayılar',
          konuDosyalari: [
            'matematik/ritmik-sayma.json',
            'matematik/sayi-dogrusu.json',
            'matematik/oruntu.json',
            'matematik/tahmin-etme.json',
            'matematik/sayilari-okuma-yazma.json',
            'matematik/onluk-birlik.json',
          ],
        },
        {
          id: 'tema-3',
          baslik: 'Matematik — Tema 3 — Toplama ve Çıkarma',
          konuDosyalari: [
            'matematik/toplama.json',
            'matematik/cikarma.json',
          ],
        },
        {
          id: 'tema-4',
          baslik: 'Tema 4 — Çarpma ve Bölme',
          konuDosyalari: [
            'matematik/carpma.json',
            'matematik/bolme.json',
          ],
        },
        {
          id: 'tema-5',
          baslik: 'Matematik — Tema 5 — Ölçü ve Tartı',
          konuDosyalari: [
            'matematik/uzunluk-olcme.json',
            'matematik/tartma.json',
          ],
        },
        {
          id: 'olcme-ek',
          baslik: 'Ölçme — Sıvı ve Zaman',
          konuDosyalari: [
            'matematik/sivi-miktari.json',
            'matematik/zaman.json',
          ],
        },
        {
          id: 'tema-6',
          baslik: 'Tema 6 — Veri',
          konuDosyalari: [
            'matematik/tablo-okuma.json',
            'matematik/grafik-okuma.json',
            'matematik/veri-toplama.json',
          ],
        },
        {
          id: 'tema-7',
          baslik: 'Matematik — Tema 7 — Parça-Bütün',
          konuDosyalari: [
            'matematik/esit-parcalara-bolme.json',
            'matematik/yarim-ve-ceyrek.json',
            'matematik/basit-kesirler.json',
          ],
        },
      ],
    },
    {
      id: 'hayat-bilgisi',
      baslik: 'Hayat Bilgisi',
      unite: [
        {
          id: 'tema-1',
          baslik: 'Hayat Bilgisi — Tema 1',
          konuDosyalari: [
            'hayat-bilgisi/okul-ve-sinif.json',
            'hayat-bilgisi/aile-ve-arkadaslik.json',
            'hayat-bilgisi/aile-duygular.json',
            'hayat-bilgisi/toplum-ve-cevre.json',
          ],
        },
        {
          id: 'tema-2',
          baslik: 'Hayat Bilgisi — Tema 2',
          konuDosyalari: [
            'hayat-bilgisi/saglik-ve-temizlik.json',
            'hayat-bilgisi/guvenli-yasam.json',
            'hayat-bilgisi/meslekler-ve-calisma-hayati.json',
          ],
        },
        {
          id: 'tema-3',
          baslik: 'Hayat Bilgisi — Tema 3',
          konuDosyalari: [
            'hayat-bilgisi/ulkemiz-ve-vatandaslik.json',
            'hayat-bilgisi/tarih-ve-kulturumuz.json',
            'hayat-bilgisi/dogal-afetler-ve-korunma.json',
          ],
        },
      ],
    },
    {
      id: 'fen-bilimleri',
      baslik: 'Fen Bilimleri',
      unite: [
        {
          id: 'tema-1',
          baslik: 'Fen Bilimleri — Tema 1',
          konuDosyalari: [
            'fen-bilimleri/canlilar.json',
          ],
        },
        {
          id: 'tema-2',
          baslik: 'Fen Bilimleri — Tema 2',
          konuDosyalari: [
            'fen-bilimleri/bitkiler.json',
          ],
        },
        {
          id: 'tema-3',
          baslik: 'Fen Bilimleri — Tema 3',
          konuDosyalari: [
            'fen-bilimleri/dunya-ve-evren.json',
            'fen-bilimleri/hava-durumu-ve-mevsimler.json',
            'fen-bilimleri/saglikli-yasam-ve-cevre.json',
          ],
        },
        {
          id: 'tema-4',
          baslik: 'Fen Bilimleri — Tema 4',
          konuDosyalari: [
            'fen-bilimleri/madde-ve-ozellikleri.json',
            'fen-bilimleri/kuvvet-ve-hareket.json',
            'fen-bilimleri/isik-ve-ses.json',
          ],
        },
      ],
    },
    { id: 'ingilizce', baslik: 'İngilizce', unite: [
        {
          id: 'tema-1',
          baslik: 'İngilizce — Tema 1',
          konuDosyalari: [
            'ingilizce/alfabe-ve-renkler.json',
          ],
        },
        {
          id: 'tema-2',
          baslik: 'İngilizce — Tema 2',
          konuDosyalari: [
            'ingilizce/sayilar-ve-sinif-esyalari.json',
          ],
        },
        {
          id: 'tema-3',
          baslik: 'İngilizce — Tema 3',
          konuDosyalari: [
            'ingilizce/selamlasma-ve-aile.json',
            'ingilizce/basit-diyaloglar.json',
          ],
        },
        {
          id: 'tema-4',
          baslik: 'İngilizce — Tema 4',
          konuDosyalari: [
            'ingilizce/renkler.json',
            'ingilizce/duygular.json',
          ],
        },
        {
          id: 'tema-5',
          baslik: 'İngilizce — Tema 5',
          konuDosyalari: [
            'ingilizce/hayvanlar-ing.json',
            'ingilizce/yiyecekler.json',
            'ingilizce/sekiller-ing.json',
            'ingilizce/vucud-bolumleri.json',
          ],
        },
        {
          id: 'tema-6',
          baslik: 'İngilizce — Tema 6',
          konuDosyalari: [
            'ingilizce/eylemler.json',
            'ingilizce/okul-hobiler-gunluk.json',
          ],
        },
        {
          id: 'tema-7',
          baslik: 'İngilizce — Tema 7',
          konuDosyalari: [
            'ingilizce/hava-durumu.json',
            'ingilizce/giyim-esyalari.json',
            'ingilizce/oyuncaklar.json',
            'ingilizce/mevsimler-ing.json',
          ],
        },
        {
          id: 'tema-8',
          baslik: 'İngilizce — Tema 8',
          konuDosyalari: [
            'ingilizce/sporlar.json',
            'ingilizce/enstrumanlar.json',
            'ingilizce/meslekler-ing.json',
            'ingilizce/ulasim.json',
          ],
        },
      ] },
    { id: 'gorsel-sanatlar', baslik: 'Görsel Sanatlar', unite: [
        {
          id: 'tema-1',
          baslik: 'Görsel Sanatlar',
          konuDosyalari: ['gorsel-sanatlar/gorsel-sanatlar.json'],
        },
      ] },
    {
      id: 'okuma-kosesi',
      baslik: 'Okuma Köşesi',
      unite: [],
      hikayeDosyalari: okumaKosesiHikayeleri.map((h) => `okuma-kosesi/${h.id}.json`),
    },
    { id: 'zeka-dikkat', baslik: 'Zekâ ve Dikkat', unite: [
        {
          id: 'tema-1',
          baslik: 'Zekâ ve Dikkat',
          konuDosyalari: ['zeka-dikkat/zeka-ve-dikkat.json'],
        },
      ] },
  ],
};

writeFileSync(join(__dirname, '../content/sinif2/index.json'), JSON.stringify(index, null, 2));
console.log('İçerik dosyaları oluşturuldu.');
const geoEslestirme = geometrikCisimlerKonu.test.filter((s) => s.tip === 'eslestirme').length;
const geoTestMc = geometrikCisimlerKonu.test.filter((s) => s.tip === 'coktanSecmeli').length;
console.log(
  'Geometrik:',
  geometrikCisimlerKonu.alistirma.length,
  'alistirma +',
  geometrikCisimlerKonu.test.length,
  `test (çoktan: ${geoTestMc}, eşleştirme: ${geoEslestirme}) =`,
  geometrikCisimlerKonu.alistirma.length + geometrikCisimlerKonu.test.length,
);
console.log('Ritmik:', ritmikSayma.alistirma.length, '+', ritmikSayma.test.length);
console.log('Sayı okuma:', sayiOkuma.alistirma.length, '+', sayiOkuma.test.length);
console.log('Onluk birlik:', onlukBirlik.alistirma.length, '+', onlukBirlik.test.length);
const yeniTipler = (konu) =>
  [...konu.alistirma, ...konu.test].filter((s) => s.tip === 'eslestirme' || s.tip === 'tablo-boyama').length;
console.log('Yeni tip (geo):', yeniTipler(geometrikCisimlerKonu));
console.log('Yeni tip (ritmik):', yeniTipler(ritmikSayma));
console.log(
  'Biçimsel özellikler:',
  bicimselOzelliklerKonu.alistirma.length,
  '+',
  bicimselOzelliklerKonu.test.length,
);
console.log('Sıvı ölçme:', siviOlcmeKonu.alistirma.length, '+', siviOlcmeKonu.test.length);
console.log('Sayı doğrusu:', sayiDogrusuKonu.alistirma.length, '+', sayiDogrusuKonu.test.length);
console.log('Örüntü:', oruntuKonu.alistirma.length, '+', oruntuKonu.test.length);
console.log('Tahmin etme:', tahminEtmeKonu.alistirma.length, '+', tahminEtmeKonu.test.length);
console.log('Toplama:', toplamaKonu.alistirma.length, '+', toplamaKonu.test.length);
console.log('Çıkarma:', cikarmaKonu.alistirma.length, '+', cikarmaKonu.test.length);
console.log('Çarpma:', carpmaKonu.alistirma.length, '+', carpmaKonu.test.length);
console.log('Bölme:', bolmeKonu.alistirma.length, '+', bolmeKonu.test.length);
console.log('Uzunluk ölçme:', uzunlukOlcmeKonu.alistirma.length, '+', uzunlukOlcmeKonu.test.length);
console.log('Tartma:', tartmaKonu.alistirma.length, '+', tartmaKonu.test.length);
console.log('Sıvı miktarı:', siviMiktariKonu.alistirma.length, '+', siviMiktariKonu.test.length);
console.log('Zaman:', zamanKonu.alistirma.length, '+', zamanKonu.test.length);
console.log('Tablo okuma:', tabloOkumaKonu.alistirma.length, '+', tabloOkumaKonu.test.length);
console.log('Grafik okuma:', grafikOkumaKonu.alistirma.length, '+', grafikOkumaKonu.test.length);
console.log('Veri toplama:', veriToplamaKonu.alistirma.length, '+', veriToplamaKonu.test.length);
console.log('Eşit parçalara bölme:', esitParcalaraBolmeKonu.alistirma.length, '+', esitParcalaraBolmeKonu.test.length);
console.log('Yarım ve çeyrek:', yarimVeCeyrekKonu.alistirma.length, '+', yarimVeCeyrekKonu.test.length);
console.log('Basit kesirler:', basitKesirlerKonu.alistirma.length, '+', basitKesirlerKonu.test.length);
console.log('Sesler ve heceler:', seslerVeHecelerKonu.alistirma.length, '+', seslerVeHecelerKonu.test.length);
console.log('Kelime bilgisi:', kelimeBilgisiKonu.alistirma.length, '+', kelimeBilgisiKonu.test.length);
console.log('Okuma anlama:', okumaAnlamaKonu.alistirma.length, '+', okumaAnlamaKonu.test.length);
console.log('Cümle bilgisi:', cumleBilgisiKonu.alistirma.length, '+', cumleBilgisiKonu.test.length);
console.log('Noktalama ve yazım:', noktalamaVeYazimKonu.alistirma.length, '+', noktalamaVeYazimKonu.test.length);
console.log('Hikâye metni:', hikayeMetniKonu.alistirma.length, '+', hikayeMetniKonu.test.length);
console.log('Şiir:', siirKonu.alistirma.length, '+', siirKonu.test.length);
console.log('Bilgi metni:', bilgiMetniKonu.alistirma.length, '+', bilgiMetniKonu.test.length);
console.log('Yazma becerileri:', yazmaBecerileriKonu.alistirma.length, '+', yazmaBecerileriKonu.test.length);
console.log('Dinleme ve konuşma:', dinlemeVeKonusmaKonu.alistirma.length, '+', dinlemeVeKonusmaKonu.test.length);
console.log('Sözcük ve dil bilgisi:', sozcukVeDilBilgisiKonu.alistirma.length, '+', sozcukVeDilBilgisiKonu.test.length);
console.log('Metin anlama ve yorumlama:', metinAnlamaVeYorumlamaKonu.alistirma.length, '+', metinAnlamaVeYorumlamaKonu.test.length);
console.log('Kelime ve anlam bilgisi ileri:', kelimeVeAnlamBilgisiIleriKonu.alistirma.length, '+', kelimeVeAnlamBilgisiIleriKonu.test.length);
console.log('Yazma ve anlatım ileri:', yazmaVeAnlatimIleriKonu.alistirma.length, '+', yazmaVeAnlatimIleriKonu.test.length);
console.log('Canlılar:', canlilarKonu.alistirma.length, '+', canlilarKonu.test.length);
console.log('Canlılar ve cansızlar:', canlilarVeCansizlarKonu.alistirma.length, '+', canlilarVeCansizlarKonu.test.length);
console.log('Bitkiler:', bitkilerKonu.alistirma.length, '+', bitkilerKonu.test.length);
console.log('Hayvanlar:', hayvanlarKonu.alistirma.length, '+', hayvanlarKonu.test.length);
console.log('Madde ve özellikleri:', maddeVeOzellikleriKonu.alistirma.length, '+', maddeVeOzellikleriKonu.test.length);
console.log('Kuvvet ve hareket:', kuvvetVeHareketKonu.alistirma.length, '+', kuvvetVeHareketKonu.test.length);
console.log('Işık ve ses:', isikVeSesKonu.alistirma.length, '+', isikVeSesKonu.test.length);
console.log('Dünya ve evren:', dunyaVeEvrenKonu.alistirma.length, '+', dunyaVeEvrenKonu.test.length);
console.log('Hava durumu ve mevsimler:', havaDurumuVeMevsimlerKonu.alistirma.length, '+', havaDurumuVeMevsimlerKonu.test.length);
console.log('Sağlıklı yaşam ve çevre:', saglikliYasamVeCevreKonu.alistirma.length, '+', saglikliYasamVeCevreKonu.test.length);
console.log('Okul ve sınıf:', okulVeSinifKonu.alistirma.length, '+', okulVeSinifKonu.test.length);
console.log('Aile ve arkadaşlık:', aileVeArkadaslikKonu.alistirma.length, '+', aileVeArkadaslikKonu.test.length);
console.log('Aile ve duygular:', aileDuygularKonu.alistirma.length, '+', aileDuygularKonu.test.length);
console.log('Toplum ve çevre:', toplumVeCevreKonu.alistirma.length, '+', toplumVeCevreKonu.test.length);
console.log('Sağlık ve temizlik:', saglikVeTemizlikKonu.alistirma.length, '+', saglikVeTemizlikKonu.test.length);
console.log('Güvenli yaşam:', guvenliYasamKonu.alistirma.length, '+', guvenliYasamKonu.test.length);
console.log('Meslekler ve çalışma hayatı:', mesleklerVeCalismaHayatiKonu.alistirma.length, '+', mesleklerVeCalismaHayatiKonu.test.length);
console.log('Ülkemiz ve vatandaşlık:', ulkemizVeVatandaslikKonu.alistirma.length, '+', ulkemizVeVatandaslikKonu.test.length);
console.log('Tarih ve kültürümüz:', tarihVeKulturumuzKonu.alistirma.length, '+', tarihVeKulturumuzKonu.test.length);
console.log('Doğal afetler ve korunma:', dogalAfetlerVeKorunmaKonu.alistirma.length, '+', dogalAfetlerVeKorunmaKonu.test.length);
console.log('Alfabe ve renkler:', alfabeVeRenklerKonu.alistirma.length, '+', alfabeVeRenklerKonu.test.length);
console.log('Sayılar ve sınıf eşyaları:', sayilarVeSinifEsyalariKonu.alistirma.length, '+', sayilarVeSinifEsyalariKonu.test.length);
console.log('Günler ve aylar:', gunlerVeAylarKonu.alistirma.length, '+', gunlerVeAylarKonu.test.length);
console.log('Hava durumu:', havaDurumuKonuIng.alistirma.length, '+', havaDurumuKonuIng.test.length);
console.log('Eylemler:', eylemlerKonuIng.alistirma.length, '+', eylemlerKonuIng.test.length);
console.log('Selamlaşma ve aile:', selamlasmaVeAileKonu.alistirma.length, '+', selamlasmaVeAileKonu.test.length);
console.log('Basit diyaloglar:', basitDiyaloglarKonu.alistirma.length, '+', basitDiyaloglarKonu.test.length);
console.log('Hayvanlar (İng):', hayvanlarIngKonu.alistirma.length, '+', hayvanlarIngKonu.test.length);
console.log('Yiyecekler:', yiyeceklerKonu.alistirma.length, '+', yiyeceklerKonu.test.length);
console.log('Şekiller (İng):', sekillerIngKonu.alistirma.length, '+', sekillerIngKonu.test.length);
console.log('Vücut bölümleri:', vucudBolumleriKonu.alistirma.length, '+', vucudBolumleriKonu.test.length);
console.log('Okul/hobiler/günlük:', okulHobilerGunlukKonu.alistirma.length, '+', okulHobilerGunlukKonu.test.length);
console.log('Oyuncaklar:', oyuncaklarKonu.alistirma.length, '+', oyuncaklarKonu.test.length);
console.log('Yazı türü — hikâye:', yazTuruHikayeKonu.alistirma.length, '+', yazTuruHikayeKonu.test.length);
console.log('Yazı türü — şiir:', yazTuruSiirKonu.alistirma.length, '+', yazTuruSiirKonu.test.length);
console.log('Olay sırası — metin:', olaySirasiMetinKonu.alistirma.length, '+', olaySirasiMetinKonu.test.length);
console.log('Olay sırası — zaman:', olaySirasiZamanKonu.alistirma.length, '+', olaySirasiZamanKonu.test.length);
console.log('Giyim eşyaları:', giyimEsyalariKonuIng.alistirma.length, '+', giyimEsyalariKonuIng.test.length);
console.log('Mevsimler (İng):', mevsimlerIngKonuParca.alistirma.length, '+', mevsimlerIngKonuParca.test.length);
console.log('Renkler:', renklerKonu.alistirma.length, '+', renklerKonu.test.length);
console.log('Duygular:', duygularKonu.alistirma.length, '+', duygularKonu.test.length);
console.log('Kısa hikayeler:', kisaHikayelerKonu.alistirma.length, '+', kisaHikayelerKonu.test.length);
console.log('İngilizce şarkılar:', ingilizceSarkilarKonu.alistirma.length, '+', ingilizceSarkilarKonu.test.length);
console.log('Görsel Sanatlar:', gorselSanatlarKonu.alistirma.length, '+', gorselSanatlarKonu.test.length);
console.log('Zekâ ve Dikkat:', zekaVeDikkatKonu.alistirma.length, '+', zekaVeDikkatKonu.test.length);

const bekci = spawnSync('node', [join(__dirname, 'verify-secenekler.mjs')], { stdio: 'inherit' });
if (bekci.status !== 0) {
  process.exit(bekci.status ?? 1);
}
