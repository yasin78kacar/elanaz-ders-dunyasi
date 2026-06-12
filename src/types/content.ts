export type SoruTipi = 'yazili' | 'coktanSecmeli' | 'eslestirme' | 'tablo-boyama';
export type CevapTipi = 'sayi' | 'metin';

export interface GorselSayiSeridi {
  tur: 'sayi-seridi';
  baslangic: number;
  adim: number;
  adimSayisi: number;
  vurgulananlar?: number[];
}

/** Tek/çoklu nesne illüstrasyonu (geometri vb.) — sahne anahtarı GeoGorsel'de tanımlı */
export interface GorselNesne {
  tur: 'nesne';
  sahne: string;
}

export type SecenekIkon =
  | { tip: 'nesne'; anahtar: string }
  | { tip: 'model'; anahtar: string }
  | { tip: 'sekil'; anahtar: string }
  | { tip: 'sekil-nesne'; anahtar: string }
  | { tip: 'kap'; anahtar: string }
  | { tip: 'cift'; sol: string; sag: string }
  | { tip: 'eslestirme'; nesne: string; model: string }
  | { tip: 'eslestirme-sekil'; nesne: string; sekil: string };

/** Sıvı ölçme kap illüstrasyonu — sahne anahtarı G5mGorsel'de tanımlı */
export interface GorselKap {
  tur: 'kap';
  sahne: string;
}

export interface OruntuEleman {
  tip: 'sayi' | 'renk' | 'sekil' | 'soru';
  deger?: number | string;
}

/** Örüntü dizisi — sayı, renk veya şekil tekrarları */
export interface GorselOruntu {
  tur: 'oruntu';
  elemanlar: OruntuEleman[];
  adimEtiketi?: string;
  vurguIndeks?: number;
}

/** Tahmin etme sahnesi — TahminEtmeGorsel'de tanımlı */
export interface GorselTahminEtme {
  tur: 'tahmin-etme';
  sahne: string;
  tahmin?: number;
  gercek?: number;
}

export type IslemMod =
  | 'toplama-grup'
  | 'cikarma-grup'
  | 'bilinmeyen'
  | 'karsilastirma'
  | 'adimlar'
  | 'onluk-toplama'
  | 'zihin'
  | 'zihin-cik'
  | 'problem'
  | 'anlatim'
  | 'esitlik';

/** Toplama/çıkarma/problemler — IslemGorsel'de tanımlı */
export interface GorselIslem {
  tur: 'islem';
  mod: IslemMod;
  a?: number;
  b?: number;
  sonuc?: number;
  nesne?: string;
  renk1?: string;
  renk2?: string;
  bilinmeyen?: 'a' | 'b' | 'sonuc';
  islemler?: string[];
  adimlar?: { etiket?: string; deger: number }[];
  sahne?: string;
}

export type OlcmeMod = 'uzunluk' | 'tartma' | 'sivi' | 'zaman' | 'anlatim' | 'araclar';

/** Ölçme (Tema 4) — OlcmeGorsel'de tanımlı */
export interface GorselOlcme {
  tur: 'olcme';
  mod: OlcmeMod;
  sahne?: string;
  baslangic?: number;
  bitis?: number;
  uzunluklar?: number[];
  etiketler?: string[];
  nesne?: string;
  sol?: number | string;
  sag?: number | string;
  solBirim?: string;
  sagBirim?: string;
  durum?: 'dengede' | 'sol' | 'sag';
  miktar?: number | string;
  birim?: string;
  kapTip?: string;
  doluluk?: number;
  miktarlar?: { miktar: number | string; birim: string }[];
  saat?: number;
  dakika?: number;
  saat2?: number;
  dakika2?: number;
}

export interface VeriSatir {
  etiket: string;
  degerler: (number | string)[];
}

/** Veri (Tema 5) — VeriGorsel'de tanımlı */
export interface GorselVeri {
  tur: 'veri';
  mod: 'tablo' | 'grafik' | 'anlatim' | 'anket' | 'liste';
  tabloId?: string;
  grafikId?: string;
  baslik?: string;
  sutunlar?: string[];
  satirlar?: VeriSatir[];
  kategoriler?: string[];
  degerler?: number[];
  vurgu?: (number | string)[];
  sahne?: string;
  liste?: (number | string)[];
}

/** Kesirler (Tema 6) — KesirGorsel'de tanımlı */
export interface GorselKesir {
  tur: 'kesir';
  mod: 'bolme' | 'kesir' | 'yarim' | 'karsilastir' | 'birlesim' | 'paylasim' | 'anlatim';
  sahne?: string;
  sekil?: 'daire' | 'dikdortgen' | 'kare';
  parca?: number;
  nesne?: string;
  yenilen?: number;
  renkli?: number;
  vurgu?: number | string | (number | string)[];
  esit?: boolean;
  etiket?: string;
  bolme?: 'ucgen' | 'grid' | 'yatay' | 'dikey';
  kesirler?: (string | Record<string, unknown>)[];
  adet?: number;
  kisi?: number;
  alinan?: number;
}

/** Türkçe — TurkceGorsel'de tanımlı */
export interface GorselTurkce {
  tur: 'turkce';
  mod?: 'hece' | 'harf' | 'nesne' | 'sahne' | 'kart' | 'cumle' | 'anlatim' | 'karsilastir' | 'noktalama';
  sahne?: string;
  kelime?: string;
  heceler?: string[];
  harfler?: string[];
  vurgu?: 'sesli' | 'sessiz' | (number | string)[];
  nesne?: string;
  metin?: string;
  ozne?: string;
  yuklem?: string;
  cumleTuru?: string;
  kelimeler?: string[];
  isaret?: string;
  iliski?: 'esAnlam' | 'zit' | 'esSeslilik';
}

export type Gorsel =
  | string
  | GorselSayiSeridi
  | GorselNesne
  | GorselKap
  | GorselOruntu
  | GorselTahminEtme
  | GorselIslem
  | GorselOlcme
  | GorselVeri
  | GorselKesir
  | GorselTurkce
  | null;

export interface AnlatimEkrani {
  metin: string;
  gorsel?: Gorsel;
}

export interface EslestirmeCift {
  sol: string;
  sag: string;
  /** Küçük nesne ikonu (top, kitap, portakal, hediye-kutusu vb.) */
  ikon?: string;
}

export interface Soru {
  id: string;
  kazanimKodu: string;
  tip: SoruTipi;
  soru?: string;
  yonerge?: string;
  dogruCevap?: string;
  ipucu: string;
  secenekler?: string[];
  secenekIkonlari?: Record<string, SecenekIkon>;
  cevapTipi?: CevapTipi;
  gorsel?: Gorsel;
  sasirtma?: boolean;
  ciftler?: EslestirmeCift[];
  tabloBaslangic?: number;
  tabloBitis?: number;
  dogruHucreler?: number[];
  alternatifCevaplar?: string[];
  /** Okuma anlama metni (soru üstünde gösterilir) */
  okumaMetni?: string;
}

export interface Konu {
  id: string;
  baslik: string;
  kazanimKodu: string;
  anlatim: { ekranlar: AnlatimEkrani[] };
  alistirma: Soru[];
  test: Soru[];
}

export interface HikayeSayfa {
  metin: string;
  gorsel?: Gorsel;
}

export interface Hikaye {
  id: string;
  baslik: string;
  sayfalar: HikayeSayfa[];
  sorular: Soru[];
}

export interface Unite {
  id: string;
  baslik: string;
  konular: Konu[];
}

export interface Ders {
  id: string;
  baslik: string;
  unite: Unite[];
  hikayeler?: Hikaye[];
}

export interface SinifIcerik {
  sinif: number;
  dersler: Ders[];
}

export interface DersOzet {
  id: string;
  baslik: string;
}

export interface KonuOzet {
  id: string;
  baslik: string;
  uniteBaslik: string;
  sira: number;
}
