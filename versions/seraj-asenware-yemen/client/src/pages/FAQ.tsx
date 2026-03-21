import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  questionAr: string;
  question: string;
  answerAr: string;
  answer: string;
  category: string;
  categoryAr: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    questionAr: "ما هي أنظمة كشف الحريق الخطية؟",
    question: "What are linear heat detection systems?",
    answerAr: "أنظمة كشف الحريق الخطية هي أجهزة متقدمة تستخدم كابلات حساسة للحرارة لكشف الحرائق في المناطق الطويلة والممتدة. تعمل بمبدأ كشف درجة الحرارة على طول الكابل بالكامل، مما يجعلها مثالية للتطبيقات الصناعية والأنفاق والمستودعات.",
    answer: "Linear heat detection systems are advanced devices that use temperature-sensitive cables to detect fires in long and extended areas. They work by detecting temperature changes along the entire cable length, making them ideal for industrial applications, tunnels, and warehouses.",
    category: "Products",
    categoryAr: "المنتجات"
  },
  {
    id: "2",
    questionAr: "ما الفرق بين أنظمة كشف الحريق الخطية والكواشف العادية؟",
    question: "What is the difference between linear and conventional fire detectors?",
    answerAr: "الفرق الرئيسي هو أن الكواشف الخطية توفر مراقبة مستمرة على طول الكابل بالكامل، بينما الكواشف العادية توفر مراقبة نقطية فقط. هذا يجعل الأنظمة الخطية أكثر فعالية في المناطق الكبيرة والمعقدة.",
    answer: "The main difference is that linear detectors provide continuous monitoring along the entire cable length, while conventional detectors only provide point monitoring. This makes linear systems more effective in large and complex areas.",
    category: "Products",
    categoryAr: "المنتجات"
  },
  {
    id: "3",
    questionAr: "هل منتجات السراج معتمدة دولياً؟",
    question: "Are Al-Seraj products internationally certified?",
    answerAr: "نعم، جميع منتجاتنا معتمدة من الهيئات الدولية الرائدة مثل UL (Underwriters Laboratories) و LPCB (Loss Prevention Certification Board)، مما يضمن أعلى معايير الجودة والأمان.",
    answer: "Yes, all our products are certified by leading international bodies such as UL (Underwriters Laboratories) and LPCB (Loss Prevention Certification Board), ensuring the highest standards of quality and safety.",
    category: "Certifications",
    categoryAr: "الشهادات"
  },
  {
    id: "4",
    questionAr: "كم هي مدة الضمان على المنتجات؟",
    question: "What is the warranty period for products?",
    answerAr: "تختلف مدة الضمان حسب نوع المنتج. معظم أنظمة كشف الحريق الخطية لها ضمان 3 سنوات، بينما الكابلات المقاومة للحريق لها ضمان 5 سنوات. يمكنك التحقق من التفاصيل على صفحة كل منتج.",
    answer: "The warranty period varies depending on the product type. Most linear heat detection systems have a 3-year warranty, while fire-resistant cables have a 5-year warranty. You can check the details on each product page.",
    category: "Warranty",
    categoryAr: "الضمان"
  },
  {
    id: "5",
    questionAr: "هل توفرون خدمة التركيب والصيانة؟",
    question: "Do you provide installation and maintenance services?",
    answerAr: "نعم، نوفر خدمات تركيب احترافية وصيانة دورية لجميع منتجاتنا. فريقنا المتخصص يضمن التركيب الصحيح والصيانة المنتظمة لضمان أداء النظام الأمثل.",
    answer: "Yes, we provide professional installation services and regular maintenance for all our products. Our specialized team ensures proper installation and regular maintenance to guarantee optimal system performance.",
    category: "Services",
    categoryAr: "الخدمات"
  },
  {
    id: "6",
    questionAr: "كم يستغرق التسليم؟",
    question: "How long does delivery take?",
    answerAr: "عادة ما يستغرق التسليم من 3 إلى 7 أيام عمل داخل اليمن، حسب الموقع. للطلبات الدولية، قد يستغرق الأمر من 2 إلى 4 أسابيع. يمكنك الاتصال بفريقنا للحصول على تقدير دقيق.",
    answer: "Delivery usually takes 3 to 7 business days within Yemen, depending on location. For international orders, it may take 2 to 4 weeks. You can contact our team for an accurate estimate.",
    category: "Shipping",
    categoryAr: "الشحن"
  },
  {
    id: "7",
    questionAr: "هل هناك خصومات للطلبات الكبيرة؟",
    question: "Are there discounts for large orders?",
    answerAr: "نعم، نوفر خصومات خاصة للطلبات الكبيرة والعقود طويلة الأجل. يرجى التواصل مع فريق المبيعات لديننا للحصول على عرض سعري مخصص.",
    answer: "Yes, we offer special discounts for large orders and long-term contracts. Please contact our sales team for a customized quote.",
    category: "Pricing",
    categoryAr: "التسعير"
  },
  {
    id: "8",
    questionAr: "كيف يمكنني التحقق من أصالة المنتج؟",
    question: "How can I verify product authenticity?",
    answerAr: "يمكنك التحقق من أصالة المنتج من خلال الرقم التسلسلي (Serial Number) الموجود على المنتج. استخدم أداة التحقق من الأصالة على موقعنا بإدخال الرقم التسلسلي.",
    answer: "You can verify product authenticity using the Serial Number found on the product. Use our authenticity verification tool on our website by entering the serial number.",
    category: "Products",
    categoryAr: "المنتجات"
  },
  {
    id: "9",
    questionAr: "ما هي طرق الدفع المتاحة؟",
    question: "What payment methods are available?",
    answerAr: "نقبل عدة طرق دفع منها التحويل البنكي، بطاقات الائتمان، والدفع عند الاستلام. يمكنك اختيار الطريقة الأنسب لك عند الطلب.",
    answer: "We accept multiple payment methods including bank transfer, credit cards, and cash on delivery. You can choose the most convenient method when placing your order.",
    category: "Payment",
    categoryAr: "الدفع"
  },
  {
    id: "10",
    questionAr: "هل تقدمون استشارات فنية مجانية؟",
    question: "Do you provide free technical consultations?",
    answerAr: "نعم، نقدم استشارات فنية مجانية لمساعدتك في اختيار الحل الأنسب لاحتياجاتك. تواصل مع فريقنا عبر الهاتف أو البريد الإلكتروني أو نموذج الاتصال على الموقع.",
    answer: "Yes, we provide free technical consultations to help you choose the right solution for your needs. Contact our team via phone, email, or the contact form on our website.",
    category: "Support",
    categoryAr: "الدعم"
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqItems.map(item => item.category)));
  const filteredItems = selectedCategory
    ? faqItems.filter(item => item.category === selectedCategory)
    : faqItems;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl text-white/90">
              إجابات على أكثر الأسئلة التي يطرحها عملاؤنا حول منتجاتنا وخدماتنا
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-foreground">الفئات</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "outline"}
              className={selectedCategory === null ? "bg-primary text-white" : ""}
            >
              جميع الأسئلة
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary text-white" : ""}
              >
                {category === "Products" ? "المنتجات" :
                 category === "Certifications" ? "الشهادات" :
                 category === "Warranty" ? "الضمان" :
                 category === "Services" ? "الخدمات" :
                 category === "Shipping" ? "الشحن" :
                 category === "Pricing" ? "التسعير" :
                 category === "Payment" ? "الدفع" :
                 "الدعم"}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="border-border overflow-hidden hover:border-accent transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-card/50 transition-colors"
                >
                  <div className="text-right flex-1">
                    <h3 className="text-lg font-semibold text-foreground text-right">
                      {item.questionAr}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 text-right">
                      {item.question}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="px-6 py-4 border-t border-border bg-card/30">
                    <p className="text-foreground leading-relaxed mb-3">
                      {item.answerAr}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              لم تجد الإجابة التي تبحث عنها؟
            </h2>
            <p className="text-lg text-muted-foreground">
              تواصل مع فريقنا المتخصص للحصول على مساعدة إضافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-border hover:border-accent transition-colors text-center">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">الهاتف</h3>
              <p className="text-muted-foreground mb-4">+967 1 234 5678</p>
              <p className="text-sm text-muted-foreground">من السبت إلى الخميس 9:00 - 17:00</p>
            </Card>

            <Card className="p-8 border-border hover:border-accent transition-colors text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">البريد الإلكتروني</h3>
              <p className="text-muted-foreground mb-4">info@seraj-yemen.com</p>
              <p className="text-sm text-muted-foreground">سنرد عليك خلال 24 ساعة</p>
            </Card>

            <Card className="p-8 border-border hover:border-accent transition-colors text-center">
              <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">+967 777 777 777</p>
              <p className="text-sm text-muted-foreground">دعم فوري 24/7</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل تحتاج إلى حل متخصص؟
          </h2>
          <p className="text-lg text-white/90 mb-8">
            فريقنا المتخصص جاهز لتقديم استشارة مجانية والإجابة على جميع أسئلتك
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            اطلب استشارة مجانية
          </Button>
        </div>
      </section>
    </div>
  );
}
