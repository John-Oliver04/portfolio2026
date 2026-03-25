import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Star } from 'lucide-react';
import { useState } from 'react';

interface Design {
  id: number;
  title: string;
  category: 'Poster' | 'Logo' | 'UI Mockup' | 'Branding';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  image: string;
  description: string;
}

const designs: Design[] = [
  {
    id: 1,
    title: 'Cosmic App UI',
    category: 'UI Mockup',
    rarity: 'Legendary',
    image: '🌌',
    description: 'Futuristic space-themed mobile app interface',
  },
  {
    id: 2,
    title: 'Tech Startup Logo',
    category: 'Logo',
    rarity: 'Epic',
    image: '⚡',
    description: 'Modern minimalist logo for tech company',
  },
  {
    id: 3,
    title: 'Music Festival Poster',
    category: 'Poster',
    rarity: 'Rare',
    image: '🎵',
    description: 'Vibrant event poster with bold typography',
  },
  {
    id: 4,
    title: 'Coffee Brand Identity',
    category: 'Branding',
    rarity: 'Epic',
    image: '☕',
    description: 'Complete brand package for artisan coffee shop',
  },
  {
    id: 5,
    title: 'E-Learning Platform',
    category: 'UI Mockup',
    rarity: 'Legendary',
    image: '📚',
    description: 'Comprehensive dashboard for online learning',
  },
  {
    id: 6,
    title: 'Minimal Portfolio',
    category: 'UI Mockup',
    rarity: 'Rare',
    image: '💼',
    description: 'Clean and elegant portfolio website design',
  },
  {
    id: 7,
    title: 'Gaming Logo',
    category: 'Logo',
    rarity: 'Epic',
    image: '🎮',
    description: 'Bold esports team branding',
  },
  {
    id: 8,
    title: 'Event Flyer',
    category: 'Poster',
    rarity: 'Common',
    image: '🎉',
    description: 'Promotional material for community event',
  },
  {
    id: 9,
    title: 'Fitness App Branding',
    category: 'Branding',
    rarity: 'Rare',
    image: '💪',
    description: 'Complete brand identity for fitness startup',
  },
];

const rarityConfig = {
  Common: {
    color: '#9CA3AF',
    glow: 'rgba(156, 163, 175, 0.5)',
    stars: 1,
  },
  Rare: {
    color: 'var(--neon-blue)',
    glow: 'var(--glow-blue)',
    stars: 2,
  },
  Epic: {
    color: 'var(--neon-purple)',
    glow: 'var(--glow-purple)',
    stars: 3,
  },
  Legendary: {
    color: 'var(--neon-pink)',
    glow: 'var(--glow-pink)',
    stars: 4,
  },
};

export function Designs() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('All');

  const filteredDesigns = filter === 'All' 
    ? designs 
    : designs.filter((d) => d.category === filter || d.rarity === filter);

  const categories = ['All', 'Poster', 'Logo', 'UI Mockup', 'Branding'];
  const rarities = ['Common', 'Rare', 'Epic', 'Legendary'];

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

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] bg-clip-text text-transparent">
          Design Gallery
        </h1>
        <p className="text-gray-400">Rare artifacts from creative quests</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex flex-wrap gap-4"
      >
        {/* Category Filters */}
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === cat
                  ? 'bg-[var(--neon-blue)] text-white border-2 border-[var(--neon-blue)] glow-blue'
                  : 'glass-panel text-gray-400 border border-gray-700 hover:border-[var(--neon-blue)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rarity Filters */}
        <div className="flex gap-2">
          {rarities.map((rarity) => {
            const config = rarityConfig[rarity as keyof typeof rarityConfig];
            return (
              <button
                key={rarity}
                onClick={() => setFilter(rarity)}
                className={`px-4 py-2 rounded-lg text-sm flex items-center gap-1 transition-all ${
                  filter === rarity
                    ? 'text-white border-2'
                    : 'glass-panel text-gray-400 border border-gray-700'
                }`}
                style={
                  filter === rarity
                    ? {
                        background: config.color,
                        borderColor: config.color,
                        boxShadow: `0 0 20px ${config.glow}`,
                      }
                    : {}
                }
              >
                {[...Array(config.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3"
                    fill={filter === rarity ? 'white' : 'none'}
                  />
                ))}
                <span>{rarity}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Designs Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDesigns.map((design, index) => {
          const config = rarityConfig[design.rarity];
          return (
            <motion.div
              key={design.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-xl overflow-hidden border-2 cursor-pointer group relative"
              style={{ borderColor: config.color }}
            >
              {/* Rarity Badge */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10 flex items-center gap-1"
                style={{
                  background: config.color,
                  boxShadow: `0 0 20px ${config.glow}`,
                }}
              >
                {[...Array(config.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3" fill="white" />
                ))}
                <span>{design.rarity}</span>
              </div>

              {/* Image */}
              <div
                className="aspect-square flex items-center justify-center text-8xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${config.color}20, transparent)`,
                }}
              >
                {design.image}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at center, ${config.glow}, transparent)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {design.title}
                  </h3>
                </div>

                <div className="text-xs text-gray-400 mb-3">
                  {design.category}
                </div>

                <p className="text-sm text-gray-400">{design.description}</p>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {Object.entries(rarityConfig).map(([rarity, config]) => {
          const count = designs.filter((d) => d.rarity === rarity).length;
          return (
            <div
              key={rarity}
              className="glass-panel rounded-lg p-4 border-2 text-center"
              style={{ borderColor: config.color }}
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(config.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{ color: config.color }}
                    fill={config.color}
                  />
                ))}
              </div>
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: config.color }}
              >
                {count}
              </div>
              <div className="text-gray-400 text-sm">{rarity}</div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
