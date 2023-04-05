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

const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.socialMedia}>
            <Link href={"https://www.facebook.com/natalia.jasionek"}>
              <img src='/icons/facebook.svg' alt='facebook-icon' />
            </Link>
            <Link href={"https://www.instagram.com/art_photography_by_nat/"}>
              <img
                className={styles.icon}
                src='/icons/instagram.svg'
                alt='instagram-icon'
              />
            </Link>
          </div>
          <div>
            <Link href='/'>
              <img src='/img/logo1.svg' width='400' height='175' alt='logo' />
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
