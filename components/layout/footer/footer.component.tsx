import styles from "./footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <div className='flex-row-center'>
            <div className={styles.line} />
          </div>
          <p>{`©️ ${currentYear} Natalia Jasionek Fotografia. Wszystkie prawa zastrzeżone.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
