import { Platform, type TextProps } from 'react-native';
import { getTypography, type Typography } from './deviceLayout';

export type { Typography };
export { getTypography };

/** Metin sığmazsa küçülme alt sınırı (cevap şıkları / etiketler). */
export const MINIMUM_FONT_SCALE = 0.85;

/** RN Text — son harf kırpılmasını önlemek için otomatik küçültme. */
export function cevapMetniTextProps(): Partial<TextProps> {
  return {
    adjustsFontSizeToFit: true,
    minimumFontScale: MINIMUM_FONT_SCALE,
    allowFontScaling: true,
    ...(Platform.OS === 'android'
      ? { includeFontPadding: false, textBreakStrategy: 'simple' as const }
      : {}),
  };
}
