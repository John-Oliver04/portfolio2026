import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import {
  Brain,
  Briefcase,
  Palette,
  ScrollText,
  Trophy,
  Mail,
  Lock,
  ArrowLeft,
} from 'lucide-react';

interface Level {
  id: number;
  title: string;
  description: string;
  icon: any;
  path: string;
  unlocked: boolean;
  completed: boolean;
  xp: number;
}

const levels: Level[] = [
  {
    id: 1,
    title: 'Skills',
    description: 'Master the skill tree',
    icon: Brain,
    path: '/skills',
    unlocked: true,
    completed: true,
    xp: 2500,
  },
  {
    id: 2,
    title: 'Projects',
    description: 'Complete epic quests',
    icon: Briefcase,
    path: '/projects',
    unlocked: true,
    completed: true,
    xp: 3500,
  },
  {
    id: 3,
    title: 'Designs',
    description: 'Unlock rare artifacts',
    icon: Palette,
    path: '/designs',
    unlocked: true,
    completed: false,
    xp: 2000,
  },
  {
    id: 4,
    title: 'Experience',
    description: 'Journey through time',
    icon: ScrollText,
    path: '/experience',
    unlocked: true,
    completed: false,
    xp: 1500,
  },
  {
    id: 5,
    title: 'Achievements',
    description: 'Collect all badges',
    icon: Trophy,
    path: '/achievements',
    unlocked: true,
    completed: false,
    xp: 1200,
  },
  {
    id: 6,
    title: 'Contact',
    description: 'Face the final boss',
    icon: Mail,
    path: '/contact',
    unlocked: true,
    completed: false,
    xp: 5000,
  },
];

export function LevelSelection() {
  const navigate = useNavigate();
  const totalXP = levels.reduce((sum, level) => sum + level.xp, 0);
  const earnedXP = levels
    .filter((l) => l.completed)
    .reduce((sum, level) => sum + level.xp, 0);

  return (
    <div className="min-h-screen p-8 md:pl-72 pb-24 md:pb-8 relative">
      {/* Back Button */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={() => navigate('/')}
        className="glass-panel px-4 py-2 rounded-lg border border-gray-700 hover:border-[var(--neon-blue)] transition-colors mb-8 flex items-center gap-2 text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Main Menu</span>
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent">
          Level Selection
        </h1>
        <p className="text-gray-400">Choose your destination</p>

        {/* Overall Progress */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm">Overall Progress</span>
            <span className="text-[var(--neon-cyan)] text-sm">
              {earnedXP} / {totalXP} XP
            </span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full transition-all duration-1000"
              style={{ width: `${(earnedXP / totalXP) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Level Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level, index) => {
          const Icon = level.icon;
          return (
            <motion.div
              key={level.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={level.unlocked ? { scale: 1.05, y: -5 } : {}}
              onClick={() => level.unlocked && navigate(level.path)}
              className={`glass-panel rounded-xl p-6 cursor-pointer transition-all relative overflow-hidden ${
                level.unlocked
                  ? 'border-[var(--neon-blue)] hover:glow-blue'
                  : 'border-gray-700 opacity-50'
              }`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-purple)]/10 opacity-0 hover:opacity-100 transition-opacity" />

              {/* Level Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center text-white text-sm font-bold">
                {level.id}
              </div>

              {/* Icon */}
              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    level.unlocked
                      ? 'bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)]'
                      : 'bg-gray-800'
                  }`}
                >
                  {level.unlocked ? (
                    <Icon className="w-8 h-8 text-white" />
                  ) : (
                    <Lock className="w-8 h-8 text-gray-600" />
                  )}
                </div>
                {level.completed && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-2">
                  {level.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {level.description}
                </p>

                {/* XP Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)]" />
                    <span className="text-[var(--neon-cyan)] text-sm">
                      {level.xp} XP
                    </span>
                  </div>
                  {level.completed && (
                    <span className="text-green-500 text-xs font-bold">
                      COMPLETED
                    </span>
                  )}
                </div>
              </div>

              {/* Locked overlay */}
              {!level.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl">
                  <div className="text-center">
                    <Lock className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <div className="text-gray-500 text-sm">Locked</div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-12 text-gray-500 text-sm"
      >
        💡 Tip: Click on any unlocked level to begin your quest
      </motion.div>
    </div>
  );
}
