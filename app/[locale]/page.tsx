'use client';

import { ReactElement } from 'react';
import styles from 'app/[locale]/page.module.scss';
import { Header } from 'components/Header';
import { ThemeModeSwitcher } from 'components/ThemeModeSwitcher';

export default function Home(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ThemeModeSwitcher />
    </div>
  )
};
