import { View } from 'react-native';
import Svg, { Circle, Rect, Text as SvgText } from 'react-native-svg';
import { SvgCanvas } from '../SvgCanvas';
import { GEO } from '../nesneler/colors';
import type { GorselZekaDikkat } from '../../types/content';

const W = 280;
const H = 120;

const RENK: Record<string, string> = {
  kirmizi: '#E53935',
  mavi: '#1E88E5',
  sari: '#FDD835',
  yesil: '#43A047',
  mor: '#8E24AA',
  turuncu: '#FB8C00',
};

function Sekil({ tip, x, y, renk, boyut = 22 }: { tip: string; x: number; y: number; renk: string; boyut?: number }) {
  if (tip === 'ucgen') {
    return <Rect x={x - boyut / 2} y={y - boyut / 2} width={boyut} height={boyut} fill={renk} transform={`rotate(45 ${x} ${y})`} />;
  }
  if (tip === 'kare') {
    return <Rect x={x - boyut / 2} y={y - boyut / 2} width={boyut} height={boyut} fill={renk} rx={2} />;
  }
  return <Circle cx={x} cy={y} r={boyut / 2} fill={renk} />;
}

function FarkliDizi({ ogeler, farkliIndeks = 0 }: { ogeler: string[]; farkliIndeks?: number }) {
  const sekilRenk = (o: string) => {
    if (RENK[o]) return { tip: 'daire', renk: RENK[o] };
    if (['kare', 'ucgen', 'daire'].includes(o)) return { tip: o, renk: GEO.mavi };
    return { tip: 'daire', renk: GEO.turuncu };
  };
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <SvgText x={W / 2} y={16} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        Farklı olanı bul
      </SvgText>
      {ogeler.map((o, i) => {
        const { tip, renk } = sekilRenk(o);
        return <Sekil key={i} tip={tip} x={40 + i * 48} y={68} renk={renk} boyut={i === farkliIndeks ? 26 : 22} />;
      })}
    </Svg>
  );
}

function SayimSahne({ sahne, adet = 5 }: { sahne: string; adet?: number }) {
  const emojiMap: Record<string, string> = {
    'elma-5': '🍎',
    'yildiz-4': '⭐',
    'top-6': '⚽',
    'kus-3': '🐦',
    'cicek-7': '🌸',
    'kalem-8': '✏️',
    'kelebek-5': '🦋',
  };
  const emoji = emojiMap[sahne]?.[0] ?? '🍎';
  const n = adet ?? parseInt(sahne.split('-').pop() ?? '5', 10);
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <SvgText x={W / 2} y={16} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        Kaç tane var?
      </SvgText>
      {Array.from({ length: Math.min(n, 10) }, (_, i) => (
        <SvgText key={i} x={30 + (i % 5) * 48} y={55 + Math.floor(i / 5) * 36} fontSize={24} textAnchor="middle">
          {emoji}
        </SvgText>
      ))}
    </Svg>
  );
}

function DikkatSahne({ sahne }: { sahne: string }) {
  if (sahne === 'kirmizi-top-say') {
    const renkler = ['kirmizi', 'mavi', 'kirmizi', 'mavi', 'kirmizi', 'kirmizi', 'mavi', 'kirmizi'];
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <SvgText x={W / 2} y={16} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
          Sadece kırmızı topları say
        </SvgText>
        {renkler.map((r, i) => (
          <Circle key={i} cx={28 + i * 30} cy={68} r={11} fill={RENK[r]} />
        ))}
      </Svg>
    );
  }
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <SvgText x={W / 2} y={16} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        Eksik parçayı bul
      </SvgText>
      <Rect x={40} y={40} width={50} height={50} fill={GEO.mavi} opacity={0.3} />
      <Rect x={100} y={40} width={50} height={50} fill={GEO.mavi} />
      <Rect x={160} y={40} width={50} height={50} fill="none" stroke={GEO.turuncu} strokeWidth={2} strokeDasharray="4 3" />
      <Rect x={220} y={40} width={50} height={50} fill={GEO.mavi} />
    </Svg>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  const baslik: Record<string, string> = {
    'oruntu-anlatim': 'Örüntüler',
    'farkli-anlatim': 'Farklı olanı bul',
    'sayim-anlatim': 'Dikkatli sayma',
  };
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <SvgText x={W / 2} y={16} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
        {baslik[sahne] ?? 'Zekâ ve Dikkat'}
      </SvgText>
      <Circle cx={70} cy={68} r={16} fill={GEO.kirmizi} />
      <Rect x={120} y={52} width={32} height={32} fill={GEO.mavi} rx={4} />
      <Circle cx={200} cy={68} r={16} fill={GEO.yesil} />
    </Svg>
  );
}

type Props = GorselZekaDikkat;

export function ZekaDikkatGorsel(props: Props) {
  const { mod, sahne, ogeler, farkliIndeks, adet } = props;

  let icerik;
  if (mod === 'farkli' && ogeler) {
    icerik = <FarkliDizi ogeler={ogeler} farkliIndeks={farkliIndeks} />;
  } else if (mod === 'sayim') {
    icerik = <SayimSahne sahne={sahne ?? 'elma-5'} adet={adet} />;
  } else if (mod === 'dikkat') {
    icerik = <DikkatSahne sahne={sahne ?? 'esik-parca'} />;
  } else if (mod === 'anlatim') {
    icerik = <AnlatimSahne sahne={sahne ?? ''} />;
  } else {
    icerik = <AnlatimSahne sahne="oruntu-anlatim" />;
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <SvgCanvas width={W} height={H}>
        {icerik}
      </SvgCanvas>
    </View>
  );
}
