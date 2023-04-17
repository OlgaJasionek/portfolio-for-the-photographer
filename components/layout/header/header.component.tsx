import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const navLinks = [
  { name: "Home", id: 2, path: "/" },
  { name: "Portfolio", id: 1, path: "/portfolio" },
  { name: "O mnie", id: 4, path: "/about-me" },
  { name: "Oferta", id: 5, path: "/offer" },
  { name: "Kontakt", id: 3, path: "/contact" },
];

type Props = {
  onOpenSideMenu: () => void;
};

const Header = ({ onOpenSideMenu }: Props) => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <button className={styles.burger} onClick={onOpenSideMenu}>
              <img src='/icons/burger.svg' alt='burger-button' />
            </button>

            <div className={styles.socialMedia}>
              <Link href={"https://www.facebook.com/natalia.jasionek"}>
                <img src='/icons/facebook.svg' alt='facebook-icon' />
              </Link>
              <Link href={"https://www.instagram.com/art_photography_by_nat/"}>
                <img src='/icons/instagram.svg' alt='instagram-icon' />
              </Link>
            </div>
          </div>
          <div>
            <Link href='/'>
              <Image
                className={styles.logo}
                src='/img/logo1.svg'
                width='400'
                height='175'
                alt='logo'
              />
            </Link>
          </div>
          <nav>
            <ul className={styles.nav}>
              {navLinks.map(link => (
                <li key={link.id}>
                  <Link
                    className={classnames(styles.linkUnderline, {
                      [styles.active]: link.path === pathName,
                    })}
                    href={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
