import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@elanaz_game_data';

export const saveProgress = async (data: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Save progress error:', e);
  }
};

export const getProgress = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { points: 0, level: 1, badges: [] };
  } catch (e) {
    console.error('Get progress error:', e);
    return { points: 0, level: 1, badges: [] };
  }
};

export const clearProgress = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Clear progress error:', e);
  }
};

export const getStatistics = async () => {
  const data = await getProgress();
  return {
    totalPoints: data.points,
    currentLevel: data.level,
    badgesEarned: data.badges?.filter((b: any) => b.earned).length || 0,
    totalBadges: 7
  };
};
