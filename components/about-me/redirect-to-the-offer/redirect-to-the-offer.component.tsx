import Button from "@/common/components/button/button.component";
import styles from "./redirect-to-the-offer.module.scss";

const RedirectToOffer = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <h3 className='title'>ZOBACZ OFERTĘ!</h3>
          <p className={styles.text}>
            Tu będzie jakiś bardzo zachęcający tekst, taki że każdy będzie
            chciał zobaczyć ofertę i wybrać coś dla siebie. jest to bardzo ważne
            zdanie, trzeba się naprawdę postarać{" "}
          </p>
          <Button theme={"contained"} onClick={() => {}}>
            Zobacz ofertę
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RedirectToOffer;