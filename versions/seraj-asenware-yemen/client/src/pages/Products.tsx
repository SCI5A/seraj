import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Zap } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  category: string;
  features: string[];
  featuresAr: string[];
}

const products: Product[] = [
  {
    id: "1",
    name: "Digital Type Linear Heat Detection System",
    nameAr: "نظام كشف حرارة خطي رقمي",
    description: "Advanced digital linear heat detection system for fire alarm applications",
    descriptionAr: "نظام متطور لكشف الحرارة الخطية بتقنية رقمية متقدمة لتطبيقات أنظمة الإنذار",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Linear Heat Detectors",
    features: [
      "High sensitivity digital detection",
      "Real-time temperature monitoring",
      "UL/LPCB certified",
      "Wide temperature range"
    ],
    featuresAr: [
      "كشف رقمي عالي الحساسية",
      "مراقبة درجة الحرارة في الوقت الفعلي",
      "معتمد من UL/LPCB",
      "نطاق درجة حرارة واسع"
    ]
  },
  {
    id: "2",
    name: "Linear Detector End of Line Model",
    nameAr: "وحدة نهاية الخط للكاشف الخطي",
    description: "End of line termination unit for linear heat detection systems",
    descriptionAr: "وحدة إنهاء نهاية الخط لأنظمة كشف الحرارة الخطية",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Linear Heat Detectors",
    features: [
      "Precise end-of-line termination",
      "Compatible with all linear systems",
      "Compact design",
      "Easy installation"
    ],
    featuresAr: [
      "إنهاء دقيق لنهاية الخط",
      "متوافق مع جميع الأنظمة الخطية",
      "تصميم مضغوط",
      "تركيب سهل"
    ]
  },
  {
    id: "3",
    name: "Linear Detector Interface Model",
    nameAr: "وحدة واجهة الكاشف الخطي",
    description: "Interface module for connecting linear detectors to control panels",
    descriptionAr: "وحدة واجهة لربط الكواشف الخطية بلوحات التحكم",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Linear Heat Detectors",
    features: [
      "Advanced signal processing",
      "Multiple output options",
      "Diagnostic capabilities",
      "Reliable communication"
    ],
    featuresAr: [
      "معالجة إشارات متقدمة",
      "خيارات إخراج متعددة",
      "قدرات تشخيصية",
      "اتصال موثوق"
    ]
  },
  {
    id: "4",
    name: "UL Approved Fire Linear Heat Cable",
    nameAr: "كابل حرارة خطي معتمد من UL",
    description: "UL approved fire-resistant linear heat sensing cable",
    descriptionAr: "كابل حرارة خطي مقاوم للحريق معتمد من UL",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Fire Resistant Cables",
    features: [
      "UL certification",
      "Superior fire resistance",
      "Temperature accuracy",
      "Long service life"
    ],
    featuresAr: [
      "معتمد من UL",
      "مقاومة حريق عالية",
      "دقة درجة الحرارة",
      "عمر خدمة طويل"
    ]
  },
  {
    id: "5",
    name: "Fire Resistant Cable 2×1.0",
    nameAr: "كابل مقاوم للحريق 2×1.0",
    description: "Fire-resistant cable rated 2×1.0mm for industrial applications",
    descriptionAr: "كابل مقاوم للحريق بقياس 2×1.0 مم للتطبيقات الصناعية",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Fire Resistant Cables",
    features: [
      "Standard industrial rating",
      "Durable insulation",
      "Flexible installation",
      "Cost-effective solution"
    ],
    featuresAr: [
      "تصنيف صناعي قياسي",
      "عزل متين",
      "تركيب مرن",
      "حل فعال من حيث التكلفة"
    ]
  },
  {
    id: "6",
    name: "Fire Resistant Cable 2×2.5",
    nameAr: "كابل مقاوم للحريق 2×2.5",
    description: "Heavy-duty fire-resistant cable rated 2×2.5mm",
    descriptionAr: "كابل مقاوم للحريق ثقيل الحمل بقياس 2×2.5 مم",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    category: "Fire Resistant Cables",
    features: [
      "Heavy-duty construction",
      "High current capacity",
      "Extended temperature range",
      "Industrial grade"
    ],
    featuresAr: [
      "بناء ثقيل الحمل",
      "سعة تيار عالية",
      "نطاق درجة حرارة ممتد",
      "درجة صناعية"
    ]
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map(p => p.category)));
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              منتجات أنظمة كشف الحريق
            </h1>
            <p className="text-xl text-white/90 mb-8">
              مجموعة شاملة من أنظمة كشف الحريق الخطية والكابلات المقاومة للحريق من Asenware
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                اطلب الآن
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-foreground">الفئات</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "outline"}
              className={selectedCategory === null ? "bg-primary text-white" : ""}
            >
              جميع المنتجات
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-accent"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-card h-64">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-3 inline-block">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.nameAr}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.descriptionAr}
                  </p>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {product.featuresAr.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white group/btn"
                  >
                    <span>اعرف المزيد</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            هل تحتاج إلى استشارة متخصصة؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            فريقنا المتخصص جاهز لمساعدتك في اختيار الحل الأنسب لاحتياجاتك
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            تواصل مع فريقنا الآن
          </Button>
        </div>
      </section>
    </div>
  );
}
