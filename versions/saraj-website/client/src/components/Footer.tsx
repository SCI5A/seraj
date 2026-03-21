import { Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3a52] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d94f1a] to-[#f06030] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ع</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">السراج</h3>
                <p className="text-xs text-white/70">التجهيزات الصناعية</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              شركة متخصصة في التجهيزات الصناعية والأنظمة الحديثة، نقدم حلولاً موثوقة وآمنة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">الروابط السريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  المعرض
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  التواصل
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  أنظمة الحريق
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  أنظمة الإنذار
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  الصيانة والإصلاح
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  الدعم الفني
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-[#d94f1a]" />
                <a href="tel:+967777603050" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  +967 777 603 050
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-[#d94f1a]" />
                <a href="mailto:contact@asseraj.com" className="text-white/70 hover:text-[#d94f1a] transition-colors">
                  contact@asseraj.com
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-[#d94f1a] p-2 rounded-lg transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-[#d94f1a] p-2 rounded-lg transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>
            جميع الحقوق محفوظة © {currentYear} السراج للتجهيزات الصناعية
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#d94f1a] transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-[#d94f1a] transition-colors">
              شروط الاستخدام
            </a>
            <a href="#" className="hover:text-[#d94f1a] transition-colors">
              خريطة الموقع
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
