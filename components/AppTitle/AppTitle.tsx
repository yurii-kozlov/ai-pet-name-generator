'use client';

import { FC, ReactElement } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import { motion } from 'framer-motion';
import { useTranslation } from 'app/i18n/client';
import styles from 'components/AppTitle/AppTitle.module.scss';

type AppTitleProps = {
  language: string;
}

export const AppTitle: FC<AppTitleProps> = ({ language }): ReactElement => {
  const { t: translageHomePage } = useTranslation(language, 'home-page');
  const title = translageHomePage('title');
  const words = title.split(' ');

  return (
    <h1 className={styles.title}>
      {words.map((word, index) => (
        <motion.span
          animate={{ opacity: 1, translateY: 0 }}
          initial={{ opacity: 0, translateY: -20 }}
          key={uuid_v4()}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {` ${ word}`}
        </motion.span>
      ))}
    </h1>
  );
}
