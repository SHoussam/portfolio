export const assetUrl = (relativePath) => `${import.meta.env.BASE_URL}${relativePath}`;

export const HERO_BG_IMAGE = assetUrl("img/HS.png");
export const HERO_BG_IMAGE_OPPOSITE = assetUrl("img/ana.png");
export const AVATAR_IMAGE = assetUrl("img/WhatsApp Image 2026-01-15 at 20.11.08.jpeg");

export const PROFILE = {
  name: "Houssam Salek",
  title: "Computer Science Student | Backend & Full-Stack Developer",
  location: "Tanger-Tetouan-Al Hoceima, Morocco",
  email: "houssamsalek0707@gmail.com",
  github: "https://github.com/dororo911",
  linkedin: "https://www.linkedin.com/in/houssam-salek",
  cv: assetUrl("pdf/cv.pdf"),
  whatsapp: {
    number: "212694294897",
    message: "Hi, I saw your portfolio and would like to chat!"
  }
};

export const EXPERIENCE = [
  {
    date: "July 2026",
    title: "Backend / Full-Stack Internship Objective",
    details:
      "Actively seeking a PFA internship in backend, full-stack, or software engineering to contribute to real-world projects and strengthen production skills."
  },
  {
    date: "2023 - Present",
    title: "EMSI — Ingénierie Informatique & Réseaux",
    details:
      "Coursework in software engineering, web development, systems programming, and applied academic projects."
  }
];

export const CERTIFICATES = [
  {
    title: "Certificate in C++ Programming",
    issuer: "Online Course",
    year: "2025",
    image: assetUrl("img/cc++.png"),
    pdf: assetUrl("pdf/Coursera C++-POO.pdf"),
    qr: assetUrl("img/frame (2).png")
  },
  {
    title: "Web Development (HTML/CSS/JS)",
    issuer: "Online Course",
    year: "2025",
    image: assetUrl("img/js.png"),
    pdf: assetUrl("pdf/Coursera js.pdf"),
    qr: assetUrl("img/frame.png")
  },
  {
    title: "Linux Fundamentals",
    issuer: "Online Course",
    year: "2025",
    image: assetUrl("img/unix.png"),
    pdf: assetUrl("pdf/Coursera unix.pdf"),
    qr: assetUrl("img/frame (1).png")
  }
];

export const PROJECTS = [
  {
    title: "SysAuditKit — Linux Audit Toolkit",
    description:
      "Modular Bash toolkit packaged as a Debian .deb for quick Linux system audits and reporting.",
    technologies: ["Bash", "Linux", "Debian", "System Administration"],
    features: [
      "Audit modules for system info, processes, users, and permissions",
      "Debian package for easy installation and updates",
      "Generates concise reports for fast reviews"
    ],
    github: "https://github.com/dororo911/Aim.git",
    live: "https://houssamsalek.me/Aim/",
    image: assetUrl("img/aime.png"),
    speed: 0.4
  },
  {
    title: "Lahek Library — Web App",
    description:
      "PHP/MySQL library management app with authentication, role-based access, and secure CRUD via PDO.",
    technologies: ["PHP", "MySQL", "PDO", "HTML", "CSS","JavaScript","LARAVEL"],
    features: [
      "Admin dashboard for catalog and wishlist management",
      "Role-based access control and session handling",
      "Prepared statements for secure data operations"
    ],
    github: "https://github.com/dororo911/LahekLibrary.git",
    live: null,
    image: assetUrl("img/php.png"),
    speed: 0.3
  },
  {
    title: "Media Library CLI (C++)",
    description:
      "C++ console application demonstrating OOP, multi-role auth, and file-backed persistence for a media library.",
    technologies: ["C++", "OOP", "STL", "File I/O"],
    features: [
      "Multi-role authentication and subscription rules",
      "Borrowing and return logic with persistence",
      "Uses STL and file I/O for data storage"
    ],
    github: "https://github.com/dororo911/Media-Library-CLI-C-.git",
    live: null,
    image: assetUrl("img/c++.png"),
    speed: 0.2
  }
];

export const SKILL_GROUPS = [
  {
    title: "Backend & Databases",
    description: "Server-side logic, data modeling, and secure CRUD.",
    items: ["PHP", "MySQL", "PDO", "Bash", "Linux"]
  },
  {
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Languages",
    description: "Core programming languages used across projects.",
    items: ["C", "C++", "Java", "Python"]
  },
  {
    title: "Tools & Workflow",
    description: "Daily environment for shipping and collaboration.",
    items: ["Git", "GitHub", "Linux", "Vite", "VS Code"]
  }
];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience & Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" }
];
