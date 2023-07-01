import { ReactElement, ReactNode } from 'react';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import 'app/globals.scss';

export const metadata: Metadata = {
  title: 'Pet Name Generator',
  description: 'Generate your new pet\'s name'
}

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
  style: 'normal'
});

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
