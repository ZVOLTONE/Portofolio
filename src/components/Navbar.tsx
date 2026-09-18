import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { VariableFontHover } from './ui/variable-font-hover';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Honors', href: '#honors' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-black/10 shadow-lg shadow-white/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-black  font-bold text-lg tracking-tight cursor-pointer"
        >
          {/* <span className="w-8 h-8 rounded-lg bg-black/20 border border-neutral-600/30 flex items-center justify-center text-white group-hover:bg-black group-hover:text-white transition-all duration-300">
            <Sparkles className="w-4 h-4" />
          </span> */}
          <span className="flex items-center gap-1">
            <span>Yudhis</span>
            <span className="text-neutral-600">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 bg-white/70 border border-black/10 rounded-full px-8 py-2 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a key={link.href} href={link.href}>
                <VariableFontHover
                  className={`cursor-pointer text-sm transition-colors ${
                    isActive ? 'text-black' : 'text-neutral-600 hover:text-black'
                  }`}
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 700"
                  label={link.label}
                  staggerDuration={0.03}
                  staggerFrom="center"
                />
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="CV_Yudhistira_Ari_Nugroho.docx"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 hover:text-black text-sm font-medium transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-neutral-700" />
            <span>CV</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-sm font-semibold shadow-md shadow-black/20 hover:shadow-neutral-800/30 transition-all duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="CV_Yudhistira_Ari_Nugroho.docx"
            className="p-2 rounded-lg border border-neutral-300 bg-neutral-200 text-neutral-800 text-sm"
            aria-label="Download CV"
          >
            <FileText className="w-4 h-4 text-black" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-neutral-300 bg-neutral-200 text-neutral-700 hover:text-black"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-black/10 bg-white/95 backdrop-blur-xl px-6 py-5"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-neutral-700 hover:text-black hover:bg-neutral-200/60 rounded-lg transition-colors"
                >
                  <VariableFontHover
                    className="cursor-pointer"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 700"
                    label={link.label}
                    staggerDuration={0.03}
                    staggerFrom="center"
                  />
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-black text-white hover:bg-neutral-800 font-medium text-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
