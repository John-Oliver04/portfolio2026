import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import {
  ArrowLeft,
  Trophy,
  Zap,
  Target,
  Award,
  Star,
  Flame,
  Code,
  Palette,
  Users,
  Clock,
  Heart,
  Sparkles,
} from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  rarity: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  dateUnlocked?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'First Website Built',
    description: 'Created and deployed your first website',
    icon: Code,
    unlocked: true,
    progress: 1,
    maxProgress: 1,
    rarity: 'Bronze',
    dateUnlocked: '2018-03-15',
  },
  {
    id: 2,
    title: '100+ Hours Coding',
    description: 'Logged over 100 hours of coding',
    icon: Clock,
    unlocked: true,
    progress: 100,
    maxProgress: 100,
    rarity: 'Silver',
    dateUnlocked: '2018-06-20',
  },
  {
    id: 3,
    title: 'Design Master',
    description: 'Completed 50 design projects',
    icon: Palette,
    unlocked: true,
    progress: 50,
    maxProgress: 50,
    rarity: 'Gold',
    dateUnlocked: '2020-11-08',
  },
  {
    id: 4,
    title: 'React Specialist',
    description: 'Built 20 React applications',
    icon: Zap,
    unlocked: true,
    progress: 20,
    maxProgress: 20,
    rarity: 'Gold',
    dateUnlocked: '2021-04-12',
  },
  {
    id: 5,
    title: 'Team Player',
    description: 'Collaborated on 10 team projects',
    icon: Users,
    unlocked: true,
    progress: 10,
    maxProgress: 10,
    rarity: 'Silver',
    dateUnlocked: '2021-09-30',
  },
  {
    id: 6,
    title: 'Night Owl',
    description: 'Coded for 24 hours straight',
    icon: Flame,
    unlocked: true,
    progress: 24,
    maxProgress: 24,
    rarity: 'Bronze',
    dateUnlocked: '2019-12-05',
  },
  {
    id: 7,
    title: 'Client Satisfaction',
    description: 'Received 5-star reviews from 25 clients',
    icon: Heart,
    unlocked: true,
    progress: 25,
    maxProgress: 25,
    rarity: 'Platinum',
    dateUnlocked: '2023-07-18',
  },
  {
    id: 8,
    title: 'Open Source Hero',
    description: 'Contributed to 15 open source projects',
    icon: Star,
    unlocked: true,
    progress: 15,
    maxProgress: 15,
    rarity: 'Gold',
    dateUnlocked: '2022-02-28',
  },
  {
    id: 9,
    title: 'Fast Learner',
    description: 'Mastered a new framework in 1 week',
    icon: Sparkles,
    unlocked: true,
    progress: 1,
    maxProgress: 1,
    rarity: 'Silver',
    dateUnlocked: '2020-05-14',
  },
  {
    id: 10,
    title: 'Portfolio Master',
    description: 'Complete all portfolio sections',
    icon: Trophy,
    unlocked: false,
    progress: 5,
    maxProgress: 6,
    rarity: 'Platinum',
  },
  {
    id: 11,
    title: 'Bug Destroyer',
    description: 'Fixed 100 bugs',
    icon: Target,
    unlocked: false,
    progress: 87,
    maxProgress: 100,
    rarity: 'Gold',
  },
  {
    id: 12,
    title: 'Legend',
    description: 'Unlock all achievements',
    icon: Award,
    unlocked: false,
    progress: 9,
    maxProgress: 12,
    rarity: 'Platinum',
  },
];

const rarityConfig = {
  Bronze: {
    color: '#CD7F32',
    glow: 'rgba(205, 127, 50, 0.5)',
  },
  Silver: {
    color: '#C0C0C0',
    glow: 'rgba(192, 192, 192, 0.5)',
  },
  Gold: {
    color: '#FFD700',
    glow: 'rgba(255, 215, 0, 0.5)',
  },
  Platinum: {
    color: 'var(--neon-cyan)',
    glow: 'var(--glow-blue)',
  },
};

export function Achievements() {
  const navigate = useNavigate();
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const completionRate = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="min-h-screen p-8 md:pl-72 pb-24 md:pb-8">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8"
      >
        <button
          onClick={() => navigate('/levels')}
          className="glass-panel px-4 py-2 rounded-lg border border-gray-700 hover:border-[var(--neon-blue)] transition-colors mb-6 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Level Selection</span>
        </button>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-cyan)] via-[#FFD700] to-[var(--neon-pink)] bg-clip-text text-transparent">
          Achievements
        </h1>
        <p className="text-gray-400">Badges earned on your journey</p>

        {/* Progress */}
        <div className="mt-6 max-w-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white">Collection Progress</span>
            <span className="text-[var(--neon-cyan)] font-bold">
              {unlockedCount} / {totalCount} ({completionRate}%)
            </span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--neon-cyan)] via-[#FFD700] to-[var(--neon-pink)] rounded-full transition-all duration-1000"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Achievement Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const config = rarityConfig[achievement.rarity];
          const progressPercent = (achievement.progress / achievement.maxProgress) * 100;

          return (
            <motion.div
              key={achievement.id}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: index * 0.05, type: 'spring' }}
              whileHover={achievement.unlocked ? { scale: 1.05, y: -5 } : {}}
              className={`glass-panel rounded-xl p-6 border-2 relative overflow-hidden ${
                achievement.unlocked
                  ? 'cursor-pointer'
                  : 'opacity-60 grayscale'
              }`}
              style={
                achievement.unlocked
                  ? { borderColor: config.color }
                  : { borderColor: '#374151' }
              }
            >
              {/* Glow effect */}
              {achievement.unlocked && (
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${config.glow}, transparent)`,
                  }}
                />
              )}

              {/* Icon */}
              <div className="relative mb-4 flex justify-center">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    achievement.unlocked ? '' : 'bg-gray-800'
                  }`}
                  style={
                    achievement.unlocked
                      ? {
                          background: config.color,
                          boxShadow: `0 0 30px ${config.glow}`,
                        }
                      : {}
                  }
                >
                  <Icon
                    className={`w-10 h-10 ${
                      achievement.unlocked ? 'text-white' : 'text-gray-600'
                    }`}
                  />
                </div>

                {/* Locked overlay */}
                {!achievement.unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-50">🔒</div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative text-center">
                {/* Rarity */}
                <div
                  className="text-xs font-bold mb-2 uppercase tracking-wider"
                  style={
                    achievement.unlocked
                      ? { color: config.color }
                      : { color: '#6B7280' }
                  }
                >
                  {achievement.rarity}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {achievement.description}
                </p>

                {/* Progress */}
                {achievement.unlocked ? (
                  <div className="text-green-500 text-sm font-bold flex items-center justify-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span>UNLOCKED</span>
                  </div>
                ) : (
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {achievement.progress} / {achievement.maxProgress}
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gray-600 to-gray-500 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Date unlocked */}
                {achievement.unlocked && achievement.dateUnlocked && (
                  <div className="text-xs text-gray-500 mt-3">
                    Unlocked: {new Date(achievement.dateUnlocked).toLocaleDateString()}
                  </div>
                )}
              </div>

              {/* Sparkle effect on unlocked */}
              {achievement.unlocked && (
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute top-2 right-2 text-yellow-400"
                >
                  ✨
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Rarity Summary */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {Object.entries(rarityConfig).map(([rarity, config]) => {
          const count = achievements.filter(
            (a) => a.rarity === rarity && a.unlocked
          ).length;
          const total = achievements.filter((a) => a.rarity === rarity).length;

          return (
            <div
              key={rarity}
              className="glass-panel rounded-lg p-4 border-2 text-center"
              style={{ borderColor: config.color }}
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: config.color }}
              >
                {count} / {total}
              </div>
              <div className="text-gray-400 text-sm">{rarity}</div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
