import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Ellipse, Path, Rect } from 'react-native-svg';
import { useDeviceLayout } from '../../hooks/useDeviceLayout';
import { TahminGorsel } from '../kaplar/KapPrimitives';
import { NesnelerIcon } from '../nesneler/NesnelerIcon';
import { colors } from '../../theme/colors';
import type { GorselTahminEtme } from '../../types/content';

function MisketKavanoz({ adet = 8, kucuk = false }: { adet?: number; kucuk?: boolean }) {
  const layout = useDeviceLayout();
  const w = layout.flowSize(kucuk ? 100 : 140);
  const h = layout.flowSize(kucuk ? 120 : 160);
  const misketBoy = layout.ikonSize(kucuk ? 10 : 14);

  return (
    <View style={{ alignItems: 'center', width: w }}>
      <Svg width={w} height={h} viewBox="0 0 140 160">
        <Path
          d="M 20 50 Q 70 20 120 50 L 120 130 Q 70 155 20 130 Z"
          fill={colors.birincilAcik}
          stroke={colors.birincil}
          strokeWidth={3}
        />
        <Rect x="55" y="8" width="30" height="18" rx="4" fill={colors.kenarlik} />
      </Svg>
      <View style={{ position: 'absolute', top: h * 0.28, flexDirection: 'row', flexWrap: 'wrap', width: w * 0.65, justifyContent: 'center', gap: 4 }}>
        {Array.from({ length: Math.min(adet, 12) }).map((_, i) => (
          <NesnelerIcon key={i} tip="misket" size={misketBoy} />
        ))}
      </View>
      {adet > 12 ? (
        <Text style={{ fontSize: layout.font.sm, color: colors.metin, marginTop: 4 }}>+{adet - 12}</Text>
      ) : null}
    </View>
  );
}

function SinifGorsel() {
  const layout = useDeviceLayout();
  const w = layout.flowSize(200);
  const h = layout.flowSize(120);
  return (
    <Svg width={w} height={h} viewBox="0 0 200 120">
      <Rect x="10" y="30" width="180" height="80" fill={colors.kart} stroke={colors.kenarlik} strokeWidth={2} />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <Ellipse
            key={`${r}-${c}`}
            cx={30 + c * 34}
            cy={48 + r * 18}
            rx="10"
            ry="8"
            fill={colors.birincilAcik}
            stroke={colors.birincil}
            strokeWidth={1.5}
          />
        )),
      )}
      <Rect x="80" y="10" width="40" height="24" fill={colors.turuncu} rx="4" />
    </Svg>
  );
}

function KitapGorsel() {
  const layout = useDeviceLayout();
  return <NesnelerIcon tip="kitap" size={layout.ikonSize(72)} />;
}

function IkiKavanoz({ solKucuk }: { solKucuk?: boolean }) {
  return (
    <View style={{ flexDirection: 'row', gap: 16, alignItems: 'flex-end' }}>
      <MisketKavanoz adet={solKucuk ? 35 : 8} kucuk={!solKucuk} />
      <MisketKavanoz adet={solKucuk ? 8 : 35} kucuk={solKucuk} />
    </View>
  );
}

function ReferansOn() {
  const layout = useDeviceLayout();
  return (
    <View style={{ flexDirection: 'row', gap: layout.spacing(20), alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: layout.font.sm, fontWeight: '600', color: colors.metin, marginBottom: 4 }}>10 tane</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: layout.flowSize(80), gap: 4, justifyContent: 'center' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <NesnelerIcon key={i} tip="misket" size={layout.ikonSize(12)} />
          ))}
        </View>
      </View>
      <Text style={{ fontSize: layout.font.lg, color: colors.birincil }}>→</Text>
      <MisketKavanoz adet={30} />
    </View>
  );
}

export function TahminEtmeGorsel({ sahne, tahmin, gercek }: GorselTahminEtme) {
  const layout = useDeviceLayout();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: { alignItems: 'center', gap: layout.spacing(8) },
        etiket: { fontSize: layout.font.md, fontWeight: '600', color: colors.baslik },
      }),
    [layout],
  );

  if (tahmin !== undefined && gercek !== undefined) {
    return (
      <View style={styles.kutu}>
        <TahminGorsel tahmin={tahmin} gercek={gercek} tip="bardak" fazlaIsareti={tahmin > gercek} />
      </View>
    );
  }

  switch (sahne) {
    case 'anlatim-1':
      return (
        <View style={styles.kutu}>
          <MisketKavanoz adet={15} />
          <Text style={styles.etiket}>Kaç tane?</Text>
        </View>
      );
    case 'anlatim-2':
      return <ReferansOn />;
    case 'anlatim-3':
      return (
        <View style={styles.kutu}>
          <TahminGorsel tahmin={20} gercek={23} />
          <TahminGorsel tahmin={30} gercek={23} fazlaIsareti />
        </View>
      );
    case 'misket-az':
      return <MisketKavanoz adet={5} />;
    case 'misket-cok':
      return <MisketKavanoz adet={40} />;
    case 'sinif':
      return <SinifGorsel />;
    case 'kitap':
      return <KitapGorsel />;
    case 'sepet-elma':
      return (
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <NesnelerIcon key={i} tip="portakal" size={layout.ikonSize(28)} />
          ))}
        </View>
      );
    case 'bardak':
      return <TahminGorsel tahmin={3} gercek={3} tip="bardak" />;
    case 'iki-kavanoz':
      return <IkiKavanoz />;
    case 'iki-kavanoz-kucuk':
      return <IkiKavanoz solKucuk />;
    case 'referans-10':
      return <ReferansOn />;
    case 'kalem-kutusu':
      return <NesnelerIcon tip="kalem-kutusu" size={layout.ikonSize(64)} />;
    case 'kitaplik':
      return (
        <View style={{ flexDirection: 'row', gap: 6 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <NesnelerIcon key={i} tip="kitap" size={layout.ikonSize(36)} />
          ))}
        </View>
      );
    case 'pirinç':
      return <MisketKavanoz adet={50} />;
    case 'agac':
      return <NesnelerIcon tip="portakal" size={layout.ikonSize(56)} />;
    case 'okul':
      return <NesnelerIcon tip="bina" size={layout.ikonSize(72)} />;
    case 'cay-fincani':
      return <TahminGorsel tahmin={10} gercek={10} tip="bardak" />;
    case 'uc-kap':
      return (
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {[10, 10, 10].map((n, i) => (
            <MisketKavanoz key={i} adet={n} kucuk />
          ))}
        </View>
      );
    case 'dort-tahmin':
      return (
        <View style={styles.kutu}>
          <Text style={styles.etiket}>Gerçek: 40</Text>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[5, 100, 38, 200].map((n) => (
              <Text key={n} style={[styles.etiket, n === 38 && { color: colors.basari }]}>
                {n}
              </Text>
            ))}
          </View>
        </View>
      );
  }

  return <MisketKavanoz adet={12} />;
}
