import { memo } from 'react';
import { Text, View, type ViewStyle } from 'react-native';
import { getVideoSource, SISTEM_VIDEOLARI } from '../assets/videoCatalog';
import { VideoPlayer } from './VideoPlayer';
import type { useQuestionStyles } from '../hooks/useQuestionStyles';

type QStyles = ReturnType<typeof useQuestionStyles>;

interface DogruProps {
  variant: 'dogru';
  baslik: string;
  metin: string;
  styles: QStyles;
  kutuStyle?: ViewStyle;
}

interface YanlisProps {
  variant: 'yanlis';
  baslik: string;
  metin: string;
  styles: QStyles;
  kutuStyle?: ViewStyle;
}

type Props = DogruProps | YanlisProps;

export const QuestionFeedback = memo(function QuestionFeedback(props: Props) {
  const { baslik, metin, styles: q } = props;
  const videoKey = props.variant === 'dogru' ? SISTEM_VIDEOLARI.dogru : SISTEM_VIDEOLARI.yanlis;
  const kutu = props.variant === 'dogru' ? q.feedbackDogru : q.feedbackYanlis;
  const baslikStil = props.variant === 'dogru' ? q.feedbackBaslik : q.feedbackBaslikYanlis;

  return (
    <View style={[kutu, props.kutuStyle]}>
      <VideoPlayer source={getVideoSource(videoKey)} autoPlay compact showControls={false} />
      <Text style={baslikStil}>{baslik}</Text>
      <Text style={q.feedbackMetin}>{metin}</Text>
    </View>
  );
});

/** Şaşırtma sorusu başında uyarı videosu */
export const SasirtmaUyariVideo = memo(function SasirtmaUyariVideo() {
  return (
    <VideoPlayer
      source={getVideoSource(SISTEM_VIDEOLARI.sasirtma)}
      autoPlay
      compact
      showControls={false}
    />
  );
});
