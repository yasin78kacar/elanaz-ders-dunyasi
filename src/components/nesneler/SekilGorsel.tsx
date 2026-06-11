import { View } from 'react-native';
import {
  BoyamaAni,
  CemberDaireDonusum,
  G3mAnlatim1,
  G3mAnlatim2,
  G3mAnlatim3,
  G3mAnlatim4,
  KareDikdortgenDonusum,
  PencereDonusum,
} from './G3mAnlatim';
import {
  BalikModeli,
  CicekModeli,
  EvModeli,
  KelebekModeli,
  KusYuvasiModeli,
  RobotModeli,
  TrenIkiVagonModeli,
  TrenModeli,
} from './ModellerSekil';
import { SekilNesneler, type SekilNesneTipi } from './SekilNesneler';
import { SekillerIcon } from './SekillerIcon';
import { GEO } from './colors';

const SEKIL_TEK: Record<string, { tip: 'kare' | 'dikdortgen' | 'ucgen' | 'cember' | 'daire'; renk?: string; buyuk?: boolean }> = {
  kare: { tip: 'kare', renk: GEO.kirmizi, buyuk: true },
  ucgen: { tip: 'ucgen', renk: GEO.yesil, buyuk: true },
  'ucgen-buyuk': { tip: 'ucgen', renk: GEO.yesil, buyuk: true },
  'cember-mavi': { tip: 'cember', renk: GEO.mavi, buyuk: true },
  'cember-mor': { tip: 'cember', renk: GEO.mor, buyuk: true },
  'daire-mor': { tip: 'daire', renk: GEO.mor, buyuk: true },
  'dikdortgen-mavi': { tip: 'dikdortgen', renk: GEO.mavi, buyuk: true },
};

const NESNE_TEK: SekilNesneTipi[] = [
  'simit',
  'kapi',
  'tekerlek',
  'balon',
  'gunes',
  'saat',
  'pizza-dilimi',
  'para',
  'uyari-levha',
  'dondurma-kulahi',
  'pencere-kare',
  'pencere-dikdortgen',
  'kitap-on',
];

type ModelVurgu =
  | { model: 'ev'; vurgu?: 'cati' | 'govde' | 'pencere' }
  | { model: 'tren'; vurgu?: 'tekerlek' | 'vagon' }
  | { model: 'tren-2vagon' }
  | { model: 'robot'; vurgu?: 'goz' | 'kare' }
  | { model: 'balik'; vurgu?: 'govde' | 'kuyruk' }
  | { model: 'kelebek'; vurgu?: 'kanat' }
  | { model: 'cicek'; vurgu?: 'merkez' | 'yaprak' }
  | { model: 'kus-yuvasi'; vurgu?: 'cati' | 'delik' };

const MODEL_SAHNELER: Record<string, ModelVurgu> = {
  ev: { model: 'ev' },
  'ev-cati': { model: 'ev', vurgu: 'cati' },
  'ev-govde': { model: 'ev', vurgu: 'govde' },
  'ev-pencere': { model: 'ev', vurgu: 'pencere' },
  'ev-sayim': { model: 'ev' },
  'ev-2pencere': { model: 'ev', vurgu: 'pencere' },
  tren: { model: 'tren', vurgu: 'vagon' },
  'tren-tekerlek': { model: 'tren', vurgu: 'tekerlek' },
  'tren-2vagon': { model: 'tren-2vagon' },
  robot: { model: 'robot', vurgu: 'kare' },
  'robot-goz': { model: 'robot', vurgu: 'goz' },
  balik: { model: 'balik' },
  'balik-govde': { model: 'balik', vurgu: 'govde' },
  'balik-kuyruk': { model: 'balik', vurgu: 'kuyruk' },
  kelebek: { model: 'kelebek', vurgu: 'kanat' },
  'kelebek-4': { model: 'kelebek', vurgu: 'kanat' },
  cicek: { model: 'cicek', vurgu: 'yaprak' },
  'kus-yuvasi': { model: 'kus-yuvasi', vurgu: 'cati' },
  'kus-yuvasi-delik': { model: 'kus-yuvasi', vurgu: 'delik' },
};

function ModelRender({ cfg }: { cfg: ModelVurgu }) {
  switch (cfg.model) {
    case 'ev':
      return <EvModeli vurgu={cfg.vurgu as 'cati' | 'govde' | 'pencere'} />;
    case 'tren':
      return <TrenModeli vurgu={cfg.vurgu as 'tekerlek' | 'vagon'} />;
    case 'tren-2vagon':
      return <TrenIkiVagonModeli />;
    case 'robot':
      return <RobotModeli vurgu={cfg.vurgu as 'goz' | 'kare'} />;
    case 'balik':
      return <BalikModeli vurgu={cfg.vurgu as 'govde' | 'kuyruk'} />;
    case 'kelebek':
      return <KelebekModeli vurgu={cfg.vurgu as 'kanat'} />;
    case 'cicek':
      return <CicekModeli vurgu={cfg.vurgu as 'merkez' | 'yaprak'} />;
    case 'kus-yuvasi':
      return <KusYuvasiModeli vurgu={cfg.vurgu as 'cati' | 'delik'} />;
    default:
      return null;
  }
}

/** g3m- önekli sahne anahtarları → illüstrasyon */
export function SekilGorsel({ sahne }: { sahne: string }) {
  const key = sahne.startsWith('g3m-') ? sahne.slice(4) : sahne;

  switch (key) {
    case 'anlatim-1':
      return <G3mAnlatim1 />;
    case 'anlatim-2':
      return <G3mAnlatim2 />;
    case 'anlatim-3':
      return <G3mAnlatim3 />;
    case 'anlatim-4':
      return <G3mAnlatim4 />;
    case 'cember-daire-donusum':
      return <CemberDaireDonusum />;
    case 'kare-dikdortgen-donusum':
      return <KareDikdortgenDonusum />;
    case 'pencere-donusum':
      return <PencereDonusum />;
    case 'boyama-ani':
      return <BoyamaAni />;
    case 'kulah-dondurma':
      return (
        <View style={{ alignItems: 'center' }}>
          <SekilNesneler tip="dondurma-kulahi" size={88} />
        </View>
      );
    default:
      break;
  }

  const model = MODEL_SAHNELER[key];
  if (model) {
    return (
      <View style={{ alignItems: 'center', paddingVertical: 4 }}>
        <ModelRender cfg={model} />
      </View>
    );
  }

  const sekil = SEKIL_TEK[key];
  if (sekil) {
    return (
      <View style={{ alignItems: 'center', paddingVertical: 8 }}>
        <SekillerIcon tip={sekil.tip} size={sekil.buyuk ? 96 : 72} renk={sekil.renk} />
      </View>
    );
  }

  if (NESNE_TEK.includes(key as SekilNesneTipi)) {
    return (
      <View style={{ alignItems: 'center', paddingVertical: 8 }}>
        <SekilNesneler tip={key as SekilNesneTipi} size={88} />
      </View>
    );
  }

  return null;
}
