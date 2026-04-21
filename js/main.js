document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    // Language Settings
    const htmlRoot = document.getElementById('htmlRoot');
    const body = document.getElementById('body');
    const langToggle = document.getElementById('langToggle');
    
    // Auto-detect language
    const userLang = navigator.language || navigator.userLanguage;
    let currentLang = userLang.startsWith('ar') ? 'ar' : 'en';
    
    const translations = {
        en: {
            navLogo: 'Seraj <span>Industrial Solutions</span>',
            home: 'Home', pharma: 'Pharma Factories', projectsNav: 'Yemen Projects',
            services: 'Services', products: 'Products', contact: 'Contact',
            heroTitle: 'Integrated <span>Solutions</span> for Pharma Factories',
            heroDesc: 'Executing Turnkey Pharma Projects from Design to Operation, following GMP, WHO, and ISO standards.',
            footer: 'Al-Seraj Industrial Solutions Official. All rights reserved.',
            announcement: '🚀 Al-Seraj Industrial Solutions: Proud to execute StarPharma project in Sana\'a with global standards.',
            getStarted: 'Explore Pharma Services'
        },
        ar: {
            navLogo: 'السراج <span>للحلول الصناعية</span>',
            home: 'الرئيسية', pharma: 'مصانع الأدوية', projectsNav: 'مشاريعنا في اليمن',
            services: 'خدماتنا', products: 'المنتجات', contact: 'اتصل بنا',
            heroTitle: 'حلول <span>متكاملة</span> لإنشاء مصانع الأدوية',
            heroDesc: 'تنفيذ مشاريع مصانع أدوية "مفتاح باليد" من التصميم إلى التشغيل، وفق معايير GMP و WHO و ISO العالمية.',
            footer: 'الموقع الرسمي لشركة السراج للحلول الصناعية. جميع الحقوق محفوظة.',
            announcement: '🚀 السراج للحلول الصناعية: فخورون بتنفيذ مشروع مصنع ستارفارما في صنعاء وفق أعلى المعايير العالمية.',
            getStarted: 'اكتشف خدماتنا الدوائية'
        }
    };

    function applyLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];
        htmlRoot.setAttribute('lang', lang);
        htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        body.className = lang === 'en' ? 'en' : '';
        langToggle.innerText = lang === 'ar' ? 'English' : 'العربية';
        
        const selectors = {
            '.lang-home': t.home, '.lang-pharma': t.pharma, '.lang-projects-nav': t.projectsNav,
            '.lang-services': t.services, '.lang-products': t.products, '.lang-contact': t.contact,
            '.lang-footer': t.footer, '.lang-get-started': t.getStarted
        };

        for (const [selector, text] of Object.entries(selectors)) {
            const el = document.querySelector(selector);
            if (el) el.innerText = text;
        }

        document.getElementById('navLogoText').innerHTML = t.navLogo;
        document.getElementById('heroTitle').innerHTML = t.heroTitle;
        document.getElementById('heroDesc').innerText = t.heroDesc;
        document.getElementById('announcement').innerText = t.announcement;
    }

    // Initialize with detected language
    applyLanguage(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
        });
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
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });

    // Products Data
    const products = [
        { id: 1, name: 'كاشف دخان لاسلكي', category: 'Fire Alarm', model: 'AW-D101', desc: 'كاشف دخان ذكي يعمل بالبطارية مع اتصال لاسلكي.' },
        { id: 2, name: 'لوحة تحكم قابلة للعنونة', category: 'Control Panels', model: 'AW-FP100', desc: 'لوحة تحكم متطورة تدعم حتى 250 نقطة عنونة.' },
        { id: 3, name: 'كاشف حرارة خطي', category: 'Specialized', model: 'AW-LHD', desc: 'مثالي للمستودعات والمناطق الصناعية الكبيرة.' }
    ];

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
});
