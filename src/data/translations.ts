export type Language = 'en' | 'hi';

export interface TranslationDictionary {
  appName: string;
  appSubtitle: string;
  tagline: string;
  nav: {
    home: string;
    standards: string;
    certGuide: string;
    findLab: string;
    askAssistant: string;
    hallmarkCheck: string;
    judgeMode: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    voiceButtonTooltip: string;
    popularSearches: string;
  };
  quickActions: {
    title: string;
    subtitle: string;
    findStandardTitle: string;
    findStandardDesc: string;
    certGuideTitle: string;
    certGuideDesc: string;
    findLabTitle: string;
    findLabDesc: string;
    askAiTitle: string;
    askAiDesc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  assistant: {
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    sendButton: string;
    sampleQuestionsTitle: string;
    reasoningHeader: string;
    stages: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
    };
  };
  result: {
    statusBadgeMandatory: string;
    statusBadgeVoluntary: string;
    statusBadgeHallmark: string;
    productIdentified: string;
    confidence: string;
    standardHeader: string;
    viewDetails: string;
    whatYouNeedToDo: string;
    documentsNeeded: string;
    testLabsTitle: string;
    testLabsSubtitle: string;
    officialSourcesTitle: string;
    demoNotice: string;
    nextActionHeader: string;
    actionFindLab: string;
    actionAnotherProduct: string;
    actionNewQuestion: string;
  };
  common: {
    prototypeDemoNotice: string;
    backToTop: string;
    freeService: string;
    msmeFriendly: string;
    officialGovInitiative: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    appName: 'BISSA',
    appSubtitle: 'Simple guidance for Indian Standards, BIS Certification and Product Compliance',
    tagline: 'Empowering Indian MSMEs, Manufacturers and Citizens with Instant Standards Knowledge',
    nav: {
      home: 'Home',
      standards: 'Standards',
      certGuide: 'Certification Guide',
      findLab: 'Find Laboratory',
      askAssistant: 'Ask Assistant',
      hallmarkCheck: 'Verify Hallmark',
      judgeMode: 'How BISSA Works (Judges)',
    },
    hero: {
      badge: 'Bureau of Indian Standards • AI-Powered Standards Assistance',
      title: 'What do you want to know about your product?',
      subtitle: 'Ask about BIS standards, certification, testing, licensing, and product requirements in simple language.',
      searchPlaceholder: 'Example: Do I need BIS certification for my mixer grinder?',
      searchButton: 'Ask BISSA',
      voiceButtonTooltip: 'Tap to speak your question in English or Hindi',
      popularSearches: 'Frequently Asked Products:',
    },
    quickActions: {
      title: 'Quick Guidance Services',
      subtitle: 'Choose an option below or ask our AI assistant in natural language.',
      findStandardTitle: 'Find BIS Standard',
      findStandardDesc: 'Find which Indian Standard applies to your product.',
      certGuideTitle: 'Certification Guide',
      certGuideDesc: 'Understand whether certification is required and what to do.',
      findLabTitle: 'Find Testing Lab',
      findLabDesc: 'Find laboratories for product testing across India.',
      askAiTitle: 'Ask BISSA',
      askAiDesc: 'Ask your question in simple everyday language.',
    },
    howItWorks: {
      title: 'How BISSA Works',
      subtitle: 'Simplifying government compliance in 4 easy steps',
      step1Title: 'Ask about your product',
      step1Desc: 'Type or speak your product name or doubt in plain everyday language.',
      step2Title: 'BISSA understands',
      step2Desc: 'Our AI identifies your product category and regulatory intent.',
      step3Title: 'We check BIS requirements',
      step3Desc: 'BISSA matches national Indian Standards and Quality Control Orders (QCOs).',
      step4Title: 'Clear next steps & sources',
      step4Desc: 'Get a simple step-by-step checklist, lab locator, and official BIS links.',
    },
    assistant: {
      title: 'BISSA Assistant',
      subtitle: 'Ask your question in simple language. You can ask in English or Hindi.',
      inputPlaceholder: 'Type your question here (e.g. Is BIS certification required for mixer grinder?)',
      sendButton: 'Ask Question',
      sampleQuestionsTitle: 'Sample Demo Questions (Click to Test):',
      reasoningHeader: 'AI Reasoning Pipeline in Action',
      stages: {
        s1: 'Understanding your question...',
        s2: 'Identifying your product...',
        s3: 'Checking BIS requirements...',
        s4: 'Finding relevant standards...',
        s5: 'Preparing your guidance...',
      },
    },
    result: {
      statusBadgeMandatory: 'MANDATORY CERTIFICATION REQUIRED',
      statusBadgeVoluntary: 'VOLUNTARY CERTIFICATION',
      statusBadgeHallmark: 'MANDATORY HALLMARKING & HUID',
      productIdentified: 'Product Identified',
      confidence: 'Confidence: High',
      standardHeader: 'Relevant Indian Standard',
      viewDetails: 'View Standard Details',
      whatYouNeedToDo: 'What You Need To Do (Step-by-Step)',
      documentsNeeded: 'Documents You May Need',
      testLabsTitle: 'BIS-Recognized Testing Laboratories',
      testLabsSubtitle: 'Accredited facilities capable of conducting full type-tests for this standard',
      officialSourcesTitle: 'Official Government Sources & Gazette Orders',
      demoNotice: 'Prototype demonstration data based on official BIS Standards & Quality Control Orders.',
      nextActionHeader: 'What would you like to do next?',
      actionFindLab: 'Find Testing Laboratory',
      actionAnotherProduct: 'Check Another Product',
      actionNewQuestion: 'Start New Question',
    },
    common: {
      prototypeDemoNotice: 'Digital Public Guidance Platform • Bureau of Indian Standards',
      backToTop: 'Back to top',
      freeService: '100% Free Public Citizen & MSME Service',
      msmeFriendly: 'Special MSME & Small Business Friendly Guidance',
      officialGovInitiative: 'Inspired by Bureau of Indian Standards (Govt. of India)',
    },
  },
  hi: {
    appName: 'BISSA',
    appSubtitle: 'भारतीय मानकों, BIS प्रमाणीकरण और उत्पाद अनुपालन के लिए सरल मार्गदर्शन',
    tagline: 'भारतीय एमएसएमई, निर्माताओं और नागरिकों को सरल भाषा में मानक ज्ञान से सशक्त बनाना',
    nav: {
      home: 'होम',
      standards: 'मानक सूची',
      certGuide: 'प्रमाणीकरण गाइड',
      findLab: 'प्रयोगशाला खोजें',
      askAssistant: 'सहायक से पूछें',
      hallmarkCheck: 'हॉलमार्क जांचें',
      judgeMode: 'BISSA कैसे काम करता है (जज मोड)',
    },
    hero: {
      badge: 'भारतीय मानक ब्यूरो • एआई-आधारित मानक सहायता',
      title: 'आप अपने उत्पाद के बारे में क्या जानना चाहते हैं?',
      subtitle: 'BIS मानकों, प्रमाणीकरण, लैब परीक्षण, लाइसेंस और उत्पाद नियमों के बारे में सरल भाषा में पूछें।',
      searchPlaceholder: 'उदाहरण: क्या मुझे मिक्सर ग्राइंडर के लिए BIS सर्टिफिकेशन चाहिए?',
      searchButton: 'पूछें',
      voiceButtonTooltip: 'हिंदी या अंग्रेजी में बोलने के लिए माइक दबाएं',
      popularSearches: 'अक्सर पूछे जाने वाले उत्पाद:',
    },
    quickActions: {
      title: 'त्वरित मार्गदर्शन सेवाएं',
      subtitle: 'नीचे दिए गए विकल्पों में से चुनें या हमारे एआई सहायक से सीधी भाषा में पूछें।',
      findStandardTitle: 'BIS मानक खोजें',
      findStandardDesc: 'जानें कि आपके उत्पाद पर कौन सा भारतीय मानक लागू होता है।',
      certGuideTitle: 'प्रमाणीकरण गाइड',
      certGuideDesc: 'समझें कि सर्टिफिकेशन जरूरी है या नहीं और क्या कदम उठाने हैं।',
      findLabTitle: 'परीक्षण लैब खोजें',
      findLabDesc: 'उत्पाद परीक्षण के लिए देश भर में मान्यता प्राप्त लैब खोजें।',
      askAiTitle: 'BISSA से पूछें',
      askAiDesc: 'अपनी भाषा में कोई भी सवाल पूछें और तुरंत जवाब पाएं।',
    },
    howItWorks: {
      title: 'BISSA कैसे काम करता है',
      subtitle: 'सरकारी नियमों को 4 आसान चरणों में समझें',
      step1Title: 'अपने उत्पाद के बारे में पूछें',
      step1Desc: 'अपने उत्पाद का नाम या अपनी समस्या सामान्य भाषा में लिखें या बोलें।',
      step2Title: 'BISSA समझता है',
      step2Desc: 'हमारा एआई आपके उत्पाद और कानूनी आवश्यकताओं को पहचानता है।',
      step3Title: 'BIS नियमों की जांच',
      step3Desc: 'हम संबंधित भारतीय मानकों और क्वालिटी कंट्रोल ऑर्डर (QCO) की पुष्टि करते हैं।',
      step4Title: 'स्पष्ट कदम और आधिकारिक स्रोत',
      step4Desc: 'सरल चेकलिस्ट, नजदीकी टेस्टिंग लैब और सरकारी लिंक प्राप्त करें।',
    },
    assistant: {
      title: 'BISSA सहायक',
      subtitle: 'सरल भाषा में अपना सवाल पूछें। आप अंग्रेजी या हिंदी में पूछ सकते हैं।',
      inputPlaceholder: 'यहाँ अपना प्रश्न लिखें (उदा. क्या मिक्सर ग्राइंडर के लिए BIS जरूरी है?)',
      sendButton: 'प्रश्न पूछें',
      sampleQuestionsTitle: 'नमूना डेमो प्रश्न (क्लिक करके देखें):',
      reasoningHeader: 'एआई प्रोसेसिंग प्रक्रिया (लाइव डेमो)',
      stages: {
        s1: 'आपके सवाल को समझा जा रहा है...',
        s2: 'उत्पाद की पहचान की जा रही है...',
        s3: 'BIS नियमों और अनिवार्यताओं की जांच जारी है...',
        s4: 'संबंधित भारतीय मानक ढूंढा जा रहा है...',
        s5: 'आपका व्यक्तिगत मार्गदर्शन तैयार हो रहा है...',
      },
    },
    result: {
      statusBadgeMandatory: 'अनिवार्य प्रमाणीकरण आवश्यक (MANDATORY)',
      statusBadgeVoluntary: 'ऐच्छिक प्रमाणीकरण (VOLUNTARY)',
      statusBadgeHallmark: 'अनिवार्य हॉलमार्किंग और HUID',
      productIdentified: 'पहचाना गया उत्पाद',
      confidence: 'सटीकता: उच्च (High)',
      standardHeader: 'संबंधित भारतीय मानक',
      viewDetails: 'मानक विवरण देखें',
      whatYouNeedToDo: 'आपको क्या करना होगा (चरण-दर-चरण)',
      documentsNeeded: 'जरूरी दस्तावेज',
      testLabsTitle: 'BIS-मान्यता प्राप्त टेस्टिंग प्रयोगशालाएं',
      testLabsSubtitle: 'इस मानक के पूर्ण परीक्षण के लिए अधिकृत प्रयोगशालाएं',
      officialSourcesTitle: 'आधिकारिक सरकारी स्रोत और राजपत्र आदेश',
      demoNotice: 'आधिकारिक BIS मानकों और आदेशों पर आधारित प्रोटोटाइप डेमो डेटा।',
      nextActionHeader: 'अब आप आगे क्या करना चाहते हैं?',
      actionFindLab: 'टेस्टिंग लैब खोजें',
      actionAnotherProduct: 'अन्य उत्पाद जांचें',
      actionNewQuestion: 'नया सवाल पूछें',
    },
    common: {
      prototypeDemoNotice: 'डिजिटल नागरिक मार्गदर्शन प्लेटफॉर्म • भारतीय मानक ब्यूरो',
      backToTop: 'ऊपर जाएं',
      freeService: '100% निःशुल्क नागरिक एवं एमएसएमई सेवा',
      msmeFriendly: 'छोटे उद्योगों एवं व्यापारियों के लिए सुगम मार्गदर्शन',
      officialGovInitiative: 'भारतीय मानक ब्यूरो (BIS), भारत सरकार से प्रेरित',
    },
  },
};
