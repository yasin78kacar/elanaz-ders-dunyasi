import { useLayoutEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getOkumaKitabi } from '../services/contentLoader';
import { ContentIllustration } from '../components/ContentIllustration';
import { PrimaryButton } from '../components/PrimaryButton';
import { ExerciseScreenLayout } from '../components/ExerciseScreenContainer';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ReadingBookFlow'>;

export function ReadingBookFlowScreen({ route, navigation }: Props) {
  const { dersId, kitapId, kitapBaslik } = route.params;
  const kitap = getOkumaKitabi(dersId, kitapId);
  const layout = useDeviceLayout();
  const [sayfaIndex, setSayfaIndex] = useState(0);
  const [bitti, setBitti] = useState(false);

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
        sayac: { fontSize: layout.font.sm, color: colors.metin },
        hata: { fontSize: layout.font.md, color: colors.hata, padding: layout.spacing(20) },
        sonucBaslik: {
          fontSize: layout.font.xl,
          fontWeight: '700',
          color: colors.baslik,
          textAlign: 'center',
        },
        yildizlar: { fontSize: layout.spacing(40), textAlign: 'center' },
      }),
    [layout],
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: kitapBaslik });
  }, [navigation, kitapBaslik]);

  if (!kitap) {
    return (
      <ExerciseScreenLayout contentContainerStyle={styles.container}>
        <Text style={styles.hata}>Okuma kitabı bulunamadı.</Text>
      </ExerciseScreenLayout>
    );
  }

  const sayfalar = kitap.sayfalar;
  const sonSayfa = sayfaIndex >= sayfalar.length - 1;

  const sonraki = () => {
    if (sonSayfa) {
      setBitti(true);
    } else {
      setSayfaIndex((i) => i + 1);
    }
  };

  const bottomAction = bitti
    ? { label: 'Kitaplara Dön', onPress: () => navigation.goBack() }
    : { label: sonSayfa ? 'Kitabı Bitir' : 'Sonraki Sayfa', onPress: sonraki };

  return (
    <ExerciseScreenLayout
      scrollable={!bitti}
      contentContainerStyle={styles.container}
      bottomBar={<PrimaryButton label={bottomAction.label} onPress={bottomAction.onPress} />}
    >
      {!bitti ? (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Reading Book</Text>
          <ContentIllustration
            gorsel={sayfalar[sayfaIndex].gorsel ?? kitap.kapakGorsel}
            konuId="ingilizce"
          />
          <Text style={styles.metin}>{sayfalar[sayfaIndex].metin}</Text>
          <Text style={styles.sayac}>
            Sayfa {sayfaIndex + 1} / {sayfalar.length}
          </Text>
        </View>
      ) : (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Kitap Tamamlandı!</Text>
          <Text style={styles.sonucBaslik}>{kitap.baslik}</Text>
          <Text style={styles.yildizlar}>⭐⭐⭐</Text>
          <Text style={styles.metin}>Great job! You finished the book. Read again anytime!</Text>
        </View>
      )}
    </ExerciseScreenLayout>
  );
}
