import { useState, type ReactNode } from 'react';
import { Image, StyleSheet, type ImageStyle, type StyleProp, View } from 'react-native';
import { FLOW_GORSEL_GENISLIK, FLOW_GORSEL_YUKSEKLIK } from '../theme/gorselBoyut';

/** Metro require() doğrulama — elanaz.jpeg doğrudan yükleme testi */
export const FLOW_TEST_ELanaz = require('../../assets/images/A_cute_Turkish_girl_named_202606120924.jpeg');

interface Props {
  source: number;
  style?: StyleProp<ImageStyle>;
  onError?: () => void;
}

export function FlowImage({ source, style, onError }: Props) {
  return (
    <View style={styles.sarmal}>
      <Image
        source={source}
        style={[styles.gorsel, style]}
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

const styles = StyleSheet.create({
  sarmal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  gorsel: {
    width: '100%',
    maxWidth: FLOW_GORSEL_GENISLIK,
    height: FLOW_GORSEL_YUKSEKLIK,
  },
  fallbackKapsayici: {
    width: '100%',
    alignItems: 'center',
    overflow: 'visible',
  },
});
