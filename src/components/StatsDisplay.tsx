import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ProgressService, type GenelIstatistikler } from '../services/ProgressService';
import { useGamification } from '../contexts/GamificationContext';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { POINTS_PER_LEVEL } from '../types/gamification';
import { sureMetni } from '../utils/sureMetni';

interface Props {
  compact?: boolean;
}

export function StatsDisplay({ compact = false }: Props) {
  const [istatistik, setIstatistik] = useState<GenelIstatistikler | null>(null);
  const { points, level, levelBaslik } = useGamification();
  const { colors } = useTheme();
  const layout = useDeviceLayout();

  const sonrakiSeviyePuan = level * POINTS_PER_LEVEL;
  const seviyeIlerleme =
    POINTS_PER_LEVEL > 0
      ? Math.min(100, Math.round(((points % POINTS_PER_LEVEL) / POINTS_PER_LEVEL) * 100))
      : 0;

  useFocusEffect(
    useCallback(() => {
      ProgressService.getGenelIstatistikler().then(setIstatistik);
    }, []),
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        kutu: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(14),
          padding: layout.spacing(compact ? 14 : 18),
          borderWidth: 2,
          borderColor: colors.kenarlik,
          gap: layout.spacing(10),
        },
        baslik: {
          fontSize: layout.font.lg,
          fontWeight: '700',
          color: colors.baslik,
        },
        satirlar: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: layout.spacing(8),
        },
        hucre: {
          flexGrow: 1,
          flexBasis: layout.isTablet ? '22%' : '46%',
          minWidth: layout.isTablet ? layout.spacing(120) : layout.spacing(140),
          backgroundColor: colors.birincilAcik,
          borderRadius: layout.spacing(10),
          padding: layout.spacing(12),
          borderWidth: 1,
          borderColor: colors.birincil,
        },
        hucreDeger: {
          fontSize: layout.font.xl,
          fontWeight: '800',
          color: colors.baslik,
        },
        hucreEtiket: {
          fontSize: layout.font.sm,
          color: colors.metin,
          marginTop: layout.spacing(4),
        },
        seviyeSatir: {
          fontSize: layout.font.md,
          color: colors.metin,
        },
        ilerlemeCubuk: {
          height: layout.spacing(8),
          backgroundColor: colors.kenarlik,
          borderRadius: layout.spacing(4),
          overflow: 'hidden',
        },
        ilerlemeDolgu: {
          height: '100%',
          backgroundColor: colors.birincil,
          borderRadius: layout.spacing(4),
        },
        temaBolum: { gap: layout.spacing(6), marginTop: layout.spacing(4) },
        temaBaslik: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.baslik,
        },
        temaSatir: {
          fontSize: layout.font.sm,
          color: colors.metin,
        },
        sureSatir: {
          fontSize: layout.font.sm,
          color: colors.metin,
          paddingLeft: layout.spacing(4),
        },
      }),
    [layout, colors, compact],
  );

  if (!istatistik) return null;

  const hucreler = [
    { deger: `%${istatistik.dogrulukYuzde}`, etiket: 'Doğruluk' },
    { deger: String(istatistik.dogruSoru), etiket: 'Doğru Cevap' },
    { deger: String(istatistik.cozulenSoru), etiket: 'Çözülen Soru' },
    { deger: sureMetni(istatistik.toplamSureSaniye), etiket: 'Toplam Süre' },
  ];

  return (
    <View style={styles.kutu}>
      <Text style={styles.baslik}>İstatistikler</Text>
      <Text style={styles.seviyeSatir}>
        Seviye {level} · {levelBaslik} · {points} puan
      </Text>
      <View style={styles.ilerlemeCubuk}>
        <View style={[styles.ilerlemeDolgu, { width: `${seviyeIlerleme}%` }]} />
      </View>
      <Text style={styles.seviyeSatir}>
        Sonraki seviye: {sonrakiSeviyePuan} puan ({seviyeIlerleme}%)
      </Text>
      <View style={styles.satirlar}>
        {hucreler.map((h) => (
          <View key={h.etiket} style={styles.hucre}>
            <Text style={styles.hucreDeger}>{h.deger}</Text>
            <Text style={styles.hucreEtiket}>{h.etiket}</Text>
          </View>
        ))}
      </View>
      {!compact && istatistik.dersDetaylari.length > 0 ? (
        <View style={styles.temaBolum}>
          <Text style={styles.temaBaslik}>Ders / Tema Dağılımı</Text>
          {istatistik.dersDetaylari.map((ders) => (
            <View key={ders.dersId}>
              <Text style={styles.temaSatir}>
                {ders.dersBaslik}: {ders.dogruSoru}/{ders.cozulenSoru} doğru ·{' '}
                {ders.tamamlananKonu}/{ders.toplamKonu} konu
              </Text>
              {ders.temalar
                .filter((t) => t.cozulenSoru > 0 || t.tamamlananKonu > 0)
                .map((tema) => (
                  <Text key={tema.temaId} style={styles.sureSatir}>
                    · {tema.temaBaslik}: {tema.dogruSoru}/{tema.cozulenSoru} doğru
                  </Text>
                ))}
            </View>
          ))}
        </View>
      ) : null}
      {!compact && istatistik.konuSureleri.length > 0 ? (
        <View style={styles.temaBolum}>
          <Text style={styles.temaBaslik}>Ders Süreleri</Text>
          {istatistik.konuSureleri.slice(0, 5).map((k) => (
            <Text key={`${k.dersId}:${k.konuId}`} style={styles.sureSatir}>
              · {k.konuBaslik}: {sureMetni(k.sureSaniye)}
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}
