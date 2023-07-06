export const fallbackLng = 'en';
export const languages = [fallbackLng, 'uk'];

interface I18nOptions {
  // debug?: boolean;
  supportedLngs: string[];
  fallbackLng: string;
  lng: string;
  fallbackNS: string;
  defaultNS: string;
  ns: string;
};

export const defaultNS = 'translation';

export function getOptions (lng = fallbackLng, ns = defaultNS): I18nOptions {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
};
