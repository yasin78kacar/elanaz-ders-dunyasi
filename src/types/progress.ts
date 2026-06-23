export interface SoruKaydi {
  soruId: string;
  konuId: string;
  dersId: string;
  verilenCevap: string;
  dogruMu: boolean;
  tarih: string;
  soruMetni: string;
  dogruCevap: string;
  tip: 'alistirma' | 'test' | 'hikaye';
}

export interface KonuIlerleme {
  konuId: string;
  dersId: string;
  tamamlandi: boolean;
  testSkoru: number;
  testToplam: number;
  yildiz: number;
  /** Ders oturumunda geçirilen süre (saniye). */
  sureSaniye: number;
  sorular: SoruKaydi[];
}

export interface HikayeIlerleme {
  hikayeId: string;
  dersId: string;
  tamamlandi: boolean;
  testSkoru: number;
  testToplam: number;
  yildiz: number;
  /** Hikâye oturumunda geçirilen süre (saniye). */
  sureSaniye: number;
  sorular: SoruKaydi[];
}

export interface IlerlemeVerisi {
  konular: Record<string, KonuIlerleme>;
  hikayeler: Record<string, HikayeIlerleme>;
}
