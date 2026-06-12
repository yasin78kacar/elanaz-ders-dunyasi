import { Audio, type AVPlaybackStatus } from 'expo-av';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

const MATEMATIK_MUZIK = require('../../assets/sounds/matematik-muzik.mp4');

interface MatematikMuzikContextValue {
  playing: boolean;
  toggle: () => Promise<void>;
  stop: () => Promise<void>;
}

const MatematikMuzikContext = createContext<MatematikMuzikContextValue | null>(null);

export function MatematikMuzikProvider({ children }: { children: ReactNode }) {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
    }).catch(() => {});

    return () => {
      soundRef.current?.unloadAsync().catch(() => {});
      soundRef.current = null;
    };
  }, []);

  const onPlaybackStatus = useCallback((status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setPlaying(status.isPlaying);
    }
  }, []);

  const stop = useCallback(async () => {
    const sound = soundRef.current;
    if (!sound) {
      setPlaying(false);
      return;
    }
    try {
      await sound.pauseAsync();
      await sound.setPositionAsync(0);
    } catch {
      // yoksay
    }
    setPlaying(false);
  }, []);

  const toggle = useCallback(async () => {
    try {
      if (playing && soundRef.current) {
        await soundRef.current.pauseAsync();
        setPlaying(false);
        return;
      }

      if (!soundRef.current) {
        const { sound } = await Audio.Sound.createAsync(
          MATEMATIK_MUZIK,
          { isLooping: true, shouldPlay: true },
          onPlaybackStatus,
        );
        soundRef.current = sound;
        setPlaying(true);
        return;
      }

      await soundRef.current.playAsync();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, [playing, onPlaybackStatus]);

  const value = useMemo(
    () => ({ playing, toggle, stop }),
    [playing, toggle, stop],
  );

  return (
    <MatematikMuzikContext.Provider value={value}>{children}</MatematikMuzikContext.Provider>
  );
}

export function useMatematikMuzik(): MatematikMuzikContextValue {
  const ctx = useContext(MatematikMuzikContext);
  if (!ctx) {
    throw new Error('useMatematikMuzik MatematikMuzikProvider içinde kullanılmalı');
  }
  return ctx;
}
