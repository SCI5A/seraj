import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  const values = [
    {
      title: 'الجودة',
      description: 'الالتزام بأعلى معايير الجودة في جميع مراحل العمل والمشاريع'
    },
    {
      title: 'الأمانة',
      description: 'الشفافية والمصداقية الكاملة في التعامل مع العملاء والشركاء'
    },
    {
      title: 'الابتكار',
      description: 'تبني أحدث التقنيات والحلول الهندسية المتطورة والمستدامة'
    },
    {
      title: 'الكفاءة',
      description: 'تحقيق أفضل النتائج بأقل التكاليف وفي أسرع الأوقات'
    },
    {
      title: 'السلامة',
      description: 'ضمان بيئة عمل آمنة وتطبيق معايير السلامة العالمية'
    },
    {
      title: 'الالتزام',
      description: 'الالتزام بالمواعيد والمعايير والعقود مع كل عملائنا'
    }
  ];

  const standards = [
    { name: 'GMP', description: 'معايير ديجلا عينصتلا تاسرامم' },
    { name: 'FDA', description: 'معايير إدارة الغذاء والدواء الأمريكية' },
    { name: 'WHO', description: 'معايير منظمة الصحة العالمية' },
    { name: 'ISO 14644', description: 'معايير الغرف النظيفة' },
    { name: 'ISO 9001', description: 'نظام إدارة الجودة' },
    { name: 'ISO 14001', description: 'نظام إدارة البيئة' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cairo font-bold text-[#1e3a8a] mb-4">
            عن شركة السراج
          </h2>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            منارة في عالم الصناعة، نضيء دروب الجودة والتميز منذ تأسيسنا
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg">
            <h3 className="text-2xl font-cairo font-bold text-[#1e3a8a] mb-4">رؤيتنا</h3>
            <p className="text-gray-700 font-poppins leading-relaxed text-lg">
              السعي لتكون الشريك الاستراتيجي الأول في منطقة الشرق الأوسط وأفريقيا في مجال تجهيز وبناء مصانع الأدوية، من خلال تقديم حلول متكاملة تجمع بين الدقة والمتانة والالتزام بأعلى معايير الجودة العالمية.
            </p>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-orange-50 to-white p-8 shadow-lg">
            <h3 className="text-2xl font-cairo font-bold text-[#ff6b35] mb-4">رسالتنا</h3>
            <p className="text-gray-700 font-poppins leading-relaxed text-lg">
              تقديم خدمات هندسية ومتخصصة في مجال صناعات الأدوية مع الحرص على تطبيق أعلى معايير الجودة والسلامة، وبناء علاقات طويلة الأمد مع عملائنا من خلال الثقة والإتقان.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-cairo font-bold text-[#1e3a8a] mb-8 text-center">
            قيمنا الأساسية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#ff6b35] flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-cairo font-bold text-[#1e3a8a] mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 font-poppins text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Standards & Certifications */}
        <div className="bg-gradient-to-r from-[#1e3a8a]/5 to-[#ff6b35]/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-cairo font-bold text-[#1e3a8a] mb-8 text-center">
            المعايير والاعتمادات
          </h3>
          <p className="text-center text-gray-700 font-poppins mb-8 text-lg">
            نلتزم بتطبيق أعلى المعايير العالمية في جميع مشاريعنا
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-[#ff6b35]">
                <h4 className="text-lg font-cairo font-bold text-[#1e3a8a] mb-1">
                  {standard.name}
                </h4>
                <p className="text-gray-600 font-poppins text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-[#ff6b35]">
          <h3 className="text-2xl font-cairo font-bold text-[#1e3a8a] mb-6">
            معلومات الشركة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-cairo font-bold text-[#1e3a8a] mb-3">الخبرة والفريق</h4>
              <p className="text-gray-700 font-poppins leading-relaxed">
                تمتلك شركة السراج خبرة واسعة تمتد لسنوات عديدة في مجال تجهيز مصانع الأدوية، حيث نفذنا العديد من المشاريع الناجحة في اليمن والمنطقة. يضم فريقنا مهندسين متخصصين وفنيين مدربين على أعلى مستوى، قادرين على تنفيذ أعقد المشاريع بكفاءة عالية.
              </p>
            </div>
            <div>
              <h4 className="font-cairo font-bold text-[#1e3a8a] mb-3">الإنجازات</h4>
              <p className="text-gray-700 font-poppins leading-relaxed">
                نفذنا مشروع مصنع الأدوية بأديس أبابا بإثيوبيا بنظام EPC كامل، وقمنا بتجهيز مصنع الأدوية الوطني بصنعاء، وتوسعة مصنع الأدوية العربي بعدن، بالإضافة إلى عشرات المشاريع الأخرى في المنطقة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
