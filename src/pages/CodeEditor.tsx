import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Lightbulb, Home } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const CodeEditorScreen = () => {
  const { currentPlayer } = useGameStore();
  
  const [code, setCode] = useState('// Type your code here!\nconsole.log("Hello!");');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      let result = '';
      const customConsole = {
        log: (...args: any[]) => {
          result += args.join(' ') + '\n';
        }
      };
      
      // eslint-disable-next-line no-eval
      eval(`(function(console) { ${code} })`)(customConsole);
      
      setOutput(result || '✅ Code ran successfully!');
    } catch (error) {
      setOutput(`❌ Oops! ${(error as Error).message}`);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-monkey-dark">
              🐵 Level 1: Say Hello!
            </h1>
            <p className="text-lg text-gray-600">
              Playing as: {currentPlayer?.name} {currentPlayer?.monkey === 'happy' ? '🐵' : '😎'}
            </p>
          </div>
          
          <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl">
            <Home size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="card"
        >
          <div className="flex items-center mb-4">
            <Lightbulb className="text-banana-dark mr-2" size={32} />
            <h2 className="text-2xl font-bold text-monkey-dark">Your Mission</h2>
          </div>
          
          <p className="text-lg mb-4">
            Make the computer say "Hello!" 
          </p>
          
          <div className="bg-banana-light p-4 rounded-lg mb-4">
            <p className="font-bold mb-2">💡 Hint:</p>
            <p>Use <code className="bg-white px-2 py-1 rounded">console.log()</code></p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <p className="font-bold mb-2">🎯 Goal:</p>
            <p>Output should show: <code className="bg-white px-2 py-1 rounded">Hello!</code></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="card"
        >
          <h2 className="text-2xl font-bold text-monkey-dark mb-4">Code Editor</h2>
          
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-banana"
            spellCheck={false}
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={runCode}
            className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
          >
            <Play size={20} />
            Run Code 🚀
          </motion.button>

          {output && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-gray-900 text-green-400 rounded-lg font-mono text-sm"
            >
              <div className="font-bold mb-2">📺 Output:</div>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};