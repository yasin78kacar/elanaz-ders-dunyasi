import type { ReactNode } from 'react';
import { Image, StyleSheet, type ImageStyle, type StyleProp, View } from 'react-native';

interface Props {
  source: number;
  style?: StyleProp<ImageStyle>;
}

export function FlowImage({ source, style }: Props) {
  return (
    <View style={styles.sarmal}>
      <Image source={source} style={[styles.gorsel, style]} resizeMode="contain" accessibilityRole="image" />
    </View>
  );
}

/** Kaynak varsa Flow görseli, yoksa yedek bileşen. */
export function FlowOrFallback({
  source,
  fallback,
  style,
}: {
  source?: number;
  fallback: ReactNode;
  style?: StyleProp<ImageStyle>;
}) {
  if (source === undefined) return <>{fallback}</>;
  return <FlowImage source={source} style={style} />;
}

const styles = StyleSheet.create({
  sarmal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  gorsel: {
    width: '100%',
    maxWidth: 340,
    height: 220,
  },
});
