import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Ellipse, Path, Text as SvgText } from 'react-native-svg';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselFen } from '../../types/content';

type Props = GorselFen;

const NESNE: Record<string, { emoji: string; etiket: string; canli?: boolean }> = {
  kedi: { emoji: '🐱', etiket: 'Kedi', canli: true },
  kus: { emoji: '🐦', etiket: 'Kuş', canli: true },
  balik: { emoji: '🐟', etiket: 'Balık', canli: true },
  agac: { emoji: '🌳', etiket: 'Ağaç', canli: true },
  cicek: { emoji: '🌸', etiket: 'Çiçek', canli: true },
  kelebek: { emoji: '🦋', etiket: 'Kelebek', canli: true },
  insan: { emoji: '👧', etiket: 'İnsan', canli: true },
  kopek: { emoji: '🐶', etiket: 'Köpek', canli: true },
  inek: { emoji: '🐄', etiket: 'İnek', canli: true },
  ordek: { emoji: '🦆', etiket: 'Ördek', canli: true },
  ari: { emoji: '🐝', etiket: 'Arı', canli: true },
  kurbağa: { emoji: '🐸', etiket: 'Kurbağa', canli: true },
  kaya: { emoji: '🪨', etiket: 'Kaya', canli: false },
  kitap: { emoji: '📚', etiket: 'Kitap', canli: false },
  kalem: { emoji: '✏️', etiket: 'Kalem', canli: false },
  masa: { emoji: '🪑', etiket: 'Masa', canli: false },
  tas: { emoji: '🪨', etiket: 'Taş', canli: false },
  araba: { emoji: '🚗', etiket: 'Araba', canli: false },
  top: { emoji: '⚽', etiket: 'Top', canli: false },
  gunes: { emoji: '☀️', etiket: 'Güneş', canli: false },
  su: { emoji: '💧', etiket: 'Su', canli: false },
  toprak: { emoji: '🟤', etiket: 'Toprak', canli: false },
  sebze: { emoji: '🥕', etiket: 'Sebze', canli: true },
  meyve: { emoji: '🍎', etiket: 'Meyve', canli: true },
  yilan: { emoji: '🐍', etiket: 'Yılan', canli: true },
  kaplumbaga: { emoji: '🐢', etiket: 'Kaplumbağa', canli: true },
  default: { emoji: '🔬', etiket: 'Fen', canli: true },
};

const CANLI_RENK = GEO.yesil + '55';
const CANSIZ_RENK = '#B0BEC555';
const VURGU_RENK = GEO.turuncu + '88';

function nesneBilgi(anahtar?: string) {
  const k = (anahtar ?? 'default').toLowerCase();
  return NESNE[k] ?? NESNE.default;
}

function NesneKart({ anahtar, vurgulu }: { anahtar: string; vurgulu?: boolean }) {
  const n = nesneBilgi(anahtar);
  const arka = vurgulu ? VURGU_RENK : n.canli ? CANLI_RENK : CANSIZ_RENK;
  return (
    <View style={[styles.kart, { backgroundColor: arka, borderColor: vurgulu ? GEO.turuncu : colors.kenarlik }]}>
      <GuvenliMetin style={styles.emoji} tamGenislik={false}>
        {n.emoji}
      </GuvenliMetin>
      <GuvenliMetin style={styles.etiket} tamGenislik>
        {n.etiket}
      </GuvenliMetin>
      {n.canli !== undefined && (
        <GuvenliMetin style={[styles.durum, { color: n.canli ? GEO.yesil : GEO.kahve }]} tamGenislik>
          {n.canli ? 'Canlı' : 'Cansız'}
        </GuvenliMetin>
      )}
    </View>
  );
}

function GrupGorsel({ nesneler, vurgu }: { nesneler?: string[]; vurgu?: Props['vurgu'] }) {
  const vurgular = Array.isArray(vurgu) ? vurgu : vurgu ? [vurgu] : [];
  return (
    <View style={styles.grup}>
      {(nesneler ?? []).map((n) => (
        <NesneKart key={n} anahtar={n} vurgulu={vurgular.includes(n)} />
      ))}
    </View>
  );
}

function BitkiDiyagram({ vurgu }: { vurgu?: Props['vurgu'] }) {
  const parcalar = ['kök', 'gövde', 'yaprak', 'çiçek', 'meyve'];
  const v = typeof vurgu === 'string' ? vurgu : Array.isArray(vurgu) ? vurgu[0] : undefined;
  const w = 180;
  const h = 220;
  const cx = w / 2;
  const vurguRenk = (p: string) => (v === p ? GEO.turuncu : GEO.yesil);

  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Ellipse cx={cx} cy={h - 18} rx={50} ry={12} fill="#8D6E63" />
        <Path d={`M ${cx} ${h - 28} L ${cx} 90`} stroke={vurguRenk('gövde')} strokeWidth={8} strokeLinecap="round" />
        <Path d={`M ${cx} ${h - 20} Q ${cx - 35} ${h - 5} ${cx - 45} ${h - 30}`} stroke={vurguRenk('kök')} strokeWidth={4} fill="none" />
        <Path d={`M ${cx} ${h - 20} Q ${cx + 35} ${h - 5} ${cx + 45} ${h - 30}`} stroke={vurguRenk('kök')} strokeWidth={4} fill="none" />
        <Ellipse cx={cx - 40} cy={110} rx={22} ry={12} fill={vurguRenk('yaprak')} transform={`rotate(-30 ${cx - 40} 110)`} />
        <Ellipse cx={cx + 40} cy={100} rx={22} ry={12} fill={vurguRenk('yaprak')} transform={`rotate(30 ${cx + 40} 100)`} />
        <Circle cx={cx} cy={72} r={14} fill={vurguRenk('çiçek')} />
        <Circle cx={cx} cy={52} r={10} fill={vurguRenk('meyve')} />
        {parcalar.map((p, i) => (
          <SvgText key={p} x={8} y={20 + i * 18} fontSize={11} fill={v === p ? GEO.turuncu : GEO.metin} fontWeight={v === p ? 'bold' : 'normal'}>
            {p}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
}

function HayvanGorsel({ nesne, ozellik }: { nesne?: string; ozellik?: string }) {
  const n = nesneBilgi(nesne);
  const ozellikMetin: Record<string, string> = {
    tuy: 'Tüy örtüsü',
    pul: 'Pul örtüsü',
    deri: 'Deri örtüsü',
    kara: 'Kara habitatı',
    su: 'Su habitatı',
    hava: 'Hava habitatı',
    yurur: 'Yürür',
    ucar: 'Uçar',
    yuzer: 'Yüzer',
    surunur: 'Sürünür',
    memeli: 'Memeli',
    kus: 'Kuş',
    balik: 'Balık',
    bocek: 'Böcek',
  };
  return (
    <View style={styles.hayvan}>
      <GuvenliMetin style={styles.hayvanEmoji} tamGenislik={false}>
        {n.emoji}
      </GuvenliMetin>
      <GuvenliMetin style={styles.hayvanEtiket} tamGenislik>
        {n.etiket}
      </GuvenliMetin>
      {ozellik && (
        <View style={styles.ozellikKutu}>
          <GuvenliMetin style={styles.ozellikMetin} tamGenislik>
            {ozellikMetin[ozellik] ?? ozellik}
          </GuvenliMetin>
        </View>
      )}
    </View>
  );
}

function OzellikListesi({ baslik, maddeler }: { baslik: string; maddeler: string[] }) {
  return (
    <View style={styles.liste}>
      <GuvenliMetin style={styles.listeBaslik} tamGenislik>
        {baslik}
      </GuvenliMetin>
      {maddeler.map((m) => (
        <View key={m} style={styles.listeMadde}>
          <GuvenliMetin style={styles.listeMetin} tamGenislik>
            {`• ${m}`}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'cc-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="kedi" />
          <NesneKart anahtar="kaya" />
        </View>
      );
    case 'cc-anlatim-2':
      return (
        <OzellikListesi
          baslik="Canlıların Özellikleri"
          maddeler={['Büyür', 'Beslenir', 'Solur', 'Ürer', 'Hareket eder', 'Tepki verir', 'Ölür']}
        />
      );
    case 'cc-anlatim-3':
      return <GrupGorsel nesneler={['agac', 'kedi', 'kitap', 'tas', 'kus', 'masa']} vurgu={['agac', 'kedi', 'kus']} />;
    case 'bt-anlatim-1':
      return <BitkiDiyagram />;
    case 'bt-anlatim-2':
      return (
        <GrupGorsel nesneler={['su', 'gunes', 'toprak', 'cicek']} vurgu={['su', 'gunes', 'toprak']} />
      );
    case 'bt-anlatim-3':
      return <GrupGorsel nesneler={['agac', 'cicek', 'sebze']} />;
    case 'hv-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <HayvanGorsel nesne="kedi" ozellik="memeli" />
          <HayvanGorsel nesne="kus" ozellik="kus" />
          <HayvanGorsel nesne="balik" ozellik="balik" />
        </View>
      );
    case 'hv-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <HayvanGorsel nesne="kedi" ozellik="kara" />
          <HayvanGorsel nesne="balik" ozellik="su" />
          <HayvanGorsel nesne="kus" ozellik="hava" />
        </View>
      );
    case 'hv-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <HayvanGorsel nesne="kus" ozellik="tuy" />
          <HayvanGorsel nesne="balik" ozellik="pul" />
          <HayvanGorsel nesne="kedi" ozellik="deri" />
        </View>
      );
    default:
      return <NesneKart anahtar={sahne || 'default'} />;
  }
}

export function FenGorsel(props: Props) {
  const { mod, sahne, nesne, nesneler, vurgu, ozellik } = props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'grup') return <GrupGorsel nesneler={nesneler} vurgu={vurgu} />;
  if (mod === 'bitki') return <BitkiDiyagram vurgu={vurgu} />;
  if (mod === 'hayvan') return <HayvanGorsel nesne={nesne ?? sahne} ozellik={ozellik} />;
  if (mod === 'nesne') return <NesneKart anahtar={nesne ?? sahne ?? 'default'} vurgulu={!!vurgu} />;
  return <NesneKart anahtar={nesne ?? sahne ?? 'default'} />;
}

const styles = StyleSheet.create({
  ortala: { alignItems: 'center' },
  kart: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    alignItems: 'center',
    minWidth: 80,
    margin: 4,
  },
  emoji: { fontSize: 40 },
  etiket: { fontSize: 12, fontWeight: '700', color: GEO.metin, marginTop: 4 },
  durum: { fontSize: 10, fontWeight: '600', marginTop: 2 },
  grup: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  karsSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8 },
  hayvan: { alignItems: 'center', padding: 8 },
  hayvanEmoji: { fontSize: 44 },
  hayvanEtiket: { fontSize: 13, fontWeight: '700', color: GEO.metin },
  ozellikKutu: {
    marginTop: 6,
    backgroundColor: colors.birincilAcik,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  ozellikMetin: { fontSize: 11, fontWeight: '600', color: GEO.metin },
  liste: { padding: 8, gap: 4 },
  listeBaslik: { fontSize: 14, fontWeight: '700', color: GEO.metin, marginBottom: 6, textAlign: 'center' },
  listeMadde: { backgroundColor: CANLI_RENK, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  listeMetin: { fontSize: 12, fontWeight: '600', color: GEO.metin },
});
