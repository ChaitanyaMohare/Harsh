import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ShieldCheck, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { Language } from '../data/translations';
import { mockStandards } from '../data/standards';
import { StandardItem } from '../data/types';

interface StandardsViewProps {
  lang: Language;
  onOpenStandardModal: (standard: StandardItem) => void;
  onSelectProductForAssistant: (productName: string) => void;
}

export const StandardsView: React.FC<StandardsViewProps> = ({
  lang,
  onOpenStandardModal,
  onSelectProductForAssistant,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Kitchen Appliances', 'Cookware & Utensils', 'Precious Metals & Hallmarking', 'Electrical Wiring & Power', 'Food, Beverages & Water', 'Automotive & Safety'];

  const filteredStandards = useMemo(() => {
    return mockStandards.filter((item) => {
      const matchesSearch =
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.applicableProducts.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
            {lang === 'hi' ? 'भारतीय मानक संकलन' : 'National Standards Repository'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight mt-3">
            {lang === 'hi' ? 'सही भारतीय मानक (IS Code) खोजें' : 'Find the Right Indian Standard'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'उत्पाद का नाम या मानक संख्या (जैसे IS 4250) लिखकर खोजें।'
              : 'Search product name or standard number to check certification status and mandatory requirements.'}
          </p>
        </div>

        {/* Large Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-2xl shadow-md border-2 border-slate-200 focus-within:border-blue-700 transition p-1.5">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                lang === 'hi'
                  ? 'उत्पाद या मानक खोजें (उदा. IS 4250, मिक्सर, कुकर)...'
                  : 'Search product name or standard number (e.g. IS 4250, Mixer, Pressure Cooker)...'
              }
              className="w-full bg-transparent text-slate-900 px-3 py-2.5 text-sm sm:text-base placeholder:text-slate-400 focus:outline-hidden"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="px-3 py-1 text-xs text-slate-400 hover:text-slate-600 font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar mt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0b2545] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStandards.map((item) => (
            <div
              key={item.code}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 card-hover transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xl font-black text-blue-950 font-mono tracking-tight">
                    {item.code}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide ${
                      item.status.includes('Mandatory')
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 line-clamp-2 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {lang === 'hi' ? 'लागू उत्पाद:' : 'Key Products:'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.applicableProducts.slice(0, 3).map((p, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {p}
                      </span>
                    ))}
                    {item.applicableProducts.length > 3 && (
                      <span className="text-[11px] text-slate-400 px-1 py-0.5">
                        +{item.applicableProducts.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenStandardModal(item)}
                  className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'विवरण' : 'Details'}</span>
                </button>

                <button
                  onClick={() => onSelectProductForAssistant(item.applicableProducts[0] || item.title)}
                  className="flex-1 py-2 bg-[#0b2545] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow transition flex items-center justify-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{lang === 'hi' ? 'मार्गदर्शन' : 'Guidance'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStandards.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">
              {lang === 'hi'
                ? 'कोई मेल खाता मानक नहीं मिला। कृपया दूसरा शब्द खोजें।'
                : 'No standards found matching your search. Try searching for "Mixer", "Cooker", or "Water".'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
