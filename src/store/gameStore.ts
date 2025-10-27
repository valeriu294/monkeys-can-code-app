import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AgeGroup = 'baby' | 'big' | 'teen';

interface PlayerProfile {
  id: string;
  name: string;
  ageGroup: AgeGroup;
  monkey: string;
  color: string;
  
  // REWARDS
  diamonds: number;  // Earned from completing levels
  totalStars: number;  // Total stars collected
  
  progress: {
    currentLevel: number;
    completedLevels: number[];
    
    // Baby monkey progress
    babyProgress?: {
      completedLevels: number[];
      levelStars: { [levelId: number]: number }; // Track stars per level
    };
    
    // Big monkey progress
    bigMonkeyProgress?: {
      completedLevels: number[];
      levelStars: { [levelId: number]: number };
    };
  };
  
  // Avatar customization
  avatar?: {
    color: string;
    sparkles: boolean;
    accessory: string;
  };
}

interface GameStore {
  currentPlayer: PlayerProfile | null;
  players: PlayerProfile[];
  
  setCurrentPlayer: (player: PlayerProfile) => void;
  addPlayer: (player: PlayerProfile) => void;
  
  // Complete baby level and award diamonds
  completeBabyLevel: (levelId: number, stars: number) => void;
  
  // Complete big monkey level
  completeBigMonkeyLevel: (levelId: number, stars: number) => void;
  
  // Update avatar
  updateAvatar: (avatar: any) => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      currentPlayer: null,
      players: [],
      
      setCurrentPlayer: (player) => set({ currentPlayer: player }),
      
      addPlayer: (player) => set((state) => ({ 
        players: [...state.players, player]
      })),
      
      // Complete baby level with star-based diamond rewards
      completeBabyLevel: (levelId, stars) => set((state) => {
        if (!state.currentPlayer) return state;
        
        const babyProgress = state.currentPlayer.progress.babyProgress || {
          completedLevels: [],
          levelStars: {}
        };
        
        // Award diamonds based on level milestones
        let diamondsEarned = 0;
        const totalCompleted = babyProgress.completedLevels.length + 1;
        
        if (totalCompleted === 3) diamondsEarned = 1;  // Level 3: 1 diamond
        if (totalCompleted === 6) diamondsEarned = 2;  // Level 6: 2 diamonds
        if (totalCompleted === 10) diamondsEarned = 3; // Level 10: 3 diamonds
        
        const updatedPlayer = {
          ...state.currentPlayer,
          diamonds: (state.currentPlayer.diamonds || 0) + diamondsEarned,
          totalStars: (state.currentPlayer.totalStars || 0) + stars,
          progress: {
            ...state.currentPlayer.progress,
            babyProgress: {
              completedLevels: [...babyProgress.completedLevels, levelId],
              levelStars: {
                ...babyProgress.levelStars,
                [levelId]: stars
              }
            }
          }
        };
        
        // Update in players array too
        const updatedPlayers = state.players.map(p => 
          p.id === state.currentPlayer?.id ? updatedPlayer : p
        );
        
        return { 
          currentPlayer: updatedPlayer,
          players: updatedPlayers
        };
      }),
      
      completeBigMonkeyLevel: (levelId, stars) => set((state) => {
        if (!state.currentPlayer) return state;
        
        const bigProgress = state.currentPlayer.progress.bigMonkeyProgress || {
          completedLevels: [],
          levelStars: {}
        };
        
        let diamondsEarned = 0;
        const totalCompleted = bigProgress.completedLevels.length + 1;
        
        if (totalCompleted === 3) diamondsEarned = 1;
        if (totalCompleted === 6) diamondsEarned = 2;
        if (totalCompleted === 10) diamondsEarned = 3;
        if (totalCompleted === 15) diamondsEarned = 4;
        if (totalCompleted === 20) diamondsEarned = 5;
        
        const updatedPlayer = {
          ...state.currentPlayer,
          diamonds: (state.currentPlayer.diamonds || 0) + diamondsEarned,
          totalStars: (state.currentPlayer.totalStars || 0) + stars,
          progress: {
            ...state.currentPlayer.progress,
            bigMonkeyProgress: {
              completedLevels: [...bigProgress.completedLevels, levelId],
              levelStars: {
                ...bigProgress.levelStars,
                [levelId]: stars
              }
            }
          }
        };
        
        const updatedPlayers = state.players.map(p => 
          p.id === state.currentPlayer?.id ? updatedPlayer : p
        );
        
        return { 
          currentPlayer: updatedPlayer,
          players: updatedPlayers
        };
      }),
      
      updateAvatar: (avatar) => set((state) => {
        if (!state.currentPlayer) return state;
        
        const updatedPlayer = {
          ...state.currentPlayer,
          avatar
        };
        
        const updatedPlayers = state.players.map(p => 
          p.id === state.currentPlayer?.id ? updatedPlayer : p
        );
        
        return { 
          currentPlayer: updatedPlayer,
          players: updatedPlayers
        };
      }),
    }),
    {
      name: 'monkeys-can-code-storage',
    }
  )
);