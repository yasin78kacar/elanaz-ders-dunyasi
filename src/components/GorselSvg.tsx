import type { ReactNode } from 'react';
import Svg from 'react-native-svg';
import { GORSEL_VIEW_H, GORSEL_VIEW_W, useGorselCanvas } from '../hooks/useGorselCanvas';

/** Responsive SVG sarmalayıcı — viewBox sabit, render boyutu cihaza göre ölçeklenir. */
export function GorselSvg({ children }: { children: ReactNode }) {
  const { renderW, renderH } = useGorselCanvas();
  return (
    <Svg width={renderW} height={renderH} viewBox={`0 0 ${GORSEL_VIEW_W} ${GORSEL_VIEW_H}`}>
      {children}
    </Svg>
  );
}

export { GORSEL_VIEW_H, GORSEL_VIEW_W, useGorselCanvas } from '../hooks/useGorselCanvas';
