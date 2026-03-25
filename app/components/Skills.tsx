import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Code, Database, Palette, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  maxLevel: number;
  xp: number;
  maxXp: number;
  icon: string;
}

const skillCategories = {
  Frontend: {
    icon: Code,
    color: 'var(--neon-blue)',
    skills: [
      { name: 'React', level: 9, maxLevel: 10, xp: 4500, maxXp: 5000, icon: '⚛️' },
      { name: 'TypeScript', level: 8, maxLevel: 10, xp: 3800, maxXp: 5000, icon: '📘' },
      { name: 'Tailwind CSS', level: 9, maxLevel: 10, xp: 4200, maxXp: 5000, icon: '🎨' },
      { name: 'Next.js', level: 7, maxLevel: 10, xp: 3200, maxXp: 5000, icon: '▲' },
    ],
  },
  Backend: {
    icon: Database,
    color: 'var(--neon-purple)',
    skills: [
      { name: 'Node.js', level: 8, maxLevel: 10, xp: 3900, maxXp: 5000, icon: '🟢' },
      { name: 'Python', level: 7, maxLevel: 10, xp: 3500, maxXp: 5000, icon: '🐍' },
      { name: 'PostgreSQL', level: 7, maxLevel: 10, xp: 3300, maxXp: 5000, icon: '🐘' },
      { name: 'GraphQL', level: 6, maxLevel: 10, xp: 2800, maxXp: 5000, icon: '◇' },
    ],
  },
  'UI/UX': {
    icon: Palette,
    color: 'var(--neon-pink)',
    skills: [
      { name: 'Figma', level: 9, maxLevel: 10, xp: 4600, maxXp: 5000, icon: '🎯' },
      { name: 'User Research', level: 7, maxLevel: 10, xp: 3400, maxXp: 5000, icon: '🔍' },
      { name: 'Prototyping', level: 8, maxLevel: 10, xp: 3800, maxXp: 5000, icon: '📱' },
      { name: 'Wireframing', level: 8, maxLevel: 10, xp: 3900, maxXp: 5000, icon: '✏️' },
    ],
  },
  'Graphic Design': {
    icon: Layers,
    color: 'var(--neon-cyan)',
    skills: [
      { name: 'Adobe Illustrator', level: 8, maxLevel: 10, xp: 4000, maxXp: 5000, icon: '🎨' },
      { name: 'Adobe Photoshop', level: 7, maxLevel: 10, xp: 3600, maxXp: 5000, icon: '🖼️' },
      { name: 'Brand Identity', level: 8, maxLevel: 10, xp: 3700, maxXp: 5000, icon: '🏷️' },
      { name: 'Motion Graphics', level: 6, maxLevel: 10, xp: 2900, maxXp: 5000, icon: '🎬' },
    ],
  },
};

function SkillNode({ skill, delay }: { skill: Skill; delay: number }) {
  const percentage = (skill.xp / skill.maxXp) * 100;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      className="glass-panel rounded-lg p-4 border border-gray-700 hover:border-[var(--neon-blue)] transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{skill.icon}</div>
          <div>
            <div className="text-white font-bold">{skill.name}</div>
            <div className="text-gray-400 text-sm">
              Level {skill.level} / {skill.maxLevel}
            </div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center text-white text-xs font-bold">
          {skill.level}
        </div>
      </div>

      {/* XP Bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>XP</span>
          <span>
            {skill.xp} / {skill.maxXp}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: delay + 0.3, duration: 1 }}
            className="h-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full"
          />
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center gap-1">
        {[...Array(skill.maxLevel)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded ${
              i < skill.level
                ? 'bg-[var(--neon-cyan)]'
                : 'bg-gray-800'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const navigate = useNavigate();

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

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
          Skill Tree
        </h1>
        <p className="text-gray-400">
          Master your abilities across multiple domains
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="max-w-7xl mx-auto space-y-8">
        {Object.entries(skillCategories).map(([category, data], catIndex) => {
          const Icon = data.icon;
          return (
            <motion.div
              key={category}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: catIndex * 0.2 }}
              className="glass-panel rounded-xl p-6 border-2"
              style={{ borderColor: data.color }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${data.color}, var(--neon-purple))`,
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{category}</h2>
                  <div className="text-gray-400 text-sm">
                    {data.skills.length} skills unlocked
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.skills.map((skill, skillIndex) => (
                  <SkillNode
                    key={skill.name}
                    skill={skill}
                    delay={catIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Total Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-7xl mx-auto mt-8 glass-panel rounded-xl p-6 border border-[var(--neon-cyan)]"
      >
        <h3 className="text-xl font-bold text-white mb-4">Overall Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--neon-blue)] mb-1">
              16
            </div>
            <div className="text-gray-400 text-sm">Total Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--neon-purple)] mb-1">
              121
            </div>
            <div className="text-gray-400 text-sm">Skill Points</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--neon-pink)] mb-1">
              7.6
            </div>
            <div className="text-gray-400 text-sm">Average Level</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
