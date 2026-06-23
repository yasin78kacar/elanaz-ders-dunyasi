import { useLayoutEffect, useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getOkumaKitabiListesi } from '../services/contentLoader';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ReadingBookList'>;

export function ReadingBookListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const kitaplar = getOkumaKitabiListesi(dersId);
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: layout.spacing(20),
          gap: layout.spacing(14),
          paddingBottom: layout.spacing(40),
        },
        aciklama: {
          fontSize: layout.font.lg,
          lineHeight: layout.spacing(30),
          color: colors.metin,
          marginBottom: layout.spacing(4),
        },
        kart: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(16),
          padding: layout.spacing(20),
          borderWidth: 2,
          borderColor: colors.kenarlik,
        },
        kartPressed: { borderColor: colors.birincil },
        kartBaslik: {
          fontSize: layout.font.xl,
          fontWeight: '700',
          color: colors.baslik,
        },
        kartAlt: {
          fontSize: layout.font.md,
          color: colors.metin,
          marginTop: layout.spacing(6),
          lineHeight: layout.spacing(24),
        },
        etiket: {
          fontSize: layout.font.sm,
          color: colors.turuncu,
          fontWeight: '700',
          marginTop: layout.spacing(8),
        },
      }),
    [layout],
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${dersBaslik} — Okuma Kitapları` });
  }, [navigation, dersBaslik]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.aciklama}>
        Bir kitap seç ve sayfa sayfa oku. İngilizce kelimeleri sesli okuyabilirsin!
      </Text>
      {kitaplar.map((k, i) => (
        <Pressable
          key={k.id}
          style={({ pressed }) => [styles.kart, pressed && styles.kartPressed]}
          onPress={() =>
            navigation.navigate('ReadingBookFlow', {
              dersId,
              kitapId: k.id,
              kitapBaslik: k.baslik,
            })
          }
        >
          <Text style={styles.kartBaslik}>📚 {k.baslik}</Text>
          <Text style={styles.kartAlt}>{k.ozet}</Text>
          <Text style={styles.etiket}>
            Kitap {i + 1} / {kitaplar.length} · {k.sayfalar.length} sayfa
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
