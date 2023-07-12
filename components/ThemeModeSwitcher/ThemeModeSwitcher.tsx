'use client';

import { useTheme } from 'next-themes';
import { ReactElement, useEffect, useState } from 'react';
import { Moon, Sun } from 'tabler-icons-react';
import cn from 'classnames';
import { Theme } from 'enums/Theme';
import styles from 'components/ThemeModeSwitcher/ThemeModeSwitcher.module.scss';

export const ThemeModeSwitcher = (): ReactElement | null => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const setLightTheme = (): void => setTheme(Theme.Light);
  const setDarkTheme = (): void => setTheme(Theme.Dark);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === Theme.Light ? (
        <button
          className={cn(styles.button, styles.buttonSetDark)}
          onClick={setDarkTheme}
          type="button"
        >
          <Moon className={cn(styles.icon, styles.moonIcon)}/>
        </button>
      ): (
        <button
          className={cn(styles.button, styles.buttonSetLight)}
          onClick={setLightTheme}
          type="button"
        >
          <Sun className={cn(styles.icon, styles.sunIcon)}/>
        </button>
      )}
    </div>
  )
};
