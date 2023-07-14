import { FC } from 'react';
import styles from 'components/Error/Error.module.scss';

type ErrorProps = {
  errorMessage: string;
};

export const Error: FC<ErrorProps> = ({ errorMessage }) => (
  <h1 className={styles.title}>{errorMessage}</h1>
);
