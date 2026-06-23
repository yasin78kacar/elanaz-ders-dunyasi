import { memo, useMemo, type ReactNode } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import {
  exerciseScrollViewProps,
  useExerciseFooterMetrics,
} from './ExerciseScreenContainer';

interface QuestionLayoutProps {
  children: ReactNode;
  footer?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * Soru bileşenleri: görsel + seçenekler ScrollView içinde;
 * onay butonu altta sabit footer'da kalır.
 */
function QuestionScreenLayoutBase({
  children,
  footer,
  contentContainerStyle,
}: QuestionLayoutProps) {
  const layout = useDeviceLayout();
  const { footerStyle, scrollPadBottom, buttonContainerStyle } = useExerciseFooterMetrics();

  const scrollContentStyle = useMemo(
    () => [{ paddingBottom: scrollPadBottom, gap: layout.spacing(24) }, contentContainerStyle],
    [scrollPadBottom, layout, contentContainerStyle],
  );

  const footerContainerStyle = useMemo(
    () => [styles.fixedFooter, footerStyle, { paddingTop: layout.spacing(10) }],
    [footerStyle, layout],
  );

  return (
    <View style={styles.questionLayout}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={scrollContentStyle}
        removeClippedSubviews
        {...exerciseScrollViewProps}
      >
        {children}
      </ScrollView>
      {footer ? (
        <View style={footerContainerStyle}>
          <View style={[styles.buttonContainer, buttonContainerStyle]}>{footer}</View>
        </View>
      ) : null}
    </View>
  );
}

export const QuestionScreenLayout = memo(QuestionScreenLayoutBase);
export const QuestionScreen = QuestionScreenLayout;

const styles = StyleSheet.create({
  questionLayout: {
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
    backgroundColor: colors.kart,
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
