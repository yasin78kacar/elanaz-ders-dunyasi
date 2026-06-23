import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDeviceLayout } from '../../hooks/useDeviceLayout';
import { colors } from '../../theme/colors';
import type { GorselOruntu } from '../../types/content';
import { SekillerIcon, type SekilTipi } from '../nesneler/SekillerIcon';

const RENKLER: Record<string, string> = {
  kirmizi: '#E53935',
  mavi: '#1E88E5',
  sari: '#FDD835',
  yesil: '#43A047',
  turuncu: '#FB8C00',
  mor: '#8E24AA',
};

const SEKIL_MAP: Record<string, SekilTipi> = {
  kare: 'kare',
  ucgen: 'ucgen',
  daire: 'daire',
  cember: 'cember',
  dikdortgen: 'dikdortgen',
  yildiz: 'daire',
  ay: 'ucgen',
  gunes: 'daire',
};

type Props = GorselOruntu;

export function OruntuGorsel({ elemanlar, adimEtiketi, vurguIndeks }: Props) {
  const layout = useDeviceLayout();
  const boyut = layout.gorselBoyut.kucuk;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        satir: { flexDirection: 'row', alignItems: 'center', gap: layout.spacing(6), paddingVertical: layout.spacing(8) },
        hucre: {
          width: boyut + 8,
          height: boyut + 8,
          borderRadius: layout.spacing(10),
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: colors.kenarlik,
          backgroundColor: colors.kart,
        },
        vurgu: { borderColor: colors.birincil, backgroundColor: colors.birincilAcik },
        sayi: { fontSize: layout.font.md, fontWeight: '700', color: colors.baslik },
        soru: { fontSize: layout.font.lg, fontWeight: '700', color: colors.turuncu },
        etiket: { fontSize: layout.font.sm, fontWeight: '600', color: colors.birincil, minWidth: layout.spacing(28), textAlign: 'center' },
        renkTop: { width: boyut * 0.7, height: boyut * 0.7, borderRadius: boyut },
      }),
    [layout, boyut],
  );

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.satir}>
        {elemanlar.map((el, i) => {
          const vurgulu = vurguIndeks === i;
          const hucre = [styles.hucre, vurgulu && styles.vurgu];
          const okGoster = adimEtiketi && i < elemanlar.length - 1 && elemanlar[i + 1]?.tip !== 'soru';

          if (el.tip === 'sayi') {
            return (
              <View key={`o-${i}`} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={hucre}>
                  <Text style={styles.sayi}>{String(el.deger)}</Text>
                </View>
                {okGoster ? <Text style={styles.etiket}>{adimEtiketi}</Text> : null}
              </View>
            );
          }
          if (el.tip === 'renk') {
            const renk = RENKLER[String(el.deger)] ?? colors.birincil;
            return (
              <View key={`o-${i}`} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={hucre}>
                  <View style={[styles.renkTop, { backgroundColor: renk }]} />
                </View>
                {okGoster ? <Text style={styles.etiket}>{adimEtiketi}</Text> : null}
              </View>
            );
          }
          if (el.tip === 'sekil') {
            const sekil = SEKIL_MAP[String(el.deger)] ?? 'kare';
            const renk = RENKLER[String(el.deger)] ?? undefined;
            return (
              <View key={`o-${i}`} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={hucre}>
                  <SekillerIcon tip={sekil} size={boyut} renk={renk} />
                </View>
                {okGoster ? <Text style={styles.etiket}>{adimEtiketi}</Text> : null}
              </View>
            );
          }
          return (
            <View key={`o-${i}`} style={hucre}>
              <Text style={styles.soru}>?</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
