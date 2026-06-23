import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ThemeMode } from '../contexts/ThemeContext';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';

const MODLAR: { mode: ThemeMode; etiket: string; emoji: string }[] = [
  { mode: 'light', etiket: 'Açık', emoji: '☀️' },
  { mode: 'dark', etiket: 'Koyu', emoji: '🌙' },
  { mode: 'system', etiket: 'Sistem', emoji: '⚙️' },
];

export function ThemeToggle() {
  const { mode, setMode, colors } = useTheme();
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        satir: {
          flexDirection: 'row',
          gap: layout.spacing(8),
        },
        buton: {
          flex: 1,
          paddingVertical: layout.spacing(8),
          borderRadius: layout.spacing(10),
          borderWidth: 2,
          borderColor: colors.kenarlik,
          backgroundColor: colors.kart,
          alignItems: 'center',
        },
        butonAktif: {
          borderColor: colors.birincil,
          backgroundColor: colors.birincilAcik,
        },
        metin: {
          fontSize: layout.font.sm,
          fontWeight: '600',
          color: colors.metin,
        },
      }),
    [layout, colors],
  );

  return (
    <View style={styles.satir}>
      {MODLAR.map((m) => (
        <Pressable
          key={m.mode}
          style={[styles.buton, mode === m.mode && styles.butonAktif]}
          onPress={() => setMode(m.mode)}
        >
          <Text style={styles.metin}>
            {m.emoji} {m.etiket}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
