import AsyncStorage from '@react-native-async-storage/async-storage';
import type { HikayeIlerleme, IlerlemeVerisi, KonuIlerleme, SoruKaydi } from '../types/progress';

const STORAGE_KEY = '@elanaz/ilerleme';

function konuKey(dersId: string, konuId: string): string {
  return `${dersId}:${konuId}`;
}

function hikayeKey(dersId: string, hikayeId: string): string {
  return `${dersId}:hikaye:${hikayeId}`;
}

function yildizHesapla(dogru: number, toplam: number): number {
  if (toplam === 0) return 0;
  const oran = dogru / toplam;
  if (oran >= 1) return 3;
  if (oran >= 0.8) return 2;
  if (oran >= 0.6) return 1;
  return 0;
}

async function load(): Promise<IlerlemeVerisi> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return { konular: {}, hikayeler: {} };
  try {
    const parsed = JSON.parse(raw) as Partial<IlerlemeVerisi>;
    return { konular: parsed.konular ?? {}, hikayeler: parsed.hikayeler ?? {} };
  } catch {
    return { konular: {}, hikayeler: {} };
  }
}

async function save(data: IlerlemeVerisi): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function getKonuIlerleme(dersId: string, konuId: string): Promise<KonuIlerleme | null> {
  const data = await load();
  return data.konular[konuKey(dersId, konuId)] ?? null;
}

export async function getHikayeIlerleme(dersId: string, hikayeId: string): Promise<HikayeIlerleme | null> {
  const data = await load();
  return data.hikayeler[hikayeKey(dersId, hikayeId)] ?? null;
}

export async function kaydetSoruCevabi(
  dersId: string,
  konuId: string,
  kayit: Omit<SoruKaydi, 'konuId' | 'dersId'>,
): Promise<void> {
  const data = await load();
  const key = konuKey(dersId, konuId);
  const mevcut = data.konular[key] ?? {
    konuId,
    dersId,
    tamamlandi: false,
    testSkoru: 0,
    testToplam: 0,
    yildiz: 0,
    sorular: [],
  };

  mevcut.sorular.push({ ...kayit, konuId, dersId });
  data.konular[key] = mevcut;
  await save(data);
}

export async function kaydetHikayeCevabi(
  dersId: string,
  hikayeId: string,
  kayit: Omit<SoruKaydi, 'konuId' | 'dersId'>,
): Promise<void> {
  const data = await load();
  const key = hikayeKey(dersId, hikayeId);
  const mevcut = data.hikayeler[key] ?? {
    hikayeId,
    dersId,
    tamamlandi: false,
    testSkoru: 0,
    testToplam: 0,
    yildiz: 0,
    sorular: [],
  };

  mevcut.sorular.push({ ...kayit, konuId: hikayeId, dersId, tip: 'hikaye' });
  data.hikayeler[key] = mevcut;
  await save(data);
}

export async function tamamlaKonu(
  dersId: string,
  konuId: string,
  testDogru: number,
  testToplam: number,
): Promise<KonuIlerleme> {
  const data = await load();
  const key = konuKey(dersId, konuId);
  const mevcut = data.konular[key] ?? {
    konuId,
    dersId,
    tamamlandi: false,
    testSkoru: 0,
    testToplam: 0,
    yildiz: 0,
    sorular: [],
  };

  mevcut.tamamlandi = true;
  mevcut.testSkoru = testDogru;
  mevcut.testToplam = testToplam;
  mevcut.yildiz = yildizHesapla(testDogru, testToplam);
  data.konular[key] = mevcut;
  await save(data);
  return mevcut;
}

export async function tamamlaHikaye(
  dersId: string,
  hikayeId: string,
  testDogru: number,
  testToplam: number,
): Promise<HikayeIlerleme> {
  const data = await load();
  const key = hikayeKey(dersId, hikayeId);
  const mevcut = data.hikayeler[key] ?? {
    hikayeId,
    dersId,
    tamamlandi: false,
    testSkoru: 0,
    testToplam: 0,
    yildiz: 0,
    sorular: [],
  };

  mevcut.tamamlandi = true;
  mevcut.testSkoru = testDogru;
  mevcut.testToplam = testToplam;
  mevcut.yildiz = yildizHesapla(testDogru, testToplam);
  data.hikayeler[key] = mevcut;
  await save(data);
  return mevcut;
}

export async function getTumIlerleme(): Promise<IlerlemeVerisi> {
  return load();
}

export async function getTumSoruKayitlari(): Promise<SoruKaydi[]> {
  const data = await load();
  const konuKayitlari = Object.values(data.konular).flatMap((k) => k.sorular);
  const hikayeKayitlari = Object.values(data.hikayeler).flatMap((h) => h.sorular);
  return [...konuKayitlari, ...hikayeKayitlari];
}
