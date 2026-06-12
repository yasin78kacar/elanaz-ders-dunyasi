import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { resolveCharacterImage } from '../assets/imageCatalog';
import { FLOW_TEST_ELanaz } from './FlowImage';
import { colors } from '../theme/colors';

interface Props {
  size?: number;
}

/** Ana karakter — elanaz.jpeg; yoksa renkli baş harf yedek. */
export function ElanazAvatar({ size = 64 }: Props) {
  const [failed, setFailed] = useState(false);
  const source = resolveCharacterImage() ?? FLOW_TEST_ELanaz;

  if (source !== undefined && !failed) {
    return (
      <Image
        source={source}
        style={{ width: size, height: size, borderRadius: size / 2 }}
        resizeMode="cover"
        accessibilityLabel="Elanaz"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <View style={[styles.yedek, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={[styles.harf, { fontSize: size * 0.45 }]}>E</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  yedek: {
    backgroundColor: colors.turuncu,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.kenarlik,
  },
  harf: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});
