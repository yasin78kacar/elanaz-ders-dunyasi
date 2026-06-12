import { useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import { VideoPlayer } from './VideoPlayer';
import { PrimaryButton } from './PrimaryButton';

interface Props {
  source: number;
  label?: string;
}

/** Konu anlatımında tam ekran video oynatıcı */
export function VideoIzleButton({ source, label = '▶ Video İzle' }: Props) {
  const [acik, setAcik] = useState(false);
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        buton: {
          alignSelf: 'flex-start',
          backgroundColor: colors.birincilAcik,
          borderWidth: 2,
          borderColor: colors.birincil,
          borderRadius: layout.spacing(12),
          paddingVertical: layout.spacing(10),
          paddingHorizontal: layout.spacing(16),
        },
        butonMetin: {
          fontSize: layout.font.md,
          fontWeight: '700',
          color: colors.birincil,
        },
        modal: {
          flex: 1,
          backgroundColor: colors.arkaPlan,
          padding: layout.spacing(20),
          gap: layout.spacing(16),
        },
        baslik: {
          fontSize: layout.font.lg,
          fontWeight: '700',
          color: colors.baslik,
          textAlign: 'center',
        },
      }),
    [layout],
  );

  return (
    <>
      <Pressable
        style={({ pressed }) => [styles.buton, pressed && { opacity: 0.85 }]}
        onPress={() => setAcik(true)}
        accessibilityRole="button"
        accessibilityLabel={label}
      >
        <Text style={styles.butonMetin}>{label}</Text>
      </Pressable>
      <Modal visible={acik} animationType="slide" onRequestClose={() => setAcik(false)}>
        <SafeAreaView style={styles.modal}>
          <Text style={styles.baslik}>Elanaz anlatıyor</Text>
          <VideoPlayer source={source} autoPlay showControls />
          <PrimaryButton label="Kapat" onPress={() => setAcik(false)} />
        </SafeAreaView>
      </Modal>
    </>
  );
}
