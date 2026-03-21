import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/FB_IMG_1771705081074.jpg',
      title: 'أنظمة الحريق المتقدمة',
      description: 'تجهيزات حديثة وموثوقة للحماية من الحرائق'
    },
    {
      src: '/IMG-20260221-WA0006.jpg',
      title: 'بطاقة تعريفية احترافية',
      description: 'هوية بصرية قوية وموثوقة'
    },
    {
      src: '/IMG-20260221-WA0007.jpg',
      title: 'أنظمة الإنذار الذكية',
      description: 'تقنيات متقدمة للكشف والإنذار'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-bold text-[#d94f1a]">معرض الصور</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a52] mb-6">
            عرض منتجاتنا
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2979c9] to-[#d94f1a]">
              والتجهيزات المتقدمة
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اطلع على أحدث منتجاتنا والتجهيزات الصناعية المتقدمة
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden mb-8">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-white/90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a3a52] p-3 rounded-full transition-all hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1a3a52] p-3 rounded-full transition-all hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#d94f1a] w-8'
                    : 'bg-white/50 w-3 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-32 rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                index === currentIndex ? 'ring-4 ring-[#d94f1a]' : 'ring-2 ring-gray-200'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-600 font-medium">
            الصورة {currentIndex + 1} من {images.length}
          </p>
        </div>
      </div>
    </section>
  );
}
