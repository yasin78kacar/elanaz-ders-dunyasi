import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { useDeviceLayout } from './useDeviceLayout';

/** Soru ekranları için ortak responsive stiller */
export function useQuestionStyles() {
  const layout = useDeviceLayout();

  return useMemo(
    () =>
      StyleSheet.create({
        container: { gap: layout.spacing(24) },
        soru: {
          fontSize: layout.font.lg,
          lineHeight: layout.spacing(32),
          color: colors.baslik,
          fontWeight: '600',
        },
        okumaMetni: {
          fontSize: layout.font.md,
          lineHeight: layout.spacing(28),
          color: colors.metin,
          backgroundColor: colors.kart,
          padding: layout.spacing(14),
          borderRadius: layout.spacing(12),
          borderWidth: 2,
          borderColor: colors.kenarlik,
        },
        hakMetni: {
          fontSize: layout.font.md,
          color: colors.turuncu,
          fontWeight: '600',
        },
        feedbackDogru: {
          backgroundColor: colors.basariAcik,
          padding: layout.spacing(16),
          borderRadius: layout.spacing(12),
          borderWidth: 2,
          borderColor: colors.basari,
        },
        feedbackYanlis: {
          backgroundColor: colors.hataAcik,
          padding: layout.spacing(16),
          borderRadius: layout.spacing(12),
          borderWidth: 2,
          borderColor: colors.hata,
        },
        feedbackBaslik: {
          fontSize: layout.font.xl,
          fontWeight: '700',
          color: colors.basari,
          marginBottom: layout.spacing(6),
        },
        feedbackBaslikYanlis: {
          fontSize: layout.font.xl,
          fontWeight: '700',
          color: colors.hata,
          marginBottom: layout.spacing(6),
        },
        feedbackMetin: {
          fontSize: layout.font.md,
          lineHeight: layout.spacing(26),
          color: colors.metin,
        },
      }),
    [layout],
  );
}
