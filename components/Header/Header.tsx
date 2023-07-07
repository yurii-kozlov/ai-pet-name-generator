import { FC, ReactElement } from 'react';
import { AppTitle } from 'components/AppTitle';
import { Container } from 'components/Container';
import { DogIcon } from 'components/DogIcon';
import { Instructions } from 'components/Instructions';
import { LanguageSwitcher } from 'components/LanguageSwitcher';
import styles from 'components/Header/Header.module.scss';

type HeaderProps = {
  language: string;
}

export const Header:FC<HeaderProps> = ({ language }): ReactElement => (
  <header className={styles.header}>
    <Container>
      <div className={styles.titleAndDogIconWrapper}>
        <div className={styles.dogIconWrapper}>
          <DogIcon />
        </div>
        <LanguageSwitcher language={language}/>
        <AppTitle language={language}/>
      </div>
      <Instructions language={language}/>
    </Container>
  </header>
  );
