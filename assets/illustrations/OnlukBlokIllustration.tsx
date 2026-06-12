import { StyleSheet, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

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
    <View style={{ width, height }}>
      <Svg width={width} height={height - 24} viewBox={`0 0 ${width} ${height - 24}`}>
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
      </Svg>
      <Text style={styles.etiket}>
        {onluk} onluk + {birlik} birlik
      </Text>
    </View>
  );
}

export function parseOnlukBlokId(gorsel: string): { onluk: number; birlik: number } | null {
  const match = gorsel.match(/^onluk-blok-(\d+)$/);
  if (!match) return null;
  const sayi = parseInt(match[1], 10);
  return { onluk: Math.floor(sayi / 10), birlik: sayi % 10 };
}

const styles = StyleSheet.create({
  etiket: {
    fontSize: 14,
    color: '#3D4F6F',
    marginTop: 4,
    paddingHorizontal: 10,
  },
});
