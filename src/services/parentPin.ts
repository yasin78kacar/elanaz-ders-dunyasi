import AsyncStorage from '@react-native-async-storage/async-storage';

const PIN_KEY = '@elanaz/anne-pin';

const TAHMIN_EDILEBILIR_PINLER = new Set([
  '0000', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999',
  '1234', '4321', '0123', '3210', '1212', '2121', '1010', '0101',
]);

export function pinGecerliMi(pin: string): boolean {
  if (!/^\d{4}$/.test(pin)) return false;
  return !TAHMIN_EDILEBILIR_PINLER.has(pin);
}

export async function getKayitliPin(): Promise<string | null> {
  return AsyncStorage.getItem(PIN_KEY);
}

export async function pinKaydet(pin: string): Promise<boolean> {
  if (!pinGecerliMi(pin)) return false;
  await AsyncStorage.setItem(PIN_KEY, pin);
  return true;
}

export async function pinDogrula(pin: string): Promise<boolean> {
  const kayitli = await getKayitliPin();
  if (!kayitli) return false;
  return kayitli === pin;
}
