import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { ElanazAvatar } from './ElanazAvatar';

interface Props {
  children?: ReactNode;
}

/** Ekran üstünde Elanaz karakteri + isteğe bağlı içerik. */
export function ElanazHeader({ children }: Props) {
  return (
    <View style={styles.satir}>
      <ElanazAvatar size={56} />
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
  },
  icerik: {
    flex: 1,
  },
});
