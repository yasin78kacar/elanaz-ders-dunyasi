/* eslint-disable */
// Tema videoları için mapping ve helper fonksiyonları
import { ALL_THEME_VIDEO_SOURCES } from './allThemeVideos.generated';

export type ThemeVideoKey =
  | 'math-tema1' | 'math-tema2' | 'math-tema3' | 'math-tema4' | 'math-tema5'
  | 'math-tema6' | 'math-tema7' | 'math-tema8' | 'math-tema9' | 'math-tema10'
  | 'turkce-tema1' | 'turkce-tema2' | 'turkce-tema3' | 'turkce-tema4' | 'turkce-tema5'
  | 'turkce-tema6' | 'turkce-tema7' | 'turkce-tema8' | 'turkce-tema9' | 'turkce-tema10'
  | 'fen-tema1' | 'fen-tema2' | 'fen-tema3' | 'fen-tema4' | 'fen-tema5'
  | 'fen-tema6' | 'fen-tema7' | 'fen-tema8' | 'fen-tema9' | 'fen-tema10'
  | 'hayat-tema1' | 'hayat-tema2' | 'hayat-tema3' | 'hayat-tema4' | 'hayat-tema5'
  | 'hayat-tema6' | 'hayat-tema7' | 'hayat-tema8' | 'hayat-tema9' | 'hayat-tema10'
  | 'english-tema1' | 'english-tema2' | 'english-tema3' | 'english-tema4' | 'english-tema5'
  | 'english-tema6' | 'english-tema7' | 'english-tema8';

/** Tema video'su al */
export function getThemeVideoSource(key: ThemeVideoKey): number | undefined {
  return ALL_THEME_VIDEO_SOURCES[key];
}

/** Konu ID'den tema key'i oluştur */
export function getThemeVideoKeyForSubject(subject: string, temaNum: number): ThemeVideoKey | undefined {
  const subjectMap: Record<string, string> = {
    matematik: 'math',
    math: 'math',
    'türkçe': 'turkce',
    turkce: 'turkce',
    fen: 'fen',
    hayat: 'hayat',
    english: 'english',
    ingilizce: 'english',
  };

  const key = subjectMap[subject.toLowerCase()];
  if (!key) return undefined;

  return `${key}-tema${temaNum}` as ThemeVideoKey;
}

/** Tema video'su var mı? */
export function themeVideoExists(key: ThemeVideoKey): boolean {
  return Boolean(ALL_THEME_VIDEO_SOURCES[key]);
}
