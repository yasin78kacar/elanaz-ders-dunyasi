import { getDersKonuYolu } from './contentLoader';
import { getKonuIlerleme, getHikayeIlerleme } from './progressStore';
import type { KonuOzet } from '../types/content';

export type KonuDurumu = 'kilitli' | 'aktif' | 'tamamlandi';

export interface KonuHaritaOgesi extends KonuOzet {
  durum: KonuDurumu;
  yildiz: number;
}

export async function getKonuHaritasi(dersId: string): Promise<KonuHaritaOgesi[]> {
  const yol = getDersKonuYolu(dersId);
  const sonuclar: KonuHaritaOgesi[] = [];
  let oncekiYildiz = 3;

  for (const konu of yol) {
    const ilerleme = await getKonuIlerleme(dersId, konu.id);
    const yildiz = ilerleme?.yildiz ?? 0;
    const dahaOnceCalisildi =
      (ilerleme?.tamamlandi ?? false) || (ilerleme?.yildiz ?? 0) > 0;
    const acik = konu.sira === 0 || oncekiYildiz >= 1 || dahaOnceCalisildi;

    let durum: KonuDurumu;
    if (!acik) durum = 'kilitli';
    else if (ilerleme?.tamamlandi && yildiz > 0) durum = 'tamamlandi';
    else durum = 'aktif';

    sonuclar.push({ ...konu, durum, yildiz });
    if (ilerleme?.tamamlandi) oncekiYildiz = yildiz;
    else if (yildiz > 0) oncekiYildiz = yildiz;
    else oncekiYildiz = 0;
  }

  return sonuclar;
}

export async function konuAcikMi(dersId: string, konuId: string): Promise<boolean> {
  const harita = await getKonuHaritasi(dersId);
  const og = harita.find((k) => k.id === konuId);
  return og?.durum !== 'kilitli';
}

export async function getDersIlerlemeOzeti(dersId: string): Promise<{
  tamamlanan: number;
  toplam: number;
  yildizToplam: number;
}> {
  const yol = getDersKonuYolu(dersId);
  let tamamlanan = 0;
  let yildizToplam = 0;

  for (const konu of yol) {
    const ilerleme = await getKonuIlerleme(dersId, konu.id);
    if (ilerleme?.tamamlandi && (ilerleme.yildiz ?? 0) > 0) tamamlanan++;
    yildizToplam += ilerleme?.yildiz ?? 0;
  }

  return { tamamlanan, toplam: yol.length, yildizToplam };
}

export async function getHikayeIlerlemeOzeti(dersId: string): Promise<{
  tamamlanan: number;
  toplam: number;
  yildizToplam: number;
}> {
  const { getHikayeListesi } = await import('./contentLoader');
  const hikayeler = getHikayeListesi(dersId);
  let tamamlanan = 0;
  let yildizToplam = 0;

  for (const h of hikayeler) {
    const ilerleme = await getHikayeIlerleme(dersId, h.id);
    if (ilerleme?.tamamlandi) tamamlanan++;
    yildizToplam += ilerleme?.yildiz ?? 0;
  }

  return { tamamlanan, toplam: hikayeler.length, yildizToplam };
}
