import React, { useState } from 'react';
import {
  CheckCircle2,
  FileCheck,
  Search,
  FlaskConical,
  Building2,
  Award,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  HelpCircle,
  Calculator,
} from 'lucide-react';
import { Language } from '../data/translations';

interface CertificationGuideViewProps {
  lang: Language;
  onNavigateToAssistant: (query?: string) => void;
}

export const CertificationGuideView: React.FC<CertificationGuideViewProps> = ({
  lang,
  onNavigateToAssistant,
}) => {
  const [isMsme, setIsMsme] = useState(true);
  const [selectedProductType, setSelectedProductType] = useState('kitchen');

  const journeySteps = [
    {
      num: '01',
      title: lang === 'hi' ? 'जांचें कि प्रमाणीकरण अनिवार्य है या नहीं' : 'Check if certification is required',
      desc:
        lang === 'hi'
          ? 'यह देखें कि आपका उत्पाद सरकार के गुणवत्ता नियंत्रण आदेश (QCO) के तहत अनिवार्य है या नहीं।'
          : 'Determine if your product falls under mandatory Quality Control Orders (QCO) or voluntary certification schemes.',
      icon: <Search className="w-6 h-6 text-blue-800" />,
      time: '1 Day',
    },
    {
      num: '02',
      title: lang === 'hi' ? 'लागू भारतीय मानक (IS) की पहचान करें' : 'Identify the applicable Indian Standard',
      desc:
        lang === 'hi'
          ? 'अपने उत्पाद के लिए सही मानक (जैसे मिक्सर के लिए IS 4250, कुकर के लिए IS 2347) चुनें।'
          : 'Find the specific Indian Standard number (e.g., IS 4250 for food mixers, IS 2347 for pressure cookers).',
      icon: <FileCheck className="w-6 h-6 text-blue-800" />,
      time: '1 - 2 Days',
    },
    {
      num: '03',
      title: lang === 'hi' ? 'उत्पाद का परीक्षण कराएं' : 'Get your product tested',
      desc:
        lang === 'hi'
          ? 'किसी मान्यता प्राप्त BIS या NABL प्रयोगशाला में उत्पाद के नमूनों का पूर्ण परीक्षण करवाएं।'
          : 'Submit manufacturing samples to an accredited BIS or NABL laboratory for formal type-testing.',
      icon: <FlaskConical className="w-6 h-6 text-blue-800" />,
      time: '7 - 14 Days',
    },
    {
      num: '04',
      title: lang === 'hi' ? 'आवश्यक दस्तावेज तैयार करें' : 'Prepare your documents',
      desc:
        lang === 'hi'
          ? 'फैक्ट्री लेआउट, मशीनरी विवरण, इन-हाउस टेस्टिंग उपकरण और कच्चा माल प्रमाण पत्र एकत्र करें।'
          : 'Compile manufacturing drawings, machinery logs, factory layout, and in-house testing equipment details.',
      icon: <Shield className="w-6 h-6 text-blue-800" />,
      time: '3 - 5 Days',
    },
    {
      num: '05',
      title: lang === 'hi' ? 'Manakonline पर ऑनलाइन आवेदन करें' : 'Apply for certification online',
      desc:
        lang === 'hi'
          ? 'BIS के आधिकारिक पोर्टल manakonline.in पर फॉर्म-V भरें और निर्धारित सरकारी शुल्क का भुगतान करें।'
          : 'Submit your electronic Form-V application on the official BIS Manakonline portal with test reports.',
      icon: <Building2 className="w-6 h-6 text-blue-800" />,
      time: '1 Day',
    },
    {
      num: '06',
      title: lang === 'hi' ? 'निरीक्षण, अनुमोदन और ISI लाइसेंस' : 'Verification and approval',
      desc:
        lang === 'hi'
          ? 'BIS अधिकारी द्वारा फैक्ट्री जांच के बाद आपका CM/L नंबर और ISI मार्क लाइसेंस जारी कर दिया जाता है।'
          : 'A BIS officer inspects the factory line, verifies quality control, and issues your ISI Mark (CM/L) license.',
      icon: <Award className="w-6 h-6 text-emerald-700" />,
      time: '10 - 15 Days',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
            {lang === 'hi' ? 'निर्माता मार्गदर्शन' : 'Manufacturer Guidance'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight mt-3">
            {lang === 'hi' ? 'आपकी BIS प्रमाणीकरण यात्रा' : 'Understand your BIS Certification Journey'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'भारतीय मानक ब्यूरो (BIS) से ISI मार्क प्राप्त करने के लिए 6 सरल चरण।'
              : 'A step-by-step roadmap to obtain your official ISI Mark or Compulsory Registration license.'}
          </p>
        </div>

        {/* 6-Step Visual Journey */}
        <div className="space-y-4">
          {journeySteps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition flex flex-col sm:flex-row items-start gap-5"
            >
              <div className="flex items-center gap-4 shrink-0">
                <span className="w-12 h-12 rounded-2xl bg-[#0b2545] text-white flex items-center justify-center font-black text-lg shadow-sm">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{step.time}</span>
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE MSME COST & TIMELINE CALCULATOR WIDGET */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl font-bold text-[#0b2545]">
              {lang === 'hi' ? 'त्वरित लागत एवं समय अनुमानक' : 'Instant Cost & Timeline Estimator (MSME Demo)'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  {lang === 'hi' ? 'उत्पाद प्रकार चुनें:' : 'Select Product Type:'}
                </label>
                <select
                  value={selectedProductType}
                  onChange={(e) => setSelectedProductType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800"
                >
                  <option value="kitchen">Electric Kitchen Appliances (IS 4250)</option>
                  <option value="cooker">Domestic Pressure Cookers (IS 2347)</option>
                  <option value="water">Packaged Drinking Water (IS 14543)</option>
                  <option value="wire">Electrical Wires & Cables (IS 694)</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-3 bg-amber-50/70 border border-amber-200 rounded-xl">
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    {lang === 'hi' ? 'उद्यम MSME पंजीकृत इकाई?' : 'Udyam MSME Registered?'}
                  </span>
                  <span className="text-xs text-slate-500">
                    {lang === 'hi' ? 'सरकारी आवेदन में 50% छूट लागू' : 'Unlocks 50% government fee waiver'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMsme(!isMsme)}
                  className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                    isMsme ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${
                      isMsme ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-300 border-b border-slate-800 pb-2">
                <span>Application & Audit Fees:</span>
                <span className="font-mono font-bold text-amber-400">
                  {isMsme ? '₹5,000 (50% Concession)' : '₹10,000 (Full Rate)'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-300 border-b border-slate-800 pb-2">
                <span>Lab Testing Estimates:</span>
                <span className="font-mono font-bold">
                  {selectedProductType === 'water' ? '₹35,000 - ₹50,000' : '₹18,000 - ₹25,000'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-300 border-b border-slate-800 pb-2">
                <span>Estimated Timeline:</span>
                <span className="font-mono font-bold text-emerald-400">
                  {selectedProductType === 'water' ? '45 to 60 Days' : '30 to 45 Days'}
                </span>
              </div>
              <div className="pt-1 flex justify-between items-center text-sm font-bold">
                <span>Estimated Total:</span>
                <span className="text-base text-amber-400 font-mono">
                  {isMsme
                    ? selectedProductType === 'water'
                      ? '₹40,000 - ₹55,000'
                      : '₹23,000 - ₹30,000'
                    : selectedProductType === 'water'
                    ? '₹50,000 - ₹65,000'
                    : '₹33,000 - ₹40,000'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-[#0b2545] to-[#133b5c] rounded-3xl p-8 text-white text-center space-y-4 shadow-xl">
          <h2 className="text-2xl font-extrabold">
            {lang === 'hi' ? 'शुरुआत कहाँ से करें समझ नहीं आ रहा?' : 'Not sure where to start?'}
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'हमारे एआई सहायक से अपने उत्पाद का नाम बताएं और तुरंत व्यक्तिगत चेकलिस्ट प्राप्त करें।'
              : 'Ask our AI SmartGuide assistant with your product name to get an instant tailored roadmap.'}
          </p>
          <button
            onClick={() => onNavigateToAssistant('Electric Mixer Grinder')}
            className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-lg transition inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{lang === 'hi' ? 'स्मार्टगाइड से पूछें' : 'Ask SmartGuide'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
