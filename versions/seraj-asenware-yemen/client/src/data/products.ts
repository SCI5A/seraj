export interface ProductSpecification {
  label: string;
  labelAr: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  category: string;
  categoryAr: string;
  price?: string;
  priceAr?: string;
  features: string[];
  featuresAr: string[];
  specifications: ProductSpecification[];
  certifications: string[];
  warranty: string;
  warrantyAr: string;
  availability: "in-stock" | "limited" | "pre-order";
  sku: string;
  modelNumber: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Digital Type Linear Heat Detection System",
    nameAr: "نظام كشف حرارة خطي رقمي",
    description: "Advanced digital linear heat detection system for fire alarm applications with real-time monitoring",
    descriptionAr: "نظام متطور لكشف الحرارة الخطية بتقنية رقمية متقدمة لتطبيقات أنظمة الإنذار مع المراقبة في الوقت الفعلي",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Linear Heat Detectors",
    categoryAr: "كواشف الحرارة الخطية",
    price: "Starting from $599",
    priceAr: "ابتداءً من 599 دولار",
    features: [
      "High sensitivity digital detection",
      "Real-time temperature monitoring",
      "UL/LPCB certified",
      "Wide temperature range (-40°C to +100°C)",
      "Intelligent signal processing",
      "Remote diagnostics capability"
    ],
    featuresAr: [
      "كشف رقمي عالي الحساسية",
      "مراقبة درجة الحرارة في الوقت الفعلي",
      "معتمد من UL/LPCB",
      "نطاق درجة حرارة واسع (-40°C إلى +100°C)",
      "معالجة إشارات ذكية",
      "قدرة التشخيص عن بعد"
    ],
    specifications: [
      { label: "Detection Range", labelAr: "نطاق الكشف", value: "Up to 500 meters" },
      { label: "Response Time", labelAr: "وقت الاستجابة", value: "Less than 30 seconds" },
      { label: "Operating Voltage", labelAr: "جهد التشغيل", value: "24V DC" },
      { label: "Temperature Accuracy", labelAr: "دقة درجة الحرارة", value: "±2°C" },
      { label: "Cable Diameter", labelAr: "قطر الكابل", value: "3.2mm" }
    ],
    certifications: ["UL Listed", "LPCB Certified", "CE Marked", "ISO 9001"],
    warranty: "3 Years",
    warrantyAr: "3 سنوات",
    availability: "in-stock",
    sku: "ASEN-LHD-DIG-001",
    modelNumber: "ALS-100"
  },
  {
    id: "2",
    name: "Linear Detector End of Line Model",
    nameAr: "وحدة نهاية الخط للكاشف الخطي",
    description: "End of line termination unit for linear heat detection systems with automatic supervision",
    descriptionAr: "وحدة إنهاء نهاية الخط لأنظمة كشف الحرارة الخطية مع الإشراف التلقائي",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Linear Heat Detectors",
    categoryAr: "كواشف الحرارة الخطية",
    price: "Starting from $149",
    priceAr: "ابتداءً من 149 دولار",
    features: [
      "Precise end-of-line termination",
      "Compatible with all linear systems",
      "Compact design",
      "Easy installation",
      "Automatic supervision",
      "Tamper-proof design"
    ],
    featuresAr: [
      "إنهاء دقيق لنهاية الخط",
      "متوافق مع جميع الأنظمة الخطية",
      "تصميم مضغوط",
      "تركيب سهل",
      "إشراف تلقائي",
      "تصميم مقاوم للعبث"
    ],
    specifications: [
      { label: "Resistance Value", labelAr: "قيمة المقاومة", value: "4.7kΩ ±5%" },
      { label: "Operating Voltage", labelAr: "جهد التشغيل", value: "12-24V DC" },
      { label: "Dimensions", labelAr: "الأبعاد", value: "45×30×15mm" },
      { label: "Weight", labelAr: "الوزن", value: "25g" },
      { label: "Connection Type", labelAr: "نوع الاتصال", value: "Screw Terminal" }
    ],
    certifications: ["UL Listed", "LPCB Certified", "CE Marked"],
    warranty: "2 Years",
    warrantyAr: "سنتان",
    availability: "in-stock",
    sku: "ASEN-EOL-001",
    modelNumber: "ALS-EOL-100"
  },
  {
    id: "3",
    name: "Linear Detector Interface Module",
    nameAr: "وحدة واجهة الكاشف الخطي",
    description: "Interface module for connecting linear detectors to control panels with advanced diagnostics",
    descriptionAr: "وحدة واجهة لربط الكواشف الخطية بلوحات التحكم مع تشخيصات متقدمة",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Linear Heat Detectors",
    categoryAr: "كواشف الحرارة الخطية",
    price: "Starting from $299",
    priceAr: "ابتداءً من 299 دولار",
    features: [
      "Advanced signal processing",
      "Multiple output options",
      "Diagnostic capabilities",
      "Reliable communication",
      "LED status indicators",
      "DIN rail mountable"
    ],
    featuresAr: [
      "معالجة إشارات متقدمة",
      "خيارات إخراج متعددة",
      "قدرات تشخيصية",
      "اتصال موثوق",
      "مؤشرات حالة LED",
      "قابل للتثبيت على سكة DIN"
    ],
    specifications: [
      { label: "Input Channels", labelAr: "قنوات الإدخال", value: "4" },
      { label: "Output Contacts", labelAr: "جهات الإخراج", value: "2 Relay" },
      { label: "Operating Voltage", labelAr: "جهد التشغيل", value: "24V DC" },
      { label: "Power Consumption", labelAr: "استهلاك الطاقة", value: "2W" },
      { label: "Response Time", labelAr: "وقت الاستجابة", value: "100ms" }
    ],
    certifications: ["UL Listed", "LPCB Certified", "CE Marked", "FCC"],
    warranty: "3 Years",
    warrantyAr: "3 سنوات",
    availability: "in-stock",
    sku: "ASEN-INT-MOD-001",
    modelNumber: "ALS-INT-200"
  },
  {
    id: "4",
    name: "UL Approved Fire Linear Heat Cable",
    nameAr: "كابل حرارة خطي معتمد من UL",
    description: "UL approved fire-resistant linear heat sensing cable for critical applications",
    descriptionAr: "كابل حرارة خطي مقاوم للحريق معتمد من UL للتطبيقات الحرجة",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Fire Resistant Cables",
    categoryAr: "الكابلات المقاومة للحريق",
    price: "Starting from $89/meter",
    priceAr: "ابتداءً من 89 دولار/متر",
    features: [
      "UL certification",
      "Superior fire resistance",
      "Temperature accuracy",
      "Long service life",
      "Flexible installation",
      "Weather resistant"
    ],
    featuresAr: [
      "معتمد من UL",
      "مقاومة حريق عالية",
      "دقة درجة الحرارة",
      "عمر خدمة طويل",
      "تركيب مرن",
      "مقاوم للعوامل الجوية"
    ],
    specifications: [
      { label: "Cable Diameter", labelAr: "قطر الكابل", value: "3.2mm" },
      { label: "Operating Temperature", labelAr: "درجة حرارة التشغيل", value: "-40°C to +100°C" },
      { label: "Fire Rating", labelAr: "تصنيف الحريق", value: "Class A" },
      { label: "Tensile Strength", labelAr: "قوة الشد", value: "≥50 MPa" },
      { label: "Insulation Resistance", labelAr: "مقاومة العزل", value: "≥100MΩ" }
    ],
    certifications: ["UL Listed", "LPCB Certified", "CE Marked", "ISO 6722"],
    warranty: "5 Years",
    warrantyAr: "5 سنوات",
    availability: "in-stock",
    sku: "ASEN-CABLE-UL-001",
    modelNumber: "ALS-CABLE-UL"
  },
  {
    id: "5",
    name: "Fire Resistant Cable 2×1.0mm",
    nameAr: "كابل مقاوم للحريق 2×1.0 مم",
    description: "Fire-resistant cable rated 2×1.0mm for standard industrial applications",
    descriptionAr: "كابل مقاوم للحريق بقياس 2×1.0 مم للتطبيقات الصناعية القياسية",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Fire Resistant Cables",
    categoryAr: "الكابلات المقاومة للحريق",
    price: "Starting from $45/meter",
    priceAr: "ابتداءً من 45 دولار/متر",
    features: [
      "Standard industrial rating",
      "Durable insulation",
      "Flexible installation",
      "Cost-effective solution",
      "Excellent conductivity",
      "Low smoke emission"
    ],
    featuresAr: [
      "تصنيف صناعي قياسي",
      "عزل متين",
      "تركيب مرن",
      "حل فعال من حيث التكلفة",
      "توصيل ممتاز",
      "انبعاث دخان منخفض"
    ],
    specifications: [
      { label: "Conductor Size", labelAr: "حجم الموصل", value: "2×1.0mm²" },
      { label: "Operating Temperature", labelAr: "درجة حرارة التشغيل", value: "-20°C to +80°C" },
      { label: "Voltage Rating", labelAr: "تصنيف الجهد", value: "300/500V" },
      { label: "Insulation Material", labelAr: "مادة العزل", value: "LSZH" },
      { label: "Length per Reel", labelAr: "الطول لكل بكرة", value: "500m" }
    ],
    certifications: ["CE Marked", "ISO 6722", "RoHS Compliant"],
    warranty: "3 Years",
    warrantyAr: "3 سنوات",
    availability: "in-stock",
    sku: "ASEN-CABLE-2X1-001",
    modelNumber: "ALS-CABLE-2X1"
  },
  {
    id: "6",
    name: "Fire Resistant Cable 2×2.5mm",
    nameAr: "كابل مقاوم للحريق 2×2.5 مم",
    description: "Heavy-duty fire-resistant cable rated 2×2.5mm for demanding industrial environments",
    descriptionAr: "كابل مقاوم للحريق ثقيل الحمل بقياس 2×2.5 مم للبيئات الصناعية الصعبة",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Fire Resistant Cables",
    categoryAr: "الكابلات المقاومة للحريق",
    price: "Starting from $65/meter",
    priceAr: "ابتداءً من 65 دولار/متر",
    features: [
      "Heavy-duty construction",
      "High current capacity",
      "Extended temperature range",
      "Industrial grade",
      "Superior durability",
      "Enhanced protection"
    ],
    featuresAr: [
      "بناء ثقيل الحمل",
      "سعة تيار عالية",
      "نطاق درجة حرارة ممتد",
      "درجة صناعية",
      "متانة فائقة",
      "حماية معززة"
    ],
    specifications: [
      { label: "Conductor Size", labelAr: "حجم الموصل", value: "2×2.5mm²" },
      { label: "Operating Temperature", labelAr: "درجة حرارة التشغيل", value: "-30°C to +90°C" },
      { label: "Voltage Rating", labelAr: "تصنيف الجهد", value: "300/500V" },
      { label: "Current Capacity", labelAr: "سعة التيار", value: "25A" },
      { label: "Length per Reel", labelAr: "الطول لكل بكرة", value: "300m" }
    ],
    certifications: ["CE Marked", "ISO 6722", "RoHS Compliant", "VDE Approved"],
    warranty: "5 Years",
    warrantyAr: "5 سنوات",
    availability: "in-stock",
    sku: "ASEN-CABLE-2X2.5-001",
    modelNumber: "ALS-CABLE-2X2.5"
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.nameAr.includes(query) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.descriptionAr.includes(query)
  );
};
