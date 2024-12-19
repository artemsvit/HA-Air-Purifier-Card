// Borrowed from:
// https://github.com/custom-cards/boilerplate-card/blob/master/src/localize/localize.ts

import * as en from './translations/en.json';

type Translations = {
  [key: string]: {
    [key: string]: string | Translations;
  };
};

const languages: Record<string, Translations> = {
  en,
};

const DEFAULT_LANG = 'en';

function getTranslatedValue(obj: any, path: string[]): string {
  return path.reduce((curr, key) => {
    if (curr && typeof curr === 'object' && key in curr) {
      return curr[key];
    }
    return undefined;
  }, obj) as string;
}

export function localize(str: string, search?: string, replace?: string): string {
  const lang = (localStorage.getItem('selectedLanguage') || navigator.language.split('-')[0] || DEFAULT_LANG)
    .replace(/['"]+/g, '')
    .replace('-', '_');

  const path = str.split('.');
  let translated = '';

  try {
    translated = getTranslatedValue(languages[lang] || languages[DEFAULT_LANG], path) || str;
  } catch (_) {
    translated = getTranslatedValue(languages[DEFAULT_LANG], path) || str;
  }

  if (search !== undefined && replace !== undefined) {
    translated = translated.replace(search, replace);
  }

  return translated;
}
