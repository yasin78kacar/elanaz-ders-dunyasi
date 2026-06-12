import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getTumKonuYildizlari, type KonuYildizOzeti } from '../services/progressMap';
import { getTumSoruKayitlari } from '../services/progressStore';
import type { SoruKaydi } from '../types/progress';
import { colors } from '../theme/colors';
import { VideoPlayer } from '../components/VideoPlayer';
import { getVideoSource, SISTEM_VIDEOLARI } from '../assets/videoCatalog';

export function ParentPanelScreen() {
  const [kayitlar, setKayitlar] = useState<SoruKaydi[]>([]);
  const [konuYildizlari, setKonuYildizlari] = useState<KonuYildizOzeti[]>([]);

  useFocusEffect(
    useCallback(() => {
      getTumSoruKayitlari().then(setKayitlar);
      getTumKonuYildizlari().then(setKonuYildizlari);
    }, []),
  );

  const toplam = kayitlar.length;
  const dogru = kayitlar.filter((k) => k.dogruMu).length;
  const yanlis = toplam - dogru;
  const yanlisKayitlar = kayitlar.filter((k) => !k.dogruMu);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VideoPlayer
        source={getVideoSource(SISTEM_VIDEOLARI.annePanel)}
        autoPlay
        loop
        compact
        showControls
      />
      <View style={styles.ozetKart}>
        <Text style={styles.ozetBaslik}>Özet</Text>
        <Text style={styles.ozetSatir}>Çözülen soru: {toplam}</Text>
        <Text style={[styles.ozetSatir, styles.dogru]}>Doğru: {dogru}</Text>
        <Text style={[styles.ozetSatir, styles.yanlis]}>Yanlış: {yanlis}</Text>
      </View>

      <Text style={styles.bolumBaslik}>Konu Yıldızları</Text>
      {konuYildizlari.length === 0 ? (
        <Text style={styles.bosMetin}>Henüz konu ilerlemesi yok.</Text>
      ) : (
        konuYildizlari.map((k) => (
          <View key={`${k.dersBaslik}-${k.konuBaslik}`} style={styles.yildizSatir}>
            <Text style={styles.yildizKonu}>
              {k.dersBaslik} · {k.konuBaslik}
            </Text>
            <Text style={styles.yildizDeger}>
              {k.yildiz > 0 ? '⭐'.repeat(k.yildiz) : '—'}
            </Text>
          </View>
        ))
      )}

      <Text style={styles.bolumBaslik}>Yanlış Yapılan Sorular</Text>
      {yanlisKayitlar.length === 0 ? (
        <Text style={styles.bosMetin}>Henüz yanlış cevap yok veya kayıt bulunamadı.</Text>
      ) : (
        yanlisKayitlar.map((k, i) => (
          <View key={`${k.soruId}-${k.tarih}-${i}`} style={styles.soruKart}>
            <Text style={styles.soruTip}>{k.tip === 'test' ? 'Test' : 'Alıştırma'}</Text>
            <Text style={styles.soruMetin}>{k.soruMetni}</Text>
            <Text style={styles.cevapSatir}>
              Verilen cevap: <Text style={styles.yanlisCevap}>{k.verilenCevap}</Text>
            </Text>
            <Text style={styles.cevapSatir}>
              Doğru cevap: <Text style={styles.dogruCevap}>{k.dogruCevap}</Text>
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 16, paddingBottom: 40 },
  ozetKart: {
    backgroundColor: colors.kart,
    borderRadius: 14,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.kenarlik,
    gap: 8,
  },
  ozetBaslik: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.baslik,
    marginBottom: 4,
  },
  ozetSatir: { fontSize: 17, color: colors.metin },
  dogru: { color: colors.basari, fontWeight: '600' },
  yanlis: { color: colors.hata, fontWeight: '600' },
  bolumBaslik: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.baslik,
    marginTop: 8,
  },
  yildizSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.kart,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.kenarlik,
    gap: 8,
  },
  yildizKonu: {
    flex: 1,
    fontSize: 15,
    color: colors.baslik,
    fontWeight: '600',
  },
  yildizDeger: {
    fontSize: 16,
    minWidth: 56,
    textAlign: 'right',
  },
  bosMetin: { fontSize: 16, color: colors.metin, fontStyle: 'italic' },
  soruKart: {
    backgroundColor: colors.kart,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.kenarlik,
    gap: 6,
  },
  soruTip: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.turuncu,
    textTransform: 'uppercase',
  },
  soruMetin: { fontSize: 16, lineHeight: 24, color: colors.baslik },
  cevapSatir: { fontSize: 15, color: colors.metin },
  yanlisCevap: { color: colors.hata, fontWeight: '600' },
  dogruCevap: { color: colors.basari, fontWeight: '600' },
});
