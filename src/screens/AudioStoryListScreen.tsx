import { useLayoutEffect, useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getSesliHikayeListesi } from '../services/contentLoader';
import { getCatalogVideoSource } from '../assets/videoCatalog';
import { VideoPlayer } from '../components/VideoPlayer';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'AudioStoryList'>;

export function AudioStoryListScreen({ route, navigation }: Props) {
  const { dersId, dersBaslik } = route.params;
  const hikayeler = getSesliHikayeListesi(dersId);
  const layout = useDeviceLayout();
  const { colors } = useTheme();

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
    [layout, colors],
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${dersBaslik} — Sesli Hikâyeler` });
  }, [navigation, dersBaslik]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.aciklama}>
        Bir hikâye seç, dinle ve İngilizce metni takip et. Kulaklık kullanabilirsin!
      </Text>
      {hikayeler.map((h, i) => {
        const videoId = `sesli-hikaye-${String(i + 1).padStart(2, '0')}`;
        const videoSource = getCatalogVideoSource(videoId);
        return (
        <Pressable
          key={h.id}
          style={({ pressed }) => [styles.kart, pressed && styles.kartPressed]}
          onPress={() =>
            navigation.navigate('AudioStoryPlayer', {
              dersId,
              hikayeId: h.id,
              hikayeBaslik: h.baslik,
            })
          }
        >
          <Text style={styles.kartBaslik}>🎧 {h.baslik}</Text>
          <Text style={styles.kartAlt}>{h.ozet}</Text>
          {videoSource ? <VideoPlayer source={videoSource} compact showControls={false} /> : null}
          <Text style={styles.etiket}>
            Hikâye {i + 1} / {hikayeler.length}
            {h.sureSaniye ? ` · ~${h.sureSaniye} sn` : ''}
          </Text>
        </Pressable>
        );
      })}
    </ScrollView>
  );
}
