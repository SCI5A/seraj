# دليل المساهمة

شكراً لاهتمامك بالمساهمة في مشروع السراج للتجهيزات الصناعية! نحن نرحب بجميع المساهمات.

## كيفية المساهمة

### 1. إعداد البيئة

```bash
# استنساخ المستودع
git clone https://github.com/abualkarar/seraj-asenware-yemen.git
cd seraj_asenware_yemen

# تثبيت الاعتماديات
pnpm install

# بدء خادم التطوير
pnpm dev
```

### 2. إنشاء فرع جديد

```bash
# تحديث الفرع الرئيسي
git checkout main
git pull origin main

# إنشاء فرع جديد
git checkout -b feature/your-feature-name
# أو للإصلاحات
git checkout -b fix/your-bug-fix
```

### 3. إجراء التغييرات

- اتبع معايير الكود الموجودة
- اكتب كود نظيف وموثق
- تأكد من أن التطبيق يعمل بدون أخطاء

```bash
# التحقق من الأخطاء
pnpm check

# تنسيق الكود
pnpm format
```

### 4. الالتزام بالتغييرات

```bash
# إضافة التغييرات
git add .

# الالتزام برسالة واضحة
git commit -m "feat: add new feature" 
# أو
git commit -m "fix: resolve bug in component"
```

### 5. دفع التغييرات

```bash
# دفع الفرع
git push origin feature/your-feature-name
```

### 6. فتح Pull Request

- اذهب إلى GitHub
- انقر على "New Pull Request"
- اختر فرعك
- أضف وصفاً واضحاً للتغييرات
- انتظر المراجعة

## معايير الكود

### TypeScript
- استخدم أنواع صريحة
- تجنب `any`
- اكتب تعليقات للأجزاء المعقدة

### React Components
- استخدم Functional Components
- استخدم Hooks بدلاً من Class Components
- اكتب مكونات قابلة لإعادة الاستخدام

### CSS/Tailwind
- استخدم Tailwind Classes
- تجنب CSS مخصص إلا عند الضرورة
- حافظ على التناسق مع نظام التصميم

### الاختبار
- اختبر التغييرات محلياً
- تأكد من عدم كسر الميزات الموجودة
- اختبر على أجهزة مختلفة

## أنواع المساهمات المرحب بها

### ✨ ميزات جديدة
- صفحات جديدة
- مكونات جديدة
- تحسينات الأداء

### 🐛 إصلاح الأخطاء
- إصلاح الأخطاء الموجودة
- تحسين الاستقرار
- إصلاح مشاكل التوافقية

### 📚 التوثيق
- تحسين README
- إضافة تعليقات للكود
- كتابة أمثلة

### 🎨 تحسينات التصميم
- تحسين واجهة المستخدم
- تحسين تجربة المستخدم
- إضافة رسوميات

## قواعم الالتزام

استخدم الصيغة التالية للرسائل:

```
<type>: <subject>

<body>

<footer>
```

### الأنواع:
- `feat`: ميزة جديدة
- `fix`: إصلاح خطأ
- `docs`: تحديث التوثيق
- `style`: تغييرات التنسيق
- `refactor`: إعادة هيكلة الكود
- `perf`: تحسينات الأداء
- `test`: إضافة اختبارات

### مثال:
```
feat: add blog page with search functionality

- Added new Blog page component
- Implemented search feature
- Added 4 sample blog posts
- Updated navigation menu

Closes #123
```

## سلوك المجتمع

نتوقع من جميع المساهمين:
- احترام الآخرين
- تقديم تعليقات بناءة
- الاستماع للآراء المختلفة
- العمل بروح التعاون

## الأسئلة والدعم

- **الأسئلة**: فتح Issue مع تصنيف `question`
- **الأخطاء**: فتح Issue مع تصنيف `bug`
- **الاقتراحات**: فتح Issue مع تصنيف `enhancement`

## الترخيص

بالمساهمة، توافق على أن مساهمتك ستكون تحت رخصة MIT.

---

شكراً لك على المساهمة! 🎉
