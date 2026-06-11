import { StyleSheet, View } from 'react-native';
import { G5mAnlatim1, G5mAnlatim2, G5mAnlatim3, G5mAnlatim4 } from './G5mAnlatim';
import {
  BesKapSira,
  Dokum,
  DortKapSira,
  Karsilastir,
  Kap,
  SayilabilirKaplar,
  SoruBalonu,
  SurahiBardakToplam,
  TahminGorsel,
  TasmaGorsel,
  UcKapSira,
} from './KapPrimitives';

/** g5m- önekli sahne anahtarı → illüstrasyon (sayılar görselde sayılabilir). */
export function G5mGorsel({ sahne }: { sahne: string }) {
  const key = sahne.startsWith('g5m-') ? sahne.slice(4) : sahne;

  switch (key) {
    case 'anlatim-1':
      return <G5mAnlatim1 />;
    case 'anlatim-2':
      return <G5mAnlatim2 />;
    case 'anlatim-3':
      return <G5mAnlatim3 />;
    case 'anlatim-4':
      return <G5mAnlatim4 />;
    case 'a1':
      return <Karsilastir sol={{ tip: 'bardak', doluluk: 0.4 }} sag={{ tip: 'kova', doluluk: 0.25 }} />;
    case 'a2':
      return <Karsilastir sol={{ tip: 'surahi', doluluk: 0.5 }} sag={{ tip: 'bardak', doluluk: 0.7 }} />;
    case 'a3':
      return <Karsilastir sol={{ tip: 'sise', kucuk: true, doluluk: 0.3 }} sag={{ tip: 'kova', buyuk: true, doluluk: 0.6 }} />;
    case 'a4':
      return (
        <View style={styles.dikey}>
          <Kap kap={{ tip: 'kova', doluluk: 0.2 }} />
          <SayilabilirKaplar tip="bardak" adet={8} doluluk={0.5} />
        </View>
      );
    case 'a5':
      return <Karsilastir sol={{ tip: 'surahi', buyuk: true, doluluk: 0.8 }} sag={{ tip: 'bardak', kucuk: true, doluluk: 0.5 }} />;
    case 'a6':
      return <Dokum kaynak={{ tip: 'kova' }} hedefTip="sise" hedefAdet={4} />;
    case 'a7':
      return (
        <>
          <Kap kap={{ tip: 'surahi', doluluk: 1 }} />
          <SayilabilirKaplar tip="bardak" adet={5} doluluk={1} />
        </>
      );
    case 'a8':
      return <Dokum kaynak={{ tip: 'bidon' }} hedefTip="sise" hedefAdet={6} />;
    case 'a9':
      return (
        <Karsilastir
          sol={{ tip: 'sise', buyuk: true, doluluk: 0.8 }}
          sag={{ tip: 'sise', kucuk: true, doluluk: 0.5 }}
        />
      );
    case 'a10':
      return (
        <>
          <Kap kap={{ tip: 'surahi', doluluk: 1 }} />
          <SayilabilirKaplar tip="bardak" adet={3} doluluk={1} />
        </>
      );
    case 'a11':
      return <Karsilastir sol={{ tip: 'kova', doluluk: 0.5 }} sag={{ tip: 'bardak', doluluk: 0.6 }} />;
    case 'a12':
      return (
        <>
          <Kap kap={{ tip: 'sise', doluluk: 1 }} />
          <SayilabilirKaplar tip="bardak" adet={2} doluluk={1} />
        </>
      );
    case 'a13':
      return (
        <>
          <Karsilastir sol={{ tip: 'kova', doluluk: 0.3 }} sag={{ tip: 'bardak', doluluk: 0.5 }} />
          <SoruBalonu />
        </>
      );
    case 'a14':
      return <TahminGorsel tahmin={5} gercek={8} />;
    case 'a15':
      return <Karsilastir sol={{ tip: 'bidon', buyuk: true, doluluk: 0.2 }} sag={{ tip: 'sise', kucuk: true, doluluk: 0.9 }} />;
    case 'a16':
      return <Dokum kaynak={{ tip: 'kova' }} kaynakAdet={2} hedefTip="sise" hedefAdet={10} hedefGruplar={[5, 5]} />;
    case 'a17':
      return <Karsilastir sol={{ tip: 'surahi', doluluk: 0.5 }} sag={{ tip: 'bidon', doluluk: 0.4 }} />;
    case 'a18':
      return (
        <>
          <SayilabilirKaplar tip="bardak" adet={10} />
          <SayilabilirKaplar tip="surahi" adet={3} />
          <Kap kap={{ tip: 'kova', doluluk: 0.3 }} />
        </>
      );
    case 'a19':
      return <SurahiBardakToplam surahiAdet={2} bardakPerSurahi={4} />;
    case 'a20':
      return <Karsilastir sol={{ tip: 'kova', buyuk: true, doluluk: 0.9 }} sag={{ tip: 'bardak', kucuk: true, doluluk: 0.8 }} />;
    case 'a21':
      return <Dokum kaynak={{ tip: 'surahi' }} hedefTip="bardak" hedefAdet={3} />;
    case 'a22':
      return <Karsilastir sol={{ tip: 'kova', buyuk: true, doluluk: 0.7 }} sag={{ tip: 'bardak', kucuk: true, doluluk: 0.5 }} />;
    case 'a23':
      return <Dokum kaynak={{ tip: 'sise' }} kaynakAdet={3} hedefTip="kova" hedefAdet={1} />;
    case 'a24':
      return <SurahiBardakToplam surahiAdet={3} bardakPerSurahi={3} />;
    case 'a25':
      return <Karsilastir sol={{ tip: 'sise', doluluk: 0.45 }} sag={{ tip: 'bardak', doluluk: 0.5 }} />;
    case 't1':
      return (
        <DortKapSira
          kaplar={[
            { tip: 'bardak', kucuk: true, doluluk: 0.3 },
            { tip: 'kova', buyuk: true, doluluk: 0.7 },
            { tip: 'sise', doluluk: 0.5 },
            { tip: 'surahi', doluluk: 0.4 },
          ]}
        />
      );
    case 't2':
      return (
        <>
          <Kap kap={{ tip: 'surahi', doluluk: 1 }} />
          <SayilabilirKaplar tip="bardak" adet={4} doluluk={1} />
        </>
      );
    case 't3':
      return <Karsilastir sol={{ tip: 'kova', doluluk: 0.25 }} sag={{ tip: 'bardak', doluluk: 0.6 }} />;
    case 't4':
      return <Dokum kaynak={{ tip: 'sise', buyuk: true }} hedefTip="sise" hedefAdet={3} />;
    case 't5':
      return <TahminGorsel tahmin={3} gercek={6} />;
    case 't6':
      return (
        <DortKapSira
          kaplar={[
            { tip: 'bidon', buyuk: true, doluluk: 0.5 },
            { tip: 'kova', doluluk: 0.4 },
            { tip: 'surahi', doluluk: 0.35 },
            { tip: 'bardak', kucuk: true, doluluk: 0.25 },
          ]}
        />
      );
    case 't7':
      return <Dokum kaynak={{ tip: 'kova' }} kaynakAdet={2} hedefTip="sise" hedefAdet={10} hedefGruplar={[5, 5]} />;
    case 't8':
      return <Karsilastir sol={{ tip: 'bardak', kucuk: true, doluluk: 0.9 }} sag={{ tip: 'surahi', buyuk: true, doluluk: 0.3 }} />;
    case 't9':
      return (
        <>
          <Kap kap={{ tip: 'surahi', doluluk: 1 }} />
          <SayilabilirKaplar tip="bardak" adet={4} doluluk={1} />
        </>
      );
    case 't10':
      return <Karsilastir sol={{ tip: 'bardak', kucuk: true, doluluk: 0.3 }} sag={{ tip: 'kova', buyuk: true, doluluk: 0.85 }} />;
    case 't11':
      return <SayilabilirKaplar tip="sise" adet={6} gruplar={[3, 3]} doluluk={1} />;
    case 't12':
      return <Karsilastir sol={{ tip: 'kova', buyuk: true, doluluk: 0.9 }} sag={{ tip: 'kova', kucuk: true, doluluk: 0.4 }} />;
    case 't13':
      return (
        <DortKapSira
          kaplar={[
            { tip: 'bardak', kucuk: true },
            { tip: 'sise' },
            { tip: 'surahi' },
            { tip: 'bidon', buyuk: true },
          ]}
        />
      );
    case 't14':
      return <SurahiBardakToplam surahiAdet={3} bardakPerSurahi={3} />;
    case 't15':
      return <Karsilastir sol={{ tip: 'kova', buyuk: true, doluluk: 0.8 }} sag={{ tip: 'bardak', kucuk: true, doluluk: 0.5 }} />;
    case 't16':
      return <TahminGorsel tahmin={5} gercek={3} fazlaIsareti />;
    case 't17':
      return <SurahiBardakToplam surahiAdet={4} bardakPerSurahi={2} />;
    case 't18':
      return <UcKapSira kaplar={[{ tip: 'bardak', kucuk: true }, { tip: 'surahi' }, { tip: 'kova', buyuk: true }]} />;
    case 't19':
      return (
        <>
          <SayilabilirKaplar tip="bardak" adet={10} gruplar={[5, 5]} />
          <SurahiBardakToplam surahiAdet={2} bardakPerSurahi={5} />
        </>
      );
    case 't20':
      return (
        <>
          <SayilabilirKaplar tip="bardak" adet={6} />
          <SayilabilirKaplar tip="surahi" adet={2} />
          <Kap kap={{ tip: 'kova', doluluk: 0.4 }} />
        </>
      );
    case 't21':
      return (
        <>
          <SurahiBardakToplam surahiAdet={2} bardakPerSurahi={4} />
          <SayilabilirKaplar tip="bardak" adet={8} gruplar={[4, 4]} />
        </>
      );
    case 't22':
      return <Karsilastir sol={{ tip: 'bardak', kucuk: true, doluluk: 1 }} sag={{ tip: 'kova', buyuk: true, doluluk: 0.35 }} />;
    case 't23':
      return (
        <Dokum
          kaynak={{ tip: 'bidon', buyuk: true }}
          kaynakAdet={2}
          hedefTip="sise"
          hedefAdet={16}
          hedefGruplar={[8, 8]}
        />
      );
    case 't24':
      return (
        <>
          <SurahiBardakToplam surahiAdet={3} bardakPerSurahi={4} />
          <SayilabilirKaplar tip="bardak" adet={12} gruplar={[4, 4, 4]} />
        </>
      );
    case 't25':
      return <TasmaGorsel />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  dikey: { alignItems: 'center', gap: 8 },
});
