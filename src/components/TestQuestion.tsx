import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useQuestionStyles } from '../hooks/useQuestionStyles';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { soruMetni } from '../utils/soruHelpers';
import { SecenekIkon } from './nesneler/SecenekIkon';
import { SecenekMetni } from './SecenekMetni';
import { QuestionFeedback, SasirtmaUyariVideo } from './QuestionFeedback';

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

export function TestQuestion({ soru, konuId, onAnswer }: Props) {
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
        secenekHit: { overflow: 'visible' },
        secenekIcerik: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: layout.spacing(10),
          flexWrap: 'nowrap',
          flexGrow: 0,
          flexShrink: 0,
          overflow: 'visible',
          paddingRight: layout.spacing(6),
        },
        secenek: {
          borderWidth: 2,
          borderColor: colors.kenarlik,
          borderRadius: layout.spacing(12),
          paddingVertical: layout.spacing(16),
          paddingHorizontal: layout.spacing(24),
          paddingRight: layout.spacing(28),
          backgroundColor: colors.kart,
          overflow: 'visible',
        },
        secenekSecili: {
          borderColor: colors.birincil,
          backgroundColor: colors.birincilAcik,
        },
        secenekDogru: {
          borderColor: colors.basari,
          backgroundColor: colors.basariAcik,
        },
        secenekYanlis: {
          borderColor: colors.hata,
          backgroundColor: colors.hataAcik,
        },
        secenekMetinSecili: { color: colors.birincil, fontWeight: '700' },
        secenekMetinDogru: { color: colors.basari, fontWeight: '700' },
        secenekMetinYanlis: { color: colors.hata, fontWeight: '700' },
      }),
    [layout],
  );

  const kalanHak = MAX_DEGISIKLIK - degisiklikSayisi;

  const secimYap = (secenek: string) => {
    if (kilitli || durum !== 'bekle') return;
    if (secim === secenek) return;
    if (secim !== null) {
      const yeniSayi = degisiklikSayisi + 1;
      setDegisiklikSayisi(yeniSayi);
      if (yeniSayi >= MAX_DEGISIKLIK) setKilitli(true);
    }
    setSecim(secenek);
  };

  const onayla = () => {
    if (!secim) return;
    const dogruMu = secim === soru.dogruCevap;
    setDurum(dogruMu ? 'dogru' : 'yanlis');
    setKilitli(true);
    onAnswer(secim, dogruMu);
  };

  return (
    <View style={q.container}>
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
            <Pressable
              key={secenek}
              onPress={() => secimYap(secenek)}
              disabled={kilitli || durum !== 'bekle'}
              style={styles.secenekHit}
            >
              <View
                collapsable={false}
                style={[
                  styles.secenek,
                  secili && !dogruGoster && !yanlisGoster && styles.secenekSecili,
                  dogruGoster && styles.secenekDogru,
                  yanlisGoster && styles.secenekYanlis,
                ]}
              >
                <View style={styles.secenekIcerik}>
                  {soru.secenekIkonlari?.[secenek] && (
                    <SecenekIkon
                      ikon={soru.secenekIkonlari[secenek]}
                      size={layout.secenekIkonBoyut}
                    />
                  )}
                  <SecenekMetni
                    secenek={secenek}
                    style={[
                      secili && !dogruGoster && !yanlisGoster && styles.secenekMetinSecili,
                      dogruGoster && styles.secenekMetinDogru,
                      yanlisGoster && styles.secenekMetinYanlis,
                    ]}
                  />
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
      {durum === 'bekle' && (
        <PrimaryButton label="Cevabım Bu" onPress={onayla} disabled={!secim} />
      )}
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
    </View>
  );
}
