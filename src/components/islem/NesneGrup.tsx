import Svg, { Circle, Ellipse, Line, Path, Polygon, Rect } from 'react-native-svg';
import { GEO } from '../nesneler/colors';

const RENK: Record<string, string> = {
  kirmizi: GEO.kirmizi,
  mavi: GEO.mavi,
  sari: GEO.sari,
  yesil: GEO.yesil,
  turuncu: GEO.turuncu,
  mor: GEO.mor,
  pembe: '#EC407A',
  beyaz: '#FAFAFA',
  kahve: GEO.kahve,
};

function renk(ad?: string, varsayilan = GEO.kirmizi) {
  if (!ad) return varsayilan;
  return RENK[ad] ?? varsayilan;
}

interface TekNesneProps {
  tip: string;
  renk: string;
  x: number;
  y: number;
  boyut?: number;
  soluk?: boolean;
  cizili?: boolean;
}

function TekNesne({ tip, renk: r, x, y, boyut = 22, soluk, cizili }: TekNesneProps) {
  const op = soluk ? 0.35 : 1;
  const s = boyut;

  const cizgi = cizili ? (
    <Line x1={x - s / 2} y1={y - s / 2} x2={x + s / 2} y2={y + s / 2} stroke="#C62828" strokeWidth={2.5} />
  ) : null;

  switch (tip) {
    case 'balon':
      return (
        <>
          <Ellipse cx={x} cy={y - 2} rx={s * 0.38} ry={s * 0.48} fill={r} opacity={op} />
          <Line x1={x} y1={y + s * 0.35} x2={x} y2={y + s * 0.7} stroke={GEO.metin} strokeWidth={1.5} />
          {cizgi}
        </>
      );
    case 'yildiz':
      return (
        <>
          <Polygon
            points={`${x},${y - s * 0.45} ${x + s * 0.12},${y - s * 0.1} ${x + s * 0.45},${y - s * 0.1} ${x + s * 0.18},${y + s * 0.12} ${x + s * 0.28},${y + s * 0.45} ${x},${y + s * 0.22} ${x - s * 0.28},${y + s * 0.45} ${x - s * 0.18},${y + s * 0.12} ${x - s * 0.45},${y - s * 0.1} ${x - s * 0.12},${y - s * 0.1}`}
            fill={r}
            opacity={op}
          />
          {cizgi}
        </>
      );
    case 'kare':
    case 'kup':
      return (
        <>
          <Rect x={x - s * 0.35} y={y - s * 0.35} width={s * 0.7} height={s * 0.7} fill={r} rx={3} opacity={op} />
          {cizgi}
        </>
      );
    case 'kelebek':
      return (
        <>
          <Ellipse cx={x - s * 0.22} cy={y} rx={s * 0.28} ry={s * 0.2} fill={r} opacity={op} />
          <Ellipse cx={x + s * 0.22} cy={y} rx={s * 0.28} ry={s * 0.2} fill={r} opacity={op * 0.85} />
          <Ellipse cx={x} cy={y} rx={s * 0.08} ry={s * 0.28} fill={GEO.kahve} />
          {cizgi}
        </>
      );
    case 'cicek':
      return (
        <>
          {[0, 72, 144, 216, 288].map((d) => (
            <Circle
              key={d}
              cx={x + Math.cos((d * Math.PI) / 180) * s * 0.28}
              cy={y + Math.sin((d * Math.PI) / 180) * s * 0.28}
              r={s * 0.16}
              fill={r}
              opacity={op}
            />
          ))}
          <Circle cx={x} cy={y} r={s * 0.14} fill={GEO.sari} />
          {cizgi}
        </>
      );
    case 'cilek':
      return (
        <>
          <Path
            d={`M ${x} ${y - s * 0.35} Q ${x - s * 0.35} ${y + s * 0.1} ${x} ${y + s * 0.4} Q ${x + s * 0.35} ${y + s * 0.1} ${x} ${y - s * 0.35}`}
            fill={r}
            opacity={op}
          />
          {cizgi}
        </>
      );
    case 'kalem':
      return (
        <>
          <Rect x={x - s * 0.35} y={y - s * 0.12} width={s * 0.7} height={s * 0.24} fill={r} rx={2} opacity={op} />
          <Polygon points={`${x + s * 0.35},${y} ${x + s * 0.5},${y - s * 0.1} ${x + s * 0.5},${y + s * 0.1}`} fill={GEO.kahve} />
          {cizgi}
        </>
      );
    case 'elma':
      return (
        <>
          <Circle cx={x} cy={y + 2} r={s * 0.38} fill={r} opacity={op} />
          <Line x1={x} y1={y - s * 0.35} x2={x + 3} y2={y - s * 0.55} stroke={GEO.yesil} strokeWidth={2} />
          {cizgi}
        </>
      );
    case 'armut':
      return (
        <>
          <Ellipse cx={x} cy={y + 4} rx={s * 0.3} ry={s * 0.38} fill={r} opacity={op} />
          <Circle cx={x} cy={y - s * 0.2} r={s * 0.18} fill={r} opacity={op} />
          {cizgi}
        </>
      );
    default:
      return (
        <>
          <Circle cx={x} cy={y} r={s * 0.38} fill={r} opacity={op} />
          {cizgi}
        </>
      );
  }
}

interface Props {
  adet: number;
  tip?: string;
  renk?: string;
  basX?: number;
  basY?: number;
  maxSatir?: number;
  cikarAdet?: number;
  genislik?: number;
}

export function NesneGrup({
  adet,
  tip = 'top',
  renk: renkAd,
  basX = 8,
  basY = 28,
  maxSatir = 10,
  cikarAdet = 0,
  genislik = 280,
}: Props) {
  const r = renk(renkAd);
  const hucre = Math.min(28, Math.floor((genislik - 16) / Math.min(adet, maxSatir)));
  const satirSay = Math.ceil(adet / maxSatir);

  const noktalar = Array.from({ length: adet }, (_, i) => {
    const satir = Math.floor(i / maxSatir);
    const sutun = i % maxSatir;
    const satirdaki = Math.min(maxSatir, adet - satir * maxSatir);
    const offsetX = ((maxSatir - satirdaki) * hucre) / 2;
    return {
      x: basX + offsetX + sutun * hucre + hucre / 2,
      y: basY + satir * (hucre + 4),
      cizili: i >= adet - cikarAdet && cikarAdet > 0,
      soluk: i >= adet - cikarAdet && cikarAdet > 0,
    };
  });

  const yukseklik = basY + satirSay * (hucre + 8) + 8;

  return (
    <Svg width={genislik} height={yukseklik} viewBox={`0 0 ${genislik} ${yukseklik}`}>
      {noktalar.map((p, i) => (
        <TekNesne key={i} tip={tip} renk={r} x={p.x} y={p.y} boyut={hucre - 4} cizili={p.cizili} soluk={p.soluk} />
      ))}
    </Svg>
  );
}
