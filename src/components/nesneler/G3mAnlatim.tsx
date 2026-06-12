import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Line, Polygon, Rect } from 'react-native-svg';
import { GEO } from './colors';
import { EvModeli } from './ModellerSekil';
import { IllustrationColumn } from './IllustrationColumn';
import { SekilNesneler, type SekilNesneTipi } from './SekilNesneler';
import { SekillerIcon } from './SekillerIcon';

const SHAPE_H = 56;

function KareSekil({ renk }: { renk: string }) {
  return (
    <Svg width={SHAPE_H} height={SHAPE_H} viewBox={`0 0 ${SHAPE_H} ${SHAPE_H}`}>
      <Rect x={8} y={8} width={40} height={40} fill={renk} />
    </Svg>
  );
}

function DikdortgenSekil({ renk }: { renk: string }) {
  return (
    <Svg width={SHAPE_H + 8} height={SHAPE_H} viewBox={`0 0 ${SHAPE_H + 8} ${SHAPE_H}`}>
      <Rect x={4} y={14} width={56} height={28} fill={renk} />
    </Svg>
  );
}

function UcgenSekil({ renk }: { renk: string }) {
  return (
    <Svg width={SHAPE_H} height={SHAPE_H} viewBox={`0 0 ${SHAPE_H} ${SHAPE_H}`}>
      <Polygon points={`${SHAPE_H / 2},6 ${SHAPE_H - 6},${SHAPE_H - 8} 6,${SHAPE_H - 8}`} fill={renk} />
    </Svg>
  );
}

function CemberSekil({ renk }: { renk: string }) {
  return (
    <Svg width={SHAPE_H} height={SHAPE_H} viewBox={`0 0 ${SHAPE_H} ${SHAPE_H}`}>
      <Circle cx={SHAPE_H / 2} cy={SHAPE_H / 2} r={24} fill="none" stroke={renk} strokeWidth={3.5} />
    </Svg>
  );
}

function DaireSekil({ renk }: { renk: string }) {
  return (
    <Svg width={SHAPE_H} height={SHAPE_H} viewBox={`0 0 ${SHAPE_H} ${SHAPE_H}`}>
      <Circle cx={SHAPE_H / 2} cy={SHAPE_H / 2} r={24} fill={renk} />
    </Svg>
  );
}

export function G3mAnlatim1() {
  const items = [
    { label: 'kare', width: 72, gorsel: <KareSekil renk={GEO.kirmizi} /> },
    { label: 'dikdörtgen', width: 96, gorsel: <DikdortgenSekil renk={GEO.mavi} /> },
    { label: 'üçgen', width: 72, gorsel: <UcgenSekil renk={GEO.yesil} /> },
    { label: 'çember', width: 72, gorsel: <CemberSekil renk={GEO.turuncu} /> },
  ];
  return (
    <View style={styles.satir}>
      {items.map((item) => (
        <IllustrationColumn key={item.label} label={item.label} width={item.width}>
          {item.gorsel}
        </IllustrationColumn>
      ))}
    </View>
  );
}

export function G3mAnlatim2() {
  return (
    <View style={styles.satir}>
      <IllustrationColumn label="kare" width={80}>
        <SekillerIcon tip="kare" size={72} renk={GEO.kirmizi} />
      </IllustrationColumn>
      <IllustrationColumn label="dikdörtgen" width={96}>
        <SekillerIcon tip="dikdortgen" size={88} renk={GEO.mavi} />
      </IllustrationColumn>
      <IllustrationColumn label="üçgen" width={80}>
        <SekillerIcon tip="ucgen" size={80} renk={GEO.yesil} />
      </IllustrationColumn>
    </View>
  );
}

/** Sayfa 3: çember içi BOŞ, daire içi DOLU — kritik ayrım */
export function G3mAnlatim3() {
  return (
    <View style={[styles.satir, { gap: 32 }]}>
      <IllustrationColumn label="çember" width={88}>
        <CemberSekil renk={GEO.turuncu} />
      </IllustrationColumn>
      <IllustrationColumn label="daire" width={88}>
        <DaireSekil renk={GEO.turuncu} />
      </IllustrationColumn>
    </View>
  );
}

export function G3mAnlatim4() {
  return <EvModeli />;
}

export function CemberDaireDonusum() {
  const w = 200;
  const h = 80;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Circle cx={40} cy={40} r={28} fill="none" stroke={GEO.mavi} strokeWidth={3.5} />
      <Line x1={78} y1={40} x2={108} y2={40} stroke={GEO.metin} strokeWidth={2} />
      <Polygon points="108,40 100,34 100,46" fill={GEO.metin} />
      <Circle cx={160} cy={40} r={28} fill={GEO.mavi} />
    </Svg>
  );
}

export function KareDikdortgenDonusum() {
  const w = 200;
  const h = 70;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={10} y={15} width={40} height={40} fill={GEO.kirmizi} />
      <Line x1={58} y1={35} x2={88} y2={35} stroke={GEO.metin} strokeWidth={2} />
      <Polygon points="88,35 82,29 82,41" fill={GEO.metin} />
      <Rect x={100} y={22} width={70} height={30} fill={GEO.mavi} />
    </Svg>
  );
}

export function PencereDonusum() {
  return (
    <View style={styles.satir}>
      <IllustrationColumn label="kare pencere" width={80}>
        <SekilNesneler tip="pencere-kare" size={72} />
      </IllustrationColumn>
      <Svg width={40} height={24} viewBox="0 0 40 24">
        <Line x1={4} y1={12} x2={30} y2={12} stroke={GEO.metin} strokeWidth={2} />
        <Polygon points="30,12 24,8 24,16" fill={GEO.metin} />
      </Svg>
      <IllustrationColumn label="dikdörtgen pencere" width={100}>
        <SekilNesneler tip="pencere-dikdortgen" size={72} />
      </IllustrationColumn>
    </View>
  );
}

export function BoyamaAni() {
  const w = 120;
  const h = 80;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Circle cx={60} cy={40} r={32} fill="none" stroke={GEO.mor} strokeWidth={3} />
      <PathHalf cx={60} cy={40} r={32} />
    </Svg>
  );
}

function PathHalf({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <>
      <Polygon points={`${cx},${cy - r} ${cx + r},${cy} ${cx},${cy} ${cx - r},${cy}`} fill={GEO.sari} />
      <Polygon points={`${cx},${cy} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`} fill={GEO.sari} />
    </>
  );
}

const ESLESME_NESNE: Record<string, SekilNesneTipi | 'cati-ucgen'> = {
  gunes: 'gunes',
  cati: 'cati-ucgen',
  kapi: 'kapi',
  tekerlek: 'tekerlek',
};

export function EslestirmeSekilIkon({ nesne, sekil }: { nesne: string; sekil: string }) {
  return (
    <View style={styles.eslestirme}>
      <EslestirmeNesneKucuk tip={nesne} />
      <Svg width={20} height={16} viewBox="0 0 20 16">
        <Line x1={2} y1={8} x2={14} y2={8} stroke={GEO.metin} strokeWidth={2} />
        <Polygon points="14,8 10,4 10,12" fill={GEO.metin} />
      </Svg>
      <SekillerIcon tip={sekil as 'kare' | 'dikdortgen' | 'ucgen' | 'cember' | 'daire'} size={28} />
    </View>
  );
}

function EslestirmeNesneKucuk({ tip }: { tip: string }) {
  const key = ESLESME_NESNE[tip];
  if (key === 'cati-ucgen') {
    return <SekillerIcon tip="ucgen" size={28} renk={GEO.kirmizi} />;
  }
  if (key) return <SekilNesneler tip={key} size={32} />;
  return <SekillerIcon tip="ucgen" size={28} />;
}

const styles = StyleSheet.create({
  satir: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: 8,
    paddingVertical: 4,
  },
  eslestirme: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
