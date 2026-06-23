import type { ReactElement } from 'react';
import { GorselSvg, GORSEL_VIEW_W, GORSEL_VIEW_H, useGorselCanvas } from '../GorselSvg';
import { Circle, Rect, Text as SvgText } from 'react-native-svg';
import { SvgCanvas } from '../SvgCanvas';
import { GEO } from '../nesneler/colors';
import type { GorselGorselSanatlar } from '../../types/content';

const W = GORSEL_VIEW_W;
const H = GORSEL_VIEW_H;

const RENKLER: Record<string, string> = {
  kirmizi: '#E53935',
  mavi: '#1E88E5',
  sari: '#FDD835',
  yesil: '#43A047',
  turuncu: '#FB8C00',
  mor: '#8E24AA',
  pembe: '#EC407A',
  kahverengi: '#6D4C41',
  beyaz: '#FAFAFA',
  siyah: '#212121',
};

function Baslik({ text }: { text: string }) {
  return (
    <SvgText x={W / 2} y={14} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
      {text}
    </SvgText>
  );
}

function RenkKutulari({ renkler, baslik }: { renkler: string[]; baslik: string }) {
  return (
    <GorselSvg>
      <Baslik text={baslik} />
      {renkler.map((r, i) => (
        <Rect key={r} x={30 + i * 50} y={35} width={36} height={50} fill={RENKLER[r] ?? r} rx={4} stroke={GEO.metin} strokeWidth={1} />
      ))}
    </GorselSvg>
  );
}

function KarisimGorsel({ sol, sag, son, baslik }: { sol: string; sag: string; son: string; baslik: string }) {
  return (
    <GorselSvg>
      <Baslik text={baslik} />
      <Circle cx={60} cy={65} r={22} fill={RENKLER[sol]} />
      <SvgText x={100} y={70} fontSize={16} fill={GEO.metin} fontWeight="700">+</SvgText>
      <Circle cx={140} cy={65} r={22} fill={RENKLER[sag]} />
      <SvgText x={180} y={70} fontSize={16} fill={GEO.metin} fontWeight="700">=</SvgText>
      <Circle cx={220} cy={65} r={22} fill={RENKLER[son]} />
    </GorselSvg>
  );
}

function NesneGorsel({ emoji, etiket }: { emoji: string; etiket: string }) {
  return (
    <GorselSvg>
      <Baslik text={etiket} />
      <SvgText x={W / 2} y={72} fontSize={36} textAnchor="middle">{emoji}</SvgText>
    </GorselSvg>
  );
}

const NESNE: Record<string, { emoji: string; etiket: string }> = {
  palet: { emoji: '🎨', etiket: 'Palet' },
  firca: { emoji: '🖌️', etiket: 'Fırça' },
  tuval: { emoji: '🖼️', etiket: 'Tuval' },
  'sulu-boya': { emoji: '💧', etiket: 'Sulu boya' },
  pastel: { emoji: '🖍️', etiket: 'Pastel boya' },
  kolaj: { emoji: '✂️', etiket: 'Kolaj' },
  heykel: { emoji: '🗿', etiket: 'Heykel' },
  seramik: { emoji: '🏺', etiket: 'Seramik' },
  muze: { emoji: '🏛️', etiket: 'Müze' },
  onluk: { emoji: '👕', etiket: 'Önlük' },
  'yatay-cizgi': { emoji: '➖', etiket: 'Yatay çizgi' },
  'daire-form': { emoji: '⭕', etiket: 'Daire formu' },
  'ucgen-form': { emoji: '🔺', etiket: 'Üçgen formu' },
  'gunes-resmi': { emoji: '☀️', etiket: 'Güneş resmi' },
  'cizim-boyama': { emoji: '✏️', etiket: 'Çizim ve boyama' },
  'makas-kagit': { emoji: '✂️', etiket: 'Makas ve kağıt' },
  'parmak-boyasi': { emoji: '🖐️', etiket: 'Parmak boyası' },
  'on-plan': { emoji: '🔍', etiket: 'Ön plan' },
  'arka-plan': { emoji: '🏔️', etiket: 'Arka plan' },
  simetri: { emoji: '🦋', etiket: 'Simetri' },
  'cizgi-calismasi': { emoji: '📐', etiket: 'Çizgi çalışması' },
  naturmort: { emoji: '🍎', etiket: 'Natürmort' },
  manzara: { emoji: '🌄', etiket: 'Manzara' },
  portre: { emoji: '👤', etiket: 'Portre' },
  kompozisyon: { emoji: '🧩', etiket: 'Kompozisyon' },
  graffiti: { emoji: '🧱', etiket: 'Grafiti' },
  origami: { emoji: '🦢', etiket: 'Origami' },
  'ahsap-baski': { emoji: '🪵', etiket: 'Ahşap baskı' },
  serigrafi: { emoji: '🖨️', etiket: 'Serigrafi' },
  'sergi-panosu': { emoji: '📌', etiket: 'Sergi panosu' },
  'elanaz-resim': { emoji: '👧', etiket: 'Elanaz resim yapıyor' },
  malzemeler: { emoji: '🎨', etiket: 'Sanat malzemeleri' },
  'sanat-atolyesi': { emoji: '🏫', etiket: 'Sanat atölyesi' },
};

function EserGorsel({ tur }: { tur: string }) {
  const eserler: Record<string, { emoji: string; etiket: string }> = {
    cini: { emoji: '🕌', etiket: 'Çini sanatı' },
    ebru: { emoji: '🌊', etiket: 'Ebru sanatı' },
    kilim: { emoji: '🧶', etiket: 'Kilim dokuma' },
    minyatur: { emoji: '🔬', etiket: 'Minyatür' },
  };
  const e = eserler[tur] ?? { emoji: '🎨', etiket: 'Sanat eseri' };
  return <NesneGorsel emoji={e.emoji} etiket={e.etiket} />;
}

function AnlatimGorsel({ sahne }: { sahne: string }) {
  if (sahne === 'renk-teorisi') {
    return <RenkKutulari renkler={['kirmizi', 'mavi', 'sari', 'turuncu', 'yesil']} baslik="Renk teorisi" />;
  }
  if (sahne === 'malzemeler') {
    return <NesneGorsel emoji="🎨" etiket="Sanat malzemeleri" />;
  }
  if (sahne === 'turk-sanatlari') {
    return (
      <GorselSvg>
        <Baslik text="Türk sanatları" />
        <SvgText x={55} y={70} fontSize={22} textAnchor="middle">🌊</SvgText>
        <SvgText x={110} y={70} fontSize={22} textAnchor="middle">🕌</SvgText>
        <SvgText x={165} y={70} fontSize={22} textAnchor="middle">🧶</SvgText>
        <SvgText x={220} y={70} fontSize={22} textAnchor="middle">🔬</SvgText>
      </GorselSvg>
    );
  }
  return <NesneGorsel emoji="🎨" etiket="Görsel Sanatlar" />;
}

function RenkGorsel({ renk }: { renk: string }) {
  const harita: Record<string, () => ReactElement> = {
    'ana-renkler': () => <RenkKutulari renkler={['kirmizi', 'mavi', 'sari']} baslik="Ana renkler" />,
    'ara-renkler': () => <RenkKutulari renkler={['turuncu', 'yesil', 'mor']} baslik="Ara renkler" />,
    'kirmizi-sari-turuncu': () => <KarisimGorsel sol="kirmizi" sag="sari" son="turuncu" baslik="Kırmızı + Sarı" />,
    'mavi-sari-yesil': () => <KarisimGorsel sol="mavi" sag="sari" son="yesil" baslik="Mavi + Sarı" />,
    'sicak-renkler': () => <RenkKutulari renkler={['kirmizi', 'turuncu', 'sari']} baslik="Sıcak renkler" />,
    'soguk-renkler': () => <RenkKutulari renkler={['mavi', 'yesil', 'mor']} baslik="Soğuk renkler" />,
    beyaz: () => <RenkKutulari renkler={['beyaz']} baslik="Beyaz" />,
    siyah: () => <RenkKutulari renkler={['siyah']} baslik="Siyah" />,
    'mor-karisim': () => <KarisimGorsel sol="kirmizi" sag="mavi" son="mor" baslik="Kırmızı + Mavi" />,
    kahverengi: () => <RenkKutulari renkler={['kahverengi']} baslik="Kahverengi" />,
    pembe: () => <RenkKutulari renkler={['pembe']} baslik="Pembe" />,
    'sicak-ornek': () => <RenkKutulari renkler={['kirmizi', 'turuncu', 'sari']} baslik="Sıcak renk örnekleri" />,
    'soguk-ornek': () => <RenkKutulari renkler={['mavi', 'yesil', 'mor']} baslik="Soğuk renk örnekleri" />,
    'acik-tonlar': () => <RenkKutulari renkler={['pembe', 'sari', 'yesil']} baslik="Açık tonlar" />,
    'koyu-tonlar': () => <RenkKutulari renkler={['kahverengi', 'mor', 'siyah']} baslik="Koyu tonlar" />,
  };
  const render = harita[renk];
  return render ? render() : <RenkKutulari renkler={[renk]} baslik={renk} />;
}

function SahneSvg({ gorsel }: { gorsel: GorselGorselSanatlar }) {
  if (gorsel.mod === 'anlatim' && gorsel.sahne) return <AnlatimGorsel sahne={gorsel.sahne} />;
  if (gorsel.mod === 'renk' && gorsel.renk) return <RenkGorsel renk={gorsel.renk} />;
  if (gorsel.mod === 'eser' && gorsel.sahne) return <EserGorsel tur={gorsel.sahne} />;
  if (gorsel.mod === 'nesne' && gorsel.nesne) {
    const n = NESNE[gorsel.nesne] ?? { emoji: '🎨', etiket: gorsel.nesne };
    return <NesneGorsel emoji={n.emoji} etiket={n.etiket} />;
  }
  return <NesneGorsel emoji="🎨" etiket="Görsel Sanatlar" />;
}

type Props = GorselGorselSanatlar;

export function GorselSanatlarGorsel(props: Props) {
  const { renderW, renderH } = useGorselCanvas();
  return (
    <SvgCanvas width={renderW} height={renderH}>
      <SahneSvg gorsel={props} />
    </SvgCanvas>
  );
}
