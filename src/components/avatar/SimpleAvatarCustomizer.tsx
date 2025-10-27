import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Crown } from 'lucide-react';

interface SimpleAvatarCustomizerProps {
  ageGroup: 'baby' | 'big' | 'teen';
  onSave: (avatar: any) => void;
  onClose: () => void;
  diamonds: number;
}

export const SimpleAvatarCustomizer = ({ 
  ageGroup, 
  onSave, 
  onClose, 
  diamonds 
}: SimpleAvatarCustomizerProps) => {
  
  const [selectedColor, setSelectedColor] = useState('#FFD700');
  const [hasSparkles, setHasSparkles] = useState(false);
  const [accessory, setAccessory] = useState('none');
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  // Color options
  const colors = [
    { name: 'Gold', value: '#FFD700' },
    { name: 'Pink', value: '#FF69B4' },
    { name: 'Blue', value: '#4FC3F7' },
    { name: 'Green', value: '#66BB6A' },
    { name: 'Purple', value: '#AB47BC' },
    { name: 'Orange', value: '#FF9800' },
  ];

  // Accessories
  const accessories = [
    { id: 'none', emoji: '🚫', name: 'None' },
    { id: 'bow', emoji: '🎀', name: 'Bow' },
    { id: 'glasses', emoji: '👓', name: 'Glasses' },
    { id: 'hat', emoji: '🎩', name: 'Hat' },
    { id: 'crown', emoji: '👑', name: 'Crown', cost: 1 },
  ];

  const handleSave = () => {
    onSave({
      color: selectedColor,
      sparkles: hasSparkles,
      accessory: accessory
    });
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          background: 'white',
          borderRadius: '30px',
          padding: '40px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#FF5252',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        >
          <X size={28} color="white" />
        </button>

        {/* Title */}
        <h1 style={{
          textAlign: 'center',
          fontSize: '48px',
          marginBottom: '10px',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🎨 Customize Your Avatar!
        </h1>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '20px',
          color: '#666'
        }}>
          💎 You have <strong>{diamonds}</strong> diamonds
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px'
        }}>
          
          {/* LEFT: Preview */}
          <div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Preview
            </h2>

            <div style={{
              background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)',
              borderRadius: '25px',
              padding: '60px',
              textAlign: 'center',
              border: '6px solid ' + selectedColor,
              position: 'relative',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              
              {/* Sparkles */}
              {hasSparkles && (
                <>
                  <Sparkles 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      color: '#FFD700'
                    }} 
                    size={40} 
                  />
                  <Sparkles 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      color: '#FFD700'
                    }} 
                    size={40} 
                  />
                  <Sparkles 
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      color: '#FFD700'
                    }} 
                    size={40} 
                  />
                </>
              )}

              {/* Avatar */}
              <motion.div
                animate={{
                  rotateY: rotation,
                  scale: scale
                }}
                transition={{ type: 'spring' }}
                style={{
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                <div style={{
                  fontSize: '200px',
                  filter: `drop-shadow(0 10px 20px ${selectedColor}50)`
                }}>
                  {ageGroup === 'baby' ? '🐒' : ageGroup === 'big' ? '🐵' : '🦍'}
                </div>

                {/* Accessory overlay */}
                {accessory === 'bow' && (
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '10px',
                    fontSize: '80px'
                  }}>
                    🎀
                  </div>
                )}

                {accessory === 'glasses' && (
                  <div style={{
                    position: 'absolute',
                    top: '70px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '60px'
                  }}>
                    👓
                  </div>
                )}

                {accessory === 'hat' && (
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '100px'
                  }}>
                    🎩
                  </div>
                )}

                {accessory === 'crown' && (
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '120px'
                  }}>
                    👑
                  </div>
                )}
              </motion.div>
            </div>

            {/* 3D Controls */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <div style={{ marginBottom: '15px' }}>
                <button
                  onClick={() => setRotation(rotation - 90)}
                  style={{
                    padding: '12px 24px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    marginRight: '10px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  ↶ Spin Left
                </button>
                <button
                  onClick={() => setRotation(rotation + 90)}
                  style={{
                    padding: '12px 24px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  Spin Right ↷
                </button>
              </div>

              <div>
                <button
                  onClick={() => setScale(Math.max(0.5, scale - 0.2))}
                  style={{
                    padding: '12px 24px',
                    background: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    marginRight: '10px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  🔍- Zoom Out
                </button>
                <button
                  onClick={() => setScale(Math.min(1.5, scale + 0.2))}
                  style={{
                    padding: '12px 24px',
                    background: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  🔍+ Zoom In
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Options */}
          <div style={{ overflowY: 'auto', maxHeight: '500px' }}>
            
            {/* Colors */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>
                🎨 Pick a Color
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px'
              }}>
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    style={{
                      padding: '20px',
                      background: color.value,
                      border: selectedColor === color.value ? '4px solid #000' : '2px solid #ddd',
                      borderRadius: '15px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: 'white',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sparkles */}
            <div style={{ marginBottom: '30px' }}>
              <button
                onClick={() => setHasSparkles(!hasSparkles)}
                style={{
                  width: '100%',
                  padding: '20px',
                  background: hasSparkles ? 'linear-gradient(135deg, #FFD700, #FFA500)' : '#E0E0E0',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: hasSparkles ? 'white' : '#666'
                }}
              >
                {hasSparkles ? '✨ Sparkles ON!' : 'Add Sparkles?'}
              </button>
            </div>

            {/* Accessories */}
            <div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>
                ✨ Accessories
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px'
              }}>
                {accessories.map((acc) => {
                  const canAfford = !acc.cost || diamonds >= acc.cost;
                  return (
                    <button
                      key={acc.id}
                      onClick={() => canAfford && setAccessory(acc.id)}
                      disabled={!canAfford}
                      style={{
                        padding: '15px',
                        background: accessory === acc.id ? '#4CAF50' : 'white',
                        border: '3px solid ' + (accessory === acc.id ? '#2E7D32' : '#ddd'),
                        borderRadius: '15px',
                        cursor: canAfford ? 'pointer' : 'not-allowed',
                        opacity: canAfford ? 1 : 0.5,
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: accessory === acc.id ? 'white' : '#666'
                      }}
                    >
                      <div style={{ fontSize: '40px', marginBottom: '5px' }}>
                        {acc.emoji}
                      </div>
                      {acc.name}
                      {acc.cost && (
                        <div style={{ fontSize: '12px', marginTop: '5px' }}>
                          💎 {acc.cost}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            style={{
              padding: '20px 60px',
              background: 'linear-gradient(135deg, #4CAF50, #388E3C)',
              border: 'none',
              borderRadius: '25px',
              color: 'white',
              fontSize: '28px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            💾 Save Avatar!
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};