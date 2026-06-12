import { useEffect, useRef } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { Video, ResizeMode, type AVPlaybackStatus } from 'expo-av';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';

interface Props {
  source: number;
  autoPlay?: boolean;
  loop?: boolean;
  compact?: boolean;
  showControls?: boolean;
  style?: StyleProp<ViewStyle>;
  onPlaybackFinish?: () => void;
}

export function VideoPlayer({
  source,
  autoPlay = false,
  loop = false,
  compact = false,
  showControls = true,
  style,
  onPlaybackFinish,
}: Props) {
  const layout = useDeviceLayout();
  const ref = useRef<Video>(null);
  const yukseklik = compact ? layout.flowSize(140) : layout.flowSize(220);

  useEffect(() => {
    if (autoPlay) {
      ref.current?.playAsync().catch(() => {});
    }
    return () => {
      ref.current?.stopAsync().catch(() => {});
    };
  }, [autoPlay, source]);

  const onStatus = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    if (status.didJustFinish && !loop) {
      onPlaybackFinish?.();
    }
  };

  return (
    <View style={[styles.kutu, { borderRadius: layout.spacing(14) }, style]}>
      <Video
        ref={ref}
        source={source}
        style={{ width: '100%', height: yukseklik, borderRadius: layout.spacing(12) }}
        resizeMode={ResizeMode.CONTAIN}
        isLooping={loop}
        shouldPlay={autoPlay}
        useNativeControls={showControls}
        onPlaybackStatusUpdate={onStatus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  kutu: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.kart,
    borderWidth: 2,
    borderColor: colors.kenarlik,
  },
});
