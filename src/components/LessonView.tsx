import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { AnlatimEkrani } from '../types/content';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { ElanazHeader } from './ElanazHeader';
import { ContentIllustration } from './ContentIllustration';
import { VideoIzleButton } from './VideoIzleButton';

interface Props {
  ekran: AnlatimEkrani;
  konuId: string;
  index: number;
  toplam: number;
  anlatimVideo?: number;
}

export function LessonView({ ekran, konuId, index, toplam, anlatimVideo }: Props) {
  const layout = useDeviceLayout();
  const { colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: { gap: layout.spacing(32) },
        etiket: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.turuncu,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        },
        anlatimMetin: {
          fontSize: layout.font.lg,
          lineHeight: layout.spacing(34),
          color: colors.baslik,
          marginTop: layout.spacing(8),
        },
        sayac: { fontSize: layout.font.sm, color: colors.metin },
      }),
    [layout, colors],
  );

  return (
    <View style={styles.kutu}>
      <ElanazHeader />
      <Text style={styles.etiket}>Konu Anlatımı</Text>
      <ContentIllustration gorsel={ekran.gorsel} konuId={konuId} />
      <Text style={styles.anlatimMetin}>{ekran.metin}</Text>
      {anlatimVideo ? <VideoIzleButton source={anlatimVideo} /> : null}
      <Text style={styles.sayac}>
        {index + 1} / {toplam}
      </Text>
    </View>
  );
}
