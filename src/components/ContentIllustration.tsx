import type { ReactNode } from 'react';
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
import { resolveFlowImage, resolveFlowImageForTur } from '../assets/imageCatalog';
import { FlowOrFallback } from './FlowImage';
import { GorselOlcek } from './GorselOlcek';
import { colors } from '../theme/colors';
import { gorselOlcekle } from '../theme/gorselBoyut';
import type { Gorsel } from '../types/content';

interface Props {
  gorsel?: Gorsel;
  konuId?: string;
}

function gorselKutusu(children: ReactNode) {
  return <View style={styles.kutu}>{children}</View>;
}

function svgYedek(svg: ReactNode, tabanYukseklik = 200) {
  return <GorselOlcek tabanYukseklik={tabanYukseklik}>{svg}</GorselOlcek>;
}

function flowVeyaSvg(
  anahtar: string,
  konuId: string | undefined,
  svg: ReactNode,
) {
  const source = resolveFlowImage(anahtar, konuId);
  return gorselKutusu(
    <FlowOrFallback source={source} fallback={svgYedek(svg)} />,
  );
}

export function ContentIllustration({ gorsel, konuId }: Props) {
  if (!gorsel) return null;

  if (typeof gorsel === 'object') {
    if (gorsel.tur === 'sayi-seridi') {
      const anahtar = `sayi-seridi-${gorsel.baslangic}-${gorsel.adim}`;
      const source = resolveFlowImage(anahtar, konuId);
      return gorselKutusu(
        <FlowOrFallback
          source={source}
          fallback={svgYedek(<SayiSeridi {...gorsel} />)}
        />,
      );
    }

    if (gorsel.tur === 'kap') {
      const source = resolveFlowImageForTur('kap', gorsel.sahne, 'sivi-olcme');
      return gorselKutusu(
        <FlowOrFallback
          source={source}
          fallback={svgYedek(<G5mGorsel sahne={gorsel.sahne} />)}
        />,
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
      return gorselKutusu(
        <FlowOrFallback source={source} fallback={svgYedek(svg)} />,
      );
    }
  }

  const gorselId = gorsel;
  const blok = parseOnlukBlokId(gorselId);
  const flowSource = resolveFlowImage(gorselId, konuId);

  if (flowSource !== undefined) {
    return gorselKutusu(
      <FlowOrFallback source={flowSource} fallback={null} />,
    );
  }

  return gorselKutusu(
    svgYedek(
      <>
        {gorselId === 'sayi-kartlari' && <SayiKartlari />}
        {gorselId === 'sayi-kart-47' && <SayiKart47 />}
        {gorselId === 'elma-gruplari' && <ElmaGruplari />}
        {blok && <OnlukBlokIllustration onluk={blok.onluk} birlik={blok.birlik} />}
        {gorselId === 'cizim-kalemleri' && <CizimKalemleri />}
        {gorselId === 'renk-karistirma' && <RenkKaristirma />}
        {gorselId === 'panoya-asilan-resim' && <PanoyaAsilanResim />}
      </>,
    ),
  );
}

const styles = StyleSheet.create({
  kutu: {
    backgroundColor: colors.kart,
    borderRadius: 14,
    padding: gorselOlcekle(12),
    paddingBottom: gorselOlcekle(16),
    borderWidth: 2,
    borderColor: colors.kenarlik,
    alignItems: 'center',
    overflow: 'visible',
    marginBottom: 8,
  },
});
