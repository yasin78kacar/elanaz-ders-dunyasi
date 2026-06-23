import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MatematikMuzikProvider } from './src/context/MatematikMuzikContext';
import { GamificationProvider } from './src/contexts/GamificationContext';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { RootNavigator } from './src/navigation/RootNavigator';

function AppInner() {
  const { isDark } = useTheme();
  return (
    <>
      <MatematikMuzikProvider>
        <GamificationProvider>
          <StatusBar style={isDark ? 'light' : 'dark'} />
          <RootNavigator />
        </GamificationProvider>
      </MatematikMuzikProvider>
    </>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
