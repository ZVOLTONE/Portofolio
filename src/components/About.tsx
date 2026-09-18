import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Award,
  Cpu,
  Users
} from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-black text-xs  mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            About Yudhistira
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-full mt-3 mb-4" />
          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base">
            Bridging complex algorithmic computation with real-world software engineering and collaborative leadership.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-black/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-black" />
                <span>The Engineering Philosophy</span>
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base mb-4">
                As a Computer Science undergraduate at <strong className="text-black font-medium">BINUS University</strong>, I have cultivated a dual focus: theoretical algorithmic precision and practical software reliability.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base mb-4">
                Serving as an <strong className="text-black font-medium">Assistant Software Laboratory Center</strong> instructor has sharpened my ability to diagnose code bottlenecks, author test cases, and communicate intricate paradigms to over hundreds of student developers.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Whether formulating optimized dynamic programming logic for national competitive programming contests (ICPC) or training AI agents for legal tech solutions, my passion lies in writing clean, scalable, and impactful code.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-neutral-100/60 border border-black/5">
                <div className="w-8 h-8 rounded-lg bg-black/20 text-white flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-black mb-1">Backend Rigor</h4>
                <p className="text-xs text-neutral-600">Scalable APIs, reliable architectures, and database modeling.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-100/60 border border-black/5">
                <div className="w-8 h-8 rounded-lg bg-neutral-400/20 text-neutral-600 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-black mb-1">Algorithmic Mind</h4>
                <p className="text-xs text-neutral-600">ICPC 2025 Honoree with passion for optimization.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-100/60 border border-black/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-black flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-black mb-1">Leader & Mentor</h4>
                <p className="text-xs text-neutral-600">Former MPK Chairperson & Binus Lab Assistant Team Leader.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Pathway */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-black/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-black" />
                <span>Academic Education</span>
              </h3>

              <div className="space-y-6">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 pb-6 border-l border-neutral-200 last:border-transparent last:pb-0 group"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-600 group-hover:bg-neutral-600 transition-colors" />

                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-black group-hover:text-black transition-colors">
                        {edu.institution}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs  text-black bg-neutral-600/10 px-2.5 py-0.5 rounded-full border border-neutral-600/20">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-neutral-700 mb-2">
                      {edu.degree}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-600 mb-3 ">
                      <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                      <span>{edu.location}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-black">{edu.status}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                      {edu.description}
                    </p>

                    {edu.achievements && (
                      <div className="space-y-1.5">
                        {edu.achievements.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
