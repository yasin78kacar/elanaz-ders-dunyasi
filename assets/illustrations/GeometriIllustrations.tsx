import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Rect } from 'react-native-svg';
import { SvgCanvas } from '../../src/components/SvgCanvas';
import { IllustrationColumn } from '../../src/components/nesneler/IllustrationColumn';

export const GEO = {
  kirmizi: '#E53935',
  turuncu: '#FB8C00',
  sari: '#FDD835',
  yesil: '#43A047',
  mavi: '#1E88E5',
  mor: '#8E24AA',
  kahve: '#6D4C41',
  beyaz: '#FFFFFF',
  metin: '#1A2B4A',
} as const;

export type NesneTipi =
  | 'top'
  | 'kitap'
  | 'portakal'
  | 'misket'
  | 'karpuz'
  | 'hediye-kutusu'
  | 'buzdolabi'
  | 'zar'
  | 'sut-kutusu'
  | 'sira';

interface IkonProps {
  tip: NesneTipi;
  size?: number;
}

export function NesneIkon({ tip, size = 36 }: IkonProps) {
  const s = size;
  const h = s * 0.85;
  switch (tip) {
    case 'top':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.38} fill={GEO.kirmizi} />
          <Circle cx={s * 0.38} cy={h * 0.32} r={s * 0.07} fill="#FFCDD2" opacity={0.9} />
        </Svg>
      );
    case 'kitap':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.15} y={h * 0.1} width={s * 0.7} height={h * 0.8} fill={GEO.mavi} rx={2} />
          <Line x1={s * 0.28} y1={h * 0.1} x2={s * 0.28} y2={h * 0.9} stroke={GEO.beyaz} strokeWidth={2} />
        </Svg>
      );
    case 'portakal':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h * 0.55} r={s * 0.34} fill={GEO.turuncu} />
          <Ellipse cx={s / 2} cy={h * 0.18} rx={s * 0.08} ry={s * 0.05} fill={GEO.yesil} />
        </Svg>
      );
    case 'misket':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h / 2} r={s * 0.28} fill={GEO.mavi} opacity={0.85} />
          <Circle cx={s * 0.42} cy={h * 0.38} r={s * 0.06} fill="#BBDEFB" />
        </Svg>
      );
    case 'karpuz':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Circle cx={s / 2} cy={h * 0.55} r={s * 0.34} fill={GEO.yesil} />
          {[0, 1, 2].map((i) => (
            <Line
              key={i}
              x1={s * (0.25 + i * 0.15)}
              y1={h * 0.25}
              x2={s * (0.25 + i * 0.15)}
              y2={h * 0.85}
              stroke="#2E7D32"
              strokeWidth={1.5}
            />
          ))}
        </Svg>
      );
    case 'hediye-kutusu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.18} y={h * 0.22} width={s * 0.64} height={h * 0.58} fill={GEO.mor} rx={2} />
          <Rect x={s * 0.46} y={h * 0.22} width={s * 0.08} height={h * 0.58} fill={GEO.sari} />
          <Rect x={s * 0.18} y={h * 0.48} width={s * 0.64} height={s * 0.08} fill={GEO.sari} />
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
    case 'zar':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.22} y={h * 0.22} width={s * 0.56} height={s * 0.56} fill={GEO.beyaz} stroke={GEO.metin} strokeWidth={2} rx={4} />
          {[
            [0.35, 0.35],
            [0.65, 0.35],
            [0.5, 0.5],
            [0.35, 0.65],
            [0.65, 0.65],
          ].map(([cx, cy], i) => (
            <Circle key={i} cx={s * cx} cy={h * cy} r={s * 0.05} fill={GEO.metin} />
          ))}
        </Svg>
      );
    case 'sut-kutusu':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.2} y={h * 0.15} width={s * 0.6} height={h * 0.7} fill={GEO.beyaz} stroke={GEO.mavi} strokeWidth={2} rx={2} />
          <Rect x={s * 0.28} y={h * 0.28} width={s * 0.44} height={h * 0.3} fill={GEO.mavi} rx={1} />
        </Svg>
      );
    case 'sira':
      return (
        <Svg width={s} height={h} viewBox={`0 0 ${s} ${h}`}>
          <Rect x={s * 0.1} y={h * 0.35} width={s * 0.8} height={h * 0.12} fill={GEO.kahve} rx={1} />
          <Rect x={s * 0.12} y={h * 0.12} width={s * 0.06} height={h * 0.24} fill={GEO.kahve} />
          <Rect x={s * 0.82} y={h * 0.12} width={s * 0.06} height={h * 0.24} fill={GEO.kahve} />
        </Svg>
      );
    default:
      return null;
  }
}

function Anlatim1() {
  return (
    <View style={geoStyles.satir}>
      <IllustrationColumn label="yuvarlak" width={100}>
        <Svg width={72} height={72} viewBox="0 0 72 72">
          <Circle cx={36} cy={36} r={32} fill={GEO.kirmizi} />
          <Circle cx={28} cy={26} r={7} fill="#FFCDD2" opacity={0.9} />
        </Svg>
      </IllustrationColumn>
      <IllustrationColumn label="köşeli" width={100}>
        <Svg width={56} height={56} viewBox="0 0 56 56">
          <Rect x={4} y={4} width={48} height={48} fill={GEO.mavi} rx={3} />
          <Line x1={20} y1={4} x2={20} y2={52} stroke={GEO.beyaz} strokeWidth={2} />
        </Svg>
      </IllustrationColumn>
    </View>
  );
}

function Anlatim2() {
  const items = [
    {
      label: 'top',
      gorsel: (
        <Svg width={60} height={60} viewBox="0 0 60 60">
          <Circle cx={30} cy={30} r={28} fill={GEO.kirmizi} />
          <Circle cx={22} cy={22} r={6} fill="#FFCDD2" />
        </Svg>
      ),
    },
    {
      label: 'portakal',
      gorsel: (
        <Svg width={56} height={56} viewBox="0 0 56 56">
          <Circle cx={28} cy={32} r={26} fill={GEO.turuncu} />
          <Ellipse cx={28} cy={8} rx={7} ry={4} fill={GEO.yesil} />
        </Svg>
      ),
    },
    {
      label: 'misket',
      gorsel: (
        <Svg width={52} height={52} viewBox="0 0 52 52">
          <Circle cx={26} cy={26} r={22} fill={GEO.mavi} opacity={0.85} />
          <Circle cx={20} cy={20} r={5} fill="#BBDEFB" />
        </Svg>
      ),
    },
    {
      label: 'karpuz',
      gorsel: (
        <Svg width={56} height={56} viewBox="0 0 56 56">
          <Circle cx={28} cy={30} r={26} fill={GEO.yesil} />
          <Line x1={20} y1={10} x2={20} y2={50} stroke="#2E7D32" strokeWidth={1.5} />
          <Line x1={28} y1={10} x2={28} y2={50} stroke="#2E7D32" strokeWidth={1.5} />
          <Line x1={36} y1={10} x2={36} y2={50} stroke="#2E7D32" strokeWidth={1.5} />
        </Svg>
      ),
    },
  ];
  return (
    <View style={geoStyles.satir}>
      {items.map((item) => (
        <IllustrationColumn key={item.label} label={item.label} width={76}>
          {item.gorsel}
        </IllustrationColumn>
      ))}
    </View>
  );
}

function KoseKenarKutu() {
  const w = 200;
  const h = 110;
  const bx = 50;
  const by = 20;
  const bw = 100;
  const bh = 70;
  return (
    <SvgCanvas
      width={w}
      height={h}
      labels={[
        { text: 'köşe', left: bx - 44, top: by - 36, width: 44, fontSize: 11, color: GEO.mavi, fontWeight: '700' },
        { text: 'kenar', left: bx + bw + 20, top: by + bh / 2 - 8, width: 44, fontSize: 11, color: GEO.mor, fontWeight: '700' },
      ]}
    >
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={bx} y={by} width={bw} height={bh} fill={GEO.turuncu} rx={2} />
        <Circle cx={bx} cy={by} r={5} fill={GEO.sari} stroke={GEO.metin} strokeWidth={1.5} />
        <Line x1={bx} y1={by - 2} x2={bx - 22} y2={by - 18} stroke={GEO.mavi} strokeWidth={2} />
        <Line x1={bx + bw} y1={by + bh / 2} x2={bx + bw + 24} y2={by + bh / 2} stroke={GEO.mor} strokeWidth={2} />
      </Svg>
    </SvgCanvas>
  );
}

function Anlatim3() {
  const w = 320;
  const h = 200;
  return (
    <SvgCanvas
      width={w}
      height={h}
      labels={[
        { text: 'kitap', left: 8, top: 62, width: 50, fontSize: 10 },
        { text: 'kutu', left: 78, top: 62, width: 44, fontSize: 10 },
        { text: 'buzdolabı', left: 138, top: 62, width: 64, fontSize: 10 },
        { text: 'zar', left: 218, top: 62, width: 40, fontSize: 10 },
        { text: 'köşe', left: 18, top: 52, width: 44, fontSize: 11, color: GEO.mavi, fontWeight: '700' },
        { text: 'kenar', left: 174, top: 112, width: 48, fontSize: 11, color: GEO.mor, fontWeight: '700' },
      ]}
    >
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={15} y={12} width={36} height={48} fill={GEO.mavi} rx={2} />
        <Line x1={24} y1={12} x2={24} y2={60} stroke={GEO.beyaz} strokeWidth={1.5} />
        <Rect x={78} y={18} width={44} height={40} fill={GEO.mor} rx={2} />
        <Rect x={96} y={18} width={6} height={40} fill={GEO.sari} />
        <Rect x={78} y={36} width={44} height={6} fill={GEO.sari} />
        <Rect x={148} y={10} width={40} height={52} fill="#90CAF9" rx={2} />
        <Line x1={148} y1={32} x2={188} y2={32} stroke={GEO.beyaz} strokeWidth={1.5} />
        <Rect x={218} y={20} width={40} height={40} fill={GEO.beyaz} stroke={GEO.metin} strokeWidth={1.5} rx={3} />
        <Circle cx={228} cy={30} r={3} fill={GEO.metin} />
        <Circle cx={248} cy={30} r={3} fill={GEO.metin} />
        <Circle cx={238} cy={40} r={3} fill={GEO.metin} />
        <Circle cx={228} cy={50} r={3} fill={GEO.metin} />
        <Circle cx={248} cy={50} r={3} fill={GEO.metin} />
        <Rect x={70} y={88} width={100} height={70} fill={GEO.turuncu} rx={2} />
        <Circle cx={70} cy={88} r={5} fill={GEO.sari} stroke={GEO.metin} strokeWidth={1.5} />
        <Line x1={70} y1={86} x2={48} y2={70} stroke={GEO.mavi} strokeWidth={2} />
        <Line x1={170} y1={123} x2={194} y2={123} stroke={GEO.mor} strokeWidth={2} />
      </Svg>
    </SvgCanvas>
  );
}

function PortakalMisket() {
  const w = 140;
  const h = 70;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Circle cx={40} cy={38} r={30} fill={GEO.turuncu} />
      <Ellipse cx={40} cy={12} rx={8} ry={5} fill={GEO.yesil} />
      <Circle cx={105} cy={40} r={24} fill={GEO.mavi} opacity={0.85} />
      <Circle cx={97} cy={32} r={5} fill="#BBDEFB" />
    </Svg>
  );
}

function TekNesne({ tip }: { tip: NesneTipi }) {
  return <NesneIkon tip={tip} size={80} />;
}

const geoStyles = StyleSheet.create({
  satir: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    paddingVertical: 4,
  },
});

/** Nesne sahne anahtarları → illüstrasyon */
export function GeoGorsel({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'anlatim-1':
      return <Anlatim1 />;
    case 'anlatim-2':
      return <Anlatim2 />;
    case 'anlatim-3':
      return <Anlatim3 />;
    case 'kose-kenar':
      return <KoseKenarKutu />;
    case 'portakal-misket':
      return <PortakalMisket />;
    case 'top':
    case 'kitap':
    case 'portakal':
    case 'misket':
    case 'karpuz':
    case 'hediye-kutusu':
    case 'buzdolabi':
    case 'zar':
    case 'sut-kutusu':
    case 'sira':
      return <TekNesne tip={sahne} />;
    default:
      return null;
  }
}
