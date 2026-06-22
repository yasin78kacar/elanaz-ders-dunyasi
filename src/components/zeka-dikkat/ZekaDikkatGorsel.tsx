import Svg, { Circle, Rect, Text as SvgText } from 'react-native-svg';
import { SvgCanvas } from '../SvgCanvas';
import { GEO } from '../nesneler/colors';
import type { GorselZekaDikkat } from '../../types/content';

const W = 280;
const H = 120;

const RENKLER: Record<string, string> = {
  kirmizi: '#E53935',
  mavi: '#1E88E5',
  sari: '#FDD835',
  yesil: '#43A047',
  turuncu: '#FB8C00',
  mor: '#8E24AA',
};

const EMOJI: Record<string, string> = {
  elma: '🍎',
  armut: '🍐',
  balik: '🐟',
  muz: '🍌',
  uzum: '🍇',
  kare: '⬜',
  ucgen: '🔺',
  daire: '🔵',
};

function Baslik({ text }: { text: string }) {
  return (
    <SvgText x={W / 2} y={14} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
      {text}
    </SvgText>
  );
}

function FarkliGorsel({ ogeler, farkliIndeks }: { ogeler: string[]; farkliIndeks?: number }) {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Farklı olanı bul" />
      {ogeler.map((o, i) => {
        const vurgu = i === farkliIndeks;
        const x = 20 + i * 50;
        const renk = RENKLER[o];
        if (renk) {
          return (
            <Circle
              key={i}
              cx={x + 18}
              cy={65}
              r={16}
              fill={renk}
              stroke={vurgu ? '#FF5722' : GEO.metin}
              strokeWidth={vurgu ? 3 : 1}
            />
          );
        }
        const sekil = ['kare', 'ucgen', 'daire'].includes(o);
        if (sekil) {
          return (
            <Rect
              key={i}
              x={x}
              y={48}
              width={36}
              height={36}
              fill="none"
              stroke={vurgu ? '#FF5722' : GEO.metin}
              strokeWidth={vurgu ? 3 : 1}
              rx={4}
            />
          );
        }
        return (
          <SvgText key={i} x={x + 18} y={72} fontSize={22} textAnchor="middle">
            {EMOJI[o] ?? o}
          </SvgText>
        );
      })}
    </Svg>
  );
}

function SayimGorsel({ sahne, adet }: { sahne: string; adet?: number }) {
  const sayilar: Record<string, { emoji: string; etiket: string }> = {
    'elma-5': { emoji: '🍎', etiket: 'Elma say' },
    'yildiz-4': { emoji: '⭐', etiket: 'Yıldız say' },
    'top-6': { emoji: '⚽', etiket: 'Top say' },
    'kus-3': { emoji: '🐦', etiket: 'Kuş say' },
    'cicek-7': { emoji: '🌸', etiket: 'Çiçek say' },
    'kalem-8': { emoji: '✏️', etiket: 'Kalem say' },
    'kelebek-5': { emoji: '🦋', etiket: 'Kelebek say' },
  };
  const info = sayilar[sahne] ?? { emoji: '🔵', etiket: 'Say' };
  const n = adet ?? 5;
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text={info.etiket} />
      {Array.from({ length: n }, (_, i) => (
        <SvgText key={i} x={20 + (i % 8) * 32} y={55 + Math.floor(i / 8) * 30} fontSize={20}>
          {info.emoji}
        </SvgText>
      ))}
    </Svg>
  );
}

function DikkatGorsel({ sahne }: { sahne: string }) {
  if (sahne === 'kirmizi-top-say') {
    const renkler = ['kirmizi', 'mavi', 'kirmizi', 'sari', 'kirmizi', 'mavi', 'kirmizi'];
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Baslik text="Sadece kırmızı topları say" />
        {renkler.map((r, i) => (
          <Circle key={i} cx={25 + i * 36} cy={65} r={14} fill={RENKLER[r]} />
        ))}
      </Svg>
    );
  }
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Eksik parçayı bul" />
      <Rect x={60} y={35} width={40} height={40} fill="#BBDEFB" stroke={GEO.metin} strokeWidth={2} />
      <Rect x={110} y={35} width={40} height={40} fill="#BBDEFB" stroke={GEO.metin} strokeWidth={2} />
      <Rect x={160} y={35} width={40} height={40} fill="none" stroke="#FF5722" strokeWidth={2} strokeDasharray="4 3" />
      <Rect x={210} y={35} width={40} height={40} fill="#BBDEFB" stroke={GEO.metin} strokeWidth={2} />
    </Svg>
  );
}

function AnlatimGorsel({ sahne }: { sahne: string }) {
  const basliklar: Record<string, string> = {
    'oruntu-anlatim': 'Örüntü tamamlama',
    'farkli-anlatim': 'Farklı olanı bulma',
    'sayim-anlatim': 'Dikkatli sayma',
  };
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text={basliklar[sahne] ?? 'Zekâ ve Dikkat'} />
      <SvgText x={70} y={70} fontSize={22}>🔢</SvgText>
      <SvgText x={130} y={70} fontSize={22}>🔺</SvgText>
      <SvgText x={190} y={70} fontSize={22}>👀</SvgText>
    </Svg>
  );
}

function SahneSvg({ gorsel }: { gorsel: GorselZekaDikkat }) {
  if (gorsel.mod === 'anlatim' && gorsel.sahne) return <AnlatimGorsel sahne={gorsel.sahne} />;
  if (gorsel.mod === 'farkli' && gorsel.ogeler) return <FarkliGorsel ogeler={gorsel.ogeler} farkliIndeks={gorsel.farkliIndeks} />;
  if (gorsel.mod === 'sayim' && gorsel.sahne) return <SayimGorsel sahne={gorsel.sahne} adet={gorsel.adet} />;
  if (gorsel.mod === 'dikkat' && gorsel.sahne) return <DikkatGorsel sahne={gorsel.sahne} />;
  return <AnlatimGorsel sahne="oruntu-anlatim" />;
}

type Props = GorselZekaDikkat;

export function ZekaDikkatGorsel(props: Props) {
  return (
    <SvgCanvas width={W} height={H}>
      <SahneSvg gorsel={props} />
    </SvgCanvas>
  );
}
