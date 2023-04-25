import Image from "next/image";
import Link from "next/link";

import styles from "./contact.module.scss";

const ContactComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.content}>
          <h2 className='title'>KONTAKT</h2>
          <ul className={styles.list}>
            <li>Natalia Jasionek</li>
            <li>Białystok i okolice</li>
            <li>
              <a href='mailto:nataliajasionekphotography@gmail.com'>
                nataliajasionekphotography@gmail.com
              </a>
            </li>
            <li>
              <a href='tel:888-555-444'>888-555-444</a>
            </li>
            <li>
              <Link
                target='_blank'
                href='https://www.instagram.com/art_photography_by_nat/'>
                <Image
                  className={styles.icon}
                  src='/icons/instagram.svg'
                  alt='instagram-icon'
                  width={35}
                  height={35}
                />
              </Link>
              <Link
                target='_blank'
                href='https://www.facebook.com/natalia.jasionek'>
                <Image
                  className={styles.icon}
                  src='/icons/facebook.svg'
                  alt='facebook-icon'
                  width={35}
                  height={35}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
