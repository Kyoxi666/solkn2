import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
    return (
        <div className="bg-solkn-white min-h-screen pt-28 pb-24 px-6 relative overflow-hidden">

            {/* Background Abstract Decorative Element */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full opacity-5 pointer-events-none translate-x-1/3 -translate-y-1/4">
                <img
                    src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832"
                    className="w-full h-full object-cover blur-3xl mix-blend-multiply"
                />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <div className="pt-8">
                        <h1 className="text-6xl font-light text-solkn-dark mb-8">Get in Touch</h1>
                        <p className="text-xl text-solkn-dark/70 mb-12 leading-relaxed">
                            Ready to discuss your project? Let's start a conversation about how we can help your business grow.
                        </p>

                        <div className="space-y-10">
                            <div className="bg-white/50 p-8 rounded-[2rem] backdrop-blur-sm border border-white/50">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-solkn-dark/50 mb-2">UK Headquarters</h3>
                                <p className="text-xl">Harrow, London</p>
                            </div>
                            <div className="bg-white/50 p-8 rounded-[2rem] backdrop-blur-sm border border-white/50">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-solkn-dark/50 mb-2">India Operations</h3>
                                <p className="text-xl">Gujarat, India</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-solkn-dark/50 mb-2">Email</h3>
                                <p className="text-xl"><a href="mailto:info@solkn.com" className="underline hover:text-solkn-lime transition-colors">info@solkn.com</a></p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-solkn-dark/50 mb-2">Office Hours</h3>
                                <p className="text-xl">Monday–Friday, 9:00 AM – 6:00 PM GMT</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-solkn-dark/5 border border-solkn-dark/5">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold mb-2 ml-1">Name</label>
                                    <input id="name" type="text" className="w-full bg-[#f7f7f5] border-0 rounded-2xl p-4 focus:ring-2 focus:ring-solkn-lime outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold mb-2 ml-1">Email</label>
                                    <input id="email" type="email" className="w-full bg-[#f7f7f5] border-0 rounded-2xl p-4 focus:ring-2 focus:ring-solkn-lime outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold mb-2 ml-1">Company</label>
                                    <input id="company" type="text" className="w-full bg-[#f7f7f5] border-0 rounded-2xl p-4 focus:ring-2 focus:ring-solkn-lime outline-none transition-all" placeholder="Your Company Ltd" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold mb-2 ml-1">Phone</label>
                                    <input id="phone" type="tel" className="w-full bg-[#f7f7f5] border-0 rounded-2xl p-4 focus:ring-2 focus:ring-solkn-lime outline-none transition-all" placeholder="+44 ..." />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="service-interest" className="block text-sm font-bold mb-2 ml-1">Service Interest</label>
                                <select id="service-interest" className="w-full bg-[#f7f7f5] border-0 rounded-2xl p-4 focus:ring-2 focus:ring-solkn-lime outline-none transition-all appearance-none cursor-pointer">
                                    <option>General Inquiry</option>
                                    <option>Managed IT</option>
                                    <option>Cybersecurity</option>
                                    <option>Web Solutions</option>
                                    <option>AI Transformation</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold mb-2 ml-1">Message</label>
                                <textarea id="message" className="w-full bg-[#f7f7f5] border-0 rounded-2xl p-4 focus:ring-2 focus:ring-solkn-lime outline-none transition-all min-h-[150px]" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <Button type="submit" className="w-full justify-center">Submit Inquiry</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;