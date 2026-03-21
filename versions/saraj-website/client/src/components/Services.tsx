import { Flame, AlertCircle, Wrench, Truck, Users, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Flame size={40} />,
      title: 'أنظمة الحريق',
      description: 'أنظمة إطفاء حريق متقدمة وموثوقة بمعايير دولية عالية'
    },
    {
      icon: <AlertCircle size={40} />,
      title: 'أنظمة الإنذار',
      description: 'أجهزة إنذار حديثة وحساسة للكشف المبكر عن الأخطار'
    },
    {
      icon: <Wrench size={40} />,
      title: 'الصيانة والإصلاح',
      description: 'خدمات صيانة دورية وإصلاح سريع لجميع المنتجات'
    },
    {
      icon: <Truck size={40} />,
      title: 'التوصيل والتركيب',
      description: 'توصيل سريع وتركيب احترافي بواسطة فريق متخصص'
    },
    {
      icon: <Users size={40} />,
      title: 'التدريب والاستشارة',
      description: 'تدريب شامل للعاملين على استخدام المنتجات بكفاءة'
    },
    {
      icon: <Headphones size={40} />,
      title: 'الدعم الفني',
      description: 'دعم فني متواصل 24/7 للإجابة على جميع استفساراتك'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-bold text-[#d94f1a]">خدماتنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a52] mb-6">
            خدمات شاملة ومتكاملة
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2979c9] to-[#d94f1a]">
              لجميع احتياجاتك
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة واسعة من الخدمات المتخصصة لضمان رضاك التام وحصولك على أفضل النتائج
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all hover:border-[#d94f1a] hover:scale-105"
            >
              <div className="text-[#d94f1a] mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-[#2979c9] font-bold hover:text-[#d94f1a] transition-colors"
              >
                اعرف المزيد →
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#1a3a52] via-[#2979c9] to-[#d94f1a] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-black mb-4">هل تحتاج إلى خدمة مخصصة؟</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            فريقنا المتخصص جاهز لمساعدتك في إيجاد الحل الأمثل لاحتياجاتك الصناعية
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#1a3a52] px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
