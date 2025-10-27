import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { User, Plus } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onNewUser: () => void;
}

export const Login = ({ onLogin, onNewUser }: LoginProps) => {
  const { players, setCurrentPlayer } = useGameStore();

  const handleSelectPlayer = (playerId: string) => {
    const player = players.find(p => p.id === playerId);
    if (player) {
      setCurrentPlayer(player);
      onLogin();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFD54F, #FF9800)',
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
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
          border: '6px solid #FFD700'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🐵</div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #FF9800, #FFD54F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            Welcome Back!
          </h1>
          <p style={{ fontSize: '20px', color: '#666' }}>
            Choose your monkey to continue! 🍌
          </p>
        </div>

        {players.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#5D4037',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <User size={28} />
              Your Monkeys:
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: players.length === 1 ? '1fr' : 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              {players.map((player) => (
                <motion.button
                  key={player.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectPlayer(player.id)}
                  style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #4CAF50, #388E3C)',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)',
                    textAlign: 'left',
                    color: 'white'
                  }}
                >
                  <div style={{ fontSize: '60px', marginBottom: '10px' }}>
                    {player.ageGroup === 'baby' ? '🐒' : player.ageGroup === 'big' ? '🐵' : '🦍'}
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {player.name}
                  </div>
                  <div style={{ fontSize: '16px', opacity: 0.9 }}>
                    ⭐ {player.totalStars || 0} Stars
                    <br />
                    💎 {player.diamonds || 0} Diamonds
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNewUser}
          style={{
            width: '100%',
            padding: '25px',
            background: 'linear-gradient(135deg, #2196F3, #1976D2)',
            border: 'none',
            borderRadius: '20px',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(33, 150, 243, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}
        >
          <Plus size={32} />
          Create New Monkey!
        </motion.button>
      </motion.div>
    </div>
  );
};