import { useMemo, type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { OnlukBlokIllustration, parseOnlukBlokId } from '../../assets/illustrations/OnlukBlokIllustration';
import { ElmaGruplari, SayiKart47, SayiKartlari } from '../../assets/illustrations/SayiKartlari';
import { CizimKalemleri, PanoyaAsilanResim, RenkKaristirma } from '../../assets/illustrations/HikayeIllustrations';
import { SayiSeridi } from './SayiSeridi';
import { GeoGorsel } from '../../assets/illustrations/GeometriIllustrations';
import { NesneGorsel } from './nesneler/NesneGorsel';
import { SekilGorsel } from './nesneler/SekilGorsel';
import { G4mGorsel } from './nesneler/G4mGorsel';
import { G5mGorsel } from './kaplar/G5mGorsel';
import { OruntuGorsel } from './oruntu/OruntuGorsel';
import { TahminEtmeGorsel } from './tahmin/TahminEtmeGorsel';
import { IslemGorsel } from './islem/IslemGorsel';
import { OlcmeGorsel } from './olcme/OlcmeGorsel';
import { VeriGorsel } from './veri/VeriGorsel';
import { KesirGorsel } from './kesir/KesirGorsel';
import { TurkceGorsel } from './turkce/TurkceGorsel';
import { FenGorsel } from './fen/FenGorsel';
import { HbGorsel } from './hayat-bilgisi/HbGorsel';
import { IngilizceGorsel } from './ingilizce/IngilizceGorsel';
import { resolveFlowImage, resolveFlowImageForTur } from '../assets/imageCatalog';
import { FlowOrFallback } from './FlowImage';
import { GorselOlcek } from './GorselOlcek';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import type { Gorsel } from '../types/content';

interface Props {
  gorsel?: Gorsel;
  konuId?: string;
}

function svgYedek(svg: ReactNode) {
  return <GorselOlcek tabanYukseklik={220}>{svg}</GorselOlcek>;
}

function useKutuStyles() {
  const layout = useDeviceLayout();
  return useMemo(
    () =>
      StyleSheet.create({
        kutu: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(14),
          padding: layout.flowSize(12),
          paddingBottom: layout.flowSize(20),
          borderWidth: 2,
          borderColor: colors.kenarlik,
          alignItems: 'center',
          overflow: 'visible',
          marginBottom: layout.flowSize(10),
        },
      }).kutu,
    [layout],
  );
}

export function ContentIllustration({ gorsel, konuId }: Props) {
  const kutu = useKutuStyles();

  if (!gorsel) return null;

  if (typeof gorsel === 'object') {
    if (gorsel.tur === 'sayi-seridi') {
      const anahtar = `sayi-seridi-${gorsel.baslangic}-${gorsel.adim}`;
      const source = resolveFlowImage(anahtar, konuId);
      return (
        <View style={kutu}>
          <FlowOrFallback
            source={source}
            fallback={svgYedek(<SayiSeridi {...gorsel} />)}
          />
        </View>
      );
    }

    if (gorsel.tur === 'oruntu') {
      return (
        <View style={kutu}>
          <OruntuGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'tahmin-etme') {
      return (
        <View style={kutu}>
          <TahminEtmeGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'islem') {
      return (
        <View style={kutu}>
          <IslemGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'olcme') {
      return (
        <View style={kutu}>
          <OlcmeGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'veri') {
      return (
        <View style={kutu}>
          <VeriGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'kesir') {
      return (
        <View style={kutu}>
          <KesirGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'turkce') {
      return (
        <View style={kutu}>
          <TurkceGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'fen') {
      return (
        <View style={kutu}>
          <FenGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'hb') {
      return (
        <View style={kutu}>
          <HbGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'ingilizce') {
      return (
        <View style={kutu}>
          <IngilizceGorsel {...gorsel} />
        </View>
      );
    }

    if (gorsel.tur === 'kap') {
      const source = resolveFlowImageForTur('kap', gorsel.sahne, 'sivi-olcme');
      return (
        <View style={kutu}>
          <FlowOrFallback
            source={source}
            fallback={svgYedek(<G5mGorsel sahne={gorsel.sahne} />)}
          />
        </View>
      );
    }

    if (gorsel.tur === 'nesne') {
      const svg = gorsel.sahne.startsWith('g4m-') ? (
        <G4mGorsel sahne={gorsel.sahne} />
      ) : gorsel.sahne.startsWith('g3m-') ? (
        <SekilGorsel sahne={gorsel.sahne} />
      ) : gorsel.sahne.startsWith('g2m-') ? (
        <NesneGorsel sahne={gorsel.sahne} />
      ) : (
        <GeoGorsel sahne={gorsel.sahne} />
      );
      const source = resolveFlowImageForTur('nesne', gorsel.sahne, konuId);
      return (
        <View style={kutu}>
          <FlowOrFallback source={source} fallback={svgYedek(svg)} />
        </View>
      );
    }
  }

  const gorselId = gorsel;
  const blok = parseOnlukBlokId(gorselId);
  const flowSource = resolveFlowImage(gorselId, konuId);

  if (flowSource !== undefined) {
    return (
      <View style={kutu}>
        <FlowOrFallback source={flowSource} fallback={null} />
      </View>
    );
  }

  return (
    <View style={kutu}>
      {svgYedek(
        <>
          {gorselId === 'sayi-kartlari' && <SayiKartlari />}
          {gorselId === 'sayi-kart-47' && <SayiKart47 />}
          {gorselId === 'elma-gruplari' && <ElmaGruplari />}
          {blok && <OnlukBlokIllustration onluk={blok.onluk} birlik={blok.birlik} />}
          {gorselId === 'cizim-kalemleri' && <CizimKalemleri />}
          {gorselId === 'renk-karistirma' && <RenkKaristirma />}
          {gorselId === 'panoya-asilan-resim' && <PanoyaAsilanResim />}
        </>,
      )}
    </View>
  );
}
