import { ReactElement } from 'react';
import { Container } from 'components/Container';
import { useTranslations } from 'next-intl';
import ukFlag from 'images/UkFlag.gif';
import styles from 'components/Footer/Footer.module.scss';
import Image from 'next/image';

export const Footer = (): ReactElement => {
  const translateFooter = useTranslations('Footer');
  const authorName = translateFooter('authorName');
  const createdBy = translateFooter('createdBy');

  return (
    <Container>
      <footer className={styles.wrapper}>
        <div className={styles.authorAndFlagWrapper}>
          <p className={styles.authorInfo}>{createdBy} &copy;{authorName}</p>
          <Image alt='Flag of Ukraine' className={styles.flag} src={ukFlag}/>
        </div>
      </footer>
    </Container>
  );
};
