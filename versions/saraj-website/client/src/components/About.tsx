import { CheckCircle2, Zap, Shield, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <CheckCircle2 size={32} />,
      title: 'جودة عالية',
      description: 'نستخدم أفضل المواد والمعايير الدولية في جميع منتجاتنا'
    },
    {
      icon: <Zap size={32} />,
      title: 'تكنولوجيا متقدمة',
      description: 'أحدث التقنيات والابتكارات في مجال التجهيزات الصناعية'
    },
    {
      icon: <Shield size={32} />,
      title: 'الأمان والموثوقية',
      description: 'ضمان كامل على جميع المنتجات والخدمات المقدمة'
    },
    {
      icon: <Award size={32} />,
      title: 'شهادات معتمدة',
      description: 'حاصلون على شهادات ISO وشهادات دولية أخرى'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-bold text-[#d94f1a]">من نحن</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a52] mb-6">
            شركة السراج للتجهيزات
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2979c9] to-[#d94f1a]">
              الصناعية المتخصصة
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن رائدون في مجال التجهيزات الصناعية والأنظمة الحديثة، نقدم حلولاً متكاملة وموثوقة لجميع احتياجاتك الصناعية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105 hover:border-[#d94f1a]"
            >
              <div className="text-[#d94f1a] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-gradient-to-r from-[#1a3a52] to-[#2979c9] rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-black mb-2">15+</h3>
              <p className="text-white/80">سنة من الخبرة والاحترافية</p>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2">500+</h3>
              <p className="text-white/80">عميل موثوق في جميع أنحاء المنطقة</p>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2">100%</h3>
              <p className="text-white/80">رضا العملاء والجودة المضمونة</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-[#2979c9]">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">رسالتنا</h3>
            <p className="text-gray-700 leading-relaxed">
              توفير أفضل جودة من التجهيزات الصناعية والأنظمة الحديثة بأسعار تنافسية، مع الالتزام بأعلى معايير الخدمة والضمان لرضا عملائنا الكرام.
            </p>
          </div>
          <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-[#d94f1a]">
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">رؤيتنا</h3>
            <p className="text-gray-700 leading-relaxed">
              أن نكون الشركة الأولى والموثوقة في مجال التجهيزات الصناعية، نقدم حلولاً مبتكرة تساهم في تطور القطاع الصناعي والاقتصادي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
