import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import {
  ArrowLeft,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com',
    color: 'var(--neon-purple)',
    power: 'Code Power',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com',
    color: 'var(--neon-blue)',
    power: 'Network Power',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com',
    color: 'var(--neon-cyan)',
    power: 'Voice Power',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:alex@example.com',
    color: 'var(--neon-pink)',
    power: 'Direct Power',
  },
];

export function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen p-8 md:pl-72 pb-24 md:pb-8 relative">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--neon-pink)] rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-12 relative z-10"
      >
        <button
          onClick={() => navigate('/levels')}
          className="glass-panel px-4 py-2 rounded-lg border border-gray-700 hover:border-[var(--neon-blue)] transition-colors mb-6 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Level Selection</span>
        </button>

        <div className="text-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="text-6xl mb-4"
          >
            👾
          </motion.div>

          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-purple)] to-[var(--neon-blue)] bg-clip-text text-transparent">
            Final Boss: Collaboration
          </h1>
          <p className="text-gray-400 text-lg">
            Ready to team up? Send your quest request!
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Contact Form - Mission Panel */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel rounded-xl p-8 border-2 border-[var(--neon-blue)]"
        >
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="text-[var(--neon-blue)]" />
            Mission Control Panel
          </h2>
          <p className="text-gray-400 mb-6">
            Fill out the form to initiate collaboration
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-white mb-2 block text-sm">
                Player Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full glass-panel px-4 py-3 rounded-lg border border-gray-700 focus:border-[var(--neon-blue)] focus:outline-none text-white transition-colors"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white mb-2 block text-sm">
                Communication Channel
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full glass-panel px-4 py-3 rounded-lg border border-gray-700 focus:border-[var(--neon-purple)] focus:outline-none text-white transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white mb-2 block text-sm">
                Quest Details
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full glass-panel px-4 py-3 rounded-lg border border-gray-700 focus:border-[var(--neon-pink)] focus:outline-none text-white transition-colors resize-none"
                placeholder="Describe your project or collaboration idea..."
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-3 border-2 transition-all"
              style={{
                background: submitted
                  ? 'linear-gradient(135deg, #10B981, #059669)'
                  : 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                borderColor: submitted ? '#10B981' : 'var(--neon-blue)',
                boxShadow: submitted
                  ? '0 0 30px rgba(16, 185, 129, 0.5)'
                  : '0 0 30px var(--glow-blue)',
              }}
            >
              {submitted ? (
                <>
                  <span className="text-2xl">✓</span>
                  <span>Quest Received!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Launch Mission</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links - Power-Ups */}
        <div className="space-y-6">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-panel rounded-xl p-8 border-2 border-[var(--neon-purple)]"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Social Power-Ups
            </h2>
            <p className="text-gray-400 mb-6">
              Connect through different channels
            </p>

            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 glass-panel p-4 rounded-lg border-2 transition-all cursor-pointer group"
                    style={{ borderColor: social.color }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{
                        background: social.color,
                        boxShadow: `0 0 20px ${social.color}`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold">
                        {social.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {social.power}
                      </div>
                    </div>
                    <div
                      className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: social.color }}
                    >
                      →
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="glass-panel rounded-xl p-8 border-2 border-[var(--neon-pink)]"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Response Time</span>
                <span className="text-[var(--neon-cyan)] font-bold">
                  &lt; 24 hours
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Availability</span>
                <span className="text-green-500 font-bold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Time Zone</span>
                <span className="text-[var(--neon-purple)] font-bold">
                  UTC-5
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Victory Message */}
      {submitted && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm"
        >
          <div className="glass-panel rounded-xl p-12 border-2 border-green-500 text-center max-w-md">
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
              🏆
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Victory!
            </h2>
            <p className="text-gray-400">
              Your quest has been received! I'll respond to your mission
              shortly.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
