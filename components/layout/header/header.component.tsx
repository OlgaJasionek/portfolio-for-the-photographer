import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import { useRouter } from "next/router";

import Logo from "../../../assets/img/logo1.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";

import styles from "./header.module.scss";

const navLinks = [
  { name: "Home", active: false, id: 2, path: "/" },
  { name: "Portfolio", active: false, id: 1, path: "/portfolio" },
  { name: "Kontakt", active: false, id: 3, path: "/contact" },
  { name: "O mnie", active: false, id: 4, path: "/about-me" },
];

const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.socialMedia}>
            <Link href={"/"}>
              <Image src={FacebookIcon} alt='facebook-icon' />
            </Link>
            <Link href={"/"}>
              <Image
                className={styles.icon}
                src={InstagramIcon}
                alt='instagram-icon'
              />
            </Link>
          </div>
          <div>
            <Link href='/'>
              <Image src={Logo} width='500' height='175' alt='logo' />
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
