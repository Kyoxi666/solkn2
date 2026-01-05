import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WhyChooseItem } from '../../types';

interface WhyChooseSectionProps {
    items: WhyChooseItem[];
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ items }) => {
    return (
        <section className="py-32 px-6 bg-[#f7f7f5] border-t border-solkn-dark/5">
            <div className="container mx-auto">
                <div className="mb-16 border-b border-solkn-dark/10 pb-8">
                    <h2 className="text-4xl font-light">Why Choose SOLKN</h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {items.map((item, i) => (
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
    );
};

export default WhyChooseSection;
