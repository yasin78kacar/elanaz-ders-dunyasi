import { View } from 'react-native';
import Svg, { Circle, Line, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { GEO } from './colors';
import { EvModeli } from './ModellerSekil';
import { SekilNesneler, type SekilNesneTipi } from './SekilNesneler';
import { SekillerIcon } from './SekillerIcon';

export function G3mAnlatim1() {
  const w = 300;
  const h = 90;
  const sekil = (x: number, renk: string, tip: 'kare' | 'dikdortgen' | 'ucgen' | 'cember', etiket: string) => {
    if (tip === 'kare') {
      return (
        <View key={etiket}>
          <Svg width={70} height={h} viewBox={`0 0 70 ${h}`}>
            <Rect x={15} y={12} width={40} height={40} fill={renk} />
            <SvgText x={35} y={h - 6} fontSize={9} fill={GEO.metin} textAnchor="middle" fontWeight="600">
              {etiket}
            </SvgText>
          </Svg>
        </View>
      );
    }
    if (tip === 'dikdortgen') {
      return (
        <Svg key={etiket} width={70} height={h} viewBox={`0 0 70 ${h}`}>
          <Rect x={8} y={20} width={54} height={30} fill={renk} />
          <SvgText x={35} y={h - 6} fontSize={9} fill={GEO.metin} textAnchor="middle" fontWeight="600">
            {etiket}
          </SvgText>
        </Svg>
      );
    }
    if (tip === 'ucgen') {
      return (
        <Svg key={etiket} width={70} height={h} viewBox={`0 0 70 ${h}`}>
          <Polygon points="35,10 60,52 10,52" fill={renk} />
          <SvgText x={35} y={h - 6} fontSize={9} fill={GEO.metin} textAnchor="middle" fontWeight="600">
            {etiket}
          </SvgText>
        </Svg>
      );
    }
    return (
      <Svg key={etiket} width={70} height={h} viewBox={`0 0 70 ${h}`}>
        <Circle cx={35} cy={32} r={22} fill="none" stroke={renk} strokeWidth={3} />
        <SvgText x={35} y={h - 6} fontSize={9} fill={GEO.metin} textAnchor="middle" fontWeight="600">
          {etiket}
        </SvgText>
      </Svg>
    );
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
      {sekil(0, GEO.kirmizi, 'kare', 'kare')}
      {sekil(0, GEO.mavi, 'dikdortgen', 'dikdörtgen')}
      {sekil(0, GEO.yesil, 'ucgen', 'üçgen')}
      {sekil(0, GEO.turuncu, 'cember', 'çember')}
    </View>
  );
}

export function G3mAnlatim2() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', gap: 16, paddingVertical: 8 }}>
      <SekillerIcon tip="kare" size={72} renk={GEO.kirmizi} />
      <SekillerIcon tip="dikdortgen" size={88} renk={GEO.mavi} />
      <SekillerIcon tip="ucgen" size={80} renk={GEO.yesil} />
    </View>
  );
}

/** Sayfa 3: çember içi BOŞ, daire içi DOLU — kritik ayrım */
export function G3mAnlatim3() {
  const w = 220;
  const h = 100;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Circle cx={55} cy={42} r={32} fill="none" stroke={GEO.turuncu} strokeWidth={4} />
      <SvgText x={55} y={88} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="700">
        çember
      </SvgText>
      <Circle cx={165} cy={42} r={32} fill={GEO.turuncu} />
      <SvgText x={165} y={88} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="700">
        daire
      </SvgText>
    </Svg>
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
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8 }}>
      <SekilNesneler tip="pencere-kare" size={72} />
      <Svg width={40} height={24} viewBox="0 0 40 24">
        <Line x1={4} y1={12} x2={30} y2={12} stroke={GEO.metin} strokeWidth={2} />
        <Polygon points="30,12 24,8 24,16" fill={GEO.metin} />
      </Svg>
      <SekilNesneler tip="pencere-dikdortgen" size={72} />
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
      <Polygon
        points={`${cx},${cy - r} ${cx + r},${cy} ${cx},${cy} ${cx - r},${cy}`}
        fill={GEO.sari}
      />
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
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
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
