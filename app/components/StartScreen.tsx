import { motion } from 'motion/react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export function StartScreen() {
  const navigate = useNavigate();
  const [soundOn, setSoundOn] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [null, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mx-auto mb-8"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] p-1 glow-purple">
             <div className="w-full h-full rounded-full bg-[var(--space-dark)] flex items-center justify-center">
      <span className="text-5xl">🚀</span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
            Player: Level 27
          </div>
          <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
            John Oliver Virola
          </h1>
          <div className="text-2xl text-[var(--neon-cyan)] mb-2">
            Web Developer | Graphic Enthusiast
          </div>
          <div className="text-gray-500 mb-12">
            Ready to explore the portfolio universe?
          </div>
        </motion.div>

        {/* Start Button */}
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/levels')}
          className="glass-panel px-12 py-4 rounded-full text-white font-bold text-xl border-2 border-[var(--neon-blue)] glow-blue transition-all hover:bg-[var(--neon-blue)]/20"
        >
          <div className="flex items-center gap-3">
            <Play className="w-6 h-6" fill="currentColor" />
            <span>Start Game</span>
          </div>
        </motion.button>

        {/* Sound Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => setSoundOn(!soundOn)}
          className="mt-8 glass-panel p-3 rounded-full border border-gray-700 hover:border-[var(--neon-purple)] transition-colors"
        >
          {soundOn ? (
            <Volume2 className="w-5 h-5 text-[var(--neon-purple)]" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-500" />
          )}
        </motion.button>

        {/* Version */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-gray-600 text-sm"
        >
          Portfolio v2.0.24 | Built with React & Tailwind
        </motion.div>
      </div>
    </div>
  );
}
