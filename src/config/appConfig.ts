export const appConfig = {
  cocukAdi: 'Elanaz',
  sinif: 2,
} as const;

export function uygulamaBasligi(): string {
  return `${appConfig.cocukAdi}'ın Ders Dünyası`;
}
