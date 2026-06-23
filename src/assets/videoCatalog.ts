import { FLOW_VIDEOS, type FlowVideoKey } from './flowVideos.generated';

export type { FlowVideoKey };

export type VideoKategori = 'sesliHikaye' | 'okumaKitabi' | 'konu' | 'ekstra';

export interface VideoCatalogEntry {
  id: string;
  baslik: string;
  kategori: VideoKategori;
  videoKey: FlowVideoKey;
  /** Placeholder URL — gerçek CDN bağlantısı için */
  placeholderUrl: string;
}

const PLACEHOLDER_BASE = 'https://cdn.elanaz.app/videos';
const VIDEO_KEYS = Object.keys(FLOW_VIDEOS) as FlowVideoKey[];

function videoKeyForIndex(i: number): FlowVideoKey {
  return VIDEO_KEYS[i % VIDEO_KEYS.length];
}

function buildCatalog(): VideoCatalogEntry[] {
  const entries: VideoCatalogEntry[] = [];

  for (let i = 1; i <= 30; i++) {
    const id = `sesli-hikaye-${String(i).padStart(2, '0')}`;
    entries.push({
      id,
      baslik: `Sesli Hikâye ${i}`,
      kategori: 'sesliHikaye',
      videoKey: videoKeyForIndex(i),
      placeholderUrl: `${PLACEHOLDER_BASE}/${id}.mp4`,
    });
  }

  for (let i = 1; i <= 20; i++) {
    const id = `okuma-kitabi-${String(i).padStart(2, '0')}`;
    entries.push({
      id,
      baslik: `Okuma Kitabı ${i}`,
      kategori: 'okumaKitabi',
      videoKey: videoKeyForIndex(i + 30),
      placeholderUrl: `${PLACEHOLDER_BASE}/${id}.mp4`,
    });
  }

  for (let i = 1; i <= 19; i++) {
    const id = `konu-video-${String(i).padStart(2, '0')}`;
    entries.push({
      id,
      baslik: `Konu Anlatımı ${i}`,
      kategori: 'konu',
      videoKey: videoKeyForIndex(i + 50),
      placeholderUrl: `${PLACEHOLDER_BASE}/${id}.mp4`,
    });
  }

  entries.push({
    id: 'elanaz-tanitim',
    baslik: 'Elanaz Tanıtım',
    kategori: 'ekstra',
    videoKey: 'elanaz-tanitim',
    placeholderUrl: `${PLACEHOLDER_BASE}/elanaz-tanitim.mp4`,
  });

  return entries;
}

/** 70 video: 30 sesli hikâye + 20 kitap + 19 konu + 1 ekstra */
export const VIDEO_CATALOG: VideoCatalogEntry[] = buildCatalog();

export function getVideoCatalogByKategori(kategori: VideoKategori): VideoCatalogEntry[] {
  return VIDEO_CATALOG.filter((v) => v.kategori === kategori);
}

export function getCatalogVideo(id: string): VideoCatalogEntry | undefined {
  return VIDEO_CATALOG.find((v) => v.id === id);
}

export function getCatalogVideoSource(id: string): number | undefined {
  const entry = getCatalogVideo(id);
  if (!entry) return undefined;
  return FLOW_VIDEOS[entry.videoKey];
}

/** Konu anlatım ekranlarına sırayla bağlanan videolar */
const KONU_ANLATIM_VIDEOLARI: Record<string, FlowVideoKey[]> = {
  'sayi-dogrusu': ['konu-sayi-dogrusu'],
  'onluk-birlik': ['konu-onluk-birlik-anlatim', 'konu-onluk-blok-saying'],
  'sayilari-okuma-yazma': ['konu-sayi-okuma'],
  'ritmik-sayma': ['konu-ritmik-sayma'],
  'geometrik-cisimler': ['konu-geometrik-cisimler'],
  'tahmin-etme': ['konu-tahmin-etme'],
};

export function getVideoSource(key: FlowVideoKey): number {
  return FLOW_VIDEOS[key];
}

/** Konu anlatımında gösterilecek video (ekran indeksine göre) */
export function getKonuAnlatimVideo(konuId: string, ekranIndex = 0): number | undefined {
  const keys = KONU_ANLATIM_VIDEOLARI[konuId];
  if (!keys?.length) return undefined;
  const key = keys[Math.min(ekranIndex, keys.length - 1)];
  return FLOW_VIDEOS[key];
}

export function konuAnlatimindaVideoVar(konuId: string): boolean {
  return Boolean(KONU_ANLATIM_VIDEOLARI[konuId]?.length);
}

export const SISTEM_VIDEOLARI = {
  dogru: 'dogru-kutlama' as const,
  yanlis: 'yanlis-teselli' as const,
  sasirtma: 'sasirtma-uyari' as const,
  acilis: 'acilis-merhaba' as const,
  annePanel: 'anne-panel' as const,
};
