import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { Sparkles, User } from 'lucide-react';


// Monkey options with enhanced colors
const MONKEYS = [
  { id: 'happy', emoji: '🐵', name: 'Happy Monkey', color: '#FFD700', gradient: 'from-yellow-400 to-yellow-600' },
  { id: 'cool', emoji: '😎', name: 'Cool Monkey', color: '#FF6B35', gradient: 'from-orange-400 to-orange-600' },
  { id: 'smart', emoji: '🤓', name: 'Smart Monkey', color: '#4ECDC4', gradient: 'from-teal-400 to-teal-600' },
  { id: 'silly', emoji: '🤪', name: 'Silly Monkey', color: '#FF6B9D', gradient: 'from-pink-400 to-pink-600' },
];

interface ProfileSelectionProps {
  onComplete: () => void;
  ageGroup: 'baby' | 'big' | 'teen';  // ADD THIS LINE
}

export const ProfileSelection = ({ onComplete, ageGroup }: ProfileSelectionProps) => {
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
  ageGroup: ageGroup,  // ADD THIS LINE
  monkey: selectedMonkey.id,
  color: selectedMonkey.color,
  diamonds: 0,  // ADD THIS
  totalStars: 0,  // ADD THIS
  progress: {
    currentLevel: 1,
    completedLevels: [],
  }
};

    addPlayer(newPlayer);
    setCurrentPlayer(newPlayer);
    onComplete();
  };

  return (
    // Yellow gradient background
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-100 to-yellow-300 flex items-center justify-center p-4">
      
      {/* Centered card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        {/* Glossy card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border-4 border-yellow-400 relative overflow-hidden">
          
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* Header with icon */}
            <div className="text-center mb-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg">
                  <Sparkles size={48} className="text-white" />
                </div>
              </motion.div>

              {/* 
                🖼️ IMAGE PLACEHOLDER 3: Profile Selection Header
                Add image here:
                <img src="/choose-monkey.png" alt="Choose" className="w-32 mx-auto mb-4" />
              */}

              <h2 className="text-5xl font-black bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent mb-3">
                Choose Your Monkey! 🐵
              </h2>
              <p className="text-gray-600 text-lg">Let's create your coding profile!</p>
            </div>

            {/* Name input section */}
            <div className="mb-10">
              <label className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-4">
                <User className="text-yellow-500" size={28} />
                What's your name?
              </label>
              
              {/* Glossy input */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full p-5 text-2xl bg-white border-4 border-yellow-300 rounded-2xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-200 shadow-lg transition-all"
              />
            </div>

            {/* Monkey selection */}
            <div className="mb-10">
              <label className="block text-2xl font-bold text-gray-800 mb-6 text-center">
                Pick your coding buddy!
              </label>
              
              {/* Grid of monkeys - centered */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {MONKEYS.map((monkey) => (
                  <motion.button
                    key={monkey.id}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMonkey(monkey)}
                    className={`p-8 rounded-2xl border-4 transition-all shadow-xl ${
                      selectedMonkey.id === monkey.id
                        ? `border-yellow-500 bg-gradient-to-br ${monkey.gradient} shadow-2xl`
                        : 'border-gray-300 bg-white hover:border-yellow-300'
                    }`}
                  >
                    {/* Monkey emoji */}
                    <div className="text-7xl mb-3">{monkey.emoji}</div>
                    
                    {/* Monkey name */}
                    <div className={`text-base font-bold ${
                      selectedMonkey.id === monkey.id ? 'text-white' : 'text-gray-700'
                    }`}>
                      {monkey.name}
                    </div>

                    {/* Selected indicator */}
                    {selectedMonkey.id === monkey.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-2"
                      >
                        <div className="bg-white text-yellow-600 px-3 py-1 rounded-full text-xs font-bold">
                          ✓ Selected
                        </div>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Glossy start button - centered */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="w-full py-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white text-3xl font-black rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <span className="relative z-10">
                Let's Code! 🍌
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};