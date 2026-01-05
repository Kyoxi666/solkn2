import React from 'react';

const PlatformOverview: React.FC = () => {
    return (
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
    );
};

export default PlatformOverview;
