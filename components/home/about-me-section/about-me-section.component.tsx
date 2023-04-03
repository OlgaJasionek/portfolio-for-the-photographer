import classnames from "classnames";

import Button from "@/common/components/button/button.component";
import Marker from "@/common/components/marker/marker.component";

import styles from "./about-me-section.module.scss";
import { useRouter } from "next/router";

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
                Z tej strony Natalia — romantyczna dusza, która mocno wierzy w
                miłość i siłę uczucia. Te elementy nadają sens naszemu
                wyobrażeniu świata.
              </p>
            </div>
            <div className={styles.description}>
              <p>
                Naszym największym źródłem inspiracji są ludzie oraz ich emocje,
                a przez fotografię chcemy opowiadać piękne i szczere historie
                zakochanych w sobie osób.
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
