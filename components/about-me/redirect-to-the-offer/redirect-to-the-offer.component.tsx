import Button from "@/common/components/button/button.component";
import { useRouter } from "next/router";
import styles from "./redirect-to-the-offer.module.scss";

const RedirectToOffer = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <h3 className='title'>ZAPYTAJ O OFERTĘ!</h3>
          <p className={styles.text}>
            Żeby przedstawić Wam najlepszą ofertę, chcę poznać Wasze
            oczekiwania. Pełną ofertę przedstawię wam w prywatnym mailu.
            Zachęcam też do rozpisania się w szczegółach, im więcej będę o Was
            wiedzieć, tym lepszą ofertę będę mogła Wam zaproponować.
          </p>
          <Button
            theme={"contained"}
            onClick={() => {
              router.push("/kontakt");
            }}>
            Zapytaj o ofertę
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RedirectToOffer;
