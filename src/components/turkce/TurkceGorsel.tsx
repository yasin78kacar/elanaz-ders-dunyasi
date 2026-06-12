import { View, StyleSheet, ScrollView } from 'react-native';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselTurkce } from '../../types/content';

type Props = GorselTurkce;

const SESLI = new Set(['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü', 'A', 'E', 'I', 'İ', 'O', 'Ö', 'U', 'Ü']);
const HECE_RENK = [GEO.mavi + '44', GEO.kirmizi + '44', GEO.yesil + '44', GEO.turuncu + '44', GEO.mor + '44'];
const NESNE_EMOJI: Record<string, string> = {
  elma: '🍎',
  araba: '🚗',
  okul: '🏫',
  kedi: '🐱',
  kitap: '📖',
  kalem: '✏️',
  cicek: '🌸',
  cocuk: '👧',
  kopek: '🐶',
  kus: '🐦',
  pizza: '🍕',
  ev: '🏠',
  gunes: '☀️',
  kar: '❄️',
  bahce: '🌳',
  kutuphane: '📚',
  yagmur: '🌧️',
  pasta: '🎂',
  ogretmen: '👩‍🏫',
  park: '🏞️',
  turkiye: '🇹🇷',
  istanbul: '🌉',
  ankara: '🏛️',
  meyve: '🍎',
  oyuncak: '🧸',
  futbol: '⚽',
  bisiklet: '🚲',
  robot: '🤖',
  deniz: '🌊',
  ari: '🐝',
  'gunes-sistemi': '🪐',
  agac: '🌲',
  deprem: '🏚️',
  hikaye: '📖',
  siir: '📜',
  bilgi: '📘',
  semsiye: '☂️',
  palto: '🧥',
  telefon: '📱',
  otobus: '🚌',
  masa: '🪑',
  default: '📝',
};

function emoji(nesne?: string) {
  if (!nesne) return NESNE_EMOJI.default;
  const k = nesne.toLowerCase().replace(/[çğıöşü]/g, (c) => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' })[c] ?? c);
  return NESNE_EMOJI[k] ?? NESNE_EMOJI.default;
}

function HeceKutulari({ kelime, heceler, vurgu }: { kelime?: string; heceler?: string[]; vurgu?: Props['vurgu'] }) {
  const parcalar = heceler ?? (kelime ? [kelime] : []);
  return (
    <View style={styles.ortala}>
      {kelime && !heceler?.length ? (
        <GuvenliMetin style={styles.kelimeBaslik} tamGenislik>
          {kelime}
        </GuvenliMetin>
      ) : null}
      <View style={styles.heceSatir}>
        {parcalar.map((h, i) => (
          <View key={`${h}-${i}`} style={[styles.heceKutu, { backgroundColor: HECE_RENK[i % HECE_RENK.length] }]}>
            <GuvenliMetin style={styles.heceMetin} tamGenislik={false}>
              {h}
            </GuvenliMetin>
          </View>
        ))}
      </View>
    </View>
  );
}

function HarfKartlari({ harfler, vurgu }: { harfler?: string[]; vurgu?: Props['vurgu'] }) {
  const liste = harfler ?? ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.harfSatir}>
        {liste.map((h) => {
          const sesli = SESLI.has(h);
          const v = vurgu === 'sesli' ? sesli : vurgu === 'sessiz' ? !sesli : true;
          return (
            <View
              key={h}
              style={[
                styles.harfKart,
                { backgroundColor: sesli ? GEO.kirmizi + '33' : GEO.mavi + '33', opacity: v ? 1 : 0.4 },
              ]}
            >
              <GuvenliMetin style={styles.harfMetin} tamGenislik={false}>
                {h}
              </GuvenliMetin>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

function KelimeGorsel({ kelime, nesne, vurgu }: { kelime?: string; nesne?: string; vurgu?: Props['vurgu'] }) {
  const harfler = (kelime ?? '').split('');
  return (
    <View style={styles.ortala}>
      <GuvenliMetin style={styles.nesneEmoji} tamGenislik>
        {emoji(nesne ?? kelime)}
      </GuvenliMetin>
      <View style={styles.harfSatir}>
        {harfler.map((h, i) => {
          const sesli = SESLI.has(h);
          const vurgulu =
            vurgu === 'sesli'
              ? sesli
              : vurgu === 'sessiz'
                ? !sesli
                : Array.isArray(vurgu)
                  ? (vurgu as (number | string)[]).includes(i) || (vurgu as (number | string)[]).includes(h)
                  : false;
          return (
            <View
              key={`${h}-${i}`}
              style={[styles.harfKart, vurgulu && { backgroundColor: GEO.turuncu + '55', borderColor: GEO.turuncu }]}
            >
              <GuvenliMetin style={styles.harfMetin} tamGenislik={false}>
                {h}
              </GuvenliMetin>
            </View>
          );
        })}
      </View>
    </View>
  );
}

function NoktalamaKart({ isaret }: { isaret?: string }) {
  const sembol = isaret ?? '.';
  const renk =
    sembol === '?' ? GEO.mavi : sembol === '!' ? GEO.kirmizi : sembol === ',' ? GEO.yesil : GEO.metin;
  return (
    <View style={[styles.noktaKart, { borderColor: renk }]}>
      <GuvenliMetin style={[styles.noktaSembol, { color: renk }]} tamGenislik>
        {sembol}
      </GuvenliMetin>
    </View>
  );
}

function CumleAnaliz({
  metin,
  ozne,
  yuklem,
  cumleTuru,
}: {
  metin?: string;
  ozne?: string;
  yuklem?: string;
  cumleTuru?: string;
}) {
  return (
    <View style={styles.ortala}>
      {metin ? (
        <GuvenliMetin style={styles.cumleMetin} tamGenislik>
          {metin}
        </GuvenliMetin>
      ) : null}
      <View style={styles.cumleSatir}>
        {ozne ? (
          <View style={[styles.cumleParca, { backgroundColor: GEO.mavi + '33' }]}>
            <GuvenliMetin style={styles.cumleEtiket} tamGenislik={false}>
              {`Özne: ${ozne}`}
            </GuvenliMetin>
          </View>
        ) : null}
        {yuklem ? (
          <View style={[styles.cumleParca, { backgroundColor: GEO.kirmizi + '33' }]}>
            <GuvenliMetin style={styles.cumleEtiket} tamGenislik={false}>
              {`Yüklem: ${yuklem}`}
            </GuvenliMetin>
          </View>
        ) : null}
        {cumleTuru ? (
          <View style={[styles.cumleParca, { backgroundColor: GEO.yesil + '33' }]}>
            <GuvenliMetin style={styles.cumleEtiket} tamGenislik={false}>
              {cumleTuru}
            </GuvenliMetin>
          </View>
        ) : null}
      </View>
    </View>
  );
}

function Karsilastirma({ kelimeler, iliski }: { kelimeler?: string[]; iliski?: string }) {
  const [a, b] = kelimeler ?? [];
  return (
    <View style={styles.karsSatir}>
      <View style={styles.karsKart}>
        <GuvenliMetin style={styles.karsMetin} tamGenislik>
          {a ?? '?'}
        </GuvenliMetin>
      </View>
      <GuvenliMetin style={styles.ok} tamGenislik={false}>
        {iliski === 'zit' ? '↔' : iliski === 'esSeslilik' ? '⇄' : '→'}
      </GuvenliMetin>
      <View style={styles.karsKart}>
        <GuvenliMetin style={styles.karsMetin} tamGenislik>
          {b ?? '?'}
        </GuvenliMetin>
      </View>
    </View>
  );
}

function SahneGorsel({ sahne, nesne }: { sahne?: string; nesne?: string }) {
  const e = emoji(nesne ?? sahne);
  const baslik = (sahne ?? nesne ?? '').replace(/-/g, ' ');
  return (
    <View style={styles.sahne}>
      <GuvenliMetin style={styles.nesneEmoji} tamGenislik>
        {e}
      </GuvenliMetin>
      {baslik ? (
        <GuvenliMetin style={styles.sahneBaslik} tamGenislik>
          {baslik}
        </GuvenliMetin>
      ) : null}
    </View>
  );
}

function AlfabeGorsel() {
  const sesliler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
  const sessizler = ['b', 'c', 'ç', 'd', 'f', 'g', 'ğ', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'ş', 't', 'v', 'y', 'z'];
  return (
    <View style={styles.ortala}>
      <GuvenliMetin style={styles.bolumBaslik} tamGenislik>
        Sesli Harfler
      </GuvenliMetin>
      <HarfKartlari harfler={sesliler} vurgu="sesli" />
      <GuvenliMetin style={styles.bolumBaslik} tamGenislik>
        Sessiz Harfler
      </GuvenliMetin>
      <HarfKartlari harfler={sessizler} vurgu="sessiz" />
    </View>
  );
}

function SoruIsaretleriGorsel() {
  const etiketler = ['Kim?', 'Ne?', 'Nerede?', 'Ne zaman?'];
  const renkler = [GEO.kirmizi, GEO.mavi, GEO.yesil, GEO.turuncu];
  return (
    <View style={styles.soruIsaretSatir}>
      {etiketler.map((e, i) => (
        <View key={e} style={[styles.soruIsaret, { backgroundColor: renkler[i] + '33' }]}>
          <GuvenliMetin style={styles.soruIsaretMetin} tamGenislik={false}>
            {e}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function SiirGorsel({ sahne }: { sahne?: string }) {
  const etiket = (sahne ?? 'siir').replace(/-/g, ' ');
  const emojiMap: Record<string, string> = {
    'yaz-tatili': '🏖️',
    'yaz-tatili-kita': '🏖️',
    'dalgalı-deniz': '🌊',
    'kumda-kale': '🏰',
    'sicak-gunes': '☀️',
    sonbahar: '🍂',
    'karli-manzara': '❄️',
    bahar: '🌸',
    deniz: '🌊',
    kafiye: '🎵',
    kisilestirme: '✨',
  };
  const key = sahne?.split('-')[0] ?? '';
  const e = emojiMap[sahne ?? ''] ?? emojiMap[key] ?? '📜';
  return (
    <View style={styles.sahne}>
      <GuvenliMetin style={styles.nesneEmoji} tamGenislik>
        {e}
      </GuvenliMetin>
      <GuvenliMetin style={styles.sahneBaslik} tamGenislik>
        {etiket}
      </GuvenliMetin>
    </View>
  );
}

function HikayeYapisi() {
  return (
    <View style={styles.karsSatir}>
      {['Başlangıç', 'Gelişme', 'Sonuç'].map((b) => (
        <View key={b} style={styles.cumleTurKutu}>
          <GuvenliMetin style={styles.cumleEtiket} tamGenislik>
            {b}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function BilgiYapisi() {
  return (
    <View style={styles.cumleTurSatir}>
      {['Başlık', 'Giriş', 'Gelişme', 'Sonuç'].map((b) => (
        <View key={b} style={styles.cumleTurKutu}>
          <GuvenliMetin style={styles.cumleEtiket} tamGenislik>
            {b}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function ParagrafYapisi() {
  return (
    <View style={styles.ortala}>
      <View style={[styles.cumleParca, { borderLeftWidth: 4, borderLeftColor: GEO.mavi, paddingLeft: 12 }]}>
        <GuvenliMetin style={styles.cumleMetin} tamGenislik>
          Ana fikir cümlesi burada başlar.
        </GuvenliMetin>
        <GuvenliMetin style={[styles.cumleMetin, { fontSize: 14 }]} tamGenislik>
          Detay cümleleri paragrafı tamamlar.
        </GuvenliMetin>
      </View>
      <GuvenliMetin style={styles.bolumBaslik} tamGenislik>
        Girinti + Ana fikir
      </GuvenliMetin>
    </View>
  );
}

function HikayeSoruKartlari() {
  const etiketler = ['Kim?', 'Nerede?', 'Ne yaptı?', 'Ne oldu?'];
  const renkler = [GEO.kirmizi, GEO.mavi, GEO.yesil, GEO.turuncu];
  return (
    <View style={styles.soruIsaretSatir}>
      {etiketler.map((e, i) => (
        <View key={e} style={[styles.soruIsaret, { backgroundColor: renkler[i] + '33' }]}>
          <GuvenliMetin style={styles.soruIsaretMetin} tamGenislik={false}>
            {e}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function IletisimKurallari() {
  const kurallar = ['Saygı göster', 'Söz kesme', 'Odaklan', 'Nezaket'];
  const renkler = [GEO.yesil, GEO.kirmizi, GEO.mavi, GEO.turuncu];
  return (
    <View style={styles.cumleTurSatir}>
      {kurallar.map((k, i) => (
        <View key={k} style={[styles.cumleTurKutu, { backgroundColor: renkler[i] + '33' }]}>
          <GuvenliMetin style={styles.cumleEtiket} tamGenislik>
            {k}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function SozcukTuruKartlari() {
  return (
    <View style={styles.karsSatir}>
      {[
        { tur: 'İsim', ornek: 'kalem', renk: GEO.mavi },
        { tur: 'Sıfat', ornek: 'kırmızı', renk: GEO.turuncu },
        { tur: 'Fiil', ornek: 'koşmak', renk: GEO.yesil },
        { tur: 'Zamir', ornek: 'ben', renk: GEO.mor },
      ].map((s) => (
        <View key={s.tur} style={[styles.karsKart, { backgroundColor: s.renk + '33' }]}>
          <GuvenliMetin style={styles.karsMetin} tamGenislik>
            {s.tur}
          </GuvenliMetin>
          <GuvenliMetin style={[styles.karsMetin, { fontSize: 12 }]} tamGenislik>
            {s.ornek}
          </GuvenliMetin>
        </View>
      ))}
    </View>
  );
}

function ZamirGosterme() {
  return (
    <View style={styles.karsSatir}>
      <View style={styles.karsKart}>
        <GuvenliMetin style={styles.karsMetin} tamGenislik>
          Ali geldi.
        </GuvenliMetin>
      </View>
      <GuvenliMetin style={styles.ok} tamGenislik={false}>
        →
      </GuvenliMetin>
      <View style={[styles.karsKart, { backgroundColor: GEO.mor + '33' }]}>
        <GuvenliMetin style={styles.karsMetin} tamGenislik>
          O mutluydu.
        </GuvenliMetin>
      </View>
    </View>
  );
}

function DinlemeSahnesi() {
  return (
    <View style={styles.karsSatir}>
      <View style={styles.sahne}>
        <GuvenliMetin style={styles.nesneEmoji} tamGenislik>
          🗣️
        </GuvenliMetin>
        <GuvenliMetin style={styles.sahneBaslik} tamGenislik>
          Konuşan
        </GuvenliMetin>
      </View>
      <View style={styles.sahne}>
        <GuvenliMetin style={styles.nesneEmoji} tamGenislik>
          👂
        </GuvenliMetin>
        <GuvenliMetin style={styles.sahneBaslik} tamGenislik>
          Dinleyen
        </GuvenliMetin>
      </View>
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'sh-anlatim-1':
      return <AlfabeGorsel />;
    case 'sh-anlatim-2':
      return <HeceKutulari kelime="araba" heceler={['a', 'ra', 'ba']} />;
    case 'sh-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <HeceKutulari kelime="okul" heceler={['o', 'kul']} />
          <HeceKutulari kelime="elma" heceler={['el', 'ma']} />
        </View>
      );
    case 'kb-anlatim-1':
      return <Karsilastirma kelimeler={['güzel', 'hoş']} iliski="esAnlam" />;
    case 'kb-anlatim-2':
      return <Karsilastirma kelimeler={['büyük', 'küçük']} iliski="zit" />;
    case 'kb-anlatim-3':
      return <Karsilastirma kelimeler={['yüz (sayı)', 'yüz (vücut)']} iliski="esSeslilik" />;
    case 'oa-anlatim-1':
      return <SoruIsaretleriGorsel />;
    case 'oa-anlatim-2':
      return <SahneGorsel sahne="ana-fikir" nesne="kitap" />;
    case 'oa-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <SahneGorsel sahne="detay" nesne="kitap" />
          <SahneGorsel sahne="yorum" nesne="cocuk" />
        </View>
      );
    case 'cb-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <CumleAnaliz metin="Ayşe koştu." cumleTuru="Tam ✅" />
          <CumleAnaliz metin="Ayşe koş..." cumleTuru="Eksik ❌" />
        </View>
      );
    case 'cb-anlatim-2':
      return <CumleAnaliz metin="Çocuk koştu" ozne="Çocuk" yuklem="koştu" />;
    case 'cb-anlatim-3':
      return (
        <View style={styles.cumleTurSatir}>
          {['Olumlu', 'Olumsuz', 'Soru', 'Ünlem'].map((t) => (
            <View key={t} style={styles.cumleTurKutu}>
              <GuvenliMetin style={styles.cumleEtiket} tamGenislik>
                {t}
              </GuvenliMetin>
            </View>
          ))}
        </View>
      );
    case 'nw-anlatim-1':
      return (
        <View style={styles.noktaSatir}>
          {['.', ',', '?', '!'].map((i) => (
            <NoktalamaKart key={i} isaret={i} />
          ))}
        </View>
      );
    case 'nw-anlatim-2':
      return <CumleAnaliz metin="Ayşe İstanbul'da yaşıyor." />;
    case 'nw-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <GuvenliMetin style={styles.dogruYazim} tamGenislik={false}>
            bugün ✅
          </GuvenliMetin>
          <GuvenliMetin style={styles.yanlisYazim} tamGenislik={false}>
            bu gün ❌
          </GuvenliMetin>
        </View>
      );
    case 'hm-anlatim-1':
      return <SahneGorsel sahne="hikaye" nesne="hikaye" />;
    case 'hm-anlatim-2':
      return <HikayeYapisi />;
    case 'hm-anlatim-3':
      return <SoruIsaretleriGorsel />;
    case 'sr-anlatim-1':
      return <SiirGorsel sahne="siir-dize" />;
    case 'sr-anlatim-2':
      return <SiirGorsel sahne="kafiye" />;
    case 'sr-anlatim-3':
      return <SiirGorsel sahne="kisilestirme" />;
    case 'bt-anlatim-1':
      return <SahneGorsel sahne="bilgi" nesne="bilgi" />;
    case 'bt-anlatim-2':
      return <BilgiYapisi />;
    case 'bt-anlatim-3':
      return <SahneGorsel sahne="not-alma" nesne="kitap" />;
    case 'yz-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <SahneGorsel sahne="yazan" nesne="kalem" />
          <CumleAnaliz metin="Ali koştu." cumleTuru="Tam cümle" />
        </View>
      );
    case 'yz-anlatim-2':
      return <ParagrafYapisi />;
    case 'yz-anlatim-3':
      return <HikayeSoruKartlari />;
    case 'dk-anlatim-1':
      return <DinlemeSahnesi />;
    case 'dk-anlatim-2':
      return <SahneGorsel sahne="sunum" nesne="ogretmen" />;
    case 'dk-anlatim-3':
      return <IletisimKurallari />;
    case 'sdb-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <SahneGorsel sahne="isim" nesne="kalem" />
          <SahneGorsel sahne="isim" nesne="kedi" />
          <SahneGorsel sahne="isim" nesne="masa" />
        </View>
      );
    case 'sdb-anlatim-2':
      return <SozcukTuruKartlari />;
    case 'sdb-anlatim-3':
      return <ZamirGosterme />;
    default:
      return <SahneGorsel sahne={sahne} />;
  }
}

export function TurkceGorsel(props: Props) {
  const { mod, sahne, kelime, heceler, harfler, vurgu, nesne, metin, ozne, yuklem, cumleTuru, kelimeler, isaret, iliski } =
    props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'hece') return <HeceKutulari kelime={kelime} heceler={heceler} vurgu={vurgu} />;
  if (mod === 'harf') return sahne === 'alfabe' ? <AlfabeGorsel /> : <HarfKartlari harfler={harfler} vurgu={vurgu} />;
  if (mod === 'nesne') return <KelimeGorsel kelime={kelime} nesne={nesne ?? sahne} vurgu={vurgu} />;
  if (mod === 'noktalama') return <NoktalamaKart isaret={isaret ?? sahne} />;
  if (mod === 'cumle') return <CumleAnaliz metin={metin} ozne={ozne} yuklem={yuklem} cumleTuru={cumleTuru} />;
  if (mod === 'karsilastir') return <Karsilastirma kelimeler={kelimeler} iliski={iliski} />;
  if (mod === 'sahne') return <SahneGorsel sahne={sahne} nesne={nesne} />;
  if (mod === 'siir') return <SiirGorsel sahne={sahne} />;
  if (mod === 'kart') return <HarfKartlari harfler={harfler ?? kelimeler} vurgu={vurgu} />;
  return <SahneGorsel sahne={sahne} nesne={nesne ?? kelime} />;
}

const styles = StyleSheet.create({
  ortala: { alignItems: 'center', gap: 8 },
  kelimeBaslik: { fontSize: 18, fontWeight: '700', color: GEO.metin, marginBottom: 4 },
  heceSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6 },
  heceKutu: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: colors.kenarlik,
  },
  heceMetin: { fontSize: 16, fontWeight: '700', color: GEO.metin },
  harfSatir: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, paddingVertical: 4 },
  harfKart: {
    minWidth: 32,
    minHeight: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.kenarlik,
    paddingHorizontal: 6,
  },
  harfMetin: { fontSize: 15, fontWeight: '700', color: GEO.metin },
  nesneEmoji: { fontSize: 48, marginBottom: 8 },
  noktaKart: {
    width: 72,
    height: 72,
    borderRadius: 12,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.kart,
  },
  noktaSembol: { fontSize: 36, fontWeight: '700' },
  noktaSatir: { flexDirection: 'row', gap: 12, justifyContent: 'center' },
  cumleMetin: { fontSize: 16, fontWeight: '600', color: GEO.metin, textAlign: 'center', marginBottom: 8 },
  cumleSatir: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  cumleParca: { borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: colors.kenarlik },
  cumleEtiket: { fontSize: 13, fontWeight: '700', color: GEO.metin },
  cumleTurSatir: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  cumleTurKutu: {
    backgroundColor: colors.birincilAcik,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: colors.birincil,
  },
  karsSatir: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10 },
  karsKart: {
    backgroundColor: colors.kart,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: colors.kenarlik,
    minWidth: 80,
  },
  karsMetin: { fontSize: 14, fontWeight: '700', color: GEO.metin, textAlign: 'center' },
  ok: { fontSize: 22, fontWeight: '700', color: colors.birincil },
  sahne: { alignItems: 'center', padding: 12 },
  sahneBaslik: { fontSize: 13, color: GEO.metin, marginTop: 6, textAlign: 'center' },
  bolumBaslik: { fontSize: 12, fontWeight: '700', color: GEO.metin, marginTop: 8 },
  soruIsaretSatir: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  soruIsaret: { borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: colors.kenarlik },
  soruIsaretMetin: { fontSize: 13, fontWeight: '700', color: GEO.metin },
  dogruYazim: { fontSize: 16, fontWeight: '700', color: GEO.yesil },
  yanlisYazim: { fontSize: 16, fontWeight: '700', color: GEO.kirmizi },
});
