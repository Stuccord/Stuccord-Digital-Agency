import React from 'react';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Work from '../components/Work';
import Services from '../components/Services';
import Arsenal from '../components/Arsenal';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import IntelFeed from '../components/IntelFeed';
import CTA from '../components/CTA';
import Marquee from '../components/Marquee';
import SystemDiagnostics from '../components/SystemDiagnostics';

import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Premium Digital Engineering & SaaS Development" 
        description="Stuccord engineers elite digital experiences and scale-ready SaaS solutions for industry leaders." 
      />
      <Hero />
      <SystemDiagnostics />
      <Marquee text="Digital Engineering • Brand Dominance • Growth Strategy • Elite Design • " />
      <Trust />
      <Work />
      <Arsenal />
      <Marquee text="Engineered for Revenue • Scaled for Future • Disrupting Markets • " />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <IntelFeed />
      <CTA />
    </>
  );
};

export default Home;
