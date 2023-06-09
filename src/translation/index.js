import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // header
      "What will you get": "What will you get",
      "Stages of work": "Stages of work",
      Portfolio: "Portfolio",
      home_title:
        "Attract attention, stand out, achieve success - with us, your reliable marketing partner!",
      home_button: "SUBMIT YOUR APPLICATION",
      1: "We have extensive experience and proven cases",
      2: "Non-standard approach and creative thinking",
      3: "Transparent reporting and work only for results",
      4: "Professional team of specialists",
      5: "Thoughtful and systematized work structure",
      step1: "Analysis and research",
      step2: "Strategy Development",
      step3: "Content Creation",
      step4: "Implementation and optimization",
      step5: "Analytics and measurement",
      step6: "Optimization and development",
      contacth1: "Have a project!",
      contacth2: "Go discuss!",
      label1: "Name (required)",
      label2: "Number (required)",
      contact: "Contacts",
    },
  },
  uzb: {
    translation: {
      // header
      "What will you get": "Nima olasiz",
      "Stages of work": "Ish bosqichlari",
      Portfolio: "Portfel",
      home_title:
        "Diqqatni jalb qiling, ajralib turing, biz bilan muvaffaqiyatga erishing, sizning ishonchli marketing hamkoringiz!",
      home_button: "MUROJAAT UCHUN",
      1: "Bizda katta tajriba va tasdiqlangan holatlar mavjud",
      2: "Nostandart yondashuv va ijodiy fikrlash",
      3: "Shaffof hisobot va faqat natijalar uchun ishlash",
      4: "Professional mutaxassislar jamoasi",
      5: "O'ylangan va tizimlashtirilgan ish tuzilishi",
      step1: "Tahlil va tadqiqot",
      step2: "Strategiyani ishlab chiqish",
      step3: "Kontent yaratish",
      step4: "Amalga oshirish va optimallashtirish",
      step5: "Analitik va o'lchov",
      step6: "Optimallashtirish va rivojlantirish",
      contacth1: "Loyihangiz bormi!",
      contacth2: "Muhokama qilamiz!",
      label1: "Ism (Majburiy)",
      label2: "Raqam (Majburiy)",
      contact: "Kontaktlar",
    },
  },
  ru: {
    translation: {
      // header
      "What will you get": "Что вы получите",
      "Stages of work": "Этапы работ",
      Portfolio: "Портфолио",
      home_title:
        "Привлекайте внимание, выделяйтесь, достигайте успеха — с нами, вашим надежным маркетинговым партнером!",
      home_button: "ОСТАВИТЬ ЗАЯВКУ",
      1: "У нас большой опыт работы и проверенные кейсы",
      2: "Нестандартный подход и креативное мышление",
      3: "Прозрачная отчетность и работа только на результат",
      4: "Профессиональная команда специалистов",
      5: "Продуманная и систематизированная структура работы",
      step1: "Анализ и исследование",
      step2: "Разработка стратегии",
      step3: "Создание контента",
      step4: "Реализация и оптимизация",
      step5: "Аналитика и измерение",
      step6: "Оптимизация и развитие",
      contacth1: "Есть проект?",
      contacth2: "Гоу обсудим!",
      label1: "Имя (обязательно)",
      label2: "Номер (обязательно)",
      contact: "Контакты",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "uz",
    fallbackLng: "uz", // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
