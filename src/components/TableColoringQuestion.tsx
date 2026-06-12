import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { GuvenliMetin } from './GuvenliMetin';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { soruMetni } from '../utils/soruHelpers';

const MAX_DENEME = 2;
const SATIR_BOYUT = 10;

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

export function TableColoringQuestion({ soru, konuId, onAnswer }: Props) {
  const baslangic = soru.tabloBaslangic ?? 1;
  const bitis = soru.tabloBitis ?? 20;
  const dogruSet = new Set(soru.dogruHucreler ?? []);
  const sayilar = Array.from({ length: bitis - baslangic + 1 }, (_, i) => baslangic + i);
  const satirlar: number[][] = [];
  for (let i = 0; i < sayilar.length; i += SATIR_BOYUT) {
    satirlar.push(sayilar.slice(i, i + SATIR_BOYUT));
  }

  const [boyali, setBoyali] = useState<Set<number>>(new Set());
  const [deneme, setDeneme] = useState(0);
  const [kilitli, setKilitli] = useState(false);
  const [durum, setDurum] = useState<'bekle' | 'dogru' | 'yanlis'>('bekle');
  const [yanlisHucreler, setYanlisHucreler] = useState<number[]>([]);
  const [dogruHucreler, setDogruHucreler] = useState<number[]>([]);

  const hucreToggle = (n: number) => {
    if (kilitli || durum !== 'bekle') return;
    setBoyali((prev) => {
      const yeni = new Set(prev);
      if (yeni.has(n)) yeni.delete(n);
      else yeni.add(n);
      return yeni;
    });
    setYanlisHucreler([]);
    setDogruHucreler([]);
  };

  const kumeEsitMi = () => {
    if (boyali.size !== dogruSet.size) return false;
    for (const n of boyali) {
      if (!dogruSet.has(n)) return false;
    }
    return true;
  };

  const kontrolEt = () => {
    if (kumeEsitMi()) {
      setDurum('dogru');
      setKilitli(true);
      const ozet = [...boyali].sort((a, b) => a - b).join(', ');
      onAnswer(ozet, true);
      return;
    }

    const fazla = [...boyali].filter((n) => !dogruSet.has(n));
    const eksik = [...dogruSet].filter((n) => !boyali.has(n));
    const yanlis = [...fazla, ...eksik];
    const dogruKalan = [...boyali].filter((n) => dogruSet.has(n));

    const yeniDeneme = deneme + 1;
    setDeneme(yeniDeneme);
    setYanlisHucreler(fazla);
    setDogruHucreler(dogruKalan);
    setDurum('yanlis');

    if (yeniDeneme >= MAX_DENEME) {
      setKilitli(true);
      onAnswer([...boyali].sort((a, b) => a - b).join(', '), false);
      return;
    }

    setBoyali(new Set(dogruKalan));
    setYanlisHucreler([]);
    setDurum('bekle');
  };

  const kalanDeneme = MAX_DENEME - deneme;

  return (
    <View style={styles.container}>
      <ContentIllustration gorsel={soru.gorsel} konuId={konuId} />
      <Text style={styles.soru}>{soruMetni(soru)}</Text>
      <Text style={styles.hakMetni}>
        Deneme hakkın: {kilitli && durum === 'bekle' ? 0 : kalanDeneme}
      </Text>
      <View style={styles.tablo}>
        {satirlar.map((satir, si) => (
          <View key={`satir-${si}`} style={styles.satir}>
            {satir.map((n) => {
              const boyanmis = boyali.has(n);
              const yanlis = yanlisHucreler.includes(n);
              const dogru = dogruHucreler.includes(n);
              return (
                <Pressable
                  key={n}
                  onPress={() => hucreToggle(n)}
                  disabled={kilitli}
                  style={styles.hucreHit}
                >
                  <View
                    collapsable={false}
                    style={[
                      styles.hucre,
                      boyanmis && !yanlis && !dogru && styles.hucreBoyali,
                      dogru && styles.hucreDogru,
                      yanlis && styles.hucreYanlis,
                    ]}
                  >
                    <GuvenliMetin
                      style={[
                        styles.hucreSayi,
                        (boyanmis || dogru) && styles.hucreSayiBoyali,
                      ]}
                    >
                      {String(n)}
                    </GuvenliMetin>
                  </View>
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>
      {durum === 'bekle' && !kilitli && (
        <PrimaryButton label="Kontrol Et" onPress={kontrolEt} disabled={boyali.size === 0} />
      )}
      {durum === 'dogru' && (
        <View style={styles.feedbackDogru}>
          <Text style={styles.feedbackBaslik}>Süper! ⭐</Text>
          <Text style={styles.feedbackMetin}>Tabloyu doğru boyadın!</Text>
        </View>
      )}
      {durum === 'yanlis' && kilitli && (
        <View style={styles.feedbackYanlis}>
          <Text style={styles.feedbackBaslikYanlis}>
            {soru.sasirtma ? 'Dikkatli oku!' : 'Bu sefer olmadı'}
          </Text>
          <Text style={styles.feedbackMetin}>{yanlisMesaj(soru)}</Text>
        </View>
      )}
      {durum === 'yanlis' && !kilitli && (
        <View style={styles.feedbackYanlis}>
          <Text style={styles.feedbackBaslikYanlis}>Bazı hücreler yanlış veya eksik</Text>
          <Text style={styles.feedbackMetin}>{soru.ipucu}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 32 },
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
  tablo: { gap: 8 },
  satir: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  hucreHit: {
    overflow: 'visible',
  },
  hucre: {
    width: 52,
    height: 52,
    borderWidth: 2,
    borderColor: colors.kenarlik,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.kart,
    overflow: 'visible',
  },
  hucreBoyali: {
    borderColor: colors.birincil,
    backgroundColor: colors.birincilAcik,
  },
  hucreDogru: {
    borderColor: colors.basari,
    backgroundColor: colors.basariAcik,
  },
  hucreYanlis: {
    borderColor: colors.hata,
    backgroundColor: colors.hataAcik,
  },
  hucreSayi: {
    flexShrink: 0,
    fontSize: 16,
    fontWeight: '700',
    color: colors.metin,
  },
  hucreSayiBoyali: {
    color: colors.baslik,
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
