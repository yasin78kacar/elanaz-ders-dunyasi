import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { DifficultyLevel } from '../types/difficulty';
import { DIFFICULTY_LABELS, DIFFICULTY_SESSION_SIZE } from '../types/difficulty';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useTheme } from '../contexts/ThemeContext';

const SEVIYELER: DifficultyLevel[] = ['easy', 'medium', 'hard'];

interface Props {
  value: DifficultyLevel;
  onChange: (level: DifficultyLevel) => void;
  adaptiveHint?: DifficultyLevel;
}

export function DifficultySelector({ value, onChange, adaptiveHint }: Props) {
  const layout = useDeviceLayout();
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: { gap: layout.spacing(8) },
        baslik: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.baslik,
        },
        satir: {
          flexDirection: 'row',
          gap: layout.spacing(8),
        },
        secenek: {
          flex: 1,
          paddingVertical: layout.spacing(10),
          paddingHorizontal: layout.spacing(8),
          borderRadius: layout.spacing(12),
          borderWidth: 2,
          borderColor: colors.kenarlik,
          backgroundColor: colors.kart,
          alignItems: 'center',
        },
        secenekAktif: {
          borderColor: colors.birincil,
          backgroundColor: colors.birincilAcik,
        },
        secenekMetin: {
          fontSize: layout.font.sm,
          fontWeight: '600',
          color: colors.metin,
        },
        secenekMetinAktif: {
          color: colors.birincil,
        },
        ipucu: {
          fontSize: layout.font.sm,
          color: colors.turuncu,
          fontStyle: 'italic',
        },
        oturum: {
          fontSize: layout.font.sm,
          color: colors.metin,
        },
      }),
    [layout, colors],
  );

  return (
    <View style={styles.kutu}>
      <Text style={styles.baslik}>Zorluk Seviyesi</Text>
      <View style={styles.satir}>
        {SEVIYELER.map((seviye) => (
          <Pressable
            key={seviye}
            style={[styles.secenek, value === seviye && styles.secenekAktif]}
            onPress={() => onChange(seviye)}
          >
            <Text
              style={[styles.secenekMetin, value === seviye && styles.secenekMetinAktif]}
            >
              {DIFFICULTY_LABELS[seviye]}
            </Text>
          </Pressable>
        ))}
      </View>
      {adaptiveHint && adaptiveHint !== value ? (
        <Text style={styles.ipucu}>
          Öneri: {DIFFICULTY_LABELS[adaptiveHint]} seviyeye geçebilirsin
        </Text>
      ) : null}
      <Text style={styles.oturum}>
        {DIFFICULTY_SESSION_SIZE[value]} soru ·{' '}
        {value === 'easy' ? 'kolay sorular' : value === 'hard' ? 'zor sorular' : 'karışık sorular'}
      </Text>
    </View>
  );
}
