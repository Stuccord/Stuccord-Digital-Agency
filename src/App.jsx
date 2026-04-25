import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
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
import ContactPage from './pages/ContactPage';
import OnboardingPage from './pages/OnboardingPage';
import MethodologyPage from './pages/MethodologyPage';
import InvestmentPage from './pages/InvestmentPage';
import InsightsPage from './pages/InsightsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WebDesign from './pages/services/WebDesign';
import WebDev from './pages/services/WebDev';
import Ecommerce from './pages/services/Ecommerce';
import UXDesign from './pages/services/UXDesign';
import Maintenance from './pages/services/Maintenance';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          
          {/* Service Subpages */}
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/ux-design" element={<UXDesign />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          
          {/* Fallback 404 */}
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
              <h1 className="text-9xl font-bold text-white mb-4">404</h1>
              <p className="text-2xl text-neutral-400 mb-8">Page Not Found</p>
              <Link to="/" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-full">Back to Reality</Link>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
