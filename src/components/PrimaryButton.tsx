import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { GuvenliMetin } from './GuvenliMetin';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function PrimaryButton({ label, onPress, disabled, variant = 'primary' }: Props) {
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
          variant === 'secondary' && styles.secondary,
        ]}
      >
        <GuvenliMetin
          style={[styles.label, variant === 'secondary' && styles.secondaryLabel]}
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
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
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
    fontSize: 18,
    fontWeight: '700',
  },
  secondaryLabel: {
    color: colors.birincil,
  },
});
