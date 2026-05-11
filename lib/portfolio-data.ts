export const heroData = {
  name: "OUSSEMA ABDAOUI",
  titles: ["AI Developer", "Software Engineer", "LLM Systems Builder"],
  tagline: "Building AI systems that work in the real world — from LLM navigation to RAG pipelines.",
  cta: { primary: "View Projects", secondary: "Download CV" },
  contact: {
    email: "oussama5abdaoui@gmail.com",
    linkedin: "https://www.linkedin.com/in/oussema-abdaoui-82a513293/",
    github: "https://github.com/oussemaAbdaoui",
    phone: "+216 53 334 828",
  },
};

export const aboutData = {
  bio: "Final-year Software Engineering student at École Nationale d'Ingénieurs de Carthage (ENICarthage). Currently conducting research at LIPN (Sorbonne Paris Nord, CNRS UMR 7030) on Hybrid XAI-LLM frameworks that bridge the gap between formal AI explainability and user-friendly natural language. Previously completed backend engineering at Zembra Tech (Cloudflare bypass microservice) and AI deployment at Teratosoft (Vision-Language models, RAG pipelines, autonomous agents). Passionate about building robust systems that combine formal verification with human-centered AI.",
  stats: [
    { value: "3", label: "Years Engineering", icon: "GraduationCap" },
    { value: "13+", label: "Projects Built", icon: "Code2" },
    { value: "5", label: "Certifications", icon: "Award" },
    { value: "3", label: "Languages Spoken", icon: "Globe" },
  ],
};

export const skillsData = [
  {
    category: "AI & Machine Learning",
    color: "amber",
    skills: ["LLMs", "RAG", "LangChain", "LangGraph", "FAISS", "ChromaDB", "pgvector", "Transformers", "PyTorch", "TensorFlow", "Scikit-learn", "LightGBM", "Agentic AI", "OCR", "NER", "DeepSpeed", "Groq API", "Optuna", "n8n", "Multimodal AI", "curl-cffi", "Playwright", "XAI", "SHAP", "LIME", "G-Eval"],
  },
  {
    category: "Languages",
    color: "blue",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C/C++", "C#"],
  },
  {
    category: "Backend",
    color: "teal",
    skills: ["FastAPI", "Spring Boot", "Flask", "NestJS", "Spring Security", "JPA/Hibernate", "JWT Auth"],
  },
  {
    category: "Frontend",
    color: "purple",
    skills: ["Angular", "React", "Next.js", "RxJS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "APIs & Protocols",
    color: "rose",
    skills: ["REST", "gRPC", "GraphQL", "SOAP"],
  },
  {
    category: "DevOps & Cloud",
    color: "green",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS Cloud Foundations", "Minikube", "Gunicorn", "Uvicorn", "Locust"],
  },
  {
    category: "Formal Methods & Verification",
    color: "indigo",
    skills: ["Boolean Logic", "CNF Transformation", "Z3 Theorem Prover", "Formal Verification", "Semantic Equivalence", "Constraint Solving"],
  },
  {
    category: "Databases",
    color: "orange",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server", "FAISS", "ChromaDB", "pgvector"],
  },
];

export const experienceData = [
  {
    role: "Research Engineer Intern — XAI-LLM Framework",
    company: "LIPN, Sorbonne Paris Nord (CNRS UMR 7030)",
    period: "May 2026 – Present",
    location: "Paris, France",
    current: true,
    bullets: [
      "Extending hybrid XAI-LLM framework published at HCII 2026, addressing the coherence-fidelity gap (83–100% qualitative vs 52–84% formal) in AI explanations",
      "Designing stateful dialogue manager enabling follow-ups, counterfactuals, and clarifications while maintaining formal grounding in extracted model logic",
      "Adapting pipeline for ensemble models (Random Forests, XGBoost, Gradient Boosting) with consensus logic extraction and weighted formal verification",
      "Implementing retrieval-augmented generation for user-profile personalization (expert/professional/citizen) without compromising formal content, verified via semantic equivalence with Z3",
      "Leveraging Boolean circuit / CNF transformation, ϵₕ,ₓ fidelity metrics, and G-Eval for semantic coherence validation",
    ],
    tags: ["Python", "LLM", "XAI", "SHAP", "LIME", "Z3", "RAG", "Boolean Logic", "CNF", "Formal Verification"],
  },
  {
    role: "Backend Engineer — End-of-Studies (PFE)",
    company: "Zembra Tech",
    period: "Feb 2026 – Apr 2026",
    location: "Ariana, Tunisia",
    current: false,
    bullets: [
      "Designed and delivered a Cloudflare bypass microservice adopted into production scraping infrastructure, eliminating systematic IP blocks on high-value targets (Capterra, Glassdoor)",
      "Engineered two-stage evasion engine: TLS ClientHello impersonation via curl-cffi/BoringSSL for fast requests, fallback to stealth headless Chromium (patchright) with automated Turnstile solving",
      "Built persistent FingerprintVault (cookies, UA, localStorage) backed by Docker named volume, reducing repeat-request latency from ~10 min to 5–15 s (~40× improvement)",
      "Implemented thread-safe ProxyRotator with pluggable strategy interface, DNS-over-HTTPS, and browser tab pooling via asyncio to prevent Chromium memory leaks",
      "Conducted distributed load testing with Locust (5 workers, concurrent users) to validate session cache efficiency and worker stability under production load",
    ],
    tags: ["Python", "FastAPI", "Gunicorn", "Playwright/patchright", "curl-cffi", "asyncio", "Docker", "Pydantic", "Locust"],
  },
  {
    role: "AI Software Developer (Part-time)",
    company: "Teratosoft",
    period: "Sept 2025 – Dec 2025",
    location: "Remote, Tunis",
    current: false,
    bullets: [
      "Deployed 1.7B-param Vision-Language model for document analysis and OCR → 50% less manual data entry",
      "Built multilingual semantic search with RAG (FAISS, ChromaDB, LangChain, pgvector) → 65% accuracy improvement",
      "Full-stack electronic archiving platform with NestJS + Flask + Vue.js 3, supporting 60 concurrent users at 99.9% uptime",
      "Implemented REST APIs for AI microservice orchestration with Redis and RabbitMQ",
    ],
    tags: ["LLM", "RAG", "FAISS", "NestJS", "Flask", "Docker"],
  },
  {
    role: "AI Intern",
    company: "Teratosoft",
    period: "Jun 2025 – Sept 2025",
    location: "Remote, Tunis",
    current: false,
    bullets: [
      "LLM-based autonomous navigation system: 95% task success rate, collision rate from 18% → 4%",
      "Fine-tuned AI models with DeepSpeed, reducing operational risk by 14%",
      "Embedded AI on Raspberry Pi with PyTorch: 30 Hz sensor processing, <50ms latency",
      "LSTM prediction models achieving 98% accuracy on test scenarios",
    ],
    tags: ["LLM", "PyTorch", "DeepSpeed", "LSTM", "Raspberry Pi"],
  },
  {
    role: "Web Development Intern",
    company: "Swoc",
    period: "Jul 2024 – Aug 2024",
    location: "Remote, Ariana",
    current: false,
    bullets: [
      "Built a static e-commerce site for agricultural products using Angular",
      "Responsive design and structured product catalog with Angular reactive forms",
    ],
    tags: ["Angular", "TypeScript", "HTML5", "CSS"],
  },
];

export const projectsData = {
  featured: [
    {
      title: "Hybrid XAI-LLM Framework",
      category: "AI · Formal Methods",
      categoryColor: "indigo",
      description: "Research framework bridging explainable AI and LLMs to translate XAI outputs (SHAP, LIME, Anchors) into accessible natural language while maintaining formal verifiability. Extends to ensemble models with dialogue manager and RAG-based personalization, grounded in Boolean circuits and Z3 constraint solving.",
      metrics: ["Coherence-Fidelity gap addressed", "Ensemble model support", "Formal verification with Z3"],
      tags: ["Python", "LLM", "XAI", "Z3", "RAG", "Boolean Logic", "G-Eval", "LIPN Research"],
      highlight: true,
    },
    {
      title: "Cloudflare Bypass Microservice",
      category: "Backend · Web Intelligence",
      categoryColor: "teal",
      description: "Production-grade microservice that transparently bypasses Cloudflare bot detection using two-stage cascading fallback: TLS-spoofed HTTP via curl-cffi, falling back to stealth headless Chromium with automated Turnstile solving. Persists sessions in FingerprintVault for ~40× latency improvement.",
      metrics: ["40× faster repeat requests", "All 4 Cloudflare challenge types", "Production adopted"],
      tags: ["Python", "FastAPI", "curl-cffi", "patchright", "asyncio", "Docker", "Locust"],
      highlight: true,
    },
    {
      title: "Cognitive Navigation System",
      category: "AI · Robotics",
      categoryColor: "amber",
      description: "LLM-based autonomous robot navigation combining grid mapping with language model planning. 3 reasoning kernels. 10+ benchmark scenarios.",
      metrics: ["95% success rate", "18% → 4% collision"],
      tags: ["Python", "LLM", "Groq API", "PyTorch", "Raspberry Pi", "DeepEval"],
      highlight: true,
    },
    {
      title: "Smart City Monitor",
      category: "Microservices · Cloud",
      categoryColor: "teal",
      description: "Fully containerized urban intelligence platform with 5 heterogeneous microservices (REST, SOAP, gRPC, GraphQL). Real-time city monitoring: air quality, transport, energy, emergency.",
      metrics: ["5 microservices", "4 protocols", "Production-ready"],
      tags: ["Java", "Spring Boot", "Docker", "gRPC", "GraphQL", "SOAP", "Next.js"],
      highlight: true,
    },
    {
      title: "Multilingual RAG Assistant",
      category: "AI · NLP",
      categoryColor: "amber",
      description: "Internal knowledge assistant over large document corpora with semantic embeddings and multilingual retrieval. Enterprise-grade pipeline.",
      metrics: ["70% faster retrieval", "Multilingual support"],
      tags: ["Python", "LangChain", "FAISS", "pgvector", "FastAPI"],
      highlight: false,
    },
    {
      title: "Network Intrusion Detection",
      category: "ML · Cybersecurity",
      categoryColor: "rose",
      description: "ML pipeline on UNSW-NB15 modern network traffic dataset. Focus on preprocessing, feature selection, and minimizing false negatives in threat detection.",
      metrics: ["97.7% accuracy", "High precision & recall"],
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      highlight: false,
    },
    {
      title: "URL Shortener — Full DevOps",
      category: "DevOps · Cloud",
      categoryColor: "green",
      description: "End-to-end DevOps: Flask API, Docker, 5-stage GitHub Actions CI/CD (SAST + DAST), Kubernetes deployment with Prometheus observability.",
      metrics: ["5/5 pipeline jobs", "SAST + DAST passed", "K8s deployed"],
      tags: ["Python", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Trivy", "OWASP ZAP"],
      highlight: false,
    },
    {
      title: "Space Invaders — Design Patterns",
      category: "Software Engineering",
      categoryColor: "purple",
      description: "Arcade game demonstrating 6 design patterns: State, Decorator, Composite, Factory, Observer, Singleton. Progressive levels and power-up system.",
      metrics: ["6 design patterns", "Java Swing GUI"],
      tags: ["Java 17", "Java Swing", "Maven", "OOP"],
      highlight: false,
    },
  ],
  additional: [
    { title: "Administrative Services Platform", tags: ["Angular", "Spring Boot", "AI"], category: "Full-Stack" },
    { title: "Event Management Platform", tags: ["Spring Security", "JWT", "MySQL"], category: "Full-Stack" },
    { title: "Library Management App", tags: ["Angular", "RxJS"], category: "Frontend" },
    { title: "Mobile Show Management", tags: ["Android Studio", "Spring Boot"], category: "Mobile" },
    { title: "Clash Royale Simulation Engine", tags: ["Java", "JavaFX", "MVC"], category: "Software Engineering" },
  ],
};

export const certificationsData = [
  { name: "OCI 2025 Certified Data Science Professional", issuer: "Oracle", date: "2025" },
  { name: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", date: "2025" },
  { name: "AWS Academy Graduate — Cloud Foundations", issuer: "Amazon Web Services", date: "2025" },
  { name: "Build RAG Applications: Get Started", issuer: "IBM / Coursera", date: "Nov 2025" },
  { name: "Develop Generative AI Applications: Get Started", issuer: "IBM / Coursera", date: "Nov 2025" },
];

export const educationData = [
  {
    institution: "École Nationale d'Ingénieurs de Carthage",
    short: "ENICarthage",
    degree: "Engineering Degree — Computer Science & Software Engineering",
    period: "Sept 2023 – Present",
    skills: ["Spring Boot", "Docker", "Machine Learning", "gRPC", "GraphQL", "SOAP", "Design Patterns", "Security", "Microservices"],
  },
  {
    institution: "IPEIN / IPEIM — Nabeul / Monastir",
    short: "Preparatory",
    degree: "Preparatory Classes — Physics & Technology",
    period: "2021 – 2023",
    skills: ["Physics", "Mathematics", "Python", "Risk Analysis"],
  },
];

export const extracurricularData = [
  { icon: "Trophy", label: "IEEE RAS Chapter Chairperson", detail: "ENICarthage Student Branch · 2024–2025" },
  { icon: "Cpu", label: "Arduino & Robotics Trainer", detail: "Led sessions for ENIB Robotics Team · Nov 2025" },
  { icon: "Gamepad2", label: "Interests", detail: "Robotics · Competitive Gaming · Basketball" },
];

export const contactData = {
  headline: "Let's build something serious.",
  email: "oussama5abdaoui@gmail.com",
  linkedin: "https://www.linkedin.com/in/oussema-abdaoui-82a513293/",
  github: "https://github.com/oussemaAbdaoui",
  phone: "+216 53 334 828",
  location: "Ariana, Tunisia · Open to France + remote",
};
