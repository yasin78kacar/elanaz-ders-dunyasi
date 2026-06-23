/** Sesli hikâye ses dosyaları — gerçek MP3'ler eklendiğinde buraya bağlanır. */
const PLACEHOLDER_SES = require('../../assets/sounds/matematik-muzik.mp4');

const SESLI_HIKAYE_ANAHTARLARI = Array.from({ length: 30 }, (_, i) =>
  `sesli-hikaye-${String(i + 1).padStart(2, '0')}`,
);

export type SesliHikayeSesKey = (typeof SESLI_HIKAYE_ANAHTARLARI)[number];

const SESLI_HIKAYE_SESLER: Record<string, number> = Object.fromEntries(
  SESLI_HIKAYE_ANAHTARLARI.map((key) => [key, PLACEHOLDER_SES]),
);

export function getSesliHikayeSource(sesKey: string): number {
  return SESLI_HIKAYE_SESLER[sesKey] ?? PLACEHOLDER_SES;
}
