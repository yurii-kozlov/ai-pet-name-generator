'use client';

import { ReactElement } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { v4 as uuid_v4 } from 'uuid';
import styles from 'components/AppTitle/AppTitle.module.scss';

export const AppTitle = (): ReactElement => {
  const title = 'Name my pet';
  const words = title.split(' ');

  const trail = useTrail(words.length, {
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 500,
  });

  return (
    <h1 className={styles.title}>
      {trail.map((style, index) => (
        <animated.span key={uuid_v4()} style={style}>
          {` ${words[index]}`}
        </animated.span>
    ))}
    </h1>
  );
}
