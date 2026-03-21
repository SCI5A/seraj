import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `مرحباً، أنا ${formData.name}\nالبريد الإلكتروني: ${formData.email}\nالهاتف: ${formData.phone}\nالرسالة: ${formData.message}`;
    const whatsappUrl = `https://wa.me/967777603050?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-bold text-[#d94f1a]">التواصل معنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a52] mb-6">
            نحن هنا لمساعدتك
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2979c9] to-[#d94f1a]">
              في أي وقت
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تواصل معنا للحصول على أفضل الحلول والخدمات
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-4 rounded-xl">
                  <Phone className="text-[#d94f1a]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2">الهاتف</h3>
                  <p className="text-gray-600 mb-2">اتصل بنا مباشرة</p>
                  <a href="tel:+967777603050" className="text-[#2979c9] font-bold hover:text-[#d94f1a] transition-colors">
                    +967 777 603 050
                  </a>
                  <br />
                  <a href="tel:+96713104049" className="text-[#2979c9] font-bold hover:text-[#d94f1a] transition-colors">
                    +967 1 31 04 049
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <Mail className="text-[#2979c9]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2">البريد الإلكتروني</h3>
                  <p className="text-gray-600 mb-2">أرسل لنا رسالة</p>
                  <a href="mailto:wadishoaa@yahoo.com" className="text-[#2979c9] font-bold hover:text-[#d94f1a] transition-colors">
                    wadishoaa@yahoo.com
                  </a>
                  <br />
                  <a href="mailto:contact@asseraj.com" className="text-[#2979c9] font-bold hover:text-[#d94f1a] transition-colors">
                    contact@asseraj.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-4 rounded-xl">
                  <MapPin className="text-[#d94f1a]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2">العنوان</h3>
                  <p className="text-gray-600">
                    اليمن - صنعاء - شارع 60<br />
                    بالقرب من طيبة هايبر
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#1a3a52] to-[#2979c9] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d94f1a] to-[#f06030] text-white font-bold py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                إرسال عبر WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">موقعنا على الخريطة</h3>
          <p className="text-gray-600 mb-6">اليمن - صنعاء - شارع 60 - بالقرب من طيبة هايبر</p>
          <div className="bg-white rounded-xl p-4 inline-block">
            <MapPin className="text-[#d94f1a]" size={48} />
          </div>
        </div>
      </div>
    </section>
  );
}
