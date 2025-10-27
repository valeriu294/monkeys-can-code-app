import { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { AgeSelection } from './pages/AgeSelection';
import { ProfileSelection } from './pages/ProfileSelection';
import { BabyLevelSelect } from './pages/BabyMonkey/BabyLevelSelect';
import { Level1_FingerCounting } from './pages/BabyMonkey/Level1_FingerCounting';
import { useGameStore } from './store/gameStore';

type Screen = 
  | 'landing' 
  | 'login' 
  | 'age' 
  | 'profile' 
  | 'babyLevels' 
  | 'babyLevel1'
  | 'bigLevels';

type AgeGroup = 'baby' | 'big' | 'teen';

function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('big');
  
  const { players, currentPlayer, completeBabyLevel } = useGameStore();

  // Check if there are existing users on mount
  useEffect(() => {
    if (players.length > 0 && screen === 'landing') {
      // Skip landing, go straight to login
      setTimeout(() => setScreen('login'), 2000);
    }
  }, [players.length]);

  // Handle age selection
  const handleAgeSelect = (age: AgeGroup) => {
    setSelectedAge(age);
    setScreen('profile');
  };

  // Handle profile completion
  const handleProfileComplete = () => {
    if (selectedAge === 'baby') {
      setScreen('babyLevels');
    } else if (selectedAge === 'big') {
      setScreen('bigLevels');
    }
  };

  // Handle baby level selection
  const handleBabyLevelSelect = (levelId: number) => {
    if (levelId === 1) {
      setScreen('babyLevel1');
    }
    // Add more levels later
  };

  // Handle level completion
  const handleLevel1Complete = (stars: number) => {
    completeBabyLevel(1, stars);
    
    // Show diamond reward if earned
    const completedCount = (currentPlayer?.progress.babyProgress?.completedLevels.length || 0) + 1;
    
    setTimeout(() => {
      if (completedCount === 3) {
        alert('🎉 You earned your first DIAMOND! 💎');
      }
      setScreen('babyLevels');
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Landing Page */}
      {screen === 'landing' && (
        <LandingPage onEnter={() => {
          if (players.length > 0) {
            setScreen('login');
          } else {
            setScreen('age');
          }
        }} />
      )}

      {/* Login (returning users) */}
      {screen === 'login' && (
        <Login 
          onLogin={() => {
            // Route based on their age group
            if (currentPlayer?.ageGroup === 'baby') {
              setScreen('babyLevels');
            } else if (currentPlayer?.ageGroup === 'big') {
              setScreen('bigLevels');
            }
          }}
          onNewUser={() => setScreen('age')}
        />
      )}

      {/* Age Selection */}
      {screen === 'age' && (
        <AgeSelection onAgeSelect={handleAgeSelect} />
      )}

      {/* Profile Selection */}
      {screen === 'profile' && (
        <ProfileSelection 
          onComplete={handleProfileComplete}
          ageGroup={selectedAge}
        />
      )}

      {/* Baby Monkey Level Selection */}
      {screen === 'babyLevels' && (
        <BabyLevelSelect 
          onLevelSelect={handleBabyLevelSelect}
          completedLevels={currentPlayer?.progress.babyProgress?.completedLevels || []}
        />
      )}

      {/* Baby Level 1 */}
      {screen === 'babyLevel1' && (
        <Level1_FingerCounting 
          onComplete={handleLevel1Complete}
          onExit={() => setScreen('babyLevels')}
        />
      )}

      {/* Big Monkey Levels (placeholder) */}
      {screen === 'bigLevels' && (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontSize: '48px',
          fontWeight: 'bold',
          padding: '40px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '120px', marginBottom: '30px' }}>🐵</div>
          <div>Big Monkey Coding Levels</div>
          <div style={{ fontSize: '32px', marginTop: '20px' }}>
            Coming Tomorrow! 🍌
          </div>
          
          <button
            onClick={() => setScreen('login')}
            style={{
              marginTop: '40px',
              padding: '20px 40px',
              background: 'white',
              color: '#43A047',
              border: 'none',
              borderRadius: '20px',
              fontSize: '24px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Back to Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default App;