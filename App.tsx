import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MatematikMuzikProvider } from './src/context/MatematikMuzikContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <MatematikMuzikProvider>
        <StatusBar style="dark" />
        <RootNavigator />
      </MatematikMuzikProvider>
    </SafeAreaProvider>
  );
}
