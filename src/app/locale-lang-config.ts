export class LocaleConfig {
  constructor(public language: string, public locale: string) {}
}

export const DEFAULT_LANG = 'pt';
export const DEFAULT_LOCALE = 'pt-BR';
export const SUPPORTED_LANGUAGES = [
  { language: 'pt', locales: ['pt-BR', 'pt-PT'] },
  { language: 'en', locales: ['en-US', 'en-GB'] }
];

export const browserLocaleFactory: () => LocaleConfig = () => {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    throw new Error('Fetching locale failed. Are you really in a browser??');
  }
  const wn = window.navigator as any;
  let locale = wn.languages ? `${wn.languages[0]}` : DEFAULT_LOCALE;
  locale = locale || wn.language || wn.browserLanguage || wn.userLanguage;
  const language = locale.split('-')[0];

  return new LocaleConfig(language, locale);
};

export const serverLocaleFactory: (locale?: string) => () => LocaleConfig = (reqLocales?: string) => () => {
  if (!reqLocales) {
    return new LocaleConfig(DEFAULT_LANG, DEFAULT_LOCALE);
  }

  // try setting locale according to list of locales sent to us. Try finding the first one of the list - since
  // this will probably the preferred client's language
  const localeFound: string | undefined = reqLocales
    .split(new RegExp(',|;'))
    .find(reqLocale => SUPPORTED_LANGUAGES.find(lang => reqLocale.includes(lang.language)));

  if (localeFound) {
    // From the iteration above we only arrive here if a language was found (that's why the bang and tslint disable)
    // tslint:disable-next-line: no-non-null-assertion
    const foundLangauge = SUPPORTED_LANGUAGES.find(lang => localeFound.includes(lang.language))!;
    const supportedLocale = foundLangauge.locales.find(locale => locale === localeFound);
    return new LocaleConfig(foundLangauge.language, supportedLocale || foundLangauge.locales[0]);
  } else {
    return new LocaleConfig(DEFAULT_LANG, DEFAULT_LOCALE);
  }
};
