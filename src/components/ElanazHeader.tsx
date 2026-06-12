import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { ElanazAvatar } from './ElanazAvatar';
import { KARAKTER_AVATAR } from '../theme/gorselBoyut';

interface Props {
  children?: ReactNode;
  avatarSize?: number;
}

/** Ekran üstünde Elanaz karakteri + isteğe bağlı içerik. */
export function ElanazHeader({ children, avatarSize = KARAKTER_AVATAR }: Props) {
  return (
    <View style={styles.satir}>
      <ElanazAvatar size={avatarSize} />
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
