import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Home, RotateCcw } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        {/* Game Over Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <div className="text-8xl mb-4">💀</div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-[var(--neon-pink)] to-[var(--neon-purple)] bg-clip-text text-transparent">
            GAME OVER
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-panel rounded-xl p-8 border-2 border-red-500 mb-8"
        >
          <div className="text-red-500 text-2xl font-bold mb-2">
            ERROR 404
          </div>
          <div className="text-white text-xl mb-4">
            Page Not Found
          </div>
          <p className="text-gray-400">
            Looks like you wandered into uncharted territory. This level doesn't exist!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate('/')}
            className="glass-panel px-8 py-4 rounded-lg border-2 border-[var(--neon-blue)] text-white font-bold flex items-center justify-center gap-3 hover:bg-[var(--neon-blue)]/20 transition-all glow-blue"
          >
            <Home className="w-5 h-5" />
            <span>Main Menu</span>
          </button>
          <button
            onClick={() => navigate(-1)}
            className="glass-panel px-8 py-4 rounded-lg border-2 border-[var(--neon-purple)] text-white font-bold flex items-center justify-center gap-3 hover:bg-[var(--neon-purple)]/20 transition-all glow-purple"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Continue Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-gray-500 text-sm"
        >
          Tip: Use the navigation to explore available levels
        </motion.div>
      </div>
    </div>
  );
}
