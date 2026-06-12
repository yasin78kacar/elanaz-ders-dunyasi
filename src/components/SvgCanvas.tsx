import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { GuvenliMetin } from './GuvenliMetin';
import { etiketMinGenislik } from '../utils/guvenliMetin';

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
      {labels?.map((label, i) => {
        const fontSize = label.fontSize ?? 11;
        const labelWidth = label.width ?? etiketMinGenislik(label.text, fontSize);
        const left =
          label.textAlign === 'center'
            ? label.left - labelWidth / 2
            : label.textAlign === 'right'
              ? label.left - labelWidth
              : label.left;
        return (
          <GuvenliMetin
            key={`${label.text}-${i}`}
            style={[
              styles.label,
              {
                left: Math.max(0, left),
                top: label.top,
                width: labelWidth,
                minWidth: labelWidth,
                fontSize,
                fontWeight: label.fontWeight ?? '600',
                color: label.color ?? '#1A2B4A',
                textAlign: label.textAlign ?? 'center',
              },
            ]}
          >
            {label.text}
          </GuvenliMetin>
        );
      })}
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
  },
});
