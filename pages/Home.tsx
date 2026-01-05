import React from 'react';
import { ViewState } from '../types';
import { SERVICES, CASE_STUDIES, WHY_CHOOSE_ITEMS } from '../constants';
import HeroSection from '../components/home/HeroSection';
import MarqueeSection from '../components/home/MarqueeSection';
import ServicesPillars from '../components/home/ServicesPillars';
import PlatformOverview from '../components/home/PlatformOverview';
import CompanyPreview from '../components/home/CompanyPreview';
import Newsroom from '../components/home/Newsroom';
import WhyChooseSection from '../components/home/WhyChooseSection';

interface HomeProps {
    onNavigate: (view: ViewState, id?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    // Select specific services for the 3-column layout to match the design aesthetics
    const featuredServices = [
        SERVICES[0], // Managed IT
        SERVICES[2], // Cybersecurity
        SERVICES[4]  // AI Transformation
    ];

    const featuredCaseStudy = CASE_STUDIES[0];
    const secondaryCaseStudies = CASE_STUDIES.slice(1, 4);

    return (
        <div className="w-full">
            <HeroSection onNavigate={onNavigate} />
            <MarqueeSection />
            <ServicesPillars onNavigate={onNavigate} featuredServices={featuredServices} />
            <PlatformOverview />
            <CompanyPreview onNavigate={onNavigate} />
            <Newsroom onNavigate={onNavigate} featuredCaseStudy={featuredCaseStudy} secondaryCaseStudies={secondaryCaseStudies} />
            <WhyChooseSection items={WHY_CHOOSE_ITEMS} />
        </div>
    );
};

export default Home;
