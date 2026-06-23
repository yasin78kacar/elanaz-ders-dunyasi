import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  BADGES,
  pointsForCorrectAnswer,
  type Badge,
  type BadgeId,
  type GamificationState,
  levelBaslik,
  levelFromPoints,
} from '../types/gamification';

const STORAGE_KEY = '@elanaz/gamification';

const VARSAYILAN: GamificationState = {
  points: 0,
  level: 1,
  dogruToplam: 0,
  tamamlananKonu: 0,
  tamamlananHikaye: 0,
  kazanilanRozetler: [],
};

interface GamificationContextValue extends GamificationState {
  levelBaslik: string;
  rozetler: Badge[];
  recordCorrectAnswer: (pointMultiplier?: number) => Promise<BadgeId[]>;
  recordTopicComplete: (yildiz: number) => Promise<BadgeId[]>;
  recordStoryComplete: () => Promise<BadgeId[]>;
  yukleniyor: boolean;
}

const GamificationContext = createContext<GamificationContextValue | null>(null);

async function loadState(): Promise<GamificationState> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return VARSAYILAN;
  try {
    const parsed = JSON.parse(raw) as Partial<GamificationState>;
    const points = parsed.points ?? 0;
    return {
      points,
      level: levelFromPoints(points),
      dogruToplam: parsed.dogruToplam ?? 0,
      tamamlananKonu: parsed.tamamlananKonu ?? 0,
      tamamlananHikaye: parsed.tamamlananHikaye ?? 0,
      kazanilanRozetler: parsed.kazanilanRozetler ?? [],
    };
  } catch {
    return VARSAYILAN;
  }
}

async function saveState(state: GamificationState): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function yeniRozetler(
  mevcut: BadgeId[],
  adaylar: { id: BadgeId; kosul: boolean }[],
): BadgeId[] {
  const eklenen: BadgeId[] = [];
  for (const a of adaylar) {
    if (a.kosul && !mevcut.includes(a.id)) {
      eklenen.push(a.id);
      mevcut.push(a.id);
    }
  }
  return eklenen;
}

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GamificationState>(VARSAYILAN);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    loadState().then((s) => {
      setState(s);
      setYukleniyor(false);
    });
  }, []);

  const recordCorrectAnswer = useCallback(async (pointMultiplier = 1): Promise<BadgeId[]> => {
    const dogruToplam = state.dogruToplam + 1;
    const points = state.points + pointsForCorrectAnswer(pointMultiplier);
    const rozetler = [...state.kazanilanRozetler];
    const eklenen = yeniRozetler(rozetler, [
      { id: 'ilk_adim', kosul: dogruToplam >= 1 },
      { id: 'on_soru', kosul: dogruToplam >= 10 },
      { id: 'elli_soru', kosul: dogruToplam >= 50 },
    ]);
    const yeni: GamificationState = {
      points,
      level: levelFromPoints(points),
      dogruToplam,
      tamamlananKonu: state.tamamlananKonu,
      tamamlananHikaye: state.tamamlananHikaye,
      kazanilanRozetler: rozetler,
    };
    setState(yeni);
    await saveState(yeni);
    return eklenen;
  }, [state]);

  const recordTopicComplete = useCallback(
    async (yildiz: number): Promise<BadgeId[]> => {
      const tamamlananKonu = state.tamamlananKonu + 1;
      const rozetler = [...state.kazanilanRozetler];
      const eklenen = yeniRozetler(rozetler, [
        { id: 'bir_yildiz', kosul: yildiz >= 1 },
        { id: 'uc_yildiz', kosul: yildiz >= 3 },
        { id: 'bes_konu', kosul: tamamlananKonu >= 5 },
      ]);
      const yeni: GamificationState = {
        ...state,
        tamamlananKonu,
        kazanilanRozetler: rozetler,
      };
      setState(yeni);
      await saveState(yeni);
      return eklenen;
    },
    [state],
  );

  const recordStoryComplete = useCallback(async (): Promise<BadgeId[]> => {
    const tamamlananHikaye = state.tamamlananHikaye + 1;
    const rozetler = [...state.kazanilanRozetler];
    const eklenen = yeniRozetler(rozetler, [
      { id: 'hikaye_ustasi', kosul: tamamlananHikaye >= 3 },
    ]);
    const yeni: GamificationState = {
      ...state,
      tamamlananHikaye,
      kazanilanRozetler: rozetler,
    };
    setState(yeni);
    await saveState(yeni);
    return eklenen;
  }, [state]);

  const value = useMemo<GamificationContextValue>(
    () => ({
      ...state,
      levelBaslik: levelBaslik(state.level),
      rozetler: BADGES.filter((b) => state.kazanilanRozetler.includes(b.id)),
      recordCorrectAnswer,
      recordTopicComplete,
      recordStoryComplete,
      yukleniyor,
    }),
    [state, recordCorrectAnswer, recordTopicComplete, recordStoryComplete, yukleniyor],
  );

  return (
    <GamificationContext.Provider value={value}>{children}</GamificationContext.Provider>
  );
}

export function useGamification(): GamificationContextValue {
  const ctx = useContext(GamificationContext);
  if (!ctx) throw new Error('useGamification GamificationProvider içinde kullanılmalı');
  return ctx;
}

/** Typo-tolerant alias — spec: useGameification */
export const useGameification = useGamification;
