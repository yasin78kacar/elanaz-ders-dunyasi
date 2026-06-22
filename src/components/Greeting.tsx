import { StyleSheet, Text, View, type StyleProp, type TextStyle } from 'react-native';
import { colors } from '../theme/colors';

interface Props {
  name?: string;
  style?: StyleProp<TextStyle>;
}

/** Basit karşılama metni — isteğe bağlı isim ile. */
export function Greeting({ name, style }: Props) {
  const metin = name ? `Merhaba, ${name}!` : 'Merhaba!';

  return (
    <View style={styles.kapsayici}>
      <Text style={[styles.metin, style]} accessibilityRole="header">
        {metin}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kapsayici: {
    paddingVertical: 8,
  },
  metin: {
    color: colors.baslik,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});
