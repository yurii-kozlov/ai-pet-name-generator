import { ReactElement } from 'react';
import { Header } from 'components/Header';
import { Container } from 'components/Container';
import { ThemeModeSwitcher } from 'components/ThemeModeSwitcher';
import { PetNameGeneratorForm } from 'components/PetNameGeneratorForm';
import styles from 'app/[lng]/page.module.scss';

type StaticParams = {
  params: {
    lng: string
  }
}

export default async function Home({params: {lng}}: StaticParams): Promise<ReactElement> {

  return (
    <div className={styles.wrapper}>
      <Header language={lng}/>
      <div className={styles.themeModeSwitcherWrapper}>
        <ThemeModeSwitcher />
      </div>
      <div className={styles.petNameGeneratorSectionWrapper}>
        <Container>
          <PetNameGeneratorForm language={lng}/>
        </Container>
      </div>
    </div>
  );
};
