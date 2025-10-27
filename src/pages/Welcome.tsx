import { motion } from 'framer-motion';
import { Banana, Sparkles, Rocket } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

export const Welcome = ({ onStart }: WelcomeProps) => {
  return (
    // Yellow gradient background
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-100 to-yellow-300 flex items-center justify-center p-4">
      
      {/* Centered card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        {/* Main glossy card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border-4 border-yellow-400 relative overflow-hidden">
          
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Floating bananas background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {Array(8).fill(0).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <Banana 
                  size={50} 
                  className="text-yellow-400 opacity-20" 
                />
              </motion.div>
            ))}
          </div>

          {/* Content - centered */}
          <div className="relative z-10 text-center">
            
            {/* Rotating sparkle icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg">
                <Sparkles size={56} className="text-white" />
              </div>
            </motion.div>

            {/* 
              🖼️ IMAGE PLACEHOLDER 2: Welcome Screen Logo
              Add your custom image here:
              <img src="/welcome-monkey.png" alt="Welcome" className="w-48 mx-auto mb-6" />
            */}

            {/* Main heading */}
            <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              🐵 Monkeys Can Code! 🍌
            </h1>

            {/* Subtitle with glossy background */}
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl shadow-lg mb-8 border-2 border-yellow-300">
              <p className="text-3xl text-gray-800 font-bold">
                Learn to code while having fun!
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed">
              Join the monkey troop and swing through coding challenges! From beginner to expert, we've got bananas for everyone! 🌴
            </p>

            {/* Glossy start button */}
            <motion.button
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onStart}
              className="relative px-14 py-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white text-3xl font-black rounded-full shadow-2xl overflow-hidden group"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Rocket size={32} className="animate-bounce" />
                Start Your Adventure!
                <Banana size={32} className="animate-bounce delay-75" />
              </span>
            </motion.button>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 p-5 bg-yellow-50/80 rounded-xl border-2 border-yellow-200"
            >
              <p className="text-sm text-gray-600 font-medium">
                💡 <span className="font-bold">Did you know?</span> Monkeys are super smart... just like YOU! 🧠
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};