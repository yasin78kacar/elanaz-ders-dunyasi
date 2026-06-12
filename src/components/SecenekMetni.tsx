import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import { colors } from '../theme/colors';
import { secenekGosterim } from '../utils/secenekGosterim';
import { GuvenliMetin } from './GuvenliMetin';

interface Props {
  secenek: string | number;
  style?: StyleProp<TextStyle>;
}

/** Test şıkkı metni — kırpma olmadan tam gösterim. */
export function SecenekMetni({ secenek, style }: Props) {
  return (
    <GuvenliMetin style={[styles.metin, style]} textAlign="center">
      {secenekGosterim(secenek)}
    </GuvenliMetin>
  );
}

const styles = StyleSheet.create({
  metin: {
    fontSize: 18,
    color: colors.metin,
  },
});
