import { useMemo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useMatematikMuzik } from '../context/MatematikMuzikContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';

/** Konu ekranlarında matematik müziği aç/kapa — varsayılan kapalı. */
export function MatematikMuzikButton() {
  const { playing, toggle } = useMatematikMuzik();
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        buton: {
          minWidth: layout.spacing(44),
          minHeight: layout.spacing(44),
          paddingHorizontal: layout.spacing(10),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: layout.spacing(10),
          marginRight: layout.spacing(4),
          backgroundColor: playing ? colors.birincilAcik : 'transparent',
          borderWidth: playing ? 2 : 0,
          borderColor: colors.birincil,
        },
        ikon: {
          fontSize: layout.font.xl,
        },
      }),
    [layout, playing],
  );

  return (
    <Pressable
      onPress={() => toggle()}
      style={({ pressed }) => [styles.buton, pressed && { opacity: 0.8 }]}
      accessibilityRole="button"
      accessibilityLabel={playing ? 'Müziği durdur' : 'Matematik müziğini çal'}
      hitSlop={8}
    >
      <Text style={styles.ikon}>🎵</Text>
    </Pressable>
  );
}
