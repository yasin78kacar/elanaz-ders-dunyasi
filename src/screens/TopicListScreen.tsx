import { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getKonuListesi } from '../services/contentLoader';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'TopicList'>;

export function TopicListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const uniteGruplari = getKonuListesi(dersId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: dersBaslik });
  }, [navigation, dersBaslik]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {uniteGruplari.length === 0 ? (
        <View style={styles.bos}>
          <Text style={styles.bosMetin}>
            Bu ders için henüz konu eklenmedi. Yakında burada olacak!
          </Text>
        </View>
      ) : (
        uniteGruplari.map((grup) => (
          <View key={grup.uniteBaslik} style={styles.grup}>
            <Text style={styles.uniteBaslik}>{grup.uniteBaslik}</Text>
            {grup.konular.map((konu) => (
              <Pressable
                key={konu.id}
                style={({ pressed }) => [styles.kart, pressed && styles.kartPressed]}
                onPress={() =>
                  navigation.navigate('TopicFlow', {
                    dersId,
                    konuId: konu.id,
                    konuBaslik: konu.baslik,
                  })
                }
              >
                <Text style={styles.konuBaslik}>{konu.baslik}</Text>
              </Pressable>
            ))}
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 16 },
  grup: { gap: 10 },
  uniteBaslik: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.metin,
    marginTop: 8,
  },
  kart: {
    backgroundColor: colors.kart,
    borderRadius: 14,
    padding: 18,
    borderWidth: 2,
    borderColor: colors.kenarlik,
  },
  kartPressed: { borderColor: colors.birincil },
  konuBaslik: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.baslik,
  },
  bos: {
    padding: 24,
    backgroundColor: colors.kart,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.kenarlik,
  },
  bosMetin: {
    fontSize: 18,
    lineHeight: 28,
    color: colors.metin,
    textAlign: 'center',
  },
});
