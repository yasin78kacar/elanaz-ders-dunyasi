import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { PrimaryButton } from './PrimaryButton';
import { ContentIllustration } from './ContentIllustration';
import { soruMetni } from '../utils/soruHelpers';

interface Props {
  soru: Soru;
  onAnswer: (cevap: string, dogruMu: boolean) => void;
}

function normalizeCevap(s: string): string {
  return s.trim().toLocaleLowerCase('tr-TR').replace(/\s+/g, ' ');
}

function yanlisMesaj(soru: Soru): string {
  if (soru.sasirtma) {
    return 'Tuzağı fark ettin mi? Bir daha dikkatle oku. ' + soru.ipucu;
  }
  return soru.ipucu;
}

export function PracticeQuestion({ soru, onAnswer }: Props) {
  const [cevap, setCevap] = useState('');
  const [durum, setDurum] = useState<'bekle' | 'dogru' | 'yanlis'>('bekle');

  const kontrolEt = () => {
    const normalize = normalizeCevap(cevap);
    const kabul = [soru.dogruCevap, ...(soru.alternatifCevaplar ?? [])]
      .filter(Boolean)
      .map((c) => normalizeCevap(c!));
    const dogruMu = kabul.includes(normalize);
    setDurum(dogruMu ? 'dogru' : 'yanlis');
    onAnswer(cevap, dogruMu);
  };

  return (
    <View style={styles.container}>
      <ContentIllustration gorsel={soru.gorsel} />
      <Text style={styles.soru}>{soruMetni(soru)}</Text>
      <TextInput
        style={styles.input}
        value={cevap}
        onChangeText={setCevap}
        keyboardType={soru.cevapTipi === 'sayi' ? 'number-pad' : 'default'}
        placeholder="Cevabını yaz"
        placeholderTextColor={colors.metin}
        editable={durum === 'bekle'}
      />
      {durum === 'bekle' && (
        <PrimaryButton label="Kontrol Et" onPress={kontrolEt} disabled={!cevap.trim()} />
      )}
      {durum === 'dogru' && (
        <View style={styles.feedbackDogru}>
          <Text style={styles.feedbackBaslik}>Harika! 🌟</Text>
          <Text style={styles.feedbackMetin}>Doğru düşündün, devam edebilirsin.</Text>
        </View>
      )}
      {durum === 'yanlis' && (
        <View style={styles.feedbackYanlis}>
          <Text style={styles.feedbackBaslikYanlis}>
            {soru.sasirtma ? 'Dikkatli oku!' : 'Bir daha dene'}
          </Text>
          <Text style={styles.feedbackMetin}>{yanlisMesaj(soru)}</Text>
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
  input: {
    borderWidth: 2,
    borderColor: colors.birincil,
    borderRadius: 12,
    padding: 16,
    fontSize: 20,
    color: colors.baslik,
    backgroundColor: colors.kart,
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
