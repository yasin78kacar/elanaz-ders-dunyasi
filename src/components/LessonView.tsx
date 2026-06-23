import { memo, useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import type { AnlatimEkrani } from '../types/content';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { clearImageCache, prefetchImage } from '../utils/imageOptimizer';
import { resolveFlowImage, resolveFlowImageForTur } from '../assets/imageCatalog';
import { ElanazHeader } from './ElanazHeader';
import { ContentIllustration } from './ContentIllustration';
import { VideoIzleButton } from './VideoIzleButton';

interface Props {
  ekran: AnlatimEkrani;
  konuId: string;
  index: number;
  toplam: number;
  anlatimVideo?: number;
  /** Tüm anlatım ekranları — lazy load için (opsiyonel). */
  ekranlar?: readonly AnlatimEkrani[];
}

function resolveEkranImageSource(gorsel: AnlatimEkrani['gorsel'], konuId: string): number | undefined {
  if (!gorsel) return undefined;
  if (typeof gorsel === 'string') return resolveFlowImage(gorsel, konuId);
  if (gorsel.tur === 'kap') return resolveFlowImageForTur('kap', gorsel.sahne, 'sivi-olcme');
  if (gorsel.tur === 'nesne') return resolveFlowImageForTur('nesne', gorsel.sahne, konuId);
  return undefined;
}

function LessonViewBase({ ekran, konuId, index, toplam, anlatimVideo, ekranlar }: Props) {
  const layout = useDeviceLayout();
  const { colors } = useTheme();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const mountedRef = useRef(true);

  const lazyEkranlar = ekranlar ?? [ekran];
  const { ensureIndexLoaded } = useLazyLoad(lazyEkranlar);

  useEffect(() => {
    mountedRef.current = true;
    ensureIndexLoaded(index);

    const currentSource = resolveEkranImageSource(ekran.gorsel, konuId);
    if (currentSource !== undefined) prefetchImage(currentSource);

    const next = lazyEkranlar[index + 1];
    if (next) {
      const nextSource = resolveEkranImageSource(next.gorsel, konuId);
      if (nextSource !== undefined) prefetchImage(nextSource);
    }

    return () => {
      mountedRef.current = false;
    };
  }, [index, ekran, konuId, ensureIndexLoaded, lazyEkranlar]);

  useEffect(() => {
    return () => {
      clearImageCache();
    };
  }, [konuId]);

  useEffect(() => {
    fadeAnim.setValue(0);
    const anim = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [index, fadeAnim]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: { gap: layout.spacing(32) },
        etiket: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.turuncu,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        },
        anlatimMetin: {
          fontSize: layout.font.lg,
          lineHeight: layout.spacing(34),
          color: colors.baslik,
          marginTop: layout.spacing(8),
        },
        sayac: { fontSize: layout.font.sm, color: colors.metin },
        icerik: { gap: layout.spacing(32) },
      }),
    [layout, colors],
  );

  const sayacMetni = useMemo(
    () => `${index + 1} / ${toplam}`,
    [index, toplam],
  );

  const animatedStyle = useMemo(
    () => ({ opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [6, 0] }) }] }),
    [fadeAnim],
  );

  return (
    <View style={styles.kutu}>
      <ElanazHeader />
      <Animated.View style={[styles.icerik, animatedStyle]}>
        <Text style={styles.etiket}>Konu Anlatımı</Text>
        <ContentIllustration gorsel={ekran.gorsel} konuId={konuId} />
        <Text style={styles.anlatimMetin}>{ekran.metin}</Text>
        {anlatimVideo ? <VideoIzleButton source={anlatimVideo} /> : null}
        <Text style={styles.sayac}>{sayacMetni}</Text>
      </Animated.View>
    </View>
  );
}

export const LessonView = memo(LessonViewBase);
