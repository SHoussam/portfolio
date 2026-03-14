
import { useEffect, useMemo, useState } from "react";
import { Timeline } from "./components/ui/timeline";
import {
  useBottomBarScroll,
  useProgressRingOnScroll,
  useRevealOnScroll
} from "./components/ui/scrole";

const assetUrl = (relativePath) => `${import.meta.env.BASE_URL}${relativePath}`;
const HERO_BG_IMAGE = assetUrl("img/HS.png");
const HERO_BG_IMAGE_OPPOSITE = assetUrl("img/ana.png");

const PROFILE = {
  name: "Houssam Salek",
  title: "PFA Intern | Web Development, Linux & AI Assistant Design",
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

const EXPERIENCE = [
  {
    date: "2026",
    title: "PFA Internship - Searching",
    details:
      "Currently looking for a PFA internship starting July 2026 in backend development, web systems, Linux environments, and automation."
  },
  {
    date: "2023 - Present",
    title: "IIR Engineering Student - EMSI",
    details:
      "3rd-year engineering student focused on software engineering, web development, system programming, and practical academic projects."
  }
];

const TIMELINE_DATA = [
  {
    date: "2022",
    title: "Baccalaureat scientifique",
    description:
      "Obtained the scientific baccalaureate diploma, building a strong foundation in mathematics and physics.",
    type: "education",
    image: assetUrl("img/images.jpg")
  },
  {
    date: "09/2023",
    title: "Started EMSI (IIR Engineering)",
    description:
      "Began IIR engineering studies at EMSI, focusing on software development, networking, and IT systems.",
    type: "education",
    image: assetUrl("img/image00002-1024x684.jpeg")
  },
  {
    date: "2024",
    title: "Academic & Personal Projects",
    description:
      "Worked on multiple projects involving C programming, web development (PHP/MySQL, HTML/CSS/JS), and Linux system administration.",
    type: "project",
    image: "https://img-c.udemycdn.com/course/480x270/6132141_520f_2.jpg"
  },
  {
    date: "2025",
    title: "PFA Internship Search",
    description:
      "Actively seeking a PFA internship starting 01/07, focused on backend development, web systems, and automation.",
    type: "experience",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTqQq0U8rSMkyEcc70cBk92cGOwaL4Jon-w&s"
  }
];

const CERTIFICATES = [
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

const PROJECTS = [
  {
    title: "LahekLibrary - Web Library Management System",
    description:
      "PHP/MySQL web application with authentication, role-based access, admin dashboard, media catalog, wishlist system, and secure CRUD operations using PDO.",
    tags: ["PHP", "MySQL", "PDO", "HTML", "CSS", "Linux"],
    image: assetUrl("img/php.png"),
    speed: 0.3
  },
  {
    title: "Multimedia Library Management System (C++)",
    description:
      "C++ console application showcasing advanced OOP concepts, multi-role authentication, subscription management, borrowing logic, and persistent storage.",
    tags: ["C++", "OOP", "STL", "File I/O"],
    image: assetUrl("img/c++.png"),
    speed: 0.2
  },
  {
    title: "SysAuditKit - Linux System Audit Toolkit",
    description:
      "Modular Bash-based Linux audit tool packaged as a Debian .deb, including system reports, process monitoring, and user/permission management.",
    tags: ["Linux", "Bash", "Debian", "System Administration"],
    image: assetUrl("img/Linux.jpg"),
    speed: 0.4
  }
];

const NAV_ITEMS = [
  "about",
  "skills",
  "projects",
  "experience",
  "journey",
  "certificates",
  "contact"
];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "");
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutText, setAboutText] = useState("");
  const [formHint, setFormHint] = useState("");

  const waUrl = useMemo(() => {
    return `https://wa.me/${PROFILE.whatsapp.number}?text=${encodeURIComponent(PROFILE.whatsapp.message)}`;
  }, []);

  useRevealOnScroll();
  useProgressRingOnScroll(waUrl);
  useBottomBarScroll();

  const journeyTimelineData = useMemo(
    () =>
      TIMELINE_DATA.map((item) => ({
        title: item.date,
        content: (
          <div>
            <h4 className="text-neutral-900 dark:text-neutral-100 text-sm md:text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-normal mb-6">{item.description}</p>
            {item.image ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  loading="lazy"
                  className="rounded-lg object-cover h-32 md:h-52 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08)]"
                />
              </div>
            ) : null}
          </div>
        )
      })),
    []
  );

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", theme || "");
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAboutText("Web Developer");
      return undefined;
    }

    const words = ["Web Developer", "Backend Learner", "Linux Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const currentWord = words[wordIndex];
      charIndex = deleting ? charIndex - 1 : charIndex + 1;
      setAboutText(currentWord.slice(0, charIndex));

      let delay = deleting ? 45 : 85;
      if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        delay = 1200;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 250;
      }

      timeoutId = window.setTimeout(tick, delay);
    };

    tick();
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const glow = document.getElementById("mouse-glow");
    if (!glow) return undefined;

    let mouseX = window.innerWidth / 2;
    let mouseY = 0;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      glow.style.opacity = "0";
    };

    const onEnter = () => {
      glow.style.opacity = "1";
    };

    animate();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
    };
  }, []);


  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    const cursor = document.createElement("div");
    cursor.className = "cursor-glow";
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const update = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      raf = requestAnimationFrame(update);
    };

    const enter = () => cursor.classList.add("hovering");
    const leave = () => cursor.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, .card, .tilt-card, input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    update();
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      cursor.remove();
    };
  }, []);

  useEffect(() => {
    const tooltip = document.createElement("div");
    tooltip.className = "decrypt-tooltip";
    document.body.appendChild(tooltip);

    const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const listeners = [];

    document.querySelectorAll("[data-tooltip]").forEach((el) => {
      const originalText = el.getAttribute("data-tooltip") || "";
      let interval = null;

      const onEnter = () => {
        tooltip.classList.add("visible");
        let iteration = 0;
        if (interval) clearInterval(interval);

        interval = setInterval(() => {
          tooltip.textContent = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) return originalText[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          if (iteration >= originalText.length) clearInterval(interval);
          iteration += 0.5;
        }, 20);
      };

      const onLeave = () => {
        tooltip.classList.remove("visible");
        if (interval) clearInterval(interval);
      };

      const onMove = (e) => {
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.top = `${e.clientY}px`;
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("mousemove", onMove);
      listeners.push([el, onEnter, onLeave, onMove]);
    });

    return () => {
      listeners.forEach(([el, onEnter, onLeave, onMove]) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("mousemove", onMove);
      });
      tooltip.remove();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const experienceSection = document.getElementById("experience");
    if (!experienceSection) return undefined;

    const updateAnaVisibility = () => {
      const { top } = experienceSection.getBoundingClientRect();
      document.body.classList.toggle("experience-active", top <= 120);
    };

    updateAnaVisibility();
    window.addEventListener("scroll", updateAnaVisibility, { passive: true });
    window.addEventListener("resize", updateAnaVisibility);

    return () => {
      document.body.classList.remove("experience-active");
      window.removeEventListener("scroll", updateAnaVisibility);
      window.removeEventListener("resize", updateAnaVisibility);
    };
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFormHint("Opening your email app...");
    e.currentTarget.reset();
  };

  return (
    <>
      <div id="mouse-glow"></div>

      <header className="header">
        <a className="logo" href="#top" aria-label="Go to top" data-tooltip="Go to top">
          <span className="logo-dot"></span> HS
        </a>

        <nav className="nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item}`}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="btn ghost" type="button" aria-label="Toggle theme" onClick={() => setTheme(theme === "light" ? "" : "light")}>
            {theme === "light" ? "🌞" : "🌙"}
          </button>
          <button className="btn ghost menu-btn" type="button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </header>

      <nav className="bottom-bar" id="bottomBar" aria-label="Bottom navigation">
        {NAV_ITEMS.map((item) => (
          <a key={`bottom-${item}`} href={`#${item}`}>
            {item[0].toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>

      <main
        id="top"
        className="main"
        style={{
          "--hero-bg-image": `url(${HERO_BG_IMAGE})`,
          "--hero-bg-image-opposite": `url(${HERO_BG_IMAGE_OPPOSITE})`
        }}
      >
        <div className="floating-ana" aria-hidden="true"></div>
        <div className="floating-hs" aria-hidden="true"></div>

        <section className="section hero">
          <div className="hero-left">
            <p className="tag">EMSI • Software Student • Developer</p>
            <h1>
              Hi, I&apos;m <span className="accent">Houssam Salek</span>
            </h1>
            <p className="sub">
              I build clean, practical projects: PHP/MySQL web apps, C++ OOP systems, and Linux/Bash tools.
              I enjoy solving real problems and shipping useful solutions.
            </p>

            <div className="cta">
              <a className="btn" href="#projects" data-tooltip="See Projects">
                See Projects
              </a>
              <a className="btn ghost" href="#about" data-tooltip="About Me">
                About Me
              </a>
            </div>

            <div className="meta">
              <div className="chip">📍 Morocco</div>
              <div className="chip">💻 PHP • MySQL • C++</div>
              <div className="chip">🐧 Linux • Bash • Git</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="card profile-card">
              <div className="profile-head">
                <div>
                  <h3 className="profile-name">{PROFILE.name}</h3>
                  <p className="muted">3rd year EMSI • Junior Developer</p>
                </div>

                <div className="avatar" aria-hidden="true">
                  <img src={assetUrl("img/WhatsApp Image 2026-01-15 at 20.11.08.jpeg")} alt="Houssam Salek" className="houssam" />
                </div>
              </div>

              <div className="profile-links">
                <a className="link profile-link-item" href={PROFILE.github} target="_blank" rel="noreferrer" data-tooltip="GitHub">
                  <span className="link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                      <path d="M12 .5C5.65.5.5 5.65.5 12.01c0 5.09 3.29 9.4 7.85 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.01-2.1-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.69 5.41-5.25 5.7.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </span>
                  <span className="link-text">GitHub</span>
                </a>
                <a className="link profile-link-item" href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-tooltip="LinkedIn">
                  <span className="link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.55V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                    </svg>
                  </span>
                  <span className="link-text">LinkedIn</span>
                </a>
                <a className="link profile-link-item" href={PROFILE.cv} target="_blank" rel="noreferrer" data-tooltip="Download CV">
                  <span className="link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Zm0 1.5L17.5 7H14ZM8 11h8v1.5H8Zm0 3.5h8V16H8Zm0 3.5h5V19.5H8Z" />
                    </svg>
                  </span>
                  <span className="link-text">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section velocity-skew">
          <div className="section-head line-draw">
            <h2>About</h2>
          </div>

          <div className="grid-2">
            <div className="card blur-section">
              <h3>Who I am</h3>
              <p className="about-type-line">
                I am a <span className="about-type-value">{aboutText}</span>
              </p>
              <p>
                Hi! I&apos;m Houssam Salek, a 3rd-year IIR engineering student at EMSI. I&apos;m currently looking for a PFA
                internship starting July 2026.
                <br></br>
                <br></br>I enjoy building web applications with PHP and MySQL, working on Linux, and learning new
                technologies through hands-on projects.
              </p>

              <ul className="list">
                <li>✅ Strong analytical mindset</li>
                <li>✅ Teamwork & communication</li>
                <li>✅ Comfortable with C++ OOP and web development</li>
              </ul>
            </div>

            <div className="card blur-section">
              <h3>What I&apos;m looking for</h3>
              <p>
                I&apos;m looking for a PFA internship (or junior opportunity) where I can contribute to real projects,
                improve my backend skills, and grow as a developer.
              </p>

              <div className="mini-grid">
                <div className="mini">
                  <div className="mini-title">Email</div>
                  <div className="muted">{PROFILE.email}</div>
                </div>
                <div className="mini">
                  <div className="mini-title">Phone</div>
                  <div className="muted">+212 6 94 29 48 97</div>
                </div>
                <div className="mini">
                  <div className="mini-title">Languages</div>
                  <div className="muted">French • English</div>
                </div>
                <div className="mini">
                  <div className="mini-title">Education</div>
                  <div className="muted">Bac Science 2023</div>
                  <div className="muted">EMSI IIR 2023-present</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head line-draw">
            <h2>Skills</h2>
            <p className="muted">My main technologies and tools.</p>
          </div>

          <div className="skills">
            <div className="skill card tilt-card reveal-scale">
              <div className="tilt-card-inner">
                <h3>Backend / Programming</h3>
                <div className="pills">
                  {["PHP", "MySQL", "PDO", "C++", "OOP"].map((x) => (
                    <span className="pill" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
                <p className="muted small">CRUD systems, authentication, file handling, and clean code.</p>
              </div>
            </div>

            <div className="skill card tilt-card reveal-scale">
              <div className="tilt-card-inner">
                <h3>Frontend</h3>
                <div className="pills">
                  {["HTML", "CSS", "JavaScript"].map((x) => (
                    <span className="pill" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
                <p className="muted small">Responsive layouts, animations, and interactive UI.</p>
              </div>
            </div>

            <div className="skill card tilt-card reveal-scale">
              <div className="tilt-card-inner">
                <h3>Tools / Systems</h3>
                <div className="pills">
                  {["Linux", "Bash", "Git", "VS Code"].map((x) => (
                    <span className="pill" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
                <p className="muted small">System scripting, automation, and version control.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section velocity-skew">
          <div className="section-head line-draw">
            <h2>Projects</h2>
            <p className="muted">Some of my best projects built with real technologies.</p>
          </div>

          <div className="projects">
            {PROJECTS.map((p, i) => (
              <div key={p.title} className={`card project-card reveal-scale stagger-${(i % 5) + 1}`}>
                <div className="project-visual parallax-layer" data-speed={p.speed}>
                  <img src={p.image} alt={p.title} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-meta">
                  {p.tags.map((tag) => (
                    <span className="badge" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head line-draw">
            <h2>Experience</h2>
            <p className="muted">My academic and professional timeline.</p>
          </div>

          <div className="timeline">
            {EXPERIENCE.map((item, i) => (
              <div key={item.title} className={`timeline-item card reveal-scale stagger-${(i % 5) + 1}`}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="section velocity-skew">
          <Timeline data={journeyTimelineData} />
        </section>

        <section id="certificates" className="section">
          <div className="section-head line-draw">
            <h2>Certificates</h2>
            <p className="muted">Courses and certifications I&apos;ve completed.</p>
          </div>

          <div className="cert-grid">
            {CERTIFICATES.map((cert, i) => (
              <div key={cert.title} className={`cert-card card reveal-scale stagger-${(i % 5) + 1}`}>
                <div className="cert-preview">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </div>

                <div className="cert-body">
                  <div className="cert-top-row">
                    <div className="cert-info">
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer muted">{cert.issuer}</p>
                      <span className="cert-year">{cert.year}</span>
                    </div>

                    <div className="cert-qr-wrap">
                      <img src={cert.qr} alt={`${cert.title} verification QR code`} className="cert-qr" loading="lazy" />
                      <span className="cert-qr-label">Scan to verify</span>
                    </div>
                  </div>

                  <a className="btn ghost cert-dl" href={cert.pdf} target="_blank" rel="noreferrer">
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section velocity-skew">
          <div className="section-head line-draw">
            <h2>Contact</h2>
            <p className="muted">Feel free to contact me for internship, freelance, or collaboration opportunities.</p>
          </div>

          <div className="grid-2">
            <div className="card blur-section">
              <h3>Let&apos;s talk</h3>
              <p className="muted">Send me a message and I&apos;ll get back to you as soon as possible.</p>

              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a className="link" href={`mailto:${PROFILE.email}`} data-tooltip={PROFILE.email}>
                    {PROFILE.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">GitHub</span>
                  <a className="link" href={PROFILE.github} target="_blank" rel="noreferrer" data-tooltip="github.com/dororo911">
                    github.com/dororo911
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn</span>
                  <a className="link" href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-tooltip="linkedin.com/in/houssam-salek">
                    linkedin.com/in/houssam-salek
                  </a>
                </div>
              </div>
            </div>

            <form className="card form blur-section" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input required type="email" name="email" placeholder="your@email.com" />
              </label>
              <label>
                Message
                <textarea required name="message" rows="5" placeholder="Write your message..."></textarea>
              </label>

              <button className="btn" type="submit" data-tooltip="Send message">
                Send
              </button>
              <p className="muted small">{formHint}</p>
            </form>
          </div>
        </section>

        <footer className="footer">
          <p className="muted small">© {new Date().getFullYear()} Houssam Salek - Built with React.</p>
        </footer>
      </main>
    </>
  );
}
