'use client'

import { ThemeProvider } from 'next-themes'
import { ReactElement, ReactNode } from 'react'

type ThemeProvider2Props = {
  children: ReactNode;
}

export function ThemeProvider2({ children }: ThemeProvider2Props): ReactElement {
  return <ThemeProvider disableTransitionOnChange>{children}</ThemeProvider>
};
