import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useQuestionStyles } from '../hooks/useQuestionStyles';
import { GuvenliMetin } from './GuvenliMetin';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { soruMetni } from '../utils/soruHelpers';
import { QuestionFeedback, SasirtmaUyariVideo } from './QuestionFeedback';
import { QuestionScreen } from './QuestionScreen';

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
  const layout = useDeviceLayout();
  const q = useQuestionStyles();
  const hucreBoyut = layout.spacing(52);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        tablo: { gap: layout.spacing(8) },
        satir: { flexDirection: 'row', flexWrap: 'wrap', gap: layout.spacing(6) },
        hucreHit: { overflow: 'visible' },
        hucre: {
          width: hucreBoyut,
          height: hucreBoyut,
          borderWidth: 2,
          borderColor: colors.kenarlik,
          borderRadius: layout.spacing(8),
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
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.metin,
        },
        hucreSayiBoyali: { color: colors.baslik },
      }),
    [layout, hucreBoyut],
  );

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
    <QuestionScreen
      footer={
        durum === 'bekle' && !kilitli ? (
          <PrimaryButton label="Kontrol Et" onPress={kontrolEt} disabled={boyali.size === 0} />
        ) : undefined
      }
    >
      <ContentIllustration gorsel={soru.gorsel} konuId={konuId} />
      {soru.sasirtma && durum === 'bekle' ? <SasirtmaUyariVideo /> : null}
      <Text style={q.soru}>{soruMetni(soru)}</Text>
      <Text style={q.hakMetni}>
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
      {durum === 'dogru' && (
        <QuestionFeedback
          variant="dogru"
          baslik="Süper! ⭐"
          metin="Tabloyu doğru boyadın!"
          styles={q}
        />
      )}
      {durum === 'yanlis' && kilitli && (
        <QuestionFeedback
          variant="yanlis"
          baslik={soru.sasirtma ? 'Dikkatli oku!' : 'Bu sefer olmadı'}
          metin={yanlisMesaj(soru)}
          styles={q}
        />
      )}
      {durum === 'yanlis' && !kilitli && (
        <QuestionFeedback
          variant="yanlis"
          baslik="Bazı hücreler yanlış veya eksik"
          metin={soru.ipucu}
          styles={q}
        />
      )}
    </QuestionScreen>
  );
}

