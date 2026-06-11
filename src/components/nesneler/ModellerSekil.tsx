import Svg, { Circle, Line, Polygon, Rect } from 'react-native-svg';
import { GEO } from './colors';

type Vurgu = string | undefined;

const VURGU_STROKE = { stroke: GEO.sari, strokeWidth: 3 };

function EvGovde(vurgu?: Vurgu) {
  const props = vurgu === 'govde' ? VURGU_STROKE : {};
  return <Rect x={50} y={55} width={60} height={55} fill={GEO.turuncu} {...props} />;
}

function EvCati(vurgu?: Vurgu) {
  const props = vurgu === 'cati' ? VURGU_STROKE : {};
  return <Polygon points="80,20 115,55 45,55" fill={GEO.kirmizi} {...props} />;
}

function EvPencere(cx: number, vurgu?: Vurgu) {
  const props = vurgu === 'pencere' ? VURGU_STROKE : {};
  return (
    <>
      <Rect x={cx} y={68} width={18} height={18} fill="#90CAF9" stroke={GEO.kahve} strokeWidth={2} {...props} />
      <Line x1={cx + 9} y1={68} x2={cx + 9} y2={86} stroke={GEO.kahve} strokeWidth={1.5} />
      <Line x1={cx} y1={77} x2={cx + 18} y2={77} stroke={GEO.kahve} strokeWidth={1.5} />
    </>
  );
}

export function EvModeli({ vurgu }: { vurgu?: 'cati' | 'govde' | 'pencere' }) {
  return (
    <Svg width={160} height={120} viewBox="0 0 160 120">
      <Circle cx={135} cy={28} r={14} fill={GEO.sari} />
      {EvCati(vurgu)}
      {EvGovde(vurgu)}
      <Rect x={72} y={82} width={16} height={28} fill={GEO.kahve} />
      {EvPencere(58, vurgu)}
      {EvPencere(88, vurgu)}
    </Svg>
  );
}

export function TrenIkiVagonModeli() {
  const tekerlek = (cx: number) => (
    <>
      <Circle cx={cx} cy={88} r={10} fill="none" stroke={GEO.metin} strokeWidth={3} />
      <Circle cx={cx} cy={88} r={3} fill={GEO.gri} />
    </>
  );
  return (
    <Svg width={150} height={100} viewBox="0 0 150 100">
      <Rect x={15} y={35} width={50} height={40} fill={GEO.mavi} rx={3} />
      <Rect x={72} y={35} width={50} height={40} fill={GEO.mavi} rx={3} />
      {tekerlek(35)}
      {tekerlek(65)}
      {tekerlek(92)}
      {tekerlek(122)}
    </Svg>
  );
}

export function TrenModeli({ vurgu }: { vurgu?: 'tekerlek' | 'vagon' }) {
  const tekerProps = vurgu === 'tekerlek' ? VURGU_STROKE : {};
  const vagonProps = vurgu === 'vagon' ? VURGU_STROKE : {};
  const tekerlek = (cx: number) => (
  <>
    <Circle cx={cx} cy={88} r={10} fill="none" stroke={GEO.metin} strokeWidth={3} {...tekerProps} />
    <Circle cx={cx} cy={88} r={3} fill={GEO.gri} />
  </>
  );
  return (
    <Svg width={180} height={100} viewBox="0 0 180 100">
      <Rect x={10} y={35} width={35} height={40} fill={GEO.kirmizi} rx={3} {...vagonProps} />
      <Rect x={50} y={35} width={50} height={40} fill={GEO.mavi} rx={3} {...vagonProps} />
      <Rect x={105} y={35} width={50} height={40} fill={GEO.mavi} rx={3} {...vagonProps} />
      {tekerlek(28)}
      {tekerlek(68)}
      {tekerlek(118)}
      {tekerlek(148)}
      <Rect x={5} y={50} width={8} height={15} fill={GEO.gri} />
    </Svg>
  );
}

export function RobotModeli({ vurgu }: { vurgu?: 'goz' | 'kare' }) {
  const gozProps = vurgu === 'goz' ? { stroke: GEO.sari, strokeWidth: 3 } : {};
  const kareProps = vurgu === 'kare' ? VURGU_STROKE : {};
  return (
    <Svg width={120} height={130} viewBox="0 0 120 130">
      <Rect x={40} y={5} width={40} height={35} fill={GEO.mavi} rx={3} {...kareProps} />
      <Circle cx={52} cy={22} r={6} fill={GEO.sari} {...gozProps} />
      <Circle cx={68} cy={22} r={6} fill={GEO.sari} {...gozProps} />
      <Rect x={30} y={45} width={60} height={50} fill={GEO.yesil} rx={3} {...kareProps} />
      <Rect x={5} y={55} width={20} height={35} fill={GEO.mor} rx={2} />
      <Rect x={95} y={55} width={20} height={35} fill={GEO.mor} rx={2} />
      <Rect x={38} y={98} width={18} height={25} fill={GEO.gri} />
      <Rect x={64} y={98} width={18} height={25} fill={GEO.gri} />
    </Svg>
  );
}

export function BalikModeli({ vurgu }: { vurgu?: 'govde' | 'kuyruk' }) {
  const govdeProps = vurgu === 'govde' ? VURGU_STROKE : {};
  const kuyrukProps = vurgu === 'kuyruk' ? VURGU_STROKE : {};
  return (
    <Svg width={140} height={80} viewBox="0 0 140 80">
      <Circle cx={55} cy={40} r={28} fill={GEO.mavi} {...govdeProps} />
      <Polygon points="85,40 125,15 125,65" fill={GEO.turuncu} {...kuyrukProps} />
      <Circle cx={42} cy={32} r={4} fill={GEO.beyaz} />
      <Circle cx={43} cy={32} r={2} fill={GEO.metin} />
    </Svg>
  );
}

export function KelebekModeli({ vurgu }: { vurgu?: 'kanat' }) {
  const kanatProps = vurgu === 'kanat' ? VURGU_STROKE : {};
  return (
    <Svg width={130} height={90} viewBox="0 0 130 90">
      <Polygon points="20,45 55,15 55,75" fill={GEO.mor} {...kanatProps} />
      <Polygon points="75,15 110,45 75,75" fill={GEO.mor} {...kanatProps} />
      <Polygon points="35,45 55,25 55,65" fill={GEO.mavi} {...kanatProps} />
      <Polygon points="75,25 95,45 75,65" fill={GEO.mavi} {...kanatProps} />
      <Circle cx={65} cy={45} r={8} fill={GEO.kahve} />
    </Svg>
  );
}

export function CicekModeli({ vurgu }: { vurgu?: 'merkez' | 'yaprak' }) {
  const merkezProps = vurgu === 'merkez' ? VURGU_STROKE : {};
  const yaprakProps = vurgu === 'yaprak' ? VURGU_STROKE : {};
  const yaprak = (cx: number, cy: number, pts: string) => (
    <Polygon points={pts} fill={GEO.yesil} {...yaprakProps} />
  );
  return (
    <Svg width={110} height={110} viewBox="0 0 110 110">
      {yaprak(55, 55, '55,20 70,50 55,55')}
      {yaprak(55, 55, '90,55 60,70 55,55')}
      {yaprak(55, 55, '55,90 40,60 55,55')}
      {yaprak(55, 55, '20,55 50,40 55,55')}
      <Circle cx={55} cy={55} r={14} fill={GEO.sari} {...merkezProps} />
      <Rect x={52} y={68} width={6} height={30} fill={GEO.yesil} />
    </Svg>
  );
}

export function KusYuvasiModeli({ vurgu }: { vurgu?: 'cati' | 'delik' }) {
  const catiProps = vurgu === 'cati' ? VURGU_STROKE : {};
  const delikProps = vurgu === 'delik' ? { stroke: GEO.sari, strokeWidth: 3 } : {};
  return (
    <Svg width={120} height={110} viewBox="0 0 120 110">
      <Polygon points="60,10 105,50 15,50" fill={GEO.kahve} {...catiProps} />
      <Rect x={25} y={50} width={70} height={50} fill={GEO.turuncu} />
      <Circle cx={60} cy={72} r={12} fill={GEO.metin} {...delikProps} />
      <Rect x={48} y={82} width={24} height={18} fill={GEO.kahve} />
    </Svg>
  );
}
