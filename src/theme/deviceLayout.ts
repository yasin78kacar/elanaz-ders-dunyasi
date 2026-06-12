import { Dimensions } from 'react-native';

/** Tablet hedefi: genişlik ≥ 768px */
export const TABLET_MIN_WIDTH = 768;

export type DeviceTier = 'phone' | 'tablet';

export const FLOW_SCALE: Record<DeviceTier, number> = {
  phone: 1.5,
  tablet: 2.5,
};

export interface Typography {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const TYPOGRAPHY: Record<DeviceTier, Typography> = {
  phone: { sm: 14, md: 15, lg: 16, xl: 16 },
  tablet: { sm: 18, md: 20, lg: 22, xl: 22 },
};

const BUTTON_HEIGHT: Record<DeviceTier, number> = {
  phone: 52,
  tablet: 70,
};

const GRID_COLUMNS: Record<DeviceTier, number> = {
  phone: 2,
  tablet: 3,
};

export function getWindowWidth(): number {
  return Dimensions.get('window').width;
}

export function getDeviceTier(width = getWindowWidth()): DeviceTier {
  return width >= TABLET_MIN_WIDTH ? 'tablet' : 'phone';
}

export function isTabletWidth(width = getWindowWidth()): boolean {
  return getDeviceTier(width) === 'tablet';
}

export function getFlowScale(width = getWindowWidth()): number {
  return FLOW_SCALE[getDeviceTier(width)];
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

/** Tablet için taban × 1.5, telefon için taban */
export function deviceSpacing(width: number, base: number): number {
  return Math.round(isTabletWidth(width) ? base * 1.5 : base);
}

export interface DeviceLayout {
  width: number;
  tier: DeviceTier;
  isTablet: boolean;
  gridColumns: number;
  flowScale: number;
  buttonHeight: number;
  font: Typography;
  spacing: (base: number) => number;
  flowSize: (base: number) => number;
  ikonSize: (base: number) => number;
  avatarSize: number;
  secenekIkonBoyut: number;
}

export function buildDeviceLayout(width: number): DeviceLayout {
  const tier = getDeviceTier(width);
  const isTablet = tier === 'tablet';
  const flowScale = FLOW_SCALE[tier];
  const spacing = (base: number) => deviceSpacing(width, base);

  return {
    width,
    tier,
    isTablet,
    gridColumns: GRID_COLUMNS[tier],
    flowScale,
    buttonHeight: BUTTON_HEIGHT[tier],
    font: TYPOGRAPHY[tier],
    spacing,
    flowSize: (base: number) => Math.round(base * flowScale),
    ikonSize: (base: number) => Math.round(base * (isTablet ? 1.5 : 1.3)),
    avatarSize: Math.round(56 * (isTablet ? 1.5 : 1.3)),
    secenekIkonBoyut: Math.round(32 * (isTablet ? 1.5 : 1.3)),
  };
}
