import { useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getHikaye } from '../services/contentLoader';
import { kaydetHikayeCevabi, tamamlaHikaye } from '../services/progressStore';
import { TestQuestion } from '../components/TestQuestion';
import { PrimaryButton } from '../components/PrimaryButton';
import { ContentIllustration } from '../components/ContentIllustration';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';
import { soruCevapAnahtari, soruMetni } from '../utils/soruHelpers';

type Props = NativeStackScreenProps<RootStackParamList, 'StoryFlow'>;

type Adim =
  | { tip: 'okuma'; index: number }
  | { tip: 'soru'; index: number }
  | { tip: 'sonuc'; yildiz: number; dogru: number; toplam: number };

export function StoryFlowScreen({ route, navigation }: Props) {
  const { dersId, hikayeId, hikayeBaslik } = route.params;
  const hikaye = getHikaye(dersId, hikayeId);

  const [adim, setAdim] = useState<Adim>({ tip: 'okuma', index: 0 });
  const [dogruSayisi, setDogruSayisi] = useState(0);
  const [cevapBekleniyor, setCevapBekleniyor] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: hikayeBaslik });
  }, [navigation, hikayeBaslik]);

  if (!hikaye) {
    return (
      <View style={styles.container}>
        <Text style={styles.hata}>Hikâye bulunamadı.</Text>
      </View>
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {adim.tip === 'okuma' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Okuma Köşesi</Text>
          <ContentIllustration gorsel={sayfalar[adim.index].gorsel} />
          <Text style={styles.metin}>{sayfalar[adim.index].metin}</Text>
          <Text style={styles.sayac}>
            Sayfa {adim.index + 1} / {sayfalar.length}
          </Text>
          <PrimaryButton
            label={adim.index < sayfalar.length - 1 ? 'Sonraki Sayfa' : 'Sorulara Geç'}
            onPress={sonrakiSayfa}
          />
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
            onAnswer={soruCevap}
          />
          {cevapBekleniyor && (
            <PrimaryButton
              label={adim.index < sorular.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
              onPress={() => sonrakiSoru(dogruSayisi)}
            />
          )}
        </View>
      )}

      {adim.tip === 'sonuc' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Hikâye Tamamlandı!</Text>
          <Text style={styles.sonucBaslik}>
            {adim.dogru} / {adim.toplam} doğru
          </Text>
          <Text style={styles.yildizlar}>{'⭐'.repeat(adim.yildiz) || '—'}</Text>
          <PrimaryButton label="Listeye Dön" onPress={() => navigation.goBack()} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 40 },
  kutu: { gap: 20 },
  etiket: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.turuncu,
    textTransform: 'uppercase',
  },
  metin: {
    fontSize: 22,
    lineHeight: 34,
    color: colors.baslik,
  },
  sayac: { fontSize: 15, color: colors.metin },
  hata: { fontSize: 18, color: colors.hata, padding: 20 },
  sonucBaslik: { fontSize: 24, fontWeight: '700', color: colors.baslik },
  yildizlar: { fontSize: 40, textAlign: 'center' },
});
