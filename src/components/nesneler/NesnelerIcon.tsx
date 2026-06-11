import Svg, { Circle, Ellipse, Line, Path, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { GEO } from './colors';

export type NesneTipi =
  | 'zar'
  | 'zar-mavi'
  | 'konserve'
  | 'futbol-topu'
  | 'basketbol-topu'
  | 'ayakkabi-kutusu'
  | 'cadir'
  | 'cadir-turuncu'
  | 'kup-seker'
  | 'meyve-suyu-teneke'
  | 'dunya'
  | 'kibrit-kutusu'
  | 'boya-kutusu'
  | 'kale-kulesi'
  | 'sut-kutusu'
  | 'yumurta'
  | 'ucgen-catili-ev'
  | 'misket'
  | 'buzdolabi'
  | 'zeka-kupu'
  | 'kagit-rulosu'
  | 'portakal'
  | 'hediye-kup-kutu'
  | 'pil'
  | 'kitap'
  | 'top'
  | 'karpuz'
  | 'bina'
  | 'dondurma-topu'
  | 'geri-donusum-sut'
  | 'kalem-kutusu'
  | 'her-yuzu-kare-kutu'
  | 'davul'
  | 'zil'
  | 'canta';

interface Props {
  tip: NesneTipi;
  size?: number;
}

function Zar({ s, h, renk }: { s: number; h: number; renk: string }) {
  return (
    <>
      <Rect x={s * 0.2} y={h * 0.2} width={s * 0.6} height={s * 0.6} fill={renk} stroke={GEO.metin} strokeWidth={2} rx={5} />
      {[
        [0.35, 0.35],
        [0.65, 0.35],
        [0.5, 0.5],
        [0.35, 0.65],
        [0.65, 0.65],
      ].map(([cx, cy], i) => (
        <Circle key={i} cx={s * cx} cy={h * cy} r={s * 0.045} fill={GEO.beyaz} />
      ))}
    </>
  );
}

export function NesnelerIcon({ tip, size = 36 }: Props) {
  const s = size;
  const h = s * 0.85;

  switch (tip) {
    case 'zar':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Zar s={s} h={h} renk={GEO.kirmizi} />
        </Svg>
      );
    case 'zar-mavi':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Zar s={s} h={h} renk={GEO.mavi} />
        </Svg>
      );
    case 'konserve':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.22} y={h * 0.18} width={s * 0.56} height={h * 0.62} fill={GEO.gri} rx={2} />
          <Ellipse cx={s / 2} cy={h * 0.18} rx={s * 0.28} ry={h * 0.08} fill={GEO.sari} />
          <Rect x={s * 0.3} y={h * 0.35} width={s * 0.4} height={h * 0.25} fill={GEO.kirmizi} rx={1} />
        </Svg>
      );
    case 'futbol-topu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill={GEO.beyaz} stroke={GEO.metin} strokeWidth={1.5} />
          <Polygon points={`${s / 2},${h * 0.22} ${s * 0.62},${h * 0.38} ${s * 0.58},${h * 0.55} ${s * 0.42},${h * 0.55} ${s * 0.38},${h * 0.38}`} fill={GEO.metin} />
        </Svg>
      );
    case 'basketbol-topu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill={GEO.turuncu} />
          <Line x1={s * 0.15} y1={h / 2} x2={s * 0.85} y2={h / 2} stroke={GEO.metin} strokeWidth={1.5} />
          <Path d={`M ${s * 0.5} ${h * 0.12} Q ${s * 0.15} ${h * 0.5} ${s * 0.5} ${h * 0.88}`} stroke={GEO.metin} strokeWidth={1.5} fill="none" />
          <Path d={`M ${s * 0.5} ${h * 0.12} Q ${s * 0.85} ${h * 0.5} ${s * 0.5} ${h * 0.88}`} stroke={GEO.metin} strokeWidth={1.5} fill="none" />
        </Svg>
      );
    case 'ayakkabi-kutusu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.1} y={h * 0.3} width={s * 0.8} height={h * 0.45} fill={GEO.turuncu} rx={2} />
          <Rect x={s * 0.1} y={h * 0.22} width={s * 0.8} height={h * 0.12} fill="#FFAB40" rx={1} />
        </Svg>
      );
    case 'cadir':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s / 2},${h * 0.12} ${s * 0.88},${h * 0.78} ${s * 0.12},${h * 0.78}`} fill={GEO.yesil} />
          <Rect x={s * 0.38} y={h * 0.55} width={s * 0.24} height={h * 0.23} fill={GEO.kahve} />
        </Svg>
      );
    case 'cadir-turuncu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s / 2},${h * 0.12} ${s * 0.88},${h * 0.78} ${s * 0.12},${h * 0.78}`} fill={GEO.turuncu} />
          <Rect x={s * 0.38} y={h * 0.55} width={s * 0.24} height={h * 0.23} fill={GEO.kahve} />
        </Svg>
      );
    case 'kup-seker':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.28} y={h * 0.25} width={s * 0.44} height={s * 0.44} fill={GEO.beyaz} stroke={GEO.gri} strokeWidth={1.5} rx={3} />
          <Line x1={s * 0.28} y1={h * 0.45} x2={s * 0.72} y2={h * 0.45} stroke={GEO.gri} strokeWidth={1} />
          <Line x1={s * 0.5} y1={h * 0.25} x2={s * 0.5} y2={h * 0.69} stroke={GEO.gri} strokeWidth={1} />
        </Svg>
      );
    case 'meyve-suyu-teneke':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.2} y={h * 0.15} width={s * 0.6} height={h * 0.7} fill={GEO.mavi} rx={3} />
          <Ellipse cx={s / 2} cy={h * 0.15} rx={s * 0.3} ry={h * 0.06} fill="#64B5F6" />
          <Rect x={s * 0.28} y={h * 0.35} width={s * 0.44} height={h * 0.2} fill={GEO.sari} rx={2} />
        </Svg>
      );
    case 'dunya':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill={GEO.mavi} />
          <Ellipse cx={s * 0.42} cy={h * 0.45} rx={s * 0.18} ry={h * 0.12} fill={GEO.yesil} />
          <Ellipse cx={s * 0.62} cy={h * 0.55} rx={s * 0.12} ry={h * 0.1} fill={GEO.yesil} />
        </Svg>
      );
    case 'kibrit-kutusu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.15} y={h * 0.28} width={s * 0.7} height={h * 0.44} fill={GEO.kirmizi} rx={2} />
          <Rect x={s * 0.22} y={h * 0.38} width={s * 0.56} height={h * 0.15} fill={GEO.sari} rx={1} />
        </Svg>
      );
    case 'boya-kutusu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.3} y={h * 0.15} width={s * 0.4} height={h * 0.7} fill={GEO.mavi} rx={2} />
          <Rect x={s * 0.25} y={h * 0.12} width={s * 0.5} height={h * 0.08} fill={GEO.mor} rx={1} />
        </Svg>
      );
    case 'kale-kulesi':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.3} y={h * 0.2} width={s * 0.4} height={h * 0.65} fill={GEO.mor} rx={s * 0.2} />
          <Rect x={s * 0.38} y={h * 0.45} width={s * 0.1} height={h * 0.15} fill={GEO.sari} rx={1} />
          <Rect x={s * 0.52} y={h * 0.45} width={s * 0.1} height={h * 0.15} fill={GEO.sari} rx={1} />
        </Svg>
      );
    case 'sut-kutusu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.2} y={h * 0.15} width={s * 0.6} height={h * 0.7} fill={GEO.beyaz} stroke={GEO.mavi} strokeWidth={2} rx={2} />
          <Rect x={s * 0.28} y={h * 0.3} width={s * 0.44} height={h * 0.28} fill={GEO.mavi} rx={1} />
        </Svg>
      );
    case 'yumurta':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Ellipse cx={s / 2} cy={h * 0.52} rx={s * 0.22} ry={h * 0.32} fill={GEO.beyaz} stroke={GEO.gri} strokeWidth={1.5} />
        </Svg>
      );
    case 'ucgen-catili-ev':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Polygon points={`${s / 2},${h * 0.1} ${s * 0.88},${h * 0.42} ${s * 0.12},${h * 0.42}`} fill={GEO.kirmizi} />
          <Rect x={s * 0.18} y={h * 0.42} width={s * 0.64} height={h * 0.45} fill={GEO.turuncu} />
          <Rect x={s * 0.4} y={h * 0.58} width={s * 0.2} height={h * 0.29} fill={GEO.kahve} />
        </Svg>
      );
    case 'misket':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.28} fill={GEO.mavi} />
          <Circle cx={s * 0.42} cy={h * 0.38} r={s * 0.06} fill="#BBDEFB" />
          <Circle cx={s * 0.35} cy={h * 0.55} r={s * 0.05} fill={GEO.kirmizi} opacity={0.8} />
        </Svg>
      );
    case 'buzdolabi':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.2} y={h * 0.08} width={s * 0.6} height={h * 0.84} fill="#90CAF9" rx={2} />
          <Line x1={s * 0.2} y1={h * 0.42} x2={s * 0.8} y2={h * 0.42} stroke={GEO.beyaz} strokeWidth={2} />
          <Rect x={s * 0.72} y={h * 0.2} width={s * 0.04} height={h * 0.12} fill={GEO.metin} rx={1} />
        </Svg>
      );
    case 'zeka-kupu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.18} y={h * 0.22} width={s * 0.64} height={s * 0.64} fill={GEO.sari} stroke={GEO.metin} strokeWidth={1.5} rx={3} />
          {(
            [
              [0.35, GEO.kirmizi],
              [0.5, GEO.mavi],
              [0.65, GEO.yesil],
            ] as [number, string][]
          ).map(([cx, c], i) => (
            <Rect key={i} x={s * (cx - 0.08)} y={h * 0.38} width={s * 0.16} height={s * 0.16} fill={c} rx={1} />
          ))}
        </Svg>
      );
    case 'kagit-rulosu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.35} y={h * 0.15} width={s * 0.3} height={h * 0.7} fill={GEO.beyaz} stroke={GEO.gri} strokeWidth={1.5} rx={s * 0.15} />
          <Ellipse cx={s / 2} cy={h * 0.15} rx={s * 0.15} ry={h * 0.05} fill={GEO.gri} />
        </Svg>
      );
    case 'portakal':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h * 0.55} r={s * 0.34} fill={GEO.turuncu} />
          <Ellipse cx={s / 2} cy={h * 0.18} rx={s * 0.08} ry={s * 0.05} fill={GEO.yesil} />
        </Svg>
      );
    case 'hediye-kup-kutu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.2} y={h * 0.28} width={s * 0.6} height={h * 0.52} fill={GEO.sari} rx={2} />
          <Rect x={s * 0.46} y={h * 0.28} width={s * 0.08} height={h * 0.52} fill={GEO.kirmizi} />
          <Rect x={s * 0.2} y={h * 0.5} width={s * 0.6} height={s * 0.08} fill={GEO.kirmizi} />
        </Svg>
      );
    case 'pil':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.25} y={h * 0.25} width={s * 0.5} height={h * 0.5} fill={GEO.yesil} rx={s * 0.08} />
          <Rect x={s * 0.38} y={h * 0.15} width={s * 0.24} height={h * 0.12} fill={GEO.metin} rx={1} />
          <Rect x={s * 0.32} y={h * 0.4} width={s * 0.36} height={h * 0.15} fill={GEO.sari} rx={1} />
        </Svg>
      );
    case 'kitap':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.15} y={h * 0.1} width={s * 0.7} height={h * 0.8} fill={GEO.mavi} rx={2} />
          <Line x1={s * 0.28} y1={h * 0.1} x2={s * 0.28} y2={h * 0.9} stroke={GEO.beyaz} strokeWidth={2} />
        </Svg>
      );
    case 'top':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill={GEO.kirmizi} />
          <Circle cx={s * 0.38} cy={h * 0.32} r={s * 0.07} fill="#FFCDD2" opacity={0.9} />
        </Svg>
      );
    case 'karpuz':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h * 0.55} r={s * 0.34} fill={GEO.yesil} />
          {[0, 1, 2].map((i) => (
            <Line key={i} x1={s * (0.25 + i * 0.15)} y1={h * 0.25} x2={s * (0.25 + i * 0.15)} y2={h * 0.85} stroke="#2E7D32" strokeWidth={1.5} />
          ))}
        </Svg>
      );
    case 'bina':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.25} y={h * 0.15} width={s * 0.5} height={h * 0.75} fill={GEO.mavi} />
          {[0, 1, 2].map((row) =>
            [0, 1].map((col) => (
              <Rect
                key={`${row}-${col}`}
                x={s * (0.32 + col * 0.2)}
                y={h * (0.25 + row * 0.18)}
                width={s * 0.12}
                height={h * 0.1}
                fill={GEO.sari}
                rx={1}
              />
            )),
          )}
        </Svg>
      );
    case 'dondurma-topu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h * 0.38} r={s * 0.32} fill="#F48FB1" />
          <Circle cx={s * 0.42} cy={h * 0.28} r={s * 0.06} fill="#FCE4EC" />
        </Svg>
      );
    case 'geri-donusum-sut':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.55} y={h * 0.2} width={s * 0.35} height={h * 0.6} fill={GEO.yesil} rx={2} />
          <SvgText x={s * 0.72} y={h * 0.55} fontSize={10} fill={GEO.beyaz} textAnchor="middle">
            ♻
          </SvgText>
          <Rect x={s * 0.1} y={h * 0.35} width={s * 0.35} height={h * 0.4} fill={GEO.beyaz} stroke={GEO.mavi} strokeWidth={1.5} rx={2} />
        </Svg>
      );
    case 'kalem-kutusu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.32} y={h * 0.12} width={s * 0.36} height={h * 0.75} fill={GEO.mor} rx={2} />
          <Rect x={s * 0.28} y={h * 0.1} width={s * 0.44} height={h * 0.08} fill={GEO.turuncu} rx={1} />
        </Svg>
      );
    case 'her-yuzu-kare-kutu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.22} y={h * 0.25} width={s * 0.56} height={s * 0.56} fill={GEO.turuncu} stroke={GEO.metin} strokeWidth={1.5} rx={3} />
        </Svg>
      );
    case 'davul':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Ellipse cx={s / 2} cy={h * 0.28} rx={s * 0.34} ry={h * 0.1} fill={GEO.kirmizi} stroke={GEO.metin} strokeWidth={1.5} />
          <Rect x={s * 0.16} y={h * 0.28} width={s * 0.68} height={h * 0.48} fill={GEO.kirmizi} rx={2} />
          <Ellipse cx={s / 2} cy={h * 0.76} rx={s * 0.34} ry={h * 0.1} fill="#B71C1C" stroke={GEO.metin} strokeWidth={1.5} />
        </Svg>
      );
    case 'zil':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Path d={`M ${s * 0.5} ${h * 0.12} Q ${s * 0.82} ${h * 0.55} ${s * 0.72} ${h * 0.78} L ${s * 0.28} ${h * 0.78} Q ${s * 0.18} ${h * 0.55} ${s * 0.5} ${h * 0.12} Z`} fill={GEO.sari} stroke={GEO.turuncu} strokeWidth={2} />
          <Circle cx={s / 2} cy={h * 0.86} r={s * 0.06} fill={GEO.metin} />
        </Svg>
      );
    case 'canta':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Path d={`M ${s * 0.22} ${h * 0.32} Q ${s * 0.5} ${h * 0.12} ${s * 0.78} ${h * 0.32} L ${s * 0.82} ${h * 0.82} Q ${s * 0.5} ${h * 0.92} ${s * 0.18} ${h * 0.82} Z`} fill={GEO.mavi} />
          <Rect x={s * 0.38} y={h * 0.42} width={s * 0.24} height={h * 0.22} fill={GEO.beyaz} opacity={0.5} rx={2} />
        </Svg>
      );
    default:
      return null;
  }
}
