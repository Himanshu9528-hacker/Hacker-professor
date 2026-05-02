
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black font-mono scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Header Block with Emoji */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className="text-2xl">🧠</span>
          <h2 className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-widest">
            About Hacker Professor
          </h2>
        </div>

        {/* Profile Avatar with Cyan Glow - Centered */}
        <div className="flex justify-center mb-10">
          <div className="relative group">
            <div className="absolute -inset-2 bg-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-2xl border-2 border-cyan-500/30 overflow-hidden bg-zinc-950 flex items-center justify-center p-1">
              <img 
                src="/logo.png" 
                alt="Himanshu Yadav" 
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/bottts/svg?seed=Himanshu&backgroundColor=0a0a0a";
                }}
              />
            </div>
            <div className="mt-4 inline-block bg-zinc-900 border border-white/5 px-4 py-1 rounded text-xs text-cyan-400">
              ID: HIMANSHU YADAV
            </div>
          </div>
        </div>

        {/* Core Personal Details - Centered as per image reference */}
        <div className="space-y-6 text-sm md:text-lg tracking-wide mb-16">
          <p className="text-gray-400">Name: <span className="text-white">Himanshu Yadav</span></p>
          <p className="text-gray-400">Alias: <span className="text-cyan-400 font-bold">Hacker Professor 👨‍💻</span></p>
          <p className="text-gray-400">Roles: <span className="text-white font-medium">Ethical Hacker, Bug Bounty Hunter, Pentester, Coder</span></p>
          
          <div className="pt-6 max-w-2xl mx-auto">
            <p className="text-gray-400">Mission: <span className="text-white">Empower ethical hackers and learners through modular tools, recon engines, and wellness systems.</span></p>
          </div>

          <div className="pt-2">
            <p className="text-gray-400">Philosophy: <span className="text-cyan-400 font-bold">Psych + Tech synergy for clarity and impact.</span></p>
          </div>

          <div className="pt-6">
            <p className="text-gray-400">Inspired by My Teacher: <span className="text-white">Ankit Saxena, Vishal Yadav</span></p>
          </div>

          <div className="pt-2">
            <p className="text-gray-400">Favourite Persons: <span className="text-white">Elon Musk, APJ Abdul Kalam, Sundar Pichai, Kevin Mitnick</span></p>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-4 items-center text-xs md:text-sm font-bold">
            <span className="text-gray-600 uppercase tracking-widest font-normal">Connect:</span>
            <div className="flex gap-4 text-cyan-500">
              <a href="https://github.com/Himanshu9528-hacker" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-cyan-500/20 underline-offset-4">GITHUB</a>
              <span className="text-zinc-800 font-normal">|</span>
              <a href="#" className="hover:text-white transition-colors underline decoration-cyan-500/20 underline-offset-4">LINKEDIN</a>
              <span className="text-zinc-800 font-normal">|</span>
              <a href="#" className="hover:text-white transition-colors underline decoration-cyan-500/20 underline-offset-4">TWITTER</a>
              <span className="text-zinc-800 font-normal">|</span>
              <a href="https://www.instagram.com/coding_life_hacker/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-cyan-500/20 underline-offset-4">INSTAGRAM</a>
              <span className="text-zinc-800 font-normal">|</span>
              <a href="https://www.youtube.com/@HackerProfessor-H.P" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-cyan-500/20 underline-offset-4">YOUTUBE</a>
            </div>
          </div>
        </div>

        {/* Visual Line Splitter */}
        <div className="w-full h-px bg-cyan-950/50 mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        </div>

        {/* Secondary Terminal Content Block */}
        <div className="text-left max-w-3xl mx-auto border-l border-cyan-500/20 pl-8 space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🧠</span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">About Hacker Professor</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">👨‍💻</span>
              <p className="text-green-500 text-lg md:text-xl font-bold">
                I'm Himanshu Yadav — your Hacker Professor.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-1">🎯</span>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                <span className="text-cyan-400 font-black uppercase mr-2">Mission:</span> Empower ethical hacking communities with cutting-edge recon engines and modular security tools.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
