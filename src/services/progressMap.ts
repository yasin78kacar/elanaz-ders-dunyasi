import { getDersKonuYolu } from './contentLoader';
import { getKonuIlerleme, getHikayeIlerleme } from './progressStore';
import type { KonuOzet } from '../types/content';

export type KonuDurumu = 'aktif' | 'tamamlandi';

export interface KonuHaritaOgesi extends KonuOzet {
  durum: KonuDurumu;
  yildiz: number;
}

/** Tüm konular açık — yıldız yalnızca ilerleme göstergesi, kilit yok. */
export async function getKonuHaritasi(dersId: string): Promise<KonuHaritaOgesi[]> {
  const yol = getDersKonuYolu(dersId);

  return Promise.all(
    yol.map(async (konu) => {
      const ilerleme = await getKonuIlerleme(dersId, konu.id);
      const yildiz = ilerleme?.yildiz ?? 0;
      const durum: KonuDurumu =
        ilerleme?.tamamlandi && yildiz > 0 ? 'tamamlandi' : 'aktif';

      return { ...konu, durum, yildiz };
    }),
  );
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

export interface KonuYildizOzeti {
  dersBaslik: string;
  konuBaslik: string;
  yildiz: number;
}

/** Anne Paneli: ders bazında konu yıldızları. */
export async function getTumKonuYildizlari(): Promise<KonuYildizOzeti[]> {
  const { getDersListesi, okumaKosesiMi } = await import('./contentLoader');
  const sonuc: KonuYildizOzeti[] = [];

  for (const ders of getDersListesi()) {
    if (okumaKosesiMi(ders.id)) continue;
    const harita = await getKonuHaritasi(ders.id);
    for (const konu of harita) {
      sonuc.push({
        dersBaslik: ders.baslik,
        konuBaslik: konu.baslik,
        yildiz: konu.yildiz,
      });
    }
  }

  return sonuc;
}
