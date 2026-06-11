import { View } from 'react-native';
import { G2mAnlatim1, G2mAnlatim2, G2mAnlatim3, G2mAnlatim4, YanYanaIki } from './G2mAnlatim';
import { NesnelerIcon, type NesneTipi } from './NesnelerIcon';

const TEK_NESNE: Record<string, NesneTipi> = {
  zar: 'zar',
  'zar-mavi': 'zar-mavi',
  konserve: 'konserve',
  'futbol-topu': 'futbol-topu',
  'basketbol-topu': 'basketbol-topu',
  'ayakkabi-kutusu': 'ayakkabi-kutusu',
  cadir: 'cadir',
  'cadir-turuncu': 'cadir-turuncu',
  'kup-seker': 'kup-seker',
  'meyve-suyu-teneke': 'meyve-suyu-teneke',
  dunya: 'dunya',
  'kibrit-kutusu': 'kibrit-kutusu',
  'boya-kutusu': 'boya-kutusu',
  'kale-kulesi': 'kale-kulesi',
  'sut-kutusu': 'sut-kutusu',
  yumurta: 'yumurta',
  'ucgen-catili-ev': 'ucgen-catili-ev',
  misket: 'misket',
  buzdolabi: 'buzdolabi',
  'zeka-kupu': 'zeka-kupu',
  'kagit-rulosu': 'kagit-rulosu',
  portakal: 'portakal',
  'hediye-kup-kutu': 'hediye-kup-kutu',
  pil: 'pil',
  kitap: 'kitap',
  top: 'top',
  karpuz: 'karpuz',
  bina: 'bina',
  'dondurma-topu': 'dondurma-topu',
  'geri-donusum-sut': 'geri-donusum-sut',
  'kalem-kutusu': 'kalem-kutusu',
  'her-yuzu-kare-kutu': 'her-yuzu-kare-kutu',
};

const CIFT_SAHNELER: Record<string, [string, string]> = {
  'konserve-kup-seker': ['konserve', 'kup-seker'],
  'cadir-top': ['cadir', 'top'],
  'portakal-karpuz': ['portakal', 'karpuz'],
  'teneke-pil': ['meyve-suyu-teneke', 'pil'],
};

/** g2m- önekli sahne anahtarları → illüstrasyon */
export function NesneGorsel({ sahne }: { sahne: string }) {
  const key = sahne.startsWith('g2m-') ? sahne.slice(4) : sahne;

  switch (key) {
    case 'anlatim-1':
      return <G2mAnlatim1 />;
    case 'anlatim-2':
      return <G2mAnlatim2 />;
    case 'anlatim-3':
      return <G2mAnlatim3 />;
    case 'anlatim-4':
      return <G2mAnlatim4 />;
    default:
      break;
  }

  const cift = CIFT_SAHNELER[key];
  if (cift) {
    return <YanYanaIki sol="nesne" sag="nesne" solTip={cift[0]} sagTip={cift[1]} />;
  }

  const nesne = TEK_NESNE[key];
  if (nesne) {
    return (
      <View style={{ alignItems: 'center', paddingVertical: 8 }}>
        <NesnelerIcon tip={nesne} size={88} />
      </View>
    );
  }

  return null;
}
