import { useLayoutEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getSesliHikaye } from '../services/contentLoader';
import { getSesliHikayeSource } from '../assets/audioCatalog';
import { AudioPlayer } from '../components/AudioPlayer';
import { ContentIllustration } from '../components/ContentIllustration';
import { ExerciseScreenLayout } from '../components/ExerciseScreenContainer';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'AudioStoryPlayer'>;

export function AudioStoryPlayerScreen({ route, navigation }: Props) {
  const { dersId, hikayeId, hikayeBaslik } = route.params;
  const hikaye = getSesliHikaye(dersId, hikayeId);
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { padding: layout.spacing(20) },
        kutu: { gap: layout.spacing(20) },
        etiket: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.turuncu,
          textTransform: 'uppercase',
        },
        metin: {
          fontSize: layout.font.lg,
          lineHeight: layout.spacing(34),
          color: colors.baslik,
        },
        ozet: {
          fontSize: layout.font.md,
          color: colors.metin,
          fontStyle: 'italic',
        },
        hata: { fontSize: layout.font.md, color: colors.hata, padding: layout.spacing(20) },
      }),
    [layout],
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: hikayeBaslik });
  }, [navigation, hikayeBaslik]);

  if (!hikaye) {
    return (
      <ExerciseScreenLayout contentContainerStyle={styles.container}>
        <Text style={styles.hata}>Sesli hikâye bulunamadı.</Text>
      </ExerciseScreenLayout>
    );
  }

  return (
    <ExerciseScreenLayout scrollable contentContainerStyle={styles.container}>
      <View style={styles.kutu}>
        <Text style={styles.etiket}>Audio Story</Text>
        <ContentIllustration gorsel={hikaye.gorsel} konuId="ingilizce" />
        <Text style={styles.ozet}>{hikaye.ozet}</Text>
        <AudioPlayer source={getSesliHikayeSource(hikaye.ses)} />
        <Text style={styles.metin}>{hikaye.metin}</Text>
      </View>
    </ExerciseScreenLayout>
  );
}
