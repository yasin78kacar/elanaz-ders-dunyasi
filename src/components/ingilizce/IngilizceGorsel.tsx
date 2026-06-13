import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Rect, Text as SvgText } from 'react-native-svg';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselIngilizce } from '../../types/content';

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

const SAYI_ING: Record<string, string> = {
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  '10': 'Ten',
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
  // Tema 1B — Numbers and Classroom
  'sayi-1': { emoji: '1️⃣', etiket: '1', ing: 'One' },
  'sayi-2': { emoji: '2️⃣', etiket: '2', ing: 'Two' },
  'sayi-3': { emoji: '3️⃣', etiket: '3', ing: 'Three' },
  kitap: { emoji: '📖', etiket: 'Kitap', ing: 'Book' },
  canta: { emoji: '🎒', etiket: 'Çanta', ing: 'Bag' },
  'kursun-kalem': { emoji: '✏️', etiket: 'Kurşun Kalem', ing: 'Pencil' },
  'tukenmez-kalem': { emoji: '🖊️', etiket: 'Tükenmez Kalem', ing: 'Pen' },
  desk: { emoji: '🪑', etiket: 'Sıra', ing: 'Desk' },
  chair: { emoji: '💺', etiket: 'Sandalye', ing: 'Chair' },
  board: { emoji: '📋', etiket: 'Tahta', ing: 'Board' },
  classroom: { emoji: '🏫', etiket: 'Sınıf', ing: 'Classroom' },
  silgi: { emoji: '🧽', etiket: 'Silgi', ing: 'Eraser' },
  kalemlik: { emoji: '📦', etiket: 'Kalemlik', ing: 'Pencil case' },
  'iki-kitap': { emoji: '📚', etiket: '2 Kitap', ing: 'Two books' },
  'bes-kalem': { emoji: '✏️', etiket: '5 Kalem', ing: 'Five pencils' },
  kapi: { emoji: '🚪', etiket: 'Kapı', ing: 'Door' },
  pencere: { emoji: '🪟', etiket: 'Pencere', ing: 'Window' },
  ogretmen: { emoji: '👩‍🏫', etiket: 'Öğretmen', ing: 'Teacher' },
  'balon-5': { emoji: '🎈', etiket: '5', ing: 'Five' },
  'tisort-10': { emoji: '🔟', etiket: '10', ing: 'Ten' },
  'dort-elma': { emoji: '🍎', etiket: '4 Elma', ing: 'Four' },
  'pasta-7': { emoji: '🎂', etiket: '7', ing: 'Seven' },
  'uc-kitap': { emoji: '📚', etiket: '3 Kitap', ing: 'Three books' },
  'ogretmen-masa': { emoji: '👩‍🏫', etiket: 'Öğretmen', ing: 'Teacher' },
  'alti-top': { emoji: '⚽', etiket: '6', ing: 'Six' },
  'sinif-pencere': { emoji: '🪟', etiket: 'Pencere', ing: 'Window' },
  'acik-kapi': { emoji: '🚪', etiket: 'Kapı', ing: 'Door' },
  'iki-pen': { emoji: '🖊️', etiket: '2 Kalem', ing: 'Two pens' },
  'sinif-ortam': { emoji: '🏫', etiket: 'Sınıf', ing: 'Classroom' },
  'bes-silgi': { emoji: '🧽', etiket: '5 Silgi', ing: 'Five erasers' },
  'one-two': { emoji: '1️⃣2️⃣', etiket: 'One, Two', ing: 'One, Two' },
  'on-kalem': { emoji: '✏️', etiket: '10 Kalem', ing: 'Ten pencils' },
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

type Props = GorselIngilizce;

function SayiBlok({ sayi }: { sayi: string }) {
  const w = 64;
  const h = 76;
  const ing = SAYI_ING[sayi] ?? sayi;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={4} y={4} width={56} height={56} rx={10} fill={GEO.mavi + '33'} stroke={GEO.mavi} strokeWidth={2} />
        <SvgText x={32} y={42} fontSize={28} fill={GEO.metin} fontWeight="bold" textAnchor="middle">
          {sayi}
        </SvgText>
        <SvgText x={32} y={70} fontSize={11} fill={GEO.mavi} fontWeight="bold" textAnchor="middle">
          {ing}
        </SvgText>
      </Svg>
    </View>
  );
}

function SayilarSahne() {
  return (
    <View style={styles.harfSatir}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <SayiBlok key={n} sayi={String(n)} />
      ))}
    </View>
  );
}

function SinifEsyalariSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="board" />
      <NesneKart anahtar="canta" />
      <NesneKart anahtar="kursun-kalem" />
      <NesneKart anahtar="tukenmez-kalem" />
      <NesneKart anahtar="kitap" />
      <NesneKart anahtar="desk" />
      <NesneKart anahtar="chair" />
    </View>
  );
}

function SayiEsyalariSahne() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="uc-kitap" vurgulu />
      <NesneKart anahtar="bes-kalem" vurgulu />
      <NesneKart anahtar="desk" vurgulu />
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
    case 'se-anlatim-1':
      return <SayilarSahne />;
    case 'se-anlatim-2':
      return <SinifEsyalariSahne />;
    case 'se-anlatim-3':
      return <SayiEsyalariSahne />;
    default:
      return <NesneKart anahtar={sahne || 'default'} />;
  }
}

export function IngilizceGorsel(props: Props) {
  const { mod, sahne, nesne: nesneKey, nesneler, vurgu, renk, sayi: sayiDeger } = props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'grup') return <GrupGorsel nesneler={nesneler} vurgu={vurgu} />;
  if (mod === 'harf') return <HarfBlok harf={nesneKey ?? sahne ?? 'A'} renk={renk} />;
  if (mod === 'sayi') return <SayiBlok sayi={sayiDeger ?? nesneKey ?? '1'} />;
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
