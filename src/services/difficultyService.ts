import AsyncStorage from '@react-native-async-storage/async-storage';
import type { DifficultyLevel } from '../types/difficulty';
import { DIFFICULTY_SESSION_SIZE } from '../types/difficulty';
import { getTumSoruKayitlari } from './progressStore';

const STORAGE_KEY = '@elanaz/difficulty';
const ADAPTIVE_KEY = '@elanaz/difficulty-adaptive';

interface AdaptiveState {
  ardisikDogru: number;
  ardisikYanlis: number;
}

const VARSAYILAN_ADAPTIVE: AdaptiveState = { ardisikDogru: 0, ardisikYanlis: 0 };

const SEVIYE_SIRASI: DifficultyLevel[] = ['easy', 'medium', 'hard'];

function seviyeIndeksi(level: DifficultyLevel): number {
  return SEVIYE_SIRASI.indexOf(level);
}

async function loadAdaptive(): Promise<AdaptiveState> {
  const raw = await AsyncStorage.getItem(ADAPTIVE_KEY);
  if (!raw) return VARSAYILAN_ADAPTIVE;
  try {
    return JSON.parse(raw) as AdaptiveState;
  } catch {
    return VARSAYILAN_ADAPTIVE;
  }
}

async function saveAdaptive(state: AdaptiveState): Promise<void> {
  await AsyncStorage.setItem(ADAPTIVE_KEY, JSON.stringify(state));
}

export async function getDifficulty(): Promise<DifficultyLevel> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (raw === 'easy' || raw === 'medium' || raw === 'hard') return raw;
  return 'medium';
}

export async function setDifficulty(level: DifficultyLevel): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, level);
}

export function getSessionSize(level: DifficultyLevel): number {
  return DIFFICULTY_SESSION_SIZE[level];
}

/** Genel doğruluk oranına göre önerilen zorluk. */
export async function getAccuracyBasedDifficulty(): Promise<DifficultyLevel> {
  const kayitlar = await getTumSoruKayitlari();
  if (kayitlar.length < 5) return getDifficulty();
  const dogru = kayitlar.filter((k) => k.dogruMu).length;
  const oran = dogru / kayitlar.length;
  if (oran >= 0.85) return 'hard';
  if (oran >= 0.6) return 'medium';
  return 'easy';
}

/** Ardışık cevaplar ve doğruluk oranına göre önerilen zorluk. */
export async function getAdaptiveDifficulty(): Promise<DifficultyLevel> {
  const mevcut = await getDifficulty();
  const adaptive = await loadAdaptive();
  const accuracyLevel = await getAccuracyBasedDifficulty();

  let onerilen = mevcut;
  if (adaptive.ardisikDogru >= 3) {
    onerilen = SEVIYE_SIRASI[Math.min(seviyeIndeksi(mevcut) + 1, 2)];
  } else if (adaptive.ardisikYanlis >= 2) {
    onerilen = SEVIYE_SIRASI[Math.max(seviyeIndeksi(mevcut) - 1, 0)];
  }

  const accuracyIdx = seviyeIndeksi(accuracyLevel);
  const onerilenIdx = seviyeIndeksi(onerilen);
  return SEVIYE_SIRASI[Math.round((accuracyIdx + onerilenIdx) / 2)];
}

export async function recordAnswerForAdaptive(dogruMu: boolean): Promise<DifficultyLevel> {
  const adaptive = await loadAdaptive();
  if (dogruMu) {
    adaptive.ardisikDogru += 1;
    adaptive.ardisikYanlis = 0;
  } else {
    adaptive.ardisikYanlis += 1;
    adaptive.ardisikDogru = 0;
  }
  await saveAdaptive(adaptive);
  return getAdaptiveDifficulty();
}
