import { useMemo } from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { secenekGosterim } from '../utils/secenekGosterim';
import type { SecenekIkon as SecenekIkonTip } from '../types/content';
import { SecenekIkon } from './nesneler/SecenekIkon';
import { AnswerDisplay } from './AnswerDisplay';

interface Props {
  secenek: string | number;
  ikon?: SecenekIkonTip;
  style?: StyleProp<TextStyle>;
}

/** Tek şık satırı — ikon + metin, esnek genişlik. */
export function QuestionOption({ secenek, ikon, style }: Props) {
  const layout = useDeviceLayout();
  const metin = secenekGosterim(secenek);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        sarmalayici: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: layout.spacing(10),
          flex: 1,
          flexShrink: 0,
          flexWrap: 'nowrap',
          overflow: 'visible',
          paddingRight: layout.spacing(6),
        },
      }),
    [layout],
  );

  return (
    <View style={styles.sarmalayici}>
      {ikon ? <SecenekIkon ikon={ikon} size={layout.secenekIkonBoyut} /> : null}
      <AnswerDisplay style={style}>{metin}</AnswerDisplay>
    </View>
  );
}
