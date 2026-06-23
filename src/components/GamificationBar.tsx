import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGamification } from '../contexts/GamificationContext';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { BADGES } from '../types/gamification';

export function GamificationBar() {
  const { points, level, levelBaslik, kazanilanRozetler } = useGamification();
  const { colors } = useTheme();
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.birincilAcik,
          borderRadius: layout.spacing(12),
          padding: layout.spacing(12),
          borderWidth: 2,
          borderColor: colors.birincil,
          gap: layout.spacing(8),
        },
        sol: { flex: 1, gap: layout.spacing(2) },
        seviye: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.baslik,
        },
        puan: {
          fontSize: layout.font.sm,
          color: colors.metin,
        },
        rozetler: {
          flexDirection: 'row',
          gap: layout.spacing(4),
        },
        rozet: { fontSize: layout.font.lg },
      }),
    [layout, colors],
  );

  const rozetEmojiler = BADGES.filter((b) => kazanilanRozetler.includes(b.id)).map(
    (b) => b.emoji,
  );

  return (
    <View style={styles.kutu}>
      <View style={styles.sol}>
        <Text style={styles.seviye}>
          Seviye {level} · {levelBaslik}
        </Text>
        <Text style={styles.puan}>{points} puan</Text>
      </View>
      {rozetEmojiler.length > 0 ? (
        <View style={styles.rozetler}>
          {rozetEmojiler.slice(0, 5).map((e, i) => (
            <Text key={i} style={styles.rozet}>
              {e}
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}
