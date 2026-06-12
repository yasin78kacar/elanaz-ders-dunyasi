import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getKonuHaritasi, type KonuHaritaOgesi } from '../services/progressMap';
import { ElanazHeader } from '../components/ElanazHeader';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useKonuMuzikHeader } from '../hooks/useKonuMuzikHeader';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'TopicList'>;

export function TopicListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const [harita, setHarita] = useState<KonuHaritaOgesi[]>([]);
  const layout = useDeviceLayout();

  const pad = layout.spacing(24);
  const gap = layout.spacing(12);
  const itemWidth =
    (layout.width - pad * 2 - gap * (layout.gridColumns - 1)) / layout.gridColumns;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { padding: pad, paddingBottom: layout.spacing(40) },
        grid: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap,
        },
        kart: {
          width: itemWidth,
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(16),
          padding: layout.spacing(20),
          borderWidth: 3,
          borderColor: colors.kenarlik,
          minHeight: layout.spacing(96),
        },
        kartTamamlandi: {
          borderColor: colors.basari,
          backgroundColor: colors.basariAcik,
        },
        kartAktif: {
          borderColor: colors.birincil,
          backgroundColor: colors.birincilAcik,
        },
        kartPressed: { opacity: 0.9 },
        kartUst: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: layout.spacing(6),
        },
        sira: {
          fontSize: layout.font.sm,
          fontWeight: '700',
          color: colors.metin,
        },
        konuBaslik: {
          fontSize: layout.font.lg,
          fontWeight: '700',
          color: colors.baslik,
        },
        yildiz: { fontSize: layout.font.lg, marginTop: layout.spacing(8) },
        aktifEtiket: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.birincil,
          marginTop: layout.spacing(8),
        },
        bos: { padding: pad },
        bosMetin: {
          fontSize: layout.font.md,
          lineHeight: layout.spacing(28),
          color: colors.metin,
          textAlign: 'center',
        },
      }),
    [layout, pad, gap, itemWidth],
  );

  useKonuMuzikHeader(navigation, { title: `${dersBaslik} — Yol Haritası` });

  useFocusEffect(
    useCallback(() => {
      getKonuHaritasi(dersId).then(setHarita);
    }, [dersId]),
  );

  const konuyaGit = (konu: KonuHaritaOgesi) => {
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
      <ElanazHeader />
      <View style={styles.grid}>
        {harita.map((konu, index) => (
          <Pressable
            key={konu.id}
            onPress={() => konuyaGit(konu)}
            style={({ pressed }) => [
              styles.kart,
              konu.durum === 'tamamlandi' && styles.kartTamamlandi,
              konu.durum === 'aktif' && styles.kartAktif,
              pressed && styles.kartPressed,
            ]}
          >
            <View style={styles.kartUst}>
              <Text style={styles.sira}>{index + 1}</Text>
            </View>
            <Text style={styles.konuBaslik}>{konu.baslik}</Text>
            {konu.durum === 'tamamlandi' && (
              <Text style={styles.yildiz}>{'⭐'.repeat(konu.yildiz)}</Text>
            )}
            {konu.durum === 'aktif' && (
              <Text style={styles.aktifEtiket}>Başla →</Text>
            )}
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
