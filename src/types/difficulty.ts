export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  easy: 'Kolay',
  medium: 'Orta',
  hard: 'Zor',
};

export const DIFFICULTY_SESSION_SIZE: Record<DifficultyLevel, number> = {
  easy: 3,
  medium: 5,
  hard: 7,
};
