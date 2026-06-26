import type { LinkingOptions } from '@react-navigation/native';
import { Platform } from 'react-native';
import type { RootStackParamList } from './types';

/** GitHub Pages alt dizin yolu — app.json experiments.baseUrl ile eşleşmeli */
export const WEB_BASE_PATH = '/elanaz-ders-dunyasi';

const webLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [WEB_BASE_PATH],
  config: {
    path: WEB_BASE_PATH,
    screens: {
      Home: '',
    },
  },
};

/** React Navigation web basename — BrowserRouter basename karşılığı */
export const linking: LinkingOptions<RootStackParamList> | undefined =
  Platform.OS === 'web' ? webLinking : undefined;
