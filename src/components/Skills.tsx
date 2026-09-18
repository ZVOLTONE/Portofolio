import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Bot,
  Database,
  Code2,
  Server,
  Binary,
  Network,
  GitBranch,
  Users,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Icon resolver map
const getSkillIcon = (iconName: string) => {
  const cls = "w-4 h-4 text-neutral-700";
  switch (iconName) {
    case 'Brain': return <Brain className={cls} />;
    case 'Cpu': return <Cpu className={cls} />;
    case 'Bot': return <Bot className={cls} />;
    case 'Database': return <Database className={cls} />;
    case 'Code2': return <Code2 className={cls} />;
    case 'Server': return <Server className={cls} />;
    case 'Binary': return <Binary className={cls} />;
    case 'Network': return <Network className={cls} />;
    case 'GitBranch': return <GitBranch className="w-4 h-4 text-orange-500" />;
    case 'Users': return <Users className={cls} />;
    case 'Briefcase': return <Briefcase className={cls} />;
    case 'GraduationCap': return <GraduationCap className={cls} />;
    case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-teal-500" />;
    case 'Lightbulb': return <Lightbulb className="w-4 h-4 text-yellow-500" />;
    default: return <Code2 className={cls} />;
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-neutral-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-black text-xs mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Skills & Technical Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-full mt-3 mb-4" />
          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base">
            A practical skill set built through software engineering projects, AI development, competitive programming, teaching, and team leadership.
          </p>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-white/80 border border-black/10 max-w-3xl">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === idx
                    ? 'bg-black text-white shadow-lg shadow-black/20 font-semibold'
                    : 'text-neutral-600 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-white/70 border border-black/10 backdrop-blur-md">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-black mb-1">
                {SKILL_CATEGORIES[activeTab].category}
              </h3>
              <p className="text-neutral-600 text-sm">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>

            {/* Skill bullet-point list */}
            <div className="space-y-3">
              {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-neutral-100/80 border border-black/5 hover:border-neutral-600/30 transition-all duration-200 group"
                >
                  {/* Icon */}
                  <div className="p-2 rounded-lg bg-neutral-200/90 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                    {getSkillIcon(skill.icon)}
                  </div>

                  {/* Name + Description */}
                  <div className="min-w-0">
                    <span className="text-sm font-semibold text-black">
                      {skill.name}
                    </span>
                    <span className="text-sm text-neutral-600">
                      {' — '}{skill.detail}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Practical Application Callout */}
            <div className="mt-8 p-4 rounded-xl bg-neutral-100/40 border border-neutral-600/20 flex items-center gap-3 text-xs sm:text-sm text-neutral-800">
              <Sparkles className="w-5 h-5 text-black shrink-0" />
              <span>
                Applied directly in real-world scenarios: software lab assistant marking & teaching at BINUS, competitive programming under ICPC Asia Jakarta, and Hacktiv8/IBM agentic initiatives.
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
