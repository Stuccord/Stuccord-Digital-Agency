import React from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Websites Built To Perform. For High-Growth Brands."
        description="Stuccord builds high-quality websites for clinics, shops, and businesses. Turn visitors into customers with professional web design."
      />
      <Hero />
      {/* Disabling other sections temporarily to find the crash culprit */}
      {/* <Trust /> */}
      {/* <SystemDiagnostics /> */}
      {/* <Services /> */}
      {/* <Work /> */}
      {/* <About /> */}
      {/* <Process /> */}
      {/* <Testimonials /> */}
      {/* <CTA /> */}
    </>
  );
};

export default Home;
