import React, { useState } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AssistantView } from './views/AssistantView';
import { StandardsView } from './views/StandardsView';
import { CertificationGuideView } from './views/CertificationGuideView';
import { LabFinderView } from './views/LabFinderView';
import { HallmarkView } from './views/HallmarkView';
import { JudgeArchitectureView } from './views/JudgeArchitectureView';
import { StandardModal } from './components/StandardModal';
import { LabModal } from './components/LabModal';
import { Language } from './data/translations';
import { StandardItem, Laboratory } from './data/types';

export function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [lang, setLang] = useState<Language>('en');
  const [assistantQuery, setAssistantQuery] = useState<string>('');
  const [selectedStandard, setSelectedStandard] = useState<StandardItem | null>(null);
  const [selectedLab, setSelectedLab] = useState<Laboratory | null>(null);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductForAssistant = (query?: string) => {
    setAssistantQuery(query || 'Electric Mixer Grinder');
    setCurrentView('assistant');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenStandardModal = (standard: StandardItem) => {
    setSelectedStandard(standard);
  };

  const handleOpenLabModal = (lab: Laboratory) => {
    setSelectedLab(lab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLanguage={(newLang) => setLang(newLang)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            lang={lang}
            onNavigate={handleNavigate}
            onSelectProductForAssistant={handleSelectProductForAssistant}
          />
        )}

        {currentView === 'assistant' && (
          <AssistantView
            lang={lang}
            initialQuery={assistantQuery}
            onNavigate={handleNavigate}
            onOpenStandardModal={handleOpenStandardModal}
            onOpenLabModal={handleOpenLabModal}
          />
        )}

        {currentView === 'standards' && (
          <StandardsView
            lang={lang}
            onOpenStandardModal={handleOpenStandardModal}
            onSelectProductForAssistant={handleSelectProductForAssistant}
          />
        )}

        {currentView === 'certGuide' && (
          <CertificationGuideView
            lang={lang}
            onNavigateToAssistant={handleSelectProductForAssistant}
          />
        )}

        {currentView === 'findLab' && (
          <LabFinderView
            lang={lang}
            onOpenLabModal={handleOpenLabModal}
          />
        )}

        {currentView === 'hallmark' && (
          <HallmarkView lang={lang} />
        )}

        {currentView === 'judgeMode' && (
          <JudgeArchitectureView lang={lang} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />

      {/* Standard Details Modal */}
      <StandardModal
        standard={selectedStandard}
        onClose={() => setSelectedStandard(null)}
        lang={lang}
        onOpenAssistantWithProduct={handleSelectProductForAssistant}
      />

      {/* Laboratory Details Modal */}
      <LabModal
        lab={selectedLab}
        onClose={() => setSelectedLab(null)}
        lang={lang}
      />
    </div>
  );
}

export default App;
