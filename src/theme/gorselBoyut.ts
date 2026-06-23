import {
  buildDeviceLayout,
  GORSEL_BOYUT,
  GORSEL_TABAN,
  getDeviceTier,
  getWindowWidth,
} from './deviceLayout';

export { GORSEL_BOYUT, GORSEL_TABAN };

export function gorselOlcekle(boyut: number, width?: number): number {
  const w = width ?? getWindowWidth();
  const gorsel = GORSEL_BOYUT[getDeviceTier(w)];
  return Math.round((boyut * gorsel.kucuk) / GORSEL_TABAN.kucuk);
}

export function flowGorselOlcekle(boyut: number, width?: number): number {
  const w = width ?? getWindowWidth();
  const gorsel = GORSEL_BOYUT[getDeviceTier(w)];
  return Math.round((boyut * gorsel.buyuk) / GORSEL_TABAN.buyuk);
}

export function flowGorselGenislik(width?: number): number {
  return flowGorselOlcekle(340, width);
}

export function flowGorselYukseklik(width?: number): number {
  return flowGorselOlcekle(220, width);
}

export function gorselCanvasBoyut(width?: number): { width: number; height: number } {
  const w = width ?? getWindowWidth();
  return buildDeviceLayout(w).gorselCanvas;
}

/** @deprecated useDeviceLayout().secenekIkonBoyut tercih edin */
export const SECENEK_IKON_BOYUT = gorselOlcekle(48);
export const SECENEK_IKON_VARSAYILAN = gorselOlcekle(42);
export const ESLESTIRME_SATIR_IKON = gorselOlcekle(45);
export const ESLESTIRME_IKON_BOYUT = gorselOlcekle(48);
export const ESLESTIRME_SEKIL_IKON = gorselOlcekle(42);
export const KARAKTER_AVATAR = gorselOlcekle(84);
