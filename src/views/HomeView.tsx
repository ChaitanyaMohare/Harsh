import React, { useState } from 'react';
import {
  Search,
  Mic,
  MicOff,
  Sparkles,
  BookOpen,
  Award,
  FlaskConical,
  MessageSquareText,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Check,
  Building2,
  FileCheck,
  Users,
} from 'lucide-react';
import { Language, translations } from '../data/translations';
import { PageView } from '../components/Navbar';

interface HomeViewProps {
  lang: Language;
  onNavigate: (view: PageView) => void;
  onSelectProductForAssistant: (query: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  onNavigate,
  onSelectProductForAssistant,
}) => {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const demoChips = [
    { label: lang === 'hi' ? 'मिक्सर ग्राइंडर' : 'Mixer Grinder', query: 'Electric Mixer Grinder', isHero: true },
    { label: lang === 'hi' ? 'सोने के आभूषण (हॉलमार्क)' : 'Gold Jewellery', query: 'Gold Jewellery' },
    { label: lang === 'hi' ? 'प्रेशर कुकर' : 'Pressure Cooker', query: 'Pressure Cooker' },
    { label: lang === 'hi' ? 'बिजली का तार' : 'Electrical Wire', query: 'Electrical Wire' },
    { label: lang === 'hi' ? 'पैकेज्ड पेयजल' : 'Packaged Water', query: 'Packaged Drinking Water' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSelectProductForAssistant(searchQuery.trim());
    } else {
      onSelectProductForAssistant('Electric Mixer Grinder');
    }
  };

  const toggleVoiceSimulation = () => {
    if (!isListening) {
      setIsListening(true);
      // Simulate speech to text
      setTimeout(() => {
        setSearchQuery(
          lang === 'hi'
            ? 'क्या मिक्सर ग्राइंडर के लिए BIS सर्टिफिकेशन जरूरी है?'
            : 'Do I need BIS certification for my mixer grinder?'
        );
        setIsListening(false);
      }, 1800);
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-blue-50/60 via-slate-50 to-slate-50 border-b border-slate-200/60">
        {/* Subtle background decorative shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-200/40 blur-3xl"></div>
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#0b2545] border border-blue-200/80 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#f26522] animate-ping"></span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b2545] tracking-tight leading-[1.15] mb-4">
            {t.hero.title}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* AI Search Box */}
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/60 border-2 border-blue-200/90 p-2 sm:p-2.5 transition focus-within:border-blue-700 focus-within:ring-4 focus-within:ring-blue-100"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="pl-3 text-slate-400">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isListening
                    ? lang === 'hi'
                      ? 'सुन रहे हैं... बोलिए...'
                      : 'Listening... please speak...'
                    : t.hero.searchPlaceholder
                }
                className="w-full bg-transparent text-slate-800 text-sm sm:text-base font-medium placeholder:text-slate-400 focus:outline-hidden py-2"
              />

              {/* Voice Mic Button */}
              <button
                type="button"
                onClick={toggleVoiceSimulation}
                title={t.hero.voiceButtonTooltip}
                className={`p-2.5 sm:p-3 rounded-xl transition flex items-center justify-center shrink-0 ${
                  isListening
                    ? 'bg-red-500 text-white animate-bounce shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:text-[#0b2545] hover:bg-slate-200'
                }`}
              >
                {isListening ? (
                  <MicOff className="w-5 h-5 animate-pulse" />
                ) : (
                  <Mic className="w-5 h-5 text-slate-700" />
                )}
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-5 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-[#0b2545] to-blue-800 hover:from-[#081b33] hover:to-blue-900 text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition shrink-0 flex items-center gap-2"
              >
                <span>{t.hero.searchButton}</span>
                <ArrowRight className="w-4 h-4 hidden sm:inline" />
              </button>
            </div>
          </form>

          {/* Popular Demo Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-xs sm:text-sm font-semibold text-slate-500 mr-1">
              {t.hero.popularSearches}
            </span>

            {demoChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectProductForAssistant(chip.query)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer flex items-center gap-1.5 ${
                  chip.isHero
                    ? 'bg-amber-100/90 text-amber-950 border border-amber-300 font-bold hover:bg-amber-200 shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                {chip.isHero && <Sparkles className="w-3.5 h-3.5 text-amber-600" />}
                <span>{chip.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS (4 LARGE CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545]">
            {t.quickActions.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.quickActions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Find BIS Standard */}
          <div
            onClick={() => onNavigate('standards')}
            className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 card-hover cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center mb-5 group-hover:bg-[#0b2545] group-hover:text-white transition-colors shadow-xs">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition">
                {t.quickActions.findStandardTitle}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.quickActions.findStandardDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'hi' ? 'मानक सूची देखें' : 'Explore Standards'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 2: Certification Guide */}
          <div
            onClick={() => onNavigate('certGuide')}
            className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 card-hover cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-[#f26522] group-hover:text-white transition-colors shadow-xs">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-900 transition">
                {t.quickActions.certGuideTitle}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.quickActions.certGuideDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'hi' ? 'चरण-दर-चरण प्रक्रिया' : 'View 6-Step Guide'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 3: Find Testing Lab */}
          <div
            onClick={() => onNavigate('findLab')}
            className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 card-hover cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors shadow-xs">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition">
                {t.quickActions.findLabTitle}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {t.quickActions.findLabDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'hi' ? 'प्रयोगशालाएं खोजें' : 'Locate Recognized Labs'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 4: Ask SmartGuide */}
          <div
            onClick={() => onNavigate('assistant')}
            className="group bg-gradient-to-br from-blue-900 to-[#0b2545] rounded-2xl p-6 border border-blue-900 shadow-md hover:shadow-xl card-hover cursor-pointer flex flex-col justify-between text-white"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mb-5 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-xs">
                <MessageSquareText className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">
                  {t.quickActions.askAiTitle}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                  AI
                </span>
              </div>
              <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                {t.quickActions.askAiDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
              <span>{lang === 'hi' ? 'अभी सवाल पूछें' : 'Chat with Assistant'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (SIMPLE 4-STEP VISUAL STEPPER) */}
      <section className="bg-white border-y border-slate-200/80 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {lang === 'hi' ? 'आसान प्रक्रिया' : 'Simple 4-Step Process'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] mt-3">
              {t.howItWorks.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-900 font-extrabold text-xl mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {t.howItWorks.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs leading-relaxed">
                {t.howItWorks.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-900 font-extrabold text-xl mb-4 shadow-sm">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {t.howItWorks.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs leading-relaxed">
                {t.howItWorks.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-900 font-extrabold text-xl mb-4 shadow-sm">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {t.howItWorks.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs leading-relaxed">
                {t.howItWorks.step3Desc}
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center text-emerald-800 font-extrabold text-xl mb-4 shadow-sm">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {t.howItWorks.step4Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs leading-relaxed">
                {t.howItWorks.step4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HALLMARK VERIFICATION PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              {lang === 'hi' ? 'स्वर्ण आभूषण सत्यापन' : 'Gold Hallmark Verifier'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'hi' ? 'सोने के गहने पर 6-अंकीय HUID तुरंत जांचें' : 'Verify 6-Digit HUID Gold Hallmark Instantly'}
            </h3>
            <p className="text-amber-100 text-sm sm:text-base max-w-2xl">
              {lang === 'hi'
                ? 'BIS कानून के तहत सभी सोने के आभूषणों पर BIS लोगो, शुद्धता (जैसे 22K 916) और 6-अक्षरों का यूनिक HUID नंबर होना कानूनी रूप से अनिवार्य है।'
                : 'Every authentic gold jewellery piece sold in India must carry the BIS triangle, purity mark, and unique 6-digit laser-engraved HUID.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('hallmark')}
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0b2545] font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 shrink-0 flex items-center gap-2"
          >
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            <span>{lang === 'hi' ? 'HUID जांचें (डेमो)' : 'Check HUID Demo'}</span>
          </button>
        </div>
      </section>

      {/* NATIONAL IMPACT / TRUST STATS */}
      <section className="bg-slate-100/80 border-t border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-[#0b2545]">21,000+</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                {lang === 'hi' ? 'सक्रिय भारतीय मानक' : 'Active Indian Standards'}
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-[#f26522]">1,000+</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                {lang === 'hi' ? 'मान्यता प्राप्त प्रयोगशालाएं' : 'Recognized Testing Labs'}
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-emerald-700">50% Off</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                {lang === 'hi' ? 'उद्यम MSME को सरकारी छूट' : 'Govt Concession for MSMEs'}
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-blue-800">100% Free</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                {lang === 'hi' ? 'नागरिक एवं व्यापार मार्गदर्शन' : 'Public Guidance Service'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
