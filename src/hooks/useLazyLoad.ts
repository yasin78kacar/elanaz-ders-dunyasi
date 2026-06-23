import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const LAZY_LOAD_BATCH_SIZE = 100;

export interface UseLazyLoadOptions {
  batchSize?: number;
  /** Son yüklü öğeye bu kadar yaklaşınca sonraki parti önceden yüklenir. */
  prefetchThreshold?: number;
}

export interface UseLazyLoadResult<T> {
  items: T[];
  loadedCount: number;
  totalCount: number;
  hasMore: boolean;
  isFullyLoaded: boolean;
  loadMore: () => void;
  ensureIndexLoaded: (index: number) => void;
  loadAll: () => void;
  reset: () => void;
}

/**
 * Büyük dizileri partiler halinde belleğe alır.
 * Kaynak değişince veya unmount'ta durum sıfırlanır.
 */
export function useLazyLoad<T>(
  source: readonly T[],
  options: UseLazyLoadOptions = {},
): UseLazyLoadResult<T> {
  const batchSize = options.batchSize ?? LAZY_LOAD_BATCH_SIZE;
  const prefetchThreshold = options.prefetchThreshold ?? 10;

  const sourceRef = useRef(source);
  const mountedRef = useRef(true);

  const initialCount = Math.min(batchSize, source.length);
  const [loadedCount, setLoadedCount] = useState(initialCount);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    sourceRef.current = source;
    setLoadedCount(Math.min(batchSize, source.length));
  }, [source, batchSize]);

  const items = useMemo(() => source.slice(0, loadedCount), [source, loadedCount]);

  const totalCount = source.length;
  const hasMore = loadedCount < totalCount;
  const isFullyLoaded = loadedCount >= totalCount;

  const loadMore = useCallback(() => {
    if (!mountedRef.current) return;
    setLoadedCount((prev) => Math.min(prev + batchSize, sourceRef.current.length));
  }, [batchSize]);

  const loadAll = useCallback(() => {
    if (!mountedRef.current) return;
    setLoadedCount(sourceRef.current.length);
  }, []);

  const ensureIndexLoaded = useCallback(
    (index: number) => {
      if (index < 0 || !mountedRef.current) return;
      const needed = index + 1 + prefetchThreshold;
      if (needed <= loadedCount || loadedCount >= sourceRef.current.length) return;
      setLoadedCount((prev) =>
        Math.min(Math.max(prev + batchSize, needed), sourceRef.current.length),
      );
    },
    [batchSize, loadedCount, prefetchThreshold],
  );

  const reset = useCallback(() => {
    setLoadedCount(Math.min(batchSize, sourceRef.current.length));
  }, [batchSize]);

  return {
    items,
    loadedCount,
    totalCount,
    hasMore,
    isFullyLoaded,
    loadMore,
    ensureIndexLoaded,
    loadAll,
    reset,
  };
}
