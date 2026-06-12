import { Platform, StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';
import { colors } from '../theme/colors';
import { secenekGosterim } from '../utils/secenekGosterim';

interface Props {
  secenek: string | number;
  style?: StyleProp<TextStyle>;
}

/** Test şıkkı metni — SvgText / Pressable kırpması olmadan tam gösterim. */
export function SecenekMetni({ secenek, style }: Props) {
  const metin = secenekGosterim(secenek);
  return (
    <Text
      style={[styles.metin, style]}
      adjustsFontSizeToFit={false}
      allowFontScaling
      {...(Platform.OS === 'android' ? { includeFontPadding: false } : {})}
    >
      {metin}
    </Text>
  );
}

const styles = StyleSheet.create({
  metin: {
    flexShrink: 0,
    fontSize: 18,
    color: colors.metin,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
});
