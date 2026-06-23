import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { GuvenliMetin } from './GuvenliMetin';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { NesneIkon, type NesneTipi } from '../../assets/illustrations/GeometriIllustrations';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useQuestionStyles } from '../hooks/useQuestionStyles';
import { soruMetni } from '../utils/soruHelpers';
import { QuestionFeedback, SasirtmaUyariVideo } from './QuestionFeedback';
import { QuestionScreen } from './QuestionScreen';

const MAX_DENEME = 2;

interface Props {
  soru: Soru;
  konuId?: string;
  onAnswer: (cevap: string, dogruMu: boolean) => void;
}

function karistir<T>(dizi: T[]): T[] {
  const kopya = [...dizi];
  for (let i = kopya.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopya[i], kopya[j]] = [kopya[j], kopya[i]];
  }
  return kopya;
}

function yanlisMesaj(soru: Soru): string {
  if (soru.sasirtma) {
    return 'Tuzağı fark ettin mi? Bir daha dikkatle oku. ' + soru.ipucu;
  }
  return soru.ipucu;
}

export function MatchingQuestion({ soru, konuId, onAnswer }: Props) {
  const ciftler = soru.ciftler ?? [];
  const solOgeler = ciftler.map((c) => c.sol);
  const sagSecenekler = useMemo(() => karistir([...new Set(ciftler.map((c) => c.sag))]), [soru.id]);

  const [seciliSol, setSeciliSol] = useState<string | null>(null);
  const [eslesmeler, setEslesmeler] = useState<Record<string, string>>({});
  const [deneme, setDeneme] = useState(0);
  const [kilitli, setKilitli] = useState(false);
  const [durum, setDurum] = useState<'bekle' | 'dogru' | 'yanlis'>('bekle');
  const [yanlisSollar, setYanlisSollar] = useState<string[]>([]);
  const layout = useDeviceLayout();
  const q = useQuestionStyles();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        sutunlar: { flexDirection: 'row', gap: layout.spacing(12) },
        sutun: { flex: 1, gap: layout.spacing(8) },
        sutunBaslik: {
          fontSize: layout.font.sm,
          fontWeight: '700',
          color: colors.metin,
          marginBottom: layout.spacing(4),
        },
        ogeHit: { overflow: 'visible' },
        oge: {
          borderWidth: 2,
          borderColor: colors.kenarlik,
          borderRadius: layout.spacing(10),
          padding: layout.spacing(12),
          backgroundColor: colors.kart,
          gap: layout.spacing(4),
          overflow: 'visible',
        },
        solSatir: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: layout.spacing(8),
        },
        ogeSecili: {
          borderColor: colors.birincil,
          backgroundColor: colors.birincilAcik,
        },
        ogeEslesmis: { borderColor: colors.birincil },
        ogeYanlis: {
          borderColor: colors.hata,
          backgroundColor: colors.hataAcik,
        },
        ogeHazir: { borderColor: colors.turuncu },
        ogeMetin: {
          fontSize: layout.font.md,
          color: colors.metin,
          fontWeight: '600',
          flex: 1,
        },
        ogeMetinSecili: { color: colors.birincil },
        baglanti: {
          fontSize: layout.font.sm,
          color: colors.birincil,
          fontWeight: '600',
        },
      }),
    [layout],
  );

  const tumEslesti = solOgeler.every((sol) => eslesmeler[sol]);

  const solSec = (sol: string) => {
    if (kilitli || durum !== 'bekle') return;
    setSeciliSol((prev) => (prev === sol ? null : sol));
    setYanlisSollar([]);
  };

  const sagSec = (sag: string) => {
    if (kilitli || durum !== 'bekle' || !seciliSol) return;
    setEslesmeler((prev) => ({ ...prev, [seciliSol]: sag }));
    setSeciliSol(null);
    setYanlisSollar([]);
  };

  const eslesmeyiKaldir = (sol: string) => {
    if (kilitli || durum !== 'bekle') return;
    setEslesmeler((prev) => {
      const yeni = { ...prev };
      delete yeni[sol];
      return yeni;
    });
  };

  const kontrolEt = () => {
    const yanlislar = ciftler
      .filter((c) => eslesmeler[c.sol] !== c.sag)
      .map((c) => c.sol);

    if (yanlislar.length === 0) {
      setDurum('dogru');
      setKilitli(true);
      const ozet = ciftler.map((c) => `${c.sol}→${c.sag}`).join(', ');
      onAnswer(ozet, true);
      return;
    }

    const yeniDeneme = deneme + 1;
    setDeneme(yeniDeneme);
    setYanlisSollar(yanlislar);
    setDurum('yanlis');

    if (yeniDeneme >= MAX_DENEME) {
      setKilitli(true);
      const ozet = ciftler.map((c) => `${c.sol}→${eslesmeler[c.sol] ?? '?'}`).join(', ');
      onAnswer(ozet, false);
      return;
    }

    setEslesmeler((prev) => {
      const yeni = { ...prev };
      yanlislar.forEach((sol) => delete yeni[sol]);
      return yeni;
    });
    setDurum('bekle');
  };

  const kalanDeneme = MAX_DENEME - deneme;

  return (
    <QuestionScreen
      footer={
        durum === 'bekle' && !kilitli ? (
          <PrimaryButton label="Kontrol Et" onPress={kontrolEt} disabled={!tumEslesti} />
        ) : undefined
      }
    >
      <ContentIllustration gorsel={soru.gorsel} konuId={konuId} />
      {soru.sasirtma && durum === 'bekle' ? <SasirtmaUyariVideo /> : null}
      <Text style={q.soru}>{soruMetni(soru)}</Text>
      <Text style={q.hakMetni}>
        Deneme hakkın: {kilitli && durum === 'bekle' ? 0 : kalanDeneme}
      </Text>
      <View style={styles.sutunlar}>
        <View style={styles.sutun}>
          <Text style={styles.sutunBaslik}>Nesneler</Text>
          {ciftler.map((cift) => {
            const sol = cift.sol;
            const secili = seciliSol === sol;
            const eslesmis = eslesmeler[sol];
            const yanlis = yanlisSollar.includes(sol);
            return (
              <Pressable
                key={sol}
                onPress={() => (eslesmis ? eslesmeyiKaldir(sol) : solSec(sol))}
                disabled={kilitli}
                style={styles.ogeHit}
              >
                <View
                  collapsable={false}
                  style={[
                    styles.oge,
                    secili && styles.ogeSecili,
                    eslesmis && !yanlis && styles.ogeEslesmis,
                    yanlis && styles.ogeYanlis,
                  ]}
                >
                  <View style={styles.solSatir}>
                    {cift.ikon && (
                      <NesneIkon tip={cift.ikon as NesneTipi} size={layout.ikonSize(30)} />
                    )}
                    <GuvenliMetin style={[styles.ogeMetin, secili && styles.ogeMetinSecili]} textAlign="left">
                      {sol}
                    </GuvenliMetin>
                  </View>
                  {eslesmis && <Text style={styles.baglanti}>→ {eslesmis}</Text>}
                </View>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.sutun}>
          <Text style={styles.sutunBaslik}>Gruplar</Text>
          {sagSecenekler.map((sag) => (
            <Pressable
              key={sag}
              onPress={() => sagSec(sag)}
              disabled={kilitli || !seciliSol}
              style={styles.ogeHit}
            >
              <View collapsable={false} style={[styles.oge, seciliSol && styles.ogeHazir]}>
                <GuvenliMetin style={styles.ogeMetin} textAlign="left">
                  {sag}
                </GuvenliMetin>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
      {durum === 'dogru' && (
        <QuestionFeedback
          variant="dogru"
          baslik="Süper! ⭐"
          metin="Tüm eşleştirmeler doğru!"
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
          baslik="Bazı eşleştirmeler yanlış"
          metin={soru.ipucu}
          styles={q}
        />
      )}
    </QuestionScreen>
  );
}

