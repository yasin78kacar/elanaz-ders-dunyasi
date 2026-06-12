/* eslint-disable */
// Bu dosya otomatik üretilir — scripts/catalog-flow-images.mjs
// Görselleri assets/images/ altına ekledikten sonra: npm run catalog-images

export const FLOW_IMAGE_COUNT = 0;

export const FLOW_CHARACTER_SOURCE: number | undefined = undefined;

export const FLOW_IMAGE_SOURCES: Record<string, number> = {};

export const FLOW_TOPIC_FALLBACKS: Record<string, number> = {};

export const FLOW_GEOMETRI_KONULARI = [
  'geometrik-cisimler',
  'geometrik-cisim-modelleri',
  'geometrik-sekil-modelleri',
  'bicimsel-ozellikler',
] as const;

export const FLOW_KONU_ONEK: Record<string, string> = {
  'sivi-olcme': 'g5m-',
  'bicimsel-ozellikler': 'g4m-',
  'geometrik-sekil-modelleri': 'g3m-',
  'geometrik-cisim-modelleri': 'g2m-',
};
