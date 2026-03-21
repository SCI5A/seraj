import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                السراج
              </h1>
              <p className="text-xs text-muted-foreground">وكيل Asenware</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              الرئيسية
            </a>
          </Link>
          <Link href="/products">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              المنتجات
            </a>
          </Link>
          <Link href="/about">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              عن الشركة
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              المدونة
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-foreground hover:text-accent transition-colors font-medium">
              اتصل بنا
            </a>
          </Link>
        </nav>

        {/* Language Switcher and CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button className="bg-accent hover:bg-accent/90 text-white">
            اطلب عرض سعري
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container py-4 space-y-3">
            <Link href="/">
              <a 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
              >
                الرئيسية
              </a>
            </Link>
            <Link href="/products">
              <a 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
              >
                المنتجات
              </a>
            </Link>
            <Link href="/about">
              <a 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
              >
                عن الشركة
              </a>
            </Link>
            <Link href="/blog">
              <a 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
              >
                المدونة
              </a>
            </Link>
            <Link href="/contact">
              <a 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground hover:text-accent transition-colors font-medium"
              >
                اتصل بنا
              </a>
            </Link>
            <div className="mt-4 pt-4 border-t border-border">
              <LanguageSwitcher />
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white mt-4">
              اطلب عرض سعري
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
