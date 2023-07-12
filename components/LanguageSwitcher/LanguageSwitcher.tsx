'use client';

import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'app/i18n/client';
import { useRouter } from 'next/navigation';
import { Theme } from 'enums/Theme';
import styles from 'components/LanguageSwitcher/LanguageSwitcher.module.scss';

type LocaleProps = {
  language: string;
}

export const LanguageSwitcher: FC<LocaleProps> = ({ language }): ReactElement => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { t: translateHomePage } = useTranslation(language, 'home-page');
  const englishLanguage = translateHomePage('languageEnglish')
  const ukrainianLanguage = translateHomePage('languageUkrainian')


  const handleUkrLanguageSwitch = (): void => {
    setTheme(theme || Theme.Dark);


    router.prefetch('/en');
    router.refresh()
  }

  const handleEngLanguageSwitch = (): void => {
    setTheme(theme || Theme.Dark);
    router.prefetch('/uk');
    router.refresh()
  }

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon className={styles.earthIcon} icon={faEarthEurope} />
      <div className={styles.linksWrapper}>
        <Link
          className={styles.link}
          href="/en"
          onClick={handleEngLanguageSwitch}
        >
          {englishLanguage}
        </Link>
        <Link
          className={styles.link}
          href="/uk"
          onClick={handleUkrLanguageSwitch}
        >
          {ukrainianLanguage}
        </Link>
      </div>
    </div>
  );
}
