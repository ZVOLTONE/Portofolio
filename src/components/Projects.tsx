import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  FolderGit2,
  ExternalLink,
  Tag,
  Sparkles,
  ArrowUpRight,
  Bot,
  Binary,
  Layers,
  Award,
  X,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PROJECTS_LIST, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

  React.useEffect(() => {
    if (activeModalProject) setCurrentImageIdx(0);
  }, [activeModalProject]);

  const categories = ['All', 'AI & ML', 'Backend & System', 'Innovation & UX'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'AI & ML': return <Bot className="w-3.5 h-3.5 text-neutral-600" />;
      case 'Backend & System': return <Binary className="w-3.5 h-3.5 text-black" />;
      case 'Innovation & UX': return <Award className="w-3.5 h-3.5 text-neutral-600" />;
      default: return <Layers className="w-3.5 h-3.5 text-neutral-600" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-neutral-50 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-black text-xs  mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Key Projects & Research
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-full mt-3 mb-4" />
          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base">
            Engineered systems derived from national competitions, enterprise hackathons, and software education initiatives.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 p-1.5 rounded-xl bg-neutral-100/80 border border-black/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 active:scale-[0.98] ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-md shadow-black/30 font-semibold'
                    : 'text-neutral-600 hover:text-white hover:bg-neutral-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-white/80 border border-black/10 hover:border-neutral-600/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/10 cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <div>
                  {/* Top Category & Metric */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs  bg-neutral-200 border border-neutral-300 text-neutral-700">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>

                    {project.metrics && (
                      <span className="text-[11px]  text-black bg-emerald-950/40 border border-neutral-500/30 px-2 py-0.5 rounded">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-black group-hover:text-black transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-neutral-700 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Bottom Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200/80">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[11px]  px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-2 flex items-center justify-between text-xs text-black group-hover:text-neutral-700 font-medium">
                    <span>Click to view architecture details</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white border border-neutral-600/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-600 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded text-xs  bg-black/20 text-white border border-neutral-600/30">
                  {activeModalProject.category}
                </span>
                {activeModalProject.metrics && (
                  <span className="px-2.5 py-1 rounded text-xs  bg-neutral-500/20 text-black border border-neutral-500/30">
                    {activeModalProject.metrics}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-black mb-1">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-medium text-neutral-700 mb-4">
                {activeModalProject.subtitle}
              </p>

              {/* Gallery Section */}
              {activeModalProject.images && activeModalProject.images.length > 0 && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIdx}
                      src={activeModalProject.images[currentImageIdx]}
                      alt={`${activeModalProject.title} gallery ${currentImageIdx + 1}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                  
                  {activeModalProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIdx((prev) => (prev > 0 ? prev - 1 : activeModalProject.images!.length - 1));
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-black shadow-md border border-black/10 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIdx((prev) => (prev < activeModalProject.images!.length - 1 ? prev + 1 : 0));
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-black shadow-md border border-black/10 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                        {activeModalProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIdx(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              i === currentImageIdx ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed mb-6">
                <p>{activeModalProject.longDescription}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-neutral-600 mb-2">
                  Technologies & Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-neutral-200 text-neutral-800 border border-neutral-300 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 bg-neutral-100/80 hover:bg-neutral-200 hover:border-slate-400 text-neutral-800 text-sm font-medium transition-all duration-200"
                >
                  Close
                </button>
                {activeModalProject.pdfUrl && (
                  <a
                    href={activeModalProject.pdfUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-sm font-semibold shadow-lg shadow-black/25 transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
