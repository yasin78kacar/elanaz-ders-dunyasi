export type SoruTipi = 'yazili' | 'coktanSecmeli';
export type CevapTipi = 'sayi' | 'metin';

export interface AnlatimEkrani {
  metin: string;
  gorsel?: string | null;
}

export interface Soru {
  id: string;
  kazanimKodu: string;
  tip: SoruTipi;
  soru: string;
  dogruCevap: string;
  ipucu: string;
  secenekler?: string[];
  cevapTipi?: CevapTipi;
  gorsel?: string | null;
  sasirtma?: boolean;
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
  gorsel?: string | null;
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
