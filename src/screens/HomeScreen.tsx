import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getDersListesi } from '../services/contentLoader';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const dersler = getDersListesi();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.hosgeldin}>Merhaba! Hangi derse çalışmak istersin?</Text>
        {dersler.map((ders) => (
          <Pressable
            key={ders.id}
            style={({ pressed }) => [styles.kart, pressed && styles.kartPressed]}
            onPress={() =>
              navigation.navigate('TopicList', { dersId: ders.id, dersBaslik: ders.baslik })
            }
          >
            <Text style={styles.kartBaslik}>{ders.baslik}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        style={styles.anneButon}
        onPress={() => navigation.navigate('ParentPin')}
      >
        <Text style={styles.anneMetin}>Anne</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    padding: 20,
    gap: 14,
    paddingBottom: 80,
  },
  hosgeldin: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.metin,
    marginBottom: 8,
  },
  kart: {
    backgroundColor: colors.kart,
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.kenarlik,
  },
  kartPressed: { opacity: 0.9, borderColor: colors.birincil },
  kartBaslik: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.baslik,
  },
  anneButon: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    backgroundColor: colors.metin,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  anneMetin: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
