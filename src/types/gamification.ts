export const POINTS_PER_CORRECT = 10;
export const POINTS_PER_LEVEL = 500;

export type BadgeId =
  | 'ilk_adim'
  | 'on_soru'
  | 'elli_soru'
  | 'bir_yildiz'
  | 'uc_yildiz'
  | 'bes_konu'
  | 'hikaye_ustasi';

export interface Badge {
  id: BadgeId;
  baslik: string;
  aciklama: string;
  emoji: string;
}

export const BADGES: Badge[] = [
  { id: 'ilk_adim', baslik: 'First Steps', aciklama: 'İlk doğru cevabını verdin!', emoji: '🌱' },
  { id: 'on_soru', baslik: 'Sharpshooter', aciklama: '10 doğru cevap topladın.', emoji: '🎯' },
  { id: 'elli_soru', baslik: 'On Fire', aciklama: '50 doğru cevap topladın.', emoji: '🔥' },
  { id: 'bir_yildiz', baslik: 'Brain Master', aciklama: 'İlk konunda yıldız kazandın.', emoji: '🧠' },
  { id: 'uc_yildiz', baslik: 'Puzzle Solver', aciklama: 'Bir konuda 3 yıldız aldın.', emoji: '🧩' },
  { id: 'bes_konu', baslik: 'Bookworm', aciklama: '5 konuyu tamamladın.', emoji: '📚' },
  { id: 'hikaye_ustasi', baslik: 'Artist', aciklama: '3 hikâyeyi tamamladın.', emoji: '🎨' },
];

export interface GamificationState {
  points: number;
  level: number;
  dogruToplam: number;
  tamamlananKonu: number;
  tamamlananHikaye: number;
  kazanilanRozetler: BadgeId[];
}

export function levelFromPoints(points: number): number {
  return Math.floor(points / POINTS_PER_LEVEL) + 1;
}

export function levelBaslik(level: number): string {
  const basliklar = ['Çırak', 'Kaşif', 'Uzman', 'Usta', 'Efsane', 'Şampiyon'];
  return basliklar[Math.min(level - 1, basliklar.length - 1)] ?? `Seviye ${level}`;
}
