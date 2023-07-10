'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactElement, ReactNode } from 'react';

type ThemeProvider2Props = {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProvider2Props): ReactElement {
  return <NextThemeProvider defaultTheme="dark" disableTransitionOnChange>{children}</NextThemeProvider>
};
