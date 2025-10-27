import { create } from 'zustand';

interface PlayerProfile {
  id: string;
  name: string;
  monkey: string;
  color: string;
  progress: {
    currentLevel: number;
    completedLevels: number[];
    totalStars: number;
  };
}

interface GameStore {
  currentPlayer: PlayerProfile | null;
  players: PlayerProfile[];
  setCurrentPlayer: (player: PlayerProfile) => void;
  addPlayer: (player: PlayerProfile) => void;
  updateProgress: (levelId: number, stars: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  currentPlayer: null,
  players: [],
  
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
  
  addPlayer: (player) => set((state) => ({ 
    players: [...state.players, player]
  })),
  
  updateProgress: (levelId, stars) => set((state) => {
    if (!state.currentPlayer) return state;
    
    const updatedPlayer = {
      ...state.currentPlayer,
      progress: {
        ...state.currentPlayer.progress,
        currentLevel: levelId + 1,
        completedLevels: [...state.currentPlayer.progress.completedLevels, levelId],
        totalStars: state.currentPlayer.progress.totalStars + stars,
      }
    };
    
    return { currentPlayer: updatedPlayer };
  }),
}));