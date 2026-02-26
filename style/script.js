const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

const translations = {
    en: {
        headline: 'Full-Stack Developer • TOTVS Fluig Specialist',
        heroTitle: 'I build modern web solutions to digitize processes and drive real business productivity.',
        heroText: 'I work with front-end, integrations and enterprise automation. My focus is combining user experience, operational efficiency and sustainable code.',
        ctaProjects: 'View projects',
        ctaContact: 'Contact me',
        projectsTitle: 'Featured projects',
        project1Desc: 'Digital process structure with forms, multi-level approval and complete traceability.',
        project2Desc: 'Responsive UI improvements focused on visual clarity, accessibility and performance.',
        project3Desc: 'Integration between ERP and internal systems to consolidate critical data and reduce manual work.',
        experienceTitle: 'Experience',
        exp1Title: 'Enterprise process automation',
        exp1Text: 'Internal flow mapping and Fluig automation deployment to reduce operational time and improve governance.',
        exp2Title: 'UI and integration development',
        exp2Text: 'Creation of web interfaces and integrated services to connect teams, improve usability and data consistency.',
        skillsTitle: 'Skills',
        contactTitle: 'Contact',
        contactText: 'Let’s talk about your project?'
    }
};

const toggleBtn = document.getElementById('langToggle');
let currentLang = 'pt';

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (dict[key]) node.textContent = dict[key];
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    toggleBtn.textContent = lang === 'en' ? 'PT' : 'EN';
    toggleBtn.setAttribute('aria-label', lang === 'en' ? 'Switch language to Portuguese' : 'Alternar idioma para inglês');
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        applyLanguage(currentLang);
    });
}
