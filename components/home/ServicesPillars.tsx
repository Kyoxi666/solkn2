import React from 'react';
import { ViewState, ServiceItem } from '../../types';

interface ServicesPillarsProps {
    onNavigate: (view: ViewState, id?: string) => void;
    featuredServices: ServiceItem[];
}

const ServicesPillars: React.FC<ServicesPillarsProps> = ({ onNavigate, featuredServices }) => {
    const Icon1 = featuredServices[0].icon;
    const Icon2 = featuredServices[1].icon;
    const Icon3 = featuredServices[2].icon;

    return (
        <>
            <section className="bg-solkn-white pt-32">
                <div className="container mx-auto px-6 mb-24">
                    <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
                        <div className="mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-solkn-lime rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-solkn-dark/50">Our Services</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-light leading-[1.1] mb-8 text-solkn-dark">
                            Transforming businesses through <br className="hidden md:block" />
                            <span className="font-medium text-solkn-dark/80">intelligent IT solutions.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-solkn-dark/60 max-w-2xl mb-12 leading-relaxed font-light">
                            From cybersecurity to AI-powered transformation, we deliver technology that drives real results. Our integrated platform enables precise control and strategic growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3-Column Service Pillars */}
            <div className="grid md:grid-cols-3 w-full">
                {/* Pillar 1: Managed IT - Light Lime Green */}
                <button
                    className="group relative bg-[#cef79e] p-10 md:p-16 min-h-[500px] flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#bcf285] text-left w-full"
                    onClick={() => onNavigate('SERVICE_DETAIL', featuredServices[0].id)}
                >
                    <div className="flex justify-between items-start border-b border-solkn-dark/10 pb-8 mb-8 w-full">
                        <Icon1 className="w-20 h-20 stroke-[0.8] text-solkn-dark transition-transform group-hover:scale-110 duration-500" />
                        <span className="text-xs font-mono font-bold text-solkn-dark/60 mt-2">01.</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-light mb-6 text-solkn-dark">{featuredServices[0].title}</h3>
                        <p className="text-base font-medium leading-relaxed text-solkn-dark/70 max-w-xs">
                            {featuredServices[0].shortDescription}
                        </p>
                    </div>
                </button>

                {/* Pillar 2: Cybersecurity - Dark */}
                <button
                    className="group relative bg-[#222f30] p-10 md:p-16 min-h-[500px] flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#1a2425] text-left w-full"
                    onClick={() => onNavigate('SERVICE_DETAIL', featuredServices[1].id)}
                >
                    <div className="flex justify-between items-start border-b border-white/10 pb-8 mb-8 w-full">
                        <Icon2 className="w-20 h-20 stroke-[0.8] text-white transition-transform group-hover:scale-110 duration-500" />
                        <span className="text-xs font-mono font-bold text-white/60 mt-2">02.</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-light mb-6 text-white">{featuredServices[1].title}</h3>
                        <p className="text-base font-medium leading-relaxed text-white/70 max-w-xs">
                            {featuredServices[1].shortDescription}
                        </p>
                    </div>
                </button>

                {/* Pillar 3: AI Transformation - Light Grey */}
                <button
                    className="group relative bg-[#e7e8e1] p-10 md:p-16 min-h-[500px] flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#dcded6] text-left w-full"
                    onClick={() => onNavigate('SERVICE_DETAIL', featuredServices[2].id)}
                >
                    <div className="flex justify-between items-start border-b border-solkn-dark/10 pb-8 mb-8 w-full">
                        <Icon3 className="w-20 h-20 stroke-[0.8] text-solkn-dark transition-transform group-hover:scale-110 duration-500" />
                        <span className="text-xs font-mono font-bold text-solkn-dark/60 mt-2">03.</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-light mb-6 text-solkn-dark">{featuredServices[2].title}</h3>
                        <p className="text-base font-medium leading-relaxed text-solkn-dark/70 max-w-xs">
                            {featuredServices[2].shortDescription}
                        </p>
                    </div>
                </button>
            </div>
        </>
    );
};

export default ServicesPillars;
