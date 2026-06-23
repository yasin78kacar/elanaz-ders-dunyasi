export const lightColors = {
  arkaPlan: '#FFF8F0',
  kart: '#FFFFFF',
  birincil: '#2E6BE6',
  birincilAcik: '#E8F0FE',
  baslik: '#1A2B4A',
  metin: '#3D4F6F',
  basari: '#2E9E5B',
  basariAcik: '#E6F7ED',
  hata: '#D64545',
  hataAcik: '#FDECEC',
  turuncu: '#E67E22',
  kenarlik: '#E0D8CE',
  yildiz: '#F5B800',
} as const;

export const darkColors = {
  arkaPlan: '#12121F',
  kart: '#1E1E32',
  birincil: '#5B8DEF',
  birincilAcik: '#1A2A4A',
  baslik: '#E8ECF4',
  metin: '#A8B4CC',
  basari: '#4ADE80',
  basariAcik: '#1A3A2A',
  hata: '#F87171',
  hataAcik: '#3A1A1A',
  turuncu: '#FB923C',
  kenarlik: '#2E2E48',
  yildiz: '#FBBF24',
} as const;

export type ThemeColors = {
  arkaPlan: string;
  kart: string;
  birincil: string;
  birincilAcik: string;
  baslik: string;
  metin: string;
  basari: string;
  basariAcik: string;
  hata: string;
  hataAcik: string;
  turuncu: string;
  kenarlik: string;
  yildiz: string;
};

/** Varsayılan açık tema — geriye dönük uyumluluk. */
export const colors = lightColors;
