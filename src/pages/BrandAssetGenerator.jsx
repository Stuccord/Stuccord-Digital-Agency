import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Shield, Zap } from 'lucide-react';

const BrandAssetGenerator = () => {
  const canvasRef = useRef(null);

  const drawDesign = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = (img = null) => {
      // 1. Background (Deep Dark)
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Mesh Gradients
      const grd1 = ctx.createRadialGradient(200, 200, 0, 200, 200, 600);
      grd1.addColorStop(0, 'rgba(16, 185, 129, 0.15)');
      grd1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grd1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 3. Grid Pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 60) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      // 4. Logo Image Logic
      if (img) {
        ctx.shadowBlur = 40;
        ctx.shadowColor = 'rgba(16, 185, 129, 0.3)';
        const aspect = img.width / img.height;
        const h = 160;
        const w = h * aspect;
        ctx.drawImage(img, 600 - (w/2), 110, w, h);
        ctx.shadowBlur = 0;
      }

      // 5. Main Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 80px sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '-2px';
      ctx.fillText('STUCCORD', 600, 420);

      // 6. Subtitle
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = 'italic 500 24px sans-serif';
      ctx.letterSpacing = '10px';
      ctx.fillText('ELITE ENGINEERING & DIGITAL MASTERY', 600, 480);

      // 7. Decorative Accents
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(500, 500);
      ctx.lineTo(700, 500);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    // Initial render without logo
    render();

    // Try to load logo and re-render
    const logoImg = new Image();
    logoImg.src = '/logo.jpg';
    logoImg.onload = () => render(logoImg);
    logoImg.onerror = () => {
      console.warn("logo.jpg not found. Rendering fallback design.");
      render();
    };
  };

  useEffect(() => {
    drawDesign();
  }, []);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'og-image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-primary-500 font-bold tracking-widest text-xs uppercase mb-4 block">Design Infrastructure</span>
            <h1 className="text-4xl lg:text-6xl font-black text-white italic tracking-tight">Social Asset <br/><span className="text-gradient">Generator.</span></h1>
          </div>
          <button 
            onClick={downloadImage}
            className="px-8 py-4 bg-primary-500 text-dark-950 font-black rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-xl shadow-primary-500/20"
          >
            <Download className="w-5 h-5" /> Download OG Image (1200x630)
          </button>
        </div>

        <div className="relative group">
          {/* Preview Container */}
          <div className="absolute -inset-4 bg-primary-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative glass p-4 rounded-[2rem] border border-white/10 overflow-hidden">
            <canvas 
              ref={canvasRef} 
              width="1200" 
              height="630" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl border border-white/5">
              <Sparkles className="text-primary-500 mb-4" />
              <h3 className="text-white font-bold mb-2 text-sm">Mesh Architecture</h3>
              <p className="text-neutral-500 text-xs">Dynamic radial gradients engineered for high-fidelity social previews.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <Shield className="text-primary-500 mb-4" />
              <h3 className="text-white font-bold mb-2 text-sm">Brand Integrity</h3>
              <p className="text-neutral-500 text-xs">Perfect 1200x630 aspect ratio compatible with all major social algorithms.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <Zap className="text-primary-500 mb-4" />
              <h3 className="text-white font-bold mb-2 text-sm">Instant Deployment</h3>
              <p className="text-neutral-500 text-xs">Ready to be placed in your public folder for immediate social ranking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAssetGenerator;
