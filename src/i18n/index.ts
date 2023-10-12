import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import enJson from "./translations/en.json";
import ptJson from "./translations/ptBR.json";
import frJson from "./translations/fr.json";

i18n.use(initReactI18next).init({
  lng: "ptBR", // Defina "ptBR" como idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJson,
    fr: frJson, // Corrija a chave de idioma de "fn" para "fr"
    ptBR: ptJson // Corrija a chave de idioma para "ptBR"
  }
});

export default i18n;