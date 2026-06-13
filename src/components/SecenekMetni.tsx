import { QuestionOption } from './QuestionOption';
import type { StyleProp, TextStyle } from 'react-native';

interface Props {
  secenek: string | number;
  style?: StyleProp<TextStyle>;
}

/** @deprecated AnswerButton / QuestionOption kullanın */
export function SecenekMetni({ secenek, style }: Props) {
  return <QuestionOption secenek={secenek} style={style} />;
}
