import { FLOW_VIDEOS, type FlowVideoKey } from './flowVideos.generated';

export type { FlowVideoKey };

/** Konu anlatım ekranlarına sırayla bağlanan videolar */
const KONU_ANLATIM_VIDEOLARI: Record<string, FlowVideoKey[]> = {
  'sayi-dogrusu': ['konu-sayi-dogrusu'],
  'onluk-birlik': ['konu-onluk-birlik-anlatim', 'konu-onluk-blok-saying'],
  'sayilari-okuma-yazma': ['konu-sayi-okuma'],
  'ritmik-sayma': ['konu-ritmik-sayma'],
  'geometrik-cisimler': ['konu-geometrik-cisimler'],
  'tahmin-etme': ['konu-tahmin-etme'],
};

export function getVideoSource(key: FlowVideoKey): number {
  return FLOW_VIDEOS[key];
}

/** Konu anlatımında gösterilecek video (ekran indeksine göre) */
export function getKonuAnlatimVideo(konuId: string, ekranIndex = 0): number | undefined {
  const keys = KONU_ANLATIM_VIDEOLARI[konuId];
  if (!keys?.length) return undefined;
  const key = keys[Math.min(ekranIndex, keys.length - 1)];
  return FLOW_VIDEOS[key];
}

export function konuAnlatimindaVideoVar(konuId: string): boolean {
  return Boolean(KONU_ANLATIM_VIDEOLARI[konuId]?.length);
}

export const SISTEM_VIDEOLARI = {
  dogru: 'dogru-kutlama' as const,
  yanlis: 'yanlis-teselli' as const,
  sasirtma: 'sasirtma-uyari' as const,
  acilis: 'acilis-merhaba' as const,
  annePanel: 'anne-panel' as const,
};
