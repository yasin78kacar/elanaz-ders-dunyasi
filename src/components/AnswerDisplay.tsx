import { useMemo } from 'react';
import { StyleSheet, Text, View, type StyleProp, type TextStyle } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import { cevapMetniTextProps } from '../theme/typography';
import { secenekGosterim } from '../utils/secenekGosterim';

interface Props {
  text: string | number;
  style?: StyleProp<TextStyle>;
}

/** Cevap / şık metni — kırpma yok, içeriğe göre genişler. */
export function AnswerDisplay({ text, style }: Props) {
  const layout = useDeviceLayout();
  const metin = secenekGosterim(text);

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
          flexShrink: 0,
        },
      }),
    [layout],
  );

  return (
    <View style={styles.sarmalayici}>
      <Text style={[styles.metin, style]} {...cevapMetniTextProps()}>
        {metin}
      </Text>
    </View>
  );
}
