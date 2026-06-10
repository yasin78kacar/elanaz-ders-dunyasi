import Svg, { Rect, Text as SvgText } from 'react-native-svg';

interface Props {
  onluk: number;
  birlik: number;
  width?: number;
  height?: number;
}

export function OnlukBlokIllustration({ onluk, birlik, width = 280, height = 120 }: Props) {
  const blokGenislik = 18;
  const blokYukseklik = 70;
  const birlikYukseklik = 18;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {Array.from({ length: onluk }).map((_, i) => (
        <Rect
          key={`o-${i}`}
          x={10 + i * (blokGenislik + 6)}
          y={20}
          width={blokGenislik}
          height={blokYukseklik}
          fill="#5B9BD5"
          rx={3}
        />
      ))}
      {Array.from({ length: birlik }).map((_, i) => (
        <Rect
          key={`b-${i}`}
          x={10 + onluk * (blokGenislik + 6) + 10 + i * (blokGenislik + 4)}
          y={20 + blokYukseklik - birlikYukseklik}
          width={blokGenislik}
          height={birlikYukseklik}
          fill="#E67E22"
          rx={3}
        />
      ))}
      <SvgText x={10} y={height - 8} fontSize={14} fill="#3D4F6F">
        {onluk} onluk + {birlik} birlik
      </SvgText>
    </Svg>
  );
}

export function parseOnlukBlokId(gorsel: string): { onluk: number; birlik: number } | null {
  const match = gorsel.match(/^onluk-blok-(\d+)$/);
  if (!match) return null;
  const sayi = parseInt(match[1], 10);
  return { onluk: Math.floor(sayi / 10), birlik: sayi % 10 };
}
