import AsyncStorage from '@react-native-async-storage/async-storage';
import type { DifficultyLevel } from '../types/difficulty';
import { DIFFICULTY_SESSION_SIZE } from '../types/difficulty';

const STORAGE_KEY = '@elanaz/difficulty';
const ADAPTIVE_KEY = '@elanaz/difficulty-adaptive';

interface AdaptiveState {
  ardisikDogru: number;
  ardisikYanlis: number;
}

const VARSAYILAN_ADAPTIVE: AdaptiveState = { ardisikDogru: 0, ardisikYanlis: 0 };

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

/** Son cevaplara göre önerilen zorluk. */
export async function getAdaptiveDifficulty(): Promise<DifficultyLevel> {
  const mevcut = await getDifficulty();
  const adaptive = await loadAdaptive();
  if (adaptive.ardisikDogru >= 3) return 'hard';
  if (adaptive.ardisikYanlis >= 2) return 'easy';
  return mevcut;
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
