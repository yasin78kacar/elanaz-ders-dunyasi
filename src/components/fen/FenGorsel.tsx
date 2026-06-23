import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Ellipse, Path, Text as SvgText } from 'react-native-svg';
import { GuvenliMetin } from '../GuvenliMetin';
import { GEO } from '../nesneler/colors';
import { colors } from '../../theme/colors';
import type { GorselFen } from '../../types/content';

type Props = GorselFen;

const NESNE: Record<string, { emoji: string; etiket: string; canli?: boolean }> = {
  kedi: { emoji: '🐱', etiket: 'Kedi', canli: true },
  kus: { emoji: '🐦', etiket: 'Kuş', canli: true },
  balik: { emoji: '🐟', etiket: 'Balık', canli: true },
  agac: { emoji: '🌳', etiket: 'Ağaç', canli: true },
  cicek: { emoji: '🌸', etiket: 'Çiçek', canli: true },
  kelebek: { emoji: '🦋', etiket: 'Kelebek', canli: true },
  insan: { emoji: '👧', etiket: 'İnsan', canli: true },
  kopek: { emoji: '🐶', etiket: 'Köpek', canli: true },
  inek: { emoji: '🐄', etiket: 'İnek', canli: true },
  ordek: { emoji: '🦆', etiket: 'Ördek', canli: true },
  ari: { emoji: '🐝', etiket: 'Arı', canli: true },
  kurbağa: { emoji: '🐸', etiket: 'Kurbağa', canli: true },
  kaya: { emoji: '🪨', etiket: 'Kaya', canli: false },
  kitap: { emoji: '📚', etiket: 'Kitap', canli: false },
  kalem: { emoji: '✏️', etiket: 'Kalem', canli: false },
  masa: { emoji: '🪑', etiket: 'Masa', canli: false },
  tas: { emoji: '🪨', etiket: 'Taş', canli: false },
  araba: { emoji: '🚗', etiket: 'Araba', canli: false },
  top: { emoji: '⚽', etiket: 'Top', canli: false },
  gunes: { emoji: '☀️', etiket: 'Güneş', canli: false },
  su: { emoji: '💧', etiket: 'Su', canli: false },
  toprak: { emoji: '🟤', etiket: 'Toprak', canli: false },
  sebze: { emoji: '🥕', etiket: 'Sebze', canli: true },
  meyve: { emoji: '🍎', etiket: 'Meyve', canli: true },
  yilan: { emoji: '🐍', etiket: 'Yılan', canli: true },
  kaplumbaga: { emoji: '🐢', etiket: 'Kaplumbağa', canli: true },
  // Tema 2 — Madde ve Özellikleri
  elma: { emoji: '🍎', etiket: 'Elma' },
  limon: { emoji: '🍋', etiket: 'Limon' },
  pamuk: { emoji: '☁️', etiket: 'Pamuk' },
  sunger: { emoji: '🧽', etiket: 'Sünger' },
  cam: { emoji: '🫙', etiket: 'Cam' },
  zimpara: { emoji: '🪵', etiket: 'Zımpara' },
  ayna: { emoji: '🪞', etiket: 'Ayna' },
  gul: { emoji: '🌹', etiket: 'Gül' },
  cikolata: { emoji: '🍫', etiket: 'Çikolata' },
  balon: { emoji: '🎈', etiket: 'Balon' },
  'demir-civi': { emoji: '🔩', etiket: 'Demir Çivi' },
  lastik: { emoji: '🔗', etiket: 'Lastik' },
  'yun-kazak': { emoji: '🧶', etiket: 'Yün Kazak' },
  ceviz: { emoji: '🥜', etiket: 'Ceviz' },
  telefon: { emoji: '📱', etiket: 'Telefon' },
  'oyun-hamuru': { emoji: '🎨', etiket: 'Oyun Hamuru' },
  'kagit-havlu': { emoji: '🧻', etiket: 'Kağıt Havlu' },
  gozluk: { emoji: '👓', etiket: 'Gözlük' },
  zil: { emoji: '🔔', etiket: 'Zil' },
  cay: { emoji: '🍵', etiket: 'Çay' },
  yastik: { emoji: '🛏️', etiket: 'Yastık' },
  bilye: { emoji: '🔮', etiket: 'Bilye' },
  cilek: { emoji: '🍓', etiket: 'Çilek' },
  sabun: { emoji: '🧼', etiket: 'Sabun' },
  'demir-kapi': { emoji: '🚪', etiket: 'Demir Kapı' },
  corba: { emoji: '🍲', etiket: 'Çorba' },
  'goz-kapali': { emoji: '🙈', etiket: 'Gözleri Kapalı' },
  // Tema 2 — Kuvvet ve Hareket
  'market-arabasi': { emoji: '🛒', etiket: 'Market Arabası' },
  cekmece: { emoji: '🗄️', etiket: 'Çekmece' },
  bisiklet: { emoji: '🚲', etiket: 'Bisiklet' },
  salincak: { emoji: '🎠', etiket: 'Salıncak' },
  halat: { emoji: '🪢', etiket: 'Halat' },
  raket: { emoji: '🏓', etiket: 'Raket' },
  'donme-dolap': { emoji: '🎡', etiket: 'Dönme Dolap' },
  'bebek-arabasi': { emoji: '👶', etiket: 'Bebek Arabası' },
  'ruzgar-gulu': { emoji: '🌬️', etiket: 'Rüzgargülü' },
  fis: { emoji: '🔌', etiket: 'Fiş' },
  otobus: { emoji: '🚌', etiket: 'Otobüs' },
  ucurtma: { emoji: '🪁', etiket: 'Uçurtma' },
  cekic: { emoji: '🔨', etiket: 'Çekiç' },
  corap: { emoji: '🧦', etiket: 'Çorap' },
  miknatis: { emoji: '🧲', etiket: 'Mıknatıs' },
  voleybol: { emoji: '🏐', etiket: 'Voleybol' },
  valiz: { emoji: '🧳', etiket: 'Valiz' },
  firildak: { emoji: '🌀', etiket: 'Fırıldak' },
  'trafik-isigi': { emoji: '🚦', etiket: 'Trafik Işığı' },
  basketbol: { emoji: '🏀', etiket: 'Basketbol' },
  direksiyon: { emoji: '🚗', etiket: 'Direksiyon' },
  kaleci: { emoji: '🧤', etiket: 'Kaleci' },
  mont: { emoji: '🧥', etiket: 'Mont' },
  buzdolabi: { emoji: '🧊', etiket: 'Buzdolabı' },
  semsiye: { emoji: '☂️', etiket: 'Şemsiye' },
  yaprak: { emoji: '🍂', etiket: 'Yaprak' },
  supurge: { emoji: '🧹', etiket: 'Süpürge' },
  ayakkabi: { emoji: '👟', etiket: 'Ayakkabı' },
  tren: { emoji: '🚂', etiket: 'Tren' },
  'masa-tenisi': { emoji: '🏓', etiket: 'Masa Tenisi' },
  kurek: { emoji: '⛏️', etiket: 'Kürek' },
  testere: { emoji: '🪚', etiket: 'Testere' },
  // Tema 2 — Işık ve Ses
  goz: { emoji: '👁️', etiket: 'Göz' },
  ay: { emoji: '🌙', etiket: 'Ay' },
  'el-feneri': { emoji: '🔦', etiket: 'El Feneri' },
  'ates-bocegi': { emoji: '✨', etiket: 'Ateş Böceği' },
  'masa-lambasi': { emoji: '💡', etiket: 'Masa Lambası' },
  kulak: { emoji: '👂', etiket: 'Kulak' },
  piyano: { emoji: '🎹', etiket: 'Piyano' },
  simsek: { emoji: '⚡', etiket: 'Şimşek' },
  yildiz: { emoji: '⭐', etiket: 'Yıldız' },
  selale: { emoji: '💦', etiket: 'Şelale' },
  korna: { emoji: '📯', etiket: 'Korna' },
  cocuk: { emoji: '👧', etiket: 'Çocuk' },
  'sokak-lambasi': { emoji: '🏮', etiket: 'Sokak Lambası' },
  ambulans: { emoji: '🚑', etiket: 'Ambulans' },
  'kamp-atesi': { emoji: '🔥', etiket: 'Kamp Ateşi' },
  ampul: { emoji: '💡', etiket: 'Ampul' },
  gitar: { emoji: '🎸', etiket: 'Gitar' },
  deniz: { emoji: '🌊', etiket: 'Deniz' },
  'karanlik-oda': { emoji: '🌑', etiket: 'Karanlık Oda' },
  'deniz-feneri': { emoji: '🗼', etiket: 'Deniz Feneri' },
  nehir: { emoji: '🏞️', etiket: 'Nehir' },
  flut: { emoji: '🎵', etiket: 'Flüt' },
  horoz: { emoji: '🐓', etiket: 'Horoz' },
  yagmur: { emoji: '🌧️', etiket: 'Yağmur' },
  televizyon: { emoji: '📺', etiket: 'Televizyon' },
  anne: { emoji: '👩', etiket: 'Anne' },
  ruzgar: { emoji: '💨', etiket: 'Rüzgar' },
  mum: { emoji: '🕯️', etiket: 'Mum' },
  yuzuk: { emoji: '💍', etiket: 'Yüzük' },
  mesale: { emoji: '🔥', etiket: 'Meşale' },
  aslan: { emoji: '🦁', etiket: 'Aslan', canli: true },
  tavsan: { emoji: '🐰', etiket: 'Tavşan', canli: true },
  deve: { emoji: '🐫', etiket: 'Deve', canli: true },
  penguen: { emoji: '🐧', etiket: 'Penguen', canli: true },
  kirpi: { emoji: '🦔', etiket: 'Kirpi', canli: true },
  zebra: { emoji: '🦓', etiket: 'Zebra', canli: true },
  bukalemun: { emoji: '🦎', etiket: 'Bukalemun', canli: true },
  // Tema 3 — Dünya ve Evren
  dunya: { emoji: '🌍', etiket: 'Dünya' },
  kure: { emoji: '🔵', etiket: 'Küre' },
  gunduz: { emoji: '☀️', etiket: 'Gündüz' },
  gece: { emoji: '🌙', etiket: 'Gece' },
  'donen-dunya': { emoji: '🌍', etiket: 'Dönen Dünya' },
  'gunes-gozlugu': { emoji: '🕶️', etiket: 'Güneş Gözlüğü' },
  'mavi-deniz': { emoji: '🌊', etiket: 'Okyanus' },
  uzay: { emoji: '🚀', etiket: 'Uzay' },
  'eski-harita': { emoji: '🗺️', etiket: 'Eski Harita' },
  topac: { emoji: '🪀', etiket: 'Topaç' },
  'karanlik-dunya': { emoji: '🌑', etiket: 'Karanlık Dünya' },
  gemi: { emoji: '⛵', etiket: 'Gemi' },
  'ay-evreleri': { emoji: '🌓', etiket: 'Ay Evreleri' },
  astronot: { emoji: '👨‍🚀', etiket: 'Astronot' },
  'sabah-gunesi': { emoji: '🌅', etiket: 'Sabah Güneşi' },
  dolunay: { emoji: '🌕', etiket: 'Dolunay' },
  'gunes-sistemi': { emoji: '🪐', etiket: 'Güneş Sistemi' },
  'gece-gunduz': { emoji: '🌗', etiket: 'Gece-Gündüz' },
  'gunes-kremi': { emoji: '🧴', etiket: 'Güneş Kremi' },
  teleskop: { emoji: '🔭', etiket: 'Teleskop' },
  'uyuyan-cocuk': { emoji: '😴', etiket: 'Uyuyan Çocuk' },
  // Tema 3 — Hava Durumu ve Mevsimler
  bulut: { emoji: '☁️', etiket: 'Bulut' },
  'dort-mevsim': { emoji: '🍂', etiket: 'Dört Mevsim' },
  kis: { emoji: '❄️', etiket: 'Kış' },
  ilkbahar: { emoji: '🌸', etiket: 'İlkbahar' },
  yaz: { emoji: '☀️', etiket: 'Yaz' },
  sonbahar: { emoji: '🍁', etiket: 'Sonbahar' },
  'kis-kiyafet': { emoji: '🧣', etiket: 'Kış Kıyafeti' },
  sapka: { emoji: '👒', etiket: 'Şapka' },
  takvim: { emoji: '📅', etiket: 'Takvim' },
  'kardan-adam': { emoji: '⛄', etiket: 'Kardan Adam' },
  'yaz-kiyafet': { emoji: '👕', etiket: 'Yaz Kıyafeti' },
  bere: { emoji: '🧢', etiket: 'Bere' },
  'hava-durumu': { emoji: '📺', etiket: 'Hava Durumu' },
  'yagmur-cizme': { emoji: '🥾', etiket: 'Yağmur Çizmesi' },
  papatya: { emoji: '🌼', etiket: 'Papatya' },
  'hava-sembol': { emoji: '🌤️', etiket: 'Hava Sembolü' },
  'su-birikintisi': { emoji: '💧', etiket: 'Su Birikintisi' },
  'islak-sac': { emoji: '💇', etiket: 'Islak Saç' },
  sis: { emoji: '🌫️', etiket: 'Sis' },
  dolu: { emoji: '🧊', etiket: 'Dolu' },
  termometre: { emoji: '🌡️', etiket: 'Termometre' },
  // Tema 3 — Sağlıklı Yaşam ve Çevre
  'dis-fircasi': { emoji: '🪥', etiket: 'Diş Fırçası' },
  'el-yikama': { emoji: '🧼', etiket: 'El Yıkama' },
  'meyve-sepeti': { emoji: '🍎', etiket: 'Meyve Sepeti' },
  sut: { emoji: '🥛', etiket: 'Süt' },
  banyo: { emoji: '🛁', etiket: 'Banyo' },
  tirnak: { emoji: '💅', etiket: 'Tırnak' },
  spor: { emoji: '⚽', etiket: 'Spor' },
  tablet: { emoji: '📱', etiket: 'Tablet' },
  'geri-donusum': { emoji: '♻️', etiket: 'Geri Dönüşüm' },
  'cop-kutusu': { emoji: '🗑️', etiket: 'Çöp Kutusu' },
  'temiz-park': { emoji: '🏞️', etiket: 'Temiz Park' },
  'acik-musluk': { emoji: '🚰', etiket: 'Açık Musluk' },
  fidan: { emoji: '🌱', etiket: 'Fidan' },
  'kirli-el': { emoji: '🤲', etiket: 'Kirli El' },
  yemek: { emoji: '🍽️', etiket: 'Yemek' },
  hapsiran: { emoji: '🤧', etiket: 'Hapşırma' },
  seker: { emoji: '🍬', etiket: 'Şeker' },
  'taranmis-sac': { emoji: '💇', etiket: 'Taranmış Saç' },
  'cam-atik': { emoji: '🫙', etiket: 'Cam Atık' },
  'orman-cop': { emoji: '🏕️', etiket: 'Orman Çöpü' },
  'mutlu-cocuk': { emoji: '😊', etiket: 'Mutlu Çocuk' },
  doktor: { emoji: '👨‍⚕️', etiket: 'Doktor' },
  kahvalti: { emoji: '🥐', etiket: 'Kahvaltı' },
  orman: { emoji: '🌲', etiket: 'Orman' },
  lamba: { emoji: '💡', etiket: 'Lamba' },
  default: { emoji: '🔬', etiket: 'Fen', canli: true },
};

const CANLI_RENK = GEO.yesil + '55';
const CANSIZ_RENK = '#B0BEC555';
const VURGU_RENK = GEO.turuncu + '88';

function nesneBilgi(anahtar?: string) {
  const k = (anahtar ?? 'default').toLowerCase().replace(/-/g, '');
  const eslesme = Object.entries(NESNE).find(([key]) => key.replace(/-/g, '') === k);
  return eslesme ? eslesme[1] : NESNE.default;
}

function NesneKart({ anahtar, vurgulu }: { anahtar: string; vurgulu?: boolean }) {
  const n = nesneBilgi(anahtar);
  const arka = vurgulu ? VURGU_RENK : n.canli ? CANLI_RENK : CANSIZ_RENK;
  return (
    <View style={[styles.kart, { backgroundColor: arka, borderColor: vurgulu ? GEO.turuncu : colors.kenarlik }]}>
      <GuvenliMetin style={styles.emoji} tamGenislik={false}>
        {n.emoji}
      </GuvenliMetin>
      <GuvenliMetin style={styles.etiket} tamGenislik>
        {n.etiket}
      </GuvenliMetin>
      {n.canli !== undefined && (
        <GuvenliMetin style={[styles.durum, { color: n.canli ? GEO.yesil : GEO.kahve }]} tamGenislik>
          {n.canli ? 'Canlı' : 'Cansız'}
        </GuvenliMetin>
      )}
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

function BitkiDiyagram({ vurgu }: { vurgu?: Props['vurgu'] }) {
  const parcalar = ['kök', 'gövde', 'yaprak', 'çiçek', 'meyve'];
  const v = typeof vurgu === 'string' ? vurgu : Array.isArray(vurgu) ? vurgu[0] : undefined;
  const w = 180;
  const h = 220;
  const cx = w / 2;
  const vurguRenk = (p: string) => (v === p ? GEO.turuncu : GEO.yesil);

  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Ellipse cx={cx} cy={h - 18} rx={50} ry={12} fill="#8D6E63" />
        <Path d={`M ${cx} ${h - 28} L ${cx} 90`} stroke={vurguRenk('gövde')} strokeWidth={8} strokeLinecap="round" />
        <Path d={`M ${cx} ${h - 20} Q ${cx - 35} ${h - 5} ${cx - 45} ${h - 30}`} stroke={vurguRenk('kök')} strokeWidth={4} fill="none" />
        <Path d={`M ${cx} ${h - 20} Q ${cx + 35} ${h - 5} ${cx + 45} ${h - 30}`} stroke={vurguRenk('kök')} strokeWidth={4} fill="none" />
        <Ellipse cx={cx - 40} cy={110} rx={22} ry={12} fill={vurguRenk('yaprak')} transform={`rotate(-30 ${cx - 40} 110)`} />
        <Ellipse cx={cx + 40} cy={100} rx={22} ry={12} fill={vurguRenk('yaprak')} transform={`rotate(30 ${cx + 40} 100)`} />
        <Circle cx={cx} cy={72} r={14} fill={vurguRenk('çiçek')} />
        <Circle cx={cx} cy={52} r={10} fill={vurguRenk('meyve')} />
        {parcalar.map((p, i) => (
          <SvgText key={p} x={8} y={20 + i * 18} fontSize={11} fill={v === p ? GEO.turuncu : GEO.metin} fontWeight={v === p ? 'bold' : 'normal'}>
            {p}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
}

function HayvanGorsel({ nesne, ozellik }: { nesne?: string; ozellik?: string }) {
  const n = nesneBilgi(nesne);
  const ozellikMetin: Record<string, string> = {
    tuy: 'Tüy örtüsü',
    pul: 'Pul örtüsü',
    deri: 'Deri örtüsü',
    kara: 'Kara habitatı',
    su: 'Su habitatı',
    hava: 'Hava habitatı',
    yurur: 'Yürür',
    ucar: 'Uçar',
    yuzer: 'Yüzer',
    surunur: 'Sürünür',
    memeli: 'Memeli',
    kus: 'Kuş',
    balik: 'Balık',
    bocek: 'Böcek',
    otcul: 'Otçul beslenme',
    etcil: 'Etçil beslenme',
    koruma: 'Korunma',
    kamuflaj: 'Kamuflaj',
    buz: 'Buzlu ortam',
  };
  return (
    <View style={styles.hayvan}>
      <GuvenliMetin style={styles.hayvanEmoji} tamGenislik={false}>
        {n.emoji}
      </GuvenliMetin>
      <GuvenliMetin style={styles.hayvanEtiket} tamGenislik>
        {n.etiket}
      </GuvenliMetin>
      {ozellik && (
        <View style={styles.ozellikKutu}>
          <GuvenliMetin style={styles.ozellikMetin} tamGenislik>
            {ozellikMetin[ozellik] ?? ozellik}
          </GuvenliMetin>
        </View>
      )}
    </View>
  );
}

function OzellikListesi({ baslik, maddeler }: { baslik: string; maddeler: string[] }) {
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

function DunyaGorsel() {
  const w = 160;
  const h = 160;
  const cx = w / 2;
  const cy = h / 2;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Circle cx={cx} cy={cy} r={60} fill="#2196F3" />
        <Ellipse cx={cx - 20} cy={cy - 10} rx={35} ry={25} fill="#4CAF50" />
        <Ellipse cx={cx + 25} cy={cy + 15} rx={28} ry={20} fill="#8BC34A" />
        <Circle cx={cx} cy={cy} r={62} fill="none" stroke={GEO.mavi} strokeWidth={2} />
      </Svg>
    </View>
  );
}

function GunesSistemiGorsel() {
  const w = 200;
  const h = 120;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Circle cx={30} cy={60} r={22} fill="#FFC107" />
        <Circle cx={100} cy={60} r={14} fill="#2196F3" />
        <Circle cx={140} cy={55} r={8} fill="#B0BEC5" />
        <Path d="M 52 60 L 86 60" stroke="#FFC107" strokeWidth={2} strokeDasharray="4 3" />
        <Path d="M 114 60 L 132 55" stroke="#B0BEC5" strokeWidth={1.5} strokeDasharray="3 2" />
      </Svg>
    </View>
  );
}

function DortMevsimGorsel() {
  const w = 200;
  const h = 140;
  const cx = w / 2;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Ellipse cx={cx} cy={h - 20} rx={60} ry={14} fill="#8D6E63" />
        <Path d={`M ${cx} ${h - 30} L ${cx} 50`} stroke="#795548" strokeWidth={8} strokeLinecap="round" />
        <Circle cx={cx - 50} cy={70} r={28} fill="#81C784" opacity={0.9} />
        <Circle cx={cx + 50} cy={70} r={28} fill="#FFB74D" opacity={0.9} />
        <Circle cx={cx - 50} cy={30} r={28} fill="#F48FB1" opacity={0.9} />
        <Circle cx={cx + 50} cy={30} r={28} fill="#90CAF9" opacity={0.9} />
        <SvgText x={cx - 62} y={75} fontSize={10} fill={GEO.metin}>İlkbahar</SvgText>
        <SvgText x={cx + 28} y={75} fontSize={10} fill={GEO.metin}>Sonbahar</SvgText>
        <SvgText x={cx - 52} y={35} fontSize={10} fill={GEO.metin}>Yaz</SvgText>
        <SvgText x={cx + 38} y={35} fontSize={10} fill={GEO.metin}>Kış</SvgText>
      </Svg>
    </View>
  );
}

function GeriDonusumGorsel() {
  return (
    <View style={styles.karsSatir}>
      <NesneKart anahtar="geri-donusum" vurgulu />
      <NesneKart anahtar="fidan" vurgulu />
    </View>
  );
}

function AnlatimSahne({ sahne }: { sahne: string }) {
  switch (sahne) {
    case 'cc-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="kedi" />
          <NesneKart anahtar="kaya" />
        </View>
      );
    case 'cc-anlatim-2':
      return (
        <OzellikListesi
          baslik="Canlıların Özellikleri"
          maddeler={['Büyür', 'Beslenir', 'Solur', 'Ürer', 'Hareket eder', 'Tepki verir', 'Ölür']}
        />
      );
    case 'cc-anlatim-3':
      return <GrupGorsel nesneler={['agac', 'kedi', 'kitap', 'tas', 'kus', 'masa']} vurgu={['agac', 'kedi', 'kus']} />;
    case 'bt-anlatim-1':
      return <BitkiDiyagram />;
    case 'bt-anlatim-2':
      return (
        <GrupGorsel nesneler={['su', 'gunes', 'toprak', 'cicek']} vurgu={['su', 'gunes', 'toprak']} />
      );
    case 'bt-anlatim-3':
      return <GrupGorsel nesneler={['agac', 'cicek', 'sebze']} />;
    case 'hv-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <HayvanGorsel nesne="kedi" ozellik="memeli" />
          <HayvanGorsel nesne="kus" ozellik="kus" />
          <HayvanGorsel nesne="balik" ozellik="balik" />
        </View>
      );
    case 'hv-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <HayvanGorsel nesne="kedi" ozellik="kara" />
          <HayvanGorsel nesne="balik" ozellik="su" />
          <HayvanGorsel nesne="kus" ozellik="hava" />
        </View>
      );
    case 'hv-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <HayvanGorsel nesne="kus" ozellik="tuy" />
          <HayvanGorsel nesne="balik" ozellik="pul" />
          <HayvanGorsel nesne="kedi" ozellik="deri" />
        </View>
      );
    case 'mo-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="elma" vurgulu />
          <View style={styles.duyuSatir}>
            {['👁️', '👂', '👃', '👅', '✋'].map((e) => (
              <GuvenliMetin key={e} style={styles.duyuEmoji} tamGenislik={false}>
                {e}
              </GuvenliMetin>
            ))}
          </View>
        </View>
      );
    case 'mo-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="yun-kazak" vurgulu />
          <NesneKart anahtar="masa" vurgulu />
        </View>
      );
    case 'mo-anlatim-3':
      return <GrupGorsel nesneler={['lastik', 'cam', 'zimpara', 'ayna']} vurgu={['lastik', 'cam']} />;
    case 'kh-anlatim-1':
      return (
        <View style={styles.kuvvetSahne}>
          <GuvenliMetin style={styles.kuvvetEmoji} tamGenislik={false}>
            👧➡️🚚
          </GuvenliMetin>
          <GuvenliMetin style={styles.kuvvetEtiket} tamGenislik>
            İtme ve Çekme
          </GuvenliMetin>
        </View>
      );
    case 'kh-anlatim-2':
      return (
        <View style={styles.kuvvetSahne}>
          <GuvenliMetin style={styles.kuvvetEmoji} tamGenislik={false}>
            🚲🛑🐕
          </GuvenliMetin>
          <GuvenliMetin style={styles.kuvvetEtiket} tamGenislik>
            Fren — Yavaşlama
          </GuvenliMetin>
        </View>
      );
    case 'kh-anlatim-3':
      return (
        <View style={styles.kuvvetSahne}>
          <GuvenliMetin style={styles.kuvvetEmoji} tamGenislik={false}>
            ⚽↗️👧
          </GuvenliMetin>
          <GuvenliMetin style={styles.kuvvetEtiket} tamGenislik>
            Yön Değiştirme
          </GuvenliMetin>
        </View>
      );
    case 'is-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="karanlik-oda" />
          <NesneKart anahtar="masa-lambasi" vurgulu />
        </View>
      );
    case 'is-anlatim-2':
      return <GrupGorsel nesneler={['gunes', 'el-feneri', 'ay']} vurgu="gunes" />;
    case 'is-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="kus" />
          <NesneKart anahtar="piyano" />
        </View>
      );
    case 'de-anlatim-1':
      return <DunyaGorsel />;
    case 'de-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="gunes" vurgulu />
          <GuvenliMetin style={styles.kuvvetEmoji} tamGenislik={false}>
            ☀️→🌍
          </GuvenliMetin>
        </View>
      );
    case 'de-anlatim-3':
      return <GunesSistemiGorsel />;
    case 'hm-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="gunduz" />
          <NesneKart anahtar="semsiye" />
        </View>
      );
    case 'hm-anlatim-2':
      return <DortMevsimGorsel />;
    case 'hm-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="kis-kiyafet" />
          <NesneKart anahtar="kardan-adam" />
        </View>
      );
    case 'sy-anlatim-1':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="kahvalti" />
          <NesneKart anahtar="el-yikama" />
        </View>
      );
    case 'sy-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="spor" />
          <NesneKart anahtar="uyuyan-cocuk" />
        </View>
      );
    case 'sy-anlatim-3':
      return <GeriDonusumGorsel />;
    default:
      return <NesneKart anahtar={sahne || 'default'} />;
  }
}

export function FenGorsel(props: Props) {
  const { mod, sahne, nesne, nesneler, vurgu, ozellik } = props;

  if (mod === 'anlatim') return <AnlatimSahne sahne={sahne ?? ''} />;
  if (mod === 'grup') return <GrupGorsel nesneler={nesneler} vurgu={vurgu} />;
  if (mod === 'bitki') return <BitkiDiyagram vurgu={vurgu} />;
  if (mod === 'hayvan') return <HayvanGorsel nesne={nesne ?? sahne} ozellik={ozellik} />;
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
    minWidth: 80,
    margin: 4,
  },
  emoji: { fontSize: 40 },
  etiket: { fontSize: 12, fontWeight: '700', color: GEO.metin, marginTop: 4 },
  durum: { fontSize: 10, fontWeight: '600', marginTop: 2 },
  grup: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  karsSatir: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8 },
  hayvan: { alignItems: 'center', padding: 8 },
  hayvanEmoji: { fontSize: 44 },
  hayvanEtiket: { fontSize: 13, fontWeight: '700', color: GEO.metin },
  ozellikKutu: {
    marginTop: 6,
    backgroundColor: colors.birincilAcik,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  ozellikMetin: { fontSize: 11, fontWeight: '600', color: GEO.metin },
  liste: { padding: 8, gap: 4 },
  listeBaslik: { fontSize: 14, fontWeight: '700', color: GEO.metin, marginBottom: 6, textAlign: 'center' },
  listeMadde: { backgroundColor: CANLI_RENK, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  listeMetin: { fontSize: 12, fontWeight: '600', color: GEO.metin },
  duyuSatir: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  duyuEmoji: { fontSize: 28 },
  kuvvetSahne: { alignItems: 'center', padding: 12, gap: 8 },
  kuvvetEmoji: { fontSize: 36 },
  kuvvetEtiket: { fontSize: 13, fontWeight: '700', color: GEO.metin },
});
