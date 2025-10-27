import { motion } from 'framer-motion';
import { Banana, Sparkles } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

export const Welcome = ({ onStart }: WelcomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="card max-w-2xl w-full text-center relative overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          {Array(5).fill(0).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Banana 
                size={40} 
                className="text-banana opacity-20" 
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles size={48} className="text-banana-dark" />
          </motion.div>

          <h1 className="text-6xl font-bold text-monkey-dark mb-4">
            🐵 Monkeys Can Code! 🍌
          </h1>

          <p className="text-2xl text-gray-700 mb-8">
            Learn to code while having fun!
          </p>

          <p className="text-lg text-gray-600 mb-12">
            Join the monkey troop and swing through coding challenges! 🌴
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="btn-primary text-xl"
          >
            🍌 Start Your Adventure!
          </motion.button>

          <p className="text-sm text-gray-500 mt-8">
            Did you know? Monkeys are super smart... just like YOU! 🧠
          </p>
        </div>
      </div>
    </motion.div>
  );
};