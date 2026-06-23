import type { Soru } from '../types/content';
import type { DifficultyLevel } from '../types/difficulty';

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

/** Zorluk seviyesine göre soru havuzunu filtreler. */
export function filtreSorularByDifficulty(havuz: Soru[], level: DifficultyLevel): Soru[] {
  if (havuz.length === 0) return havuz;
  const kolay = havuz.filter((s) => !s.sasirtma);
  const zor = havuz.filter((s) => s.sasirtma);

  switch (level) {
    case 'easy':
      return kolay.length > 0 ? kolay : havuz;
    case 'hard':
      return zor.length > 0 ? zor : havuz;
    case 'medium':
    default:
      return havuz;
  }
}

export function oturumSorulariSec(
  havuz: Soru[],
  boyut = OTURUM_BOYUTU,
  level?: DifficultyLevel,
): Soru[] {
  const filtreli = level ? filtreSorularByDifficulty(havuz, level) : havuz;
  if (filtreli.length <= boyut) return karistir(filtreli);

  const sasirtmalar = filtreli.filter((s) => s.sasirtma);
  const normal = filtreli.filter((s) => !s.sasirtma);
  const sasirtmaAdet =
    level === 'easy' ? 0 : Math.min(MAX_SASIRTMA, sasirtmalar.length, level === 'hard' ? boyut : 2);
  const normalAdet = boyut - sasirtmaAdet;

  const secilenSasirtma = karistir(sasirtmalar).slice(0, sasirtmaAdet);
  const secilenNormal = karistir(normal).slice(0, normalAdet);

  return karistir([...secilenNormal, ...secilenSasirtma]);
}
