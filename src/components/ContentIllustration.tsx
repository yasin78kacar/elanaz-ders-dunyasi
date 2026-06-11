import { StyleSheet, View } from 'react-native';
import { OnlukBlokIllustration, parseOnlukBlokId } from '../../assets/illustrations/OnlukBlokIllustration';
import { ElmaGruplari, SayiKart47, SayiKartlari } from '../../assets/illustrations/SayiKartlari';
import { CizimKalemleri, PanoyaAsilanResim, RenkKaristirma } from '../../assets/illustrations/HikayeIllustrations';
import { SayiSeridi } from './SayiSeridi';
import { GeoGorsel } from '../../assets/illustrations/GeometriIllustrations';
import { NesneGorsel } from './nesneler/NesneGorsel';
import { SekilGorsel } from './nesneler/SekilGorsel';
import { colors } from '../theme/colors';
import type { Gorsel } from '../types/content';

interface Props {
  gorsel?: Gorsel;
}

export function ContentIllustration({ gorsel }: Props) {
  if (!gorsel) return null;

  if (typeof gorsel === 'object') {
    return (
      <View style={styles.kutu}>
        {gorsel.tur === 'sayi-seridi' && <SayiSeridi {...gorsel} />}
        {gorsel.tur === 'nesne' &&
          (gorsel.sahne.startsWith('g3m-') ? (
            <SekilGorsel sahne={gorsel.sahne} />
          ) : gorsel.sahne.startsWith('g2m-') ? (
            <NesneGorsel sahne={gorsel.sahne} />
          ) : (
            <GeoGorsel sahne={gorsel.sahne} />
          ))}
      </View>
    );
  }

  const gorselId = gorsel;
  const blok = parseOnlukBlokId(gorselId);

  return (
    <View style={styles.kutu}>
      {gorselId === 'sayi-kartlari' && <SayiKartlari />}
      {gorselId === 'sayi-kart-47' && <SayiKart47 />}
      {gorselId === 'elma-gruplari' && <ElmaGruplari />}
      {blok && <OnlukBlokIllustration onluk={blok.onluk} birlik={blok.birlik} />}
      {gorselId === 'cizim-kalemleri' && <CizimKalemleri />}
      {gorselId === 'renk-karistirma' && <RenkKaristirma />}
      {gorselId === 'panoya-asilan-resim' && <PanoyaAsilanResim />}
    </View>
  );
}

const styles = StyleSheet.create({
  kutu: {
    backgroundColor: colors.kart,
    borderRadius: 14,
    padding: 12,
    borderWidth: 2,
    borderColor: colors.kenarlik,
    alignItems: 'center',
  },
});
