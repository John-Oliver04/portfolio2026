import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, GraduationCap, Briefcase, Code, CheckCircle } from 'lucide-react';

interface Milestone {
  id: number;
  year: string;
  type: 'Education' | 'Work' | 'Freelance' | 'Achievement';
  title: string;
  organization: string;
  description: string;
  icon: any;
  completed: boolean;
}

const milestones: Milestone[] = [
  {
    id: 1,
    year: '2018',
    type: 'Education',
    title: 'Computer Science Degree',
    organization: 'Tech University',
    description: 'Graduated with honors in Computer Science, specializing in web development and UI/UX design.',
    icon: GraduationCap,
    completed: true,
  },
  {
    id: 2,
    year: '2019',
    type: 'Work',
    title: 'Junior Frontend Developer',
    organization: 'StartupTech Inc.',
    description: 'Built responsive web applications using React and modern JavaScript frameworks.',
    icon: Code,
    completed: true,
  },
  {
    id: 3,
    year: '2020',
    type: 'Freelance',
    title: 'Freelance Web Designer',
    organization: 'Self-Employed',
    description: 'Designed and developed websites for 15+ clients across various industries.',
    icon: Briefcase,
    completed: true,
  },
  {
    id: 4,
    year: '2021',
    type: 'Work',
    title: 'Senior Frontend Developer',
    organization: 'Digital Solutions Co.',
    description: 'Led frontend development team and architected scalable React applications.',
    icon: Code,
    completed: true,
  },
  {
    id: 5,
    year: '2022',
    type: 'Achievement',
    title: 'UX Design Certification',
    organization: 'Design Institute',
    description: 'Completed advanced UX design certification focusing on user research and prototyping.',
    icon: GraduationCap,
    completed: true,
  },
  {
    id: 6,
    year: '2023',
    type: 'Work',
    title: 'Full-Stack Developer',
    organization: 'Innovation Labs',
    description: 'Developing end-to-end solutions with modern tech stack including Node.js and GraphQL.',
    icon: Code,
    completed: true,
  },
  {
    id: 7,
    year: '2024',
    type: 'Freelance',
    title: 'Creative Director',
    organization: 'Freelance Projects',
    description: 'Managing design and development projects, mentoring junior developers.',
    icon: Briefcase,
    completed: true,
  },
];

const typeColors = {
  Education: 'var(--neon-cyan)',
  Work: 'var(--neon-blue)',
  Freelance: 'var(--neon-purple)',
  Achievement: 'var(--neon-pink)',
};

export function Experience() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 md:pl-72 pb-24 md:pb-8">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-12"
      >
        <button
          onClick={() => navigate('/levels')}
          className="glass-panel px-4 py-2 rounded-lg border border-gray-700 hover:border-[var(--neon-blue)] transition-colors mb-6 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Level Selection</span>
        </button>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] bg-clip-text text-transparent">
          Journey Path
        </h1>
        <p className="text-gray-400">Milestones achieved along the way</p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-pink)] transform -translate-x-1/2 hidden md:block" />

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            const color = typeColors[milestone.type];

            return (
              <motion.div
                key={milestone.id}
                initial={{ 
                  x: isLeft ? -100 : 100, 
                  opacity: 0 
                }}
                animate={{ 
                  x: 0, 
                  opacity: 1 
                }}
                transition={{ 
                  delay: index * 0.2, 
                  type: 'spring' 
                }}
                className={`flex items-center gap-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="flex-1 glass-panel rounded-xl p-6 border-2 relative"
                  style={{ borderColor: color }}
                >
                  {/* Year Badge */}
                  <div
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      background: color,
                      boxShadow: `0 0 20px ${color}`,
                    }}
                  >
                    {milestone.year}
                  </div>

                  {/* Type */}
                  <div
                    className="text-xs font-bold mb-2 uppercase tracking-wider"
                    style={{ color }}
                  >
                    {milestone.type}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {milestone.title}
                  </h3>

                  {/* Organization */}
                  <div className="text-sm text-gray-400 mb-3">
                    {milestone.organization}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {milestone.description}
                  </p>

                  {/* Completion Status */}
                  {milestone.completed && (
                    <div className="flex items-center gap-2 text-green-500 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Checkpoint Reached</span>
                    </div>
                  )}

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity rounded-xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${color}20, transparent)`,
                    }}
                  />
                </motion.div>

                {/* Center Icon */}
                <div className="relative hidden md:block">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                    className="w-16 h-16 rounded-full flex items-center justify-center border-4 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${color}, var(--neon-purple))`,
                      borderColor: color,
                      boxShadow: `0 0 30px ${color}`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>

        {/* End Marker */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: milestones.length * 0.2 }}
          className="mt-12 flex justify-center"
        >
          <div className="glass-panel rounded-full px-6 py-3 border-2 border-[var(--neon-pink)] flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--neon-pink)] animate-pulse" />
            <span className="text-white font-bold">Current Position</span>
          </div>
        </motion.div>
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="glass-panel rounded-lg p-4 border border-[var(--neon-cyan)] text-center">
          <div className="text-2xl font-bold text-[var(--neon-cyan)] mb-1">
            {milestones.filter((m) => m.type === 'Education').length}
          </div>
          <div className="text-gray-400 text-sm">Education</div>
        </div>
        <div className="glass-panel rounded-lg p-4 border border-[var(--neon-blue)] text-center">
          <div className="text-2xl font-bold text-[var(--neon-blue)] mb-1">
            {milestones.filter((m) => m.type === 'Work').length}
          </div>
          <div className="text-gray-400 text-sm">Work</div>
        </div>
        <div className="glass-panel rounded-lg p-4 border border-[var(--neon-purple)] text-center">
          <div className="text-2xl font-bold text-[var(--neon-purple)] mb-1">
            {milestones.filter((m) => m.type === 'Freelance').length}
          </div>
          <div className="text-gray-400 text-sm">Freelance</div>
        </div>
        <div className="glass-panel rounded-lg p-4 border border-[var(--neon-pink)] text-center">
          <div className="text-2xl font-bold text-[var(--neon-pink)] mb-1">
            {milestones.filter((m) => m.type === 'Achievement').length}
          </div>
          <div className="text-gray-400 text-sm">Achievements</div>
        </div>
      </motion.div>
    </div>
  );
}
