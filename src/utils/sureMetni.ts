/** Saniyeyi okunabilir süre metnine çevirir. */
export function sureMetni(saniye: number): string {
  if (saniye < 60) return `${saniye} sn`;
  const dakika = Math.floor(saniye / 60);
  const kalan = saniye % 60;
  if (dakika < 60) return kalan > 0 ? `${dakika} dk ${kalan} sn` : `${dakika} dk`;
  const saat = Math.floor(dakika / 60);
  const kalanDk = dakika % 60;
  return kalanDk > 0 ? `${saat} sa ${kalanDk} dk` : `${saat} sa`;
}
