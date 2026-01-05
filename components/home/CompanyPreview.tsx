import React from 'react';
import { ViewState } from '../../types';
import { ArrowRight } from 'lucide-react';

interface CompanyPreviewProps {
    onNavigate: (view: ViewState) => void;
}

const CompanyPreview: React.FC<CompanyPreviewProps> = ({ onNavigate }) => {
    return (
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
    );
};

export default CompanyPreview;
