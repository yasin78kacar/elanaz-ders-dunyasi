/** Genel UI öğeleri (şık ikonları, avatar vb.) */
export const GORSEL_OLCEK = 1.3;

/** Flow JPEG görselleri — patron: 2× (taban × 2.0) */
export const FLOW_GORSEL_OLCEK = 2.0;

export function gorselOlcekle(boyut: number): number {
  return Math.round(boyut * GORSEL_OLCEK);
}

export function flowGorselOlcekle(boyut: number): number {
  return Math.round(boyut * FLOW_GORSEL_OLCEK);
}

export const FLOW_GORSEL_GENISLIK = flowGorselOlcekle(340);
export const FLOW_GORSEL_YUKSEKLIK = flowGorselOlcekle(220);

export const SECENEK_IKON_BOYUT = gorselOlcekle(32);
export const SECENEK_IKON_VARSAYILAN = gorselOlcekle(28);
export const ESLESTIRME_SATIR_IKON = gorselOlcekle(30);
export const ESLESTIRME_IKON_BOYUT = gorselOlcekle(32);
export const ESLESTIRME_SEKIL_IKON = gorselOlcekle(28);

export const KARAKTER_AVATAR = gorselOlcekle(56);
