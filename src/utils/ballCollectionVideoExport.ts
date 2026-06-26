import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import RecordRTC from 'recordrtc';

const FFMPEG_CORE_VERSION = '0.12.10';
const FFMPEG_CORE_BASE = `https://unpkg.com/@ffmpeg/core@${FFMPEG_CORE_VERSION}/dist/esm`;

let ffmpegInstance: FFmpeg | null = null;
let ffmpegLoading: Promise<FFmpeg> | null = null;

async function getFfmpeg(): Promise<FFmpeg> {
  if (ffmpegInstance?.loaded) return ffmpegInstance;
  if (ffmpegLoading) return ffmpegLoading;

  ffmpegLoading = (async () => {
    const ffmpeg = new FFmpeg();
    await ffmpeg.load({
      coreURL: await toBlobURL(`${FFMPEG_CORE_BASE}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${FFMPEG_CORE_BASE}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    ffmpegInstance = ffmpeg;
    return ffmpeg;
  })();

  return ffmpegLoading;
}

export interface CanvasRecorder {
  start: () => void;
  stop: () => Promise<Blob>;
  destroy: () => void;
}

/** Canvas akışını WebM olarak kaydeder. */
export function createCanvasRecorder(canvas: HTMLCanvasElement, fps = 30): CanvasRecorder {
  const stream = canvas.captureStream(fps);
  const recorder = new RecordRTC(stream, {
    type: 'video',
    mimeType: 'video/webm;codecs=vp9',
    disableLogs: true,
  });

  return {
    start: () => recorder.startRecording(),
    stop: () =>
      new Promise<Blob>((resolve, reject) => {
        recorder.stopRecording(() => {
          try {
            const blob = recorder.getBlob();
            if (!blob || blob.size === 0) {
              reject(new Error('Kayıt boş'));
              return;
            }
            resolve(blob);
          } catch (e) {
            reject(e);
          }
        });
      }),
    destroy: () => {
      recorder.destroy();
      stream.getTracks().forEach((t) => t.stop());
    },
  };
}

/** WebM blob'unu FFmpeg.wasm ile MP4'e dönüştürür. */
export async function convertWebmToMp4(webmBlob: Blob, onProgress?: (msg: string) => void): Promise<Blob> {
  onProgress?.('FFmpeg yükleniyor…');
  const ffmpeg = await getFfmpeg();

  onProgress?.('MP4 dönüştürülüyor…');
  await ffmpeg.writeFile('input.webm', await fetchFile(webmBlob));
  await ffmpeg.exec(['-i', 'input.webm', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'output.mp4']);

  const data = await ffmpeg.readFile('output.mp4');
  const bytes = data instanceof Uint8Array ? Uint8Array.from(data) : new TextEncoder().encode(String(data));
  return new Blob([bytes], { type: 'video/mp4' });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
