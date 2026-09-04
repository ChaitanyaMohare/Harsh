import React, { useState, useMemo } from 'react';
import { Search, MapPin, FlaskConical, Award, Star, Clock, Filter, Phone, CheckCircle } from 'lucide-react';
import { Language } from '../data/translations';
import { mockLaboratories } from '../data/laboratories';
import { Laboratory } from '../data/types';

interface LabFinderViewProps {
  lang: Language;
  onOpenLabModal: (lab: Laboratory) => void;
}

export const LabFinderView: React.FC<LabFinderViewProps> = ({
  lang,
  onOpenLabModal,
}) => {
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [keyword, setKeyword] = useState('');

  const productsList = [
    'All',
    'Electric Mixer Grinder',
    'Packaged Drinking Water',
    'Electrical Wire',
    'Pressure Cooker',
    'Two-Wheeler Helmet',
    'LED Bulb',
  ];

  const citiesList = [
    'All',
    'Mumbai',
    'Delhi NCR',
    'Bengaluru',
    'Kolkata',
    'Chennai',
    'Ahmedabad / Vadodara',
    'Pune',
  ];

  const filteredLabs = useMemo(() => {
    return mockLaboratories.filter((lab) => {
      const matchProduct =
        selectedProduct === 'All' ||
        lab.supportedProducts.some((p) => p.toLowerCase().includes(selectedProduct.toLowerCase()));

      const matchCity =
        selectedCity === 'All' || lab.city.toLowerCase().includes(selectedCity.toLowerCase());

      const matchKeyword =
        !keyword ||
        lab.name.toLowerCase().includes(keyword.toLowerCase()) ||
        lab.location.toLowerCase().includes(keyword.toLowerCase()) ||
        lab.supportedStandards.some((s) => s.toLowerCase().includes(keyword.toLowerCase()));

      return matchProduct && matchCity && matchKeyword;
    });
  }, [selectedProduct, selectedCity, keyword]);

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
            {lang === 'hi' ? 'मान्यता प्राप्त टेस्टिंग नेटवर्क' : 'Accredited Lab Network'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight mt-3">
            {lang === 'hi' ? 'BIS-मान्यता प्राप्त परीक्षण प्रयोगशाला खोजें' : 'Find a Testing Laboratory'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'उत्पाद परीक्षण और गुणवत्ता सत्यापन के लिए अधिकृत सरकारी और निजी लैब खोजें।'
              : 'Locate NABL & BIS approved testing facilities for product compliance and sample clearance.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Filter by Product */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                {lang === 'hi' ? 'उत्पाद चुनें:' : 'Select Product:'}
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-100"
              >
                {productsList.map((p) => (
                  <option key={p} value={p}>
                    {p === 'All' ? (lang === 'hi' ? 'सभी उत्पाद (All Products)' : 'All Products') : p}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by City */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                {lang === 'hi' ? 'शहर / राज्य चुनें:' : 'Select City:'}
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-100"
              >
                {citiesList.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? (lang === 'hi' ? 'सभी शहर (All Cities)' : 'All Cities') : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                {lang === 'hi' ? 'मानक या कीवर्ड खोजें:' : 'Search Standard / Lab Name:'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="e.g. IS 4250, Mumbai..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-100"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 text-xs text-slate-500 border-t border-slate-100">
            <span>
              {lang === 'hi'
                ? `कुल ${filteredLabs.length} मान्यता प्राप्त प्रयोगशालाएं पाई गईं`
                : `Found ${filteredLabs.length} recognized testing laboratories`}
            </span>
            {(selectedProduct !== 'All' || selectedCity !== 'All' || keyword) && (
              <button
                onClick={() => {
                  setSelectedProduct('All');
                  setSelectedCity('All');
                  setKeyword('');
                }}
                className="text-blue-700 hover:underline font-bold"
              >
                {lang === 'hi' ? 'फ़िल्टर हटाएं' : 'Reset Filters'}
              </button>
            )}
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 card-hover transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-700" />
                    <span>BIS Recognized</span>
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{lab.rating}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
                  {lab.name}
                </h3>

                <p className="text-xs text-slate-600 flex items-center gap-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{lab.location}, {lab.city}</span>
                </p>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-400 font-medium block">
                      {lang === 'hi' ? 'मानक समर्थन:' : 'Supported Standards:'}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {lab.supportedStandards.map((std, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white text-slate-800 font-mono font-bold text-[10px] border border-slate-200"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-slate-600 px-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Turnaround:</span>
                    </span>
                    <span className="font-bold text-slate-800">{lab.turnaroundTime}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenLabModal(lab)}
                  className="w-full py-2.5 bg-[#0b2545] hover:bg-blue-900 text-white text-xs font-bold rounded-xl shadow transition"
                >
                  {lang === 'hi' ? 'प्रयोगशाला विवरण देखें' : 'View Laboratory Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500 text-sm">
              {lang === 'hi'
                ? 'इस चयन के लिए कोई लैब नहीं मिली। कृपया फ़िल्टर बदलें।'
                : 'No testing laboratories found for this product/city combination. Try selecting "All Products".'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
