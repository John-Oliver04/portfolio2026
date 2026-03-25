import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function SoundToggle() {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setSoundOn(!soundOn)}
      className="fixed bottom-6 right-6 z-50 glass-panel p-4 rounded-full border-2 transition-all"
      style={{
        borderColor: soundOn ? 'var(--neon-purple)' : '#374151',
        boxShadow: soundOn ? '0 0 20px var(--glow-purple)' : 'none',
      }}
      title={soundOn ? 'Sound On' : 'Sound Off'}
    >
      {soundOn ? (
        <Volume2 className="w-6 h-6 text-[var(--neon-purple)]" />
      ) : (
        <VolumeX className="w-6 h-6 text-gray-500" />
      )}
    </motion.button>
  );
}
