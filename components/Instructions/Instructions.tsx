'use client';

import { TypeAnimation } from 'react-type-animation';
import { ReactElement } from 'react';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import styles from 'components/Instructions/Instructions.module.scss';

export const Instructions = (): ReactElement => {
  const instructions = useTranslations('Header');

  return (
    <TypeAnimation
      className={cn(styles.text, styles.textCursor)}
      cursor={false}
      sequence={[
          instructions('instructions'),
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
