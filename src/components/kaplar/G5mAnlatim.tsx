import { StyleSheet, Text, View } from 'react-native';
import { IllustrationColumn } from '../nesneler/IllustrationColumn';
import { GEO } from '../nesneler/colors';
import { BesKapSira, Dokum, Kap, OkYatay, SayilabilirKaplar, SoruBalonu } from './KapPrimitives';

export function G5mAnlatim1() {
  return <BesKapSira />;
}

export function G5mAnlatim2() {
  return (
    <View style={styles.kutu}>
      <Kap kap={{ tip: 'kova', buyuk: true, doluluk: 0.8 }} />
      <OkYatay />
      <SayilabilirKaplar tip="surahi" adet={3} doluluk={1} />
      <Text style={styles.not}>1 kova = 3 sürahi</Text>
    </View>
  );
}

export function G5mAnlatim3() {
  return (
    <View style={styles.kutu}>
      <Kap kap={{ tip: 'sise', doluluk: 0.4 }} />
      <Kap kap={{ tip: 'bardak', doluluk: 0.5 }} />
      <SoruBalonu />
    </View>
  );
}

export function G5mAnlatim4() {
  return (
    <View style={styles.kutu}>
      <Dokum kaynak={{ tip: 'bidon' }} kaynakAdet={2} hedefTip="sise" hedefAdet={6} />
      <View style={styles.tahminSatir}>
        <IllustrationColumn label="8 ✗ fazla tahmin" width={100}>
          <SayilabilirKaplar tip="sise" adet={8} doluluk={0.3} />
        </IllustrationColumn>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kutu: { alignItems: 'center', gap: 10, paddingVertical: 4 },
  not: { fontSize: 12, fontWeight: '700', color: GEO.turuncu },
  tahminSatir: { marginTop: 8 },
});
