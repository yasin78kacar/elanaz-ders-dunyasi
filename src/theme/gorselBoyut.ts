import { getFlowScale, getUiIkonMultiplier, getWindowWidth } from './deviceLayout';

export function gorselOlcekle(boyut: number, width?: number): number {
  const w = width ?? getWindowWidth();
  return Math.round(boyut * getUiIkonMultiplier(w));
}

export function flowGorselOlcekle(boyut: number, width?: number): number {
  const w = width ?? getWindowWidth();
  return Math.round(boyut * getFlowScale(w));
}

export function flowGorselGenislik(width?: number): number {
  return flowGorselOlcekle(340, width);
}

export function flowGorselYukseklik(width?: number): number {
  return flowGorselOlcekle(220, width);
}

/** @deprecated useDeviceLayout().secenekIkonBoyut tercih edin */
export const SECENEK_IKON_BOYUT = gorselOlcekle(32);
export const SECENEK_IKON_VARSAYILAN = gorselOlcekle(28);
export const ESLESTIRME_SATIR_IKON = gorselOlcekle(30);
export const ESLESTIRME_IKON_BOYUT = gorselOlcekle(32);
export const ESLESTIRME_SEKIL_IKON = gorselOlcekle(28);
export const KARAKTER_AVATAR = gorselOlcekle(56);
