import Svg, { Circle, Ellipse, Line, Polygon, Rect } from 'react-native-svg';
import { GEO } from './colors';

export type ModelTipi =
  | 'kup'
  | 'kure'
  | 'silindir'
  | 'kare-prizma'
  | 'dikdortgen-prizma'
  | 'ucgen-prizma';

interface Props {
  tip: ModelTipi;
  size?: number;
  renk?: string;
}

export function ModellerIcon({ tip, size = 36, renk }: Props) {
  const s = size;
  const h = s * 0.85;

  switch (tip) {
    case 'kup': {
      const c = renk ?? GEO.kirmizi;
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s * 0.2},${h * 0.35} ${s * 0.55},${h * 0.15} ${s * 0.9},${h * 0.35} ${s * 0.55},${h * 0.55}`} fill={c} opacity={0.7} />
          <Polygon points={`${s * 0.2},${h * 0.35} ${s * 0.55},${h * 0.55} ${s * 0.55},${h * 0.9} ${s * 0.2},${h * 0.7}`} fill={c} />
          <Polygon points={`${s * 0.55},${h * 0.55} ${s * 0.9},${h * 0.35} ${s * 0.9},${h * 0.7} ${s * 0.55},${h * 0.9}`} fill={c} opacity={0.85} />
        </Svg>
      );
    }
    case 'kure':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.36} fill={renk ?? GEO.mavi} />
          <Circle cx={s * 0.38} cy={h * 0.32} r={s * 0.07} fill="#BBDEFB" opacity={0.9} />
        </Svg>
      );
    case 'silindir':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.22} y={h * 0.28} width={s * 0.56} height={h * 0.5} fill={renk ?? GEO.turuncu} />
          <Ellipse cx={s / 2} cy={h * 0.28} rx={s * 0.28} ry={h * 0.1} fill={renk ?? GEO.turuncu} />
          <Ellipse cx={s / 2} cy={h * 0.78} rx={s * 0.28} ry={h * 0.1} fill={renk ?? '#E65100'} />
        </Svg>
      );
    case 'kare-prizma': {
      const c = renk ?? GEO.mor;
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s * 0.28},${h * 0.2} ${s * 0.52},${h * 0.08} ${s * 0.76},${h * 0.2} ${s * 0.52},${h * 0.32}`} fill={c} opacity={0.75} />
          <Rect x={s * 0.28} y={h * 0.2} width={s * 0.48} height={h * 0.62} fill={c} />
          <Polygon points={`${s * 0.52},${h * 0.32} ${s * 0.76},${h * 0.2} ${s * 0.76},${h * 0.82} ${s * 0.52},${h * 0.94}`} fill={c} opacity={0.85} />
        </Svg>
      );
    }
    case 'dikdortgen-prizma': {
      const c = renk ?? GEO.yesil;
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s * 0.12},${h * 0.25} ${s * 0.55},${h * 0.12} ${s * 0.88},${h * 0.25} ${s * 0.45},${h * 0.38}`} fill={c} opacity={0.7} />
          <Rect x={s * 0.12} y={h * 0.25} width={s * 0.76} height={h * 0.55} fill={c} />
          <Polygon points={`${s * 0.45},${h * 0.38} ${s * 0.88},${h * 0.25} ${s * 0.88},${h * 0.8} ${s * 0.45},${h * 0.93}`} fill={c} opacity={0.85} />
        </Svg>
      );
    }
    case 'ucgen-prizma': {
      const c = renk ?? GEO.kirmizi;
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s * 0.5},${h * 0.08} ${s * 0.85},${h * 0.35} ${s * 0.15},${h * 0.35}`} fill={c} />
          <Rect x={s * 0.15} y={h * 0.35} width={s * 0.7} height={h * 0.52} fill={c} opacity={0.85} />
          <Line x1={s * 0.15} y1={h * 0.35} x2={s * 0.5} y2={h * 0.08} stroke={GEO.metin} strokeWidth={1} opacity={0.3} />
        </Svg>
      );
    }
    default:
      return null;
  }
}
