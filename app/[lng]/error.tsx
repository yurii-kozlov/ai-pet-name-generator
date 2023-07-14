'use client';

import { FC, ReactElement } from 'react';
import styles from 'app/[lng]/error.module.scss';

type ErrorProps = {
  error: Error;
};

const Error: FC<ErrorProps> = ({ error }): ReactElement => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>OOOps!!! Something went wrong. {error.message}</h1>
  </div>
);

export default Error;
