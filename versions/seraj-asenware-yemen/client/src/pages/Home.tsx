import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Award, Truck } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  useSEO({
    title: "السراج للتجهيزات الصناعية | وكيل Asenware المعتمد في اليمن",
    description: "السراج للتجهيزات الصناعية - الوكيل المعتمد لشركة Asenware في اليمن. متخصصون في أنظمة كشف الحريق الخطية والكابلات المقاومة للحريق بأعلى معايير الجودة والأمان.",
    keywords: "السراج, تجهيزات صناعية, Asenware, اليمن, أنظمة كشف الحريق, كابلات مقاومة للحريق",
    url: "https://seraj-yemen.com/",
    type: "website"
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/hero-industrial-background-dwmbxrFTncpqTULeQazraR.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/50">
                <span className="text-accent font-semibold text-sm">🔥 الوكيل المعتمد في اليمن</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                السراج للتجهيزات الصناعية
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                نحن الوكيل المعتمد لشركة Asenware في اليمن، متخصصون في توفير أنظمة كشف الحريق الخطية والحلول الصناعية المتقدمة بأعلى معايير الجودة والأمان.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
                    اكتشف المنتجات
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
                >
                  تواصل معنا
                </Button>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <p className="text-white/80">سنة خبرة</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                <p className="text-white/80">عميل راضي</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-white/80">دعم فني</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-white/80">ضمان الجودة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">ثقة العملاء والاعتمادات</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              معايير عالية من الجودة والموثوقية
            </p>
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">لماذا تختار السراج؟</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم حلولاً موثوقة وفعالة لحماية الممتلكات والأرواح من الحرائق
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "معتمد دولياً",
                description: "جميع منتجاتنا معتمدة من UL و LPCB"
              },
              {
                icon: Zap,
                title: "تقنية متقدمة",
                description: "أحدث التقنيات في كشف الحريق الخطي"
              },
              {
                icon: Award,
                title: "جودة عالية",
                description: "معايير عالية جداً في التصنيع والاختبار"
              },
              {
                icon: Truck,
                title: "توصيل سريع",
                description: "توصيل موثوق إلى جميع أنحاء اليمن"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-border hover:border-accent transition-colors">
                <item.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">المنتجات المميزة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف مجموعتنا المختارة من أنظمة كشف الحريق الخطية والكابلات المقاومة للحريق
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "نظام كشف حرارة خطي رقمي",
                description: "نظام متطور لكشف الحرارة بتقنية رقمية عالية الدقة",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp"
              },
              {
                title: "وحدة نهاية الخط",
                description: "وحدة إنهاء دقيقة لأنظمة كشف الحريق الخطية",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp"
              },
              {
                title: "كابل مقاوم للحريق",
                description: "كابلات معتمدة من UL مقاومة للحريق بأقسام مختلفة",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp"
              }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                عرض جميع المنتجات
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              هل تحتاج إلى حل متخصص؟
            </h2>
            <p className="text-xl text-white/90 mb-8">
              تواصل مع فريقنا المتخصص للحصول على استشارة مجانية وتقديم عرض سعري مخصص
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                اطلب عرض سعري
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">📞</div>
              <h3 className="font-bold text-foreground mb-2">رقم الهاتف</h3>
              <p className="text-muted-foreground">+967 1 234 5678</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">📧</div>
              <h3 className="font-bold text-foreground mb-2">البريد الإلكتروني</h3>
              <p className="text-muted-foreground">info@seraj-yemen.com</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">📍</div>
              <h3 className="font-bold text-foreground mb-2">العنوان</h3>
              <p className="text-muted-foreground">صنعاء، اليمن</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
