const translations = {
  en: {
    title: "Technical Documentation",
    docTitle: "Documentation",
    Introduction: "Introduction",
    Getting_Started: "Getting Started",
    Syntax: "Syntax",
    Examples: "Examples",
    Conclusion: "Conclusion"
  },
  fr: {
    title: "Documentation Technique",
    docTitle: "Documentation",
    Introduction: "Introduction",
    Getting_Started: "Commencer",
    Syntax: "Syntaxe",
    Examples: "Exemples",
    Conclusion: "Conclusion"
  },
  es: {
    title: "Documentación Técnica",
    docTitle: "Documentación",
    Introduction: "Introducción",
    Getting_Started: "Comenzando",
    Syntax: "Sintaxis",
    Examples: "Ejemplos",
    Conclusion: "Conclusión"
  },
  ar: {
    title: "التوثيق الفني",
    docTitle: "التوثيق",
    Introduction: "مقدمة",
    Getting_Started: "البدء",
    Syntax: "بناء الجملة",
    Examples: "أمثلة",
    Conclusion: "الخاتمة"
  }
};

document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.title = translations[lang].title;
});
