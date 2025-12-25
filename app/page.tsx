'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles] = useState(() => 
    [...Array(20)].map(() => ({
      x1: Math.random() * 1920,
      x2: Math.random() * 1920,
      y1: Math.random() * 1080,
      y2: Math.random() * 1080,
      duration: Math.random() * 10 + 10,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            animate={{
              x: [particle.x1, particle.x2],
              y: [particle.y1, particle.y2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Ruhullah Najafi
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-300 mb-8 font-mono"
            >
              <span className="text-gray-400">{">"}</span> SAP Consultant{" "}
              <span className="text-gray-400">|</span> Engineer{" "}
              <span className="text-gray-400">|</span> Problem Solver
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Bridging the gap between complex systems and elegant solutions.
              Passionate about mathematics, science, and the endless possibilities of technology.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-shadow"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Journey
            </motion.button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl font-bold mb-8 text-blue-300">
              <span className="text-gray-500 font-mono text-3xl">01.</span> About Me
            </h2>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a passionate engineer with a deep love for mathematics and science. 
                My journey has taken me from the Technical University of Hamburg (TUHH) 
                where I studied <span className="text-blue-400 font-semibold">Informatik-Ingenieurwesen</span>, 
                to the prestigious halls of <span className="text-purple-400 font-semibold">UC Berkeley</span> where 
                I spent a transformative year during my Master&apos;s studies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, I work as an <span className="text-blue-400 font-semibold">SAP Consultant</span>, 
                helping organizations optimize their business processes through innovative technology solutions. 
                I thrive on solving complex problems and finding elegant solutions that make a real impact.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl ml-auto"
          >
            <h2 className="text-5xl font-bold mb-8 text-purple-300 text-right">
              <span className="text-gray-500 font-mono text-3xl">02.</span> Education
            </h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, x: -10 }}
                className="bg-gradient-to-r from-purple-900/30 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300">University of California, Berkeley</h3>
                    <p className="text-blue-300 font-mono">Master&apos;s Exchange Program</p>
                  </div>
                  <span className="text-gray-400 font-mono">1 Year</span>
                </div>
                <p className="text-gray-300">
                  An incredible year of research and learning at one of the world&apos;s leading institutions,
                  expanding my horizons in computer science and engineering.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: -10 }}
                className="bg-gradient-to-r from-blue-900/30 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300">Technical University of Hamburg (TUHH)</h3>
                    <p className="text-purple-300 font-mono">Informatik-Ingenieurwesen</p>
                  </div>
                  <span className="text-gray-400 font-mono">Hamburg, Germany</span>
                </div>
                <p className="text-gray-300">
                  Comprehensive engineering education combining computer science with engineering principles,
                  laying the foundation for my technical expertise.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl font-bold mb-8 text-green-300">
              <span className="text-gray-500 font-mono text-3xl">03.</span> Experience
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-900/30 via-slate-900/50 to-blue-900/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-green-300 mb-4">SAP Consultant</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Currently helping organizations leverage SAP solutions to transform their business processes.
                I specialize in bridging the gap between technical capabilities and business requirements,
                ensuring that technology serves people and not the other way around.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['SAP', 'Enterprise Solutions', 'Process Optimization', 'Digital Transformation'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Interests Section */}
        <section className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-8 text-pink-300 text-center">
              <span className="text-gray-500 font-mono text-3xl">04.</span> Passions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 text-center"
              >
                <div className="text-6xl mb-4">∑</div>
                <h3 className="text-2xl font-bold text-pink-300 mb-3">Mathematics</h3>
                <p className="text-gray-300">
                  The universal language that unlocks the secrets of the universe.
                  From elegant proofs to complex algorithms, math is my playground.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center"
              >
                <div className="text-6xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Science</h3>
                <p className="text-gray-300">
                  Exploring the fundamental principles that govern our world.
                  Science fuels my curiosity and drives my quest for knowledge.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <p className="text-gray-400 font-mono">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-gray-500 mt-2">
            © 2025 Ruhullah Najafi
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
