import { View } from 'react-native';
import { ModellerIcon, type ModelTipi } from './ModellerIcon';
import { NesnelerIcon, type NesneTipi } from './NesnelerIcon';
import { EslestirmeIkon } from './G2mAnlatim';
import { EslestirmeSekilIkon } from './G3mAnlatim';
import { SekilNesneler, type SekilNesneTipi } from './SekilNesneler';
import { SekillerIcon, type SekilTipi } from './SekillerIcon';
import { KapIkon } from '../kaplar/KapIkon';
import type { KapTipi } from '../kaplar/KapPrimitives';
import type { SecenekIkon as SecenekIkonTip } from '../../types/content';

interface Props {
  ikon: SecenekIkonTip;
  size?: number;
}

export function SecenekIkon({ ikon, size = 28 }: Props) {
  if (ikon.tip === 'model') {
    return <ModellerIcon tip={ikon.anahtar as ModelTipi} size={size} />;
  }
  if (ikon.tip === 'nesne') {
    return <NesnelerIcon tip={ikon.anahtar as NesneTipi} size={size} />;
  }
  if (ikon.tip === 'sekil') {
    return <SekillerIcon tip={ikon.anahtar as SekilTipi} size={size} />;
  }
  if (ikon.tip === 'kap') {
    return <KapIkon tip={ikon.anahtar as KapTipi} size={size} />;
  }
  if (ikon.tip === 'sekil-nesne') {
    return <SekilNesneler tip={ikon.anahtar as SekilNesneTipi} size={size} />;
  }
  if (ikon.tip === 'cift') {
    return (
      <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
        <NesnelerIcon tip={ikon.sol as NesneTipi} size={size} />
        <NesnelerIcon tip={ikon.sag as NesneTipi} size={size} />
      </View>
    );
  }
  if (ikon.tip === 'eslestirme') {
    return (
      <EslestirmeIkon
        nesne={ikon.nesne as NesneTipi}
        model={ikon.model as ModelTipi}
      />
    );
  }
  if (ikon.tip === 'eslestirme-sekil') {
    return <EslestirmeSekilIkon nesne={ikon.nesne} sekil={ikon.sekil} />;
  }
  return <View />;
}
