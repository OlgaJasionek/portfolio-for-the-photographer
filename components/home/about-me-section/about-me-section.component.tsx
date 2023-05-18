import classnames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";

import Button from "@/common/components/button/button.component";
import Subtitle from "@/common/components/subtitle/subtitle.component";

import styles from "./about-me-section.module.scss";

const AboutMeSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <motion.div
            className={styles.content}
            initial={{ y: 100, opacity: 0.2 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5, bounce: 0.1, type: "spring" },
            }}
            viewport={{ once: true }}>
            <div className={styles.text}>
              <Subtitle text='O MNIE' />
              <h1 className={classnames(styles.title, "text-xl")}>
                WITAJ W MOIM ŚWIECIE!
              </h1>
              <div className={styles.description}>
                <p>
                  Nazywam się Natalia. Moją pasją jest uwiecznianie chwil za
                  pomocą fotografii, które tworzą niezapomniane wspomnienia.
                </p>
              </div>
              <div className={styles.description}>
                <p>
                  Pozwólcie mi utrwalić najpiękniejsze momenty Waszego życia
                  oraz zachować je dla Was w pięknych kadrach, abyście mogli się
                  nimi dzielić i przeżywać ponownie.
                </p>
              </div>
              <Link href='/o-mnie'>
                <Button theme='contained'>POZNAJ MNIE LEPIEJ</Button>
              </Link>
            </div>
            <div className={styles.img}></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
