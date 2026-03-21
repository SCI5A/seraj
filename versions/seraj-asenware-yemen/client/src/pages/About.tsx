import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Zap, Shield } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "الجودة والأمان",
      description: "نلتزم بأعلى معايير الجودة والسلامة في جميع منتجاتنا وخدماتنا"
    },
    {
      icon: Users,
      title: "خدمة العملاء",
      description: "فريق متخصص جاهز لتقديم الدعم والاستشارات المتقدمة"
    },
    {
      icon: Zap,
      title: "التطور المستمر",
      description: "نتابع أحدث التقنيات والابتكارات في مجال كشف الحريق"
    },
    {
      icon: Award,
      title: "الاعتمادات الدولية",
      description: "جميع منتجاتنا معتمدة من المعايير الدولية UL و LPCB"
    }
  ];

  const milestones = [
    { year: "2010", title: "التأسيس", description: "تأسيس شركة السراج للتجهيزات الصناعية" },
    { year: "2015", title: "الوكالة الحصرية", description: "الحصول على الوكالة الحصرية لـ Asenware في اليمن" },
    { year: "2018", title: "التوسع", description: "توسيع الخدمات والمنتجات إلى جميع محافظات اليمن" },
    { year: "2023", title: "التحديث الرقمي", description: "إطلاق الموقع الإلكتروني الحديث والتجارة الإلكترونية" }
  ];

  const team = [
    { name: "أحمد محمد", role: "المدير العام", specialty: "الإدارة والتسويق" },
    { name: "محمود علي", role: "مدير المبيعات", specialty: "العلاقات مع العملاء" },
    { name: "سارة حسن", role: "مهندسة فنية", specialty: "الدعم الفني والتثبيت" },
    { name: "علي عبدالله", role: "مسؤول المستودع", specialty: "إدارة المخزون والتوزيع" }
  ];

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
              عن السراج للتجهيزات الصناعية
            </h1>
            <p className="text-xl text-white/90">
              رحلتنا نحو توفير أفضل حلول الحماية من الحريق في اليمن
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">قصتنا</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                تأسست شركة السراج للتجهيزات الصناعية برؤية واضحة: توفير أنظمة حماية من الحريق موثوقة وحديثة للمنشآت الصناعية والتجارية في اليمن.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                بعد سنوات من العمل الدؤوب والتطور المستمر، حصلنا على الوكالة الحصرية لشركة Asenware العالمية، مما أتاح لنا تقديم أفضل التقنيات في مجال كشف الحريق الخطي.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                اليوم، نفخر بخدمة مئات العملاء وحماية آلاف المنشآت من خطر الحريق بأعلى معايير الجودة والأمان.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <p className="text-muted-foreground">سنة من الخبرة</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                  <p className="text-muted-foreground">عميل راضٍ</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-muted-foreground">ضمان الجودة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <Card key={idx} className="p-6 border-border hover:border-accent transition-colors">
                <value.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">رحلتنا</h2>
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-1 h-24 bg-border mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">فريقنا المتخصص</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="p-6 border-border text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">الاعتمادات والشهادات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "UL Certified", description: "معتمد من Underwriters Laboratories" },
              { name: "LPCB Certified", description: "معتمد من Loss Prevention Certification Board" },
              { name: "ISO 9001", description: "نظام إدارة الجودة الدولي" }
            ].map((cert, idx) => (
              <Card key={idx} className="p-8 border-border text-center hover:border-accent transition-colors">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            هل تريد التعاون معنا؟
          </h2>
          <p className="text-lg text-white/90 mb-8">
            نحن نبحث عن شركاء موثوقين للتعاون والتوسع في السوق اليمنية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                تواصل معنا
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                استكشف منتجاتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
