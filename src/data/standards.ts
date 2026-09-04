import { StandardItem } from './types';

export const mockStandards: StandardItem[] = [
  {
    code: 'IS 4250',
    title: 'Domestic Electric Food Mixers (Grinders, Blenders & Liquidizers)',
    category: 'Kitchen Appliances',
    status: 'Mandatory (QCO)',
    year: '1980 (Reaffirmed 2020)',
    description:
      'Specifies electrical safety, constructional requirements, performance tests, and thermal endurance for domestic electric food mixers, juicers, and grinders operating on single-phase AC supplies up to 250V.',
    applicableProducts: ['Mixer Grinder', 'Juicer Mixer', 'Dry Masala Grinder', 'Food Processor', 'Wet Grinder'],
    testingKeyPoints: ['Dielectric strength test', 'Leakage current test', 'Overload protection', 'Blade retention torque', 'Temperature rise in motor windings'],
    scheme: 'Scheme-I (ISI Mark Certification)',
  },
  {
    code: 'IS 2347',
    title: 'Domestic Pressure Cookers — Specification',
    category: 'Cookware & Utensils',
    status: 'Mandatory (QCO)',
    year: '2017 (Fifth Revision)',
    description:
      'Covers construction, materials, minimum body thickness, safety valve mechanism, bursting pressure thresholds, and proof pressure requirements to safeguard households from accidental kitchen explosions.',
    applicableProducts: ['Aluminium Pressure Cooker', 'Stainless Steel Pressure Cooker', 'Hard Anodized Pressure Cooker'],
    testingKeyPoints: ['Proof pressure test (200 kPa)', 'Bursting pressure test (>500 kPa)', 'Safety vent fusible plug test', 'Handle heat resistance'],
    scheme: 'Scheme-I (ISI Mark Certification)',
  },
  {
    code: 'IS 1417',
    title: 'Gold and Gold Alloys, Jewellery/Artefacts — Fineness and Marking',
    category: 'Precious Metals & Hallmarking',
    status: 'Mandatory (Hallmarking)',
    year: '2016 (Third Revision)',
    description:
      'Defines acceptable fineness grades (14K, 18K, 20K, 22K, 23K, 24K) and mandates laser engraving of the BIS emblem, Karat purity, and 6-digit alphanumeric Unique Identification Number (HUID).',
    applicableProducts: ['Gold Bangles', 'Chains', 'Necklaces', 'Rings', 'Earrings', 'Gold Coins / Medallions'],
    testingKeyPoints: ['Fire Assay cupellation method', 'X-ray Fluorescence (XRF) non-destructive test', 'Purity verification within ±2 ppt'],
    scheme: 'Hallmarking Scheme (HUID Registration)',
  },
  {
    code: 'IS 694',
    title: 'Polyvinyl Chloride (PVC) Insulated Cables for Working Voltages up to and including 1100V',
    category: 'Electrical Wiring & Power',
    status: 'Mandatory (QCO)',
    year: '2010 (Fourth Revision)',
    description:
      'Applies to single and multicore flexible PVC insulated copper/aluminium electrical cables utilized in domestic and light industrial wiring installations, ensuring fire resistance and electrical conductivity.',
    applicableProducts: ['Domestic House Wire', 'Flexible Multi-core Cable', 'Submersible Pump Wire', 'Appliance Power Cords'],
    testingKeyPoints: ['Conductor electrical resistance', 'Insulation elongation and tensile strength', 'Flammability / fire retardant test', 'High voltage withstand test'],
    scheme: 'Scheme-I (ISI Mark Certification)',
  },
  {
    code: 'IS 14543',
    title: 'Packaged Drinking Water (Other than Packaged Natural Mineral Water)',
    category: 'Food, Beverages & Water',
    status: 'Mandatory (QCO)',
    year: '2024 (Fifth Revision)',
    description:
      'Prescribes stringent microbiological, physical, chemical, and heavy metal parameters for purified and packaged potable water filled in plastic, glass, or pouch containers for direct consumer drinking.',
    applicableProducts: ['20-Litre Water Bubble Cans', '1-Litre Sealed Water Bottles', '250ml Water Cups / Pouches'],
    testingKeyPoints: ['Absence of E. coli & coliforms', 'Pesticide residue (<0.0001 mg/L)', 'Heavy metals (Lead, Arsenic, Cadmium)', 'TDS and pH balance'],
    scheme: 'Scheme-I (ISI Mark Certification + FSSAI dual mandatory)',
  },
  {
    code: 'IS 4151',
    title: 'Protective Helmets for Riders of Two-Wheeled Motor Vehicles',
    category: 'Automotive & Safety',
    status: 'Mandatory (QCO)',
    year: '2015 (Fourth Revision)',
    description:
      'Outlines strict impact absorption, dynamic retention strap stability, and peripheral vision angle standards to protect motor riders against fatal head trauma during road incidents.',
    applicableProducts: ['Full Face Bike Helmets', 'Open Face Scooter Helmets', 'Flip-up Modular Helmets'],
    testingKeyPoints: ['Impact absorption drop test', 'Chin strap dynamic retention test', 'Penetration resistance spike test', 'Visor optical clarity'],
    scheme: 'Scheme-I (ISI Mark Certification)',
  },
  {
    code: 'IS 16102 (Part 1 & 2)',
    title: 'Self-Ballasted LED Lamps for General Lighting Services',
    category: 'Electronics & Lighting',
    status: 'Mandatory (QCO)',
    year: '2012 (Reaffirmed 2021)',
    description:
      'Safety and performance requirements for domestic LED retrofit bulbs with B22d or E27 caps, preventing electric shock, overheating, and premature driver failure.',
    applicableProducts: ['9W / 12W Domestic LED Bulbs', 'B22 Base LED Lamps', 'Decorative Candle LED Lights'],
    testingKeyPoints: ['Luminous efficacy (Lumens/Watt)', 'Harmonic distortion & power factor', 'Insulation resistance', 'Endurance burning test (1000 hrs)'],
    scheme: 'Compulsory Registration Scheme (CRS / Scheme-II)',
  },
  {
    code: 'IS 9873 (Part 1)',
    title: 'Safety of Toys — Mechanical and Physical Properties',
    category: 'Children & Toys',
    status: 'Mandatory (QCO)',
    year: '2019 (First Revision)',
    description:
      'Mandates tests on toys designed for children under 14 years to eliminate sharp edges, choking hazards from small parts, toxic phthalates, and entrapment risks.',
    applicableProducts: ['Plastic Toys', 'Ride-on Toys', 'Board Games', 'Educational Wooden Puzzles'],
    testingKeyPoints: ['Small parts choking cylinder test', 'Sharp edge & sharp point test', 'Tension and drop impact tests', 'Toxic heavy metal migration'],
    scheme: 'Scheme-I (ISI Mark Certification)',
  },
];
