document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    // Products Data (Kept as is for Asenware context)
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
            navLogo: 'Seraj <span>Industrial Solutions</span>',
            home: 'Home', 
            pharma: 'Pharma Factories',
            projectsNav: 'Yemen Projects',
            services: 'Services', 
            products: 'Products', 
            contact: 'Contact',
            heroTitle: 'Integrated <span>Solutions</span> for Pharma Factories',
            heroDesc: 'Executing Turnkey Pharma Projects from Design to Operation, following GMP, WHO, and ISO standards.',
            footer: 'Al-Seraj Industrial Solutions. All rights reserved.',
            announcement: '🚀 Al-Seraj Industrial Solutions: Proud to execute StarPharma project in Sana\'a with global standards.',
            getStarted: 'Explore Pharma Services'
        },
        ar: {
            navLogo: 'السراج <span>للحلول الصناعية</span>',
            home: 'الرئيسية', 
            pharma: 'مصانع الأدوية',
            projectsNav: 'مشاريعنا في اليمن',
            services: 'خدماتنا', 
            products: 'المنتجات', 
            contact: 'اتصل بنا',
            heroTitle: 'حلول <span>متكاملة</span> لإنشاء مصانع الأدوية',
            heroDesc: 'تنفيذ مشاريع مصانع أدوية "مفتاح باليد" من التصميم إلى التشغيل، وفق معايير GMP و WHO و ISO العالمية.',
            footer: 'السراج للحلول الصناعية. جميع الحقوق محفوظة.',
            announcement: '🚀 السراج للحلول الصناعية: فخورون بتنفيذ مشروع مصنع ستارفارما في صنعاء وفق أعلى المعايير العالمية.',
            getStarted: 'اكتشف خدماتنا الدوائية'
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
            '.lang-pharma': t.pharma,
            '.lang-projects-nav': t.projectsNav,
            '.lang-services': t.services,
            '.lang-products': t.products,
            '.lang-contact': t.contact,
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

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light');
            themeToggle.innerHTML = body.classList.contains('light') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }
});
