import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDersListesi } from './contentLoader';

const META_KEY = '@elanaz/offline-meta';
const CONTENT_PREFIX = '@elanaz/offline-content/';

export interface OfflineMeta {
  indirilenDersler: string[];
  tumuIndirildi: boolean;
  sonGuncelleme: string;
}

export interface OfflineDurum {
  indirilen: number;
  toplam: number;
  hazir: boolean;
  tumuIndirildi: boolean;
}

async function loadMeta(): Promise<OfflineMeta> {
  const raw = await AsyncStorage.getItem(META_KEY);
  if (!raw) {
    return { indirilenDersler: [], tumuIndirildi: false, sonGuncelleme: '' };
  }
  try {
    return JSON.parse(raw) as OfflineMeta;
  } catch {
    return { indirilenDersler: [], tumuIndirildi: false, sonGuncelleme: '' };
  }
}

async function saveMeta(meta: OfflineMeta): Promise<void> {
  await AsyncStorage.setItem(META_KEY, JSON.stringify(meta));
}

/** İçerik JSON önbelleği + indirme bayrağı yönetimi. */
export const OfflineManager = {
  async getDurum(): Promise<OfflineDurum> {
    const meta = await loadMeta();
    const toplam = getDersListesi().length;
    return {
      indirilen: meta.indirilenDersler.length,
      toplam,
      hazir: meta.indirilenDersler.length > 0 || meta.tumuIndirildi,
      tumuIndirildi: meta.tumuIndirildi,
    };
  },

  async isDersIndirildi(dersId: string): Promise<boolean> {
    const meta = await loadMeta();
    return meta.tumuIndirildi || meta.indirilenDersler.includes(dersId);
  },

  async indirDers(dersId: string, icerikJson?: unknown): Promise<void> {
    const meta = await loadMeta();
    if (!meta.indirilenDersler.includes(dersId)) {
      meta.indirilenDersler.push(dersId);
    }
    if (icerikJson) {
      await AsyncStorage.setItem(
        `${CONTENT_PREFIX}${dersId}`,
        JSON.stringify(icerikJson),
      );
    } else {
      await AsyncStorage.setItem(
        `${CONTENT_PREFIX}${dersId}`,
        JSON.stringify({ dersId, cached: true, tarih: new Date().toISOString() }),
      );
    }
    meta.sonGuncelleme = new Date().toISOString();
    await saveMeta(meta);
  },

  async indirTumu(): Promise<void> {
    const dersler = getDersListesi();
    const meta = await loadMeta();
    for (const ders of dersler) {
      if (!meta.indirilenDersler.includes(ders.id)) {
        meta.indirilenDersler.push(ders.id);
      }
      await AsyncStorage.setItem(
        `${CONTENT_PREFIX}${ders.id}`,
        JSON.stringify({ dersId: ders.id, cached: true, tarih: new Date().toISOString() }),
      );
    }
    meta.tumuIndirildi = true;
    meta.sonGuncelleme = new Date().toISOString();
    await saveMeta(meta);
  },

  async getCachedContent(dersId: string): Promise<unknown | null> {
    const raw = await AsyncStorage.getItem(`${CONTENT_PREFIX}${dersId}`);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  async temizle(): Promise<void> {
    const meta = await loadMeta();
    for (const dersId of meta.indirilenDersler) {
      await AsyncStorage.removeItem(`${CONTENT_PREFIX}${dersId}`);
    }
    await saveMeta({ indirilenDersler: [], tumuIndirildi: false, sonGuncelleme: '' });
  },
};
