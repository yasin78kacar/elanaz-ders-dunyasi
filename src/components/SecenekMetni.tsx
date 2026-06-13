import type { StyleProp, TextStyle } from 'react-native';
import { AnswerDisplay } from './AnswerDisplay';

interface Props {
  secenek: string | number;
  style?: StyleProp<TextStyle>;
}

/** @deprecated AnswerDisplay kullanın — geriye dönük uyumluluk. */
export function SecenekMetni({ secenek, style }: Props) {
  return <AnswerDisplay text={secenek} style={style} />;
}
