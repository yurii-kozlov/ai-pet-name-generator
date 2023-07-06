import { ReactElement, ReactNode } from 'react';
import { Metadata } from 'next';
import { dir } from 'i18next';
import { Roboto } from 'next/font/google';
import { languages } from 'app/i18n/settings';
import { Footer } from 'components/Footer';
import { ThemeProvider2 } from 'components/ThemeProvider2';
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
  return params.lng === 'en'
  ? {
    title: 'Pet Name Generator',
    description: 'Generate your pet\'s name'
  } : {
    title: 'Генератор імен для домашніх улюбленців',
    description: 'Згенеруй ім\'я для свого улюбленця'
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
    <html dir={dir(language)} lang={language}>
      <body className={roboto.className}>
        <ThemeProvider2>
          <main>
            {children}
          </main>
          <Footer language={language}/>
        </ThemeProvider2>
      </body>
    </html>
  );
};
