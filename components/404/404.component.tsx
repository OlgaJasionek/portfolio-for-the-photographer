import Link from "next/link";
import Image from "next/image";

import styles from "./404.module.scss";

const NotFoundComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <p className='text-xxxl'>404</p>
          <h1 className='text-l'>Strona nie została znaleziona.</h1>
          <p className='text-light'>Wygląda na to, że niczego tutaj nie ma.</p>
          <Link className={styles.link} href={"/"}>
            <Image
              src='/icons/arrow-brown-left.svg'
              alt='arrow icon'
              width={20}
              height={20}
            />
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
