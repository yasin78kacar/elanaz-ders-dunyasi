import AsyncStorage from '@react-native-async-storage/async-storage';
import type { SoruKaydi, KonuIlerleme, HikayeIlerleme } from '../types/progress';
import {
  clearProgress as clearStoredProgress,
  getTumIlerleme,
  getTumSoruKayitlari,
  kaydetSoruCevabi,
  tamamlaKonu,
  tamamlaHikaye,
  kaydetHikayeCevabi,
} from './progressStore';
import { getDersListesi, getDersKonuYolu, okumaKosesiMi } from './contentLoader';

const GAME_STORAGE_KEY = '@elanaz_game_data';

type GameData = { points: number; level: number; badges: any[] };

export interface DersSureDetay {
  dersId: string;
  dersBaslik: string;
  sureSaniye: number;
}

export interface KonuSureDetay {
  dersId: string;
  konuId: string;
  konuBaslik: string;
  sureSaniye: number;
}

export interface GenelIstatistikler {
  cozulenSoru: number;
  dogruSoru: number;
  dogrulukYuzde: number;
  toplamSureSaniye: number;
  tamamlananKonu: number;
  tamamlananHikaye: number;
  dersDetaylari: DersIlerlemeDetay[];
  dersSureleri: DersSureDetay[];
  konuSureleri: KonuSureDetay[];
}

export interface TemaIlerleme {
  temaId: string;
  temaBaslik: string;
  dersId: string;
  dersBaslik: string;
  cozulenSoru: number;
  dogruSoru: number;
  tamamlananKonu: number;
  toplamKonu: number;
}

export interface DersIlerlemeDetay {
  dersId: string;
  dersBaslik: string;
  cozulenSoru: number;
  dogruSoru: number;
  tamamlananKonu: number;
  toplamKonu: number;
  temalar: TemaIlerleme[];
}

export interface Oneri {
  tip: 'konu' | 'tekrar' | 'hikaye';
  baslik: string;
  aciklama: string;
  dersId?: string;
  konuId?: string;
}

export { kaydetSoruCevabi, kaydetHikayeCevabi, tamamlaKonu, tamamlaHikaye, getTumIlerleme, getTumSoruKayitlari };
export type { SoruKaydi, KonuIlerleme, HikayeIlerleme };

export async function getDersDetaylari(): Promise<DersIlerlemeDetay[]> {
  const dersler = getDersListesi();
  const kayitlar = await getTumSoruKayitlari();
  const ilerleme = await getTumIlerleme();

  return dersler
    .filter((d) => !okumaKosesiMi(d.id))
    .map((ders) => {
      const konular = getDersKonuYolu(ders.id);
      const dersKayitlari = kayitlar.filter((k) => k.dersId === ders.id);
      const temaMap = new Map<string, TemaIlerleme>();

      for (const konu of konular) {
        const temaKey = konu.uniteBaslik;
        const mevcut = temaMap.get(temaKey) ?? {
          temaId: temaKey,
          temaBaslik: konu.uniteBaslik,
          dersId: ders.id,
          dersBaslik: ders.baslik,
          cozulenSoru: 0,
          dogruSoru: 0,
          tamamlananKonu: 0,
          toplamKonu: 0,
        };
        mevcut.toplamKonu += 1;
        const konuKey = `${ders.id}:${konu.id}`;
        const konuIlerleme = ilerleme.konular[konuKey];
        if (konuIlerleme?.tamamlandi) mevcut.tamamlananKonu += 1;
        const konuKayitlari = dersKayitlari.filter((k) => k.konuId === konu.id);
        mevcut.cozulenSoru += konuKayitlari.length;
        mevcut.dogruSoru += konuKayitlari.filter((k) => k.dogruMu).length;
        temaMap.set(temaKey, mevcut);
      }

      const tamamlananKonu = Object.values(ilerleme.konular).filter(
        (k) => k.dersId === ders.id && k.tamamlandi,
      ).length;

      return {
        dersId: ders.id,
        dersBaslik: ders.baslik,
        cozulenSoru: dersKayitlari.length,
        dogruSoru: dersKayitlari.filter((k) => k.dogruMu).length,
        tamamlananKonu,
        toplamKonu: konular.length,
        temalar: Array.from(temaMap.values()),
      };
    });
}

export async function getOneriler(): Promise<Oneri[]> {
  const oneriler: Oneri[] = [];
  const kayitlar = await getTumSoruKayitlari();
  const yanlislar = kayitlar.filter((k) => !k.dogruMu);

  if (yanlislar.length > 0) {
    const son = yanlislar[yanlislar.length - 1];
    oneriler.push({
      tip: 'tekrar',
      baslik: 'Yanlış soruları tekrar et',
      aciklama: `"${son.soruMetni.slice(0, 40)}..." konusunu pekiştir.`,
      dersId: son.dersId,
      konuId: son.konuId,
    });
  }

  const detaylar = await getDersDetaylari();
  for (const ders of detaylar) {
    const eksikTema = ders.temalar.find(
      (t) => t.tamamlananKonu < t.toplamKonu && t.cozulenSoru === 0,
    );
    if (eksikTema) {
      oneriler.push({
        tip: 'konu',
        baslik: `${eksikTema.temaBaslik} temasına başla`,
        aciklama: `${ders.dersBaslik} dersinde yeni bir tema seni bekliyor.`,
        dersId: ders.dersId,
      });
      break;
    }
  }

  if (oneriler.length === 0) {
    oneriler.push({
      tip: 'konu',
      baslik: 'Günlük pratik yap',
      aciklama: 'Her gün bir konu çözmek öğrenmeyi pekiştirir.',
    });
  }

  return oneriler.slice(0, 3);
}

/** lessonId format: `dersId:konuId` */
export async function saveProgress(data: GameData): Promise<void>;
export async function saveProgress(
  lessonId: string,
  correct: number,
  total: number,
  timeSpent: number,
): Promise<KonuIlerleme>;
export async function saveProgress(
  arg1: GameData | string,
  correct?: number,
  total?: number,
  timeSpent?: number,
): Promise<void | KonuIlerleme> {
  if (typeof arg1 === 'string') {
    const sep = arg1.indexOf(':');
    if (sep < 0) {
      throw new Error('saveProgress lessonId "dersId:konuId" formatında olmalı');
    }
    const dersId = arg1.slice(0, sep);
    const konuId = arg1.slice(sep + 1);
    return tamamlaKonu(dersId, konuId, correct!, total!, timeSpent!);
  }

  try {
    await AsyncStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(arg1));
  } catch (e) {
    console.error('Save progress error:', e);
  }
}

export async function getProgress(): Promise<GameData>;
export async function getProgress(subject: string): Promise<DersIlerlemeDetay | null>;
export async function getProgress(
  subject?: string,
): Promise<GameData | DersIlerlemeDetay | null> {
  if (subject !== undefined) {
    const detaylar = await getDersDetaylari();
    return detaylar.find((d) => d.dersId === subject) ?? null;
  }

  try {
    const data = await AsyncStorage.getItem(GAME_STORAGE_KEY);
    return data ? JSON.parse(data) : { points: 0, level: 1, badges: [] };
  } catch (e) {
    console.error('Get progress error:', e);
    return { points: 0, level: 1, badges: [] };
  }
}

export async function clearProgress(): Promise<void> {
  await clearStoredProgress();
}

export async function getGenelIstatistikler(): Promise<GenelIstatistikler> {
  const kayitlar = await getTumSoruKayitlari();
  const ilerleme = await getTumIlerleme();
  const dersDetaylari = await getDersDetaylari();

  const cozulenSoru = kayitlar.length;
  const dogruSoru = kayitlar.filter((k) => k.dogruMu).length;
  const dogrulukYuzde = cozulenSoru > 0 ? Math.round((dogruSoru / cozulenSoru) * 100) : 0;

  const konuSureleri: KonuSureDetay[] = [];
  let toplamSureSaniye = 0;

  for (const konu of Object.values(ilerleme.konular)) {
    const sure = konu.sureSaniye ?? 0;
    if (sure <= 0) continue;
    toplamSureSaniye += sure;
    const konuBilgi = getDersKonuYolu(konu.dersId).find((k) => k.id === konu.konuId);
    konuSureleri.push({
      dersId: konu.dersId,
      konuId: konu.konuId,
      konuBaslik: konuBilgi?.baslik ?? konu.konuId,
      sureSaniye: sure,
    });
  }

  for (const hikaye of Object.values(ilerleme.hikayeler)) {
    const sure = hikaye.sureSaniye ?? 0;
    toplamSureSaniye += sure;
  }

  const dersSureMap = new Map<string, number>();
  for (const k of konuSureleri) {
    dersSureMap.set(k.dersId, (dersSureMap.get(k.dersId) ?? 0) + k.sureSaniye);
  }
  for (const h of Object.values(ilerleme.hikayeler)) {
    const sure = h.sureSaniye ?? 0;
    if (sure > 0) {
      dersSureMap.set(h.dersId, (dersSureMap.get(h.dersId) ?? 0) + sure);
    }
  }

  const dersSureleri: DersSureDetay[] = getDersListesi()
    .map((ders) => ({
      dersId: ders.id,
      dersBaslik: ders.baslik,
      sureSaniye: dersSureMap.get(ders.id) ?? 0,
    }))
    .filter((d) => d.sureSaniye > 0);

  const tamamlananKonu = Object.values(ilerleme.konular).filter((k) => k.tamamlandi).length;
  const tamamlananHikaye = Object.values(ilerleme.hikayeler).filter((h) => h.tamamlandi).length;

  konuSureleri.sort((a, b) => b.sureSaniye - a.sureSaniye);

  return {
    cozulenSoru,
    dogruSoru,
    dogrulukYuzde,
    toplamSureSaniye,
    tamamlananKonu,
    tamamlananHikaye,
    dersDetaylari,
    dersSureleri,
    konuSureleri,
  };
}

export const getStatistics = getGenelIstatistikler;
