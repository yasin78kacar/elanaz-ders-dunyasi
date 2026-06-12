import { StyleSheet } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { GuvenliMetin } from '../../src/components/GuvenliMetin';
import { SvgCanvas } from '../../src/components/SvgCanvas';

export function CizimKalemleri({ width = 280, height = 90 }: { width?: number; height?: number }) {
  const renkler = ['#E74C3C', '#F1C40F', '#3498DB', '#2ECC71', '#BDC3C7'];
  return (
    <SvgCanvas width={width} height={height}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {renkler.map((renk, i) => (
          <Rect key={i} x={20 + i * 48} y={20} width={12} height={50} fill={renk} rx={2} />
        ))}
      </Svg>
      <GuvenliMetin style={[styles.altMetin, { left: width / 2 - 56, top: height - 18 }]} tamGenislik={false}>
        Turuncu eksik!
      </GuvenliMetin>
    </SvgCanvas>
  );
}

export function RenkKaristirma({ width = 280, height = 90 }: { width?: number; height?: number }) {
  return (
    <SvgCanvas
      width={width}
      height={height}
      labels={[
        { text: '+', left: 80 - 8, top: 38, width: 16, fontSize: 14, color: '#FFFFFF', fontWeight: '700' },
        { text: '=', left: 200 - 8, top: 36, width: 16, fontSize: 20, color: '#3D4F6F', fontWeight: '700' },
      ]}
    >
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Circle cx={80} cy={45} r={28} fill="#E74C3C" />
        <Circle cx={140} cy={45} r={28} fill="#F1C40F" />
        <Circle cx={240} cy={45} r={28} fill="#E67E22" />
      </Svg>
    </SvgCanvas>
  );
}

export function PanoyaAsilanResim({ width = 280, height = 90 }: { width?: number; height?: number }) {
  return (
    <SvgCanvas width={width} height={height}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Rect x={60} y={10} width={160} height={70} fill="#D5E8D4" stroke="#82B366" strokeWidth={2} rx={4} />
        <Circle cx={120} cy={45} r={12} fill="#E67E22" />
        <Rect x={150} y={35} width={8} height={25} fill="#8B4513" />
      </Svg>
      <GuvenliMetin style={[styles.altMetin, { left: width / 2 - 48, top: height - 14 }]} tamGenislik={false}>
        Sınıf panosu
      </GuvenliMetin>
    </SvgCanvas>
  );
}

const styles = StyleSheet.create({
  altMetin: {
    position: 'absolute',
    fontSize: 12,
    color: '#3D4F6F',
    textAlign: 'center',
  },
});
