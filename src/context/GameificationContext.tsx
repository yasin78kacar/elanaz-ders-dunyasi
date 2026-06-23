import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveProgress, getProgress } from '../services/ProgressService';

interface Badge {
  id: string;
  name: string;
  icon: string;
  earned: boolean;
}

const GameificationContext = createContext<any>(null);

export const GameificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState<Badge[]>([
    { id: '1', name: 'First Steps', icon: '👶', earned: false },
    { id: '2', name: 'Sharpshooter', icon: '🎯', earned: false },
    { id: '3', name: 'On Fire', icon: '🔥', earned: false },
    { id: '4', name: 'Brain Master', icon: '🧠', earned: false },
    { id: '5', name: 'Bookworm', icon: '📚', earned: false },
    { id: '6', name: 'Artist', icon: '🎨', earned: false },
    { id: '7', name: 'Puzzle Solver', icon: '🧩', earned: false },
  ]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getProgress();
    setPoints(data.points || 0);
    setLevel(data.level || 1);
    setBadges(data.badges || badges);
  };

  const addPoints = (amount: number) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    checkLevelUp(newPoints);
    checkBadges(newPoints);
    saveProgress({ points: newPoints, level, badges });
  };

  const checkLevelUp = (p: number) => {
    const newLevel = Math.floor(p / 500) + 1;
    if (newLevel !== level) setLevel(newLevel);
  };

  const checkBadges = (p: number) => {
    const newBadges = [...badges];
    if (p >= 10 && !newBadges[0].earned) newBadges[0].earned = true;
    if (p >= 1000 && !newBadges[3].earned) newBadges[3].earned = true;
    setBadges(newBadges);
  };

  return (
    <GameificationContext.Provider value={{ points, level, badges, addPoints }}>
      {children}
    </GameificationContext.Provider>
  );
};

export const useGameification = () => useContext(GameificationContext);
