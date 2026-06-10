import { useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getHikayeListesi } from '../services/contentLoader';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'StoryList'>;

export function StoryListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const hikayeler = getHikayeListesi(dersId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: dersBaslik });
  }, [navigation, dersBaslik]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.aciklama}>Bir hikâye seç ve oku. Sonunda sorular seni bekliyor!</Text>
      {hikayeler.map((h) => (
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
