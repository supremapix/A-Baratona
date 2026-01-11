import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
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

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-3xl text-secondary z-50 focus:outline-none w-10 h-10 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}></i>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center gap-8 text-2xl font-bold text-secondary uppercase tracking-widest">
            <NavLink to="/" onClick={toggleMenu}>Início</NavLink>
            <NavLink to="/?scrollTo=precos" onClick={toggleMenu}>Preços</NavLink>
            <NavLink to="/?scrollTo=locais" onClick={toggleMenu}>Cidades</NavLink>
            <NavLink to="/contato" onClick={toggleMenu}>Contato</NavLink>
            
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
              className="mt-4 bg-[#25D366] text-white px-8 py-3 rounded-full shadow-xl flex items-center gap-3 text-lg"
            >
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
            
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="bg-black text-white px-8 py-3 rounded-full shadow-xl flex items-center gap-3 text-lg"
            >
              <i className="fas fa-phone-alt"></i> Ligar Agora
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/:slug" element={<LocationPage />} />
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