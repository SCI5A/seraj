document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    // Products Data
    const products = [
        { id: 1, name: 'كاشف دخان لاسلكي', nameEn: 'Wireless Smoke Detector', category: 'Fire Alarm', model: 'AW-D101', desc: 'كاشف دخان ذكي يعمل بالبطارية مع اتصال لاسلكي.' },
        { id: 2, name: 'لوحة تحكم قابلة للعنونة', nameEn: 'Addressable Control Panel', category: 'Control Panels', model: 'AW-FP100', desc: 'لوحة تحكم متطورة تدعم حتى 250 نقطة عنونة.' },
        { id: 3, name: 'كاشف حرارة خطي', nameEn: 'Linear Heat Detector', category: 'Specialized', model: 'AW-LHD', desc: 'مثالي للمستودعات والمناطق الصناعية الكبيرة.' },
        { id: 4, name: 'كابل مقاوم للحريق', nameEn: 'Fire Resistant Cable', category: 'Accessories', model: 'FR-CABLE', desc: 'كابلات معتمدة تتحمل درجات الحرارة العالية.' },
        { id: 5, name: 'جرس إنذار حريق', nameEn: 'Fire Alarm Bell', category: 'Notification', model: 'AW-BELL', desc: 'جرس عالي الصوت للتنبيه في حالات الطوارئ.' },
        { id: 6, name: 'كاشف غاز ذكي', nameEn: 'Smart Gas Detector', category: 'Gas Detection', model: 'AW-GD', desc: 'كشف تسرب الغازات القابلة للاشتعال بدقة عالية.' }
    ];

    // Render Products
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(p => `
            <div class="stat-card" data-aos="fade-up">
                <div style="color: var(--orange); font-size: 0.8rem; margin-bottom: 5px;">${p.model}</div>
                <h3 style="font-size: 1.2rem; margin-bottom: 10px;">${p.name}</h3>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${p.desc}</p>
            </div>
        `).join('');
    }

    // Search Logic
    const productSearch = document.getElementById('productSearch');
    const searchResults = document.getElementById('searchResults');
    if (productSearch && searchResults) {
        productSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.nameEn.toLowerCase().includes(query) || 
                p.model.toLowerCase().includes(query)
            );
            if (filtered.length > 0) {
                searchResults.innerHTML = filtered.map(p => `
                    <div class="search-item" onclick="scrollToSection('products')">
                        <strong>${p.name}</strong> <small>(${p.model})</small>
                    </div>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        });
    }

    window.scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        if (searchResults) searchResults.style.display = 'none';
        if (productSearch) productSearch.value = '';
    };

    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.visibility = 'hidden'; }, 500);
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    const htmlRoot = document.getElementById('htmlRoot');
    const body = document.getElementById('body');
    let currentLang = htmlRoot.getAttribute('lang') || 'ar';

    const translations = {
        en: {
            navLogo: 'Seraj <span>Equipment</span>',
            home: 'Home', services: 'Services', products: 'Products', tools: 'Tools', downloads: 'Downloads', contact: 'Contact',
            heroTitle: 'Secure Your <span>Future</span> With Advanced Systems',
            heroDesc: 'Al-Seraj Industrial Equipment, Authorized Asenware Distributor in Yemen.',
            smartTools: 'Smart Tools',
            toolsDesc: 'Interactive tools to help you secure your facility and verify product quality.',
            checkTitle: 'Authenticity Checker',
            checkDesc: 'Enter the product serial number to verify it is an original Seraj product.',
            verifyBtn: 'Verify Now',
            calcTitle: 'System Estimator',
            areaLabel: 'Facility Area (sqm):',
            roomsLabel: 'Number of Rooms/Sections:',
            calcBtn: 'Calculate Needs',
            dlCenter: 'Download Center',
            dlDesc: 'Download technical catalogs and international certifications for 2025.',
            footer: 'Al-Seraj Industrial Equipment. All Rights Reserved.',
            announcement: '📢 Special Offer: 15% discount on periodic maintenance for Asenware systems - Limited time!',
            getStarted: 'Explore Products'
        },
        ar: {
            navLogo: 'السراج <span>للتجهيزات</span>',
            home: 'الرئيسية', services: 'خدماتنا', products: 'المنتجات', tools: 'الأدوات', downloads: 'التحميلات', contact: 'اتصل بنا',
            heroTitle: 'نؤمن <span>مستقبلك</span> بأحدث أنظمة الحماية',
            heroDesc: 'السراج للتجهيزات الصناعية، الوكيل المعتمد لشركة Asenware العالمية في اليمن.',
            smartTools: 'الأدوات الذكية',
            toolsDesc: 'أدوات تفاعلية لمساعدتك في تأمين منشأتك والتأكد من جودة منتجاتك.',
            checkTitle: 'التحقق من الأصالة',
            checkDesc: 'أدخل الرقم التسلسلي للمنتج للتأكد من أنه أصلي من وكالة السراج.',
            verifyBtn: 'تحقق الآن',
            calcTitle: 'حاسبة الأنظمة التقديرية',
            areaLabel: 'مساحة المنشأة (متر مربع):',
            roomsLabel: 'عدد الغرف/الأقسام:',
            calcBtn: 'احسب الاحتياج',
            dlCenter: 'مركز التحميلات',
            dlDesc: 'حمل الكتالوجات الفنية وشهادات الاعتماد الدولية لمنتجاتنا لعام 2025.',
            footer: 'السراج للتجهيزات الصناعية. جميع الحقوق محفوظة.',
            announcement: '📢 عرض خاص: خصم 15% على عقود الصيانة الدورية لأنظمة Asenware - لفترة محدودة!',
            getStarted: 'استعرض المنتجات'
        }
    };

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            langToggle.innerText = currentLang === 'ar' ? 'English' : 'العربية';
            htmlRoot.setAttribute('lang', currentLang);
            htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            body.classList.toggle('en', currentLang === 'en');
            updateTranslations();
        });
    }

    function updateTranslations() {
        const t = translations[currentLang];
        const navLogoText = document.getElementById('navLogoText');
        if (navLogoText) navLogoText.innerHTML = t.navLogo;
        
        const selectors = {
            '.lang-home': t.home,
            '.lang-services': t.services,
            '.lang-products': t.products,
            '.lang-tools': t.tools,
            '.lang-downloads': t.downloads,
            '.lang-contact': t.contact,
            '.lang-smart-tools': t.smartTools,
            '.lang-tools-desc': t.toolsDesc,
            '.lang-check-title': t.checkTitle,
            '.lang-check-desc': t.checkDesc,
            '.lang-calc-title': t.calcTitle,
            '.lang-area-label': t.areaLabel,
            '.lang-rooms-label': t.roomsLabel,
            '.lang-calc-btn': t.calcBtn,
            '.lang-dl-center': t.dlCenter,
            '.lang-dl-desc': t.dlDesc,
            '.lang-footer': t.footer,
            '.lang-get-started': t.getStarted
        };

        for (const [selector, text] of Object.entries(selectors)) {
            const el = document.querySelector(selector);
            if (el) el.innerText = text;
        }

        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) heroTitle.innerHTML = t.heroTitle;
        
        const heroDesc = document.getElementById('heroDesc');
        if (heroDesc) heroDesc.innerText = t.heroDesc;
        
        const announcement = document.getElementById('announcement');
        if (announcement) announcement.innerText = t.announcement;
    }

    // Serial Checker Logic
    window.checkSerial = function() {
        const input = document.getElementById('serialInput').value.trim();
        const result = document.getElementById('checkResult');
        if (!result) return;
        result.style.display = 'block';
        
        if (input.startsWith('AS-2024') || input.startsWith('AS-2025')) {
            result.innerHTML = currentLang === 'ar' ? '✅ منتج أصلي معتمد من السراج' : '✅ Original Certified Seraj Product';
            result.style.background = 'rgba(37, 211, 102, 0.1)';
            result.style.border = '1px solid #25d366';
        } else {
            result.innerHTML = currentLang === 'ar' ? '❌ الرقم غير صحيح أو المنتج غير مسجل' : '❌ Invalid Serial or Product Not Registered';
            result.style.background = 'rgba(217, 79, 26, 0.1)';
            result.style.border = '1px solid var(--orange)';
        }
    };

    // System Calculator Logic
    window.calculateSystem = function() {
        const area = document.getElementById('calcArea').value;
        const type = document.getElementById('buildingType').value;
        const result = document.getElementById('calcResult');
        if (!result) return;
        
        if (!area) return;
        
        let multiplier = 50; // Residential
        if (type === 'commercial') multiplier = 40;
        if (type === 'industrial') multiplier = 30;

        const detectors = Math.ceil(area / multiplier);
        const panels = 1;
        
        result.style.display = 'block';
        result.innerHTML = currentLang === 'ar' 
            ? `📊 الاحتياج التقديري (${type === 'residential' ? 'سكني' : type === 'commercial' ? 'تجاري' : 'صناعي'}): <br> - كواشف: ${detectors} <br> - لوحة تحكم: ${panels}`
            : `📊 Estimated Needs (${type}): <br> - Detectors: ${detectors} <br> - Control Panel: ${panels}`;
    };

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light');
            themeToggle.innerHTML = body.classList.contains('light') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }
});
