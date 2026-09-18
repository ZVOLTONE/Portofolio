import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Download,
  Image as ImageIcon,
  X
} from 'lucide-react';
import { CERTIFICATES_LIST } from '../data/portfolioData';

export const Honors: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const triggerConfetti = (e: React.MouseEvent) => {
    // Only trigger if we aren't clicking a button
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
      return;
    }

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 50,
      spread: 60,
      ticks: 200,
      colors: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'],
      disableForReducedMotion: true
    });
  };

  return (
    <section id="honors" className="py-24 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute left-1/3 bottom-10 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-600 text-xs  mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Awards & Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-500 rounded-full mt-3 mb-4" />
          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base">
            National competitive programming distinctions, enterprise innovation championships, and technical credentials.
          </p>
          <span className="text-xs text-slate-500 mt-2 ">
            (Click any card to celebrate achievement 🎉)
          </span>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATES_LIST.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={triggerConfetti}
              className="p-6 sm:p-7 rounded-2xl bg-white/80 border border-black/10 hover:border-neutral-500/40 transition-all duration-300 shadow-xl cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle gradient corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neutral-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-500/15 border border-neutral-500/30 text-neutral-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.category === 'Competition' ? (
                    <Trophy className="w-6 h-6" />
                  ) : item.category === 'Innovation' ? (
                    <Award className="w-6 h-6" />
                  ) : (
                    <ShieldCheck className="w-6 h-6" />
                  )}
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-xs  px-2.5 py-0.5 rounded-full bg-neutral-200 text-neutral-700 border border-neutral-500/20">
                    {item.year}
                  </span>
                  <span className="text-[11px]  text-neutral-600 mt-1">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold text-black group-hover:text-neutral-600 transition-colors mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-black mb-3">
                {item.issuer}
              </p>

              {/* Details */}
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                {item.details}
              </p>

              {/* Footer Actions */}
              <div className="flex items-center justify-between mt-auto pt-4">
                {/* Highlight Tag */}
                <div className="flex items-center gap-1.5 text-xs text-black bg-emerald-950/40 border border-neutral-500/20 px-3 py-1.5 rounded-lg w-fit">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>

                {/* Asset Actions */}
                <div className="flex items-center gap-2">
                  {item.assetUrl && item.assetType === 'pdf' && (
                    <a
                      href={item.assetUrl}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-medium text-white bg-black hover:bg-neutral-800 px-3 py-1.5 rounded-lg transition-colors border border-black/10 shadow-sm"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  )}
                  
                  {item.assetUrl && item.assetType === 'image' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(item.assetUrl!);
                      }}
                      className="flex items-center gap-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-100 border border-neutral-300 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                      title="View Image"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Credential"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
