import Svg, { Circle, Polygon, Rect } from 'react-native-svg';
import { GEO } from './colors';

export type SekilTipi = 'kare' | 'dikdortgen' | 'ucgen' | 'cember' | 'daire';

interface Props {
  tip: SekilTipi;
  size?: number;
  renk?: string;
}

/** ÇEMBER = içi boş yuvarlak çizgi. DAİRE = içi dolu. Bu ayrım asla karışmaz. */
export function SekillerIcon({ tip, size = 36, renk }: Props) {
  const s = size;
  const h = s * 0.85;
  const stroke = Math.max(2.5, s * 0.07);

  switch (tip) {
    case 'kare':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.18} y={h * 0.12} width={s * 0.64} height={s * 0.64} fill={renk ?? GEO.kirmizi} />
        </Svg>
      );
    case 'dikdortgen':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.1} y={h * 0.22} width={s * 0.8} height={s * 0.45} fill={renk ?? GEO.mavi} />
        </Svg>
      );
    case 'ucgen':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon
            points={`${s / 2},${h * 0.08} ${s * 0.9},${h * 0.88} ${s * 0.1},${h * 0.88}`}
            fill={renk ?? GEO.yesil}
          />
        </Svg>
      );
    case 'cember':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle
            cx={s / 2}
            cy={h / 2}
            r={s * 0.36}
            fill="none"
            stroke={renk ?? GEO.turuncu}
            strokeWidth={stroke}
          />
        </Svg>
      );
    case 'daire':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.36} fill={renk ?? GEO.turuncu} />
        </Svg>
      );
    default:
      return null;
  }
}
