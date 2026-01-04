import React from 'react';
import { ViewState } from '../types';
import Button from '../components/Button';
import { SERVICES, CASE_STUDIES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: ViewState, id?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Select specific services for the 3-column layout to match the design aesthetics
  const featuredServices = [
    SERVICES[0], // Managed IT
    SERVICES[2], // Cybersecurity
    SERVICES[4]  // AI Transformation
  ];

  const featuredCaseStudy = CASE_STUDIES[0];
  const secondaryCaseStudies = CASE_STUDIES.slice(1, 4);

  return (
    <div className="w-full">
      {/* Hero Section - Polished & Elegant */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#1A332A] text-white">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
             {/* 
                scale-[1.3] zooms in the video by 30% to push the bottom Veo watermark out of the view.
                object-cover ensures it fills the area.
                translate-y-[-5%] shifts the video slightly up to prioritize the center/top content.
             */}
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover scale-[1.3] -translate-y-[5%] pointer-events-none opacity-90"
                src="https://integratedbiosciences.com/wp-content/uploads/2025/10/integrated-loop-optimized.mp4" 
             />
             
             {/* Gradient Overlays for Readability */}
             <div className="absolute inset-0 bg-[#1A332A]/50 mix-blend-multiply"></div> 
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A332A] via-transparent to-[#1A332A]/30 opacity-90"></div>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,51,42,0.8)_100%)]"></div>
        </div>

        <div className="container mx-auto relative z-10 px-6 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-light leading-[0.9] tracking-[-0.04em] mb-12 drop-shadow-2xl">
              Engineering the future <br/>
              of <span className="font-normal text-[#cef79e]">digital resilience.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed drop-shadow-md">
              We unravel complex business challenges with intelligent IT solutions, cybersecurity, and AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button 
                onClick={() => onNavigate('SERVICES')}
                className="group relative px-8 py-4 bg-[#cef79e] text-[#1A332A] rounded-full text-sm font-semibold tracking-wide overflow-hidden transition-all hover:pr-12 hover:shadow-[0_0_20px_rgba(206,247,158,0.4)]"
               >
                 <span className="relative z-10">Discover Our Platform</span>
                 <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4" />
                 </span>
               </button>
               <button 
                 onClick={() => onNavigate('CONTACT')}
                 className="px-8 py-4 text-white border border-white/20 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
               >
                  Get Started
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-[#cef79e] py-6 overflow-hidden border-b border-[#1A332A]/10">
        <div className="flex whitespace-nowrap">
           <div className="flex animate-marquee min-w-full shrink-0 items-center gap-12 px-6">
              {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-3xl md:text-5xl font-light tracking-tight text-[#1A332A] uppercase">
                     Cybersecurity Experts — Artificial Intelligence — Cloud Transformation — Managed IT Services — Digital Growth — 
                  </span>
              ))}
           </div>
           <div className="flex animate-marquee min-w-full shrink-0 items-center gap-12 px-6" aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-3xl md:text-5xl font-light tracking-tight text-[#1A332A] uppercase">
                     Cybersecurity Experts — Artificial Intelligence — Cloud Transformation — Managed IT Services — Digital Growth — 
                  </span>
              ))}
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-solkn-white pt-32">
        <div className="container mx-auto px-6 mb-24">
           <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
              <div className="mb-8 flex items-center gap-3">
                 <span className="w-2 h-2 bg-solkn-lime rounded-full animate-pulse"></span>
                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-solkn-dark/50">Our Services</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-light leading-[1.1] mb-8 text-solkn-dark">
                 Transforming businesses through <br className="hidden md:block"/>
                 <span className="font-medium text-solkn-dark/80">intelligent IT solutions.</span>
              </h2>

              <p className="text-lg md:text-xl text-solkn-dark/60 max-w-2xl mb-12 leading-relaxed font-light">
                 From cybersecurity to AI-powered transformation, we deliver technology that drives real results. Our integrated platform enables precise control and strategic growth.
              </p>
           </div>
        </div>

        {/* 3-Column Service Pillars */}
        <div className="grid md:grid-cols-3 w-full">
            {/* Pillar 1: Managed IT - Light Lime Green */}
            <div 
                className="group relative bg-[#cef79e] p-10 md:p-16 min-h-[500px] flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#bcf285]"
                onClick={() => onNavigate('SERVICE_DETAIL', featuredServices[0].id)}
            >
                <div className="flex justify-between items-start border-b border-solkn-dark/10 pb-8 mb-8">
                    <featuredServices[0].icon className="w-20 h-20 stroke-[0.8] text-solkn-dark transition-transform group-hover:scale-110 duration-500" />
                    <span className="text-xs font-mono font-bold text-solkn-dark/60 mt-2">01.</span>
                </div>
                <div>
                    <h3 className="text-3xl font-light mb-6 text-solkn-dark">{featuredServices[0].title}</h3>
                    <p className="text-base font-medium leading-relaxed text-solkn-dark/70 max-w-xs">
                        {featuredServices[0].shortDescription}
                    </p>
                </div>
            </div>

            {/* Pillar 2: Cybersecurity - Dark */}
            <div 
                className="group relative bg-[#222f30] p-10 md:p-16 min-h-[500px] flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#1a2425]"
                onClick={() => onNavigate('SERVICE_DETAIL', featuredServices[1].id)}
            >
                <div className="flex justify-between items-start border-b border-white/10 pb-8 mb-8">
                    <featuredServices[1].icon className="w-20 h-20 stroke-[0.8] text-white transition-transform group-hover:scale-110 duration-500" />
                    <span className="text-xs font-mono font-bold text-white/60 mt-2">02.</span>
                </div>
                <div>
                    <h3 className="text-3xl font-light mb-6 text-white">{featuredServices[1].title}</h3>
                    <p className="text-base font-medium leading-relaxed text-white/70 max-w-xs">
                        {featuredServices[1].shortDescription}
                    </p>
                </div>
            </div>

            {/* Pillar 3: AI Transformation - Light Grey */}
            <div 
                className="group relative bg-[#e7e8e1] p-10 md:p-16 min-h-[500px] flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#dcded6]"
                onClick={() => onNavigate('SERVICE_DETAIL', featuredServices[2].id)}
            >
                <div className="flex justify-between items-start border-b border-solkn-dark/10 pb-8 mb-8">
                    <featuredServices[2].icon className="w-20 h-20 stroke-[0.8] text-solkn-dark transition-transform group-hover:scale-110 duration-500" />
                    <span className="text-xs font-mono font-bold text-solkn-dark/60 mt-2">03.</span>
                </div>
                <div>
                    <h3 className="text-3xl font-light mb-6 text-solkn-dark">{featuredServices[2].title}</h3>
                    <p className="text-base font-medium leading-relaxed text-solkn-dark/70 max-w-xs">
                        {featuredServices[2].shortDescription}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Platform/Strategic Overview Breaker */}
      <section className="px-6 pt-32 pb-0">
        <div className="container mx-auto">
           <div className="relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-center bg-[#4A7A6A] shadow-2xl shadow-solkn-dark/5">
               {/* Background with blur and mesh effect */}
               <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-110"
                    alt="Abstract Background"
                  />
                  {/* Additional gradient for the 'breaker' look */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3E] via-[#2C4A3E]/60 to-transparent mix-blend-multiply"></div>
               </div>

               <div className="relative z-10 w-full p-12 md:p-20 grid md:grid-cols-12 gap-12 items-center">
                   {/* Label */}
                   <div className="md:col-span-4 flex justify-start md:justify-center">
                       <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f7f7f5] rounded-md shadow-sm">
                           <span className="w-2 h-2 rounded-sm bg-solkn-lime"></span>
                           <span className="text-[10px] font-bold tracking-widest uppercase text-solkn-dark">Platform Overview</span>
                       </div>
                   </div>

                   {/* Text */}
                   <div className="md:col-span-8">
                       <p className="text-2xl md:text-4xl font-light text-white leading-tight">
                           Our integrated platform enables precise, dynamic control of digital infrastructure and security pathways, generating high-fidelity insights that, combined with advanced AI, unlock systematic optimization of previously inaccessible growth opportunities.
                       </p>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* Our Company Section */}
      <section className="bg-solkn-white py-32 px-6">
        <div className="container mx-auto">
             <div className="flex items-center gap-3 mb-16">
                 <span className="w-2 h-2 bg-solkn-lime rounded-full"></span>
                 <span className="text-xs font-bold uppercase tracking-[0.2em] text-solkn-dark/50">Our Company</span>
             </div>

             <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left Image - Split Layout */}
                <div className="relative rounded-[3rem] overflow-hidden h-[600px] group">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                        alt="Solkn Team" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-solkn-dark/50 to-transparent opacity-60"></div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-6xl font-light leading-[1.1] mb-12 text-solkn-dark">
                        Bold innovation to unlock <span className="text-[#4A7A6A] font-medium">digital potential</span> for global enterprises.
                    </h2>
                    
                    <div className="space-y-8 text-lg font-light text-solkn-dark/70 leading-relaxed">
                        <p>
                            We are advancing a pipeline of novel digital solutions by unraveling complex business challenges with cloud architecture, cybersecurity, and AI. Built on pioneering engineering from our technical co-founders and powered by a world-class team of innovators, we are pushing the boundaries of how technology can be leveraged.
                        </p>
                        <p>
                             Our strategies have been recognized by industry leaders, underscoring the impact of our approach. Today, our mission targets digital transformation, while our ultimate ambition is far bolder: to fundamentally rewrite the future of business technology.
                        </p>
                    </div>

                    <div className="mt-12">
                         <button 
                            onClick={() => onNavigate('COMPANY')}
                            className="group relative px-8 py-4 bg-solkn-dark text-white rounded-full text-sm font-semibold tracking-wide overflow-hidden transition-all hover:pr-12"
                           >
                             <span className="relative z-10">Learn More About Us</span>
                             <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4" />
                             </span>
                        </button>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* Case Studies / Newsroom Section - Updated to match image */}
      <section className="bg-[#f0f0ed] py-32 px-6">
        <div className="container mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <h2 className="text-6xl md:text-8xl font-light tracking-tight text-solkn-dark">Newsroom</h2>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => onNavigate('CASE_STUDIES')}
                        className="px-6 py-3 bg-[#222f30] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-colors"
                    >
                        View All Articles
                    </button>
                    <button 
                        onClick={() => onNavigate('CASE_STUDIES')}
                        className="w-12 h-12 bg-[#cef79e] rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                    >
                        <ArrowRight className="w-5 h-5 text-solkn-dark" />
                    </button>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-8">
                
                {/* Featured Large Card */}
                <div className="bg-white rounded-[2.5rem] p-4 flex flex-col lg:flex-row gap-8 lg:h-[600px] group cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => onNavigate('CASE_STUDIES')}>
                    <div className="lg:w-1/2 h-full overflow-hidden rounded-[2rem]">
                        <img 
                            src={featuredCaseStudy.image} 
                            alt={featuredCaseStudy.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-between p-4 lg:p-12">
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <span className="px-3 py-1 bg-[#f0f0ed] text-solkn-dark/60 text-[10px] font-bold uppercase tracking-widest rounded-md">
                                    {featuredCaseStudy.category || 'Case Study'}
                                </span>
                                <span className="text-xs font-mono text-solkn-dark/40 uppercase tracking-wide">
                                    {featuredCaseStudy.date || 'Sep 2025'}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8 text-solkn-dark">
                                {featuredCaseStudy.title}
                            </h3>
                            <p className="text-lg text-solkn-dark/60 leading-relaxed font-light line-clamp-4">
                                In this landmark project, {featuredCaseStudy.challenge} {featuredCaseStudy.solution}
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                             <span className="text-xs font-bold uppercase tracking-widest text-solkn-dark/60">Read Article</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - 3 Columns */}
                <div className="grid md:grid-cols-3 gap-8">
                    {secondaryCaseStudies.map((study, idx) => {
                        // Alternate styles based on the provided image pattern (Light, Dark, Dark)
                        const isDark = idx > 0; 
                        return (
                            <div 
                                key={study.id} 
                                className={`rounded-[2.5rem] p-8 md:p-10 min-h-[420px] flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${isDark ? 'bg-[#2C4A3E] text-white' : 'bg-white text-solkn-dark'}`}
                                onClick={() => onNavigate('CASE_STUDIES')}
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-12">
                                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md ${isDark ? 'bg-white/10 text-white/80' : 'bg-[#f0f0ed] text-solkn-dark/60'}`}>
                                            {study.category || 'News'}
                                        </span>
                                        <span className={`text-xs font-mono uppercase tracking-wide ${isDark ? 'text-white/40' : 'text-solkn-dark/40'}`}>
                                            {study.date || '2025'}
                                        </span>
                                    </div>
                                    <h4 className="text-2xl font-normal leading-snug mb-4">
                                        {study.title}
                                    </h4>
                                </div>
                                
                                <div className="flex justify-between items-end">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-solkn-dark/60'}`}>Read Article</span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-[#cef79e] text-solkn-dark' : 'bg-[#cef79e] text-solkn-dark'}`}>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
      </section>

      {/* Why Choose SOLKN */}
      <section className="py-32 px-6 bg-[#f7f7f5] border-t border-solkn-dark/5">
        <div className="container mx-auto">
          <div className="mb-16 border-b border-solkn-dark/10 pb-8">
            <h2 className="text-4xl font-light">Why Choose SOLKN</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Certified Excellence", desc: "Cyber Essentials Certified, JOSCAR Registered, and Good Business Charter Accredited." },
              { title: "Global Expertise", desc: "Headquartered in Harrow, London, with operations in India—delivering round-the-clock support." },
              { title: "Trusted Partnerships", desc: "We work with industry leaders: Fortinet, Palo Alto Networks, Microsoft Azure, AWS." },
              { title: "Values-Driven", desc: "Committed to sustainability, equality, and ethical business practices." }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-full border border-solkn-dark/20 flex items-center justify-center mb-6 group-hover:bg-solkn-dark group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                <p className="text-sm text-solkn-dark/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;