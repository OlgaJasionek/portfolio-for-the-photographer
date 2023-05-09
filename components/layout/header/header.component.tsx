import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import { useRouter } from "next/router";

import { PathsName } from "@/common/types/paths.enum";
import { pathsNameTranslations } from "@/common/helpers/paths.translations";

import styles from "./header.module.scss";
import IconButton from "@/common/components/icon-button/icon-button.component";

const navLinks = [
  { name: "Home", id: 1, path: PathsName.Home },
  { name: "Portfolio", id: 2, path: PathsName.Portfolio },
  { name: "O mnie", id: 3, path: PathsName.AboutMe },
  { name: "Kontakt", id: 4, path: PathsName.Contact },
  // { name: "Oferta", id: 5, path: "/oferta" },
];

type Props = {
  onOpenSideMenu: () => void;
};

const Header = ({ onOpenSideMenu }: Props) => {
  const router = useRouter();
  const pathName: string = router.pathname;

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.icons}>
            <div className={styles.burger}>
              <IconButton
                onClick={onOpenSideMenu}
                width={25}
                height={25}
                src='/icons/burger.svg'
                alt='burger-icon'
                padding='0'
              />
            </div>

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
                      [styles.active]:
                        pathsNameTranslations[link.path] === pathName,
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
