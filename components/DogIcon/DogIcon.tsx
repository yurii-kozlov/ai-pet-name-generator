'use client';

import { ReactElement, useState } from 'react';
import { FaDog } from 'react-icons/fa';
import cn from 'classnames';
import styles from 'components/DogIcon/DogIcon.module.scss'

export const DogIcon = (): ReactElement => {
  const [isDogIconClicked, setIsDogIconClicked] = useState<boolean>(false);

  const triggerDogRunAnimation = (): void => {
    if (isDogIconClicked) {
      setIsDogIconClicked(false);

      return;
    }

    setIsDogIconClicked(!isDogIconClicked);
  };

  return (
    <FaDog className={cn(styles.icon, {[styles.dogRunAnimation]: isDogIconClicked})} onClick={triggerDogRunAnimation}/>
  );
}
