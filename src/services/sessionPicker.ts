import type { Soru } from '../types/content';

const OTURUM_BOYUTU = 5;
const MAX_SASIRTMA = 2;

function karistir<T>(dizi: T[]): T[] {
  const kopya = [...dizi];
  for (let i = kopya.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopya[i], kopya[j]] = [kopya[j], kopya[i]];
  }
  return kopya;
}

export function oturumSorulariSec(havuz: Soru[], boyut = OTURUM_BOYUTU): Soru[] {
  if (havuz.length <= boyut) return karistir(havuz);

  const sasirtmalar = havuz.filter((s) => s.sasirtma);
  const normal = havuz.filter((s) => !s.sasirtma);
  const sasirtmaAdet = Math.min(MAX_SASIRTMA, sasirtmalar.length, 2);
  const normalAdet = boyut - sasirtmaAdet;

  const secilenSasirtma = karistir(sasirtmalar).slice(0, sasirtmaAdet);
  const secilenNormal = karistir(normal).slice(0, normalAdet);

  return karistir([...secilenNormal, ...secilenSasirtma]);
}
