import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


// WhatsApp number: country code 233, no leading zero
const WA_NUMBER = '233547581168';
const WA_MESSAGE = encodeURIComponent("Hello Stuccord! I'd like to discuss a project.");

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group"
      style={{ textDecoration: 'none' }}
    >
      {/* Tooltip */}
      <span
        className="text-white text-sm font-semibold bg-dark-800 px-4 py-2 rounded-full border border-white/10 shadow-xl transition-all duration-300 whitespace-nowrap"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(10px)',
          pointerEvents: 'none',
        }}
      >
        Chat with us
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-2xl"
        style={{ background: '#25D366' }}>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping"
          style={{ background: '#25D366', opacity: 0.4 }} />
        {/* WhatsApp SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 relative z-10" fill="white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.675 4.8 1.848 6.797L2 30l7.395-1.818A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.846-1.604l-.418-.248-4.39 1.08 1.118-4.268-.272-.44A11.448 11.448 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5Zm6.29-8.476c-.345-.172-2.04-1.006-2.355-1.12-.315-.115-.545-.172-.774.172-.23.345-.888 1.12-1.088 1.35-.2.23-.4.258-.744.086-.345-.172-1.455-.537-2.771-1.71-1.024-.915-1.715-2.044-1.916-2.389-.2-.345-.021-.53.15-.702.155-.154.345-.402.517-.603.172-.2.23-.345.345-.574.115-.23.058-.431-.029-.603-.086-.172-.774-1.866-1.06-2.556-.28-.672-.565-.58-.774-.59l-.659-.012c-.23 0-.603.086-.919.431s-1.203 1.177-1.203 2.87 1.232 3.327 1.403 3.557c.172.23 2.424 3.7 5.873 5.19.82.354 1.46.565 1.96.723.823.262 1.572.225 2.163.137.66-.099 2.04-.834 2.327-1.638.287-.804.287-1.492.2-1.638-.086-.144-.315-.23-.66-.402Z"/>
        </svg>
      </div>
    </a>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="relative w-full bg-dark-900 min-h-screen font-sans selection:bg-primary-500/30 selection:text-primary-200">
      {/* Background ambient blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary-800/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navbar />
      
      <main className="relative flex flex-col w-full">
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
