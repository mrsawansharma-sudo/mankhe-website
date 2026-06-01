import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import StoryFlow from './components/StoryFlow';
import Footer from './components/Footer';
import Regeneration from './pages/Regeneration';
import About from './pages/About';
import Protocol from './pages/Protocol';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <HelmetProvider>
      <main className="relative bg-mankhe-charcoal selection:bg-mankhe-gold selection:text-mankhe-charcoal min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-mankhe-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Overlay */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <Link 
            to="/"
            className="cursor-pointer flex items-center gap-3"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src="/logo.png?v=1" alt="MANKHE Logo" className="h-8 md:h-10 w-auto" />
            <span className="text-xl md:text-2xl font-sans font-bold tracking-tight text-white">MANKHE</span>
          </Link>
        </motion.div>
        
        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-8 pointer-events-auto"
        >
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-display text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-mankhe-gold transition-colors">
            Our Story
          </Link>
          <Link to="/chhattisgarh-regeneration" onClick={() => window.scrollTo(0, 0)} className="font-display text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-mankhe-gold transition-colors">
            Impact
          </Link>
          <Link to="/the-protocol" onClick={() => window.scrollTo(0, 0)} className="font-display text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-mankhe-gold transition-colors">
            Methodology
          </Link>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="font-display text-[10px] uppercase tracking-[0.3em] text-stone-400 hover:text-mankhe-gold transition-colors">
            Contact
          </Link>
        </motion.div>

        {/* Mobile Nav Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white pointer-events-auto"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-mankhe-charcoal z-40 flex flex-col items-center justify-center gap-8 p-8"
          >
            {[
              { name: 'Our Story', path: '/' },
              { name: 'Impact', path: '/chhattisgarh-regeneration' },
              { name: 'Methodology', path: '/the-protocol' },
              { name: 'Contact', path: '/about' },
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-3xl font-serif font-bold text-white hover:text-mankhe-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<StoryFlow />} />
        <Route path="/the-protocol" element={<Protocol />} />
        <Route path="/chhattisgarh-regeneration" element={<Regeneration />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Side Progress Indicator (Only on Home) */}
      {isHome && (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="group flex items-center justify-end gap-4 cursor-pointer">
              <span className="font-display text-[10px] text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                Section {i + 1}
              </span>
              <div className="w-1 h-6 bg-stone-800 group-hover:bg-mankhe-gold transition-colors" />
            </div>
          ))}
        </div>
      )}
    </main>
    </HelmetProvider>
  );
}

