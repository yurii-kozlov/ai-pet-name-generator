import { ReactElement } from 'react';
import Link from 'next-intl/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import styles from 'components/LanguageSwitcher/LanguageSwitcher.module.scss';

export const LanguageSwitcher = (): ReactElement => {
  const homePageTranslation = useTranslations('Index');
  const englishLanguage = homePageTranslation('languageEnglish')
  const ukrainianLanguage = homePageTranslation('languageUkrainian')

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon className={styles.earthIcon} icon={faEarthEurope} />
      <div className={styles.linksWrapper}>
        <Link className={styles.link} href="/" locale="en">{englishLanguage}</Link>
        <Link className={styles.link} href="/" locale="uk">{ukrainianLanguage}</Link>
      </div>
    </div>
  );
}
