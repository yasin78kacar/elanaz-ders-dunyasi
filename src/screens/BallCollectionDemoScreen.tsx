import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BallCollectionAnimation } from '../components/BallCollectionAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'BallCollectionDemo'>;

export function BallCollectionDemoScreen(_props: Props) {
  const layout = useDeviceLayout();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { flex: 1 },
    scroll: {
      padding: layout.spacing(20),
      gap: layout.spacing(16),
      alignItems: 'center',
      paddingBottom: layout.spacing(40),
    },
    baslik: {
      fontSize: layout.font.xl,
      fontWeight: '800',
      color: colors.baslik,
      textAlign: 'center',
    },
    aciklama: {
      fontSize: layout.font.md,
      color: colors.metin,
      textAlign: 'center',
      lineHeight: layout.spacing(24),
      maxWidth: 520,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.baslik}>Top Toplama Animasyonu</Text>
        <Text style={styles.aciklama}>
          4 mavi ve 3 yeşil top ile toplama işlemini gösteren 10 saniyelik animasyon. Web’de Kaydet ile
          MP4 olarak dışa aktarabilirsiniz.
        </Text>
        <BallCollectionAnimation />
      </ScrollView>
    </View>
  );
}
