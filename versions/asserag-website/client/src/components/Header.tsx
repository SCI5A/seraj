import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'الخدمات', href: '#services' },
    { label: 'المشاريع', href: '#projects' },
    { label: 'عن الشركة', href: '#about' },
    { label: 'التواصل', href: '#contact' },
  ];

  const whatsappLink = 'https://wa.me/967777603050?text=مرحبا%20بشركة%20السراج%20للتجهيزات%20الصناعية';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpeg" 
              alt="السراج للتجهيزات الصناعية" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#1e3a8a] font-poppins font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2 font-poppins"
              >
                <MessageCircle size={18} />
                واتساب
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#1e3a8a] font-poppins font-medium transition-colors duration-200 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pt-2">
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2 font-poppins"
                >
                  <MessageCircle size={18} />
                  واتساب
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
