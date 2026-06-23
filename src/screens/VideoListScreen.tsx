import { useLayoutEffect, useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  getCatalogVideoSource,
  getVideoCatalogByKategori,
  type VideoKategori,
} from '../assets/videoCatalog';
import { VideoPlayer } from '../components/VideoPlayer';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'VideoList'>;

const KATEGORI_BASLIKLARI: Record<VideoKategori, string> = {
  sesliHikaye: '🎧 Sesli Hikâyeler (30)',
  okumaKitabi: '📚 Okuma Kitapları (20)',
  konu: '📖 Konu Videoları (19)',
  ekstra: '✨ Ekstra (1)',
};

const KATEGORILER: VideoKategori[] = ['sesliHikaye', 'okumaKitabi', 'konu', 'ekstra'];

export function VideoListScreen({ route, navigation }: Props) {
  const { kategori } = route.params;
  const { colors } = useTheme();
  const layout = useDeviceLayout();
  const videolar = getVideoCatalogByKategori(kategori);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: layout.spacing(20),
          gap: layout.spacing(14),
          paddingBottom: layout.spacing(40),
        },
        kart: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(16),
          padding: layout.spacing(16),
          borderWidth: 2,
          borderColor: colors.kenarlik,
          gap: layout.spacing(10),
        },
        kartBaslik: {
          fontSize: layout.font.lg,
          fontWeight: '700',
          color: colors.baslik,
        },
        kartAlt: {
          fontSize: layout.font.sm,
          color: colors.metin,
        },
      }),
    [layout, colors],
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: KATEGORI_BASLIKLARI[kategori] });
  }, [navigation, kategori]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {videolar.map((video) => {
        const source = getCatalogVideoSource(video.id);
        return (
          <View key={video.id} style={styles.kart}>
            <Text style={styles.kartBaslik}>{video.baslik}</Text>
            <Text style={styles.kartAlt}>{video.placeholderUrl}</Text>
            {source ? <VideoPlayer source={source} compact showControls /> : null}
          </View>
        );
      })}
    </ScrollView>
  );
}

/** Ana video katalog ekranı — kategori seçimi */
export function VideoCatalogScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'VideoCatalog'>) {
  const { colors } = useTheme();
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: layout.spacing(20),
          gap: layout.spacing(14),
          paddingBottom: layout.spacing(40),
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
      }),
    [layout, colors],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {KATEGORILER.map((kat) => (
        <Pressable
          key={kat}
          style={({ pressed }) => [styles.kart, pressed && styles.kartPressed]}
          onPress={() => navigation.navigate('VideoList', { kategori: kat })}
        >
          <Text style={styles.kartBaslik}>{KATEGORI_BASLIKLARI[kat]}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
