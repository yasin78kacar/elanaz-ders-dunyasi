import { useMemo, useState, type ReactNode } from 'react';
import { Image, StyleSheet, type ImageStyle, type StyleProp, View } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';

/** Metro require() doğrulama — elanaz.jpeg doğrudan yükleme testi */
export const FLOW_TEST_ELanaz = require('../../assets/images/A_cute_Turkish_girl_named_202606120924.jpeg');

interface Props {
  source: number;
  style?: StyleProp<ImageStyle>;
  onError?: () => void;
}

export function FlowImage({ source, style, onError }: Props) {
  const layout = useDeviceLayout();
  const gorselStyle = useMemo(() => {
    const yatayBosluk = layout.spacing(40);
    const maxW = Math.min(layout.flowSize(340), layout.width - yatayBosluk);
    return {
      maxWidth: maxW,
      height: layout.gorselBoyut.buyuk,
    };
  }, [layout]);

  return (
    <View style={styles.sarmal}>
      <Image
        source={source}
        style={[styles.gorsel, gorselStyle, style]}
        resizeMode="contain"
        accessibilityRole="image"
        onError={onError}
      />
    </View>
  );
}

/** Kaynak varsa Flow görseli; hata veya yüklenemezse SVG yedek. transform KULLANMA — Android Image kırılır. */
export function FlowOrFallback({
  source,
  fallback,
  style,
}: {
  source?: number;
  fallback: ReactNode;
  style?: StyleProp<ImageStyle>;
}) {
  const [failed, setFailed] = useState(false);

  if (source === undefined || failed) {
    return <View style={styles.fallbackKapsayici}>{fallback}</View>;
  }

  return (
    <FlowImage
      source={source}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}

/** Konu akışı sabit Devam tuşu kapsayıcısı — Fold 7 görünürlük */
export const flowButtonContainerStyle = {
  paddingBottom: 80,
  marginTop: 30,
  marginBottom: 40,
  minHeight: 100,
};

const styles = StyleSheet.create({
  sarmal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100%',
    overflow: 'visible',
  },
  gorsel: {
    width: '100%',
    maxWidth: '100%',
  },
  fallbackKapsayici: {
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
    overflow: 'visible',
  },
});
