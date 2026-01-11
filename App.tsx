import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import { COMPANY_INFO, IMAGES } from './constants';
import { generateSitemapXML } from './utils/seoHelper';

const App: React.FC = () => {

  // Simulate generating sitemap on mount (check console)
  useEffect(() => {
    console.log("Sitemap XML Generated (Copy for sitemap.xml):");
    console.log(generateSitemapXML().substring(0, 500) + "... (truncated for console)");
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans text-gray-800 antialiased selection:bg-primary selection:text-white">
          
          {/* Header */}
          <header className="fixed w-full z-40 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <img src={IMAGES.logo} alt="A Baratona Logo" className="h-12 w-auto" />
              </Link>

              <nav className="hidden md:flex items-center gap-8 font-bold text-secondary uppercase text-sm tracking-wide">
                <Link to="/" className="hover:text-primary transition-colors">Início</Link>
                <a href="/#precos" className="hover:text-primary transition-colors">Preços</a>
                <a href="/#locais" className="hover:text-primary transition-colors">Cidades</a>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`} 
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i> (41) 99670-1500
                </a>
              </nav>

              {/* Mobile Menu Icon (Simple placeholder for functionality) */}
              <button className="md:hidden text-2xl text-secondary">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:slug" element={<LocationPage />} />
            </Routes>
          </main>

          <Footer />
          <FloatingButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;