import { FC, ReactElement } from 'react';
import { useTranslation } from 'app/i18n';
import { Container } from 'components/Container';
import { flagVideos } from 'constants/flagVideos';
import styles from 'components/Footer/Footer.module.scss';

type FooterProps = {
  language: string
}

export const Footer: FC<FooterProps> = async ({ language }): Promise<ReactElement> => {
  const { t: translateFooter } = await useTranslation(language, 'footer');
  const authorName = translateFooter('authorName');
  const createdBy = translateFooter('createdBy');

  const { webm: webmFlagLink, mpeg: mpegFlagLink } = flagVideos;

  return (
    <Container>
      <footer className={styles.wrapper}>
        <div className={styles.authorAndFlagWrapper}>
          <p className={styles.authorInfo}>{createdBy} &copy;{authorName}</p>
          <video className={styles.flag} autoPlay loop muted playsInline>
            <source src={webmFlagLink} type="video/webm" />
            <source src={mpegFlagLink} type="video/mp4" />
          </video>
        </div>
      </footer>
    </Container>
  );
};
