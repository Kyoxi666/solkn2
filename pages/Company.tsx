import React from 'react';
import { ViewState } from '../types';
import Button from '../components/Button';

import { Award, Leaf, Users, Lightbulb } from 'lucide-react';

interface CompanyProps {
    onNavigate: (view: ViewState) => void;
}

const Company: React.FC<CompanyProps> = ({ onNavigate }) => {
    return (
        <div className="bg-solkn-white min-h-screen pt-28 pb-24 px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 items-end">
                    <h1 className="text-6xl md:text-7xl font-light text-solkn-dark">About SOLKN</h1>
                    <p className="text-xl text-solkn-dark/70 leading-relaxed pb-2">
                        Technology Experts with a Human Touch. We're not just consultants—we're your strategic technology ally.
                    </p>
                </div>

                {/* Story with Abstract Background */}
                <section className="mb-32">
                    <div className="rounded-[3rem] p-12 md:p-24 relative overflow-hidden bg-[#1A332A] text-white">
                        {/* Abstract Background Variation */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop"
                                alt="Abstract Background"
                                className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-125 -rotate-12 object-[left_top]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A332A] via-[#1A332A]/90 to-transparent"></div>
                        </div>

                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-light mb-8 drop-shadow-md">Global Expertise, Local Care</h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-8">
                                Founded with a vision to make world-class IT solutions accessible to businesses of all sizes, SOLKN has grown into a trusted partner for organizations across the UK and beyond.
                            </p>
                            <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                                Based in Harrow, London, with operations extending to Vadodara, India, SOLKN brings together global expertise and local understanding. We've built our reputation on delivering results, not just services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-solkn-dark/10 pb-8">
                        <h2 className="text-4xl font-light">Our Values</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <Award className="w-10 h-10 text-solkn-dark mb-6" />
                            <h4 className="text-xl font-bold mb-3">Excellence</h4>
                            <p className="text-sm text-solkn-dark/70">We hold ourselves to the highest standards of quality, from code to customer service.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <Leaf className="w-10 h-10 text-solkn-lime mb-6" />
                            <h4 className="text-xl font-bold mb-3">Ethical & Sustainable</h4>
                            <p className="text-sm text-solkn-dark/70">Committed to carbon reduction, equality, and fair business practices.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <Users className="w-10 h-10 text-solkn-dark mb-6" />
                            <h4 className="text-xl font-bold mb-3">Partnership</h4>
                            <p className="text-sm text-solkn-dark/70">Your success is our success. We build long-term relationships based on trust.</p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <Lightbulb className="w-10 h-10 text-solkn-lime mb-6" />
                            <h4 className="text-xl font-bold mb-3">Innovation</h4>
                            <p className="text-sm text-solkn-dark/70">Every solution we recommend has a clear business justification.</p>
                        </div>
                    </div>
                </section>

                {/* Certifications & Partners */}
                <section className="mb-32">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 p-4 bg-[#e7e8e1] rounded-xl">
                                    <span className="w-2 h-2 rounded-full bg-solkn-dark"></span>
                                    <span>Cyber Essentials Certified</span>
                                </li>
                                <li className="flex items-center gap-3 p-4 bg-[#e7e8e1] rounded-xl">
                                    <span className="w-2 h-2 rounded-full bg-solkn-dark"></span>
                                    <span>JOSCAR Registered</span>
                                </li>
                                <li className="flex items-center gap-3 p-4 bg-[#e7e8e1] rounded-xl">
                                    <span className="w-2 h-2 rounded-full bg-solkn-dark"></span>
                                    <span>Living Wage Foundation Employer</span>
                                </li>
                                <li className="flex items-center gap-3 p-4 bg-[#e7e8e1] rounded-xl">
                                    <span className="w-2 h-2 rounded-full bg-solkn-dark"></span>
                                    <span>Good Business Charter (GBC) Accredited</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Technology Partners</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-solkn-dark/20 rounded-xl text-center text-sm font-semibold hover:bg-white transition-colors">Fortinet</div>
                                <div className="p-4 border border-solkn-dark/20 rounded-xl text-center text-sm font-semibold hover:bg-white transition-colors">Palo Alto Networks</div>
                                <div className="p-4 border border-solkn-dark/20 rounded-xl text-center text-sm font-semibold hover:bg-white transition-colors">Microsoft Azure</div>
                                <div className="p-4 border border-solkn-dark/20 rounded-xl text-center text-sm font-semibold hover:bg-white transition-colors">AWS</div>
                                <div className="p-4 border border-solkn-dark/20 rounded-xl text-center text-sm font-semibold hover:bg-white transition-colors">Google Cloud</div>
                                <div className="p-4 border border-solkn-dark/20 rounded-xl text-center text-sm font-semibold hover:bg-white transition-colors">Zscaler</div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="text-center py-24 bg-solkn-sage/20 rounded-[3rem] relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl mb-6">Work With Us</h2>
                        <p className="text-lg opacity-70 mb-8 max-w-xl mx-auto">Interested in joining a dynamic, values-driven team? We're always looking for talented individuals who share our passion.</p>
                        <Button variant="outline" onClick={() => onNavigate('CONTACT')}>View Career Opportunities</Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Company;