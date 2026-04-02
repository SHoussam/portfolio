import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS, assetUrl } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);
  const logoSrc = assetUrl('img/HSB.png');

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 2) {
        setScrollDirection('down');
      } else if (currentY < lastScrollY.current - 2) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentY;

      const heroSection = document.getElementById('about');
      if (!heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowBottomNav(window.scrollY + 80 >= heroBottom);
      } else {
        setShowBottomNav(window.scrollY > 200);
      }

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 180;
      let currentSection = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          currentSection = NAV_ITEMS[i].id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const topOffset = 86;
    const targetY = el.getBoundingClientRect().top + window.scrollY - topOffset;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-3 left-3 sm:left-4 z-[80]"
      >
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center rounded-xl border border-white/20 bg-[#0B1425]/72 backdrop-blur-xl px-2 py-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.38)]"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.img
            src={logoSrc}
            alt="HSB Logo"
            className="w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, y: [0, -2, 0] }}
            transition={{
              opacity: { duration: 0.35, ease: 'easeOut' },
              scale: { duration: 0.35, ease: 'easeOut' },
              y: { duration: 2.8, ease: 'easeInOut', repeat: Infinity },
            }}
          />
        </motion.button>
      </motion.header>

      <motion.nav
        initial={false}
        animate={showBottomNav
          ? { y: 0, opacity: 1, scale: 1 }
          : scrollDirection === 'up'
            ? { y: 34, opacity: 0, scale: 0.94 }
            : { y: 14, opacity: 0, scale: 0.98 }}
        transition={showBottomNav
          ? { type: 'spring', stiffness: 300, damping: 28 }
          : scrollDirection === 'up'
            ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0.25, ease: 'easeOut' }}
        className={`fixed inset-x-0 bottom-5 z-[70] flex justify-center px-3 sm:px-4 ${
          showBottomNav ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-label="Primary navigation"
      >
        <div className="w-max max-w-[94vw] rounded-full border border-white/15 bg-[#0B1425]/75 backdrop-blur-2xl shadow-[0_18px_36px_rgba(0,0,0,0.42)] px-2 py-2">
          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative shrink-0">
                <button
                  onClick={() => handleClick(item.id)}
                  className={`relative z-10 px-3 sm:px-4 md:px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeBottomNav"
                    className="absolute inset-0 rounded-full border border-primary/40 bg-gradient-to-r from-primary/28 to-accent/20 shadow-[0_0_0_1px_rgba(145,106,255,0.16),0_8px_18px_rgba(109,65,255,0.28)]"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
