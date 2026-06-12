/** Patron kararı: tüm eğitim görselleri %30 büyük. */
export const GORSEL_OLCEK = 1.3;

export function gorselOlcekle(boyut: number): number {
  return Math.round(boyut * GORSEL_OLCEK);
}

export const FLOW_GORSEL_GENISLIK = gorselOlcekle(340);
export const FLOW_GORSEL_YUKSEKLIK = gorselOlcekle(220);

export const SECENEK_IKON_BOYUT = gorselOlcekle(32);
export const SECENEK_IKON_VARSAYILAN = gorselOlcekle(28);
export const ESLESTIRME_SATIR_IKON = gorselOlcekle(30);
export const ESLESTIRME_IKON_BOYUT = gorselOlcekle(32);
export const ESLESTIRME_SEKIL_IKON = gorselOlcekle(28);

export const KARAKTER_AVATAR = gorselOlcekle(56);
