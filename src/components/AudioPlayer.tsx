import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Audio, type AVPlaybackStatus } from 'expo-av';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import { GuvenliMetin } from './GuvenliMetin';

interface Props {
  source: number;
  autoPlay?: boolean;
  onPlaybackFinish?: () => void;
}

function saniyeMetni(saniye: number): string {
  const dk = Math.floor(saniye / 60);
  const sn = Math.floor(saniye % 60);
  return `${dk}:${String(sn).padStart(2, '0')}`;
}

export function AudioPlayer({ source, autoPlay = false, onPlaybackFinish }: Props) {
  const layout = useDeviceLayout();
  const soundRef = useRef<Audio.Sound | null>(null);
  const [playing, setPlaying] = useState(false);
  const [positionMs, setPositionMs] = useState(0);
  const [durationMs, setDurationMs] = useState(0);
  const [hazir, setHazir] = useState(false);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(14),
          padding: layout.spacing(16),
          borderWidth: 2,
          borderColor: colors.kenarlik,
          gap: layout.spacing(12),
          width: '100%',
        },
        ust: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: layout.spacing(14),
        },
        oynatButon: {
          width: layout.flowSize(56),
          height: layout.flowSize(56),
          borderRadius: layout.flowSize(28),
          backgroundColor: colors.birincil,
          alignItems: 'center',
          justifyContent: 'center',
        },
        oynatMetin: {
          fontSize: layout.flowSize(22),
          color: '#FFFFFF',
        },
        sure: {
          fontSize: layout.font.sm,
          color: colors.metin,
        },
        cubuk: {
          height: layout.spacing(8),
          borderRadius: layout.spacing(4),
          backgroundColor: colors.kenarlik,
          overflow: 'hidden',
        },
        dolgu: {
          height: '100%',
          backgroundColor: colors.turuncu,
          borderRadius: layout.spacing(4),
        },
      }),
    [layout],
  );

  const onPlaybackStatus = useCallback(
    (status: AVPlaybackStatus) => {
      if (!status.isLoaded) return;
      setPlaying(status.isPlaying);
      setPositionMs(status.positionMillis);
      setDurationMs(status.durationMillis ?? 0);
      setHazir(true);
      if (status.didJustFinish) {
        onPlaybackFinish?.();
      }
    },
    [onPlaybackFinish],
  );

  useEffect(() => {
    let aktif = true;

    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
    }).catch(() => {});

    const yukle = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          source,
          { shouldPlay: autoPlay },
          onPlaybackStatus,
        );
        if (!aktif) {
          await sound.unloadAsync();
          return;
        }
        soundRef.current = sound;
      } catch {
        setHazir(false);
      }
    };

    yukle();

    return () => {
      aktif = false;
      soundRef.current?.unloadAsync().catch(() => {});
      soundRef.current = null;
    };
  }, [source, autoPlay, onPlaybackStatus]);

  const toggle = async () => {
    const sound = soundRef.current;
    if (!sound) return;
    try {
      const status = await sound.getStatusAsync();
      if (!status.isLoaded) return;
      if (status.isPlaying) {
        await sound.pauseAsync();
      } else {
        if (status.didJustFinish || status.positionMillis === status.durationMillis) {
          await sound.setPositionAsync(0);
        }
        await sound.playAsync();
      }
    } catch {
      // yoksay
    }
  };

  const ilerleme = durationMs > 0 ? positionMs / durationMs : 0;

  return (
    <View style={styles.kutu}>
      <View style={styles.ust}>
        <Pressable
          onPress={toggle}
          style={styles.oynatButon}
          accessibilityRole="button"
          accessibilityLabel={playing ? 'Duraklat' : 'Oynat'}
        >
          <GuvenliMetin style={styles.oynatMetin} tamGenislik={false}>
            {playing ? '⏸' : '▶️'}
          </GuvenliMetin>
        </Pressable>
        <GuvenliMetin style={styles.sure} tamGenislik={false}>
          {hazir
            ? `${saniyeMetni(positionMs / 1000)} / ${saniyeMetni(durationMs / 1000)}`
            : 'Yükleniyor…'}
        </GuvenliMetin>
      </View>
      <View style={styles.cubuk}>
        <View style={[styles.dolgu, { width: `${Math.round(ilerleme * 100)}%` }]} />
      </View>
    </View>
  );
}
