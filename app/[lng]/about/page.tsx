import { FC, ReactElement } from 'react';
import { useTranslation } from 'app/i18n/index';
import { LanguageSwitcher } from 'components/LanguageSwitcher';

type AboutProps = {
  params: {
    lng: string
  }
}

const About: FC<AboutProps> = async ({ params }): Promise<ReactElement> => {
  const { t } = await useTranslation(params.lng, 'about-page');

  return (
    <>
      <LanguageSwitcher language={params.lng}/>
      <h1>{t('title')}</h1>
    </>
  )
}

export default About;
