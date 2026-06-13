import { useMemo } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { colors } from '../theme/colors';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import type { SecenekIkon as SecenekIkonTip } from '../types/content';
import { QuestionOption } from './QuestionOption';

interface Props {
  secenek: string | number;
  ikon?: SecenekIkonTip;
  secili?: boolean;
  dogru?: boolean;
  yanlis?: boolean;
  disabled?: boolean;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
}

/** Test şıkkı butonu — metin kırpılmaz. */
export function AnswerButton({
  secenek,
  ikon,
  secili,
  dogru,
  yanlis,
  disabled,
  onPress,
  textStyle,
}: Props) {
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        hit: { overflow: 'visible', alignSelf: 'stretch', flex: 1 },
        secenek: {
          borderWidth: 2,
          borderColor: colors.kenarlik,
          borderRadius: layout.spacing(12),
          paddingVertical: layout.spacing(16),
          paddingHorizontal: layout.spacing(24),
          paddingRight: layout.spacing(28),
          backgroundColor: colors.kart,
          overflow: 'visible',
          alignSelf: 'stretch',
          flex: 1,
          flexShrink: 0,
        },
        secenekSecili: {
          borderColor: colors.birincil,
          backgroundColor: colors.birincilAcik,
        },
        secenekDogru: {
          borderColor: colors.basari,
          backgroundColor: colors.basariAcik,
        },
        secenekYanlis: {
          borderColor: colors.hata,
          backgroundColor: colors.hataAcik,
        },
      }),
    [layout],
  );

  const kutuStili: StyleProp<ViewStyle> = [
    styles.secenek,
    secili && !dogru && !yanlis && styles.secenekSecili,
    dogru && styles.secenekDogru,
    yanlis && styles.secenekYanlis,
  ];

  return (
    <Pressable onPress={onPress} disabled={disabled} style={styles.hit}>
      <View collapsable={false} style={kutuStili}>
        <QuestionOption secenek={secenek} ikon={ikon} style={textStyle} />
      </View>
    </Pressable>
  );
}
