import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  Award,
  Calendar,
  Building,
  Scale,
  Sparkles,
  Info,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../data/translations';
import { mockHUIDRecords } from '../data/huidMock';
import { HUIDRecord } from '../data/types';

interface HallmarkViewProps {
  lang: Language;
}

export const HallmarkView: React.FC<HallmarkViewProps> = ({ lang }) => {
  const [huidInput, setHuidInput] = useState('A123B4');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedRecord, setVerifiedRecord] = useState<HUIDRecord | null>(mockHUIDRecords['A123B4']);
  const [notFound, setNotFound] = useState(false);

  const demoHUIDs = ['A123B4', 'MH78K2', 'DL99X1', 'TN45P8'];

  const handleVerify = (codeToVerify?: string) => {
    const code = (codeToVerify || huidInput).trim().toUpperCase();
    setIsVerifying(true);
    setNotFound(false);
    setVerifiedRecord(null);

    setTimeout(() => {
      setIsVerifying(false);
      if (mockHUIDRecords[code]) {
        setVerifiedRecord(mockHUIDRecords[code]);
      } else {
        setNotFound(true);
      }
    }, 600);
  };

  const handlePillClick = (code: string) => {
    setHuidInput(code);
    handleVerify(code);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 font-bold text-xs sm:text-sm mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>{lang === 'hi' ? 'BIS हॉलमार्क सत्यापन' : 'Official Gold Hallmarking Verification'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            {lang === 'hi' ? 'सोने के गहनों का HUID हॉलमार्क जांचें' : 'Verify Gold Jewellery Hallmark'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'गहने पर अंकित 6-अक्षरों का HUID नंबर दर्ज करें और शुद्धता व ज्वेलर विवरण की पुष्टि करें।'
              : 'Enter the 6-digit alphanumeric HUID engraved on your gold jewellery to verify purity and authentic registration.'}
          </p>
        </div>

        {/* 3 Authentic Hallmark Signs Educational Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 text-center">
            {lang === 'hi' ? 'असली हॉलमार्क वाले सोने पर ये 3 चिह्न होने चाहिए:' : '3 Signs of Authentic BIS Hallmarked Gold:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-xs mb-2">
                BIS
              </div>
              <h4 className="text-sm font-bold text-slate-900">1. BIS Logo</h4>
              <p className="text-xs text-slate-600 mt-1">
                {lang === 'hi' ? 'त्रिकोण वाला BIS मानक चिन्ह' : 'Official triangular BIS logo emblem'}
              </p>
            </div>

            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-xs mb-2">
                22K916
              </div>
              <h4 className="text-sm font-bold text-slate-900">2. Purity & Fineness</h4>
              <p className="text-xs text-slate-600 mt-1">
                {lang === 'hi' ? 'कैरेट और शुद्धता (जैसे 22K 916)' : 'Karat and purity grade (e.g. 22K 916, 18K 750)'}
              </p>
            </div>

            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500 text-white font-mono font-black flex items-center justify-center text-xs mb-2">
                A123B4
              </div>
              <h4 className="text-sm font-bold text-slate-900">3. 6-Digit HUID</h4>
              <p className="text-xs text-slate-600 mt-1">
                {lang === 'hi' ? 'यूनिक लेजर कोड (जैसे A123B4)' : 'Unique laser-inscribed 6-digit code'}
              </p>
            </div>
          </div>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify();
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                {lang === 'hi' ? '6-अंकीय HUID नंबर दर्ज करें:' : 'Enter 6-Digit Alphanumeric HUID:'}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={huidInput}
                  onChange={(e) => setHuidInput(e.target.value.toUpperCase())}
                  placeholder="e.g. A123B4"
                  className="flex-1 bg-slate-50 border-2 border-slate-300 rounded-xl px-4 py-3 text-lg font-mono font-black tracking-widest text-slate-900 uppercase focus:outline-hidden focus:border-amber-500 focus:bg-white"
                />
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl shadow-md transition shrink-0 flex items-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>{lang === 'hi' ? 'सत्यापित करें' : 'Verify'}</span>
                </button>
              </div>
            </div>

            {/* Clickable Demo Pills */}
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                {lang === 'hi' ? 'क्लिक करके डेमो HUID टेस्ट करें:' : 'Click to test demo HUID numbers:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {demoHUIDs.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handlePillClick(code)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                      huidInput === code
                        ? 'bg-amber-100 text-amber-950 border border-amber-400'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </form>

          {/* Verification Result Card */}
          {verifiedRecord && (
            <div className="mt-8 pt-6 border-t border-slate-100 animate-fade-in space-y-4">
              <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      ✓ Demo Verified
                    </span>
                    <h3 className="text-base font-bold text-emerald-950">
                      {lang === 'hi' ? 'हॉलमार्क सत्यापन सफल!' : 'Hallmark Verification Successful'}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold font-mono">
                  {verifiedRecord.huid}
                </span>
              </div>

              {/* Record Detail Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-slate-400 font-bold block mb-1">
                    {lang === 'hi' ? 'आभूषण प्रकार (Article):' : 'Article Description:'}
                  </span>
                  <span className="font-bold text-slate-900 text-base">
                    {lang === 'hi' ? verifiedRecord.articleHindi : verifiedRecord.article}
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-slate-400 font-bold block mb-1">
                    {lang === 'hi' ? 'सोने की शुद्धता (Purity & Karat):' : 'Certified Purity:'}
                  </span>
                  <span className="font-bold text-amber-700 text-base">
                    {verifiedRecord.purity}
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-slate-400 font-bold block mb-1">
                    {lang === 'hi' ? 'हॉलमार्किंग केंद्र (AHC):' : 'Assaying & Hallmarking Centre:'}
                  </span>
                  <span className="font-semibold text-slate-800">
                    {verifiedRecord.ahcCenter}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Location: {verifiedRecord.ahcCity}
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <span className="text-slate-400 font-bold block mb-1">
                    {lang === 'hi' ? 'पंजीकृत ज्वेलर:' : 'Registered Jeweler:'}
                  </span>
                  <span className="font-semibold text-slate-800">
                    {verifiedRecord.jewelerName}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Hallmarked: {verifiedRecord.hallmarkingDate}
                  </span>
                </div>
              </div>
            </div>
          )}

          {notFound && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-xs sm:text-sm text-red-900 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">HUID Not Found in Demo Database</span>
                <p className="mt-0.5 text-xs text-red-700">
                  Try clicking one of the demo chips above like <span className="font-mono font-bold">A123B4</span> or <span className="font-mono font-bold">MH78K2</span>.
                </p>
              </div>
            </div>
          )}

          {/* Demo Disclaimer */}
          <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500 flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              {lang === 'hi'
                ? 'यह एक प्रोटोटाइप प्रदर्शन है। वास्तविक सत्यापन आधिकारिक BIS Care मोबाइल ऐप या manakonline पोर्टल से जुड़ता है।'
                : 'Prototype demonstration. Actual verification in production connects directly to the official Bureau of Indian Standards (BIS) national hallmarking registry and the BIS Care Mobile App.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
