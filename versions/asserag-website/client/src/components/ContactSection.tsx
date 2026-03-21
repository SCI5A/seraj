import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'الهاتف',
      value: '01310449',
      link: 'tel:+967-1-310449'
    },
    {
      icon: MessageCircle,
      label: 'الجوال',
      value: '+967 777 603 050',
      link: 'https://wa.me/967777603050'
    },
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: 'contact@asserag.com',
      link: 'mailto:contact@asserag.com'
    },
    {
      icon: MapPin,
      label: 'العنوان',
      value: 'صنعاء، شارع الستين، اليمن',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-[#1e3a8a] mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            نحن هنا لخدمتك والإجابة على جميع استفساراتك. لا تتردد في التواصل معنا
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a 
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <Card className="border-0 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff6b35] to-orange-600 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-cairo font-bold text-[#1e3a8a] mb-2">
                      {info.label}
                    </h3>
                    <p className="text-gray-600 font-poppins text-sm break-all">
                      {info.value}
                    </p>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Contact Form and WhatsApp CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-0 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-cairo font-bold text-[#1e3a8a] mb-6">
              نموذج التواصل
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-gray-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ff6b35] hover:bg-[#e55a24] text-white font-poppins font-semibold py-3 rounded-lg transition-all duration-300 gap-2 flex items-center justify-center"
              >
                <Send size={18} />
                إرسال الرسالة
              </Button>

              {isSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-poppins text-center">
                  تم استقبال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}
            </form>
          </Card>

          {/* WhatsApp CTA */}
          <div className="flex flex-col justify-between">
            <Card className="border-0 bg-gradient-to-br from-[#25D366]/10 to-green-50 p-8 shadow-lg mb-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-cairo font-bold text-[#1e3a8a] mb-4">
                  تواصل معنا عبر الواتساب
                </h3>
                <p className="text-gray-700 font-poppins mb-6 leading-relaxed">
                  للتواصل السريع والفوري مع فريقنا، يمكنك التحدث معنا مباشرة عبر الواتساب. نحن هنا للإجابة على أسئلتك وتقديم الحلول المناسبة لاحتياجاتك.
                </p>
                <a 
                  href="https://wa.me/967777603050?text=مرحبا%20بشركة%20السراج%20للتجهيزات%20الصناعية%20أود%20التواصل%20معكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] hover:bg-[#20BA5A] text-white font-poppins font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="inline mr-2" size={20} />
                  فتح الواتساب
                </a>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="border-0 bg-white p-8 shadow-lg">
              <h3 className="text-xl font-cairo font-bold text-[#1e3a8a] mb-4">
                ساعات العمل
              </h3>
              <div className="space-y-3 font-poppins text-gray-700">
                <div className="flex justify-between">
                  <span>السبت - الخميس:</span>
                  <span className="font-semibold">8:00 صباحاً - 6:00 مساءً</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة:</span>
                  <span className="font-semibold">مغلق</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <span>الدعم الطارئ:</span>
                  <span className="font-semibold text-[#ff6b35]">متاح 24/7</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
