import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { GORSEL_OLCEK, gorselOlcekle } from '../theme/gorselBoyut';

interface Props {
  children: ReactNode;
  /** Ölçek öncesi tahmini yükseklik — metnin aşağı itilmesi için alan ayırır. */
  tabanYukseklik?: number;
}

/** Soru/anlatım SVG ve Flow görsellerini %30 büyütür; metin taşmasını önler. */
export function GorselOlcek({ children, tabanYukseklik = 200 }: Props) {
  return (
    <View style={[styles.dis, { minHeight: gorselOlcekle(tabanYukseklik) }]}>
      <View style={styles.ic}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  dis: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'visible',
  },
  ic: {
    transform: [{ scale: GORSEL_OLCEK }],
    alignItems: 'center',
    overflow: 'visible',
  },
});
