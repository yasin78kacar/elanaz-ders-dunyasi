import sinif2Icerik from '../../content/sinif2/index.json';
import type { Ders, DersOzet, Konu, SinifIcerik } from '../types/content';
import { appConfig } from '../config/appConfig';

const icerik = sinif2Icerik as SinifIcerik;

export function getDersListesi(): DersOzet[] {
  return icerik.dersler.map((d) => ({ id: d.id, baslik: d.baslik }));
}

export function getDers(dersId: string): Ders | undefined {
  return icerik.dersler.find((d) => d.id === dersId);
}

export function getKonu(dersId: string, konuId: string): Konu | undefined {
  const ders = getDers(dersId);
  if (!ders) return undefined;
  for (const unite of ders.unite) {
    const konu = unite.konular.find((k) => k.id === konuId);
    if (konu) return konu;
  }
  return undefined;
}

export function getKonuListesi(dersId: string): { uniteBaslik: string; konular: Konu[] }[] {
  const ders = getDers(dersId);
  if (!ders) return [];
  return ders.unite
    .filter((u) => u.konular.length > 0)
    .map((u) => ({ uniteBaslik: u.baslik, konular: u.konular }));
}

export function getSinif(): number {
  return appConfig.sinif;
}
