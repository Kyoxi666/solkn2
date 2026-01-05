import React from 'react';

const MarqueeSection: React.FC = () => {
    return (
        <section className="bg-[#cef79e] py-6 overflow-hidden border-b border-[#1A332A]/10">
            <div className="flex whitespace-nowrap">
                <div className="flex animate-marquee min-w-full shrink-0 items-center gap-12 px-6">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="text-3xl md:text-5xl font-light tracking-tight text-[#1A332A] uppercase">
                            Cybersecurity Experts — Artificial Intelligence — Cloud Transformation — Managed IT Services — Digital Growth —
                        </span>
                    ))}
                </div>
                <div className="flex animate-marquee min-w-full shrink-0 items-center gap-12 px-6" aria-hidden="true">
                    {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="text-3xl md:text-5xl font-light tracking-tight text-[#1A332A] uppercase">
                            Cybersecurity Experts — Artificial Intelligence — Cloud Transformation — Managed IT Services — Digital Growth —
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeSection;
