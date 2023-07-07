import { ReactElement } from 'react';
import styles from 'app/[lng]/page.module.scss';
import { Header } from 'components/Header';
import { ThemeModeSwitcher } from 'components/ThemeModeSwitcher';

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
    </div>
  );
};
