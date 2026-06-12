import { View, StyleSheet, ScrollView } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';
import { SvgCanvas } from '../SvgCanvas';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselVeri } from '../../types/content';

type Props = GorselVeri;

const SUTUN_RENK = [GEO.mavi, GEO.kirmizi, GEO.sari, GEO.yesil, GEO.mor, GEO.turuncu];

function vurguluMu(vurgu: (number | string)[] | undefined, indeks: number, etiket: string) {
  if (!vurgu?.length) return false;
  return vurgu.includes(indeks) || vurgu.includes(etiket);
}

function TabloGorsel({ baslik, sutunlar = [], satirlar = [], vurgu }: Props) {
  const hucreW = 72;
  const hucreH = 36;
  const etiketW = 80;
  const w = etiketW + sutunlar.length * hucreW + 8;
  const h = 40 + satirlar.length * hucreH + 8;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ minWidth: w }}>
        {baslik ? (
          <GuvenliMetin style={styles.baslik} tamGenislik>
            {baslik}
          </GuvenliMetin>
        ) : null}
        <View style={styles.tablo}>
          <View style={[styles.satir, styles.baslikSatir]}>
            <View style={[styles.hucre, { width: etiketW }]} />
            {sutunlar.map((s, i) => (
              <View
                key={s}
                style={[
                  styles.hucre,
                  { width: hucreW, backgroundColor: vurguluMu(vurgu, i, s) ? colors.birincilAcik : SUTUN_RENK[i % SUTUN_RENK.length] + '33' },
                ]}
              >
                <GuvenliMetin style={styles.hucreMetin} tamGenislik={false}>
                  {s}
                </GuvenliMetin>
              </View>
            ))}
          </View>
          {satirlar.map((satir) => (
            <View key={satir.etiket} style={styles.satir}>
              <View style={[styles.hucre, styles.etiketHucre, { width: etiketW }]}>
                <GuvenliMetin style={styles.etiketMetin} tamGenislik={false}>
                  {satir.etiket}
                </GuvenliMetin>
              </View>
              {satir.degerler.map((deger, i) => (
                <View
                  key={`${satir.etiket}-${i}`}
                  style={[
                    styles.hucre,
                    { width: hucreW, backgroundColor: vurguluMu(vurgu, i, sutunlar[i] ?? '') ? colors.birincilAcik : colors.kart },
                  ]}
                >
                  <GuvenliMetin style={styles.degerMetin} tamGenislik={false}>
                    {String(deger)}
                  </GuvenliMetin>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function GrafikGorsel({ baslik, kategoriler = [], degerler = [], vurgu }: Props) {
  const w = 300;
  const h = 180;
  const max = Math.max(...degerler, 1);
  const barW = Math.min(48, (w - 60) / Math.max(kategoriler.length, 1) - 8);
  const chartH = 120;
  const baseY = h - 40;

  return (
    <View>
      {baslik ? (
        <GuvenliMetin style={styles.baslik} tamGenislik>
          {baslik}
        </GuvenliMetin>
      ) : null}
      <SvgCanvas
        width={w}
        height={h}
        labels={kategoriler.map((k, i) => ({
          text: k,
          left: 36 + i * (barW + 12) + barW / 2,
          top: baseY + 8,
          width: barW + 16,
          fontSize: 10,
          fontWeight: '600' as const,
          textAlign: 'center' as const,
        }))}
      >
        <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          <Line x1={30} y1={baseY} x2={w - 10} y2={baseY} stroke={GEO.metin} strokeWidth={2} />
          <Line x1={30} y1={20} x2={30} y2={baseY} stroke={GEO.metin} strokeWidth={2} />
          {kategoriler.map((k, i) => {
            const deger = degerler[i] ?? 0;
            const barH = (deger / max) * chartH;
            const x = 36 + i * (barW + 12);
            const y = baseY - barH;
            const renk = vurguluMu(vurgu, i, k) ? GEO.turuncu : SUTUN_RENK[i % SUTUN_RENK.length];
            return (
              <Rect key={k} x={x} y={y} width={barW} height={barH} fill={renk} rx={4} />
            );
          })}
        </Svg>
      </SvgCanvas>
      <View style={styles.degerSatir}>
        {degerler.map((d, i) => (
          <GuvenliMetin key={i} style={styles.degerEtiket} tamGenislik={false}>
            {String(d)}
          </GuvenliMetin>
        ))}
      </View>
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'to-anlatim-1':
      return (
        <TabloGorsel
          tur="veri"
          mod="tablo"
          baslik="Örnek Tablo"
          sutunlar={['A', 'B', 'C']}
          satirlar={[{ etiket: 'Değer', degerler: [3, 5, 2] }]}
        />
      );
    case 'to-anlatim-2':
      return (
        <TabloGorsel
          tur="veri"
          mod="tablo"
          sutunlar={['Elma', 'Armut']}
          satirlar={[{ etiket: 'Adet', degerler: [8, 5] }]}
          vurgu={[0]}
        />
      );
    case 'to-anlatim-3':
      return (
        <GrafikGorsel
          tur="veri"
          mod="grafik"
          kategoriler={['A', 'B', 'C']}
          degerler={[3, 8, 5]}
          vurgu={[1]}
        />
      );
    case 'gr-anlatim-1':
      return <GrafikGorsel tur="veri" mod="grafik" kategoriler={['Mavi', 'Kırmızı', 'Sarı']} degerler={[8, 5, 3]} />;
    case 'gr-anlatim-2':
      return <GrafikGorsel tur="veri" mod="grafik" kategoriler={['A', 'B']} degerler={[8, 5]} vurgu={[0]} />;
    case 'gr-anlatim-3':
      return <GrafikGorsel tur="veri" mod="grafik" kategoriler={['X', 'Y', 'Z']} degerler={[12, 5, 8]} vurgu={[0, 2]} />;
    case 'vt-anlatim-1':
      return (
        <View style={styles.anket}>
          <GuvenliMetin style={styles.anketMetin} tamGenislik>
            📋 Anket Formu
          </GuvenliMetin>
        </View>
      );
    case 'vt-anlatim-2':
      return (
        <View style={styles.donusum}>
          <GuvenliMetin style={styles.ok} tamGenislik={false}>
            Anket → Tablo → Grafik
          </GuvenliMetin>
        </View>
      );
    case 'vt-anlatim-3':
      return <GrafikGorsel tur="veri" mod="grafik" kategoriler={['En çok', 'Toplam', 'Fark']} degerler={[12, 35, 7]} />;
    default:
      return (
        <View style={styles.anket}>
          <GuvenliMetin style={styles.anketMetin} tamGenislik>
            {sahne?.replace(/-/g, ' ')}
          </GuvenliMetin>
        </View>
      );
  }
}

function ListeGorsel({ liste = [] }: { liste?: (number | string)[] }) {
  return (
    <View style={styles.liste}>
      {liste.map((d, i) => (
        <View key={i} style={styles.listeOge}>
          <GuvenliMetin style={styles.degerMetin} tamGenislik={false}>
            {String(d)}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

export function VeriGorsel(props: Props) {
  const { mod, sahne, liste } = props;

  if (mod === 'tablo') return <TabloGorsel {...props} />;
  if (mod === 'grafik') return <GrafikGorsel {...props} />;
  if (mod === 'liste') return <ListeGorsel liste={liste} />;
  if (mod === 'anket') return <AnlatimSahne sahne={sahne ?? 'anket-formu'} />;
  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  return null;
}

const styles = StyleSheet.create({
  baslik: { fontSize: 14, fontWeight: '700', color: GEO.metin, marginBottom: 8, textAlign: 'center' },
  tablo: { borderWidth: 2, borderColor: colors.kenarlik, borderRadius: 10, overflow: 'hidden' },
  satir: { flexDirection: 'row' },
  baslikSatir: { backgroundColor: colors.birincilAcik },
  hucre: {
    minHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.kenarlik,
  },
  etiketHucre: { backgroundColor: '#EEF2F8' },
  hucreMetin: { fontSize: 11, fontWeight: '700', color: GEO.metin, textAlign: 'center' },
  etiketMetin: { fontSize: 11, fontWeight: '700', color: GEO.metin },
  degerMetin: { fontSize: 13, fontWeight: '700', color: GEO.metin },
  degerSatir: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 4 },
  degerEtiket: { fontSize: 12, fontWeight: '700', color: colors.birincil },
  anket: {
    backgroundColor: colors.kart,
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.kenarlik,
    alignItems: 'center',
  },
  anketMetin: { fontSize: 16, fontWeight: '700', color: GEO.metin, textAlign: 'center' },
  donusum: { padding: 16, alignItems: 'center' },
  ok: { fontSize: 16, fontWeight: '700', color: colors.birincil },
  liste: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  listeOge: {
    backgroundColor: colors.birincilAcik,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: colors.birincil,
  },
});
