import { motion } from 'framer-motion';

interface AgeSelectionProps {
  onAgeSelect: (ageGroup: 'baby' | 'big' | 'teen') => void;
}

export const AgeSelection = ({ onAgeSelect }: AgeSelectionProps) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          background: 'white',
          borderRadius: '30px',
          padding: '60px',
          maxWidth: '1200px',
          width: '100%',
          boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
          border: '6px solid #FFD54F'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎉</div>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #FF9800, #FFD54F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            How Old Are You?
          </h1>
          <p style={{ fontSize: '24px', color: '#666', marginTop: '10px' }}>
            Pick your age group to start learning!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {/* Baby Monkey */}
          <motion.button
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAgeSelect('baby')}
            style={{
              background: 'linear-gradient(135deg, #FFE082, #FFD54F)',
              borderRadius: '25px',
              padding: '40px 20px',
              border: '4px solid #FFA726',
              boxShadow: '0 10px 30px rgba(255, 152, 0, 0.3)',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🐒</div>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#E65100', marginBottom: '15px' }}>
              Baby Monkey
            </h3>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '10px 20px',
              marginBottom: '15px',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#FF6F00'
            }}>
              3-7 years old
            </div>
            <div style={{ textAlign: 'left', fontSize: '16px', color: '#5D4037', lineHeight: '1.8' }}>
              ✨ Numbers & Counting<br/>
              🎨 Coloring Fun<br/>
              🧩 Puzzles<br/>
              ✋ Finger Math
            </div>
          </motion.button>

          {/* Big Monkey */}
          <motion.button
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAgeSelect('big')}
            style={{
              background: 'linear-gradient(135deg, #66BB6A, #43A047)',
              borderRadius: '25px',
              padding: '40px 20px',
              border: '4px solid #388E3C',
              boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🐵</div>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '15px' }}>
              Big Monkey
            </h3>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '10px 20px',
              marginBottom: '15px',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#2E7D32'
            }}>
              8-15 years old
            </div>
            <div style={{ textAlign: 'left', fontSize: '16px', color: 'white', lineHeight: '1.8' }}>
              💻 HTML Basics<br/>
              🎨 CSS Styling<br/>
              ⚡ JavaScript Fun<br/>
              🏆 Code Challenges
            </div>
          </motion.button>

          {/* Teen Gorilla */}
          <motion.button
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAgeSelect('teen')}
            style={{
              background: 'linear-gradient(135deg, #5C6BC0, #3949AB)',
              borderRadius: '25px',
              padding: '40px 20px',
              border: '4px solid #283593',
              boxShadow: '0 10px 30px rgba(63, 81, 181, 0.3)',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🦍</div>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '15px' }}>
              Wise Gorilla
            </h3>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '10px 20px',
              marginBottom: '15px',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1A237E'
            }}>
              16+ years old
            </div>
            <div style={{ textAlign: 'left', fontSize: '16px', color: 'white', lineHeight: '1.8' }}>
              🐍 Python Power<br/>
              📊 SAT Math Prep<br/>
              🧠 Algorithms<br/>
              🚀 Real Projects
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};