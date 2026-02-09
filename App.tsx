
import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

// Lazy loading for pages to improve initial load time (LCP)
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import HowItWorks from './components/HowItWorks.tsx';

const Process = lazy(() => import('./components/Process.tsx'));
const Gallery = lazy(() => import('./components/Gallery.tsx'));
const Trust = lazy(() => import('./components/Trust.tsx'));
const Testimonials = lazy(() => import('./components/Testimonials.tsx'));
const FAQ = lazy(() => import('./components/FAQ.tsx'));
const Differentiators = lazy(() => import('./components/Differentiators.tsx'));
const Partners = lazy(() => import('./components/Partners.tsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));

// Simple loading placeholder for Suspense
// Minimal loading placeholder for lighter weight
const SectionLoader = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center opacity-0 animate-fade-in fill-mode-forwards" style={{ animationDelay: '200ms' }}>
    <div className="w-8 h-8 border-[3px] border-brand-accent/20 border-t-brand-accent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Prefetch other pages when browser is idle to ensure instant navigation
  useEffect(() => {
    const prefetchPages = async () => {
      try {
        // Wait for Home to settle
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Background prefetch
        import('./pages/ServicesPage.tsx');
        import('./pages/ContactPage.tsx');
        import('./pages/AboutPage.tsx');
      } catch (e) {
        console.warn('Prefetching inhibited');
      }
    };

    if (currentPage === 'home') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => prefetchPages());
      } else {
        prefetchPages();
      }
    }
  }, [currentPage]);

  const initObserver = useCallback(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sync das Rotas
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash !== currentPage) {
        setIsNavigating(true);
        requestAnimationFrame(() => {
          setCurrentPage(hash);
          window.scrollTo({ top: 0, behavior: 'instant' });
          setTimeout(() => setIsNavigating(false), 200);
        });
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentPage]);

  // Re-init recursos visuais
  useEffect(() => {
    if (!isNavigating) {
      const cleanup = initObserver();
      return cleanup;
    }
  }, [currentPage, isNavigating, initObserver]);

  const navigate = (page: string) => {
    if (page === currentPage) return;
    window.location.hash = page;
  };

  const pageContent = useMemo(() => {
    return (
      <Suspense fallback={<SectionLoader />}>
        {currentPage === 'servicos' && <ServicesPage />}
        {currentPage === 'contato' && <ContactPage />}
        {currentPage === 'sobre' && <AboutPage />}
        {currentPage === 'home' && (
          <>
            <Hero />
            <Services onNavigate={navigate} />
            <HowItWorks />
            <Process />
            <Gallery />
            <FAQ />
            <Differentiators />
            <Trust />
            <Partners />
            <Testimonials />
          </>
        )}
      </Suspense>
    );
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden font-inter">
      {/* Barra de Progresso Superior */}
      <div className={`fixed top-0 left-0 w-full h-[3px] bg-brand-accent z-[250] transition-transform duration-300 origin-left ${isNavigating ? 'scale-x-100' : 'scale-x-0 opacity-0'}`} />

      <Navbar onNavigate={navigate} currentPage={currentPage} />

      <main className={`relative z-10 transition-all duration-200 ${isNavigating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        {pageContent}
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;

