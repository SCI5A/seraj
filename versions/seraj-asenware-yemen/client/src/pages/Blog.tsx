import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "أهمية أنظمة كشف الحريق الخطية في المنشآت الصناعية",
    excerpt: "تعرف على دور أنظمة كشف الحريق الخطية في حماية المنشآت الصناعية والتجارية من الحرائق",
    content: `أنظمة كشف الحريق الخطية تلعب دوراً حيوياً في حماية المنشآت الصناعية. هذه الأنظمة توفر:

1. **الكشف المبكر**: تكتشف الحرارة في مراحلها الأولى قبل تطور الحريق
2. **التغطية الشاملة**: تغطي مساحات واسعة وأماكن يصعب الوصول إليها
3. **الموثوقية العالية**: معايير UL و LPCB تضمن الأداء المستقر
4. **التكامل السهل**: تتكامل بسهولة مع أنظمة الإنذار الموجودة

استثمارك في أنظمة كشف الحريق الحديثة يعني حماية أصولك وموظفيك.`,
    author: "أحمد محمد",
    date: "2024-03-01",
    category: "تقنية",
    image: "🔥",
    readTime: 5
  },
  {
    id: 2,
    title: "الفرق بين كواشف الحرارة الخطية والنقطية",
    excerpt: "شرح مفصل للفروقات بين نوعي الكواشف وأيهما أنسب لتطبيقك",
    content: `كواشف الحرارة الخطية والنقطية لها استخدامات مختلفة:

**الكواشف الخطية:**
- تغطي مسافات طويلة (حتى 3000 متر)
- مثالية للأنفاق والممرات الطويلة
- توفر حماية شاملة للمساحات الكبيرة
- تكلفة تركيب أقل للمساحات الواسعة

**الكواشف النقطية:**
- توفر حماية محددة لنقاط معينة
- سهلة التثبيت والصيانة
- مناسبة للمساحات الصغيرة والمتوسطة
- توفر دقة عالية في المناطق المحددة

اختر النوع المناسب حسب احتياجات منشأتك.`,
    author: "سارة حسن",
    date: "2024-02-28",
    category: "تقنية",
    image: "🎯",
    readTime: 6
  },
  {
    id: 3,
    title: "نصائح الصيانة الدورية لأنظمة كشف الحريق",
    excerpt: "تعرف على أفضل الممارسات للحفاظ على كفاءة نظام كشف الحريق",
    content: `الصيانة الدورية ضرورية لضمان عمل نظام كشف الحريق بكفاءة:

**الصيانة الشهرية:**
- فحص الأسلاك والموصلات
- التحقق من مؤشرات الحالة
- تنظيف العدسات والمستشعرات

**الصيانة السنوية:**
- اختبار شامل للنظام
- معايرة الكواشف
- تحديث البطاريات والمكونات

**الصيانة الطارئة:**
- استجابة سريعة لأي تنبيهات
- فحص فوري للأعطال
- استبدال المكونات التالفة

تذكر: الصيانة الجيدة توفر عليك تكاليف الإصلاحات الكبيرة.`,
    author: "علي عبدالله",
    date: "2024-02-25",
    category: "صيانة",
    image: "🔧",
    readTime: 4
  },
  {
    id: 4,
    title: "معايير السلامة الدولية UL و LPCB",
    excerpt: "فهم معايير الاعتماد الدولية وأهميتها في اختيار أنظمة الحماية",
    content: `معايير UL و LPCB هي المعايير الدولية الأساسية لأنظمة كشف الحريق:

**معيار UL (Underwriters Laboratories):**
- يضمن سلامة وموثوقية المنتج
- يتطلب اختبارات صارمة ومستمرة
- معترف به عالمياً في صناعة الأمان

**معيار LPCB (Loss Prevention Certification Board):**
- يركز على فعالية منع الخسائر
- يتطلب أداء عالي في ظروف واقعية
- يوفر ضمانات إضافية للعملاء

**الفوائد:**
- ضمان الأداء الموثوق
- الامتثال للمتطلبات القانونية
- حماية قانونية للمالك والمشغل
- دعم فني متخصص

اختر دائماً منتجات معتمدة من هذه المعايير.`,
    author: "محمود علي",
    date: "2024-02-20",
    category: "معايير",
    image: "✅",
    readTime: 7
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              مدونة السراج
            </h1>
            <p className="text-xl text-white/90">
              نصائح وتقنيات متقدمة في مجال أنظمة كشف الحريق والسلامة الصناعية
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Posts List */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-border hover:border-accent transition-colors">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{post.image}</span>
                      <div>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-accent transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                      </div>
                      <span>{post.readTime} دقائق قراءة</span>
                    </div>
                    
                    <Button variant="outline" className="gap-2">
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">الفئات</h3>
                <div className="space-y-2">
                  {["تقنية", "صيانة", "معايير", "أخبار"].map((cat) => (
                    <button
                      key={cat}
                      className="block w-full text-right px-3 py-2 rounded hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Recent Posts */}
              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">آخر المقالات</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="pb-4 border-b border-border last:border-0">
                      <h4 className="font-semibold text-foreground hover:text-accent transition-colors cursor-pointer text-sm mb-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('ar-SA')}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 border-border bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <h3 className="text-lg font-bold text-foreground mb-4">اشترك في النشرة</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  احصل على آخر المقالات والنصائح مباشرة في بريدك الإلكتروني
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="w-full px-3 py-2 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    اشترك الآن
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
