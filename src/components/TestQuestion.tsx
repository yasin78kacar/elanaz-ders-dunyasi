import { memo, useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useQuestionStyles } from '../hooks/useQuestionStyles';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { soruMetni } from '../utils/soruHelpers';
import { AnswerButton } from './AnswerButton';
import { QuestionFeedback, SasirtmaUyariVideo } from './QuestionFeedback';
import { QuestionScreen } from './QuestionScreen';

const MAX_DEGISIKLIK = 2;

interface Props {
  soru: Soru;
  konuId?: string;
  onAnswer: (cevap: string, dogruMu: boolean) => void;
}

function yanlisMesaj(soru: Soru): string {
  if (soru.sasirtma) {
    return 'Tuzağı fark ettin mi? Bir daha dikkatle oku. ' + soru.ipucu;
  }
  return soru.ipucu;
}

export const TestQuestion = memo(function TestQuestion({ soru, konuId, onAnswer }: Props) {
  const [secim, setSecim] = useState<string | null>(null);
  const [degisiklikSayisi, setDegisiklikSayisi] = useState(0);
  const [kilitli, setKilitli] = useState(false);
  const [durum, setDurum] = useState<'bekle' | 'dogru' | 'yanlis'>('bekle');
  const layout = useDeviceLayout();
  const q = useQuestionStyles();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        secenekler: { gap: layout.spacing(12) },
        secenekMetinSecili: { color: colors.birincil, fontWeight: '700' },
        secenekMetinDogru: { color: colors.basari, fontWeight: '700' },
        secenekMetinYanlis: { color: colors.hata, fontWeight: '700' },
      }),
    [layout],
  );

  const kalanHak = MAX_DEGISIKLIK - degisiklikSayisi;

  const secimYap = useCallback(
    (secenek: string) => {
      if (kilitli || durum !== 'bekle') return;
      if (secim === secenek) return;
      if (secim !== null) {
        const yeniSayi = degisiklikSayisi + 1;
        setDegisiklikSayisi(yeniSayi);
        if (yeniSayi >= MAX_DEGISIKLIK) setKilitli(true);
      }
      setSecim(secenek);
    },
    [kilitli, durum, secim, degisiklikSayisi],
  );

  const onayla = useCallback(() => {
    if (!secim) return;
    const dogruMu = secim === soru.dogruCevap;
    setDurum(dogruMu ? 'dogru' : 'yanlis');
    setKilitli(true);
    onAnswer(secim, dogruMu);
  }, [secim, soru.dogruCevap, onAnswer]);

  return (
    <QuestionScreen
      footer={
        durum === 'bekle' ? (
          <PrimaryButton label="Cevabım Bu" onPress={onayla} disabled={!secim} />
        ) : undefined
      }
    >
      <ContentIllustration gorsel={soru.gorsel} konuId={konuId} />
      {soru.sasirtma && durum === 'bekle' ? <SasirtmaUyariVideo /> : null}
      {soru.okumaMetni ? <Text style={q.okumaMetni}>{soru.okumaMetni}</Text> : null}
      <Text style={q.soru}>{soruMetni(soru)}</Text>
      <Text style={q.hakMetni}>
        Değiştirme hakkın: {kilitli && durum === 'bekle' ? 0 : kalanHak}
      </Text>
      <View style={styles.secenekler}>
        {(soru.secenekler ?? []).map((secenek) => {
          const secili = secim === secenek;
          const dogruGoster = durum === 'dogru' && secili;
          const yanlisGoster = durum === 'yanlis' && secili;
          return (
            <AnswerButton
              key={secenek}
              secenek={secenek}
              ikon={soru.secenekIkonlari?.[secenek]}
              secili={secili}
              dogru={dogruGoster}
              yanlis={yanlisGoster}
              disabled={kilitli || durum !== 'bekle'}
              onPress={() => secimYap(secenek)}
              textStyle={[
                secili && !dogruGoster && !yanlisGoster && styles.secenekMetinSecili,
                dogruGoster && styles.secenekMetinDogru,
                yanlisGoster && styles.secenekMetinYanlis,
              ]}
            />
          );
        })}
      </View>
      {durum === 'dogru' && (
        <QuestionFeedback
          variant="dogru"
          baslik="Süper! ⭐"
          metin="Çok iyi düşündün!"
          styles={q}
        />
      )}
      {durum === 'yanlis' && (
        <QuestionFeedback
          variant="yanlis"
          baslik={soru.sasirtma ? 'Dikkatli oku!' : 'Bu sefer olmadı'}
          metin={yanlisMesaj(soru)}
          styles={q}
        />
      )}
    </QuestionScreen>
  );
});
