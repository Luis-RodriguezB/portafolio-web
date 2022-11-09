import { createI18n } from 'vue-i18n';
import en from './translations/en.json';
import es from './translations/es.json';

function loadLocaleMessages() {
  const locales = [{ en: en }, { es: es }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'es',
  messages: loadLocaleMessages(),
});

export default i18n;
