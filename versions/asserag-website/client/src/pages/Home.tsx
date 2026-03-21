import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Modern Industrial
 * - Colors: Dark Blue (#1e3a8a) + Red-Orange (#ff6b35)
 * - Typography: Cairo Bold (headings) + Poppins (body)
 * - Layout: Dynamic and asymmetric with smooth transitions
 * - Focus: Professional, modern, and industrial aesthetic
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
