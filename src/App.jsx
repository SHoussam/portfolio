
import { useEffect, useMemo, useState } from "react";
import {
  useBottomBarScroll,
  useProgressRingOnScroll,
  useRevealOnScroll
} from "./components/ui/scrole";
import {
  assetUrl,
  AVATAR_IMAGE,
  CERTIFICATES,
  EXPERIENCE,
  HERO_BG_IMAGE,
  HERO_BG_IMAGE_OPPOSITE,
  NAV_ITEMS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS
} from "./data/portfolioData";

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

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", theme || "");
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAboutText("Backend Developer");
      return undefined;
    }

    const words = ["Backend Developer", "Full-Stack Developer", "Linux Enthusiast"];
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
          <img src={assetUrl("img/HS.png")} alt="Houssam Salek monogram logo" className="logo-img" width="30" />
        </a>

        <nav className="nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
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
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <nav className="bottom-bar" id="bottomBar" aria-label="Bottom navigation">
        {NAV_ITEMS.map((item) => (
          <a key={`bottom-${item.id}`} href={`#${item.id}`}>
            {item.label}
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
            <p className="tag">Computer Science Student</p>
            <h1 className="h">
              Houssam <span className="accent">Salek</span>
            </h1>
            

            <div className="cta">
              <a className="btn" href="#projects" data-tooltip="See Projects">
                View Projects
              </a>
             
              <a className="btn ghost" href={PROFILE.cv} target="_blank" rel="noreferrer" data-tooltip="Download CV">
                Download CV
              </a>
              <a className="btn ghost" href="#contact" data-tooltip="Contact Me">
                Contact Me
              </a>
            </div>

            <div className="meta">
              <div className="chip">📍 Morocco</div>
        
            </div>
          </div>

          <div className="hero-right">
            

                <div className="avatar" aria-hidden="true">
                  <img src={AVATAR_IMAGE} alt="Houssam Salek" className="houssam" />
                </div>
              </div>

              
            
         
        </section>

        <section id="about" className="section velocity-skew" aria-labelledby="about-title">
          <div className="section-head line-draw">
            <h2 id="about-title">About Me</h2>
          </div>

          <div className="grid-2">
            <div className="card blur-section">
              <h3>Who I am</h3>
              <p className="about-type-line">
                I am a <span className="about-type-value">{aboutText}</span>
              </p>
              <p>
                Backend-focused Computer Science student who likes designing clean APIs, working with relational databases,
                and delivering features end-to-end. I learn fast, communicate clearly, and enjoy collaborating to ship
                reliable software.
              </p>

              <ul className="list">
                <li>Strong problem-solving and debugging mindset</li>
                <li>Hands-on with PHP, MySQL, PDO, React, and JavaScript</li>
                <li>Comfortable in Linux, Bash, and Git workflows</li>
              </ul>
            </div>

            <div className="card blur-section">
              <h3>What I&apos;m looking for</h3>
              <p>
                I&apos;m seeking a PFA internship or junior role in backend, full-stack, or software engineering where I can
                contribute to real products, strengthen my backend skills, and keep learning in a professional environment.
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
        
        <section id="experience" className="section">
          <div className="section-head line-draw">
            <h2>Experience & Education</h2>
            <p className="muted">Academic track and internship objective.</p>
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

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="section-head line-draw">
            <h2 id="skills-title">Skills</h2>
            <p className="muted">Technologies and tools grouped by category.</p>
          </div>

          <div className="skills">
            {SKILL_GROUPS.map((group, i) => (
              <article key={group.title} className={`skill card tilt-card reveal-scale stagger-${(i % 5) + 1}`}>
                <div className="tilt-card-inner">
                  <h3>{group.title}</h3>
                  <div className="pills">
                    {group.items.map((item) => (
                      <span className="pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="muted small">{group.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section velocity-skew" aria-labelledby="projects-title">
          <div className="section-head line-draw">
            <h2 id="projects-title">Projects</h2>
            <p className="muted">Selected projects with technologies, repository links, and demos.</p>
          </div>

          <div className="projects">
            {PROJECTS.map((p, i) => (
              <article key={p.title} className={`project-card card reveal-scale stagger-${(i % 5) + 1}`}>
                <div className="project-visual parallax-layer" data-speed={p.speed}>
                  <img src={p.image} alt={`${p.title} project preview`} loading="lazy" />
                </div>

                <div className="project-body">
                  <div className="project-links">
                    {p.github && (
                      <a className="link" href={p.github} target="_blank" rel="noreferrer">
                        GitHub Repository
                      </a>
                    )}
                    {p.live && (
                      <a className="link" href={p.live} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        

        <section id="certificates" className="section">
          <div className="section-head line-draw">
            <h2>Certificates</h2>
            <p className="muted">Selected certifications supporting my core skills.</p>
          </div>

          <div className="cert-grid">
            {CERTIFICATES.map((cert, i) => (
              <div key={cert.title} className={`cert-card card reveal-scale stagger-${(i % 5) + 1}`}>
                

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

        <section id="contact" className="section velocity-skew" aria-labelledby="contact-title">
          <div className="section-head line-draw">
            <h2 id="contact-title">Contact</h2>
            <p className="muted">Let&apos;s connect about internships, collaborations, or questions.</p>
          </div>

          <div className="grid-2">
            <div className="card blur-section">
              <h3>Let&apos;s talk</h3>
              <p className="muted">Send me a message and I&apos;ll respond quickly.</p>

              <div className="contact-list">
                <div className="contact-item">
                  <span className="link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.1l-9 5.4-9-5.4V5Zm0 3.4V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.4l-8.48 5.08a1 1 0 0 1-1.04 0L3 8.4Z" />
                    </svg>
                  </span>
                  <span className="contact-label">Email</span>
                  <a className="link" href={`mailto:${PROFILE.email}`} data-tooltip={PROFILE.email}>
                    {PROFILE.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                      <path d="M12 .5C5.65.5.5 5.65.5 12.01c0 5.09 3.29 9.4 7.85 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.01-2.1-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.69 5.41-5.25 5.7.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </span>
                  <span className="contact-label">GitHub</span>
                  <a className="link" href={PROFILE.github} target="_blank" rel="noreferrer" data-tooltip="github.com/dororo911">
                    github.com/dororo911
                  </a>
                </div>
                <div className="contact-item">
                  <span className="link-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.55V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                    </svg>
                  </span>
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
