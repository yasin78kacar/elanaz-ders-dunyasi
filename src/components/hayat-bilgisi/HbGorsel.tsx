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
  hemsire: { emoji: '👩‍⚕️', etiket: 'Hemşire' },
  sut: { emoji: '🥛', etiket: 'Süt' },
  meyve: { emoji: '🍎', etiket: 'Meyve' },
  sebze: { emoji: '🥕', etiket: 'Sebze' },
  calismaplani: { emoji: '📅', etiket: 'Çalışma Planı' },
  polis: { emoji: '👮', etiket: 'Polis' },
  itfaiye: { emoji: '🚒', etiket: 'İtfaiye' },
  cop: { emoji: '🗑️', etiket: 'Çöp' },
  geriDonusum: { emoji: '♻️', etiket: 'Geri Dönüşüm' },
  agac: { emoji: '🌳', etiket: 'Ağaç' },
  park: { emoji: '🏞️', etiket: 'Park' },
  mahalle: { emoji: '🏘️', etiket: 'Mahalle' },
  trafik: { emoji: '🚦', etiket: 'Trafik' },
  temizlik: { emoji: '🧹', etiket: 'Temizlik' },
  sabun: { emoji: '🧼', etiket: 'Sabun' },
  disFircasi: { emoji: '🪥', etiket: 'Diş Fırçası' },
  vitamin: { emoji: '💊', etiket: 'Vitamin' },
  ambulans: { emoji: '🚑', etiket: 'Ambulans' },
  eczane: { emoji: '💉', etiket: 'Eczane' },
  spor: { emoji: '⚽', etiket: 'Spor' },
  emniyetKemeri: { emoji: '🔒', etiket: 'Emniyet Kemeri' },
  tablet: { emoji: '📱', etiket: 'Tablet' },
  deprem: { emoji: '🏚️', etiket: 'Deprem' },
  itfaiyeci: { emoji: '👨‍🚒', etiket: 'İtfaiyeci' },
  firinci: { emoji: '🥖', etiket: 'Fırıncı' },
  ciftci: { emoji: '👨‍🌾', etiket: 'Çiftçi' },
  ascı: { emoji: '👨‍🍳', etiket: 'Aşçı' },
  muhendis: { emoji: '👷', etiket: 'Mühendis' },
  pilot: { emoji: '✈️', etiket: 'Pilot' },
  veteriner: { emoji: '🐾', etiket: 'Veteriner' },
  marangoz: { emoji: '🪚', etiket: 'Marangoz' },
  gazeteci: { emoji: '📰', etiket: 'Gazeteci' },
  astronot: { emoji: '👨‍🚀', etiket: 'Astronot' },
  temizlikGorevlisi: { emoji: '🧹', etiket: 'Temizlik Görevlisi' },
  // Tema 3 — Ülkemiz ve Vatandaşlık
  'turkiye-haritasi': { emoji: '🗺️', etiket: 'Türkiye Haritası' },
  ankara: { emoji: '🏛️', etiket: 'Ankara' },
  bayrak: { emoji: '🇹🇷', etiket: 'Türk Bayrağı' },
  'ay-yildiz': { emoji: '🌙', etiket: 'Ay ve Yıldız' },
  'istiklal-marasi': { emoji: '🎵', etiket: 'İstiklal Marşı' },
  'bayrak-toreni': { emoji: '🏫', etiket: 'Bayrak Töreni' },
  musluk: { emoji: '🚰', etiket: 'Musluk' },
  fidan: { emoji: '🌱', etiket: 'Fidan' },
  hastane: { emoji: '🏥', etiket: 'Hastane' },
  'geri-donusum': { emoji: '♻️', etiket: 'Geri Dönüşüm' },
  otobus: { emoji: '🚌', etiket: 'Otobüs' },
  kutuphane: { emoji: '📚', etiket: 'Kütüphane' },
  lamba: { emoji: '💡', etiket: 'Lamba' },
  yardimlasma: { emoji: '🤝', etiket: 'Yardımlaşma' },
  'mehmet-akif': { emoji: '✍️', etiket: 'Mehmet Akif Ersoy' },
  secim: { emoji: '🗳️', etiket: 'Seçim' },
  tabak: { emoji: '🍽️', etiket: 'Tabak' },
  'kirmizi-isik': { emoji: '🚦', etiket: 'Kırmızı Işık' },
  'saygi-durusu': { emoji: '🧍', etiket: 'Saygı Duruşu' },
  meclis: { emoji: '🏛️', etiket: 'Meclis' },
  sira: { emoji: '👥', etiket: 'Sıra' },
  'yasli-teyze': { emoji: '👵', etiket: 'Yaşlı Teyze' },
  cicek: { emoji: '🌸', etiket: 'Çiçek' },
  kumbara: { emoji: '🐷', etiket: 'Kumbara' },
  'sinif-kurallari': { emoji: '📋', etiket: 'Sınıf Kuralları' },
  'turkiye-kalp': { emoji: '❤️', etiket: 'Türkiye' },
  // Tema 3 — Tarih ve Kültürümüz
  selanik: { emoji: '🏠', etiket: 'Selanik' },
  'zubeyde-hanim': { emoji: '👩', etiket: 'Zübeyde Hanım' },
  'ali-riza': { emoji: '👨', etiket: 'Ali Rıza Efendi' },
  'makbule-hanim': { emoji: '👧', etiket: 'Makbule Hanım' },
  'cocuk-dunya': { emoji: '🌍', etiket: 'Dünya Çocukları' },
  '23-nisan': { emoji: '🎈', etiket: '23 Nisan' },
  '29-ekim': { emoji: '🎉', etiket: '29 Ekim' },
  bayramlasma: { emoji: '🤗', etiket: 'Bayramlaşma' },
  kolonya: { emoji: '🌸', etiket: 'Kolonya' },
  'davul-zurna': { emoji: '🥁', etiket: 'Davul Zurna' },
  baklava: { emoji: '🍯', etiket: 'Baklava' },
  'el-opme': { emoji: '🤲', etiket: 'El Öpme' },
  karagoz: { emoji: '🎭', etiket: 'Karagöz' },
  dugun: { emoji: '💒', etiket: 'Düğün' },
  'hasta-ziyaret': { emoji: '💐', etiket: 'Hasta Ziyareti' },
  nasreddin: { emoji: '🧔', etiket: 'Nasreddin Hoca' },
  '19-mayis': { emoji: '🏃', etiket: '19 Mayıs' },
  ninni: { emoji: '🎶', etiket: 'Ninni' },
  anitkabir: { emoji: '🏛️', etiket: 'Anıtkabir' },
  'sinif-susleme': { emoji: '🎊', etiket: 'Sınıf Süsleme' },
  '30-agustos': { emoji: '🎖️', etiket: '30 Ağustos' },
  kilim: { emoji: '🧶', etiket: 'Kilim' },
  zeybek: { emoji: '💃', etiket: 'Zeybek' },
  folklor: { emoji: '👯', etiket: 'Folklor' },
  yemek: { emoji: '🥟', etiket: 'Yemek' },
  cay: { emoji: '🍵', etiket: 'Çay' },
  asker: { emoji: '🪖', etiket: 'Asker' },
  komsu: { emoji: '🏘️', etiket: 'Komşu' },
  // Tema 3 — Doğal Afetler
  'deprem-cantasi': { emoji: '🎒', etiket: 'Deprem Çantası' },
  duduk: { emoji: '📯', etiket: 'Düdük' },
  'cok-kapan-tutun': { emoji: '🛡️', etiket: 'Çök-Kapan-Tutun' },
  pencere: { emoji: '🪟', etiket: 'Pencere' },
  asansor: { emoji: '🛗', etiket: 'Asansör' },
  sel: { emoji: '🌊', etiket: 'Sel' },
  kibrit: { emoji: '🔥', etiket: 'Kibrit' },
  'kamp-atesi': { emoji: '🔥', etiket: 'Kamp Ateşi' },
  '112': { emoji: '🆘', etiket: '112' },
  cig: { emoji: '🏔️', etiket: 'Çığ' },
  dagci: { emoji: '🥾', etiket: 'Dağcı' },
  heyelan: { emoji: '⛰️', etiket: 'Heyelan' },
  dolap: { emoji: '🗄️', etiket: 'Dolap' },
  priz: { emoji: '🔌', etiket: 'Priz' },
  'toplanma-alani': { emoji: '🚩', etiket: 'Toplanma Alanı' },
  kedi: { emoji: '🐱', etiket: 'Kedi' },
  ev: { emoji: '🏠', etiket: 'Ev' },
  nefes: { emoji: '🧘', etiket: 'Sakin Kal' },
  'ilk-yardim': { emoji: '🩹', etiket: 'İlk Yardım' },
  telefon: { emoji: '📱', etiket: 'Telefon' },
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

function ElYikamaGorsel() {
  const w = 160;
  const h = 120;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Ellipse cx={80} cy={70} rx={50} ry={35} fill={GEO.mavi + '44'} stroke={GEO.metin} />
        <Circle cx={55} cy={55} r={8} fill="#FFF" stroke={GEO.metin} />
        <Circle cx={80} cy={50} r={8} fill="#FFF" stroke={GEO.metin} />
        <Circle cx={105} cy={55} r={8} fill="#FFF" stroke={GEO.metin} />
        <SvgText x={80} y={105} fontSize={10} fill={GEO.metin} textAnchor="middle">
          El yıkama
        </SvgText>
      </Svg>
    </View>
  );
}

function TrafikGorsel() {
  return (
    <View style={styles.karsSatir}>
      <View style={[styles.kart, { backgroundColor: GEO.kirmizi + '55' }]}>
        <GuvenliMetin style={styles.emoji} tamGenislik>
          🔴
        </GuvenliMetin>
        <GuvenliMetin style={styles.etiket} tamGenislik>
          Dur
        </GuvenliMetin>
      </View>
      <View style={[styles.kart, { backgroundColor: GEO.yesil + '55' }]}>
        <GuvenliMetin style={styles.emoji} tamGenislik>
          🟢
        </GuvenliMetin>
        <GuvenliMetin style={styles.etiket} tamGenislik>
          Geç
        </GuvenliMetin>
      </View>
      <NesneKart anahtar="cocuk" etiket="Yaya geçidi" />
    </View>
  );
}

function MeslekCarki() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="itfaiyeci" />
      <NesneKart anahtar="ogretmen" />
      <NesneKart anahtar="firinci" />
      <NesneKart anahtar="muhendis" />
      <NesneKart anahtar="doktor" />
    </View>
  );
}

function TurkiyeBayrakGorsel() {
  const w = 200;
  const h = 130;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={10} y={10} width={90} height={60} rx={4} fill={GEO.mavi + '33'} stroke={GEO.metin} />
        <SvgText x={55} y={45} fontSize={28} textAnchor="middle">
          🗺️
        </SvgText>
        <Rect x={110} y={10} width={80} height={55} rx={2} fill={GEO.kirmizi} stroke={GEO.metin} />
        <Circle cx={155} cy={30} r={10} fill="#FFF" />
        <SvgText x={155} y={50} fontSize={12} fill="#FFF" textAnchor="middle">
          ☪️⭐
        </SvgText>
        <SvgText x={100} y={115} fontSize={11} fill={GEO.metin} textAnchor="middle">
          Türkiye ve Bayrağımız
        </SvgText>
      </Svg>
    </View>
  );
}

function BayrakToreniGorsel() {
  return (
    <View style={styles.karsSatir}>
      <NesneKart anahtar="bayrak" vurgulu />
      <NesneKart anahtar="cocuk" etiket="Hazır ol" />
      <NesneKart anahtar="istiklal-marasi" />
    </View>
  );
}

function AtaturkKosesiGorsel() {
  return (
    <View style={styles.karsSatir}>
      <NesneKart anahtar="mehmet-akif" etiket="Atatürk Köşesi" />
      <NesneKart anahtar="cicek" />
      <NesneKart anahtar="kitap" />
    </View>
  );
}

function BayramSuslemeGorsel() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="bayrak" />
      <NesneKart anahtar="23-nisan" />
      <NesneKart anahtar="29-ekim" />
    </View>
  );
}

function KulturGorsel() {
  return (
    <View style={styles.grup}>
      <NesneKart anahtar="folklor" />
      <NesneKart anahtar="baklava" />
      <NesneKart anahtar="karagoz" />
    </View>
  );
}

function DepremCantasiGorsel() {
  const w = 180;
  const h = 140;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={50} y={30} width={80} height={70} rx={8} fill={GEO.turuncu + '55'} stroke={GEO.metin} strokeWidth={2} />
        <SvgText x={90} y={55} fontSize={20} textAnchor="middle">
          🎒
        </SvgText>
        <SvgText x={30} y={120} fontSize={10} fill={GEO.metin}>
          🔦 💧 📯 🩹
        </SvgText>
        <SvgText x={90} y={135} fontSize={10} fill={GEO.metin} textAnchor="middle">
          Çök — Kapan — Tutun
        </SvgText>
      </Svg>
    </View>
  );
}

function AfetKorumaGorsel() {
  return (
    <View style={styles.karsSatir}>
      <NesneKart anahtar="fidan" />
      <NesneKart anahtar="kamp-atesi" etiket="Ateş söndür" />
    </View>
  );
}

function Numara112Gorsel() {
  const w = 160;
  const h = 100;
  return (
    <View style={styles.ortala}>
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <Rect x={20} y={15} width={120} height={60} rx={8} fill={GEO.kirmizi + '44'} stroke={GEO.metin} strokeWidth={2} />
        <SvgText x={80} y={55} fontSize={32} fontWeight="bold" fill={GEO.kirmizi} textAnchor="middle">
          112
        </SvgText>
        <SvgText x={80} y={90} fontSize={10} fill={GEO.metin} textAnchor="middle">
          Acil Yardım
        </SvgText>
      </Svg>
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
    case 'st-anlatim-1':
      return <ElYikamaGorsel />;
    case 'st-anlatim-2':
      return <GrupGorsel nesneler={['sut', 'sebze', 'meyve']} />;
    case 'st-anlatim-3':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="doktor" />
          <NesneKart anahtar="hemsire" etiket="Hemşire" />
        </View>
      );
    case 'gy-anlatim-1':
      return <TrafikGorsel />;
    case 'gy-anlatim-2':
      return (
        <KuralListesi
          baslik="Evde Güvenlik"
          maddeler={['Bıçakla oynama', 'Şişe içme', 'Prize dokunma', 'Yetişkinden yardım iste']}
        />
      );
    case 'gy-anlatim-3':
      return <NesneKart anahtar="tablet" etiket="Güvenli teknoloji" />;
    case 'mc-anlatim-1':
      return <MeslekCarki />;
    case 'mc-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="muhendis" />
          <NesneKart anahtar="pilot" />
          <NesneKart anahtar="ciftci" />
        </View>
      );
    case 'mc-anlatim-3':
      return <NesneKart anahtar="calisma-plani" etiket="Planlı çalışma" />;
    case 'uv-anlatim-1':
      return <TurkiyeBayrakGorsel />;
    case 'uv-anlatim-2':
      return (
        <View style={styles.karsSatir}>
          <NesneKart anahtar="geri-donusum" />
          <NesneKart anahtar="fidan" />
          <NesneKart anahtar="temizlik" />
        </View>
      );
    case 'uv-anlatim-3':
      return <BayrakToreniGorsel />;
    case 'tk-anlatim-1':
      return <AtaturkKosesiGorsel />;
    case 'tk-anlatim-2':
      return <BayramSuslemeGorsel />;
    case 'tk-anlatim-3':
      return <KulturGorsel />;
    case 'da-anlatim-1':
      return <DepremCantasiGorsel />;
    case 'da-anlatim-2':
      return <AfetKorumaGorsel />;
    case 'da-anlatim-3':
      return <Numara112Gorsel />;
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
