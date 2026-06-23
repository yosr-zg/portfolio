// Shared Language Switcher — works on all pages
document.addEventListener("DOMContentLoaded", function () {

    // --- Translations per page ---
    const translations = {

        // ===== INDEX PAGE =====
        index: {
            fr: {
                nav1: "Prologue", nav2: "Mes Œuvres", nav3: "Poésie & Mots", nav4: "Mon Essence", nav5: "Contact",
                iam: "Je suis", role: "Tisserande de codes et d'émotions.",
                verse1: "Je ne code pas de simples pages, je donne une âme au digital.",
                verse2: "Passionnée par la fusion entre la créativité artistique et l'informatique, je rêve d'une technologie plus humaine, concrète et vibrante.",
                verse3: "Disciplinée et créative, je peins avec des algorithmes et dessine avec des balises.",
                btnCv: "<i class='fa-solid fa-download'></i> Télécharger mon CV",
                oeuvresTitle: "Mes Œuvres", oeuvresIntro: "Découvrez les projets où j'ai infusé ma créativité.",
                funfenSub: "Le réseau de l'Art", emotionsSub: "La douceur du fait main",
                explore: "Explorer l'œuvre <i class='fa-solid fa-arrow-right'></i>",
                poesieTitle: "Poésie & Mots",
                poem: "\"Les mots ont un pouvoir de création infini,<br>Tout comme les lignes de code qui bâtissent des mondes.\"",
                poesieDesc: "J'écris des poèmes en arabe et en anglais, explorant les émotions humaines. La créativité est mon refuge et ma force.",
                btnSubstack: "<i class='fa-solid fa-book-open'></i> Lire mes écrits sur Substack",
                essenceTitle: "Mon Essence",
                art: "L'Art", artDesc: "Dessin, Création manuelle, Écriture.",
                tech: "La Technique",
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
                funfenSub: "The Network of Art", emotionsSub: "The softness of handmade",
                explore: "Explore project <i class='fa-solid fa-arrow-right'></i>",
                poesieTitle: "Poetry & Words",
                poem: "\"Words hold infinite creative power,<br>Just like the lines of code that build worlds.\"",
                poesieDesc: "I write poems in Arabic and English, exploring human emotions. Creativity is my refuge and strength.",
                btnSubstack: "<i class='fa-solid fa-book-open'></i> Read my writings on Substack",
                essenceTitle: "My Essence",
                art: "Art", artDesc: "Drawing, Handcrafting, Writing.",
                tech: "Technology",
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
                funfenSub: "شبكة الفن", emotionsSub: "رقة الصنع اليدوي",
                explore: "استكشف العمل <i class='fa-solid fa-arrow-left'></i>",
                poesieTitle: "شعر وكلمات",
                poem: "\"للكلمات قوة خلق لا متناهية،<br>تماماً كسطور البرمجة التي تبني عوالم.\"",
                poesieDesc: "أكتب قصائد باللغتين العربية والإنجليزية، أستكشف من خلالها المشاعر الإنسانية. الإبداع هو ملاذي وقوتي.",
                btnSubstack: "<i class='fa-solid fa-book-open'></i> اقرأ كتاباتي على Substack",
                essenceTitle: "جوهري",
                art: "الفن", artDesc: "الرسم، الأعمال اليدوية، الكتابة.",
                tech: "التقنية",
                langTitle: "اللغات", langDesc: "العربية (الأم)، الفرنسية والإنجليزية (بطلاقة)، الإسبانية (أساسيات).",
                path: "المسار", pathDesc: "هندسة البرمجيات - جامعة سيزام (بدءاً من 2026)",
                contactTitle: "تواصل معي", contactIntro: "لمناقشة مشروع، فكرة، أو شغف مشترك.",
                footer: "صُنع بحب وإبداع في عام 2026."
            }
        },

        // ===== FUNFEN PAGE =====
        funfen: {
            fr: {
                backLink: "<i class='fa-solid fa-arrow-left'></i> Retour à mon univers",
                projectDate: "Projet de fin d'année (2026)",
                projectQuote: "\"Une plateforme où l'art trouve sa voix, et où chaque artiste peut résonner dans le cœur des autres.\"",
                historyTitle: "L'Histoire du Projet",
                historyText: "Funفن est né d'une volonté de lier technologie et émotion. Contrairement aux réseaux sociaux classiques, cette plateforme est dédiée 100% à l'art et aux artistes.",
                historyText2: "J'ai pensé l'interface pour qu'elle soit douce, inspirante et qu'elle mette en valeur les œuvres artistiques de manière pure. L'objectif était de donner une âme à ce réseau.",
                toolsTitle: "Les Outils de Création",
                toolsText: "Pour construire cette expérience, j'ai utilisé : <strong>HTML, CSS, JavaScript, PHP et MySQL</strong>."
            },
            en: {
                backLink: "<i class='fa-solid fa-arrow-left'></i> Back to my universe",
                projectDate: "End-of-year project (2026)",
                projectQuote: "\"A platform where art finds its voice, and every artist can resonate in the hearts of others.\"",
                historyTitle: "The Project Story",
                historyText: "Funفن was born from a desire to connect technology and emotion. Unlike classic social networks, this platform is 100% dedicated to art and artists.",
                historyText2: "I designed the interface to be soft and inspiring, showcasing artistic works in their purest form. The goal was to give a soul to this network.",
                toolsTitle: "Tools Used",
                toolsText: "To build this experience, I used: <strong>HTML, CSS, JavaScript, PHP and MySQL</strong>."
            },
            ar: {
                backLink: "<i class='fa-solid fa-arrow-right'></i> العودة إلى عالمي",
                projectDate: "مشروع نهاية السنة (2026)",
                projectQuote: "\"منصة حيث يجد الفن صوته، وكل فنان يمكنه أن يتردد صداه في قلوب الآخرين.\"",
                historyTitle: "قصة المشروع",
                historyText: "وُلدت Funفن من رغبة في ربط التكنولوجيا بالعاطفة. على عكس الشبكات الاجتماعية التقليدية، هذه المنصة مخصصة 100% للفن والفنانين.",
                historyText2: "صمّمت الواجهة لتكون ناعمة وملهمة وتبرز الأعمال الفنية بشكل نقي. كان الهدف منح الروح لهذه الشبكة.",
                toolsTitle: "أدوات الإنشاء",
                toolsText: "لبناء هذه التجربة، استخدمت: <strong>HTML, CSS, JavaScript, PHP و MySQL</strong>."
            }
        },

        // ===== EMOTIONS PAGE =====
        emotions: {
            fr: {
                backLink: "<i class='fa-solid fa-arrow-left'></i> Retour à mon univers",
                projectDate: "Projet personnel",
                projectQuote: "\"La douceur du fait main, transmise à travers une interface délicate et chaleureuse.\"",
                demoTitle: "<i class='fa-solid fa-desktop'></i> Espace Démo",
                demoText: "Insérez ici les images de la boutique, ou un prototype interactif de l'interface e-commerce.",
                historyTitle: "L'Histoire du Projet",
                historyText: "Emotions est une boutique en ligne dédiée aux vêtements pour bébés créés de manière artisanale et manuelle. J'ai souhaité que l'interface reflète la même tendresse et le même soin que l'on retrouve dans ces créations uniques.",
                historyText2: "La conception visuelle tourne autour de l'authenticité et de la douceur pour offrir aux visiteurs une expérience d'achat apaisante.",
                toolsTitle: "Les Outils de Création",
                toolsText: "Développé avec amour en utilisant : <strong>HTML, CSS, JavaScript, PHP et MySQL</strong>."
            },
            en: {
                backLink: "<i class='fa-solid fa-arrow-left'></i> Back to my universe",
                projectDate: "Personal project",
                projectQuote: "\"The softness of handmade, conveyed through a delicate and warm interface.\"",
                demoTitle: "<i class='fa-solid fa-desktop'></i> Demo Space",
                demoText: "Insert shop images here, or an interactive prototype of the e-commerce interface.",
                historyTitle: "The Project Story",
                historyText: "Emotions is an online boutique dedicated to handmade baby clothes. I wanted the interface to reflect the same tenderness and care found in these unique creations.",
                historyText2: "The visual design revolves around authenticity and softness, offering visitors a soothing shopping experience.",
                toolsTitle: "Tools Used",
                toolsText: "Developed with love using: <strong>HTML, CSS, JavaScript, PHP and MySQL</strong>."
            },
            ar: {
                backLink: "<i class='fa-solid fa-arrow-right'></i> العودة إلى عالمي",
                projectDate: "مشروع شخصي",
                projectQuote: "\"نعومة الصنع اليدوي، تنقلها واجهة رقيقة ودافئة.\"",
                demoTitle: "<i class='fa-solid fa-desktop'></i> فضاء العرض",
                demoText: "أدرج هنا صور المتجر، أو نموذجاً تفاعلياً لواجهة المتجر الإلكتروني.",
                historyTitle: "قصة المشروع",
                historyText: "Emotions متجر إلكتروني مخصص لملابس الأطفال المصنوعة يدوياً. أردت أن تعكس الواجهة نفس العطف والاهتمام الموجود في هذه الإبداعات الفريدة.",
                historyText2: "يدور التصميم البصري حول الأصالة والنعومة لتقديم تجربة تسوق هادئة للزوار.",
                toolsTitle: "أدوات الإنشاء",
                toolsText: "طُوِّر بمحبة باستخدام: <strong>HTML, CSS, JavaScript, PHP و MySQL</strong>."
            }
        },

        // ===== CERTIFICATIONS PAGE =====
        certifications: {
            fr: {
                backLink: "<i class='fa-solid fa-arrow-left'></i> Retour",
                pageTitle: "Certificats & Badges",
                pageIntro: "La preuve de ma rigueur et de mes compétences techniques.",
                certName: "Certificat Cisco",
                certSub: "Programmation C",
                certDesc: "Validation des compétences fondamentales en programmation C, structures de données et algorithmique.",
                certBtn: "Voir le certificat",
                soonTitle: "Bientôt...",
                soonText: "D'autres certifications viendront enrichir cette galerie au fil de mon parcours."
            },
            en: {
                backLink: "<i class='fa-solid fa-arrow-left'></i> Back",
                pageTitle: "Certificates & Badges",
                pageIntro: "Proof of my rigor and technical skills.",
                certName: "Cisco Certificate",
                certSub: "C Programming",
                certDesc: "Validation of core skills in C programming, data structures and algorithms.",
                certBtn: "View certificate",
                soonTitle: "Coming soon...",
                soonText: "More certifications will enrich this gallery as my career progresses."
            },
            ar: {
                backLink: "<i class='fa-solid fa-arrow-right'></i> رجوع",
                pageTitle: "الشهادات والأوسمة",
                pageIntro: "دليل على صرامتي وكفاءاتي التقنية.",
                certName: "شهادة سيسكو",
                certSub: "برمجة C",
                certDesc: "التحقق من المهارات الأساسية في برمجة C وهياكل البيانات والخوارزميات.",
                certBtn: "عرض الشهادة",
                soonTitle: "قريباً...",
                soonText: "ستثري شهادات أخرى هذه الغاليري مع تقدم مسيرتي."
            }
        }
    };

    // --- Detect current page ---
    const path = window.location.pathname;
    let pageKey = "index";
    if (path.includes("funfen")) pageKey = "funfen";
    else if (path.includes("emotions")) pageKey = "emotions";
    else if (path.includes("certifications")) pageKey = "certifications";

    const pageTrans = translations[pageKey];

    // --- Apply language ---
    function applyLang(lang) {
        const t = pageTrans[lang] || pageTrans["fr"];
        document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        document.documentElement.setAttribute("lang", lang);
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (t[key] !== undefined) el.innerHTML = t[key];
        });
        // Save preference
        localStorage.setItem("lang", lang);
        // Update active button
        document.querySelectorAll(".lang-btn").forEach(b => {
            b.classList.toggle("active", b.getAttribute("data-lang") === lang);
        });
    }

    // --- Wire up buttons ---
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            applyLang(this.getAttribute("data-lang"));
        });
    });

    // --- Apply saved language on load ---
    const savedLang = localStorage.getItem("lang") || "fr";
    applyLang(savedLang);
});
