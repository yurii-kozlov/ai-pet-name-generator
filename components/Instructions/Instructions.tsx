'use client';

import { TypeAnimation } from 'react-type-animation';
import { ReactElement } from 'react';
import cn from 'classnames';
import { typeAnimationData } from 'constants/instructions';
import styles from 'components/Instructions/Instructions.module.scss';

export const Instructions = (): ReactElement => (
  <TypeAnimation
    className={cn(styles.text, styles.textCursor)}
    cursor={false}
    sequence={[
        ...typeAnimationData,
        (el): void => {
          if (el) {
            el.classList.remove(styles.textCursor)
          }
        },
    ]}
    speed={70}
  />
);
