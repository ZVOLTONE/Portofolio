import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080B11] border-t border-black/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2  font-bold text-black text-lg mb-1">
              <span className="w-6 h-6 rounded-md bg-black/20 border border-neutral-600/30 flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className='text-white'>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Computer Science @ BINUS University • AI & Backend Architecture • ICPC 2025 Honoree
            </p>
          </div>

          {/* Vercel compatibility badge */}
          

          {/* Right Action / Back to top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-600 ">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-neutral-100/80 hover:bg-neutral-200 border border-neutral-300 hover:border-slate-400 text-neutral-700 hover:text-black hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
