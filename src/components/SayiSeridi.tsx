import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../theme/colors';
import type { GorselSayiSeridi } from '../types/content';

const HUCRE_GENISLIK = 72;
const YUKSEKLIK = 100;
const DAIRE_Y = 28;
const DAIRE_R = 22;

interface Props extends GorselSayiSeridi {}

function hucreMerkez(i: number): number {
  return 20 + i * HUCRE_GENISLIK + HUCRE_GENISLIK / 2;
}

/** Sayılar RN Text ile — SvgText viewBox kırpması iki haneli sayılarda son rakamı kesiyordu. */
export function SayiSeridi({ baslangic, adim, adimSayisi, vurgulananlar = [] }: Props) {
  const sayilar = Array.from({ length: adimSayisi + 1 }, (_, i) => baslangic + adim * i);
  const genislik = sayilar.length * HUCRE_GENISLIK + 16;
  const vurguSet = new Set(vurgulananlar);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={[styles.kutu, { width: genislik, height: YUKSEKLIK }]}>
        <Svg width={genislik} height={YUKSEKLIK} viewBox={`0 0 ${genislik} ${YUKSEKLIK}`}>
          {sayilar.slice(0, -1).map((_, i) => {
            const x1 = hucreMerkez(i);
            const x2 = hucreMerkez(i + 1);
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
          {sayilar.map((n, i) => {
            const cx = hucreMerkez(i);
            const vurgulu = vurguSet.has(n);
            return (
              <Circle
                key={`daire-${n}-${i}`}
                cx={cx}
                cy={DAIRE_Y}
                r={vurgulu ? DAIRE_R + 2 : DAIRE_R}
                fill={vurgulu ? colors.birincilAcik : colors.kart}
                stroke={colors.birincil}
                strokeWidth={2}
              />
            );
          })}
        </Svg>
        {sayilar.slice(0, -1).map((_, i) => {
          const ortaX = (hucreMerkez(i) + hucreMerkez(i + 1)) / 2;
          return (
            <Text
              key={`adim-${i}`}
              style={[styles.adimMetin, { left: ortaX - 18, top: 52 }]}
            >
              {`+${adim}`}
            </Text>
          );
        })}
        {sayilar.map((n, i) => {
          const cx = hucreMerkez(i);
          return (
            <Text
              key={`sayi-${n}-${i}`}
              style={[styles.sayiMetin, { left: cx - 20, top: DAIRE_Y - 12 }]}
            >
              {String(n)}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  kutu: {
    position: 'relative',
    minWidth: '100%',
    alignItems: 'center',
  },
  sayiMetin: {
    position: 'absolute',
    width: 40,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: colors.baslik,
  },
  adimMetin: {
    position: 'absolute',
    width: 36,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: colors.turuncu,
  },
});
