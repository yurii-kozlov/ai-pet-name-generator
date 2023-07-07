import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { useTranslation } from 'app/i18n';
import { Container } from 'components/Container';
import ukFlag from 'images/UkFlag.gif';
import styles from 'components/Footer/Footer.module.scss';

type FooterProps = {
  language: string
}

export const Footer: FC<FooterProps> = async ({ language }): Promise<ReactElement> => {
  const { t: translateFooter } = await useTranslation(language, 'footer');
  const authorName = translateFooter('authorName');
  const createdBy = translateFooter('createdBy');

  return (
    <Container>
      <footer className={styles.wrapper}>
        <div className={styles.authorAndFlagWrapper}>
          <p className={styles.authorInfo}>{createdBy} &copy;{authorName}</p>
          <Image alt='Flag of Ukraine' className={styles.flag} src={ukFlag} priority/>
        </div>
      </footer>
    </Container>
  );
};
