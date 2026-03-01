import es from "../i18n/es.json";
import en from "../i18n/en.json";

export type Translations = typeof en;

export function getTranslations(url: URL): Translations {
  const lang = url.pathname.startsWith("/es") ? "es" : "en";
  return lang === "es" ? es : en;
}
