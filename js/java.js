// 1. DICCIONARIO DE TRADUCCIONES
const translations = {
    es: {
        header_title: "MIi PORTFOLIO",
        nav_home: "Inicio",
        nav_p1: "Proyecto 1",
        nav_p2: "Proyecto 2",
        nav_list: "Listado",
        hero_subtitle: "👋 Hola, bienvenido a mi rincón digital",
        hero_title: "Soy <span class='highlight'>SysAdmin & DevOps</span><br>en formación.",
        hero_desc: "Estudiante del ITB apasionado por la ciberseguridad, la automatización de servidores y el despliegue en la nube.",
        btn_projects: "Ver mis Proyectos",
        btn_cv: "Descargar CV",
        skills_title: "🛠️ Mi Stack Tecnológico",
        latest_work: "🚀 Últimos Trabajos",
        footer_text: "&copy; 2025 - Diseñado y Programado por Mí"
    },
    en: {
        header_title: "MY PORTFOLIO",
        nav_home: "Home",
        nav_p1: "Project 1",
        nav_p2: "Project 2",
        nav_list: "List",
        hero_subtitle: "👋 Hi, welcome to my digital corner",
        hero_title: "I am a <span class='highlight'>SysAdmin & DevOps</span><br>in training.",
        hero_desc: "ITB student passionate about cybersecurity, server automation, and cloud deployment.",
        btn_projects: "View Projects",
        btn_cv: "Download CV",
        skills_title: "🛠️ My Tech Stack",
        latest_work: "🚀 Latest Work",
        footer_text: "&copy; 2025 - Designed & Coded by Me"
    }
};

// 2. LÓGICA DEL BOTÓN
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'es'; // Recuerda el idioma guardado o usa español

// Función para actualizar textos
function updateLanguage(lang) {
    // Cambiar textos
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // innerHTML permite etiquetas como <br> o <span>
        }
    });

    // Cambiar botón
    if (lang === 'es') {
        langToggleBtn.innerHTML = "🇺🇸 EN"; // Si estamos en ES, ofrece cambiar a EN
    } else {
        langToggleBtn.innerHTML = "🇪🇸 ES"; // Si estamos en EN, ofrece cambiar a ES
    }

    // Guardar preferencia
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

// Al cargar la página, aplicar el idioma guardado
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});

// Al hacer clic en el botón
if(langToggleBtn){
    langToggleBtn.addEventListener('click', () => {
        if (currentLang === 'es') {
            updateLanguage('en');
        } else {
            updateLanguage('es');
        }
    });
}