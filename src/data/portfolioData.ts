export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  images?: string[];
  pdfUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'tech' | 'leadership';
  location: string;
  description: string[];
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  highlight: string;
  details: string;
  assetUrl?: string;
  assetType?: 'image' | 'pdf';
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  location: string;
  description: string;
  achievements?: string[];
}

export const PERSONAL_INFO = {
  name: "Yudhistira Ari Nugroho",
  nickname: "Yudhis",
  role: "AI & Backend Engineer",
  tagline: "Building resilient backend architectures and intelligent AI systems with competitive algorithmic precision.",
  bio: "Computer Science student at BINUS University with strong focus on artificial intelligence, machine learning, and backend infrastructure. Experienced in teaching assistance at Software Laboratory Center, student leadership, and high-stakes problem solving, with achievements in national programming (ICPC) and innovation competitions.",
  email: "arinugrohoyudhistira@gmail.com",
  phone: "+62 813 910 577 88",
  location: "Semarang, Indonesia",
  university: "BINUS University",
  graduationYear: "2028",
  statusBadge: "Available for Internships & Projects",
  avatarUrl: "/Yudhis1.png",
  resumeUrl: "/CV.docx",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:arinugrohoyudhistira@gmail.com",
    whatsapp: "https://wa.me/6281391057788"
  },
  stats: [
    { label: "ICPC Honoree", value: "2025", desc: "Asia Jakarta Contest" },
    { label: "Design Thinking", value: "1st", desc: "Place Winner" },
    { label: "Lab Center", value: "1+ Yr", desc: "Assistant & Team Leader" },
    { label: "Leadership", value: "2+ Yrs", desc: "MPK Student Council" }
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "BINUS University",
    degree: "Bachelor of Computer Science (B.Comp.Sc.)",
    period: "Expected 2028",
    status: "Active Undergraduate",
    location: "Indonesia",
    description: "Focusing on Artificial Intelligence, Machine Learning, Backend Engineering, and Advanced Algorithm Design.",
    achievements: [
      "Assistant Software Laboratory Center (SLC)",
      "ICPC Asia Jakarta 2025 - Honorable Mention",
      "Lead Student Instructor & Evaluator"
    ]
  },
  {
    institution: "YSKI Christian High School",
    degree: "Mathematics and Natural Sciences",
    period: "Graduated 2024",
    status: "Alumni",
    location: "Semarang, Indonesia",
    description: "Strong academic foundation in analytical mathematics, physics, and empirical research.",
    achievements: [
      "Chairperson of Student Representative Council (MPK) 2022-2023",
      "Vice Chairperson of Student Representative Council (MPK) 2021-2022"
    ]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "slc-binus",
    role: "Assistant Software Laboratory Center",
    organization: "BINUS University",
    period: "Sep 2025 – Aug 2026",
    type: "tech",
    location: "Campus / Hybrid",
    description: [
      "Conducted intensive laboratory sessions by explaining complex programming concepts, demonstrating practical implementations, and offering 1-on-1 technical guidance.",
      "Evaluated programming assignments, practical examinations, and coding projects while delivering rigorous, constructive feedback to elevate student code quality.",
      "Provided academic mentoring and technical support to help students overcome algorithmic bottlenecks and strengthen software development skills.",
      "Served as Team Leader for the 2025 new lab assistant selection process, responsible for monitoring, evaluating candidate code, and delivering feedback during training."
    ],
    skills: ["Teaching", "Casemaker", "Corrector", "Team Leadership", "Code Review", "Algorithmic Mentorship"]
  },
  {
    id: "mpk-chairperson",
    role: "Chairperson, Student Representative Council (MPK)",
    organization: "YSKI Christian High School",
    period: "Nov 2022 – Nov 2023",
    type: "leadership",
    location: "Semarang, Indonesia",
    description: [
      "Led the Student Representative Council representing school-wide student body interests and institutional strategic initiatives.",
      "Organized and supervised the annual student council presidential election, ensuring an impartial, transparent, and structured voting process.",
      "Fostered strategic collaboration between school management, faculty, and student stakeholders to support effective decision-making.",
      "Directed council members in legislative agendas, delegating project responsibilities, and monitoring key organizational milestones.",
      "Collected, analyzed, and consolidated student feedback to identify institutional concerns and provide actionable recommendations to school management."
    ],
    skills: ["Leadership", "Stakeholder Management", "Decision Making", "Strategic Governance", "Public Speaking"]
  },
  {
    id: "mpk-vice",
    role: "Vice Chairperson, Student Representative Council (MPK)",
    organization: "YSKI Christian High School",
    period: "Nov 2021 – Nov 2022",
    type: "leadership",
    location: "Semarang, Indonesia",
    description: [
      "Assisted the Chairperson in planning, coordinating, and executing council initiatives across all academic grade levels.",
      "Collected, synthesized, and presented quarterly student satisfaction data to support policy iterations.",
      "Co-managed the annual presidential election committee, safeguarding voting integrity and student participation.",
      "Assumed executive leadership duties and represented the council during the Chairperson's absence, ensuring seamless operational continuity."
    ],
    skills: ["Coordination & Communication", "Stakeholder Management", "Oversight & Evaluation", "Operations"]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "AI & Machine Learning",
    description: "Building intelligent agents, data pipelines, and predictive capabilities.",
    skills: [
      { name: "Artificial Intelligence", detail: "Building AI-powered solutions for real-world problems, including intelligent assistants and automation systems.", icon: "Brain" },
      { name: "AI Agents & RAG", detail: "Developing agentic workflows, retrieval-augmented generation systems, and multi-agent architectures.", icon: "Bot" },
      { name: "Machine Learning", detail: "Applying supervised and unsupervised learning to classification, prediction, and anomaly detection problems.", icon: "Cpu" },
      { name: "Data Analysis", detail: "Processing, exploring, and interpreting datasets to support model development and data-driven decisions.", icon: "Database" },
      { name: "Python", detail: "Primary programming language for AI, machine learning, data processing, and backend development.", icon: "Code2" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Designing scalable services, APIs, database architecture, and connected systems.",
    skills: [
      { name: "Backend Development", detail: "Designing application logic, APIs, data processing workflows, and backend services.", icon: "Server" },
      { name: "REST API", detail: "Building and integrating APIs for communication between applications and services.", icon: "Network" },
      { name: "Database", detail: "Working with relational databases, SQL, data modeling, and database-driven applications.", icon: "Database" },
      { name: "IoT & Edge Computing", detail: "Developing connected systems involving sensors, microcontrollers, local processing, and real-time data communication.", icon: "Cpu" },
      { name: "System Architecture", detail: "Designing end-to-end systems that connect applications, APIs, databases, AI models, and external services.", icon: "Binary" }
    ]
  },
  {
    category: "Algorithms & SE",
    description: "Fundamental computer science, software engineering practices, and competitive problem solving.",
    skills: [
      { name: "Data Structures & Algorithms", detail: "Implementing and applying fundamental data structures and algorithms to solve computational problems.", icon: "Binary" },
      { name: "Object-Oriented Programming", detail: "Developing structured and maintainable software using object-oriented principles.", icon: "Code2" },
      { name: "Software Engineering", detail: "Applying systematic approaches to software design, development, testing, and problem solving.", icon: "CheckCircle2" },
      { name: "Problem Solving", detail: "Breaking complex technical problems into manageable components and developing practical solutions.", icon: "Lightbulb" },
      { name: "Git & Version Control", detail: "Managing source code, collaboration workflows, branching, and project history with Git.", icon: "GitBranch" }
    ]
  },
  {
    category: "Leadership & Mentoring",
    description: "Proven organizational leadership, stakeholder alignment, and technical education.",
    skills: [
      { name: "Technical Mentoring", detail: "Guiding students and peers in programming, software development, and technical problem solving.", icon: "GraduationCap" },
      { name: "Team Leadership", detail: "Coordinating team members, delegating responsibilities, and supporting collaborative project execution.", icon: "Users" },
      { name: "Knowledge Transfer", detail: "Translating technical concepts into clear and beginner-friendly explanations.", icon: "Lightbulb" },
      { name: "Stakeholder Management", detail: "Communicating with team members, students, lecturers, and other stakeholders to align expectations and objectives.", icon: "Briefcase" },
      { name: "Communication", detail: "Presenting technical ideas clearly across different levels of technical understanding.", icon: "Users" }
    ]
  }
];


export const CERTIFICATES_LIST: CertificateItem[] = [
  {
    id: "icpc-2025",
    title: "Honorable Mention 2025 ICPC Asia Jakarta",
    issuer: "ICPC (International Collegiate Programming Contest)",
    year: "2025",
    category: "Competition",
    highlight: "Indonesia National Contest",
    details: "Recognized among top university teams nationwide in competitive programming, demonstrating high-speed algorithmic thinking, dynamic programming, graph theory, and mathematical optimization.",
    assetUrl: "/assets/awards/icpc/Portofolio(4).png",
    assetType: "image"
  },
  {
    id: "design-thinking-1st",
    title: "1st Winner Design Thinking Challenge",
    issuer: "Collaborated with Customer Experience Insight Pty Ltd.",
    year: "2024",
    category: "Innovation",
    highlight: "1st Place Winner",
    details: "Championed a human-centered design challenge by formulating user persona research, rapid interactive prototyping, and delivering an executive pitch tailored for client CX optimization.",
    assetUrl: "/assets/awards/design-thinking/Portofolio(2).png",
    assetType: "image"
  },
  {
    id: "legal-ai-agent",
    title: "Legal - AI Agent for Legal",
    issuer: "Hacktiv8 & IBM",
    year: "2026",
    category: "AI & Data",
    highlight: "Enterprise AI Agent Development",
    details: "Engineered an AI agent solution utilizing natural language processing and knowledge retrieval to streamline legal document synthesis and compliance advisory.",
    assetUrl: "/assets/awards/legal-ai/1779633686184-b1e8d195-f065-4262-8a92-d77f8ef32790.pdf",
    assetType: "pdf"
  },
  {
    id: "ibm-data-skills",
    title: "Data - AI Agent for Data Analysis",
    issuer: "IBM SkillsBuild",
    year: "2026",
    category: "AI & Data",
    highlight: "IBM Certified Competency",
    details: "Comprehensive data science credentials covering data lifecycle, exploratory data analysis, data hygiene, and predictive analytics fundamentals.",
    assetUrl: "/assets/awards/data-ai/DataTrans.pdf",
    assetType: "pdf"
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "legal-ai-assistant",
    title: "AI Legal Assistant",
    subtitle: "Automated NDA Compliance Analysis",
    category: "AI & ML",
    description: "AI-powered legal assistant to analyze Non-Disclosure Agreements (NDAs) and identify potential compliance issues against Indonesia's Personal Data Protection Law.",
    longDescription: "Developed an AI-powered legal assistant to analyze Non-Disclosure Agreements (NDAs) and identify potential compliance issues against Indonesia’s Personal Data Protection Law (UU No. 27 Tahun 2022). The system uses a dual-agent workflow to examine contract clauses, identify potential risks, and generate a structured compliance report with relevant legal references. This project demonstrates the application of AI to simplify legal document review, reduce manual analysis effort, and help organizations identify potential data protection risks more efficiently.",
    tags: ["AI", "Legal Tech", "LLMs", "Compliance", "Python"],
    images: ["/assets/projects/legal-ai/image1.png"],
    featured: true
  },
  {
    id: "diabetes-risk",
    title: "Diabetes Risk Predictor",
    subtitle: "Ensemble Learning Based Application",
    category: "AI & ML",
    description: "An ensemble learning-based diabetes risk detection app assessing risk based on demographic details and daily activities.",
    longDescription: "An ensemble learning-based diabetes risk detection app. Developed in response to the difficulties faced by users in assessing their own risk of diabetes. This app assesses risk based on the user’s demographic details and daily activities. The model was built from a dataset of 100,000 records using a combination of Random Forest (Bagging Ensemble) and LightGBM (Gradient Boosting), with META-LEARNER (Stacking Ensemble) employed to produce an accurate model.",
    tags: ["Machine Learning", "Random Forest", "LightGBM", "Data Science"],
    images: ["/assets/projects/diabetes-risk/image1.png"],
    featured: true
  },
  {
    id: "lstm-anomaly",
    title: "LSTM-Powered Anomaly Detection",
    subtitle: "IoT Sensors (Accepted at ICORIS 2026)",
    category: "Backend & System",
    description: "IoT and AI-based environmental sensor monitoring system to automatically detect abnormal temperature readings.",
    longDescription: "Developing an IoT- and AI-based environmental sensor monitoring system to automatically detect abnormal temperature readings and indications of sensor failure. The system uses the ESP32 to collect data from sensors in real time, then analyses data patterns to distinguish between normal conditions and anomalies. This research demonstrates that low-cost sensor devices can be combined with AI to improve the reliability of monitoring and provide early warnings of potential device issues.",
    tags: ["IoT", "AI", "LSTM", "ESP32", "Anomaly Detection"],
    images: ["/assets/projects/lstm/image1.png"],
    featured: true
  },
  {
    id: "enzone",
    title: "Enzone",
    subtitle: "AI-Powered Smart Factory Safety System",
    category: "Innovation & UX",
    description: "IoT and AI-powered smart factory monitoring system designed to detect abnormal environmental conditions and potential fire risks.",
    longDescription: "Developed an IoT and AI-powered smart factory monitoring system designed to detect abnormal environmental conditions and potential fire risks before they escalate. The system collects real-time temperature, humidity, pressure, and gas data through distributed ESP32 and ESP8266 sensor nodes, processes the data locally using a Raspberry Pi edge server, and applies AI-based anomaly detection to identify unusual patterns. A web dashboard provides operators with real-time monitoring and historical insights, enabling earlier intervention and supporting predictive maintenance in industrial environments.",
    tags: ["IoT", "Smart Factory", "AI", "Raspberry Pi", "Dashboard"],
    images: ["/assets/projects/enzone/image1.png", "/assets/projects/enzone/image2.png"],
    pdfUrl: "/assets/projects/enzone/doc.pdf",
    featured: true
  }
];
