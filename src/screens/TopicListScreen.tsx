import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getKonuHaritasi, type KonuHaritaOgesi } from '../services/progressMap';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'TopicList'>;

export function TopicListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const [harita, setHarita] = useState<KonuHaritaOgesi[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${dersBaslik} — Yol Haritası` });
  }, [navigation, dersBaslik]);

  useFocusEffect(
    useCallback(() => {
      getKonuHaritasi(dersId).then(setHarita);
    }, [dersId]),
  );

  const konuyaGit = (konu: KonuHaritaOgesi) => {
    if (konu.durum === 'kilitli') {
      Alert.alert(
        'Konu Kilitli',
        'Bu konuyu açmak için önceki konudan en az 1 yıldız almalısın.',
      );
      return;
    }
    navigation.navigate('TopicFlow', {
      dersId,
      konuId: konu.id,
      konuBaslik: konu.baslik,
    });
  };

  if (harita.length === 0) {
    return (
      <View style={styles.bos}>
        <Text style={styles.bosMetin}>
          Bu ders için henüz konu eklenmedi. Yakında burada olacak!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {harita.map((konu, index) => (
        <View key={konu.id} style={styles.yolParcasi}>
          {index > 0 && (
            <View
              style={[
                styles.cizgi,
                konu.durum === 'kilitli' ? styles.cizgiKilitli : styles.cizgiAcik,
              ]}
            />
          )}
          <Pressable
            onPress={() => konuyaGit(konu)}
            style={({ pressed }) => [
              styles.kart,
              konu.durum === 'tamamlandi' && styles.kartTamamlandi,
              konu.durum === 'aktif' && styles.kartAktif,
              konu.durum === 'kilitli' && styles.kartKilitli,
              pressed && konu.durum !== 'kilitli' && styles.kartPressed,
            ]}
          >
            <View style={styles.kartUst}>
              <Text style={styles.sira}>{index + 1}</Text>
              {konu.durum === 'kilitli' && <Text style={styles.kilit}>🔒</Text>}
            </View>
            <Text
              style={[
                styles.konuBaslik,
                konu.durum === 'kilitli' && styles.metinKilitli,
              ]}
            >
              {konu.baslik}
            </Text>
            {konu.durum === 'tamamlandi' && (
              <Text style={styles.yildiz}>{'⭐'.repeat(konu.yildiz)}</Text>
            )}
            {konu.durum === 'aktif' && (
              <Text style={styles.aktifEtiket}>Başla →</Text>
            )}
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingBottom: 40 },
  yolParcasi: { alignItems: 'center' },
  cizgi: { width: 4, height: 24 },
  cizgiAcik: { backgroundColor: colors.basari },
  cizgiKilitli: { backgroundColor: colors.kenarlik },
  kart: {
    width: '100%',
    backgroundColor: colors.kart,
    borderRadius: 16,
    padding: 20,
    borderWidth: 3,
    borderColor: colors.kenarlik,
    minHeight: 88,
  },
  kartTamamlandi: {
    borderColor: colors.basari,
    backgroundColor: colors.basariAcik,
  },
  kartAktif: {
    borderColor: colors.birincil,
    backgroundColor: colors.birincilAcik,
  },
  kartKilitli: {
    borderColor: colors.kenarlik,
    backgroundColor: '#F0EEEA',
    opacity: 0.85,
  },
  kartPressed: { opacity: 0.9 },
  kartUst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  sira: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.metin,
  },
  kilit: { fontSize: 18 },
  konuBaslik: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.baslik,
  },
  metinKilitli: { color: colors.metin },
  yildiz: { fontSize: 22, marginTop: 8 },
  aktifEtiket: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.birincil,
    marginTop: 8,
  },
  bos: { padding: 24 },
  bosMetin: {
    fontSize: 18,
    lineHeight: 28,
    color: colors.metin,
    textAlign: 'center',
  },
});
