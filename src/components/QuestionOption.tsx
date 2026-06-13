import { useMemo, type ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle } from 'react-native';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { AnswerDisplay } from './AnswerDisplay';

interface Props {
  text: string | number;
  icon?: ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

/** Şık satırı: isteğe bağlı ikon + cevap metni. */
export function QuestionOption({ text, icon, textStyle }: Props) {
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        icerik: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: layout.spacing(10),
          flexWrap: 'nowrap',
          flexGrow: 0,
          flexShrink: 0,
          overflow: 'visible',
          paddingRight: layout.spacing(6),
        },
      }),
    [layout],
  );

  return (
    <View style={styles.icerik}>
      {icon}
      <AnswerDisplay text={text} style={textStyle} />
    </View>
  );
}
