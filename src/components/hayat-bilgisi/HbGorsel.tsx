import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Ellipse, Path, Rect, Text as SvgText } from 'react-native-svg';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselHb } from '../../types/content';

type Props = GorselHb;

const NESNE: Record<string, { emoji: string; etiket: string }> = {
  okul: { emoji: '🏫', etiket: 'Okul' },
  sinif: { emoji: '📋', etiket: 'Sınıf' },
  ogretmen: { emoji: '👩‍🏫', etiket: 'Öğretmen' },
  arkadas: { emoji: '👧', etiket: 'Arkadaş' },
  cocuk: { emoji: '👦', etiket: 'Çocuk' },
  kalem: { emoji: '✏️', etiket: 'Kalem' },
  kitap: { emoji: '📚', etiket: 'Kitap' },
  masa: { emoji: '🪑', etiket: 'Masa' },
  canta: { emoji: '🎒', etiket: 'Çanta' },
  tahta: { emoji: '📋', etiket: 'Tahta' },
  aile: { emoji: '👨‍👩‍👧', etiket: 'Aile' },
  anne: { emoji: '👩', etiket: 'Anne' },
  baba: { emoji: '👨', etiket: 'Baba' },
  kardes: { emoji: '👧', etiket: 'Kardeş' },
  dede: { emoji: '👴', etiket: 'Dede' },
  nine: { emoji: '👵', etiket: 'Nine' },
  doktor: { emoji: '👨‍⚕️', etiket: 'Doktor' },
  polis: { emoji: '👮', etiket: 'Polis' },
  itfaiye: { emoji: '🚒', etiket: 'İtfaiye' },
  cop: { emoji: '🗑️', etiket: 'Çöp' },
  geriDonusum: { emoji: '♻️', etiket: 'Geri Dönüşüm' },
  agac: { emoji: '🌳', etiket: 'Ağaç' },
  park: { emoji: '🏞️', etiket: 'Park' },
  mahalle: { emoji: '🏘️', etiket: 'Mahalle' },
  trafik: { emoji: '🚦', etiket: 'Trafik' },
  temizlik: { emoji: '🧹', etiket: 'Temizlik' },
  default: { emoji: '🏠', etiket: 'Hayat Bilgisi' },
};

const VURGU_RENK = GEO.turuncu + '88';
const KART_RENK = GEO.mavi + '33';

function nesneBilgi(anahtar?: string) {
  const k = (anahtar ?? 'default').replace(/-/g, '');
  const eslesme = Object.keys(NESNE).find((key) => k.includes(key) || key.includes(k));
  return NESNE[eslesme ?? 'default'] ?? NESNE.default;
}

function NesneKart({ anahtar, vurgulu, etiket }: { anahtar: string; vurgulu?: boolean; etiket?: string }) {
  const n = nesneBilgi(anahtar);
  return (
    <View style={[styles.kart, { backgroundColor: vurgulu ? VURGU_RENK : KART_RENK, borderColor: vurgulu ? GEO.turuncu : colors.kenarlik }]}>
      <GuvenliMetin style={styles.emoji} tamGenislik={false}>
        {n.emoji}
      </GuvenliMetin>
      <GuvenliMetin style={styles.etiket} tamGenislik>
        {etiket ?? n.etiket}
      </GuvenliMetin>
    </View>
  );
}

function GrupGorsel({ nesneler, vurgu }: { nesneler?: string[]; vurgu?: Props['vurgu'] }) {
  const vurgular = Array.isArray(vurgu) ? vurgu : vurgu ? [vurgu] : [];
  return (
    <View style={styles.grup}>
      {(nesneler ?? []).map((n) => (
        <NesneKart key={n} anahtar={n} vurgulu={vurgular.includes(n)} />
      ))}
    </View>
  );
}

function SinifGorsel() {
  const w = 200;
  const h = 140;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={10} y={20} width={180} height={100} rx={8} fill={GEO.mavi + '33'} stroke={GEO.metin} strokeWidth={2} />
        <Rect x={70} y={30} width={60} height={35} rx={4} fill="#FFF" stroke={GEO.metin} />
        <SvgText x={100} y={52} fontSize={10} fill={GEO.metin} textAnchor="middle">
          Tahta
        </SvgText>
        <Rect x={25} y={75} width={35} height={25} rx={3} fill={GEO.turuncu} stroke={GEO.metin} />
        <Rect x={70} y={75} width={35} height={25} rx={3} fill={GEO.turuncu} stroke={GEO.metin} />
        <Rect x={115} y={75} width={35} height={25} rx={3} fill={GEO.turuncu} stroke={GEO.metin} />
        <Circle cx={160} cy={50} r={12} fill={GEO.yesil} />
        <SvgText x={160} y={54} fontSize={14} fill="#FFF" textAnchor="middle">
          👩‍🏫
        </SvgText>
      </Svg>
    </View>
  );
}

function AileGorsel() {
  return (
    <View style={styles.karsSatir}>
      <NesneKart anahtar="anne" />
      <NesneKart anahtar="baba" />
      <NesneKart anahtar="cocuk" />
      <NesneKart anahtar="kardes" />
    </View>
  );
}

function MeslekGorsel() {
  return (
    <View style={styles.karsSatir}>
      <NesneKart anahtar="doktor" />
      <NesneKart anahtar="polis" />
      <NesneKart anahtar="itfaiye" />
    </View>
  );
}

function CevreGorsel() {
  return (
    <View style={styles.karsSatir}>
      <NesneKart anahtar="agac" />
      <NesneKart anahtar="geriDonusum" />
      <NesneKart anahtar="temizlik" />
    </View>
  );
}

function KuralListesi({ baslik, maddeler }: { baslik: string; maddeler: string[] }) {
  return (
    <View style={styles.liste}>
      <GuvenliMetin style={styles.listeBaslik} tamGenislik>
        {baslik}
      </GuvenliMetin>
      {maddeler.map((m) => (
        <View key={m} style={styles.listeMadde}>
          <GuvenliMetin style={styles.listeMetin} tamGenislik>
            {`• ${m}`}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function SahneGorsel({ sahne, ozellik }: { sahne?: string; ozellik?: string }) {
  const n = nesneBilgi(sahne ?? ozellik);
  const baslik = (ozellik ?? sahne ?? '').replace(/-/g, ' ');
  return (
    <View style={styles.sahne}>
      <GuvenliMetin style={styles.emoji} tamGenislik>
        {n.emoji}
      </GuvenliMetin>
      {baslik ? (
        <GuvenliMetin style={styles.sahneBaslik} tamGenislik>
          {baslik}
        </GuvenliMetin>
      ) : null}
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'os-anlatim-1':
      return <SinifGorsel />;
    case 'os-anlatim-2':
      return (
        <KuralListesi
          baslik="Okul Kuralları"
          maddeler={['Sessiz ol', 'El kaldır', 'Dinle', 'Eşyalara özen göster', 'Arkadaşlara saygı']}
        />
      );
    case 'os-anlatim-3':
      return <GrupGorsel nesneler={['kalem', 'kitap', 'canta', 'masa']} />;
    case 'aa-anlatim-1':
      return <AileGorsel />;
    case 'aa-anlatim-2':
      return (
        <KuralListesi
          baslik="Ailede Güzel Davranışlar"
          maddeler={['Sevgi göster', 'Yardım et', 'Paylaş', 'Özür dile', 'Birlikte oyna']}
        />
      );
    case 'aa-anlatim-3':
      return <GrupGorsel nesneler={['arkadas', 'cocuk']} vurgu="arkadas" />;
    case 'tc-anlatim-1':
      return <MeslekGorsel />;
    case 'tc-anlatim-2':
      return (
        <KuralListesi
          baslik="Toplumda Uyulması Gerekenler"
          maddeler={['Kurallara uy', 'Temiz tut', 'Saygılı ol', 'Yardımlaş', 'Sıra bekle']}
        />
      );
    case 'tc-anlatim-3':
      return <CevreGorsel />;
    default:
      return <NesneKart anahtar={sahne || 'default'} />;
  }
}

export function HbGorsel(props: Props) {
  const { mod, sahne, nesne, nesneler, vurgu, ozellik } = props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'grup') return <GrupGorsel nesneler={nesneler} vurgu={vurgu} />;
  if (mod === 'sahne') return <SahneGorsel sahne={sahne} ozellik={ozellik} />;
  if (mod === 'nesne') return <NesneKart anahtar={nesne ?? sahne ?? 'default'} vurgulu={!!vurgu} />;
  return <NesneKart anahtar={nesne ?? sahne ?? 'default'} />;
}

const styles = StyleSheet.create({
  ortala: { alignItems: 'center' },
  kart: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    alignItems: 'center',
    minWidth: 72,
    margin: 4,
  },
  emoji: { fontSize: 36 },
  etiket: { fontSize: 11, fontWeight: '700', color: GEO.metin, marginTop: 4, textAlign: 'center' },
  grup: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  karsSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6 },
  sahne: { alignItems: 'center', padding: 8 },
  sahneBaslik: { fontSize: 12, color: GEO.metin, marginTop: 4, textAlign: 'center' },
  liste: { padding: 8, gap: 4 },
  listeBaslik: { fontSize: 14, fontWeight: '700', color: GEO.metin, marginBottom: 6, textAlign: 'center' },
  listeMadde: { backgroundColor: KART_RENK, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  listeMetin: { fontSize: 12, fontWeight: '600', color: GEO.metin },
});
