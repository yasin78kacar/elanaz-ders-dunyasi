import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { buildDeviceLayout, type DeviceLayout } from '../theme/deviceLayout';

/** Dimensions API ile tablet/telefon düzeni — döndürmede güncellenir. */
export function useDeviceLayout(): DeviceLayout {
  const { width } = useWindowDimensions();
  return useMemo(() => buildDeviceLayout(width), [width]);
}
