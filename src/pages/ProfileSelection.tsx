import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const MONKEYS = [
  { id: 'happy', emoji: '🐵', name: 'Happy Monkey', color: '#8D6E63' },
  { id: 'cool', emoji: '😎', name: 'Cool Monkey', color: '#5D4037' },
  { id: 'smart', emoji: '🤓', name: 'Smart Monkey', color: '#6D4C41' },
  { id: 'silly', emoji: '🤪', name: 'Silly Monkey', color: '#A1887F' },
];

interface ProfileSelectionProps {
  onComplete: () => void;
}

export const ProfileSelection = ({ onComplete }: ProfileSelectionProps) => {
  const [name, setName] = useState('');
  const [selectedMonkey, setSelectedMonkey] = useState(MONKEYS[0]);
  
  const { addPlayer, setCurrentPlayer } = useGameStore();

  const handleStart = () => {
    if (!name.trim()) {
      alert('Please enter your name! 🐵');
      return;
    }

    const newPlayer = {
      id: `player-${Date.now()}`,
      name: name.trim(),
      monkey: selectedMonkey.id,
      color: selectedMonkey.color,
      progress: {
        currentLevel: 1,
        completedLevels: [],
        totalStars: 0,
      }
    };

    addPlayer(newPlayer);
    setCurrentPlayer(newPlayer);
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="card max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center text-monkey-dark mb-8">
          Choose Your Monkey! 🐵
        </h2>

        <div className="mb-8">
          <label className="block text-xl font-bold text-monkey-dark mb-2">
            What's your name?
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="w-full p-4 text-xl border-4 border-banana rounded-xl focus:outline-none focus:border-banana-dark"
          />
        </div>

        <div className="mb-8">
          <label className="block text-xl font-bold text-monkey-dark mb-4">
            Pick your coding buddy!
          </label>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MONKEYS.map((monkey) => (
              <motion.button
                key={monkey.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMonkey(monkey)}
                className={`p-6 rounded-xl border-4 transition-all ${
                  selectedMonkey.id === monkey.id
                    ? 'border-banana bg-banana-light'
                    : 'border-gray-300 bg-white hover:border-banana-light'
                }`}
              >
                <div className="text-6xl mb-2">{monkey.emoji}</div>
                <div className="text-sm font-bold">{monkey.name}</div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="btn-primary w-full text-2xl"
        >
          Let's Code! 🍌
        </motion.button>
      </div>
    </motion.div>
  );
};