'use client';

import { TypeAnimation } from 'react-type-animation';
import { FC, ReactElement } from 'react';
import cn from 'classnames';
import styles from 'components/Instructions/Instructions.module.scss';
import { useTranslation } from '@/app/i18n/client';

type InstructionsProps = {
  language: string;
}

export const Instructions: FC<InstructionsProps> = ({ language }): ReactElement => {
  const { t: translateHomePage } = useTranslation(language, 'home-page');
  const instructions = translateHomePage('instructions');

  return (
    <TypeAnimation
      className={cn(styles.text, styles.textCursor)}
      cursor={false}
      sequence={[
          instructions,
          1000,
          (el): void => {
            if (el) {
              el.classList.remove(styles.textCursor)
            }
          },
      ]}
      speed={70}
    />
  );
}
