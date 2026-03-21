import { Building2, Zap, Wind, Droplets, Gauge, Shield, Flame, Cpu } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'تجهيز مصانع الأدوية',
      description: 'حلول متكاملة لتجهيز وبناء مصانع الأدوية من الألف إلى الياء مع الالتزام الكامل بمعايير GMP والمواصفات العالمية',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'الأنظمة الكهربائية',
      description: 'تصميم وتنفيذ شبكات كهربائية متقدمة وأنظمة توزيع وحماية احترافية مع أنظمة الطاقة الاحتياطية',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Wind,
      title: 'أنظمة التهوية والتكييف',
      description: 'أنظمة HVAC متطورة مع التحكم الدقيق في درجة الحرارة والرطوبة والضغط للغرف النظيفة',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Droplets,
      title: 'أنظمة المياه النقية',
      description: 'أنظمة تنقية مياه متقدمة (PW و WFI) مع شبكات توزيع من الستانلس ستيل عالي الجودة',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Gauge,
      title: 'أنظمة التحكم والأتمتة',
      description: 'أنظمة تحكم ذكية (PLC, SCADA, DCS) مع واجهات تشغيل حديثة وموثوقة',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'الغرف النظيفة',
      description: 'تصميم وتنفيذ غرف نظيفة بمعايير ISO 14644 مع أنظمة إغلاق محكمة وأرضيات متخصصة',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Flame,
      title: 'أنظمة السلامة والإطفاء',
      description: 'أنظمة إنذار حريق ذكية وأنظمة إطفاء آلية بالغازات النظيفة والمياه',
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Cpu,
      title: 'الهواء المضغوط والغازات',
      description: 'أنظمة هواء طبي خالي من الزيت وأنظمة توليد النيتروجين وتوزيع الغازات الصناعية',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-[#1e3a8a] mb-4">
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            نقدم حلولاً صناعية متكاملة تجمع بين التقنية المتقدمة والخبرة العملية لتحقيق أعلى معايير الجودة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-white"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon Background */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-cairo font-bold text-[#1e3a8a] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-poppins text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-4 h-1 w-0 bg-[#ff6b35] group-hover:w-full transition-all duration-300"></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 font-poppins mb-6">
            هل تريد معرفة المزيد عن خدماتنا؟
          </p>
          <a 
            href="https://wa.me/967777603050?text=أود%20معرفة%20المزيد%20عن%20خدماتكم"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff6b35] hover:bg-[#e55a24] text-white font-poppins font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
