import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  FileText,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with prefilled parameters
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-neutral-50 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-black text-xs  mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-full mt-3 mb-4" />
          <p className="text-neutral-600 max-w-2xl text-sm sm:text-base">
            Interested in collaboration, internship opportunities, AI systems development, or technical mentorship? Let's connect.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-black/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-black" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-5">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-neutral-100/90 border border-neutral-200 hover:border-neutral-600/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs  text-neutral-600 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-black" />
                      <span>Email Address</span>
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs  text-black hover:text-neutral-700 flex items-center gap-1 p-1"
                      aria-label="Copy Email"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-black" />
                          <span className="text-black">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-medium text-black hover:text-black transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* Phone / WhatsApp Box */}
                <div className="p-4 rounded-xl bg-neutral-100/90 border border-neutral-200 hover:border-neutral-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs  text-neutral-600 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-black" />
                      <span>Phone & WhatsApp</span>
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="text-xs  text-black hover:text-neutral-700 flex items-center gap-1 p-1"
                      aria-label="Copy Phone"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-black" />
                          <span className="text-black">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={PERSONAL_INFO.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-medium text-black hover:text-black transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <a
                      href={PERSONAL_INFO.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs  text-black bg-emerald-950/50 px-2 py-1 rounded border border-neutral-500/20 hover:bg-emerald-900/60 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Chat WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-neutral-100/90 border border-neutral-200">
                  <div className="text-xs  text-neutral-600 flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                    <span>Location Base</span>
                  </div>
                  <p className="text-sm font-medium text-black">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Open to remote work & on-site positions
                  </p>
                </div>

                {/* CV Download banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-200/40 to-indigo-900/40 border border-neutral-600/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-black/30 text-white flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black">Download Full CV</h4>
                      <p className="text-xs text-neutral-600">Updated curriculum vitae</p>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download="CV_Yudhistira_Ari_Nugroho.docx"
                    className="px-4 py-2 rounded-xl bg-black hover:bg-neutral-600 text-white text-xs font-semibold shadow-md shadow-black/25 hover:shadow-neutral-600/35 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-black/10 backdrop-blur-md flex flex-col gap-4 shadow-xl"
            >
              <h3 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-black" />
                <span>Send a Direct Message</span>
              </h3>

              {sentSuccess && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-neutral-500/40 text-neutral-700 text-xs  flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Opening your email client to send your message...</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs  text-neutral-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Pratama"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300/80 text-black text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs  text-neutral-600 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300/80 text-black text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs  text-neutral-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Internship / Collaboration / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300/80 text-black text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs  text-neutral-600 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Yudhis, I'd like to discuss an opportunity regarding..."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300/80 text-black text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-xl bg-black hover:bg-neutral-600 text-white font-semibold text-sm shadow-lg shadow-black/25 hover:shadow-neutral-600/35 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
