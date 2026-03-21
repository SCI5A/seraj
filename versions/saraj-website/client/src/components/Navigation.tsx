import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1a3a52] to-[#2979c9] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ع</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#1a3a52]">السراج</span>
              <span className="text-xs text-gray-500">التجهيزات الصناعية</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
              الرئيسية
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
              عن الشركة
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
              الخدمات
            </a>
            <a href="#products" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
              المنتجات
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
              المعرض
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
              التواصل
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+967777603050"
              className="bg-gradient-to-r from-[#d94f1a] to-[#f06030] text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105"
            >
              اتصل بنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4 p-4">
              <a href="#home" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
                الرئيسية
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
                عن الشركة
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
                الخدمات
              </a>
              <a href="#products" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
                المنتجات
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
                المعرض
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#d94f1a] transition-colors font-medium">
                التواصل
              </a>
              <a
                href="tel:+967777603050"
                className="bg-gradient-to-r from-[#d94f1a] to-[#f06030] text-white px-6 py-2 rounded-full font-bold text-center"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
