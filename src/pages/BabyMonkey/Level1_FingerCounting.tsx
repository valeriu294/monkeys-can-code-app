import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Lightbulb } from 'lucide-react';

interface Level1Props {
  onComplete: (stars: number) => void;
  onExit: () => void;
}

export const Level1_FingerCounting = ({ onComplete, onExit }: Level1Props) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Generate random wrong answers
  const generateOptions = (correct: number) => {
    const options = [correct];
    while (options.length < 4) {
      const random = Math.floor(Math.random() * 10) + 1;
      if (!options.includes(random)) {
        options.push(random);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const [options] = useState(generateOptions(currentNumber));

  // Render finger emojis
  const renderFingers = (count: number) => {
    return '👆'.repeat(count);
  };

  const handleAnswer = (answer: number) => {
    setSelectedAnswer(answer);
    setAttempts(attempts + 1);

    if (answer === currentNumber) {
      setShowSuccess(true);
      
      // Calculate stars (3 stars if first try, 2 if second, 1 if more)
      const stars = attempts === 0 ? 3 : attempts === 1 ? 2 : 1;
      
      setTimeout(() => {
        onComplete(stars);
      }, 3000);
    } else {
      // Wrong answer - shake animation
      setTimeout(() => {
        setSelectedAnswer(null);
      }, 800);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFE082 0%, #FFD54F 100%)',
      padding: '20px'
    }}>
      
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <div>
          <h1 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#E65100'
          }}>
            ✋ Count the Fingers!
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#5D4037'
          }}>
            Level 1 - Let's Learn to Count! 🐒
          </p>
        </div>

        <button
          onClick={onExit}
          style={{
            padding: '15px',
            background: 'white',
            border: '4px solid #FFD700',
            borderRadius: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          <Home size={32} color="#E65100" />
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '30px',
        padding: '50px',
        border: '8px solid #FFD700',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        
        {!showSuccess ? (
          <>
            {/* Instruction */}
            <div style={{
              background: 'linear-gradient(135deg, #4FC3F7 0%, #03A9F4 100%)',
              borderRadius: '20px',
              padding: '30px',
              marginBottom: '40px',
              textAlign: 'center',
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
              boxShadow: '0 8px 20px rgba(3, 169, 244, 0.3)'
            }}>
              <Lightbulb size={40} style={{ marginBottom: '10px' }} />
              <div>How many fingers do you see?</div>
            </div>

            {/* Fingers Display */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.8 }}
              style={{
                fontSize: '120px',
                textAlign: 'center',
                marginBottom: '50px',
                padding: '40px',
                background: 'linear-gradient(135deg, #FFF9C4 0%, #FFE082 100%)',
                borderRadius: '25px',
                border: '6px solid #FFD700'
              }}
            >
              {renderFingers(currentNumber)}
            </motion.div>

            {/* Answer Options */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '20px'
            }}>
              {options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    selectedAnswer === option && option !== currentNumber
                      ? { x: [-10, 10, -10, 10, 0] }
                      : {}
                  }
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  style={{
                    padding: '40px',
                    fontSize: '72px',
                    fontWeight: 'bold',
                    background: selectedAnswer === option
                      ? option === currentNumber
                        ? 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)'
                        : 'linear-gradient(135deg, #FF5252 0%, #D32F2F 100%)'
                      : 'linear-gradient(135deg, #FFD54F 0%, #FFB300 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: selectedAnswer ? 'not-allowed' : 'pointer',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s'
                  }}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {/* Hint */}
            <div style={{
              textAlign: 'center',
              fontSize: '20px',
              color: '#666',
              marginTop: '20px'
            }}>
              💡 Count each finger carefully! Take your time! 🐒
            </div>
          </>
        ) : (
          /* Success Animation */
          <BananaRain onComplete={() => {}} />
        )}
      </div>
    </div>
  );
};

// Success animation component
const BananaRain = ({ onComplete }: { onComplete: () => void }) => {
  const bananas = Array.from({ length: 20 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Falling bananas */}
      {bananas.map((i) => (
        <motion.div
          key={i}
          initial={{ 
            y: -100, 
            x: Math.random() * window.innerWidth,
            rotate: 0
          }}
          animate={{ 
            y: window.innerHeight + 100,
            rotate: 360
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            fontSize: '60px'
          }}
        >
          🍌
        </motion.div>
      ))}

      {/* Success message */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        style={{
          background: 'white',
          padding: '60px',
          borderRadius: '30px',
          textAlign: 'center',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
          zIndex: 10,
          border: '8px solid #FFD700'
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ fontSize: '120px', marginBottom: '20px' }}
        >
          🎉
        </motion.div>

        <h1 style={{
          fontSize: '56px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px'
        }}>
          Well Done, Monkey!
        </h1>

        <p style={{
          fontSize: '32px',
          color: '#666',
          marginBottom: '30px'
        }}>
          You are very smart! 🐒✨
        </p>

        <div style={{
          fontSize: '80px'
        }}>
          ⭐⭐⭐
        </div>

        <p style={{
          fontSize: '24px',
          color: '#999',
          marginTop: '20px'
        }}>
          Keep going! More fun levels ahead! 🍌
        </p>
      </motion.div>
    </motion.div>
  );
};