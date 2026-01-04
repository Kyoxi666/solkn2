import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudies from './pages/CaseStudies';
import Company from './pages/Company';
import Contact from './pages/Contact';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (view: ViewState, id?: string) => {
    // If clicking same view (unless it's a detail view switch), return
    if (view === currentView && !id) return;
    
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
        if (id) setSelectedServiceId(id);
        setCurrentView(view);
        setIsTransitioning(false);
    }, 300);
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home onNavigate={handleNavigate} />;
      case 'SERVICES': return <Services onNavigate={handleNavigate} />;
      case 'SERVICE_DETAIL': return <ServiceDetail serviceId={selectedServiceId} onNavigate={handleNavigate} />;
      case 'CASE_STUDIES': return <CaseStudies onNavigate={handleNavigate} />;
      case 'COMPANY': return <Company onNavigate={handleNavigate} />;
      case 'CONTACT': return <Contact />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-sans antialiased text-solkn-dark selection:bg-solkn-lime selection:text-solkn-dark">
      <Header onNavigate={handleNavigate} currentView={currentView} />
      
      <main className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderView()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;