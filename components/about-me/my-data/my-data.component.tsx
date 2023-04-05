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
                kilka lat temu odkryłam swoją miłość do fotografii. W moim życiu
                pojawiła się nagle i została aż do teraz, przeradzając w jedną z
                największych moich pasji.
              </p>
              <p className={styles.textContent}>
                Cenię w niej najbardziej to że mogę odkryć wrażliwą stronę mojej
                osobowości i stworzyć z nią wiele wspaniałych wspomnień
                zamkniętych w kadrze, zawierając w sobie sobie emocje i uczucia
                które towarzyszą w danym momencie.
              </p>
            </div>
            <div className={classnames(styles.text, styles.text2)}>
              <p className={styles.textContent}>
                Fotografia jest dla mnie jednym z największych skarbów, jakie
                kiedykolwiek miałam. Zdjęcia to znacznie więcej niż tylko
                papier.
              </p>
              <p className={styles.textContent}>
                Są one cennymi pamiątkami pełnymi wspomnień, które przenoszą
                mnie w inne miejsce i czas. Moja dusza jest totalnie zakochana w
                klimatach vintage. Uwielbiam kupować rzeczy z dawnych lat i
                dawać im nowe życie, a na winyle z dobrą muzyką czy retro
                sukienkę zawsze znajdę miejsce!
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
