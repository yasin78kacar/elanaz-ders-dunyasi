import { ScrollView, StyleSheet, View } from 'react-native';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';
import { colors } from '../theme/colors';
import type { GorselSayiSeridi } from '../types/content';

const HUCRE_GENISLIK = 64;
const YUKSEKLIK = 100;

interface Props extends GorselSayiSeridi {}

export function SayiSeridi({ baslangic, adim, adimSayisi, vurgulananlar = [] }: Props) {
  const sayilar = Array.from({ length: adimSayisi + 1 }, (_, i) => baslangic + adim * i);
  const genislik = sayilar.length * HUCRE_GENISLIK + 16;
  const vurguSet = new Set(vurgulananlar);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.kutu}>
        <Svg width={genislik} height={YUKSEKLIK} viewBox={`0 0 ${genislik} ${YUKSEKLIK}`}>
          {sayilar.slice(0, -1).map((_, i) => {
            const x1 = 20 + i * HUCRE_GENISLIK + HUCRE_GENISLIK / 2;
            const x2 = 20 + (i + 1) * HUCRE_GENISLIK + HUCRE_GENISLIK / 2;
            const yayY = 72;
            const ortaX = (x1 + x2) / 2;
            return (
              <Path
                key={`ok-${i}`}
                d={`M ${x1} 38 Q ${ortaX} ${yayY} ${x2} 38`}
                stroke={colors.birincil}
                strokeWidth={2}
                fill="none"
              />
            );
          })}
          {sayilar.slice(0, -1).map((_, i) => {
            const x1 = 20 + i * HUCRE_GENISLIK + HUCRE_GENISLIK / 2;
            const x2 = 20 + (i + 1) * HUCRE_GENISLIK + HUCRE_GENISLIK / 2;
            const ortaX = (x1 + x2) / 2;
            return (
              <SvgText
                key={`etiket-${i}`}
                x={ortaX}
                y={68}
                fontSize={13}
                fontWeight="600"
                fill={colors.turuncu}
                textAnchor="middle"
              >
                {`+${adim}`}
              </SvgText>
            );
          })}
          {sayilar.map((n, i) => {
            const cx = 20 + i * HUCRE_GENISLIK + HUCRE_GENISLIK / 2;
            const vurgulu = vurguSet.has(n);
            return (
              <Circle
                key={`daire-${n}`}
                cx={cx}
                cy={28}
                r={vurgulu ? 22 : 18}
                fill={vurgulu ? colors.birincilAcik : colors.kart}
                stroke={colors.birincil}
                strokeWidth={2}
              />
            );
          })}
          {sayilar.map((n, i) => {
            const cx = 20 + i * HUCRE_GENISLIK + HUCRE_GENISLIK / 2;
            return (
              <SvgText
                key={`sayi-${n}`}
                x={cx}
                y={34}
                fontSize={18}
                fontWeight="bold"
                fill={colors.baslik}
                textAnchor="middle"
              >
                {n}
              </SvgText>
            );
          })}
        </Svg>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  kutu: {
    minWidth: '100%',
    alignItems: 'center',
  },
});
