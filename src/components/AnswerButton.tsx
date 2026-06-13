import { useMemo, type ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';

interface Props {
  onPress: () => void;
  disabled?: boolean;
  selected?: boolean;
  correct?: boolean;
  wrong?: boolean;
  children: ReactNode;
}

/** Test şıkkı düğmesi — sabit genişlik yok, metin kırpılmaz. */
export function AnswerButton({
  onPress,
  disabled,
  selected,
  correct,
  wrong,
  children,
}: Props) {
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        hit: { overflow: 'visible', alignSelf: 'stretch' },
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

  return (
    <Pressable onPress={onPress} disabled={disabled} style={styles.hit}>
      <View
        collapsable={false}
        style={[
          styles.secenek,
          selected && !correct && !wrong && styles.secenekSecili,
          correct && styles.secenekDogru,
          wrong && styles.secenekYanlis,
        ]}
      >
        {children}
      </View>
    </Pressable>
  );
}
