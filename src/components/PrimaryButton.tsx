import { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import { GuvenliMetin } from './GuvenliMetin';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function PrimaryButton({ label, onPress, disabled, variant = 'primary' }: Props) {
  const layout = useDeviceLayout();
  const dynamic = useMemo(
    () => ({
      button: {
        minHeight: layout.buttonHeight,
        paddingHorizontal: layout.spacing(24),
        borderRadius: layout.spacing(14),
        justifyContent: 'center' as const,
      },
      label: {
        fontSize: layout.font.lg,
      },
    }),
    [layout],
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.hit,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.button,
          dynamic.button,
          variant === 'secondary' && styles.secondary,
        ]}
      >
        <GuvenliMetin
          style={[styles.label, dynamic.label, variant === 'secondary' && styles.secondaryLabel]}
          tamGenislik={false}
        >
          {label}
        </GuvenliMetin>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: {
    overflow: 'visible',
  },
  button: {
    backgroundColor: colors.birincil,
    alignItems: 'center',
    overflow: 'visible',
  },
  secondary: {
    backgroundColor: colors.kart,
    borderWidth: 2,
    borderColor: colors.birincil,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  secondaryLabel: {
    color: colors.birincil,
  },
});
