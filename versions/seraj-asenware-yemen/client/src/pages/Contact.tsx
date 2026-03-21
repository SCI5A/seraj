import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Send form data to backend
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
              اتصل بنا
            </h1>
            <p className="text-xl text-white/90">
              نحن هنا للإجابة على جميع أسئلتك والمساعدة في اختيار الحل المناسب لاحتياجاتك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "WhatsApp",
                value: "+967 777 409 273",
                description: "تحدث معنا مباشرة",
                link: "https://wa.me/967777409273?text=مرحباً، أود الاستفسار عن منتجاتكم"
              },
              {
                icon: Mail,
                title: "البريد الإلكتروني",
                value: "info@seraj-yemen.com",
                description: "أرسل لنا بريداً إلكترونياً",
                link: "mailto:info@seraj-yemen.com"
              },
              {
                icon: MapPin,
                title: "العنوان",
                value: "صنعاء، اليمن",
                description: "زرنا في مقرنا الرئيسي"
              },
              {
                icon: Clock,
                title: "ساعات العمل",
                value: "8:00 - 18:00",
                description: "السبت - الخميس"
              }
            ].map((item: any, idx) => (
              <Card key={idx} className="p-6 border-border text-center hover:shadow-lg transition-shadow">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                    <item.icon className="w-12 h-12 text-accent mx-auto mb-4 hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground font-semibold mb-2 hover:text-accent transition-colors">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </a>
                ) : (
                  <>
                    <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground font-semibold mb-2">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">أرسل لنا رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                      placeholder="بريدك الإلكتروني"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                      placeholder="رقم هاتفك"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    الموضوع
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                  >
                    <option value="">اختر موضوعاً</option>
                    <option value="product-inquiry">استفسار عن منتج</option>
                    <option value="quotation">طلب عرض سعري</option>
                    <option value="technical-support">دعم فني</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                  إرسال الرسالة
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">معلومات إضافية</h2>
              
              <div className="space-y-8">
                <Card className="p-6 border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">ساعات العمل</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>السبت - الخميس: 8:00 صباحاً - 6:00 مساءً</p>
                    <p>الجمعة: مغلق</p>
                    <p>الدعم الفني: 24/7</p>
                  </div>
                </Card>

                <Card className="p-6 border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">الخدمات</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ استشارات تقنية مجانية</li>
                    <li>✓ عروض أسعار مخصصة</li>
                    <li>✓ دعم فني متخصص</li>
                    <li>✓ توصيل سريع</li>
                    <li>✓ ضمان شامل</li>
                  </ul>
                </Card>

                <Card className="p-6 border-border bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">هل تحتاج إلى مساعدة عاجلة؟</h3>
                  <p className="text-muted-foreground mb-4">
                    اتصل بنا مباشرة على رقم الهاتف أو أرسل لنا بريداً إلكترونياً
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                    اتصل بنا الآن
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
