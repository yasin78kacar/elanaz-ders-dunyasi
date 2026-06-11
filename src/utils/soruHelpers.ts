import type { Soru } from '../types/content';

export function soruMetni(soru: Soru): string {
  return soru.yonerge ?? soru.soru ?? '';
}

export function soruCevapAnahtari(soru: Soru): string {
  if (soru.tip === 'eslestirme' && soru.ciftler) {
    return soru.ciftler.map((c) => `${c.sol} → ${c.sag}`).join(', ');
  }
  if (soru.tip === 'tablo-boyama' && soru.dogruHucreler) {
    return soru.dogruHucreler.join(', ');
  }
  return soru.dogruCevap ?? '';
}
