import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const navLinks = [
  { name: "Home", id: 2, path: "/" },
  { name: "Portfolio", id: 1, path: "/portfolio" },
  { name: "O mnie", id: 4, path: "/o-mnie" },
  // { name: "Oferta", id: 5, path: "/oferta" },
  { name: "Kontakt", id: 3, path: "/kontakt" },
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
              <Image
                src='/icons/burger.svg'
                alt='burger-button'
                width={25}
                height={25}
              />
            </button>

            <div className={styles.socialMedia}>
              <Link
                target='_blank'
                href={"https://www.facebook.com/natalia.jasionek"}>
                <Image
                  src='/icons/facebook.svg'
                  alt='facebook-icon'
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                target='_blank'
                href={"https://www.instagram.com/art_photography_by_nat/"}>
                <Image
                  src='/icons/instagram.svg'
                  alt='instagram-icon'
                  width={25}
                  height={25}
                />
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
