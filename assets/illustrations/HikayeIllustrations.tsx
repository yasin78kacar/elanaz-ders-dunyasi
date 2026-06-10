import Svg, { Rect, Circle, Text as SvgText } from 'react-native-svg';

export function CizimKalemleri({ width = 280, height = 90 }: { width?: number; height?: number }) {
  const renkler = ['#E74C3C', '#F1C40F', '#3498DB', '#2ECC71', '#BDC3C7'];
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {renkler.map((renk, i) => (
        <Rect key={i} x={20 + i * 48} y={20} width={12} height={50} fill={renk} rx={2} />
      ))}
      <SvgText x={140} y={85} fontSize={12} fill="#7F8C8D" textAnchor="middle">
        Turuncu eksik!
      </SvgText>
    </Svg>
  );
}

export function RenkKaristirma({ width = 280, height = 90 }: { width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Circle cx={80} cy={45} r={28} fill="#E74C3C" />
      <SvgText x={80} y={50} fontSize={14} fill="#FFF" textAnchor="middle">+</SvgText>
      <Circle cx={140} cy={45} r={28} fill="#F1C40F" />
      <SvgText x={200} y={50} fontSize={20} fill="#3D4F6F" textAnchor="middle">=</SvgText>
      <Circle cx={240} cy={45} r={28} fill="#E67E22" />
    </Svg>
  );
}

export function PanoyaAsilanResim({ width = 280, height = 90 }: { width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Rect x={60} y={10} width={160} height={70} fill="#D5E8D4" stroke="#82B366" strokeWidth={2} rx={4} />
      <Circle cx={120} cy={45} r={12} fill="#E67E22" />
      <Rect x={150} y={35} width={8} height={25} fill="#8B4513" />
      <SvgText x={140} y={88} fontSize={12} fill="#3D4F6F" textAnchor="middle">
        Sınıf panosu
      </SvgText>
    </Svg>
  );
}
