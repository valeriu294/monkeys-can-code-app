import { motion } from 'framer-motion';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    // Full screen container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-200 to-orange-300 flex items-center justify-center p-4">
      
      {/* Main content card - centered, glossy effect */}
      <motion.div
        // Animation on load: fade in and scale up
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-2xl w-full"
      >
        {/* Glossy card with blur effect */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border-4 border-yellow-400 relative overflow-hidden">
          
          {/* Decorative gradient overlay for glossy effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            
            {/* 
              🖼️ IMAGE PLACEHOLDER 1: Main Logo/Hero Image
              Replace this div with an <img> tag
              Example: <img src="/logo.png" alt="Monkeys Logo" className="w-64 h-64 mx-auto mb-8" />
            */}
            <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl border-8 border-white">
              <span className="text-9xl">🐵</span>
              {/* 
                👆 CHANGE THIS EMOJI to your image:
                <img src="/path/to/your/monkey-logo.png" alt="Logo" className="w-48 h-48" />
              */}
            </div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent"
            >
              Monkeys Can Code!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-gray-700 mb-12 font-semibold"
            >
              Learn to code while having fun! 🍌
            </motion.p>

            {/* Fun message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-10 p-6 bg-yellow-100/80 rounded-2xl border-2 border-yellow-300 backdrop-blur-sm"
            >
              <p className="text-xl text-gray-800 font-medium">
                Do you like coding <span className="text-3xl">💻</span> and bananas <span className="text-3xl">🍌</span>?
              </p>
            </motion.div>

            {/* Enter button with glossy effect */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter}
              className="relative px-12 py-5 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-white text-2xl font-bold rounded-full shadow-2xl overflow-hidden group"
            >
              {/* Glossy shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                🍌 Please Enter! 🐵
              </span>
            </motion.button>

            {/* Small decorative text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-sm text-gray-500"
            >
              Join the monkey troop and start your coding adventure! 🌴
            </motion.p>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse delay-75"></div>
      </motion.div>
    </div>
  );
};