import { useMemo } from 'react';
import { Platform, StyleSheet, Text, View, type StyleProp, type TextStyle } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import { secenekGosterim } from '../utils/secenekGosterim';

interface Props {
  secenek: string | number;
  style?: StyleProp<TextStyle>;
}

/** Test şıkkı metni — responsive font, kırpma yok. */
export function SecenekMetni({ secenek, style }: Props) {
  const layout = useDeviceLayout();
  const metin = secenekGosterim(secenek);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        sarmalayici: {
          flexGrow: 0,
          flexShrink: 0,
          overflow: 'visible',
          paddingRight: layout.spacing(14),
          paddingLeft: layout.spacing(4),
        },
        metin: {
          fontSize: layout.font.lg,
          color: colors.metin,
          textAlign: 'left',
        },
      }),
    [layout],
  );

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
