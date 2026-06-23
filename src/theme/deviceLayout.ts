import { Dimensions } from 'react-native';

/** 9.7" tablet */
export const TABLET_SMALL_MIN_WIDTH = 768;
/** 11" tablet */
export const TABLET_MEDIUM_MIN_WIDTH = 834;
/** 13" tablet */
export const TABLET_LARGE_MIN_WIDTH = 1024;

/** @deprecated TABLET_SMALL_MIN_WIDTH kullanın */
export const TABLET_MIN_WIDTH = TABLET_SMALL_MIN_WIDTH;

export type DeviceTier = 'phone' | 'tabletSmall' | 'tabletMedium' | 'tabletLarge';

export const FLOW_SCALE: Record<DeviceTier, number> = {
  phone: 1.5,
  tabletSmall: 2.0,
  tabletMedium: 2.5,
  tabletLarge: 3.0,
};

export interface Typography {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const TYPOGRAPHY: Record<DeviceTier, Typography> = {
  phone: { sm: 14, md: 15, lg: 16, xl: 16 },
  tabletSmall: { sm: 18, md: 20, lg: 22, xl: 22 },
  tabletMedium: { sm: 20, md: 22, lg: 24, xl: 24 },
  tabletLarge: { sm: 22, md: 24, lg: 26, xl: 26 },
};

const BUTTON_HEIGHT: Record<DeviceTier, number> = {
  phone: 52,
  tabletSmall: 68,
  tabletMedium: 74,
  tabletLarge: 80,
};

const GRID_COLUMNS: Record<DeviceTier, number> = {
  phone: 2,
  tabletSmall: 3,
  tabletMedium: 3,
  tabletLarge: 4,
};

/** Padding/gap çarpanı: telefon 1×, küçük tablet +50%, orta +60%, büyük +70% */
const SPACING_MULTIPLIER: Record<DeviceTier, number> = {
  phone: 1,
  tabletSmall: 1.5,
  tabletMedium: 1.6,
  tabletLarge: 1.7,
};

const UI_IKON_MULTIPLIER: Record<DeviceTier, number> = {
  phone: 1.3,
  tabletSmall: 1.5,
  tabletMedium: 1.6,
  tabletLarge: 1.7,
};

/** Görsel boyut token'ları — hedef render piksel değerleri (küçük / orta / büyük). */
export const GORSEL_BOYUT: Record<DeviceTier, { kucuk: number; orta: number; buyuk: number }> = {
  phone: { kucuk: 72, orta: 120, buyuk: 220 },
  tabletSmall: { kucuk: 144, orta: 240, buyuk: 400 },
  tabletMedium: { kucuk: 180, orta: 300, buyuk: 480 },
  tabletLarge: { kucuk: 216, orta: 360, buyuk: 576 },
};

/** Eski taban değerler — ikonSize / flowSize oranlaması için. */
export const GORSEL_TABAN = { kucuk: 48, orta: 80, buyuk: 220 } as const;

export function getWindowWidth(): number {
  return Dimensions.get('window').width;
}

export function getDeviceTier(width = getWindowWidth()): DeviceTier {
  if (width >= TABLET_LARGE_MIN_WIDTH) return 'tabletLarge';
  if (width >= TABLET_MEDIUM_MIN_WIDTH) return 'tabletMedium';
  if (width >= TABLET_SMALL_MIN_WIDTH) return 'tabletSmall';
  return 'phone';
}

export function isTabletWidth(width = getWindowWidth()): boolean {
  return width >= TABLET_SMALL_MIN_WIDTH;
}

export function getFlowScale(width = getWindowWidth()): number {
  return FLOW_SCALE[getDeviceTier(width)];
}

export function getUiIkonMultiplier(width = getWindowWidth()): number {
  return UI_IKON_MULTIPLIER[getDeviceTier(width)];
}

export function getTypography(width = getWindowWidth()): Typography {
  return TYPOGRAPHY[getDeviceTier(width)];
}

export function getButtonHeight(width = getWindowWidth()): number {
  return BUTTON_HEIGHT[getDeviceTier(width)];
}

export function getGridColumns(width = getWindowWidth()): number {
  return GRID_COLUMNS[getDeviceTier(width)];
}

export function deviceSpacing(width: number, base: number): number {
  return Math.round(base * SPACING_MULTIPLIER[getDeviceTier(width)]);
}

/** En büyük sabit boşluk token'ının taban piksel değeri. */
const SPACING_XXXL_BASE = 120;

export type SpacingFn = ((base: number) => number) & {
  xxxl: number;
};

function buildSpacing(width: number): SpacingFn {
  const fn = ((base: number) => deviceSpacing(width, base)) as SpacingFn;
  fn.xxxl = deviceSpacing(width, SPACING_XXXL_BASE);
  return fn;
}

export interface DeviceLayout {
  width: number;
  tier: DeviceTier;
  isTablet: boolean;
  gridColumns: number;
  flowScale: number;
  buttonHeight: number;
  font: Typography;
  spacing: SpacingFn;
  gorselBoyut: { kucuk: number; orta: number; buyuk: number };
  flowSize: (base: number) => number;
  ikonSize: (base: number) => number;
  avatarSize: number;
  secenekIkonBoyut: number;
  gorselCanvas: { width: number; height: number };
}

export function buildDeviceLayout(width: number): DeviceLayout {
  const tier = getDeviceTier(width);
  const isTablet = tier !== 'phone';
  const flowScale = FLOW_SCALE[tier];
  const gorsel = GORSEL_BOYUT[tier];
  const spacing = buildSpacing(width);
  const canvasHeight = gorsel.orta;
  const canvasWidth = Math.round((canvasHeight * 280) / 120);

  return {
    width,
    tier,
    isTablet,
    gridColumns: GRID_COLUMNS[tier],
    flowScale,
    buttonHeight: BUTTON_HEIGHT[tier],
    font: TYPOGRAPHY[tier],
    spacing,
    gorselBoyut: gorsel,
    flowSize: (base: number) => Math.round((base * gorsel.buyuk) / GORSEL_TABAN.buyuk),
    ikonSize: (base: number) => Math.round((base * gorsel.kucuk) / GORSEL_TABAN.kucuk),
    avatarSize: Math.round((56 * gorsel.orta) / GORSEL_TABAN.orta),
    secenekIkonBoyut: gorsel.kucuk,
    gorselCanvas: { width: canvasWidth, height: canvasHeight },
  };
}
