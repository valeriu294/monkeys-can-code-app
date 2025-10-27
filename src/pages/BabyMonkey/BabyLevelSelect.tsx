import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface BabyLevelSelectProps {
  onLevelSelect: (levelId: number) => void;
  completedLevels: number[];
}

export const BabyLevelSelect = ({ onLevelSelect, completedLevels }: BabyLevelSelectProps) => {
  
  const levels = [
    { id: 1, title: '🔢 Count Fingers', emoji: '✋', unlocked: true },
    { id: 2, title: '➕ Add Numbers', emoji: '🤲', unlocked: false },
    { id: 3, title: '🎨 Color Fun', emoji: '🖍️', unlocked: false },
    { id: 4, title: '🧩 Puzzles', emoji: '🧩', unlocked: false },
    { id: 5, title: '⭐ Star Challenge', emoji: '🌟', unlocked: false },
  ];

  const isUnlocked = (levelId: number) => {
    if (levelId === 1) return true;
    return completedLevels.includes(levelId - 1);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFE082, #FFD54F)',
      padding: '40px 20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ fontSize: '100px', marginBottom: '20px' }}>🐒</div>
        <h1 style={{ fontSize: '56px', fontWeight: 'bold', color: '#E65100' }}>
          Baby Monkey Fun! 🍌
        </h1>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px'
      }}>
        {levels.map((level) => {
          const unlocked = isUnlocked(level.id);
          const completed = completedLevels.includes(level.id);

          return (
            <motion.button
              key={level.id}
              whileHover={unlocked ? { scale: 1.05 } : {}}
              whileTap={unlocked ? { scale: 0.95 } : {}}
              onClick={() => unlocked && onLevelSelect(level.id)}
              disabled={!unlocked}
              style={{
                background: unlocked ? 'linear-gradient(135deg, #FF6B6B, #FF8E53)' : '#E0E0E0',
                borderRadius: '25px',
                padding: '30px',
                border: unlocked ? '6px solid white' : '6px solid #9E9E9E',
                boxShadow: unlocked ? '0 15px 35px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)',
                cursor: unlocked ? 'pointer' : 'not-allowed',
                opacity: unlocked ? 1 : 0.6,
                position: 'relative'
              }}
            >
              {completed && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: '#4CAF50',
                  color: 'white',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: 'bold'
                }}>
                  ✓
                </div>
              )}

              <div style={{ fontSize: '80px', marginBottom: '20px' }}>
                {level.emoji}
              </div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: unlocked ? '#5D4037' : '#757575',
                marginBottom: '12px'
              }}>
                {level.title}
              </h3>

              {unlocked && (
                <div style={{
                  marginTop: '20px',
                  background: 'white',
                  borderRadius: '15px',
                  padding: '12px 24px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#FF6B6B'
                }}>
                  {completed ? 'Play Again! 🎮' : 'Let\'s Go! 🚀'}
                </div>
              )}

              {!unlocked && (
                <div style={{
                  marginTop: '20px',
                  background: '#BDBDBD',
                  borderRadius: '15px',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#757575'
                }}>
                  🔒 Complete Level {level.id - 1}!
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};