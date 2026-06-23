import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getKonuHaritasi, type KonuHaritaOgesi } from '../services/progressMap';
import {
  getOkumaKitabiListesi,
  getSesliHikayeListesi,
  ingilizceOkumaModuluVar,
} from '../services/contentLoader';
import {
  getAdaptiveDifficulty,
  getDifficulty,
  setDifficulty,
} from '../services/difficultyService';
import type { DifficultyLevel } from '../types/difficulty';
import { DifficultySelector } from '../components/DifficultySelector';
import { ElanazHeader } from '../components/ElanazHeader';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useKonuMuzikHeader } from '../hooks/useKonuMuzikHeader';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'TopicList'>;

export function TopicListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const [harita, setHarita] = useState<KonuHaritaOgesi[]>([]);
  const [zorluk, setZorluk] = useState<DifficultyLevel>('medium');
  const [adaptiveHint, setAdaptiveHint] = useState<DifficultyLevel | undefined>();
  const layout = useDeviceLayout();
  const { colors } = useTheme();

  useEffect(() => {
    getDifficulty().then(setZorluk);
    getAdaptiveDifficulty().then(setAdaptiveHint);
  }, []);

  const zorlukDegistir = async (level: DifficultyLevel) => {
    setZorluk(level);
    await setDifficulty(level);
  };

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
        uniteBaslik: {
          width: '100%',
          fontSize: layout.font.lg,
          fontWeight: '800',
          color: colors.baslik,
          marginTop: layout.spacing(16),
          marginBottom: layout.spacing(4),
        },
        uniteBaslikIlk: {
          marginTop: 0,
        },
        medyaBolum: {
          gap,
          marginBottom: layout.spacing(8),
        },
        medyaKart: {
          backgroundColor: colors.birincilAcik,
          borderRadius: layout.spacing(16),
          padding: layout.spacing(20),
          borderWidth: 3,
          borderColor: colors.birincil,
        },
        medyaKartKitap: {
          backgroundColor: '#FFF3E0',
          borderColor: colors.turuncu,
        },
        medyaBaslik: {
          fontSize: layout.font.xl,
          fontWeight: '800',
          color: colors.baslik,
        },
        medyaAlt: {
          fontSize: layout.font.md,
          color: colors.metin,
          marginTop: layout.spacing(6),
          lineHeight: layout.spacing(24),
        },
      }),
    [layout, pad, gap, itemWidth, colors],
  );

  const uniteGruplari = useMemo(() => {
    const gruplar: { uniteBaslik: string; konular: KonuHaritaOgesi[] }[] = [];
    for (const konu of harita) {
      const son = gruplar[gruplar.length - 1];
      if (son && son.uniteBaslik === konu.uniteBaslik) {
        son.konular.push(konu);
      } else {
        gruplar.push({ uniteBaslik: konu.uniteBaslik, konular: [konu] });
      }
    }
    return gruplar;
  }, [harita]);

  useKonuMuzikHeader(navigation, { title: `${dersBaslik} — Yol Haritası` });

  const sesliHikayeler = dersId === 'ingilizce' ? getSesliHikayeListesi(dersId) : [];
  const okumaKitaplari = dersId === 'ingilizce' ? getOkumaKitabiListesi(dersId) : [];
  const ingilizceMedya = ingilizceOkumaModuluVar(dersId);

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
      <DifficultySelector
        value={zorluk}
        onChange={zorlukDegistir}
        adaptiveHint={adaptiveHint}
      />
      {ingilizceMedya ? (
        <View style={styles.medyaBolum}>
          <Text style={[styles.uniteBaslik, styles.uniteBaslikIlk]}>Sesli Hikâyeler & Kitaplar</Text>
          {sesliHikayeler.length > 0 ? (
            <Pressable
              style={({ pressed }) => [styles.medyaKart, pressed && styles.kartPressed]}
              onPress={() => navigation.navigate('AudioStoryList', { dersId, dersBaslik })}
            >
              <Text style={styles.medyaBaslik}>🎧 Sesli Hikâyeler</Text>
              <Text style={styles.medyaAlt}>
                {sesliHikayeler.length} audio story — dinle ve İngilizce metni takip et
              </Text>
            </Pressable>
          ) : null}
          {okumaKitaplari.length > 0 ? (
            <Pressable
              style={({ pressed }) => [
                styles.medyaKart,
                styles.medyaKartKitap,
                pressed && styles.kartPressed,
              ]}
              onPress={() => navigation.navigate('ReadingBookList', { dersId, dersBaslik })}
            >
              <Text style={styles.medyaBaslik}>📚 Okuma Kitapları</Text>
              <Text style={styles.medyaAlt}>
                {okumaKitaplari.length} reading book — sayfa sayfa oku
              </Text>
            </Pressable>
          ) : null}
        </View>
      ) : null}
      {uniteGruplari.map((grup, grupIndex) => (
        <View key={grup.uniteBaslik}>
          <Text
            style={[
              styles.uniteBaslik,
              grupIndex === 0 && !ingilizceMedya && styles.uniteBaslikIlk,
            ]}
          >
            {grup.uniteBaslik}
          </Text>
          <View style={styles.grid}>
            {grup.konular.map((konu) => (
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
                  <Text style={styles.sira}>{konu.sira + 1}</Text>
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
        </View>
      ))}
    </ScrollView>
  );
}
