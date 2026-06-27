import {
  ALL_THEME_VIDEO_SOURCES,
  type ThemeSubject,
} from './allThemeVideos.generated';

export type { ThemeSubject };
export { ALL_THEME_VIDEO_SOURCES, ALL_THEME_VIDEO_COUNT } from './allThemeVideos.generated';

export const THEME_SUBJECTS = ['math', 'turkce', 'fen', 'hayat', 'english'] as const satisfies readonly ThemeSubject[];

const THEME_COUNTS: Record<ThemeSubject, number> = {
  math: 10,
  turkce: 10,
  fen: 10,
  hayat: 10,
  english: 8,
};

export function themeVideoSlug(subject: ThemeSubject, temaNum: number): string {
  return `${subject}-tema-${temaNum}`;
}

export function getThemeVideo(subject: ThemeSubject, temaNum: number): number | undefined {
  return ALL_THEME_VIDEO_SOURCES[themeVideoSlug(subject, temaNum)];
}

export function getThemeVideoBySlug(slug: string): number | undefined {
  return ALL_THEME_VIDEO_SOURCES[slug];
}

export function listThemeVideoSlugs(subject: ThemeSubject): string[] {
  const count = THEME_COUNTS[subject];
  return Array.from({ length: count }, (_, i) => themeVideoSlug(subject, i + 1)).filter(
    (slug) => ALL_THEME_VIDEO_SOURCES[slug] !== undefined,
  );
}
