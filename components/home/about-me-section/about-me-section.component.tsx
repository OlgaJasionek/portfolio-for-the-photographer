import classnames from "classnames";
import { useRouter } from "next/router";

import Button from "@/common/components/button/button.component";
import Marker from "@/common/components/marker/marker.component";

import styles from "./about-me-section.module.scss";

const AboutMeSection = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.text}>
            <Marker text='O MNIE' />
            <h1 className={classnames(styles.title, "text-xl")}>
              WITAJ W MOIM ŚWIECIE!
            </h1>
            <div className={styles.description}>
              <p>
                Na imię mi Natalia, aparat to mój klucz do chwytania chwili,
                zdjęcia to cegiełki budujące mój wszechświat. Tym małym cudem
                chciałabym podzielić się z Wami.
              </p>
            </div>
            <div className={styles.description}>
              <p>
                Pozwólcie mi uwiecznić najpiękniejsze momenty Waszego życia,
                dajcie mi możliwość aby utrwalić je dla Was i zachować w
                pięknych kadrach, abyście mogli się nimi dzielić i przeżywać
                jeszcze raz, i jeszcze raz….
              </p>
            </div>
            <Button
              theme='contained'
              onClick={() => {
                router.push("/about-me");
              }}>
              POZNAJ MNIE LEPIEJ
            </Button>
          </div>
          <div className={styles.img}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
