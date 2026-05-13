const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const languageToggle = document.querySelector(".language-toggle");

const translations = {
  de: {
    navHome: "Home",
    navInvestment: "Investment",
    homeEyebrow: "Home",
    homeLead:
      "Willkommen auf meiner Website. Hier entsteht ein klarer Ort fuer meine Person, meine Projekte und alles, was ich spaeter zeigen will.",
    homePrimary: "Zur Investment-Seite",
    homeSecondary: "Kontakt",
    homePanelLabel: "Persoenliche Website",
    homePanelText:
      "Eine einfache, getrennte Struktur: Home fuer die Vorstellung, Investment fuer Portfolio-Ideen.",
    investmentEyebrow: "Investment",
    investmentTitle: "Investment",
    investmentLead:
      "Hier entsteht mein Investment-Bereich. Fuer den Start zeigt der Kuchen nur Beispielwerte, spaeter ersetzen wir sie durch echte Positionen und Inhalte.",
    assetStocks: "Aktien",
    assetCrypto: "Krypto",
    assetEtf: "ETFs",
    assetCash: "Cash",
    investmentNoteEyebrow: "Hinweis",
    investmentNoteTitle: "Platzhalter, keine Finanzberatung",
    investmentNoteText:
      "Die Werte sind aktuell nur Beispielwerte. Spaeter koennen wir hier echte Kategorien, einzelne Positionen, Performance oder Notizen einbauen.",
  },
  en: {
    navHome: "Home",
    navInvestment: "Investment",
    homeEyebrow: "Home",
    homeLead:
      "Welcome to my website. This is becoming a clean place for who I am, my projects, and everything I want to show later.",
    homePrimary: "Open investment page",
    homeSecondary: "Contact",
    homePanelLabel: "Personal website",
    homePanelText:
      "A simple separated structure: Home for the introduction, Investment for portfolio ideas.",
    investmentEyebrow: "Investment",
    investmentTitle: "Investment",
    investmentLead:
      "This is where my investment area is taking shape. For now, the pie chart uses sample values; later we can replace them with real positions and content.",
    assetStocks: "Stocks",
    assetCrypto: "Crypto",
    assetEtf: "ETFs",
    assetCash: "Cash",
    investmentNoteEyebrow: "Note",
    investmentNoteTitle: "Placeholder, not financial advice",
    investmentNoteText:
      "The values are only examples for now. Later we can add real categories, individual positions, performance, or notes.",
  },
};

function applyLanguage(language) {
  const dictionary = translations[language] || translations.de;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === "de" ? "EN" : "DE";
    languageToggle.setAttribute(
      "aria-label",
      language === "de" ? "Switch to English" : "Auf Deutsch umstellen"
    );
  }
}

const savedLanguage = localStorage.getItem("site-language") || "de";

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("is-open");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
    }
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang === "en" ? "en" : "de";
    const nextLanguage = currentLanguage === "de" ? "en" : "de";
    localStorage.setItem("site-language", nextLanguage);
    applyLanguage(nextLanguage);
  });
}

applyLanguage(savedLanguage);
