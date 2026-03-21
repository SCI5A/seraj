import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Download, Share2, ShoppingCart } from "lucide-react";
import { Link, useRoute } from "wouter";
import { getProductById } from "@/data/products";
import { useState } from "react";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const product = params?.id ? getProductById(params.id) : null;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">المنتج غير موجود</h1>
          <p className="text-muted-foreground mb-8">عذراً، المنتج الذي تبحث عنه غير متوفر.</p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              العودة إلى المنتجات
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const availabilityColor = {
    "in-stock": "bg-green-100 text-green-800",
    "limited": "bg-yellow-100 text-yellow-800",
    "pre-order": "bg-blue-100 text-blue-800"
  }[product.availability];

  const availabilityText = {
    "in-stock": "متوفر في المخزون",
    "limited": "كمية محدودة",
    "pre-order": "طلب مسبق"
  }[product.availability];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/products">
              <span className="hover:text-foreground cursor-pointer transition-colors">المنتجات</span>
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.nameAr}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md bg-card rounded-lg overflow-hidden border border-border">
                <img
                  src={product.image}
                  alt={product.nameAr}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <Badge className={`${availabilityColor} mb-3`}>
                  {availabilityText}
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-2">
                {product.nameAr}
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                {product.name}
              </p>

              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-muted-foreground leading-relaxed">
                  {product.descriptionAr}
                </p>
              </div>

              {/* Price */}
              {product.price && (
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">السعر</p>
                  <p className="text-3xl font-bold text-accent">
                    {product.price}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {product.priceAr}
                  </p>
                </div>
              )}

              {/* SKU and Model */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">رقم المنتج (SKU)</p>
                  <p className="font-mono text-sm font-semibold text-foreground">{product.sku}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">رقم الموديل</p>
                  <p className="font-mono text-sm font-semibold text-foreground">{product.modelNumber}</p>
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 font-semibold text-foreground">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-white">
                    <ShoppingCart className="w-5 h-5 ml-2" />
                    أضف إلى السلة
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Share2 className="w-5 h-5 ml-2" />
                    شارك
                  </Button>
                </div>
              </div>

              {/* Warranty and Support */}
              <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">الضمان</p>
                    <p className="text-sm text-muted-foreground">{product.warrantyAr} ({product.warranty})</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">الشحن المجاني</p>
                    <p className="text-sm text-muted-foreground">للطلبات فوق 500 دولار</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">الدعم الفني 24/7</p>
                    <p className="text-sm text-muted-foreground">فريق متخصص جاهز لمساعدتك</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">المميزات الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.featuresAr.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{feature}</p>
                  <p className="text-sm text-muted-foreground">{product.features[idx]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">المواصفات الفنية</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-3 px-4 font-semibold text-foreground">المواصفة</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">القيمة</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-card transition-colors">
                    <td className="py-3 px-4 text-foreground">{spec.labelAr}</td>
                    <td className="py-3 px-4 text-muted-foreground font-mono">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">الشهادات والاعتمادات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.certifications.map((cert, idx) => (
              <Card key={idx} className="p-4 text-center border-border hover:border-accent transition-colors">
                <p className="font-semibold text-foreground">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">الموارد والتحميلات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-border hover:border-accent transition-colors cursor-pointer">
              <Download className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-2">دليل المستخدم</h3>
              <p className="text-sm text-muted-foreground mb-4">PDF - 2.5 MB</p>
              <Button variant="outline" size="sm" className="w-full">تحميل</Button>
            </Card>
            <Card className="p-6 border-border hover:border-accent transition-colors cursor-pointer">
              <Download className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-2">المواصفات الفنية</h3>
              <p className="text-sm text-muted-foreground mb-4">PDF - 1.8 MB</p>
              <Button variant="outline" size="sm" className="w-full">تحميل</Button>
            </Card>
            <Card className="p-6 border-border hover:border-accent transition-colors cursor-pointer">
              <Download className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-2">شهادات الاعتماد</h3>
              <p className="text-sm text-muted-foreground mb-4">PDF - 3.2 MB</p>
              <Button variant="outline" size="sm" className="w-full">تحميل</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">هل تحتاج إلى مساعدة؟</h2>
          <p className="text-lg text-white/90 mb-8">
            فريقنا المتخصص جاهز لتقديم استشارة مجانية والإجابة على جميع أسئلتك
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            تواصل مع فريقنا الآن
          </Button>
        </div>
      </section>
    </div>
  );
}
