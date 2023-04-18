import classnames from "classnames";

import styles from "./my-data.module.scss";

const MyData = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <h2 className='title'> POZNAJ MÓJ ŚWIAT</h2>
          <div className={styles.contentGrid}>
            <div className={classnames(styles.image, styles.image1)}></div>
            <div className={classnames(styles.text, styles.text1)}>
              <h2>Cześć jestem Natalia,</h2>
              <p className={styles.textContent}>
                fotografia to moja pasja, która łączy wszystko co w życiu
                kocham. Uwielbiam uwieczniać w niezapomnianych kadrach dzikość
                natury, piękno niezrównanej przestrzeni, zachwycające barwy
                otaczającego nas świata.
              </p>
              <p className={styles.textContent}>
                Z miłości do gór i otwartych przestrzeni narodziło się
                uwielbienie do zdjęć zatrzymujących tę dzikość w kadrze. To one
                przenoszą tę magię do naszych domów, telefonów…
              </p>
            </div>
            <div className={classnames(styles.text, styles.text2)}>
              <p className={styles.textContent}>
                To jednak nie wszystko… Niezrównane bogactwo inspiracji niosą ze
                sobą ludzkie emocje. Najpiękniejsze chwile, wyraziste emocje,
                niezapomniane momenty…
              </p>
              <p className={styles.textContent}>
                Możliwość zatrzymania na zdjęciu tych milisekund kipiących
                uczuciami to kolejny poziom magii. Gra świateł, gra uczuć,
                sekundy zatrzymane na wieczność - Moją pasją jest możliwość
                dzielenia się tym cudem z Wami.
              </p>
            </div>
            <div className={classnames(styles.image, styles.image2)}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyData;
