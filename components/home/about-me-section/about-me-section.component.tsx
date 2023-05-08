import classnames from "classnames";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Button from "@/common/components/button/button.component";
import Marker from "@/common/components/marker/marker.component";

import styles from "./about-me-section.module.scss";

const AboutMeSection = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <motion.div
            className={styles.content}
            initial={{ y: 200, opacity: 0.2 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, bounce: 0.1, type: "spring" },
            }}
            viewport={{ once: true }}>
            <div className={styles.text}>
              <Marker text='O MNIE' />
              <h1 className={classnames(styles.title, "text-xl")}>
                WITAJ W MOIM ŚWIECIE!
              </h1>
              <div className={styles.description}>
                <p>
                  Mam na imię Natalia, aparatem chwytam chwile, które budują
                  moje wspomnienia. Tym chciałabym podzielić się z Wami.
                </p>
              </div>
              <div className={styles.description}>
                <p>
                  Pozwólcie mi uwiecznić najpiękniejsze momenty Waszego życia,
                  dajcie mi możliwość aby utrwalić je dla Was i zachować w
                  pięknych kadrach, abyście mogli się nimi dzielić i przeżywać
                  jeszcze raz.
                </p>
              </div>
              <Button
                theme='contained'
                onClick={() => {
                  router.push("/o-mnie");
                }}>
                POZNAJ MNIE LEPIEJ
              </Button>
            </div>
            <div className={styles.img}></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
