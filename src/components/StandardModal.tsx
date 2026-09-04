import React from 'react';
import { X, ExternalLink, CheckCircle2, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { StandardItem } from '../data/types';
import { Language } from '../data/translations';

interface StandardModalProps {
  standard: StandardItem | null;
  onClose: () => void;
  lang: Language;
  onOpenAssistantWithProduct?: (productName: string) => void;
}

export const StandardModal: React.FC<StandardModalProps> = ({
  standard,
  onClose,
  lang,
  onOpenAssistantWithProduct,
}) => {
  if (!standard) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0b2545] text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-900">
                {standard.status}
              </span>
              <span className="text-xs text-slate-300">
                {standard.year}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>{standard.code}</span>
            </h2>
            <p className="text-sm text-slate-200 mt-1 font-medium">
              {standard.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'मानक का विवरण' : 'Description & Scope'}
            </h3>
            <p className="text-base text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              {standard.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'प्रमाणीकरण योजना' : 'Certification Scheme'}
              </span>
              <span className="text-sm font-semibold text-blue-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                {standard.scheme}
              </span>
            </div>

            <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-4">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'उत्पाद श्रेणी' : 'Product Category'}
              </span>
              <span className="text-sm font-semibold text-amber-950 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-700 shrink-0" />
                {standard.category}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'लागू होने वाले उत्पाद' : 'Applicable Products'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {standard.applicableProducts.map((prod, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg text-sm font-medium border border-slate-200"
                >
                  {prod}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'प्रमुख अनिवार्य परीक्षण' : 'Key Mandatory Laboratory Tests'}
            </h3>
            <ul className="space-y-2">
              {standard.testingKeyPoints.map((test, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{test}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">
                {lang === 'hi' ? 'कानूनी अनुपालन सूचना:' : 'Mandatory Compliance Notice:'}
              </span>
              <p className="mt-0.5">
                {lang === 'hi'
                  ? 'गुणवत्ता नियंत्रण आदेश (QCO) के तहत इस मानक का उल्लंघन करने पर जब्ती और विधिक कार्रवाई का प्रावधान है।'
                  : 'Products notified under Quality Control Orders (QCO) require mandatory BIS certification before manufacturing, packaging, import, or domestic distribution.'}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href="https://standardsbis.bsbedge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
          >
            <span>{lang === 'hi' ? 'BIS पोर्टल पर आधिकारिक मानक देखें' : 'View on BIS Standards Portal'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2">
            {onOpenAssistantWithProduct && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAssistantWithProduct(standard.applicableProducts[0] || standard.title);
                }}
                className="px-4 py-2 bg-[#0b2545] hover:bg-[#133b5c] text-white text-xs font-semibold rounded-lg shadow transition"
              >
                {lang === 'hi' ? 'इस उत्पाद के लिए मार्गदर्शन लें' : 'Get Guidance for this Product'}
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold rounded-lg transition"
            >
              {lang === 'hi' ? 'बंद करें' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
