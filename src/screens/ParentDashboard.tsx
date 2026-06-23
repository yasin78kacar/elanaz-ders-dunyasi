import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ProgressService, type DersIlerlemeDetay, type Oneri } from '../services/ProgressService';
import { OfflineManager, type OfflineDurum } from '../services/OfflineManager';
import { useGamification } from '../contexts/GamificationContext';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { VideoPlayer } from '../components/VideoPlayer';
import { ThemeToggle } from '../components/ThemeToggle';
import { getVideoSource, SISTEM_VIDEOLARI } from '../assets/videoCatalog';
import { BADGES } from '../types/gamification';

export function ParentDashboard() {
  const [detaylar, setDetaylar] = useState<DersIlerlemeDetay[]>([]);
  const [oneriler, setOneriler] = useState<Oneri[]>([]);
  const [offline, setOffline] = useState<OfflineDurum | null>(null);
  const { points, level, levelBaslik, kazanilanRozetler } = useGamification();
  const { colors } = useTheme();
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: layout.spacing(20),
          gap: layout.spacing(16),
          paddingBottom: layout.spacing(40),
        },
        ozetKart: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(14),
          padding: layout.spacing(20),
          borderWidth: 2,
          borderColor: colors.kenarlik,
          gap: layout.spacing(8),
        },
        ozetBaslik: {
          fontSize: layout.font.xl,
          fontWeight: '700',
          color: colors.baslik,
        },
        ozetSatir: { fontSize: layout.font.md, color: colors.metin },
        dogru: { color: colors.basari, fontWeight: '600' },
        bolumBaslik: {
          fontSize: layout.font.lg,
          fontWeight: '700',
          color: colors.baslik,
          marginTop: layout.spacing(8),
        },
        dersKart: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(12),
          padding: layout.spacing(16),
          borderWidth: 1,
          borderColor: colors.kenarlik,
          gap: layout.spacing(6),
        },
        dersBaslik: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.baslik,
        },
        temaSatir: {
          fontSize: layout.font.sm,
          color: colors.metin,
          paddingLeft: layout.spacing(8),
        },
        oneriKart: {
          backgroundColor: colors.birincilAcik,
          borderRadius: layout.spacing(12),
          padding: layout.spacing(16),
          borderWidth: 2,
          borderColor: colors.birincil,
          gap: layout.spacing(4),
        },
        oneriBaslik: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.baslik,
        },
        oneriAciklama: {
          fontSize: layout.font.sm,
          color: colors.metin,
          lineHeight: layout.spacing(22),
        },
        rozetSatir: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: layout.spacing(8),
        },
        rozetKart: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(10),
          padding: layout.spacing(10),
          borderWidth: 1,
          borderColor: colors.kenarlik,
          alignItems: 'center',
          minWidth: layout.spacing(80),
        },
        rozetEmoji: { fontSize: layout.spacing(24) },
        rozetAd: {
          fontSize: layout.font.sm,
          color: colors.metin,
          marginTop: layout.spacing(4),
          textAlign: 'center',
        },
        offlineButon: {
          backgroundColor: colors.turuncu,
          borderRadius: layout.spacing(12),
          padding: layout.spacing(14),
          alignItems: 'center',
        },
        offlineMetin: {
          color: '#FFFFFF',
          fontSize: layout.font.md,
          fontWeight: '600',
        },
        bosMetin: { fontSize: layout.font.md, color: colors.metin, fontStyle: 'italic' },
      }),
    [layout, colors],
  );

  useFocusEffect(
    useCallback(() => {
      ProgressService.getDersDetaylari().then(setDetaylar);
      ProgressService.getOneriler().then(setOneriler);
      OfflineManager.getDurum().then(setOffline);
    }, []),
  );

  const toplamSoru = detaylar.reduce((s, d) => s + d.cozulenSoru, 0);
  const toplamDogru = detaylar.reduce((s, d) => s + d.dogruSoru, 0);

  const indirTumu = async () => {
    await OfflineManager.indirTumu();
    const durum = await OfflineManager.getDurum();
    setOffline(durum);
  };

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
        <Text style={styles.ozetBaslik}>Anne Paneli — İlerleme</Text>
        <Text style={styles.ozetSatir}>
          Seviye {level} ({levelBaslik}) · {points} puan
        </Text>
        <Text style={styles.ozetSatir}>Çözülen soru: {toplamSoru}</Text>
        <Text style={[styles.ozetSatir, styles.dogru]}>Doğru: {toplamDogru}</Text>
        {offline ? (
          <Text style={styles.ozetSatir}>
            Çevrimdışı: {offline.indirilen}/{offline.toplam} ders
          </Text>
        ) : null}
      </View>

      <Text style={styles.bolumBaslik}>Tema</Text>
      <ThemeToggle />

      <Text style={styles.bolumBaslik}>Öneriler</Text>
      {oneriler.length === 0 ? (
        <Text style={styles.bosMetin}>Henüz öneri yok.</Text>
      ) : (
        oneriler.map((o, i) => (
          <View key={i} style={styles.oneriKart}>
            <Text style={styles.oneriBaslik}>{o.baslik}</Text>
            <Text style={styles.oneriAciklama}>{o.aciklama}</Text>
          </View>
        ))
      )}

      <Text style={styles.bolumBaslik}>Ders İlerlemesi</Text>
      {detaylar.length === 0 ? (
        <Text style={styles.bosMetin}>Henüz ilerleme kaydı yok.</Text>
      ) : (
        detaylar.map((ders) => (
          <View key={ders.dersId} style={styles.dersKart}>
            <Text style={styles.dersBaslik}>
              {ders.dersBaslik} — {ders.tamamlananKonu}/{ders.toplamKonu} konu
            </Text>
            <Text style={styles.ozetSatir}>
              {ders.dogruSoru}/{ders.cozulenSoru} doğru
            </Text>
            {ders.temalar.map((tema) => (
              <Text key={tema.temaId} style={styles.temaSatir}>
                · {tema.temaBaslik}: {tema.tamamlananKonu}/{tema.toplamKonu} konu,{' '}
                {tema.dogruSoru}/{tema.cozulenSoru} doğru
              </Text>
            ))}
          </View>
        ))
      )}

      <Text style={styles.bolumBaslik}>Rozetler</Text>
      <View style={styles.rozetSatir}>
        {BADGES.map((b) => {
          const kazanildi = kazanilanRozetler.includes(b.id);
          return (
            <View
              key={b.id}
              style={[styles.rozetKart, !kazanildi && { opacity: 0.35 }]}
            >
              <Text style={styles.rozetEmoji}>{b.emoji}</Text>
              <Text style={styles.rozetAd}>{b.baslik}</Text>
            </View>
          );
        })}
      </View>

      {offline && !offline.tumuIndirildi ? (
        <Pressable style={styles.offlineButon} onPress={indirTumu}>
          <Text style={styles.offlineMetin}>Tüm İçeriği İndir (Çevrimdışı)</Text>
        </Pressable>
      ) : null}
    </ScrollView>
  );
}
