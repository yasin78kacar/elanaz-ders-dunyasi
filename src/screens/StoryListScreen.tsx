import { useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getHikayeListesi } from '../services/contentLoader';
import { colors } from '../theme/colors';
import type { Hikaye } from '../types/content';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'StoryList'>;

const SEVIYE_ETIKET: Record<number, string> = {
  1: '⭐ Başlangıç',
  2: '⭐⭐ Orta',
  3: '⭐⭐⭐ İleri',
};

function seviyeGrupla(hikayeler: Hikaye[]) {
  const gruplar = new Map<number, Hikaye[]>();
  for (const h of hikayeler) {
    const s = h.seviye ?? 2;
    if (!gruplar.has(s)) gruplar.set(s, []);
    gruplar.get(s)!.push(h);
  }
  return [...gruplar.entries()].sort(([a], [b]) => a - b);
}

export function StoryListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const hikayeler = getHikayeListesi(dersId);
  const gruplar = seviyeGrupla(hikayeler);

  useLayoutEffect(() => {
    navigation.setOptions({ title: dersBaslik });
  }, [navigation, dersBaslik]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.aciklama}>Bir hikâye seç ve oku. Sonunda sorular seni bekliyor!</Text>
      {gruplar.map(([seviye, liste]) => (
        <View key={seviye} style={styles.grup}>
          <Text style={styles.grupBaslik}>{SEVIYE_ETIKET[seviye] ?? `Seviye ${seviye}`}</Text>
          {liste.map((h) => (
            <Pressable
              key={h.id}
              style={({ pressed }) => [styles.kart, pressed && styles.kartPressed]}
              onPress={() =>
                navigation.navigate('StoryFlow', {
                  dersId,
                  hikayeId: h.id,
                  hikayeBaslik: h.baslik,
                })
              }
            >
              <Text style={styles.kartBaslik}>📖 {h.baslik}</Text>
              <Text style={styles.kartAlt}>{h.sayfalar.length} sayfa · {h.sorular.length} soru</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  aciklama: {
    fontSize: 18,
    lineHeight: 28,
    color: colors.metin,
    marginBottom: 4,
  },
  grup: { gap: 12, marginBottom: 8 },
  grupBaslik: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.baslik,
    marginTop: 4,
  },
  kart: {
    backgroundColor: colors.kart,
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.kenarlik,
  },
  kartPressed: { borderColor: colors.birincil },
  kartBaslik: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.baslik,
  },
  kartAlt: {
    fontSize: 15,
    color: colors.metin,
    marginTop: 6,
  },
});
