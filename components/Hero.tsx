
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchText, setGlitchText] = useState("Experiences");

  // Matrix Rain Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const characters = "0101010101010101010101010101010101010101010101010101010101010101";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0ff'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const original = "Experiences";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let iteration = 0;
    
    const interval = setInterval(() => {
      setGlitchText(prev => 
        original.split("").map((char, index) => {
          if(index < iteration) return original[index];
          return letters[Math.floor(Math.random() * 26)];
        }).join("")
      );
      
      if(iteration >= original.length) {
        clearInterval(interval);
        setTimeout(() => { iteration = 0; }, 3000);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 font-mono">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-[10px] font-bold tracking-[0.3em] text-cyan-400 border border-cyan-400/20 uppercase animate-pulse">
            SYSTEM ACCESS: GRANTED
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8 uppercase tracking-tighter">
            <span className="block opacity-50 mb-2 text-xl md:text-3xl">Injecting Code Into</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic inline-block min-w-[280px]">
              {glitchText}
            </span>
          </h1>
          
          <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/10 max-w-2xl mx-auto mb-10 text-left">
            <p className="text-cyan-400 text-xs mb-3 font-bold uppercase tracking-widest">$ whoami</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
              Himanshu Yadav.<br />
              Ethical Hacker & Full-stack Architect. Building secure digital ecosystems and modular tools for the next generation of cybersecurity.
            </p>
            <p className="text-green-500 text-xs animate-pulse font-bold">_ root@hacker-professor:~$</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/projects" className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-black font-black rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/20 text-sm tracking-widest uppercase">
              Initiate_Protocol
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-xl hover:bg-white/5 transition-all border border-white/10 text-sm tracking-widest uppercase">
              Fetch_CV.exe
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-cyan-500/10 animate-[flicker_2s_infinite]"></div>
    </section>
  );
};

export default Hero;
