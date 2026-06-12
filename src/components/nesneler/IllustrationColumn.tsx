import { StyleSheet, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from './colors';

interface Props {
  label: string;
  width?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

/**
 * SVG illüstrasyon + RN etiket.
 * width yalnızca görsele uygulanır — etiket genişliği kısıtlanmaz (kutu→kut kırpması önlenir).
 */
export function IllustrationColumn({ label, width, children, style, labelStyle }: Props) {
  return (
    <View style={[styles.col, style]}>
      <View style={[styles.gorsel, width != null && { width }]}>{children}</View>
      <GuvenliMetin style={[styles.label, labelStyle]}>{label}</GuvenliMetin>
    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    alignItems: 'center',
    overflow: 'visible',
    marginHorizontal: 2,
  },
  gorsel: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  label: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '600',
    color: GEO.metin,
  },
});
