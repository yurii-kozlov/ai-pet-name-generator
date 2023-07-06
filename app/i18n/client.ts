'use client'

import { useEffect, useState } from 'react'
import i18next, { TFunction, i18n as interfaceI18n } from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages } from 'app/i18n/settings';

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : []
  })

interface TranslationOptions {
  keyPrefix?: string;
}

export function useTranslation(
  lng: string,
  ns: string,
  options: TranslationOptions = {}
): { t: TFunction; i18n: interfaceI18n } {
  const [activeLng, setActiveLng] = useState<string>();
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  useEffect(() => {
    if (runsOnServerSide) {
      if (lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
      }
    } else {
      setActiveLng(i18n.resolvedLanguage);

      if (activeLng !== i18n.resolvedLanguage) {
        setActiveLng(i18n.resolvedLanguage);
      }

      if (lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
      }
    }
  }, [lng, i18n, activeLng]);

  return ret;
}
