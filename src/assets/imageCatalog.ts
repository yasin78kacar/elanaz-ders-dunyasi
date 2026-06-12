import {
  FLOW_CHARACTER_SOURCE,
  FLOW_GEOMETRI_KONULARI,
  FLOW_IMAGE_SOURCES,
  FLOW_KONU_ONEK,
  FLOW_TOPIC_FALLBACKS,
} from './flowImages.generated';
import type { SecenekIkon } from '../types/content';

const geometriKonulari = new Set<string>(FLOW_GEOMETRI_KONULARI);

function lookup(key: string): number | undefined {
  return FLOW_IMAGE_SOURCES[key.toLowerCase()];
}

function konuYedekGorseli(konuId?: string): number | undefined {
  if (!konuId) return undefined;
  if (konuId === 'sivi-olcme') return FLOW_TOPIC_FALLBACKS['sivi-olcme'];
  if (geometriKonulari.has(konuId)) return FLOW_TOPIC_FALLBACKS.__geometri__;
  return FLOW_TOPIC_FALLBACKS[konuId];
}

/** Sahne veya sabit görsel kimliği için Flow kaynağı; yoksa undefined (SVG yedek). */
export function resolveFlowImage(key: string, konuId?: string): number | undefined {
  const k = key.toLowerCase();
  const direct = lookup(k);
  if (direct !== undefined) return direct;

  if (k.startsWith('onluk-blok')) {
    const onluk = lookup('onluk-blok');
    if (onluk !== undefined) return onluk;
  }

  if (konuId) {
    const onek = FLOW_KONU_ONEK[konuId];
    if (onek && !k.startsWith(onek)) {
      const prefixed = lookup(`${onek}${k}`);
      if (prefixed !== undefined) return prefixed;
    }
  }

  if (k.startsWith('g5m-') || konuId === 'sivi-olcme') {
    return FLOW_TOPIC_FALLBACKS['sivi-olcme'];
  }

  if (
    k.startsWith('g4m-') ||
    k.startsWith('g3m-') ||
    k.startsWith('g2m-') ||
    geometriKonulari.has(konuId ?? '')
  ) {
    const geo = FLOW_TOPIC_FALLBACKS.__geometri__;
    if (geo !== undefined) return geo;
  }

  return konuYedekGorseli(konuId);
}

/** Sıvı ölçme kap görselleri → kaplar.jpeg; geometri nesneleri → geometri-nesneler.jpeg */
export function resolveFlowImageForTur(
  tur: 'kap' | 'nesne',
  sahneOrId: string,
  konuId?: string,
): number | undefined {
  if (tur === 'kap') {
    return lookup(sahneOrId) ?? FLOW_TOPIC_FALLBACKS['sivi-olcme'];
  }
  return resolveFlowImage(sahneOrId, konuId);
}

export function resolveCharacterImage(): number | undefined {
  return FLOW_CHARACTER_SOURCE;
}

/** Şık ikonları için küçük Flow görseli (varsa). */
export function resolveSecenekIkonImage(ikon: SecenekIkon): number | undefined {
  if (ikon.tip === 'kap') {
    return (
      lookup(`kap-${ikon.anahtar}`) ??
      lookup(ikon.anahtar) ??
      FLOW_TOPIC_FALLBACKS['sivi-olcme']
    );
  }
  if (ikon.tip === 'model' || ikon.tip === 'nesne' || ikon.tip === 'sekil') {
    return lookup(ikon.anahtar) ?? lookup(`ikon-${ikon.tip}-${ikon.anahtar}`);
  }
  if (ikon.tip === 'sekil-nesne') {
    return lookup(ikon.anahtar) ?? lookup(`sekil-${ikon.anahtar}`);
  }
  return undefined;
}
