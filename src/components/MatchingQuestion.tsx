import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { GuvenliMetin } from './GuvenliMetin';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { NesneIkon, type NesneTipi } from '../../assets/illustrations/GeometriIllustrations';
import { soruMetni } from '../utils/soruHelpers';
import { ESLESTIRME_SATIR_IKON } from '../theme/gorselBoyut';

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
    <View style={styles.container}>
      <ContentIllustration gorsel={soru.gorsel} konuId={konuId} />
      <Text style={styles.soru}>{soruMetni(soru)}</Text>
      <Text style={styles.hakMetni}>
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
                    {cift.ikon && <NesneIkon tip={cift.ikon as NesneTipi} size={ESLESTIRME_SATIR_IKON} />}
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
      {durum === 'bekle' && !kilitli && (
        <PrimaryButton label="Kontrol Et" onPress={kontrolEt} disabled={!tumEslesti} />
      )}
      {durum === 'dogru' && (
        <View style={styles.feedbackDogru}>
          <Text style={styles.feedbackBaslik}>Süper! ⭐</Text>
          <Text style={styles.feedbackMetin}>Tüm eşleştirmeler doğru!</Text>
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
          <Text style={styles.feedbackBaslikYanlis}>Bazı eşleştirmeler yanlış</Text>
          <Text style={styles.feedbackMetin}>{soru.ipucu}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 20 },
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
  sutunlar: {
    flexDirection: 'row',
    gap: 12,
  },
  sutun: {
    flex: 1,
    gap: 8,
  },
  sutunBaslik: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.metin,
    marginBottom: 4,
  },
  ogeHit: {
    overflow: 'visible',
  },
  oge: {
    borderWidth: 2,
    borderColor: colors.kenarlik,
    borderRadius: 10,
    padding: 12,
    backgroundColor: colors.kart,
    gap: 4,
    overflow: 'visible',
  },
  solSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ogeSecili: {
    borderColor: colors.birincil,
    backgroundColor: colors.birincilAcik,
  },
  ogeEslesmis: {
    borderColor: colors.birincil,
  },
  ogeYanlis: {
    borderColor: colors.hata,
    backgroundColor: colors.hataAcik,
  },
  ogeHazir: {
    borderColor: colors.turuncu,
  },
  ogeMetin: {
    fontSize: 16,
    color: colors.metin,
    fontWeight: '600',
    flex: 1,
  },
  ogeMetinSecili: {
    color: colors.birincil,
  },
  baglanti: {
    fontSize: 14,
    color: colors.birincil,
    fontWeight: '600',
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
