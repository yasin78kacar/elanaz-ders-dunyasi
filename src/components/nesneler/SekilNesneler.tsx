import Svg, { Circle, Ellipse, Line, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { GEO } from './colors';

export type SekilNesneTipi =
  | 'simit'
  | 'kapi'
  | 'tekerlek'
  | 'balon'
  | 'gunes'
  | 'saat'
  | 'pizza-dilimi'
  | 'para'
  | 'uyari-levha'
  | 'dondurma-kulahi'
  | 'pencere-kare'
  | 'pencere-dikdortgen'
  | 'kitap-on';

interface Props {
  tip: SekilNesneTipi;
  size?: number;
}

export function SekilNesneler({ tip, size = 72 }: Props) {
  const s = size;
  const h = s * 0.85;

  switch (tip) {
    case 'simit':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill="none" stroke={GEO.kahve} strokeWidth={s * 0.14} />
          <Circle cx={s / 2} cy={h / 2} r={s * 0.14} fill="none" stroke={GEO.kahve} strokeWidth={s * 0.1} />
        </Svg>
      );
    case 'kapi':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.25} y={h * 0.08} width={s * 0.5} height={h * 0.84} fill={GEO.kahve} rx={2} />
          <Circle cx={s * 0.65} cy={h * 0.5} r={s * 0.04} fill={GEO.sari} />
        </Svg>
      );
    case 'tekerlek':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill="none" stroke={GEO.metin} strokeWidth={s * 0.08} />
          <Circle cx={s / 2} cy={h / 2} r={s * 0.1} fill={GEO.gri} />
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <Line
                key={deg}
                x1={s / 2}
                y1={h / 2}
                x2={s / 2 + Math.cos(rad) * s * 0.28}
                y2={h / 2 + Math.sin(rad) * s * 0.28}
                stroke={GEO.gri}
                strokeWidth={1.5}
              />
            );
          })}
        </Svg>
      );
    case 'balon':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h * 0.38} r={s * 0.32} fill={GEO.kirmizi} />
          <Line x1={s / 2} y1={h * 0.7} x2={s / 2} y2={h * 0.92} stroke={GEO.metin} strokeWidth={1.5} />
        </Svg>
      );
    case 'gunes':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h * 0.45} r={s * 0.22} fill={GEO.sari} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <Line
                key={deg}
                x1={s / 2 + Math.cos(rad) * s * 0.28}
                y1={h * 0.45 + Math.sin(rad) * s * 0.28}
                x2={s / 2 + Math.cos(rad) * s * 0.38}
                y2={h * 0.45 + Math.sin(rad) * s * 0.38}
                stroke={GEO.turuncu}
                strokeWidth={2.5}
              />
            );
          })}
        </Svg>
      );
    case 'saat':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill={GEO.beyaz} stroke={GEO.metin} strokeWidth={2} />
          <Circle cx={s / 2} cy={h / 2} r={s * 0.03} fill={GEO.metin} />
          <Line x1={s / 2} y1={h / 2} x2={s / 2} y2={h * 0.22} stroke={GEO.metin} strokeWidth={2} />
          <Line x1={s / 2} y1={h / 2} x2={s * 0.68} y2={h / 2} stroke={GEO.metin} strokeWidth={2} />
        </Svg>
      );
    case 'pizza-dilimi':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s / 2},${h * 0.12} ${s * 0.88},${h * 0.88} ${s * 0.12},${h * 0.88}`} fill={GEO.turuncu} />
          <Circle cx={s * 0.42} cy={h * 0.55} r={s * 0.04} fill={GEO.kirmizi} />
          <Circle cx={s * 0.58} cy={h * 0.62} r={s * 0.04} fill={GEO.kirmizi} />
        </Svg>
      );
    case 'para':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.36} fill={GEO.sari} stroke={GEO.turuncu} strokeWidth={2} />
          <SvgText x={s / 2} y={h / 2 + 5} fontSize={s * 0.22} fill={GEO.metin} textAnchor="middle" fontWeight="700">
            1
          </SvgText>
        </Svg>
      );
    case 'uyari-levha':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon
            points={`${s / 2},${h * 0.08} ${s * 0.92},${h * 0.88} ${s * 0.08},${h * 0.88}`}
            fill={GEO.sari}
            stroke={GEO.kirmizi}
            strokeWidth={3}
          />
          <SvgText x={s / 2} y={h * 0.62} fontSize={s * 0.2} fill={GEO.metin} textAnchor="middle" fontWeight="700">
            !
          </SvgText>
        </Svg>
      );
    case 'dondurma-kulahi':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s / 2},${h * 0.55} ${s * 0.72},${h * 0.92} ${s * 0.28},${h * 0.92}`} fill={GEO.kahve} />
          <Circle cx={s / 2} cy={h * 0.32} r={s * 0.22} fill="#F48FB1" />
        </Svg>
      );
    case 'pencere-kare':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.22} y={h * 0.18} width={s * 0.56} height={s * 0.56} fill="#90CAF9" stroke={GEO.kahve} strokeWidth={3} />
          <Line x1={s / 2} y1={h * 0.18} x2={s / 2} y2={h * 0.74} stroke={GEO.kahve} strokeWidth={2} />
          <Line x1={s * 0.22} y1={h * 0.46} x2={s * 0.78} y2={h * 0.46} stroke={GEO.kahve} strokeWidth={2} />
        </Svg>
      );
    case 'pencere-dikdortgen':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.1} y={h * 0.28} width={s * 0.8} height={s * 0.4} fill="#90CAF9" stroke={GEO.kahve} strokeWidth={3} />
          <Line x1={s / 2} y1={h * 0.28} x2={s / 2} y2={h * 0.68} stroke={GEO.kahve} strokeWidth={2} />
          <Line x1={s * 0.1} y1={h * 0.48} x2={s * 0.9} y2={h * 0.48} stroke={GEO.kahve} strokeWidth={2} />
        </Svg>
      );
    case 'kitap-on':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.15} y={h * 0.1} width={s * 0.7} height={h * 0.8} fill={GEO.mor} rx={2} />
          <Rect x={s * 0.25} y={h * 0.25} width={s * 0.5} height={h * 0.12} fill={GEO.sari} rx={1} />
        </Svg>
      );
    default:
      return null;
  }
}
