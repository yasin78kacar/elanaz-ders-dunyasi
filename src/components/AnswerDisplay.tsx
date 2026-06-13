import { Platform, StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';
import { metinSigdirProps } from '../theme/typography';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
}

/** Şık / cevap metni — sabit genişlik yok, kırpma yok. */
export function AnswerDisplay({ children, style }: Props) {
  return (
    <Text
      style={[styles.metin, style]}
      {...metinSigdirProps}
      allowFontScaling
      {...(Platform.OS === 'android'
        ? { includeFontPadding: false, textBreakStrategy: 'simple' as const }
        : {})}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  metin: {
    flex: 1,
    flexShrink: 0,
    overflow: 'visible',
    textAlign: 'left',
  },
});
