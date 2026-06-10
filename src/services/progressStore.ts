import AsyncStorage from '@react-native-async-storage/async-storage';
import type { IlerlemeVerisi, KonuIlerleme, SoruKaydi } from '../types/progress';

const STORAGE_KEY = '@elanaz/ilerleme';

function konuKey(dersId: string, konuId: string): string {
  return `${dersId}:${konuId}`;
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
  if (!raw) return { konular: {} };
  try {
    return JSON.parse(raw) as IlerlemeVerisi;
  } catch {
    return { konular: {} };
  }
}

async function save(data: IlerlemeVerisi): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function getKonuIlerleme(dersId: string, konuId: string): Promise<KonuIlerleme | null> {
  const data = await load();
  return data.konular[konuKey(dersId, konuId)] ?? null;
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

export async function getTumIlerleme(): Promise<IlerlemeVerisi> {
  return load();
}

export async function getTumSoruKayitlari(): Promise<SoruKaydi[]> {
  const data = await load();
  return Object.values(data.konular).flatMap((k) => k.sorular);
}
