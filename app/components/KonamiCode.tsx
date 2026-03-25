import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => [...prev, e.key].slice(-KONAMI_CODE.length));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (keys.join('') === KONAMI_CODE.join('')) {
      setShowSecret(true);
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        setShowSecret(false);
        setKeys([]);
      }, 5000);
    }
  }, [keys]);

  return (
    <AnimatePresence>
      {showSecret && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div className="glass-panel rounded-xl p-12 border-2 border-[var(--neon-pink)] text-center max-w-md">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-purple)] to-[var(--neon-blue)] bg-clip-text text-transparent">
              Secret Unlocked!
            </h2>
            <p className="text-gray-400 mb-4">
              You found the Konami Code easter egg!
            </p>
            <div className="text-[var(--neon-cyan)]">
              Achievement: Code Master +1000 XP
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
