import React from 'react';
import { Shield, Phone, ExternalLink, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { PageView } from './Navbar';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = translations[lang];

  return (
    <footer className="bg-[#0b2545] text-slate-300 border-t border-slate-800">
      {/* Top MSME Guidance Ribbon */}
      <div className="bg-[#081b33] border-b border-slate-800/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="font-semibold">{t.common.msmeFriendly}</span>
            <span className="text-slate-400 hidden md:inline">—</span>
            <span className="text-slate-400 hidden md:inline">
              {lang === 'hi'
                ? 'उद्यम पंजीकृत इकाइयों के लिए सरकारी आवेदन शुल्क में 50% विशेष छूट उपलब्ध।'
                : 'Avail flat 50% government concession on BIS application & marking fees for Udyam MSMEs.'}
            </span>
          </div>

          <button
            onClick={() => {
              onNavigate('judgeMode');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-900/90 text-amber-300 hover:bg-blue-800 border border-amber-400/40 transition shrink-0"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'हैकथॉन जज: तकनीकी आर्किटेक्चर देखें' : 'Judges: View AI RAG Architecture'}</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-base">
                BIS
              </div>
              <div>
                <h3 className="text-white text-lg font-bold tracking-tight">
                  {t.appName}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {t.common.prototypeDemoNotice}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
              {lang === 'hi'
                ? 'BIS स्मार्टगाइड एक एआई-सक्षम मार्गदर्शक प्लेटफॉर्म है जो भारतीय निर्माताओं, छोटे व्यवसायों, छात्रों और नागरिकों को भारतीय मानकों, ISI मार्क और हॉलमार्किंग को सरल भाषा में समझने में मदद करता है।'
                : 'BIS SmartGuide is an AI-powered guidance platform helping Indian manufacturers, MSMEs, artisans, and consumers understand Indian Standards, ISI mark licensing, and testing requirements in plain, accessible language.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 flex items-center gap-1 border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t.common.freeService}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 flex items-center gap-1 border border-slate-700">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                {t.common.officialGovInitiative}
              </span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              {lang === 'hi' ? 'त्वरित नेविगेशन' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition text-slate-300"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('standards');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition text-slate-300"
                >
                  {t.nav.standards}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('certGuide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition text-slate-300"
                >
                  {t.nav.certGuide}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('findLab');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition text-slate-300"
                >
                  {t.nav.findLab}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('hallmark');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition text-slate-300"
                >
                  {t.nav.hallmarkCheck}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('judgeMode');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 font-semibold text-amber-300 transition"
                >
                  {t.nav.judgeMode}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              {lang === 'hi' ? 'सरकारी आधिकारिक पोर्टल' : 'Official Portals'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://bis.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition text-slate-300"
                >
                  <span>BIS Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.manakonline.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition text-slate-300"
                >
                  <span>Manakonline Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://standardsbis.bsbedge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition text-slate-300"
                >
                  <span>Indian Standards Online</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li className="pt-2">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>BIS Helpline (National):</span>
                  </div>
                  <p className="text-sm font-mono font-bold text-amber-400 mt-0.5">
                    1800-11-4000 (Toll Free)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and SIH banner */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} BIS SmartGuide Prototype • Smart India Hackathon 2026.
          </p>
          <p className="flex items-center gap-1 text-slate-300">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Indian MSMEs & Citizens</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
