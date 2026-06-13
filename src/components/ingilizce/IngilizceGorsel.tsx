import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Rect, Text as SvgText } from 'react-native-svg';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselIngilizce } from '../../types/content';

type Props = GorselIngilizce;

const RENKLER: Record<string, string> = {
  red: '#E53935',
  blue: '#1E88E5',
  yellow: '#FDD835',
  green: '#43A047',
  orange: '#FB8C00',
  pink: '#EC407A',
  purple: '#8E24AA',
  black: '#212121',
  white: '#FAFAFA',
  brown: '#6D4C41',
};

const NESNE: Record<string, { emoji: string; etiket: string; ing?: string; renk?: string }> = {
  'kirmizi-elma': { emoji: '🍎', etiket: 'Elma', ing: 'Red', renk: 'red' },
  'mavi-gokyuzu': { emoji: '🌤️', etiket: 'Gökyüzü', ing: 'Blue', renk: 'blue' },
  'sari-gunes': { emoji: '☀️', etiket: 'Güneş', ing: 'Yellow', renk: 'yellow' },
  'yesil-yaprak': { emoji: '🍃', etiket: 'Yaprak', ing: 'Green', renk: 'green' },
  'turuncu-portakal': { emoji: '🍊', etiket: 'Portakal', ing: 'Orange', renk: 'orange' },
  'pembe-pamuk-seker': { emoji: '🍬', etiket: 'Pamuk Şeker', ing: 'Pink', renk: 'pink' },
  'mor-uzum': { emoji: '🍇', etiket: 'Üzüm', ing: 'Purple', renk: 'purple' },
  'siyah-kedi': { emoji: '🐱', etiket: 'Kedi', ing: 'Black', renk: 'black' },
  'beyaz-kar': { emoji: '❄️', etiket: 'Kar', ing: 'White', renk: 'white' },
  'kahverengi-ayi': { emoji: '🐻', etiket: 'Ayı', ing: 'Brown', renk: 'brown' },
  'boya-kalemleri': { emoji: '🖍️', etiket: 'Boya Kalemleri', ing: 'Colors' },
  'kirmizi-gul': { emoji: '🌹', etiket: 'Gül', ing: 'Red', renk: 'red' },
  'sari-limon': { emoji: '🍋', etiket: 'Limon', ing: 'Yellow', renk: 'yellow' },
  'mavi-deniz': { emoji: '🌊', etiket: 'Deniz', ing: 'Blue', renk: 'blue' },
  'alfabe-tablosu': { emoji: '🔤', etiket: 'Alphabet', ing: 'Alphabet' },
  'pembe-cicek': { emoji: '🌸', etiket: 'Çiçek', ing: 'Pink', renk: 'pink' },
  'yesil-kurbaga': { emoji: '🐸', etiket: 'Kurbağa', ing: 'Green', renk: 'green' },
  'siyah-sapka': { emoji: '🎩', etiket: 'Şapka', ing: 'Black', renk: 'black' },
  'beyaz-bulut': { emoji: '☁️', etiket: 'Bulut', ing: 'White', renk: 'white' },
  'mor-balon': { emoji: '🎈', etiket: 'Balon', ing: 'Purple', renk: 'purple' },
  'turuncu-top': { emoji: '🟠', etiket: 'Top', ing: 'Orange', renk: 'orange' },
  'kahverengi-agac': { emoji: '🌳', etiket: 'Ağaç', ing: 'Brown', renk: 'brown' },
  'yesil-orman': { emoji: '🌲', etiket: 'Orman', ing: 'Green', renk: 'green' },
  'turuncu-basketbol': { emoji: '🏀', etiket: 'Basketbol', ing: 'Orange', renk: 'orange' },
  'pembe-ucurtma': { emoji: '🪁', etiket: 'Uçurtma', ing: 'Pink', renk: 'pink' },
  'beyaz-tavsan': { emoji: '🐰', etiket: 'Tavşan', ing: 'White', renk: 'white' },
  'mor-uzum-salkimi': { emoji: '🍇', etiket: 'Üzüm', ing: 'Purple', renk: 'purple' },
  'kahverengi-cikolata': { emoji: '🍫', etiket: 'Çikolata', ing: 'Brown', renk: 'brown' },
  'alfabe-kupleri': { emoji: '🧱', etiket: 'ABC', ing: 'A' },
  'renkli-boya-kutusu': { emoji: '🎨', etiket: 'Boya Kutusu', ing: 'Colors' },
  'abc-harfleri': { emoji: '🔤', etiket: 'A B C', ing: 'Bi' },
  'yesil-kirmizi-elma': { emoji: '🍎', etiket: 'Elmalar', ing: 'Green & Red' },
  'mavi-araba': { emoji: '🚗', etiket: 'Araba', ing: 'Blue car', renk: 'blue' },
  'sari-civciv': { emoji: '🐤', etiket: 'Civciv', ing: 'Yellow', renk: 'yellow' },
  'piyano-tuslari': { emoji: '🎹', etiket: 'Piyano', ing: 'Black & White' },
  'portakal-resmi': { emoji: '🍊', etiket: 'Portakal', ing: 'Orange', renk: 'orange' },
  'renk-paleti': { emoji: '🎨', etiket: 'Renk Paleti', ing: 'Colors' },
  'kahverengi-at': { emoji: '🐴', etiket: 'At', ing: 'Brown', renk: 'brown' },
  'ingilizce-tahta': { emoji: '📋', etiket: 'Tahta', ing: 'Ey, Bi, Si' },
  'mor-menekse': { emoji: '💜', etiket: 'Menekşe', ing: 'Purple', renk: 'purple' },
  'sari-mavi-forma': { emoji: '👕', etiket: 'Forma', ing: 'Yellow & Blue' },
  'mavi-gokyuzu-bulut': { emoji: '🌤️', etiket: 'Gökyüzü', ing: 'Blue & White' },
  gokkusagi: { emoji: '🌈', etiket: 'Gökkuşağı', ing: 'Rainbow' },
  default: { emoji: '🇬🇧', etiket: 'English' },
};

function nesneBilgi(anahtar?: string) {
  const k = anahtar ?? 'default';
  return NESNE[k] ?? NESNE.default;
}

function RenkNokta({ renk }: { renk: string }) {
  const fill = RENKLER[renk] ?? GEO.mavi;
  return <Circle cx={12} cy={12} r={10} fill={fill} stroke={colors.kenarlik} strokeWidth={1} />;
}

function NesneKart({ anahtar, vurgulu }: { anahtar: string; vurgulu?: boolean }) {
  const n = nesneBilgi(anahtar);
  const arka = vurgulu ? GEO.turuncu + '44' : colors.kart;
  return (
    <View style={[styles.kart, { backgroundColor: arka, borderColor: vurgulu ? GEO.turuncu : colors.kenarlik }]}>
      {n.renk && (
        <View style={styles.renkNokta}>
          <Svg width={24} height={24}>
            <RenkNokta renk={n.renk} />
          </Svg>
        </View>
      )}
      <GuvenliMetin style={styles.emoji} tamGenislik={false}>
        {n.emoji}
      </GuvenliMetin>
      {n.ing && (
        <GuvenliMetin style={styles.ing} tamGenislik>
          {n.ing}
        </GuvenliMetin>
      )}
      <GuvenliMetin style={styles.etiket} tamGenislik>
        {n.etiket}
      </GuvenliMetin>
    </View>
  );
}

function HarfBlok({ harf, renk }: { harf: string; renk?: string }) {
  const fill = renk ? (RENKLER[renk] ?? GEO.mavi) : GEO.mavi;
  const w = 72;
  const h = 80;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={4} y={4} width={64} height={72} rx={10} fill={fill} stroke={colors.kenarlik} strokeWidth={2} />
        <SvgText x={36} y={52} fontSize={36} fill={renk === 'white' || renk === 'yellow' ? GEO.metin : '#FFF'} fontWeight="bold" textAnchor="middle">
          {harf}
        </SvgText>
      </Svg>
    </View>
  );
}

function AlfabeSahne() {
  const harfler = ['A', 'B', 'C', 'D', 'E', 'F'];
  const renkler = ['red', 'blue', 'yellow', 'green', 'orange', 'pink'];
  return (
    <View style={styles.harfSatir}>
      {harfler.map((h, i) => (
        <HarfBlok key={h} harf={h} renk={renkler[i]} />
      ))}
    </View>
  );
}

function BoyaKutusuSahne() {
  const renkList = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'purple', 'black', 'white', 'brown'];
  return (
    <View style={styles.renkSatir}>
      {renkList.map((r) => (
        <Svg key={r} width={28} height={28}>
          <RenkNokta renk={r} />
        </Svg>
      ))}
    </View>
  );
}

function RenkliHarfSahne() {
  return (
    <View style={styles.harfSatir}>
      <HarfBlok harf="A" renk="red" />
      <HarfBlok harf="B" renk="blue" />
      <HarfBlok harf="C" renk="yellow" />
    </View>
  );
}

function GokkusagiGorsel() {
  const w = 200;
  const h = 100;
  const cx = w / 2;
  const renkler = ['#E53935', '#FB8C00', '#FDD835', '#43A047', '#1E88E5', '#8E24AA'];
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {renkler.map((c, i) => (
          <Path
            key={c}
            d={`M ${20 + i * 4} ${h - 10} A ${80 - i * 8} ${80 - i * 8} 0 0 1 ${w - 20 - i * 4} ${h - 10}`}
            stroke={c}
            strokeWidth={6}
            fill="none"
          />
        ))}
        <SvgText x={cx} y={h - 2} fontSize={11} fill={GEO.metin} textAnchor="middle">
          Rainbow
        </SvgText>
      </Svg>
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

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'ac-anlatim-1':
      return <AlfabeSahne />;
    case 'ac-anlatim-2':
      return <BoyaKutusuSahne />;
    case 'ac-anlatim-3':
      return <RenkliHarfSahne />;
    default:
      return <NesneKart anahtar={sahne || 'default'} />;
  }
}

export function IngilizceGorsel(props: Props) {
  const { mod, sahne, nesne: nesneKey, nesneler, vurgu, renk } = props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'grup') return <GrupGorsel nesneler={nesneler} vurgu={vurgu} />;
  if (mod === 'harf') return <HarfBlok harf={nesneKey ?? sahne ?? 'A'} renk={renk} />;
  if (nesneKey === 'gokkusagi') return <GokkusagiGorsel />;
  if (mod === 'nesne') return <NesneKart anahtar={nesneKey ?? sahne ?? 'default'} vurgulu={!!vurgu} />;
  return <NesneKart anahtar={nesneKey ?? sahne ?? 'default'} />;
}

const styles = StyleSheet.create({
  ortala: { alignItems: 'center' },
  kart: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    alignItems: 'center',
    minWidth: 88,
    margin: 4,
  },
  emoji: { fontSize: 36, marginBottom: 4 },
  ing: { fontSize: 14, fontWeight: '700', color: GEO.mavi, marginBottom: 2 },
  etiket: { fontSize: 12, color: GEO.metin, textAlign: 'center' },
  renkNokta: { marginBottom: 4 },
  grup: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  harfSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 4 },
  renkSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6, padding: 8 },
});
