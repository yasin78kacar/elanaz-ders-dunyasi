import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Path, Polygon, Rect } from 'react-native-svg';
import { GEO } from '../nesneler/colors';

export type KapTipi = 'bardak' | 'surahi' | 'sise' | 'kova' | 'bidon';

export const KAP_RENK: Record<KapTipi, string> = {
  bardak: GEO.mavi,
  surahi: GEO.turuncu,
  sise: GEO.yesil,
  kova: GEO.kirmizi,
  bidon: GEO.mor,
};

const BOYUT_CARPAN: Record<KapTipi, number> = {
  bardak: 0.55,
  surahi: 0.72,
  sise: 0.8,
  kova: 0.95,
  bidon: 1.1,
};

export interface KapOge {
  tip: KapTipi;
  /** 0–1 arası sıvı doluluk */
  doluluk?: number;
  buyuk?: boolean;
  kucuk?: boolean;
}

function olcek(kap: KapOge): number {
  let s = BOYUT_CARPAN[kap.tip];
  if (kap.buyuk) s *= 1.2;
  if (kap.kucuk) s *= 0.75;
  return s;
}

export function KapGovde({ tip, doluluk = 0.5, scale = 1 }: { tip: KapTipi; doluluk?: number; scale?: number }) {
  const renk = KAP_RENK[tip];
  const sivi = '#64B5F6';
  const w = 56 * scale;
  const h = 72 * scale;
  const d = Math.max(0, Math.min(1, doluluk));
  const siviY = h * (1 - d * 0.72) - 4;

  switch (tip) {
    case 'bardak':
      return (
        <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          <Path
            d={`M ${w * 0.22} ${h * 0.12} L ${w * 0.78} ${h * 0.12} L ${w * 0.7} ${h * 0.88} L ${w * 0.3} ${h * 0.88} Z`}
            fill={GEO.beyaz}
            stroke={renk}
            strokeWidth={2}
          />
          {d > 0 && (
            <Path
              d={`M ${w * 0.3} ${siviY} L ${w * 0.7} ${siviY} L ${w * 0.66} ${h * 0.84} L ${w * 0.34} ${h * 0.84} Z`}
              fill={sivi}
            />
          )}
        </Svg>
      );
    case 'surahi':
      return (
        <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          <Ellipse cx={w / 2} cy={h * 0.2} rx={w * 0.28} ry={h * 0.08} fill={GEO.beyaz} stroke={renk} strokeWidth={2} />
          <Path
            d={`M ${w * 0.22} ${h * 0.2} Q ${w * 0.22} ${h * 0.55} ${w * 0.28} ${h * 0.85} L ${w * 0.72} ${h * 0.85} Q ${w * 0.78} ${h * 0.55} ${w * 0.78} ${h * 0.2}`}
            fill={GEO.beyaz}
            stroke={renk}
            strokeWidth={2}
          />
          <Path d={`M ${w * 0.78} ${h * 0.28} Q ${w * 0.95} ${h * 0.35} ${w * 0.88} ${h * 0.45}`} fill="none" stroke={renk} strokeWidth={2} />
          {d > 0 && (
            <Path
              d={`M ${w * 0.3} ${siviY} Q ${w * 0.3} ${h * 0.7} ${w * 0.34} ${h * 0.82} L ${w * 0.66} ${h * 0.82} Q ${w * 0.7} ${h * 0.7} ${w * 0.7} ${siviY} Z`}
              fill={sivi}
            />
          )}
        </Svg>
      );
    case 'sise':
      return (
        <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          <Rect x={w * 0.38} y={h * 0.04} width={w * 0.24} height={h * 0.12} fill={renk} rx={2} />
          <Path
            d={`M ${w * 0.28} ${h * 0.16} L ${w * 0.72} ${h * 0.16} L ${w * 0.68} ${h * 0.88} L ${w * 0.32} ${h * 0.88} Z`}
            fill={GEO.beyaz}
            stroke={renk}
            strokeWidth={2}
          />
          {d > 0 && (
            <Path
              d={`M ${w * 0.34} ${siviY} L ${w * 0.66} ${siviY} L ${w * 0.62} ${h * 0.84} L ${w * 0.38} ${h * 0.84} Z`}
              fill={sivi}
            />
          )}
        </Svg>
      );
    case 'kova':
      return (
        <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          <Path d={`M ${w * 0.15} ${h * 0.22} Q ${w * 0.5} ${h * 0.1} ${w * 0.85} ${h * 0.22}`} fill="none" stroke={renk} strokeWidth={3} />
          <Path
            d={`M ${w * 0.18} ${h * 0.22} L ${w * 0.28} ${h * 0.88} L ${w * 0.72} ${h * 0.88} L ${w * 0.82} ${h * 0.22} Z`}
            fill={GEO.beyaz}
            stroke={renk}
            strokeWidth={2}
          />
          {d > 0 && (
            <Path
              d={`M ${w * 0.3} ${siviY} L ${w * 0.7} ${siviY} L ${w * 0.66} ${h * 0.84} L ${w * 0.34} ${h * 0.84} Z`}
              fill={sivi}
            />
          )}
        </Svg>
      );
    case 'bidon':
      return (
        <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          <Rect x={w * 0.2} y={h * 0.08} width={w * 0.6} height={h * 0.1} fill={renk} rx={3} />
          <Rect x={w * 0.15} y={h * 0.18} width={w * 0.7} height={h * 0.7} fill={GEO.beyaz} stroke={renk} strokeWidth={2} rx={6} />
          {d > 0 && (
            <Rect x={w * 0.2} y={siviY} width={w * 0.6} height={h * 0.84 - siviY} fill={sivi} rx={4} />
          )}
        </Svg>
      );
    default:
      return null;
  }
}

export function Kap({ kap }: { kap: KapOge }) {
  const scale = olcek(kap);
  return (
    <View style={styles.kapKutu}>
      <KapGovde tip={kap.tip} doluluk={kap.doluluk ?? 0.5} scale={scale} />
    </View>
  );
}

export function Karsilastir({ sol, sag }: { sol: KapOge; sag: KapOge }) {
  return (
    <View style={styles.yanYana}>
      <Kap kap={sol} />
      <Kap kap={sag} />
    </View>
  );
}

function MiniKap({ tip, doluluk = 1 }: { tip: KapTipi; doluluk?: number }) {
  return <KapGovde tip={tip} doluluk={doluluk} scale={0.42} />;
}

/** Tam adet kadar küçük kap çizer — sayılabilir. */
export function SayilabilirKaplar({
  tip,
  adet,
  gruplar,
  doluluk = 1,
}: {
  tip: KapTipi;
  adet: number;
  gruplar?: number[];
  doluluk?: number;
}) {
  if (gruplar) {
    return (
      <View style={styles.grupSatir}>
        {gruplar.map((n, gi) => (
          <View key={gi} style={styles.grup}>
            <View style={styles.miniSatir}>
              {Array.from({ length: n }).map((_, i) => (
                <View key={i} style={styles.mini}>
                  <MiniKap tip={tip} doluluk={doluluk} />
                </View>
              ))}
            </View>
            {gi < gruplar.length - 1 && <Text style={styles.ayrac}>|</Text>}
          </View>
        ))}
      </View>
    );
  }
  return (
    <View style={styles.miniSatir}>
      {Array.from({ length: adet }).map((_, i) => (
        <View key={i} style={styles.mini}>
          <MiniKap tip={tip} doluluk={doluluk} />
        </View>
      ))}
    </View>
  );
}

export function OkYatay() {
  return (
    <Svg width={32} height={24} viewBox="0 0 32 24">
      <Line x1={4} y1={12} x2={24} y2={12} stroke={GEO.metin} strokeWidth={2} />
      <Polygon points="24,12 18,8 18,16" fill={GEO.metin} />
    </Svg>
  );
}

export function Dokum({
  kaynak,
  hedefTip,
  hedefAdet,
  kaynakAdet = 1,
  hedefGruplar,
}: {
  kaynak: KapOge;
  hedefTip: KapTipi;
  hedefAdet: number;
  kaynakAdet?: number;
  hedefGruplar?: number[];
}) {
  return (
    <View style={styles.dokum}>
      <View style={styles.yanYana}>
        {Array.from({ length: kaynakAdet }).map((_, i) => (
          <Kap key={i} kap={{ ...kaynak, doluluk: 1 }} />
        ))}
      </View>
      <OkYatay />
      <SayilabilirKaplar tip={hedefTip} adet={hedefAdet} gruplar={hedefGruplar} doluluk={1} />
    </View>
  );
}

export function TahminGorsel({
  tahmin,
  gercek,
  tip = 'bardak',
  fazlaIsareti,
}: {
  tahmin: number;
  gercek: number;
  tip?: KapTipi;
  fazlaIsareti?: boolean;
}) {
  return (
    <View style={styles.tahminKutu}>
      <View style={styles.tahminBlok}>
        <Text style={styles.etiket}>Tahmin: {tahmin}</Text>
        <SayilabilirKaplar tip={tip} adet={tahmin} />
      </View>
      <View style={styles.tahminBlok}>
        <Text style={styles.etiket}>
          Gerçek: {gercek}
          {fazlaIsareti ? ' ✗ fazla' : ''}
        </Text>
        <SayilabilirKaplar tip={tip} adet={gercek} />
      </View>
    </View>
  );
}

export function SoruBalonu() {
  return (
    <View style={styles.balon}>
      <Text style={styles.balonMetin}>??</Text>
    </View>
  );
}

export function DortKapSira({ kaplar }: { kaplar: KapOge[] }) {
  return (
    <View style={styles.yanYana}>
      {kaplar.map((k, i) => (
        <Kap key={i} kap={k} />
      ))}
    </View>
  );
}

export function UcKapSira({ kaplar }: { kaplar: KapOge[] }) {
  return (
    <View style={styles.yanYana}>
      {kaplar.map((k, i) => (
        <Kap key={i} kap={k} />
      ))}
    </View>
  );
}

export function BesKapSira() {
  const sira: KapOge[] = [
    { tip: 'bardak', kucuk: true },
    { tip: 'surahi' },
    { tip: 'sise' },
    { tip: 'kova', buyuk: true },
    { tip: 'bidon', buyuk: true },
  ];
  const adlar = ['bardak', 'sürahi', 'şişe', 'kova', 'bidon'];
  return (
    <View style={styles.besKap}>
      {sira.map((k, i) => (
        <View key={i} style={styles.etiketliKap}>
          <Kap kap={k} />
          <Text style={styles.kapAdi}>{adlar[i]}</Text>
        </View>
      ))}
    </View>
  );
}

export function TasmaGorsel() {
  return (
    <View style={styles.yanYana}>
      <Kap kap={{ tip: 'kova', buyuk: true, doluluk: 1 }} />
      <OkYatay />
      <View>
        <Kap kap={{ tip: 'bardak', kucuk: true, doluluk: 1 }} />
        <Svg width={48} height={24} viewBox="0 0 48 24">
          <Path d="M 24 4 Q 30 16 36 20" fill="none" stroke={GEO.mavi} strokeWidth={3} />
          <Circle cx={36} cy={20} r={3} fill={GEO.mavi} />
        </Svg>
        <Text style={styles.tasmaEtiket}>taşar!</Text>
      </View>
    </View>
  );
}

export function SurahiBardakToplam({
  surahiAdet,
  bardakPerSurahi,
}: {
  surahiAdet: number;
  bardakPerSurahi: number;
}) {
  return (
    <View style={styles.dokum}>
      <View style={styles.yanYana}>
        {Array.from({ length: surahiAdet }).map((_, i) => (
          <View key={i} style={styles.surahiGrup}>
            <Kap kap={{ tip: 'surahi', doluluk: 1 }} />
            <SayilabilirKaplar tip="bardak" adet={bardakPerSurahi} doluluk={1} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kapKutu: { alignItems: 'center' },
  yanYana: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: 12,
    paddingVertical: 4,
  },
  miniSatir: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
    maxWidth: 280,
  },
  mini: { margin: 1 },
  grupSatir: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
  grup: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ayrac: { fontSize: 20, fontWeight: '700', color: GEO.metin, marginHorizontal: 4 },
  dokum: { alignItems: 'center', gap: 8 },
  tahminKutu: { gap: 12, alignItems: 'center' },
  tahminBlok: { alignItems: 'center', gap: 4 },
  etiket: { fontSize: 12, fontWeight: '700', color: GEO.metin },
  balon: {
    backgroundColor: GEO.sari,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 2,
    borderColor: GEO.turuncu,
  },
  balonMetin: { fontSize: 18, fontWeight: '800', color: GEO.metin },
  besKap: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6 },
  etiketliKap: { alignItems: 'center', width: 64 },
  kapAdi: { fontSize: 9, fontWeight: '600', color: GEO.metin, marginTop: 2, textAlign: 'center' },
  tasmaEtiket: { fontSize: 11, fontWeight: '700', color: GEO.mavi, textAlign: 'center' },
  surahiGrup: { alignItems: 'center', gap: 4 },
});
