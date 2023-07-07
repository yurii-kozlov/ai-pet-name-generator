'use client';

import { motion } from 'framer-motion';
import { FC, ReactElement } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import { useTranslation } from 'app/i18n/client';
import styles from 'components/Instructions/Instructions.module.scss';

type InstructionsProps = {
  language: string;
}

export const Instructions: FC<InstructionsProps> = ({ language }): ReactElement => {
  const { t: translateHomePage } = useTranslation(language, 'home-page');
  const instructions = translateHomePage('instructions');

  return (
    <div>
      <motion.span className={styles.text}>
        {[...instructions].map((char, index) => (
          <motion.span
            animate={{ opacity: 1 }}
            className={styles.textCursor}
            initial={{ opacity: 0 }}
            key={uuid_v4()}
            transition={{ duration: 0.3, delay: index * 0.04 }}
        >
            {char}
          </motion.span>
      ))}
      </motion.span>
    </div>
  )
}
