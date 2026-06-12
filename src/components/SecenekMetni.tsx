import { Platform, StyleSheet, Text, View, type StyleProp, type TextStyle } from 'react-native';
import { colors } from '../theme/colors';
import { secenekGosterim } from '../utils/secenekGosterim';

interface Props {
  secenek: string | number;
  style?: StyleProp<TextStyle>;
}

/**
 * Test şıkkı metni.
 * Sabit minWidth / flex:1 kullanılmaz — Android borderRadius + dar kutu son harfi (r/n/z) kırpar.
 */
export function SecenekMetni({ secenek, style }: Props) {
  const metin = secenekGosterim(secenek);

  return (
    <View style={styles.sarmalayici}>
      <Text
        style={[styles.metin, style]}
        adjustsFontSizeToFit={false}
        allowFontScaling
        {...(Platform.OS === 'android'
          ? { includeFontPadding: false, textBreakStrategy: 'simple' as const }
          : {})}
      >
        {metin}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sarmalayici: {
    flexGrow: 0,
    flexShrink: 0,
    overflow: 'visible',
    paddingRight: 14,
    paddingLeft: 4,
  },
  metin: {
    fontSize: 18,
    color: colors.metin,
    textAlign: 'left',
  },
});
