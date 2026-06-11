import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { GEO } from './colors';
import { ModellerIcon } from './ModellerIcon';
import { NesnelerIcon, type NesneTipi } from './NesnelerIcon';
import type { ModelTipi } from './ModellerIcon';

function Ok({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={GEO.metin} strokeWidth={2} />
      <Polygon points={`${x2},${y2} ${x2 - 8},${y2 - 4} ${x2 - 8},${y2 + 4}`} fill={GEO.metin} />
    </>
  );
}

export function G2mAnlatim1() {
  const w = 320;
  const h = 120;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={8} y={18} width={40} height={40} fill={GEO.kirmizi} rx={2} />
      <SvgText x={28} y={h - 8} fontSize={8} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        küp
      </SvgText>
      <Rect x={58} y={22} width={28} height={50} fill={GEO.mor} rx={2} />
      <SvgText x={72} y={h - 8} fontSize={8} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        kare prizma
      </SvgText>
      <Rect x={108} y={24} width={50} height={40} fill={GEO.yesil} rx={2} />
      <SvgText x={133} y={h - 8} fontSize={8} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        dikdörtgen prizma
      </SvgText>
      <Polygon points="188,22 218,22 203,52" fill={GEO.turuncu} />
      <Rect x={188} y={52} width={30} height={28} fill={GEO.turuncu} />
      <SvgText x={203} y={h - 8} fontSize={8} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        üçgen prizma
      </SvgText>
      <Rect x={238} y={30} width={28} height={42} fill={GEO.sari} rx={14} />
      <Ellipse cx={252} cy={30} rx={14} ry={6} fill={GEO.sari} />
      <SvgText x={252} y={h - 8} fontSize={8} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        silindir
      </SvgText>
      <Circle cx={295} cy={48} r={22} fill={GEO.mavi} />
      <SvgText x={295} y={h - 8} fontSize={8} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        küre
      </SvgText>
    </Svg>
  );
}

export function G2mAnlatim2() {
  const w = 300;
  const h = 115;
  return (
    <View>
      <Svg width={w} height={h - 20} viewBox={`0 0 ${w} ${h - 20}`}>
        <Rect x={8} y={12} width={36} height={36} fill={GEO.kirmizi} rx={4} />
        <Circle cx={20} cy={24} r={3} fill={GEO.beyaz} />
        <Circle cx={32} cy={24} r={3} fill={GEO.beyaz} />
        <Circle cx={26} cy={34} r={3} fill={GEO.beyaz} />
        <Ok x1={50} y1={30} x2={68} y2={30} />
        <Rect x={74} y={16} width={32} height={32} fill={GEO.kirmizi} rx={2} />
        <SvgText x={26} y={58} fontSize={9} fill={GEO.metin} textAnchor="middle">
          zar
        </SvgText>
        <SvgText x={90} y={58} fontSize={9} fill={GEO.metin} textAnchor="middle">
          küp
        </SvgText>
        <Rect x={118} y={18} width={44} height={30} fill={GEO.turuncu} rx={2} />
        <Ok x1={168} y1={32} x2={184} y2={32} />
        <Rect x={190} y={16} width={48} height={36} fill={GEO.yesil} rx={2} />
        <SvgText x={140} y={58} fontSize={8} fill={GEO.metin} textAnchor="middle">
          ayakkabı kutusu
        </SvgText>
        <SvgText x={214} y={58} fontSize={8} fill={GEO.metin} textAnchor="middle">
          dikdörtgen prizma
        </SvgText>
      </Svg>
      <Svg width={w} height={35} viewBox={`0 0 ${w} 35`}>
        <Rect x={20} y={4} width={24} height={24} fill={GEO.mavi} rx={2} />
        <Ok x1={50} y1={16} x2={66} y2={16} />
        <Rect x={72} y={6} width={22} height={22} fill={GEO.mor} rx={2} />
        <SvgText x={32} y={34} fontSize={8} fill={GEO.metin} textAnchor="middle">
          kare kutu
        </SvgText>
        <SvgText x={83} y={34} fontSize={8} fill={GEO.metin} textAnchor="middle">
          kare prizma
        </SvgText>
      </Svg>
    </View>
  );
}

export function G2mAnlatim3() {
  const w = 300;
  const h = 130;
  return (
    <View>
      <Svg width={w} height={h - 35} viewBox={`0 0 ${w} ${h - 35}`}>
        <Polygon points="40,10 70,48 10,48" fill={GEO.yesil} />
        <Ok x1={78} y1={30} x2={94} y2={30} />
        <Polygon points="118,10 148,10 133,40" fill={GEO.kirmizi} />
        <Rect x={118} y={40} width={30} height={20} fill={GEO.kirmizi} />
        <SvgText x={40} y={62} fontSize={8} fill={GEO.metin} textAnchor="middle">
          çadır
        </SvgText>
        <SvgText x={133} y={68} fontSize={8} fill={GEO.metin} textAnchor="middle">
          üçgen prizma
        </SvgText>
        <Rect x={168} y={14} width={28} height={38} fill={GEO.gri} rx={2} />
        <Ellipse cx={182} cy={14} rx={14} ry={5} fill={GEO.sari} />
        <Ok x1={202} y1={32} x2={216} y2={32} />
        <Rect x={222} y={18} width={24} height={34} fill={GEO.turuncu} rx={12} />
        <Ellipse cx={234} cy={18} rx={12} ry={5} fill={GEO.turuncu} />
        <SvgText x={182} y={62} fontSize={8} fill={GEO.metin} textAnchor="middle">
          konserve
        </SvgText>
        <SvgText x={234} y={68} fontSize={8} fill={GEO.metin} textAnchor="middle">
          silindir
        </SvgText>
      </Svg>
      <Svg width={w} height={35} viewBox={`0 0 ${w} 35`}>
        <Circle cx={30} cy={18} r={16} fill={GEO.beyaz} stroke={GEO.metin} strokeWidth={1.5} />
        <Ok x1={52} y1={18} x2={66} y2={18} />
        <Circle cx={88} cy={18} r={16} fill={GEO.mavi} />
        <SvgText x={30} y={34} fontSize={8} fill={GEO.metin} textAnchor="middle">
          futbol topu
        </SvgText>
        <SvgText x={88} y={34} fontSize={8} fill={GEO.metin} textAnchor="middle">
          küre
        </SvgText>
      </Svg>
    </View>
  );
}

export function G2mAnlatim4() {
  const w = 280;
  const h = 110;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={30} y={50} width={24} height={50} fill={GEO.mor} rx={12} />
      <SvgText x={42} y={108} fontSize={8} fill={GEO.metin} textAnchor="middle">
        silindir kule
      </SvgText>
      <Rect x={80} y={40} width={60} height={60} fill={GEO.mavi} />
      <SvgText x={110} y={108} fontSize={8} fill={GEO.metin} textAnchor="middle">
        dikdörtgen prizma bina
      </SvgText>
      <Polygon points="170,35 210,35 190,55" fill={GEO.kirmizi} />
      <Rect x={170} y={55} width={40} height={45} fill={GEO.turuncu} />
      <SvgText x={190} y={108} fontSize={8} fill={GEO.metin} textAnchor="middle">
        üçgen prizma çatı
      </SvgText>
      <Circle cx={250} cy={55} r={22} fill={GEO.sari} />
      <SvgText x={250} y={108} fontSize={8} fill={GEO.metin} textAnchor="middle">
        küre kubbe
      </SvgText>
    </Svg>
  );
}

export function YanYanaIki({ sol, sag, solTip, sagTip }: { sol: 'nesne' | 'model'; sag: 'nesne' | 'model'; solTip: string; sagTip: string }) {
  return (
    <View style={styles.yanYana}>
      {sol === 'nesne' ? (
        <NesnelerIcon tip={solTip as NesneTipi} size={72} />
      ) : (
        <ModellerIcon tip={solTip as ModelTipi} size={72} />
      )}
      {sag === 'nesne' ? (
        <NesnelerIcon tip={sagTip as NesneTipi} size={72} />
      ) : (
        <ModellerIcon tip={sagTip as ModelTipi} size={72} />
      )}
    </View>
  );
}

export function EslestirmeIkon({ nesne, model }: { nesne: NesneTipi; model: ModelTipi }) {
  return (
    <View style={styles.eslestirme}>
      <NesnelerIcon tip={nesne} size={32} />
      <Svg width={24} height={20} viewBox="0 0 24 20">
        <Line x1={2} y1={10} x2={18} y2={10} stroke={GEO.metin} strokeWidth={2} />
        <Polygon points="18,10 14,6 14,14" fill={GEO.metin} />
      </Svg>
      <ModellerIcon tip={model} size={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  yanYana: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    paddingVertical: 8,
  },
  eslestirme: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
