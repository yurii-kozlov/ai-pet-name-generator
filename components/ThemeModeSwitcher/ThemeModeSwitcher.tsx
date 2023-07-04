'use client';

import { useTheme } from 'next-themes';
import { ReactElement, useEffect, useState } from 'react';

export const ThemeModeSwitcher = (): ReactElement | null => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <button onClick={(): void => setTheme('light')} type="button">Light Mode</button>
      <button onClick={(): void => setTheme('dark')} type="button">Dark Mode</button>
    </div>
  )
};
