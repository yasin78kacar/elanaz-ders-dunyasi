import { useMemo, type ReactNode } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDeviceLayout } from '../hooks/useDeviceLayout';

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

/** Scroll alt boşluğu — sabit footer + güvenli alan için yeterli padding. */
export function exerciseScrollPadBottom(
  layout: ReturnType<typeof useDeviceLayout>,
  insetBottom: number,
): number {
  const footerPad = Math.max(insetBottom, layout.spacing(16)) + layout.spacing(8);
  return layout.buttonHeight + footerPad + layout.spacing(24);
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
  const insets = useSafeAreaInsets();
  const layout = useDeviceLayout();

  const footerPadBottom = Math.max(insets.bottom, layout.spacing(16)) + layout.spacing(8);
  const scrollPadBottom = exerciseScrollPadBottom(layout, insets.bottom);
  const buttonMaxWidth = layout.width - layout.spacing(40);

  const footerStyle = useMemo(
    () => ({
      paddingBottom: footerPadBottom,
      paddingHorizontal: layout.spacing(20),
    }),
    [footerPadBottom, layout],
  );

  const buttonContainerStyle = useMemo(
    () => ({
      maxWidth: buttonMaxWidth,
      gap: layout.spacing(8),
    }),
    [buttonMaxWidth, layout],
  );

  return (
    <View style={styles.layout}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[{ paddingBottom: scrollPadBottom }, contentContainerStyle]}
        {...exerciseScrollViewProps}
      >
        {children}
      </ScrollView>
      {bottomBar ? (
        <View style={[styles.fixedFooter, footerStyle]}>
          <View style={[styles.buttonContainer, buttonContainerStyle]}>{bottomBar}</View>
        </View>
      ) : null}
    </View>
  );
}

export const exerciseScrollViewProps = {
  bounces: false as const,
  keyboardShouldPersistTaps: 'handled' as const,
  showsVerticalScrollIndicator: true,
};

/** @deprecated ExerciseScreenLayout içinde dinamik hesaplanır */
export const exerciseScreenStyles = StyleSheet.create({
  scrollContent: { paddingBottom: 140 },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
    overflow: 'visible',
  },
  scrollView: {
    flex: 1,
  },
  fixedFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    zIndex: 999,
    overflow: 'visible',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
});
