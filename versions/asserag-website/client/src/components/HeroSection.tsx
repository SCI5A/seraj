import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const whatsappLink = 'https://wa.me/967777603050?text=مرحبا%20بشركة%20السراج%20للتجهيزات%20الصناعية';

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold text-[#1e3a8a] leading-tight">
                السراج للتجهيزات الصناعية
              </h1>
              <p className="text-xl text-gray-600 font-poppins leading-relaxed">
                منارة في عالم الصناعة، تضيء دروب الجودة والتميز في تجهيز وبناء مصانع الأدوية
              </p>
            </div>

            <p className="text-lg text-gray-700 font-poppins leading-relaxed">
              نحن متخصصون في تقديم حلول صناعية متكاملة تجمع بين الدقة والمتانة والالتزام بأعلى معايير الجودة العالمية (GMP, FDA, WHO)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  className="w-full sm:w-auto bg-[#ff6b35] hover:bg-[#e55a24] text-white gap-2 font-poppins font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  تواصل معنا عبر الواتساب
                </Button>
              </a>
              <a href="#services">
                <Button 
                  className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-[#0c2340] text-white gap-2 font-poppins font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
                >
                  استكشف خدماتنا
                  <ArrowRight size={20} />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-cairo font-bold text-[#ff6b35]">20+</div>
                <p className="text-sm text-gray-600 font-poppins mt-1">سنة خبرة</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cairo font-bold text-[#ff6b35]">50+</div>
                <p className="text-sm text-gray-600 font-poppins mt-1">مشروع منجز</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cairo font-bold text-[#ff6b35]">100%</div>
                <p className="text-sm text-gray-600 font-poppins mt-1">رضا العملاء</p>
              </div>
            </div>
          </div>

          {/* Right - Logo Display */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-[#ff6b35]/5 rounded-3xl blur-3xl"></div>
              
              {/* Logo Container */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo.jpeg" 
                  alt="السراج للتجهيزات الصناعية" 
                  className="w-full h-auto max-w-md drop-shadow-lg"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b35]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#1e3a8a]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="mt-20 h-1 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
    </section>
  );
}
