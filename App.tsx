import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Logo from './components/Logo';
import { COMPANY_INFO } from './constants';
import { generateSitemapXML } from './utils/seoHelper';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Navigation Link Helper
const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick, className = "" }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`hover:text-primary transition-colors cursor-pointer ${className}`}
  >
    {children}
  </Link>
);

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Scroll to top if simply navigating to a new route without scroll params
  useEffect(() => {
    if (!location.search.includes('scrollTo')) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-primary selection:text-white flex flex-col min-h-screen">
      
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex-shrink-0 pt-2 z-50">
            <Logo scale={0.65} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-secondary uppercase text-sm tracking-wide">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/?scrollTo=precos">Preços</NavLink>
            <NavLink to="/?scrollTo=locais">Cidades</NavLink>
            <NavLink to="/contato">Contato</NavLink>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> (41) 99670-1500
            </a>
          </nav>

          {/* Mobile Menu Button - Styled */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden z-[110] relative w-12 h-12 flex items-center justify-center rounded-full transition-colors focus:outline-none ${isMobileMenuOpen ? 'text-secondary' : 'text-primary'}`}
            aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Improved Mobile Slide-Over Menu - High Z-Index to overlay header */}
        <div 
          className={`fixed inset-0 z-[100] flex justify-end md:hidden transition-visibility duration-300 ${
            isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
          }`}
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
               isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleMenu}
          ></div>

          {/* Menu Drawer */}
          <div 
             className={`relative w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
               isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
             }`}
          >
             {/* Drawer Header */}
             <div className="h-20 flex items-center px-6 border-b border-gray-100 bg-gray-50">
                <span className="text-secondary font-black italic tracking-tighter text-lg">A BARATONA</span>
             </div>

             {/* Links */}
             <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                <NavLink 
                    to="/" 
                    onClick={toggleMenu} 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 text-secondary font-bold text-lg border-b border-gray-50"
                >
                    <i className="fas fa-home text-primary w-6"></i> Início
                </NavLink>
                <NavLink 
                    to="/?scrollTo=precos" 
                    onClick={toggleMenu}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 text-secondary font-bold text-lg border-b border-gray-50"
                >
                    <i className="fas fa-tags text-primary w-6"></i> Preços
                </NavLink>
                <NavLink 
                    to="/?scrollTo=locais" 
                    onClick={toggleMenu}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 text-secondary font-bold text-lg border-b border-gray-50"
                >
                    <i className="fas fa-map-marked-alt text-primary w-6"></i> Áreas de Atuação
                </NavLink>
                <NavLink 
                    to="/contato" 
                    onClick={toggleMenu}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 text-secondary font-bold text-lg border-b border-gray-50"
                >
                    <i className="fas fa-envelope text-primary w-6"></i> Contato
                </NavLink>
             </nav>

             {/* Footer / Actions */}
             <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-3 pb-safe">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl shadow-md flex items-center justify-center gap-2 font-bold hover:bg-green-600 transition-colors"
                >
                  <i className="fab fa-whatsapp text-xl"></i> WhatsApp
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full bg-secondary text-white py-3 rounded-xl shadow-md flex items-center justify-center gap-2 font-bold hover:bg-black transition-colors"
                >
                  <i className="fas fa-phone-alt text-xl"></i> Ligar Agora
                </a>
             </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/:slug" element={<LocationPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    console.log("Sitemap generated.");
    // In production, you'd output this to a file or serve via API
    // console.log(generateSitemapXML()); 
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Layout />
      </Router>
    </HelmetProvider>
  );
};

export default App;