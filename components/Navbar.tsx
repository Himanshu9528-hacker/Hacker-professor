
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${isScrolled ? 'py-4 bg-black/95 border-b border-cyan-500/20 backdrop-blur-md' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-cyan-400 hover:text-white transition-colors tracking-tighter">
          Hacker Professor
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold tracking-[0.2em]">
          <Link 
            to="/about" 
            className={`transition-colors h-full flex items-center ${isActive('/about') ? 'text-white' : 'text-cyan-500/80 hover:text-white'}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/skills" 
            className={`transition-colors h-full flex items-center ${isActive('/skills') ? 'text-white' : 'text-cyan-500/80 hover:text-white'}`}
          >
            SKILLS
          </Link>
          <Link 
            to="/projects" 
            className={`transition-colors h-full flex items-center ${isActive('/projects') ? 'text-white' : 'text-cyan-500/80 hover:text-white'}`}
          >
            TOOLS
          </Link>
          <Link 
            to="/" 
            className={`transition-colors h-full flex items-center ${isActive('/blog') ? 'text-white' : 'text-cyan-500/80 hover:text-white'}`}
          >
            BLOG
          </Link>
          <Link 
            to="/" 
            className={`transition-colors h-full flex items-center ${isActive('/awareness') ? 'text-white' : 'text-cyan-500/80 hover:text-white'}`}
          >
            AWARENESS
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors h-full flex items-center ${isActive('/contact') ? 'text-white' : 'text-cyan-500/80 hover:text-white'}`}
          >
            CONTACT
          </Link>
          <Link 
            to="/" 
            className={`transition-colors h-full flex items-center ${isActive('/information') ? 'text-white' : 'text-cyan-500/80 hover:text-white'}`}
          >
            INFORMATION
          </Link>
        </div>
        
        <button className="lg:hidden text-cyan-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
