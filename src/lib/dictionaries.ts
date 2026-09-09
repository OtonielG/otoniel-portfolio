const dictionaries = {
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export type Lang = keyof typeof dictionaries;

export function isValidLang(lang: string): lang is Lang {
  return lang in dictionaries;
}

export async function getDictionary(lang: Lang) {
  return dictionaries[lang]();
}
