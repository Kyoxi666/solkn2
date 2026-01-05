import React from 'react';
import { ViewState, CaseStudy } from '../../types';
import { ArrowRight } from 'lucide-react';

interface NewsroomProps {
    onNavigate: (view: ViewState) => void;
    featuredCaseStudy: CaseStudy;
    secondaryCaseStudies: CaseStudy[];
}

const Newsroom: React.FC<NewsroomProps> = ({ onNavigate, featuredCaseStudy, secondaryCaseStudies }) => {
    return (
        <section className="bg-[#f0f0ed] py-32 px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <h2 className="text-6xl md:text-8xl font-light tracking-tight text-solkn-dark">Newsroom</h2>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => onNavigate('CASE_STUDIES')}
                            className="px-6 py-3 bg-[#222f30] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-colors"
                        >
                            View All Articles
                        </button>
                        <button
                            onClick={() => onNavigate('CASE_STUDIES')}
                            className="w-12 h-12 bg-[#cef79e] rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                        >
                            <ArrowRight className="w-5 h-5 text-solkn-dark" />
                        </button>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-8">

                    {/* Featured Large Card */}
                    <button
                        className="bg-white rounded-[2.5rem] p-4 flex flex-col lg:flex-row gap-8 lg:h-[600px] group cursor-pointer hover:shadow-xl transition-shadow duration-300 w-full text-left"
                        onClick={() => onNavigate('CASE_STUDIES')}
                    >
                        <div className="lg:w-1/2 h-full overflow-hidden rounded-[2rem]">
                            <img
                                src={featuredCaseStudy.image}
                                alt={featuredCaseStudy.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-between p-4 lg:p-12">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <span className="px-3 py-1 bg-[#f0f0ed] text-solkn-dark/60 text-[10px] font-bold uppercase tracking-widest rounded-md">
                                        {featuredCaseStudy.category || 'Case Study'}
                                    </span>
                                    <span className="text-xs font-mono text-solkn-dark/40 uppercase tracking-wide">
                                        {featuredCaseStudy.date || 'Sep 2025'}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8 text-solkn-dark">
                                    {featuredCaseStudy.title}
                                </h3>
                                <p className="text-lg text-solkn-dark/60 leading-relaxed font-light line-clamp-4">
                                    In this landmark project, {featuredCaseStudy.challenge} {featuredCaseStudy.solution}
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-solkn-dark/60">Read Article</span>
                            </div>
                        </div>
                    </button>

                    {/* Bottom Row - 3 Columns */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {secondaryCaseStudies.map((study, idx) => {
                            // Alternate styles based on the provided image pattern (Light, Dark, Dark)
                            const isDark = idx > 0;
                            return (
                                <button
                                    key={study.id}
                                    className={`rounded-[2.5rem] p-8 md:p-10 min-h-[420px] flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-2 text-left w-full ${isDark ? 'bg-[#2C4A3E] text-white' : 'bg-white text-solkn-dark'}`}
                                    onClick={() => onNavigate('CASE_STUDIES')}
                                >
                                    <div className="w-full">
                                        <div className="flex justify-between items-center mb-12">
                                            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md ${isDark ? 'bg-white/10 text-white/80' : 'bg-[#f0f0ed] text-solkn-dark/60'}`}>
                                                {study.category || 'News'}
                                            </span>
                                            <span className={`text-xs font-mono uppercase tracking-wide ${isDark ? 'text-white/40' : 'text-solkn-dark/40'}`}>
                                                {study.date || '2025'}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-normal leading-snug mb-4">
                                            {study.title}
                                        </h4>
                                    </div>

                                    <div className="flex justify-between items-end w-full">
                                        <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-solkn-dark/60'}`}>Read Article</span>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-[#cef79e] text-solkn-dark' : 'bg-[#cef79e] text-solkn-dark'}`}>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Newsroom;
