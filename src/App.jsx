import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import FAQPage from './pages/FAQPage';
import CareersPage from './pages/CareersPage';
import SchedulePage from './pages/SchedulePage';
import BrandAssetGenerator from './pages/BrandAssetGenerator';
import SitemapPage from './pages/SitemapPage';
import Contact from './components/Contact';

// Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/brand-assets" element={<BrandAssetGenerator />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/contact" element={<div className="pt-24 min-h-screen container mx-auto"><Contact /></div>} />
          {/* Fallback 404 */}
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
              <h1 className="text-9xl font-bold text-white mb-4">404</h1>
              <p className="text-2xl text-neutral-400 mb-8">Page Not Found</p>
              <a href="/" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-full">Back to Reality</a>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
