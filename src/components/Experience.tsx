import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Terminal,
  Users2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tech' | 'leadership'>('all');

  const filteredExperiences = EXPERIENCE_LIST.filter(
    (exp) => filter === 'all' || exp.type === filter
  );

  return (
    <section id="experience" className="py-24 relative bg-neutral-50 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-black text-xs  mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Work & Leadership Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-full mt-3 mb-4" />
          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base">
            Hands-on technical instructional experience combined with institutional governance and team leadership.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 p-1.5 rounded-xl bg-neutral-100/80 border border-black/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.98] ${
                filter === 'all'
                  ? 'bg-black text-white font-semibold shadow-md shadow-black/30'
                  : 'text-neutral-600 hover:text-white hover:bg-neutral-200/60'
              }`}
            >
              All Records
            </button>
            <button
              onClick={() => setFilter('tech')}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.98] ${
                filter === 'tech'
                  ? 'bg-black text-white font-semibold shadow-md shadow-black/30'
                  : 'text-neutral-600 hover:text-white hover:bg-neutral-200/60'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical & Teaching</span>
            </button>
            <button
              onClick={() => setFilter('leadership')}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.98] ${
                filter === 'leadership'
                  ? 'bg-black text-white font-semibold shadow-md shadow-black/30'
                  : 'text-neutral-600 hover:text-white hover:bg-neutral-200/60'
              }`}
            >
              <Users2 className="w-3.5 h-3.5" />
              <span>Governance & Leadership</span>
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical central bar */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neutral-600 via-neutral-500/50 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            <AnimatePresence>
              {filteredExperiences.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 sm:gap-12`}
                  >
                    {/* Center Icon Indicator */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-white border-2 border-neutral-600 items-center justify-center text-black z-10 shadow-lg shadow-neutral-600/20">
                      {exp.type === 'tech' ? (
                        <Terminal className="w-4 h-4" />
                      ) : (
                        <Users2 className="w-4 h-4" />
                      )}
                    </div>

                    {/* Card container */}
                    <div className="w-full sm:w-[calc(50%-2rem)] p-6 sm:p-7 rounded-2xl bg-white/80 border border-black/10 hover:border-neutral-600/40 transition-all duration-300 shadow-xl group">
                      {/* Period Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs  text-black bg-neutral-600/10 px-2.5 py-1 rounded-md border border-neutral-600/20">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-xs text-neutral-600 flex items-center gap-1 ">
                          <MapPin className="w-3 h-3 text-neutral-600" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-bold text-black group-hover:text-black transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-neutral-600 mb-4">
                        {exp.organization}
                      </h4>

                      {/* Bullet points */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.description.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-black shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills/Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200">
                        {exp.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="text-[11px]  px-2.5 py-0.5 rounded-md bg-neutral-200 text-neutral-700 border border-neutral-300/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
