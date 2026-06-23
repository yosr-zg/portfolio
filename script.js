// Intersection Observer for fade-in elements
document.addEventListener("DOMContentLoaded", function() {
    const chapters = document.querySelectorAll('.chapter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    chapters.forEach(chapter => {
        observer.observe(chapter);
    });

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if(cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Adding a slight delay to the outline for that magical trailing effect
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect for clickable elements
        const clickables = document.querySelectorAll('a, button, .art-frame');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(155, 114, 170, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.poetic-nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
        });
        // Close menu when a nav link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }

    // i18n Translations
    const translations = {
        fr: {
            nav1: "Prologue", nav2: "Mes Œuvres", nav3: "Poésie & Mots", nav4: "Mon Essence", nav5: "Contact",
            iam: "Je suis", role: "Tisserande de codes et d'émotions.",
            verse1: "Je ne code pas de simples pages, je donne une âme au digital.",
            verse2: "Passionnée par la fusion entre la créativité artistique et l'informatique, je rêve d'une technologie plus humaine, concrète et vibrante.",
            verse3: "Disciplinée et créative, je peins avec des algorithmes et dessine avec des balises.",
            btnCv: "<i class='fa-solid fa-download'></i> Télécharger mon CV",
            oeuvresTitle: "Mes Œuvres", oeuvresIntro: "Découvrez les projets où j'ai infusé ma créativité.",
            funfenSub: "Le réseau de l'Art", emotionsSub: "La douceur du fait main", explore: "Explorer l'œuvre <i class='fa-solid fa-arrow-right'></i>",
            poesieTitle: "Poésie & Mots",
            poem: "\"Les mots ont un pouvoir de création infini,<br>Tout comme les lignes de code qui bâtissent des mondes.\"",
            poesieDesc: "J'écris des poèmes en arabe et en anglais, explorant les émotions humaines. La créativité est mon refuge et ma force.",
            btnSubstack: "<i class='fa-solid fa-book-open'></i> Lire mes écrits sur Substack",
            essenceTitle: "Mon Essence", 
            art: "L'Art", artDesc: "Dessin, Création manuelle, Écriture.",
            tech: "La Technique", exploreCerts: "Voir mes certificats <i class='fa-solid fa-arrow-right'></i>",
            langTitle: "Les Langues", langDesc: "Arabe (Maternelle), Français & Anglais (Courant), Espagnol (Bases).",
            path: "Le Chemin", pathDesc: "Cycle Ingénieur en Informatique - Univ. Sesame (Dès 2026)",
            contactTitle: "Entrons en contact", contactIntro: "Pour discuter d'un projet, d'une idée, ou d'une passion commune.",
            footer: "Conçu avec tendresse et créativité en 2026."
        },
        en: {
            nav1: "Prologue", nav2: "My Works", nav3: "Poetry & Words", nav4: "My Essence", nav5: "Contact",
            iam: "I am", role: "Weaver of code and emotions.",
            verse1: "I don't just code pages, I give a soul to the digital world.",
            verse2: "Passionate about fusing artistic creativity with computer science, I dream of a technology that is more human, concrete, and vibrant.",
            verse3: "Disciplined and creative, I paint with algorithms and draw with tags.",
            btnCv: "<i class='fa-solid fa-download'></i> Download my Resume",
            oeuvresTitle: "My Works", oeuvresIntro: "Discover the projects where I infused my creativity.",
            funfenSub: "The Network of Art", emotionsSub: "The softness of handmade", explore: "Explore project <i class='fa-solid fa-arrow-right'></i>",
            poesieTitle: "Poetry & Words",
            poem: "\"Words hold infinite creative power,<br>Just like the lines of code that build worlds.\"",
            poesieDesc: "I write poems in Arabic and English, exploring human emotions. Creativity is my refuge and strength.",
            btnSubstack: "<i class='fa-solid fa-book-open'></i> Read my writings on Substack",
            essenceTitle: "My Essence",
            art: "Art", artDesc: "Drawing, Handcrafting, Writing.",
            tech: "Technology", exploreCerts: "View my certificates <i class='fa-solid fa-arrow-right'></i>",
            langTitle: "Languages", langDesc: "Arabic (Native), French & English (Fluent), Spanish (Basics).",
            path: "The Path", pathDesc: "Computer Engineering - Sesame Univ. (From 2026)",
            contactTitle: "Let's connect", contactIntro: "To discuss a project, an idea, or a shared passion.",
            footer: "Crafted with tenderness and creativity in 2026."
        },
        ar: {
            nav1: "مقدمة", nav2: "أعمالي", nav3: "شعر وكلمات", nav4: "جوهري", nav5: "تواصل معي",
            iam: "أنا", role: "ناسجة الأكواد والمشاعر.",
            verse1: "أنا لا أبرمج صفحات بسيطة، بل أمنح الروح للعالم الرقمي.",
            verse2: "شغوفة بدمج الإبداع الفني مع علوم الحاسوب، أحلم بتكنولوجيا أكثر إنسانية وواقعية وحيوية.",
            verse3: "منضبطة ومبدعة، أرسم بالخوارزميات وألوّن بالشيفرات.",
            btnCv: "<i class='fa-solid fa-download'></i> تحميل سيرتي الذاتية",
            oeuvresTitle: "أعمالي", oeuvresIntro: "اكتشف المشاريع التي مزجت فيها إبداعي.",
            funfenSub: "شبكة الفن", emotionsSub: "رقة الصنع اليدوي", explore: "استكشف العمل <i class='fa-solid fa-arrow-left'></i>",
            poesieTitle: "شعر وكلمات",
            poem: "\"للكلمات قوة خلق لا متناهية،<br>تماماً كسطور البرمجة التي تبني عوالم.\"",
            poesieDesc: "أكتب قصائد باللغتين العربية والإنجليزية، أستكشف من خلالها المشاعر الإنسانية. الإبداع هو ملاذي وقوتي.",
            btnSubstack: "<i class='fa-solid fa-book-open'></i> اقرأ كتاباتي على Substack",
            essenceTitle: "جوهري",
            art: "الفن", artDesc: "الرسم، الأعمال اليدوية، الكتابة.",
            tech: "التقنية", exploreCerts: "عرض شهاداتي <i class='fa-solid fa-arrow-left'></i>",
            langTitle: "اللغات", langDesc: "العربية (الأم)، الفرنسية والإنجليزية (بطلاقة)، الإسبانية (أساسيات).",
            path: "المسار", pathDesc: "هندسة البرمجيات - جامعة سيزام (بدءاً من 2026)",
            contactTitle: "تواصل معي", contactIntro: "لمناقشة مشروع، فكرة، أو شغف مشترك.",
            footer: "صُنع بحب وإبداع في عام 2026."
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const lang = this.getAttribute('data-lang');
            document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('lang', lang);

            // Update texts
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        });
    });
});
