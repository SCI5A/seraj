# دليل النشر

يوضح هذا الدليل كيفية نشر موقع السراج للتجهيزات الصناعية على منصات مختلفة.

## البناء

قبل النشر، تأكد من بناء المشروع بنجاح:

```bash
# تثبيت الاعتماديات
pnpm install

# بناء المشروع
pnpm build

# اختبار البناء محلياً
pnpm preview
```

## النشر على Manus

المشروع مستضاف حالياً على منصة Manus:

**الرابط**: https://seraj-asenware-yemen.manus.space

### خطوات النشر على Manus:

1. انتقل إلى لوحة تحكم Manus
2. اختر المشروع "seraj_asenware_yemen"
3. انقر على زر "Publish"
4. اختر الفرع المراد نشره (عادة main)
5. انتظر انتهاء عملية النشر

## النشر على منصات أخرى

### Vercel

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel
```

### Netlify

```bash
# تثبيت Netlify CLI
npm i -g netlify-cli

# النشر
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# إضافة معلومات الصفحة في package.json
"homepage": "https://yourusername.github.io/seraj-asenware-yemen"

# بناء وتثبيت gh-pages
pnpm add -D gh-pages

# إضافة سكريبتات النشر في package.json
"deploy": "pnpm build && gh-pages -d dist"

# النشر
pnpm deploy
```

### Docker

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "dist/index.js"]
```

## متطلبات الإنتاج

تأكد من:

- جميع الصور محسّنة وبحجم مناسب
- جميع الروابط تعمل بشكل صحيح
- الموقع يعمل على جميع المتصفحات
- الأداء محسّن (Lighthouse score > 90)
- HTTPS مفعّل
- SEO محسّن

## مراقبة الأداء

### Google Analytics

أضف رمز Google Analytics:

```html
<!-- في client/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Sentry (مراقبة الأخطاء)

```bash
# تثبيت Sentry
pnpm add @sentry/react @sentry/tracing

# إضافة التهيئة في main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

## استراتيجية النشر

### الإصدارات

نتبع Semantic Versioning:

- **Major**: تغييرات كبيرة غير متوافقة
- **Minor**: ميزات جديدة متوافقة
- **Patch**: إصلاح الأخطاء

### عملية النشر

1. إنشاء فرع جديد من `main`
2. إجراء التغييرات والاختبار
3. فتح Pull Request
4. المراجعة والموافقة
5. دمج في `main`
6. إنشاء إصدار جديد
7. النشر على الإنتاج

## استراتيجية النسخ الاحتياطي

قبل كل نشر:

```bash
# إنشاء نسخة احتياطية
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin v1.1.0
```

## التراجع عن النشر

إذا حدث خطأ ما:

```bash
# العودة إلى إصدار سابق
git checkout v1.0.0
pnpm build
# أعد النشر
```

## الأمان

تأكد من:

- تحديث جميع الاعتماديات بانتظام
- عدم التعرض للبيانات الحساسة
- استخدام متغيرات البيئة للمفاتيح السرية
- تفعيل HTTPS
- إضافة رؤوس الأمان

## الدعم

للمساعدة في النشر، يرجى:

- فتح Issue على GitHub
- التواصل مع فريق التطوير
- مراجعة التوثيق الرسمية للمنصة
