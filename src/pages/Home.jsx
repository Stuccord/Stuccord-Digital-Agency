import React from 'react';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Features from '../components/Features';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/Contact'; // Note: Renamed export or usage
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Services />
      <Work />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
