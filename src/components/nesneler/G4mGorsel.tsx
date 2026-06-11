import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Path, Polygon, Rect } from 'react-native-svg';
import { GEO } from './colors';
import { G4mAnlatim1, G4mAnlatim2, G4mAnlatim3, G4mAnlatim4 } from './G4mAnlatim';
import { ModellerIcon } from './ModellerIcon';
import { NesnelerIcon } from './NesnelerIcon';
import { SekillerIcon } from './SekillerIcon';
import { YanYanaIki } from './G2mAnlatim';

function KoseNoktalari({ pts }: { pts: [number, number][] }) {
  return (
    <>
      {pts.map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={5} fill={GEO.kirmizi} />
      ))}
    </>
  );
}

function TekNesne({ tip }: { tip: Parameters<typeof NesnelerIcon>[0]['tip'] }) {
  return (
    <View style={styles.kutu}>
      <NesnelerIcon tip={tip} size={88} />
    </View>
  );
}

function TekModel({ tip }: { tip: Parameters<typeof ModellerIcon>[0]['tip'] }) {
  return (
    <View style={styles.kutu}>
      <ModellerIcon tip={tip} size={88} />
    </View>
  );
}

function TekSekil({ tip }: { tip: Parameters<typeof SekillerIcon>[0]['tip'] }) {
  return (
    <View style={styles.kutu}>
      <SekillerIcon tip={tip} size={88} />
    </View>
  );
}

function UcgenKoseler() {
  return (
    <Svg width={120} height={100} viewBox="0 0 120 100">
      <Polygon points="60,12 108,88 12,88" fill={GEO.yesil} />
      <KoseNoktalari pts={[[60, 12], [108, 88], [12, 88]]} />
    </Svg>
  );
}

function KareKenarlar() {
  const renkler = [GEO.kirmizi, GEO.mavi, GEO.turuncu, GEO.mor];
  const pts: [number, number][] = [
    [20, 20],
    [100, 20],
    [100, 80],
    [20, 80],
  ];
  return (
    <Svg width={120} height={100} viewBox="0 0 120 100">
      {pts.map(([x1, y1], i) => {
        const [x2, y2] = pts[(i + 1) % 4];
        return <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={renkler[i]} strokeWidth={5} />;
      })}
    </Svg>
  );
}

function DikdortgenKoseler() {
  return (
    <Svg width={120} height={90} viewBox="0 0 120 90">
      <Rect x={18} y={18} width={84} height={54} fill={GEO.mavi} opacity={0.35} />
      <KoseNoktalari pts={[[18, 18], [102, 18], [102, 72], [18, 72]]} />
    </Svg>
  );
}

function UcgenKenarlar() {
  const pts: [number, number][] = [
    [60, 14],
    [108, 86],
    [12, 86],
  ];
  const renkler = [GEO.kirmizi, GEO.mavi, GEO.turuncu];
  return (
    <Svg width={120} height={100} viewBox="0 0 120 100">
      <Polygon points="60,14 108,86 12,86" fill="none" />
      {pts.map(([x1, y1], i) => {
        const [x2, y2] = pts[(i + 1) % 3];
        return <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={renkler[i]} strokeWidth={5} />;
      })}
    </Svg>
  );
}

function KupKoseler() {
  return (
    <View style={styles.kutu}>
      <Svg width={100} height={90} viewBox="0 0 100 90">
        <Polygon points="20,30 55,15 90,30 55,45" fill={GEO.kirmizi} opacity={0.75} />
        <Polygon points="20,30 55,45 55,75 20,60" fill={GEO.kirmizi} />
        <Polygon points="55,45 90,30 90,60 55,75" fill={GEO.kirmizi} opacity={0.9} />
        <KoseNoktalari pts={[[20, 30], [55, 15], [90, 30], [55, 45], [20, 60], [55, 75], [90, 60]]} />
      </Svg>
    </View>
  );
}

function DavulUstten() {
  return (
    <Svg width={110} height={100} viewBox="0 0 110 100">
      <Ellipse cx={55} cy={50} rx={42} ry={38} fill={GEO.kirmizi} stroke={GEO.metin} strokeWidth={2} />
      <Circle cx={55} cy={50} r={14} fill={GEO.sari} />
      <Ellipse cx={55} cy={50} rx={42} ry={38} fill="none" stroke={GEO.turuncu} strokeWidth={3} strokeDasharray="6 4" />
    </Svg>
  );
}

function KonserveUst() {
  return (
    <Svg width={90} height={110} viewBox="0 0 90 110">
      <Rect x={22} y={28} width={46} height={58} fill={GEO.gri} rx={2} />
      <Ellipse cx={45} cy={28} rx={23} ry={8} fill={GEO.sari} stroke={GEO.turuncu} strokeWidth={2} />
      <Ellipse cx={45} cy={86} rx={23} ry={8} fill={GEO.sari} stroke={GEO.turuncu} strokeWidth={2} />
    </Svg>
  );
}

function TopYokus() {
  return (
    <Svg width={140} height={90} viewBox="0 0 140 90">
      <Path d="M 10 70 Q 70 10 130 70" fill="none" stroke={GEO.yesil} strokeWidth={3} />
      <Circle cx={95} cy={42} r={16} fill={GEO.kirmizi} />
      <Path d="M 95 58 L 110 72" stroke={GEO.metin} strokeWidth={2} markerEnd="url(#ok)" />
    </Svg>
  );
}

function TopBuyutec() {
  return (
    <View style={styles.satir}>
      <NesnelerIcon tip="top" size={72} />
      <Svg width={56} height={56} viewBox="0 0 56 56">
        <Circle cx={22} cy={22} r={14} fill="none" stroke={GEO.mavi} strokeWidth={3} />
        <Line x1={32} y1={32} x2={50} y2={50} stroke={GEO.mavi} strokeWidth={4} />
      </Svg>
    </View>
  );
}

function TopKonumlar() {
  return (
    <View style={styles.satir}>
      <NesnelerIcon tip="top" size={48} />
      <NesnelerIcon tip="top" size={48} />
      <NesnelerIcon tip="top" size={48} />
    </View>
  );
}

function ZarDuzTers() {
  return (
    <View style={styles.satir}>
      <Svg width={72} height={72} viewBox="0 0 72 72">
        <Rect x={12} y={12} width={48} height={48} fill={GEO.kirmizi} rx={4} />
        <KoseNoktalari pts={[[12, 12], [60, 12], [60, 60], [12, 60]]} />
      </Svg>
      <Svg width={72} height={72} viewBox="0 0 72 72">
        <Polygon points="36,14 62,36 36,58 10,36" fill={GEO.mavi} />
        <KoseNoktalari pts={[[36, 14], [62, 36], [36, 58], [10, 36]]} />
      </Svg>
    </View>
  );
}

function KutuTers() {
  return (
    <View style={styles.satir}>
      <Svg width={72} height={64} viewBox="0 0 72 64">
        <Rect x={14} y={12} width={44} height={40} fill={GEO.turuncu} rx={3} />
        <KoseNoktalari pts={[[14, 12], [58, 12], [58, 52], [14, 52]]} />
      </Svg>
      <Svg width={72} height={64} viewBox="0 0 72 64">
        <Polygon points="36,10 62,32 36,54 10,32" fill={GEO.mor} />
        <KoseNoktalari pts={[[36, 10], [62, 32], [36, 54], [10, 32]]} />
      </Svg>
    </View>
  );
}

function KareKagit() {
  return (
    <View style={styles.satir}>
      <Svg width={70} height={80} viewBox="0 0 70 80">
        <Rect x={8} y={8} width={54} height={64} fill={GEO.beyaz} stroke={GEO.gri} strokeWidth={1.5} />
        <Rect x={20} y={24} width={30} height={30} fill={GEO.kirmizi} />
      </Svg>
      <Svg width={70} height={80} viewBox="0 0 70 80">
        <Polygon points="35,72 62,40 35,8 8,40" fill={GEO.beyaz} stroke={GEO.gri} strokeWidth={1.5} />
        <Polygon points="35,58 48,40 35,22 22,40" fill={GEO.kirmizi} />
      </Svg>
    </View>
  );
}

function DevKupZar() {
  return (
    <View style={styles.satir}>
      <ModellerIcon tip="kup" size={96} />
      <NesnelerIcon tip="zar" size={40} />
    </View>
  );
}

function MisketCep() {
  return (
    <View style={styles.satir}>
      <NesnelerIcon tip="misket" size={56} />
      <Svg width={64} height={72} viewBox="0 0 64 72">
        <Path d="M 12 16 Q 32 4 52 16 L 56 56 Q 32 68 8 56 Z" fill={GEO.mavi} />
        <Circle cx={32} cy={38} r={10} fill={GEO.gri} />
      </Svg>
    </View>
  );
}

function KareBuyukKucuk() {
  return (
    <View style={styles.satir}>
      <SekillerIcon tip="kare" size={72} />
      <SekillerIcon tip="kare" size={40} />
    </View>
  );
}

/** g4m- önekli sahne anahtarları */
export function G4mGorsel({ sahne }: { sahne: string }) {
  const key = sahne.startsWith('g4m-') ? sahne.slice(4) : sahne;

  switch (key) {
    case 'anlatim-1':
      return <G4mAnlatim1 />;
    case 'anlatim-2':
      return <G4mAnlatim2 />;
    case 'anlatim-3':
      return <G4mAnlatim3 />;
    case 'anlatim-4':
      return <G4mAnlatim4 />;
    case 'davul':
      return <TekNesne tip="davul" />;
    case 'zil':
      return <TekNesne tip="zil" />;
    case 'top':
      return <TekNesne tip="top" />;
    case 'hediye-kutu':
      return <TekNesne tip="hediye-kup-kutu" />;
    case 'top-kucuk-buyuk':
      return (
        <View style={styles.satir}>
          <NesnelerIcon tip="top" size={48} />
          <NesnelerIcon tip="top" size={88} />
        </View>
      );
    case 'zar-duz-ters':
      return <ZarDuzTers />;
    case 'silindir':
      return <TekModel tip="silindir" />;
    case 'kure':
      return <TekModel tip="kure" />;
    case 'kup-koseler':
      return <KupKoseler />;
    case 'karpuz-misket':
      return <YanYanaIki sol="nesne" sag="nesne" solTip="karpuz" sagTip="misket" />;
    case 'ucgen-koseler':
      return <UcgenKoseler />;
    case 'kare-kenarlar':
      return <KareKenarlar />;
    case 'daire':
      return <TekSekil tip="daire" />;
    case 'davul-ustten':
      return <DavulUstten />;
    case 'dikdortgen-koseler':
      return <DikdortgenKoseler />;
    case 'kitap-canta':
      return (
        <View style={styles.satir}>
          <NesnelerIcon tip="kitap" size={72} />
          <NesnelerIcon tip="canta" size={72} />
        </View>
      );
    case 'konserve':
      return <TekNesne tip="konserve" />;
    case 'konserve-ust':
      return <KonserveUst />;
    case 'ucgen-kenarlar':
      return <UcgenKenarlar />;
    case 'kare-cember':
      return (
        <View style={styles.satir}>
          <SekillerIcon tip="kare" size={72} />
          <SekillerIcon tip="cember" size={72} />
        </View>
      );
    case 'sut-kutusu':
      return <TekNesne tip="sut-kutusu" />;
    case 'top-yokus':
      return <TopYokus />;
    case 'zeka-kupu':
      return <TekNesne tip="zeka-kupu" />;
    case 'kare-esit':
      return <KareKenarlar />;
    case 'cadir':
      return <TekNesne tip="cadir" />;
    case 'kare-buyuk-kucuk':
      return <KareBuyukKucuk />;
    case 'top-buyutec':
      return <TopBuyutec />;
    case 'kare-dikdortgen':
      return (
        <View style={styles.satir}>
          <SekillerIcon tip="kare" size={72} />
          <SekillerIcon tip="dikdortgen" size={72} />
        </View>
      );
    case 'dev-kup-zar':
      return <DevKupZar />;
    case 'davul-pil':
      return <YanYanaIki sol="nesne" sag="nesne" solTip="davul" sagTip="pil" />;
    case 'top-konumlar':
      return <TopKonumlar />;
    case 'misket-cep':
      return <MisketCep />;
    case 'top-degisim':
      return (
        <View style={styles.satir}>
          <NesnelerIcon tip="top" size={48} />
          <Text style={styles.okMetin}>→</Text>
          <NesnelerIcon tip="futbol-topu" size={88} />
        </View>
      );
    case 'kutu-ters':
      return <KutuTers />;
    case 'kare-kagit':
      return <KareKagit />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  kutu: { alignItems: 'center', paddingVertical: 8 },
  satir: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 8,
    flexWrap: 'wrap',
  },
  okMetin: { fontSize: 28, fontWeight: '700', color: GEO.metin },
});
