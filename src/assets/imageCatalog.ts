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

/** Sahne veya sabit görsel kimliği için Flow kaynağı; yoksa undefined (SVG yedek). */
export function resolveFlowImage(key: string, konuId?: string): number | undefined {
  const k = key.toLowerCase();
  const direct = lookup(k);
  if (direct !== undefined) return direct;

  if (konuId) {
    const onek = FLOW_KONU_ONEK[konuId];
    if (onek && !k.startsWith(onek)) {
      const prefixed = lookup(`${onek}${k}`);
      if (prefixed !== undefined) return prefixed;
    }

    const topicFb = FLOW_TOPIC_FALLBACKS[konuId];
    if (topicFb !== undefined) return topicFb;

    if (geometriKonulari.has(konuId)) {
      const geoFb = FLOW_TOPIC_FALLBACKS.__geometri__;
      if (geoFb !== undefined) return geoFb;
    }
  }

  if (k.startsWith('g5m-')) return FLOW_TOPIC_FALLBACKS['sivi-olcme'];
  if (k.startsWith('g4m-')) return FLOW_TOPIC_FALLBACKS['bicimsel-ozellikler'];
  if (k.startsWith('g3m-')) return FLOW_TOPIC_FALLBACKS['geometrik-sekil-modelleri'];
  if (k.startsWith('g2m-')) return FLOW_TOPIC_FALLBACKS['geometrik-cisim-modelleri'];

  if (geometriKonulari.has(konuId ?? '')) {
    return FLOW_TOPIC_FALLBACKS.__geometri__;
  }

  return undefined;
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
