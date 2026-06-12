import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';

interface Props {
  children: ReactNode;
  /** SVG yedek için dikey alan — transform kullanılmaz (Android Image/SVG kırılması). */
  tabanYukseklik?: number;
}

/** Yalnızca layout boşluğu; Flow ölçeği deviceLayout.flowSize ile yapılır. */
export function GorselOlcek({ children, tabanYukseklik = 220 }: Props) {
  const layout = useDeviceLayout();

  return (
    <View style={[styles.dis, { minHeight: layout.flowSize(tabanYukseklik) }]}>
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
