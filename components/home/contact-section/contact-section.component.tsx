import classnames from "classnames";
import { useRouter } from "next/router";

import Button from "@/common/components/button/button.component";
import Marker from "@/common/components/marker/marker.component";

import styles from "./contact-section.module.scss";

const ContactSection = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.marker}>
              <Marker text='KONTAKT' />
            </div>
            <h2 className={classnames("title", "text-center")}>
              POZWÓL MI ZACHOWAĆ TWOJE WSPOMNIENIA
            </h2>
            <div className={styles.text}>
              <p>
                Napisz do mnie, jeśli chcesz poznać szczegóły i masz pytania
                odnośnie sesji. Jestem tu dla Ciebie - chętnie odpowiem na
                wszelkie pytania oraz prześlę pełną ofertę. Skontaktuj się ze
                mną 🙂
              </p>
            </div>

            <div className={styles.btn}>
              <Button
                theme='contained'
                onClick={() => {
                  router.push("/kontakt");
                }}>
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
