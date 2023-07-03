import { ReactElement } from 'react';
import { Header } from 'components/Header';
import styles from 'app/[locale]/page.module.scss';

export default function Home(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  )
};
