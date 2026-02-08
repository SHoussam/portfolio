
// =========================
// Profile Data
// =========================
const PROFILE = {
  name: "Houssam Salek",
  title: "PFA Intern | Web Development, Linux & AI Assistant Design",
  location: "Tanger–Tétouan–Al Hoceïma, Morocco",
  email: "houssamsalek0707@gmail.com",
  github: "https://github.com/dororo911",
  linkedin: "https://www.linkedin.com/in/houssam-salek",
  cv: "cv.pdf",
  summary:
    "3rd-year IIR engineering student at EMSI, seeking a PFA internship starting July 2026. Focused on PHP/MySQL web development, Linux/Bash scripting, and AI assistant design.",
  whatsapp: {
    number: "212694294897", // Replace with actual number
    message: "Hi, I saw your portfolio and would like to chat!"
  }
};

const EXPERIENCE = [
  {
    date: "2026",
    title: "PFA Internship — Searching",
    details:
      "Currently looking for a PFA internship starting July 2026 in backend development, web systems, Linux environments, and automation."
  },
  {
    date: "2023 — Present",
    title: "IIR Engineering Student — EMSI",
    details:
      "3rd-year engineering student focused on software engineering, web development, system programming, and practical academic projects."
  }
];

// =========================
// Timeline Data
// =========================
const TIMELINE_DATA = [
  {
  date: "2005",
  title: "Born",
  description: "Born in 2005 (Houssam Salek).",
  type: "personal",
  image: "houssam.jpg"
},

  {
    date: "2022",
    title: "Baccalauréat scientifique",
    description: "Obtained the scientific baccalaureate diploma, building a strong foundation in mathematics and physics.",
    type: "education",
    image: "images.jpg"
  },
  {
    date: "09/2023",
    title: "Started EMSI (IIR Engineering)",
    description: "Began IIR engineering studies at EMSI, focusing on software development, networking, and IT systems.",
    type: "education",
    image: "image00002-1024x684.jpeg"
  },
  {
    date: "2024",
    title: "Academic & Personal Projects",
    description: "Worked on multiple projects involving C programming, web development (PHP/MySQL, HTML/CSS/JS), and Linux system administration.",
    type: "project",
    image: "journey-2024.jpg"
  },
  {
    date: "2025",
    title: "PFA Internship Search",
    description: "Actively seeking a PFA internship starting 01/07, focused on backend development, web systems, and automation.",
    type: "experience",
    image: "journey-2025.jpg"
  }
];

// =========================
// Certificates Data
// =========================
const CERTIFICATES = [
  {
    title: "Certificate in C++ Programming",
    issuer: "Online Course",
    year: "2025",
    image: "cc++.png",
    pdf: "Coursera C++-POO.pdf",
    qr: "frame (2).png"
  },
  {
    title: "Web Development (HTML/CSS/JS)",
    issuer: "Online Course",
    year: "2025",
    image: "js.png",
    pdf: "Coursera js.pdf",
    qr: "frame.png"
  },
  {
    title: "Linux Fundamentals",
    issuer: "Online Course",
    year: "2025",
    image: "unix.png",
    pdf: "Coursera unix.pdf",   
    qr: "frame (1).png"
  }
];

const PROJECTS = [
  {
    title: "LahekLibrary — Web Library Management System",
    description:
      "PHP/MySQL web application with authentication, role-based access, admin dashboard, media catalog, wishlist system, and secure CRUD operations using PDO.",
    tags: ["PHP", "MySQL", "PDO", "HTML", "CSS", "Linux"],
    image: "php.png",
    speed: 0.30,
    live: "#",
    code: "#"
  },
  {
    title: "Multimedia Library Management System (C++)",
    description:
      "C++ console application showcasing advanced OOP concepts, multi-role authentication, subscription management, borrowing logic, and persistent storage.",
    tags: ["C++", "OOP", "STL", "File I/O"],
    image: "c++.png",
    speed: 0.20,
    live: "#",
    code: "#"
  },
  {
    title: "SysAuditKit — Linux System Audit Toolkit",
    description:
      "Modular Bash-based Linux audit tool packaged as a Debian .deb, including system reports, process monitoring, and user/permission management.",
    tags: ["Linux", "Bash", "Debian", "System Administration"],
    image: "Linux.jpg",
    speed: 0.40,
    live: "#",
    code: "#"
  }
];

// =========================
// Helper Function
// =========================
function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html) e.innerHTML = html;
  return e;
}

// =========================
// Render Projects
// =========================
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  PROJECTS.forEach((p, i) => {
    const card = el("div", "card project-card reveal-scale");
    card.classList.add(`stagger-${(i % 5) + 1}`);

    // Image
    if (p.image) {
      const visual = el("div", "project-visual parallax-layer");
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = p.title;
      visual.appendChild(img);

      if (p.speed) visual.dataset.speed = p.speed;
      card.appendChild(visual);
    }

    card.appendChild(el("h3", "", p.title));
    card.appendChild(el("p", "", p.description));

    const meta = el("div", "project-meta");
    p.tags.forEach((t) => meta.appendChild(el("span", "badge", t)));
    card.appendChild(meta);

    const actions = el("div", "project-actions");

    const liveBtn = el("a", "btn ghost", "Live Demo");
    liveBtn.href = p.live;
    liveBtn.target = "_blank";
    liveBtn.rel = "noreferrer";

    const codeBtn = el("a", "btn ghost", "Code");
    codeBtn.href = p.code;
    codeBtn.target = "_blank";
    codeBtn.rel = "noreferrer";

    actions.appendChild(liveBtn);
    actions.appendChild(codeBtn);

    card.appendChild(actions);
    grid.appendChild(card);
  });
}

// =========================
// Render Timeline (old experience)
// =========================
function renderTimeline() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = "";

  EXPERIENCE.forEach((x, i) => {
    const row = el("div", "timeline-item card reveal-scale");
    row.classList.add(`stagger-${(i % 5) + 1}`);

    row.appendChild(el("div", "timeline-date", x.date));

    const content = el("div", "timeline-content");
    content.appendChild(el("h3", "", x.title));
    content.appendChild(el("p", "", x.details));

    row.appendChild(content);
    timeline.appendChild(row);
  });
}

// =========================
// Type Icons Map
// =========================
const TYPE_ICONS = {
  personal: "🎂",
  education: "🎓",
  project: "💻",
  certificate: "📜",
  experience: "💼"
};

// =========================
// Render Vertical Timeline
// =========================
function renderVerticalTimeline() {
  const container = document.getElementById("verticalTimeline");
  if (!container) return;

  container.innerHTML = "";

  TIMELINE_DATA.forEach((item, i) => {
    const side = i % 2 === 0 ? "left" : "right";

    const wrapper = el("div", `vt-item vt-${side} reveal-scale`);
    wrapper.classList.add(`stagger-${(i % 5) + 1}`);

    // Dot on the line
    const dot = el("div", `vt-dot vt-dot--${item.type || "default"}`);
    dot.innerHTML = TYPE_ICONS[item.type] || "●";
    wrapper.appendChild(dot);

    // Card
    const card = el("div", "vt-card");

    const badge = el("span", `vt-type vt-type--${item.type || "default"}`, item.type || "");
    card.appendChild(badge);

    card.appendChild(el("div", "vt-date", item.date));
    card.appendChild(el("h3", "vt-title", item.title));
    card.appendChild(el("p", "vt-desc", item.description));

    if (item.image) {
      const hoverWrap = el("div", "vt-hover-photo");
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = `${item.title} preview`;
      img.loading = "lazy";
      hoverWrap.appendChild(img);
      card.appendChild(hoverWrap);
    }

    wrapper.appendChild(card);
    container.appendChild(wrapper);
  });
}

// =========================
// Render Certificates
// =========================
function renderCertificates() {
  const grid = document.getElementById("certificatesGrid");
  if (!grid) return;

  grid.innerHTML = "";

  CERTIFICATES.forEach((cert, i) => {
    const card = el("div", "cert-card card reveal-scale");
    card.classList.add(`stagger-${(i % 5) + 1}`);

    // Preview image or placeholder
    const preview = el("div", "cert-preview");
    if (cert.image) {
      const img = document.createElement("img");
      img.src = cert.image;
      img.alt = cert.title;
      img.loading = "lazy";
      preview.appendChild(img);
    } else {
      preview.innerHTML = `<div class="cert-placeholder">📜</div>`;
    }
    card.appendChild(preview);

    const body = el("div", "cert-body");
    const topRow = el("div", "cert-top-row");
    const info = el("div", "cert-info");

    info.appendChild(el("h3", "cert-title", cert.title));
    info.appendChild(el("p", "cert-issuer muted", cert.issuer));
    info.appendChild(el("span", "cert-year", cert.year));
    topRow.appendChild(info);

    if (cert.qr) {
      const qrWrap = el("div", "cert-qr-wrap");
      const qrImg = document.createElement("img");
      qrImg.src = cert.qr;
      qrImg.alt = `${cert.title} verification QR code`;
      qrImg.className = "cert-qr";
      qrImg.loading = "lazy";
      qrWrap.appendChild(qrImg);
      qrWrap.appendChild(el("span", "cert-qr-label", "Scan to verify"));
      topRow.appendChild(qrWrap);
    }

    body.appendChild(topRow);

    if (cert.pdf) {
      const dl = el("a", "btn ghost cert-dl", "⬇ Download PDF");
      dl.href = cert.pdf;
      dl.target = "_blank";
      dl.rel = "noreferrer";
      body.appendChild(dl);
    }

    card.appendChild(body);
    grid.appendChild(card);
  });
}

// =========================
// Set Links + Auto Fill Contact Info
// =========================
function setLinks() {
  const githubA = document.getElementById("githubLink");
  const linkedinA = document.getElementById("linkedinLink");
  const cvA = document.getElementById("cvLink");

  const github2 = document.getElementById("githubLink2");
  const linkedin2 = document.getElementById("linkedinLink2");
  const emailLink = document.getElementById("emailLink");

  const miniEmail = document.getElementById("miniEmail");

  if (githubA) githubA.href = PROFILE.github;
  if (linkedinA) linkedinA.href = PROFILE.linkedin;
  if (cvA) cvA.href = PROFILE.cv;

  if (github2) {
    github2.href = PROFILE.github;
    github2.textContent = PROFILE.github.replace("https://", "");
    github2.setAttribute("data-tooltip", PROFILE.github.replace("https://", ""));
  }

  if (linkedin2) {
    linkedin2.href = PROFILE.linkedin;
    linkedin2.textContent = PROFILE.linkedin.replace("https://", "");
    linkedin2.setAttribute("data-tooltip", PROFILE.linkedin.replace("https://", ""));
  }

  if (emailLink) {
    emailLink.href = `mailto:${PROFILE.email}`;
    emailLink.textContent = PROFILE.email;
    emailLink.setAttribute("data-tooltip", PROFILE.email);
  }

  if (miniEmail) {
    miniEmail.textContent = PROFILE.email;
  }
}

// =========================
// Theme Toggle
// =========================
function initTheme() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;

  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  function updateIcon() {
    const theme = document.documentElement.getAttribute("data-theme");
    btn.textContent = theme === "light" ? "🌞" : "🌙";
  }

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";

    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");

    localStorage.setItem("theme", next || "");
    updateIcon();
  });

  updateIcon();
}

// =========================
// Contact Form (mailto)
// =========================
function initForm() {
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    if (hint) {
      hint.textContent = "Opening your email app...";
    }

    form.reset();
  });
}

// =========================
// Mouse Glow (Background Light)
// =========================
function initMouseGlow() {
  const glow = document.getElementById("mouse-glow");
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = 0;
  let currentX = mouseX;
  let currentY = mouseY;

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
    requestAnimationFrame(animateGlow);
  }

  animateGlow();

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });

  window.addEventListener("mouseenter", () => {
    glow.style.opacity = "1";
  });
}

// =========================
// Scroll Effects System
// =========================
class ScrollEffects {
  constructor() {
    this.scrollY = 0;
    this.targetScrollY = 0;
    this.lastScrollY = 0;
    this.scrollVelocity = 0;
    this.ticking = false;
    this.scrollDirection = "none";

    this.init();
  }

  init() {
    this.bindEvents();
    this.initParallax();
    this.initVelocitySkew();
    this.initBlurSections();
    this.initProgressRing();
    this.initTiltCards();
    this.initLineDraw();
    this.initRevealObserver();
    this.initCursorGlow();
  }

  bindEvents() {
    window.addEventListener(
      "scroll",
      () => {
        this.targetScrollY = window.scrollY;
        this.scrollVelocity = this.targetScrollY - this.lastScrollY;
        this.scrollDirection = this.scrollVelocity > 0 ? "down" : "up";

        if (!this.ticking) {
          requestAnimationFrame(() => {
            this.update();
            this.ticking = false;
          });
          this.ticking = true;
        }
      },
      { passive: true }
    );
  }

  update() {
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.1;
    this.lastScrollY = this.targetScrollY;

    this.updateProgressRing();
    this.updateParallax();
  }

  initParallax() {
    this.parallaxElements = document.querySelectorAll(".parallax-layer");
  }

  updateParallax() {
    const viewportCenter = window.innerHeight / 2;

    this.parallaxElements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const img = el.querySelector("img");

      if (rect.bottom < -120 || rect.top > window.innerHeight + 120) {
        if (img) img.style.transform = "";
        else el.style.transform = "";
        return;
      }

      const speedAttr = parseFloat(el.dataset.speed);
      const speed = !isNaN(speedAttr) ? speedAttr : (i + 1) * 0.2;

      const elementCenter = rect.top + rect.height / 2;
      const distance = viewportCenter - elementCenter;
      const normalized = distance / (window.innerHeight / 2);

      const maxOffset = 28;
      const y = Math.max(
        -maxOffset,
        Math.min(maxOffset, normalized * speed * maxOffset * -1)
      );

      const xPos = Math.sin((rect.top + window.scrollY) * 0.001 + i) * 10;
      const rotate = xPos * 0.03;

      if (img) {
        img.style.transform = `translate3d(${xPos}px, ${y}px, 0) rotate(${rotate}deg)`;
      } else {
        el.style.transform = `translate3d(${xPos}px, ${y}px, 0) rotate(${rotate}deg)`;
      }
    });
  }

  initVelocitySkew() {
    let lastDirection = "";

    window.addEventListener(
      "scroll",
      () => {
        const velocity = Math.min(Math.abs(this.scrollVelocity) * 0.1, 2);
        const direction = this.scrollDirection === "down" ? -1 : 1;

        if (this.scrollDirection !== lastDirection && this.scrollDirection !== "none") {
          document.body.classList.remove("scrolling-down", "scrolling-up");
          document.body.classList.add(`scrolling-${this.scrollDirection}`);
          lastDirection = this.scrollDirection;
        }

        document.querySelectorAll(".velocity-skew").forEach((el) => {
          el.style.transform = `skewY(${velocity * direction * 0.5}deg)`;
        });

        clearTimeout(this.skewTimeout);
        this.skewTimeout = setTimeout(() => {
          document.querySelectorAll(".velocity-skew").forEach((el) => {
            el.style.transform = "skewY(0deg)";
          });
          document.body.classList.remove("scrolling-down", "scrolling-up");
        }, 100);
      },
      { passive: true }
    );
  }

  initBlurSections() {
    const sections = document.querySelectorAll(".blur-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  initProgressRing() {
    const container = document.createElement("div");
    container.className = "progress-ring-container";
    
    const wa = PROFILE.whatsapp;
    const waUrl = `https://wa.me/${wa.number}?text=${encodeURIComponent(wa.message)}`;

    container.innerHTML = `
      <svg class="progress-ring" width="60" height="60">
        <circle cx="30" cy="30" r="28" fill="none" stroke="rgba(124,92,255,0.2)" stroke-width="2"/>
        <circle cx="30" cy="30" r="28" fill="none" stroke="#7c5cff" stroke-width="2" 
                stroke-dasharray="175.9" stroke-dashoffset="0" stroke-linecap="round"/>
      </svg>
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="Contact on WhatsApp">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.984-.365-1.739-.757-2.874-2.513-2.96-2.63-.086-.115-.693-.921-.693-1.758 0-.837.433-1.25.589-1.423.156-.174.347-.217.462-.217.115 0 .231.001.332.005.109.004.258-.041.404.308.145.347.491 1.2.534 1.285.044.085.073.184.014.303-.058.12-.088.19-.174.29-.086.1-.181.222-.259.302-.087.087-.174.188-.074.359.099.172.441.728.95 1.18.654.581 1.201.761 1.373.847.173.086.274.073.376-.044.103-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564c.174.087.289.13.332.202.045.072.045.419-.1.824z"/>
        </svg>
      </a>
    `;
    document.body.appendChild(container);
    this.progressCircle = container.querySelector(".progress-ring circle:last-child");
    this.progressContainer = container;
  }

  updateProgressRing() {
    if (!this.progressCircle) return;

    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const docHeight = scrollHeight - clientHeight;
    const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

    const circumference = 2 * Math.PI * 28;
    const offset = circumference - progress * circumference;

    this.progressCircle.style.strokeDashoffset = offset;

    // Detect if user is at the bottom (with 20px threshold)
    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 20);
    if (this.progressContainer) {
      this.progressContainer.classList.toggle("at-bottom", isAtBottom);
    }
  }

  initTiltCards() {
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        const inner = card.querySelector(".tilt-card-inner") || card;
        inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener("mouseleave", () => {
        const inner = card.querySelector(".tilt-card-inner") || card;
        inner.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      });
    });
  }

  initLineDraw() {
    const lines = document.querySelectorAll(".line-draw");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("drawn");
            }, 200);
          }
        });
      },
      { threshold: 0.5 }
    );

    lines.forEach((line) => observer.observe(line));
  }

  initRevealObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal-scale").forEach((el) => {
      observer.observe(el);
    });
  }

  initCursorGlow() {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.createElement("div");
    cursor.className = "cursor-glow";
    document.body.appendChild(cursor);

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    const clickables = document.querySelectorAll(
      "a, button, .card, .tilt-card, input, textarea"
    );

    clickables.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });
  }
}

// =========================
// Decrypt Tooltip
// =========================
function initDecryptTooltip() {
  const tooltip = document.createElement("div");
  tooltip.className = "decrypt-tooltip";
  document.body.appendChild(tooltip);

  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  document.querySelectorAll("[data-tooltip]").forEach((el) => {
    const originalText = el.getAttribute("data-tooltip");
    let interval = null;

    el.addEventListener("mouseenter", () => {
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

        tooltip.style.left =
          el.getBoundingClientRect().left + el.offsetWidth / 2 + "px";
        tooltip.style.top = el.getBoundingClientRect().top + "px";

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 20);
    });

    el.addEventListener("mouseleave", () => {
      tooltip.classList.remove("visible");
      if (interval) clearInterval(interval);
    });

    el.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.clientX + "px";
      tooltip.style.top = e.clientY + "px";
    });
  });
}

// =========================
// Mobile Menu
// =========================
function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = (e) => {
    if (e) e.stopPropagation();
    const isOpen = mobileMenu.classList.toggle("open");
    menuBtn.textContent = isOpen ? "✕" : "☰";
    mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };

  menuBtn.addEventListener("click", toggleMenu);

  // Close when clicking links
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.textContent = "☰";
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (mobileMenu.classList.contains("open")) {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove("open");
        menuBtn.textContent = "☰";
        mobileMenu.setAttribute("aria-hidden", "true");
      }
    }
  });

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      menuBtn.textContent = "☰";
      mobileMenu.setAttribute("aria-hidden", "true");
    }
  });
}

// =========================
// Bottom Bar (Scroll + Active Section)
// =========================
function initBottomBar() {
  const bar = document.getElementById("bottomBar");
  if (!bar) return;

  const links = Array.from(bar.querySelectorAll("a[href^='#']"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  let activeId = "";

  const setActive = (id) => {
    if (!id || id === activeId) return;
    activeId = id;
    links.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${id}`);
    });
  };

  const visibilityMap = new Map();

  const updateActiveFromVisible = () => {
    const visible = sections.filter((section) => visibilityMap.get(section.id));
    if (!visible.length) return;

    const targetLine = window.innerHeight * 0.35;
    visible.sort((a, b) => {
      const aDist = Math.abs(a.getBoundingClientRect().top - targetLine);
      const bDist = Math.abs(b.getBoundingClientRect().top - targetLine);
      return aDist - bDist;
    });

    setActive(visible[0].id);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.isIntersecting);
      });
      updateActiveFromVisible();
    },
    {
      threshold: [0.15, 0.35, 0.6],
      rootMargin: "-10% 0px -45% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));

  const updateVisibility = () => {
    bar.classList.toggle("show", window.scrollY > 50);
  };

  updateVisibility();
  window.addEventListener(
    "scroll",
    () => {
      updateVisibility();
      updateActiveFromVisible();
    },
    { passive: true }
  );
}

// =========================
// Initialize Everything
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  setLinks();
  renderProjects();
  renderTimeline();
  renderVerticalTimeline();
  renderCertificates();
  initTheme();
  initForm();
  initMouseGlow();
  initMobileMenu();
  initBottomBar();

  new ScrollEffects();
  initDecryptTooltip();
});
