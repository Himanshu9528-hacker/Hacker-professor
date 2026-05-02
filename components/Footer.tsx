
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-cyan-500/10 font-mono bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-lg font-bold text-cyan-400">
              HACKER PROFESSOR.
            </h2>
            <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-widest">Secure the future_</p>
          </div>
          
          <div className="flex gap-8 text-[11px] font-bold text-gray-500">
            <a href="https://github.com/Himanshu9528-hacker" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">GitHub</a>
            <a href="https://www.instagram.com/coding_life_hacker/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Instagram</a>
            <a href="https://www.youtube.com/@HackerProfessor-H.P" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">YouTube</a>
          </div>
          
          <div className="text-[10px] text-gray-700 font-mono">
            © {new Date().getFullYear()} HIMANSHU YADAV. [VERSION 1.0.4]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
