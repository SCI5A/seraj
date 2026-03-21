import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a8a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-cairo font-bold mb-4">السراج للتجهيزات الصناعية</h3>
            <p className="text-blue-100 font-poppins text-sm leading-relaxed mb-4">
              منارة في عالم الصناعة، متخصصة في تجهيز وبناء مصانع الأدوية بأعلى معايير الجودة العالمية.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://wa.me/967777603050"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-cairo font-bold mb-4">الروابط السريعة</h3>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  التواصل
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-cairo font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <span className="text-blue-100">تجهيز مصانع الأدوية</span>
              </li>
              <li>
                <span className="text-blue-100">الأنظمة الكهربائية</span>
              </li>
              <li>
                <span className="text-blue-100">أنظمة التهوية والتكييف</span>
              </li>
              <li>
                <span className="text-blue-100">الغرف النظيفة</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-cairo font-bold mb-4">معلومات التواصل</h3>
            <ul className="space-y-3 font-poppins text-sm">
              <li className="flex gap-2 text-blue-100">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>01310449</span>
              </li>
              <li className="flex gap-2 text-blue-100">
                <MessageCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>+967 777 603 050</span>
              </li>
              <li className="flex gap-2 text-blue-100">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>contact@asserag.com</span>
              </li>
              <li className="flex gap-2 text-blue-100">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>صنعاء، شارع الستين، اليمن</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 font-poppins text-sm text-center md:text-left">
            © {currentYear} السراج للتجهيزات الصناعية. جميع الحقوق محفوظة.
          </p>
          <p className="text-blue-100 font-poppins text-sm">
            تم تطوير الموقع بواسطة <span className="font-semibold">Manus</span>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/967777603050?text=مرحبا%20بشركة%20السراج%20للتجهيزات%20الصناعية"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        title="تواصل معنا عبر الواتساب"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </footer>
  );
}
