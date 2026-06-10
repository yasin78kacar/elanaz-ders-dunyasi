import Svg, { Rect, Text as SvgText, Circle } from 'react-native-svg';

interface Props {
  sayilar?: number[];
  width?: number;
  height?: number;
}

export function SayiKartlari({ sayilar = [2, 4, 6, 8, 10], width = 280, height = 80 }: Props) {
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {sayilar.map((n, i) => (
        <Rect
          key={n}
          x={10 + i * 52}
          y={10}
          width={44}
          height={50}
          fill="#E8F0FE"
          stroke="#2E6BE6"
          strokeWidth={2}
          rx={8}
        />
      ))}
      {sayilar.map((n, i) => (
        <SvgText
          key={`t-${n}`}
          x={32 + i * 52}
          y={42}
          fontSize={20}
          fontWeight="bold"
          fill="#1A2B4A"
          textAnchor="middle"
        >
          {n}
        </SvgText>
      ))}
    </Svg>
  );
}

export function SayiKart47({ width = 120, height = 80 }: { width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 120 80">
      <Rect x={10} y={10} width={100} height={60} fill="#FFF3E0" stroke="#E67E22" strokeWidth={2} rx={10} />
      <SvgText x={60} y={50} fontSize={32} fontWeight="bold" fill="#E67E22" textAnchor="middle">
        47
      </SvgText>
    </Svg>
  );
}

export function ElmaGruplari({ width = 280, height = 90 }: { width?: number; height?: number }) {
  const positions = [
    [20, 30], [45, 30], [70, 30],
    [32, 55], [57, 55],
  ];
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {positions.map(([cx, cy], i) => (
        <Circle key={i} cx={cx} cy={cy} r={14} fill="#E74C3C" />
      ))}
      <SvgText x={100} y={50} fontSize={14} fill="#3D4F6F">
        5 elma (beşer say)
      </SvgText>
    </Svg>
  );
}
