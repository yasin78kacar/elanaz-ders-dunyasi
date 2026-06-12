import { useLayoutEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getKonu } from '../services/contentLoader';
import { kaydetSoruCevabi, tamamlaKonu } from '../services/progressStore';
import { oturumSorulariSec } from '../services/sessionPicker';
import { PracticeQuestion } from '../components/PracticeQuestion';
import { SessionQuestion } from '../components/SessionQuestion';
import { soruCevapAnahtari, soruMetni } from '../utils/soruHelpers';
import { PrimaryButton } from '../components/PrimaryButton';
import { ContentIllustration } from '../components/ContentIllustration';
import { ElanazHeader } from '../components/ElanazHeader';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';
import type { Soru } from '../types/content';

type Props = NativeStackScreenProps<RootStackParamList, 'TopicFlow'>;

type Adim =
  | { tip: 'anlatim'; index: number }
  | { tip: 'alistirma'; index: number }
  | { tip: 'test'; index: number }
  | { tip: 'sonuc'; yildiz: number; dogru: number; toplam: number };

export function TopicFlowScreen({ route, navigation }: Props) {
  const { dersId, konuId, konuBaslik } = route.params;
  const konu = getKonu(dersId, konuId);

  const oturum = useMemo(() => {
    if (!konu) return null;
    return {
      alistirmalar: oturumSorulariSec(konu.alistirma),
      testler: oturumSorulariSec(konu.test),
    };
  }, [konu]);

  const [adim, setAdim] = useState<Adim>({ tip: 'anlatim', index: 0 });
  const [testDogru, setTestDogru] = useState(0);
  const [cevapBekleniyor, setCevapBekleniyor] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: konuBaslik });
  }, [navigation, konuBaslik]);

  if (!konu || !oturum) {
    return (
      <View style={styles.container}>
        <Text style={styles.hata}>Konu bulunamadı.</Text>
      </View>
    );
  }

  const anlatimEkranlari = konu.anlatim.ekranlar;
  const alistirmalar: Soru[] = oturum.alistirmalar;
  const testler: Soru[] = oturum.testler;

  const sonrakiAnlatim = () => {
    if (adim.tip !== 'anlatim') return;
    if (adim.index < anlatimEkranlari.length - 1) {
      setAdim({ tip: 'anlatim', index: adim.index + 1 });
    } else {
      setAdim({ tip: 'alistirma', index: 0 });
    }
  };

  const sonrakiAlistirma = () => {
    if (adim.tip !== 'alistirma') return;
    if (adim.index < alistirmalar.length - 1) {
      setAdim({ tip: 'alistirma', index: adim.index + 1 });
      setCevapBekleniyor(false);
    } else {
      setAdim({ tip: 'test', index: 0 });
      setCevapBekleniyor(false);
      setTestDogru(0);
    }
  };

  const sonrakiTest = async (dogru: number) => {
    if (adim.tip !== 'test') return;
    if (adim.index < testler.length - 1) {
      setAdim({ tip: 'test', index: adim.index + 1 });
      setCevapBekleniyor(false);
    } else {
      const ilerleme = await tamamlaKonu(dersId, konuId, dogru, testler.length);
      setAdim({
        tip: 'sonuc',
        yildiz: ilerleme.yildiz,
        dogru,
        toplam: testler.length,
      });
    }
  };

  const alistirmaCevap = async (cevap: string, dogruMu: boolean) => {
    const soru = alistirmalar[adim.tip === 'alistirma' ? adim.index : 0];
    await kaydetSoruCevabi(dersId, konuId, {
      soruId: soru.id,
      verilenCevap: cevap,
      dogruMu,
      tarih: new Date().toISOString(),
      soruMetni: soruMetni(soru),
      dogruCevap: soruCevapAnahtari(soru),
      tip: 'alistirma',
    });
    setCevapBekleniyor(true);
  };

  const testCevap = async (cevap: string, dogruMu: boolean) => {
    if (adim.tip !== 'test') return;
    const soru = testler[adim.index];
    if (dogruMu) setTestDogru((n) => n + 1);
    await kaydetSoruCevabi(dersId, konuId, {
      soruId: soru.id,
      verilenCevap: cevap,
      dogruMu,
      tarih: new Date().toISOString(),
      soruMetni: soruMetni(soru),
      dogruCevap: soruCevapAnahtari(soru),
      tip: 'test',
    });
    setCevapBekleniyor(true);
  };

  const devamEt = () => {
    if (adim.tip === 'alistirma') sonrakiAlistirma();
    else if (adim.tip === 'test') sonrakiTest(testDogru);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {adim.tip === 'anlatim' && (
        <View style={styles.kutu}>
          <ElanazHeader />
          <Text style={styles.etiket}>Konu Anlatımı</Text>
          <ContentIllustration gorsel={anlatimEkranlari[adim.index].gorsel} konuId={konuId} />
          <Text style={styles.anlatimMetin}>{anlatimEkranlari[adim.index].metin}</Text>
          <Text style={styles.sayac}>
            {adim.index + 1} / {anlatimEkranlari.length}
          </Text>
          <PrimaryButton
            label={adim.index < anlatimEkranlari.length - 1 ? 'Devam' : 'Alıştırmalara Geç'}
            onPress={sonrakiAnlatim}
          />
        </View>
      )}

      {adim.tip === 'alistirma' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>
            Alıştırma {adim.index + 1} / {alistirmalar.length}
          </Text>
          <PracticeQuestion
            key={alistirmalar[adim.index].id}
            soru={alistirmalar[adim.index]}
            konuId={konuId}
            onAnswer={alistirmaCevap}
          />
          {cevapBekleniyor && (
            <PrimaryButton
              label={adim.index < alistirmalar.length - 1 ? 'Sonraki Soru' : 'Teste Geç'}
              onPress={devamEt}
            />
          )}
        </View>
      )}

      {adim.tip === 'test' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>
            Test {adim.index + 1} / {testler.length}
          </Text>
          <SessionQuestion
            key={testler[adim.index].id}
            soru={testler[adim.index]}
            konuId={konuId}
            onAnswer={testCevap}
          />
          {cevapBekleniyor && (
            <PrimaryButton
              label={adim.index < testler.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
              onPress={devamEt}
            />
          )}
        </View>
      )}

      {adim.tip === 'sonuc' && (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Konu Tamamlandı!</Text>
          <Text style={styles.sonucBaslik}>
            Test: {adim.dogru} / {adim.toplam} doğru
          </Text>
          <Text style={styles.yildizlar}>{'⭐'.repeat(adim.yildiz) || '—'}</Text>
          <Text style={styles.yildizAciklama}>
            {adim.yildiz === 3
              ? 'Muhteşem! Bu konuyu çok iyi öğrendin.'
              : adim.yildiz === 2
                ? 'Güzel iş! Biraz daha pratik yapabilirsin.'
                : adim.yildiz === 1
                  ? 'İyi başlangıç! Tekrar denemek her zaman faydalıdır.'
                  : 'Bu konuyu birlikte tekrar edebiliriz.'}
          </Text>
          <PrimaryButton label="Haritaya Dön" onPress={() => navigation.goBack()} />
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
    letterSpacing: 0.5,
  },
  anlatimMetin: {
    fontSize: 22,
    lineHeight: 34,
    color: colors.baslik,
  },
  sayac: { fontSize: 15, color: colors.metin },
  hata: { fontSize: 18, color: colors.hata, padding: 20 },
  sonucBaslik: { fontSize: 24, fontWeight: '700', color: colors.baslik },
  yildizlar: { fontSize: 40, textAlign: 'center' },
  yildizAciklama: { fontSize: 18, lineHeight: 28, color: colors.metin },
});
