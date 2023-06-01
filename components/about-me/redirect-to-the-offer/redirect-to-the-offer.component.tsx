import Link from "next/link";

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
            Aby móc zaproponować Wam najlepszą ofertę, chciałabym poznać Wasze
            oczekiwania. Pełną gamę możliwości przedstawię Wam w prywatnej
            wiadomości. Zachęcam również do szczegółowego opisania swoich
            potrzeb. Im lepiej będę zaznajomiona z Waszymi preferencjami, tym
            bardziej dopasowane rozwiązanie będę mogła Wam zaoferować.
          </p>
          <Link href={"/kontakt"}>
            <Button onClick={() => router.push("/kontakt")} theme={"contained"}>
              Zapytaj o ofertę
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RedirectToOffer;
