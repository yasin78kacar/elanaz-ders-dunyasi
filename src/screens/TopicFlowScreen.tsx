import { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getKonu } from '../services/contentLoader';
import { kaydetSoruCevabi } from '../services/progressStore';
import { ProgressService } from '../services/ProgressService';
import { oturumSorulariSec } from '../services/sessionPicker';
import {
  getAdaptiveDifficulty,
  getDifficulty,
  getSessionSize,
  recordAnswerForAdaptive,
} from '../services/difficultyService';
import { useGamification } from '../contexts/GamificationContext';
import { useTheme } from '../contexts/ThemeContext';
import { PracticeQuestion } from '../components/PracticeQuestion';
import { SessionQuestion } from '../components/SessionQuestion';
import { soruCevapAnahtari, soruMetni } from '../utils/soruHelpers';
import { PrimaryButton } from '../components/PrimaryButton';
import { ContentIllustration } from '../components/ContentIllustration';
import { ElanazHeader } from '../components/ElanazHeader';
import { ExerciseScreenLayout } from '../components/ExerciseScreenContainer';
import { VideoIzleButton } from '../components/VideoIzleButton';
import { getKonuAnlatimVideo } from '../assets/videoCatalog';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useKonuMuzikHeader } from '../hooks/useKonuMuzikHeader';
import type { RootStackParamList } from '../navigation/types';
import type { Soru } from '../types/content';
import type { DifficultyLevel } from '../types/difficulty';

type Props = NativeStackScreenProps<RootStackParamList, 'TopicFlow'>;

type Adim =
  | { tip: 'anlatim'; index: number }
  | { tip: 'alistirma'; index: number }
  | { tip: 'test'; index: number }
  | { tip: 'sonuc'; yildiz: number; dogru: number; toplam: number };

export function TopicFlowScreen({ route, navigation }: Props) {
  const { dersId, konuId, konuBaslik } = route.params;
  const layout = useDeviceLayout();
  const { colors } = useTheme();
  const { recordCorrectAnswer, recordTopicComplete } = useGamification();
  const konu = getKonu(dersId, konuId);
  const [sessionSize, setSessionSize] = useState(5);
  const [zorluk, setZorluk] = useState<DifficultyLevel>('medium');
  const baslangicRef = useRef(Date.now());

  useEffect(() => {
    baslangicRef.current = Date.now();
    Promise.all([getDifficulty(), getAdaptiveDifficulty()]).then(([level]) => {
      setZorluk(level);
      setSessionSize(getSessionSize(level));
    });
  }, []);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: layout.spacing(20),
        },
        kutu: { gap: layout.spacing(32) },
        soruKutu: { flex: 1 },
        soruIcerik: { flex: 1 },
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
        hata: { fontSize: layout.font.md, color: colors.hata, padding: layout.spacing(20) },
        sonucBaslik: { fontSize: layout.font.xl, fontWeight: '700', color: colors.baslik },
        yildizlar: { fontSize: layout.spacing(40), textAlign: 'center' },
        yildizAciklama: {
          fontSize: layout.font.md,
          lineHeight: layout.spacing(28),
          color: colors.metin,
        },
      }),
    [layout, colors],
  );

  const oturum = useMemo(() => {
    if (!konu) return null;
    return {
      alistirmalar: oturumSorulariSec(konu.alistirma, sessionSize, zorluk),
      testler: oturumSorulariSec(konu.test, sessionSize, zorluk),
    };
  }, [konu, sessionSize, zorluk]);

  const [adim, setAdim] = useState<Adim>({ tip: 'anlatim', index: 0 });
  const [testDogru, setTestDogru] = useState(0);
  const [cevapBekleniyor, setCevapBekleniyor] = useState(false);

  useKonuMuzikHeader(navigation, { title: konuBaslik });

  if (!konu || !oturum) {
    return (
      <ExerciseScreenLayout contentContainerStyle={styles.container}>
        <Text style={styles.hata}>Konu bulunamadı.</Text>
      </ExerciseScreenLayout>
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
      const sureSaniye = Math.max(1, Math.round((Date.now() - baslangicRef.current) / 1000));
      const ilerleme = await ProgressService.saveProgress(
        `${dersId}:${konuId}`,
        dogru,
        testler.length,
        sureSaniye,
      );
      await recordTopicComplete(ilerleme.yildiz);
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
    if (dogruMu) await recordCorrectAnswer();
    await recordAnswerForAdaptive(dogruMu);
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
    if (dogruMu) await recordCorrectAnswer();
    await recordAnswerForAdaptive(dogruMu);
    setCevapBekleniyor(true);
  };

  const devamEt = () => {
    if (adim.tip === 'alistirma') sonrakiAlistirma();
    else if (adim.tip === 'test') sonrakiTest(testDogru);
  };

  let bottomAction: { label: string; onPress: () => void } | null = null;
  if (adim.tip === 'anlatim') {
    bottomAction = {
      label: adim.index < anlatimEkranlari.length - 1 ? 'Devam' : 'Alıştırmalara Geç',
      onPress: sonrakiAnlatim,
    };
  } else if (adim.tip === 'alistirma' && cevapBekleniyor) {
    bottomAction = {
      label: adim.index < alistirmalar.length - 1 ? 'Sonraki Soru' : 'Teste Geç',
      onPress: devamEt,
    };
  } else if (adim.tip === 'test' && cevapBekleniyor) {
    bottomAction = {
      label: adim.index < testler.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör',
      onPress: devamEt,
    };
  } else if (adim.tip === 'sonuc') {
    bottomAction = { label: 'Haritaya Dön', onPress: () => navigation.goBack() };
  }

  const anlatimVideo =
    adim.tip === 'anlatim' ? getKonuAnlatimVideo(konuId, adim.index) : undefined;

  const soruAdimi = adim.tip === 'alistirma' || adim.tip === 'test';

  return (
    <ExerciseScreenLayout
      scrollable={!soruAdimi}
      contentContainerStyle={styles.container}
      bottomBar={
        bottomAction ? (
          <PrimaryButton label={bottomAction.label} onPress={bottomAction.onPress} />
        ) : undefined
      }
    >
      {adim.tip === 'anlatim' && (
        <View style={styles.kutu}>
          <ElanazHeader />
          <Text style={styles.etiket}>Konu Anlatımı</Text>
          <ContentIllustration gorsel={anlatimEkranlari[adim.index].gorsel} konuId={konuId} />
          <Text style={styles.anlatimMetin}>{anlatimEkranlari[adim.index].metin}</Text>
          {anlatimVideo ? <VideoIzleButton source={anlatimVideo} /> : null}
          <Text style={styles.sayac}>
            {adim.index + 1} / {anlatimEkranlari.length}
          </Text>
        </View>
      )}

      {adim.tip === 'alistirma' && (
        <View style={[styles.kutu, styles.soruKutu]}>
          <Text style={styles.etiket}>
            Alıştırma {adim.index + 1} / {alistirmalar.length}
          </Text>
          <View style={styles.soruIcerik}>
            <PracticeQuestion
            key={alistirmalar[adim.index].id}
            soru={alistirmalar[adim.index]}
            konuId={konuId}
            onAnswer={alistirmaCevap}
          />
          </View>
        </View>
      )}

      {adim.tip === 'test' && (
        <View style={[styles.kutu, styles.soruKutu]}>
          <Text style={styles.etiket}>
            Test {adim.index + 1} / {testler.length}
          </Text>
          <View style={styles.soruIcerik}>
            <SessionQuestion
            key={testler[adim.index].id}
            soru={testler[adim.index]}
            konuId={konuId}
            onAnswer={testCevap}
          />
          </View>
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
        </View>
      )}
    </ExerciseScreenLayout>
  );
}

