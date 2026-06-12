import type { ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

export interface SvgLabelSpec {
  text: string;
  left: number;
  top: number;
  width?: number;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
}

interface Props {
  width: number;
  height: number;
  children: ReactNode;
  labels?: SvgLabelSpec[];
  style?: StyleProp<ViewStyle>;
}

/** SVG çizim + RN Text etiketleri — SvgText viewBox kırpmasını önler. */
export function SvgCanvas({ width, height, children, labels, style }: Props) {
  return (
    <View style={[styles.canvas, { width, height }, style]}>
      {children}
      {labels?.map((label, i) => (
        <Text
          key={`${label.text}-${i}`}
          style={[
            styles.label,
            {
              left: label.left,
              top: label.top,
              width: label.width ?? Math.max(48, label.text.length * 9),
              fontSize: label.fontSize ?? 11,
              fontWeight: label.fontWeight ?? '600',
              color: label.color ?? '#1A2B4A',
              textAlign: label.textAlign ?? 'center',
            },
          ]}
        >
          {label.text}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    position: 'relative',
    overflow: 'visible',
  },
  label: {
    position: 'absolute',
    flexShrink: 0,
  },
});
