import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Polygon, Rect } from 'react-native-svg';
import { GEO } from './colors';
import { ESLESTIRME_IKON_BOYUT, gorselOlcekle } from '../../theme/gorselBoyut';
import { IllustrationColumn } from './IllustrationColumn';
import { ModellerIcon, type ModelTipi } from './ModellerIcon';
import { NesnelerIcon, type NesneTipi } from './NesnelerIcon';

function Ok({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={GEO.metin} strokeWidth={2} />
      <Polygon points={`${x2},${y2} ${x2 - 8},${y2 - 4} ${x2 - 8},${y2 + 4}`} fill={GEO.metin} />
    </>
  );
}

function OkYatay() {
  return (
    <Svg width={28} height={20} viewBox="0 0 28 20">
      <Ok x1={2} y1={10} x2={22} y2={10} />
    </Svg>
  );
}

export function G2mAnlatim1() {
  const items = [
    {
      label: 'küp',
      width: 56,
      gorsel: (
        <Svg width={48} height={48} viewBox="0 0 48 48">
          <Rect x={4} y={8} width={40} height={40} fill={GEO.kirmizi} rx={2} />
        </Svg>
      ),
    },
    {
      label: 'kare prizma',
      width: 72,
      gorsel: (
        <Svg width={48} height={56} viewBox="0 0 48 56">
          <Rect x={10} y={4} width={28} height={50} fill={GEO.mor} rx={2} />
        </Svg>
      ),
    },
    {
      label: 'dikdörtgen prizma',
      width: 88,
      gorsel: (
        <Svg width={56} height={48} viewBox="0 0 56 48">
          <Rect x={4} y={6} width={50} height={40} fill={GEO.yesil} rx={2} />
        </Svg>
      ),
    },
    {
      label: 'üçgen prizma',
      width: 80,
      gorsel: (
        <Svg width={48} height={52} viewBox="0 0 48 52">
          <Polygon points="24,4 44,24 4,24" fill={GEO.turuncu} />
          <Rect x={4} y={24} width={40} height={24} fill={GEO.turuncu} />
        </Svg>
      ),
    },
    {
      label: 'silindir',
      width: 64,
      gorsel: (
        <Svg width={40} height={52} viewBox="0 0 40 52">
          <Rect x={6} y={12} width={28} height={34} fill={GEO.sari} rx={14} />
          <Ellipse cx={20} cy={12} rx={14} ry={6} fill={GEO.sari} />
        </Svg>
      ),
    },
    {
      label: 'küre',
      width: 56,
      gorsel: (
        <Svg width={48} height={48} viewBox="0 0 48 48">
          <Circle cx={24} cy={24} r={22} fill={GEO.mavi} />
        </Svg>
      ),
    },
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

export function G2mAnlatim2() {
  return (
    <View style={styles.grup}>
      <View style={styles.satir}>
        <IllustrationColumn label="zar" width={64}>
          <Svg width={44} height={44} viewBox="0 0 44 44">
            <Rect x={4} y={4} width={36} height={36} fill={GEO.kirmizi} rx={4} />
            <Circle cx={14} cy={14} r={3} fill={GEO.beyaz} />
            <Circle cx={30} cy={14} r={3} fill={GEO.beyaz} />
            <Circle cx={22} cy={24} r={3} fill={GEO.beyaz} />
          </Svg>
        </IllustrationColumn>
        <OkYatay />
        <IllustrationColumn label="küp" width={64}>
          <Svg width={40} height={40} viewBox="0 0 40 40">
            <Rect x={4} y={4} width={32} height={32} fill={GEO.kirmizi} rx={2} />
          </Svg>
        </IllustrationColumn>
        <IllustrationColumn label="ayakkabı kutusu" width={100}>
          <Svg width={52} height={36} viewBox="0 0 52 36">
            <Rect x={4} y={10} width={44} height={22} fill={GEO.turuncu} rx={2} />
          </Svg>
        </IllustrationColumn>
        <OkYatay />
        <IllustrationColumn label="dikdörtgen prizma" width={100}>
          <Svg width={52} height={40} viewBox="0 0 52 40">
            <Rect x={4} y={4} width={48} height={36} fill={GEO.yesil} rx={2} />
          </Svg>
        </IllustrationColumn>
      </View>
      <View style={styles.satir}>
        <IllustrationColumn label="kare kutu" width={80}>
          <Svg width={32} height={32} viewBox="0 0 32 32">
            <Rect x={4} y={4} width={24} height={24} fill={GEO.mavi} rx={2} />
          </Svg>
        </IllustrationColumn>
        <OkYatay />
        <IllustrationColumn label="kare prizma" width={88}>
          <Svg width={32} height={36} viewBox="0 0 32 36">
            <Rect x={5} y={4} width={22} height={30} fill={GEO.mor} rx={2} />
          </Svg>
        </IllustrationColumn>
      </View>
    </View>
  );
}

export function G2mAnlatim3() {
  return (
    <View style={styles.grup}>
      <View style={styles.satir}>
        <IllustrationColumn label="çadır" width={72}>
          <Svg width={48} height={44} viewBox="0 0 48 44">
            <Polygon points="24,4 44,40 4,40" fill={GEO.yesil} />
          </Svg>
        </IllustrationColumn>
        <OkYatay />
        <IllustrationColumn label="üçgen prizma" width={88}>
          <Svg width={44} height={44} viewBox="0 0 44 44">
            <Polygon points="22,4 40,20 4,20" fill={GEO.kirmizi} />
            <Rect x={4} y={20} width={36} height={20} fill={GEO.kirmizi} />
          </Svg>
        </IllustrationColumn>
        <IllustrationColumn label="konserve" width={72}>
          <Svg width={36} height={44} viewBox="0 0 36 44">
            <Rect x={4} y={8} width={28} height={32} fill={GEO.gri} rx={2} />
            <Ellipse cx={18} cy={8} rx={14} ry={5} fill={GEO.sari} />
          </Svg>
        </IllustrationColumn>
        <OkYatay />
        <IllustrationColumn label="silindir" width={72}>
          <Svg width={32} height={44} viewBox="0 0 32 44">
            <Rect x={4} y={10} width={24} height={30} fill={GEO.turuncu} rx={12} />
            <Ellipse cx={16} cy={10} rx={12} ry={5} fill={GEO.turuncu} />
          </Svg>
        </IllustrationColumn>
      </View>
      <View style={styles.satir}>
        <IllustrationColumn label="futbol topu" width={80}>
          <Svg width={36} height={36} viewBox="0 0 36 36">
            <Circle cx={18} cy={18} r={16} fill={GEO.beyaz} stroke={GEO.metin} strokeWidth={1.5} />
          </Svg>
        </IllustrationColumn>
        <OkYatay />
        <IllustrationColumn label="küre" width={64}>
          <Svg width={36} height={36} viewBox="0 0 36 36">
            <Circle cx={18} cy={18} r={16} fill={GEO.mavi} />
          </Svg>
        </IllustrationColumn>
      </View>
    </View>
  );
}

export function G2mAnlatim4() {
  const items = [
    {
      label: 'silindir kule',
      width: 80,
      gorsel: (
        <Svg width={36} height={56} viewBox="0 0 36 56">
          <Rect x={6} y={8} width={24} height={44} fill={GEO.mor} rx={12} />
        </Svg>
      ),
    },
    {
      label: 'dikdörtgen prizma bina',
      width: 110,
      gorsel: (
        <Svg width={56} height={56} viewBox="0 0 56 56">
          <Rect x={4} y={8} width={48} height={48} fill={GEO.mavi} />
        </Svg>
      ),
    },
    {
      label: 'üçgen prizma çatı',
      width: 100,
      gorsel: (
        <Svg width={52} height={52} viewBox="0 0 52 52">
          <Polygon points="26,6 46,24 6,24" fill={GEO.kirmizi} />
          <Rect x={6} y={24} width={40} height={24} fill={GEO.turuncu} />
        </Svg>
      ),
    },
    {
      label: 'küre kubbe',
      width: 72,
      gorsel: (
        <Svg width={48} height={48} viewBox="0 0 48 48">
          <Circle cx={24} cy={24} r={22} fill={GEO.sari} />
        </Svg>
      ),
    },
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
      <NesnelerIcon tip={nesne} size={ESLESTIRME_IKON_BOYUT} />
      <Svg width={gorselOlcekle(24)} height={gorselOlcekle(20)} viewBox="0 0 24 20">
        <Line x1={2} y1={10} x2={18} y2={10} stroke={GEO.metin} strokeWidth={2} />
        <Polygon points="18,10 14,6 14,14" fill={GEO.metin} />
      </Svg>
      <ModellerIcon tip={model} size={ESLESTIRME_IKON_BOYUT} />
    </View>
  );
}

const styles = StyleSheet.create({
  satir: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: 6,
    paddingVertical: 4,
  },
  grup: {
    gap: 12,
    alignItems: 'center',
  },
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
