import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { GEO } from './colors';

interface Props {
  label: string;
  width?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

/** SVG dışında RN Text etiketi — SvgText viewBox kırpmasını önler. */
export function IllustrationColumn({ label, width, children, style, labelStyle }: Props) {
  return (
    <View style={[styles.col, width != null && { width }, style]}>
      <View style={styles.gorsel}>{children}</View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    alignItems: 'center',
  },
  gorsel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '600',
    color: GEO.metin,
    textAlign: 'center',
    flexShrink: 0,
    paddingHorizontal: 2,
  },
});
