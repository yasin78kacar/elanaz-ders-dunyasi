import { StyleSheet, Text } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { SvgCanvas } from '../../src/components/SvgCanvas';

interface Props {
  sayilar?: number[];
  width?: number;
  height?: number;
}

export function SayiKartlari({ sayilar = [2, 4, 6, 8, 10], width = 280, height = 80 }: Props) {
  return (
    <SvgCanvas width={width} height={height}>
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
      </Svg>
      {sayilar.map((n, i) => (
        <Text key={`t-${n}`} style={[styles.kartSayi, { left: 10 + i * 52, top: 22, width: 44 }]}>
          {n}
        </Text>
      ))}
    </SvgCanvas>
  );
}

export function SayiKart47({ width = 120, height = 80 }: { width?: number; height?: number }) {
  return (
    <SvgCanvas width={width} height={height}>
      <Svg width={width} height={height} viewBox="0 0 120 80">
        <Rect x={10} y={10} width={100} height={60} fill="#FFF3E0" stroke="#E67E22" strokeWidth={2} rx={10} />
      </Svg>
      <Text style={[styles.kartSayiBuyuk, { left: 10, top: 22, width: 100 }]}>47</Text>
    </SvgCanvas>
  );
}

export function ElmaGruplari({ width = 280, height = 90 }: { width?: number; height?: number }) {
  const positions = [
    [20, 30], [45, 30], [70, 30],
    [32, 55], [57, 55],
  ];
  return (
    <SvgCanvas width={width} height={height}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {positions.map(([cx, cy], i) => (
          <Circle key={i} cx={cx} cy={cy} r={14} fill="#E74C3C" />
        ))}
      </Svg>
      <Text style={[styles.elmaMetin, { left: 100, top: 36 }]}>5 elma (beşer say)</Text>
    </SvgCanvas>
  );
}

const styles = StyleSheet.create({
  kartSayi: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#1A2B4A',
  },
  kartSayiBuyuk: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    color: '#E67E22',
  },
  elmaMetin: {
    position: 'absolute',
    fontSize: 14,
    color: '#3D4F6F',
    width: 160,
  },
});
