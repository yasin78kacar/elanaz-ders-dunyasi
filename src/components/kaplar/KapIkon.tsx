import { KapGovde, type KapTipi } from './KapPrimitives';

interface Props {
  tip: KapTipi;
  size?: number;
}

export function KapIkon({ tip, size = 32 }: Props) {
  const scale = (size / 56) * 0.55;
  return <KapGovde tip={tip} doluluk={0.65} scale={scale} />;
}
