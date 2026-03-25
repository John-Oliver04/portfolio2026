import { User, Zap, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function PlayerStats() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { label: 'Levels', path: '/levels', icon: '🎮' },
    { label: 'Skills', path: '/skills', icon: '⚡' },
    { label: 'Projects', path: '/projects', icon: '💼' },
    { label: 'Designs', path: '/designs', icon: '🎨' },
  ];

  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block fixed top-6 left-6 z-50 glass-panel rounded-xl p-4 min-w-[250px] border-[var(--neon-blue)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold">John Oliver Virola</div>
            <div className="text-[var(--neon-cyan)] text-sm">Web Dev & Graphic</div>
          </div>
        </div>

        <div className="space-y-3">
          {/* Level */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[var(--neon-cyan)]" />
              <span className="text-white text-sm">Level</span>
            </div>
            <span className="text-[var(--neon-cyan)] font-bold">27</span>
          </div>

          {/* XP */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[var(--neon-purple)]" />
                <span className="text-white text-sm">XP</span>
              </div>
              <span className="text-[var(--neon-purple)] text-sm">9,861.75 / 852,055,200</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] rounded-full"
                style={{ width: '83%' }}
              />
            </div>
          </div>

          {/* Creativity HP */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[var(--neon-pink)]" />
                <span className="text-white text-sm">Creativity</span>
              </div>
              <span className="text-[var(--neon-pink)] text-sm">95 / 100</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-blue)] rounded-full"
                style={{ width: '95%' }}
              />
            </div>
          </div>

          {/* Class */}
          <div className="pt-2 border-t border-gray-700">
            <div className="text-xs text-gray-400">Class</div>
            <div className="text-white">Web Developer & Designer</div>
          </div>
        </div>
      </div>

      {/* Mobile version - Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-[var(--neon-blue)]">
        {/* Stats bar */}
        <div
          className="px-4 py-2 cursor-pointer flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-white text-sm font-bold">John</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-[var(--neon-cyan)]" />
              <span className="text-[var(--neon-cyan)] text-xs font-bold">27</span>
            </div>
            <div className="text-gray-400 text-xs">{isExpanded ? '▲' : '▼'}</div>
          </div>
        </div>

        {/* Expanded stats */}
        {isExpanded && (
          <div className="px-4 pb-3 border-t border-gray-700/50 pt-2">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-gray-400">XP</span>
              <span className="text-[var(--neon-purple)]">12,450 / 15,000</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] rounded-full" style={{ width: '83%' }} />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Creativity</span>
              <span className="text-[var(--neon-pink)]">95 / 100</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-blue)] rounded-full" style={{ width: '95%' }} />
            </div>
          </div>
        )}

        {/* Bottom nav */}
        <div className="flex justify-around py-2 border-t border-gray-700/50">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 px-3 py-1 text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}