import React, { useState } from 'react';
import {
  Menu,
  X,
  Languages,
  Sparkles,
  Search,
  BookOpen,
  Award,
  FlaskConical,
  MessageSquareText,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { Language, translations } from '../data/translations';

export type PageView =
  | 'home'
  | 'standards'
  | 'certGuide'
  | 'findLab'
  | 'assistant'
  | 'hallmark'
  | 'judgeMode';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  lang: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  lang,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { view: PageView; label: string; icon: React.ReactNode }[] = [
    { view: 'home', label: t.nav.home, icon: <Search className="w-4 h-4" /> },
    { view: 'standards', label: t.nav.standards, icon: <BookOpen className="w-4 h-4" /> },
    { view: 'certGuide', label: t.nav.certGuide, icon: <Award className="w-4 h-4" /> },
    { view: 'findLab', label: t.nav.findLab, icon: <FlaskConical className="w-4 h-4" /> },
    { view: 'hallmark', label: t.nav.hallmarkCheck, icon: <ShieldCheck className="w-4 h-4" /> },
    { view: 'assistant', label: t.nav.askAssistant, icon: <MessageSquareText className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200/90 shadow-sm transition-all">
      {/* Top Gov Indicator Stripe */}
      <div className="bg-[#0b2545] text-slate-100 text-[11px] sm:text-xs py-1 px-4 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white tracking-wide">
              {lang === 'hi' ? 'भारतीय मानक ब्यूरो (BIS) मार्गदर्शन पोर्टल' : 'Bureau of Indian Standards — Guidance Portal'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Judge Architecture Shortcut */}
            <button
              onClick={() => handleNavClick('judgeMode')}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold transition ${
                currentView === 'judgeMode'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-blue-900/80 hover:bg-blue-800 text-amber-300 border border-amber-400/40'
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>{lang === 'hi' ? 'जज आर्किटेक्चर मोड' : 'Judge Tech Mode'}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/90 rounded-md p-0.5 border border-slate-700">
              <Languages className="w-3 h-3 text-slate-400 ml-1.5 mr-0.5" />
              <button
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                  lang === 'en'
                    ? 'bg-white text-[#0b2545] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onToggleLanguage('hi')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                  lang === 'hi'
                    ? 'bg-amber-400 text-[#0b2545] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Official style emblem icon */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0b2545] to-[#133b5c] p-0.5 shadow-md flex items-center justify-center text-white ring-2 ring-blue-100 group-hover:scale-105 transition-transform">
              <div className="text-center font-black tracking-tighter">
                <span className="block text-[13px] sm:text-[15px] leading-none text-amber-400 font-extrabold">
                  BIS
                </span>
                <span className="block text-[8px] sm:text-[9px] tracking-widest text-slate-200">
                  मानक
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold text-[#0b2545] tracking-tight group-hover:text-blue-900 transition">
                  {t.appName}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  AI
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1 max-w-[280px] sm:max-w-sm">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                    isActive
                      ? 'bg-blue-50 text-[#0b2545] border border-blue-200/80 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className={isActive ? 'text-blue-700' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* AI Assistant CTA Button */}
            <button
              onClick={() => handleNavClick('assistant')}
              className="ml-2 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0b2545] to-blue-800 hover:from-[#081b33] hover:to-blue-900 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>{t.nav.askAssistant}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('assistant')}
              className="p-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-200"
              title="Ask Assistant"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fade-in">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition ${
                  isActive
                    ? 'bg-blue-50 text-[#0b2545] border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className={isActive ? 'text-blue-700' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('judgeMode')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-amber-50 text-amber-900 border border-amber-300"
            >
              <Cpu className="w-4 h-4 text-amber-700" />
              <span>{t.nav.judgeMode}</span>
            </button>

            <button
              onClick={() => handleNavClick('assistant')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#0b2545]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t.nav.askAssistant}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
