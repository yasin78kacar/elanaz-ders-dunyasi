import { StyleSheet, View } from 'react-native';
import { GuvenliMetin } from '../GuvenliMetin';
import Svg, { Circle, Ellipse, Line, Polygon, Rect } from 'react-native-svg';
import { GEO } from './colors';
import { IllustrationColumn } from './IllustrationColumn';
import { ModellerIcon } from './ModellerIcon';
import { NesnelerIcon } from './NesnelerIcon';
import { SekillerIcon } from './SekillerIcon';

function Ok({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={GEO.metin} strokeWidth={2} />
      <Polygon points={`${x2},${y2} ${x2 - 7},${y2 - 4} ${x2 - 7},${y2 + 4}`} fill={GEO.metin} />
    </>
  );
}

function KoseNoktalari({ pts }: { pts: [number, number][] }) {
  return (
    <>
      {pts.map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={4} fill={GEO.kirmizi} />
      ))}
    </>
  );
}

export function G4mAnlatim1() {
  return (
    <View style={styles.satir}>
      <IllustrationColumn label="yuvarlak" width={100}>
        <ModellerIcon tip="kure" size={72} />
      </IllustrationColumn>
      <Svg width={36} height={24} viewBox="0 0 36 24">
        <Ok x1={4} y1={12} x2={28} y2={12} />
      </Svg>
      <IllustrationColumn label="köşeli" width={100}>
        <ModellerIcon tip="kup" size={72} />
      </IllustrationColumn>
    </View>
  );
}

export function G4mAnlatim2() {
  return (
    <View style={styles.grup}>
      <View style={styles.satir}>
        <NesnelerIcon tip="davul" size={64} />
        <Svg width={32} height={20} viewBox="0 0 32 20">
          <Ok x1={2} y1={10} x2={24} y2={10} />
        </Svg>
        <ModellerIcon tip="silindir" size={64} />
        <GuvenliMetin style={styles.miniEtiket} tamGenislik={false}>davul → silindir</GuvenliMetin>
      </View>
      <View style={styles.satir}>
        <NesnelerIcon tip="zil" size={56} />
        <Svg width={32} height={20} viewBox="0 0 32 20">
          <Ok x1={2} y1={10} x2={24} y2={10} />
        </Svg>
        <SekillerIcon tip="daire" size={56} />
        <GuvenliMetin style={styles.miniEtiket} tamGenislik={false}>zil → daire</GuvenliMetin>
      </View>
      <View style={styles.satir}>
        <ModellerIcon tip="kare-prizma" size={64} />
        <GuvenliMetin style={styles.miniEtiket} tamGenislik={false}>kutu → prizma (köşeli)</GuvenliMetin>
      </View>
    </View>
  );
}

export function G4mAnlatim3() {
  return (
    <View style={styles.grup}>
      <View style={styles.satir}>
        <NesnelerIcon tip="top" size={48} />
        <NesnelerIcon tip="top" size={88} />
      </View>
      <GuvenliMetin style={styles.vurguEtiket} tamGenislik={false}>ikisi de yuvarlak!</GuvenliMetin>
    </View>
  );
}

export function G4mAnlatim4() {
  const kose = [
    [14, 18],
    [74, 18],
    [74, 58],
    [14, 58],
  ] as [number, number][];
  return (
    <View style={styles.grup}>
      <View style={styles.satir}>
        <Svg width={88} height={72} viewBox="0 0 88 72">
          <Rect x={14} y={18} width={60} height={40} fill={GEO.turuncu} rx={3} />
          <KoseNoktalari pts={kose} />
        </Svg>
        <Svg width={88} height={72} viewBox="0 0 88 72">
          <Polygon points="44,22 74,42 44,62 14,42" fill={GEO.mor} />
          <KoseNoktalari pts={kose.map(([x, y]) => [x, y] as [number, number])} />
        </Svg>
      </View>
      <GuvenliMetin style={styles.vurguEtiket} tamGenislik={false}>köşeler hâlâ orada!</GuvenliMetin>
    </View>
  );
}

const styles = StyleSheet.create({
  satir: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    paddingVertical: 4,
  },
  grup: { alignItems: 'center', gap: 10, paddingVertical: 4 },
  miniEtiket: { fontSize: 10, fontWeight: '600', color: GEO.metin, textAlign: 'center', alignSelf: 'stretch' },
  vurguEtiket: { fontSize: 13, fontWeight: '700', color: GEO.turuncu, textAlign: 'center' },
});
