import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Search,
  Building2,
  CheckSquare,
  Square,
  ShieldCheck,
  ArrowRight,
  Info,
  Layers,
  Award,
  BookOpen,
} from 'lucide-react';
import { Language, translations } from '../data/translations';
import { mockProducts } from '../data/products';
import { mockLaboratories } from '../data/laboratories';
import { mockStandards } from '../data/standards';
import { ProductGuidance, Laboratory, StandardItem } from '../data/types';
import { PageView } from '../components/Navbar';

interface AssistantViewProps {
  lang: Language;
  initialQuery?: string;
  onNavigate: (view: PageView) => void;
  onOpenStandardModal: (standard: StandardItem) => void;
  onOpenLabModal: (lab: Laboratory) => void;
}

export const AssistantView: React.FC<AssistantViewProps> = ({
  lang,
  initialQuery = '',
  onNavigate,
  onOpenStandardModal,
  onOpenLabModal,
}) => {
  const t = translations[lang];

  const [inputQuery, setInputQuery] = useState(initialQuery || '');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [currentResult, setCurrentResult] = useState<ProductGuidance | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
  });
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({
    'doc-1': true,
    'doc-2': true,
  });

  const reasoningRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    {
      q: lang === 'hi' ? 'क्या मिक्सर ग्राइंडर के लिए BIS सर्टिफिकेशन जरूरी है?' : 'Is BIS certification required for mixer grinder?',
      productKey: 'electric-mixer-grinder',
    },
    {
      q: lang === 'hi' ? 'घरेलू प्रेशर कुकर पर कौन सा मानक लागू होता है?' : 'Which standard applies to domestic pressure cooker?',
      productKey: 'pressure-cooker',
    },
    {
      q: lang === 'hi' ? 'पैकेज्ड पीने के पानी का लाइसेंस कैसे प्राप्त करें?' : 'How do I get certification for packaged drinking water?',
      productKey: 'packaged-drinking-water',
    },
    {
      q: lang === 'hi' ? 'सोने के आभूषणों पर HUID हॉलमार्क क्यों अनिवार्य है?' : 'Why is HUID mandatory for gold jewellery?',
      productKey: 'gold-jewellery',
    },
    {
      q: lang === 'hi' ? 'बिजली के तारों और केबल के लिए ISI मार्क नियम क्या हैं?' : 'What are the ISI mark rules for electrical wires?',
      productKey: 'electrical-wire',
    },
  ];

  // Helper to find matching product
  const findProductFromQuery = (q: string): ProductGuidance => {
    const lower = q.toLowerCase();
    if (lower.includes('water') || lower.includes('पानी') || lower.includes('bottle') || lower.includes('ro')) {
      return mockProducts['packaged-drinking-water'];
    }
    if (lower.includes('gold') || lower.includes('jewel') || lower.includes('hallmark') || lower.includes('huid') || lower.includes('सोना')) {
      return mockProducts['gold-jewellery'];
    }
    if (lower.includes('cooker') || lower.includes('कुकर') || lower.includes('pressure')) {
      return mockProducts['pressure-cooker'];
    }
    if (lower.includes('wire') || lower.includes('cable') || lower.includes('तार') || lower.includes('केबल')) {
      return mockProducts['electrical-wire'];
    }
    // Default hero demo is mixer grinder
    return mockProducts['electric-mixer-grinder'];
  };

  // Run the multi-stage simulated AI pipeline
  const runAiPipeline = (targetProduct: ProductGuidance) => {
    setIsProcessing(true);
    setCurrentResult(null);
    setCurrentStage(1);

    // Scroll to reasoning box smoothly
    setTimeout(() => {
      reasoningRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    // Sequence through stages
    setTimeout(() => {
      setCurrentStage(2);
    }, 600);

    setTimeout(() => {
      setCurrentStage(3);
    }, 1300);

    setTimeout(() => {
      setCurrentStage(4);
    }, 2000);

    setTimeout(() => {
      setCurrentStage(5);
    }, 2700);

    setTimeout(() => {
      setIsProcessing(false);
      setCurrentResult(targetProduct);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }, 3300);
  };

  // Handle submit form
  const handleQuerySubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const queryToUse = inputQuery.trim() || 'Electric Mixer Grinder';
    const matched = findProductFromQuery(queryToUse);
    runAiPipeline(matched);
  };

  // Handle sample question click
  const handleSampleClick = (questionText: string, productKey: string) => {
    setInputQuery(questionText);
    const prod = mockProducts[productKey] || mockProducts['electric-mixer-grinder'];
    runAiPipeline(prod);
  };

  // Trigger on initial query if passed
  useEffect(() => {
    if (initialQuery) {
      setInputQuery(initialQuery);
      const matched = findProductFromQuery(initialQuery);
      runAiPipeline(matched);
    }
  }, [initialQuery]);

  const toggleStep = (stepNo: string) => {
    setExpandedSteps((prev) => ({ ...prev, [stepNo]: !prev[stepNo] }));
  };

  const toggleDoc = (docId: string) => {
    setCheckedDocs((prev) => ({ ...prev, [docId]: !prev[docId] }));
  };

  // Get matching labs for the current product
  const relevantLabs = currentResult
    ? mockLaboratories.filter((l) =>
        currentResult.laboratoryIds.includes(l.id) ||
        l.supportedStandards.includes(currentResult.standardNumber)
      ).slice(0, 3)
    : [];

  // Get matching standard item object
  const relevantStandardItem = currentResult
    ? mockStandards.find((s) => s.code.startsWith(currentResult.standardNumber)) || null
    : null;

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0b2545] font-semibold text-xs sm:text-sm mb-3">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
            <span>{t.assistant.title}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            {lang === 'hi' ? 'सरल भाषा में अपना सवाल पूछें' : 'Instant BIS Compliance Guidance'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {t.assistant.subtitle}
          </p>
        </div>

        {/* INPUT PROMPT BOX */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200/90 p-4 sm:p-5 focus-within:border-blue-700 transition">
          <form onSubmit={handleQuerySubmit} className="space-y-3">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder={t.assistant.inputPlaceholder}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-blue-100 pr-12"
              />
              <button
                type="submit"
                disabled={isProcessing}
                className="absolute right-2 px-4 py-2 sm:py-2.5 bg-[#0b2545] hover:bg-blue-900 disabled:opacity-50 text-white rounded-lg font-bold text-xs sm:text-sm shadow flex items-center gap-1.5 transition"
              >
                {isProcessing ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
                ) : (
                  <>
                    <span>{t.assistant.sendButton}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Sample Question Chips */}
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                <span>{t.assistant.sampleQuestionsTitle}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSampleClick(item.q, item.productKey)}
                    className="text-xs bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 font-medium transition text-left"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* SIMULATED AI REASONING PIPELINE (CRITICAL FOR SIH DEMO PRESENTATION) */}
        {(isProcessing || (currentResult && currentStage > 0)) && (
          <div
            ref={reasoningRef}
            className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-md animate-fade-in"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></span>
                <h3 className="text-sm font-bold text-[#0b2545] uppercase tracking-wider">
                  {t.assistant.reasoningHeader}
                </h3>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                AI RAG Workflow
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              {/* Stage 1 */}
              <div
                className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                  currentStage >= 1 ? 'bg-blue-50/70 text-blue-950 font-medium' : 'text-slate-400'
                }`}
              >
                {currentStage > 1 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : currentStage === 1 ? (
                  <RefreshCw className="w-5 h-5 text-blue-600 animate-spin shrink-0 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold">{t.assistant.stages.s1}</div>
                  {currentStage >= 1 && (
                    <div className="text-xs text-slate-500 font-normal mt-0.5">
                      Natural language query parsed • Language detected: {lang === 'hi' ? 'Hindi (हिंदी)' : 'English'}
                    </div>
                  )}
                </div>
              </div>

              {/* Stage 2 */}
              <div
                className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                  currentStage >= 2 ? 'bg-blue-50/70 text-blue-950 font-medium' : 'text-slate-400'
                }`}
              >
                {currentStage > 2 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : currentStage === 2 ? (
                  <RefreshCw className="w-5 h-5 text-blue-600 animate-spin shrink-0 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold">{t.assistant.stages.s2}</div>
                  {currentStage >= 2 && (
                    <div className="text-xs text-emerald-700 font-semibold mt-0.5">
                      ✓ Product Classified:{' '}
                      <span className="underline">
                        {currentResult
                          ? lang === 'hi'
                            ? currentResult.nameHindi
                            : currentResult.name
                          : 'Electric Mixer Grinder'}
                      </span>{' '}
                      (Confidence: 98.4%)
                    </div>
                  )}
                </div>
              </div>

              {/* Stage 3 */}
              <div
                className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                  currentStage >= 3 ? 'bg-blue-50/70 text-blue-950 font-medium' : 'text-slate-400'
                }`}
              >
                {currentStage > 3 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : currentStage === 3 ? (
                  <RefreshCw className="w-5 h-5 text-blue-600 animate-spin shrink-0 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold">{t.assistant.stages.s3}</div>
                  {currentStage >= 3 && (
                    <div className="text-xs text-amber-700 font-semibold mt-0.5">
                      ✓ Quality Control Order (QCO) matched • Status: MANDATORY CERTIFICATION
                    </div>
                  )}
                </div>
              </div>

              {/* Stage 4 */}
              <div
                className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                  currentStage >= 4 ? 'bg-blue-50/70 text-blue-950 font-medium' : 'text-slate-400'
                }`}
              >
                {currentStage > 4 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : currentStage === 4 ? (
                  <RefreshCw className="w-5 h-5 text-blue-600 animate-spin shrink-0 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold">{t.assistant.stages.s4}</div>
                  {currentStage >= 4 && (
                    <div className="text-xs text-blue-800 font-semibold mt-0.5">
                      ✓ National Standard Retrieved:{' '}
                      <span className="font-mono bg-blue-100 px-1 py-0.5 rounded text-blue-950">
                        {currentResult ? currentResult.standardNumber : 'IS 4250'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Stage 5 */}
              <div
                className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                  currentStage >= 5 ? 'bg-emerald-50 text-emerald-950 font-medium' : 'text-slate-400'
                }`}
              >
                {currentStage >= 5 && !isProcessing ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : currentStage === 5 ? (
                  <RefreshCw className="w-5 h-5 text-emerald-600 animate-spin shrink-0 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold">{t.assistant.stages.s5}</div>
                  {currentStage >= 5 && !isProcessing && (
                    <div className="text-xs text-emerald-800 font-normal mt-0.5">
                      ✓ Guidance synthesized • Official Gazette sources linked
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STRUCTURED AI RESULT PRESENTATION */}
        {currentResult && !isProcessing && (
          <div ref={resultRef} className="space-y-6 animate-fade-in">
            {/* 1. SUMMARY CARD */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-800 border border-red-200 font-extrabold text-xs sm:text-sm tracking-wide">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                  <span>
                    {lang === 'hi' ? currentResult.bisStatusHindi : currentResult.bisStatus.toUpperCase() + ' CERTIFICATION REQUIRED'}
                  </span>
                </div>

                <span className="text-xs font-bold text-slate-400">
                  {t.result.confidence}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] leading-tight">
                {lang === 'hi'
                  ? `क्या ${currentResult.nameHindi} के लिए BIS प्रमाणीकरण अनिवार्य है?`
                  : `BIS Certification is Required for ${currentResult.name}`}
              </h2>

              <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-medium bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                {lang === 'hi'
                  ? currentResult.simpleExplanationHindi
                  : currentResult.simpleExplanation}
              </p>

              {/* Scheme & Timeline quick pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-slate-100 text-xs sm:text-sm">
                <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                  <span className="text-slate-500 font-medium block">
                    {lang === 'hi' ? 'प्रमाणीकरण योजना:' : 'Applicable Scheme:'}
                  </span>
                  <span className="font-bold text-[#0b2545] mt-0.5 block">
                    {lang === 'hi' ? currentResult.schemeHindi : currentResult.scheme}
                  </span>
                </div>

                <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100">
                  <span className="text-slate-500 font-medium block">
                    {lang === 'hi' ? 'अनुमानित समय:' : 'Estimated Timeline:'}
                  </span>
                  <span className="font-bold text-amber-900 mt-0.5 block">
                    {currentResult.estimatedTimeline}
                  </span>
                </div>

                <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                  <span className="text-slate-500 font-medium block">
                    {lang === 'hi' ? 'अनुमानित शुल्क (MSME छूट):' : 'Estimated Cost (MSME):'}
                  </span>
                  <span className="font-bold text-emerald-900 mt-0.5 block">
                    {currentResult.estimatedCost}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. PRODUCT DETECTED & RELEVANT STANDARD CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {t.result.productIdentified}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'hi' ? currentResult.nameHindi : currentResult.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'hi' ? currentResult.categoryHindi : currentResult.category}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-600">
                    {lang === 'hi' ? 'वर्गीकरण स्तर:' : 'Classification Level:'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    {lang === 'hi' ? 'उच्च सटीकता (High)' : 'High Confidence'}
                  </span>
                </div>
              </div>

              {/* Standard Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {t.result.standardHeader}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                      National Standard
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-blue-950 font-mono">
                    {currentResult.standardNumber}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {lang === 'hi' ? currentResult.standardTitleHindi : currentResult.standardTitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (relevantStandardItem) {
                        onOpenStandardModal(relevantStandardItem);
                      }
                    }}
                    className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition border border-blue-200"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{t.result.viewDetails}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3. WHAT YOU NEED TO DO (VERTICAL TIMELINE ROADMAP) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {lang === 'hi' ? 'सरल अनुपालन मार्गदर्शन' : 'Actionable Roadmap'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b2545] mt-1.5">
                    {t.result.whatYouNeedToDo}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {lang === 'hi' ? 'विवरण देखने के लिए क्लिक करें' : 'Click steps to expand'}
                </span>
              </div>

              <div className="space-y-4">
                {currentResult.steps.map((step) => {
                  const isExpanded = !!expandedSteps[step.stepNumber];
                  return (
                    <div
                      key={step.stepNumber}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:border-blue-300"
                    >
                      <button
                        type="button"
                        onClick={() => toggleStep(step.stepNumber)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-hidden"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="w-10 h-10 rounded-xl bg-[#0b2545] text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-xs">
                            {step.stepNumber}
                          </span>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900">
                              {lang === 'hi' ? step.titleHindi : step.title}
                            </h4>
                            <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                              <Clock className="w-3 h-3 text-slate-400" />
                              <span>{step.duration}</span>
                            </span>
                          </div>
                        </div>

                        <div className="text-slate-400 ml-2">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200/60 bg-white">
                          <p className="leading-relaxed">
                            {lang === 'hi' ? step.descriptionHindi : step.description}
                          </p>
                          {step.tips && (
                            <div className="mt-3 p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-start gap-2">
                              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                              <span>{lang === 'hi' ? step.tipsHindi || step.tips : step.tips}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. REQUIRED DOCUMENTS CHECKLIST */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="mb-6">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {lang === 'hi' ? 'दस्तावेज चेकलिस्ट' : 'Document Checklist'}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b2545] mt-1.5">
                  {t.result.documentsNeeded}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {lang === 'hi'
                    ? 'आवेदन करने से पहले इन आवश्यक दस्तावेजों को अपने पास तैयार रखें।'
                    : 'Check off each document as you gather them for your Manakonline application.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentResult.documents.map((doc) => {
                  const isChecked = !!checkedDocs[doc.id];
                  return (
                    <div
                      key={doc.id}
                      onClick={() => toggleDoc(doc.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                          : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="mt-0.5 text-emerald-600 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-700" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs sm:text-sm font-bold">
                            {lang === 'hi' ? doc.titleHindi : doc.title}
                          </span>
                          {doc.mandatory && (
                            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          {doc.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 5. FIND TESTING LABORATORY (HARDCODED CARDS) */}
            {relevantLabs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {lang === 'hi' ? 'मान्यता प्राप्त प्रयोगशालाएं' : 'Testing Network'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b2545] mt-1.5">
                      {t.result.testLabsTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {t.result.testLabsSubtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('findLab')}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 shrink-0"
                  >
                    <span>{lang === 'hi' ? 'सभी लैब देखें' : 'View All Labs'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relevantLabs.map((lab) => (
                    <div
                      key={lab.id}
                      className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between hover:shadow-md transition"
                    >
                      <div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-900">
                          BIS Recognized
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-2">
                          {lab.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          Location: <span className="font-semibold text-slate-700">{lab.city}</span>
                        </p>
                        <p className="text-xs text-slate-600 mt-2">
                          Turnaround: <span className="font-medium text-slate-800">{lab.turnaroundTime}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => onOpenLabModal(lab)}
                        className="mt-4 w-full py-2 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 transition"
                      >
                        {lang === 'hi' ? 'प्रयोगशाला विवरण देखें' : 'View Laboratory'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. OFFICIAL SOURCES (REALISTIC CITATION CARDS) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="mb-6">
                <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {lang === 'hi' ? 'सत्यापित स्रोत' : 'Zero-Hallucination Sources'}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b2545] mt-1.5">
                  {t.result.officialSourcesTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {t.result.demoNotice}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentResult.officialSources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-blue-50/40 transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-blue-700 font-bold mb-2">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-[10px]">
                          {source.type}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-900 transition">
                        {source.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                        {source.description}
                      </p>
                    </div>

                    {source.gazetteNo && (
                      <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                        {source.gazetteNo}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* 7. NEXT ACTION BUTTONS */}
            <div className="bg-gradient-to-r from-[#0b2545] to-[#133b5c] rounded-3xl p-6 sm:p-8 text-white text-center space-y-4 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold">
                {t.result.nextActionHeader}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => onNavigate('findLab')}
                  className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow transition"
                >
                  {t.result.actionFindLab}
                </button>
                <button
                  onClick={() => onNavigate('standards')}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition"
                >
                  {t.result.actionAnotherProduct}
                </button>
                <button
                  onClick={() => {
                    setInputQuery('');
                    setCurrentResult(null);
                    setCurrentStage(0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition"
                >
                  {t.result.actionNewQuestion}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
