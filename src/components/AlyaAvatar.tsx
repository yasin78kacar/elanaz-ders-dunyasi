import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { getVideoSource, SISTEM_VIDEOLARI } from '../assets/videoCatalog';
import { VideoPlayer } from './VideoPlayer';

/** Alya karakteri — küçük döngülü tanıtım videosu */
export function AlyaAvatar() {
  const layout = useDeviceLayout();
  const boyut = Math.round(layout.avatarSize * 1.1);

  return (
    <VideoPlayer
      source={getVideoSource(SISTEM_VIDEOLARI.alya)}
      autoPlay
      loop
      compact
      showControls={false}
      style={{ width: boyut, alignSelf: 'flex-start' }}
    />
  );
}
