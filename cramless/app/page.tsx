'use client'
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';


interface Task {
  id: string;
  title: string;
  dueDate: string;
  estimatedTime: string;
  priority: 'High' | 'Medium' | 'Low';
  icon: string;
}

const SyllabusScanner: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Read Chapter 1-3: Introduction to AI',
      dueDate: 'Jan 15, 2026',
      estimatedTime: '2 hours',
      priority: 'Medium',
      icon: '📖'
    },
    {
      id: '2',
      title: 'Essay 1: Ethics in Technology (Draft)',
      dueDate: 'Jan 22, 2026',
      estimatedTime: '5 hours',
      priority: 'High',
      icon: '✍️'
    },
    {
      id: '3',
      title: 'Midterm Exam: Chapters 1-5',
      dueDate: 'Feb 5, 2026',
      estimatedTime: '90 minutes',
      priority: 'High',
      icon: '🧪'
    }
  ]);




  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');

        :root {
          --primary-black: #0a0a0a;
          --soft-white: #f8f8f8;
          --accent-gold: #d4af37;
          --text-gray: #666;
          --border-color: #e0e0e0;
          --success-green: #2d5f3f;
        }

        body {
          font-family: 'DM Sans', sans-serif;
        }

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #0a0a0a 0%, #2d2d2d 100%);
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .spinner {
          animation: spin 1s linear infinite;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full bg-[var(--primary-black)] text-white z-50 border-b border-white/10">
        <div className="px-16 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
          <div className="font-display text-2xl font-black tracking-wide">
            SYLLABUS.AI
          </div>

          <nav className="hidden md:flex gap-10 items-center">
            <a href="#home" className="text-sm font-medium hover:opacity-70 transition-opacity">Home</a>
            <a href="#features" className="text-sm font-medium hover:opacity-70 transition-opacity">Features</a>
            <a href="#pricing" className="text-sm font-medium hover:opacity-70 transition-opacity">Pricing</a>
            <a href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</a>
          </nav>

          <div className="flex gap-6 items-center">
            <button className="hover:opacity-70 transition-opacity">🔍</button>
            <button className="hover:opacity-70 transition-opacity">👤</button>
            <button className="hover:opacity-70 transition-opacity">📅</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-16 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-7xl font-black leading-tight mb-6 tracking-tight">
              TRANSFORM SYLLABI INTO ACTION
            </h1>
            <p className="text-[var(--text-gray)] text-lg leading-relaxed mb-10 max-w-lg">
              Upload your course syllabus and let AI automatically break it down into organized,
              calendar-ready tasks. Never miss a deadline again.
            </p>
            <button
              onClick={() => document.getElementById('fileInput')?.click()}
              className="bg-[var(--primary-black)] text-white px-12 py-5 rounded-full font-semibold 
                         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
            >
              Upload Syllabus →
            </button>

            {/* Stats */}
            <div className="flex gap-12 mt-12">
              {[
                { number: '500+', label: 'Students' },
                { number: '2,500+', label: 'Tasks Created' },
                { number: '98%', label: 'Accuracy Rate' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <h3 className="font-display text-5xl font-bold mb-1">{stat.number}</h3>
                  <p className="text-[var(--text-gray)] text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // onDrop={handleDrop}
            //onDragOver={handleDragOver}
            className="bg-white border-4 border-dashed border-[var(--border-color)] rounded-3xl p-12 
                       text-center hover:border-[var(--accent-gold)] hover:-translate-y-2 hover:shadow-2xl 
                       transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/5 to-[var(--success-green)]/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="text-7xl mb-6">📄</div>
              <h3 className="font-display text-3xl mb-3">Drop Your Syllabus</h3>
              <p className="text-[var(--text-gray)] mb-6">PDF, DOCX, or image files supported</p>

              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".pdf,.docx,.doc,.png,.jpg,.jpeg"
              //  onChange={handleFileInput}
              />
              <label
                htmlFor="fileInput"
                className="inline-block bg-white text-[var(--primary-black)] border-2 border-[var(--primary-black)] 
                           px-10 py-4 rounded-full font-semibold cursor-pointer hover:bg-[var(--primary-black)] 
                           hover:text-white transition-all duration-300"
              >
                Choose File
              </label>

              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-8"
                  >
                    <div className="w-12 h-12 border-4 border-black/10 border-l-[var(--accent-gold)] rounded-full spinner mx-auto mb-4" />
                    <p className="text-[var(--text-gray)]">Analyzing syllabus with AI...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-16 py-16 max-w-[1600px] mx-auto">
        <div className="bg-white rounded-[40px] p-16 shadow-xl">
          <h2 className="font-display text-5xl font-black text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Analysis',
                description: 'Advanced AI reads your syllabus and identifies assignments, exams, readings, and important dates with precision.'
              },
              {
                icon: '📊',
                title: 'Smart Task Breakdown',
                description: 'Automatically organizes everything into actionable tasks with deadlines, priorities, and estimated time requirements.'
              },
              {
                icon: '📅',
                title: 'Calendar Integration',
                description: 'One-click export to Google Calendar, Outlook, or Apple Calendar. Sync across all your devices instantly.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[var(--soft-white)] p-8 rounded-2xl transition-transform duration-300"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h4 className="font-display text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-[var(--text-gray)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasks Preview */}
      <section className="gradient-bg text-white py-16 px-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-5xl font-black text-center mb-12">Your Tasks, Organized</h2>

          <div className="space-y-4">
            {tasks.map((task, idx) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 
                           flex justify-between items-center transition-all duration-300 hover:bg-white/15"
              >
                <div>
                  <h5 className="text-lg font-semibold mb-2">
                    {task.icon} {task.title}
                  </h5>
                  <div className="flex gap-6 text-sm opacity-80">
                    <span>📅 Due: {task.dueDate}</span>
                    <span>⏱️ Est. {task.estimatedTime}</span>
                    <span>🎯 Priority: {task.priority}</span>
                  </div>
                </div>


              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 px-16 bg-white">
        <h3 className="text-center text-sm text-[var(--text-gray)] tracking-[3px] uppercase mb-8">
          Trusted By Students At
        </h3>
        <div className="flex justify-center gap-16 flex-wrap items-center">
          {['STANFORD', 'MIT', 'HARVARD', 'BERKELEY', 'YALE'].map((partner) => (
            <div
              key={partner}
              className="font-display text-3xl font-bold opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SyllabusScanner;