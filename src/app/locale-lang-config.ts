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
