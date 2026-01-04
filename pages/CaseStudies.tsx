import React from 'react';
import { CASE_STUDIES } from '../constants';
import Button from '../components/Button';
import { ViewState } from '../types';

interface CaseStudiesProps {
  onNavigate: (view: ViewState) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigate }) => {
  return (
    <div className="bg-solkn-white min-h-screen pt-28 pb-24 px-6">
      <div className="container mx-auto">

        {/* Abstract Hero Header */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#1A332A] text-white p-12 md:p-20 mb-24">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop"
              alt="Abstract Background"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-110 object-[center_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A332A] via-[#1A332A]/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#cef79e] mb-4 block">Our Work</span>
            <h1 className="text-6xl md:text-7xl font-light mb-8 text-white drop-shadow-md">Real Businesses. <br /> Real Results.</h1>
            <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              See how SOLKN has helped organizations across industries modernize their technology, secure their data, and accelerate growth.
            </p>
          </div>
        </div>

        <div className="grid gap-16">
          {CASE_STUDIES.map((study, idx) => (
            <div key={study.id} className="group">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className={`overflow-hidden rounded-[2.5rem] shadow-sm ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="text-solkn-lime font-bold text-sm uppercase tracking-wider mb-2 block">{study.industry}</span>
                  <h2 className="text-4xl font-bold mb-6">{study.title}</h2>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase text-solkn-dark/40 mb-1">Challenge</h4>
                      <p className="text-lg leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase text-solkn-dark/40 mb-1">Solution</h4>
                      <p className="text-lg leading-relaxed text-solkn-dark/70">{study.solution}</p>
                    </div>
                    <div className="bg-[#e7e8e1] p-6 rounded-2xl border-l-4 border-solkn-lime">
                      <h4 className="text-sm font-bold uppercase text-solkn-dark/60 mb-1">Results</h4>
                      <p className="text-xl font-medium">{study.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 border-t border-solkn-dark/10 pt-16">
          <h3 className="text-3xl font-light mb-8">Industries We Serve</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Finance", desc: "Compliance-focused security and reliable infrastructure." },
              { title: "Healthcare", desc: "HIPAA-compliant solutions that protect patient data." },
              { title: "Retail & E-commerce", desc: "High-converting websites and secure payment processing." },
              { title: "Manufacturing & Defense", desc: "JOSCAR-registered solutions for stringent security." },
              { title: "Tech & Startups", desc: "Scalable infrastructure and rapid deployment." }
            ].map((ind, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] shadow-sm">
                <h4 className="font-bold text-lg mb-2">{ind.title}</h4>
                <p className="text-sm text-solkn-dark/70">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl mb-6">Your Success Story Starts Here</h3>
          <Button onClick={() => onNavigate('CONTACT')}>Contact Us Today</Button>
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;