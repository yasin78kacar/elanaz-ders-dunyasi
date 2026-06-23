import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGamification } from '../contexts/GamificationContext';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { BADGES } from '../types/gamification';

interface Props {
  compact?: boolean;
}

export function BadgeShowcase({ compact = false }: Props) {
  const { kazanilanRozetler } = useGamification();
  const { colors } = useTheme();
  const layout = useDeviceLayout();

  const sutunSayisi = compact ? (layout.isTablet ? 4 : 3) : layout.gridColumns + 1;
  const gap = layout.spacing(8);
  const pad = layout.spacing(compact ? 14 : 18);
  const kartGenislik =
    (layout.width - pad * 2 - gap * (sutunSayisi - 1) - layout.spacing(40)) / sutunSayisi;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(14),
          padding: pad,
          borderWidth: 2,
          borderColor: colors.kenarlik,
          gap: layout.spacing(10),
        },
        baslik: {
          fontSize: layout.font.lg,
          fontWeight: '700',
          color: colors.baslik,
        },
        ozet: {
          fontSize: layout.font.sm,
          color: colors.metin,
        },
        grid: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap,
        },
        kart: {
          width: Math.max(layout.spacing(88), kartGenislik),
          backgroundColor: colors.birincilAcik,
          borderRadius: layout.spacing(12),
          padding: layout.spacing(10),
          borderWidth: 2,
          borderColor: colors.birincil,
          alignItems: 'center',
          gap: layout.spacing(4),
        },
        kartKilitli: {
          backgroundColor: colors.kart,
          borderColor: colors.kenarlik,
          opacity: 0.45,
        },
        emoji: { fontSize: layout.spacing(compact ? 24 : 28) },
        ad: {
          fontSize: layout.font.sm,
          fontWeight: '700',
          color: colors.baslik,
          textAlign: 'center',
        },
        aciklama: {
          fontSize: layout.font.sm,
          color: colors.metin,
          textAlign: 'center',
          lineHeight: layout.spacing(18),
        },
      }),
    [layout, colors, compact, gap, pad, kartGenislik],
  );

  const kazanilanSayisi = kazanilanRozetler.length;

  return (
    <View style={styles.kutu}>
      <Text style={styles.baslik}>Rozetler</Text>
      <Text style={styles.ozet}>
        {kazanilanSayisi}/{BADGES.length} rozet kazanıldı
      </Text>
      <View style={styles.grid}>
        {BADGES.map((badge) => {
          const kazanildi = kazanilanRozetler.includes(badge.id);
          return (
            <View key={badge.id} style={[styles.kart, !kazanildi && styles.kartKilitli]}>
              <Text style={styles.emoji}>{badge.emoji}</Text>
              <Text style={styles.ad}>{badge.baslik}</Text>
              {!compact ? <Text style={styles.aciklama}>{badge.aciklama}</Text> : null}
            </View>
          );
        })}
      </View>
    </View>
  );
}
