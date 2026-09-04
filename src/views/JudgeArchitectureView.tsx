import React, { useState } from 'react';
import {
  Cpu,
  Database,
  Search,
  Sparkles,
  ShieldCheck,
  FileText,
  Code2,
  ArrowDown,
  Layers,
  CheckCircle,
  ExternalLink,
  BookOpen,
  Terminal,
} from 'lucide-react';
import { Language } from '../data/translations';

interface JudgeArchitectureViewProps {
  lang: Language;
}

export const JudgeArchitectureView: React.FC<JudgeArchitectureViewProps> = ({ lang }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'guardrails' | 'multilingual' | 'prompt'>('pipeline');

  const architectureStages = [
    {
      id: 0,
      title: '1. User Query Input',
      badge: 'Natural Language / Voice',
      icon: <Search className="w-5 h-5 text-blue-700" />,
      desc: 'Accepts plain-language, non-technical queries in English, Hindi, or conversational Hinglish (e.g. "Do I need BIS certification for my mixer grinder?").',
      techDetails:
        'Frontend captures natural language text or speech audio. Normalizes vernacular slang (e.g. "mixie", "bijli ka taar", "chulha") into canonical product entity tokens.',
    },
    {
      id: 1,
      title: '2. AI Query Analyzer',
      badge: 'Entity & Intent Parser',
      icon: <Cpu className="w-5 h-5 text-purple-700" />,
      desc: 'Understands what the user is asking and parses intent (Mandatory status? Standard lookup? Testing lab? Fee estimation?).',
      techDetails:
        'Lightweight embedding classifier extracts the core product entity (Electric Food Mixer) and regulatory intent (Mandatory QCO Assessment under BIS Act 2016).',
    },
    {
      id: 2,
      title: '3. Intent + Product Classification',
      badge: 'Ontology Mapping',
      icon: <Layers className="w-5 h-5 text-amber-700" />,
      desc: 'Maps colloquial product names to the official Bureau of Indian Standards product ontology.',
      techDetails:
        'Maps "mixer grinder" -> ICS 97.040.20 & Standard code IS 4250. Resolves whether the product falls under Scheme-I (ISI Mark), Scheme-II (CRS), or Hallmarking.',
    },
    {
      id: 3,
      title: '4. BIS Knowledge Retrieval (RAG Engine)',
      badge: 'Hybrid Vector + Keyword Retrieval',
      icon: <Database className="w-5 h-5 text-emerald-700" />,
      desc: 'Searches 4 official BIS databases: Standards, Certification QCOs, Testing Labs, and Licensing schemas.',
      techDetails:
        'Retrieves exact Gazette Quality Control Orders (QCOs), accredited NABL lab directories, fee structures, and document compliance checklists from indexed BIS documents.',
    },
    {
      id: 4,
      title: '5. RAG + Grounded LLM Synthesis',
      badge: 'Strict Grounding • Low Temp (0.1)',
      icon: <Sparkles className="w-5 h-5 text-indigo-700" />,
      desc: 'Generates a simple, accessible answer based solely on retrieved BIS regulations. Never hallucinates.',
      techDetails:
        'System prompt enforces zero-hallucination guardrails: the LLM is restricted to synthesizing ONLY retrieved Gazette paragraphs into simple 6th-grade level English and Hindi.',
    },
    {
      id: 5,
      title: '6. Answer + Official Source Citations',
      badge: 'Verified Citizen Guidance',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      desc: 'Provides plain-language summary, 6-step roadmap, lab locator, and direct links to official Gazette orders.',
      techDetails:
        'Delivers structured UI components: status pill, interactive roadmap, printable document checklist, and verified bis.gov.in Gazette links for full transparency.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4" />
            <span>Smart India Hackathon 2026 • Technical Presentation Mode</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How BIS SmartGuide Works
          </h1>

          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            A presentation-ready technical overview of our AI-powered RAG pipeline, multi-lingual query normalization, and zero-hallucination compliance architecture.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === 'pipeline'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              RAG Pipeline Architecture
            </button>
            <button
              onClick={() => setActiveTab('guardrails')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === 'guardrails'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Zero-Hallucination Guardrails
            </button>
            <button
              onClick={() => setActiveTab('multilingual')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === 'multilingual'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Vernacular & Accessibility
            </button>
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === 'prompt'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Prompt & Token Inspector
            </button>
          </div>
        </div>

        {/* TAB 1: RAG PIPELINE ARCHITECTURE */}
        {activeTab === 'pipeline' && (
          <div className="space-y-8 animate-fade-in">
            {/* Interactive Flow Stepper */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Stages list */}
              <div className="lg:col-span-2 space-y-3">
                {architectureStages.map((stage) => {
                  const isSelected = activeStage === stage.id;
                  return (
                    <div
                      key={stage.id}
                      onClick={() => setActiveStage(stage.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition cursor-pointer ${
                        isSelected
                          ? 'bg-slate-800 border-amber-400/80 shadow-lg ring-1 ring-amber-400/30'
                          : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                            {stage.icon}
                          </div>
                          <h3 className="text-base font-bold text-white">
                            {stage.title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-700">
                          {stage.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 pl-11">
                        {stage.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Deep-dive inspector for the selected stage */}
              <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-2">
                    Stage Details • Inspector
                  </span>
                  <h3 className="text-xl font-extrabold text-white mb-2">
                    {architectureStages[activeStage].title}
                  </h3>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 text-xs font-mono text-emerald-400 mb-4">
                    Subsystem: {architectureStages[activeStage].badge}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {architectureStages[activeStage].techDetails}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-700/80 space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      BIS Databases Queried:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="font-bold text-slate-200 block">Standards DB</span>
                        <span className="text-[11px] text-slate-500">21,000+ IS codes</span>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="font-bold text-slate-200 block">QCO Orders</span>
                        <span className="text-[11px] text-slate-500">Gazette notifications</span>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="font-bold text-slate-200 block">Testing Labs</span>
                        <span className="text-[11px] text-slate-500">NABL & BIS network</span>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <span className="font-bold text-slate-200 block">Manakonline</span>
                        <span className="text-[11px] text-slate-500">Scheme-I/II APIs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs text-slate-400 flex items-center justify-between">
                  <span>Selected Stage: {activeStage + 1} of 6</span>
                  <button
                    onClick={() => setActiveStage((prev) => (prev + 1) % architectureStages.length)}
                    className="text-amber-400 hover:underline font-bold"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ZERO-HALLUCINATION GUARDRAILS */}
        {activeTab === 'guardrails' && (
          <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Regulatory Rigor
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Zero-Hallucination Architecture for Government Compliance
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                In legal and industrial compliance, an AI that hallucinates standard codes or certification rules could cause small businesses severe financial loss or factory closure. Here is how BIS SmartGuide eliminates hallucinations:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700">
                <ShieldCheck className="w-7 h-7 text-emerald-400 mb-3" />
                <h3 className="text-base font-bold text-white">Strict Source Grounding</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  The LLM is prompted with temperature 0.1 and strictly forbidden from using internal pre-training knowledge when citing Indian Standards. Every assertion must map directly to a retrieved Gazette passage.
                </p>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700">
                <FileText className="w-7 h-7 text-amber-400 mb-3" />
                <h3 className="text-base font-bold text-white">Direct Gazette Citations</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Every guidance card links to the exact Ministry of Heavy Industries or DPIIT Gazette Order (e.g. S.O. 1284(E)) so the user or legal advisor can verify the official notification.
                </p>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700">
                <CheckCircle className="w-7 h-7 text-blue-400 mb-3" />
                <h3 className="text-base font-bold text-white">Deterministic Rule Engine</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  High-risk fields (such as whether certification is Mandatory or Voluntary) are determined by an infallible database rule engine rather than free-form text generation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: VERNACULAR & ACCESSIBILITY */}
        {activeTab === 'multilingual' && (
          <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Digital Inclusion for India
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Designed for Rural Artisans, Small Fabricators & Non-Tech Users
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Most Indian manufacturers are micro-enterprises with informal workers. Enterprise dashboards with bureaucratic jargon create friction. BIS SmartGuide removes all barriers:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-2">
                <div className="text-amber-400 font-bold">Colloquial Synonym Resolution</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Users don’t search for "Domestic Food Mixers under IS 4250". They search for "mixie", "mixer grinder", or "मसाला पीसने की मशीन". Our tokenizer maps local slang to official IS codes automatically.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-2">
                <div className="text-amber-400 font-bold">Bilingual UI & Plain Hindi Translations</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every step is available in simple, understandable Hindi. We avoid obscure formal Sanskritized terms, using everyday words that a shopkeeper or village goldsmith can follow without assistance.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-2">
                <div className="text-amber-400 font-bold">Voice-First Architecture</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Voice input support allows users with limited typing literacy to speak their query in their mother tongue.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-700 space-y-2">
                <div className="text-amber-400 font-bold">Actionable 6-Step Visual Roadmaps</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Instead of 40-page standard PDFs, we present a vertical numbered checklist: Check requirements → Lab test → Documents → Apply on Manakonline → License issue.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PROMPT & TOKEN INSPECTOR */}
        {activeTab === 'prompt' && (
          <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6 animate-fade-in font-mono">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">
                  RAG System Prompt & Grounding Template
                </h3>
              </div>
              <span className="text-xs text-slate-400">Model: Gemini 2.5 Flash / Temp: 0.1</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 overflow-x-auto space-y-3 leading-relaxed">
              <div className="text-emerald-400 font-bold">
                # SYSTEM PROMPT
              </div>
              <div>
                You are BIS SmartGuide, an official AI guidance assistant for the Bureau of Indian Standards (Govt. of India).
                Your goal is to explain Indian Standards, ISI mark requirements, and testing procedures to non-technical citizens and small business owners in 6th-grade language.
              </div>
              <div className="text-amber-400 font-bold pt-2">
                # GROUNDING CONSTRAINT
              </div>
              <div>
                Rely ONLY on the retrieved BIS Gazette context provided below. If a product does not have a mandatory Quality Control Order (QCO), state clearly that certification is voluntary. NEVER invent standard numbers.
              </div>
              <div className="text-blue-400 font-bold pt-2">
                # RETRIEVED CONTEXT (INJECTED DYNAMICALLY)
              </div>
              <div className="text-slate-400 bg-slate-900 p-3 rounded border border-slate-800">
                [RETRIEVED_STANDARD]: IS 4250:1980 (Reaffirmed 2020) Domestic Electric Food Mixers.<br />
                [QCO_NOTIFICATION]: S.O. 1284(E) Electrical Appliances Quality Control Order. Status: MANDATORY.<br />
                [SCHEME]: Scheme-I (ISI Mark Certification).<br />
                [LABORATORIES]: BIS Western Regional Lab Mumbai, BIS Central Lab Ghaziabad, CPRI Bengaluru.<br />
                [FEES]: ₹5,000 for Udyam MSME (50% Concession).
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
