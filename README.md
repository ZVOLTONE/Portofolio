# Yudhistira Ari Nugroho - Personal Portfolio

Modern, high-performance developer portfolio website designed for **Yudhistira Ari Nugroho** (Computer Science @ BINUS University, AI & Backend Developer, Assistant Software Laboratory Center, ICPC Asia Jakarta 2025 Honoree).

Built with **React 19, TypeScript, Tailwind CSS v4, and Framer Motion**, optimized for **100% free hosting on Vercel** (Hobby Plan).

---

## ⚡ Key Highlights & Features

- **100% Vercel Free Tier Compatible**: Pure static SPA architecture with `vercel.json` rewrites and zero serverless invocation overhead.
- **Framer Motion Animations**: Smooth spring physics, interactive micro-interactions, floating badges, and reactive category filters.
- **Personal Branding System**: Integrated with `docs/brand-guidelines.md` and design tokens.
- **Interactive Confetti Celebration**: Interactive confetti on honors/awards cards (`canvas-confetti`).
- **Comprehensive Sections**:
  - **Hero**: Dynamic status badge ("Available for Internships & Projects"), live photo display with ambient tech glow, quick stats.
  - **About & Education**: Academic trajectory (BINUS University & YSKI Christian High School), core engineering pillars.
  - **Work & Leadership**: Timeline with filtering between Technical/Instructional (BINUS SLC) and Governance (Chairperson & Vice Chairperson MPK).
  - **Skills Matrix**: Categorized proficiency cards (AI/ML, Backend & Algorithms, Leadership & Governance).
  - **Projects & Research**: Modal architecture deep-dive for AI Agent for Legal (IBM & Hacktiv8), ICPC Contest Suite, BINUS SLC Casemaker & Evaluator, and Customer Experience Insight Engine.
  - **Honors & Credentials**: ICPC 2025 Honorable Mention, 1st Winner Design Thinking Challenge, IBM Data Science, and Hacktiv8 AI.
  - **Contact & Direct Reach**: Instant clipboard copy for email & phone, direct WhatsApp chat, contact message form, and CV download.

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 🌐 Deploy to Vercel (100% Free)

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete portfolio setup"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** > **"Project"**.
4. Select your GitHub repository.
5. Vercel will automatically detect **Vite** framework preset.
6. Click **"Deploy"**. Your site will be live on a free `.vercel.app` domain with free SSL in ~30 seconds!

### Option B: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts (select default options).

---

## 🛠 Project Structure

```
├── Asset/                     # Original assets (CV.docx, Yudhis1.png)
├── public/                    # Static assets served at root (photo, CV download)
├── docs/
│   └── brand-guidelines.md    # Personal brand identity & guidelines
├── assets/
│   └── design-tokens.json     # Token definitions synced with brand
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive glassmorphic navigation
│   │   ├── Hero.tsx           # Engaging hero with photo & floating tags
│   │   ├── About.tsx          # Education & engineering philosophy
│   │   ├── Experience.tsx     # Filterable timeline (tech & leadership)
│   │   ├── Skills.tsx         # Categorized skills matrix
│   │   ├── Projects.tsx       # Projects grid with detail modals
│   │   ├── Honors.tsx         # Awards & certificates with celebration confetti
│   │   ├── Contact.tsx        # Direct contact & message form
│   │   └── Footer.tsx         # Footer with Vercel badge & back-to-top
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data model from CV.docx
│   ├── App.tsx                # Root layout with scroll spy
│   ├── main.tsx               # Application entrypoint
│   └── index.css              # Tailwind CSS styles & animations
├── vercel.json                # Vercel configuration for SPA routing
├── vite.config.ts             # Vite configuration with Tailwind CSS plugin
└── package.json               # Project manifest & scripts
```
