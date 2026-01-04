import React from 'react';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import { ViewState } from '../types';

interface ServicesProps {
  onNavigate: (view: ViewState, id?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="bg-solkn-white min-h-screen pt-28 pb-24 px-6">
      <div className="container mx-auto">
        
        {/* Hero Section with Abstract Variation */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#1A332A] text-white p-12 md:p-24 mb-24">
             {/* Abstract Background Variation */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop" 
                    alt="Abstract Background" 
                    className="w-full h-full object-cover opacity-60 mix-blend-soft-light scale-125 object-[right_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A332A] via-[#1A332A]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-6xl md:text-7xl font-light mb-8 text-white drop-shadow-lg">Our Services</h1>
                <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl">
                    Comprehensive IT Solutions Tailored to Your Business. At SOLKN, we don't believe in one-size-fits-all. Every business has unique challenges, and we craft solutions that align with your goals.
                </p>
            </div>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="grid md:grid-cols-12 gap-12 border-t border-solkn-dark/10 pt-16">
              <div className="md:col-span-4">
                 <div className="sticky top-32">
                    <span className="text-6xl font-light text-solkn-sage/50 block mb-4">0{index + 1}</span>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <service.icon className="w-12 h-12 text-solkn-dark mb-4" />
                    <p className="text-sm font-semibold uppercase tracking-wide text-solkn-dark/50">Perfect For:</p>
                    <p className="text-sm text-solkn-dark/80 mt-2">{service.idealFor}</p>
                 </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl font-light mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>
                
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-solkn-dark/5 mb-8">
                  <h4 className="text-lg font-bold mb-6">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-solkn-lime mt-2"></div>
                        <span className="text-solkn-dark/80">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" onClick={() => onNavigate('SERVICE_DETAIL', service.id)}>
                    Learn more about {service.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-[#222f30] text-white rounded-[2.5rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                 <img 
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop" 
                    className="w-full h-full object-cover scale-150 rotate-180" 
                 />
            </div>
            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-light mb-6">Let's Build Your Solution</h3>
                <p className="mb-8 text-white/70 max-w-xl mx-auto">Every business is different. Let's talk about your challenges and design a solution that works for you.</p>
                <Button variant="secondary" onClick={() => onNavigate('CONTACT')}>Schedule a Consultation</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;