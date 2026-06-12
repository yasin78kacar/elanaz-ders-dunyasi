import { useMemo, useState } from 'react';
import { Platform, Text, TextInput, View } from 'react-native';
import type { Soru } from '../types/content';
import { colors } from '../theme/colors';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useQuestionStyles } from '../hooks/useQuestionStyles';
import { PrimaryButton } from './PrimaryButton';
import { QuestionFeedback, SasirtmaUyariVideo } from './QuestionFeedback';
import { ContentIllustration } from './ContentIllustration';
import { soruMetni } from '../utils/soruHelpers';

interface Props {
  soru: Soru;
  konuId?: string;
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

export function PracticeQuestion({ soru, konuId, onAnswer }: Props) {
  const [cevap, setCevap] = useState('');
  const [durum, setDurum] = useState<'bekle' | 'dogru' | 'yanlis'>('bekle');
  const layout = useDeviceLayout();
  const q = useQuestionStyles();

  const inputStyle = useMemo(
    () => ({
      borderWidth: 2,
      borderColor: colors.birincil,
      borderRadius: layout.spacing(12),
      padding: layout.spacing(16),
      fontSize: layout.font.lg,
      color: colors.baslik,
      backgroundColor: colors.kart,
      minHeight: layout.buttonHeight,
    }),
    [layout],
  );

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
    <View style={q.container}>
      <ContentIllustration gorsel={soru.gorsel} konuId={konuId} />
      {soru.sasirtma && durum === 'bekle' ? <SasirtmaUyariVideo /> : null}
      <Text style={q.soru}>{soruMetni(soru)}</Text>
      <TextInput
        style={inputStyle}
        value={cevap}
        onChangeText={setCevap}
        keyboardType={soru.cevapTipi === 'sayi' ? 'number-pad' : 'default'}
        placeholder="Cevabını yaz"
        placeholderTextColor={colors.metin}
        editable={durum === 'bekle'}
        autoCorrect={false}
        {...(Platform.OS === 'android' ? { includeFontPadding: false } : {})}
      />
      {durum === 'bekle' && (
        <PrimaryButton label="Kontrol Et" onPress={kontrolEt} disabled={!cevap.trim()} />
      )}
      {durum === 'dogru' && (
        <QuestionFeedback
          variant="dogru"
          baslik="Harika! 🌟"
          metin="Doğru düşündün, devam edebilirsin."
          styles={q}
        />
      )}
      {durum === 'yanlis' && (
        <QuestionFeedback
          variant="yanlis"
          baslik={soru.sasirtma ? 'Dikkatli oku!' : 'Bir daha dene'}
          metin={yanlisMesaj(soru)}
          styles={q}
        />
      )}
    </View>
  );
}
