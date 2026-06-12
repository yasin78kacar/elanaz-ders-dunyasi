import { Platform, StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';
import { etiketMinGenislik } from '../utils/guvenliMetin';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
  /** false ise minWidth uygulanmaz (çok satırlı paragraflar için) */
  tamGenislik?: boolean;
  textAlign?: TextStyle['textAlign'];
}

/**
 * Son harf kırpılmasını önleyen metin bileşeni.
 * SvgText yerine ve dar kapsayıcı içindeki tüm etiketlerde kullanılır.
 */
export function GuvenliMetin({ children, style, tamGenislik = true, textAlign = 'center' }: Props) {
  const flat = StyleSheet.flatten(style);
  const fontSize = typeof flat?.fontSize === 'number' ? flat.fontSize : 14;
  const minWidth = tamGenislik ? etiketMinGenislik(children, fontSize) : undefined;

  return (
    <Text
      style={[styles.metin, { textAlign, minWidth }, style]}
      adjustsFontSizeToFit={false}
      allowFontScaling
      {...(Platform.OS === 'android'
        ? { includeFontPadding: false, textBreakStrategy: 'simple' as const }
        : {})}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  metin: {
    flexShrink: 0,
    overflow: 'visible',
    paddingHorizontal: 3,
  },
});
