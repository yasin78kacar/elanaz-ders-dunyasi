import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { gorselOlcekle } from '../theme/gorselBoyut';

interface Props {
  children: ReactNode;
  /** SVG yedek için dikey alan — transform kullanılmaz (Android Image/SVG kırılması). */
  tabanYukseklik?: number;
}

/** Yalnızca layout boşluğu; ölçekleme boyut sabitleriyle yapılır. */
export function GorselOlcek({ children, tabanYukseklik = 200 }: Props) {
  return (
    <View style={[styles.dis, { minHeight: gorselOlcekle(tabanYukseklik) }]}>
      {children}
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
});
