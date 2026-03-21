import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#d94f1a] rounded-full animate-pulse-custom"></div>
              <span className="text-sm font-bold text-[#d94f1a]">الحل الأمثل للتجهيزات الصناعية</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#1a3a52] mb-6 leading-tight">
              السراج للتجهيزات
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d94f1a] to-[#f06030]">
                الصناعية المتقدمة
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نحن متخصصون في توفير أعلى جودة من التجهيزات الصناعية والأنظمة الحديثة. مع خبرة عميقة في المجال، نقدم حلولاً متكاملة تلبي احتياجات صناعتك.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#d94f1a] to-[#f06030] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                تواصل معنا
                <ArrowRight size={20} />
              </a>
              <a
                href="#gallery"
                className="border-2 border-[#1a3a52] text-[#1a3a52] px-8 py-4 rounded-full font-bold hover:bg-[#1a3a52] hover:text-white transition-all"
              >
                عرض المعرض
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-black text-[#2979c9]">15+</div>
                <p className="text-sm text-gray-600 mt-2">سنة خبرة</p>
              </div>
              <div>
                <div className="text-3xl font-black text-[#2979c9]">500+</div>
                <p className="text-sm text-gray-600 mt-2">عميل راضي</p>
              </div>
              <div>
                <div className="text-3xl font-black text-[#2979c9]">100%</div>
                <p className="text-sm text-gray-600 mt-2">ضمان الجودة</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2979c9]/20 to-[#d94f1a]/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <img
                src="/FB_IMG_1771705081074.jpg"
                alt="السراج للتجهيزات الصناعية"
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
              />
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-xl backdrop-blur-sm">
                <p className="text-sm font-bold text-[#1a3a52]">معايير دولية</p>
                <p className="text-xs text-gray-600">شهادات ISO معتمدة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
