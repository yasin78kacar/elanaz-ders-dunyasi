import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getKayitliPin, pinDogrula, pinGecerliMi, pinKaydet } from '../services/parentPin';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ParentPin'>;

export function ParentPinScreen({ navigation }: Props) {
  const [mod, setMod] = useState<'yukleniyor' | 'olustur' | 'giris'>('yukleniyor');
  const [pin, setPin] = useState('');
  const [pinTekrar, setPinTekrar] = useState('');
  const [hata, setHata] = useState('');

  useEffect(() => {
    getKayitliPin().then((kayitli) => {
      setMod(kayitli ? 'giris' : 'olustur');
    });
  }, []);

  const pinOlustur = async () => {
    setHata('');
    if (!pinGecerliMi(pin)) {
      setHata('Bu PIN çok kolay tahmin edilebilir. Başka bir 4 haneli PIN seçin.');
      return;
    }
    if (pin !== pinTekrar) {
      setHata('PIN\'ler eşleşmiyor.');
      return;
    }
    const ok = await pinKaydet(pin);
    if (ok) navigation.replace('ParentDashboard');
    else setHata('PIN kaydedilemedi.');
  };

  const pinGir = async () => {
    setHata('');
    const ok = await pinDogrula(pin);
    if (ok) navigation.replace('ParentDashboard');
    else setHata('Yanlış PIN. Tekrar dene.');
  };

  if (mod === 'yukleniyor') {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      {mod === 'olustur' ? (
        <>
          <Text style={styles.baslik}>Anne Paneli PIN'i Oluştur</Text>
          <Text style={styles.aciklama}>
            4 haneli bir PIN belirle. 1234, 0000 gibi kolay PIN'ler kabul edilmez.
          </Text>
          <TextInput
            style={styles.input}
            value={pin}
            onChangeText={(t) => setPin(t.replace(/\D/g, '').slice(0, 4))}
            keyboardType="number-pad"
            secureTextEntry
            placeholder="PIN"
            maxLength={4}
          />
          <TextInput
            style={styles.input}
            value={pinTekrar}
            onChangeText={(t) => setPinTekrar(t.replace(/\D/g, '').slice(0, 4))}
            keyboardType="number-pad"
            secureTextEntry
            placeholder="PIN tekrar"
            maxLength={4}
          />
          <PrimaryButton
            label="PIN'i Kaydet"
            onPress={pinOlustur}
            disabled={pin.length < 4 || pinTekrar.length < 4}
          />
        </>
      ) : (
        <>
          <Text style={styles.baslik}>Anne Paneli</Text>
          <Text style={styles.aciklama}>Devam etmek için PIN'ini gir.</Text>
          <TextInput
            style={styles.input}
            value={pin}
            onChangeText={(t) => setPin(t.replace(/\D/g, '').slice(0, 4))}
            keyboardType="number-pad"
            secureTextEntry
            placeholder="PIN"
            maxLength={4}
          />
          <PrimaryButton label="Giriş" onPress={pinGir} disabled={pin.length < 4} />
        </>
      )}
      {hata ? <Text style={styles.hata}>{hata}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
    justifyContent: 'center',
  },
  baslik: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.baslik,
  },
  aciklama: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.metin,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.kenarlik,
    borderRadius: 12,
    padding: 16,
    fontSize: 22,
    textAlign: 'center',
    letterSpacing: 8,
    backgroundColor: colors.kart,
    color: colors.baslik,
  },
  hata: {
    color: colors.hata,
    fontSize: 15,
    textAlign: 'center',
  },
});
