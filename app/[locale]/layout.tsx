import { ReactElement, ReactNode } from 'react';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Footer } from 'components/Footer';
import { ThemeProvider2 } from 'components/ThemeProvider2';
import 'app/[locale]/globals.scss';

type LocaleParams = {
  params: {
    locale: string
  }
}

export function generateMetadata({ params }:LocaleParams): Metadata {
  return params.locale === 'en'
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
    locale: string
  }
}): Promise<ReactElement> {
  const locale = useLocale();
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider2>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <main>
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider2>
      </body>
    </html>
  );
};
