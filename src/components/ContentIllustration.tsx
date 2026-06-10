import { StyleSheet, View } from 'react-native';
import { OnlukBlokIllustration, parseOnlukBlokId } from '../../assets/illustrations/OnlukBlokIllustration';
import { ElmaGruplari, SayiKart47, SayiKartlari } from '../../assets/illustrations/SayiKartlari';
import { CizimKalemleri, PanoyaAsilanResim, RenkKaristirma } from '../../assets/illustrations/HikayeIllustrations';
import { colors } from '../theme/colors';

interface Props {
  gorsel?: string | null;
}

export function ContentIllustration({ gorsel }: Props) {
  if (!gorsel) return null;

  const blok = parseOnlukBlokId(gorsel);

  return (
    <View style={styles.kutu}>
      {gorsel === 'sayi-kartlari' && <SayiKartlari />}
      {gorsel === 'sayi-kart-47' && <SayiKart47 />}
      {gorsel === 'elma-gruplari' && <ElmaGruplari />}
      {blok && <OnlukBlokIllustration onluk={blok.onluk} birlik={blok.birlik} />}
      {gorsel === 'cizim-kalemleri' && <CizimKalemleri />}
      {gorsel === 'renk-karistirma' && <RenkKaristirma />}
      {gorsel === 'panoya-asilan-resim' && <PanoyaAsilanResim />}
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
