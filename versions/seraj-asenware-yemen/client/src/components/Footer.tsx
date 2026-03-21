import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-bold text-lg">السراج</h3>
            </div>
            <p className="text-white/80 mb-4">
              الوكيل المعتمد لشركة Asenware في اليمن، متخصصون في توفير أنظمة كشف الحريق الخطية والحلول الصناعية المتقدمة.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">📱</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <nav className="space-y-3">
              <Link href="/">
                <a className="text-white/80 hover:text-accent transition-colors">الرئيسية</a>
              </Link>
              <Link href="/products">
                <a className="text-white/80 hover:text-accent transition-colors">المنتجات</a>
              </Link>
              <a href="#about" className="block text-white/80 hover:text-accent transition-colors">
                عن الشركة
              </a>
              <a href="#blog" className="block text-white/80 hover:text-accent transition-colors">
                المدونة
              </a>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">المنتجات</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                أنظمة كشف الحريق الخطية
              </a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                الكابلات المقاومة للحريق
              </a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                وحدات الواجهة
              </a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">
                الملحقات والقطع
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">الهاتف</p>
                  <a href="tel:+967123456789" className="text-white hover:text-accent transition-colors">
                    +967 1 234 5678
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">البريد الإلكتروني</p>
                  <a href="mailto:info@seraj-yemen.com" className="text-white hover:text-accent transition-colors">
                    info@seraj-yemen.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">العنوان</p>
                  <p className="text-white">صنعاء، اليمن</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">
            © 2026 السراج للتجهيزات الصناعية. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
              شروط الاستخدام
            </a>
            <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
              اتفاقية الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
