import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import {
  BALL_ANIM_DURATION_MS,
  BALL_COLLECTION_COLORS,
  buildBallCollectionScene,
  drawBallCollectionFrame,
  equationOpacity,
  greenBallProgress,
} from '../utils/ballCollectionDraw';

type PlayState = 'idle' | 'playing' | 'paused';

interface Props {
  style?: ViewStyle;
}

function WebCanvas({
  width,
  height,
  displayW,
  displayH,
  canvasRef,
}: {
  width: number;
  height: number;
  displayW: number;
  displayH: number;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}) {
  if (Platform.OS !== 'web') return null;
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        width: displayW,
        height: displayH,
        display: 'block',
      }}
    />
  );
}

export function BallCollectionAnimation({ style }: Props) {
  const layout = useDeviceLayout();
  const { colors } = useTheme();
  const scene = useMemo(() => buildBallCollectionScene(), []);
  const isWeb = Platform.OS === 'web';

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTsRef = useRef<number | null>(null);
  const pausedAtRef = useRef(0);
  const recorderRef = useRef<{ start: () => void; stop: () => Promise<Blob>; destroy: () => void } | null>(
    null,
  );

  const [timeMs, setTimeMs] = useState(0);
  const [playState, setPlayState] = useState<PlayState>('idle');
  const [mp4Blob, setMp4Blob] = useState<Blob | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const displayW = layout.gorselCanvas.width;
  const displayH = Math.round((displayW * scene.height) / scene.width);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrap: { alignItems: 'center', gap: layout.spacing(12) },
        stage: {
          width: displayW,
          height: displayH,
          borderRadius: layout.spacing(12),
          overflow: 'hidden',
          backgroundColor: BALL_COLLECTION_COLORS.BG,
          borderWidth: 2,
          borderColor: colors.kenarlik,
        },
        controls: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: layout.spacing(10),
        },
        btn: {
          backgroundColor: colors.birincil,
          paddingVertical: layout.spacing(10),
          paddingHorizontal: layout.spacing(16),
          borderRadius: layout.spacing(10),
          minHeight: layout.buttonHeight * 0.65,
          justifyContent: 'center',
        },
        btnSecondary: {
          backgroundColor: colors.kart,
          borderWidth: 2,
          borderColor: colors.birincil,
        },
        btnDisabled: { opacity: 0.45 },
        btnText: {
          color: '#FFFFFF',
          fontSize: layout.font.md,
          fontWeight: '700',
          textAlign: 'center',
        },
        btnTextSecondary: { color: colors.birincil },
        status: {
          fontSize: layout.font.sm,
          color: colors.metin,
          textAlign: 'center',
        },
        nativeNote: {
          fontSize: layout.font.sm,
          color: colors.turuncu,
          textAlign: 'center',
          paddingHorizontal: layout.spacing(8),
        },
        equation: {
          position: 'absolute',
          left: 0,
          right: 0,
          textAlign: 'center',
          fontWeight: '800',
          color: BALL_COLLECTION_COLORS.TEXT,
        },
      }),
    [layout, colors, displayW, displayH],
  );

  const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

  const paintCanvas = useCallback(
    (t: number) => {
      if (!isWeb || !canvasRef.current) return;
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;
      drawBallCollectionFrame(ctx, scene, t);
    },
    [isWeb, scene],
  );

  const stopLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const finishPlayback = useCallback(async () => {
    stopLoop();
    setPlayState('idle');
    startTsRef.current = null;

    const recorder = recorderRef.current;
    if (!recorder) return;

    try {
      setBusy(true);
      setStatus('Video işleniyor…');
      const { convertWebmToMp4 } = await import('../utils/ballCollectionVideoExport');
      const webm = await recorder.stop();
      recorder.destroy();
      recorderRef.current = null;
      const mp4 = await convertWebmToMp4(webm, setStatus);
      setMp4Blob(mp4);
      setStatus('MP4 hazır — İndir butonuna basın.');
    } catch (e) {
      setStatus(e instanceof Error ? e.message : 'Kayıt başarısız');
    } finally {
      setBusy(false);
    }
  }, [stopLoop]);

  const tick = useCallback(
    (ts: number) => {
      if (startTsRef.current == null) startTsRef.current = ts;
      const elapsed = pausedAtRef.current + (ts - startTsRef.current);
      const t = Math.min(elapsed, BALL_ANIM_DURATION_MS);
      setTimeMs(t);
      paintCanvas(t);

      if (t >= BALL_ANIM_DURATION_MS) {
        if (recorderRef.current) {
          void finishPlayback();
        } else {
          stopLoop();
          setPlayState('idle');
          startTsRef.current = null;
        }
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    },
    [finishPlayback, paintCanvas, stopLoop],
  );

  const play = useCallback(() => {
    stopLoop();
    setPlayState('playing');
    startTsRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [stopLoop, tick]);

  const pause = useCallback(() => {
    if (playState !== 'playing') return;
    stopLoop();
    if (startTsRef.current != null) {
      pausedAtRef.current += now() - startTsRef.current;
    }
    startTsRef.current = null;
    setPlayState('paused');
  }, [playState, stopLoop]);

  const reset = useCallback(() => {
    stopLoop();
    recorderRef.current?.destroy();
    recorderRef.current = null;
    pausedAtRef.current = 0;
    startTsRef.current = null;
    setTimeMs(0);
    setPlayState('idle');
    paintCanvas(0);
  }, [paintCanvas, stopLoop]);

  const handleRecord = useCallback(async () => {
    if (!isWeb || !canvasRef.current || busy) return;
    reset();
    setMp4Blob(null);
    setStatus('Kayıt başlıyor…');
    const { createCanvasRecorder } = await import('../utils/ballCollectionVideoExport');
    recorderRef.current = createCanvasRecorder(canvasRef.current, 30);
    recorderRef.current.start();
    play();
  }, [busy, isWeb, play, reset]);

  const handleDownload = useCallback(async () => {
    if (!mp4Blob || !isWeb) return;
    const { downloadBlob } = await import('../utils/ballCollectionVideoExport');
    downloadBlob(mp4Blob, 'top-toplama-animasyon.mp4');
  }, [isWeb, mp4Blob]);

  useEffect(() => {
    paintCanvas(timeMs);
  }, [paintCanvas, timeMs, displayW, displayH]);

  useEffect(
    () => () => {
      stopLoop();
      recorderRef.current?.destroy();
    },
    [stopLoop],
  );

  const eqOpacity = equationOpacity(timeMs);
  const equationTop = (displayH * scene.equationY) / scene.height - layout.font.xl;

  return (
    <View style={[styles.wrap, style]}>
      <View style={styles.stage}>
        {isWeb ? (
          <WebCanvas
            canvasRef={canvasRef}
            width={scene.width}
            height={scene.height}
            displayW={displayW}
            displayH={displayH}
          />
        ) : (
          <>
            <Svg width={displayW} height={displayH} viewBox={`0 0 ${scene.width} ${scene.height}`}>
              {scene.blueBalls.map((b, i) => (
                <Circle key={`b-${i}`} cx={b.cx} cy={b.cy} r={b.r} fill={BALL_COLLECTION_COLORS.BLUE} />
              ))}
              {scene.greenBalls.map((b, i) => {
                const p = greenBallProgress(i, timeMs);
                if (p <= 0) return null;
                const scale = 0.2 + 0.8 * p;
                return (
                  <Circle
                    key={`g-${i}`}
                    cx={b.cx}
                    cy={b.cy}
                    r={b.r * scale}
                    fill={BALL_COLLECTION_COLORS.GREEN}
                    opacity={p}
                  />
                );
              })}
            </Svg>
            {eqOpacity > 0 ? (
              <Text style={[styles.equation, { top: equationTop, fontSize: layout.font.xl + 8, opacity: eqOpacity }]}>
                4 + 3 = 7
              </Text>
            ) : null}
          </>
        )}
      </View>

      <View style={styles.controls}>
        <Pressable
          style={[styles.btn, (playState === 'playing' || busy) && styles.btnDisabled]}
          onPress={play}
          disabled={playState === 'playing' || busy}
        >
          <Text style={styles.btnText}>Oynat</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, styles.btnSecondary, (playState !== 'playing') && styles.btnDisabled]}
          onPress={pause}
          disabled={playState !== 'playing'}
        >
          <Text style={[styles.btnText, styles.btnTextSecondary]}>Duraklat</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, (!isWeb || busy) && styles.btnDisabled]}
          onPress={() => void handleRecord()}
          disabled={!isWeb || busy}
        >
          <Text style={styles.btnText}>Kaydet</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, styles.btnSecondary, !mp4Blob && styles.btnDisabled]}
          onPress={() => void handleDownload()}
          disabled={!mp4Blob}
        >
          <Text style={[styles.btnText, styles.btnTextSecondary]}>İndir (MP4)</Text>
        </Pressable>
      </View>

      {busy ? <ActivityIndicator color={colors.birincil} /> : null}
      {status ? <Text style={styles.status}>{status}</Text> : null}
      {!isWeb ? (
        <Text style={styles.nativeNote}>
          MP4 kaydı yalnızca web sürümünde kullanılabilir. Önizleme için Oynat kullanın.
        </Text>
      ) : null}
    </View>
  );
}
