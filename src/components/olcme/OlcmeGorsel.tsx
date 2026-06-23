import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Ellipse, Line, Path, Rect } from 'react-native-svg';
import { SvgCanvas } from '../SvgCanvas';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselOlcme } from '../../types/content';

type Props = GorselOlcme;

const CM_RENK = [GEO.kirmizi, GEO.turuncu, GEO.sari, GEO.yesil, GEO.mavi, GEO.mor];

function Cetvel({ baslangic = 0, bitis = 20, nesne, vurguBas, vurguBit }: {
  baslangic?: number;
  bitis?: number;
  nesne?: string;
  vurguBas?: number;
  vurguBit?: number;
}) {
  const w = 300;
  const h = 90;
  const sol = 20;
  const sag = w - 20;
  const aralik = bitis - baslangic;
  const x = (cm: number) => sol + ((cm - baslangic) / aralik) * (sag - sol);
  const vb = vurguBas ?? baslangic;
  const ve = vurguBit ?? bitis;

  return (
    <SvgCanvas
      width={w}
      height={h}
      labels={[
        { text: 'cm', left: w - 24, top: 8, fontSize: 11, fontWeight: '700' },
        ...(nesne
          ? [{ text: `${ve - vb} cm`, left: (x(vb) + x(ve)) / 2, top: 52, fontSize: 13, fontWeight: '800' as const, textAlign: 'center' as const }]
          : []),
      ]}
    >
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={sol} y={28} width={sag - sol} height={18} fill="#FFF8E1" stroke={GEO.metin} strokeWidth={2} rx={4} />
        {Array.from({ length: aralik + 1 }, (_, i) => {
          const cm = baslangic + i;
          const cx = x(cm);
          const renk = CM_RENK[i % CM_RENK.length];
          return (
            <Line key={cm} x1={cx} y1={28} x2={cx} y2={cm % 5 === 0 ? 50 : 44} stroke={renk} strokeWidth={cm % 5 === 0 ? 2.5 : 1.5} />
          );
        })}
        {nesne && (
          <>
            <Rect x={x(vb)} y={18} width={Math.max(8, x(ve) - x(vb))} height={8} fill={GEO.turuncu} rx={2} opacity={0.9} />
            <Rect x={x(vb) - 2} y={14} width={Math.max(12, x(ve) - x(vb) + 4)} height={4} fill={GEO.kahve} opacity={0.5} />
          </>
        )}
      </Svg>
    </SvgCanvas>
  );
}

function UzunlukKarsilastir({ uzunluklar = [], etiketler }: { uzunluklar?: number[]; etiketler?: string[] }) {
  const w = 300;
  const max = Math.max(...uzunluklar, 1);
  return (
    <SvgCanvas
      width={w}
      height={uzunluklar.length * 36 + 16}
      labels={uzunluklar.map((u, i) => ({
        text: etiketler?.[i] ?? `${u} cm`,
        left: 24 + (u / max) * 200 + 8,
        top: 14 + i * 36,
        fontSize: 12,
        fontWeight: '700',
      }))}
    >
      <Svg width={w} height={uzunluklar.length * 36 + 16} viewBox={`0 0 ${w} ${uzunluklar.length * 36 + 16}`}>
        {uzunluklar.map((u, i) => (
          <Rect
            key={i}
            x={24}
            y={8 + i * 36}
            width={Math.max(20, (u / max) * 200)}
            height={16}
            fill={[GEO.kirmizi, GEO.mavi, GEO.yesil][i % 3]}
            rx={4}
          />
        ))}
      </Svg>
    </SvgCanvas>
  );
}

function Terazi({
  sol = 0,
  sag = 0,
  durum = 'dengede',
  solBirim = 'g',
  sagBirim = 'g',
}: Pick<Props, 'sol' | 'sag' | 'durum' | 'solBirim' | 'sagBirim'>) {
  const w = 280;
  const h = 130;
  const egim = durum === 'sol' ? 8 : durum === 'sag' ? -8 : 0;
  const solMetin = `${sol}${solBirim}`;
  const sagMetin = `${sag}${sagBirim}`;

  return (
    <SvgCanvas
      width={w}
      height={h}
      labels={[
        { text: solMetin, left: 52, top: 88, fontSize: 12, fontWeight: '700', textAlign: 'center' },
        { text: sagMetin, left: 198, top: 88, fontSize: 12, fontWeight: '700', textAlign: 'center' },
      ]}
    >
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={130} y={20} width={20} height={70} fill={GEO.gri} rx={3} />
        <Line x1={60} y1={48 + egim} x2={220} y2={48 - egim} stroke={GEO.kahve} strokeWidth={4} />
        <Ellipse cx={70} cy={58 + egim} rx={36} ry={10} fill={GEO.metin} opacity={0.2} />
        <Ellipse cx={210} cy={58 - egim} rx={36} ry={10} fill={GEO.metin} opacity={0.2} />
        <Path d={`M 50 ${62 + egim} Q 70 ${42 + egim} 90 ${62 + egim} Z`} fill={GEO.mavi} />
        <Path d={`M 190 ${62 - egim} Q 210 ${42 - egim} 230 ${62 - egim} Z`} fill={GEO.turuncu} />
        <Circle cx={70} cy={50 + egim} r={14} fill={GEO.kirmizi} />
        <Circle cx={210} cy={50 - egim} r={14} fill={GEO.yesil} />
      </Svg>
    </SvgCanvas>
  );
}

function SiviKap({
  miktar,
  birim = 'L',
  kapTip = 'sise',
  doluluk = 0.7,
}: Pick<Props, 'miktar' | 'birim' | 'kapTip' | 'doluluk'>) {
  const w = 120;
  const h = 110;
  const etiket = `${miktar} ${birim}`;
  const suY = 30 + (1 - (doluluk ?? 0.7)) * 50;

  return (
    <View style={{ alignItems: 'center' }}>
      <SvgCanvas width={w} height={h} labels={[{ text: etiket, left: w / 2, top: h - 14, fontSize: 12, fontWeight: '700', textAlign: 'center' }]}>
        <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          {kapTip === 'kova' ? (
            <Path d="M 30 25 L 40 90 L 90 90 L 100 25 Z" fill={GEO.gri} stroke={GEO.metin} strokeWidth={2} />
          ) : kapTip === 'bardak' ? (
            <Rect x={40} y={30} width={40} height={60} fill={GEO.gri} stroke={GEO.metin} strokeWidth={2} rx={4} />
          ) : (
            <>
              <Rect x={45} y={35} width={30} height={55} fill={GEO.gri} stroke={GEO.metin} strokeWidth={2} rx={3} />
              <Rect x={72} y={45} width={12} height={8} fill={GEO.gri} stroke={GEO.metin} strokeWidth={1} />
            </>
          )}
          <Rect x={35} y={suY} width={60} height={90 - suY} fill={GEO.mavi} opacity={0.65} rx={2} />
        </Svg>
      </SvgCanvas>
    </View>
  );
}

function SiviKarsilastir({ miktarlar = [] }: { miktarlar?: { miktar: number | string; birim: string }[] }) {
  return (
    <View style={styles.siviSatir}>
      {miktarlar.map((m, i) => (
        <SiviKap key={i} miktar={m.miktar} birim={m.birim} kapTip={['sise', 'bardak', 'kova'][i % 3]} doluluk={0.4 + i * 0.2} />
      ))}
    </View>
  );
}

function AnalogSaat({ saat = 12, dakika = 0 }: { saat?: number; dakika?: number }) {
  const w = 120;
  const h = 120;
  const cx = 60;
  const cy = 60;
  const r = 48;
  const saatAci = ((saat % 12) + dakika / 60) * 30 - 90;
  const dkAci = dakika * 6 - 90;
  const kol = (aci: number, len: number, kalin: number, renk: string) => {
    const rad = (aci * Math.PI) / 180;
    return (
      <Line
        x1={cx}
        y1={cy}
        x2={cx + Math.cos(rad) * len}
        y2={cy + Math.sin(rad) * len}
        stroke={renk}
        strokeWidth={kalin}
        strokeLinecap="round"
      />
    );
  };

  return (
    <SvgCanvas width={w} height={h}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Circle cx={cx} cy={cy} r={r} fill={colors.kart} stroke={GEO.metin} strokeWidth={3} />
        {[...Array(12)].map((_, i) => {
          const aci = (i * 30 - 90) * (Math.PI / 180);
          return (
            <Circle
              key={i}
              cx={cx + Math.cos(aci) * (r - 8)}
              cy={cy + Math.sin(aci) * (r - 8)}
              r={i % 3 === 0 ? 3 : 1.5}
              fill={GEO.metin}
            />
          );
        })}
        {kol(saatAci, 28, 4, GEO.metin)}
        {kol(dkAci, 38, 3, GEO.kirmizi)}
        <Circle cx={cx} cy={cy} r={4} fill={GEO.turuncu} />
      </Svg>
    </SvgCanvas>
  );
}

function DijitalSaat({ saat = 0, dakika = 0 }: { saat?: number; dakika?: number }) {
  const metin = `${String(saat).padStart(2, '0')}:${String(dakika).padStart(2, '0')}`;
  return (
    <View style={styles.dijital}>
      <GuvenliMetin style={styles.dijitalMetin} tamGenislik={false}>
        {metin}
      </GuvenliMetin>
    </View>
  );
}

function IkiSaat({
  saat = 0,
  dakika = 0,
  saat2 = 0,
  dakika2 = 0,
}: Pick<Props, 'saat' | 'dakika' | 'saat2' | 'dakika2'>) {
  return (
    <View style={styles.ikiSaat}>
      <AnalogSaat saat={saat} dakika={dakika} />
      <GuvenliMetin style={styles.ok} tamGenislik={false}>
        →
      </GuvenliMetin>
      <AnalogSaat saat={saat2} dakika={dakika2} />
    </View>
  );
}

function OlcmeAraclari({ sahne }: { sahne?: string }) {
  const araclar =
    sahne === 'tartma-araclari' || sahne === 'dort-arac-tartma'
      ? ['Cetvel', 'Terazi', 'Saat', 'Bardak']
      : sahne === 'sivi-araclari'
        ? ['cm', 'kg', 'L', 'saat']
        : ['Cetvel', 'Terazi', 'Saat', 'Termometre'];
  return (
    <View style={styles.aracSatir}>
      {araclar.map((a) => (
        <View key={a} style={styles.aracKutu}>
          <GuvenliMetin style={styles.aracMetin} tamGenislik={false}>
            {a}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'uo-anlatim-1':
      return <Cetvel baslangic={0} bitis={20} />;
    case 'uo-anlatim-2':
      return <Cetvel baslangic={0} bitis={10} nesne="kalem" vurguBas={0} vurguBit={8} />;
    case 'uo-anlatim-3':
      return <UzunlukKarsilastir uzunluklar={[6, 10, 14]} etiketler={['kısa', 'orta', 'uzun']} />;
    case 'ta-anlatim-1':
      return <Terazi sol="elma" sag="taş" durum="dengede" solBirim="" sagBirim="" />;
    case 'ta-anlatim-2':
      return (
        <View style={styles.teraziUc}>
          <Terazi sol={3} sag={3} durum="dengede" solBirim="kg" sagBirim="kg" />
          <Terazi sol={5} sag={2} durum="sol" solBirim="kg" sagBirim="kg" />
          <Terazi sol={2} sag={5} durum="sag" solBirim="kg" sagBirim="kg" />
        </View>
      );
    case 'ta-anlatim-3':
      return (
        <View style={styles.siviSatir}>
          <GuvenliMetin style={styles.aracMetin} tamGenislik={false}>
            1 kg = 1000 g
          </GuvenliMetin>
          <Terazi sol={1} sag={1000} durum="dengede" solBirim="kg" sagBirim="g" />
        </View>
      );
    case 'sm-anlatim-1':
      return <SiviKap miktar={1} birim="L" kapTip="olcu" doluluk={0.6} />;
    case 'sm-anlatim-2':
      return (
        <View style={styles.siviSatir}>
          <SiviKap miktar={1} birim="L" />
          <GuvenliMetin style={styles.ok} tamGenislik={false}>
            =
          </GuvenliMetin>
          <SiviKap miktar={1000} birim="mL" kapTip="bardak" />
        </View>
      );
    case 'sm-anlatim-3':
      return <SiviKarsilastir miktarlar={[{ miktar: 0, birim: 'L' }, { miktar: '½', birim: 'L' }, { miktar: 1, birim: 'L' }]} />;
    case 'zm-anlatim-1':
      return (
        <View style={styles.ikiSaat}>
          <AnalogSaat saat={3} dakika={0} />
          <View>
            <GuvenliMetin style={styles.etiketKucuk} tamGenislik={false}>
              kısa kol → saat
            </GuvenliMetin>
            <GuvenliMetin style={styles.etiketKucuk} tamGenislik={false}>
              uzun kol → dakika
            </GuvenliMetin>
          </View>
        </View>
      );
    case 'zm-anlatim-2':
      return (
        <View style={styles.ikiSaat}>
          <AnalogSaat saat={3} dakika={0} />
          <DijitalSaat saat={3} dakika={0} />
        </View>
      );
    case 'zm-anlatim-3':
      return (
        <View style={styles.ikiSaat}>
          <AnalogSaat saat={4} dakika={30} />
          <DijitalSaat saat={4} dakika={30} />
        </View>
      );
    case 'pr-anlatim-1':
      return <ParaGorsel tutar={5} paraTur="karisik" />;
    case 'pr-anlatim-2':
      return <ParaGorsel tutar={10} paraTur="banknot" />;
    case 'pr-anlatim-3':
      return <ParaGorsel tutar={3} paraTur="madeni" />;
    case 'zm-yarim-saat':
    case 'zm-120-dakika':
    case 'zm-180-dakika':
      return <OlcmeSahne sahne={sahne} />;
    default:
      return <OlcmeSahne sahne={sahne} />;
  }
}

function ParaGorsel({ tutar = 5, paraTur = 'karisik' }: { tutar?: number | string; paraTur?: string }) {
  const w = 300;
  const h = 100;
  const banknot = paraTur === 'banknot' || paraTur === 'karisik';
  const madeni = paraTur === 'madeni' || paraTur === 'karisik';
  return (
    <SvgCanvas
      width={w}
      height={h}
      labels={[{ text: `${tutar} TL`, left: w / 2, top: 82, fontSize: 14, fontWeight: '800', textAlign: 'center' }]}
    >
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {banknot && (
          <Rect x={24} y={18} width={90} height={48} rx={6} fill={GEO.yesil} stroke={GEO.metin} strokeWidth={2} />
        )}
        {madeni && (
          <>
            <Circle cx={banknot ? 160 : 80} cy={42} r={22} fill={GEO.sari} stroke={GEO.metin} strokeWidth={2} />
            <Circle cx={banknot ? 200 : 140} cy={42} r={18} fill={GEO.turuncu} stroke={GEO.metin} strokeWidth={2} />
            <Circle cx={banknot ? 235 : 190} cy={42} r={14} fill={GEO.kirmizi} stroke={GEO.metin} strokeWidth={1.5} />
          </>
        )}
      </Svg>
    </SvgCanvas>
  );
}

function OlcmeSahne({ sahne }: { sahne: string }) {
  const etiket = sahne.replace(/-/g, ' ');
  return (
    <View style={styles.genelSahne}>
      <GuvenliMetin style={styles.aracMetin} tamGenislik>
        {etiket}
      </GuvenliMetin>
    </View>
  );
}

export function OlcmeGorsel(props: Props) {
  const { mod, sahne, baslangic, bitis, uzunluklar, etiketler, nesne, sol, sag, durum, solBirim, sagBirim, miktar, birim, kapTip, doluluk, miktarlar, saat, dakika, saat2, dakika2, tutar, paraTur } = props;

  switch (mod) {
    case 'uzunluk':
      if (sahne === 'cetvel-nesne') {
        return <Cetvel baslangic={baslangic} bitis={bitis} nesne={nesne} vurguBas={baslangic} vurguBit={bitis} />;
      }
      if (sahne === 'uzunluk-etiket') {
        return <UzunlukKarsilastir uzunluklar={uzunluklar} etiketler={etiketler} />;
      }
      return <UzunlukKarsilastir uzunluklar={uzunluklar} etiketler={etiketler} />;
    case 'tartma':
      return <Terazi sol={sol} sag={sag} durum={durum} solBirim={solBirim} sagBirim={sagBirim} />;
    case 'sivi':
      if (sahne === 'karsilastir' && miktarlar) {
        return <SiviKarsilastir miktarlar={miktarlar} />;
      }
      return <SiviKap miktar={miktar} birim={birim} kapTip={kapTip} doluluk={doluluk} />;
    case 'zaman':
      if (sahne === 'dijital') {
        return <DijitalSaat saat={saat} dakika={dakika} />;
      }
      if (sahne === 'iki-saat') {
        return <IkiSaat saat={saat} dakika={dakika} saat2={saat2} dakika2={dakika2} />;
      }
      return <AnalogSaat saat={saat} dakika={dakika} />;
    case 'para':
      return <ParaGorsel tutar={tutar} paraTur={paraTur} />;
    case 'araclar':
      return <OlcmeAraclari sahne={sahne} />;
    case 'anlatim':
      return <AnlatimSahne sahne={sahne ?? ''} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  siviSatir: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', gap: 8, flexWrap: 'wrap' },
  ikiSaat: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  ok: { fontSize: 22, fontWeight: '800', color: colors.birincil },
  dijital: {
    backgroundColor: GEO.metin,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: GEO.gri,
  },
  dijitalMetin: { fontSize: 28, fontWeight: '800', color: GEO.yesil, fontVariant: ['tabular-nums'] },
  aracSatir: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  aracKutu: {
    backgroundColor: colors.birincilAcik,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: colors.birincil,
    minWidth: 64,
    alignItems: 'center',
  },
  aracMetin: { fontSize: 14, fontWeight: '700', color: GEO.metin, textAlign: 'center' },
  teraziUc: { gap: 8 },
  genelSahne: {
    backgroundColor: colors.kart,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: colors.kenarlik,
    minHeight: 60,
    justifyContent: 'center',
  },
  etiketKucuk: { fontSize: 12, fontWeight: '600', color: GEO.metin, marginVertical: 2 },
});
