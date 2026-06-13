import { Platform, type TextProps } from 'react-native';

/** Metin sığmazsa küçülme alt sınırı (cevap şıkları / etiketler). */
export const MINIMUM_FONT_SCALE = 0.85;

/** Şık ve cevap metinlerinde kırpma yerine otomatik küçültme */
export const metinSigdirProps: Pick<TextProps, 'adjustsFontSizeToFit' | 'minimumFontScale'> = {
  adjustsFontSizeToFit: true,
  minimumFontScale: MINIMUM_FONT_SCALE,
};

/** RN Text — son harf kırpılmasını önlemek için otomatik küçültme. */
export function cevapMetniTextProps(): Partial<TextProps> {
  return {
    ...metinSigdirProps,
    allowFontScaling: true,
    ...(Platform.OS === 'android'
      ? { includeFontPadding: false, textBreakStrategy: 'simple' as const }
      : {}),
  };
}
