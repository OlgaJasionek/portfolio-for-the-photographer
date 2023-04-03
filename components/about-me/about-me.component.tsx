import styles from "./about-me.module.scss";

const AboutMeComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <h2 className='title'> POZNAJ MÓJ ŚWIAT</h2>
          <div className={styles.contentGrid}>
            <div className={styles.image1}></div>
            <div className={styles.text1}></div>
            <div className={styles.text2}></div>
            <div className={styles.image2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
