import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { soruMetni } from '../utils/soruHelpers';
import { SecenekIkon } from './nesneler/SecenekIkon';
import { SecenekMetni } from './SecenekMetni';

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
    <View style={styles.container}>
      <ContentIllustration gorsel={soru.gorsel} konuId={konuId} />
      <Text style={styles.soru}>{soruMetni(soru)}</Text>
      <Text style={styles.hakMetni}>
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
                    <SecenekIkon ikon={soru.secenekIkonlari[secenek]} size={32} />
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
        <View style={styles.feedbackDogru}>
          <Text style={styles.feedbackBaslik}>Süper! ⭐</Text>
          <Text style={styles.feedbackMetin}>Çok iyi düşündün!</Text>
        </View>
      )}
      {durum === 'yanlis' && (
        <View style={styles.feedbackYanlis}>
          <Text style={styles.feedbackBaslikYanlis}>
            {soru.sasirtma ? 'Dikkatli oku!' : 'Bu sefer olmadı'}
          </Text>
          <Text style={styles.feedbackMetin}>{yanlisMesaj(soru)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16 },
  soru: {
    fontSize: 22,
    lineHeight: 32,
    color: colors.baslik,
    fontWeight: '600',
  },
  hakMetni: {
    fontSize: 16,
    color: colors.turuncu,
    fontWeight: '600',
  },
  secenekler: { gap: 12 },
  secenekHit: {
    overflow: 'visible',
  },
  secenekIcerik: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    flexWrap: 'nowrap',
    flexGrow: 0,
    flexShrink: 0,
    overflow: 'visible',
    paddingRight: 6,
  },
  secenek: {
    borderWidth: 2,
    borderColor: colors.kenarlik,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    paddingRight: 28,
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
  secenekMetinSecili: {
    color: colors.birincil,
    fontWeight: '700',
  },
  secenekMetinDogru: {
    color: colors.basari,
    fontWeight: '700',
  },
  secenekMetinYanlis: {
    color: colors.hata,
    fontWeight: '700',
  },
  feedbackDogru: {
    backgroundColor: colors.basariAcik,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.basari,
  },
  feedbackYanlis: {
    backgroundColor: colors.hataAcik,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.hata,
  },
  feedbackBaslik: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.basari,
    marginBottom: 6,
  },
  feedbackBaslikYanlis: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.hata,
    marginBottom: 6,
  },
  feedbackMetin: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.metin,
  },
});
