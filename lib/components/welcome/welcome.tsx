import Image from 'next/image';
import styles from './welcome.module.css';

export const Welcome = () => {
  return (
      <div className={styles.container} id='welcome'>
        <div className={styles.wrapper}>
          <h1 className={styles.message}>Hi, I&#39;m <span className={styles.bold}>Reece</span>.</h1>
          <Image className={styles.avatar} src='/images/svg/avatar.svg' alt='Avatar' width={0} height={0} />
          <h1 className={styles["sub-message"]}>I&#39;m a <span className={styles.bold}>Front End<br/>Developer</span>.</h1>
        </div>
      </div>
  )
};
