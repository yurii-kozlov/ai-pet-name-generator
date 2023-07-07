import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'app/i18n';
import styles from 'components/LanguageSwitcher/LanguageSwitcher.module.scss';

type LocaleProps = {
  language: string;
}

export const LanguageSwitcher: FC<LocaleProps> = async ({ language }): Promise<ReactElement> => {
  const { t: translateHomePage } = await useTranslation(language, 'home-page');
  const englishLanguage = translateHomePage('languageEnglish')
  const ukrainianLanguage = translateHomePage('languageUkrainian')

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon className={styles.earthIcon} icon={faEarthEurope} />
      <div className={styles.linksWrapper}>
        <Link className={styles.link} href="/en">{englishLanguage}</Link>
        <Link className={styles.link} href="/uk">{ukrainianLanguage}</Link>
      </div>
    </div>
  );
}
