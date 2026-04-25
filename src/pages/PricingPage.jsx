import React from 'react';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

const PricingPage = () => {
  return (
    <>
      <SEO
        title="Pricing | Stuccord Agency"
        description="Transparent website and digital product pricing from Stuccord Agency. Choose from Starter (¢4,500), Growth (¢7,200), or Elite (¢9,000) packages."
      />
      <Pricing standalone={true} />
      <CTA />
    </>
  );
};

export default PricingPage;
