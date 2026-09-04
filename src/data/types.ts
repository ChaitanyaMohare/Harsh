export type BISStatus = 'Mandatory' | 'Voluntary' | 'Hallmarking Required';

export interface StepGuide {
  stepNumber: string;
  title: string;
  titleHindi: string;
  description: string;
  descriptionHindi: string;
  duration: string;
  tips?: string;
  tipsHindi?: string;
}

export interface RequiredDoc {
  id: string;
  title: string;
  titleHindi: string;
  note: string;
  mandatory: boolean;
}

export interface OfficialSource {
  title: string;
  url: string;
  description: string;
  gazetteNo?: string;
  type: 'Gazette QCO' | 'BIS Portal' | 'Indian Standards' | 'Manakonline';
}

export interface ProductGuidance {
  id: string;
  slug: string;
  name: string;
  nameHindi: string;
  searchAliases: string[];
  category: string;
  categoryHindi: string;
  bisStatus: BISStatus;
  bisStatusHindi: string;
  isMandatory: boolean;
  standardNumber: string;
  standardTitle: string;
  standardTitleHindi: string;
  confidence: 'High' | 'Medium';
  simpleExplanation: string;
  simpleExplanationHindi: string;
  steps: StepGuide[];
  documents: RequiredDoc[];
  laboratoryIds: string[];
  officialSources: OfficialSource[];
  keyTestingParameters: string[];
  scheme: string; // e.g., 'Scheme-I (ISI Mark)', 'Scheme-II (CRS)', 'Hallmarking Scheme'
  schemeHindi: string;
  estimatedCost: string;
  estimatedTimeline: string;
}

export interface Laboratory {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  accreditation: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  supportedProducts: string[];
  supportedStandards: string[];
  turnaroundTime: string;
  rating: number;
  recognizedSince: string;
}

export interface StandardItem {
  code: string;
  title: string;
  category: string;
  status: 'Mandatory (QCO)' | 'Voluntary' | 'Mandatory (Hallmarking)';
  year: string;
  description: string;
  applicableProducts: string[];
  testingKeyPoints: string[];
  scheme: string;
}

export interface HUIDRecord {
  huid: string;
  article: string;
  articleHindi: string;
  purity: string;
  karat: string;
  ahcCenter: string;
  ahcCity: string;
  jewelerName: string;
  hallmarkingDate: string;
  weightGrams: string;
  status: 'Verified' | 'Unverified';
}
