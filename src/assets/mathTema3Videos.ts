import indexJson from '../../assets/videos/math-tema3/index.json';
import { MATH_TEMA3_VIDEO_SOURCES } from './mathTema3Videos.generated';
import type { Gorsel } from '../types/content';

export interface MathTema3VideoMeta {
  id: number;
  slug: string;
  konu: string;
  videoFile: string;
  equation: string;
  a: number;
  b: number;
  nesneler: string[];
}

interface MathTema3Index {
  tema: string;
  konu: string;
  baslik: string;
  konuIds: string[];
  anlatimVideoIds: number[];
  videos: MathTema3VideoMeta[];
}

const index = indexJson as MathTema3Index;

export const MATH_TEMA3_VIDEOS = index.videos;
export const MATH_TEMA3_KONU_IDS = index.konuIds;
const ANLATIM_VIDEO_IDS = index.anlatimVideoIds;

export function getMathTema3VideoBySlug(slug: string): number | undefined {
  return MATH_TEMA3_VIDEO_SOURCES[slug];
}

export function getMathTema3VideoById(id: number): number | undefined {
  const meta = MATH_TEMA3_VIDEOS.find((v) => v.id === id);
  if (!meta) return undefined;
  return MATH_TEMA3_VIDEO_SOURCES[meta.slug];
}

/** Toplama işlemi denklemine göre video (terim sırası önemsiz). */
export function getMathTema3VideoByEquation(a: number, b: number): number | undefined {
  const meta = MATH_TEMA3_VIDEOS.find((v) => (v.a === a && v.b === b) || (v.a === b && v.b === a));
  if (!meta) return undefined;
  return MATH_TEMA3_VIDEO_SOURCES[meta.slug];
}

export function getMathTema3AnlatimVideo(konuId: string, ekranIndex = 0): number | undefined {
  if (!MATH_TEMA3_KONU_IDS.includes(konuId)) return undefined;
  const videoId = ANLATIM_VIDEO_IDS[ekranIndex];
  if (videoId === undefined) return undefined;
  return getMathTema3VideoById(videoId);
}

export function mathTema3KonuVideoDestekler(konuId: string): boolean {
  return MATH_TEMA3_KONU_IDS.includes(konuId);
}

export function getMathTema3SoruVideo(konuId: string | undefined, gorsel: Gorsel | undefined): number | undefined {
  if (!konuId || !mathTema3KonuVideoDestekler(konuId) || !gorsel || typeof gorsel === 'string') return undefined;
  if (gorsel.tur !== 'islem' || gorsel.mod !== 'toplama-grup') return undefined;
  if (gorsel.a === undefined || gorsel.b === undefined) return undefined;
  return getMathTema3VideoByEquation(gorsel.a, gorsel.b);
}
