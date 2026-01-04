import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { ViewState } from '../types';
import Logo from './Logo';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between rounded-full bg-solkn-white/80 backdrop-blur-md px-8 py-4 shadow-sm border border-white/50 transition-all duration-500`}>
          
          {/* Logo */}
          <div 
            className="cursor-pointer z-50 flex items-center"
            onClick={() => onNavigate('HOME')}
          >
            <Logo className="h-8 w-auto text-solkn-dark" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li className="cursor-pointer text-sm font-medium text-solkn-dark/70 hover:text-solkn-dark transition-colors" onClick={() => onNavigate('HOME')}>Home</li>
              {NAV_ITEMS.map((item) => (
                <li 
                  key={item.label}
                  className={`cursor-pointer text-sm font-medium transition-colors ${currentView === item.id ? 'text-solkn-dark font-bold' : 'text-solkn-dark/70 hover:text-solkn-dark'}`}
                  onClick={() => onNavigate(item.id as ViewState)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onNavigate('CONTACT')}
              className="rounded-full bg-solkn-dark px-6 py-3 text-xs font-semibold text-white transition-transform hover:scale-105"
            >
              Work with us
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-solkn-white flex flex-col justify-center items-center">
          <ul className="flex flex-col gap-8 text-center">
             <li className="text-2xl font-light text-solkn-dark cursor-pointer" onClick={() => { onNavigate('HOME'); setIsMobileMenuOpen(false); }}>Home</li>
             {NAV_ITEMS.map((item) => (
                <li 
                  key={item.label}
                  className="text-2xl font-light text-solkn-dark cursor-pointer"
                  onClick={() => { onNavigate(item.id as ViewState); setIsMobileMenuOpen(false); }}
                >
                  {item.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;