import React from 'react';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import SystemDiagnostics from '../components/SystemDiagnostics';
import Services from '../components/Services';
import Work from '../components/Work';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Websites Built To Perform. For High-Growth Brands."
        description="Stuccord builds high-quality websites for clinics, shops, and businesses. Turn visitors into customers with professional web design."
      />
      <Hero />
      <Trust />
      <SystemDiagnostics />
      <Services />
      <Work />
      <About />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
