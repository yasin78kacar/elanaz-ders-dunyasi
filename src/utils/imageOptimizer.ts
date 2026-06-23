import { Image, type ImageSourcePropType, type ImageStyle } from 'react-native';

const CACHE_LIMIT = 200;
const prefetchCache = new Map<string | number, boolean>();
const prefetchOrder: (string | number)[] = [];

function sourceKey(source: ImageSourcePropType): string | number {
  if (typeof source === 'number') return source;
  if (typeof source === 'object' && source !== null && 'uri' in source && source.uri) {
    return source.uri;
  }
  return JSON.stringify(source);
}

function touchCache(key: string | number): void {
  const idx = prefetchOrder.indexOf(key);
  if (idx >= 0) prefetchOrder.splice(idx, 1);
  prefetchOrder.push(key);
  while (prefetchOrder.length > CACHE_LIMIT) {
    const oldest = prefetchOrder.shift();
    if (oldest !== undefined) prefetchCache.delete(oldest);
  }
}

/** Görsel önceden yüklenmiş mi? */
export function isImageCached(source: ImageSourcePropType): boolean {
  return prefetchCache.has(sourceKey(source));
}

/** Uzak URI veya paketli kaynak için önbelleğe alma. */
export async function prefetchImage(source: ImageSourcePropType): Promise<boolean> {
  const key = sourceKey(source);
  if (prefetchCache.has(key)) return true;

  if (typeof source === 'number') {
    prefetchCache.set(key, true);
    touchCache(key);
    return true;
  }

  if (typeof source === 'object' && source !== null && 'uri' in source && source.uri) {
    try {
      const ok = await Image.prefetch(source.uri);
      if (ok) {
        prefetchCache.set(key, true);
        touchCache(key);
      }
      return ok;
    } catch {
      return false;
    }
  }

  return false;
}

/** Birden fazla görseli arka planda önbelleğe alır. */
export function prefetchImages(sources: ImageSourcePropType[]): void {
  for (const source of sources) {
    prefetchImage(source).catch(() => undefined);
  }
}

/** Bellek temizliği — ekran kapanırken veya konu değişiminde çağrılabilir. */
export function clearImageCache(): void {
  prefetchCache.clear();
  prefetchOrder.length = 0;
}

export interface OptimizeImageStyleOptions {
  maxWidth: number;
  maxHeight?: number;
}

/**
 * Görüntüleme boyutunu sınırlayarak bellek ve ölçekleme maliyetini düşürür.
 * Paketli görseller için width/height üst sınırı uygular.
 */
export function optimizeImageStyle(
  base: ImageStyle,
  { maxWidth, maxHeight }: OptimizeImageStyleOptions,
): ImageStyle {
  const style: ImageStyle = { ...base, maxWidth };
  if (maxHeight !== undefined) {
    style.maxHeight = maxHeight;
    if (typeof base.height === 'number' && base.height > maxHeight) {
      style.height = maxHeight;
    }
  }
  if (typeof base.width === 'number' && base.width > maxWidth) {
    style.width = maxWidth;
  }
  return style;
}

/** React Native Image için önbellek dostu props (paketli kaynaklar). */
export const bundledImageProps = {
  fadeDuration: 0 as const,
};
