import React from 'react';
import { X, MapPin, Phone, Mail, Award, Clock, Star, CheckCircle } from 'lucide-react';
import { Laboratory } from '../data/types';
import { Language } from '../data/translations';

interface LabModalProps {
  lab: Laboratory | null;
  onClose: () => void;
  lang: Language;
}

export const LabModal: React.FC<LabModalProps> = ({ lab, onClose, lang }) => {
  if (!lab) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white flex items-center gap-1">
                <Award className="w-3 h-3" />
                {lang === 'hi' ? 'BIS मान्यता प्राप्त' : 'BIS Recognized'}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                {lab.rating} / 5.0
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {lab.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {lab.location}, {lab.city}, {lab.state}
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'मान्यता एवं प्रमाणीकरण' : 'Accreditation Status'}
              </span>
              <p className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-700 shrink-0" />
                {lab.accreditation}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'hi' ? `मान्यता वर्ष: ${lab.recognizedSince}` : `Recognized since: ${lab.recognizedSince}`}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'अनुमानित रिपोर्ट समय' : 'Turnaround Time'}
              </span>
              <p className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                {lab.turnaroundTime}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'hi' ? 'नमूना जमा करने के बाद' : 'From sample registration'}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'समर्थित उत्पाद और श्रेणियां' : 'Supported Product Categories'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {lab.supportedProducts.map((prod, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded-lg text-sm font-medium border border-blue-200 flex items-center gap-1"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  {prod}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'परीक्षित मानक' : 'Recognized Standards'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {lab.supportedStandards.map((std, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 text-slate-800 rounded text-xs font-mono font-bold border border-slate-200"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'संपर्क एवं पता विवरण' : 'Direct Contact & Testing Desk'}
            </h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-800">{lab.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`tel:${lab.contact.phone}`} className="text-blue-700 hover:underline font-medium">
                  {lab.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${lab.contact.email}`} className="text-blue-700 hover:underline font-medium">
                  {lab.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0b2545] hover:bg-[#133b5c] text-white text-xs font-semibold rounded-lg transition shadow"
          >
            {lang === 'hi' ? 'ठीक है' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
