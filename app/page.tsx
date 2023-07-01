import { ReactElement } from 'react';
import styles from 'app/page.module.scss';
import Head from 'next/head';

export default function Home(): ReactElement {
  return (
    <>
      <h1 className={styles.title}>hello world</h1>
    </>
  )
};
