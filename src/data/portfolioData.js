export const assetUrl = (relativePath) => `${import.meta.env.BASE_URL}${relativePath}`;

export const PROFILE = {
  name: "Houssam Salek",
  title: "Backend & Full-Stack Developer",
  subtitle: "Building secure, scalable, and useful web applications",
  bio: "Computer Science student at EMSI passionate about backend engineering and full-stack development. I build clean, maintainable systems that solve real problems — from secure APIs to responsive web apps.",
  location: "Tanger-Tetouan-Al Hoceima, Morocco",
  email: "houssam.salek@edu-emsi.ma",
  github: "https://github.com/SHoussam",
  linkedin: "https://www.linkedin.com/in/houssam-salek",
  cv: assetUrl("pdf/cv.pdf"),
  whatsapp: {
    number: "212694294897",
    message: "Hi, I saw your portfolio and would like to chat!"
  }
};

export const HERO_BADGES = [
  "PHP", "Laravel", "MySQL", "React", "JavaScript", "Linux"
];

export const SKILL_GROUPS = [
  {
    title: "Backend",
    icon: "Server",
    description: "Server-side logic, APIs, and secure data operations.",
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Node.js" },
      { name: "Bash" },
      { name: "Python" },
    ]
  },
  {
    title: "Frontend",
    icon: "Monitor",
    description: "Building responsive, accessible, and modern interfaces.",
    items: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML/CSS" },
      { name: "Tailwind CSS" },
    ]
  },
  {
    title: "Databases",
    icon: "Database",
    description: "Data modeling, queries, and secure persistence.",
    items: [
      { name: "MySQL" },
      { name: "PDO" },
      { name: "SQL" },
    ]
  },
  {
    title: "Tools",
    icon: "Wrench",
    description: "Daily environment for shipping and collaboration.",
    items: [
      { name: "Git & GitHub" },
      { name: "Linux" },
      { name: "Docker" },
      { name: "Vite" },
      { name: "VS Code" },
    ]
  }
];

export const PROJECTS = [
  {
    title: "Aim Trainer — Browser Shooting Game",
description:
  "Interactive browser-based aim training game designed to test reaction speed, precision, and hand-eye coordination with dynamic targets and score tracking.",
technologies: ["HTML", "CSS", "JavaScript", "Game Logic"],
    github: "https://github.com/dororo911/Aim.git",
    live: "https://houssamsalek.me/Aim/",
    image: assetUrl("img/aime.png"),
    featured: true,
  },
  {
    title: "Lahek Library — Web App",
    description:
      "PHP/MySQL library management app with authentication, role-based access control, and secure CRUD via PDO.",
    technologies: ["PHP", "MySQL", "PDO", "Laravel", "JavaScript"],
    github: "https://github.com/dororo911/LahekLibrary.git",
    live: null,
    image: assetUrl("img/php.png"),
    featured: true,
  },
  {
    title: "Media Library CLI (C++)",
    description:
      "C++ console application with OOP, multi-role authentication, and file-backed persistence for a media library.",
    technologies: ["C++", "OOP", "STL", "File I/O"],
    github: "https://github.com/dororo911/Media-Library-CLI-C-.git",
    live: null,
    image: assetUrl("img/c++.png"),
    featured: true,
  }
];

export const EXPERIENCE = [
  
    
  {
    date: "2023 — Present",
    title: "EMSI — Ingénierie Informatique & Réseaux",
    description:
      "Coursework in software engineering, web development, systems programming, and applied academic projects.",
    type: "education",
  }
];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "looking-for", label: "Looking For" },
  { id: "contact", label: "Contact" }
];
