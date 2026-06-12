import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getDersListesi, okumaKosesiMi } from '../services/contentLoader';
import { getDersIlerlemeOzeti, getHikayeIlerlemeOzeti } from '../services/progressMap';
import { ElanazHeader } from '../components/ElanazHeader';
import { useDeviceLayout } from '../hooks/useDeviceLayout';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface DersKart {
  id: string;
  baslik: string;
  ozet: string;
}

export function HomeScreen({ navigation }: Props) {
  const [kartlar, setKartlar] = useState<DersKart[]>([]);
  const layout = useDeviceLayout();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1 },
        scroll: {
          padding: layout.spacing(20),
          gap: layout.spacing(14),
          paddingBottom: layout.spacing(80),
        },
        hosgeldin: {
          fontSize: layout.font.lg,
          lineHeight: layout.spacing(30),
          color: colors.metin,
          marginBottom: layout.spacing(8),
        },
        kart: {
          backgroundColor: colors.kart,
          borderRadius: layout.spacing(16),
          padding: layout.spacing(20),
          borderWidth: 2,
          borderColor: colors.kenarlik,
        },
        kartPressed: { opacity: 0.9, borderColor: colors.birincil },
        kartBaslik: {
          fontSize: layout.font.xl,
          fontWeight: '700',
          color: colors.baslik,
        },
        kartOzet: {
          fontSize: layout.font.md,
          color: colors.turuncu,
          fontWeight: '600',
          marginTop: layout.spacing(6),
        },
        anneButon: {
          position: 'absolute',
          bottom: layout.spacing(24),
          right: layout.spacing(20),
          backgroundColor: colors.metin,
          paddingVertical: layout.spacing(12),
          paddingHorizontal: layout.spacing(20),
          borderRadius: layout.spacing(24),
          minHeight: layout.buttonHeight,
          justifyContent: 'center',
        },
        anneMetin: {
          color: '#FFFFFF',
          fontSize: layout.font.md,
          fontWeight: '600',
        },
      }),
    [layout],
  );

  useFocusEffect(
    useCallback(() => {
      const yukle = async () => {
        const dersler = getDersListesi();
        const sonuc: DersKart[] = [];
        for (const ders of dersler) {
          if (okumaKosesiMi(ders.id)) {
            const o = await getHikayeIlerlemeOzeti(ders.id);
            sonuc.push({
              ...ders,
              ozet: o.toplam > 0 ? `${o.tamamlanan}/${o.toplam} hikâye · ${o.yildizToplam}⭐` : '',
            });
          } else {
            const o = await getDersIlerlemeOzeti(ders.id);
            sonuc.push({
              ...ders,
              ozet: o.toplam > 0 ? `${o.tamamlanan}/${o.toplam} konu · ${o.yildizToplam}⭐` : '',
            });
          }
        }
        setKartlar(sonuc);
      };
      yukle();
    }, []),
  );

  const derseGit = (ders: DersKart) => {
    if (okumaKosesiMi(ders.id)) {
      navigation.navigate('StoryList', { dersId: ders.id, dersBaslik: ders.baslik });
    } else {
      navigation.navigate('TopicList', { dersId: ders.id, dersBaslik: ders.baslik });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <ElanazHeader>
          <Text style={styles.hosgeldin}>Merhaba! Hangi derse çalışmak istersin?</Text>
        </ElanazHeader>
        {kartlar.map((ders) => (
          <Pressable
            key={ders.id}
            style={({ pressed }) => [styles.kart, pressed && styles.kartPressed]}
            onPress={() => derseGit(ders)}
          >
            <Text style={styles.kartBaslik}>{ders.baslik}</Text>
            {ders.ozet ? <Text style={styles.kartOzet}>{ders.ozet}</Text> : null}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable style={styles.anneButon} onPress={() => navigation.navigate('ParentPin')}>
        <Text style={styles.anneMetin}>Anne</Text>
      </Pressable>
    </View>
  );
}
