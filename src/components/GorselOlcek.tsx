import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';

interface Props {
  children: ReactNode;
  /** SVG yedek için dikey alan — transform kullanılmaz (Android Image/SVG kırılması). */
  tabanYukseklik?: number;
}

/** Yalnızca layout boşluğu; görsel yüksekliği deviceLayout.gorselBoyut.buyuk ile yapılır. */
export function GorselOlcek({ children, tabanYukseklik }: Props) {
  const layout = useDeviceLayout();
  const yukseklik = tabanYukseklik
    ? layout.flowSize(tabanYukseklik)
    : layout.gorselBoyut.buyuk;

  return (
    <View style={[styles.dis, { minHeight: yukseklik }]}>
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
