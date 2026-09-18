import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

export const Hero: React.FC = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["intelligent systems", "backend architectures", "machine learning models", "scalable solutions"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section id="hero" className="h-screen w-full p-4 md:p-8 pt-24 md:pt-32">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] bg-white border border-black/10">
        
        {/* Minimalist Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale invert"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        
        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Gradient overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="flex gap-8 items-center justify-center flex-col w-full max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 border border-neutral-300 text-neutral-700 text-xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span>{PERSONAL_INFO.statusBadge}</span>
              </div>
            </motion.div>

            <div className="flex gap-4 flex-col w-full">
              <h1 className="text-[7.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter text-center font-bold text-black flex flex-col items-center">
                <span className="text-neutral-700">Hi, I'm Yudhistira. I build</span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[1.2em] mt-2">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-600 to-black"
                      initial={{ opacity: 0, y: "-100%" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? "-150%" : "150%",
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-neutral-600 max-w-2xl text-center mx-auto mt-4 px-4"
              >
                {PERSONAL_INFO.bio}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 items-center"
            >
              <a href="#projects" className="w-[80vw] sm:w-auto flex justify-center">
                <InteractiveHoverButton text="Explore Projects" className="bg-black border-black text-white w-full sm:w-56" hoverBgClass="group-hover:bg-neutral-800" hoverTextClass="text-white" />
              </a>
              <a href={PERSONAL_INFO.resumeUrl} download="CV_Ari_Nugroho.docx" className="w-[80vw] sm:w-auto flex justify-center">
                <InteractiveHoverButton text="Download CV" className="bg-white border-neutral-300 text-black w-full sm:w-56 shadow-sm" hoverBgClass="group-hover:bg-neutral-100" hoverTextClass="text-black" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
