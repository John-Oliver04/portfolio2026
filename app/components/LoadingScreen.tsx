import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--space-dark)]"
    >
      <div className="text-center max-w-md px-8">
        {/* Logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-6xl mb-8"
        >
          🎮
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
          Initializing Game...
        </h1>
        <p className="text-gray-400 mb-8">Loading portfolio assets</p>

        {/* Progress Bar */}
        <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-[var(--neon-cyan)] text-sm font-bold">
          {progress}%
        </div>

        {/* Loading messages */}
        <motion.div
          key={Math.floor(progress / 25)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-500 text-sm"
        >
          {progress < 25 && '⚡ Loading player data...'}
          {progress >= 25 && progress < 50 && '🎨 Rendering UI elements...'}
          {progress >= 50 && progress < 75 && '🚀 Preparing game world...'}
          {progress >= 75 && '✨ Almost ready!'}
        </motion.div>
      </div>
    </motion.div>
  );
}
