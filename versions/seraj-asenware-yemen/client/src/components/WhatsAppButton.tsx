import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '967777409273'; // رقم WhatsApp مع رمز الدولة
  const message = encodeURIComponent('مرحباً، أود الاستفسار عن منتجاتكم والخدمات المقدمة.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      {/* Floating Button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Chat Box */}
          {isOpen && (
            <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">السراج للتجهيزات الصناعية</h3>
                    <p className="text-xs text-green-100">عادة ما نرد خلال دقائق</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-700 mb-4">
                  مرحباً بك! 👋 كيف يمكننا مساعدتك اليوم؟
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">
                    📞 <strong>الهاتف:</strong> +967 1 234 5678
                  </p>
                  <p className="text-xs text-gray-600">
                    ⏰ <strong>ساعات العمل:</strong> 9:00 - 17:00
                  </p>
                  <p className="text-xs text-gray-600">
                    📍 <strong>الموقع:</strong> صنعاء، اليمن
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  تحدث معنا على WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all hover:scale-110 active:scale-95 relative group"
          >
            <MessageCircle className="w-8 h-8" />
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
            
            {/* Tooltip */}
            <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              تحدث معنا على WhatsApp
              <div className="absolute bottom-0 right-4 w-2 h-2 bg-gray-900 transform rotate-45 translate-y-1"></div>
            </div>
          </button>
        </div>
      )}

      {/* Floating Action Menu (Alternative) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col gap-2">
        {/* WhatsApp Quick Link */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110 group relative"
          title="تحدث معنا على WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <div className="absolute right-16 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp
          </div>
        </a>

        {/* Phone Quick Link */}
        <a
          href="tel:+9671234567"
          className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110 group relative"
          title="اتصل بنا"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div className="absolute right-16 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            اتصل
          </div>
        </a>

        {/* Email Quick Link */}
        <a
          href="mailto:info@seraj-yemen.com"
          className="w-14 h-14 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition-all hover:scale-110 group relative"
          title="أرسل بريداً إلكترونياً"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="absolute right-16 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            بريد
          </div>
        </a>
      </div>
    </>
  );
}
