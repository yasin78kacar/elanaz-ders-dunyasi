import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselKesir } from '../../types/content';

type Props = GorselKesir;

const PARCA_RENK = [GEO.turuncu, GEO.kirmizi, GEO.mavi, GEO.yesil, GEO.mor, GEO.sari, GEO.kahve, GEO.turuncu];
const YENILDI_RENK = '#E0E0E0';
const RENKLI = GEO.mavi;

const NESNE_RENK: Record<string, string> = {
  pizza: GEO.turuncu,
  elma: GEO.kirmizi,
  pasta: GEO.sari,
  cikolata: GEO.kahve,
  karpuz: GEO.yesil,
  portakal: GEO.turuncu,
  kagit: '#FFF9C4',
  dikdortgen: GEO.mavi,
  kare: GEO.yesil,
};

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function dilimYolu(cx: number, cy: number, r: number, bas: number, bit: number) {
  const s = polar(cx, cy, r, bit);
  const e = polar(cx, cy, r, bas);
  const buyuk = bit - bas > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${buyuk} 0 ${e.x} ${e.y} Z`;
}

function nesneRenk(nesne?: string) {
  return NESNE_RENK[nesne ?? ''] ?? GEO.turuncu;
}

function DaireBolme({
  parca = 4,
  nesne,
  yenilen = 0,
  renkli = 0,
  esit = true,
  vurgu,
  w = 160,
  h = 160,
}: {
  parca?: number;
  nesne?: string;
  yenilen?: number;
  renkli?: number;
  esit?: boolean;
  vurgu?: Props['vurgu'];
  w?: number;
  h?: number;
}) {
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) / 2 - 8;
  const taban = nesneRenk(nesne);
  const acilar = esit
    ? Array.from({ length: parca }, (_, i) => 360 / parca)
    : parca === 2
      ? [240, 120]
      : Array.from({ length: parca }, (_, i) => (i % 2 === 0 ? 50 : 310 / Math.max(parca - 1, 1)));

  let aci = 0;
  const dilimler = acilar.map((a, i) => {
    const bas = aci;
    aci += a;
    const yenildi = i < yenilen;
    const vurgulu =
      vurgu === 'yarim'
        ? i < parca / 2
        : vurgu === 'ceyrek'
          ? i < parca / 4
          : Array.isArray(vurgu)
            ? vurgu.includes(i)
            : false;
    let fill = yenildi ? YENILDI_RENK : taban;
    if (!yenildi && (vurgulu || i < renkli)) fill = RENKLI;
    return { bas, bit: aci, fill, yenildi };
  });

  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Circle cx={cx} cy={cy} r={r + 2} fill="none" stroke={GEO.metin} strokeWidth={2} />
      {dilimler.map((d, i) => (
        <Path key={i} d={dilimYolu(cx, cy, r, d.bas, d.bit)} fill={d.fill} stroke={GEO.metin} strokeWidth={1} />
      ))}
      {yenilen > 0 &&
        dilimler.slice(0, yenilen).map((d, i) => {
          const mx = cx + (r * 0.5 * Math.cos((((d.bas + d.bit) / 2 - 90) * Math.PI) / 180));
          const my = cy + (r * 0.5 * Math.sin((((d.bas + d.bit) / 2 - 90) * Math.PI) / 180));
          return (
            <SvgText key={`x-${i}`} x={mx} y={my + 4} fontSize={14} fill={GEO.kirmizi} textAnchor="middle" fontWeight="bold">
              ✕
            </SvgText>
          );
        })}
    </Svg>
  );
}

function DikdortgenBolme({
  parca = 4,
  nesne,
  yenilen = 0,
  renkli = 0,
  w = 200,
  h = 80,
}: {
  parca?: number;
  nesne?: string;
  yenilen?: number;
  renkli?: number;
  w?: number;
  h?: number;
}) {
  const taban = nesneRenk(nesne);
  const hucreW = w / parca;
  const satir = parca > 8 ? 2 : 1;
  const sutun = Math.ceil(parca / satir);
  const hucreH = h / satir;

  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <Rect x={0} y={0} width={w} height={h} fill="none" stroke={GEO.metin} strokeWidth={2} rx={4} />
      {Array.from({ length: parca }, (_, i) => {
        const sat = Math.floor(i / sutun);
        const sut = i % sutun;
        const x = sut * (w / sutun);
        const y = sat * hucreH;
        const pw = w / sutun - 1;
        const yenildi = i < yenilen;
        const renk = yenildi ? YENILDI_RENK : i < renkli ? RENKLI : taban;
        return (
          <Rect
            key={i}
            x={x + 1}
            y={y + 1}
            width={pw}
            height={hucreH - 2}
            fill={renk}
            stroke={GEO.metin}
            strokeWidth={1}
          />
        );
      })}
    </Svg>
  );
}

function KareBolme({
  parca = 4,
  bolme = 'grid',
  yenilen = 0,
  nesne,
}: {
  parca?: number;
  bolme?: string;
  yenilen?: number;
  nesne?: string;
}) {
  const w = 120;
  const h = 120;
  const taban = nesneRenk(nesne);

  if (bolme === 'ucgen' && parca === 2) {
    return (
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={2} y={2} width={w - 4} height={h - 4} fill={taban} stroke={GEO.metin} strokeWidth={2} rx={4} />
        <Line x1={2} y1={2} x2={w - 2} y2={h - 2} stroke={GEO.metin} strokeWidth={2} />
      </Svg>
    );
  }

  const grid = parca === 4 ? 2 : Math.ceil(Math.sqrt(parca));
  const hucre = (w - 4) / grid;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      {Array.from({ length: parca }, (_, i) => {
        const row = Math.floor(i / grid);
        const col = i % grid;
        const yenildi = i < yenilen;
        return (
          <Rect
            key={i}
            x={2 + col * hucre}
            y={2 + row * hucre}
            width={hucre - 1}
            height={hucre - 1}
            fill={yenildi ? YENILDI_RENK : taban}
            stroke={GEO.metin}
            strokeWidth={1}
          />
        );
      })}
    </Svg>
  );
}

function KesirSekil({
  parca = 4,
  renkli = 1,
  nesne,
  yenilen = 0,
  etiket,
  sekil = 'dikdortgen',
}: {
  parca?: number;
  renkli?: number;
  nesne?: string;
  yenilen?: number;
  etiket?: string;
  sekil?: string;
}) {
  const shape =
    sekil === 'kare' || nesne === 'kare' ? (
      <KareBolme parca={parca} yenilen={yenilen} nesne={nesne} />
    ) : nesne === 'elma' || nesne === 'pizza' || nesne === 'pasta' || nesne === 'portakal' ? (
      <DaireBolme parca={parca} nesne={nesne} yenilen={yenilen} renkli={renkli} />
    ) : (
      <DikdortgenBolme parca={parca} nesne={nesne} yenilen={yenilen} renkli={renkli} />
    );

  return (
    <View style={styles.ortala}>
      {shape}
      {etiket ? (
        <GuvenliMetin style={styles.etiket} tamGenislik>
          {etiket === 'çeyrek' ? '1/4' : etiket === 'yarim' ? '1/2' : etiket}
        </GuvenliMetin>
      ) : renkli > 0 ? (
        <GuvenliMetin style={styles.etiket} tamGenislik>
          {`${renkli}/${parca}`}
        </GuvenliMetin>
      ) : null}
    </View>
  );
}

function KesirCubuk({ kesir, w = 70, h = 100 }: { kesir: string; w?: number; h?: number }) {
  const [pay, payda] = kesir.split('/').map(Number);
  const dolu = payda ? (pay / payda) * h : h / 2;
  return (
    <View style={styles.karsOge}>
      <Svg width={w} height={h + 24} viewBox={`0 0 ${w} ${h + 24}`}>
        <Rect x={4} y={0} width={w - 8} height={h} fill={colors.kart} stroke={GEO.metin} strokeWidth={2} rx={4} />
        <Rect x={4} y={h - dolu} width={w - 8} height={dolu} fill={RENKLI} rx={2} />
        <SvgText x={w / 2} y={h + 18} fontSize={13} fill={GEO.metin} textAnchor="middle" fontWeight="bold">
          {kesir}
        </SvgText>
      </Svg>
    </View>
  );
}

function KarsilastirmaGorsel({ kesirler = [] }: { kesirler?: (string | Record<string, unknown>)[] }) {
  const ogeler = kesirler.map((k) => {
    if (typeof k === 'string') return { tip: 'kesir' as const, kesir: k };
    if (k.esit === false) return { tip: 'esitsiz' as const };
    if (k.esit === true && k.parca) return { tip: 'bolme' as const, parca: k.parca as number, esit: true };
    if (k.esit === true) return { tip: 'bolme' as const, parca: 4, esit: true };
    return { tip: 'esitsiz' as const };
  });

  return (
    <View style={styles.karsSatir}>
      {ogeler.map((o, i) => (
        <View key={i} style={styles.karsOge}>
          {o.tip === 'kesir' ? (
            <KesirCubuk kesir={o.kesir} />
          ) : o.tip === 'bolme' ? (
            <DaireBolme parca={o.parca} esit={o.esit} w={80} h={80} />
          ) : (
            <DaireBolme parca={2} esit={false} w={80} h={80} />
          )}
        </View>
      ))}
    </View>
  );
}

function BirlesimGorsel({ parca = 4, adet = 2 }: { parca?: number; adet?: number }) {
  const tamSayisi = Math.floor(adet / parca);
  const kalan = adet % parca;
  const parcalar: { dolu: number; parca: number }[] = [];
  for (let i = 0; i < tamSayisi; i++) parcalar.push({ dolu: parca, parca });
  if (kalan > 0) parcalar.push({ dolu: kalan, parca });

  return (
    <View style={styles.karsSatir}>
      {parcalar.map((p, i) => (
        <View key={i} style={styles.karsOge}>
          <DikdortgenBolme parca={p.parca} renkli={p.dolu} w={Math.min(120, p.parca * 18)} h={50} />
          {p.dolu === p.parca ? (
            <GuvenliMetin style={styles.kucukEtiket} tamGenislik>
              1 tam
            </GuvenliMetin>
          ) : (
            <GuvenliMetin style={styles.kucukEtiket} tamGenislik>
              {`${p.dolu}/${p.parca}`}
            </GuvenliMetin>
          )}
        </View>
      ))}
    </View>
  );
}

function PaylasimGorsel({ parca = 4, kisi = 4, alinan = 1 }: { parca?: number; kisi?: number; alinan?: number }) {
  return (
    <View style={styles.ortala}>
      <DaireBolme parca={parca} nesne="pasta" w={140} h={140} />
      <View style={styles.kisiSatir}>
        {Array.from({ length: Math.min(kisi, 6) }, (_, i) => (
          <View key={i} style={styles.kisi}>
            <GuvenliMetin style={styles.kisiMetin} tamGenislik={false}>
              👤
            </GuvenliMetin>
            <GuvenliMetin style={styles.kucukEtiket} tamGenislik={false}>
              {String(alinan)}
            </GuvenliMetin>
          </View>
        ))}
      </View>
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'ep-anlatim-1':
      return <DaireBolme parca={2} nesne="pizza" esit w={140} h={140} />;
    case 'ep-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <DikdortgenBolme parca={2} w={60} h={50} />
          <DikdortgenBolme parca={3} w={60} h={50} />
          <DikdortgenBolme parca={4} w={60} h={50} />
        </View>
      );
    case 'ep-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <DaireBolme parca={2} esit w={90} h={90} />
          <DaireBolme parca={2} esit={false} w={90} h={90} />
        </View>
      );
    case 'ep-iki-bolme-yontemi':
    case 'ep-katlanma':
    case 'ep-katlanma-adim':
      return (
        <View style={styles.karsSatir}>
          <DikdortgenBolme parca={2} nesne="kagit" w={50} h={70} />
          <GuvenliMetin style={styles.ok} tamGenislik={false}>
            →
          </GuvenliMetin>
          <DikdortgenBolme parca={4} nesne="kagit" w={50} h={70} />
        </View>
      );
    case 'ep-esit-kural':
      return <KarsilastirmaGorsel kesirler={[{ esit: true }, { esit: false }]} />;
    case 'yc-anlatim-1':
      return <KesirSekil parca={2} renkli={1} nesne="elma" etiket="1/2" />;
    case 'yc-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <KesirSekil parca={4} renkli={1} nesne="pizza" etiket="1/4" />
          <BirlesimGorsel parca={4} adet={2} />
        </View>
      );
    case 'yc-anlatim-3':
      return <BirlesimGorsel parca={2} adet={2} />;
    case 'bk-anlatim-1':
      return (
        <View style={styles.ortala}>
          <DaireBolme parca={2} nesne="pizza" w={120} h={120} />
          <GuvenliMetin style={styles.etiket} tamGenislik>
            pay ↑ / payda ↓
          </GuvenliMetin>
        </View>
      );
    case 'bk-anlatim-2':
      return <KarsilastirmaGorsel kesirler={['1/2', '1/3', '1/4']} />;
    case 'bk-anlatim-3':
      return <KarsilastirmaGorsel kesirler={['1/2', '1/3', '1/4']} />;
    default:
      return <DaireBolme parca={4} w={100} h={100} />;
  }
}

export function KesirGorsel(props: Props) {
  const { mod, sahne, sekil, parca, nesne, yenilen, renkli, esit, vurgu, etiket, kesirler, adet, kisi, alinan, bolme } =
    props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'karsilastir') return <KarsilastirmaGorsel kesirler={kesirler} />;
  if (mod === 'birlesim') return <BirlesimGorsel parca={parca} adet={adet} />;
  if (mod === 'paylasim') return <PaylasimGorsel parca={parca} kisi={kisi} alinan={alinan} />;
  if (mod === 'yarim') return <KesirSekil parca={2} renkli={1} nesne={nesne ?? 'elma'} etiket="1/2" />;
  if (mod === 'kesir')
    return (
      <KesirSekil
        parca={parca}
        renkli={renkli}
        nesne={nesne}
        yenilen={yenilen}
        etiket={etiket}
        sekil={sekil ?? (nesne === 'kare' ? 'kare' : 'dikdortgen')}
      />
    );

  if (sekil === 'daire') return <DaireBolme parca={parca} nesne={nesne} yenilen={yenilen} esit={esit} vurgu={vurgu} />;
  if (sekil === 'kare') return <KareBolme parca={parca} bolme={bolme} yenilen={yenilen} nesne={nesne} />;
  return <DikdortgenBolme parca={parca} nesne={nesne} yenilen={yenilen} renkli={renkli} />;
}

const styles = StyleSheet.create({
  ortala: { alignItems: 'center' },
  etiket: { fontSize: 14, fontWeight: '700', color: GEO.metin, marginTop: 6, textAlign: 'center' },
  kucukEtiket: { fontSize: 11, fontWeight: '600', color: GEO.metin, textAlign: 'center' },
  karsSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 8 },
  karsOge: { alignItems: 'center' },
  kisiSatir: { flexDirection: 'row', gap: 8, marginTop: 8 },
  kisi: { alignItems: 'center' },
  kisiMetin: { fontSize: 20 },
  ok: { fontSize: 18, fontWeight: '700', color: colors.birincil },
});
