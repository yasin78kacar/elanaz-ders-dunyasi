import type { SoruKaydi, KonuIlerleme, HikayeIlerleme } from '../types/progress';
import {
  getTumIlerleme,
  getTumSoruKayitlari,
  kaydetSoruCevabi,
  tamamlaKonu,
  tamamlaHikaye,
  kaydetHikayeCevabi,
} from './progressStore';
import { getDersListesi, getDersKonuYolu, okumaKosesiMi } from './contentLoader';

export interface TemaIlerleme {
  temaId: string;
  temaBaslik: string;
  dersId: string;
  dersBaslik: string;
  cozulenSoru: number;
  dogruSoru: number;
  tamamlananKonu: number;
  toplamKonu: number;
}

export interface DersIlerlemeDetay {
  dersId: string;
  dersBaslik: string;
  cozulenSoru: number;
  dogruSoru: number;
  tamamlananKonu: number;
  toplamKonu: number;
  temalar: TemaIlerleme[];
}

export interface Oneri {
  tip: 'konu' | 'tekrar' | 'hikaye';
  baslik: string;
  aciklama: string;
  dersId?: string;
  konuId?: string;
}

/** Detaylı ilerleme takibi — ders/tema/soru düzeyinde. */
export const ProgressService = {
  kaydetSoruCevabi,
  kaydetHikayeCevabi,
  tamamlaKonu,
  tamamlaHikaye,
  getTumIlerleme,
  getTumSoruKayitlari,

  async getDersDetaylari(): Promise<DersIlerlemeDetay[]> {
    const dersler = getDersListesi();
    const kayitlar = await getTumSoruKayitlari();
    const ilerleme = await getTumIlerleme();

    return dersler
      .filter((d) => !okumaKosesiMi(d.id))
      .map((ders) => {
        const konular = getDersKonuYolu(ders.id);
        const dersKayitlari = kayitlar.filter((k) => k.dersId === ders.id);
        const temaMap = new Map<string, TemaIlerleme>();

        for (const konu of konular) {
          const temaKey = konu.uniteBaslik;
          const mevcut = temaMap.get(temaKey) ?? {
            temaId: temaKey,
            temaBaslik: konu.uniteBaslik,
            dersId: ders.id,
            dersBaslik: ders.baslik,
            cozulenSoru: 0,
            dogruSoru: 0,
            tamamlananKonu: 0,
            toplamKonu: 0,
          };
          mevcut.toplamKonu += 1;
          const konuKey = `${ders.id}:${konu.id}`;
          const konuIlerleme = ilerleme.konular[konuKey];
          if (konuIlerleme?.tamamlandi) mevcut.tamamlananKonu += 1;
          const konuKayitlari = dersKayitlari.filter((k) => k.konuId === konu.id);
          mevcut.cozulenSoru += konuKayitlari.length;
          mevcut.dogruSoru += konuKayitlari.filter((k) => k.dogruMu).length;
          temaMap.set(temaKey, mevcut);
        }

        const tamamlananKonu = Object.values(ilerleme.konular).filter(
          (k) => k.dersId === ders.id && k.tamamlandi,
        ).length;

        return {
          dersId: ders.id,
          dersBaslik: ders.baslik,
          cozulenSoru: dersKayitlari.length,
          dogruSoru: dersKayitlari.filter((k) => k.dogruMu).length,
          tamamlananKonu,
          toplamKonu: konular.length,
          temalar: Array.from(temaMap.values()),
        };
      });
  },

  async getOneriler(): Promise<Oneri[]> {
    const oneriler: Oneri[] = [];
    const kayitlar = await getTumSoruKayitlari();
    const yanlislar = kayitlar.filter((k) => !k.dogruMu);

    if (yanlislar.length > 0) {
      const son = yanlislar[yanlislar.length - 1];
      oneriler.push({
        tip: 'tekrar',
        baslik: 'Yanlış soruları tekrar et',
        aciklama: `"${son.soruMetni.slice(0, 40)}..." konusunu pekiştir.`,
        dersId: son.dersId,
        konuId: son.konuId,
      });
    }

    const detaylar = await this.getDersDetaylari();
    for (const ders of detaylar) {
      const eksikTema = ders.temalar.find(
        (t) => t.tamamlananKonu < t.toplamKonu && t.cozulenSoru === 0,
      );
      if (eksikTema) {
        oneriler.push({
          tip: 'konu',
          baslik: `${eksikTema.temaBaslik} temasına başla`,
          aciklama: `${ders.dersBaslik} dersinde yeni bir tema seni bekliyor.`,
          dersId: ders.dersId,
        });
        break;
      }
    }

    if (oneriler.length === 0) {
      oneriler.push({
        tip: 'konu',
        baslik: 'Günlük pratik yap',
        aciklama: 'Her gün bir konu çözmek öğrenmeyi pekiştirir.',
      });
    }

    return oneriler.slice(0, 3);
  },
};

export type { SoruKaydi, KonuIlerleme, HikayeIlerleme };
