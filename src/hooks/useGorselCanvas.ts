import { useMemo } from 'react';
import { useDeviceLayout } from './useDeviceLayout';

/** SVG viewBox tasarım koordinatları — iç çizimler buna göre kalır. */
export const GORSEL_VIEW_W = 280;
export const GORSEL_VIEW_H = 120;

export function useGorselCanvas() {
  const layout = useDeviceLayout();
  return useMemo(
    () => ({
      renderW: layout.gorselCanvas.width,
      renderH: layout.gorselCanvas.height,
      viewW: GORSEL_VIEW_W,
      viewH: GORSEL_VIEW_H,
    }),
    [layout],
  );
}
