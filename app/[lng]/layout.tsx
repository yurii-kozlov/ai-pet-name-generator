import { ReactElement, ReactNode } from 'react';
import { Metadata } from 'next';
import { dir } from 'i18next';
import { Roboto } from 'next/font/google';
import { languages } from 'app/i18n/settings';
import { Language } from 'enums/Language';
import { Footer } from 'components/Footer';
import { ThemeProvider } from 'components/ThemeProvider';
import 'app/[lng]/globals.scss';

type LocaleParams = {
  params: {
    lng: string
  }
}

type StaticParams = {
  lng: string
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return languages.map((lng) => ({ lng }))
}

export function generateMetadata({ params }:LocaleParams): Metadata {
  return params.lng === Language.English
  ? {
    title: 'Pet Name Generator',
    description: 'Generate your pet\'s name',
    manifest: '/api/en',
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#ffffff',
  } : {
    title: 'Генератор імен для домашніх улюбленців',
    description: 'Згенеруй ім\'я для свого улюбленця',
    manifest: '/api/en',
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#ffffff',
  }
}

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
  style: 'normal'
});

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode,
  params: {
    lng: string
  }
}): Promise<ReactElement> {
  const { lng: language } = params;

  return (
    <html dir={dir(language)} lang={language} suppressHydrationWarning>
      <body className={roboto.className}>
        {/* <link href="/manifest.json" rel="manifest" />
        <link href="/apple-icon.png" rel="apple-touch-icon" sizes="128x128" /> */}
        <ThemeProvider>
          <main>
            {children}
          </main>
          <Footer language={language}/>
        </ThemeProvider>
      </body>
      <script src="api/en/sw" type="module" async />
    </html>
  );
};
