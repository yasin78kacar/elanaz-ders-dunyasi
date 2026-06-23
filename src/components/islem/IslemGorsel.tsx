import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { OnlukBlokIllustration } from '../../../assets/illustrations/OnlukBlokIllustration';
import { SayiSeridi } from '../SayiSeridi';
import { SvgCanvas } from '../SvgCanvas';
import { GuvenliMetin } from '../GuvenliMetin';
import { NesneGrup } from './NesneGrup';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import { useDeviceLayout } from '../../hooks/useDeviceLayout';
import type { GorselIslem } from '../../types/content';

type Props = GorselIslem;

function IslemSembol({ sembol, x, y }: { sembol: string; x: number; y: number }) {
  return (
    <GuvenliMetin
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: 28,
        fontWeight: '800',
        color: colors.birincil,
        width: 36,
        textAlign: 'center',
      }}
      tamGenislik={false}
    >
      {sembol}
    </GuvenliMetin>
  );
}

function CarpmaGrup({
  a,
  b,
  nesne,
  renk1,
}: {
  a: number;
  b: number;
  nesne?: string;
  renk1?: string;
}) {
  const layout = useDeviceLayout();
  const maxW = Math.min(layout.flowSize(340), layout.width - layout.spacing(40));
  const sutun = a <= 4 ? a : a <= 6 ? 3 : a <= 8 ? 4 : 5;
  const grupW = Math.max(44, Math.floor((maxW - layout.spacing(4) * (sutun - 1)) / sutun));
  const maxSatir = Math.min(5, Math.max(2, Math.ceil(b / 2)));

  return (
    <View style={{ width: maxW, alignItems: 'center', paddingVertical: layout.spacing(4) }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: layout.spacing(4),
          width: maxW,
        }}
      >
        {Array.from({ length: a }, (_, i) => (
          <View key={i} style={{ width: grupW }}>
            <NesneGrup adet={b} tip={nesne} renk={renk1} genislik={grupW} maxSatir={maxSatir} />
          </View>
        ))}
      </View>
      <GuvenliMetin
        style={{ fontSize: layout.font.sm, fontWeight: '700', color: GEO.metin, marginTop: layout.spacing(6) }}
        tamGenislik={false}
      >
        {`${a}×${b}=${a * b}`}
      </GuvenliMetin>
    </View>
  );
}

function BolmeGrup({
  a,
  b,
  nesne,
  renk1,
}: {
  a: number;
  b: number;
  nesne?: string;
  renk1?: string;
}) {
  const grupW = 72;
  const grupBasina = a / b;
  return (
    <View style={{ width: 300, alignItems: 'center' }}>
      <NesneGrup adet={a} tip={nesne} renk={renk1} genislik={280} maxSatir={10} />
      <View style={{ flexDirection: 'row', marginTop: 6, gap: 8 }}>
        {Array.from({ length: b }, (_, i) => (
          <View key={i} style={{ borderWidth: 2, borderColor: GEO.mavi, borderRadius: 8, padding: 2 }}>
            <NesneGrup adet={grupBasina} tip={nesne} renk={renk1} genislik={grupW} maxSatir={5} />
          </View>
        ))}
      </View>
      <GuvenliMetin style={{ fontSize: 14, fontWeight: '700', color: GEO.metin, marginTop: 4 }} tamGenislik={false}>
        {`${a}÷${b}=${grupBasina}`}
      </GuvenliMetin>
    </View>
  );
}

function ToplamaCikarmaGrup({
  a,
  b,
  nesne,
  renk1,
  renk2,
  cikarma,
}: {
  a: number;
  b: number;
  nesne?: string;
  renk1?: string;
  renk2?: string;
  cikarma?: boolean;
}) {
  const genislik = 300;
  const grupW = 88;
  return (
    <View style={{ width: genislik, height: 110, position: 'relative' }}>
      <View style={{ position: 'absolute', left: 0, top: 0, width: grupW }}>
        <NesneGrup adet={a} tip={nesne} renk={renk1} genislik={grupW} maxSatir={5} cikarAdet={cikarma ? b : 0} />
      </View>
      {!cikarma && (
        <>
          <View style={{ position: 'absolute', left: grupW + 28, top: 0, width: grupW }}>
            <NesneGrup adet={b} tip={nesne} renk={renk2 ?? 'mavi'} genislik={grupW} maxSatir={5} />
          </View>
          <IslemSembol sembol="+" x={grupW + 4} y={32} />
          <IslemSembol sembol="=" x={grupW * 2 + 32} y={32} />
          <View style={{ position: 'absolute', right: 0, top: 0, width: grupW }}>
            <NesneGrup adet={a + b} tip={nesne} renk={renk1} genislik={grupW} maxSatir={5} />
          </View>
        </>
      )}
      {cikarma && (
        <>
          <IslemSembol sembol="−" x={grupW + 8} y={28} />
          <GuvenliMetin
            style={{ position: 'absolute', left: grupW + 44, top: 34, fontSize: 20, fontWeight: '700', color: GEO.metin }}
            tamGenislik={false}
          >
            {String(b)}
          </GuvenliMetin>
          <IslemSembol sembol="=" x={grupW + 80} y={28} />
          <View style={{ position: 'absolute', right: 0, top: 0, width: grupW }}>
            <NesneGrup adet={a - b} tip={nesne} renk={renk1} genislik={grupW} maxSatir={5} />
          </View>
        </>
      )}
    </View>
  );
}

function BilinmeyenKutu({ a, b, sonuc, bilinmeyen, nesne }: Props) {
  const kutu = (metin: string, x: number) => (
    <View style={{ position: 'absolute', left: x, top: 20, width: 52, height: 52, borderWidth: 3, borderColor: colors.birincil, borderRadius: 10, backgroundColor: colors.birincilAcik, justifyContent: 'center', alignItems: 'center' }}>
      <GuvenliMetin style={{ fontSize: 22, fontWeight: '800', color: colors.birincil }} tamGenislik={false}>
        {metin}
      </GuvenliMetin>
    </View>
  );
  const va = bilinmeyen === 'a' ? '□' : String(a ?? '');
  const vb = bilinmeyen === 'b' ? '□' : String(b ?? '');
  const vs = bilinmeyen === 'sonuc' ? '□' : String(sonuc ?? '');
  return (
    <View style={{ width: 300, height: 100, position: 'relative' }}>
      {kutu(va, 0)}
      <IslemSembol sembol="+" x={58} y={24} />
      <View style={{ position: 'absolute', left: 100, top: 28 }}>
        <NesneGrup adet={b ?? 0} tip={nesne} renk="mavi" genislik={60} maxSatir={4} />
      </View>
      <IslemSembol sembol="=" x={168} y={24} />
      <View style={{ position: 'absolute', right: 0, top: 8 }}>
        <NesneGrup adet={sonuc ?? 0} tip={nesne} genislik={80} maxSatir={5} />
      </View>
      <GuvenliMetin style={{ position: 'absolute', left: 100, top: 2, fontSize: 14, fontWeight: '700' }} tamGenislik={false}>
        {vb}
      </GuvenliMetin>
      <GuvenliMetin style={{ position: 'absolute', right: 8, top: 2, fontSize: 14, fontWeight: '700' }} tamGenislik={false}>
        {vs}
      </GuvenliMetin>
    </View>
  );
}

function Karsilastirma({ islemler = [] }: { islemler?: string[] }) {
  return (
    <View style={styles.karsilastirma}>
      {islemler.map((satir, i) => (
        <GuvenliMetin key={i} style={styles.islemSatir} tamGenislik>
          {satir}
        </GuvenliMetin>
      ))}
    </View>
  );
}

function AdimlarGorsel({ adimlar = [] }: { adimlar?: { etiket?: string; deger: number }[] }) {
  const genislik = Math.max(260, adimlar.length * 72 + 40);
  return (
    <SvgCanvas width={genislik} height={90} labels={adimlar.map((a, i) => ({
      text: a.etiket ?? String(a.deger),
      left: 24 + i * 72,
      top: 58,
      width: 64,
      fontSize: 14,
      fontWeight: '700',
      textAlign: 'center',
    }))}>
      <Svg width={genislik} height={90} viewBox={`0 0 ${genislik} 90`}>
        {adimlar.map((a, i) => (
          <Circle key={i} cx={56 + i * 72} cy={32} r={22} fill={i === adimlar.length - 1 ? GEO.yesil : GEO.mavi} />
        ))}
        {adimlar.slice(0, -1).map((_, i) => (
          <Path
            key={`ok-${i}`}
            d={`M ${78 + i * 72} 32 L ${34 + (i + 1) * 72} 32`}
            stroke={GEO.turuncu}
            strokeWidth={2}
            markerEnd="url(#arrow)"
          />
        ))}
        {adimlar.map((a, i) => (
          <SvgText key={`t-${i}`} x={56 + i * 72} y={38} fill="#fff" fontSize={16} fontWeight="bold" textAnchor="middle">
            {String(a.deger)}
          </SvgText>
        ))}
      </Svg>
    </SvgCanvas>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  const w = 300;
  const h = 120;
  switch (sahne) {
    case 'ti-anlatim-1':
      return <ToplamaCikarmaGrup a={3} b={2} nesne="elma" renk1="kirmizi" renk2="yesil" />;
    case 'ti-anlatim-2':
      return <ToplamaCikarmaGrup a={4} b={3} nesne="yildiz" renk1="sari" renk2="mavi" />;
    case 'ti-anlatim-3':
      return (
        <View>
          <Karsilastirma islemler={['2 + 5 = 7', '5 + 2 = 7']} />
          <ToplamaCikarmaGrup a={2} b={5} nesne="top" renk1="kirmizi" renk2="mavi" />
        </View>
      );
    case 'ci-anlatim-1':
      return <ToplamaCikarmaGrup a={5} b={2} nesne="elma" renk1="kirmizi" cikarma />;
    case 'ci-anlatim-2':
      return <ToplamaCikarmaGrup a={7} b={3} nesne="top" renk1="mavi" cikarma />;
    case 'ci-anlatim-3':
      return <Karsilastirma islemler={['5 − 5 = 0', '5 − 0 = 5']} />;
    case 'zt-anlatim-1':
    case 'zc-anlatim-1':
      return (
        <SvgCanvas width={w} height={h} labels={[{ text: sahne.startsWith('zt') ? '6 + 3 = 9' : '10 − 4 = 6', left: w / 2, top: 78, fontSize: 18, fontWeight: '800', textAlign: 'center' }]}>
          <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
            <Circle cx={80} cy={50} r={28} fill={GEO.sari} />
            <Circle cx={68} cy={44} r={4} fill={GEO.metin} />
            <Circle cx={92} cy={44} r={4} fill={GEO.metin} />
            <Path d="M 72 58 Q 80 68 88 58" stroke={GEO.metin} strokeWidth={2} fill="none" />
            <Rect x={130} y={20} width={150} height={50} rx={12} fill={GEO.beyaz} stroke={GEO.mavi} strokeWidth={2} />
          </Svg>
        </SvgCanvas>
      );
    case 'zt-anlatim-2':
      return <AdimlarGorsel adimlar={[{ etiket: '8', deger: 8 }, { etiket: '+2', deger: 10 }, { etiket: '+3', deger: 13 }]} />;
    case 'zt-anlatim-3':
      return (
        <SayiSeridi tur="sayi-seridi" baslangic={12} adim={1} adimSayisi={6} vurgulananlar={[14, 17]} />
      );
    case 'zc-anlatim-2':
      return <AdimlarGorsel adimlar={[{ etiket: '13', deger: 13 }, { etiket: '−3', deger: 10 }, { etiket: '−2', deger: 8 }]} />;
    case 'zc-anlatim-3':
      return (
        <SayiSeridi tur="sayi-seridi" baslangic={11} adim={1} adimSayisi={6} vurgulananlar={[15, 11]} />
      );
    case 'tcp-anlatim-1':
      return (
        <Karsilastirma
          islemler={['toplam / hepsi / birlikte → +', 'kaldı / gitti / azaldı → −']}
        />
      );
    case 'tcp-anlatim-2':
      return (
        <Karsilastirma
          islemler={['1) Oku', '2) Ne soruyor?', '3) İşlem seç', '4) Hesapla', '5) Kontrol et']}
        />
      );
    case 'tcp-anlatim-3':
      return <AdimlarGorsel adimlar={[{ etiket: '1.adım', deger: 1 }, { etiket: '2.adım', deger: 2 }]} />;
    case 's1-anlatim-1':
      return <NesneGrup adet={5} tip="elma" renk="kirmizi" genislik={280} maxSatir={10} />;
    case 's1-anlatim-2':
      return (
        <SayiSeridi tur="sayi-seridi" baslangic={1} adim={1} adimSayisi={10} vurgulananlar={[3, 7]} />
      );
    case 's1-anlatim-3':
      return (
        <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
          <NesneGrup adet={6} tip="top" renk="kirmizi" genislik={120} maxSatir={6} />
          <NesneGrup adet={9} tip="top" renk="mavi" genislik={120} maxSatir={6} />
        </View>
      );
    case 'cp-anlatim-1':
      return <CarpmaGrup a={3} b={4} nesne="elma" renk1="kirmizi" />;
    case 'cp-anlatim-2':
      return <Karsilastirma islemler={['2 × 5 = 10', '5 × 2 = 10']} />;
    case 'cp-anlatim-3':
      return <CarpmaGrup a={4} b={3} nesne="top" renk1="mavi" />;
    case 'bl-anlatim-1':
      return <BolmeGrup a={12} b={3} nesne="elma" renk1="yesil" />;
    case 'bl-anlatim-2':
      return <Karsilastirma islemler={['Eşit paylaştırma', 'Her grupta aynı sayı']} />;
    case 'bl-anlatim-3':
      return <Karsilastirma islemler={['3 × 4 = 12', '12 ÷ 3 = 4', '12 ÷ 4 = 3']} />;
    default:
      return <ProblemSahne sahne={sahne} />;
  }
}

function ProblemSahne({ sahne }: { sahne: string }) {
  const w = 300;
  const h = 110;
  const etiket = sahne.replace(/-/g, ' ');
  return (
    <SvgCanvas width={w} height={h} labels={[{ text: etiket, left: w / 2, top: 88, fontSize: 12, textAlign: 'center', color: GEO.metin }]}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={10} y={15} width={w - 20} height={h - 35} rx={14} fill={GEO.beyaz} stroke={GEO.mavi} strokeWidth={2} />
        <Circle cx={60} cy={52} r={18} fill={GEO.kirmizi} />
        <Circle cx={100} cy={52} r={18} fill={GEO.turuncu} />
        <Circle cx={140} cy={52} r={18} fill={GEO.yesil} />
        <Rect x={180} y={34} width={90} height={36} rx={8} fill={GEO.sari} opacity={0.5} />
        <Line x1={30} y1={78} x2={w - 30} y2={78} stroke={GEO.gri} strokeWidth={1} />
      </Svg>
    </SvgCanvas>
  );
}

function ZihinBalon({ a, b, sonuc, cikarma }: { a: number; b: number; sonuc?: number; cikarma?: boolean }) {
  const metin = cikarma ? `${a} − ${b} = ${sonuc ?? a - b}` : `${a} + ${b} = ${sonuc ?? a + b}`;
  return (
    <View style={{ alignItems: 'center' }}>
      <SvgCanvas width={280} height={100} labels={[{ text: metin, left: 140, top: 12, fontSize: 18, fontWeight: '800', textAlign: 'center' }]}>
        <Svg width={280} height={100} viewBox="0 0 280 100">
          <Circle cx={60} cy={58} r={24} fill={GEO.sari} />
          <Rect x={110} y={30} width={150} height={56} rx={16} fill={colors.birincilAcik} stroke={colors.birincil} strokeWidth={2} />
        </Svg>
      </SvgCanvas>
      <NesneGrup adet={Math.min(a, 10)} tip="top" renk="kirmizi" genislik={120} maxSatir={5} />
    </View>
  );
}

function SaymaGrup({ adet, nesne, renk1 }: { adet: number; nesne?: string; renk1?: string }) {
  return (
    <View style={{ alignItems: 'center', paddingVertical: 8 }}>
      <NesneGrup adet={adet} tip={nesne} renk={renk1} genislik={280} maxSatir={10} />
    </View>
  );
}

function KarsilastirmaGrup({
  a,
  b,
  nesne,
  renk1,
  renk2,
}: {
  a: number;
  b: number;
  nesne?: string;
  renk1?: string;
  renk2?: string;
}) {
  return (
    <View style={{ flexDirection: 'row', gap: 16, justifyContent: 'center', alignItems: 'center', paddingVertical: 8 }}>
      <NesneGrup adet={a} tip={nesne} renk={renk1} genislik={130} maxSatir={10} />
      <NesneGrup adet={b} tip={nesne} renk={renk2 ?? 'mavi'} genislik={130} maxSatir={10} />
    </View>
  );
}

export function IslemGorsel(props: Props) {
  const { mod, a = 0, b = 0, sonuc, nesne, renk1, renk2, bilinmeyen, islemler, adimlar, sahne } = props;

  switch (mod) {
    case 'sayma-grup':
      return <SaymaGrup adet={a || sonuc || 0} nesne={nesne} renk1={renk1} />;
    case 'karsilastirma-grup':
      return <KarsilastirmaGrup a={a} b={b} nesne={nesne} renk1={renk1} renk2={renk2} />;
    case 'toplama-grup':
      return <ToplamaCikarmaGrup a={a} b={b} nesne={nesne} renk1={renk1} renk2={renk2} />;
    case 'cikarma-grup':
      return <ToplamaCikarmaGrup a={a} b={b} nesne={nesne} renk1={renk1} cikarma />;
    case 'carpma-grup':
      return <CarpmaGrup a={a} b={b} nesne={nesne} renk1={renk1} />;
    case 'bolme-grup':
      return <BolmeGrup a={a} b={b} nesne={nesne} renk1={renk1} />;
    case 'bilinmeyen':
      return <BilinmeyenKutu {...props} />;
    case 'karsilastirma':
      return <Karsilastirma islemler={islemler} />;
    case 'adimlar':
      return <AdimlarGorsel adimlar={adimlar} />;
    case 'onluk-toplama': {
      const onluk = Math.floor(a / 10);
      const birlikA = a % 10;
      const birlikB = b;
      return (
        <View style={{ alignItems: 'center' }}>
          <OnlukBlokIllustration onluk={onluk} birlik={birlikA} width={200} height={100} />
          <GuvenliMetin style={styles.arti} tamGenislik={false}>{`+ ${birlikB}`}</GuvenliMetin>
          <OnlukBlokIllustration
            onluk={Math.floor((a + b) / 10)}
            birlik={(a + b) % 10}
            width={200}
            height={100}
          />
        </View>
      );
    }
    case 'zihin':
      return <ZihinBalon a={a} b={b} sonuc={sonuc} />;
    case 'zihin-cik':
      return <ZihinBalon a={a} b={b} sonuc={sonuc} cikarma />;
    case 'esitlik':
      return <Karsilastirma islemler={islemler} />;
    case 'anlatim':
      return <AnlatimSahne sahne={sahne ?? ''} />;
    case 'problem':
      return <ProblemSahne sahne={sahne ?? ''} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  karsilastirma: { gap: 6, paddingVertical: 4 },
  islemSatir: { fontSize: 16, fontWeight: '700', color: GEO.metin, textAlign: 'center' },
  arti: { fontSize: 20, fontWeight: '800', color: colors.birincil, marginVertical: 4 },
});
