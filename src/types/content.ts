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

export type Gorsel = string | GorselSayiSeridi | GorselNesne | null;

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
  cevapTipi?: CevapTipi;
  gorsel?: Gorsel;
  sasirtma?: boolean;
  ciftler?: EslestirmeCift[];
  tabloBaslangic?: number;
  tabloBitis?: number;
  dogruHucreler?: number[];
  alternatifCevaplar?: string[];
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
