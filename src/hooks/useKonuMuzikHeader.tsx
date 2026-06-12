import { useLayoutEffect } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MatematikMuzikButton } from '../components/MatematikMuzikButton';
import type { RootStackParamList } from '../navigation/types';

/** Konu ekranı başlığına 🎵 müzik butonu ekler. */
export function useKonuMuzikHeader(
  navigation: NativeStackNavigationProp<RootStackParamList>,
  options: { title: string },
) {
  const { title } = options;

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => <MatematikMuzikButton />,
    });
  }, [navigation, title]);
}
