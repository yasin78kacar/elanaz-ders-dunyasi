import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { ElanazAvatar } from './ElanazAvatar';
import { useDeviceLayout } from '../hooks/useDeviceLayout';

interface Props {
  children?: ReactNode;
  avatarSize?: number;
}

/** Ekran üstünde Elanaz karakteri + isteğe bağlı içerik. */
export function ElanazHeader({ children, avatarSize }: Props) {
  const layout = useDeviceLayout();
  const boyut = avatarSize ?? layout.avatarSize;
  return (
    <View style={styles.satir}>
      <ElanazAvatar size={boyut} />
      {children ? <View style={styles.icerik}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  satir: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  icerik: {
    flex: 1,
  },
});
