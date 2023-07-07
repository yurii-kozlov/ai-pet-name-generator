import { ReactElement } from 'react';
import { Loader } from 'components/Loader';
import styles from 'app/[lng]/loading.module.scss';

const Spinner = (): ReactElement => (
  <div className={styles.wrapper}>
    <Loader/>
  </div>
)

export default Spinner;
