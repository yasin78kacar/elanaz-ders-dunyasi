import { type ReactNode } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children: ReactNode;
}

/** Alıştırma akış ekranları için tam ekran kapsayıcı. */
export function ExerciseScreenContainer({ children }: ContainerProps) {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
}

interface LayoutProps {
  children: ReactNode;
  bottomBar?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * Scroll içerik + altta mutlak konumlu buton alanı.
 * İçerik ScrollView içinde; aksiyon butonları sabit footer'da kalır.
 */
export function ExerciseScreenLayout({
  children,
  bottomBar,
  contentContainerStyle,
}: LayoutProps) {
  return (
    <View style={styles.layout}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[exerciseScreenStyles.scrollContent, contentContainerStyle]}
        {...exerciseScrollViewProps}
      >
        {children}
      </ScrollView>
      {bottomBar ? <View style={styles.fixedFooter}>{bottomBar}</View> : null}
    </View>
  );
}

export const exerciseScrollViewProps = {
  bounces: false as const,
  keyboardShouldPersistTaps: 'handled' as const,
  showsVerticalScrollIndicator: true,
};

export const exerciseScreenStyles = StyleSheet.create({
  scrollContent: { paddingBottom: 140 },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  fixedFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 40,
    paddingTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    zIndex: 999,
  },
});
