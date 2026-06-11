import indexJson from '../../content/sinif2/index.json';
import ritmikSayma from '../../content/sinif2/matematik/ritmik-sayma.json';
import sayilariOkuma from '../../content/sinif2/matematik/sayilari-okuma-yazma.json';
import onlukBirlik from '../../content/sinif2/matematik/onluk-birlik.json';
import geometrikCisimler from '../../content/sinif2/matematik/geometrik-cisimler.json';
import geometrikCisimModelleri from '../../content/sinif2/matematik/geometrik-cisim-modelleri.json';
import geometrikSekilModelleri from '../../content/sinif2/matematik/geometrik-sekil-modelleri.json';
import bicimselOzellikler from '../../content/sinif2/matematik/bicimsel-ozellikler.json';
import siviOlcme from '../../content/sinif2/matematik/sivi-olcme.json';
import elanazHikaye from '../../content/sinif2/okuma-kosesi/elanaz-kayip-boya-kalemi.json';
import type { Ders, DersOzet, Hikaye, Konu, KonuOzet, SinifIcerik } from '../types/content';
import { appConfig } from '../config/appConfig';

const konuDosyalari: Record<string, Konu> = {
  'matematik/ritmik-sayma.json': ritmikSayma as Konu,
  'matematik/sayilari-okuma-yazma.json': sayilariOkuma as Konu,
  'matematik/onluk-birlik.json': onlukBirlik as Konu,
  'matematik/geometrik-cisimler.json': geometrikCisimler as Konu,
  'matematik/geometrik-cisim-modelleri.json': geometrikCisimModelleri as Konu,
  'matematik/geometrik-sekil-modelleri.json': geometrikSekilModelleri as Konu,
  'matematik/bicimsel-ozellikler.json': bicimselOzellikler as Konu,
  'matematik/sivi-olcme.json': siviOlcme as Konu,
};

const hikayeDosyalari: Record<string, Hikaye> = {
  'okuma-kosesi/elanaz-kayip-boya-kalemi.json': elanazHikaye as Hikaye,
};

interface IndexDers {
  id: string;
  baslik: string;
  unite: { id: string; baslik: string; konuDosyalari?: string[] }[];
  hikayeDosyalari?: string[];
}

function buildDersler(): Ders[] {
  return (indexJson.dersler as IndexDers[]).map((d) => ({
    id: d.id,
    baslik: d.baslik,
    unite: d.unite.map((u) => ({
      id: u.id,
      baslik: u.baslik,
      konular: (u.konuDosyalari ?? []).map((dosya) => konuDosyalari[dosya]).filter(Boolean),
    })),
    hikayeler: (d.hikayeDosyalari ?? []).map((dosya) => hikayeDosyalari[dosya]).filter(Boolean),
  }));
}

const icerik: SinifIcerik = { sinif: indexJson.sinif, dersler: buildDersler() };

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

export function getDersKonuYolu(dersId: string): KonuOzet[] {
  const ders = getDers(dersId);
  if (!ders) return [];
  const yol: KonuOzet[] = [];
  let sira = 0;
  for (const unite of ders.unite) {
    for (const konu of unite.konular) {
      yol.push({ id: konu.id, baslik: konu.baslik, uniteBaslik: unite.baslik, sira });
      sira++;
    }
  }
  return yol;
}

export function getKonuListesi(dersId: string): { uniteBaslik: string; konular: Konu[] }[] {
  const ders = getDers(dersId);
  if (!ders) return [];
  return ders.unite
    .filter((u) => u.konular.length > 0)
    .map((u) => ({ uniteBaslik: u.baslik, konular: u.konular }));
}

export function getHikayeListesi(dersId: string): Hikaye[] {
  return getDers(dersId)?.hikayeler ?? [];
}

export function getHikaye(dersId: string, hikayeId: string): Hikaye | undefined {
  return getHikayeListesi(dersId).find((h) => h.id === hikayeId);
}

export function getSinif(): number {
  return appConfig.sinif;
}

export function okumaKosesiMi(dersId: string): boolean {
  return dersId === 'okuma-kosesi';
}
