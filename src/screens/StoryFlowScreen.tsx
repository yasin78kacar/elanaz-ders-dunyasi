import { useLayoutEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getHikaye } from '../services/contentLoader';
import { kaydetHikayeCevabi, tamamlaHikaye } from '../services/progressStore';
import { TestQuestion } from '../components/TestQuestion';
import { PrimaryButton } from '../components/PrimaryButton';
import { ExerciseScreenLayout } from '../components/ExerciseScreenContainer';
import { ContentIllustration } from '../components/ContentIllustration';
import { colors } from '../theme/colors';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import type { RootStackParamList } from '../navigation/types';
import { soruCevapAnahtari, soruMetni } from '../utils/soruHelpers';

type Props = NativeStackScreenProps<RootStackParamList, 'StoryFlow'>;

type Adim =
  | { tip: 'okuma'; index: number }
  | { tip: 'soru'; index: number }
  | { tip: 'sonuc'; yildiz: number; dogru: number; toplam: number };

export function StoryFlowScreen({ route, navigation }: Props) {
  const { dersId, hikayeId, hikayeBaslik } = route.params;
  const layout = useDeviceLayout();
  const hikaye = getHikaye(dersId, hikayeId);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: layout.spacing(20),
        },
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
        sonucBaslik: { fontSize: layout.font.xl, fontWeight: '700', color: colors.baslik },
        yildizlar: { fontSize: layout.spacing(40), textAlign: 'center' },
      }),
    [layout],
  );

  const [adim, setAdim] = useState<Adim>({ tip: 'okuma', index: 0 });
  const [dogruSayisi, setDogruSayisi] = useState(0);
  const [cevapBekleniyor, setCevapBekleniyor] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: hikayeBaslik });
  }, [navigation, hikayeBaslik]);

  if (!hikaye) {
    return (
      <ExerciseScreenLayout contentContainerStyle={styles.container}>
        <Text style={styles.hata}>Hikâye bulunamadı.</Text>
      </ExerciseScreenLayout>
    );
  }

  const sayfalar = hikaye.sayfalar;
  const sorular = hikaye.sorular;

  const sonrakiSayfa = () => {
    if (adim.tip !== 'okuma') return;
    if (adim.index < sayfalar.length - 1) {
      setAdim({ tip: 'okuma', index: adim.index + 1 });
    } else {
      setAdim({ tip: 'soru', index: 0 });
      setDogruSayisi(0);
    }
  };

  const sonrakiSoru = async (dogru: number) => {
    if (adim.tip !== 'soru') return;
    if (adim.index < sorular.length - 1) {
      setAdim({ tip: 'soru', index: adim.index + 1 });
      setCevapBekleniyor(false);
    } else {
      const ilerleme = await tamamlaHikaye(dersId, hikayeId, dogru, sorular.length);
      setAdim({
        tip: 'sonuc',
        yildiz: ilerleme.yildiz,
        dogru,
        toplam: sorular.length,
      });
    }
  };

  const soruCevap = async (cevap: string, dogruMu: boolean) => {
    if (adim.tip !== 'soru') return;
    const soru = sorular[adim.index];
    if (dogruMu) setDogruSayisi((n) => n + 1);
    await kaydetHikayeCevabi(dersId, hikayeId, {
      soruId: soru.id,
      verilenCevap: cevap,
      dogruMu,
      tarih: new Date().toISOString(),
      soruMetni: soruMetni(soru),
      dogruCevap: soruCevapAnahtari(soru),
      tip: 'hikaye',
    });
    setCevapBekleniyor(true);
  };

  let bottomAction: { label: string; onPress: () => void } | null = null;
  if (adim.tip === 'okuma') {
    bottomAction = {
      label: adim.index < sayfalar.length - 1 ? 'Sonraki Sayfa' : 'Sorulara Geç',
      onPress: sonrakiSayfa,
    };
  } else if (adim.tip === 'soru' && cevapBekleniyor) {
    bottomAction = {
      label: adim.index < sorular.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör',
      onPress: () => sonrakiSoru(dogruSayisi),
    };
  } else if (adim.tip === 'sonuc') {
    bottomAction = { label: 'Listeye Dön', onPress: () => navigation.goBack() };
  }

  return (
    <ExerciseScreenLayout
      contentContainerStyle={styles.container}
      bottomBar={
        bottomAction ? (
          <PrimaryButton label={bottomAction.label} onPress={bottomAction.onPress} />
        ) : undefined
      }
    >
      {adim.tip === 'okuma' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Okuma Köşesi</Text>
          <ContentIllustration gorsel={sayfalar[adim.index].gorsel} konuId="okuma-kosesi" />
          <Text style={styles.metin}>{sayfalar[adim.index].metin}</Text>
          <Text style={styles.sayac}>
            Sayfa {adim.index + 1} / {sayfalar.length}
          </Text>
        </View>
      )}

      {adim.tip === 'soru' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>
            Anlama Sorusu {adim.index + 1} / {sorular.length}
          </Text>
          <TestQuestion
            key={sorular[adim.index].id}
            soru={sorular[adim.index]}
            konuId="okuma-kosesi"
            onAnswer={soruCevap}
          />
        </View>
      )}

      {adim.tip === 'sonuc' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Hikâye Tamamlandı!</Text>
          <Text style={styles.sonucBaslik}>
            {adim.dogru} / {adim.toplam} doğru
          </Text>
          <Text style={styles.yildizlar}>{'⭐'.repeat(adim.yildiz) || '—'}</Text>
        </View>
      )}
    </ExerciseScreenLayout>
  );
}

