import Svg, { Circle, Ellipse, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { SvgCanvas } from '../SvgCanvas';
import { GEO } from '../nesneler/colors';
import type { GorselOkumaKosesi } from '../../types/content';

type Props = GorselOkumaKosesi;

const W = 280;
const H = 120;

function Baslik({ text, y = 14 }: { text: string; y?: number }) {
  return (
    <SvgText x={W / 2} y={y} fontSize={11} fill={GEO.metin} textAnchor="middle" fontWeight="600">
      {text}
    </SvgText>
  );
}

function KalemSira({ eksikTuruncu = false }: { eksikTuruncu?: boolean }) {
  const renkler = ['#E74C3C', '#F1C40F', '#3498DB', '#2ECC71'];
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text={eksikTuruncu ? 'Turuncu eksik!' : 'Boya kalemleri'} />
      {renkler.map((renk, i) => (
        <Rect key={i} x={40 + i * 50} y={35} width={14} height={55} fill={renk} rx={2} />
      ))}
      {eksikTuruncu ? (
        <Rect x={240} y={35} width={14} height={55} fill="none" stroke="#BDC3C7" strokeWidth={2} strokeDasharray="4 3" rx={2} />
      ) : (
        <Rect x={240} y={35} width={14} height={55} fill="#E67E22" rx={2} />
      )}
    </Svg>
  );
}

function RenkKaristirma() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Kırmızı + Sarı = Turuncu" />
      <Circle cx={70} cy={65} r={28} fill="#E74C3C" />
      <SvgText x={115} y={70} fontSize={18} fill={GEO.metin} fontWeight="700">+</SvgText>
      <Circle cx={160} cy={65} r={28} fill="#F1C40F" />
      <SvgText x={205} y={70} fontSize={18} fill={GEO.metin} fontWeight="700">=</SvgText>
      <Circle cx={250} cy={65} r={28} fill="#E67E22" />
    </Svg>
  );
}

function PanoResim() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Sınıf panosu" />
      <Rect x={50} y={25} width={180} height={80} fill="#D5E8D4" stroke="#82B366" strokeWidth={2} rx={4} />
      <Circle cx={120} cy={60} r={14} fill="#E67E22" />
      <Rect x={150} y={50} width={8} height={28} fill="#8B4513" />
      <Ellipse cx={154} cy={82} rx={22} ry={10} fill="#2ECC71" />
    </Svg>
  );
}

function CocukFigur({ x, renk = GEO.mavi }: { x: number; renk?: string }) {
  return (
    <>
      <Circle cx={x} cy={55} r={12} fill="#FFDBAC" />
      <Rect x={x - 10} y={67} width={20} height={28} fill={renk} rx={4} />
    </>
  );
}

function TohumEkme() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Sınıf bahçesi" />
      <Rect x={0} y={85} width={W} height={35} fill="#8B6914" />
      <Ellipse cx={80} cy={88} rx={30} ry={8} fill="#5D4037" />
      <Ellipse cx={200} cy={88} rx={30} ry={8} fill="#5D4037" />
      <CocukFigur x={80} renk={GEO.kirmizi} />
      <CocukFigur x={200} renk={GEO.yesil} />
      <Circle cx={140} cy={30} r={18} fill="#FDD835" />
    </Svg>
  );
}

function FilizAlt() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Toprak altında büyüyor" />
      <Rect x={40} y={30} width={200} height={70} fill="#8B6914" rx={4} />
      <Path d="M 140 70 Q 140 50 140 40" stroke="#43A047" strokeWidth={3} fill="none" />
      <Ellipse cx={140} cy={38} rx={8} ry={5} fill="#66BB6A" />
      <Line x1={40} y1={55} x2={240} y2={55} stroke="#fff" strokeWidth={1} strokeDasharray="6 4" opacity={0.5} />
      <SvgText x={140} y={62} fontSize={9} fill="#fff" textAnchor="middle">yerin altı</SvgText>
    </Svg>
  );
}

function DomatesBitkisi({ filiz = false }: { filiz?: boolean }) {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text={filiz ? 'Yeşil filiz' : 'Domatesler yetişti'} />
      <Rect x={0} y={90} width={W} height={30} fill="#8B6914" />
      <Line x1={140} y1={90} x2={140} y2={filiz ? 55 : 40} stroke="#43A047" strokeWidth={4} />
      {filiz ? (
        <Ellipse cx={140} cy={50} rx={10} ry={6} fill="#66BB6A" />
      ) : (
        <>
          <Ellipse cx={110} cy={45} rx={12} ry={12} fill="#E53935" />
          <Ellipse cx={170} cy={50} rx={12} ry={12} fill="#E53935" />
          <Ellipse cx={140} cy={35} rx={10} ry={10} fill="#E53935" />
        </>
      )}
    </Svg>
  );
}

function GunesliPark() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Güneşli piknik günü" />
      <Circle cx={230} cy={30} r={20} fill="#FDD835" />
      <Rect x={0} y={85} width={W} height={35} fill="#81C784" />
      <Ellipse cx={60} cy={70} rx={18} ry={25} fill="#388E3C" />
      <Rect x={120} y={70} width={50} height={30} fill="#E67E22" rx={4} />
      <CocukFigur x={200} renk="#E53935" />
    </Svg>
  );
}

function YagmurAile() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Yağmur başladı" />
      <Rect x={0} y={0} width={W} height={H} fill="#90A4AE" opacity={0.3} />
      {[50, 90, 130, 170, 210].map((x) => (
        <Line key={x} x1={x} y1={30} x2={x - 5} y2={50} stroke="#42A5F5" strokeWidth={2} />
      ))}
      <CocukFigur x={100} renk="#E53935" />
      <CocukFigur x={160} renk={GEO.mavi} />
      <CocukFigur x={220} renk={GEO.yesil} />
    </Svg>
  );
}

function SalonPiknik() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Salon pikniği" />
      <Rect x={30} y={50} width={220} height={55} fill="#FFCC80" rx={6} />
      <Rect x={100} y={60} width={30} height={20} fill="#FFF9C4" rx={2} />
      <Rect x={150} y={60} width={30} height={20} fill="#FFF9C4" rx={2} />
      <Rect x={200} y={45} width={8} height={25} fill="#FFE082" />
      <Ellipse cx={204} cy={40} rx={10} ry={6} fill="#FFEB3B" opacity={0.8} />
      <CocukFigur x={70} renk="#E53935" />
    </Svg>
  );
}

function KutuphaneRaflar() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Kütüphane" />
      {[30, 70, 110, 150, 190, 230].map((x, i) => (
        <Rect key={x} x={x} y={30 + (i % 2) * 5} width={28} height={70} fill={['#E53935', '#1E88E5', '#43A047', '#FB8C00', '#8E24AA', '#00897B'][i]} rx={2} />
      ))}
      <SvgText x={W / 2} y={115} fontSize={10} fill={GEO.metin} textAnchor="middle">🤫 Sessiz</SvgText>
    </Svg>
  );
}

function AliKitap() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Ali kitabı veriyor" />
      <Rect x={60} y={25} width={160} height={15} fill="#8D6E63" />
      <CocukFigur x={90} renk={GEO.mavi} />
      <Rect x={170} y={40} width={8} height={50} fill={GEO.mavi} />
      <Circle cx={174} cy={32} r={10} fill="#FFDBAC" />
      <Rect x={200} y={55} width={35} height={45} fill="#1E88E5" rx={3} />
      <CocukFigur x={218} renk="#E53935" />
    </Svg>
  );
}

function ElanazOkuyor() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Kitap okuma" />
      <Rect x={80} y={55} width={120} height={12} fill="#8D6E63" />
      <CocukFigur x={140} renk="#E53935" />
      <Rect x={115} y={70} width={50} height={35} fill="#FFF" stroke="#1E88E5" strokeWidth={2} rx={2} />
      <SvgText x={140} y={92} fontSize={8} fill={GEO.metin} textAnchor="middle">🐱 🐶</SvgText>
    </Svg>
  );
}

function DestekBisiklet() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Destek tekerlekli bisiklet" />
      <Circle cx={90} cy={85} r={18} stroke={GEO.metin} strokeWidth={3} fill="none" />
      <Circle cx={190} cy={85} r={18} stroke={GEO.metin} strokeWidth={3} fill="none" />
      <Circle cx={70} cy={85} r={8} fill="#BDBDBD" />
      <Circle cx={210} cy={85} r={8} fill="#BDBDBD" />
      <Line x1={90} y1={85} x2={140} y2={55} stroke={GEO.metin} strokeWidth={3} />
      <Line x1={190} y1={85} x2={140} y2={55} stroke={GEO.metin} strokeWidth={3} />
      <Rect x={125} y={45} width={30} height={8} fill={GEO.kirmizi} rx={2} />
      <CocukFigur x={140} renk={GEO.kirmizi} />
    </Svg>
  );
}

function BabaTutuyor() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Baba destek oluyor" />
      <Circle cx={90} cy={85} r={18} stroke={GEO.metin} strokeWidth={3} fill="none" />
      <Circle cx={150} cy={85} r={18} stroke={GEO.metin} strokeWidth={3} fill="none" />
      <Line x1={90} y1={85} x2={120} y2={55} stroke={GEO.metin} strokeWidth={3} />
      <Line x1={150} y1={85} x2={120} y2={55} stroke={GEO.metin} strokeWidth={3} />
      <Rect x={105} y={45} width={30} height={8} fill={GEO.kirmizi} rx={2} />
      <CocukFigur x={120} renk="#E53935" />
      <CocukFigur x={210} renk={GEO.mavi} />
    </Svg>
  );
}

function DusenBisiklet() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="İlk düşüş" />
      <Line x1={100} y1={70} x2={160} y2={90} stroke={GEO.metin} strokeWidth={3} />
      <Circle cx={90} cy={90} r={15} stroke={GEO.metin} strokeWidth={2} fill="none" />
      <Circle cx={170} cy={95} r={15} stroke={GEO.metin} strokeWidth={2} fill="none" />
      <Circle cx={130} cy={75} r={10} fill="#FFDBAC" />
      <Rect x={120} y={85} width={20} height={20} fill="#E53935" rx={3} transform="rotate(-20 130 95)" />
    </Svg>
  );
}

function BasariSurus() {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Baslik text="Başardım!" />
      <Circle cx={100} cy={85} r={18} stroke={GEO.metin} strokeWidth={3} fill="none" />
      <Circle cx={180} cy={85} r={18} stroke={GEO.metin} strokeWidth={3} fill="none" />
      <Line x1={100} y1={85} x2={140} y2={55} stroke={GEO.metin} strokeWidth={3} />
      <Line x1={180} y1={85} x2={140} y2={55} stroke={GEO.metin} strokeWidth={3} />
      <Rect x={125} y={45} width={30} height={8} fill={GEO.kirmizi} rx={2} />
      <CocukFigur x={140} renk="#E53935" />
      <SvgText x={220} y={50} fontSize={16} fill="#FDD835">⭐</SvgText>
    </Svg>
  );
}

function IkiCocuk({ etiket }: { etiket?: string }) {
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {etiket ? <Baslik text={etiket} /> : null}
      <CocukFigur x={100} renk="#E53935" />
      <CocukFigur x={180} renk={GEO.yesil} />
    </Svg>
  );
}

function SahneSvg({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'ok-boya-kalemleri':
    case 'ok-resim-defteri':
      return <KalemSira />;
    case 'ok-turuncu-eksik':
      return <KalemSira eksikTuruncu />;
    case 'ok-renk-karistirma':
      return <RenkKaristirma />;
    case 'ok-pano-resim':
    case 'ok-sinif-panosu':
      return <PanoResim />;
    case 'ok-cozum-arkadas':
      return <IkiCocuk etiket="Çözüm birlikte bulundu" />;
    case 'ok-tohum-ekme':
      return <TohumEkme />;
    case 'ok-filiz-alt':
    case 'ok-toprak-alti':
      return <FilizAlt />;
    case 'ok-yesil-filiz':
      return <DomatesBitkisi filiz />;
    case 'ok-domates-bitkisi':
      return <DomatesBitkisi />;
    case 'ok-domates-tohumu':
      return (
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Baslik text="Domates tohumu" />
          <Ellipse cx={140} cy={65} rx={6} ry={4} fill="#8D6E63" />
          <Ellipse cx={155} cy={68} rx={5} ry={3} fill="#8D6E63" />
          <Ellipse cx={128} cy={70} rx={5} ry={3} fill="#8D6E63" />
          <Rect x={100} y={80} width={80} height={20} fill="#8B6914" rx={4} />
        </Svg>
      );
    case 'ok-ogretmen-konusma':
      return (
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Baslik text="Sabırlı ol" />
          <CocukFigur x={90} renk="#E53935" />
          <Circle cx={190} cy={50} r={12} fill="#FFDBAC" />
          <Rect x={178} y={62} width={24} height={30} fill="#5C6BC0" rx={4} />
          <Rect x={170} y={45} width={40} height={8} fill="#5C6BC0" rx={2} />
        </Svg>
      );
    case 'ok-gunesli-park':
    case 'ok-park':
      return <GunesliPark />;
    case 'ok-yagmur-aile':
    case 'ok-yagmur':
      return <YagmurAile />;
    case 'ok-salon-piknik':
    case 'ok-mutlu-piknik':
      return <SalonPiknik />;
    case 'ok-battaniye':
      return <SalonPiknik />;
    case 'ok-mum':
      return (
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Baslik text="Mum ışığı" />
          <Rect x={30} y={70} width={220} height={40} fill="#FFCC80" rx={6} />
          <Rect x={130} y={45} width={10} height={30} fill="#FFE082" />
          <Ellipse cx={135} cy={38} rx={12} ry={8} fill="#FFEB3B" opacity={0.85} />
          <CocukFigur x={80} renk="#E53935" />
        </Svg>
      );
    case 'ok-kutuphane-raflar':
      return <KutuphaneRaflar />;
    case 'ok-ali-kitap':
    case 'ok-ali-elanaz':
      return <AliKitap />;
    case 'ok-elanaz-okuyor':
    case 'ok-okuma-kosesi':
      return <ElanazOkuyor />;
    case 'ok-hayvan-kitap':
      return (
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Baslik text="Hayvan kitapları" />
          <Rect x={70} y={40} width={40} height={55} fill="#1E88E5" rx={3} />
          <Rect x={120} y={40} width={40} height={55} fill="#43A047" rx={3} />
          <Rect x={170} y={40} width={40} height={55} fill="#E53935" rx={3} />
          <SvgText x={90} y={72} fontSize={14} textAnchor="middle">🐱</SvgText>
          <SvgText x={140} y={72} fontSize={14} textAnchor="middle">🐶</SvgText>
          <SvgText x={190} y={72} fontSize={14} textAnchor="middle">🐦</SvgText>
        </Svg>
      );
    case 'ok-sessizlik':
      return <KutuphaneRaflar />;
    case 'ok-kitap-raf':
      return (
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Baslik text="Kitap yerine konuyor" />
          <Rect x={100} y={30} width={80} height={12} fill="#8D6E63" />
          <Rect x={130} y={50} width={30} height={40} fill="#1E88E5" rx={2} />
          <Path d="M 130 50 L 115 65" stroke={GEO.metin} strokeWidth={2} markerEnd="url(#ok)" />
        </Svg>
      );
    case 'ok-destek-bisiklet':
      return <DestekBisiklet />;
    case 'ok-baba-tutuyor':
      return <BabaTutuyor />;
    case 'ok-dusen-bisiklet':
      return <DusenBisiklet />;
    case 'ok-tek-basina':
    case 'ok-basari-surus':
      return <BasariSurus />;
    case 'ok-yildiz':
      return (
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Baslik text="Yıldızlar" />
          {[60, 100, 140, 180, 220].map((x, i) => (
            <SvgText key={i} x={x} y={70} fontSize={22} textAnchor="middle">⭐</SvgText>
          ))}
        </Svg>
      );
    default:
      return (
        <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Baslik text="Okuma Köşesi" />
          <Rect x={110} y={45} width={60} height={45} fill="#FFF9C4" stroke={GEO.metin} strokeWidth={2} rx={4} />
          <SvgText x={140} y={75} fontSize={20} textAnchor="middle">📖</SvgText>
        </Svg>
      );
  }
}

export function OkumaKosesiGorsel({ sahne }: Props) {
  return (
    <SvgCanvas width={W} height={H}>
      <SahneSvg sahne={sahne} />
    </SvgCanvas>
  );
}
