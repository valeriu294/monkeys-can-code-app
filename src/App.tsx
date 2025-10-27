import { useState } from 'react';
import { Welcome } from './pages/Welcome';
import { ProfileSelection } from './pages/ProfileSelection';
import { CodeEditorScreen } from './pages/CodeEditor';  // ← LINE 4

function App() {
  const [screen, setScreen] = useState<'welcome' | 'profile' | 'editor'>('welcome');

  return (
    <div className="min-h-screen">
      {screen === 'welcome' && (
        <Welcome onStart={() => setScreen('profile')} />
      )}
      
      {screen === 'profile' && (
        <ProfileSelection onComplete={() => setScreen('editor')} />
      )}
      
      {screen === 'editor' && (
        <CodeEditorScreen />
      )}
    </div>
  );
}

export default App;