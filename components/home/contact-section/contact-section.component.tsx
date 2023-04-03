import classnames from "classnames";

import Button from "@/common/components/button/button.component";
import Marker from "@/common/components/marker/marker.component";

import styles from "./contact-section.module.scss";

const ContactSection = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.marker}>
              <Marker text='KONTAKT' />
            </div>
            <h2 className={classnames("title", "text-center")}>
              WASZA HISTORIA JEST WYJĄTKOWA
            </h2>
            <div className={styles.text}>
              <p>
                W naszej pracy nie znajdziecie nieszczerych chwil i niezręcznych
                uśmiechów. Dlaczego? Ponieważ później spojrzycie na te zdjęcia i
                nie rozpoznacie siebie. Dlatego skoncentrujemy się na Was i
                Waszej miłości. Prawdziwej. Surowej. A jeśli tak jak my
                jesteście marzycielami i szukacie czegoś prawdziwie
                autentycznego, ponadczasowego i artystycznego. Zróbmy to!
              </p>
            </div>

            <div className={styles.btn}>
              <Button theme='contained' onClick={() => {}}>
                NAPISZ DO MNIE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
