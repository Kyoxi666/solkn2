import React from 'react';
import { ViewState } from '../types';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-solkn-white pt-12 pb-12 px-6">
      <div className="container mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#1A332A] text-white p-12 md:p-24">
            {/* Abstract Background Variation */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop" 
                    alt="Abstract Background" 
                    className="w-full h-full object-cover opacity-50 mix-blend-overlay scale-110 object-[center_bottom]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A332A] via-[#1A332A]/80 to-transparent"></div>
            </div>

            <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                <div>
                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8 drop-shadow-sm">
                    Ready to transform <br/> your business?
                    </h2>
                    <Button variant="secondary" onClick={() => onNavigate('CONTACT')}>
                    Start a conversation
                    </Button>
                </div>
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#cef79e] mb-6">Navigate</h4>
                        <ul className="space-y-4 text-white/80">
                        <li onClick={() => onNavigate('SERVICES')} className="cursor-pointer hover:text-white transition-colors">Services</li>
                        <li onClick={() => onNavigate('CASE_STUDIES')} className="cursor-pointer hover:text-white transition-colors">Case Studies</li>
                        <li onClick={() => onNavigate('COMPANY')} className="cursor-pointer hover:text-white transition-colors">Company</li>
                        <li onClick={() => onNavigate('CONTACT')} className="cursor-pointer hover:text-white transition-colors">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#cef79e] mb-6">Connect</h4>
                        <ul className="space-y-4 text-white/80">
                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3"/></a></li>
                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Twitter / X <ArrowUpRight className="w-3 h-3"/></a></li>
                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Email <ArrowUpRight className="w-3 h-3"/></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#cef79e] mb-6">Locate</h4>
                        <p className="text-sm leading-relaxed text-white/80">
                        Harrow, London<br/>
                        Vadodara, India
                        </p>
                    </div>
                </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
                    <div className="w-full max-w-4xl opacity-20 select-none text-white">
                        <Logo className="w-full h-auto" />
                    </div>
                    <div className="text-xs text-white/40 pb-2 md:pb-4 whitespace-nowrap">
                    © 2024 SOLKN IT Services. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;