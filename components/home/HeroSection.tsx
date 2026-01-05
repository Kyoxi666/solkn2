import React from 'react';
import { ViewState } from '../../types';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onNavigate: (view: ViewState) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#1A332A] text-white">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
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
                        Engineering the future <br />
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
    );
};

export default HeroSection;
