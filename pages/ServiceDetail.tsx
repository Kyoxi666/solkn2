import React, { useState } from 'react';
import { ViewState } from '../types';
import Button from '../components/Button';
import { SERVICES } from '../constants';
import { ArrowLeft, Plus, Minus, Flashlight, Grid3x3, Sun } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (view: ViewState) => void;
}

// Helper component to handle individual logo loading states
const PartnerLogo: React.FC<{ partner: { name: string; logoUrl: string } }> = ({ partner }) => {
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 group w-full">
      <div className="h-40 flex items-center justify-center p-8 bg-white rounded-[2rem] shadow-sm border border-transparent group-hover:border-solkn-dark/10 w-full transition-all">
        {!error ? (
          <img
            src={partner.logoUrl}
            alt={partner.name}
            className="max-h-16 max-w-full object-contain transition-all duration-300 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
            style={{
              // Initial state is dark monochrome via filters to match theme
              // On hover we remove grayscale via tailwind classes above for a nice effect.
              filter: error ? 'none' : 'grayscale(100%) brightness(0)'
            }}
            onError={() => setError(true)}
          />
        ) : (
          <span className="text-xl font-bold text-solkn-dark text-center leading-tight">
            {partner.name}
          </span>
        )}
      </div>
    </div>
  );
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onNavigate }) => {
  const service = SERVICES.find(s => s.id === serviceId);
  // State to track which accordion item is open. Null means none are open.
  const [openFeatureIndex, setOpenFeatureIndex] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-solkn-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Service not found</h2>
          <Button onClick={() => onNavigate('SERVICES')}>Back to Services</Button>
        </div>
      </div>
    );
  }

  // Data is now guaranteed by strict types
  const { approach, strategicFocus: focus } = service;

  return (
    <div className="bg-solkn-white min-h-screen pt-28 pb-24 px-6">
      <div className="container mx-auto">
        <button
          onClick={() => onNavigate('SERVICES')}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-solkn-dark/50 mb-8 hover:text-solkn-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </button>

        {/* Abstract Hero Banner */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#1A332A] text-white p-12 md:p-20 mb-24">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop"
              alt="Abstract Background"
              className="w-full h-full object-cover opacity-50 mix-blend-overlay scale-150 rotate-180"
            />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <service.icon className="w-20 h-20 text-[#cef79e] mb-8" />
              <h1 className="text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-12">
                {service.fullDescription}
              </p>
              <Button variant="secondary" onClick={() => onNavigate('CONTACT')}>Get a Quote</Button>
            </div>
          </div>
        </div>

        {/* Core Capabilities - Only if exists */}
        {service.subServices && (
          <div className="mb-24">
            <h3 className="text-2xl font-bold mb-8 text-solkn-dark">Core Capabilities</h3>
            <div className="flex flex-wrap gap-4">
              {service.subServices.map((sub, i) => (
                <span key={i} className="px-6 py-3 bg-white border border-solkn-dark/10 rounded-full text-lg font-light shadow-sm text-solkn-dark">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features - Accordion List */}
        <div className="mb-32">
          <div className="border-t border-solkn-dark/10">
            {service.features.map((feature, i) => {
              const isOpen = openFeatureIndex === i;
              return (
                <div key={i} className="border-b border-solkn-dark/10 transition-colors">
                  <button
                    onClick={() => toggleFeature(i)}
                    className="w-full text-left group flex flex-col md:flex-row md:items-center justify-between py-10 hover:bg-white/40 transition-colors cursor-pointer outline-none focus:bg-white/40"
                  >
                    <div className="flex items-baseline gap-6 md:gap-12">
                      <span className={`text-4xl md:text-5xl font-light transition-colors font-mono select-none ${isOpen ? 'text-solkn-lime' : 'text-solkn-dark/20 group-hover:text-solkn-lime'}`}>
                        {(i + 1).toString().padStart(2, '0')}.
                      </span>
                      <span className="text-3xl md:text-5xl font-light text-solkn-dark tracking-tight">
                        {feature.title}
                      </span>
                    </div>
                    <div className="mt-6 md:mt-0 self-end md:self-center text-solkn-dark/30 group-hover:text-solkn-dark transition-colors">
                      {isOpen ? (
                        <Minus className="w-8 h-8 md:w-10 md:h-10 stroke-1" />
                      ) : (
                        <Plus className="w-8 h-8 md:w-10 md:h-10 stroke-1" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-10' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="pl-0 md:pl-28 max-w-4xl">
                      <p className="text-xl text-solkn-dark/70 leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NEW SECTION: Our Approach */}
        <div className="mb-32">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-sm bg-solkn-lime"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-solkn-dark/60">Our Approach</span>
          </div>

          <div className="mb-16 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-solkn-dark">
              Our approach to {service.title} is built on three complementary strategies.
            </h2>
            <p className="text-xl text-solkn-dark/60 font-light">
              {approach.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Dark */}
            <div className="bg-[#222f30] text-white p-10 rounded-[2rem] flex flex-col justify-between min-h-[360px] group hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-8">
                <Flashlight className="w-10 h-10 mb-4 opacity-90 stroke-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2 block">{approach.items[0].label}</span>
                <h3 className="text-2xl font-light mb-4">{approach.items[0].title}</h3>
                <p className="text-sm opacity-60 font-light leading-relaxed">
                  {approach.items[0].description}
                </p>
              </div>
            </div>

            {/* Card 2 - Light Gray */}
            <div className="bg-[#e7e8e1] text-solkn-dark p-10 rounded-[2rem] flex flex-col justify-between min-h-[360px] group hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-8">
                <Grid3x3 className="w-10 h-10 mb-4 opacity-90 stroke-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2 block">{approach.items[1].label}</span>
                <h3 className="text-2xl font-light mb-4">{approach.items[1].title}</h3>
                <p className="text-sm opacity-60 font-light leading-relaxed">
                  {approach.items[1].description}
                </p>
              </div>
            </div>

            {/* Card 3 - White/Lightest */}
            <div className="bg-[#f7f7f5] text-solkn-dark p-10 rounded-[2rem] flex flex-col justify-between min-h-[360px] group hover:-translate-y-1 transition-transform duration-300 border border-solkn-dark/5">
              <div className="mb-8">
                <Sun className="w-10 h-10 mb-4 opacity-90 stroke-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2 block">{approach.items[2].label}</span>
                <h3 className="text-2xl font-light mb-4">{approach.items[2].title}</h3>
                <p className="text-sm opacity-60 font-light leading-relaxed">
                  {approach.items[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Strategic Focus (Dark Section) */}
        <div className="mb-32 bg-[#1A332A] text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="flex items-center gap-2 mb-12 relative z-10">
            <span className="w-2 h-2 rounded-sm bg-[#cef79e]"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">Our Focus</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-light leading-[0.9] mb-6">
                Strategic Focus: <br /> <span className="text-[#cef79e]">{focus.suffix}</span>
              </h2>
              <p className="text-lg text-white/60 max-w-md leading-relaxed">
                {focus.description}
              </p>
            </div>
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-12">
                <h3 className="text-3xl font-light mb-4">{focus.items[0].title}</h3>
                <p className="text-lg font-light text-white/60 leading-relaxed">
                  {focus.items[0].description}
                </p>
              </div>
              <div className="border-b border-white/10 pb-12">
                <h3 className="text-3xl font-light mb-4">{focus.items[1].title}</h3>
                <p className="text-lg font-light text-white/60 leading-relaxed">
                  {focus.items[1].description}
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-light mb-4">{focus.items[2].title}</h3>
                <p className="text-lg font-light text-white/60 leading-relaxed">
                  {focus.items[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners / Technology Stack */}
        {service.partners && (
          <div className="py-16 border-t border-solkn-dark/10">
            <h3 className="text-2xl font-light mb-12 text-center">Powered by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
              {service.partners.map((partner, i) => (
                <PartnerLogo key={i} partner={partner} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;