import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ExternalLink, Github, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  xpEarned: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Epic';
  status: 'Completed' | 'In Progress';
  image: string;
  demoUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Built a full-stack e-commerce platform with real-time inventory management and payment integration.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    xpEarned: 1500,
    difficulty: 'Epic',
    status: 'Completed',
    image: '🛒',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered suggestions and priority ranking.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'Tailwind'],
    xpEarned: 1200,
    difficulty: 'Hard',
    status: 'Completed',
    image: '🤖',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Generator',
    description: 'SaaS platform for developers to create and customize their portfolio websites.',
    techStack: ['React', 'Firebase', 'Material-UI'],
    xpEarned: 1000,
    difficulty: 'Hard',
    status: 'Completed',
    image: '💼',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with interactive maps and detailed forecasts.',
    techStack: ['Vue.js', 'Weather API', 'Chart.js'],
    xpEarned: 800,
    difficulty: 'Medium',
    status: 'Completed',
    image: '🌤️',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Mobile-responsive fitness tracking app with workout plans and progress analytics.',
    techStack: ['React Native', 'Firebase', 'Redux'],
    xpEarned: 900,
    difficulty: 'Medium',
    status: 'In Progress',
    image: '💪',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking social media metrics across multiple platforms.',
    techStack: ['Angular', 'D3.js', 'Express'],
    xpEarned: 1100,
    difficulty: 'Hard',
    status: 'Completed',
    image: '📊',
    demoUrl: '#',
    codeUrl: '#',
  },
];

const difficultyColors = {
  Easy: 'var(--neon-cyan)',
  Medium: 'var(--neon-blue)',
  Hard: 'var(--neon-purple)',
  Epic: 'var(--neon-pink)',
};

export function Projects() {
  const navigate = useNavigate();
  const totalXP = projects.reduce((sum, p) => sum + p.xpEarned, 0);

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
          Quest Log
        </h1>
        <p className="text-gray-400">Epic projects completed on the journey</p>

        {/* Total XP */}
        <div className="mt-4 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full border border-[var(--neon-cyan)]">
          <Zap className="w-4 h-4 text-[var(--neon-cyan)]" />
          <span className="text-white">Total XP Earned:</span>
          <span className="text-[var(--neon-cyan)] font-bold">{totalXP}</span>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ y: -8 }}
            className="glass-panel rounded-xl overflow-hidden border-2 border-gray-700 hover:border-[var(--neon-blue)] transition-all cursor-pointer group"
          >
            {/* Header */}
            <div className="p-6 pb-4 relative">
              {/* Difficulty Badge */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{
                  background: difficultyColors[project.difficulty],
                  boxShadow: `0 0 20px ${difficultyColors[project.difficulty]}`,
                }}
              >
                {project.difficulty}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4">{project.image}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800/50 rounded text-xs text-[var(--neon-cyan)] border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* XP Earned */}
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-[var(--neon-purple)]" />
                <span className="text-white text-sm">XP Earned:</span>
                <span className="text-[var(--neon-purple)] font-bold">
                  {project.xpEarned}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-green-500'
                      : 'bg-yellow-500 animate-pulse'
                  }`}
                />
                <span
                  className={`text-sm ${
                    project.status === 'Completed'
                      ? 'text-green-500'
                      : 'text-yellow-500'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  className="flex-1 glass-panel px-4 py-2 rounded-lg border border-[var(--neon-blue)] text-white text-sm flex items-center justify-center gap-2 hover:bg-[var(--neon-blue)]/20 transition-all"
                  onClick={(e) => e.preventDefault()}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
                <a
                  href={project.codeUrl}
                  className="flex-1 glass-panel px-4 py-2 rounded-lg border border-[var(--neon-purple)] text-white text-sm flex items-center justify-center gap-2 hover:bg-[var(--neon-purple)]/20 transition-all"
                  onClick={(e) => e.preventDefault()}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="glass-panel rounded-lg p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-[var(--neon-blue)] mb-1">
            {projects.length}
          </div>
          <div className="text-gray-400 text-sm">Total Quests</div>
        </div>
        <div className="glass-panel rounded-lg p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-[var(--neon-purple)] mb-1">
            {projects.filter((p) => p.status === 'Completed').length}
          </div>
          <div className="text-gray-400 text-sm">Completed</div>
        </div>
        <div className="glass-panel rounded-lg p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-[var(--neon-pink)] mb-1">
            {projects.filter((p) => p.difficulty === 'Epic' || p.difficulty === 'Hard').length}
          </div>
          <div className="text-gray-400 text-sm">Hard & Epic</div>
        </div>
        <div className="glass-panel rounded-lg p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-[var(--neon-cyan)] mb-1">
            {totalXP}
          </div>
          <div className="text-gray-400 text-sm">Total XP</div>
        </div>
      </motion.div>
    </div>
  );
}
