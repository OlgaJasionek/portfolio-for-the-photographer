import classnames from "classnames";
import Link from "next/link";

import Button from "@/common/components/button/button.component";
import Subtitle from "@/common/components/subtitle/subtitle.component";

import styles from "./contact-section.module.scss";
import { useRouter } from "next/router";

const ContactSection = () => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.marker}>
              <Subtitle text='KONTAKT' />
            </div>
            <h2 className={classnames("title", "text-center")}>
              POZWÓL MI UWIECZNIĆ TWOJE WSPOMNIENIA..
            </h2>
            <div className={styles.text}>
              <p>
                Napisz do mnie, jeśli chcesz poznać szczegóły lub masz pytania
                odnośnie sesji. Jestem tu dla Ciebie - chętnie wyjaśnię wszelkie
                wątpliwości oraz prześlę pełną ofertę. Skontaktuj się ze mną 🙂
              </p>
            </div>
            <Link className={styles.btn} href='/kontakt'>
              <Button onClick={() => router.push("/kontakt")} theme='contained'>
                NAPISZ DO MNIE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
